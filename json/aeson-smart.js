[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson-smart/docs/Data-Aeson-TH-Smart.html#",
      "description": {
        "fct-module": "Data.Aeson.TH.Smart",
        "fct-package": "aeson-smart",
        "fct-signature": "module",
        "fct-source": "src/Data-Aeson-TH-Smart.html",
        "fct-type": "module",
        "title": "Smart"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson TH Smart",
        "module": "Data.Aeson.TH.Smart",
        "name": "Smart",
        "normalized": "",
        "package": "aeson-smart",
        "partial": "Smart",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson-smart/docs/Data-Aeson-TH-Smart.html#v:deriveFromJSON",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e instance declaration for the given data type.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n data Foo = Foo Char Int\n $(\u003ccode\u003e\u003ca\u003ederiveFromJSON\u003c/a\u003e\u003c/code\u003e id ''Foo)\n\u003c/pre\u003e\u003cp\u003eThis will splice in the following code:\n\u003c/p\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e Foo where\n     \u003ccode\u003e\u003ca\u003eparseJSON\u003c/a\u003e\u003c/code\u003e =\n         value -\u003e case value of\n                     \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e arr -\u003e\n                       if (V.length arr == 2)\n                       then Foo \u003c$\u003e \u003ccode\u003e\u003ca\u003eparseJSON\u003c/a\u003e\u003c/code\u003e (arr \u003ccode\u003e\u003ca\u003eunsafeIndex\u003c/a\u003e\u003c/code\u003e 0)\n                                \u003c*\u003e \u003ccode\u003e\u003ca\u003eparseJSON\u003c/a\u003e\u003c/code\u003e (arr \u003ccode\u003e\u003ca\u003eunsafeIndex\u003c/a\u003e\u003c/code\u003e 1)\n                       else fail \"\u003cerror message\u003e\"\n                     other -\u003e fail \"\u003cerror message\u003e\"\n\u003c/pre\u003e",
        "fct-module": "Data.Aeson.TH.Smart",
        "fct-package": "aeson-smart",
        "fct-signature": "(String -\u003e String)-\u003e Bool-\u003e Name-\u003e Q [Dec]",
        "fct-type": "function",
        "title": "deriveFromJSON"
      },
      "index": {
        "description": "Generates FromJSON instance declaration for the given data type Example data Foo Foo Char Int deriveFromJSON id Foo This will splice in the following code instance FromJSON Foo where parseJSON value case value of Array arr if V.length arr then Foo parseJSON arr unsafeIndex parseJSON arr unsafeIndex else fail error message other fail error message",
        "hierarchy": "Data Aeson TH Smart",
        "module": "Data.Aeson.TH.Smart",
        "name": "deriveFromJSON",
        "normalized": "(String-\u003eString)-\u003eBool-\u003eName-\u003eQ[Dec]",
        "package": "aeson-smart",
        "partial": "From JSON",
        "signature": "(String-\u003eString)-\u003eBool-\u003eName-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson-smart/docs/Data-Aeson-TH-Smart.html#v:deriveJSON",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates both \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e instance declarations for the given\n data type.\n\u003c/p\u003e\u003cp\u003eThis is a convienience function which is equivalent to calling both\n \u003ccode\u003e\u003ca\u003ederiveToJSON\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ederiveFromJSON\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Aeson.TH.Smart",
        "fct-package": "aeson-smart",
        "fct-signature": "(String -\u003e String)-\u003e Bool-\u003e Name-\u003e Q [Dec]",
        "fct-type": "function",
        "title": "deriveJSON"
      },
      "index": {
        "description": "Generates both ToJSON and FromJSON instance declarations for the given data type This is convienience function which is equivalent to calling both deriveToJSON and deriveFromJSON",
        "hierarchy": "Data Aeson TH Smart",
        "module": "Data.Aeson.TH.Smart",
        "name": "deriveJSON",
        "normalized": "(String-\u003eString)-\u003eBool-\u003eName-\u003eQ[Dec]",
        "package": "aeson-smart",
        "partial": "JSON",
        "signature": "(String-\u003eString)-\u003eBool-\u003eName-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson-smart/docs/Data-Aeson-TH-Smart.html#v:deriveToJSON",
      "description": {
        "fct-module": "Data.Aeson.TH.Smart",
        "fct-package": "aeson-smart",
        "fct-signature": "(String -\u003e String)-\u003e Bool-\u003e Name-\u003e Q [Dec]",
        "fct-type": "function",
        "title": "deriveToJSON"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Aeson TH Smart",
        "module": "Data.Aeson.TH.Smart",
        "name": "deriveToJSON",
        "normalized": "(String-\u003eString)-\u003eBool-\u003eName-\u003eQ[Dec]",
        "package": "aeson-smart",
        "partial": "To JSON",
        "signature": "(String-\u003eString)-\u003eBool-\u003eName-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson-smart/docs/Data-Aeson-TH-Smart.html#v:mkParseJSON",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a lambda expression which parses the JSON encoding of the given\n data type.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n data Foo = Foo \u003ccode\u003eInt\u003c/code\u003e\n\u003c/pre\u003e\u003cpre\u003e\n parseFoo :: \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e Foo\n parseFoo = $(\u003ccode\u003e\u003ca\u003emkParseJSON\u003c/a\u003e\u003c/code\u003e id ''Foo)\n\u003c/pre\u003e\u003cp\u003eThis will splice in the following code:\n\u003c/p\u003e\u003cpre\u003e\n \\value -\u003e case value of arg -\u003e Foo \u003c$\u003e \u003ccode\u003e\u003ca\u003eparseJSON\u003c/a\u003e\u003c/code\u003e arg\n\u003c/pre\u003e",
        "fct-module": "Data.Aeson.TH.Smart",
        "fct-package": "aeson-smart",
        "fct-signature": "(String -\u003e String)-\u003e Name-\u003e Q Exp",
        "fct-type": "function",
        "title": "mkParseJSON"
      },
      "index": {
        "description": "Generates lambda expression which parses the JSON encoding of the given data type Example data Foo Foo Int parseFoo Value Parser Foo parseFoo mkParseJSON id Foo This will splice in the following code value case value of arg Foo parseJSON arg",
        "hierarchy": "Data Aeson TH Smart",
        "module": "Data.Aeson.TH.Smart",
        "name": "mkParseJSON",
        "normalized": "(String-\u003eString)-\u003eName-\u003eQ Exp",
        "package": "aeson-smart",
        "partial": "Parse JSON",
        "signature": "(String-\u003eString)-\u003eName-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson-smart/docs/Data-Aeson-TH-Smart.html#v:mkToJSON",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a lambda expression which encodes the given data type as JSON.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n data Foo = Foo Int\n\u003c/pre\u003e\u003cpre\u003e\n encodeFoo :: Foo -\u003e \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e\n encodeFoo = $(\u003ccode\u003e\u003ca\u003emkToJSON\u003c/a\u003e\u003c/code\u003e id ''Foo)\n\u003c/pre\u003e\u003cp\u003eThis will splice in the following code:\n\u003c/p\u003e\u003cpre\u003e\n value -\u003e case value of Foo arg1 -\u003e \u003ccode\u003e\u003ca\u003etoJSON\u003c/a\u003e\u003c/code\u003e arg1\n\u003c/pre\u003e",
        "fct-module": "Data.Aeson.TH.Smart",
        "fct-package": "aeson-smart",
        "fct-signature": "(String -\u003e String)-\u003e Name-\u003e Q Exp",
        "fct-type": "function",
        "title": "mkToJSON"
      },
      "index": {
        "description": "Generates lambda expression which encodes the given data type as JSON Example data Foo Foo Int encodeFoo Foo Value encodeFoo mkToJSON id Foo This will splice in the following code value case value of Foo arg1 toJSON arg1",
        "hierarchy": "Data Aeson TH Smart",
        "module": "Data.Aeson.TH.Smart",
        "name": "mkToJSON",
        "normalized": "(String-\u003eString)-\u003eName-\u003eQ Exp",
        "package": "aeson-smart",
        "partial": "To JSON",
        "signature": "(String-\u003eString)-\u003eName-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson-smart/docs/Data-Default-TH.html#",
      "description": {
        "fct-module": "Data.Default.TH",
        "fct-package": "aeson-smart",
        "fct-signature": "module",
        "fct-source": "src/Data-Default-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Default TH",
        "module": "Data.Default.TH",
        "name": "TH",
        "normalized": "",
        "package": "aeson-smart",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/aeson-smart/docs/Data-Default-TH.html#v:deriveDefault",
      "description": {
        "fct-module": "Data.Default.TH",
        "fct-package": "aeson-smart",
        "fct-signature": "Bool -\u003e Name -\u003e Q [Dec]",
        "fct-source": "src/Data-Default-TH.html#deriveDefault",
        "fct-type": "function",
        "title": "deriveDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Default TH",
        "module": "Data.Default.TH",
        "name": "deriveDefault",
        "normalized": "Bool-\u003eName-\u003eQ[Dec]",
        "package": "aeson-smart",
        "partial": "Default",
        "signature": "Bool-\u003eName-\u003eQ[Dec]"
      }
    }
  }
]