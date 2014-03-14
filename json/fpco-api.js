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
        "word": "fpco-api"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert a Haskell value to a (JSON representation of a) Fay value.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FP.API.Convert",
          "name": "Convert",
          "package": "fpco-api",
          "source": "src/FP-API-Convert.html",
          "type": "module"
        },
        "index": {
          "description": "Convert Haskell value to JSON representation of Fay value",
          "hierarchy": "FP API Convert",
          "module": "FP.API.Convert",
          "name": "Convert",
          "package": "fpco-api",
          "partial": "Convert",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Convert.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a value representing a Fay value to a Haskell value.\n\u003c/p\u003e",
          "module": "FP.API.Convert",
          "name": "readFromFay'",
          "package": "fpco-api",
          "signature": "Value -\u003e Maybe a",
          "source": "src/FP-API-Convert.html#readFromFay%27",
          "type": "function"
        },
        "index": {
          "description": "Convert value representing Fay value to Haskell value",
          "hierarchy": "FP API Convert",
          "module": "FP.API.Convert",
          "name": "readFromFay'",
          "normalized": "Value-\u003eMaybe a",
          "package": "fpco-api",
          "partial": "From Fay'",
          "signature": "Value-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Convert.html#v:readFromFay-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Haskell value to a value representing a Fay value.\n\u003c/p\u003e",
          "module": "FP.API.Convert",
          "name": "showToFay'",
          "package": "fpco-api",
          "signature": "a -\u003e Maybe Value",
          "source": "src/FP-API-Convert.html#showToFay%27",
          "type": "function"
        },
        "index": {
          "description": "Convert Haskell value to value representing Fay value",
          "hierarchy": "FP API Convert",
          "module": "FP.API.Convert",
          "name": "showToFay'",
          "normalized": "a-\u003eMaybe Value",
          "package": "fpco-api",
          "partial": "To Fay'",
          "signature": "a-\u003eMaybe Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Convert.html#v:showToFay-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunction for running arbitrary IDE API commands.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FP.API.Run",
          "name": "Run",
          "package": "fpco-api",
          "source": "src/FP-API-Run.html",
          "type": "module"
        },
        "index": {
          "description": "Function for running arbitrary IDE API commands",
          "hierarchy": "FP API Run",
          "module": "FP.API.Run",
          "name": "Run",
          "package": "fpco-api",
          "partial": "Run",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Run.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple command configuration.\n\u003c/p\u003e",
          "module": "FP.API.Run",
          "name": "ClientConfig",
          "package": "fpco-api",
          "source": "src/FP-API-Run.html#ClientConfig",
          "type": "data"
        },
        "index": {
          "description": "Simple command configuration",
          "hierarchy": "FP API Run",
          "module": "FP.API.Run",
          "name": "ClientConfig",
          "package": "fpco-api",
          "partial": "Client Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Run.html#t:ClientConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly used internally for encoding.\n\u003c/p\u003e",
          "module": "FP.API.Run",
          "name": "Command",
          "package": "fpco-api",
          "source": "src/FP-API-Run.html#Command",
          "type": "data"
        },
        "index": {
          "description": "Only used internally for encoding",
          "hierarchy": "FP API Run",
          "module": "FP.API.Run",
          "name": "Command",
          "package": "fpco-api",
          "partial": "Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Run.html#t:Command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Run",
          "name": "CommandException",
          "package": "fpco-api",
          "source": "src/FP-API-Run.html#CommandException",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Run",
          "module": "FP.API.Run",
          "name": "CommandException",
          "package": "fpco-api",
          "partial": "Command Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Run.html#t:CommandException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad that can get info for sending commands.\n\u003c/p\u003e",
          "module": "FP.API.Run",
          "name": "MonadClient",
          "package": "fpco-api",
          "source": "src/FP-API-Run.html#MonadClient",
          "type": "class"
        },
        "index": {
          "description": "Monad that can get info for sending commands",
          "hierarchy": "FP API Run",
          "module": "FP.API.Run",
          "name": "MonadClient",
          "package": "fpco-api",
          "partial": "Monad Client",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Run.html#t:MonadClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Run",
          "name": "CC",
          "package": "fpco-api",
          "signature": "CC",
          "source": "src/FP-API-Run.html#ClientConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Run",
          "module": "FP.API.Run",
          "name": "CC",
          "package": "fpco-api",
          "partial": "CC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Run.html#v:CC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Run",
          "name": "CommandException",
          "package": "fpco-api",
          "signature": "CommandException Text",
          "source": "src/FP-API-Run.html#CommandException",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Run",
          "module": "FP.API.Run",
          "name": "CommandException",
          "package": "fpco-api",
          "partial": "Command Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Run.html#v:CommandException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Run",
          "name": "IdeCommand",
          "package": "fpco-api",
          "signature": "IdeCommand !IdeCommand",
          "source": "src/FP-API-Run.html#Command",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Run",
          "module": "FP.API.Run",
          "name": "IdeCommand",
          "package": "fpco-api",
          "partial": "Ide Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Run.html#v:IdeCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Run",
          "name": "ccCookie",
          "package": "fpco-api",
          "signature": "(IORef CookieJar)",
          "source": "src/FP-API-Run.html#ClientConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Run",
          "module": "FP.API.Run",
          "name": "ccCookie",
          "package": "fpco-api",
          "partial": "Cookie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Run.html#v:ccCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Run",
          "name": "ccManager",
          "package": "fpco-api",
          "signature": "Manager",
          "source": "src/FP-API-Run.html#ClientConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Run",
          "module": "FP.API.Run",
          "name": "ccManager",
          "package": "fpco-api",
          "partial": "Manager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Run.html#v:ccManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Run",
          "name": "ccToken",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Run.html#ClientConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Run",
          "module": "FP.API.Run",
          "name": "ccToken",
          "package": "fpco-api",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Run.html#v:ccToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Run",
          "name": "ccUrl",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Run.html#ClientConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Run",
          "module": "FP.API.Run",
          "name": "ccUrl",
          "package": "fpco-api",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Run.html#v:ccUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Run",
          "name": "ccUserAgent",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Run.html#ClientConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Run",
          "module": "FP.API.Run",
          "name": "ccUserAgent",
          "package": "fpco-api",
          "partial": "User Agent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Run.html#v:ccUserAgent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Run",
          "name": "getClientConfig",
          "package": "fpco-api",
          "signature": "m ClientConfig",
          "source": "src/FP-API-Run.html#getClientConfig",
          "type": "method"
        },
        "index": {
          "hierarchy": "FP API Run",
          "module": "FP.API.Run",
          "name": "getClientConfig",
          "package": "fpco-api",
          "partial": "Client Config",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Run.html#v:getClientConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the given command.\n\u003c/p\u003e",
          "module": "FP.API.Run",
          "name": "runCommand",
          "package": "fpco-api",
          "signature": "(Returns' a -\u003e IdeCommand) -\u003e m a",
          "source": "src/FP-API-Run.html#runCommand",
          "type": "function"
        },
        "index": {
          "description": "Run the given command",
          "hierarchy": "FP API Run",
          "module": "FP.API.Run",
          "name": "runCommand",
          "normalized": "(Returns' a-\u003eIdeCommand)-\u003eb a",
          "package": "fpco-api",
          "partial": "Command",
          "signature": "(Returns' a-\u003eIdeCommand)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Run.html#v:runCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "Types",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "Types",
          "package": "fpco-api",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "AutoCompleteInput",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#AutoCompleteInput",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "AutoCompleteInput",
          "package": "fpco-api",
          "partial": "Auto Complete Input",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:AutoCompleteInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA background job stanza.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "BgJob",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#BgJob",
          "type": "data"
        },
        "index": {
          "description": "background job stanza",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "BgJob",
          "package": "fpco-api",
          "partial": "Bg Job",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:BgJob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "BranchesList",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#BranchesList",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "BranchesList",
          "package": "fpco-api",
          "partial": "Branches List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:BranchesList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "BuildId",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#BuildId",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "BuildId",
          "package": "fpco-api",
          "partial": "Build Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:BuildId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "BuildResult",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#BuildResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "BuildResult",
          "package": "fpco-api",
          "partial": "Build Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:BuildResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "CanFail",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#CanFail",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "CanFail",
          "package": "fpco-api",
          "partial": "Can Fail",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:CanFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "CompileChanged",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#CompileChanged",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "CompileChanged",
          "package": "fpco-api",
          "partial": "Compile Changed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:CompileChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "CompileId",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#CompileId",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "CompileId",
          "package": "fpco-api",
          "partial": "Compile Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:CompileId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "DefinitionSource",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#DefinitionSource",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "DefinitionSource",
          "package": "fpco-api",
          "partial": "Definition Source",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:DefinitionSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA deployment configuration.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "Deployment",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#Deployment",
          "type": "data"
        },
        "index": {
          "description": "deployment configuration",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "Deployment",
          "package": "fpco-api",
          "partial": "Deployment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:Deployment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "DeploymentManagerInfo",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#DeploymentManagerInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "DeploymentManagerInfo",
          "package": "fpco-api",
          "partial": "Deployment Manager Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:DeploymentManagerInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "EitherSpan",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#EitherSpan",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "EitherSpan",
          "package": "fpco-api",
          "partial": "Either Span",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:EitherSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA GHC environment.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "Environment",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#Environment",
          "type": "data"
        },
        "index": {
          "description": "GHC environment",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "Environment",
          "package": "fpco-api",
          "partial": "Environment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:Environment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA date of expiration, if any.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "ExpiryTime",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#ExpiryTime",
          "type": "data"
        },
        "index": {
          "description": "date of expiration if any",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ExpiryTime",
          "package": "fpco-api",
          "partial": "Expiry Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:ExpiryTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "FayBgJobId",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#FayBgJobId",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "FayBgJobId",
          "package": "fpco-api",
          "partial": "Fay Bg Job Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:FayBgJobId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "FayDeploymentId",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#FayDeploymentId",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "FayDeploymentId",
          "package": "fpco-api",
          "partial": "Fay Deployment Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:FayDeploymentId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "FayFileName",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#FayFileName",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "FayFileName",
          "package": "fpco-api",
          "partial": "Fay File Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:FayFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "FayManualMergeId",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#FayManualMergeId",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "FayManualMergeId",
          "package": "fpco-api",
          "partial": "Fay Manual Merge Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:FayManualMergeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "FayModuleId",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#FayModuleId",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "FayModuleId",
          "package": "fpco-api",
          "partial": "Fay Module Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:FayModuleId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "FayModuleName",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#FayModuleName",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "FayModuleName",
          "package": "fpco-api",
          "partial": "Fay Module Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:FayModuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "FayProjectId",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#FayProjectId",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "FayProjectId",
          "package": "fpco-api",
          "partial": "Fay Project Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:FayProjectId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "FayRunConfigId",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#FayRunConfigId",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "FayRunConfigId",
          "package": "fpco-api",
          "partial": "Fay Run Config Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:FayRunConfigId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA token for the tutorial.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "FayTutorialToken",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#FayTutorialToken",
          "type": "type"
        },
        "index": {
          "description": "token for the tutorial",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "FayTutorialToken",
          "package": "fpco-api",
          "partial": "Fay Tutorial Token",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:FayTutorialToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "FayWebAppId",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#FayWebAppId",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "FayWebAppId",
          "package": "fpco-api",
          "partial": "Fay Web App Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:FayWebAppId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "FileChanged",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#FileChanged",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "FileChanged",
          "package": "fpco-api",
          "partial": "File Changed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:FileChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "FileContent",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#FileContent",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "FileContent",
          "package": "fpco-api",
          "partial": "File Content",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:FileContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "FileInfo",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#FileInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "FileInfo",
          "package": "fpco-api",
          "partial": "File Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:FileInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GetSettingsOutput",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#GetSettingsOutput",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GetSettingsOutput",
          "package": "fpco-api",
          "partial": "Get Settings Output",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:GetSettingsOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult of checking out a branch (or ref, in future).\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "GitCheckoutResult",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#GitCheckoutResult",
          "type": "data"
        },
        "index": {
          "description": "Result of checking out branch or ref in future",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GitCheckoutResult",
          "package": "fpco-api",
          "partial": "Git Checkout Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:GitCheckoutResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GitHistory",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#GitHistory",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GitHistory",
          "package": "fpco-api",
          "partial": "Git History",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:GitHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GitHistoryItem",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#GitHistoryItem",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GitHistoryItem",
          "package": "fpco-api",
          "partial": "Git History Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:GitHistoryItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GitMergeConflictsResult",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#GitMergeConflictsResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GitMergeConflictsResult",
          "package": "fpco-api",
          "partial": "Git Merge Conflicts Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:GitMergeConflictsResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GitPullResult",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#GitPullResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GitPullResult",
          "package": "fpco-api",
          "partial": "Git Pull Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:GitPullResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GitResolvedResult",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#GitResolvedResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GitResolvedResult",
          "package": "fpco-api",
          "partial": "Git Resolved Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:GitResolvedResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "HoogleId",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#HoogleId",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "HoogleId",
          "package": "fpco-api",
          "partial": "Hoogle Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:HoogleId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "HoogleResult",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#HoogleResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "HoogleResult",
          "package": "fpco-api",
          "partial": "Hoogle Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:HoogleResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn html reply.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "HtmlReply",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#HtmlReply",
          "type": "data"
        },
        "index": {
          "description": "An html reply",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "HtmlReply",
          "package": "fpco-api",
          "partial": "Html Reply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:HtmlReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "IdInfo",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#IdInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "IdInfo",
          "package": "fpco-api",
          "partial": "Id Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:IdInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "IdeCommand",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "IdeCommand",
          "package": "fpco-api",
          "partial": "Ide Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:IdeCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "IdeLicense",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#IdeLicense",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "IdeLicense",
          "package": "fpco-api",
          "partial": "Ide License",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:IdeLicense"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValues passed to the client when initially loading the IDE.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "InitialProjectInfo",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#InitialProjectInfo",
          "type": "data"
        },
        "index": {
          "description": "Values passed to the client when initially loading the IDE",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "InitialProjectInfo",
          "package": "fpco-api",
          "partial": "Initial Project Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:InitialProjectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs a target that we're running a web service? We're not sure that\n it's not, but if the port is open, we're confident that it is.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "IsWebResult",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#IsWebResult",
          "type": "data"
        },
        "index": {
          "description": "Is target that we re running web service We re not sure that it not but if the port is open we re confident that it is",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "IsWebResult",
          "package": "fpco-api",
          "partial": "Is Web Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:IsWebResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYaml text for a Keter config.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "KeterYaml",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#KeterYaml",
          "type": "data"
        },
        "index": {
          "description": "Yaml text for Keter config",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "KeterYaml",
          "package": "fpco-api",
          "partial": "Keter Yaml",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:KeterYaml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "LaunchInfoSnapshot",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#LaunchInfoSnapshot",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "LaunchInfoSnapshot",
          "package": "fpco-api",
          "partial": "Launch Info Snapshot",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:LaunchInfoSnapshot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "LogLevel",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#LogLevel",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "LogLevel",
          "package": "fpco-api",
          "partial": "Log Level",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:LogLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "MaybeStartToken",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#MaybeStartToken",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "MaybeStartToken",
          "package": "fpco-api",
          "partial": "Maybe Start Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:MaybeStartToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "MaybeText",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#MaybeText",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "MaybeText",
          "package": "fpco-api",
          "partial": "Maybe Text",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:MaybeText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "MergeConflict",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#MergeConflict",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "MergeConflict",
          "package": "fpco-api",
          "partial": "Merge Conflict",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:MergeConflict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "MergeModifyKind",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#MergeModifyKind",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "MergeModifyKind",
          "package": "fpco-api",
          "partial": "Merge Modify Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:MergeModifyKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "MergeModifyPair",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#MergeModifyPair",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "MergeModifyPair",
          "package": "fpco-api",
          "partial": "Merge Modify Pair",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:MergeModifyPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "MessageTag",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#MessageTag",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "MessageTag",
          "package": "fpco-api",
          "partial": "Message Tag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:MessageTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ModuleIncluded",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#ModuleIncluded",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ModuleIncluded",
          "package": "fpco-api",
          "partial": "Module Included",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:ModuleIncluded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ModuleLink",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#ModuleLink",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ModuleLink",
          "package": "fpco-api",
          "partial": "Module Link",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:ModuleLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a new background job.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "NewBgJob",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#NewBgJob",
          "type": "data"
        },
        "index": {
          "description": "Make new background job",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "NewBgJob",
          "package": "fpco-api",
          "partial": "New Bg Job",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:NewBgJob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "NewDeployment",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#NewDeployment",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "NewDeployment",
          "package": "fpco-api",
          "partial": "New Deployment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:NewDeployment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a new run configuration.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "NewRunConfig",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#NewRunConfig",
          "type": "data"
        },
        "index": {
          "description": "Make new run configuration",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "NewRunConfig",
          "package": "fpco-api",
          "partial": "New Run Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:NewRunConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "NewWebApp",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#NewWebApp",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "NewWebApp",
          "package": "fpco-api",
          "partial": "New Web App",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:NewWebApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "PackageId",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#PackageId",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "PackageId",
          "package": "fpco-api",
          "partial": "Package Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:PackageId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "PackageLink",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#PackageLink",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "PackageLink",
          "package": "fpco-api",
          "partial": "Package Link",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:PackageLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "PortListeningResult",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#PortListeningResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "PortListeningResult",
          "package": "fpco-api",
          "partial": "Port Listening Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:PortListeningResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ProcId",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#ProcId",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ProcId",
          "package": "fpco-api",
          "partial": "Proc Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:ProcId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ProcessStatusSnapshot",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#ProcessStatusSnapshot",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ProcessStatusSnapshot",
          "package": "fpco-api",
          "partial": "Process Status Snapshot",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:ProcessStatusSnapshot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type represents intermediate progress information during compilation.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "Progress",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#Progress",
          "type": "data"
        },
        "index": {
          "description": "This type represents intermediate progress information during compilation",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "Progress",
          "package": "fpco-api",
          "partial": "Progress",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:Progress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ProjectMessagesFilter",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#ProjectMessagesFilter",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ProjectMessagesFilter",
          "package": "fpco-api",
          "partial": "Project Messages Filter",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:ProjectMessagesFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ProjectMessagesOutput",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#ProjectMessagesOutput",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ProjectMessagesOutput",
          "package": "fpco-api",
          "partial": "Project Messages Output",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:ProjectMessagesOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ProjectMessagesRequest",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#ProjectMessagesRequest",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ProjectMessagesRequest",
          "package": "fpco-api",
          "partial": "Project Messages Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:ProjectMessagesRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates the state of a starting project. Each request can either\n indicate that there is more data coming, or that this is the final status.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "ProjectStartStatus",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#ProjectStartStatus",
          "type": "data"
        },
        "index": {
          "description": "Indicates the state of starting project Each request can either indicate that there is more data coming or that this is the final status",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ProjectStartStatus",
          "package": "fpco-api",
          "partial": "Project Start Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:ProjectStartStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ProjectState",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#ProjectState",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ProjectState",
          "package": "fpco-api",
          "partial": "Project State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:ProjectState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ProjectStatusSnapshot",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#ProjectStatusSnapshot",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ProjectStatusSnapshot",
          "package": "fpco-api",
          "partial": "Project Status Snapshot",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:ProjectStatusSnapshot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "Publicize",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#Publicize",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "Publicize",
          "package": "fpco-api",
          "partial": "Publicize",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:Publicize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA randomly generated host name.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "RandomHostName",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#RandomHostName",
          "type": "data"
        },
        "index": {
          "description": "randomly generated host name",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RandomHostName",
          "package": "fpco-api",
          "partial": "Random Host Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:RandomHostName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RemotesList",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#RemotesList",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RemotesList",
          "package": "fpco-api",
          "partial": "Remotes List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:RemotesList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RenameFileOutput",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#RenameFileOutput",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RenameFileOutput",
          "package": "fpco-api",
          "partial": "Rename File Output",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:RenameFileOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RenameType",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#RenameType",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RenameType",
          "package": "fpco-api",
          "partial": "Rename Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:RenameType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ReparseSettingsOutput",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#ReparseSettingsOutput",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ReparseSettingsOutput",
          "package": "fpco-api",
          "partial": "Reparse Settings Output",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:ReparseSettingsOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "Returns'",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#Returns%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "Returns'",
          "package": "fpco-api",
          "partial": "Returns'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:Returns-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA run configuration for a project.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "RunConfig",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#RunConfig",
          "type": "data"
        },
        "index": {
          "description": "run configuration for project",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RunConfig",
          "package": "fpco-api",
          "partial": "Run Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:RunConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RunGhciOutput",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#RunGhciOutput",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RunGhciOutput",
          "package": "fpco-api",
          "partial": "Run Ghci Output",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:RunGhciOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RunnerBuildStatus",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#RunnerBuildStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RunnerBuildStatus",
          "package": "fpco-api",
          "partial": "Runner Build Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:RunnerBuildStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RunnerCompileStatus",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#RunnerCompileStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RunnerCompileStatus",
          "package": "fpco-api",
          "partial": "Runner Compile Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:RunnerCompileStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RunnerMessage",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#RunnerMessage",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RunnerMessage",
          "package": "fpco-api",
          "partial": "Runner Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:RunnerMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RunnerMessageEnvelope",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#RunnerMessageEnvelope",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RunnerMessageEnvelope",
          "package": "fpco-api",
          "partial": "Runner Message Envelope",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:RunnerMessageEnvelope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RunnerOpeningStatus",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#RunnerOpeningStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RunnerOpeningStatus",
          "package": "fpco-api",
          "partial": "Runner Opening Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:RunnerOpeningStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SaveFileOutput",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#SaveFileOutput",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SaveFileOutput",
          "package": "fpco-api",
          "partial": "Save File Output",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:SaveFileOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SearchId",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#SearchId",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SearchId",
          "package": "fpco-api",
          "partial": "Search Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:SearchId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SearchQuery",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#SearchQuery",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SearchQuery",
          "package": "fpco-api",
          "partial": "Search Query",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:SearchQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SearchResult",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#SearchResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SearchResult",
          "package": "fpco-api",
          "partial": "Search Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:SearchResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SetExtension",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#SetExtension",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SetExtension",
          "package": "fpco-api",
          "partial": "Set Extension",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:SetExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SetSettingsInput",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#SetSettingsInput",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SetSettingsInput",
          "package": "fpco-api",
          "partial": "Set Settings Input",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:SetSettingsInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error or warning in a source module.\n\u003c/p\u003e\u003cp\u003eMost errors are associated with a span of text, but some have only a\n location point.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "SourceInfo",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#SourceInfo",
          "type": "data"
        },
        "index": {
          "description": "An error or warning in source module Most errors are associated with span of text but some have only location point",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SourceInfo",
          "package": "fpco-api",
          "partial": "Source Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:SourceInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeverity of a piece of info.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "SourceInfoKind",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#SourceInfoKind",
          "type": "data"
        },
        "index": {
          "description": "Severity of piece of info",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SourceInfoKind",
          "package": "fpco-api",
          "partial": "Source Info Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:SourceInfoKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SourceSpan",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#SourceSpan",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SourceSpan",
          "package": "fpco-api",
          "partial": "Source Span",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:SourceSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossible stanza types.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "Stanza",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#Stanza",
          "type": "data"
        },
        "index": {
          "description": "Possible stanza types",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "Stanza",
          "package": "fpco-api",
          "partial": "Stanza",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:Stanza"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "StatusHash",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#StatusHash",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "StatusHash",
          "package": "fpco-api",
          "partial": "Status Hash",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:StatusHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple text reply.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "TextReply",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#TextReply",
          "type": "data"
        },
        "index": {
          "description": "simple text reply",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "TextReply",
          "package": "fpco-api",
          "partial": "Text Reply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:TextReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThemes supported by the IDE.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "Theme",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#Theme",
          "type": "data"
        },
        "index": {
          "description": "Themes supported by the IDE",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "Theme",
          "package": "fpco-api",
          "partial": "Theme",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:Theme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "TopLevelIdentifier",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#TopLevelIdentifier",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "TopLevelIdentifier",
          "package": "fpco-api",
          "partial": "Top Level Identifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:TopLevelIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "TopLevelIdentifiers",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#TopLevelIdentifiers",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "TopLevelIdentifiers",
          "package": "fpco-api",
          "partial": "Top Level Identifiers",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:TopLevelIdentifiers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToken for a tutorial.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "TutorialConcurrentToken",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#TutorialConcurrentToken",
          "type": "newtype"
        },
        "index": {
          "description": "Token for tutorial",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "TutorialConcurrentToken",
          "package": "fpco-api",
          "partial": "Tutorial Concurrent Token",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:TutorialConcurrentToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "TypeInfo",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#TypeInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "TypeInfo",
          "package": "fpco-api",
          "partial": "Type Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:TypeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "UploadedBuild",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#UploadedBuild",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "UploadedBuild",
          "package": "fpco-api",
          "partial": "Uploaded Build",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:UploadedBuild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult of trying to use a hostname.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "UseHostName",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#UseHostName",
          "type": "data"
        },
        "index": {
          "description": "Result of trying to use hostname",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "UseHostName",
          "package": "fpco-api",
          "partial": "Use Host Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:UseHostName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA web app stanza.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "WebApp",
          "package": "fpco-api",
          "source": "src/FP-API-Types.html#WebApp",
          "type": "data"
        },
        "index": {
          "description": "web app stanza",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "WebApp",
          "package": "fpco-api",
          "partial": "Web App",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#t:WebApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "AddFile",
          "package": "fpco-api",
          "signature": "AddFile FileInfo FayProjectId (Returns' SaveFileOutput)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "AddFile",
          "package": "fpco-api",
          "partial": "Add File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:AddFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "Added",
          "package": "fpco-api",
          "signature": "Added",
          "source": "src/FP-API-Types.html#MergeModifyKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "Added",
          "package": "fpco-api",
          "partial": "Added",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:Added"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "AutoCompleteInput",
          "package": "fpco-api",
          "signature": "AutoCompleteInput",
          "source": "src/FP-API-Types.html#AutoCompleteInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "AutoCompleteInput",
          "package": "fpco-api",
          "partial": "Auto Complete Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:AutoCompleteInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "AutoCompleteResults",
          "package": "fpco-api",
          "signature": "AutoCompleteResults (Maybe AutoCompleteInput) [Text]",
          "source": "src/FP-API-Types.html#RunnerMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "AutoCompleteResults",
          "normalized": "AutoCompleteResults(Maybe AutoCompleteInput)[Text]",
          "package": "fpco-api",
          "partial": "Auto Complete Results",
          "signature": "AutoCompleteResults(Maybe AutoCompleteInput)[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:AutoCompleteResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "BgJob",
          "package": "fpco-api",
          "signature": "BgJob",
          "source": "src/FP-API-Types.html#BgJob",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "BgJob",
          "package": "fpco-api",
          "partial": "Bg Job",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:BgJob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "BgJobStanza",
          "package": "fpco-api",
          "signature": "BgJobStanza FayBgJobId BgJob",
          "source": "src/FP-API-Types.html#Stanza",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "BgJobStanza",
          "package": "fpco-api",
          "partial": "Bg Job Stanza",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:BgJobStanza"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "BranchFromCommit",
          "package": "fpco-api",
          "signature": "BranchFromCommit Text Text FayProjectId (Returns' ())",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "BranchFromCommit",
          "normalized": "BranchFromCommit Text Text FayProjectId(Returns'())",
          "package": "fpco-api",
          "partial": "Branch From Commit",
          "signature": "BranchFromCommit Text Text FayProjectId(Returns'())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:BranchFromCommit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "BranchesList",
          "package": "fpco-api",
          "signature": "BranchesList Text [Text]",
          "source": "src/FP-API-Types.html#BranchesList",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "BranchesList",
          "normalized": "BranchesList Text[Text]",
          "package": "fpco-api",
          "partial": "Branches List",
          "signature": "BranchesList Text[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:BranchesList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "BuildId",
          "package": "fpco-api",
          "signature": "BuildId",
          "source": "src/FP-API-Types.html#BuildId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "BuildId",
          "package": "fpco-api",
          "partial": "Build Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:BuildId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "BuildResult",
          "package": "fpco-api",
          "signature": "BuildResult",
          "source": "src/FP-API-Types.html#BuildResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "BuildResult",
          "package": "fpco-api",
          "partial": "Build Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:BuildResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "CheckHostName",
          "package": "fpco-api",
          "signature": "CheckHostName Text FayProjectId (Returns' UseHostName)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "CheckHostName",
          "package": "fpco-api",
          "partial": "Check Host Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:CheckHostName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "CheckoutBranch",
          "package": "fpco-api",
          "signature": "CheckoutBranch Text FayProjectId (Returns' GitCheckoutResult)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "CheckoutBranch",
          "package": "fpco-api",
          "partial": "Checkout Branch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:CheckoutBranch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "CloseAllProjects",
          "package": "fpco-api",
          "signature": "CloseAllProjects (Returns' ())",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "CloseAllProjects",
          "normalized": "CloseAllProjects(Returns'())",
          "package": "fpco-api",
          "partial": "Close All Projects",
          "signature": "CloseAllProjects(Returns'())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:CloseAllProjects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "CommitToGit",
          "package": "fpco-api",
          "signature": "CommitToGit Text FayProjectId (Returns' ())",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "CommitToGit",
          "normalized": "CommitToGit Text FayProjectId(Returns'())",
          "package": "fpco-api",
          "partial": "Commit To Git",
          "signature": "CommitToGit Text FayProjectId(Returns'())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:CommitToGit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "CompileBinary",
          "package": "fpco-api",
          "signature": "CompileBinary FayFileName [(Text, Text)] FayProjectId (Returns' BuildId)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "CompileBinary",
          "normalized": "CompileBinary FayFileName[(Text,Text)]FayProjectId(Returns' BuildId)",
          "package": "fpco-api",
          "partial": "Compile Binary",
          "signature": "CompileBinary FayFileName[(Text,Text)]FayProjectId(Returns' BuildId)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:CompileBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "CompileChanged",
          "package": "fpco-api",
          "signature": "CompileChanged",
          "source": "src/FP-API-Types.html#CompileChanged",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "CompileChanged",
          "package": "fpco-api",
          "partial": "Compile Changed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:CompileChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "CompileId",
          "package": "fpco-api",
          "signature": "CompileId",
          "source": "src/FP-API-Types.html#CompileId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "CompileId",
          "package": "fpco-api",
          "partial": "Compile Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:CompileId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "CreateBranch",
          "package": "fpco-api",
          "signature": "CreateBranch Text Text FayProjectId (Returns' ())",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "CreateBranch",
          "normalized": "CreateBranch Text Text FayProjectId(Returns'())",
          "package": "fpco-api",
          "partial": "Create Branch",
          "signature": "CreateBranch Text Text FayProjectId(Returns'())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:CreateBranch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "DefinitionBinder",
          "package": "fpco-api",
          "signature": "DefinitionBinder Text",
          "source": "src/FP-API-Types.html#DefinitionSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "DefinitionBinder",
          "package": "fpco-api",
          "partial": "Definition Binder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:DefinitionBinder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "DefinitionImported",
          "package": "fpco-api",
          "signature": "DefinitionImported Text FayModuleId FayModuleId EitherSpan EitherSpan",
          "source": "src/FP-API-Types.html#DefinitionSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "DefinitionImported",
          "package": "fpco-api",
          "partial": "Definition Imported",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:DefinitionImported"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "DefinitionLocal",
          "package": "fpco-api",
          "signature": "DefinitionLocal SourceSpan",
          "source": "src/FP-API-Types.html#DefinitionSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "DefinitionLocal",
          "package": "fpco-api",
          "partial": "Definition Local",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:DefinitionLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "DefinitionTextSpan",
          "package": "fpco-api",
          "signature": "DefinitionTextSpan Text Text",
          "source": "src/FP-API-Types.html#DefinitionSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "DefinitionTextSpan",
          "package": "fpco-api",
          "partial": "Definition Text Span",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:DefinitionTextSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "DefinitionWiredIn",
          "package": "fpco-api",
          "signature": "DefinitionWiredIn Text",
          "source": "src/FP-API-Types.html#DefinitionSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "DefinitionWiredIn",
          "package": "fpco-api",
          "partial": "Definition Wired In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:DefinitionWiredIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "DeleteBranch",
          "package": "fpco-api",
          "signature": "DeleteBranch Text FayProjectId (Returns' ())",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "DeleteBranch",
          "normalized": "DeleteBranch Text FayProjectId(Returns'())",
          "package": "fpco-api",
          "partial": "Delete Branch",
          "signature": "DeleteBranch Text FayProjectId(Returns'())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:DeleteBranch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "DeleteFile",
          "package": "fpco-api",
          "signature": "DeleteFile FayFileName FayProjectId (Returns' CompileChanged)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "DeleteFile",
          "package": "fpco-api",
          "partial": "Delete File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:DeleteFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "DeleteProject",
          "package": "fpco-api",
          "signature": "DeleteProject Text FayProjectId (Returns' ())",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "DeleteProject",
          "normalized": "DeleteProject Text FayProjectId(Returns'())",
          "package": "fpco-api",
          "partial": "Delete Project",
          "signature": "DeleteProject Text FayProjectId(Returns'())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:DeleteProject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "Deleted",
          "package": "fpco-api",
          "signature": "Deleted",
          "source": "src/FP-API-Types.html#MergeModifyKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "Deleted",
          "package": "fpco-api",
          "partial": "Deleted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:Deleted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "Deployment",
          "package": "fpco-api",
          "signature": "Deployment",
          "source": "src/FP-API-Types.html#Deployment",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "Deployment",
          "package": "fpco-api",
          "partial": "Deployment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:Deployment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "DeploymentManagerInfo",
          "package": "fpco-api",
          "signature": "DeploymentManagerInfo",
          "source": "src/FP-API-Types.html#DeploymentManagerInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "DeploymentManagerInfo",
          "package": "fpco-api",
          "partial": "Deployment Manager Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:DeploymentManagerInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "Environment",
          "package": "fpco-api",
          "signature": "Environment",
          "source": "src/FP-API-Types.html#Environment",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "Environment",
          "package": "fpco-api",
          "partial": "Environment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:Environment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ExpiryTime",
          "package": "fpco-api",
          "signature": "ExpiryTime (Maybe Integer)",
          "source": "src/FP-API-Types.html#ExpiryTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ExpiryTime",
          "package": "fpco-api",
          "partial": "Expiry Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ExpiryTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "Failure",
          "package": "fpco-api",
          "signature": "Failure Text",
          "source": "src/FP-API-Types.html#CanFail",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "Failure",
          "package": "fpco-api",
          "partial": "Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:Failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "FayBgJobId",
          "package": "fpco-api",
          "signature": "FayBgJobId",
          "source": "src/FP-API-Types.html#FayBgJobId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "FayBgJobId",
          "package": "fpco-api",
          "partial": "Fay Bg Job Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:FayBgJobId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "FayCompileResults",
          "package": "fpco-api",
          "signature": "FayCompileResults Text",
          "source": "src/FP-API-Types.html#RunnerMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "FayCompileResults",
          "package": "fpco-api",
          "partial": "Fay Compile Results",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:FayCompileResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "FayDeploymentId",
          "package": "fpco-api",
          "signature": "FayDeploymentId",
          "source": "src/FP-API-Types.html#FayDeploymentId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "FayDeploymentId",
          "package": "fpco-api",
          "partial": "Fay Deployment Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:FayDeploymentId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "FayFileName",
          "package": "fpco-api",
          "signature": "FayFileName",
          "source": "src/FP-API-Types.html#FayFileName",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "FayFileName",
          "package": "fpco-api",
          "partial": "Fay File Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:FayFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "FayManualMergeId",
          "package": "fpco-api",
          "signature": "FayManualMergeId",
          "source": "src/FP-API-Types.html#FayManualMergeId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "FayManualMergeId",
          "package": "fpco-api",
          "partial": "Fay Manual Merge Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:FayManualMergeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "FayModuleId",
          "package": "fpco-api",
          "signature": "FayModuleId (Maybe FayFileName) FayModuleName PackageId",
          "source": "src/FP-API-Types.html#FayModuleId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "FayModuleId",
          "package": "fpco-api",
          "partial": "Fay Module Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:FayModuleId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "FayModuleName",
          "package": "fpco-api",
          "signature": "FayModuleName",
          "source": "src/FP-API-Types.html#FayModuleName",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "FayModuleName",
          "package": "fpco-api",
          "partial": "Fay Module Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:FayModuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "FayProjectId",
          "package": "fpco-api",
          "signature": "FayProjectId",
          "source": "src/FP-API-Types.html#FayProjectId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "FayProjectId",
          "package": "fpco-api",
          "partial": "Fay Project Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:FayProjectId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "FayRunConfigId",
          "package": "fpco-api",
          "signature": "FayRunConfigId",
          "source": "src/FP-API-Types.html#FayRunConfigId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "FayRunConfigId",
          "package": "fpco-api",
          "partial": "Fay Run Config Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:FayRunConfigId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "FayWebAppId",
          "package": "fpco-api",
          "signature": "FayWebAppId",
          "source": "src/FP-API-Types.html#FayWebAppId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "FayWebAppId",
          "package": "fpco-api",
          "partial": "Fay Web App Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:FayWebAppId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "FileChanged",
          "package": "fpco-api",
          "signature": "FileChanged",
          "source": "src/FP-API-Types.html#FileChanged",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "FileChanged",
          "package": "fpco-api",
          "partial": "File Changed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:FileChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "FileContent",
          "package": "fpco-api",
          "signature": "FileContent",
          "source": "src/FP-API-Types.html#FileContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "FileContent",
          "package": "fpco-api",
          "partial": "File Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:FileContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "FileInfo",
          "package": "fpco-api",
          "signature": "FileInfo",
          "source": "src/FP-API-Types.html#FileInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "FileInfo",
          "package": "fpco-api",
          "partial": "File Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:FileInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GCRDirty",
          "package": "fpco-api",
          "signature": "GCRDirty",
          "source": "src/FP-API-Types.html#GitCheckoutResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GCRDirty",
          "package": "fpco-api",
          "partial": "GCRDirty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GCRDirty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GCROk",
          "package": "fpco-api",
          "signature": "GCROk (Maybe InitialProjectInfo)",
          "source": "src/FP-API-Types.html#GitCheckoutResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GCROk",
          "package": "fpco-api",
          "partial": "GCROk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GCROk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GPRDirtyTree",
          "package": "fpco-api",
          "signature": "GPRDirtyTree",
          "source": "src/FP-API-Types.html#GitPullResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GPRDirtyTree",
          "package": "fpco-api",
          "partial": "GPRDirty Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GPRDirtyTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GPRManualMerge",
          "package": "fpco-api",
          "signature": "GPRManualMerge Text InitialProjectInfo",
          "source": "src/FP-API-Types.html#GitPullResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GPRManualMerge",
          "package": "fpco-api",
          "partial": "GPRManual Merge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GPRManualMerge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GPRSuccess",
          "package": "fpco-api",
          "signature": "GPRSuccess InitialProjectInfo",
          "source": "src/FP-API-Types.html#GitPullResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GPRSuccess",
          "package": "fpco-api",
          "partial": "GPRSuccess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GPRSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GRRStillUnresolved",
          "package": "fpco-api",
          "signature": "GRRStillUnresolved [MergeConflict]",
          "source": "src/FP-API-Types.html#GitResolvedResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GRRStillUnresolved",
          "normalized": "GRRStillUnresolved[MergeConflict]",
          "package": "fpco-api",
          "partial": "GRRStill Unresolved",
          "signature": "GRRStillUnresolved[MergeConflict]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GRRStillUnresolved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GRRSuccess",
          "package": "fpco-api",
          "signature": "GRRSuccess",
          "source": "src/FP-API-Types.html#GitResolvedResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GRRSuccess",
          "package": "fpco-api",
          "partial": "GRRSuccess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GRRSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GenerateConfiguration",
          "package": "fpco-api",
          "signature": "GenerateConfiguration (Returns' ())",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GenerateConfiguration",
          "normalized": "GenerateConfiguration(Returns'())",
          "package": "fpco-api",
          "partial": "Generate Configuration",
          "signature": "GenerateConfiguration(Returns'())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GenerateConfiguration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GetAllFiles",
          "package": "fpco-api",
          "signature": "GetAllFiles FayProjectId (Returns' [(FayFileName, ModuleIncluded)])",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GetAllFiles",
          "normalized": "GetAllFiles FayProjectId(Returns'[(FayFileName,ModuleIncluded)])",
          "package": "fpco-api",
          "partial": "Get All Files",
          "signature": "GetAllFiles FayProjectId(Returns'[(FayFileName,ModuleIncluded)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GetAllFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GetAutocompletions",
          "package": "fpco-api",
          "signature": "GetAutocompletions AutoCompleteInput FayProjectId (Returns' ())",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GetAutocompletions",
          "normalized": "GetAutocompletions AutoCompleteInput FayProjectId(Returns'())",
          "package": "fpco-api",
          "partial": "Get Autocompletions",
          "signature": "GetAutocompletions AutoCompleteInput FayProjectId(Returns'())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GetAutocompletions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GetConfigurationProject",
          "package": "fpco-api",
          "signature": "GetConfigurationProject (Returns' Text)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GetConfigurationProject",
          "package": "fpco-api",
          "partial": "Get Configuration Project",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GetConfigurationProject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GetDefinitionSource",
          "package": "fpco-api",
          "signature": "GetDefinitionSource SourceSpan FayProjectId (Returns' ())",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GetDefinitionSource",
          "normalized": "GetDefinitionSource SourceSpan FayProjectId(Returns'())",
          "package": "fpco-api",
          "partial": "Get Definition Source",
          "signature": "GetDefinitionSource SourceSpan FayProjectId(Returns'())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GetDefinitionSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GetDeploymentManagerInfo",
          "package": "fpco-api",
          "signature": "GetDeploymentManagerInfo FayProjectId (Returns' DeploymentManagerInfo)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GetDeploymentManagerInfo",
          "package": "fpco-api",
          "partial": "Get Deployment Manager Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GetDeploymentManagerInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GetFile",
          "package": "fpco-api",
          "signature": "GetFile FayFileName FayProjectId (Returns' FileContent)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GetFile",
          "package": "fpco-api",
          "partial": "Get File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GetFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GetFileToken",
          "package": "fpco-api",
          "signature": "GetFileToken FayFileName FayProjectId (Returns' FayTutorialToken)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GetFileToken",
          "package": "fpco-api",
          "partial": "Get File Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GetFileToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GetGitHistory",
          "package": "fpco-api",
          "signature": "GetGitHistory Int Int FayProjectId (Returns' GitHistory)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GetGitHistory",
          "package": "fpco-api",
          "partial": "Get Git History",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GetGitHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GetGithubUrl",
          "package": "fpco-api",
          "signature": "GetGithubUrl Text (Returns (CanFail Text))",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GetGithubUrl",
          "package": "fpco-api",
          "partial": "Get Github Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GetGithubUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GetInitialProjectInfo",
          "package": "fpco-api",
          "signature": "GetInitialProjectInfo FayProjectId (Returns' InitialProjectInfo)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GetInitialProjectInfo",
          "package": "fpco-api",
          "partial": "Get Initial Project Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GetInitialProjectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GetKeterYaml",
          "package": "fpco-api",
          "signature": "GetKeterYaml FayDeploymentId FayModuleName FayProjectId (Returns' KeterYaml)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GetKeterYaml",
          "package": "fpco-api",
          "partial": "Get Keter Yaml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GetKeterYaml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GetNewBgJob",
          "package": "fpco-api",
          "signature": "GetNewBgJob FayDeploymentId FayProjectId (Returns' NewBgJob)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GetNewBgJob",
          "package": "fpco-api",
          "partial": "Get New Bg Job",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GetNewBgJob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GetNewDeployment",
          "package": "fpco-api",
          "signature": "GetNewDeployment FayProjectId (Returns' NewDeployment)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GetNewDeployment",
          "package": "fpco-api",
          "partial": "Get New Deployment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GetNewDeployment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GetNewRunConfig",
          "package": "fpco-api",
          "signature": "GetNewRunConfig FayProjectId (Returns' NewRunConfig)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GetNewRunConfig",
          "package": "fpco-api",
          "partial": "Get New Run Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GetNewRunConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GetNewWebApp",
          "package": "fpco-api",
          "signature": "GetNewWebApp FayDeploymentId FayProjectId (Returns' NewWebApp)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GetNewWebApp",
          "package": "fpco-api",
          "partial": "Get New Web App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GetNewWebApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GetProjectId",
          "package": "fpco-api",
          "signature": "GetProjectId Text (Returns' FayProjectId)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GetProjectId",
          "package": "fpco-api",
          "partial": "Get Project Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GetProjectId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GetProjectMessages",
          "package": "fpco-api",
          "signature": "GetProjectMessages ProjectMessagesRequest FayProjectId (Returns' ProjectMessagesOutput)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GetProjectMessages",
          "package": "fpco-api",
          "partial": "Get Project Messages",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GetProjectMessages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GetRandomHostName",
          "package": "fpco-api",
          "signature": "GetRandomHostName FayProjectId (Returns' RandomHostName)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GetRandomHostName",
          "package": "fpco-api",
          "partial": "Get Random Host Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GetRandomHostName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GetSettings",
          "package": "fpco-api",
          "signature": "GetSettings FayProjectId (Returns' GetSettingsOutput)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GetSettings",
          "package": "fpco-api",
          "partial": "Get Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GetSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GetSettingsOutput",
          "package": "fpco-api",
          "signature": "GetSettingsOutput",
          "source": "src/FP-API-Types.html#GetSettingsOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GetSettingsOutput",
          "package": "fpco-api",
          "partial": "Get Settings Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GetSettingsOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GetTarget",
          "package": "fpco-api",
          "signature": "GetTarget FayProjectId (Returns' (Maybe (Either FayFileName FayRunConfigId)))",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GetTarget",
          "package": "fpco-api",
          "partial": "Get Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GetTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GetTrialExpiry",
          "package": "fpco-api",
          "signature": "GetTrialExpiry (Returns' ExpiryTime)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GetTrialExpiry",
          "package": "fpco-api",
          "partial": "Get Trial Expiry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GetTrialExpiry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GetTypeInfo",
          "package": "fpco-api",
          "signature": "GetTypeInfo SourceSpan Int FayProjectId (Returns' ())",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GetTypeInfo",
          "normalized": "GetTypeInfo SourceSpan Int FayProjectId(Returns'())",
          "package": "fpco-api",
          "partial": "Get Type Info",
          "signature": "GetTypeInfo SourceSpan Int FayProjectId(Returns'())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GetTypeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GitDiff",
          "package": "fpco-api",
          "signature": "GitDiff FayProjectId (Returns' Text)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GitDiff",
          "package": "fpco-api",
          "partial": "Git Diff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GitDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GitHistory",
          "package": "fpco-api",
          "signature": "GitHistory [GitHistoryItem]",
          "source": "src/FP-API-Types.html#GitHistory",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GitHistory",
          "normalized": "GitHistory[GitHistoryItem]",
          "package": "fpco-api",
          "partial": "Git History",
          "signature": "GitHistory[GitHistoryItem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GitHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GitHistoryItem",
          "package": "fpco-api",
          "signature": "GitHistoryItem",
          "source": "src/FP-API-Types.html#GitHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GitHistoryItem",
          "package": "fpco-api",
          "partial": "Git History Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GitHistoryItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText == URL\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "GitMergeAbort",
          "package": "fpco-api",
          "signature": "GitMergeAbort Text FayProjectId (Returns' InitialProjectInfo)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "description": "Text URL",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GitMergeAbort",
          "package": "fpco-api",
          "partial": "Git Merge Abort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GitMergeAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GitMergeConflictsResult",
          "package": "fpco-api",
          "signature": "GitMergeConflictsResult [MergeConflict]",
          "source": "src/FP-API-Types.html#GitMergeConflictsResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GitMergeConflictsResult",
          "normalized": "GitMergeConflictsResult[MergeConflict]",
          "package": "fpco-api",
          "partial": "Git Merge Conflicts Result",
          "signature": "GitMergeConflictsResult[MergeConflict]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GitMergeConflictsResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText == URL, Msg\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "GitMergeDone",
          "package": "fpco-api",
          "signature": "GitMergeDone Text MaybeText FayProjectId (Returns' GitResolvedResult)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "description": "Text URL Msg",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GitMergeDone",
          "package": "fpco-api",
          "partial": "Git Merge Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GitMergeDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText == URL\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "GitPull",
          "package": "fpco-api",
          "signature": "GitPull Text FayProjectId (Returns' GitPullResult)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "description": "Text URL",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GitPull",
          "package": "fpco-api",
          "partial": "Git Pull",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GitPull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText == URL\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "GitPush",
          "package": "fpco-api",
          "signature": "GitPush Text FayProjectId (Returns' ())",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "description": "Text URL",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GitPush",
          "normalized": "GitPush Text FayProjectId(Returns'())",
          "package": "fpco-api",
          "partial": "Git Push",
          "signature": "GitPush Text FayProjectId(Returns'())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GitPush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "GitResolveFile",
          "package": "fpco-api",
          "signature": "GitResolveFile FayFileName FayProjectId (Returns' ())",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "GitResolveFile",
          "normalized": "GitResolveFile FayFileName FayProjectId(Returns'())",
          "package": "fpco-api",
          "partial": "Git Resolve File",
          "signature": "GitResolveFile FayFileName FayProjectId(Returns'())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:GitResolveFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "HoogleId",
          "package": "fpco-api",
          "signature": "HoogleId",
          "source": "src/FP-API-Types.html#HoogleId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "HoogleId",
          "package": "fpco-api",
          "partial": "Hoogle Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:HoogleId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "HoogleResult",
          "package": "fpco-api",
          "signature": "HoogleResult",
          "source": "src/FP-API-Types.html#HoogleResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "HoogleResult",
          "package": "fpco-api",
          "partial": "Hoogle Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:HoogleResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "HoogleResults",
          "package": "fpco-api",
          "signature": "HoogleResults Text [HoogleResult] (Maybe Int)",
          "source": "src/FP-API-Types.html#RunnerMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "HoogleResults",
          "normalized": "HoogleResults Text[HoogleResult](Maybe Int)",
          "package": "fpco-api",
          "partial": "Hoogle Results",
          "signature": "HoogleResults Text[HoogleResult](Maybe Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:HoogleResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHost name is in use by someone else, can't be used.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "HostnameInUse",
          "package": "fpco-api",
          "signature": "HostnameInUse",
          "source": "src/FP-API-Types.html#UseHostName",
          "type": "function"
        },
        "index": {
          "description": "Host name is in use by someone else can be used",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "HostnameInUse",
          "package": "fpco-api",
          "partial": "Hostname In Use",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:HostnameInUse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvalid hostname.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "HostnameInvalid",
          "package": "fpco-api",
          "signature": "HostnameInvalid",
          "source": "src/FP-API-Types.html#UseHostName",
          "type": "function"
        },
        "index": {
          "description": "Invalid hostname",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "HostnameInvalid",
          "package": "fpco-api",
          "partial": "Hostname Invalid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:HostnameInvalid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHost name was already or has now been registered and is now in use.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "HostnameOK",
          "package": "fpco-api",
          "signature": "HostnameOK",
          "source": "src/FP-API-Types.html#UseHostName",
          "type": "function"
        },
        "index": {
          "description": "Host name was already or has now been registered and is now in use",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "HostnameOK",
          "package": "fpco-api",
          "partial": "Hostname OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:HostnameOK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCouldn't register the hostname due to quota.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "HostnameQuotaExcess",
          "package": "fpco-api",
          "signature": "HostnameQuotaExcess",
          "source": "src/FP-API-Types.html#UseHostName",
          "type": "function"
        },
        "index": {
          "description": "Couldn register the hostname due to quota",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "HostnameQuotaExcess",
          "package": "fpco-api",
          "partial": "Hostname Quota Excess",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:HostnameQuotaExcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "HtmlReply",
          "package": "fpco-api",
          "signature": "HtmlReply",
          "source": "src/FP-API-Types.html#HtmlReply",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "HtmlReply",
          "package": "fpco-api",
          "partial": "Html Reply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:HtmlReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ILCommunity",
          "package": "fpco-api",
          "signature": "ILCommunity",
          "source": "src/FP-API-Types.html#IdeLicense",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ILCommunity",
          "package": "fpco-api",
          "partial": "ILCommunity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ILCommunity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ILPersonal",
          "package": "fpco-api",
          "signature": "ILPersonal",
          "source": "src/FP-API-Types.html#IdeLicense",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ILPersonal",
          "package": "fpco-api",
          "partial": "ILPersonal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ILPersonal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ILProfessional",
          "package": "fpco-api",
          "signature": "ILProfessional",
          "source": "src/FP-API-Types.html#IdeLicense",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ILProfessional",
          "package": "fpco-api",
          "partial": "ILProfessional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ILProfessional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003equery span, result span, source info\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "IdInfo",
          "package": "fpco-api",
          "signature": "IdInfo SourceSpan SourceSpan DefinitionSource",
          "source": "src/FP-API-Types.html#IdInfo",
          "type": "function"
        },
        "index": {
          "description": "query span result span source info",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "IdInfo",
          "package": "fpco-api",
          "partial": "Id Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:IdInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "IdInfoResults",
          "package": "fpco-api",
          "signature": "IdInfoResults IdInfo",
          "source": "src/FP-API-Types.html#RunnerMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "IdInfoResults",
          "package": "fpco-api",
          "partial": "Id Info Results",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:IdInfoResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emodule context, is it exact?, number to query, offset in result, number to yield, query contents\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "IdeHoogleSearch",
          "package": "fpco-api",
          "signature": "IdeHoogleSearch (Maybe FayFileName) Bool Int Int Int Text FayProjectId (Returns' HoogleId)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "description": "module context is it exact number to query offset in result number to yield query contents",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "IdeHoogleSearch",
          "package": "fpco-api",
          "partial": "Ide Hoogle Search",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:IdeHoogleSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ImportedPackagesResults",
          "package": "fpco-api",
          "signature": "ImportedPackagesResults [PackageId]",
          "source": "src/FP-API-Types.html#RunnerMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ImportedPackagesResults",
          "normalized": "ImportedPackagesResults[PackageId]",
          "package": "fpco-api",
          "partial": "Imported Packages Results",
          "signature": "ImportedPackagesResults[PackageId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ImportedPackagesResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "InitialProjectInfo",
          "package": "fpco-api",
          "signature": "InitialProjectInfo",
          "source": "src/FP-API-Types.html#InitialProjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "InitialProjectInfo",
          "package": "fpco-api",
          "partial": "Initial Project Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:InitialProjectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "IsProjectDirty",
          "package": "fpco-api",
          "signature": "IsProjectDirty FayProjectId (Returns' Bool)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "IsProjectDirty",
          "package": "fpco-api",
          "partial": "Is Project Dirty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:IsProjectDirty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "IsWeb",
          "package": "fpco-api",
          "signature": "IsWeb",
          "source": "src/FP-API-Types.html#IsWebResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "IsWeb",
          "package": "fpco-api",
          "partial": "Is Web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:IsWeb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "JustText",
          "package": "fpco-api",
          "signature": "JustText Text",
          "source": "src/FP-API-Types.html#MaybeText",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "JustText",
          "package": "fpco-api",
          "partial": "Just Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:JustText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "KeterYaml",
          "package": "fpco-api",
          "signature": "KeterYaml",
          "source": "src/FP-API-Types.html#KeterYaml",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "KeterYaml",
          "package": "fpco-api",
          "partial": "Keter Yaml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:KeterYaml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "KindError",
          "package": "fpco-api",
          "signature": "KindError",
          "source": "src/FP-API-Types.html#SourceInfoKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "KindError",
          "package": "fpco-api",
          "partial": "Kind Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:KindError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "KindHint",
          "package": "fpco-api",
          "signature": "KindHint",
          "source": "src/FP-API-Types.html#SourceInfoKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "KindHint",
          "package": "fpco-api",
          "partial": "Kind Hint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:KindHint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "KindWarning",
          "package": "fpco-api",
          "signature": "KindWarning",
          "source": "src/FP-API-Types.html#SourceInfoKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "KindWarning",
          "package": "fpco-api",
          "partial": "Kind Warning",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:KindWarning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "LaunchInfoSnapshot",
          "package": "fpco-api",
          "signature": "LaunchInfoSnapshot",
          "source": "src/FP-API-Types.html#LaunchInfoSnapshot",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "LaunchInfoSnapshot",
          "package": "fpco-api",
          "partial": "Launch Info Snapshot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:LaunchInfoSnapshot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "LevelDebug",
          "package": "fpco-api",
          "signature": "LevelDebug",
          "source": "src/FP-API-Types.html#LogLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "LevelDebug",
          "package": "fpco-api",
          "partial": "Level Debug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:LevelDebug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "LevelError",
          "package": "fpco-api",
          "signature": "LevelError",
          "source": "src/FP-API-Types.html#LogLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "LevelError",
          "package": "fpco-api",
          "partial": "Level Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:LevelError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "LevelInfo",
          "package": "fpco-api",
          "signature": "LevelInfo",
          "source": "src/FP-API-Types.html#LogLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "LevelInfo",
          "package": "fpco-api",
          "partial": "Level Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:LevelInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "LevelOther",
          "package": "fpco-api",
          "signature": "LevelOther Text",
          "source": "src/FP-API-Types.html#LogLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "LevelOther",
          "package": "fpco-api",
          "partial": "Level Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:LevelOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "LevelWarn",
          "package": "fpco-api",
          "signature": "LevelWarn",
          "source": "src/FP-API-Types.html#LogLevel",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "LevelWarn",
          "package": "fpco-api",
          "partial": "Level Warn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:LevelWarn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "LoadProjectState",
          "package": "fpco-api",
          "signature": "LoadProjectState ProjectState FayProjectId (Returns' MaybeText)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "LoadProjectState",
          "package": "fpco-api",
          "partial": "Load Project State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:LoadProjectState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "MergeConflict",
          "package": "fpco-api",
          "signature": "MergeConflict",
          "source": "src/FP-API-Types.html#MergeConflict",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "MergeConflict",
          "package": "fpco-api",
          "partial": "Merge Conflict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:MergeConflict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "MergeModifyPair",
          "package": "fpco-api",
          "signature": "MergeModifyPair MergeModifyKind MergeModifyKind",
          "source": "src/FP-API-Types.html#MergeModifyPair",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "MergeModifyPair",
          "package": "fpco-api",
          "partial": "Merge Modify Pair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:MergeModifyPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "MessageTag",
          "package": "fpco-api",
          "signature": "MessageTag",
          "source": "src/FP-API-Types.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "MessageTag",
          "package": "fpco-api",
          "partial": "Message Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:MessageTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "Modified",
          "package": "fpco-api",
          "signature": "Modified",
          "source": "src/FP-API-Types.html#MergeModifyKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "Modified",
          "package": "fpco-api",
          "partial": "Modified",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:Modified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ModuleExcluded",
          "package": "fpco-api",
          "signature": "ModuleExcluded",
          "source": "src/FP-API-Types.html#ModuleIncluded",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ModuleExcluded",
          "package": "fpco-api",
          "partial": "Module Excluded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ModuleExcluded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ModuleHeaderFilenameMismatch",
          "package": "fpco-api",
          "signature": "ModuleHeaderFilenameMismatch FayModuleName",
          "source": "src/FP-API-Types.html#ModuleIncluded",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ModuleHeaderFilenameMismatch",
          "package": "fpco-api",
          "partial": "Module Header Filename Mismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ModuleHeaderFilenameMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ModuleIncluded",
          "package": "fpco-api",
          "signature": "ModuleIncluded FayModuleName",
          "source": "src/FP-API-Types.html#ModuleIncluded",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ModuleIncluded",
          "package": "fpco-api",
          "partial": "Module Included",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ModuleIncluded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ModuleLink",
          "package": "fpco-api",
          "signature": "ModuleLink",
          "source": "src/FP-API-Types.html#ModuleLink",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ModuleLink",
          "package": "fpco-api",
          "partial": "Module Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ModuleLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ModuleNameAmbiguous",
          "package": "fpco-api",
          "signature": "ModuleNameAmbiguous FayModuleName",
          "source": "src/FP-API-Types.html#ModuleIncluded",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ModuleNameAmbiguous",
          "package": "fpco-api",
          "partial": "Module Name Ambiguous",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ModuleNameAmbiguous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ModuleNotTextual",
          "package": "fpco-api",
          "signature": "ModuleNotTextual",
          "source": "src/FP-API-Types.html#ModuleIncluded",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ModuleNotTextual",
          "package": "fpco-api",
          "partial": "Module Not Textual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ModuleNotTextual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ModuleWrongExtension",
          "package": "fpco-api",
          "signature": "ModuleWrongExtension",
          "source": "src/FP-API-Types.html#ModuleIncluded",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ModuleWrongExtension",
          "package": "fpco-api",
          "partial": "Module Wrong Extension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ModuleWrongExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "Monokai",
          "package": "fpco-api",
          "signature": "Monokai",
          "source": "src/FP-API-Types.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "Monokai",
          "package": "fpco-api",
          "partial": "Monokai",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:Monokai"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "NewBgJob",
          "package": "fpco-api",
          "signature": "NewBgJob (FayBgJobId, BgJob)",
          "source": "src/FP-API-Types.html#NewBgJob",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "NewBgJob",
          "normalized": "NewBgJob(FayBgJobId,BgJob)",
          "package": "fpco-api",
          "partial": "New Bg Job",
          "signature": "NewBgJob(FayBgJobId,BgJob)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:NewBgJob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "NewDeployment",
          "package": "fpco-api",
          "signature": "NewDeployment (FayDeploymentId, Deployment)",
          "source": "src/FP-API-Types.html#NewDeployment",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "NewDeployment",
          "normalized": "NewDeployment(FayDeploymentId,Deployment)",
          "package": "fpco-api",
          "partial": "New Deployment",
          "signature": "NewDeployment(FayDeploymentId,Deployment)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:NewDeployment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "NewRunConfig",
          "package": "fpco-api",
          "signature": "NewRunConfig (FayRunConfigId, RunConfig)",
          "source": "src/FP-API-Types.html#NewRunConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "NewRunConfig",
          "normalized": "NewRunConfig(FayRunConfigId,RunConfig)",
          "package": "fpco-api",
          "partial": "New Run Config",
          "signature": "NewRunConfig(FayRunConfigId,RunConfig)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:NewRunConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "NewWebApp",
          "package": "fpco-api",
          "signature": "NewWebApp (FayWebAppId, WebApp)",
          "source": "src/FP-API-Types.html#NewWebApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "NewWebApp",
          "normalized": "NewWebApp(FayWebAppId,WebApp)",
          "package": "fpco-api",
          "partial": "New Web App",
          "signature": "NewWebApp(FayWebAppId,WebApp)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:NewWebApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003equery span\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "NoIdInfo",
          "package": "fpco-api",
          "signature": "NoIdInfo SourceSpan",
          "source": "src/FP-API-Types.html#IdInfo",
          "type": "function"
        },
        "index": {
          "description": "query span",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "NoIdInfo",
          "package": "fpco-api",
          "partial": "No Id Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:NoIdInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "NoStartToken",
          "package": "fpco-api",
          "signature": "NoStartToken",
          "source": "src/FP-API-Types.html#MaybeStartToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "NoStartToken",
          "package": "fpco-api",
          "partial": "No Start Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:NoStartToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "NoText",
          "package": "fpco-api",
          "signature": "NoText",
          "source": "src/FP-API-Types.html#MaybeText",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "NoText",
          "package": "fpco-api",
          "partial": "No Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:NoText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "NotPublic",
          "package": "fpco-api",
          "signature": "NotPublic",
          "source": "src/FP-API-Types.html#Publicize",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "NotPublic",
          "package": "fpco-api",
          "partial": "Not Public",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:NotPublic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "NotSureIfWeb",
          "package": "fpco-api",
          "signature": "NotSureIfWeb",
          "source": "src/FP-API-Types.html#IsWebResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "NotSureIfWeb",
          "package": "fpco-api",
          "partial": "Not Sure If Web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:NotSureIfWeb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "PMFilterAll",
          "package": "fpco-api",
          "signature": "PMFilterAll",
          "source": "src/FP-API-Types.html#ProjectMessagesFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "PMFilterAll",
          "package": "fpco-api",
          "partial": "PMFilter All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:PMFilterAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "PMFilterNone",
          "package": "fpco-api",
          "signature": "PMFilterNone",
          "source": "src/FP-API-Types.html#ProjectMessagesFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "PMFilterNone",
          "package": "fpco-api",
          "partial": "PMFilter None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:PMFilterNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "PMFilterOnOrBefore",
          "package": "fpco-api",
          "signature": "PMFilterOnOrBefore Integer",
          "source": "src/FP-API-Types.html#ProjectMessagesFilter",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "PMFilterOnOrBefore",
          "package": "fpco-api",
          "partial": "PMFilter On Or Before",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:PMFilterOnOrBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "PMRImmediateStatusNoMessages",
          "package": "fpco-api",
          "signature": "PMRImmediateStatusNoMessages",
          "source": "src/FP-API-Types.html#ProjectMessagesRequest",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "PMRImmediateStatusNoMessages",
          "package": "fpco-api",
          "partial": "PMRImmediate Status No Messages",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:PMRImmediateStatusNoMessages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "PMRImmediateStatusWithMessages",
          "package": "fpco-api",
          "signature": "PMRImmediateStatusWithMessages ProjectMessagesFilter",
          "source": "src/FP-API-Types.html#ProjectMessagesRequest",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "PMRImmediateStatusWithMessages",
          "package": "fpco-api",
          "partial": "PMRImmediate Status With Messages",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:PMRImmediateStatusWithMessages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "PMRNextStatusWithMessages",
          "package": "fpco-api",
          "signature": "PMRNextStatusWithMessages ProjectMessagesFilter StatusHash",
          "source": "src/FP-API-Types.html#ProjectMessagesRequest",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "PMRNextStatusWithMessages",
          "package": "fpco-api",
          "partial": "PMRNext Status With Messages",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:PMRNextStatusWithMessages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "PSSFinal",
          "package": "fpco-api",
          "signature": "PSSFinal Text",
          "source": "src/FP-API-Types.html#ProjectStartStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "PSSFinal",
          "package": "fpco-api",
          "partial": "PSSFinal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:PSSFinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "PSSUpdate",
          "package": "fpco-api",
          "signature": "PSSUpdate Text Int",
          "source": "src/FP-API-Types.html#ProjectStartStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "PSSUpdate",
          "package": "fpco-api",
          "partial": "PSSUpdate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:PSSUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "PackageId",
          "package": "fpco-api",
          "signature": "PackageId",
          "source": "src/FP-API-Types.html#PackageId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "PackageId",
          "package": "fpco-api",
          "partial": "Package Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:PackageId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "PackageLink",
          "package": "fpco-api",
          "signature": "PackageLink",
          "source": "src/FP-API-Types.html#PackageLink",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "PackageLink",
          "package": "fpco-api",
          "partial": "Package Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:PackageLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "Panda",
          "package": "fpco-api",
          "signature": "Panda",
          "source": "src/FP-API-Types.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "Panda",
          "package": "fpco-api",
          "partial": "Panda",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:Panda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "PortIsListening",
          "package": "fpco-api",
          "signature": "PortIsListening",
          "source": "src/FP-API-Types.html#PortListeningResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "PortIsListening",
          "package": "fpco-api",
          "partial": "Port Is Listening",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:PortIsListening"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "PortNotAllocated",
          "package": "fpco-api",
          "signature": "PortNotAllocated",
          "source": "src/FP-API-Types.html#PortListeningResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "PortNotAllocated",
          "package": "fpco-api",
          "partial": "Port Not Allocated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:PortNotAllocated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "PortNotListening",
          "package": "fpco-api",
          "signature": "PortNotListening",
          "source": "src/FP-API-Types.html#PortListeningResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "PortNotListening",
          "package": "fpco-api",
          "partial": "Port Not Listening",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:PortNotListening"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ProcId",
          "package": "fpco-api",
          "signature": "ProcId",
          "source": "src/FP-API-Types.html#ProcId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ProcId",
          "package": "fpco-api",
          "partial": "Proc Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ProcId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ProcessNotRunning",
          "package": "fpco-api",
          "signature": "ProcessNotRunning",
          "source": "src/FP-API-Types.html#PortListeningResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ProcessNotRunning",
          "package": "fpco-api",
          "partial": "Process Not Running",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ProcessNotRunning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ProcessOutput",
          "package": "fpco-api",
          "signature": "ProcessOutput Text",
          "source": "src/FP-API-Types.html#RunnerMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ProcessOutput",
          "package": "fpco-api",
          "partial": "Process Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ProcessOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ProcessOutputError",
          "package": "fpco-api",
          "signature": "ProcessOutputError Text",
          "source": "src/FP-API-Types.html#RunnerMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ProcessOutputError",
          "package": "fpco-api",
          "partial": "Process Output Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ProcessOutputError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "Progress",
          "package": "fpco-api",
          "signature": "Progress",
          "source": "src/FP-API-Types.html#Progress",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "Progress",
          "package": "fpco-api",
          "partial": "Progress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:Progress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ProjectHasClosed",
          "package": "fpco-api",
          "signature": "ProjectHasClosed",
          "source": "src/FP-API-Types.html#RunnerMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ProjectHasClosed",
          "package": "fpco-api",
          "partial": "Project Has Closed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ProjectHasClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ProjectMessage",
          "package": "fpco-api",
          "signature": "ProjectMessage",
          "source": "src/FP-API-Types.html#RunnerMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ProjectMessage",
          "package": "fpco-api",
          "partial": "Project Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ProjectMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ProjectMessagesOutput",
          "package": "fpco-api",
          "signature": "ProjectMessagesOutput ProjectMessagesFilter [(Maybe Int, RunnerMessage)]",
          "source": "src/FP-API-Types.html#ProjectMessagesOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ProjectMessagesOutput",
          "normalized": "ProjectMessagesOutput ProjectMessagesFilter[(Maybe Int,RunnerMessage)]",
          "package": "fpco-api",
          "partial": "Project Messages Output",
          "signature": "ProjectMessagesOutput ProjectMessagesFilter[(Maybe Int,RunnerMessage)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ProjectMessagesOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ProjectStatusSnapshot",
          "package": "fpco-api",
          "signature": "ProjectStatusSnapshot",
          "source": "src/FP-API-Types.html#ProjectStatusSnapshot",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ProjectStatusSnapshot",
          "package": "fpco-api",
          "partial": "Project Status Snapshot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ProjectStatusSnapshot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ProperSpan",
          "package": "fpco-api",
          "signature": "ProperSpan SourceSpan",
          "source": "src/FP-API-Types.html#EitherSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ProperSpan",
          "package": "fpco-api",
          "partial": "Proper Span",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ProperSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "Publicize",
          "package": "fpco-api",
          "signature": "Publicize Text",
          "source": "src/FP-API-Types.html#Publicize",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "Publicize",
          "package": "fpco-api",
          "partial": "Publicize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:Publicize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RandomHostName",
          "package": "fpco-api",
          "signature": "RandomHostName",
          "source": "src/FP-API-Types.html#RandomHostName",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RandomHostName",
          "package": "fpco-api",
          "partial": "Random Host Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:RandomHostName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ReformatModule",
          "package": "fpco-api",
          "signature": "ReformatModule FayFileName FayProjectId (Returns' CompileChanged)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ReformatModule",
          "package": "fpco-api",
          "partial": "Reformat Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ReformatModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RemotesList",
          "package": "fpco-api",
          "signature": "RemotesList [(Text, Text)]",
          "source": "src/FP-API-Types.html#RemotesList",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RemotesList",
          "normalized": "RemotesList[(Text,Text)]",
          "package": "fpco-api",
          "partial": "Remotes List",
          "signature": "RemotesList[(Text,Text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:RemotesList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RenameFile",
          "package": "fpco-api",
          "signature": "RenameFile FayFileName FileInfo RenameType FayProjectId (Returns' RenameFileOutput)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RenameFile",
          "package": "fpco-api",
          "partial": "Rename File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:RenameFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RenameFileOutput",
          "package": "fpco-api",
          "signature": "RenameFileOutput (Maybe Text) CompileChanged",
          "source": "src/FP-API-Types.html#RenameFileOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RenameFileOutput",
          "package": "fpco-api",
          "partial": "Rename File Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:RenameFileOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RenameHeader",
          "package": "fpco-api",
          "signature": "RenameHeader",
          "source": "src/FP-API-Types.html#RenameType",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RenameHeader",
          "package": "fpco-api",
          "partial": "Rename Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:RenameHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RenameHeaderAndImports",
          "package": "fpco-api",
          "signature": "RenameHeaderAndImports",
          "source": "src/FP-API-Types.html#RenameType",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RenameHeaderAndImports",
          "package": "fpco-api",
          "partial": "Rename Header And Imports",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:RenameHeaderAndImports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RenameHeaderAndImportsForce",
          "package": "fpco-api",
          "signature": "RenameHeaderAndImportsForce",
          "source": "src/FP-API-Types.html#RenameType",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RenameHeaderAndImportsForce",
          "package": "fpco-api",
          "partial": "Rename Header And Imports Force",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:RenameHeaderAndImportsForce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RenamePlain",
          "package": "fpco-api",
          "signature": "RenamePlain",
          "source": "src/FP-API-Types.html#RenameType",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RenamePlain",
          "package": "fpco-api",
          "partial": "Rename Plain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:RenamePlain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RenderFileMarkdown",
          "package": "fpco-api",
          "signature": "RenderFileMarkdown FayFileName FayProjectId (Returns' HtmlReply)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RenderFileMarkdown",
          "package": "fpco-api",
          "partial": "Render File Markdown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:RenderFileMarkdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ReparseProjectSettings",
          "package": "fpco-api",
          "signature": "ReparseProjectSettings FayProjectId (Returns' ReparseSettingsOutput)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ReparseProjectSettings",
          "package": "fpco-api",
          "partial": "Reparse Project Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ReparseProjectSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ReparseSuccessful",
          "package": "fpco-api",
          "signature": "ReparseSuccessful InitialProjectInfo",
          "source": "src/FP-API-Types.html#ReparseSettingsOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ReparseSuccessful",
          "package": "fpco-api",
          "partial": "Reparse Successful",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ReparseSuccessful"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ResetProject",
          "package": "fpco-api",
          "signature": "ResetProject FayProjectId (Returns' InitialProjectInfo)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ResetProject",
          "package": "fpco-api",
          "partial": "Reset Project",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ResetProject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RestartBackend",
          "package": "fpco-api",
          "signature": "RestartBackend FayProjectId (Returns' ())",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RestartBackend",
          "normalized": "RestartBackend FayProjectId(Returns'())",
          "package": "fpco-api",
          "partial": "Restart Backend",
          "signature": "RestartBackend FayProjectId(Returns'())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:RestartBackend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RevokeGithub",
          "package": "fpco-api",
          "signature": "RevokeGithub (Returns (CanFail ()))",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RevokeGithub",
          "normalized": "RevokeGithub(Returns(CanFail()))",
          "package": "fpco-api",
          "partial": "Revoke Github",
          "signature": "RevokeGithub(Returns(CanFail()))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:RevokeGithub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RunConfig",
          "package": "fpco-api",
          "signature": "RunConfig",
          "source": "src/FP-API-Types.html#RunConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RunConfig",
          "package": "fpco-api",
          "partial": "Run Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:RunConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RunGhciOutput",
          "package": "fpco-api",
          "signature": "RunGhciOutput ProcId FayProjectId",
          "source": "src/FP-API-Types.html#RunGhciOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RunGhciOutput",
          "package": "fpco-api",
          "partial": "Run Ghci Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:RunGhciOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RunTarget",
          "package": "fpco-api",
          "signature": "RunTarget FayProjectId (Returns' ProcId)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RunTarget",
          "package": "fpco-api",
          "partial": "Run Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:RunTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RunnerBuildDone",
          "package": "fpco-api",
          "signature": "RunnerBuildDone",
          "source": "src/FP-API-Types.html#RunnerBuildStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RunnerBuildDone",
          "package": "fpco-api",
          "partial": "Runner Build Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:RunnerBuildDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RunnerBuildFailed",
          "package": "fpco-api",
          "signature": "RunnerBuildFailed",
          "source": "src/FP-API-Types.html#RunnerBuildStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RunnerBuildFailed",
          "package": "fpco-api",
          "partial": "Runner Build Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:RunnerBuildFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RunnerBuildQueued",
          "package": "fpco-api",
          "signature": "RunnerBuildQueued",
          "source": "src/FP-API-Types.html#RunnerBuildStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RunnerBuildQueued",
          "package": "fpco-api",
          "partial": "Runner Build Queued",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:RunnerBuildQueued"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RunnerBuilding",
          "package": "fpco-api",
          "signature": "RunnerBuilding",
          "source": "src/FP-API-Types.html#RunnerBuildStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RunnerBuilding",
          "package": "fpco-api",
          "partial": "Runner Building",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:RunnerBuilding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RunnerCompileDone",
          "package": "fpco-api",
          "signature": "RunnerCompileDone CompileId [SourceInfo]",
          "source": "src/FP-API-Types.html#RunnerCompileStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RunnerCompileDone",
          "normalized": "RunnerCompileDone CompileId[SourceInfo]",
          "package": "fpco-api",
          "partial": "Runner Compile Done",
          "signature": "RunnerCompileDone CompileId[SourceInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:RunnerCompileDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RunnerCompiling",
          "package": "fpco-api",
          "signature": "RunnerCompiling CompileId Progress",
          "source": "src/FP-API-Types.html#RunnerCompileStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RunnerCompiling",
          "package": "fpco-api",
          "partial": "Runner Compiling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:RunnerCompiling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RunnerMessageEnvelope",
          "package": "fpco-api",
          "signature": "RunnerMessageEnvelope",
          "source": "src/FP-API-Types.html#RunnerMessageEnvelope",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RunnerMessageEnvelope",
          "package": "fpco-api",
          "partial": "Runner Message Envelope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:RunnerMessageEnvelope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RunnerNotBuilding",
          "package": "fpco-api",
          "signature": "RunnerNotBuilding",
          "source": "src/FP-API-Types.html#RunnerBuildStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RunnerNotBuilding",
          "package": "fpco-api",
          "partial": "Runner Not Building",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:RunnerNotBuilding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RunnerNotCompiling",
          "package": "fpco-api",
          "signature": "RunnerNotCompiling",
          "source": "src/FP-API-Types.html#RunnerCompileStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RunnerNotCompiling",
          "package": "fpco-api",
          "partial": "Runner Not Compiling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:RunnerNotCompiling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RunnerProjectOpen",
          "package": "fpco-api",
          "signature": "RunnerProjectOpen",
          "source": "src/FP-API-Types.html#RunnerOpeningStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RunnerProjectOpen",
          "package": "fpco-api",
          "partial": "Runner Project Open",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:RunnerProjectOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "RunnerProjectOpening",
          "package": "fpco-api",
          "signature": "RunnerProjectOpening Text",
          "source": "src/FP-API-Types.html#RunnerOpeningStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "RunnerProjectOpening",
          "package": "fpco-api",
          "partial": "Runner Project Opening",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:RunnerProjectOpening"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SaveFile",
          "package": "fpco-api",
          "signature": "SaveFile FayFileName Text FayTutorialToken FayProjectId (Returns' SaveFileOutput)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SaveFile",
          "package": "fpco-api",
          "partial": "Save File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SaveFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SaveFileOutput",
          "package": "fpco-api",
          "signature": "SaveFileOutput FayTutorialToken CompileChanged",
          "source": "src/FP-API-Types.html#SaveFileOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SaveFileOutput",
          "package": "fpco-api",
          "partial": "Save File Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SaveFileOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SaveProfile",
          "package": "fpco-api",
          "signature": "SaveProfile Theme Int Bool (Returns' ())",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SaveProfile",
          "normalized": "SaveProfile Theme Int Bool(Returns'())",
          "package": "fpco-api",
          "partial": "Save Profile",
          "signature": "SaveProfile Theme Int Bool(Returns'())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SaveProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SaveProjectState",
          "package": "fpco-api",
          "signature": "SaveProjectState ProjectState Text FayProjectId (Returns' ())",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SaveProjectState",
          "normalized": "SaveProjectState ProjectState Text FayProjectId(Returns'())",
          "package": "fpco-api",
          "partial": "Save Project State",
          "signature": "SaveProjectState ProjectState Text FayProjectId(Returns'())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SaveProjectState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SdistTarball",
          "package": "fpco-api",
          "signature": "SdistTarball FayProjectId (Returns' ())",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SdistTarball",
          "normalized": "SdistTarball FayProjectId(Returns'())",
          "package": "fpco-api",
          "partial": "Sdist Tarball",
          "signature": "SdistTarball FayProjectId(Returns'())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SdistTarball"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SearchId",
          "package": "fpco-api",
          "signature": "SearchId",
          "source": "src/FP-API-Types.html#SearchId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SearchId",
          "package": "fpco-api",
          "partial": "Search Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SearchId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SearchProject",
          "package": "fpco-api",
          "signature": "SearchProject SearchQuery Int Int Bool FayProjectId (Returns' ())",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SearchProject",
          "normalized": "SearchProject SearchQuery Int Int Bool FayProjectId(Returns'())",
          "package": "fpco-api",
          "partial": "Search Project",
          "signature": "SearchProject SearchQuery Int Int Bool FayProjectId(Returns'())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SearchProject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SearchQueryPlain",
          "package": "fpco-api",
          "signature": "SearchQueryPlain Text",
          "source": "src/FP-API-Types.html#SearchQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SearchQueryPlain",
          "package": "fpco-api",
          "partial": "Search Query Plain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SearchQueryPlain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SearchQueryRegex",
          "package": "fpco-api",
          "signature": "SearchQueryRegex Text",
          "source": "src/FP-API-Types.html#SearchQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SearchQueryRegex",
          "package": "fpco-api",
          "partial": "Search Query Regex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SearchQueryRegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SearchResult",
          "package": "fpco-api",
          "signature": "SearchResult SourceSpan [Either Text Text]",
          "source": "src/FP-API-Types.html#SearchResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SearchResult",
          "normalized": "SearchResult SourceSpan[Either Text Text]",
          "package": "fpco-api",
          "partial": "Search Result",
          "signature": "SearchResult SourceSpan[Either Text Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SearchResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SearchResults",
          "package": "fpco-api",
          "signature": "SearchResults [SearchResult]",
          "source": "src/FP-API-Types.html#RunnerMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SearchResults",
          "normalized": "SearchResults[SearchResult]",
          "package": "fpco-api",
          "partial": "Search Results",
          "signature": "SearchResults[SearchResult]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SearchResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SetConfigurationJavascript",
          "package": "fpco-api",
          "signature": "SetConfigurationJavascript Text (Returns' ())",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SetConfigurationJavascript",
          "normalized": "SetConfigurationJavascript Text(Returns'())",
          "package": "fpco-api",
          "partial": "Set Configuration Javascript",
          "signature": "SetConfigurationJavascript Text(Returns'())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SetConfigurationJavascript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SetDeployments",
          "package": "fpco-api",
          "signature": "SetDeployments [(FayDeploymentId, Deployment)] FayProjectId (Returns' ())",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SetDeployments",
          "normalized": "SetDeployments[(FayDeploymentId,Deployment)]FayProjectId(Returns'())",
          "package": "fpco-api",
          "partial": "Set Deployments",
          "signature": "SetDeployments[(FayDeploymentId,Deployment)]FayProjectId(Returns'())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SetDeployments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SetExtension",
          "package": "fpco-api",
          "signature": "SetExtension Text Bool",
          "source": "src/FP-API-Types.html#SetExtension",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SetExtension",
          "package": "fpco-api",
          "partial": "Set Extension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SetExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SetModuleExclusion",
          "package": "fpco-api",
          "signature": "SetModuleExclusion FayFileName Bool FayProjectId (Returns' CompileChanged)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SetModuleExclusion",
          "package": "fpco-api",
          "partial": "Set Module Exclusion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SetModuleExclusion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SetProjectMetadata",
          "package": "fpco-api",
          "signature": "SetProjectMetadata Text Text FayProjectId (Returns' ())",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SetProjectMetadata",
          "normalized": "SetProjectMetadata Text Text FayProjectId(Returns'())",
          "package": "fpco-api",
          "partial": "Set Project Metadata",
          "signature": "SetProjectMetadata Text Text FayProjectId(Returns'())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SetProjectMetadata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SetPublic",
          "package": "fpco-api",
          "signature": "SetPublic Publicize FayProjectId (Returns' (Maybe GitHistoryItem))",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SetPublic",
          "package": "fpco-api",
          "partial": "Set Public",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SetPublic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SetRemotes",
          "package": "fpco-api",
          "signature": "SetRemotes RemotesList FayProjectId (Returns' ())",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SetRemotes",
          "normalized": "SetRemotes RemotesList FayProjectId(Returns'())",
          "package": "fpco-api",
          "partial": "Set Remotes",
          "signature": "SetRemotes RemotesList FayProjectId(Returns'())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SetRemotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SetRoot",
          "package": "fpco-api",
          "signature": "SetRoot Text Text FayProjectId (Returns' InitialProjectInfo)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SetRoot",
          "package": "fpco-api",
          "partial": "Set Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SetRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SetRunConfigs",
          "package": "fpco-api",
          "signature": "SetRunConfigs [(FayRunConfigId, RunConfig)] FayProjectId (Returns' ())",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SetRunConfigs",
          "normalized": "SetRunConfigs[(FayRunConfigId,RunConfig)]FayProjectId(Returns'())",
          "package": "fpco-api",
          "partial": "Set Run Configs",
          "signature": "SetRunConfigs[(FayRunConfigId,RunConfig)]FayProjectId(Returns'())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SetRunConfigs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SetSettings",
          "package": "fpco-api",
          "signature": "SetSettings SetSettingsInput FayProjectId (Returns' (Maybe CompileId))",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SetSettings",
          "package": "fpco-api",
          "partial": "Set Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SetSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SetSettingsInput",
          "package": "fpco-api",
          "signature": "SetSettingsInput",
          "source": "src/FP-API-Types.html#SetSettingsInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SetSettingsInput",
          "package": "fpco-api",
          "partial": "Set Settings Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SetSettingsInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SetTarget",
          "package": "fpco-api",
          "signature": "SetTarget (Maybe (Either FayFileName FayRunConfigId)) FayProjectId (Returns' CompileChanged)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SetTarget",
          "package": "fpco-api",
          "partial": "Set Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SetTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SettingsAlreadyValid",
          "package": "fpco-api",
          "signature": "SettingsAlreadyValid",
          "source": "src/FP-API-Types.html#ReparseSettingsOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SettingsAlreadyValid",
          "package": "fpco-api",
          "partial": "Settings Already Valid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SettingsAlreadyValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ShowTrialSignup",
          "package": "fpco-api",
          "signature": "ShowTrialSignup (Returns' Bool)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ShowTrialSignup",
          "package": "fpco-api",
          "partial": "Show Trial Signup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ShowTrialSignup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SnapshotNoProcess",
          "package": "fpco-api",
          "signature": "SnapshotNoProcess",
          "source": "src/FP-API-Types.html#ProcessStatusSnapshot",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SnapshotNoProcess",
          "package": "fpco-api",
          "partial": "Snapshot No Process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SnapshotNoProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SnapshotProcessExited",
          "package": "fpco-api",
          "signature": "SnapshotProcessExited ProcId LaunchInfoSnapshot",
          "source": "src/FP-API-Types.html#ProcessStatusSnapshot",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SnapshotProcessExited",
          "package": "fpco-api",
          "partial": "Snapshot Process Exited",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SnapshotProcessExited"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SnapshotProcessForceCanceled",
          "package": "fpco-api",
          "signature": "SnapshotProcessForceCanceled ProcId",
          "source": "src/FP-API-Types.html#ProcessStatusSnapshot",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SnapshotProcessForceCanceled",
          "package": "fpco-api",
          "partial": "Snapshot Process Force Canceled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SnapshotProcessForceCanceled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SnapshotProcessGhcException",
          "package": "fpco-api",
          "signature": "SnapshotProcessGhcException ProcId Text",
          "source": "src/FP-API-Types.html#ProcessStatusSnapshot",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SnapshotProcessGhcException",
          "package": "fpco-api",
          "partial": "Snapshot Process Ghc Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SnapshotProcessGhcException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SnapshotProcessLoadFailed",
          "package": "fpco-api",
          "signature": "SnapshotProcessLoadFailed ProcId Text",
          "source": "src/FP-API-Types.html#ProcessStatusSnapshot",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SnapshotProcessLoadFailed",
          "package": "fpco-api",
          "partial": "Snapshot Process Load Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SnapshotProcessLoadFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SnapshotProcessQueued",
          "package": "fpco-api",
          "signature": "SnapshotProcessQueued ProcId",
          "source": "src/FP-API-Types.html#ProcessStatusSnapshot",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SnapshotProcessQueued",
          "package": "fpco-api",
          "partial": "Snapshot Process Queued",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SnapshotProcessQueued"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SnapshotProcessRunFailed",
          "package": "fpco-api",
          "signature": "SnapshotProcessRunFailed ProcId Text",
          "source": "src/FP-API-Types.html#ProcessStatusSnapshot",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SnapshotProcessRunFailed",
          "package": "fpco-api",
          "partial": "Snapshot Process Run Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SnapshotProcessRunFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SnapshotProcessRunning",
          "package": "fpco-api",
          "signature": "SnapshotProcessRunning ProcId LaunchInfoSnapshot PortListeningResult",
          "source": "src/FP-API-Types.html#ProcessStatusSnapshot",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SnapshotProcessRunning",
          "package": "fpco-api",
          "partial": "Snapshot Process Running",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SnapshotProcessRunning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SnapshotProcessUserException",
          "package": "fpco-api",
          "signature": "SnapshotProcessUserException ProcId Text",
          "source": "src/FP-API-Types.html#ProcessStatusSnapshot",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SnapshotProcessUserException",
          "package": "fpco-api",
          "partial": "Snapshot Process User Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SnapshotProcessUserException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SourceInfo",
          "package": "fpco-api",
          "signature": "SourceInfo",
          "source": "src/FP-API-Types.html#SourceInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SourceInfo",
          "package": "fpco-api",
          "partial": "Source Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SourceInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SourceSpan",
          "package": "fpco-api",
          "signature": "SourceSpan",
          "source": "src/FP-API-Types.html#SourceSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SourceSpan",
          "package": "fpco-api",
          "partial": "Source Span",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SourceSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SshPublicKey",
          "package": "fpco-api",
          "signature": "SshPublicKey (Returns (CanFail Text))",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SshPublicKey",
          "package": "fpco-api",
          "partial": "Ssh Public Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SshPublicKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "StartToken",
          "package": "fpco-api",
          "signature": "StartToken Int",
          "source": "src/FP-API-Types.html#MaybeStartToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "StartToken",
          "package": "fpco-api",
          "partial": "Start Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:StartToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "StatusHash",
          "package": "fpco-api",
          "signature": "StatusHash Text",
          "source": "src/FP-API-Types.html#StatusHash",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "StatusHash",
          "package": "fpco-api",
          "partial": "Status Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:StatusHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "StatusSnapshot",
          "package": "fpco-api",
          "signature": "StatusSnapshot ProjectStatusSnapshot StatusHash",
          "source": "src/FP-API-Types.html#RunnerMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "StatusSnapshot",
          "package": "fpco-api",
          "partial": "Status Snapshot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:StatusSnapshot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "SubExprsResults",
          "package": "fpco-api",
          "signature": "SubExprsResults SourceSpan [[TypeInfo]]",
          "source": "src/FP-API-Types.html#RunnerMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "SubExprsResults",
          "normalized": "SubExprsResults SourceSpan[[TypeInfo]]",
          "package": "fpco-api",
          "partial": "Sub Exprs Results",
          "signature": "SubExprsResults SourceSpan[[TypeInfo]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:SubExprsResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "Success",
          "package": "fpco-api",
          "signature": "Success (Automatic a)",
          "source": "src/FP-API-Types.html#CanFail",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "Success",
          "package": "fpco-api",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:Success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "TextReply",
          "package": "fpco-api",
          "signature": "TextReply",
          "source": "src/FP-API-Types.html#TextReply",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "TextReply",
          "package": "fpco-api",
          "partial": "Text Reply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:TextReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "TextSpan",
          "package": "fpco-api",
          "signature": "TextSpan String",
          "source": "src/FP-API-Types.html#EitherSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "TextSpan",
          "package": "fpco-api",
          "partial": "Text Span",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:TextSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "TopLevelIdentifier",
          "package": "fpco-api",
          "signature": "TopLevelIdentifier",
          "source": "src/FP-API-Types.html#TopLevelIdentifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "TopLevelIdentifier",
          "package": "fpco-api",
          "partial": "Top Level Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:TopLevelIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "TopLevelIdentifiers",
          "package": "fpco-api",
          "signature": "TopLevelIdentifiers [TopLevelIdentifier]",
          "source": "src/FP-API-Types.html#TopLevelIdentifiers",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "TopLevelIdentifiers",
          "normalized": "TopLevelIdentifiers[TopLevelIdentifier]",
          "package": "fpco-api",
          "partial": "Top Level Identifiers",
          "signature": "TopLevelIdentifiers[TopLevelIdentifier]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:TopLevelIdentifiers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "TutorialConcurrentToken'",
          "package": "fpco-api",
          "signature": "TutorialConcurrentToken'",
          "source": "src/FP-API-Types.html#TutorialConcurrentToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "TutorialConcurrentToken'",
          "package": "fpco-api",
          "partial": "Tutorial Concurrent Token'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:TutorialConcurrentToken-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "TypeChanged",
          "package": "fpco-api",
          "signature": "TypeChanged",
          "source": "src/FP-API-Types.html#MergeModifyKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "TypeChanged",
          "package": "fpco-api",
          "partial": "Type Changed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:TypeChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "TypeInfo",
          "package": "fpco-api",
          "signature": "TypeInfo SourceSpan Text Text",
          "source": "src/FP-API-Types.html#TypeInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "TypeInfo",
          "package": "fpco-api",
          "partial": "Type Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:TypeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "UploadBuild",
          "package": "fpco-api",
          "signature": "UploadBuild BuildResult FayProjectId (Returns' UploadedBuild)",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "UploadBuild",
          "package": "fpco-api",
          "partial": "Upload Build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:UploadBuild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "UploadedBuild",
          "package": "fpco-api",
          "signature": "UploadedBuild",
          "source": "src/FP-API-Types.html#UploadedBuild",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "UploadedBuild",
          "package": "fpco-api",
          "partial": "Uploaded Build",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:UploadedBuild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "UserAuthedGithub",
          "package": "fpco-api",
          "signature": "UserAuthedGithub (Returns (CanFail Bool))",
          "source": "src/FP-API-Types.html#IdeCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "UserAuthedGithub",
          "package": "fpco-api",
          "partial": "User Authed Github",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:UserAuthedGithub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "UserState",
          "package": "fpco-api",
          "signature": "UserState",
          "source": "src/FP-API-Types.html#ProjectState",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "UserState",
          "package": "fpco-api",
          "partial": "User State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:UserState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "WarnImportRenaming",
          "package": "fpco-api",
          "signature": "WarnImportRenaming [FayFileName]",
          "source": "src/FP-API-Types.html#RenameFileOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "WarnImportRenaming",
          "normalized": "WarnImportRenaming[FayFileName]",
          "package": "fpco-api",
          "partial": "Warn Import Renaming",
          "signature": "WarnImportRenaming[FayFileName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:WarnImportRenaming"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "WebApp",
          "package": "fpco-api",
          "signature": "WebApp",
          "source": "src/FP-API-Types.html#WebApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "WebApp",
          "package": "fpco-api",
          "partial": "Web App",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:WebApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "WebAppStanza",
          "package": "fpco-api",
          "signature": "WebAppStanza FayWebAppId WebApp",
          "source": "src/FP-API-Types.html#Stanza",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "WebAppStanza",
          "package": "fpco-api",
          "partial": "Web App Stanza",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:WebAppStanza"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "Workspaces",
          "package": "fpco-api",
          "signature": "Workspaces",
          "source": "src/FP-API-Types.html#ProjectState",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "Workspaces",
          "package": "fpco-api",
          "partial": "Workspaces",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:Workspaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "Zenburn",
          "package": "fpco-api",
          "signature": "Zenburn",
          "source": "src/FP-API-Types.html#Theme",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "Zenburn",
          "package": "fpco-api",
          "partial": "Zenburn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:Zenburn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "aciModuleName",
          "package": "fpco-api",
          "signature": "FayFileName",
          "source": "src/FP-API-Types.html#AutoCompleteInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "aciModuleName",
          "package": "fpco-api",
          "partial": "Module Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:aciModuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "aciPrefix",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#AutoCompleteInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "aciPrefix",
          "package": "fpco-api",
          "partial": "Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:aciPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "bgArgs",
          "package": "fpco-api",
          "signature": "[Text]",
          "source": "src/FP-API-Types.html#BgJob",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "bgArgs",
          "normalized": "[Text]",
          "package": "fpco-api",
          "partial": "Args",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:bgArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "bgEnv",
          "package": "fpco-api",
          "signature": "[(Text, Text)]",
          "source": "src/FP-API-Types.html#BgJob",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "bgEnv",
          "normalized": "[(Text,Text)]",
          "package": "fpco-api",
          "partial": "Env",
          "signature": "[(Text,Text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:bgEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "bgFileName",
          "package": "fpco-api",
          "signature": "Maybe FayFileName",
          "source": "src/FP-API-Types.html#BgJob",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "bgFileName",
          "package": "fpco-api",
          "partial": "File Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:bgFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "bgRestartDelay",
          "package": "fpco-api",
          "signature": "Int",
          "source": "src/FP-API-Types.html#BgJob",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "bgRestartDelay",
          "package": "fpco-api",
          "partial": "Restart Delay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:bgRestartDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "bgRestartLimit",
          "package": "fpco-api",
          "signature": "Maybe Int",
          "source": "src/FP-API-Types.html#BgJob",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "bgRestartLimit",
          "package": "fpco-api",
          "partial": "Restart Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:bgRestartLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "bgTitle",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#BgJob",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "bgTitle",
          "package": "fpco-api",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:bgTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "brFileSize",
          "package": "fpco-api",
          "signature": "Int",
          "source": "src/FP-API-Types.html#BuildResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "brFileSize",
          "package": "fpco-api",
          "partial": "File Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:brFileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "brMainModule",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#BuildResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "brMainModule",
          "package": "fpco-api",
          "partial": "Main Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:brMainModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "brPathName",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#BuildResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "brPathName",
          "package": "fpco-api",
          "partial": "Path Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:brPathName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ccCompileId",
          "package": "fpco-api",
          "signature": "Maybe CompileId",
          "source": "src/FP-API-Types.html#CompileChanged",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ccCompileId",
          "package": "fpco-api",
          "partial": "Compile Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ccCompileId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll of the \u003ccode\u003e\u003ca\u003eFileChanged\u003c/a\u003e\u003c/code\u003es that have a\n \u003ccode\u003e\u003ca\u003efiModule\u003c/a\u003e\u003c/code\u003e that's changed.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "ccFiles",
          "package": "fpco-api",
          "signature": "[FileChanged]",
          "source": "src/FP-API-Types.html#CompileChanged",
          "type": "function"
        },
        "index": {
          "description": "All of the FileChanged that have fiModule that changed",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ccFiles",
          "normalized": "[FileChanged]",
          "package": "fpco-api",
          "partial": "Files",
          "signature": "[FileChanged]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ccFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "depStanzas",
          "package": "fpco-api",
          "signature": "[Stanza]",
          "source": "src/FP-API-Types.html#Deployment",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "depStanzas",
          "normalized": "[Stanza]",
          "package": "fpco-api",
          "partial": "Stanzas",
          "signature": "[Stanza]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:depStanzas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "depTitle",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#Deployment",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "depTitle",
          "package": "fpco-api",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:depTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "deployYaml",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#KeterYaml",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "deployYaml",
          "package": "fpco-api",
          "partial": "Yaml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:deployYaml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "dfcContent",
          "package": "fpco-api",
          "signature": "Maybe Text",
          "source": "src/FP-API-Types.html#FileContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "dfcContent",
          "package": "fpco-api",
          "partial": "Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:dfcContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "dfcToken",
          "package": "fpco-api",
          "signature": "FayTutorialToken",
          "source": "src/FP-API-Types.html#FileContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "dfcToken",
          "package": "fpco-api",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:dfcToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "dmiHostname",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#DeploymentManagerInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "dmiHostname",
          "package": "fpco-api",
          "partial": "Hostname",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:dmiHostname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "envName",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#Environment",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "envName",
          "package": "fpco-api",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:envName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "envTitle",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#Environment",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "envTitle",
          "package": "fpco-api",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:envTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "envURL",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#Environment",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "envURL",
          "package": "fpco-api",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:envURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "fcModule",
          "package": "fpco-api",
          "signature": "Maybe ModuleIncluded",
          "source": "src/FP-API-Types.html#FileChanged",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "fcModule",
          "package": "fpco-api",
          "partial": "Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:fcModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "fcPath",
          "package": "fpco-api",
          "signature": "FayFileName",
          "source": "src/FP-API-Types.html#FileChanged",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "fcPath",
          "package": "fpco-api",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:fcPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "fiModule",
          "package": "fpco-api",
          "signature": "Maybe FayModuleName",
          "source": "src/FP-API-Types.html#FileInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "fiModule",
          "package": "fpco-api",
          "partial": "Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:fiModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "fiPath",
          "package": "fpco-api",
          "signature": "FayFileName",
          "source": "src/FP-API-Types.html#FileInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "fiPath",
          "package": "fpco-api",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:fiPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ghiAuthor",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#GitHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ghiAuthor",
          "package": "fpco-api",
          "partial": "Author",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ghiAuthor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ghiDate",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#GitHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ghiDate",
          "package": "fpco-api",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ghiDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ghiHash",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#GitHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ghiHash",
          "package": "fpco-api",
          "partial": "Hash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ghiHash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ghiLog",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#GitHistoryItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ghiLog",
          "package": "fpco-api",
          "partial": "Log",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ghiLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "gsoCabalName",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#GetSettingsOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "gsoCabalName",
          "package": "fpco-api",
          "partial": "Cabal Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:gsoCabalName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "gsoCabalVersion",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#GetSettingsOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "gsoCabalVersion",
          "package": "fpco-api",
          "partial": "Cabal Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:gsoCabalVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "gsoEnvironment",
          "package": "fpco-api",
          "signature": "Environment",
          "source": "src/FP-API-Types.html#GetSettingsOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "gsoEnvironment",
          "package": "fpco-api",
          "partial": "Environment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:gsoEnvironment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "gsoEnvironments",
          "package": "fpco-api",
          "signature": "[Environment]",
          "source": "src/FP-API-Types.html#GetSettingsOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "gsoEnvironments",
          "normalized": "[Environment]",
          "package": "fpco-api",
          "partial": "Environments",
          "signature": "[Environment]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:gsoEnvironments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethree states: on, off, or default (== Nothing)\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "gsoExtensions",
          "package": "fpco-api",
          "signature": "[(Text, Maybe Bool)]",
          "source": "src/FP-API-Types.html#GetSettingsOutput",
          "type": "function"
        },
        "index": {
          "description": "three states on off or default Nothing",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "gsoExtensions",
          "normalized": "[(Text,Maybe Bool)]",
          "package": "fpco-api",
          "partial": "Extensions",
          "signature": "[(Text,Maybe Bool)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:gsoExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "gsoExtraPackages",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#GetSettingsOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "gsoExtraPackages",
          "package": "fpco-api",
          "partial": "Extra Packages",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:gsoExtraPackages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "gsoFilters",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#GetSettingsOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "gsoFilters",
          "package": "fpco-api",
          "partial": "Filters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:gsoFilters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "gsoGhcArgs",
          "package": "fpco-api",
          "signature": "[Text]",
          "source": "src/FP-API-Types.html#GetSettingsOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "gsoGhcArgs",
          "normalized": "[Text]",
          "package": "fpco-api",
          "partial": "Ghc Args",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:gsoGhcArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "gsoHiddenPackages",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#GetSettingsOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "gsoHiddenPackages",
          "package": "fpco-api",
          "partial": "Hidden Packages",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:gsoHiddenPackages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "gsoModuleTemplate",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#GetSettingsOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "gsoModuleTemplate",
          "package": "fpco-api",
          "partial": "Module Template",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:gsoModuleTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "gsoRoot",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#GetSettingsOutput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "gsoRoot",
          "package": "fpco-api",
          "partial": "Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:gsoRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eplain text\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "hrBody",
          "package": "fpco-api",
          "signature": "String",
          "source": "src/FP-API-Types.html#HoogleResult",
          "type": "function"
        },
        "index": {
          "description": "plain text",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "hrBody",
          "package": "fpco-api",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:hrBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "hrSources",
          "package": "fpco-api",
          "signature": "[(PackageLink, [ModuleLink])]",
          "source": "src/FP-API-Types.html#HoogleResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "hrSources",
          "normalized": "[(PackageLink,[ModuleLink])]",
          "package": "fpco-api",
          "partial": "Sources",
          "signature": "[(PackageLink,[ModuleLink])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:hrSources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTML\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "hrTitle",
          "package": "fpco-api",
          "signature": "String",
          "source": "src/FP-API-Types.html#HoogleResult",
          "type": "function"
        },
        "index": {
          "description": "HTML",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "hrTitle",
          "package": "fpco-api",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:hrTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "hrURL",
          "package": "fpco-api",
          "signature": "String",
          "source": "src/FP-API-Types.html#HoogleResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "hrURL",
          "package": "fpco-api",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:hrURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "infoKind",
          "package": "fpco-api",
          "signature": "SourceInfoKind",
          "source": "src/FP-API-Types.html#SourceInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "infoKind",
          "package": "fpco-api",
          "partial": "Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:infoKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "infoMsg",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#SourceInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "infoMsg",
          "package": "fpco-api",
          "partial": "Msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:infoMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "infoSpan",
          "package": "fpco-api",
          "signature": "EitherSpan",
          "source": "src/FP-API-Types.html#SourceInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "infoSpan",
          "package": "fpco-api",
          "partial": "Span",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:infoSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ipiBranches",
          "package": "fpco-api",
          "signature": "BranchesList",
          "source": "src/FP-API-Types.html#InitialProjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ipiBranches",
          "package": "fpco-api",
          "partial": "Branches",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ipiBranches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ipiCanPublish",
          "package": "fpco-api",
          "signature": "Bool",
          "source": "src/FP-API-Types.html#InitialProjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ipiCanPublish",
          "package": "fpco-api",
          "partial": "Can Publish",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ipiCanPublish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ipiDeployments",
          "package": "fpco-api",
          "signature": "[(FayDeploymentId, Deployment)]",
          "source": "src/FP-API-Types.html#InitialProjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ipiDeployments",
          "normalized": "[(FayDeploymentId,Deployment)]",
          "package": "fpco-api",
          "partial": "Deployments",
          "signature": "[(FayDeploymentId,Deployment)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ipiDeployments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ipiDesc",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#InitialProjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ipiDesc",
          "package": "fpco-api",
          "partial": "Desc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ipiDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ipiFiles",
          "package": "fpco-api",
          "signature": "[(FayFileName, ModuleIncluded)]",
          "source": "src/FP-API-Types.html#InitialProjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ipiFiles",
          "normalized": "[(FayFileName,ModuleIncluded)]",
          "package": "fpco-api",
          "partial": "Files",
          "signature": "[(FayFileName,ModuleIncluded)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ipiFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ipiFontSize",
          "package": "fpco-api",
          "signature": "Int",
          "source": "src/FP-API-Types.html#InitialProjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ipiFontSize",
          "package": "fpco-api",
          "partial": "Font Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ipiFontSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL originally cloned from\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "ipiGitUrl",
          "package": "fpco-api",
          "signature": "Maybe Text",
          "source": "src/FP-API-Types.html#InitialProjectInfo",
          "type": "function"
        },
        "index": {
          "description": "URL originally cloned from",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ipiGitUrl",
          "package": "fpco-api",
          "partial": "Git Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ipiGitUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ipiInvalidSettings",
          "package": "fpco-api",
          "signature": "Bool",
          "source": "src/FP-API-Types.html#InitialProjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ipiInvalidSettings",
          "package": "fpco-api",
          "partial": "Invalid Settings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ipiInvalidSettings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ipiLicense",
          "package": "fpco-api",
          "signature": "IdeLicense",
          "source": "src/FP-API-Types.html#InitialProjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ipiLicense",
          "package": "fpco-api",
          "partial": "License",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ipiLicense"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ipiMergeConflicts",
          "package": "fpco-api",
          "signature": "Maybe [MergeConflict]",
          "source": "src/FP-API-Types.html#InitialProjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ipiMergeConflicts",
          "normalized": "Maybe[MergeConflict]",
          "package": "fpco-api",
          "partial": "Merge Conflicts",
          "signature": "Maybe[MergeConflict]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ipiMergeConflicts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ipiPublished",
          "package": "fpco-api",
          "signature": "Maybe GitHistoryItem",
          "source": "src/FP-API-Types.html#InitialProjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ipiPublished",
          "package": "fpco-api",
          "partial": "Published",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ipiPublished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ipiRemotes",
          "package": "fpco-api",
          "signature": "RemotesList",
          "source": "src/FP-API-Types.html#InitialProjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ipiRemotes",
          "package": "fpco-api",
          "partial": "Remotes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ipiRemotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ipiRunConfigs",
          "package": "fpco-api",
          "signature": "[(FayRunConfigId, RunConfig)]",
          "source": "src/FP-API-Types.html#InitialProjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ipiRunConfigs",
          "normalized": "[(FayRunConfigId,RunConfig)]",
          "package": "fpco-api",
          "partial": "Run Configs",
          "signature": "[(FayRunConfigId,RunConfig)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ipiRunConfigs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ipiSearchWithRegex",
          "package": "fpco-api",
          "signature": "Bool",
          "source": "src/FP-API-Types.html#InitialProjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ipiSearchWithRegex",
          "package": "fpco-api",
          "partial": "Search With Regex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ipiSearchWithRegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ipiState",
          "package": "fpco-api",
          "signature": "[(ProjectState, Text)]",
          "source": "src/FP-API-Types.html#InitialProjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ipiState",
          "normalized": "[(ProjectState,Text)]",
          "package": "fpco-api",
          "partial": "State",
          "signature": "[(ProjectState,Text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ipiState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ipiTarget",
          "package": "fpco-api",
          "signature": "Maybe (Either FayFileName FayRunConfigId)",
          "source": "src/FP-API-Types.html#InitialProjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ipiTarget",
          "package": "fpco-api",
          "partial": "Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ipiTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ipiTheme",
          "package": "fpco-api",
          "signature": "Theme",
          "source": "src/FP-API-Types.html#InitialProjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ipiTheme",
          "package": "fpco-api",
          "partial": "Theme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ipiTheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ipiTitle",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#InitialProjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ipiTitle",
          "package": "fpco-api",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ipiTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "keterYaml",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#KeterYaml",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "keterYaml",
          "package": "fpco-api",
          "partial": "Yaml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:keterYaml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "liSnapApproot",
          "package": "fpco-api",
          "signature": "Maybe Text",
          "source": "src/FP-API-Types.html#LaunchInfoSnapshot",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "liSnapApproot",
          "package": "fpco-api",
          "partial": "Snap Approot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:liSnapApproot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTimestamp\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "liSnapLaunched",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#LaunchInfoSnapshot",
          "type": "function"
        },
        "index": {
          "description": "Timestamp",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "liSnapLaunched",
          "package": "fpco-api",
          "partial": "Snap Launched",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:liSnapLaunched"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "liSnapPort",
          "package": "fpco-api",
          "signature": "Maybe Int",
          "source": "src/FP-API-Types.html#LaunchInfoSnapshot",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "liSnapPort",
          "package": "fpco-api",
          "partial": "Snap Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:liSnapPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "mergeFile",
          "package": "fpco-api",
          "signature": "FayFileName",
          "source": "src/FP-API-Types.html#MergeConflict",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "mergeFile",
          "package": "fpco-api",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:mergeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "mergeState",
          "package": "fpco-api",
          "signature": "MergeModifyPair",
          "source": "src/FP-API-Types.html#MergeConflict",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "mergeState",
          "package": "fpco-api",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:mergeState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "mlName",
          "package": "fpco-api",
          "signature": "String",
          "source": "src/FP-API-Types.html#ModuleLink",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "mlName",
          "package": "fpco-api",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:mlName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "mlURL",
          "package": "fpco-api",
          "signature": "String",
          "source": "src/FP-API-Types.html#ModuleLink",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "mlURL",
          "package": "fpco-api",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:mlURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "mtJobId",
          "package": "fpco-api",
          "signature": "Maybe Int",
          "source": "src/FP-API-Types.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "mtJobId",
          "package": "fpco-api",
          "partial": "Job Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:mtJobId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "mtProjectId",
          "package": "fpco-api",
          "signature": "Maybe FayProjectId",
          "source": "src/FP-API-Types.html#MessageTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "mtProjectId",
          "package": "fpco-api",
          "partial": "Project Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:mtProjectId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "packageName",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#PackageId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "packageName",
          "package": "fpco-api",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:packageName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "packageVersion",
          "package": "fpco-api",
          "signature": "Maybe Text",
          "source": "src/FP-API-Types.html#PackageId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "packageVersion",
          "package": "fpco-api",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:packageVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "plName",
          "package": "fpco-api",
          "signature": "String",
          "source": "src/FP-API-Types.html#PackageLink",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "plName",
          "package": "fpco-api",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:plName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "plURL",
          "package": "fpco-api",
          "signature": "String",
          "source": "src/FP-API-Types.html#PackageLink",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "plURL",
          "package": "fpco-api",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:plURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parsed message. For instance, in the case of progress messages\n during compilation, \u003ccode\u003eprogressOrigMsg\u003c/code\u003e might be\n\u003c/p\u003e\u003cpre\u003e [1 of 2] Compiling M (some/path/to/file.hs, some/other/path/to/file.o)\n\u003c/pre\u003e\u003cp\u003ewhile \u003ccode\u003e\u003ca\u003eprogressMsg\u003c/a\u003e\u003c/code\u003e will just be 'Compiling M'\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "progressMsg",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#Progress",
          "type": "function"
        },
        "index": {
          "description": "The parsed message For instance in the case of progress messages during compilation progressOrigMsg might be of Compiling some path to file.hs some other path to file.o while progressMsg will just be Compiling",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "progressMsg",
          "package": "fpco-api",
          "partial": "Msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:progressMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe total number of steps\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "progressNumSteps",
          "package": "fpco-api",
          "signature": "Int",
          "source": "src/FP-API-Types.html#Progress",
          "type": "function"
        },
        "index": {
          "description": "The total number of steps",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "progressNumSteps",
          "package": "fpco-api",
          "partial": "Num Steps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:progressNumSteps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current step number\n\u003c/p\u003e\u003cp\u003eWhen these Progress messages are generated from progress updates from\n ghc, it is entirely possible that we might get step 4\u003cem\u003e26, 16\u003c/em\u003e26, 3/26;\n the steps may not be continuous, might even be out of order, and may\n not finish at X/X.\n\u003c/p\u003e",
          "module": "FP.API.Types",
          "name": "progressStep",
          "package": "fpco-api",
          "signature": "Int",
          "source": "src/FP-API-Types.html#Progress",
          "type": "function"
        },
        "index": {
          "description": "The current step number When these Progress messages are generated from progress updates from ghc it is entirely possible that we might get step the steps may not be continuous might even be out of order and may not finish at",
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "progressStep",
          "package": "fpco-api",
          "partial": "Step",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:progressStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "rbsId",
          "package": "fpco-api",
          "signature": "BuildId",
          "source": "src/FP-API-Types.html#RunnerBuildStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "rbsId",
          "package": "fpco-api",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:rbsId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "rbsMsg",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#RunnerBuildStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "rbsMsg",
          "package": "fpco-api",
          "partial": "Msg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:rbsMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "rbsProgress",
          "package": "fpco-api",
          "signature": "Progress",
          "source": "src/FP-API-Types.html#RunnerBuildStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "rbsProgress",
          "package": "fpco-api",
          "partial": "Progress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:rbsProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "rbsResult",
          "package": "fpco-api",
          "signature": "BuildResult",
          "source": "src/FP-API-Types.html#RunnerBuildStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "rbsResult",
          "package": "fpco-api",
          "partial": "Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:rbsResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "rcArgs",
          "package": "fpco-api",
          "signature": "[Text]",
          "source": "src/FP-API-Types.html#RunConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "rcArgs",
          "normalized": "[Text]",
          "package": "fpco-api",
          "partial": "Args",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:rcArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "rcEnv",
          "package": "fpco-api",
          "signature": "[(Text, Text)]",
          "source": "src/FP-API-Types.html#RunConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "rcEnv",
          "normalized": "[(Text,Text)]",
          "package": "fpco-api",
          "partial": "Env",
          "signature": "[(Text,Text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:rcEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "rcMainFile",
          "package": "fpco-api",
          "signature": "Maybe FayFileName",
          "source": "src/FP-API-Types.html#RunConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "rcMainFile",
          "package": "fpco-api",
          "partial": "Main File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:rcMainFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "rcTitle",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#RunConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "rcTitle",
          "package": "fpco-api",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:rcTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "rmPsLevel",
          "package": "fpco-api",
          "signature": "LogLevel",
          "source": "src/FP-API-Types.html#RunnerMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "rmPsLevel",
          "package": "fpco-api",
          "partial": "Ps Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:rmPsLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "rmPsMessage",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#RunnerMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "rmPsMessage",
          "package": "fpco-api",
          "partial": "Ps Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:rmPsMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "rmeMessage",
          "package": "fpco-api",
          "signature": "RunnerMessage",
          "source": "src/FP-API-Types.html#RunnerMessageEnvelope",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "rmeMessage",
          "package": "fpco-api",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:rmeMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "rmeMessageTag",
          "package": "fpco-api",
          "signature": "MessageTag",
          "source": "src/FP-API-Types.html#RunnerMessageEnvelope",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "rmeMessageTag",
          "package": "fpco-api",
          "partial": "Message Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:rmeMessageTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "rmeSeqNumber",
          "package": "fpco-api",
          "signature": "Integer",
          "source": "src/FP-API-Types.html#RunnerMessageEnvelope",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "rmeSeqNumber",
          "package": "fpco-api",
          "partial": "Seq Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:rmeSeqNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "snapBuildStatus",
          "package": "fpco-api",
          "signature": "RunnerBuildStatus",
          "source": "src/FP-API-Types.html#ProjectStatusSnapshot",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "snapBuildStatus",
          "package": "fpco-api",
          "partial": "Build Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:snapBuildStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "snapCompileStatus",
          "package": "fpco-api",
          "signature": "RunnerCompileStatus",
          "source": "src/FP-API-Types.html#ProjectStatusSnapshot",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "snapCompileStatus",
          "package": "fpco-api",
          "partial": "Compile Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:snapCompileStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "snapOpeningStatus",
          "package": "fpco-api",
          "signature": "RunnerOpeningStatus",
          "source": "src/FP-API-Types.html#ProjectStatusSnapshot",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "snapOpeningStatus",
          "package": "fpco-api",
          "partial": "Opening Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:snapOpeningStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "snapProcessStatus",
          "package": "fpco-api",
          "signature": "ProcessStatusSnapshot",
          "source": "src/FP-API-Types.html#ProjectStatusSnapshot",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "snapProcessStatus",
          "package": "fpco-api",
          "partial": "Process Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:snapProcessStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "spanFilePath",
          "package": "fpco-api",
          "signature": "FayFileName",
          "source": "src/FP-API-Types.html#SourceSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "spanFilePath",
          "package": "fpco-api",
          "partial": "File Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:spanFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "spanFromColumn",
          "package": "fpco-api",
          "signature": "Int",
          "source": "src/FP-API-Types.html#SourceSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "spanFromColumn",
          "package": "fpco-api",
          "partial": "From Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:spanFromColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "spanFromLine",
          "package": "fpco-api",
          "signature": "Int",
          "source": "src/FP-API-Types.html#SourceSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "spanFromLine",
          "package": "fpco-api",
          "partial": "From Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:spanFromLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "spanToColumn",
          "package": "fpco-api",
          "signature": "Int",
          "source": "src/FP-API-Types.html#SourceSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "spanToColumn",
          "package": "fpco-api",
          "partial": "To Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:spanToColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "spanToLine",
          "package": "fpco-api",
          "signature": "Int",
          "source": "src/FP-API-Types.html#SourceSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "spanToLine",
          "package": "fpco-api",
          "partial": "To Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:spanToLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ssiCabalName",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#SetSettingsInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ssiCabalName",
          "package": "fpco-api",
          "partial": "Cabal Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ssiCabalName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ssiCabalVersion",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#SetSettingsInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ssiCabalVersion",
          "package": "fpco-api",
          "partial": "Cabal Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ssiCabalVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ssiEnvironment",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#SetSettingsInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ssiEnvironment",
          "package": "fpco-api",
          "partial": "Environment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ssiEnvironment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ssiExtensions",
          "package": "fpco-api",
          "signature": "[SetExtension]",
          "source": "src/FP-API-Types.html#SetSettingsInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ssiExtensions",
          "normalized": "[SetExtension]",
          "package": "fpco-api",
          "partial": "Extensions",
          "signature": "[SetExtension]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ssiExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ssiExtraPackages",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#SetSettingsInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ssiExtraPackages",
          "package": "fpco-api",
          "partial": "Extra Packages",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ssiExtraPackages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ssiGhcArgs",
          "package": "fpco-api",
          "signature": "[Text]",
          "source": "src/FP-API-Types.html#SetSettingsInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ssiGhcArgs",
          "normalized": "[Text]",
          "package": "fpco-api",
          "partial": "Ghc Args",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ssiGhcArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ssiHiddenPackages",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#SetSettingsInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ssiHiddenPackages",
          "package": "fpco-api",
          "partial": "Hidden Packages",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ssiHiddenPackages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ssiModuleTemplate",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#SetSettingsInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ssiModuleTemplate",
          "package": "fpco-api",
          "partial": "Module Template",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ssiModuleTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "tliColumn",
          "package": "fpco-api",
          "signature": "Int",
          "source": "src/FP-API-Types.html#TopLevelIdentifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "tliColumn",
          "package": "fpco-api",
          "partial": "Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:tliColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "tliLine",
          "package": "fpco-api",
          "signature": "Int",
          "source": "src/FP-API-Types.html#TopLevelIdentifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "tliLine",
          "package": "fpco-api",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:tliLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "tliName",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#TopLevelIdentifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "tliName",
          "package": "fpco-api",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:tliName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ubExe",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#UploadedBuild",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ubExe",
          "package": "fpco-api",
          "partial": "Exe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ubExe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "ubUrl",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#UploadedBuild",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "ubUrl",
          "package": "fpco-api",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:ubUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "unBuildId",
          "package": "fpco-api",
          "signature": "Int",
          "source": "src/FP-API-Types.html#BuildId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "unBuildId",
          "package": "fpco-api",
          "partial": "Build Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:unBuildId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "unCompileId",
          "package": "fpco-api",
          "signature": "Int",
          "source": "src/FP-API-Types.html#CompileId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "unCompileId",
          "package": "fpco-api",
          "partial": "Compile Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:unCompileId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "unFayBgJobId",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#FayBgJobId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "unFayBgJobId",
          "package": "fpco-api",
          "partial": "Fay Bg Job Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:unFayBgJobId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "unFayDeploymentId",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#FayDeploymentId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "unFayDeploymentId",
          "package": "fpco-api",
          "partial": "Fay Deployment Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:unFayDeploymentId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "unFayFileName",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#FayFileName",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "unFayFileName",
          "package": "fpco-api",
          "partial": "Fay File Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:unFayFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "unFayManualMergeId",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#FayManualMergeId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "unFayManualMergeId",
          "package": "fpco-api",
          "partial": "Fay Manual Merge Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:unFayManualMergeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "unFayModuleName",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#FayModuleName",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "unFayModuleName",
          "package": "fpco-api",
          "partial": "Fay Module Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:unFayModuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "unFayProjectId",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#FayProjectId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "unFayProjectId",
          "package": "fpco-api",
          "partial": "Fay Project Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:unFayProjectId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "unFayRunConfigId",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#FayRunConfigId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "unFayRunConfigId",
          "package": "fpco-api",
          "partial": "Fay Run Config Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:unFayRunConfigId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "unFayWebAppId",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#FayWebAppId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "unFayWebAppId",
          "package": "fpco-api",
          "partial": "Fay Web App Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:unFayWebAppId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "unHoogleId",
          "package": "fpco-api",
          "signature": "Int",
          "source": "src/FP-API-Types.html#HoogleId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "unHoogleId",
          "package": "fpco-api",
          "partial": "Hoogle Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:unHoogleId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "unHtmlReply",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#HtmlReply",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "unHtmlReply",
          "package": "fpco-api",
          "partial": "Html Reply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:unHtmlReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "unProcId",
          "package": "fpco-api",
          "signature": "Int",
          "source": "src/FP-API-Types.html#ProcId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "unProcId",
          "package": "fpco-api",
          "partial": "Proc Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:unProcId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "unRandomHostname",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#RandomHostName",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "unRandomHostname",
          "package": "fpco-api",
          "partial": "Random Hostname",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:unRandomHostname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "unSearchId",
          "package": "fpco-api",
          "signature": "Int",
          "source": "src/FP-API-Types.html#SearchId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "unSearchId",
          "package": "fpco-api",
          "partial": "Search Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:unSearchId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "unTextReply",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#TextReply",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "unTextReply",
          "package": "fpco-api",
          "partial": "Text Reply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:unTextReply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "unTutorialConcurrentToken",
          "package": "fpco-api",
          "signature": "Int",
          "source": "src/FP-API-Types.html#TutorialConcurrentToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "unTutorialConcurrentToken",
          "package": "fpco-api",
          "partial": "Tutorial Concurrent Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:unTutorialConcurrentToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "wapArgs",
          "package": "fpco-api",
          "signature": "[Text]",
          "source": "src/FP-API-Types.html#WebApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "wapArgs",
          "normalized": "[Text]",
          "package": "fpco-api",
          "partial": "Args",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:wapArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "wapEnv",
          "package": "fpco-api",
          "signature": "[(Text, Text)]",
          "source": "src/FP-API-Types.html#WebApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "wapEnv",
          "normalized": "[(Text,Text)]",
          "package": "fpco-api",
          "partial": "Env",
          "signature": "[(Text,Text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:wapEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "wapFileName",
          "package": "fpco-api",
          "signature": "Maybe FayFileName",
          "source": "src/FP-API-Types.html#WebApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "wapFileName",
          "package": "fpco-api",
          "partial": "File Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:wapFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "wapHostname",
          "package": "fpco-api",
          "signature": "Maybe Text",
          "source": "src/FP-API-Types.html#WebApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "wapHostname",
          "package": "fpco-api",
          "partial": "Hostname",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:wapHostname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "wapSsl",
          "package": "fpco-api",
          "signature": "Bool",
          "source": "src/FP-API-Types.html#WebApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "wapSsl",
          "package": "fpco-api",
          "partial": "Ssl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:wapSsl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API.Types",
          "name": "wapTitle",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-API-Types.html#WebApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API Types",
          "module": "FP.API.Types",
          "name": "wapTitle",
          "package": "fpco-api",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API-Types.html#v:wapTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommands for the IDE API.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FP.API",
          "name": "API",
          "package": "fpco-api",
          "source": "src/FP-API.html",
          "type": "module"
        },
        "index": {
          "description": "Commands for the IDE API",
          "hierarchy": "FP API",
          "module": "FP.API",
          "name": "API",
          "package": "fpco-api",
          "partial": "API",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API",
          "name": "addFile",
          "package": "fpco-api",
          "signature": "FileInfo -\u003e FayProjectId -\u003e m SaveFileOutput",
          "source": "src/FP-API.html#addFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API",
          "module": "FP.API",
          "name": "addFile",
          "normalized": "FileInfo-\u003eFayProjectId-\u003ea SaveFileOutput",
          "package": "fpco-api",
          "partial": "File",
          "signature": "FileInfo-\u003eFayProjectId-\u003em SaveFileOutput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API.html#v:addFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API",
          "name": "deleteFile",
          "package": "fpco-api",
          "signature": "FayFileName -\u003e FayProjectId -\u003e m CompileChanged",
          "source": "src/FP-API.html#deleteFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API",
          "module": "FP.API",
          "name": "deleteFile",
          "normalized": "FayFileName-\u003eFayProjectId-\u003ea CompileChanged",
          "package": "fpco-api",
          "partial": "File",
          "signature": "FayFileName-\u003eFayProjectId-\u003em CompileChanged",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API.html#v:deleteFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API",
          "name": "getAutocompletions",
          "package": "fpco-api",
          "signature": "AutoCompleteInput -\u003e FayProjectId -\u003e m ()",
          "source": "src/FP-API.html#getAutocompletions",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API",
          "module": "FP.API",
          "name": "getAutocompletions",
          "normalized": "AutoCompleteInput-\u003eFayProjectId-\u003ea()",
          "package": "fpco-api",
          "partial": "Autocompletions",
          "signature": "AutoCompleteInput-\u003eFayProjectId-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API.html#v:getAutocompletions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API",
          "name": "getDefinitionSource",
          "package": "fpco-api",
          "signature": "SourceSpan -\u003e FayProjectId -\u003e m ()",
          "source": "src/FP-API.html#getDefinitionSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API",
          "module": "FP.API",
          "name": "getDefinitionSource",
          "normalized": "SourceSpan-\u003eFayProjectId-\u003ea()",
          "package": "fpco-api",
          "partial": "Definition Source",
          "signature": "SourceSpan-\u003eFayProjectId-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API.html#v:getDefinitionSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API",
          "name": "getFile",
          "package": "fpco-api",
          "signature": "FayFileName -\u003e FayProjectId -\u003e m FileContent",
          "source": "src/FP-API.html#getFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API",
          "module": "FP.API",
          "name": "getFile",
          "normalized": "FayFileName-\u003eFayProjectId-\u003ea FileContent",
          "package": "fpco-api",
          "partial": "File",
          "signature": "FayFileName-\u003eFayProjectId-\u003em FileContent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API.html#v:getFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API",
          "name": "getFileToken",
          "package": "fpco-api",
          "signature": "FayFileName -\u003e FayProjectId -\u003e m FayTutorialToken",
          "source": "src/FP-API.html#getFileToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API",
          "module": "FP.API",
          "name": "getFileToken",
          "normalized": "FayFileName-\u003eFayProjectId-\u003ea FayTutorialToken",
          "package": "fpco-api",
          "partial": "File Token",
          "signature": "FayFileName-\u003eFayProjectId-\u003em FayTutorialToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API.html#v:getFileToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API",
          "name": "getInitialProjectInfo",
          "package": "fpco-api",
          "signature": "FayProjectId -\u003e m InitialProjectInfo",
          "source": "src/FP-API.html#getInitialProjectInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API",
          "module": "FP.API",
          "name": "getInitialProjectInfo",
          "normalized": "FayProjectId-\u003ea InitialProjectInfo",
          "package": "fpco-api",
          "partial": "Initial Project Info",
          "signature": "FayProjectId-\u003em InitialProjectInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API.html#v:getInitialProjectInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API",
          "name": "getProjectId",
          "package": "fpco-api",
          "signature": "Text -\u003e m FayProjectId",
          "source": "src/FP-API.html#getProjectId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API",
          "module": "FP.API",
          "name": "getProjectId",
          "normalized": "Text-\u003ea FayProjectId",
          "package": "fpco-api",
          "partial": "Project Id",
          "signature": "Text-\u003em FayProjectId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API.html#v:getProjectId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API",
          "name": "getProjectMessages",
          "package": "fpco-api",
          "signature": "ProjectMessagesRequest -\u003e FayProjectId -\u003e m ProjectMessagesOutput",
          "source": "src/FP-API.html#getProjectMessages",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API",
          "module": "FP.API",
          "name": "getProjectMessages",
          "normalized": "ProjectMessagesRequest-\u003eFayProjectId-\u003ea ProjectMessagesOutput",
          "package": "fpco-api",
          "partial": "Project Messages",
          "signature": "ProjectMessagesRequest-\u003eFayProjectId-\u003em ProjectMessagesOutput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API.html#v:getProjectMessages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API",
          "name": "getTypeInfo",
          "package": "fpco-api",
          "signature": "SourceSpan -\u003e Int -\u003e FayProjectId -\u003e m ()",
          "source": "src/FP-API.html#getTypeInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API",
          "module": "FP.API",
          "name": "getTypeInfo",
          "normalized": "SourceSpan-\u003eInt-\u003eFayProjectId-\u003ea()",
          "package": "fpco-api",
          "partial": "Type Info",
          "signature": "SourceSpan-\u003eInt-\u003eFayProjectId-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API.html#v:getTypeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API",
          "name": "ideHoogleSearch",
          "package": "fpco-api",
          "signature": "Maybe FayFileName -\u003e Bool -\u003e Int -\u003e Int -\u003e Int -\u003e Text -\u003e FayProjectId -\u003e m HoogleId",
          "source": "src/FP-API.html#ideHoogleSearch",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API",
          "module": "FP.API",
          "name": "ideHoogleSearch",
          "normalized": "Maybe FayFileName-\u003eBool-\u003eInt-\u003eInt-\u003eInt-\u003eText-\u003eFayProjectId-\u003ea HoogleId",
          "package": "fpco-api",
          "partial": "Hoogle Search",
          "signature": "Maybe FayFileName-\u003eBool-\u003eInt-\u003eInt-\u003eInt-\u003eText-\u003eFayProjectId-\u003em HoogleId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API.html#v:ideHoogleSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.API",
          "name": "saveFile",
          "package": "fpco-api",
          "signature": "FayFileName -\u003e Text -\u003e FayTutorialToken -\u003e FayProjectId -\u003e m SaveFileOutput",
          "source": "src/FP-API.html#saveFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP API",
          "module": "FP.API",
          "name": "saveFile",
          "normalized": "FayFileName-\u003eText-\u003eFayTutorialToken-\u003eFayProjectId-\u003ea SaveFileOutput",
          "package": "fpco-api",
          "partial": "File",
          "signature": "FayFileName-\u003eText-\u003eFayTutorialToken-\u003eFayProjectId-\u003em SaveFileOutput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-API.html#v:saveFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eServer configuration.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FP.Server.Config",
          "name": "Config",
          "package": "fpco-api",
          "source": "src/FP-Server-Config.html",
          "type": "module"
        },
        "index": {
          "description": "Server configuration",
          "hierarchy": "FP Server Config",
          "module": "FP.Server.Config",
          "name": "Config",
          "package": "fpco-api",
          "partial": "Config",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Config.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault port to accept commands on.\n\u003c/p\u003e",
          "module": "FP.Server.Config",
          "name": "defaultPort",
          "package": "fpco-api",
          "signature": "Integer",
          "source": "src/FP-Server-Config.html#defaultPort",
          "type": "function"
        },
        "index": {
          "description": "Default port to accept commands on",
          "hierarchy": "FP Server Config",
          "module": "FP.Server.Config",
          "name": "defaultPort",
          "package": "fpco-api",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Config.html#v:defaultPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault url to accept commands on.\n\u003c/p\u003e",
          "module": "FP.Server.Config",
          "name": "defaultUrl",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-Server-Config.html#defaultUrl",
          "type": "function"
        },
        "index": {
          "description": "Default url to accept commands on",
          "hierarchy": "FP Server Config",
          "module": "FP.Server.Config",
          "name": "defaultUrl",
          "package": "fpco-api",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Config.html#v:defaultUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSource spans and locations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FP.Server.Spans",
          "name": "Spans",
          "package": "fpco-api",
          "source": "src/FP-Server-Spans.html",
          "type": "module"
        },
        "index": {
          "description": "Source spans and locations",
          "hierarchy": "FP Server Spans",
          "module": "FP.Server.Spans",
          "name": "Spans",
          "package": "fpco-api",
          "partial": "Spans",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Spans.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Spans",
          "name": "makeEitherLoc",
          "package": "fpco-api",
          "signature": "FilePath -\u003e EitherSpan -\u003e Maybe Loc",
          "source": "src/FP-Server-Spans.html#makeEitherLoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Spans",
          "module": "FP.Server.Spans",
          "name": "makeEitherLoc",
          "normalized": "FilePath-\u003eEitherSpan-\u003eMaybe Loc",
          "package": "fpco-api",
          "partial": "Either Loc",
          "signature": "FilePath-\u003eEitherSpan-\u003eMaybe Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Spans.html#v:makeEitherLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Spans",
          "name": "makeLoc",
          "package": "fpco-api",
          "signature": "FilePath -\u003e SourceSpan -\u003e Loc",
          "source": "src/FP-Server-Spans.html#makeLoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Spans",
          "module": "FP.Server.Spans",
          "name": "makeLoc",
          "normalized": "FilePath-\u003eSourceSpan-\u003eLoc",
          "package": "fpco-api",
          "partial": "Loc",
          "signature": "FilePath-\u003eSourceSpan-\u003eLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Spans.html#v:makeLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint either a useful span or a useless one.\n\u003c/p\u003e",
          "module": "FP.Server.Spans",
          "name": "printEitherSpan",
          "package": "fpco-api",
          "signature": "FilePath -\u003e EitherSpan -\u003e Text",
          "source": "src/FP-Server-Spans.html#printEitherSpan",
          "type": "function"
        },
        "index": {
          "description": "Print either useful span or useless one",
          "hierarchy": "FP Server Spans",
          "module": "FP.Server.Spans",
          "name": "printEitherSpan",
          "normalized": "FilePath-\u003eEitherSpan-\u003eText",
          "package": "fpco-api",
          "partial": "Either Span",
          "signature": "FilePath-\u003eEitherSpan-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Spans.html#v:printEitherSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a span as Main.hs:1:23\n\u003c/p\u003e",
          "module": "FP.Server.Spans",
          "name": "printSourceSpan",
          "package": "fpco-api",
          "signature": "FilePath -\u003e SourceSpan -\u003e Text",
          "source": "src/FP-Server-Spans.html#printSourceSpan",
          "type": "function"
        },
        "index": {
          "description": "Print span as Main.hs",
          "hierarchy": "FP Server Spans",
          "module": "FP.Server.Spans",
          "name": "printSourceSpan",
          "normalized": "FilePath-\u003eSourceSpan-\u003eText",
          "package": "fpco-api",
          "partial": "Source Span",
          "signature": "FilePath-\u003eSourceSpan-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Spans.html#v:printSourceSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Spans",
          "name": "toSpanType",
          "package": "fpco-api",
          "signature": "TypeInfo -\u003e SpanType",
          "source": "src/FP-Server-Spans.html#toSpanType",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Spans",
          "module": "FP.Server.Spans",
          "name": "toSpanType",
          "normalized": "TypeInfo-\u003eSpanType",
          "package": "fpco-api",
          "partial": "Span Type",
          "signature": "TypeInfo-\u003eSpanType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Spans.html#v:toSpanType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eServer types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FP.Server.Types",
          "name": "Types",
          "package": "fpco-api",
          "source": "src/FP-Server-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Server types",
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "Types",
          "package": "fpco-api",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA callback that will look at incoming messages and determine\n whether it's what it wants.\n\u003c/p\u003e",
          "module": "FP.Server.Types",
          "name": "Callback",
          "package": "fpco-api",
          "source": "src/FP-Server-Types.html#Callback",
          "type": "newtype"
        },
        "index": {
          "description": "callback that will look at incoming messages and determine whether it what it wants",
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "Callback",
          "package": "fpco-api",
          "partial": "Callback",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#t:Callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA message from the compiler about code.\n\u003c/p\u003e",
          "module": "FP.Server.Types",
          "name": "CompileMessage",
          "package": "fpco-api",
          "source": "src/FP-Server-Types.html#CompileMessage",
          "type": "data"
        },
        "index": {
          "description": "message from the compiler about code",
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "CompileMessage",
          "package": "fpco-api",
          "partial": "Compile Message",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#t:CompileMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration for server.\n\u003c/p\u003e",
          "module": "FP.Server.Types",
          "name": "Config",
          "package": "fpco-api",
          "source": "src/FP-Server-Types.html#Config",
          "type": "data"
        },
        "index": {
          "description": "Configuration for server",
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "Config",
          "package": "fpco-api",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "DefinitionLoc",
          "package": "fpco-api",
          "source": "src/FP-Server-Types.html#DefinitionLoc",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "DefinitionLoc",
          "package": "fpco-api",
          "partial": "Definition Loc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#t:DefinitionLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the callback done looking for what it wants?\n\u003c/p\u003e",
          "module": "FP.Server.Types",
          "name": "Done",
          "package": "fpco-api",
          "source": "src/FP-Server-Types.html#Done",
          "type": "data"
        },
        "index": {
          "description": "Is the callback done looking for what it wants",
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "Done",
          "package": "fpco-api",
          "partial": "Done",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#t:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "Loc",
          "package": "fpco-api",
          "source": "src/FP-Server-Types.html#Loc",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "Loc",
          "package": "fpco-api",
          "partial": "Loc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#t:Loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "ModuleId",
          "package": "fpco-api",
          "source": "src/FP-Server-Types.html#ModuleId",
          "type": "data"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "ModuleId",
          "package": "fpco-api",
          "partial": "Module Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#t:ModuleId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage from the client.\n\u003c/p\u003e",
          "module": "FP.Server.Types",
          "name": "Msg",
          "package": "fpco-api",
          "source": "src/FP-Server-Types.html#Msg",
          "type": "data"
        },
        "index": {
          "description": "Message from the client",
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "Msg",
          "package": "fpco-api",
          "partial": "Msg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#t:Msg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReply to the client.\n\u003c/p\u003e",
          "module": "FP.Server.Types",
          "name": "Reply",
          "package": "fpco-api",
          "source": "src/FP-Server-Types.html#Reply",
          "type": "data"
        },
        "index": {
          "description": "Reply to the client",
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "Reply",
          "package": "fpco-api",
          "partial": "Reply",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#t:Reply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer monad.\n\u003c/p\u003e",
          "module": "FP.Server.Types",
          "name": "Server",
          "package": "fpco-api",
          "source": "src/FP-Server-Types.html#Server",
          "type": "type"
        },
        "index": {
          "description": "Server monad",
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "Server",
          "package": "fpco-api",
          "partial": "Server",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#t:Server"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe configuration for the server and some state.\n\u003c/p\u003e",
          "module": "FP.Server.Types",
          "name": "ServerReader",
          "package": "fpco-api",
          "source": "src/FP-Server-Types.html#ServerReader",
          "type": "data"
        },
        "index": {
          "description": "The configuration for the server and some state",
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "ServerReader",
          "package": "fpco-api",
          "partial": "Server Reader",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#t:ServerReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type info thing.\n\u003c/p\u003e",
          "module": "FP.Server.Types",
          "name": "SpanType",
          "package": "fpco-api",
          "source": "src/FP-Server-Types.html#SpanType",
          "type": "data"
        },
        "index": {
          "description": "type info thing",
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "SpanType",
          "package": "fpco-api",
          "partial": "Span Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#t:SpanType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "Callback",
          "package": "fpco-api",
          "signature": "Callback (Maybe Int -\u003e RunnerMessage -\u003e Server Done)",
          "source": "src/FP-Server-Types.html#Callback",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "Callback",
          "normalized": "Callback(Maybe Int-\u003eRunnerMessage-\u003eServer Done)",
          "package": "fpco-api",
          "partial": "Callback",
          "signature": "Callback(Maybe Int-\u003eRunnerMessage-\u003eServer Done)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:Callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "CompileMessage",
          "package": "fpco-api",
          "signature": "CompileMessage Text Text Text",
          "source": "src/FP-Server-Types.html#CompileMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "CompileMessage",
          "package": "fpco-api",
          "partial": "Compile Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:CompileMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "Config",
          "package": "fpco-api",
          "signature": "Config",
          "source": "src/FP-Server-Types.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "Config",
          "package": "fpco-api",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "DefinitionImport",
          "package": "fpco-api",
          "signature": "DefinitionImport Text ModuleId ModuleId (Maybe Loc) (Maybe Loc)",
          "source": "src/FP-Server-Types.html#DefinitionLoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "DefinitionImport",
          "package": "fpco-api",
          "partial": "Definition Import",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:DefinitionImport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "DefinitionLoc",
          "package": "fpco-api",
          "signature": "DefinitionLoc Loc",
          "source": "src/FP-Server-Types.html#DefinitionLoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "DefinitionLoc",
          "package": "fpco-api",
          "partial": "Definition Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:DefinitionLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "DefinitionUseless",
          "package": "fpco-api",
          "signature": "DefinitionUseless Text",
          "source": "src/FP-Server-Types.html#DefinitionLoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "DefinitionUseless",
          "package": "fpco-api",
          "partial": "Definition Useless",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:DefinitionUseless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "Done",
          "package": "fpco-api",
          "signature": "Done",
          "source": "src/FP-Server-Types.html#Done",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "Done",
          "package": "fpco-api",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "Loc",
          "package": "fpco-api",
          "signature": "Loc FilePath Int Int Int Int",
          "source": "src/FP-Server-Types.html#Loc",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "Loc",
          "package": "fpco-api",
          "partial": "Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:Loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "ModuleId",
          "package": "fpco-api",
          "signature": "ModuleId Text Text",
          "source": "src/FP-Server-Types.html#ModuleId",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "ModuleId",
          "package": "fpco-api",
          "partial": "Module Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:ModuleId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "MsgAutoComplete",
          "package": "fpco-api",
          "signature": "MsgAutoComplete FayProjectId FilePath Text",
          "source": "src/FP-Server-Types.html#Msg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "MsgAutoComplete",
          "package": "fpco-api",
          "partial": "Msg Auto Complete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:MsgAutoComplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "MsgCheckModule",
          "package": "fpco-api",
          "signature": "MsgCheckModule FayProjectId FilePath FilePath FilePath",
          "source": "src/FP-Server-Types.html#Msg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "MsgCheckModule",
          "package": "fpco-api",
          "partial": "Msg Check Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:MsgCheckModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "MsgDownloadFiles",
          "package": "fpco-api",
          "signature": "MsgDownloadFiles (Either Text FayProjectId) FilePath",
          "source": "src/FP-Server-Types.html#Msg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "MsgDownloadFiles",
          "package": "fpco-api",
          "partial": "Msg Download Files",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:MsgDownloadFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "MsgGetDefinition",
          "package": "fpco-api",
          "signature": "MsgGetDefinition FayProjectId FilePath FilePath Int Int Int Int",
          "source": "src/FP-Server-Types.html#Msg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "MsgGetDefinition",
          "package": "fpco-api",
          "partial": "Msg Get Definition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:MsgGetDefinition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "MsgHoogleDb",
          "package": "fpco-api",
          "signature": "MsgHoogleDb FayProjectId Text",
          "source": "src/FP-Server-Types.html#Msg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "MsgHoogleDb",
          "package": "fpco-api",
          "partial": "Msg Hoogle Db",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:MsgHoogleDb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "MsgHoogleIdent",
          "package": "fpco-api",
          "signature": "MsgHoogleIdent FayProjectId FilePath Text",
          "source": "src/FP-Server-Types.html#Msg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "MsgHoogleIdent",
          "package": "fpco-api",
          "partial": "Msg Hoogle Ident",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:MsgHoogleIdent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "MsgSaveModule",
          "package": "fpco-api",
          "signature": "MsgSaveModule FayProjectId FilePath FilePath",
          "source": "src/FP-Server-Types.html#Msg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "MsgSaveModule",
          "package": "fpco-api",
          "partial": "Msg Save Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:MsgSaveModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "MsgTypeInfo",
          "package": "fpco-api",
          "signature": "MsgTypeInfo FayProjectId FilePath Int Int Int Int",
          "source": "src/FP-Server-Types.html#Msg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "MsgTypeInfo",
          "package": "fpco-api",
          "partial": "Msg Type Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:MsgTypeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "MsgWriteEmacsConfig",
          "package": "fpco-api",
          "signature": "MsgWriteEmacsConfig (Either Text FayProjectId) FilePath",
          "source": "src/FP-Server-Types.html#Msg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "MsgWriteEmacsConfig",
          "package": "fpco-api",
          "partial": "Msg Write Emacs Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:MsgWriteEmacsConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "NotDone",
          "package": "fpco-api",
          "signature": "NotDone",
          "source": "src/FP-Server-Types.html#Done",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "NotDone",
          "package": "fpco-api",
          "partial": "Not Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:NotDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "ReplyCompileInfos",
          "package": "fpco-api",
          "signature": "ReplyCompileInfos [SourceInfo]",
          "source": "src/FP-Server-Types.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "ReplyCompileInfos",
          "normalized": "ReplyCompileInfos[SourceInfo]",
          "package": "fpco-api",
          "partial": "Reply Compile Infos",
          "signature": "ReplyCompileInfos[SourceInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:ReplyCompileInfos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "ReplyCompileMessages",
          "package": "fpco-api",
          "signature": "ReplyCompileMessages [CompileMessage]",
          "source": "src/FP-Server-Types.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "ReplyCompileMessages",
          "normalized": "ReplyCompileMessages[CompileMessage]",
          "package": "fpco-api",
          "partial": "Reply Compile Messages",
          "signature": "ReplyCompileMessages[CompileMessage]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:ReplyCompileMessages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "ReplyCompletions",
          "package": "fpco-api",
          "signature": "ReplyCompletions [Text]",
          "source": "src/FP-Server-Types.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "ReplyCompletions",
          "normalized": "ReplyCompletions[Text]",
          "package": "fpco-api",
          "partial": "Reply Completions",
          "signature": "ReplyCompletions[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:ReplyCompletions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "ReplyHoogleResult",
          "package": "fpco-api",
          "signature": "ReplyHoogleResult HoogleResult",
          "source": "src/FP-Server-Types.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "ReplyHoogleResult",
          "package": "fpco-api",
          "partial": "Reply Hoogle Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:ReplyHoogleResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "ReplyHoogleResults",
          "package": "fpco-api",
          "signature": "ReplyHoogleResults [HoogleResult]",
          "source": "src/FP-Server-Types.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "ReplyHoogleResults",
          "normalized": "ReplyHoogleResults[HoogleResult]",
          "package": "fpco-api",
          "partial": "Reply Hoogle Results",
          "signature": "ReplyHoogleResults[HoogleResult]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:ReplyHoogleResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "ReplyLocation",
          "package": "fpco-api",
          "signature": "ReplyLocation DefinitionLoc",
          "source": "src/FP-Server-Types.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "ReplyLocation",
          "package": "fpco-api",
          "partial": "Reply Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:ReplyLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "ReplyOK",
          "package": "fpco-api",
          "signature": "ReplyOK ()",
          "source": "src/FP-Server-Types.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "ReplyOK",
          "normalized": "ReplyOK()",
          "package": "fpco-api",
          "partial": "Reply OK",
          "signature": "ReplyOK()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:ReplyOK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "ReplyPong",
          "package": "fpco-api",
          "signature": "ReplyPong ()",
          "source": "src/FP-Server-Types.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "ReplyPong",
          "normalized": "ReplyPong()",
          "package": "fpco-api",
          "partial": "Reply Pong",
          "signature": "ReplyPong()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:ReplyPong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "ReplySaveStatus",
          "package": "fpco-api",
          "signature": "ReplySaveStatus Bool",
          "source": "src/FP-Server-Types.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "ReplySaveStatus",
          "package": "fpco-api",
          "partial": "Reply Save Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:ReplySaveStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "ReplyTypeInfo",
          "package": "fpco-api",
          "signature": "ReplyTypeInfo [SpanType]",
          "source": "src/FP-Server-Types.html#Reply",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "ReplyTypeInfo",
          "normalized": "ReplyTypeInfo[SpanType]",
          "package": "fpco-api",
          "partial": "Reply Type Info",
          "signature": "ReplyTypeInfo[SpanType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:ReplyTypeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "ServerReader",
          "package": "fpco-api",
          "signature": "ServerReader",
          "source": "src/FP-Server-Types.html#ServerReader",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "ServerReader",
          "package": "fpco-api",
          "partial": "Server Reader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:ServerReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "SpanType",
          "package": "fpco-api",
          "signature": "SpanType Int Int Int Int Text Text",
          "source": "src/FP-Server-Types.html#SpanType",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "SpanType",
          "package": "fpco-api",
          "partial": "Span Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:SpanType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "configAgent",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-Server-Types.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "configAgent",
          "package": "fpco-api",
          "partial": "Agent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:configAgent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "configDebug",
          "package": "fpco-api",
          "signature": "Bool",
          "source": "src/FP-Server-Types.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "configDebug",
          "package": "fpco-api",
          "partial": "Debug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:configDebug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "configPort",
          "package": "fpco-api",
          "signature": "Integer",
          "source": "src/FP-Server-Types.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "configPort",
          "package": "fpco-api",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:configPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "configStartServer",
          "package": "fpco-api",
          "signature": "Bool",
          "source": "src/FP-Server-Types.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "configStartServer",
          "package": "fpco-api",
          "partial": "Start Server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:configStartServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "configToken",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-Server-Types.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "configToken",
          "package": "fpco-api",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:configToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "configUrl",
          "package": "fpco-api",
          "signature": "Text",
          "source": "src/FP-Server-Types.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "configUrl",
          "package": "fpco-api",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:configUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "serverCC",
          "package": "fpco-api",
          "signature": "ClientConfig",
          "source": "src/FP-Server-Types.html#ServerReader",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "serverCC",
          "package": "fpco-api",
          "partial": "CC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:serverCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "serverConfig",
          "package": "fpco-api",
          "signature": "Config",
          "source": "src/FP-Server-Types.html#ServerReader",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "serverConfig",
          "package": "fpco-api",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:serverConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "serverPollers",
          "package": "fpco-api",
          "signature": "MVar (Map FayProjectId [Callback])",
          "source": "src/FP-Server-Types.html#ServerReader",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "serverPollers",
          "normalized": "MVar(Map FayProjectId[Callback])",
          "package": "fpco-api",
          "partial": "Pollers",
          "signature": "MVar(Map FayProjectId[Callback])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:serverPollers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FP.Server.Types",
          "name": "serverTokens",
          "package": "fpco-api",
          "signature": "MVar (MVar (Map FilePath FayTutorialToken))",
          "source": "src/FP-Server-Types.html#ServerReader",
          "type": "function"
        },
        "index": {
          "hierarchy": "FP Server Types",
          "module": "FP.Server.Types",
          "name": "serverTokens",
          "package": "fpco-api",
          "partial": "Tokens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server-Types.html#v:serverTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMain entry point to the server.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FP.Server",
          "name": "Server",
          "package": "fpco-api",
          "source": "src/FP-Server.html",
          "type": "module"
        },
        "index": {
          "description": "Main entry point to the server",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "Server",
          "package": "fpco-api",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccept a connection on the given socket.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "acceptConnection",
          "package": "fpco-api",
          "signature": "Socket -\u003e Server ()",
          "source": "src/FP-Server.html#acceptConnection",
          "type": "function"
        },
        "index": {
          "description": "Accept connection on the given socket",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "acceptConnection",
          "normalized": "Socket-\u003eServer()",
          "package": "fpco-api",
          "partial": "Connection",
          "signature": "Socket-\u003eServer()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:acceptConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies the given callbacks to the given message. Returns a new\n list of callbacks. If any of the callbacks are now done, they will\n be removed from the list.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "applyCallbacks",
          "package": "fpco-api",
          "signature": "[Callback] -\u003e (Maybe Int, RunnerMessage) -\u003e Server [Callback]",
          "source": "src/FP-Server.html#applyCallbacks",
          "type": "function"
        },
        "index": {
          "description": "Applies the given callbacks to the given message Returns new list of callbacks If any of the callbacks are now done they will be removed from the list",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "applyCallbacks",
          "normalized": "[Callback]-\u003e(Maybe Int,RunnerMessage)-\u003eServer[Callback]",
          "package": "fpco-api",
          "partial": "Callbacks",
          "signature": "[Callback]-\u003e(Maybe Int,RunnerMessage)-\u003eServer[Callback]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:applyCallbacks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAutocomplete the given prefix replying with a list of\n completions.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "autoComplete",
          "package": "fpco-api",
          "signature": "Handle -\u003e FayProjectId -\u003e FilePath -\u003e Text -\u003e Server ()",
          "source": "src/FP-Server.html#autoComplete",
          "type": "function"
        },
        "index": {
          "description": "Autocomplete the given prefix replying with list of completions",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "autoComplete",
          "normalized": "Handle-\u003eFayProjectId-\u003eFilePath-\u003eText-\u003eServer()",
          "package": "fpco-api",
          "partial": "Complete",
          "signature": "Handle-\u003eFayProjectId-\u003eFilePath-\u003eText-\u003eServer()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:autoComplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck the given module. Necessary for flycheck.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "checkModule",
          "package": "fpco-api",
          "signature": "Handle -\u003e FayProjectId -\u003e FilePath -\u003e FilePath -\u003e FilePath -\u003e Server ()",
          "source": "src/FP-Server.html#checkModule",
          "type": "function"
        },
        "index": {
          "description": "Check the given module Necessary for flycheck",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "checkModule",
          "normalized": "Handle-\u003eFayProjectId-\u003eFilePath-\u003eFilePath-\u003eFilePath-\u003eServer()",
          "package": "fpco-api",
          "partial": "Module",
          "signature": "Handle-\u003eFayProjectId-\u003eFilePath-\u003eFilePath-\u003eFilePath-\u003eServer()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:checkModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the given handle.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "close",
          "package": "fpco-api",
          "signature": "Handle -\u003e Server ()",
          "source": "src/FP-Server.html#close",
          "type": "function"
        },
        "index": {
          "description": "Close the given handle",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "close",
          "normalized": "Handle-\u003eServer()",
          "package": "fpco-api",
          "signature": "Handle-\u003eServer()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an API message to a more structurally convenient reply message.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "convertMsg",
          "package": "fpco-api",
          "signature": "FilePath -\u003e SourceInfo -\u003e CompileMessage",
          "source": "src/FP-Server.html#convertMsg",
          "type": "function"
        },
        "index": {
          "description": "Convert an API message to more structurally convenient reply message",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "convertMsg",
          "normalized": "FilePath-\u003eSourceInfo-\u003eCompileMessage",
          "package": "fpco-api",
          "partial": "Msg",
          "signature": "FilePath-\u003eSourceInfo-\u003eCompileMessage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:convertMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDownload all files in the project, overwriting any local copies.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "downloadFiles",
          "package": "fpco-api",
          "signature": "Handle -\u003e Either Text FayProjectId -\u003e FilePath -\u003e Server ()",
          "source": "src/FP-Server.html#downloadFiles",
          "type": "function"
        },
        "index": {
          "description": "Download all files in the project overwriting any local copies",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "downloadFiles",
          "normalized": "Handle-\u003eEither Text FayProjectId-\u003eFilePath-\u003eServer()",
          "package": "fpco-api",
          "partial": "Files",
          "signature": "Handle-\u003eEither Text FayProjectId-\u003eFilePath-\u003eServer()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:downloadFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the definition location of the identifier at the given span.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "getDefinition",
          "package": "fpco-api",
          "signature": "Handle -\u003e FayProjectId -\u003e FilePath -\u003e FilePath -\u003e Int -\u003e Int -\u003e Int -\u003e Int -\u003e Server ()",
          "source": "src/FP-Server.html#getDefinition",
          "type": "function"
        },
        "index": {
          "description": "Get the definition location of the identifier at the given span",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "getDefinition",
          "normalized": "Handle-\u003eFayProjectId-\u003eFilePath-\u003eFilePath-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eServer()",
          "package": "fpco-api",
          "partial": "Definition",
          "signature": "Handle-\u003eFayProjectId-\u003eFilePath-\u003eFilePath-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eServer()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:getDefinition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the project ID from either a URL or a project ID.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "getFayProjectId",
          "package": "fpco-api",
          "signature": "Either Text FayProjectId -\u003e Server FayProjectId",
          "source": "src/FP-Server.html#getFayProjectId",
          "type": "function"
        },
        "index": {
          "description": "Get the project ID from either URL or project ID",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "getFayProjectId",
          "normalized": "Either Text FayProjectId-\u003eServer FayProjectId",
          "package": "fpco-api",
          "partial": "Fay Project Id",
          "signature": "Either Text FayProjectId-\u003eServer FayProjectId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:getFayProjectId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet initial project information.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "getIPI",
          "package": "fpco-api",
          "signature": "FayProjectId -\u003e Server ()",
          "source": "src/FP-Server.html#getIPI",
          "type": "function"
        },
        "index": {
          "description": "Get initial project information",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "getIPI",
          "normalized": "FayProjectId-\u003eServer()",
          "package": "fpco-api",
          "partial": "IPI",
          "signature": "FayProjectId-\u003eServer()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:getIPI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the token of the given file.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "getToken",
          "package": "fpco-api",
          "signature": "MVar (Map FilePath FayTutorialToken) -\u003e FayProjectId -\u003e FilePath -\u003e FilePath -\u003e Server FayTutorialToken",
          "source": "src/FP-Server.html#getToken",
          "type": "function"
        },
        "index": {
          "description": "Get the token of the given file",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "getToken",
          "normalized": "MVar(Map FilePath FayTutorialToken)-\u003eFayProjectId-\u003eFilePath-\u003eFilePath-\u003eServer FayTutorialToken",
          "package": "fpco-api",
          "partial": "Token",
          "signature": "MVar(Map FilePath FayTutorialToken)-\u003eFayProjectId-\u003eFilePath-\u003eFilePath-\u003eServer FayTutorialToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:getToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle a line of input.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "handleLine",
          "package": "fpco-api",
          "signature": "Handle -\u003e Server ()",
          "source": "src/FP-Server.html#handleLine",
          "type": "function"
        },
        "index": {
          "description": "Handle line of input",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "handleLine",
          "normalized": "Handle-\u003eServer()",
          "package": "fpco-api",
          "partial": "Line",
          "signature": "Handle-\u003eServer()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:handleLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle any incoming message from the client.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "handleMessage",
          "package": "fpco-api",
          "signature": "Handle -\u003e Msg -\u003e Server ()",
          "source": "src/FP-Server.html#handleMessage",
          "type": "function"
        },
        "index": {
          "description": "Handle any incoming message from the client",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "handleMessage",
          "normalized": "Handle-\u003eMsg-\u003eServer()",
          "package": "fpco-api",
          "partial": "Message",
          "signature": "Handle-\u003eMsg-\u003eServer()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:handleMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHoogle search whole database.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "hoogleDb",
          "package": "fpco-api",
          "signature": "Handle -\u003e FayProjectId -\u003e Text -\u003e Server ()",
          "source": "src/FP-Server.html#hoogleDb",
          "type": "function"
        },
        "index": {
          "description": "Hoogle search whole database",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "hoogleDb",
          "normalized": "Handle-\u003eFayProjectId-\u003eText-\u003eServer()",
          "package": "fpco-api",
          "partial": "Db",
          "signature": "Handle-\u003eFayProjectId-\u003eText-\u003eServer()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:hoogleDb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHoogle search for an identifier in a module.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "hoogleIdent",
          "package": "fpco-api",
          "signature": "Handle -\u003e FayProjectId -\u003e String -\u003e Text -\u003e Server ()",
          "source": "src/FP-Server.html#hoogleIdent",
          "type": "function"
        },
        "index": {
          "description": "Hoogle search for an identifier in module",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "hoogleIdent",
          "normalized": "Handle-\u003eFayProjectId-\u003eString-\u003eText-\u003eServer()",
          "package": "fpco-api",
          "partial": "Ident",
          "signature": "Handle-\u003eFayProjectId-\u003eString-\u003eText-\u003eServer()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:hoogleIdent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a package:module pair.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "makeModuleId",
          "package": "fpco-api",
          "signature": "FayModuleId -\u003e ModuleId",
          "source": "src/FP-Server.html#makeModuleId",
          "type": "function"
        },
        "index": {
          "description": "Print package module pair",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "makeModuleId",
          "normalized": "FayModuleId-\u003eModuleId",
          "package": "fpco-api",
          "partial": "Module Id",
          "signature": "FayModuleId-\u003eModuleId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:makeModuleId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePoll for new messages and apply any queued callbacks to them.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "poll",
          "package": "fpco-api",
          "signature": "FayProjectId -\u003e Server ()",
          "source": "src/FP-Server.html#poll",
          "type": "function"
        },
        "index": {
          "description": "Poll for new messages and apply any queued callbacks to them",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "poll",
          "normalized": "FayProjectId-\u003eServer()",
          "package": "fpco-api",
          "signature": "FayProjectId-\u003eServer()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:poll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a poller from the polling list and any broadcast\n callbacks.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "removePoller",
          "package": "fpco-api",
          "signature": "FayProjectId -\u003e Server ()",
          "source": "src/FP-Server.html#removePoller",
          "type": "function"
        },
        "index": {
          "description": "Remove poller from the polling list and any broadcast callbacks",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "removePoller",
          "normalized": "FayProjectId-\u003eServer()",
          "package": "fpco-api",
          "partial": "Poller",
          "signature": "FayProjectId-\u003eServer()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:removePoller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReply with the given value.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "reply",
          "package": "fpco-api",
          "signature": "Handle -\u003e a -\u003e Server ()",
          "source": "src/FP-Server.html#reply",
          "type": "function"
        },
        "index": {
          "description": "Reply with the given value",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "reply",
          "normalized": "Handle-\u003ea-\u003eServer()",
          "package": "fpco-api",
          "signature": "Handle-\u003ea-\u003eServer()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:reply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the given Server command with the config. Good for testing in the repl.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "runWithConfig",
          "package": "fpco-api",
          "signature": "Server b -\u003e Config -\u003e IO b",
          "source": "src/FP-Server.html#runWithConfig",
          "type": "function"
        },
        "index": {
          "description": "Run the given Server command with the config Good for testing in the repl",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "runWithConfig",
          "normalized": "Server a-\u003eConfig-\u003eIO a",
          "package": "fpco-api",
          "partial": "With Config",
          "signature": "Server b-\u003eConfig-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:runWithConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave the given module.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "saveTheModule",
          "package": "fpco-api",
          "signature": "Handle -\u003e FayProjectId -\u003e FilePath -\u003e FilePath -\u003e Server ()",
          "source": "src/FP-Server.html#saveTheModule",
          "type": "function"
        },
        "index": {
          "description": "Save the given module",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "saveTheModule",
          "normalized": "Handle-\u003eFayProjectId-\u003eFilePath-\u003eFilePath-\u003eServer()",
          "package": "fpco-api",
          "partial": "The Module",
          "signature": "Handle-\u003eFayProjectId-\u003eFilePath-\u003eFilePath-\u003eServer()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:saveTheModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart the server.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "startServer",
          "package": "fpco-api",
          "signature": "Bool -\u003e Server ()",
          "source": "src/FP-Server.html#startServer",
          "type": "function"
        },
        "index": {
          "description": "Start the server",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "startServer",
          "normalized": "Bool-\u003eServer()",
          "package": "fpco-api",
          "partial": "Server",
          "signature": "Bool-\u003eServer()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:startServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrip the trailing slash.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "stripSlash",
          "package": "fpco-api",
          "signature": "Text -\u003e Text",
          "source": "src/FP-Server.html#stripSlash",
          "type": "function"
        },
        "index": {
          "description": "Strip the trailing slash",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "stripSlash",
          "normalized": "Text-\u003eText",
          "package": "fpco-api",
          "partial": "Slash",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:stripSlash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet type info of span.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "typeInfo",
          "package": "fpco-api",
          "signature": "Handle -\u003e FayProjectId -\u003e String -\u003e Int -\u003e Int -\u003e Int -\u003e Int -\u003e Server ()",
          "source": "src/FP-Server.html#typeInfo",
          "type": "function"
        },
        "index": {
          "description": "Get type info of span",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "typeInfo",
          "normalized": "Handle-\u003eFayProjectId-\u003eString-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eServer()",
          "package": "fpco-api",
          "partial": "Info",
          "signature": "Handle-\u003eFayProjectId-\u003eString-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eServer()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:typeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the contents of the given file from the server.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "updateFileContents",
          "package": "fpco-api",
          "signature": "MVar (Map FilePath FayTutorialToken) -\u003e FayProjectId -\u003e FilePath -\u003e FilePath -\u003e Server ()",
          "source": "src/FP-Server.html#updateFileContents",
          "type": "function"
        },
        "index": {
          "description": "Update the contents of the given file from the server",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "updateFileContents",
          "normalized": "MVar(Map FilePath FayTutorialToken)-\u003eFayProjectId-\u003eFilePath-\u003eFilePath-\u003eServer()",
          "package": "fpco-api",
          "partial": "File Contents",
          "signature": "MVar(Map FilePath FayTutorialToken)-\u003eFayProjectId-\u003eFilePath-\u003eFilePath-\u003eServer()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:updateFileContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the token of the given file.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "updateToken",
          "package": "fpco-api",
          "signature": "MVar (Map FilePath FayTutorialToken) -\u003e FilePath -\u003e FilePath -\u003e FayTutorialToken -\u003e Server ()",
          "source": "src/FP-Server.html#updateToken",
          "type": "function"
        },
        "index": {
          "description": "Update the token of the given file",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "updateToken",
          "normalized": "MVar(Map FilePath FayTutorialToken)-\u003eFilePath-\u003eFilePath-\u003eFayTutorialToken-\u003eServer()",
          "package": "fpco-api",
          "partial": "Token",
          "signature": "MVar(Map FilePath FayTutorialToken)-\u003eFilePath-\u003eFilePath-\u003eFayTutorialToken-\u003eServer()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:updateToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart poller if there isn't already one running for the given\n project, and in any case add the given callback to the list. This\n blocks on the result.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "wait",
          "package": "fpco-api",
          "signature": "FayProjectId-\u003e Callback-\u003e Server ()",
          "type": "function"
        },
        "index": {
          "description": "Start poller if there isn already one running for the given project and in any case add the given callback to the list This blocks on the result",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "wait",
          "normalized": "FayProjectId-\u003eCallback-\u003eServer()",
          "package": "fpco-api",
          "signature": "FayProjectId-\u003eCallback-\u003eServer()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:wait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo something exclusively with tokens. Due to the fact that\n flychecking and buffer saving *can* occur simultaneously from\n Emacs, we don't want those two racing save capabilities.\n\u003c/p\u003e\u003cp\u003eOn the other hand it doesn't matter what order they occur because\n they'll be saving the same content. So we simply require that any\n command that uses module tokens needs to happen in an exclusion.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "withTokens",
          "package": "fpco-api",
          "signature": "(MVar (Map FilePath FayTutorialToken) -\u003e Server a) -\u003e Server a",
          "source": "src/FP-Server.html#withTokens",
          "type": "function"
        },
        "index": {
          "description": "Do something exclusively with tokens Due to the fact that flychecking and buffer saving can occur simultaneously from Emacs we don want those two racing save capabilities On the other hand it doesn matter what order they occur because they ll be saving the same content So we simply require that any command that uses module tokens needs to happen in an exclusion",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "withTokens",
          "normalized": "(MVar(Map FilePath FayTutorialToken)-\u003eServer a)-\u003eServer a",
          "package": "fpco-api",
          "partial": "Tokens",
          "signature": "(MVar(Map FilePath FayTutorialToken)-\u003eServer a)-\u003eServer a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:withTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite out the .dir-locals.el file for the project.\n\u003c/p\u003e",
          "module": "FP.Server",
          "name": "writeEmacsConfig",
          "package": "fpco-api",
          "signature": "Handle -\u003e Either Text FayProjectId -\u003e FilePath -\u003e Server ()",
          "source": "src/FP-Server.html#writeEmacsConfig",
          "type": "function"
        },
        "index": {
          "description": "Write out the dir-locals.el file for the project",
          "hierarchy": "FP Server",
          "module": "FP.Server",
          "name": "writeEmacsConfig",
          "normalized": "Handle-\u003eEither Text FayProjectId-\u003eFilePath-\u003eServer()",
          "package": "fpco-api",
          "partial": "Emacs Config",
          "signature": "Handle-\u003eEither Text FayProjectId-\u003eFilePath-\u003eServer()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fpco-api/docs/FP-Server.html#v:writeEmacsConfig"
      }
    }
  ]
]