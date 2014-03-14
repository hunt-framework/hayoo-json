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
        "word": "yaml-config"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yaml.Config.Internal",
          "name": "Internal",
          "package": "yaml-config",
          "source": "src/Data-Yaml-Config-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Yaml Config Internal",
          "module": "Data.Yaml.Config.Internal",
          "name": "Internal",
          "package": "yaml-config",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType contains config section and path from root.\n\u003c/p\u003e",
          "module": "Data.Yaml.Config.Internal",
          "name": "Config",
          "package": "yaml-config",
          "source": "src/Data-Yaml-Config-Internal.html#Config",
          "type": "data"
        },
        "index": {
          "description": "Type contains config section and path from root",
          "hierarchy": "Data Yaml Config Internal",
          "module": "Data.Yaml.Config.Internal",
          "name": "Config",
          "package": "yaml-config",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config-Internal.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfig or field name\n\u003c/p\u003e",
          "module": "Data.Yaml.Config.Internal",
          "name": "Key",
          "package": "yaml-config",
          "source": "src/Data-Yaml-Config-Internal.html#Key",
          "type": "type"
        },
        "index": {
          "description": "Config or field name",
          "hierarchy": "Data Yaml Config Internal",
          "module": "Data.Yaml.Config.Internal",
          "name": "Key",
          "package": "yaml-config",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config-Internal.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis error can be raised if config has not target path.\n\u003c/p\u003e",
          "module": "Data.Yaml.Config.Internal",
          "name": "KeyError",
          "package": "yaml-config",
          "source": "src/Data-Yaml-Config-Internal.html#KeyError",
          "type": "newtype"
        },
        "index": {
          "description": "This error can be raised if config has not target path",
          "hierarchy": "Data Yaml Config Internal",
          "module": "Data.Yaml.Config.Internal",
          "name": "KeyError",
          "package": "yaml-config",
          "partial": "Key Error",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config-Internal.html#t:KeyError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yaml.Config.Internal",
          "name": "Config",
          "package": "yaml-config",
          "signature": "Config [Key] Object",
          "source": "src/Data-Yaml-Config-Internal.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yaml Config Internal",
          "module": "Data.Yaml.Config.Internal",
          "name": "Config",
          "normalized": "Config[Key]Object",
          "package": "yaml-config",
          "partial": "Config",
          "signature": "Config[Key]Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config-Internal.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Yaml.Config.Internal\",\"Data.Yaml.Config\"]",
          "name": "KeyError",
          "package": "yaml-config",
          "signature": "KeyError Key",
          "source": "src/Data-Yaml-Config-Internal.html#KeyError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config-Internal.html#v:KeyError\",\"http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config.html#v:KeyError\"]"
        },
        "index": {
          "hierarchy": "Data Yaml Config Internal",
          "module": "Data.Yaml.Config.Internal",
          "name": "KeyError",
          "package": "yaml-config",
          "partial": "Key Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config-Internal.html#v:KeyError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow full path from the root to target key. Levels are separated by dots.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efullpath sub \"field1\"\n\u003c/code\u003e\u003c/strong\u003e\"section1.field1\"\n\u003c/pre\u003e",
          "module": "Data.Yaml.Config.Internal",
          "name": "fullpath",
          "package": "yaml-config",
          "signature": "Config -\u003e Key -\u003e Key",
          "source": "src/Data-Yaml-Config-Internal.html#fullpath",
          "type": "function"
        },
        "index": {
          "description": "Show full path from the root to target key Levels are separated by dots fullpath sub field1 section1.field1",
          "hierarchy": "Data Yaml Config Internal",
          "module": "Data.Yaml.Config.Internal",
          "name": "fullpath",
          "normalized": "Config-\u003eKey-\u003eKey",
          "package": "yaml-config",
          "signature": "Config-\u003eKey-\u003eKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config-Internal.html#v:fullpath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow all first level config field's.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ekeys config\n\u003c/code\u003e\u003c/strong\u003e[\"section1\",\"section2\"]\n\u003c/pre\u003e",
          "module": "[\"Data.Yaml.Config.Internal\",\"Data.Yaml.Config\"]",
          "name": "keys",
          "package": "yaml-config",
          "signature": "Config -\u003e [Key]",
          "source": "src/Data-Yaml-Config-Internal.html#keys",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config-Internal.html#v:keys\",\"http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config.html#v:keys\"]"
        },
        "index": {
          "description": "Show all first level config field keys config section1 section2",
          "hierarchy": "Data Yaml Config Internal",
          "module": "Data.Yaml.Config.Internal",
          "name": "keys",
          "normalized": "Config-\u003e[Key]",
          "package": "yaml-config",
          "signature": "Config-\u003e[Key]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config-Internal.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind file in filesystem and try to load it as YAML config.\n May fail with \u003ccode\u003eInvalidYaml\u003c/code\u003e if file not found.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003econfig \u003c- load \"example.yaml\"\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e",
          "module": "[\"Data.Yaml.Config.Internal\",\"Data.Yaml.Config\"]",
          "name": "load",
          "package": "yaml-config",
          "signature": "FilePath -\u003e IO Config",
          "source": "src/Data-Yaml-Config-Internal.html#load",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config-Internal.html#v:load\",\"http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config.html#v:load\"]"
        },
        "index": {
          "description": "Find file in filesystem and try to load it as YAML config May fail with InvalidYaml if file not found config load example.yaml",
          "hierarchy": "Data Yaml Config Internal",
          "module": "Data.Yaml.Config.Internal",
          "name": "load",
          "normalized": "FilePath-\u003eIO Config",
          "package": "yaml-config",
          "signature": "FilePath-\u003eIO Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config-Internal.html#v:load"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet value for given key.\n May fail with \u003ccode\u003eKeyError\u003c/code\u003e if key doesn't exist.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ekeys sub\n\u003c/code\u003e\u003c/strong\u003e[\"field1\",\"field2\"]\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eputStrLn =\u003c\u003c lookup \"field1\" sub\n\u003c/code\u003e\u003c/strong\u003evalue1\n\u003c/pre\u003e",
          "module": "[\"Data.Yaml.Config.Internal\",\"Data.Yaml.Config\"]",
          "name": "lookup",
          "package": "yaml-config",
          "signature": "Key-\u003e Config-\u003e m a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config-Internal.html#v:lookup\",\"http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config.html#v:lookup\"]"
        },
        "index": {
          "description": "Get value for given key May fail with KeyError if key doesn exist keys sub field1 field2 putStrLn lookup field1 sub value1",
          "hierarchy": "Data Yaml Config Internal",
          "module": "Data.Yaml.Config.Internal",
          "name": "lookup",
          "normalized": "Key-\u003eConfig-\u003ea b",
          "package": "yaml-config",
          "signature": "Key-\u003eConfig-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config-Internal.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind value in config and return it or return default value.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elookupDefault \"field3\" \"def\" sub\n\u003c/code\u003e\u003c/strong\u003e\"def\"\n\u003c/pre\u003e",
          "module": "[\"Data.Yaml.Config.Internal\",\"Data.Yaml.Config\"]",
          "name": "lookupDefault",
          "package": "yaml-config",
          "signature": "Key-\u003e a-\u003e Config-\u003e a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config-Internal.html#v:lookupDefault\",\"http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config.html#v:lookupDefault\"]"
        },
        "index": {
          "description": "Find value in config and return it or return default value lookupDefault field3 def sub def",
          "hierarchy": "Data Yaml Config Internal",
          "module": "Data.Yaml.Config.Internal",
          "name": "lookupDefault",
          "normalized": "Key-\u003ea-\u003eConfig-\u003ea",
          "package": "yaml-config",
          "partial": "Default",
          "signature": "Key-\u003ea-\u003eConfig-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config-Internal.html#v:lookupDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet subconfig by name.\n May fail with \u003ccode\u003eKeyError\u003c/code\u003e if target key doesn't exist at current level.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:set -XOverloadedStrings\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esub \u003c- subconfig \"section1\" config\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e",
          "module": "[\"Data.Yaml.Config.Internal\",\"Data.Yaml.Config\"]",
          "name": "subconfig",
          "package": "yaml-config",
          "signature": "Key-\u003e Config-\u003e m Config",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config-Internal.html#v:subconfig\",\"http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config.html#v:subconfig\"]"
        },
        "index": {
          "description": "Get subconfig by name May fail with KeyError if target key doesn exist at current level set XOverloadedStrings sub subconfig section1 config",
          "hierarchy": "Data Yaml Config Internal",
          "module": "Data.Yaml.Config.Internal",
          "name": "subconfig",
          "normalized": "Key-\u003eConfig-\u003ea Config",
          "package": "yaml-config",
          "signature": "Key-\u003eConfig-\u003em Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config-Internal.html#v:subconfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLibrary for read config files in YAML format.\n\u003c/p\u003e\u003cp\u003eexample.yaml:\n\u003c/p\u003e\u003cpre\u003e server:\n     port: 8080\n     logs:\n         access: /var/log/server/access.log\n         error:  /var/log/server/error.log\n\u003c/pre\u003e\u003cp\u003eUsage example:\n\u003c/p\u003e\u003cpre\u003e module Main where\n import Prelude hiding (lookup)\n import Data.Word (Word16)\n import Data.Yaml.Config (load, subconfig, lookupDefault, lookup)\n\n main :: IO ()\n main = do\n     config \u003c- load \"./example.yaml\"\n\n     serverConfig \u003c- subconfig \"server\" config\n     let interface = lookupDefault \"interface\" \"127.0.0.1\" serverConfig\n         port :: Word16 = lookupDefault \"port\" 80 serverConfig\n\n     logConfig \u003c- subconfig \"logs\" serverConfig\n     accessLog \u003c- lookup \"access\" logConfig\n     errorLog \u003c- lookup \"error\" logConfig\n\n     mapM_ putStrLn [interface, (show port), errorLog, accessLog]\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Yaml.Config",
          "name": "Config",
          "package": "yaml-config",
          "source": "src/Data-Yaml-Config.html",
          "type": "module"
        },
        "index": {
          "description": "Library for read config files in YAML format example.yaml server port logs access var log server access.log error var log server error.log Usage example module Main where import Prelude hiding lookup import Data.Word Word16 import Data.Yaml.Config load subconfig lookupDefault lookup main IO main do config load example.yaml serverConfig subconfig server config let interface lookupDefault interface serverConfig port Word16 lookupDefault port serverConfig logConfig subconfig logs serverConfig accessLog lookup access logConfig errorLog lookup error logConfig mapM putStrLn interface show port errorLog accessLog",
          "hierarchy": "Data Yaml Config",
          "module": "Data.Yaml.Config",
          "name": "Config",
          "package": "yaml-config",
          "partial": "Config",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType contains config section and path from root.\n\u003c/p\u003e",
          "module": "Data.Yaml.Config",
          "name": "Config",
          "package": "yaml-config",
          "source": "src/Data-Yaml-Config-Internal.html#Config",
          "type": "data"
        },
        "index": {
          "description": "Type contains config section and path from root",
          "hierarchy": "Data Yaml Config",
          "module": "Data.Yaml.Config",
          "name": "Config",
          "package": "yaml-config",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfig or field name\n\u003c/p\u003e",
          "module": "Data.Yaml.Config",
          "name": "Key",
          "package": "yaml-config",
          "source": "src/Data-Yaml-Config-Internal.html#Key",
          "type": "type"
        },
        "index": {
          "description": "Config or field name",
          "hierarchy": "Data Yaml Config",
          "module": "Data.Yaml.Config",
          "name": "Key",
          "package": "yaml-config",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis error can be raised if config has not target path.\n\u003c/p\u003e",
          "module": "Data.Yaml.Config",
          "name": "KeyError",
          "package": "yaml-config",
          "source": "src/Data-Yaml-Config-Internal.html#KeyError",
          "type": "newtype"
        },
        "index": {
          "description": "This error can be raised if config has not target path",
          "hierarchy": "Data Yaml Config",
          "module": "Data.Yaml.Config",
          "name": "KeyError",
          "package": "yaml-config",
          "partial": "Key Error",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/yaml-config/docs/Data-Yaml-Config.html#t:KeyError"
      }
    }
  ]
]