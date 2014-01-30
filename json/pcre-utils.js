[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcre-utils/docs/Text-Regex-PCRE-ByteString-Utils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module implementing regexp-based split and substitute.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esubstituteCompile \"(a+)\" \"lapin\" \"'\\\\1'\"\n\u003c/code\u003e\u003c/strong\u003eRight \"l'a'pin\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esplitCompile \"\\\\d\" \"a1b2c3\"\n\u003c/code\u003e\u003c/strong\u003eRight [\"a\",\"b\",\"c\"]\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Text.Regex.PCRE.ByteString.Utils",
        "fct-package": "pcre-utils",
        "fct-signature": "module",
        "fct-source": "src/Text-Regex-PCRE-ByteString-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "module implementing regexp-based split and substitute substituteCompile lapin Right pin splitCompile a1b2c3 Right",
        "hierarchy": "Text Regex PCRE ByteString Utils",
        "module": "Text.Regex.PCRE.ByteString.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "pcre-utils",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcre-utils/docs/Text-Regex-PCRE-ByteString-Utils.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003eSplits strings, using a \u003ccode\u003e\u003ca\u003eRegex\u003c/a\u003e\u003c/code\u003e as delimiter.\n\u003c/p\u003e",
        "fct-module": "Text.Regex.PCRE.ByteString.Utils",
        "fct-package": "pcre-utils",
        "fct-signature": "Regex-\u003e ByteString-\u003e IO (Either String [ByteString])",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "Splits strings using Regex as delimiter",
        "hierarchy": "Text Regex PCRE ByteString Utils",
        "module": "Text.Regex.PCRE.ByteString.Utils",
        "name": "split",
        "normalized": "Regex-\u003eByteString-\u003eIO(Either String[ByteString])",
        "package": "pcre-utils",
        "partial": "",
        "signature": "Regex-\u003eByteString-\u003eIO(Either String[ByteString])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcre-utils/docs/Text-Regex-PCRE-ByteString-Utils.html#v:splitCompile",
      "description": {
        "fct-descr": "\u003cp\u003eCompiles the regular expression (using default options) and \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Text.Regex.PCRE.ByteString.Utils",
        "fct-package": "pcre-utils",
        "fct-signature": "ByteString-\u003e ByteString-\u003e IO (Either String [ByteString])",
        "fct-type": "function",
        "title": "splitCompile"
      },
      "index": {
        "description": "Compiles the regular expression using default options and split",
        "hierarchy": "Text Regex PCRE ByteString Utils",
        "module": "Text.Regex.PCRE.ByteString.Utils",
        "name": "splitCompile",
        "normalized": "ByteString-\u003eByteString-\u003eIO(Either String[ByteString])",
        "package": "pcre-utils",
        "partial": "Compile",
        "signature": "ByteString-\u003eByteString-\u003eIO(Either String[ByteString])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcre-utils/docs/Text-Regex-PCRE-ByteString-Utils.html#v:substitute",
      "description": {
        "fct-descr": "\u003cp\u003eSubstitutes values matched by a \u003ccode\u003e\u003ca\u003eRegex\u003c/a\u003e\u003c/code\u003e. References can be used.\n\u003c/p\u003e\u003cp\u003eIt doesn't support anything else than global substitution for now ..\n\u003c/p\u003e",
        "fct-module": "Text.Regex.PCRE.ByteString.Utils",
        "fct-package": "pcre-utils",
        "fct-signature": "Regex-\u003e ByteString-\u003e ByteString-\u003e IO (Either String ByteString)",
        "fct-type": "function",
        "title": "substitute"
      },
      "index": {
        "description": "Substitutes values matched by Regex References can be used It doesn support anything else than global substitution for now",
        "hierarchy": "Text Regex PCRE ByteString Utils",
        "module": "Text.Regex.PCRE.ByteString.Utils",
        "name": "substitute",
        "normalized": "Regex-\u003eByteString-\u003eByteString-\u003eIO(Either String ByteString)",
        "package": "pcre-utils",
        "partial": "",
        "signature": "Regex-\u003eByteString-\u003eByteString-\u003eIO(Either String ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pcre-utils/docs/Text-Regex-PCRE-ByteString-Utils.html#v:substituteCompile",
      "description": {
        "fct-descr": "\u003cp\u003eCompiles the regular expression (using default options) and \u003ccode\u003e\u003ca\u003esubstitute\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
        "fct-module": "Text.Regex.PCRE.ByteString.Utils",
        "fct-package": "pcre-utils",
        "fct-signature": "ByteString-\u003e ByteString-\u003e ByteString-\u003e IO (Either String ByteString)",
        "fct-type": "function",
        "title": "substituteCompile"
      },
      "index": {
        "description": "Compiles the regular expression using default options and substitute",
        "hierarchy": "Text Regex PCRE ByteString Utils",
        "module": "Text.Regex.PCRE.ByteString.Utils",
        "name": "substituteCompile",
        "normalized": "ByteString-\u003eByteString-\u003eByteString-\u003eIO(Either String ByteString)",
        "package": "pcre-utils",
        "partial": "Compile",
        "signature": "ByteString-\u003eByteString-\u003eByteString-\u003eIO(Either String ByteString)"
      }
    }
  }
]