SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  globalEvaluationScope: false,
  transpiler: "plugin-babel",
  typescriptOptions: {
    "tsconfig": true,
    "typeCheck": true
  },

  map: {
    "angular": "github:angular/bower-angular@1.4.9",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "paperhive-sources": "npm:paperhive-sources@4.0.1",
    "pdfjs": "github:mozilla/pdfjs-dist@1.4.37",
    "pdfjs-dist": "github:mozilla/pdfjs-dist@1.4.37",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.2",
    "plugin-typescript": "github:frankwallis/plugin-typescript@2.5.8",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "ts": "github:frankwallis/plugin-typescript@2.5.8",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha"
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
    },
    "github:frankwallis/plugin-typescript@2.5.8": {
      "map": {
        "typescript": "npm:typescript@1.7.5"
      }
    }
  }
});