SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  globalEvaluationScope: false,
  transpiler: "plugin-babel",

  map: {
    "angular": "github:angular/bower-angular@1.5.0",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "paperhive-sources": "npm:paperhive-sources@4.0.1",
    "pdfjs-dist": "github:mozilla/pdfjs-dist@1.4.44",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.2",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "ts": "github:frankwallis/plugin-typescript@3.0.1",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha"
  },
  typescriptOptions: {
    "tsconfig": true,
    "typeCheck": true
  },

  packages: {
    "src": {
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "ts"
        }
      }
    },
    "github:frankwallis/plugin-typescript@3.0.1": {
      "map": {
        "typescript": "npm:typescript@1.9.0-dev.20160206"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    }
  }
});