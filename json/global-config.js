[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/global-config/docs/Data-Global-Config.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMain problem in haskell is \"creepy\" enviroment variables passed to all \n   functions. It's safe but tedious.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eGlobalConfig\u003c/a\u003e\u003c/code\u003e trying to solve this problem and propose common pattern \n   to work with configurations. It has been tested and proved to be very \n   useful in production.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE DeriveDataTypeable #-}\n \n module Main (main) where\n \n import Data.Typeable (Typeable)\n import Data.Default\n import Data.Global.Config\n \n data Config = Config { configInt :: Int, configBool :: Bool }\n    deriving (Show, Typeable)\n \n instance Default Config\n    def = Config 0 False\n \n instance GlobalConfig Config where\n    onSetConfig = print\n    \n main :: IO ()\n main = do\n    -- try to read unitialized config\n    c1 \u003c- getConfig \n    -- Config {configInt=0, configBool=False}\n    \n    -- set config and read it\n    setConfig $ Config 1 True\n    -- Config {configInt=1, configBool=True}\n    c2 \u003c- getConfig\n    print (c1 :: Config)\n    -- Config {configInt=1, configBool=True}\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Global.Config",
        "fct-package": "global-config",
        "fct-signature": "module",
        "fct-source": "src/Data-Global-Config.html",
        "fct-type": "module",
        "title": "Config"
      },
      "index": {
        "description": "Main problem in haskell is creepy enviroment variables passed to all functions It safe but tedious GlobalConfig trying to solve this problem and propose common pattern to work with configurations It has been tested and proved to be very useful in production LANGUAGE DeriveDataTypeable module Main main where import Data.Typeable Typeable import Data.Default import Data.Global.Config data Config Config configInt Int configBool Bool deriving Show Typeable instance Default Config def Config False instance GlobalConfig Config where onSetConfig print main IO main do try to read unitialized config c1 getConfig Config configInt configBool False set config and read it setConfig Config True Config configInt configBool True c2 getConfig print c1 Config Config configInt configBool True",
        "hierarchy": "Data Global Config",
        "module": "Data.Global.Config",
        "name": "Config",
        "normalized": "",
        "package": "global-config",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/global-config/docs/Data-Global-Config.html#t:GlobalConfig",
      "description": {
        "fct-descr": "\u003cp\u003eGlobal configuration class\n\u003c/p\u003e",
        "fct-module": "Data.Global.Config",
        "fct-package": "global-config",
        "fct-signature": "class",
        "fct-source": "src/Data-Global-Config.html#GlobalConfig",
        "fct-type": "class",
        "title": "GlobalConfig"
      },
      "index": {
        "description": "Global configuration class",
        "hierarchy": "Data Global Config",
        "module": "Data.Global.Config",
        "name": "GlobalConfig",
        "normalized": "",
        "package": "global-config",
        "partial": "Global Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/global-config/docs/Data-Global-Config.html#v:getConfig",
      "description": {
        "fct-descr": "\u003cp\u003eGet global config\n\u003c/p\u003e",
        "fct-module": "Data.Global.Config",
        "fct-package": "global-config",
        "fct-signature": "m a",
        "fct-source": "src/Data-Global-Config.html#getConfig",
        "fct-type": "method",
        "title": "getConfig"
      },
      "index": {
        "description": "Get global config",
        "hierarchy": "Data Global Config",
        "module": "Data.Global.Config",
        "name": "getConfig",
        "normalized": "",
        "package": "global-config",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/global-config/docs/Data-Global-Config.html#v:onSetConfig",
      "description": {
        "fct-descr": "\u003cp\u003eSet config handler\n\u003c/p\u003e",
        "fct-module": "Data.Global.Config",
        "fct-package": "global-config",
        "fct-signature": "a -\u003e m ()",
        "fct-source": "src/Data-Global-Config.html#onSetConfig",
        "fct-type": "method",
        "title": "onSetConfig"
      },
      "index": {
        "description": "Set config handler",
        "hierarchy": "Data Global Config",
        "module": "Data.Global.Config",
        "name": "onSetConfig",
        "normalized": "a-\u003eb()",
        "package": "global-config",
        "partial": "Set Config",
        "signature": "a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/global-config/docs/Data-Global-Config.html#v:setConfig",
      "description": {
        "fct-descr": "\u003cp\u003eInit global config\n\u003c/p\u003e",
        "fct-module": "Data.Global.Config",
        "fct-package": "global-config",
        "fct-signature": "a -\u003e m ()",
        "fct-source": "src/Data-Global-Config.html#setConfig",
        "fct-type": "method",
        "title": "setConfig"
      },
      "index": {
        "description": "Init global config",
        "hierarchy": "Data Global Config",
        "module": "Data.Global.Config",
        "name": "setConfig",
        "normalized": "a-\u003eb()",
        "package": "global-config",
        "partial": "Config",
        "signature": "a-\u003em()"
      }
    }
  }
]