import api from'jspm/api';
import whacko from 'whacko';
import glob from 'glob';
import fs from 'fs';
import url from 'url';
import path from 'path';


var pluginName = 'view';
var loader     = api.Builder().loader;

export function bundleJS(configs) {
  configs.forEach(function(cfg) {
    api.bundle(cfg.moduleExpression, cfg.fileName, cfg.options);
  });
}


export function bundleTemplate(pattern, outfile) {
  var templates = [];

  glob
    .sync(pattern, {})
    .forEach(function(file) {
      var content = fs.readFileSync(file, {
        encoding: 'utf8'
      });
      var $ = whacko.load(content);
      var tid = getTemplateId(file);

      $('template').attr('id', tid);
      var template = $.html('template');
      templates.push(template);
    });

  fs.writeFileSync(outfile, templates.join('\n'));
}


function getTemplateId(file) {
  var baseURL = loader.baseURL.replace(/\\/g, '/') + '/';
  var address = baseURL +  file;
  return getModuleName(address, baseURL);
}

function getModuleName(address, baseURL) {

  var paths = loader.paths;

  if (pluginName) {
    var extension = address.split('/').pop();
    extension = extension.substr(extension.lastIndexOf('.'));
    if (extension != address && extension != '.js')
      address = address.substr(0, address.length - extension.length) + '.js';
  }

  var pathMatch, pathMatchLength = 0;
  var curMatchlength;
  for (var p in loader.paths) {

    var curPath = decodeURI(url.resolve(encodeURI(baseURL),paths[p].replace(/\\/g, '/')));

    var wIndex = curPath.indexOf('*');
    if (wIndex === -1) {
      if (address === curPath) {
        curMatchLength = curPath.split('/').length;
        if (curMatchLength > pathMatchLength) {
          pathMatch = p;
          pathMatchLength = curMatchLength;
        }
      }
    } else {
      if (address.substr(0, wIndex) === curPath.substr(0, wIndex) && address.substr(address.length - curPath.length + wIndex + 1) === curPath.substr(wIndex + 1)) {
        curMatchLength = curPath.split('/').length;
        if (curMatchLength > pathMatchLength) {
          pathMatch = p.replace('*', address.substr(wIndex, address.length - curPath.length + 1));
          pathMatchLength = curMatchLength;
        }
      }
    }
  }

  if (!pathMatch)
    throw "Unable to calculate path for " + address;

  if (pluginName)
    pathMatch += extension + '!' + (pluginName == extension ? '' : pluginName);

  return pathMatch;
}

