[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-utils/docs/Text-Parsec-Utils.html#",
      "description": {
        "fct-module": "Text.Parsec.Utils",
        "fct-package": "parsec-utils",
        "fct-signature": "module",
        "fct-source": "src/Text-Parsec-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parsec Utils",
        "module": "Text.Parsec.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "parsec-utils",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-utils/docs/Text-Parsec-Utils.html#v:-36-:",
      "description": {
        "fct-descr": "\u003cp\u003eSynonym for \u003ccode\u003e\u003ca\u003e\u003c*\u003c/a\u003e\u003c/code\u003e\n Identical to \u003ccode\u003e\u003ca\u003e.:\u003c/a\u003e\u003c/code\u003e but with lower precedence.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseString (show $: (+) .: int -: space +: int) \"1 2\" == \"3\"\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Utils",
        "fct-package": "parsec-utils",
        "fct-signature": "(a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Text-Parsec-Utils.html#%24%3A",
        "fct-type": "function",
        "title": "($:)"
      },
      "index": {
        "description": "Synonym for Identical to but with lower precedence parseString show int space int True",
        "hierarchy": "Text Parsec Utils",
        "module": "Text.Parsec.Utils",
        "name": "($:) $:",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "parsec-utils",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-utils/docs/Text-Parsec-Utils.html#v:-43-:",
      "description": {
        "fct-descr": "\u003cp\u003eSynonym for \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseString ((,) .: char 'a' +: int) \"a1\" == ('a', 1)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Utils",
        "fct-package": "parsec-utils",
        "fct-signature": "f (a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Text-Parsec-Utils.html#%2B%3A",
        "fct-type": "function",
        "title": "(+:)"
      },
      "index": {
        "description": "Synonym for parseString char int a1 True",
        "hierarchy": "Text Parsec Utils",
        "module": "Text.Parsec.Utils",
        "name": "(+:) +:",
        "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
        "package": "parsec-utils",
        "partial": "",
        "signature": "f(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-utils/docs/Text-Parsec-Utils.html#v:-45-:",
      "description": {
        "fct-descr": "\u003cp\u003eSynonym for \u003ccode\u003e\u003ca\u003e\u003c*\u003c/a\u003e\u003c/code\u003e\n Allows chaining parsers without the need for parentheses\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseString ((+) .: int -: space +: int) \"1 2\" == 3\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Utils",
        "fct-package": "parsec-utils",
        "fct-signature": "f a -\u003e f b -\u003e f a",
        "fct-source": "src/Text-Parsec-Utils.html#-%3A",
        "fct-type": "function",
        "title": "(-:)"
      },
      "index": {
        "description": "Synonym for Allows chaining parsers without the need for parentheses parseString int space int True",
        "hierarchy": "Text Parsec Utils",
        "module": "Text.Parsec.Utils",
        "name": "(-:) -:",
        "normalized": "a b-\u003ea c-\u003ea b",
        "package": "parsec-utils",
        "partial": "",
        "signature": "f a-\u003ef b-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-utils/docs/Text-Parsec-Utils.html#v:-60-:",
      "description": {
        "fct-descr": "\u003cp\u003eApply a parser that returns a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and parse the result with\n another parser.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseString (int \u003c: manyTill anyChar (char '9')) \"129\" == 12\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Utils",
        "fct-package": "parsec-utils",
        "fct-signature": "Parser t -\u003e Parser String -\u003e Parser t",
        "fct-source": "src/Text-Parsec-Utils.html#%3C%3A",
        "fct-type": "function",
        "title": "(\u003c:)"
      },
      "index": {
        "description": "Apply parser that returns String and parse the result with another parser parseString int manyTill anyChar char True",
        "hierarchy": "Text Parsec Utils",
        "module": "Text.Parsec.Utils",
        "name": "(\u003c:) \u003c:",
        "normalized": "Parser a-\u003eParser String-\u003eParser a",
        "package": "parsec-utils",
        "partial": "",
        "signature": "Parser t-\u003eParser String-\u003eParser t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-utils/docs/Text-Parsec-Utils.html#v:-61-:",
      "description": {
        "fct-descr": "\u003cp\u003eSynonym for \u003ccode\u003e\u003ca\u003e\u003c$\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseString (2 =: char 'a') \"a\" == 2\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Utils",
        "fct-package": "parsec-utils",
        "fct-signature": "b -\u003e f a -\u003e f b",
        "fct-source": "src/Text-Parsec-Utils.html#%3D%3A",
        "fct-type": "function",
        "title": "(=:)"
      },
      "index": {
        "description": "Synonym for parseString char True",
        "hierarchy": "Text Parsec Utils",
        "module": "Text.Parsec.Utils",
        "name": "(=:) =:",
        "normalized": "a-\u003eb c-\u003eb a",
        "package": "parsec-utils",
        "partial": "",
        "signature": "b-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-utils/docs/Text-Parsec-Utils.html#v:.:",
      "description": {
        "fct-descr": "\u003cp\u003eSynonym for \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseString ((,) .: char 'a' +: int) \"a1\" == ('a', 1)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Utils",
        "fct-package": "parsec-utils",
        "fct-signature": "(a -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Text-Parsec-Utils.html#.%3A",
        "fct-type": "function",
        "title": "(.:)"
      },
      "index": {
        "description": "Synonym for parseString char int a1 True",
        "hierarchy": "Text Parsec Utils",
        "module": "Text.Parsec.Utils",
        "name": "(.:) .:",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "parsec-utils",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-utils/docs/Text-Parsec-Utils.html#v:float",
      "description": {
        "fct-descr": "\u003cp\u003eParse a floating point number\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseString float \"-12.34\" == -12.34\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Utils",
        "fct-package": "parsec-utils",
        "fct-signature": "Parser a",
        "fct-source": "src/Text-Parsec-Utils.html#float",
        "fct-type": "function",
        "title": "float"
      },
      "index": {
        "description": "Parse floating point number parseString float True",
        "hierarchy": "Text Parsec Utils",
        "module": "Text.Parsec.Utils",
        "name": "float",
        "normalized": "",
        "package": "parsec-utils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-utils/docs/Text-Parsec-Utils.html#v:int",
      "description": {
        "fct-descr": "\u003cp\u003eParse an integer (or any instance of Integral)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseString int \"-123\" == -123\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Utils",
        "fct-package": "parsec-utils",
        "fct-signature": "Parser a",
        "fct-source": "src/Text-Parsec-Utils.html#int",
        "fct-type": "function",
        "title": "int"
      },
      "index": {
        "description": "Parse an integer or any instance of Integral parseString int True",
        "hierarchy": "Text Parsec Utils",
        "module": "Text.Parsec.Utils",
        "name": "int",
        "normalized": "",
        "package": "parsec-utils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-utils/docs/Text-Parsec-Utils.html#v:nat",
      "description": {
        "fct-descr": "\u003cp\u003eParse a natural (i.e. non-negative) number\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseString nat \"123\" == 123\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Utils",
        "fct-package": "parsec-utils",
        "fct-signature": "Parser a",
        "fct-source": "src/Text-Parsec-Utils.html#nat",
        "fct-type": "function",
        "title": "nat"
      },
      "index": {
        "description": "Parse natural i.e non-negative number parseString nat True",
        "hierarchy": "Text Parsec Utils",
        "module": "Text.Parsec.Utils",
        "name": "nat",
        "normalized": "",
        "package": "parsec-utils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-utils/docs/Text-Parsec-Utils.html#v:parseFile",
      "description": {
        "fct-descr": "\u003cp\u003eParse the contents of a file. Parse errors are reported\n through the \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Text.Parsec.Utils",
        "fct-package": "parsec-utils",
        "fct-signature": "Parser a -\u003e FilePath -\u003e IO a",
        "fct-source": "src/Text-Parsec-Utils.html#parseFile",
        "fct-type": "function",
        "title": "parseFile"
      },
      "index": {
        "description": "Parse the contents of file Parse errors are reported through the error function",
        "hierarchy": "Text Parsec Utils",
        "module": "Text.Parsec.Utils",
        "name": "parseFile",
        "normalized": "Parser a-\u003eFilePath-\u003eIO a",
        "package": "parsec-utils",
        "partial": "File",
        "signature": "Parser a-\u003eFilePath-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parsec-utils/docs/Text-Parsec-Utils.html#v:parseString",
      "description": {
        "fct-descr": "\u003cp\u003eParse a string. Parse errors are reported through the \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseString int \"123\" == 123\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
        "fct-module": "Text.Parsec.Utils",
        "fct-package": "parsec-utils",
        "fct-signature": "Parser a -\u003e String -\u003e a",
        "fct-source": "src/Text-Parsec-Utils.html#parseString",
        "fct-type": "function",
        "title": "parseString"
      },
      "index": {
        "description": "Parse string Parse errors are reported through the error function parseString int True",
        "hierarchy": "Text Parsec Utils",
        "module": "Text.Parsec.Utils",
        "name": "parseString",
        "normalized": "Parser a-\u003eString-\u003ea",
        "package": "parsec-utils",
        "partial": "String",
        "signature": "Parser a-\u003eString-\u003ea"
      }
    }
  }
]