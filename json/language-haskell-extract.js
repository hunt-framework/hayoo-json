[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-haskell-extract/docs/Language-Haskell-Extract.html#",
      "description": {
        "fct-module": "Language.Haskell.Extract",
        "fct-package": "language-haskell-extract",
        "fct-signature": "module",
        "fct-source": "src/Language-Haskell-Extract.html",
        "fct-type": "module",
        "title": "Extract"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Extract",
        "module": "Language.Haskell.Extract",
        "name": "Extract",
        "normalized": "",
        "package": "language-haskell-extract",
        "partial": "Extract",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-haskell-extract/docs/Language-Haskell-Extract.html#v:functionExtractor",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the names and functions from the module where this function is called.\n\u003c/p\u003e\u003cpre\u003e foo = \"test\"\n boo = \"testing\"\n bar = $(functionExtractor \"oo$\")\n\u003c/pre\u003e\u003cp\u003ewill automagically extract the functions ending with \u003ca\u003eoo\u003c/a\u003e such as\n\u003c/p\u003e\u003cpre\u003e bar = [(\"foo\",foo), (\"boo\",boo)]\n\u003c/pre\u003e",
        "fct-module": "Language.Haskell.Extract",
        "fct-package": "language-haskell-extract",
        "fct-signature": "String -\u003e ExpQ",
        "fct-source": "src/Language-Haskell-Extract.html#functionExtractor",
        "fct-type": "function",
        "title": "functionExtractor"
      },
      "index": {
        "description": "Extract the names and functions from the module where this function is called foo test boo testing bar functionExtractor oo will automagically extract the functions ending with oo such as bar foo foo boo boo",
        "hierarchy": "Language Haskell Extract",
        "module": "Language.Haskell.Extract",
        "name": "functionExtractor",
        "normalized": "String-\u003eExpQ",
        "package": "language-haskell-extract",
        "partial": "Extractor",
        "signature": "String-\u003eExpQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-haskell-extract/docs/Language-Haskell-Extract.html#v:functionExtractorMap",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the names and functions from the module and apply a function to every pair.\n\u003c/p\u003e\u003cp\u003eIs very useful if the common denominator of the functions is just a type class.\n\u003c/p\u003e\u003cpre\u003e secondTypeclassTest =\n   do let expected = [\"45\", \"88.8\", \"\\\"hej\\\"\"]\n          actual = $(functionExtractorMap \"^tc\" [|\\n f -\u003e show f|] )\n      expected @=? actual\n \n tcInt :: Integer\n tcInt = 45\n \n tcDouble :: Double\n tcDouble = 88.8\n \n tcString :: String\n tcString = \"hej\"\n\u003c/pre\u003e",
        "fct-module": "Language.Haskell.Extract",
        "fct-package": "language-haskell-extract",
        "fct-signature": "String -\u003e ExpQ -\u003e ExpQ",
        "fct-source": "src/Language-Haskell-Extract.html#functionExtractorMap",
        "fct-type": "function",
        "title": "functionExtractorMap"
      },
      "index": {
        "description": "Extract the names and functions from the module and apply function to every pair Is very useful if the common denominator of the functions is just type class secondTypeclassTest do let expected hej actual functionExtractorMap tc show expected actual tcInt Integer tcInt tcDouble Double tcDouble tcString String tcString hej",
        "hierarchy": "Language Haskell Extract",
        "module": "Language.Haskell.Extract",
        "name": "functionExtractorMap",
        "normalized": "String-\u003eExpQ-\u003eExpQ",
        "package": "language-haskell-extract",
        "partial": "Extractor Map",
        "signature": "String-\u003eExpQ-\u003eExpQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-haskell-extract/docs/Language-Haskell-Extract.html#v:locationModule",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the name of the current module.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.Extract",
        "fct-package": "language-haskell-extract",
        "fct-signature": "ExpQ",
        "fct-source": "src/Language-Haskell-Extract.html#locationModule",
        "fct-type": "function",
        "title": "locationModule"
      },
      "index": {
        "description": "Extract the name of the current module",
        "hierarchy": "Language Haskell Extract",
        "module": "Language.Haskell.Extract",
        "name": "locationModule",
        "normalized": "",
        "package": "language-haskell-extract",
        "partial": "Module",
        "signature": ""
      }
    }
  }
]