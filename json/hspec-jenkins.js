[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspec-jenkins/docs/Test-Hspec-Formatters-Jenkins.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides \u003ccode\u003e\u003ca\u003exmlFormatter\u003c/a\u003e\u003c/code\u003e that can be used with \u003ccode\u003e\u003ca\u003ehspecWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e import Test.Hspec.Formatters.Jenkins (xmlFormatter)\n import Test.Hspec.Runner\n\n main :: IO ()\n main = do\n   summary \u003c- withFile \"results.xml\" WriteMode $ \\h -\u003e do\n     let c = defaultConfig\n           { configFormatter = xmlFormatter\n           , configHandle = h\n           }\n     hspecWith c spec\n   unless (summaryFailures summary == 0) $\n     exitFailure\n\u003c/pre\u003e\u003cp\u003eAn example project is located in \u003ccode\u003eexample\u003c/code\u003e directory.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Hspec.Formatters.Jenkins",
        "fct-package": "hspec-jenkins",
        "fct-signature": "module",
        "fct-source": "src/Test-Hspec-Formatters-Jenkins.html",
        "fct-type": "module",
        "title": "Jenkins"
      },
      "index": {
        "description": "This module provides xmlFormatter that can be used with hspecWith Example usage import Test.Hspec.Formatters.Jenkins xmlFormatter import Test.Hspec.Runner main IO main do summary withFile results.xml WriteMode do let defaultConfig configFormatter xmlFormatter configHandle hspecWith spec unless summaryFailures summary exitFailure An example project is located in example directory",
        "hierarchy": "Test Hspec Formatters Jenkins",
        "module": "Test.Hspec.Formatters.Jenkins",
        "name": "Jenkins",
        "normalized": "",
        "package": "hspec-jenkins",
        "partial": "Jenkins",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hspec-jenkins/docs/Test-Hspec-Formatters-Jenkins.html#v:xmlFormatter",
      "description": {
        "fct-descr": "\u003cp\u003eFormat Hspec result to Jenkins-friendly XML.\n\u003c/p\u003e",
        "fct-module": "Test.Hspec.Formatters.Jenkins",
        "fct-package": "hspec-jenkins",
        "fct-signature": "Formatter",
        "fct-source": "src/Test-Hspec-Formatters-Jenkins.html#xmlFormatter",
        "fct-type": "function",
        "title": "xmlFormatter"
      },
      "index": {
        "description": "Format Hspec result to Jenkins-friendly XML",
        "hierarchy": "Test Hspec Formatters Jenkins",
        "module": "Test.Hspec.Formatters.Jenkins",
        "name": "xmlFormatter",
        "normalized": "",
        "package": "hspec-jenkins",
        "partial": "Formatter",
        "signature": ""
      }
    }
  }
]