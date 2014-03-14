[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "type": "word",
        "word": "aeson-smart"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aeson.TH.Smart",
          "name": "Smart",
          "package": "aeson-smart",
          "source": "src/Data-Aeson-TH-Smart.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Aeson TH Smart",
          "module": "Data.Aeson.TH.Smart",
          "name": "Smart",
          "package": "aeson-smart",
          "partial": "Smart",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aeson-smart/docs/Data-Aeson-TH-Smart.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e instance declaration for the given data type.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n data Foo = Foo Char Int\n $(\u003ccode\u003e\u003ca\u003ederiveFromJSON\u003c/a\u003e\u003c/code\u003e id ''Foo)\n\u003c/pre\u003e\u003cp\u003eThis will splice in the following code:\n\u003c/p\u003e\u003cpre\u003e\n instance \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e Foo where\n     \u003ccode\u003e\u003ca\u003eparseJSON\u003c/a\u003e\u003c/code\u003e =\n         value -\u003e case value of\n                     \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e arr -\u003e\n                       if (V.length arr == 2)\n                       then Foo \u003c$\u003e \u003ccode\u003e\u003ca\u003eparseJSON\u003c/a\u003e\u003c/code\u003e (arr \u003ccode\u003e\u003ca\u003eunsafeIndex\u003c/a\u003e\u003c/code\u003e 0)\n                                \u003c*\u003e \u003ccode\u003e\u003ca\u003eparseJSON\u003c/a\u003e\u003c/code\u003e (arr \u003ccode\u003e\u003ca\u003eunsafeIndex\u003c/a\u003e\u003c/code\u003e 1)\n                       else fail \"\u003cerror message\u003e\"\n                     other -\u003e fail \"\u003cerror message\u003e\"\n\u003c/pre\u003e",
          "module": "Data.Aeson.TH.Smart",
          "name": "deriveFromJSON",
          "package": "aeson-smart",
          "signature": "(String -\u003e String)-\u003e Bool-\u003e Name-\u003e Q [Dec]",
          "type": "function"
        },
        "index": {
          "description": "Generates FromJSON instance declaration for the given data type Example data Foo Foo Char Int deriveFromJSON id Foo This will splice in the following code instance FromJSON Foo where parseJSON value case value of Array arr if V.length arr then Foo parseJSON arr unsafeIndex parseJSON arr unsafeIndex else fail error message other fail error message",
          "hierarchy": "Data Aeson TH Smart",
          "module": "Data.Aeson.TH.Smart",
          "name": "deriveFromJSON",
          "normalized": "(String-\u003eString)-\u003eBool-\u003eName-\u003eQ[Dec]",
          "package": "aeson-smart",
          "partial": "From JSON",
          "signature": "(String-\u003eString)-\u003eBool-\u003eName-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-smart/docs/Data-Aeson-TH-Smart.html#v:deriveFromJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates both \u003ccode\u003e\u003ca\u003eToJSON\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFromJSON\u003c/a\u003e\u003c/code\u003e instance declarations for the given\n data type.\n\u003c/p\u003e\u003cp\u003eThis is a convienience function which is equivalent to calling both\n \u003ccode\u003e\u003ca\u003ederiveToJSON\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ederiveFromJSON\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aeson.TH.Smart",
          "name": "deriveJSON",
          "package": "aeson-smart",
          "signature": "(String -\u003e String)-\u003e Bool-\u003e Name-\u003e Q [Dec]",
          "type": "function"
        },
        "index": {
          "description": "Generates both ToJSON and FromJSON instance declarations for the given data type This is convienience function which is equivalent to calling both deriveToJSON and deriveFromJSON",
          "hierarchy": "Data Aeson TH Smart",
          "module": "Data.Aeson.TH.Smart",
          "name": "deriveJSON",
          "normalized": "(String-\u003eString)-\u003eBool-\u003eName-\u003eQ[Dec]",
          "package": "aeson-smart",
          "partial": "JSON",
          "signature": "(String-\u003eString)-\u003eBool-\u003eName-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-smart/docs/Data-Aeson-TH-Smart.html#v:deriveJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aeson.TH.Smart",
          "name": "deriveToJSON",
          "package": "aeson-smart",
          "signature": "(String -\u003e String)-\u003e Bool-\u003e Name-\u003e Q [Dec]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aeson TH Smart",
          "module": "Data.Aeson.TH.Smart",
          "name": "deriveToJSON",
          "normalized": "(String-\u003eString)-\u003eBool-\u003eName-\u003eQ[Dec]",
          "package": "aeson-smart",
          "partial": "To JSON",
          "signature": "(String-\u003eString)-\u003eBool-\u003eName-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-smart/docs/Data-Aeson-TH-Smart.html#v:deriveToJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a lambda expression which parses the JSON encoding of the given\n data type.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n data Foo = Foo \u003ccode\u003eInt\u003c/code\u003e\n\u003c/pre\u003e\u003cpre\u003e\n parseFoo :: \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e Foo\n parseFoo = $(\u003ccode\u003e\u003ca\u003emkParseJSON\u003c/a\u003e\u003c/code\u003e id ''Foo)\n\u003c/pre\u003e\u003cp\u003eThis will splice in the following code:\n\u003c/p\u003e\u003cpre\u003e\n \\value -\u003e case value of arg -\u003e Foo \u003c$\u003e \u003ccode\u003e\u003ca\u003eparseJSON\u003c/a\u003e\u003c/code\u003e arg\n\u003c/pre\u003e",
          "module": "Data.Aeson.TH.Smart",
          "name": "mkParseJSON",
          "package": "aeson-smart",
          "signature": "(String -\u003e String)-\u003e Name-\u003e Q Exp",
          "type": "function"
        },
        "index": {
          "description": "Generates lambda expression which parses the JSON encoding of the given data type Example data Foo Foo Int parseFoo Value Parser Foo parseFoo mkParseJSON id Foo This will splice in the following code value case value of arg Foo parseJSON arg",
          "hierarchy": "Data Aeson TH Smart",
          "module": "Data.Aeson.TH.Smart",
          "name": "mkParseJSON",
          "normalized": "(String-\u003eString)-\u003eName-\u003eQ Exp",
          "package": "aeson-smart",
          "partial": "Parse JSON",
          "signature": "(String-\u003eString)-\u003eName-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-smart/docs/Data-Aeson-TH-Smart.html#v:mkParseJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a lambda expression which encodes the given data type as JSON.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n data Foo = Foo Int\n\u003c/pre\u003e\u003cpre\u003e\n encodeFoo :: Foo -\u003e \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e\n encodeFoo = $(\u003ccode\u003e\u003ca\u003emkToJSON\u003c/a\u003e\u003c/code\u003e id ''Foo)\n\u003c/pre\u003e\u003cp\u003eThis will splice in the following code:\n\u003c/p\u003e\u003cpre\u003e\n value -\u003e case value of Foo arg1 -\u003e \u003ccode\u003e\u003ca\u003etoJSON\u003c/a\u003e\u003c/code\u003e arg1\n\u003c/pre\u003e",
          "module": "Data.Aeson.TH.Smart",
          "name": "mkToJSON",
          "package": "aeson-smart",
          "signature": "(String -\u003e String)-\u003e Name-\u003e Q Exp",
          "type": "function"
        },
        "index": {
          "description": "Generates lambda expression which encodes the given data type as JSON Example data Foo Foo Int encodeFoo Foo Value encodeFoo mkToJSON id Foo This will splice in the following code value case value of Foo arg1 toJSON arg1",
          "hierarchy": "Data Aeson TH Smart",
          "module": "Data.Aeson.TH.Smart",
          "name": "mkToJSON",
          "normalized": "(String-\u003eString)-\u003eName-\u003eQ Exp",
          "package": "aeson-smart",
          "partial": "To JSON",
          "signature": "(String-\u003eString)-\u003eName-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-smart/docs/Data-Aeson-TH-Smart.html#v:mkToJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Default.TH",
          "name": "TH",
          "package": "aeson-smart",
          "source": "src/Data-Default-TH.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Default TH",
          "module": "Data.Default.TH",
          "name": "TH",
          "package": "aeson-smart",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aeson-smart/docs/Data-Default-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Default.TH",
          "name": "deriveDefault",
          "package": "aeson-smart",
          "signature": "Bool -\u003e Name -\u003e Q [Dec]",
          "source": "src/Data-Default-TH.html#deriveDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Default TH",
          "module": "Data.Default.TH",
          "name": "deriveDefault",
          "normalized": "Bool-\u003eName-\u003eQ[Dec]",
          "package": "aeson-smart",
          "partial": "Default",
          "signature": "Bool-\u003eName-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-smart/docs/Data-Default-TH.html#v:deriveDefault"
      }
    }
  ]
]