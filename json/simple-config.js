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
        "word": "simple-config"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple-config is a parser generator for simple configuration file.\n\u003c/p\u003e\u003cp\u003eTo use this library, one needs import a module and set extensions.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell, QuasiQuotes #-}\n import Text.Config\n\u003c/pre\u003e\u003cp\u003eThe following is quick example.\n\u003c/p\u003e\u003cpre\u003e mkConfig \"configParser\" [config|\n TestConfig\n     uri  URI\n     text String\n     list [String]\n     val  Int\n     vals [Int]\n     bs   ByteString\n |]\n\u003c/pre\u003e\u003cp\u003eThe example generates following codes.\n\u003c/p\u003e\u003cpre\u003e data TestConfig = TestConfig\n     { uri :: String\n     , text :: String\n     , list :: [String]\n     , val :: Int\n     , vals :: [Int]\n     , bs :: ByteString\n     }\n   deriving (Show)\n\n instance Default TestConfig where\n     def = TestConfig\n         { uri = \"http://localhost/\"\n         , text = \"\"\n         , list = []\n         , val = 0\n         , vals = []\n         , bs = \"\"\n         }\n \n configParser :: Parser TestConfig\n configParser = ...\n\u003c/pre\u003e\u003cp\u003eIts parser is able to parse following string.\n\u003c/p\u003e\u003cpre\u003e uri: http://example.com/content.html\n text: wakaruwa\n list: kaede, kirari, momoka\n val: 28\n vals: 25, 17, 12\n bs: chihiro\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.Config",
          "name": "Config",
          "package": "simple-config",
          "source": "src/Text-Config.html",
          "type": "module"
        },
        "index": {
          "description": "Simple-config is parser generator for simple configuration file To use this library one needs import module and set extensions LANGUAGE TemplateHaskell QuasiQuotes import Text.Config The following is quick example mkConfig configParser config TestConfig uri URI text String list String val Int vals Int bs ByteString The example generates following codes data TestConfig TestConfig uri String text String list String val Int vals Int bs ByteString deriving Show instance Default TestConfig where def TestConfig uri http localhost text list val vals bs configParser Parser TestConfig configParser Its parser is able to parse following string uri http example.com content.html text wakaruwa list kaede kirari momoka val vals bs chihiro",
          "hierarchy": "Text Config",
          "module": "Text.Config",
          "name": "Config",
          "package": "simple-config",
          "partial": "Config",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-config/docs/Text-Config.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Config",
          "name": "ConfLine",
          "package": "simple-config",
          "source": "src/Text-Config-Types.html#ConfLine",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Config",
          "module": "Text.Config",
          "name": "ConfLine",
          "package": "simple-config",
          "partial": "Conf Line",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/simple-config/docs/Text-Config.html#t:ConfLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Config",
          "name": "ConfTmp",
          "package": "simple-config",
          "source": "src/Text-Config-Types.html#ConfTmp",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Config",
          "module": "Text.Config",
          "name": "ConfTmp",
          "package": "simple-config",
          "partial": "Conf Tmp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/simple-config/docs/Text-Config.html#t:ConfTmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Config",
          "name": "ConfType",
          "package": "simple-config",
          "source": "src/Text-Config-Types.html#ConfType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Config",
          "module": "Text.Config",
          "name": "ConfType",
          "package": "simple-config",
          "partial": "Conf Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-config/docs/Text-Config.html#t:ConfType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Config",
          "name": "ConfByteString",
          "package": "simple-config",
          "signature": "ConfByteString",
          "source": "src/Text-Config-Types.html#ConfType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Config",
          "module": "Text.Config",
          "name": "ConfByteString",
          "package": "simple-config",
          "partial": "Conf Byte String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-config/docs/Text-Config.html#v:ConfByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Config",
          "name": "ConfInt",
          "package": "simple-config",
          "signature": "ConfInt",
          "source": "src/Text-Config-Types.html#ConfType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Config",
          "module": "Text.Config",
          "name": "ConfInt",
          "package": "simple-config",
          "partial": "Conf Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-config/docs/Text-Config.html#v:ConfInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Config",
          "name": "ConfList",
          "package": "simple-config",
          "signature": "ConfList ConfType",
          "source": "src/Text-Config-Types.html#ConfType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Config",
          "module": "Text.Config",
          "name": "ConfList",
          "package": "simple-config",
          "partial": "Conf List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-config/docs/Text-Config.html#v:ConfList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Config",
          "name": "ConfString",
          "package": "simple-config",
          "signature": "ConfString",
          "source": "src/Text-Config-Types.html#ConfType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Config",
          "module": "Text.Config",
          "name": "ConfString",
          "package": "simple-config",
          "partial": "Conf String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-config/docs/Text-Config.html#v:ConfString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Config",
          "name": "ConfURI",
          "package": "simple-config",
          "signature": "ConfURI",
          "source": "src/Text-Config-Types.html#ConfType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Config",
          "module": "Text.Config",
          "name": "ConfURI",
          "package": "simple-config",
          "partial": "Conf URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-config/docs/Text-Config.html#v:ConfURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Config",
          "name": "config",
          "package": "simple-config",
          "signature": "QuasiQuoter",
          "source": "src/Text-Config-TH.html#config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Config",
          "module": "Text.Config",
          "name": "config",
          "package": "simple-config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-config/docs/Text-Config.html#v:config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Config",
          "name": "mkConfig",
          "package": "simple-config",
          "signature": "String -\u003e ConfTmp -\u003e DecsQ",
          "source": "src/Text-Config-TH.html#mkConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Config",
          "module": "Text.Config",
          "name": "mkConfig",
          "normalized": "String-\u003eConfTmp-\u003eDecsQ",
          "package": "simple-config",
          "partial": "Config",
          "signature": "String-\u003eConfTmp-\u003eDecsQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-config/docs/Text-Config.html#v:mkConfig"
      }
    }
  ]
]