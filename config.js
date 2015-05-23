System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "modules": "common",
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.4.7",
    "babel-runtime": "npm:babel-runtime@5.4.7",
    "core-js": "npm:core-js@0.8.4",
    "path": "github:jspm/nodelibs-path@0.1.0",
    "whacko": "npm:whacko@0.18.1",
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.2.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:CSSselect@0.4.1": {
      "CSSwhat": "npm:CSSwhat@0.4.7",
      "domutils": "npm:domutils@1.4.3"
    },
    "npm:CSSwhat@0.4.7": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.2.2": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.5",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:core-js@0.8.4": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:dom-serializer@0.1.0": {
      "domelementtype": "npm:domelementtype@1.1.3",
      "entities": "npm:entities@1.1.1"
    },
    "npm:domutils@1.4.3": {
      "domelementtype": "npm:domelementtype@1.1.3"
    },
    "npm:domutils@1.5.1": {
      "dom-serializer": "npm:dom-serializer@0.1.0",
      "domelementtype": "npm:domelementtype@1.1.3"
    },
    "npm:entities@1.1.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:lodash@2.4.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:parse5@1.4.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:whacko@0.18.1": {
      "CSSselect": "npm:CSSselect@0.4.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "domutils": "npm:domutils@1.5.1",
      "lodash": "npm:lodash@2.4.2",
      "parse5": "npm:parse5@1.4.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});

