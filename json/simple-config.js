[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-config/docs/Text-Config.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple-config is a parser generator for simple configuration file.\n\u003c/p\u003e\u003cp\u003eTo use this library, one needs import a module and set extensions.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell, QuasiQuotes #-}\n import Text.Config\n\u003c/pre\u003e\u003cp\u003eThe following is quick example.\n\u003c/p\u003e\u003cpre\u003e mkConfig \"configParser\" [config|\n TestConfig\n     uri  URI\n     text String\n     list [String]\n     val  Int\n     vals [Int]\n     bs   ByteString\n |]\n\u003c/pre\u003e\u003cp\u003eThe example generates following codes.\n\u003c/p\u003e\u003cpre\u003e data TestConfig = TestConfig\n     { uri :: String\n     , text :: String\n     , list :: [String]\n     , val :: Int\n     , vals :: [Int]\n     , bs :: ByteString\n     }\n   deriving (Show)\n\n instance Default TestConfig where\n     def = TestConfig\n         { uri = \"http://localhost/\"\n         , text = \"\"\n         , list = []\n         , val = 0\n         , vals = []\n         , bs = \"\"\n         }\n \n configParser :: Parser TestConfig\n configParser = ...\n\u003c/pre\u003e\u003cp\u003eIts parser is able to parse following string.\n\u003c/p\u003e\u003cpre\u003e uri: http://example.com/content.html\n text: wakaruwa\n list: kaede, kirari, momoka\n val: 28\n vals: 25, 17, 12\n bs: chihiro\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Text.Config",
        "fct-package": "simple-config",
        "fct-signature": "module",
        "fct-source": "src/Text-Config.html",
        "fct-type": "module",
        "title": "Config"
      },
      "index": {
        "description": "Simple-config is parser generator for simple configuration file To use this library one needs import module and set extensions LANGUAGE TemplateHaskell QuasiQuotes import Text.Config The following is quick example mkConfig configParser config TestConfig uri URI text String list String val Int vals Int bs ByteString The example generates following codes data TestConfig TestConfig uri String text String list String val Int vals Int bs ByteString deriving Show instance Default TestConfig where def TestConfig uri http localhost text list val vals bs configParser Parser TestConfig configParser Its parser is able to parse following string uri http example.com content.html text wakaruwa list kaede kirari momoka val vals bs chihiro",
        "hierarchy": "Text Config",
        "module": "Text.Config",
        "name": "Config",
        "normalized": "",
        "package": "simple-config",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-config/docs/Text-Config.html#t:ConfLine",
      "description": {
        "fct-module": "Text.Config",
        "fct-package": "simple-config",
        "fct-signature": "type",
        "fct-source": "src/Text-Config-Types.html#ConfLine",
        "fct-type": "type",
        "title": "ConfLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Config",
        "module": "Text.Config",
        "name": "ConfLine",
        "normalized": "",
        "package": "simple-config",
        "partial": "Conf Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-config/docs/Text-Config.html#t:ConfTmp",
      "description": {
        "fct-module": "Text.Config",
        "fct-package": "simple-config",
        "fct-signature": "type",
        "fct-source": "src/Text-Config-Types.html#ConfTmp",
        "fct-type": "type",
        "title": "ConfTmp"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Config",
        "module": "Text.Config",
        "name": "ConfTmp",
        "normalized": "",
        "package": "simple-config",
        "partial": "Conf Tmp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-config/docs/Text-Config.html#t:ConfType",
      "description": {
        "fct-module": "Text.Config",
        "fct-package": "simple-config",
        "fct-signature": "data",
        "fct-source": "src/Text-Config-Types.html#ConfType",
        "fct-type": "data",
        "title": "ConfType"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Config",
        "module": "Text.Config",
        "name": "ConfType",
        "normalized": "",
        "package": "simple-config",
        "partial": "Conf Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-config/docs/Text-Config.html#v:ConfByteString",
      "description": {
        "fct-module": "Text.Config",
        "fct-package": "simple-config",
        "fct-signature": "ConfByteString",
        "fct-source": "src/Text-Config-Types.html#ConfType",
        "fct-type": "function",
        "title": "ConfByteString"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Config",
        "module": "Text.Config",
        "name": "ConfByteString",
        "normalized": "",
        "package": "simple-config",
        "partial": "Conf Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-config/docs/Text-Config.html#v:ConfInt",
      "description": {
        "fct-module": "Text.Config",
        "fct-package": "simple-config",
        "fct-signature": "ConfInt",
        "fct-source": "src/Text-Config-Types.html#ConfType",
        "fct-type": "function",
        "title": "ConfInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Config",
        "module": "Text.Config",
        "name": "ConfInt",
        "normalized": "",
        "package": "simple-config",
        "partial": "Conf Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-config/docs/Text-Config.html#v:ConfList",
      "description": {
        "fct-module": "Text.Config",
        "fct-package": "simple-config",
        "fct-signature": "ConfList ConfType",
        "fct-source": "src/Text-Config-Types.html#ConfType",
        "fct-type": "function",
        "title": "ConfList"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Config",
        "module": "Text.Config",
        "name": "ConfList",
        "normalized": "",
        "package": "simple-config",
        "partial": "Conf List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-config/docs/Text-Config.html#v:ConfString",
      "description": {
        "fct-module": "Text.Config",
        "fct-package": "simple-config",
        "fct-signature": "ConfString",
        "fct-source": "src/Text-Config-Types.html#ConfType",
        "fct-type": "function",
        "title": "ConfString"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Config",
        "module": "Text.Config",
        "name": "ConfString",
        "normalized": "",
        "package": "simple-config",
        "partial": "Conf String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-config/docs/Text-Config.html#v:ConfURI",
      "description": {
        "fct-module": "Text.Config",
        "fct-package": "simple-config",
        "fct-signature": "ConfURI",
        "fct-source": "src/Text-Config-Types.html#ConfType",
        "fct-type": "function",
        "title": "ConfURI"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Config",
        "module": "Text.Config",
        "name": "ConfURI",
        "normalized": "",
        "package": "simple-config",
        "partial": "Conf URI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-config/docs/Text-Config.html#v:config",
      "description": {
        "fct-module": "Text.Config",
        "fct-package": "simple-config",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Text-Config-TH.html#config",
        "fct-type": "function",
        "title": "config"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Config",
        "module": "Text.Config",
        "name": "config",
        "normalized": "",
        "package": "simple-config",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/simple-config/docs/Text-Config.html#v:mkConfig",
      "description": {
        "fct-module": "Text.Config",
        "fct-package": "simple-config",
        "fct-signature": "String -\u003e ConfTmp -\u003e DecsQ",
        "fct-source": "src/Text-Config-TH.html#mkConfig",
        "fct-type": "function",
        "title": "mkConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Config",
        "module": "Text.Config",
        "name": "mkConfig",
        "normalized": "String-\u003eConfTmp-\u003eDecsQ",
        "package": "simple-config",
        "partial": "Config",
        "signature": "String-\u003eConfTmp-\u003eDecsQ"
      }
    }
  }
]