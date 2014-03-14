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
        "word": "hakyll"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Compiler",
          "name": "Compiler",
          "package": "hakyll",
          "source": "src/Hakyll-Core-Compiler.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hakyll Core Compiler",
          "module": "Hakyll.Core.Compiler",
          "name": "Compiler",
          "package": "hakyll",
          "partial": "Compiler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Compiler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad which lets you compile items and takes care of dependency tracking\n for you.\n\u003c/p\u003e",
          "module": "Hakyll.Core.Compiler",
          "name": "Compiler",
          "package": "hakyll",
          "source": "src/Hakyll-Core-Compiler-Internal.html#Compiler",
          "type": "data"
        },
        "index": {
          "description": "monad which lets you compile items and takes care of dependency tracking for you",
          "hierarchy": "Hakyll Core Compiler",
          "module": "Hakyll.Core.Compiler",
          "name": "Compiler",
          "package": "hakyll",
          "partial": "Compiler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Compiler.html#t:Compiler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhilst compiling an item, it possible to save multiple snapshots of it, and\n not just the final result.\n\u003c/p\u003e",
          "module": "Hakyll.Core.Compiler",
          "name": "Snapshot",
          "package": "hakyll",
          "source": "src/Hakyll-Core-Compiler-Require.html#Snapshot",
          "type": "type"
        },
        "index": {
          "description": "Whilst compiling an item it possible to save multiple snapshots of it and not just the final result",
          "hierarchy": "Hakyll Core Compiler",
          "module": "Hakyll.Core.Compiler",
          "name": "Snapshot",
          "package": "hakyll",
          "partial": "Snapshot",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Compiler.html#t:Snapshot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Compiler",
          "name": "cached",
          "package": "hakyll",
          "signature": "String -\u003e Compiler a -\u003e Compiler a",
          "source": "src/Hakyll-Core-Compiler.html#cached",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Core Compiler",
          "module": "Hakyll.Core.Compiler",
          "name": "cached",
          "normalized": "String-\u003eCompiler a-\u003eCompiler a",
          "package": "hakyll",
          "signature": "String-\u003eCompiler a-\u003eCompiler a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Compiler.html#v:cached"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompiler for debugging purposes\n\u003c/p\u003e",
          "module": "Hakyll.Core.Compiler",
          "name": "debugCompiler",
          "package": "hakyll",
          "signature": "String -\u003e Compiler ()",
          "source": "src/Hakyll-Core-Compiler.html#debugCompiler",
          "type": "function"
        },
        "index": {
          "description": "Compiler for debugging purposes",
          "hierarchy": "Hakyll Core Compiler",
          "module": "Hakyll.Core.Compiler",
          "name": "debugCompiler",
          "normalized": "String-\u003eCompiler()",
          "package": "hakyll",
          "partial": "Compiler",
          "signature": "String-\u003eCompiler()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Compiler.html#v:debugCompiler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the body of the underlying resource\n\u003c/p\u003e",
          "module": "Hakyll.Core.Compiler",
          "name": "getResourceBody",
          "package": "hakyll",
          "signature": "Compiler (Item String)",
          "source": "src/Hakyll-Core-Compiler.html#getResourceBody",
          "type": "function"
        },
        "index": {
          "description": "Get the body of the underlying resource",
          "hierarchy": "Hakyll Core Compiler",
          "module": "Hakyll.Core.Compiler",
          "name": "getResourceBody",
          "package": "hakyll",
          "partial": "Resource Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Compiler.html#v:getResourceBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the file path of the resource we are compiling\n\u003c/p\u003e",
          "module": "Hakyll.Core.Compiler",
          "name": "getResourceFilePath",
          "package": "hakyll",
          "signature": "Compiler FilePath",
          "source": "src/Hakyll-Core-Compiler.html#getResourceFilePath",
          "type": "function"
        },
        "index": {
          "description": "Get the file path of the resource we are compiling",
          "hierarchy": "Hakyll Core Compiler",
          "module": "Hakyll.Core.Compiler",
          "name": "getResourceFilePath",
          "package": "hakyll",
          "partial": "Resource File Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Compiler.html#v:getResourceFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the resource we are compiling as a lazy bytestring\n\u003c/p\u003e",
          "module": "Hakyll.Core.Compiler",
          "name": "getResourceLBS",
          "package": "hakyll",
          "signature": "Compiler (Item ByteString)",
          "source": "src/Hakyll-Core-Compiler.html#getResourceLBS",
          "type": "function"
        },
        "index": {
          "description": "Get the resource we are compiling as lazy bytestring",
          "hierarchy": "Hakyll Core Compiler",
          "module": "Hakyll.Core.Compiler",
          "name": "getResourceLBS",
          "package": "hakyll",
          "partial": "Resource LBS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Compiler.html#v:getResourceLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the resource we are compiling as a string\n\u003c/p\u003e",
          "module": "Hakyll.Core.Compiler",
          "name": "getResourceString",
          "package": "hakyll",
          "signature": "Compiler (Item String)",
          "source": "src/Hakyll-Core-Compiler.html#getResourceString",
          "type": "function"
        },
        "index": {
          "description": "Get the resource we are compiling as string",
          "hierarchy": "Hakyll Core Compiler",
          "module": "Hakyll.Core.Compiler",
          "name": "getResourceString",
          "package": "hakyll",
          "partial": "Resource String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Compiler.html#v:getResourceString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the route for a specified item\n\u003c/p\u003e",
          "module": "Hakyll.Core.Compiler",
          "name": "getRoute",
          "package": "hakyll",
          "signature": "Identifier -\u003e Compiler (Maybe FilePath)",
          "source": "src/Hakyll-Core-Compiler.html#getRoute",
          "type": "function"
        },
        "index": {
          "description": "Get the route for specified item",
          "hierarchy": "Hakyll Core Compiler",
          "module": "Hakyll.Core.Compiler",
          "name": "getRoute",
          "normalized": "Identifier-\u003eCompiler(Maybe FilePath)",
          "package": "hakyll",
          "partial": "Route",
          "signature": "Identifier-\u003eCompiler(Maybe FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Compiler.html#v:getRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the underlying identifier.\n\u003c/p\u003e",
          "module": "Hakyll.Core.Compiler",
          "name": "getUnderlying",
          "package": "hakyll",
          "signature": "Compiler Identifier",
          "source": "src/Hakyll-Core-Compiler.html#getUnderlying",
          "type": "function"
        },
        "index": {
          "description": "Get the underlying identifier",
          "hierarchy": "Hakyll Core Compiler",
          "module": "Hakyll.Core.Compiler",
          "name": "getUnderlying",
          "package": "hakyll",
          "partial": "Underlying",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Compiler.html#v:getUnderlying"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the extension of the underlying identifier. Returns something like\n \u003ccode\u003e\u003ca\u003e.html\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Hakyll.Core.Compiler",
          "name": "getUnderlyingExtension",
          "package": "hakyll",
          "signature": "Compiler String",
          "source": "src/Hakyll-Core-Compiler.html#getUnderlyingExtension",
          "type": "function"
        },
        "index": {
          "description": "Get the extension of the underlying identifier Returns something like html",
          "hierarchy": "Hakyll Core Compiler",
          "module": "Hakyll.Core.Compiler",
          "name": "getUnderlyingExtension",
          "package": "hakyll",
          "partial": "Underlying Extension",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Compiler.html#v:getUnderlyingExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad an item compiled elsewhere. If the required item is not yet compiled,\n the build system will take care of that automatically.\n\u003c/p\u003e",
          "module": "Hakyll.Core.Compiler",
          "name": "load",
          "package": "hakyll",
          "signature": "Identifier -\u003e Compiler (Item a)",
          "source": "src/Hakyll-Core-Compiler-Require.html#load",
          "type": "function"
        },
        "index": {
          "description": "Load an item compiled elsewhere If the required item is not yet compiled the build system will take care of that automatically",
          "hierarchy": "Hakyll Core Compiler",
          "module": "Hakyll.Core.Compiler",
          "name": "load",
          "normalized": "Identifier-\u003eCompiler(Item a)",
          "package": "hakyll",
          "signature": "Identifier-\u003eCompiler(Item a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Compiler.html#v:load"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function allows you to \u003ccode\u003e\u003ca\u003eload\u003c/a\u003e\u003c/code\u003e a dynamic list of items\n\u003c/p\u003e",
          "module": "Hakyll.Core.Compiler",
          "name": "loadAll",
          "package": "hakyll",
          "signature": "Pattern -\u003e Compiler [Item a]",
          "source": "src/Hakyll-Core-Compiler-Require.html#loadAll",
          "type": "function"
        },
        "index": {
          "description": "This function allows you to load dynamic list of items",
          "hierarchy": "Hakyll Core Compiler",
          "module": "Hakyll.Core.Compiler",
          "name": "loadAll",
          "normalized": "Pattern-\u003eCompiler[Item a]",
          "package": "hakyll",
          "partial": "All",
          "signature": "Pattern-\u003eCompiler[Item a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Compiler.html#v:loadAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Compiler",
          "name": "loadAllSnapshots",
          "package": "hakyll",
          "signature": "Pattern -\u003e Snapshot -\u003e Compiler [Item a]",
          "source": "src/Hakyll-Core-Compiler-Require.html#loadAllSnapshots",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Core Compiler",
          "module": "Hakyll.Core.Compiler",
          "name": "loadAllSnapshots",
          "normalized": "Pattern-\u003eSnapshot-\u003eCompiler[Item a]",
          "package": "hakyll",
          "partial": "All Snapshots",
          "signature": "Pattern-\u003eSnapshot-\u003eCompiler[Item a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Compiler.html#v:loadAllSnapshots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA shortcut for only requiring the body of an item.\n\u003c/p\u003e\u003cpre\u003e loadBody = fmap itemBody . load\n\u003c/pre\u003e",
          "module": "Hakyll.Core.Compiler",
          "name": "loadBody",
          "package": "hakyll",
          "signature": "Identifier -\u003e Compiler a",
          "source": "src/Hakyll-Core-Compiler-Require.html#loadBody",
          "type": "function"
        },
        "index": {
          "description": "shortcut for only requiring the body of an item loadBody fmap itemBody load",
          "hierarchy": "Hakyll Core Compiler",
          "module": "Hakyll.Core.Compiler",
          "name": "loadBody",
          "normalized": "Identifier-\u003eCompiler a",
          "package": "hakyll",
          "partial": "Body",
          "signature": "Identifier-\u003eCompiler a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Compiler.html#v:loadBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequire a specific snapshot of an item.\n\u003c/p\u003e",
          "module": "Hakyll.Core.Compiler",
          "name": "loadSnapshot",
          "package": "hakyll",
          "signature": "Identifier -\u003e Snapshot -\u003e Compiler (Item a)",
          "source": "src/Hakyll-Core-Compiler-Require.html#loadSnapshot",
          "type": "function"
        },
        "index": {
          "description": "Require specific snapshot of an item",
          "hierarchy": "Hakyll Core Compiler",
          "module": "Hakyll.Core.Compiler",
          "name": "loadSnapshot",
          "normalized": "Identifier-\u003eSnapshot-\u003eCompiler(Item a)",
          "package": "hakyll",
          "partial": "Snapshot",
          "signature": "Identifier-\u003eSnapshot-\u003eCompiler(Item a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Compiler.html#v:loadSnapshot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Compiler",
          "name": "loadSnapshotBody",
          "package": "hakyll",
          "signature": "Identifier -\u003e Snapshot -\u003e Compiler a",
          "source": "src/Hakyll-Core-Compiler-Require.html#loadSnapshotBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Core Compiler",
          "module": "Hakyll.Core.Compiler",
          "name": "loadSnapshotBody",
          "normalized": "Identifier-\u003eSnapshot-\u003eCompiler a",
          "package": "hakyll",
          "partial": "Snapshot Body",
          "signature": "Identifier-\u003eSnapshot-\u003eCompiler a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Compiler.html#v:loadSnapshotBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Compiler",
          "name": "makeItem",
          "package": "hakyll",
          "signature": "a -\u003e Compiler (Item a)",
          "source": "src/Hakyll-Core-Compiler.html#makeItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Core Compiler",
          "module": "Hakyll.Core.Compiler",
          "name": "makeItem",
          "normalized": "a-\u003eCompiler(Item a)",
          "package": "hakyll",
          "partial": "Item",
          "signature": "a-\u003eCompiler(Item a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Compiler.html#v:makeItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave a snapshot of the item. This function returns the same item, which\n convenient for building \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e chains.\n\u003c/p\u003e",
          "module": "Hakyll.Core.Compiler",
          "name": "saveSnapshot",
          "package": "hakyll",
          "signature": "Snapshot -\u003e Item a -\u003e Compiler (Item a)",
          "source": "src/Hakyll-Core-Compiler.html#saveSnapshot",
          "type": "function"
        },
        "index": {
          "description": "Save snapshot of the item This function returns the same item which convenient for building chains",
          "hierarchy": "Hakyll Core Compiler",
          "module": "Hakyll.Core.Compiler",
          "name": "saveSnapshot",
          "normalized": "Snapshot-\u003eItem a-\u003eCompiler(Item a)",
          "package": "hakyll",
          "partial": "Snapshot",
          "signature": "Snapshot-\u003eItem a-\u003eCompiler(Item a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Compiler.html#v:saveSnapshot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Compiler",
          "name": "unsafeCompiler",
          "package": "hakyll",
          "signature": "IO a -\u003e Compiler a",
          "source": "src/Hakyll-Core-Compiler.html#unsafeCompiler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Core Compiler",
          "module": "Hakyll.Core.Compiler",
          "name": "unsafeCompiler",
          "normalized": "IO a-\u003eCompiler a",
          "package": "hakyll",
          "partial": "Compiler",
          "signature": "IO a-\u003eCompiler a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Compiler.html#v:unsafeCompiler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExports a datastructure for the top-level hakyll configuration\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hakyll.Core.Configuration",
          "name": "Configuration",
          "package": "hakyll",
          "source": "src/Hakyll-Core-Configuration.html",
          "type": "module"
        },
        "index": {
          "description": "Exports datastructure for the top-level hakyll configuration",
          "hierarchy": "Hakyll Core Configuration",
          "module": "Hakyll.Core.Configuration",
          "name": "Configuration",
          "package": "hakyll",
          "partial": "Configuration",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Configuration.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Configuration",
          "name": "Configuration",
          "package": "hakyll",
          "source": "src/Hakyll-Core-Configuration.html#Configuration",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hakyll Core Configuration",
          "module": "Hakyll.Core.Configuration",
          "name": "Configuration",
          "package": "hakyll",
          "partial": "Configuration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Configuration.html#t:Configuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Configuration",
          "name": "Configuration",
          "package": "hakyll",
          "signature": "Configuration",
          "source": "src/Hakyll-Core-Configuration.html#Configuration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Core Configuration",
          "module": "Hakyll.Core.Configuration",
          "name": "Configuration",
          "package": "hakyll",
          "partial": "Configuration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Configuration.html#v:Configuration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault configuration for a hakyll application\n\u003c/p\u003e",
          "module": "Hakyll.Core.Configuration",
          "name": "defaultConfiguration",
          "package": "hakyll",
          "signature": "Configuration",
          "source": "src/Hakyll-Core-Configuration.html#defaultConfiguration",
          "type": "function"
        },
        "index": {
          "description": "Default configuration for hakyll application",
          "hierarchy": "Hakyll Core Configuration",
          "module": "Hakyll.Core.Configuration",
          "name": "defaultConfiguration",
          "package": "hakyll",
          "partial": "Configuration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Configuration.html#v:defaultConfiguration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHere, you can plug in a system command to upload/deploy your site.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e rsync -ave 'ssh -p 2217' _site jaspervdj@jaspervdj.be:hakyll\n\u003c/pre\u003e\u003cp\u003eYou can execute this by using\n\u003c/p\u003e\u003cpre\u003e ./site deploy\n\u003c/pre\u003e",
          "module": "Hakyll.Core.Configuration",
          "name": "deployCommand",
          "package": "hakyll",
          "signature": "String",
          "source": "src/Hakyll-Core-Configuration.html#Configuration",
          "type": "function"
        },
        "index": {
          "description": "Here you can plug in system command to upload deploy your site Example rsync ave ssh site jaspervdj@jaspervdj.be hakyll You can execute this by using site deploy",
          "hierarchy": "Hakyll Core Configuration",
          "module": "Hakyll.Core.Configuration",
          "name": "deployCommand",
          "package": "hakyll",
          "partial": "Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Configuration.html#v:deployCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to deploy the site from Haskell.\n\u003c/p\u003e\u003cp\u003eBy default, this command executes the shell command stored in\n \u003ccode\u003e\u003ca\u003edeployCommand\u003c/a\u003e\u003c/code\u003e. If you override it, \u003ccode\u003e\u003ca\u003edeployCommand\u003c/a\u003e\u003c/code\u003e will not\n be used implicitely.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eConfiguration\u003c/a\u003e\u003c/code\u003e object is passed as a parameter to this\n function.\n\u003c/p\u003e",
          "module": "Hakyll.Core.Configuration",
          "name": "deploySite",
          "package": "hakyll",
          "signature": "Configuration -\u003e IO ExitCode",
          "source": "src/Hakyll-Core-Configuration.html#Configuration",
          "type": "function"
        },
        "index": {
          "description": "Function to deploy the site from Haskell By default this command executes the shell command stored in deployCommand If you override it deployCommand will not be used implicitely The Configuration object is passed as parameter to this function",
          "hierarchy": "Hakyll Core Configuration",
          "module": "Hakyll.Core.Configuration",
          "name": "deploySite",
          "normalized": "Configuration-\u003eIO ExitCode",
          "package": "hakyll",
          "partial": "Site",
          "signature": "Configuration-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Configuration.html#v:deploySite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirectory in which the output written\n\u003c/p\u003e",
          "module": "Hakyll.Core.Configuration",
          "name": "destinationDirectory",
          "package": "hakyll",
          "signature": "FilePath",
          "source": "src/Hakyll-Core-Configuration.html#Configuration",
          "type": "function"
        },
        "index": {
          "description": "Directory in which the output written",
          "hierarchy": "Hakyll Core Configuration",
          "module": "Hakyll.Core.Configuration",
          "name": "destinationDirectory",
          "package": "hakyll",
          "partial": "Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Configuration.html#v:destinationDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to determine ignored files\n\u003c/p\u003e\u003cp\u003eIn \u003ccode\u003e\u003ca\u003edefaultConfiguration\u003c/a\u003e\u003c/code\u003e, the following files are ignored:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e files starting with a \u003ccode\u003e.\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e files starting with a \u003ccode\u003e#\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e files ending with a \u003ccode\u003e~\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e files ending with \u003ccode\u003e.swp\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eNote that the files in \u003ccode\u003e\u003ca\u003edestinationDirectory\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003estoreDirectory\u003c/a\u003e\u003c/code\u003e will\n also be ignored. Note that this is the configuration parameter, if you\n want to use the test, you should use \u003ccode\u003e\u003ca\u003eshouldIgnoreFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hakyll.Core.Configuration",
          "name": "ignoreFile",
          "package": "hakyll",
          "signature": "FilePath -\u003e Bool",
          "source": "src/Hakyll-Core-Configuration.html#Configuration",
          "type": "function"
        },
        "index": {
          "description": "Function to determine ignored files In defaultConfiguration the following files are ignored files starting with files starting with files ending with files ending with swp Note that the files in destinationDirectory and storeDirectory will also be ignored Note that this is the configuration parameter if you want to use the test you should use shouldIgnoreFile",
          "hierarchy": "Hakyll Core Configuration",
          "module": "Hakyll.Core.Configuration",
          "name": "ignoreFile",
          "normalized": "FilePath-\u003eBool",
          "package": "hakyll",
          "partial": "File",
          "signature": "FilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Configuration.html#v:ignoreFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse an in-memory cache for items. This is faster but uses more\n memory.\n\u003c/p\u003e",
          "module": "Hakyll.Core.Configuration",
          "name": "inMemoryCache",
          "package": "hakyll",
          "signature": "Bool",
          "source": "src/Hakyll-Core-Configuration.html#Configuration",
          "type": "function"
        },
        "index": {
          "description": "Use an in-memory cache for items This is faster but uses more memory",
          "hierarchy": "Hakyll Core Configuration",
          "module": "Hakyll.Core.Configuration",
          "name": "inMemoryCache",
          "package": "hakyll",
          "partial": "Memory Cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Configuration.html#v:inMemoryCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverride default port for preview server. Default is 8000.\n One can also override the port as a command line argument:\n ./site preview -p 1234\n\u003c/p\u003e",
          "module": "Hakyll.Core.Configuration",
          "name": "previewPort",
          "package": "hakyll",
          "signature": "Int",
          "source": "src/Hakyll-Core-Configuration.html#Configuration",
          "type": "function"
        },
        "index": {
          "description": "Override default port for preview server Default is One can also override the port as command line argument site preview",
          "hierarchy": "Hakyll Core Configuration",
          "module": "Hakyll.Core.Configuration",
          "name": "previewPort",
          "package": "hakyll",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Configuration.html#v:previewPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirectory where hakyll finds the files to compile. This is \u003ccode\u003e.\u003c/code\u003e by\n default.\n\u003c/p\u003e",
          "module": "Hakyll.Core.Configuration",
          "name": "providerDirectory",
          "package": "hakyll",
          "signature": "FilePath",
          "source": "src/Hakyll-Core-Configuration.html#Configuration",
          "type": "function"
        },
        "index": {
          "description": "Directory where hakyll finds the files to compile This is by default",
          "hierarchy": "Hakyll Core Configuration",
          "module": "Hakyll.Core.Configuration",
          "name": "providerDirectory",
          "package": "hakyll",
          "partial": "Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Configuration.html#v:providerDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if a file should be ignored\n\u003c/p\u003e",
          "module": "Hakyll.Core.Configuration",
          "name": "shouldIgnoreFile",
          "package": "hakyll",
          "signature": "Configuration -\u003e FilePath -\u003e IO Bool",
          "source": "src/Hakyll-Core-Configuration.html#shouldIgnoreFile",
          "type": "function"
        },
        "index": {
          "description": "Check if file should be ignored",
          "hierarchy": "Hakyll Core Configuration",
          "module": "Hakyll.Core.Configuration",
          "name": "shouldIgnoreFile",
          "normalized": "Configuration-\u003eFilePath-\u003eIO Bool",
          "package": "hakyll",
          "partial": "Ignore File",
          "signature": "Configuration-\u003eFilePath-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Configuration.html#v:shouldIgnoreFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirectory where hakyll's internal store is kept\n\u003c/p\u003e",
          "module": "Hakyll.Core.Configuration",
          "name": "storeDirectory",
          "package": "hakyll",
          "signature": "FilePath",
          "source": "src/Hakyll-Core-Configuration.html#Configuration",
          "type": "function"
        },
        "index": {
          "description": "Directory where hakyll internal store is kept",
          "hierarchy": "Hakyll Core Configuration",
          "module": "Hakyll.Core.Configuration",
          "name": "storeDirectory",
          "package": "hakyll",
          "partial": "Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Configuration.html#v:storeDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirectory in which some temporary files will be kept\n\u003c/p\u003e",
          "module": "Hakyll.Core.Configuration",
          "name": "tmpDirectory",
          "package": "hakyll",
          "signature": "FilePath",
          "source": "src/Hakyll-Core-Configuration.html#Configuration",
          "type": "function"
        },
        "index": {
          "description": "Directory in which some temporary files will be kept",
          "hierarchy": "Hakyll Core Configuration",
          "module": "Hakyll.Core.Configuration",
          "name": "tmpDirectory",
          "package": "hakyll",
          "partial": "Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Configuration.html#v:tmpDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Dependencies",
          "name": "Dependencies",
          "package": "hakyll",
          "source": "src/Hakyll-Core-Dependencies.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hakyll Core Dependencies",
          "module": "Hakyll.Core.Dependencies",
          "name": "Dependencies",
          "package": "hakyll",
          "partial": "Dependencies",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Dependencies.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Dependencies",
          "name": "Dependency",
          "package": "hakyll",
          "source": "src/Hakyll-Core-Dependencies.html#Dependency",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hakyll Core Dependencies",
          "module": "Hakyll.Core.Dependencies",
          "name": "Dependency",
          "package": "hakyll",
          "partial": "Dependency",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Dependencies.html#t:Dependency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Dependencies",
          "name": "DependencyFacts",
          "package": "hakyll",
          "source": "src/Hakyll-Core-Dependencies.html#DependencyFacts",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hakyll Core Dependencies",
          "module": "Hakyll.Core.Dependencies",
          "name": "DependencyFacts",
          "package": "hakyll",
          "partial": "Dependency Facts",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Dependencies.html#t:DependencyFacts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Hakyll.Core.Dependencies\",\"Hakyll.Core.Rules\"]",
          "name": "IdentifierDependency",
          "package": "hakyll",
          "signature": "IdentifierDependency Identifier",
          "source": "src/Hakyll-Core-Dependencies.html#Dependency",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Dependencies.html#v:IdentifierDependency\",\"http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Rules.html#v:IdentifierDependency\"]"
        },
        "index": {
          "hierarchy": "Hakyll Core Dependencies",
          "module": "Hakyll.Core.Dependencies",
          "name": "IdentifierDependency",
          "package": "hakyll",
          "partial": "Identifier Dependency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Dependencies.html#v:IdentifierDependency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Hakyll.Core.Dependencies\",\"Hakyll.Core.Rules\"]",
          "name": "PatternDependency",
          "package": "hakyll",
          "signature": "PatternDependency Pattern [Identifier]",
          "source": "src/Hakyll-Core-Dependencies.html#Dependency",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Dependencies.html#v:PatternDependency\",\"http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Rules.html#v:PatternDependency\"]"
        },
        "index": {
          "hierarchy": "Hakyll Core Dependencies",
          "module": "Hakyll.Core.Dependencies",
          "name": "PatternDependency",
          "normalized": "PatternDependency Pattern[Identifier]",
          "package": "hakyll",
          "partial": "Pattern Dependency",
          "signature": "PatternDependency Pattern[Identifier]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Dependencies.html#v:PatternDependency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Dependencies",
          "name": "outOfDate",
          "package": "hakyll",
          "signature": "[Identifier]-\u003e Set Identifier-\u003e DependencyFacts-\u003e (Set Identifier, DependencyFacts, [String])",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Core Dependencies",
          "module": "Hakyll.Core.Dependencies",
          "name": "outOfDate",
          "normalized": "[Identifier]-\u003eSet Identifier-\u003eDependencyFacts-\u003e(Set Identifier,DependencyFacts,[String])",
          "package": "hakyll",
          "partial": "Of Date",
          "signature": "[Identifier]-\u003eSet Identifier-\u003eDependencyFacts-\u003e(Set Identifier,DependencyFacts,[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Dependencies.html#v:outOfDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExports simple compilers to just copy files\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hakyll.Core.File",
          "name": "File",
          "package": "hakyll",
          "source": "src/Hakyll-Core-File.html",
          "type": "module"
        },
        "index": {
          "description": "Exports simple compilers to just copy files",
          "hierarchy": "Hakyll Core File",
          "module": "Hakyll.Core.File",
          "name": "File",
          "package": "hakyll",
          "partial": "File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-File.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis will copy any file directly by using a system call\n\u003c/p\u003e",
          "module": "Hakyll.Core.File",
          "name": "CopyFile",
          "package": "hakyll",
          "source": "src/Hakyll-Core-File.html#CopyFile",
          "type": "newtype"
        },
        "index": {
          "description": "This will copy any file directly by using system call",
          "hierarchy": "Hakyll Core File",
          "module": "Hakyll.Core.File",
          "name": "CopyFile",
          "package": "hakyll",
          "partial": "Copy File",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-File.html#t:CopyFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.File",
          "name": "TmpFile",
          "package": "hakyll",
          "source": "src/Hakyll-Core-File.html#TmpFile",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Hakyll Core File",
          "module": "Hakyll.Core.File",
          "name": "TmpFile",
          "package": "hakyll",
          "partial": "Tmp File",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-File.html#t:TmpFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.File",
          "name": "CopyFile",
          "package": "hakyll",
          "signature": "CopyFile FilePath",
          "source": "src/Hakyll-Core-File.html#CopyFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Core File",
          "module": "Hakyll.Core.File",
          "name": "CopyFile",
          "package": "hakyll",
          "partial": "Copy File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-File.html#v:CopyFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.File",
          "name": "TmpFile",
          "package": "hakyll",
          "signature": "TmpFile FilePath",
          "source": "src/Hakyll-Core-File.html#TmpFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Core File",
          "module": "Hakyll.Core.File",
          "name": "TmpFile",
          "package": "hakyll",
          "partial": "Tmp File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-File.html#v:TmpFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.File",
          "name": "copyFileCompiler",
          "package": "hakyll",
          "signature": "Compiler (Item CopyFile)",
          "source": "src/Hakyll-Core-File.html#copyFileCompiler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Core File",
          "module": "Hakyll.Core.File",
          "name": "copyFileCompiler",
          "package": "hakyll",
          "partial": "File Compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-File.html#v:copyFileCompiler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a tmp file\n\u003c/p\u003e",
          "module": "Hakyll.Core.File",
          "name": "newTmpFile",
          "package": "hakyll",
          "signature": "String-\u003e Compiler TmpFile",
          "type": "function"
        },
        "index": {
          "description": "Create tmp file",
          "hierarchy": "Hakyll Core File",
          "module": "Hakyll.Core.File",
          "name": "newTmpFile",
          "normalized": "String-\u003eCompiler TmpFile",
          "package": "hakyll",
          "partial": "Tmp File",
          "signature": "String-\u003eCompiler TmpFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-File.html#v:newTmpFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eIdentifier\u003c/a\u003e\u003c/code\u003e is used to specify a single item, a \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e is used to\n specify a list of items.\n\u003c/p\u003e\u003cp\u003eIn most cases, globs are used for patterns.\n\u003c/p\u003e\u003cp\u003eA very simple pattern of such a pattern is \u003ccode\u003e\"foo/bar\"\u003c/code\u003e. This pattern will\n only match the exact \u003ccode\u003efoo/bar\u003c/code\u003e identifier.\n\u003c/p\u003e\u003cp\u003eTo match more than one identifier, there are different captures that one can\n use:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\"*\"\u003c/code\u003e: matches at most one element of an identifier;\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\"**\"\u003c/code\u003e: matches one or more elements of an identifier.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSome examples:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\"foo/*\"\u003c/code\u003e will match \u003ccode\u003e\"foo/bar\"\u003c/code\u003e and \u003ccode\u003e\"foo/foo\"\u003c/code\u003e, but not\n   \u003ccode\u003e\"foo/bar/qux\"\u003c/code\u003e;\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\"**\"\u003c/code\u003e will match any identifier;\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\"foo/**\"\u003c/code\u003e will match \u003ccode\u003e\"foo/bar\"\u003c/code\u003e and \u003ccode\u003e\"foo/bar/qux\"\u003c/code\u003e, but not\n   \u003ccode\u003e\"bar/foo\"\u003c/code\u003e;\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\"foo/*.html\"\u003c/code\u003e will match all HTML files in the \u003ccode\u003e\"foo/\"\u003c/code\u003e directory.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ecapture\u003c/a\u003e\u003c/code\u003e function allows the user to get access to the elements captured\n by the capture elements in the pattern.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "Pattern",
          "package": "hakyll",
          "source": "src/Hakyll-Core-Identifier-Pattern.html",
          "type": "module"
        },
        "index": {
          "description": "As Identifier is used to specify single item Pattern is used to specify list of items In most cases globs are used for patterns very simple pattern of such pattern is foo bar This pattern will only match the exact foo bar identifier To match more than one identifier there are different captures that one can use matches at most one element of an identifier matches one or more elements of an identifier Some examples foo will match foo bar and foo foo but not foo bar qux will match any identifier foo will match foo bar and foo bar qux but not bar foo foo html will match all HTML files in the foo directory The capture function allows the user to get access to the elements captured by the capture elements in the pattern",
          "hierarchy": "Hakyll Core Identifier Pattern",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "Pattern",
          "package": "hakyll",
          "partial": "Pattern",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Identifier-Pattern.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType that allows matching on identifiers\n\u003c/p\u003e",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "Pattern",
          "package": "hakyll",
          "source": "src/Hakyll-Core-Identifier-Pattern.html#Pattern",
          "type": "data"
        },
        "index": {
          "description": "Type that allows matching on identifiers",
          "hierarchy": "Hakyll Core Identifier Pattern",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "Pattern",
          "package": "hakyll",
          "partial": "Pattern",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Identifier-Pattern.html#t:Pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e||\u003c/a\u003e\u003c/code\u003e for patterns: the given identifier must match any subterm\n\u003c/p\u003e",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "(.||.)",
          "package": "hakyll",
          "signature": "Pattern -\u003e Pattern -\u003e Pattern",
          "source": "src/Hakyll-Core-Identifier-Pattern.html#.%7C%7C.",
          "type": "function"
        },
        "index": {
          "description": "for patterns the given identifier must match any subterm",
          "hierarchy": "Hakyll Core Identifier Pattern",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "(.||.) .||.",
          "normalized": "Pattern-\u003ePattern-\u003ePattern",
          "package": "hakyll",
          "signature": "Pattern-\u003ePattern-\u003ePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Identifier-Pattern.html#v:.-124--124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003e&&\u003c/a\u003e\u003c/code\u003e for patterns: the given identifier must match both subterms\n\u003c/p\u003e",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "(.&&.)",
          "package": "hakyll",
          "signature": "Pattern -\u003e Pattern -\u003e Pattern",
          "source": "src/Hakyll-Core-Identifier-Pattern.html#.%26%26.",
          "type": "function"
        },
        "index": {
          "description": "for patterns the given identifier must match both subterms",
          "hierarchy": "Hakyll Core Identifier Pattern",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "(.&&.) .&&.",
          "normalized": "Pattern-\u003ePattern-\u003ePattern",
          "package": "hakyll",
          "signature": "Pattern-\u003ePattern-\u003ePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Identifier-Pattern.html#v:.-38--38-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a glob against a pattern, generating a list of captures\n\u003c/p\u003e",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "capture",
          "package": "hakyll",
          "signature": "Pattern -\u003e Identifier -\u003e Maybe [String]",
          "source": "src/Hakyll-Core-Identifier-Pattern.html#capture",
          "type": "function"
        },
        "index": {
          "description": "Match glob against pattern generating list of captures",
          "hierarchy": "Hakyll Core Identifier Pattern",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "capture",
          "normalized": "Pattern-\u003eIdentifier-\u003eMaybe[String]",
          "package": "hakyll",
          "signature": "Pattern-\u003eIdentifier-\u003eMaybe[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Identifier-Pattern.html#v:capture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverts a pattern, e.g.\n\u003c/p\u003e\u003cpre\u003e complement \"foo/bar.html\"\n\u003c/pre\u003e\u003cp\u003ewill match \u003cem\u003eanything\u003c/em\u003e except \u003ccode\u003e\"foo/bar.html\"\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "complement",
          "package": "hakyll",
          "signature": "Pattern -\u003e Pattern",
          "source": "src/Hakyll-Core-Identifier-Pattern.html#complement",
          "type": "function"
        },
        "index": {
          "description": "Inverts pattern e.g complement foo bar.html will match anything except foo bar.html",
          "hierarchy": "Hakyll Core Identifier Pattern",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "complement",
          "normalized": "Pattern-\u003ePattern",
          "package": "hakyll",
          "signature": "Pattern-\u003ePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Identifier-Pattern.html#v:complement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of identifiers, retain only those who match the given pattern\n\u003c/p\u003e",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "filterMatches",
          "package": "hakyll",
          "signature": "Pattern -\u003e [Identifier] -\u003e [Identifier]",
          "source": "src/Hakyll-Core-Identifier-Pattern.html#filterMatches",
          "type": "function"
        },
        "index": {
          "description": "Given list of identifiers retain only those who match the given pattern",
          "hierarchy": "Hakyll Core Identifier Pattern",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "filterMatches",
          "normalized": "Pattern-\u003e[Identifier]-\u003e[Identifier]",
          "package": "hakyll",
          "partial": "Matches",
          "signature": "Pattern-\u003e[Identifier]-\u003e[Identifier]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Identifier-Pattern.html#v:filterMatches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an identifier from a pattern by filling in the captures with a given\n string\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e fromCapture (fromGlob \"tags/*\") \"foo\"\n\u003c/pre\u003e\u003cp\u003eResult:\n\u003c/p\u003e\u003cpre\u003e \"tags/foo\"\n\u003c/pre\u003e",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "fromCapture",
          "package": "hakyll",
          "signature": "Pattern -\u003e String -\u003e Identifier",
          "source": "src/Hakyll-Core-Identifier-Pattern.html#fromCapture",
          "type": "function"
        },
        "index": {
          "description": "Create an identifier from pattern by filling in the captures with given string Example fromCapture fromGlob tags foo Result tags foo",
          "hierarchy": "Hakyll Core Identifier Pattern",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "fromCapture",
          "normalized": "Pattern-\u003eString-\u003eIdentifier",
          "package": "hakyll",
          "partial": "Capture",
          "signature": "Pattern-\u003eString-\u003eIdentifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Identifier-Pattern.html#v:fromCapture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an identifier from a pattern by filling in the captures with the\n given list of strings\n\u003c/p\u003e",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "fromCaptures",
          "package": "hakyll",
          "signature": "Pattern -\u003e [String] -\u003e Identifier",
          "source": "src/Hakyll-Core-Identifier-Pattern.html#fromCaptures",
          "type": "function"
        },
        "index": {
          "description": "Create an identifier from pattern by filling in the captures with the given list of strings",
          "hierarchy": "Hakyll Core Identifier Pattern",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "fromCaptures",
          "normalized": "Pattern-\u003e[String]-\u003eIdentifier",
          "package": "hakyll",
          "partial": "Captures",
          "signature": "Pattern-\u003e[String]-\u003eIdentifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Identifier-Pattern.html#v:fromCaptures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a pattern from a string\n\u003c/p\u003e",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "fromGlob",
          "package": "hakyll",
          "signature": "String -\u003e Pattern",
          "source": "src/Hakyll-Core-Identifier-Pattern.html#fromGlob",
          "type": "function"
        },
        "index": {
          "description": "Parse pattern from string",
          "hierarchy": "Hakyll Core Identifier Pattern",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "fromGlob",
          "normalized": "String-\u003ePattern",
          "package": "hakyll",
          "partial": "Glob",
          "signature": "String-\u003ePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Identifier-Pattern.html#v:fromGlob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e from a list of \u003ccode\u003e\u003ca\u003eIdentifier\u003c/a\u003e\u003c/code\u003es it should match.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eWarning\u003c/em\u003e: use this carefully with \u003ccode\u003e\u003ca\u003ehasNoVersion\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ehasVersion\u003c/a\u003e\u003c/code\u003e. The\n \u003ccode\u003e\u003ca\u003eIdentifier\u003c/a\u003e\u003c/code\u003es in the list \u003cem\u003ealready\u003c/em\u003e have versions assigned, and the pattern\n will then only match the intersection of both versions.\n\u003c/p\u003e\u003cp\u003eA more concrete example,\n\u003c/p\u003e\u003cpre\u003e fromList [\"foo.markdown\"] .&&. hasVersion \"pdf\"\n\u003c/pre\u003e\u003cp\u003ewill not match anything! The \u003ccode\u003e\u003ca\u003efoo.markdown\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIdentifier\u003c/a\u003e\u003c/code\u003e has no version\n assigned, so the LHS of \u003ccode\u003e\u003ca\u003e.&&.\u003c/a\u003e\u003c/code\u003e will only match this \u003ccode\u003e\u003ca\u003eIdentifier\u003c/a\u003e\u003c/code\u003e with no\n version. The RHS only matches \u003ccode\u003e\u003ca\u003eIdentifier\u003c/a\u003e\u003c/code\u003es with version set to \u003ccode\u003e\u003ca\u003epdf\u003c/a\u003e\u003c/code\u003e --\n hence, this pattern matches nothing.\n\u003c/p\u003e\u003cp\u003eThe correct way to use this is:\n\u003c/p\u003e\u003cpre\u003e fromList $ map (setVersion $ Just \"pdf\") [\"foo.markdown\"]\n\u003c/pre\u003e",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "fromList",
          "package": "hakyll",
          "signature": "[Identifier] -\u003e Pattern",
          "source": "src/Hakyll-Core-Identifier-Pattern.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Create Pattern from list of Identifier it should match Warning use this carefully with hasNoVersion and hasVersion The Identifier in the list already have versions assigned and the pattern will then only match the intersection of both versions more concrete example fromList foo.markdown hasVersion pdf will not match anything The foo.markdown Identifier has no version assigned so the LHS of will only match this Identifier with no version The RHS only matches Identifier with version set to pdf hence this pattern matches nothing The correct way to use this is fromList map setVersion Just pdf foo.markdown",
          "hierarchy": "Hakyll Core Identifier Pattern",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "fromList",
          "normalized": "[Identifier]-\u003ePattern",
          "package": "hakyll",
          "partial": "List",
          "signature": "[Identifier]-\u003ePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Identifier-Pattern.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e from a regex\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e regex \"^foo/[^x]*$\n\u003c/pre\u003e",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "fromRegex",
          "package": "hakyll",
          "signature": "String -\u003e Pattern",
          "source": "src/Hakyll-Core-Identifier-Pattern.html#fromRegex",
          "type": "function"
        },
        "index": {
          "description": "Create Pattern from regex Example regex foo",
          "hierarchy": "Hakyll Core Identifier Pattern",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "fromRegex",
          "normalized": "String-\u003ePattern",
          "package": "hakyll",
          "partial": "Regex",
          "signature": "String-\u003ePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Identifier-Pattern.html#v:fromRegex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a pattern which matches all items with the given version.\n\u003c/p\u003e",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "fromVersion",
          "package": "hakyll",
          "signature": "Maybe String -\u003e Pattern",
          "source": "src/Hakyll-Core-Identifier-Pattern.html#fromVersion",
          "type": "function"
        },
        "index": {
          "description": "Create pattern which matches all items with the given version",
          "hierarchy": "Hakyll Core Identifier Pattern",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "fromVersion",
          "normalized": "Maybe String-\u003ePattern",
          "package": "hakyll",
          "partial": "Version",
          "signature": "Maybe String-\u003ePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Identifier-Pattern.html#v:fromVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch only if the identifier has no version set, e.g.\n\u003c/p\u003e\u003cpre\u003e \"foo/*.markdown\" .&&. hasNoVersion\n\u003c/pre\u003e",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "hasNoVersion",
          "package": "hakyll",
          "signature": "Pattern",
          "source": "src/Hakyll-Core-Identifier-Pattern.html#hasNoVersion",
          "type": "function"
        },
        "index": {
          "description": "Match only if the identifier has no version set e.g foo markdown hasNoVersion",
          "hierarchy": "Hakyll Core Identifier Pattern",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "hasNoVersion",
          "package": "hakyll",
          "partial": "No Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Identifier-Pattern.html#v:hasNoVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify a version, e.g.\n\u003c/p\u003e\u003cpre\u003e \"foo/*.markdown\" .&&. hasVersion \"pdf\"\n\u003c/pre\u003e",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "hasVersion",
          "package": "hakyll",
          "signature": "String -\u003e Pattern",
          "source": "src/Hakyll-Core-Identifier-Pattern.html#hasVersion",
          "type": "function"
        },
        "index": {
          "description": "Specify version e.g foo markdown hasVersion pdf",
          "hierarchy": "Hakyll Core Identifier Pattern",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "hasVersion",
          "normalized": "String-\u003ePattern",
          "package": "hakyll",
          "partial": "Version",
          "signature": "String-\u003ePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Identifier-Pattern.html#v:hasVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if an identifier matches a pattern\n\u003c/p\u003e",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "matches",
          "package": "hakyll",
          "signature": "Pattern -\u003e Identifier -\u003e Bool",
          "source": "src/Hakyll-Core-Identifier-Pattern.html#matches",
          "type": "function"
        },
        "index": {
          "description": "Check if an identifier matches pattern",
          "hierarchy": "Hakyll Core Identifier Pattern",
          "module": "Hakyll.Core.Identifier.Pattern",
          "name": "matches",
          "normalized": "Pattern-\u003eIdentifier-\u003eBool",
          "package": "hakyll",
          "signature": "Pattern-\u003eIdentifier-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Identifier-Pattern.html#v:matches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn identifier is a type used to uniquely identify an item. An identifier is\n conceptually similar to a file path. Examples of identifiers are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eposts/foo.markdown\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eindex\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eerror/404\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Hakyll.Core.Identifier",
          "name": "Identifier",
          "package": "hakyll",
          "source": "src/Hakyll-Core-Identifier.html",
          "type": "module"
        },
        "index": {
          "description": "An identifier is type used to uniquely identify an item An identifier is conceptually similar to file path Examples of identifiers are posts foo.markdown index error",
          "hierarchy": "Hakyll Core Identifier",
          "module": "Hakyll.Core.Identifier",
          "name": "Identifier",
          "package": "hakyll",
          "partial": "Identifier",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Identifier.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Identifier",
          "name": "Identifier",
          "package": "hakyll",
          "source": "src/Hakyll-Core-Identifier.html#Identifier",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hakyll Core Identifier",
          "module": "Hakyll.Core.Identifier",
          "name": "Identifier",
          "package": "hakyll",
          "partial": "Identifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Identifier.html#t:Identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an identifier from a string\n\u003c/p\u003e",
          "module": "Hakyll.Core.Identifier",
          "name": "fromFilePath",
          "package": "hakyll",
          "signature": "String -\u003e Identifier",
          "source": "src/Hakyll-Core-Identifier.html#fromFilePath",
          "type": "function"
        },
        "index": {
          "description": "Parse an identifier from string",
          "hierarchy": "Hakyll Core Identifier",
          "module": "Hakyll.Core.Identifier",
          "name": "fromFilePath",
          "normalized": "String-\u003eIdentifier",
          "package": "hakyll",
          "partial": "File Path",
          "signature": "String-\u003eIdentifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Identifier.html#v:fromFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Identifier",
          "name": "identifierVersion",
          "package": "hakyll",
          "signature": "Identifier -\u003e Maybe String",
          "source": "src/Hakyll-Core-Identifier.html#identifierVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Core Identifier",
          "module": "Hakyll.Core.Identifier",
          "name": "identifierVersion",
          "normalized": "Identifier-\u003eMaybe String",
          "package": "hakyll",
          "partial": "Version",
          "signature": "Identifier-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Identifier.html#v:identifierVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Identifier",
          "name": "setVersion",
          "package": "hakyll",
          "signature": "Maybe String -\u003e Identifier -\u003e Identifier",
          "source": "src/Hakyll-Core-Identifier.html#setVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Core Identifier",
          "module": "Hakyll.Core.Identifier",
          "name": "setVersion",
          "normalized": "Maybe String-\u003eIdentifier-\u003eIdentifier",
          "package": "hakyll",
          "partial": "Version",
          "signature": "Maybe String-\u003eIdentifier-\u003eIdentifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Identifier.html#v:setVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an identifier to a relative \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Hakyll.Core.Identifier",
          "name": "toFilePath",
          "package": "hakyll",
          "signature": "Identifier -\u003e FilePath",
          "source": "src/Hakyll-Core-Identifier.html#toFilePath",
          "type": "function"
        },
        "index": {
          "description": "Convert an identifier to relative FilePath",
          "hierarchy": "Hakyll Core Identifier",
          "module": "Hakyll.Core.Identifier",
          "name": "toFilePath",
          "normalized": "Identifier-\u003eFilePath",
          "package": "hakyll",
          "partial": "File Path",
          "signature": "Identifier-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Identifier.html#v:toFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn item is a combination of some content and its \u003ccode\u003e\u003ca\u003eIdentifier\u003c/a\u003e\u003c/code\u003e. This way, we\n can still use the \u003ccode\u003e\u003ca\u003eIdentifier\u003c/a\u003e\u003c/code\u003e to access metadata.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hakyll.Core.Item",
          "name": "Item",
          "package": "hakyll",
          "source": "src/Hakyll-Core-Item.html",
          "type": "module"
        },
        "index": {
          "description": "An item is combination of some content and its Identifier This way we can still use the Identifier to access metadata",
          "hierarchy": "Hakyll Core Item",
          "module": "Hakyll.Core.Item",
          "name": "Item",
          "package": "hakyll",
          "partial": "Item",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Item.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Item",
          "name": "Item",
          "package": "hakyll",
          "source": "src/Hakyll-Core-Item.html#Item",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hakyll Core Item",
          "module": "Hakyll.Core.Item",
          "name": "Item",
          "package": "hakyll",
          "partial": "Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Item.html#t:Item"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Item",
          "name": "Item",
          "package": "hakyll",
          "signature": "Item",
          "source": "src/Hakyll-Core-Item.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Core Item",
          "module": "Hakyll.Core.Item",
          "name": "Item",
          "package": "hakyll",
          "partial": "Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Item.html#v:Item"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Item",
          "name": "itemBody",
          "package": "hakyll",
          "signature": "a",
          "source": "src/Hakyll-Core-Item.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Core Item",
          "module": "Hakyll.Core.Item",
          "name": "itemBody",
          "package": "hakyll",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Item.html#v:itemBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Item",
          "name": "itemIdentifier",
          "package": "hakyll",
          "signature": "Identifier",
          "source": "src/Hakyll-Core-Item.html#Item",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Core Item",
          "module": "Hakyll.Core.Item",
          "name": "itemIdentifier",
          "package": "hakyll",
          "partial": "Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Item.html#v:itemIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Item",
          "name": "itemSetBody",
          "package": "hakyll",
          "signature": "a -\u003e Item b -\u003e Item a",
          "source": "src/Hakyll-Core-Item.html#itemSetBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Core Item",
          "module": "Hakyll.Core.Item",
          "name": "itemSetBody",
          "normalized": "a-\u003eItem b-\u003eItem a",
          "package": "hakyll",
          "partial": "Set Body",
          "signature": "a-\u003eItem b-\u003eItem a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Item.html#v:itemSetBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a compiler action on the item body. This is the same as \u003ccode\u003e\u003ca\u003etraverse\u003c/a\u003e\u003c/code\u003e,\n but looks less intimidating.\n\u003c/p\u003e\u003cpre\u003e withItemBody = traverse\n\u003c/pre\u003e",
          "module": "Hakyll.Core.Item",
          "name": "withItemBody",
          "package": "hakyll",
          "signature": "(a -\u003e Compiler b) -\u003e Item a -\u003e Compiler (Item b)",
          "source": "src/Hakyll-Core-Item.html#withItemBody",
          "type": "function"
        },
        "index": {
          "description": "Perform compiler action on the item body This is the same as traverse but looks less intimidating withItemBody traverse",
          "hierarchy": "Hakyll Core Item",
          "module": "Hakyll.Core.Item",
          "name": "withItemBody",
          "normalized": "(a-\u003eCompiler b)-\u003eItem a-\u003eCompiler(Item b)",
          "package": "hakyll",
          "partial": "Item Body",
          "signature": "(a-\u003eCompiler b)-\u003eItem a-\u003eCompiler(Item b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Item.html#v:withItemBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Metadata",
          "name": "Metadata",
          "package": "hakyll",
          "source": "src/Hakyll-Core-Metadata.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hakyll Core Metadata",
          "module": "Hakyll.Core.Metadata",
          "name": "Metadata",
          "package": "hakyll",
          "partial": "Metadata",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Metadata.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Metadata",
          "name": "Metadata",
          "package": "hakyll",
          "source": "src/Hakyll-Core-Metadata.html#Metadata",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hakyll Core Metadata",
          "module": "Hakyll.Core.Metadata",
          "name": "Metadata",
          "package": "hakyll",
          "partial": "Metadata",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Metadata.html#t:Metadata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Metadata",
          "name": "MonadMetadata",
          "package": "hakyll",
          "source": "src/Hakyll-Core-Metadata.html#MonadMetadata",
          "type": "class"
        },
        "index": {
          "hierarchy": "Hakyll Core Metadata",
          "module": "Hakyll.Core.Metadata",
          "name": "MonadMetadata",
          "package": "hakyll",
          "partial": "Monad Metadata",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Metadata.html#t:MonadMetadata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Metadata",
          "name": "getAllMetadata",
          "package": "hakyll",
          "signature": "Pattern -\u003e m [(Identifier, Metadata)]",
          "source": "src/Hakyll-Core-Metadata.html#getAllMetadata",
          "type": "method"
        },
        "index": {
          "hierarchy": "Hakyll Core Metadata",
          "module": "Hakyll.Core.Metadata",
          "name": "getAllMetadata",
          "normalized": "Pattern-\u003ea[(Identifier,Metadata)]",
          "package": "hakyll",
          "partial": "All Metadata",
          "signature": "Pattern-\u003em[(Identifier,Metadata)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Metadata.html#v:getAllMetadata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Metadata",
          "name": "getMatches",
          "package": "hakyll",
          "signature": "Pattern -\u003e m [Identifier]",
          "source": "src/Hakyll-Core-Metadata.html#getMatches",
          "type": "method"
        },
        "index": {
          "hierarchy": "Hakyll Core Metadata",
          "module": "Hakyll.Core.Metadata",
          "name": "getMatches",
          "normalized": "Pattern-\u003ea[Identifier]",
          "package": "hakyll",
          "partial": "Matches",
          "signature": "Pattern-\u003em[Identifier]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Metadata.html#v:getMatches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Metadata",
          "name": "getMetadata",
          "package": "hakyll",
          "signature": "Identifier -\u003e m Metadata",
          "source": "src/Hakyll-Core-Metadata.html#getMetadata",
          "type": "method"
        },
        "index": {
          "hierarchy": "Hakyll Core Metadata",
          "module": "Hakyll.Core.Metadata",
          "name": "getMetadata",
          "normalized": "Identifier-\u003ea Metadata",
          "package": "hakyll",
          "partial": "Metadata",
          "signature": "Identifier-\u003em Metadata",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Metadata.html#v:getMetadata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Metadata",
          "name": "getMetadataField",
          "package": "hakyll",
          "signature": "Identifier -\u003e String -\u003e m (Maybe String)",
          "source": "src/Hakyll-Core-Metadata.html#getMetadataField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Core Metadata",
          "module": "Hakyll.Core.Metadata",
          "name": "getMetadataField",
          "normalized": "Identifier-\u003eString-\u003ea(Maybe String)",
          "package": "hakyll",
          "partial": "Metadata Field",
          "signature": "Identifier-\u003eString-\u003em(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Metadata.html#v:getMetadataField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003egetMetadataField\u003c/a\u003e\u003c/code\u003e which throws an error if the field does not\n exist.\n\u003c/p\u003e",
          "module": "Hakyll.Core.Metadata",
          "name": "getMetadataField'",
          "package": "hakyll",
          "signature": "Identifier -\u003e String -\u003e m String",
          "source": "src/Hakyll-Core-Metadata.html#getMetadataField%27",
          "type": "function"
        },
        "index": {
          "description": "Version of getMetadataField which throws an error if the field does not exist",
          "hierarchy": "Hakyll Core Metadata",
          "module": "Hakyll.Core.Metadata",
          "name": "getMetadataField'",
          "normalized": "Identifier-\u003eString-\u003ea String",
          "package": "hakyll",
          "partial": "Metadata Field'",
          "signature": "Identifier-\u003eString-\u003em String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Metadata.html#v:getMetadataField-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Metadata",
          "name": "makePatternDependency",
          "package": "hakyll",
          "signature": "Pattern -\u003e m Dependency",
          "source": "src/Hakyll-Core-Metadata.html#makePatternDependency",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Core Metadata",
          "module": "Hakyll.Core.Metadata",
          "name": "makePatternDependency",
          "normalized": "Pattern-\u003ea Dependency",
          "package": "hakyll",
          "partial": "Pattern Dependency",
          "signature": "Pattern-\u003em Dependency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Metadata.html#v:makePatternDependency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOnce a target is compiled, the user usually wants to save it to the disk.\n This is where the \u003ccode\u003e\u003ca\u003eRoutes\u003c/a\u003e\u003c/code\u003e type comes in; it determines where a certain\n target should be written.\n\u003c/p\u003e\u003cp\u003eSuppose we have an item \u003ccode\u003efoo/bar.markdown\u003c/code\u003e. We can render this to\n \u003ccode\u003efoo/bar.html\u003c/code\u003e using:\n\u003c/p\u003e\u003cpre\u003e route \"foo/bar.markdown\" (setExtension \".html\")\n\u003c/pre\u003e\u003cp\u003eIf we do not want to change the extension, we can use \u003ccode\u003e\u003ca\u003eidRoute\u003c/a\u003e\u003c/code\u003e, the simplest\n route available:\n\u003c/p\u003e\u003cpre\u003e route \"foo/bar.markdown\" idRoute\n\u003c/pre\u003e\u003cp\u003eThat will route \u003ccode\u003efoo/bar.markdown\u003c/code\u003e to \u003ccode\u003efoo/bar.markdown\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that the extension says nothing about the content! If you set the\n extension to \u003ccode\u003e.html\u003c/code\u003e, it is your own responsibility to ensure that the\n content is indeed HTML.\n\u003c/p\u003e\u003cp\u003eFinally, some special cases:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If there is no route for an item, this item will not be routed, so it will\n   not appear in your site directory.\n\u003c/li\u003e\u003cli\u003e If an item matches multiple routes, the first rule will be chosen.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Hakyll.Core.Routes",
          "name": "Routes",
          "package": "hakyll",
          "source": "src/Hakyll-Core-Routes.html",
          "type": "module"
        },
        "index": {
          "description": "Once target is compiled the user usually wants to save it to the disk This is where the Routes type comes in it determines where certain target should be written Suppose we have an item foo bar.markdown We can render this to foo bar.html using route foo bar.markdown setExtension html If we do not want to change the extension we can use idRoute the simplest route available route foo bar.markdown idRoute That will route foo bar.markdown to foo bar.markdown Note that the extension says nothing about the content If you set the extension to html it is your own responsibility to ensure that the content is indeed HTML Finally some special cases If there is no route for an item this item will not be routed so it will not appear in your site directory If an item matches multiple routes the first rule will be chosen",
          "hierarchy": "Hakyll Core Routes",
          "module": "Hakyll.Core.Routes",
          "name": "Routes",
          "package": "hakyll",
          "partial": "Routes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Routes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType used for a route\n\u003c/p\u003e",
          "module": "Hakyll.Core.Routes",
          "name": "Routes",
          "package": "hakyll",
          "source": "src/Hakyll-Core-Routes.html#Routes",
          "type": "data"
        },
        "index": {
          "description": "Type used for route",
          "hierarchy": "Hakyll Core Routes",
          "module": "Hakyll.Core.Routes",
          "name": "Routes",
          "package": "hakyll",
          "partial": "Routes",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Routes.html#t:Routes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen you ran a route, it's useful to know whether or not this used\n metadata. This allows us to do more granular dependency analysis.\n\u003c/p\u003e",
          "module": "Hakyll.Core.Routes",
          "name": "UsedMetadata",
          "package": "hakyll",
          "source": "src/Hakyll-Core-Routes.html#UsedMetadata",
          "type": "type"
        },
        "index": {
          "description": "When you ran route it useful to know whether or not this used metadata This allows us to do more granular dependency analysis",
          "hierarchy": "Hakyll Core Routes",
          "module": "Hakyll.Core.Routes",
          "name": "UsedMetadata",
          "package": "hakyll",
          "partial": "Used Metadata",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Routes.html#t:UsedMetadata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose routes so that \u003ccode\u003ef `composeRoutes` g\u003c/code\u003e is more or less equivalent\n with \u003ccode\u003eg . f\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e let routes = gsubRoute \"rss/\" (const \"\") `composeRoutes` setExtension \"xml\"\n in runRoutes routes \"tags/rss/bar\"\n\u003c/pre\u003e\u003cp\u003eResult:\n\u003c/p\u003e\u003cpre\u003e Just \"tags/bar.xml\"\n\u003c/pre\u003e\u003cp\u003eIf the first route given fails, Hakyll will not apply the second route.\n\u003c/p\u003e",
          "module": "Hakyll.Core.Routes",
          "name": "composeRoutes",
          "package": "hakyll",
          "signature": "Routes-\u003e Routes-\u003e Routes",
          "type": "function"
        },
        "index": {
          "description": "Compose routes so that composeRoutes is more or less equivalent with Example let routes gsubRoute rss const composeRoutes setExtension xml in runRoutes routes tags rss bar Result Just tags bar.xml If the first route given fails Hakyll will not apply the second route",
          "hierarchy": "Hakyll Core Routes",
          "module": "Hakyll.Core.Routes",
          "name": "composeRoutes",
          "normalized": "Routes-\u003eRoutes-\u003eRoutes",
          "package": "hakyll",
          "partial": "Routes",
          "signature": "Routes-\u003eRoutes-\u003eRoutes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Routes.html#v:composeRoutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA route that always gives the same result. Obviously, you should only use\n this for a single compilation rule.\n\u003c/p\u003e",
          "module": "Hakyll.Core.Routes",
          "name": "constRoute",
          "package": "hakyll",
          "signature": "FilePath -\u003e Routes",
          "source": "src/Hakyll-Core-Routes.html#constRoute",
          "type": "function"
        },
        "index": {
          "description": "route that always gives the same result Obviously you should only use this for single compilation rule",
          "hierarchy": "Hakyll Core Routes",
          "module": "Hakyll.Core.Routes",
          "name": "constRoute",
          "normalized": "FilePath-\u003eRoutes",
          "package": "hakyll",
          "partial": "Route",
          "signature": "FilePath-\u003eRoutes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Routes.html#v:constRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a custom route. This should almost always be used with\n \u003ccode\u003e\u003ca\u003ematchRoute\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Hakyll.Core.Routes",
          "name": "customRoute",
          "package": "hakyll",
          "signature": "(Identifier -\u003e FilePath) -\u003e Routes",
          "source": "src/Hakyll-Core-Routes.html#customRoute",
          "type": "function"
        },
        "index": {
          "description": "Create custom route This should almost always be used with matchRoute",
          "hierarchy": "Hakyll Core Routes",
          "module": "Hakyll.Core.Routes",
          "name": "customRoute",
          "normalized": "(Identifier-\u003eFilePath)-\u003eRoutes",
          "package": "hakyll",
          "partial": "Route",
          "signature": "(Identifier-\u003eFilePath)-\u003eRoutes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Routes.html#v:customRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a gsub route\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e runRoutes (gsubRoute \"rss/\" (const \"\")) \"tags/rss/bar.xml\"\n\u003c/pre\u003e\u003cp\u003eResult:\n\u003c/p\u003e\u003cpre\u003e Just \"tags/bar.xml\"\n\u003c/pre\u003e",
          "module": "Hakyll.Core.Routes",
          "name": "gsubRoute",
          "package": "hakyll",
          "signature": "String-\u003e (String -\u003e String)-\u003e Routes",
          "type": "function"
        },
        "index": {
          "description": "Create gsub route Example runRoutes gsubRoute rss const tags rss bar.xml Result Just tags bar.xml",
          "hierarchy": "Hakyll Core Routes",
          "module": "Hakyll.Core.Routes",
          "name": "gsubRoute",
          "normalized": "String-\u003e(String-\u003eString)-\u003eRoutes",
          "package": "hakyll",
          "partial": "Route",
          "signature": "String-\u003e(String-\u003eString)-\u003eRoutes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Routes.html#v:gsubRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA route that uses the identifier as filepath. For example, the target with\n ID \u003ccode\u003efoo/bar\u003c/code\u003e will be written to the file \u003ccode\u003efoo/bar\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hakyll.Core.Routes",
          "name": "idRoute",
          "package": "hakyll",
          "signature": "Routes",
          "source": "src/Hakyll-Core-Routes.html#idRoute",
          "type": "function"
        },
        "index": {
          "description": "route that uses the identifier as filepath For example the target with ID foo bar will be written to the file foo bar",
          "hierarchy": "Hakyll Core Routes",
          "module": "Hakyll.Core.Routes",
          "name": "idRoute",
          "package": "hakyll",
          "partial": "Route",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Routes.html#v:idRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the route if the identifier matches the given pattern, fail\n otherwise\n\u003c/p\u003e",
          "module": "Hakyll.Core.Routes",
          "name": "matchRoute",
          "package": "hakyll",
          "signature": "Pattern -\u003e Routes -\u003e Routes",
          "source": "src/Hakyll-Core-Routes.html#matchRoute",
          "type": "function"
        },
        "index": {
          "description": "Apply the route if the identifier matches the given pattern fail otherwise",
          "hierarchy": "Hakyll Core Routes",
          "module": "Hakyll.Core.Routes",
          "name": "matchRoute",
          "normalized": "Pattern-\u003eRoutes-\u003eRoutes",
          "package": "hakyll",
          "partial": "Route",
          "signature": "Pattern-\u003eRoutes-\u003eRoutes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Routes.html#v:matchRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet access to the metadata in order to determine the route\n\u003c/p\u003e",
          "module": "Hakyll.Core.Routes",
          "name": "metadataRoute",
          "package": "hakyll",
          "signature": "(Metadata -\u003e Routes) -\u003e Routes",
          "source": "src/Hakyll-Core-Routes.html#metadataRoute",
          "type": "function"
        },
        "index": {
          "description": "Get access to the metadata in order to determine the route",
          "hierarchy": "Hakyll Core Routes",
          "module": "Hakyll.Core.Routes",
          "name": "metadataRoute",
          "normalized": "(Metadata-\u003eRoutes)-\u003eRoutes",
          "package": "hakyll",
          "partial": "Route",
          "signature": "(Metadata-\u003eRoutes)-\u003eRoutes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Routes.html#v:metadataRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a route to an identifier\n\u003c/p\u003e",
          "module": "Hakyll.Core.Routes",
          "name": "runRoutes",
          "package": "hakyll",
          "signature": "Routes -\u003e Provider -\u003e Identifier -\u003e IO (Maybe FilePath, UsedMetadata)",
          "source": "src/Hakyll-Core-Routes.html#runRoutes",
          "type": "function"
        },
        "index": {
          "description": "Apply route to an identifier",
          "hierarchy": "Hakyll Core Routes",
          "module": "Hakyll.Core.Routes",
          "name": "runRoutes",
          "normalized": "Routes-\u003eProvider-\u003eIdentifier-\u003eIO(Maybe FilePath,UsedMetadata)",
          "package": "hakyll",
          "partial": "Routes",
          "signature": "Routes-\u003eProvider-\u003eIdentifier-\u003eIO(Maybe FilePath,UsedMetadata)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Routes.html#v:runRoutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet (or replace) the extension of a route.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e runRoutes (setExtension \"html\") \"foo/bar\"\n\u003c/pre\u003e\u003cp\u003eResult:\n\u003c/p\u003e\u003cpre\u003e Just \"foo/bar.html\"\n\u003c/pre\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e runRoutes (setExtension \"html\") \"posts/the-art-of-trolling.markdown\"\n\u003c/pre\u003e\u003cp\u003eResult:\n\u003c/p\u003e\u003cpre\u003e Just \"posts/the-art-of-trolling.html\"\n\u003c/pre\u003e",
          "module": "Hakyll.Core.Routes",
          "name": "setExtension",
          "package": "hakyll",
          "signature": "String -\u003e Routes",
          "source": "src/Hakyll-Core-Routes.html#setExtension",
          "type": "function"
        },
        "index": {
          "description": "Set or replace the extension of route Example runRoutes setExtension html foo bar Result Just foo bar.html Example runRoutes setExtension html posts the-art-of-trolling.markdown Result Just posts the-art-of-trolling.html",
          "hierarchy": "Hakyll Core Routes",
          "module": "Hakyll.Core.Routes",
          "name": "setExtension",
          "normalized": "String-\u003eRoutes",
          "package": "hakyll",
          "partial": "Extension",
          "signature": "String-\u003eRoutes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Routes.html#v:setExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a declarative DSL in which the user can specify the\n different rules used to run the compilers.\n\u003c/p\u003e\u003cp\u003eThe convention is to just list all items in the \u003ccode\u003e\u003ca\u003eRules\u003c/a\u003e\u003c/code\u003e monad, routes and\n compilation rules.\n\u003c/p\u003e\u003cp\u003eA typical usage example would be:\n\u003c/p\u003e\u003cpre\u003e main = hakyll $ do\n     match \"posts/*\" $ do\n         route   (setExtension \"html\")\n         compile someCompiler\n     match \"css/*\" $ do\n         route   idRoute\n         compile compressCssCompiler\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Hakyll.Core.Rules",
          "name": "Rules",
          "package": "hakyll",
          "source": "src/Hakyll-Core-Rules.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides declarative DSL in which the user can specify the different rules used to run the compilers The convention is to just list all items in the Rules monad routes and compilation rules typical usage example would be main hakyll do match posts do route setExtension html compile someCompiler match css do route idRoute compile compressCssCompiler",
          "hierarchy": "Hakyll Core Rules",
          "module": "Hakyll.Core.Rules",
          "name": "Rules",
          "package": "hakyll",
          "partial": "Rules",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Rules.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Rules",
          "name": "Dependency",
          "package": "hakyll",
          "source": "src/Hakyll-Core-Dependencies.html#Dependency",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hakyll Core Rules",
          "module": "Hakyll.Core.Rules",
          "name": "Dependency",
          "package": "hakyll",
          "partial": "Dependency",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Rules.html#t:Dependency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monad used to compose rules\n\u003c/p\u003e",
          "module": "Hakyll.Core.Rules",
          "name": "Rules",
          "package": "hakyll",
          "source": "src/Hakyll-Core-Rules-Internal.html#Rules",
          "type": "data"
        },
        "index": {
          "description": "The monad used to compose rules",
          "hierarchy": "Hakyll Core Rules",
          "module": "Hakyll.Core.Rules",
          "name": "Rules",
          "package": "hakyll",
          "partial": "Rules",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Rules.html#t:Rules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a compilation rule to the rules.\n\u003c/p\u003e\u003cp\u003eThis instructs all resources to be compiled using the given compiler.\n\u003c/p\u003e",
          "module": "Hakyll.Core.Rules",
          "name": "compile",
          "package": "hakyll",
          "signature": "Compiler (Item a) -\u003e Rules ()",
          "source": "src/Hakyll-Core-Rules.html#compile",
          "type": "function"
        },
        "index": {
          "description": "Add compilation rule to the rules This instructs all resources to be compiled using the given compiler",
          "hierarchy": "Hakyll Core Rules",
          "module": "Hakyll.Core.Rules",
          "name": "compile",
          "normalized": "Compiler(Item a)-\u003eRules()",
          "package": "hakyll",
          "signature": "Compiler(Item a)-\u003eRules()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Rules.html#v:compile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Rules",
          "name": "create",
          "package": "hakyll",
          "signature": "[Identifier] -\u003e Rules () -\u003e Rules ()",
          "source": "src/Hakyll-Core-Rules.html#create",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Core Rules",
          "module": "Hakyll.Core.Rules",
          "name": "create",
          "normalized": "[Identifier]-\u003eRules()-\u003eRules()",
          "package": "hakyll",
          "signature": "[Identifier]-\u003eRules()-\u003eRules()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Rules.html#v:create"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Rules",
          "name": "match",
          "package": "hakyll",
          "signature": "Pattern -\u003e Rules () -\u003e Rules ()",
          "source": "src/Hakyll-Core-Rules.html#match",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Core Rules",
          "module": "Hakyll.Core.Rules",
          "name": "match",
          "normalized": "Pattern-\u003eRules()-\u003eRules()",
          "package": "hakyll",
          "signature": "Pattern-\u003eRules()-\u003eRules()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Rules.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action immediately while the rules are being evaluated.\n This should be avoided if possible, but occasionally comes in useful.\n\u003c/p\u003e",
          "module": "Hakyll.Core.Rules",
          "name": "preprocess",
          "package": "hakyll",
          "signature": "IO a -\u003e Rules a",
          "source": "src/Hakyll-Core-Rules.html#preprocess",
          "type": "function"
        },
        "index": {
          "description": "Execute an IO action immediately while the rules are being evaluated This should be avoided if possible but occasionally comes in useful",
          "hierarchy": "Hakyll Core Rules",
          "module": "Hakyll.Core.Rules",
          "name": "preprocess",
          "normalized": "IO a-\u003eRules a",
          "package": "hakyll",
          "signature": "IO a-\u003eRules a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Rules.html#v:preprocess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a route.\n\u003c/p\u003e\u003cp\u003eThis adds a route for all items matching the current pattern.\n\u003c/p\u003e",
          "module": "Hakyll.Core.Rules",
          "name": "route",
          "package": "hakyll",
          "signature": "Routes -\u003e Rules ()",
          "source": "src/Hakyll-Core-Rules.html#route",
          "type": "function"
        },
        "index": {
          "description": "Add route This adds route for all items matching the current pattern",
          "hierarchy": "Hakyll Core Rules",
          "module": "Hakyll.Core.Rules",
          "name": "route",
          "normalized": "Routes-\u003eRules()",
          "package": "hakyll",
          "signature": "Routes-\u003eRules()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Rules.html#v:route"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdvanced usage: add extra dependencies to compilers. Basically this is\n needed when you're doing unsafe tricky stuff in the rules monad, but you\n still want correct builds.\n\u003c/p\u003e\u003cp\u003eA useful utility for this purpose is \u003ccode\u003e\u003ca\u003emakePatternDependency\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hakyll.Core.Rules",
          "name": "rulesExtraDependencies",
          "package": "hakyll",
          "signature": "[Dependency] -\u003e Rules a -\u003e Rules a",
          "source": "src/Hakyll-Core-Rules.html#rulesExtraDependencies",
          "type": "function"
        },
        "index": {
          "description": "Advanced usage add extra dependencies to compilers Basically this is needed when you re doing unsafe tricky stuff in the rules monad but you still want correct builds useful utility for this purpose is makePatternDependency",
          "hierarchy": "Hakyll Core Rules",
          "module": "Hakyll.Core.Rules",
          "name": "rulesExtraDependencies",
          "normalized": "[Dependency]-\u003eRules a-\u003eRules a",
          "package": "hakyll",
          "partial": "Extra Dependencies",
          "signature": "[Dependency]-\u003eRules a-\u003eRules a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Rules.html#v:rulesExtraDependencies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Core.Rules",
          "name": "version",
          "package": "hakyll",
          "signature": "String -\u003e Rules () -\u003e Rules ()",
          "source": "src/Hakyll-Core-Rules.html#version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Core Rules",
          "module": "Hakyll.Core.Rules",
          "name": "version",
          "normalized": "String-\u003eRules()-\u003eRules()",
          "package": "hakyll",
          "signature": "String-\u003eRules()-\u003eRules()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Rules.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Compiler that supports unix filters.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hakyll.Core.UnixFilter",
          "name": "UnixFilter",
          "package": "hakyll",
          "source": "src/Hakyll-Core-UnixFilter.html",
          "type": "module"
        },
        "index": {
          "description": "Compiler that supports unix filters",
          "hierarchy": "Hakyll Core UnixFilter",
          "module": "Hakyll.Core.UnixFilter",
          "name": "UnixFilter",
          "package": "hakyll",
          "partial": "Unix Filter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-UnixFilter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a unix filter as compiler. For example, we could use the \u003ccode\u003erev\u003c/code\u003e program\n as a compiler.\n\u003c/p\u003e\u003cpre\u003e rev :: Compiler String\n rev = getResourceString \u003e\u003e= withItemBody (unixFilter \"rev\" [])\n\u003c/pre\u003e\u003cp\u003eA more realistic example: one can use this to call, for example, the sass\n compiler on CSS files. More information about sass can be found here:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://sass-lang.com/\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThe code is fairly straightforward, given that we use \u003ccode\u003e.scss\u003c/code\u003e for sass:\n\u003c/p\u003e\u003cpre\u003e match \"style.scss\" $ do\n     route   $ setExtension \"css\"\n     compile $ getResourceString \u003e\u003e=\n         withItemBody (unixFilter \"sass\" [\"-s\", \"--scss\"]) \u003e\u003e=\n         return . fmap compressCss\n\u003c/pre\u003e",
          "module": "Hakyll.Core.UnixFilter",
          "name": "unixFilter",
          "package": "hakyll",
          "signature": "String-\u003e [String]-\u003e String-\u003e Compiler String",
          "type": "function"
        },
        "index": {
          "description": "Use unix filter as compiler For example we could use the rev program as compiler rev Compiler String rev getResourceString withItemBody unixFilter rev more realistic example one can use this to call for example the sass compiler on CSS files More information about sass can be found here http sass-lang.com The code is fairly straightforward given that we use scss for sass match style.scss do route setExtension css compile getResourceString withItemBody unixFilter sass scss return fmap compressCss",
          "hierarchy": "Hakyll Core UnixFilter",
          "module": "Hakyll.Core.UnixFilter",
          "name": "unixFilter",
          "normalized": "String-\u003e[String]-\u003eString-\u003eCompiler String",
          "package": "hakyll",
          "partial": "Filter",
          "signature": "String-\u003e[String]-\u003eString-\u003eCompiler String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-UnixFilter.html#v:unixFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eunixFilter\u003c/a\u003e\u003c/code\u003e that should be used for binary files\n\u003c/p\u003e\u003cpre\u003e match \"music.wav\" $ do\n     route   $ setExtension \"ogg\"\n     compile $ getResourceLBS \u003e\u003e= withItemBody (unixFilterLBS \"oggenc\" [\"-\"])\n\u003c/pre\u003e",
          "module": "Hakyll.Core.UnixFilter",
          "name": "unixFilterLBS",
          "package": "hakyll",
          "signature": "String-\u003e [String]-\u003e ByteString-\u003e Compiler ByteString",
          "type": "function"
        },
        "index": {
          "description": "Variant of unixFilter that should be used for binary files match music.wav do route setExtension ogg compile getResourceLBS withItemBody unixFilterLBS oggenc",
          "hierarchy": "Hakyll Core UnixFilter",
          "module": "Hakyll.Core.UnixFilter",
          "name": "unixFilterLBS",
          "normalized": "String-\u003e[String]-\u003eByteString-\u003eCompiler ByteString",
          "package": "hakyll",
          "partial": "Filter LBS",
          "signature": "String-\u003e[String]-\u003eByteString-\u003eCompiler ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-UnixFilter.html#v:unixFilterLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMiscellaneous string manipulation functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hakyll.Core.Util.String",
          "name": "String",
          "package": "hakyll",
          "source": "src/Hakyll-Core-Util-String.html",
          "type": "module"
        },
        "index": {
          "description": "Miscellaneous string manipulation functions",
          "hierarchy": "Hakyll Core Util String",
          "module": "Hakyll.Core.Util.String",
          "name": "String",
          "package": "hakyll",
          "partial": "String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Util-String.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the first instance of needle (must be non-empty) in haystack. We\n return the prefix of haystack before needle is matched.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e needlePrefix \"cd\" \"abcde\" = \"ab\"\n\u003c/pre\u003e\u003cpre\u003e needlePrefix \"ab\" \"abc\" = \"\"\n\u003c/pre\u003e\u003cpre\u003e needlePrefix \"ab\" \"xxab\" = \"xx\"\n\u003c/pre\u003e\u003cpre\u003e needlePrefix \"a\" \"xx\" = \"xx\"\n\u003c/pre\u003e",
          "module": "Hakyll.Core.Util.String",
          "name": "needlePrefix",
          "package": "hakyll",
          "signature": "String -\u003e String -\u003e Maybe String",
          "source": "src/Hakyll-Core-Util-String.html#needlePrefix",
          "type": "function"
        },
        "index": {
          "description": "Find the first instance of needle must be non-empty in haystack We return the prefix of haystack before needle is matched Examples needlePrefix cd abcde ab needlePrefix ab abc needlePrefix ab xxab xx needlePrefix xx xx",
          "hierarchy": "Hakyll Core Util String",
          "module": "Hakyll.Core.Util.String",
          "name": "needlePrefix",
          "normalized": "String-\u003eString-\u003eMaybe String",
          "package": "hakyll",
          "partial": "Prefix",
          "signature": "String-\u003eString-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Util-String.html#v:needlePrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple (but inefficient) regex replace funcion\n\u003c/p\u003e",
          "module": "Hakyll.Core.Util.String",
          "name": "replaceAll",
          "package": "hakyll",
          "signature": "String-\u003e (String -\u003e String)-\u003e String-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "simple but inefficient regex replace funcion",
          "hierarchy": "Hakyll Core Util String",
          "module": "Hakyll.Core.Util.String",
          "name": "replaceAll",
          "normalized": "String-\u003e(String-\u003eString)-\u003eString-\u003eString",
          "package": "hakyll",
          "partial": "All",
          "signature": "String-\u003e(String-\u003eString)-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Util-String.html#v:replaceAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple regex split function. The resulting list will contain no empty\n strings.\n\u003c/p\u003e",
          "module": "Hakyll.Core.Util.String",
          "name": "splitAll",
          "package": "hakyll",
          "signature": "String-\u003e String-\u003e [String]",
          "type": "function"
        },
        "index": {
          "description": "simple regex split function The resulting list will contain no empty strings",
          "hierarchy": "Hakyll Core Util String",
          "module": "Hakyll.Core.Util.String",
          "name": "splitAll",
          "normalized": "String-\u003eString-\u003e[String]",
          "package": "hakyll",
          "partial": "All",
          "signature": "String-\u003eString-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Util-String.html#v:splitAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrim a string (drop spaces, tabs and newlines at both sides).\n\u003c/p\u003e",
          "module": "Hakyll.Core.Util.String",
          "name": "trim",
          "package": "hakyll",
          "signature": "String -\u003e String",
          "source": "src/Hakyll-Core-Util-String.html#trim",
          "type": "function"
        },
        "index": {
          "description": "Trim string drop spaces tabs and newlines at both sides",
          "hierarchy": "Hakyll Core Util String",
          "module": "Hakyll.Core.Util.String",
          "name": "trim",
          "normalized": "String-\u003eString",
          "package": "hakyll",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Util-String.html#v:trim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDescribes writable items; items that can be saved to the disk\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hakyll.Core.Writable",
          "name": "Writable",
          "package": "hakyll",
          "source": "src/Hakyll-Core-Writable.html",
          "type": "module"
        },
        "index": {
          "description": "Describes writable items items that can be saved to the disk",
          "hierarchy": "Hakyll Core Writable",
          "module": "Hakyll.Core.Writable",
          "name": "Writable",
          "package": "hakyll",
          "partial": "Writable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Writable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes an item that can be saved to the disk\n\u003c/p\u003e",
          "module": "Hakyll.Core.Writable",
          "name": "Writable",
          "package": "hakyll",
          "source": "src/Hakyll-Core-Writable.html#Writable",
          "type": "class"
        },
        "index": {
          "description": "Describes an item that can be saved to the disk",
          "hierarchy": "Hakyll Core Writable",
          "module": "Hakyll.Core.Writable",
          "name": "Writable",
          "package": "hakyll",
          "partial": "Writable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Writable.html#t:Writable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave an item to the given filepath\n\u003c/p\u003e",
          "module": "Hakyll.Core.Writable",
          "name": "write",
          "package": "hakyll",
          "signature": "FilePath -\u003e Item a -\u003e IO ()",
          "source": "src/Hakyll-Core-Writable.html#write",
          "type": "method"
        },
        "index": {
          "description": "Save an item to the given filepath",
          "hierarchy": "Hakyll Core Writable",
          "module": "Hakyll.Core.Writable",
          "name": "write",
          "normalized": "FilePath-\u003eItem a-\u003eIO()",
          "package": "hakyll",
          "signature": "FilePath-\u003eItem a-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Core-Writable.html#v:write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule providing the main hakyll function and command-line argument parsing\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hakyll.Main",
          "name": "Main",
          "package": "hakyll",
          "source": "src/Hakyll-Main.html",
          "type": "module"
        },
        "index": {
          "description": "Module providing the main hakyll function and command-line argument parsing",
          "hierarchy": "Hakyll Main",
          "module": "Hakyll.Main",
          "name": "Main",
          "package": "hakyll",
          "partial": "Main",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Main.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis usualy is the function with which the user runs the hakyll compiler\n\u003c/p\u003e",
          "module": "Hakyll.Main",
          "name": "hakyll",
          "package": "hakyll",
          "signature": "Rules a -\u003e IO ()",
          "source": "src/Hakyll-Main.html#hakyll",
          "type": "function"
        },
        "index": {
          "description": "This usualy is the function with which the user runs the hakyll compiler",
          "hierarchy": "Hakyll Main",
          "module": "Hakyll.Main",
          "name": "hakyll",
          "normalized": "Rules a-\u003eIO()",
          "package": "hakyll",
          "signature": "Rules a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Main.html#v:hakyll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ehakyll\u003c/a\u003e\u003c/code\u003e which allows the user to specify a custom\n configuration\n\u003c/p\u003e",
          "module": "Hakyll.Main",
          "name": "hakyllWith",
          "package": "hakyll",
          "signature": "Configuration -\u003e Rules a -\u003e IO ()",
          "source": "src/Hakyll-Main.html#hakyllWith",
          "type": "function"
        },
        "index": {
          "description": "variant of hakyll which allows the user to specify custom configuration",
          "hierarchy": "Hakyll Main",
          "module": "Hakyll.Main",
          "name": "hakyllWith",
          "normalized": "Configuration-\u003eRules a-\u003eIO()",
          "package": "hakyll",
          "partial": "With",
          "signature": "Configuration-\u003eRules a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Main.html#v:hakyllWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule used for CSS compression. The compression is currently in a simple\n state, but would typically reduce the number of bytes by about 25%.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hakyll.Web.CompressCss",
          "name": "CompressCss",
          "package": "hakyll",
          "source": "src/Hakyll-Web-CompressCss.html",
          "type": "module"
        },
        "index": {
          "description": "Module used for CSS compression The compression is currently in simple state but would typically reduce the number of bytes by about",
          "hierarchy": "Hakyll Web CompressCss",
          "module": "Hakyll.Web.CompressCss",
          "name": "CompressCss",
          "package": "hakyll",
          "partial": "Compress Css",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-CompressCss.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompress CSS to speed up your site.\n\u003c/p\u003e",
          "module": "Hakyll.Web.CompressCss",
          "name": "compressCss",
          "package": "hakyll",
          "signature": "String -\u003e String",
          "source": "src/Hakyll-Web-CompressCss.html#compressCss",
          "type": "function"
        },
        "index": {
          "description": "Compress CSS to speed up your site",
          "hierarchy": "Hakyll Web CompressCss",
          "module": "Hakyll.Web.CompressCss",
          "name": "compressCss",
          "normalized": "String-\u003eString",
          "package": "hakyll",
          "partial": "Css",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-CompressCss.html#v:compressCss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompiler form of \u003ccode\u003e\u003ca\u003ecompressCss\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Hakyll.Web.CompressCss",
          "name": "compressCssCompiler",
          "package": "hakyll",
          "signature": "Compiler (Item String)",
          "source": "src/Hakyll-Web-CompressCss.html#compressCssCompiler",
          "type": "function"
        },
        "index": {
          "description": "Compiler form of compressCss",
          "hierarchy": "Hakyll Web CompressCss",
          "module": "Hakyll.Web.CompressCss",
          "name": "compressCssCompiler",
          "package": "hakyll",
          "partial": "Css Compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-CompressCss.html#v:compressCssCompiler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Module that allows easy rendering of RSS feeds.\n\u003c/p\u003e\u003cp\u003eThe main rendering functions (\u003ccode\u003erenderRss\u003c/code\u003e, \u003ccode\u003erenderAtom\u003c/code\u003e) all assume that\n you pass the list of items so that the most recent entry in the feed is the\n first item in the list.\n\u003c/p\u003e\u003cp\u003eAlso note that the context should have (at least) the following fields to\n produce a correct feed:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e$title$\u003c/code\u003e: Title of the item\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e$description$\u003c/code\u003e: Description to appear in the feed\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e$url$\u003c/code\u003e: URL to the item - this is usually set automatically.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIn addition, the posts should be named according to the rules for\n \u003ccode\u003e\u003ca\u003edateField\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hakyll.Web.Feed",
          "name": "Feed",
          "package": "hakyll",
          "source": "src/Hakyll-Web-Feed.html",
          "type": "module"
        },
        "index": {
          "description": "Module that allows easy rendering of RSS feeds The main rendering functions renderRss renderAtom all assume that you pass the list of items so that the most recent entry in the feed is the first item in the list Also note that the context should have at least the following fields to produce correct feed title Title of the item description Description to appear in the feed url URL to the item this is usually set automatically In addition the posts should be named according to the rules for dateField",
          "hierarchy": "Hakyll Web Feed",
          "module": "Hakyll.Web.Feed",
          "name": "Feed",
          "package": "hakyll",
          "partial": "Feed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Feed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a data structure to keep the configuration of a feed.\n\u003c/p\u003e",
          "module": "Hakyll.Web.Feed",
          "name": "FeedConfiguration",
          "package": "hakyll",
          "source": "src/Hakyll-Web-Feed.html#FeedConfiguration",
          "type": "data"
        },
        "index": {
          "description": "This is data structure to keep the configuration of feed",
          "hierarchy": "Hakyll Web Feed",
          "module": "Hakyll.Web.Feed",
          "name": "FeedConfiguration",
          "package": "hakyll",
          "partial": "Feed Configuration",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Feed.html#t:FeedConfiguration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Feed",
          "name": "FeedConfiguration",
          "package": "hakyll",
          "signature": "FeedConfiguration",
          "source": "src/Hakyll-Web-Feed.html#FeedConfiguration",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Feed",
          "module": "Hakyll.Web.Feed",
          "name": "FeedConfiguration",
          "package": "hakyll",
          "partial": "Feed Configuration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Feed.html#v:FeedConfiguration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmail of the feed author.\n\u003c/p\u003e",
          "module": "Hakyll.Web.Feed",
          "name": "feedAuthorEmail",
          "package": "hakyll",
          "signature": "String",
          "source": "src/Hakyll-Web-Feed.html#FeedConfiguration",
          "type": "function"
        },
        "index": {
          "description": "Email of the feed author",
          "hierarchy": "Hakyll Web Feed",
          "module": "Hakyll.Web.Feed",
          "name": "feedAuthorEmail",
          "package": "hakyll",
          "partial": "Author Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Feed.html#v:feedAuthorEmail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the feed author.\n\u003c/p\u003e",
          "module": "Hakyll.Web.Feed",
          "name": "feedAuthorName",
          "package": "hakyll",
          "signature": "String",
          "source": "src/Hakyll-Web-Feed.html#FeedConfiguration",
          "type": "function"
        },
        "index": {
          "description": "Name of the feed author",
          "hierarchy": "Hakyll Web Feed",
          "module": "Hakyll.Web.Feed",
          "name": "feedAuthorName",
          "package": "hakyll",
          "partial": "Author Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Feed.html#v:feedAuthorName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescription of the feed.\n\u003c/p\u003e",
          "module": "Hakyll.Web.Feed",
          "name": "feedDescription",
          "package": "hakyll",
          "signature": "String",
          "source": "src/Hakyll-Web-Feed.html#FeedConfiguration",
          "type": "function"
        },
        "index": {
          "description": "Description of the feed",
          "hierarchy": "Hakyll Web Feed",
          "module": "Hakyll.Web.Feed",
          "name": "feedDescription",
          "package": "hakyll",
          "partial": "Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Feed.html#v:feedDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbsolute root URL of the feed site (e.g. \u003ccode\u003ehttp:\u003cem/\u003ejaspervdj.be\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Hakyll.Web.Feed",
          "name": "feedRoot",
          "package": "hakyll",
          "signature": "String",
          "source": "src/Hakyll-Web-Feed.html#FeedConfiguration",
          "type": "function"
        },
        "index": {
          "description": "Absolute root URL of the feed site e.g http jaspervdj.be",
          "hierarchy": "Hakyll Web Feed",
          "module": "Hakyll.Web.Feed",
          "name": "feedRoot",
          "package": "hakyll",
          "partial": "Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Feed.html#v:feedRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTitle of the feed.\n\u003c/p\u003e",
          "module": "Hakyll.Web.Feed",
          "name": "feedTitle",
          "package": "hakyll",
          "signature": "String",
          "source": "src/Hakyll-Web-Feed.html#FeedConfiguration",
          "type": "function"
        },
        "index": {
          "description": "Title of the feed",
          "hierarchy": "Hakyll Web Feed",
          "module": "Hakyll.Web.Feed",
          "name": "feedTitle",
          "package": "hakyll",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Feed.html#v:feedTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender an Atom feed with a number of items.\n\u003c/p\u003e",
          "module": "Hakyll.Web.Feed",
          "name": "renderAtom",
          "package": "hakyll",
          "signature": "FeedConfiguration-\u003e Context String-\u003e [Item String]-\u003e Compiler (Item String)",
          "type": "function"
        },
        "index": {
          "description": "Render an Atom feed with number of items",
          "hierarchy": "Hakyll Web Feed",
          "module": "Hakyll.Web.Feed",
          "name": "renderAtom",
          "normalized": "FeedConfiguration-\u003eContext String-\u003e[Item String]-\u003eCompiler(Item String)",
          "package": "hakyll",
          "partial": "Atom",
          "signature": "FeedConfiguration-\u003eContext String-\u003e[Item String]-\u003eCompiler(Item String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Feed.html#v:renderAtom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender an RSS feed with a number of items.\n\u003c/p\u003e",
          "module": "Hakyll.Web.Feed",
          "name": "renderRss",
          "package": "hakyll",
          "signature": "FeedConfiguration-\u003e Context String-\u003e [Item String]-\u003e Compiler (Item String)",
          "type": "function"
        },
        "index": {
          "description": "Render an RSS feed with number of items",
          "hierarchy": "Hakyll Web Feed",
          "module": "Hakyll.Web.Feed",
          "name": "renderRss",
          "normalized": "FeedConfiguration-\u003eContext String-\u003e[Item String]-\u003eCompiler(Item String)",
          "package": "hakyll",
          "partial": "Rss",
          "signature": "FeedConfiguration-\u003eContext String-\u003e[Item String]-\u003eCompiler(Item String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Feed.html#v:renderRss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exposes a function which can relativize URL's on a webpage.\n\u003c/p\u003e\u003cp\u003eThis means that one can deploy the resulting site on\n \u003ccode\u003ehttp://example.com/\u003c/code\u003e, but also on \u003ccode\u003ehttp://example.com/some-folder/\u003c/code\u003e\n without having to change anything (simply copy over the files).\n\u003c/p\u003e\u003cp\u003eTo use it, you should use absolute URL's from the site root everywhere. For\n example, use\n\u003c/p\u003e\u003cpre\u003e \u003cimg src=\"/images/lolcat.png\" alt=\"Funny zomgroflcopter\" /\u003e\n\u003c/pre\u003e\u003cp\u003ein a blogpost. When running this through the relativize URL's module, this\n will result in (suppose your blogpost is located at \u003ccode\u003e/posts/foo.html\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e \u003cimg src=\"../images/lolcat.png\" alt=\"Funny zomgroflcopter\" /\u003e\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Hakyll.Web.Html.RelativizeUrls",
          "name": "RelativizeUrls",
          "package": "hakyll",
          "source": "src/Hakyll-Web-Html-RelativizeUrls.html",
          "type": "module"
        },
        "index": {
          "description": "This module exposes function which can relativize URL on webpage This means that one can deploy the resulting site on http example.com but also on http example.com some-folder without having to change anything simply copy over the files To use it you should use absolute URL from the site root everywhere For example use img src images lolcat.png alt Funny zomgroflcopter in blogpost When running this through the relativize URL module this will result in suppose your blogpost is located at posts foo.html img src images lolcat.png alt Funny zomgroflcopter",
          "hierarchy": "Hakyll Web Html RelativizeUrls",
          "module": "Hakyll.Web.Html.RelativizeUrls",
          "name": "RelativizeUrls",
          "package": "hakyll",
          "partial": "Relativize Urls",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Html-RelativizeUrls.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompiler form of \u003ccode\u003e\u003ca\u003erelativizeUrls\u003c/a\u003e\u003c/code\u003e which automatically picks the right root\n path\n\u003c/p\u003e",
          "module": "Hakyll.Web.Html.RelativizeUrls",
          "name": "relativizeUrls",
          "package": "hakyll",
          "signature": "Item String -\u003e Compiler (Item String)",
          "source": "src/Hakyll-Web-Html-RelativizeUrls.html#relativizeUrls",
          "type": "function"
        },
        "index": {
          "description": "Compiler form of relativizeUrls which automatically picks the right root path",
          "hierarchy": "Hakyll Web Html RelativizeUrls",
          "module": "Hakyll.Web.Html.RelativizeUrls",
          "name": "relativizeUrls",
          "normalized": "Item String-\u003eCompiler(Item String)",
          "package": "hakyll",
          "partial": "Urls",
          "signature": "Item String-\u003eCompiler(Item String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Html-RelativizeUrls.html#v:relativizeUrls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelativize URL's in HTML\n\u003c/p\u003e",
          "module": "Hakyll.Web.Html.RelativizeUrls",
          "name": "relativizeUrlsWith",
          "package": "hakyll",
          "signature": "String-\u003e String-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Relativize URL in HTML",
          "hierarchy": "Hakyll Web Html RelativizeUrls",
          "module": "Hakyll.Web.Html.RelativizeUrls",
          "name": "relativizeUrlsWith",
          "normalized": "String-\u003eString-\u003eString",
          "package": "hakyll",
          "partial": "Urls With",
          "signature": "String-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Html-RelativizeUrls.html#v:relativizeUrlsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides utilities to manipulate HTML pages\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hakyll.Web.Html",
          "name": "Html",
          "package": "hakyll",
          "source": "src/Hakyll-Web-Html.html",
          "type": "module"
        },
        "index": {
          "description": "Provides utilities to manipulate HTML pages",
          "hierarchy": "Hakyll Web Html",
          "module": "Hakyll.Web.Html",
          "name": "Html",
          "package": "hakyll",
          "partial": "Html",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Html.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap every \u003ccode\u003eh1\u003c/code\u003e to an \u003ccode\u003eh2\u003c/code\u003e, \u003ccode\u003eh2\u003c/code\u003e to \u003ccode\u003eh3\u003c/code\u003e, etc.\n\u003c/p\u003e",
          "module": "Hakyll.Web.Html",
          "name": "demoteHeaders",
          "package": "hakyll",
          "signature": "String -\u003e String",
          "source": "src/Hakyll-Web-Html.html#demoteHeaders",
          "type": "function"
        },
        "index": {
          "description": "Map every h1 to an h2 h2 to h3 etc",
          "hierarchy": "Hakyll Web Html",
          "module": "Hakyll.Web.Html",
          "name": "demoteHeaders",
          "normalized": "String-\u003eString",
          "package": "hakyll",
          "partial": "Headers",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Html.html#v:demoteHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTML-escape a string\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e escapeHtml \"Me & Dean\"\n\u003c/pre\u003e\u003cp\u003eResult:\n\u003c/p\u003e\u003cpre\u003e \"Me &amp; Dean\"\n\u003c/pre\u003e",
          "module": "Hakyll.Web.Html",
          "name": "escapeHtml",
          "package": "hakyll",
          "signature": "String -\u003e String",
          "source": "src/Hakyll-Web-Html.html#escapeHtml",
          "type": "function"
        },
        "index": {
          "description": "HTML-escape string Example escapeHtml Me Dean Result Me amp Dean",
          "hierarchy": "Hakyll Web Html",
          "module": "Hakyll.Web.Html",
          "name": "escapeHtml",
          "normalized": "String-\u003eString",
          "package": "hakyll",
          "partial": "Html",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Html.html#v:escapeHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Html",
          "name": "getUrls",
          "package": "hakyll",
          "signature": "[Tag String] -\u003e [String]",
          "source": "src/Hakyll-Web-Html.html#getUrls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Html",
          "module": "Hakyll.Web.Html",
          "name": "getUrls",
          "normalized": "[Tag String]-\u003e[String]",
          "package": "hakyll",
          "partial": "Urls",
          "signature": "[Tag String]-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Html.html#v:getUrls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if an URL links to an external HTTP(S) source\n\u003c/p\u003e",
          "module": "Hakyll.Web.Html",
          "name": "isExternal",
          "package": "hakyll",
          "signature": "String -\u003e Bool",
          "source": "src/Hakyll-Web-Html.html#isExternal",
          "type": "function"
        },
        "index": {
          "description": "Check if an URL links to an external HTTP source",
          "hierarchy": "Hakyll Web Html",
          "module": "Hakyll.Web.Html",
          "name": "isExternal",
          "normalized": "String-\u003eBool",
          "package": "hakyll",
          "partial": "External",
          "signature": "String-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Html.html#v:isExternal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrip all HTML tags from a string\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e stripTags \"\u003cp\u003efoo\u003c/p\u003e\"\n\u003c/pre\u003e\u003cp\u003eResult:\n\u003c/p\u003e\u003cpre\u003e \"foo\"\n\u003c/pre\u003e\u003cp\u003eThis also works for incomplete tags\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e stripTags \"\u003cp\u003efoo\u003c/p\"\n\u003c/pre\u003e\u003cp\u003eResult:\n\u003c/p\u003e\u003cpre\u003e \"foo\"\n\u003c/pre\u003e",
          "module": "Hakyll.Web.Html",
          "name": "stripTags",
          "package": "hakyll",
          "signature": "String -\u003e String",
          "source": "src/Hakyll-Web-Html.html#stripTags",
          "type": "function"
        },
        "index": {
          "description": "Strip all HTML tags from string Example stripTags foo Result foo This also works for incomplete tags Example stripTags foo Result foo",
          "hierarchy": "Hakyll Web Html",
          "module": "Hakyll.Web.Html",
          "name": "stripTags",
          "normalized": "String-\u003eString",
          "package": "hakyll",
          "partial": "Tags",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Html.html#v:stripTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the relative url to the site root, for a given (absolute) url\n\u003c/p\u003e",
          "module": "Hakyll.Web.Html",
          "name": "toSiteRoot",
          "package": "hakyll",
          "signature": "String -\u003e String",
          "source": "src/Hakyll-Web-Html.html#toSiteRoot",
          "type": "function"
        },
        "index": {
          "description": "Get the relative url to the site root for given absolute url",
          "hierarchy": "Hakyll Web Html",
          "module": "Hakyll.Web.Html",
          "name": "toSiteRoot",
          "normalized": "String-\u003eString",
          "package": "hakyll",
          "partial": "Site Root",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Html.html#v:toSiteRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a filepath to an URL starting from the site root\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e toUrl \"foo/bar.html\"\n\u003c/pre\u003e\u003cp\u003eResult:\n\u003c/p\u003e\u003cpre\u003e \"/foo/bar.html\"\n\u003c/pre\u003e\u003cp\u003eThis also sanitizes the URL, e.g. converting spaces into '%20'\n\u003c/p\u003e",
          "module": "Hakyll.Web.Html",
          "name": "toUrl",
          "package": "hakyll",
          "signature": "FilePath -\u003e String",
          "source": "src/Hakyll-Web-Html.html#toUrl",
          "type": "function"
        },
        "index": {
          "description": "Convert filepath to an URL starting from the site root Example toUrl foo bar.html Result foo bar.html This also sanitizes the URL e.g converting spaces into",
          "hierarchy": "Hakyll Web Html",
          "module": "Hakyll.Web.Html",
          "name": "toUrl",
          "normalized": "FilePath-\u003eString",
          "package": "hakyll",
          "partial": "Url",
          "signature": "FilePath-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Html.html#v:toUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap over all tags in the document\n\u003c/p\u003e",
          "module": "Hakyll.Web.Html",
          "name": "withTags",
          "package": "hakyll",
          "signature": "(Tag String -\u003e Tag String) -\u003e String -\u003e String",
          "source": "src/Hakyll-Web-Html.html#withTags",
          "type": "function"
        },
        "index": {
          "description": "Map over all tags in the document",
          "hierarchy": "Hakyll Web Html",
          "module": "Hakyll.Web.Html",
          "name": "withTags",
          "normalized": "(Tag String-\u003eTag String)-\u003eString-\u003eString",
          "package": "hakyll",
          "partial": "Tags",
          "signature": "(Tag String-\u003eTag String)-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Html.html#v:withTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to each URL on a webpage\n\u003c/p\u003e",
          "module": "Hakyll.Web.Html",
          "name": "withUrls",
          "package": "hakyll",
          "signature": "(String -\u003e String) -\u003e String -\u003e String",
          "source": "src/Hakyll-Web-Html.html#withUrls",
          "type": "function"
        },
        "index": {
          "description": "Apply function to each URL on webpage",
          "hierarchy": "Hakyll Web Html",
          "module": "Hakyll.Web.Html",
          "name": "withUrls",
          "normalized": "(String-\u003eString)-\u003eString-\u003eString",
          "package": "hakyll",
          "partial": "Urls",
          "signature": "(String-\u003eString)-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Html.html#v:withUrls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Paginate",
          "name": "Paginate",
          "package": "hakyll",
          "source": "src/Hakyll-Web-Paginate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hakyll Web Paginate",
          "module": "Hakyll.Web.Paginate",
          "name": "Paginate",
          "package": "hakyll",
          "partial": "Paginate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Paginate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Paginate",
          "name": "PageNumber",
          "package": "hakyll",
          "source": "src/Hakyll-Web-Paginate.html#PageNumber",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hakyll Web Paginate",
          "module": "Hakyll.Web.Paginate",
          "name": "PageNumber",
          "package": "hakyll",
          "partial": "Page Number",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Paginate.html#t:PageNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData about paginators\n\u003c/p\u003e",
          "module": "Hakyll.Web.Paginate",
          "name": "Paginate",
          "package": "hakyll",
          "source": "src/Hakyll-Web-Paginate.html#Paginate",
          "type": "data"
        },
        "index": {
          "description": "Data about paginators",
          "hierarchy": "Hakyll Web Paginate",
          "module": "Hakyll.Web.Paginate",
          "name": "Paginate",
          "package": "hakyll",
          "partial": "Paginate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Paginate.html#t:Paginate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Paginate",
          "name": "Paginate",
          "package": "hakyll",
          "signature": "Paginate",
          "source": "src/Hakyll-Web-Paginate.html#Paginate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Paginate",
          "module": "Hakyll.Web.Paginate",
          "name": "Paginate",
          "package": "hakyll",
          "partial": "Paginate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Paginate.html#v:Paginate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Paginate",
          "name": "buildPaginate",
          "package": "hakyll",
          "signature": "Pattern -\u003e m Paginate",
          "source": "src/Hakyll-Web-Paginate.html#buildPaginate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Paginate",
          "module": "Hakyll.Web.Paginate",
          "name": "buildPaginate",
          "normalized": "Pattern-\u003ea Paginate",
          "package": "hakyll",
          "partial": "Paginate",
          "signature": "Pattern-\u003em Paginate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Paginate.html#v:buildPaginate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Paginate",
          "name": "buildPaginateWith",
          "package": "hakyll",
          "signature": "Int -\u003e (PageNumber -\u003e Identifier) -\u003e Pattern -\u003e m Paginate",
          "source": "src/Hakyll-Web-Paginate.html#buildPaginateWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Paginate",
          "module": "Hakyll.Web.Paginate",
          "name": "buildPaginateWith",
          "normalized": "Int-\u003e(PageNumber-\u003eIdentifier)-\u003ePattern-\u003ea Paginate",
          "package": "hakyll",
          "partial": "Paginate With",
          "signature": "Int-\u003e(PageNumber-\u003eIdentifier)-\u003ePattern-\u003em Paginate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Paginate.html#v:buildPaginateWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Paginate",
          "name": "paginateContext",
          "package": "hakyll",
          "signature": "Paginate -\u003e Context a",
          "source": "src/Hakyll-Web-Paginate.html#paginateContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Paginate",
          "module": "Hakyll.Web.Paginate",
          "name": "paginateContext",
          "normalized": "Paginate-\u003eContext a",
          "package": "hakyll",
          "partial": "Context",
          "signature": "Paginate-\u003eContext a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Paginate.html#v:paginateContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Paginate",
          "name": "paginateDependency",
          "package": "hakyll",
          "signature": "Dependency",
          "source": "src/Hakyll-Web-Paginate.html#Paginate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Paginate",
          "module": "Hakyll.Web.Paginate",
          "name": "paginateDependency",
          "package": "hakyll",
          "partial": "Dependency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Paginate.html#v:paginateDependency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Paginate",
          "name": "paginateMakeId",
          "package": "hakyll",
          "signature": "PageNumber -\u003e Identifier",
          "source": "src/Hakyll-Web-Paginate.html#Paginate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Paginate",
          "module": "Hakyll.Web.Paginate",
          "name": "paginateMakeId",
          "normalized": "PageNumber-\u003eIdentifier",
          "package": "hakyll",
          "partial": "Make Id",
          "signature": "PageNumber-\u003eIdentifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Paginate.html#v:paginateMakeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Paginate",
          "name": "paginatePages",
          "package": "hakyll",
          "signature": "Map PageNumber [Identifier]",
          "source": "src/Hakyll-Web-Paginate.html#Paginate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Paginate",
          "module": "Hakyll.Web.Paginate",
          "name": "paginatePages",
          "normalized": "Map PageNumber[Identifier]",
          "package": "hakyll",
          "partial": "Pages",
          "signature": "Map PageNumber[Identifier]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Paginate.html#v:paginatePages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Paginate",
          "name": "paginatePlaces",
          "package": "hakyll",
          "signature": "Map Identifier PageNumber",
          "source": "src/Hakyll-Web-Paginate.html#Paginate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Paginate",
          "module": "Hakyll.Web.Paginate",
          "name": "paginatePlaces",
          "package": "hakyll",
          "partial": "Places",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Paginate.html#v:paginatePlaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Paginate",
          "name": "paginateRules",
          "package": "hakyll",
          "signature": "Paginate -\u003e (PageNumber -\u003e Pattern -\u003e Rules ()) -\u003e Rules ()",
          "source": "src/Hakyll-Web-Paginate.html#paginateRules",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Paginate",
          "module": "Hakyll.Web.Paginate",
          "name": "paginateRules",
          "normalized": "Paginate-\u003e(PageNumber-\u003ePattern-\u003eRules())-\u003eRules()",
          "package": "hakyll",
          "partial": "Rules",
          "signature": "Paginate-\u003e(PageNumber-\u003ePattern-\u003eRules())-\u003eRules()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Paginate.html#v:paginateRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWraps pandocs bibiliography handling\n\u003c/p\u003e\u003cp\u003eIn order to add a bibliography, you will need a bibliography file (e.g.\n \u003ccode\u003e.bib\u003c/code\u003e) and a CSL file (\u003ccode\u003e.csl\u003c/code\u003e). Both need to be compiled with their\n respective compilers (\u003ccode\u003e\u003ca\u003ebiblioCompiler\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecslCompiler\u003c/a\u003e\u003c/code\u003e). Then, you can\n refer to these files when you use \u003ccode\u003epageReadPandocBiblio\u003c/code\u003e. This function also\n takes the reader options for completeness -- you can use\n \u003ccode\u003e\u003ca\u003edefaultHakyllReaderOptions\u003c/a\u003e\u003c/code\u003e if you're unsure.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hakyll.Web.Pandoc.Biblio",
          "name": "Biblio",
          "package": "hakyll",
          "source": "src/Hakyll-Web-Pandoc-Biblio.html",
          "type": "module"
        },
        "index": {
          "description": "Wraps pandocs bibiliography handling In order to add bibliography you will need bibliography file e.g bib and CSL file csl Both need to be compiled with their respective compilers biblioCompiler and cslCompiler Then you can refer to these files when you use pageReadPandocBiblio This function also takes the reader options for completeness you can use defaultHakyllReaderOptions if you re unsure",
          "hierarchy": "Hakyll Web Pandoc Biblio",
          "module": "Hakyll.Web.Pandoc.Biblio",
          "name": "Biblio",
          "package": "hakyll",
          "partial": "Biblio",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc-Biblio.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Pandoc.Biblio",
          "name": "Biblio",
          "package": "hakyll",
          "source": "src/Hakyll-Web-Pandoc-Biblio.html#Biblio",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Hakyll Web Pandoc Biblio",
          "module": "Hakyll.Web.Pandoc.Biblio",
          "name": "Biblio",
          "package": "hakyll",
          "partial": "Biblio",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc-Biblio.html#t:Biblio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Pandoc.Biblio",
          "name": "CSL",
          "package": "hakyll",
          "source": "src/Hakyll-Web-Pandoc-Biblio.html#CSL",
          "type": "data"
        },
        "index": {
          "hierarchy": "Hakyll Web Pandoc Biblio",
          "module": "Hakyll.Web.Pandoc.Biblio",
          "name": "CSL",
          "package": "hakyll",
          "partial": "CSL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc-Biblio.html#t:CSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Pandoc.Biblio",
          "name": "Biblio",
          "package": "hakyll",
          "signature": "Biblio [Reference]",
          "source": "src/Hakyll-Web-Pandoc-Biblio.html#Biblio",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Pandoc Biblio",
          "module": "Hakyll.Web.Pandoc.Biblio",
          "name": "Biblio",
          "normalized": "Biblio[Reference]",
          "package": "hakyll",
          "partial": "Biblio",
          "signature": "Biblio[Reference]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc-Biblio.html#v:Biblio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Pandoc.Biblio",
          "name": "biblioCompiler",
          "package": "hakyll",
          "signature": "Compiler (Item Biblio)",
          "source": "src/Hakyll-Web-Pandoc-Biblio.html#biblioCompiler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Pandoc Biblio",
          "module": "Hakyll.Web.Pandoc.Biblio",
          "name": "biblioCompiler",
          "package": "hakyll",
          "partial": "Compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc-Biblio.html#v:biblioCompiler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Pandoc.Biblio",
          "name": "cslCompiler",
          "package": "hakyll",
          "signature": "Compiler (Item CSL)",
          "source": "src/Hakyll-Web-Pandoc-Biblio.html#cslCompiler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Pandoc Biblio",
          "module": "Hakyll.Web.Pandoc.Biblio",
          "name": "cslCompiler",
          "package": "hakyll",
          "partial": "Compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc-Biblio.html#v:cslCompiler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Pandoc.Biblio",
          "name": "readPandocBiblio",
          "package": "hakyll",
          "signature": "ReaderOptions -\u003e Item CSL -\u003e Item Biblio -\u003e Item String -\u003e Compiler (Item Pandoc)",
          "source": "src/Hakyll-Web-Pandoc-Biblio.html#readPandocBiblio",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Pandoc Biblio",
          "module": "Hakyll.Web.Pandoc.Biblio",
          "name": "readPandocBiblio",
          "normalized": "ReaderOptions-\u003eItem CSL-\u003eItem Biblio-\u003eItem String-\u003eCompiler(Item Pandoc)",
          "package": "hakyll",
          "partial": "Pandoc Biblio",
          "signature": "ReaderOptions-\u003eItem CSL-\u003eItem Biblio-\u003eItem String-\u003eCompiler(Item Pandoc)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc-Biblio.html#v:readPandocBiblio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module dealing with pandoc file extensions and associated file types\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "FileType",
          "package": "hakyll",
          "source": "src/Hakyll-Web-Pandoc-FileType.html",
          "type": "module"
        },
        "index": {
          "description": "module dealing with pandoc file extensions and associated file types",
          "hierarchy": "Hakyll Web Pandoc FileType",
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "FileType",
          "package": "hakyll",
          "partial": "File Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc-FileType.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatatype to represent the different file types Hakyll can deal with by\n default\n\u003c/p\u003e",
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "FileType",
          "package": "hakyll",
          "source": "src/Hakyll-Web-Pandoc-FileType.html#FileType",
          "type": "data"
        },
        "index": {
          "description": "Datatype to represent the different file types Hakyll can deal with by default",
          "hierarchy": "Hakyll Web Pandoc FileType",
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "FileType",
          "package": "hakyll",
          "partial": "File Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc-FileType.html#t:FileType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "Binary",
          "package": "hakyll",
          "signature": "Binary",
          "source": "src/Hakyll-Web-Pandoc-FileType.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Pandoc FileType",
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "Binary",
          "package": "hakyll",
          "partial": "Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc-FileType.html#v:Binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "Css",
          "package": "hakyll",
          "signature": "Css",
          "source": "src/Hakyll-Web-Pandoc-FileType.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Pandoc FileType",
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "Css",
          "package": "hakyll",
          "partial": "Css",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc-FileType.html#v:Css"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "Html",
          "package": "hakyll",
          "signature": "Html",
          "source": "src/Hakyll-Web-Pandoc-FileType.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Pandoc FileType",
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "Html",
          "package": "hakyll",
          "partial": "Html",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc-FileType.html#v:Html"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "LaTeX",
          "package": "hakyll",
          "signature": "LaTeX",
          "source": "src/Hakyll-Web-Pandoc-FileType.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Pandoc FileType",
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "LaTeX",
          "package": "hakyll",
          "partial": "La Te",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc-FileType.html#v:LaTeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "LiterateHaskell",
          "package": "hakyll",
          "signature": "LiterateHaskell FileType",
          "source": "src/Hakyll-Web-Pandoc-FileType.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Pandoc FileType",
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "LiterateHaskell",
          "package": "hakyll",
          "partial": "Literate Haskell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc-FileType.html#v:LiterateHaskell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "Markdown",
          "package": "hakyll",
          "signature": "Markdown",
          "source": "src/Hakyll-Web-Pandoc-FileType.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Pandoc FileType",
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "Markdown",
          "package": "hakyll",
          "partial": "Markdown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc-FileType.html#v:Markdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "OrgMode",
          "package": "hakyll",
          "signature": "OrgMode",
          "source": "src/Hakyll-Web-Pandoc-FileType.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Pandoc FileType",
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "OrgMode",
          "package": "hakyll",
          "partial": "Org Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc-FileType.html#v:OrgMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "PlainText",
          "package": "hakyll",
          "signature": "PlainText",
          "source": "src/Hakyll-Web-Pandoc-FileType.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Pandoc FileType",
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "PlainText",
          "package": "hakyll",
          "partial": "Plain Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc-FileType.html#v:PlainText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "Rst",
          "package": "hakyll",
          "signature": "Rst",
          "source": "src/Hakyll-Web-Pandoc-FileType.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Pandoc FileType",
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "Rst",
          "package": "hakyll",
          "partial": "Rst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc-FileType.html#v:Rst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "Textile",
          "package": "hakyll",
          "signature": "Textile",
          "source": "src/Hakyll-Web-Pandoc-FileType.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Pandoc FileType",
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "Textile",
          "package": "hakyll",
          "partial": "Textile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc-FileType.html#v:Textile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the file type for a certain file. The type is determined by extension.\n\u003c/p\u003e",
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "fileType",
          "package": "hakyll",
          "signature": "FilePath -\u003e FileType",
          "source": "src/Hakyll-Web-Pandoc-FileType.html#fileType",
          "type": "function"
        },
        "index": {
          "description": "Get the file type for certain file The type is determined by extension",
          "hierarchy": "Hakyll Web Pandoc FileType",
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "fileType",
          "normalized": "FilePath-\u003eFileType",
          "package": "hakyll",
          "partial": "Type",
          "signature": "FilePath-\u003eFileType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc-FileType.html#v:fileType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the file type for the current file\n\u003c/p\u003e",
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "itemFileType",
          "package": "hakyll",
          "signature": "Item a -\u003e FileType",
          "source": "src/Hakyll-Web-Pandoc-FileType.html#itemFileType",
          "type": "function"
        },
        "index": {
          "description": "Get the file type for the current file",
          "hierarchy": "Hakyll Web Pandoc FileType",
          "module": "Hakyll.Web.Pandoc.FileType",
          "name": "itemFileType",
          "normalized": "Item a-\u003eFileType",
          "package": "hakyll",
          "partial": "File Type",
          "signature": "Item a-\u003eFileType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc-FileType.html#v:itemFileType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule exporting convenient pandoc bindings\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hakyll.Web.Pandoc",
          "name": "Pandoc",
          "package": "hakyll",
          "source": "src/Hakyll-Web-Pandoc.html",
          "type": "module"
        },
        "index": {
          "description": "Module exporting convenient pandoc bindings",
          "hierarchy": "Hakyll Web Pandoc",
          "module": "Hakyll.Web.Pandoc",
          "name": "Pandoc",
          "package": "hakyll",
          "partial": "Pandoc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default reader options for pandoc parsing in hakyll\n\u003c/p\u003e",
          "module": "Hakyll.Web.Pandoc",
          "name": "defaultHakyllReaderOptions",
          "package": "hakyll",
          "signature": "ReaderOptions",
          "source": "src/Hakyll-Web-Pandoc.html#defaultHakyllReaderOptions",
          "type": "function"
        },
        "index": {
          "description": "The default reader options for pandoc parsing in hakyll",
          "hierarchy": "Hakyll Web Pandoc",
          "module": "Hakyll.Web.Pandoc",
          "name": "defaultHakyllReaderOptions",
          "package": "hakyll",
          "partial": "Hakyll Reader Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc.html#v:defaultHakyllReaderOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default writer options for pandoc rendering in hakyll\n\u003c/p\u003e",
          "module": "Hakyll.Web.Pandoc",
          "name": "defaultHakyllWriterOptions",
          "package": "hakyll",
          "signature": "WriterOptions",
          "source": "src/Hakyll-Web-Pandoc.html#defaultHakyllWriterOptions",
          "type": "function"
        },
        "index": {
          "description": "The default writer options for pandoc rendering in hakyll",
          "hierarchy": "Hakyll Web Pandoc",
          "module": "Hakyll.Web.Pandoc",
          "name": "defaultHakyllWriterOptions",
          "package": "hakyll",
          "partial": "Hakyll Writer Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc.html#v:defaultHakyllWriterOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a page render using pandoc\n\u003c/p\u003e",
          "module": "Hakyll.Web.Pandoc",
          "name": "pandocCompiler",
          "package": "hakyll",
          "signature": "Compiler (Item String)",
          "source": "src/Hakyll-Web-Pandoc.html#pandocCompiler",
          "type": "function"
        },
        "index": {
          "description": "Read page render using pandoc",
          "hierarchy": "Hakyll Web Pandoc",
          "module": "Hakyll.Web.Pandoc",
          "name": "pandocCompiler",
          "package": "hakyll",
          "partial": "Compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc.html#v:pandocCompiler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003epandocCompiler\u003c/a\u003e\u003c/code\u003e which allows you to specify your own pandoc\n options\n\u003c/p\u003e",
          "module": "Hakyll.Web.Pandoc",
          "name": "pandocCompilerWith",
          "package": "hakyll",
          "signature": "ReaderOptions -\u003e WriterOptions -\u003e Compiler (Item String)",
          "source": "src/Hakyll-Web-Pandoc.html#pandocCompilerWith",
          "type": "function"
        },
        "index": {
          "description": "version of pandocCompiler which allows you to specify your own pandoc options",
          "hierarchy": "Hakyll Web Pandoc",
          "module": "Hakyll.Web.Pandoc",
          "name": "pandocCompilerWith",
          "normalized": "ReaderOptions-\u003eWriterOptions-\u003eCompiler(Item String)",
          "package": "hakyll",
          "partial": "Compiler With",
          "signature": "ReaderOptions-\u003eWriterOptions-\u003eCompiler(Item String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc.html#v:pandocCompilerWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn extension of \u003ccode\u003e\u003ca\u003epandocCompilerWith\u003c/a\u003e\u003c/code\u003e which allows you to specify a custom\n pandoc transformation for the content\n\u003c/p\u003e",
          "module": "Hakyll.Web.Pandoc",
          "name": "pandocCompilerWithTransform",
          "package": "hakyll",
          "signature": "ReaderOptions -\u003e WriterOptions -\u003e (Pandoc -\u003e Pandoc) -\u003e Compiler (Item String)",
          "source": "src/Hakyll-Web-Pandoc.html#pandocCompilerWithTransform",
          "type": "function"
        },
        "index": {
          "description": "An extension of pandocCompilerWith which allows you to specify custom pandoc transformation for the content",
          "hierarchy": "Hakyll Web Pandoc",
          "module": "Hakyll.Web.Pandoc",
          "name": "pandocCompilerWithTransform",
          "normalized": "ReaderOptions-\u003eWriterOptions-\u003e(Pandoc-\u003ePandoc)-\u003eCompiler(Item String)",
          "package": "hakyll",
          "partial": "Compiler With Transform",
          "signature": "ReaderOptions-\u003eWriterOptions-\u003e(Pandoc-\u003ePandoc)-\u003eCompiler(Item String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc.html#v:pandocCompilerWithTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a string using pandoc, with the default options\n\u003c/p\u003e",
          "module": "Hakyll.Web.Pandoc",
          "name": "readPandoc",
          "package": "hakyll",
          "signature": "Item String-\u003e Item Pandoc",
          "type": "function"
        },
        "index": {
          "description": "Read string using pandoc with the default options",
          "hierarchy": "Hakyll Web Pandoc",
          "module": "Hakyll.Web.Pandoc",
          "name": "readPandoc",
          "normalized": "Item String-\u003eItem Pandoc",
          "package": "hakyll",
          "partial": "Pandoc",
          "signature": "Item String-\u003eItem Pandoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc.html#v:readPandoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a string using pandoc, with the supplied options\n\u003c/p\u003e",
          "module": "Hakyll.Web.Pandoc",
          "name": "readPandocWith",
          "package": "hakyll",
          "signature": "ReaderOptions-\u003e Item String-\u003e Item Pandoc",
          "type": "function"
        },
        "index": {
          "description": "Read string using pandoc with the supplied options",
          "hierarchy": "Hakyll Web Pandoc",
          "module": "Hakyll.Web.Pandoc",
          "name": "readPandocWith",
          "normalized": "ReaderOptions-\u003eItem String-\u003eItem Pandoc",
          "package": "hakyll",
          "partial": "Pandoc With",
          "signature": "ReaderOptions-\u003eItem String-\u003eItem Pandoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc.html#v:readPandocWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the resource using pandoc\n\u003c/p\u003e",
          "module": "Hakyll.Web.Pandoc",
          "name": "renderPandoc",
          "package": "hakyll",
          "signature": "Item String -\u003e Item String",
          "source": "src/Hakyll-Web-Pandoc.html#renderPandoc",
          "type": "function"
        },
        "index": {
          "description": "Render the resource using pandoc",
          "hierarchy": "Hakyll Web Pandoc",
          "module": "Hakyll.Web.Pandoc",
          "name": "renderPandoc",
          "normalized": "Item String-\u003eItem String",
          "package": "hakyll",
          "partial": "Pandoc",
          "signature": "Item String-\u003eItem String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc.html#v:renderPandoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the resource using pandoc\n\u003c/p\u003e",
          "module": "Hakyll.Web.Pandoc",
          "name": "renderPandocWith",
          "package": "hakyll",
          "signature": "ReaderOptions -\u003e WriterOptions -\u003e Item String -\u003e Item String",
          "source": "src/Hakyll-Web-Pandoc.html#renderPandocWith",
          "type": "function"
        },
        "index": {
          "description": "Render the resource using pandoc",
          "hierarchy": "Hakyll Web Pandoc",
          "module": "Hakyll.Web.Pandoc",
          "name": "renderPandocWith",
          "normalized": "ReaderOptions-\u003eWriterOptions-\u003eItem String-\u003eItem String",
          "package": "hakyll",
          "partial": "Pandoc With",
          "signature": "ReaderOptions-\u003eWriterOptions-\u003eItem String-\u003eItem String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc.html#v:renderPandocWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a document (as HTML) using pandoc, with the default options\n\u003c/p\u003e",
          "module": "Hakyll.Web.Pandoc",
          "name": "writePandoc",
          "package": "hakyll",
          "signature": "Item Pandoc-\u003e Item String",
          "type": "function"
        },
        "index": {
          "description": "Write document as HTML using pandoc with the default options",
          "hierarchy": "Hakyll Web Pandoc",
          "module": "Hakyll.Web.Pandoc",
          "name": "writePandoc",
          "normalized": "Item Pandoc-\u003eItem String",
          "package": "hakyll",
          "partial": "Pandoc",
          "signature": "Item Pandoc-\u003eItem String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc.html#v:writePandoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a document (as HTML) using pandoc, with the supplied options\n\u003c/p\u003e",
          "module": "Hakyll.Web.Pandoc",
          "name": "writePandocWith",
          "package": "hakyll",
          "signature": "WriterOptions-\u003e Item Pandoc-\u003e Item String",
          "type": "function"
        },
        "index": {
          "description": "Write document as HTML using pandoc with the supplied options",
          "hierarchy": "Hakyll Web Pandoc",
          "module": "Hakyll.Web.Pandoc",
          "name": "writePandocWith",
          "normalized": "WriterOptions-\u003eItem Pandoc-\u003eItem String",
          "package": "hakyll",
          "partial": "Pandoc With",
          "signature": "WriterOptions-\u003eItem Pandoc-\u003eItem String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Pandoc.html#v:writePandocWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module containing some specialized functions to deal with tags. It\n assumes you follow some conventions.\n\u003c/p\u003e\u003cp\u003eWe support two types of tags: tags and categories.\n\u003c/p\u003e\u003cp\u003eTo use default tags, use \u003ccode\u003e\u003ca\u003ebuildTags\u003c/a\u003e\u003c/code\u003e. Tags are placed in a comma-separated\n metadata field like this:\n\u003c/p\u003e\u003cpre\u003e ---\n author: Philip K. Dick\n title: Do androids dream of electric sheep?\n tags: future, science fiction, humanoid\n ---\n The novel is set in a post-apocalyptic near future, where the Earth and\n its populations have been damaged greatly by Nuclear...\n\u003c/pre\u003e\u003cp\u003eTo use categories, use the \u003ccode\u003e\u003ca\u003ebuildCategories\u003c/a\u003e\u003c/code\u003e function. Categories are\n determined by the directory a page is in, for example, the post\n\u003c/p\u003e\u003cpre\u003e posts/coding/2010-01-28-hakyll-categories.markdown\n\u003c/pre\u003e\u003cp\u003ewill receive the \u003ccode\u003ecoding\u003c/code\u003e category.\n\u003c/p\u003e\u003cp\u003eAdvanced users may implement custom systems using \u003ccode\u003e\u003ca\u003ebuildTagsWith\u003c/a\u003e\u003c/code\u003e if desired.\n\u003c/p\u003e\u003cp\u003eIn the above example, we would want to create a page which lists all pages in\n the \u003ccode\u003ecoding\u003c/code\u003e category, for example, with the \u003ccode\u003e\u003ca\u003eIdentifier\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e tags/coding.html\n\u003c/pre\u003e\u003cp\u003eThis is where the first parameter of \u003ccode\u003e\u003ca\u003ebuildTags\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ebuildCategories\u003c/a\u003e\u003c/code\u003e comes\n in. In the above case, we used the function:\n\u003c/p\u003e\u003cpre\u003e fromCapture \"tags/*.html\" :: String -\u003e Identifier\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etagsRules\u003c/a\u003e\u003c/code\u003e function lets you generate such a page for each tag in the\n \u003ccode\u003e\u003ca\u003eRules\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hakyll.Web.Tags",
          "name": "Tags",
          "package": "hakyll",
          "source": "src/Hakyll-Web-Tags.html",
          "type": "module"
        },
        "index": {
          "description": "This module containing some specialized functions to deal with tags It assumes you follow some conventions We support two types of tags tags and categories To use default tags use buildTags Tags are placed in comma-separated metadata field like this author Philip Dick title Do androids dream of electric sheep tags future science fiction humanoid The novel is set in post-apocalyptic near future where the Earth and its populations have been damaged greatly by Nuclear To use categories use the buildCategories function Categories are determined by the directory page is in for example the post posts coding hakyll-categories.markdown will receive the coding category Advanced users may implement custom systems using buildTagsWith if desired In the above example we would want to create page which lists all pages in the coding category for example with the Identifier tags coding.html This is where the first parameter of buildTags and buildCategories comes in In the above case we used the function fromCapture tags html String Identifier The tagsRules function lets you generate such page for each tag in the Rules monad",
          "hierarchy": "Hakyll Web Tags",
          "module": "Hakyll.Web.Tags",
          "name": "Tags",
          "package": "hakyll",
          "partial": "Tags",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Tags.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData about tags\n\u003c/p\u003e",
          "module": "Hakyll.Web.Tags",
          "name": "Tags",
          "package": "hakyll",
          "source": "src/Hakyll-Web-Tags.html#Tags",
          "type": "data"
        },
        "index": {
          "description": "Data about tags",
          "hierarchy": "Hakyll Web Tags",
          "module": "Hakyll.Web.Tags",
          "name": "Tags",
          "package": "hakyll",
          "partial": "Tags",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Tags.html#t:Tags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Tags",
          "name": "Tags",
          "package": "hakyll",
          "signature": "Tags",
          "source": "src/Hakyll-Web-Tags.html#Tags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Tags",
          "module": "Hakyll.Web.Tags",
          "name": "Tags",
          "package": "hakyll",
          "partial": "Tags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Tags.html#v:Tags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Tags",
          "name": "buildCategories",
          "package": "hakyll",
          "signature": "Pattern -\u003e (String -\u003e Identifier) -\u003e m Tags",
          "source": "src/Hakyll-Web-Tags.html#buildCategories",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Tags",
          "module": "Hakyll.Web.Tags",
          "name": "buildCategories",
          "normalized": "Pattern-\u003e(String-\u003eIdentifier)-\u003ea Tags",
          "package": "hakyll",
          "partial": "Categories",
          "signature": "Pattern-\u003e(String-\u003eIdentifier)-\u003em Tags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Tags.html#v:buildCategories"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Tags",
          "name": "buildTags",
          "package": "hakyll",
          "signature": "Pattern -\u003e (String -\u003e Identifier) -\u003e m Tags",
          "source": "src/Hakyll-Web-Tags.html#buildTags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Tags",
          "module": "Hakyll.Web.Tags",
          "name": "buildTags",
          "normalized": "Pattern-\u003e(String-\u003eIdentifier)-\u003ea Tags",
          "package": "hakyll",
          "partial": "Tags",
          "signature": "Pattern-\u003e(String-\u003eIdentifier)-\u003em Tags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Tags.html#v:buildTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHigher-order function to read tags\n\u003c/p\u003e",
          "module": "Hakyll.Web.Tags",
          "name": "buildTagsWith",
          "package": "hakyll",
          "signature": "(Identifier -\u003e m [String]) -\u003e Pattern -\u003e (String -\u003e Identifier) -\u003e m Tags",
          "source": "src/Hakyll-Web-Tags.html#buildTagsWith",
          "type": "function"
        },
        "index": {
          "description": "Higher-order function to read tags",
          "hierarchy": "Hakyll Web Tags",
          "module": "Hakyll.Web.Tags",
          "name": "buildTagsWith",
          "normalized": "(Identifier-\u003ea[String])-\u003ePattern-\u003e(String-\u003eIdentifier)-\u003ea Tags",
          "package": "hakyll",
          "partial": "Tags With",
          "signature": "(Identifier-\u003em[String])-\u003ePattern-\u003e(String-\u003eIdentifier)-\u003em Tags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Tags.html#v:buildTagsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample sorting function that compares tags case insensitively.\n\u003c/p\u003e",
          "module": "Hakyll.Web.Tags",
          "name": "caseInsensitiveTags",
          "package": "hakyll",
          "signature": "(String, [Identifier]) -\u003e (String, [Identifier]) -\u003e Ordering",
          "source": "src/Hakyll-Web-Tags.html#caseInsensitiveTags",
          "type": "function"
        },
        "index": {
          "description": "Sample sorting function that compares tags case insensitively",
          "hierarchy": "Hakyll Web Tags",
          "module": "Hakyll.Web.Tags",
          "name": "caseInsensitiveTags",
          "normalized": "(String,[Identifier])-\u003e(String,[Identifier])-\u003eOrdering",
          "package": "hakyll",
          "partial": "Insensitive Tags",
          "signature": "(String,[Identifier])-\u003e(String,[Identifier])-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Tags.html#v:caseInsensitiveTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender the category in a link\n\u003c/p\u003e",
          "module": "Hakyll.Web.Tags",
          "name": "categoryField",
          "package": "hakyll",
          "signature": "String-\u003e Tags-\u003e Context a",
          "type": "function"
        },
        "index": {
          "description": "Render the category in link",
          "hierarchy": "Hakyll Web Tags",
          "module": "Hakyll.Web.Tags",
          "name": "categoryField",
          "normalized": "String-\u003eTags-\u003eContext a",
          "package": "hakyll",
          "partial": "Field",
          "signature": "String-\u003eTags-\u003eContext a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Tags.html#v:categoryField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain tags from a page in the default way: parse them from the \u003ccode\u003etags\u003c/code\u003e\n metadata field.\n\u003c/p\u003e",
          "module": "Hakyll.Web.Tags",
          "name": "getTags",
          "package": "hakyll",
          "signature": "Identifier -\u003e m [String]",
          "source": "src/Hakyll-Web-Tags.html#getTags",
          "type": "function"
        },
        "index": {
          "description": "Obtain tags from page in the default way parse them from the tags metadata field",
          "hierarchy": "Hakyll Web Tags",
          "module": "Hakyll.Web.Tags",
          "name": "getTags",
          "normalized": "Identifier-\u003ea[String]",
          "package": "hakyll",
          "partial": "Tags",
          "signature": "Identifier-\u003em[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Tags.html#v:getTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a tag cloud in HTML\n\u003c/p\u003e",
          "module": "Hakyll.Web.Tags",
          "name": "renderTagCloud",
          "package": "hakyll",
          "signature": "Double-\u003e Double-\u003e Tags-\u003e Compiler String",
          "type": "function"
        },
        "index": {
          "description": "Render tag cloud in HTML",
          "hierarchy": "Hakyll Web Tags",
          "module": "Hakyll.Web.Tags",
          "name": "renderTagCloud",
          "normalized": "Double-\u003eDouble-\u003eTags-\u003eCompiler String",
          "package": "hakyll",
          "partial": "Tag Cloud",
          "signature": "Double-\u003eDouble-\u003eTags-\u003eCompiler String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Tags.html#v:renderTagCloud"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a tag cloud in HTML\n\u003c/p\u003e",
          "module": "Hakyll.Web.Tags",
          "name": "renderTagCloudWith",
          "package": "hakyll",
          "signature": "(Double -\u003e Double -\u003e String -\u003e String -\u003e Int -\u003e Int -\u003e Int -\u003e String)-\u003e ([String] -\u003e String)-\u003e Double-\u003e Double-\u003e Tags-\u003e Compiler String",
          "type": "function"
        },
        "index": {
          "description": "Render tag cloud in HTML",
          "hierarchy": "Hakyll Web Tags",
          "module": "Hakyll.Web.Tags",
          "name": "renderTagCloudWith",
          "normalized": "(Double-\u003eDouble-\u003eString-\u003eString-\u003eInt-\u003eInt-\u003eInt-\u003eString)-\u003e([String]-\u003eString)-\u003eDouble-\u003eDouble-\u003eTags-\u003eCompiler String",
          "package": "hakyll",
          "partial": "Tag Cloud With",
          "signature": "(Double-\u003eDouble-\u003eString-\u003eString-\u003eInt-\u003eInt-\u003eInt-\u003eString)-\u003e([String]-\u003eString)-\u003eDouble-\u003eDouble-\u003eTags-\u003eCompiler String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Tags.html#v:renderTagCloudWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a simple tag list in HTML, with the tag count next to the item\n TODO: Maybe produce a Context here\n\u003c/p\u003e",
          "module": "Hakyll.Web.Tags",
          "name": "renderTagList",
          "package": "hakyll",
          "signature": "Tags -\u003e Compiler String",
          "source": "src/Hakyll-Web-Tags.html#renderTagList",
          "type": "function"
        },
        "index": {
          "description": "Render simple tag list in HTML with the tag count next to the item TODO Maybe produce Context here",
          "hierarchy": "Hakyll Web Tags",
          "module": "Hakyll.Web.Tags",
          "name": "renderTagList",
          "normalized": "Tags-\u003eCompiler String",
          "package": "hakyll",
          "partial": "Tag List",
          "signature": "Tags-\u003eCompiler String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Tags.html#v:renderTagList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender tags in HTML (the flexible higher-order function)\n\u003c/p\u003e",
          "module": "Hakyll.Web.Tags",
          "name": "renderTags",
          "package": "hakyll",
          "signature": "(String -\u003e String -\u003e Int -\u003e Int -\u003e Int -\u003e String)-\u003e ([String] -\u003e String)-\u003e Tags-\u003e Compiler String",
          "type": "function"
        },
        "index": {
          "description": "Render tags in HTML the flexible higher-order function",
          "hierarchy": "Hakyll Web Tags",
          "module": "Hakyll.Web.Tags",
          "name": "renderTags",
          "normalized": "(String-\u003eString-\u003eInt-\u003eInt-\u003eInt-\u003eString)-\u003e([String]-\u003eString)-\u003eTags-\u003eCompiler String",
          "package": "hakyll",
          "partial": "Tags",
          "signature": "(String-\u003eString-\u003eInt-\u003eInt-\u003eInt-\u003eString)-\u003e([String]-\u003eString)-\u003eTags-\u003eCompiler String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Tags.html#v:renderTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort tags using supplied function. First element of the tuple passed to\n the comparing function is the actual tag name.\n\u003c/p\u003e",
          "module": "Hakyll.Web.Tags",
          "name": "sortTagsBy",
          "package": "hakyll",
          "signature": "((String, [Identifier]) -\u003e (String, [Identifier]) -\u003e Ordering) -\u003e Tags -\u003e Tags",
          "source": "src/Hakyll-Web-Tags.html#sortTagsBy",
          "type": "function"
        },
        "index": {
          "description": "Sort tags using supplied function First element of the tuple passed to the comparing function is the actual tag name",
          "hierarchy": "Hakyll Web Tags",
          "module": "Hakyll.Web.Tags",
          "name": "sortTagsBy",
          "normalized": "((String,[Identifier])-\u003e(String,[Identifier])-\u003eOrdering)-\u003eTags-\u003eTags",
          "package": "hakyll",
          "partial": "Tags By",
          "signature": "((String,[Identifier])-\u003e(String,[Identifier])-\u003eOrdering)-\u003eTags-\u003eTags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Tags.html#v:sortTagsBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a tag cloud in HTML as a context\n\u003c/p\u003e",
          "module": "Hakyll.Web.Tags",
          "name": "tagCloudField",
          "package": "hakyll",
          "signature": "String-\u003e Double-\u003e Double-\u003e Tags-\u003e Context a",
          "type": "function"
        },
        "index": {
          "description": "Render tag cloud in HTML as context",
          "hierarchy": "Hakyll Web Tags",
          "module": "Hakyll.Web.Tags",
          "name": "tagCloudField",
          "normalized": "String-\u003eDouble-\u003eDouble-\u003eTags-\u003eContext a",
          "package": "hakyll",
          "partial": "Cloud Field",
          "signature": "String-\u003eDouble-\u003eDouble-\u003eTags-\u003eContext a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Tags.html#v:tagCloudField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a tag cloud in HTML as a context\n\u003c/p\u003e",
          "module": "Hakyll.Web.Tags",
          "name": "tagCloudFieldWith",
          "package": "hakyll",
          "signature": "String-\u003e (Double -\u003e Double -\u003e String -\u003e String -\u003e Int -\u003e Int -\u003e Int -\u003e String)-\u003e ([String] -\u003e String)-\u003e Double-\u003e Double-\u003e Tags-\u003e Context a",
          "type": "function"
        },
        "index": {
          "description": "Render tag cloud in HTML as context",
          "hierarchy": "Hakyll Web Tags",
          "module": "Hakyll.Web.Tags",
          "name": "tagCloudFieldWith",
          "normalized": "String-\u003e(Double-\u003eDouble-\u003eString-\u003eString-\u003eInt-\u003eInt-\u003eInt-\u003eString)-\u003e([String]-\u003eString)-\u003eDouble-\u003eDouble-\u003eTags-\u003eContext a",
          "package": "hakyll",
          "partial": "Cloud Field With",
          "signature": "String-\u003e(Double-\u003eDouble-\u003eString-\u003eString-\u003eInt-\u003eInt-\u003eInt-\u003eString)-\u003e([String]-\u003eString)-\u003eDouble-\u003eDouble-\u003eTags-\u003eContext a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Tags.html#v:tagCloudFieldWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Tags",
          "name": "tagsDependency",
          "package": "hakyll",
          "signature": "Dependency",
          "source": "src/Hakyll-Web-Tags.html#Tags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Tags",
          "module": "Hakyll.Web.Tags",
          "name": "tagsDependency",
          "package": "hakyll",
          "partial": "Dependency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Tags.html#v:tagsDependency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender tags with links\n\u003c/p\u003e",
          "module": "Hakyll.Web.Tags",
          "name": "tagsField",
          "package": "hakyll",
          "signature": "String-\u003e Tags-\u003e Context a",
          "type": "function"
        },
        "index": {
          "description": "Render tags with links",
          "hierarchy": "Hakyll Web Tags",
          "module": "Hakyll.Web.Tags",
          "name": "tagsField",
          "normalized": "String-\u003eTags-\u003eContext a",
          "package": "hakyll",
          "partial": "Field",
          "signature": "String-\u003eTags-\u003eContext a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Tags.html#v:tagsField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender tags with links with custom functions to get tags and to\n render links\n\u003c/p\u003e",
          "module": "Hakyll.Web.Tags",
          "name": "tagsFieldWith",
          "package": "hakyll",
          "signature": "(Identifier -\u003e Compiler [String])-\u003e (String -\u003e Maybe FilePath -\u003e Maybe Html)-\u003e ([Html] -\u003e Html)-\u003e String-\u003e Tags-\u003e Context a",
          "type": "function"
        },
        "index": {
          "description": "Render tags with links with custom functions to get tags and to render links",
          "hierarchy": "Hakyll Web Tags",
          "module": "Hakyll.Web.Tags",
          "name": "tagsFieldWith",
          "normalized": "(Identifier-\u003eCompiler[String])-\u003e(String-\u003eMaybe FilePath-\u003eMaybe Html)-\u003e([Html]-\u003eHtml)-\u003eString-\u003eTags-\u003eContext a",
          "package": "hakyll",
          "partial": "Field With",
          "signature": "(Identifier-\u003eCompiler[String])-\u003e(String-\u003eMaybe FilePath-\u003eMaybe Html)-\u003e([Html]-\u003eHtml)-\u003eString-\u003eTags-\u003eContext a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Tags.html#v:tagsFieldWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Tags",
          "name": "tagsMakeId",
          "package": "hakyll",
          "signature": "String -\u003e Identifier",
          "source": "src/Hakyll-Web-Tags.html#Tags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Tags",
          "module": "Hakyll.Web.Tags",
          "name": "tagsMakeId",
          "normalized": "String-\u003eIdentifier",
          "package": "hakyll",
          "partial": "Make Id",
          "signature": "String-\u003eIdentifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Tags.html#v:tagsMakeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Tags",
          "name": "tagsMap",
          "package": "hakyll",
          "signature": "[(String, [Identifier])]",
          "source": "src/Hakyll-Web-Tags.html#Tags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Tags",
          "module": "Hakyll.Web.Tags",
          "name": "tagsMap",
          "normalized": "[(String,[Identifier])]",
          "package": "hakyll",
          "partial": "Map",
          "signature": "[(String,[Identifier])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Tags.html#v:tagsMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Tags",
          "name": "tagsRules",
          "package": "hakyll",
          "signature": "Tags -\u003e (String -\u003e Pattern -\u003e Rules ()) -\u003e Rules ()",
          "source": "src/Hakyll-Web-Tags.html#tagsRules",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Tags",
          "module": "Hakyll.Web.Tags",
          "name": "tagsRules",
          "normalized": "Tags-\u003e(String-\u003ePattern-\u003eRules())-\u003eRules()",
          "package": "hakyll",
          "partial": "Rules",
          "signature": "Tags-\u003e(String-\u003ePattern-\u003eRules())-\u003eRules()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Tags.html#v:tagsRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Template.Context",
          "name": "Context",
          "package": "hakyll",
          "source": "src/Hakyll-Web-Template-Context.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hakyll Web Template Context",
          "module": "Hakyll.Web.Template.Context",
          "name": "Context",
          "package": "hakyll",
          "partial": "Context",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-Context.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e monoid. Please note that the order in which you\n compose the items is important. For example in\n\u003c/p\u003e\u003cpre\u003e field \"A\" f1 \u003c\u003e field \"A\" f2\n\u003c/pre\u003e\u003cp\u003ethe first context will overwrite the second. This is especially\n important when something is being composed with\n \u003ccode\u003e\u003ca\u003emetadataField\u003c/a\u003e\u003c/code\u003e (or \u003ccode\u003e\u003ca\u003edefaultContext\u003c/a\u003e\u003c/code\u003e). If you want your context to be\n overwritten by the metadata fields, compose it from the right:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003emetadataField\u003c/a\u003e\u003c/code\u003e \u003c\u003e field \"date\" fDate\n\u003c/pre\u003e",
          "module": "Hakyll.Web.Template.Context",
          "name": "Context",
          "package": "hakyll",
          "source": "src/Hakyll-Web-Template-Context.html#Context",
          "type": "newtype"
        },
        "index": {
          "description": "The Context monoid Please note that the order in which you compose the items is important For example in field f1 field f2 the first context will overwrite the second This is especially important when something is being composed with metadataField or defaultContext If you want your context to be overwritten by the metadata fields compose it from the right metadataField field date fDate",
          "hierarchy": "Hakyll Web Template Context",
          "module": "Hakyll.Web.Template.Context",
          "name": "Context",
          "package": "hakyll",
          "partial": "Context",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-Context.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMostly for internal usage\n\u003c/p\u003e",
          "module": "Hakyll.Web.Template.Context",
          "name": "ContextField",
          "package": "hakyll",
          "source": "src/Hakyll-Web-Template-Context.html#ContextField",
          "type": "data"
        },
        "index": {
          "description": "Mostly for internal usage",
          "hierarchy": "Hakyll Web Template Context",
          "module": "Hakyll.Web.Template.Context",
          "name": "ContextField",
          "package": "hakyll",
          "partial": "Context Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-Context.html#t:ContextField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Template.Context",
          "name": "Context",
          "package": "hakyll",
          "signature": "Context",
          "source": "src/Hakyll-Web-Template-Context.html#Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Template Context",
          "module": "Hakyll.Web.Template.Context",
          "name": "Context",
          "package": "hakyll",
          "partial": "Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-Context.html#v:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Template.Context",
          "name": "ListField",
          "package": "hakyll",
          "signature": "forall a . ListField (Context a) [Item a]",
          "source": "src/Hakyll-Web-Template-Context.html#ContextField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Template Context",
          "module": "Hakyll.Web.Template.Context",
          "name": "ListField",
          "normalized": "a b ListField(Context b)[Item b]",
          "package": "hakyll",
          "partial": "List Field",
          "signature": "forall a ListField(Context a)[Item a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-Context.html#v:ListField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Template.Context",
          "name": "StringField",
          "package": "hakyll",
          "signature": "StringField String",
          "source": "src/Hakyll-Web-Template-Context.html#ContextField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Template Context",
          "module": "Hakyll.Web.Template.Context",
          "name": "StringField",
          "package": "hakyll",
          "partial": "String Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-Context.html#v:StringField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e that contains the body of the item.\n\u003c/p\u003e",
          "module": "Hakyll.Web.Template.Context",
          "name": "bodyField",
          "package": "hakyll",
          "signature": "String -\u003e Context String",
          "source": "src/Hakyll-Web-Template-Context.html#bodyField",
          "type": "function"
        },
        "index": {
          "description": "Constructs field that contains the body of the item",
          "hierarchy": "Hakyll Web Template Context",
          "module": "Hakyll.Web.Template.Context",
          "name": "bodyField",
          "normalized": "String-\u003eContext String",
          "package": "hakyll",
          "partial": "Field",
          "signature": "String-\u003eContext String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-Context.html#v:bodyField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e that does not depend on the \u003ccode\u003e\u003ca\u003eItem\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Hakyll.Web.Template.Context",
          "name": "constField",
          "package": "hakyll",
          "signature": "String -\u003e String -\u003e Context a",
          "source": "src/Hakyll-Web-Template-Context.html#constField",
          "type": "function"
        },
        "index": {
          "description": "Creates field that does not depend on the Item",
          "hierarchy": "Hakyll Web Template Context",
          "module": "Hakyll.Web.Template.Context",
          "name": "constField",
          "normalized": "String-\u003eString-\u003eContext a",
          "package": "hakyll",
          "partial": "Field",
          "signature": "String-\u003eString-\u003eContext a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-Context.html#v:constField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen the metadata has a field called \u003ccode\u003epublished\u003c/code\u003e in one of the\n following formats then this function can render the date.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003eMon, 06 Sep 2010 00:01:00 +0000\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eMon, 06 Sep 2010 00:01:00 UTC\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eMon, 06 Sep 2010 00:01:00\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e2010-09-06T00:01:00+0000\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e2010-09-06T00:01:00Z\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e2010-09-06T00:01:00\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e2010-09-06 00:01:00+0000\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e2010-09-06 00:01:00\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eSeptember 06, 2010 00:01 AM\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFollowing date-only formats are supported too (\u003ccode\u003e00:00:00\u003c/code\u003e for time is\n assumed)\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e2010-09-06\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003eSeptember 06, 2010\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAlternatively, when the metadata has a field called \u003ccode\u003epath\u003c/code\u003e in a\n \u003ccode\u003efolder/yyyy-mm-dd-title.extension\u003c/code\u003e format (the convention for pages)\n and no \u003ccode\u003epublished\u003c/code\u003e metadata field set, this function can render\n the date.\n\u003c/p\u003e",
          "module": "Hakyll.Web.Template.Context",
          "name": "dateField",
          "package": "hakyll",
          "signature": "String-\u003e String-\u003e Context a",
          "type": "function"
        },
        "index": {
          "description": "When the metadata has field called published in one of the following formats then this function can render the date Mon Sep Mon Sep UTC Mon Sep T00 T00 T00 September AM Following date-only formats are supported too for time is assumed September Alternatively when the metadata has field called path in folder yyyy-mm-dd-title.extension format the convention for pages and no published metadata field set this function can render the date",
          "hierarchy": "Hakyll Web Template Context",
          "module": "Hakyll.Web.Template.Context",
          "name": "dateField",
          "normalized": "String-\u003eString-\u003eContext a",
          "package": "hakyll",
          "partial": "Field",
          "signature": "String-\u003eString-\u003eContext a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-Context.html#v:dateField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is an extended version of \u003ccode\u003e\u003ca\u003edateField\u003c/a\u003e\u003c/code\u003e that allows you to\n specify a time locale that is used for outputting the date. For more\n details, see \u003ccode\u003e\u003ca\u003edateField\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hakyll.Web.Template.Context",
          "name": "dateFieldWith",
          "package": "hakyll",
          "signature": "TimeLocale-\u003e String-\u003e String-\u003e Context a",
          "type": "function"
        },
        "index": {
          "description": "This is an extended version of dateField that allows you to specify time locale that is used for outputting the date For more details see dateField",
          "hierarchy": "Hakyll Web Template Context",
          "module": "Hakyll.Web.Template.Context",
          "name": "dateFieldWith",
          "normalized": "TimeLocale-\u003eString-\u003eString-\u003eContext a",
          "package": "hakyll",
          "partial": "Field With",
          "signature": "TimeLocale-\u003eString-\u003eString-\u003eContext a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-Context.html#v:dateFieldWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA context that contains (in that order)\n\u003c/p\u003e\u003col\u003e\u003cli\u003e A \u003ccode\u003e$body$\u003c/code\u003e field\n\u003c/li\u003e\u003cli\u003e Metadata fields\n\u003c/li\u003e\u003cli\u003e A \u003ccode\u003e$url$\u003c/code\u003e \u003ccode\u003e\u003ca\u003eurlField\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e A \u003ccode\u003e$path$\u003c/code\u003e \u003ccode\u003e\u003ca\u003epathField\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e A \u003ccode\u003e$title$\u003c/code\u003e \u003ccode\u003e\u003ca\u003etitleField\u003c/a\u003e\u003c/code\u003e        \n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Hakyll.Web.Template.Context",
          "name": "defaultContext",
          "package": "hakyll",
          "signature": "Context String",
          "source": "src/Hakyll-Web-Template-Context.html#defaultContext",
          "type": "function"
        },
        "index": {
          "description": "context that contains in that order body field Metadata fields url urlField path pathField title titleField",
          "hierarchy": "Hakyll Web Template Context",
          "module": "Hakyll.Web.Template.Context",
          "name": "defaultContext",
          "package": "hakyll",
          "partial": "Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-Context.html#v:defaultContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a new field in the 'Context.'\n\u003c/p\u003e",
          "module": "Hakyll.Web.Template.Context",
          "name": "field",
          "package": "hakyll",
          "signature": "String-\u003e (Item a -\u003e Compiler String)-\u003e Context a",
          "type": "function"
        },
        "index": {
          "description": "Constructs new field in the Context",
          "hierarchy": "Hakyll Web Template Context",
          "module": "Hakyll.Web.Template.Context",
          "name": "field",
          "normalized": "String-\u003e(Item a-\u003eCompiler String)-\u003eContext a",
          "package": "hakyll",
          "signature": "String-\u003e(Item a-\u003eCompiler String)-\u003eContext a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-Context.html#v:field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Template.Context",
          "name": "functionField",
          "package": "hakyll",
          "signature": "String -\u003e ([String] -\u003e Item a -\u003e Compiler String) -\u003e Context a",
          "source": "src/Hakyll-Web-Template-Context.html#functionField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Template Context",
          "module": "Hakyll.Web.Template.Context",
          "name": "functionField",
          "normalized": "String-\u003e([String]-\u003eItem a-\u003eCompiler String)-\u003eContext a",
          "package": "hakyll",
          "partial": "Field",
          "signature": "String-\u003e([String]-\u003eItem a-\u003eCompiler String)-\u003eContext a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-Context.html#v:functionField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParser to try to extract and parse the time from the \u003ccode\u003epublished\u003c/code\u003e\n field or from the filename. See \u003ccode\u003e\u003ca\u003edateField\u003c/a\u003e\u003c/code\u003e for more information.\n Exported for user convenience.\n\u003c/p\u003e",
          "module": "Hakyll.Web.Template.Context",
          "name": "getItemUTC",
          "package": "hakyll",
          "signature": "TimeLocale-\u003e Identifier-\u003e m UTCTime",
          "type": "function"
        },
        "index": {
          "description": "Parser to try to extract and parse the time from the published field or from the filename See dateField for more information Exported for user convenience",
          "hierarchy": "Hakyll Web Template Context",
          "module": "Hakyll.Web.Template.Context",
          "name": "getItemUTC",
          "normalized": "TimeLocale-\u003eIdentifier-\u003ea UTCTime",
          "package": "hakyll",
          "partial": "Item UTC",
          "signature": "TimeLocale-\u003eIdentifier-\u003em UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-Context.html#v:getItemUTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Template.Context",
          "name": "listField",
          "package": "hakyll",
          "signature": "String -\u003e Context a -\u003e Compiler [Item a] -\u003e Context b",
          "source": "src/Hakyll-Web-Template-Context.html#listField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Template Context",
          "module": "Hakyll.Web.Template.Context",
          "name": "listField",
          "normalized": "String-\u003eContext a-\u003eCompiler[Item a]-\u003eContext b",
          "package": "hakyll",
          "partial": "Field",
          "signature": "String-\u003eContext a-\u003eCompiler[Item a]-\u003eContext b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-Context.html#v:listField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Template.Context",
          "name": "mapContext",
          "package": "hakyll",
          "signature": "(String -\u003e String) -\u003e Context a -\u003e Context a",
          "source": "src/Hakyll-Web-Template-Context.html#mapContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Template Context",
          "module": "Hakyll.Web.Template.Context",
          "name": "mapContext",
          "normalized": "(String-\u003eString)-\u003eContext a-\u003eContext a",
          "package": "hakyll",
          "partial": "Context",
          "signature": "(String-\u003eString)-\u003eContext a-\u003eContext a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-Context.html#v:mapContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap any field to its metadata value, if present\n\u003c/p\u003e",
          "module": "Hakyll.Web.Template.Context",
          "name": "metadataField",
          "package": "hakyll",
          "signature": "Context a",
          "source": "src/Hakyll-Web-Template-Context.html#metadataField",
          "type": "function"
        },
        "index": {
          "description": "Map any field to its metadata value if present",
          "hierarchy": "Hakyll Web Template Context",
          "module": "Hakyll.Web.Template.Context",
          "name": "metadataField",
          "package": "hakyll",
          "partial": "Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-Context.html#v:metadataField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Template.Context",
          "name": "missingField",
          "package": "hakyll",
          "signature": "Context a",
          "source": "src/Hakyll-Web-Template-Context.html#missingField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Template Context",
          "module": "Hakyll.Web.Template.Context",
          "name": "missingField",
          "package": "hakyll",
          "partial": "Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-Context.html#v:missingField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Template.Context",
          "name": "modificationTimeField",
          "package": "hakyll",
          "signature": "String-\u003e String-\u003e Context a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Template Context",
          "module": "Hakyll.Web.Template.Context",
          "name": "modificationTimeField",
          "normalized": "String-\u003eString-\u003eContext a",
          "package": "hakyll",
          "partial": "Time Field",
          "signature": "String-\u003eString-\u003eContext a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-Context.html#v:modificationTimeField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Template.Context",
          "name": "modificationTimeFieldWith",
          "package": "hakyll",
          "signature": "TimeLocale-\u003e String-\u003e String-\u003e Context a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Template Context",
          "module": "Hakyll.Web.Template.Context",
          "name": "modificationTimeFieldWith",
          "normalized": "TimeLocale-\u003eString-\u003eString-\u003eContext a",
          "package": "hakyll",
          "partial": "Time Field With",
          "signature": "TimeLocale-\u003eString-\u003eString-\u003eContext a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-Context.html#v:modificationTimeFieldWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilepath of the underlying file of the item\n\u003c/p\u003e",
          "module": "Hakyll.Web.Template.Context",
          "name": "pathField",
          "package": "hakyll",
          "signature": "String -\u003e Context a",
          "source": "src/Hakyll-Web-Template-Context.html#pathField",
          "type": "function"
        },
        "index": {
          "description": "Filepath of the underlying file of the item",
          "hierarchy": "Hakyll Web Template Context",
          "module": "Hakyll.Web.Template.Context",
          "name": "pathField",
          "normalized": "String-\u003eContext a",
          "package": "hakyll",
          "partial": "Field",
          "signature": "String-\u003eContext a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-Context.html#v:pathField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA context with \u003ca\u003eteaser\u003c/a\u003e key which contain a teaser of the item.\n The item is loaded from the given snapshot (which should be saved\n in the user code before any templates are applied).\n\u003c/p\u003e",
          "module": "Hakyll.Web.Template.Context",
          "name": "teaserField",
          "package": "hakyll",
          "signature": "String-\u003e Snapshot-\u003e Context String",
          "type": "function"
        },
        "index": {
          "description": "context with teaser key which contain teaser of the item The item is loaded from the given snapshot which should be saved in the user code before any templates are applied",
          "hierarchy": "Hakyll Web Template Context",
          "module": "Hakyll.Web.Template.Context",
          "name": "teaserField",
          "normalized": "String-\u003eSnapshot-\u003eContext String",
          "package": "hakyll",
          "partial": "Field",
          "signature": "String-\u003eSnapshot-\u003eContext String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-Context.html#v:teaserField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis title \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e takes the basename of the underlying file by default\n\u003c/p\u003e",
          "module": "Hakyll.Web.Template.Context",
          "name": "titleField",
          "package": "hakyll",
          "signature": "String -\u003e Context a",
          "source": "src/Hakyll-Web-Template-Context.html#titleField",
          "type": "function"
        },
        "index": {
          "description": "This title field takes the basename of the underlying file by default",
          "hierarchy": "Hakyll Web Template Context",
          "module": "Hakyll.Web.Template.Context",
          "name": "titleField",
          "normalized": "String-\u003eContext a",
          "package": "hakyll",
          "partial": "Field",
          "signature": "String-\u003eContext a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-Context.html#v:titleField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Template.Context",
          "name": "unContext",
          "package": "hakyll",
          "signature": "String -\u003e Item a -\u003e Compiler ContextField",
          "source": "src/Hakyll-Web-Template-Context.html#Context",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Template Context",
          "module": "Hakyll.Web.Template.Context",
          "name": "unContext",
          "normalized": "String-\u003eItem a-\u003eCompiler ContextField",
          "package": "hakyll",
          "partial": "Context",
          "signature": "String-\u003eItem a-\u003eCompiler ContextField",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-Context.html#v:unContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbsolute url to the resulting item\n\u003c/p\u003e",
          "module": "Hakyll.Web.Template.Context",
          "name": "urlField",
          "package": "hakyll",
          "signature": "String -\u003e Context a",
          "source": "src/Hakyll-Web-Template-Context.html#urlField",
          "type": "function"
        },
        "index": {
          "description": "Absolute url to the resulting item",
          "hierarchy": "Hakyll Web Template Context",
          "module": "Hakyll.Web.Template.Context",
          "name": "urlField",
          "normalized": "String-\u003eContext a",
          "package": "hakyll",
          "partial": "Field",
          "signature": "String-\u003eContext a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-Context.html#v:urlField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides an easy way to combine several items in a list. The applications\n are obvious:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A post list on a blog\n\u003c/li\u003e\u003cli\u003e An image list in a gallery\n\u003c/li\u003e\u003cli\u003e A sitemap\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Hakyll.Web.Template.List",
          "name": "List",
          "package": "hakyll",
          "source": "src/Hakyll-Web-Template-List.html",
          "type": "module"
        },
        "index": {
          "description": "Provides an easy way to combine several items in list The applications are obvious post list on blog An image list in gallery sitemap",
          "hierarchy": "Hakyll Web Template List",
          "module": "Hakyll.Web.Template.List",
          "name": "List",
          "package": "hakyll",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin a listing of pages with a string in between, after applying a template\n to each page.\n\u003c/p\u003e",
          "module": "Hakyll.Web.Template.List",
          "name": "applyJoinTemplateList",
          "package": "hakyll",
          "signature": "String -\u003e Template -\u003e Context a -\u003e [Item a] -\u003e Compiler String",
          "source": "src/Hakyll-Web-Template-List.html#applyJoinTemplateList",
          "type": "function"
        },
        "index": {
          "description": "Join listing of pages with string in between after applying template to each page",
          "hierarchy": "Hakyll Web Template List",
          "module": "Hakyll.Web.Template.List",
          "name": "applyJoinTemplateList",
          "normalized": "String-\u003eTemplate-\u003eContext a-\u003e[Item a]-\u003eCompiler String",
          "package": "hakyll",
          "partial": "Join Template List",
          "signature": "String-\u003eTemplate-\u003eContext a-\u003e[Item a]-\u003eCompiler String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-List.html#v:applyJoinTemplateList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a string of a listing of pages, after applying a template to each\n page.\n\u003c/p\u003e",
          "module": "Hakyll.Web.Template.List",
          "name": "applyTemplateList",
          "package": "hakyll",
          "signature": "Template -\u003e Context a -\u003e [Item a] -\u003e Compiler String",
          "source": "src/Hakyll-Web-Template-List.html#applyTemplateList",
          "type": "function"
        },
        "index": {
          "description": "Generate string of listing of pages after applying template to each page",
          "hierarchy": "Hakyll Web Template List",
          "module": "Hakyll.Web.Template.List",
          "name": "applyTemplateList",
          "normalized": "Template-\u003eContext a-\u003e[Item a]-\u003eCompiler String",
          "package": "hakyll",
          "partial": "Template List",
          "signature": "Template-\u003eContext a-\u003e[Item a]-\u003eCompiler String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-List.html#v:applyTemplateList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort pages chronologically. Uses the same method as \u003ccode\u003e\u003ca\u003edateField\u003c/a\u003e\u003c/code\u003e for\n extracting the date.\n\u003c/p\u003e",
          "module": "Hakyll.Web.Template.List",
          "name": "chronological",
          "package": "hakyll",
          "signature": "[Item a] -\u003e m [Item a]",
          "source": "src/Hakyll-Web-Template-List.html#chronological",
          "type": "function"
        },
        "index": {
          "description": "Sort pages chronologically Uses the same method as dateField for extracting the date",
          "hierarchy": "Hakyll Web Template List",
          "module": "Hakyll.Web.Template.List",
          "name": "chronological",
          "normalized": "[Item a]-\u003eb[Item a]",
          "package": "hakyll",
          "signature": "[Item a]-\u003em[Item a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-List.html#v:chronological"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe reverse of \u003ccode\u003e\u003ca\u003echronological\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Hakyll.Web.Template.List",
          "name": "recentFirst",
          "package": "hakyll",
          "signature": "[Item a] -\u003e m [Item a]",
          "source": "src/Hakyll-Web-Template-List.html#recentFirst",
          "type": "function"
        },
        "index": {
          "description": "The reverse of chronological",
          "hierarchy": "Hakyll Web Template List",
          "module": "Hakyll.Web.Template.List",
          "name": "recentFirst",
          "normalized": "[Item a]-\u003eb[Item a]",
          "package": "hakyll",
          "partial": "First",
          "signature": "[Item a]-\u003em[Item a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template-List.html#v:recentFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides means for reading and applying \u003ccode\u003e\u003ca\u003eTemplate\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eTemplates are tools to convert items into a string. They are perfectly suited\n for laying out your site.\n\u003c/p\u003e\u003cp\u003eLet's look at an example template:\n\u003c/p\u003e\u003cpre\u003e \u003chtml\u003e\n     \u003chead\u003e\n         \u003ctitle\u003eMy crazy homepage - $title$\u003c/title\u003e\n     \u003c/head\u003e\n     \u003cbody\u003e\n         \u003cdiv id=\"header\"\u003e\n             \u003ch1\u003eMy crazy homepage - $title$\u003c/h1\u003e\n         \u003c/div\u003e\n         \u003cdiv id=\"content\"\u003e\n             $body$\n         \u003c/div\u003e\n         \u003cdiv id=\"footer\"\u003e\n             By reading this you agree that I now own your soul\n         \u003c/div\u003e\n     \u003c/body\u003e\n \u003c/html\u003e\n\u003c/pre\u003e\u003cp\u003eAs you can see, the format is very simple -- \u003ccode\u003e$key$\u003c/code\u003e is used to render the\n \u003ccode\u003e$key$\u003c/code\u003e field from the page, everything else is literally copied. If you want\n to literally insert \u003ccode\u003e\"$key$\"\u003c/code\u003e into your page (for example, when you're\n writing a Hakyll tutorial) you can use\n\u003c/p\u003e\u003cpre\u003e \u003cp\u003e\n     A literal $$key$$.\n \u003c/p\u003e\n\u003c/pre\u003e\u003cp\u003eBecause of it's simplicity, these templates can be used for more than HTML:\n you could make, for example, CSS or JS templates as well.\n\u003c/p\u003e\u003cp\u003eApart from interpolating \u003ccode\u003e$key$\u003c/code\u003es from the \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e you can also\n use the following macros:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e$if(key)$\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e $if(key)$\n  \u003cb\u003e Defined \u003c/b\u003e\n $else$\n  \u003cb\u003e Non-defined \u003c/b\u003e\n $endif$\n\u003c/pre\u003e\u003cp\u003eThis example will print \u003ccode\u003eDefined\u003c/code\u003e if \u003ccode\u003ekey\u003c/code\u003e is defined in the\n context and \u003ccode\u003eNon-defined\u003c/code\u003e otherwise. The \u003ccode\u003e$else$\u003c/code\u003e clause is\n optional.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e$for(key)$\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003efor\u003c/code\u003e macro is used for enumerating \u003ccode\u003e\u003ca\u003eContext\u003c/a\u003e\u003c/code\u003e elements that are\n lists, i.e. constructed using the \u003ccode\u003e\u003ca\u003elistField\u003c/a\u003e\u003c/code\u003e function. Assume that\n in a context we have an element \u003ccode\u003elistField \"key\" c itms\u003c/code\u003e. Then\n the snippet \n\u003c/p\u003e\u003cpre\u003e $for(key)$\n   $x$\n $sep$,\n $endfor$\n\u003c/pre\u003e\u003cp\u003ewould, for each item \u003ccode\u003ei\u003c/code\u003e in \u003ccode\u003eitms\u003c/code\u003e, lookup \u003ccode\u003e$x$\u003c/code\u003e in the context \u003ccode\u003ec\u003c/code\u003e\n with item \u003ccode\u003ei\u003c/code\u003e, interpolate it, and join the resulting list with\n \u003ccode\u003e,\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAnother concrete example one may consider is the following. Given the\n context\n\u003c/p\u003e\u003cpre\u003e listField \"things\" (field \"thing\" (return . itemBody))\n    (sequence [makeItem \"fruits\", makeItem \"vegetables\"])\n\u003c/pre\u003e\u003cp\u003eand a template\n\u003c/p\u003e\u003cpre\u003e  I like\n  $for(things)$\n    fresh $thing$$sep$, and \n  $endfor$\n\u003c/pre\u003e\u003cp\u003ethe resulting page would look like\n\u003c/p\u003e\u003cpre\u003e \u003cp\u003e\n  I like\n \n   fresh fruits, and \n \n   fresh vegetables\n \u003c/p\u003e\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e$sep$\u003c/code\u003e part can be omitted. Usually, you can get by using the\n \u003ccode\u003eapplyListTemplate\u003c/code\u003e and \u003ccode\u003eapplyJoinListTemplate\u003c/code\u003e functions.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e$partial(path)$\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eLoads a template located in a separate file and interpolates it\n under the current context.\n\u003c/p\u003e\u003cp\u003eAssuming that the file \u003ccode\u003etest.html\u003c/code\u003e contains\n\u003c/p\u003e\u003cpre\u003e \u003cb\u003e$key$\u003c/b\u003e\n\u003c/pre\u003e\u003cp\u003eThe result of rendering\n\u003c/p\u003e\u003cpre\u003e \u003cp\u003e\n   $partial(\"test.html\")$\n \u003c/p\u003e\n\u003c/pre\u003e\u003cp\u003eis the same as the result of rendering\n\u003c/p\u003e\u003cpre\u003e \u003cp\u003e\n   \u003cb\u003e$key$\u003c/b\u003e\n \u003c/p\u003e\n\u003c/pre\u003e\u003cp\u003eThat is, calling \u003ccode\u003e$partial$\u003c/code\u003e is equivalent to just copying and pasting\n template code.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hakyll.Web.Template",
          "name": "Template",
          "package": "hakyll",
          "source": "src/Hakyll-Web-Template.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides means for reading and applying Template Templates are tools to convert items into string They are perfectly suited for laying out your site Let look at an example template html head title My crazy homepage title title head body div id header h1 My crazy homepage title h1 div div id content body div div id footer By reading this you agree that now own your soul div body html As you can see the format is very simple key is used to render the key field from the page everything else is literally copied If you want to literally insert key into your page for example when you re writing Hakyll tutorial you can use literal key Because of it simplicity these templates can be used for more than HTML you could make for example CSS or JS templates as well Apart from interpolating key from the Context you can also use the following macros if key if key Defined else Non-defined endif This example will print Defined if key is defined in the context and Non-defined otherwise The else clause is optional for key The for macro is used for enumerating Context elements that are lists i.e constructed using the listField function Assume that in context we have an element listField key itms Then the snippet for key sep endfor would for each item in itms lookup in the context with item interpolate it and join the resulting list with Another concrete example one may consider is the following Given the context listField things field thing return itemBody sequence makeItem fruits makeItem vegetables and template like for things fresh thing sep and endfor the resulting page would look like like fresh fruits and fresh vegetables The sep part can be omitted Usually you can get by using the applyListTemplate and applyJoinListTemplate functions partial path Loads template located in separate file and interpolates it under the current context Assuming that the file test.html contains key The result of rendering partial test.html is the same as the result of rendering key That is calling partial is equivalent to just copying and pasting template code",
          "hierarchy": "Hakyll Web Template",
          "module": "Hakyll.Web.Template",
          "name": "Template",
          "package": "hakyll",
          "partial": "Template",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatatype used for template substitutions.\n\u003c/p\u003e",
          "module": "Hakyll.Web.Template",
          "name": "Template",
          "package": "hakyll",
          "source": "src/Hakyll-Web-Template-Internal.html#Template",
          "type": "data"
        },
        "index": {
          "description": "Datatype used for template substitutions",
          "hierarchy": "Hakyll Web Template",
          "module": "Hakyll.Web.Template",
          "name": "Template",
          "package": "hakyll",
          "partial": "Template",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template.html#t:Template"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt is also possible that you want to substitute \u003ccode\u003e$key$\u003c/code\u003es within the body of\n an item. This function does that by interpreting the item body as a template,\n and then applying it to itself.\n\u003c/p\u003e",
          "module": "Hakyll.Web.Template",
          "name": "applyAsTemplate",
          "package": "hakyll",
          "signature": "Context String-\u003e Item String-\u003e Compiler (Item String)",
          "type": "function"
        },
        "index": {
          "description": "It is also possible that you want to substitute key within the body of an item This function does that by interpreting the item body as template and then applying it to itself",
          "hierarchy": "Hakyll Web Template",
          "module": "Hakyll.Web.Template",
          "name": "applyAsTemplate",
          "normalized": "Context String-\u003eItem String-\u003eCompiler(Item String)",
          "package": "hakyll",
          "partial": "As Template",
          "signature": "Context String-\u003eItem String-\u003eCompiler(Item String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template.html#v:applyAsTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Template",
          "name": "applyTemplate",
          "package": "hakyll",
          "signature": "Template-\u003e Context a-\u003e Item a-\u003e Compiler (Item String)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Template",
          "module": "Hakyll.Web.Template",
          "name": "applyTemplate",
          "normalized": "Template-\u003eContext a-\u003eItem a-\u003eCompiler(Item String)",
          "package": "hakyll",
          "partial": "Template",
          "signature": "Template-\u003eContext a-\u003eItem a-\u003eCompiler(Item String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template.html#v:applyTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe following pattern is so common:\n\u003c/p\u003e\u003cpre\u003e tpl \u003c- loadBody \"templates/foo.html\"\n someCompiler\n     \u003e\u003e= applyTemplate tpl context\n\u003c/pre\u003e\u003cp\u003eThat we have a single function which does this:\n\u003c/p\u003e\u003cpre\u003e someCompiler\n     \u003e\u003e= loadAndApplyTemplate \"templates/foo.html\" context\n\u003c/pre\u003e",
          "module": "Hakyll.Web.Template",
          "name": "loadAndApplyTemplate",
          "package": "hakyll",
          "signature": "Identifier-\u003e Context a-\u003e Item a-\u003e Compiler (Item String)",
          "type": "function"
        },
        "index": {
          "description": "The following pattern is so common tpl loadBody templates foo.html someCompiler applyTemplate tpl context That we have single function which does this someCompiler loadAndApplyTemplate templates foo.html context",
          "hierarchy": "Hakyll Web Template",
          "module": "Hakyll.Web.Template",
          "name": "loadAndApplyTemplate",
          "normalized": "Identifier-\u003eContext a-\u003eItem a-\u003eCompiler(Item String)",
          "package": "hakyll",
          "partial": "And Apply Template",
          "signature": "Identifier-\u003eContext a-\u003eItem a-\u003eCompiler(Item String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template.html#v:loadAndApplyTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll.Web.Template",
          "name": "readTemplate",
          "package": "hakyll",
          "signature": "String -\u003e Template",
          "source": "src/Hakyll-Web-Template-Internal.html#readTemplate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll Web Template",
          "module": "Hakyll.Web.Template",
          "name": "readTemplate",
          "normalized": "String-\u003eTemplate",
          "package": "hakyll",
          "partial": "Template",
          "signature": "String-\u003eTemplate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template.html#v:readTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a template.\n\u003c/p\u003e",
          "module": "Hakyll.Web.Template",
          "name": "templateCompiler",
          "package": "hakyll",
          "signature": "Compiler (Item Template)",
          "source": "src/Hakyll-Web-Template.html#templateCompiler",
          "type": "function"
        },
        "index": {
          "description": "Read template",
          "hierarchy": "Hakyll Web Template",
          "module": "Hakyll.Web.Template",
          "name": "templateCompiler",
          "package": "hakyll",
          "partial": "Compiler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll-Web-Template.html#v:templateCompiler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTop-level module exporting all modules that are interesting for the user\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hakyll",
          "name": "Hakyll",
          "package": "hakyll",
          "source": "src/Hakyll.html",
          "type": "module"
        },
        "index": {
          "description": "Top-level module exporting all modules that are interesting for the user",
          "hierarchy": "Hakyll",
          "module": "Hakyll",
          "name": "Hakyll",
          "package": "hakyll",
          "partial": "Hakyll",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all contents of a directory.\n\u003c/p\u003e",
          "module": "Hakyll",
          "name": "getRecursiveContents",
          "package": "hakyll",
          "signature": "(FilePath -\u003e IO Bool)-\u003e FilePath-\u003e IO [FilePath]",
          "type": "function"
        },
        "index": {
          "description": "Get all contents of directory",
          "hierarchy": "Hakyll",
          "module": "Hakyll",
          "name": "getRecursiveContents",
          "normalized": "(FilePath-\u003eIO Bool)-\u003eFilePath-\u003eIO[FilePath]",
          "package": "hakyll",
          "partial": "Recursive Contents",
          "signature": "(FilePath-\u003eIO Bool)-\u003eFilePath-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll.html#v:getRecursiveContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a path to a file, try to make the path writable by making\n   all directories on the path.\n\u003c/p\u003e",
          "module": "Hakyll",
          "name": "makeDirectories",
          "package": "hakyll",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/Hakyll-Core-Util-File.html#makeDirectories",
          "type": "function"
        },
        "index": {
          "description": "Given path to file try to make the path writable by making all directories on the path",
          "hierarchy": "Hakyll",
          "module": "Hakyll",
          "name": "makeDirectories",
          "normalized": "FilePath-\u003eIO()",
          "package": "hakyll",
          "partial": "Directories",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll.html#v:makeDirectories"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hakyll",
          "name": "removeDirectory",
          "package": "hakyll",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/Hakyll-Core-Util-File.html#removeDirectory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hakyll",
          "module": "Hakyll",
          "name": "removeDirectory",
          "normalized": "FilePath-\u003eIO()",
          "package": "hakyll",
          "partial": "Directory",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hakyll/docs/Hakyll.html#v:removeDirectory"
      }
    }
  ]
]