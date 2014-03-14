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
        "word": "minimal-configuration"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIMPORTANT NOTE: this module works with the user's home directory, and that is the place where\nthe configuration will be read from and persisted.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Config.File",
          "name": "File",
          "package": "minimal-configuration",
          "source": "src/System-Config-File.html",
          "type": "module"
        },
        "index": {
          "description": "IMPORTANT NOTE this module works with the user home directory and that is the place where the configuration will be read from and persisted",
          "hierarchy": "System Config File",
          "module": "System.Config.File",
          "name": "File",
          "package": "minimal-configuration",
          "partial": "File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/minimal-configuration/docs/System-Config-File.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhile the internal representation is not exposed directly, an implementation\n of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance is provided in order to dump the configuration when that\n may be aidful in debugging. However, you will only see the key values stored\n inside the \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Config.File",
          "name": "Configuration",
          "package": "minimal-configuration",
          "source": "src/System-Config-File.html#Configuration",
          "type": "data"
        },
        "index": {
          "description": "While the internal representation is not exposed directly an implementation of the Show instance is provided in order to dump the configuration when that may be aidful in debugging However you will only see the key values stored inside the Map",
          "hierarchy": "System Config File",
          "module": "System.Config.File",
          "name": "Configuration",
          "package": "minimal-configuration",
          "partial": "Configuration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/minimal-configuration/docs/System-Config-File.html#t:Configuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVia the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e data constructor we are able to pass the message necessary to\n notify the user that the inputed data is not valid\n\u003c/p\u003e",
          "module": "System.Config.File",
          "name": "InteractiveValidator",
          "package": "minimal-configuration",
          "source": "src/System-Config-File.html#InteractiveValidator",
          "type": "type"
        },
        "index": {
          "description": "Via the Left data constructor we are able to pass the message necessary to notify the user that the inputed data is not valid",
          "hierarchy": "System Config File",
          "module": "System.Config.File",
          "name": "InteractiveValidator",
          "package": "minimal-configuration",
          "partial": "Interactive Validator",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/minimal-configuration/docs/System-Config-File.html#t:InteractiveValidator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Config.File",
          "name": "Key",
          "package": "minimal-configuration",
          "source": "src/System-Config-File.html#Key",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Config File",
          "module": "System.Config.File",
          "name": "Key",
          "package": "minimal-configuration",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/minimal-configuration/docs/System-Config-File.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Config.File",
          "name": "Value",
          "package": "minimal-configuration",
          "source": "src/System-Config-File.html#Value",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Config File",
          "module": "System.Config.File",
          "name": "Value",
          "package": "minimal-configuration",
          "partial": "Value",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/minimal-configuration/docs/System-Config-File.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Config.File",
          "name": "acceptAnything",
          "package": "minimal-configuration",
          "signature": "InteractiveValidator",
          "source": "src/System-Config-File.html#acceptAnything",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Config File",
          "module": "System.Config.File",
          "name": "acceptAnything",
          "package": "minimal-configuration",
          "partial": "Anything",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimal-configuration/docs/System-Config-File.html#v:acceptAnything"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Config.File",
          "name": "acceptNonBlank",
          "package": "minimal-configuration",
          "signature": "InteractiveValidator",
          "source": "src/System-Config-File.html#acceptNonBlank",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Config File",
          "module": "System.Config.File",
          "name": "acceptNonBlank",
          "package": "minimal-configuration",
          "partial": "Non Blank",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimal-configuration/docs/System-Config-File.html#v:acceptNonBlank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration doesn't contain any values?\n\u003c/p\u003e",
          "module": "System.Config.File",
          "name": "emptyC",
          "package": "minimal-configuration",
          "signature": "Configuration -\u003e Bool",
          "source": "src/System-Config-File.html#emptyC",
          "type": "function"
        },
        "index": {
          "description": "Configuration doesn contain any values",
          "hierarchy": "System Config File",
          "module": "System.Config.File",
          "name": "emptyC",
          "normalized": "Configuration-\u003eBool",
          "package": "minimal-configuration",
          "signature": "Configuration-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimal-configuration/docs/System-Config-File.html#v:emptyC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequest user input for the set of (Key, InteractiveValidator). For keys that are\n already set in the \u003ccode\u003e\u003ca\u003eConfiguration\u003c/a\u003e\u003c/code\u003e, values will be overwritten\n\u003c/p\u003e",
          "module": "System.Config.File",
          "name": "fillInteractively",
          "package": "minimal-configuration",
          "signature": "Configuration -\u003e [(Key, InteractiveValidator)] -\u003e IO Configuration",
          "source": "src/System-Config-File.html#fillInteractively",
          "type": "function"
        },
        "index": {
          "description": "Request user input for the set of Key InteractiveValidator For keys that are already set in the Configuration values will be overwritten",
          "hierarchy": "System Config File",
          "module": "System.Config.File",
          "name": "fillInteractively",
          "normalized": "Configuration-\u003e[(Key,InteractiveValidator)]-\u003eIO Configuration",
          "package": "minimal-configuration",
          "partial": "Interactively",
          "signature": "Configuration-\u003e[(Key,InteractiveValidator)]-\u003eIO Configuration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimal-configuration/docs/System-Config-File.html#v:fillInteractively"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecution dependent on a predicate\n\u003c/p\u003e",
          "module": "System.Config.File",
          "name": "fillInteractivelyWhen",
          "package": "minimal-configuration",
          "signature": "(Configuration -\u003e Bool) -\u003e Configuration -\u003e [(Key, InteractiveValidator)] -\u003e IO Configuration",
          "source": "src/System-Config-File.html#fillInteractivelyWhen",
          "type": "function"
        },
        "index": {
          "description": "Execution dependent on predicate",
          "hierarchy": "System Config File",
          "module": "System.Config.File",
          "name": "fillInteractivelyWhen",
          "normalized": "(Configuration-\u003eBool)-\u003eConfiguration-\u003e[(Key,InteractiveValidator)]-\u003eIO Configuration",
          "package": "minimal-configuration",
          "partial": "Interactively When",
          "signature": "(Configuration-\u003eBool)-\u003eConfiguration-\u003e[(Key,InteractiveValidator)]-\u003eIO Configuration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimal-configuration/docs/System-Config-File.html#v:fillInteractivelyWhen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Config.File",
          "name": "getV",
          "package": "minimal-configuration",
          "signature": "Configuration -\u003e Key -\u003e Maybe Value",
          "source": "src/System-Config-File.html#getV",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Config File",
          "module": "System.Config.File",
          "name": "getV",
          "normalized": "Configuration-\u003eKey-\u003eMaybe Value",
          "package": "minimal-configuration",
          "signature": "Configuration-\u003eKey-\u003eMaybe Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimal-configuration/docs/System-Config-File.html#v:getV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Config.File",
          "name": "hasV",
          "package": "minimal-configuration",
          "signature": "Configuration -\u003e Key -\u003e Bool",
          "source": "src/System-Config-File.html#hasV",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Config File",
          "module": "System.Config.File",
          "name": "hasV",
          "normalized": "Configuration-\u003eKey-\u003eBool",
          "package": "minimal-configuration",
          "signature": "Configuration-\u003eKey-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimal-configuration/docs/System-Config-File.html#v:hasV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Config.File",
          "name": "loadConfiguration",
          "package": "minimal-configuration",
          "signature": "String-\u003e IO Configuration",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Config File",
          "module": "System.Config.File",
          "name": "loadConfiguration",
          "normalized": "String-\u003eIO Configuration",
          "package": "minimal-configuration",
          "partial": "Configuration",
          "signature": "String-\u003eIO Configuration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimal-configuration/docs/System-Config-File.html#v:loadConfiguration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHas this configuration just been created?\n\u003c/p\u003e",
          "module": "System.Config.File",
          "name": "newC",
          "package": "minimal-configuration",
          "signature": "Configuration -\u003e Bool",
          "source": "src/System-Config-File.html#newC",
          "type": "function"
        },
        "index": {
          "description": "Has this configuration just been created",
          "hierarchy": "System Config File",
          "module": "System.Config.File",
          "name": "newC",
          "normalized": "Configuration-\u003eBool",
          "package": "minimal-configuration",
          "signature": "Configuration-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimal-configuration/docs/System-Config-File.html#v:newC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Config.File",
          "name": "removeV",
          "package": "minimal-configuration",
          "signature": "Configuration -\u003e Key -\u003e Configuration",
          "source": "src/System-Config-File.html#removeV",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Config File",
          "module": "System.Config.File",
          "name": "removeV",
          "normalized": "Configuration-\u003eKey-\u003eConfiguration",
          "package": "minimal-configuration",
          "signature": "Configuration-\u003eKey-\u003eConfiguration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimal-configuration/docs/System-Config-File.html#v:removeV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Config.File",
          "name": "replaceV",
          "package": "minimal-configuration",
          "signature": "Configuration -\u003e Key -\u003e Value -\u003e Configuration",
          "source": "src/System-Config-File.html#replaceV",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Config File",
          "module": "System.Config.File",
          "name": "replaceV",
          "normalized": "Configuration-\u003eKey-\u003eValue-\u003eConfiguration",
          "package": "minimal-configuration",
          "signature": "Configuration-\u003eKey-\u003eValue-\u003eConfiguration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimal-configuration/docs/System-Config-File.html#v:replaceV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe configuration will be saved into the same file it was read from, obviously\n\u003c/p\u003e",
          "module": "System.Config.File",
          "name": "saveConfiguration",
          "package": "minimal-configuration",
          "signature": "Configuration -\u003e IO ()",
          "source": "src/System-Config-File.html#saveConfiguration",
          "type": "function"
        },
        "index": {
          "description": "The configuration will be saved into the same file it was read from obviously",
          "hierarchy": "System Config File",
          "module": "System.Config.File",
          "name": "saveConfiguration",
          "normalized": "Configuration-\u003eIO()",
          "package": "minimal-configuration",
          "partial": "Configuration",
          "signature": "Configuration-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimal-configuration/docs/System-Config-File.html#v:saveConfiguration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHowever if you like to stack software ala \u003ccode\u003e withSocketsDo $ withX $ withY \u003c/code\u003e this might not \n be your preferred approach. You could go with the following approach, which was excluded for\n library portability:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE ImplicitParams, RankNTypes #-}\n import System.Config.File\n\n withConfigurationImplicit :: String -\u003e ((?configuration :: Configuration) =\u003e IO b) -\u003e IO b\n withConfigurationImplicit filename f = withConfiguration filename (\\c -\u003e let ?configuration = c in f)\n\n main = withConfigurationImplicit \".apprc\" $ do\n    print $ hasV \"name\" ?configuration\n    print $ getV \"name\" ?configuration\n\u003c/pre\u003e",
          "module": "System.Config.File",
          "name": "withConfiguration",
          "package": "minimal-configuration",
          "signature": "String-\u003e (Configuration -\u003e IO b)-\u003e IO b",
          "type": "function"
        },
        "index": {
          "description": "However if you like to stack software ala withSocketsDo withX withY this might not be your preferred approach You could go with the following approach which was excluded for library portability LANGUAGE ImplicitParams RankNTypes import System.Config.File withConfigurationImplicit String configuration Configuration IO IO withConfigurationImplicit filename withConfiguration filename let configuration in main withConfigurationImplicit apprc do print hasV name configuration print getV name configuration",
          "hierarchy": "System Config File",
          "module": "System.Config.File",
          "name": "withConfiguration",
          "normalized": "String-\u003e(Configuration-\u003eIO a)-\u003eIO a",
          "package": "minimal-configuration",
          "partial": "Configuration",
          "signature": "String-\u003e(Configuration-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/minimal-configuration/docs/System-Config-File.html#v:withConfiguration"
      }
    }
  ]
]