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
        "word": "ConfigFileTH"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides syntax for concise definitions of config files from\n    Data.ConfigFile through template haskell. For example, the following splice,\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e    \n$(genConf \u003ca\u003eExample\u003c/a\u003e [$conf|\n                  elbow/center -\u003e ec :: Double\n                  elbow/min    -\u003e emi :: Double\n                  elbow/max    -\u003e ema :: Double\n                |])\n\u003c/code\u003e\n    resolves into declaration of the following datatype\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\ndata Example = Example {ec  :: Double\n                       ,emi :: Double\n                       ,ema :: Double}\n\u003c/code\u003e\n    and a function\n\u003ccode\u003e\nloadExample :: (MonadIO m) =\u003e FilePath -\u003e m (Either CPError Example) , \n\u003c/code\u003e\n     which uses Data.ConfigFile to read a values for the above struct from\n     a file. \n\u003c/p\u003e\u003cp\u003eKnown bugs: Does not support comments in the quotes. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.ConfigFile.TH",
          "name": "TH",
          "package": "ConfigFileTH",
          "source": "src/Data-ConfigFile-TH.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides syntax for concise definitions of config files from Data.ConfigFile through template haskell For example the following splice genConf Example conf elbow center ec Double elbow min emi Double elbow max ema Double resolves into declaration of the following datatype data Example Example ec Double emi Double ema Double and function loadExample MonadIO FilePath Either CPError Example which uses Data.ConfigFile to read values for the above struct from file Known bugs Does not support comments in the quotes",
          "hierarchy": "Data ConfigFile TH",
          "module": "Data.ConfigFile.TH",
          "name": "TH",
          "package": "ConfigFileTH",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFileTH/docs/Data-ConfigFile-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.ConfigFile.TH",
          "name": "conf",
          "package": "ConfigFileTH",
          "signature": "QuasiQuoter",
          "source": "src/Data-ConfigFile-TH.html#conf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data ConfigFile TH",
          "module": "Data.ConfigFile.TH",
          "name": "conf",
          "package": "ConfigFileTH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFileTH/docs/Data-ConfigFile-TH.html#v:conf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTH macro for generating a data type and corresponding code to load it from a config file.\n\u003c/p\u003e",
          "module": "Data.ConfigFile.TH",
          "name": "genConf",
          "package": "ConfigFileTH",
          "signature": "String -\u003e [(String, String, String, String)] -\u003e m [Dec]",
          "source": "src/Data-ConfigFile-TH.html#genConf",
          "type": "function"
        },
        "index": {
          "description": "TH macro for generating data type and corresponding code to load it from config file",
          "hierarchy": "Data ConfigFile TH",
          "module": "Data.ConfigFile.TH",
          "name": "genConf",
          "normalized": "String-\u003e[(String,String,String,String)]-\u003ea[Dec]",
          "package": "ConfigFileTH",
          "partial": "Conf",
          "signature": "String-\u003e[(String,String,String,String)]-\u003em[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ConfigFileTH/docs/Data-ConfigFile-TH.html#v:genConf"
      }
    }
  ]
]