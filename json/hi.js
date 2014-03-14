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
        "word": "hi"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hi.Config",
          "name": "Config",
          "package": "hi",
          "source": "src/Hi-Config.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hi Config",
          "module": "Hi.Config",
          "name": "Config",
          "package": "hi",
          "partial": "Config",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Config.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse config file and return \u003ccode\u003e\u003ca\u003eOption\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Hi.Config",
          "name": "parseConfig",
          "package": "hi",
          "signature": "String -\u003e [(String, String)]",
          "source": "src/Hi-Config.html#parseConfig",
          "type": "function"
        },
        "index": {
          "description": "Parse config file and return Option",
          "hierarchy": "Hi Config",
          "module": "Hi.Config",
          "name": "parseConfig",
          "normalized": "String-\u003e[(String,String)]",
          "package": "hi",
          "partial": "Config",
          "signature": "String-\u003e[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Config.html#v:parseConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hi.Directory",
          "name": "Directory",
          "package": "hi",
          "source": "src/Hi-Directory.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hi Directory",
          "module": "Hi.Directory",
          "name": "Directory",
          "package": "hi",
          "partial": "Directory",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Directory.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun callback in given directory.\n\u003c/p\u003e",
          "module": "Hi.Directory",
          "name": "inDirectory",
          "package": "hi",
          "signature": "FilePath-\u003e IO a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Run callback in given directory",
          "hierarchy": "Hi Directory",
          "module": "Hi.Directory",
          "name": "inDirectory",
          "normalized": "FilePath-\u003eIO a-\u003eIO a",
          "package": "hi",
          "partial": "Directory",
          "signature": "FilePath-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Directory.html#v:inDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun callback in a temporary directory.\n\u003c/p\u003e",
          "module": "Hi.Directory",
          "name": "inTemporaryDirectory",
          "package": "hi",
          "signature": "String-\u003e IO a -\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Run callback in temporary directory",
          "hierarchy": "Hi Directory",
          "module": "Hi.Directory",
          "name": "inTemporaryDirectory",
          "normalized": "String-\u003eIO a-\u003eIO a",
          "package": "hi",
          "partial": "Temporary Directory",
          "signature": "String-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Directory.html#v:inTemporaryDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hi.FilePath",
          "name": "FilePath",
          "package": "hi",
          "source": "src/Hi-FilePath.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hi FilePath",
          "module": "Hi.FilePath",
          "name": "FilePath",
          "package": "hi",
          "partial": "File Path",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-FilePath.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert given path to the destination path, with given options.\n\u003c/p\u003e",
          "module": "Hi.FilePath",
          "name": "rewritePath",
          "package": "hi",
          "signature": "[Option] -\u003e FilePath -\u003e FilePath",
          "source": "src/Hi-FilePath.html#rewritePath",
          "type": "function"
        },
        "index": {
          "description": "Convert given path to the destination path with given options",
          "hierarchy": "Hi FilePath",
          "module": "Hi.FilePath",
          "name": "rewritePath",
          "normalized": "[Option]-\u003eFilePath-\u003eFilePath",
          "package": "hi",
          "partial": "Path",
          "signature": "[Option]-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-FilePath.html#v:rewritePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hi.Git",
          "name": "Git",
          "package": "hi",
          "source": "src/Hi-Git.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hi Git",
          "module": "Hi.Git",
          "name": "Git",
          "package": "hi",
          "partial": "Git",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Git.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClone given repository to current directory\n\u003c/p\u003e",
          "module": "Hi.Git",
          "name": "clone",
          "package": "hi",
          "signature": "String -\u003e IO ExitCode",
          "source": "src/Hi-Git.html#clone",
          "type": "function"
        },
        "index": {
          "description": "Clone given repository to current directory",
          "hierarchy": "Hi Git",
          "module": "Hi.Git",
          "name": "clone",
          "normalized": "String-\u003eIO ExitCode",
          "package": "hi",
          "signature": "String-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Git.html#v:clone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hi.Git",
          "name": "expandUrl",
          "package": "hi",
          "signature": "String -\u003e String",
          "source": "src/Hi-Git.html#expandUrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hi Git",
          "module": "Hi.Git",
          "name": "expandUrl",
          "normalized": "String-\u003eString",
          "package": "hi",
          "partial": "Url",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Git.html#v:expandUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn file list by `git ls-files`\n\u003c/p\u003e",
          "module": "Hi.Git",
          "name": "lsFiles",
          "package": "hi",
          "signature": "IO [String]",
          "source": "src/Hi-Git.html#lsFiles",
          "type": "function"
        },
        "index": {
          "description": "Return file list by git ls-files",
          "hierarchy": "Hi Git",
          "module": "Hi.Git",
          "name": "lsFiles",
          "normalized": "IO[String]",
          "package": "hi",
          "partial": "Files",
          "signature": "IO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Git.html#v:lsFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hi.Option",
          "name": "Option",
          "package": "hi",
          "source": "src/Hi-Option.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hi Option",
          "module": "Hi.Option",
          "name": "Option",
          "package": "hi",
          "partial": "Option",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Option.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hi.Option",
          "name": "getMode",
          "package": "hi",
          "signature": "IO Mode",
          "source": "src/Hi-Option.html#getMode",
          "type": "function"
        },
        "index": {
          "description": "Returns Mode",
          "hierarchy": "Hi Option",
          "module": "Hi.Option",
          "name": "getMode",
          "package": "hi",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Option.html#v:getMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eOptions\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hi.Option",
          "name": "getOptions",
          "package": "hi",
          "signature": "IO [Option]",
          "source": "src/Hi-Option.html#getOptions",
          "type": "function"
        },
        "index": {
          "description": "Returns Options",
          "hierarchy": "Hi Option",
          "module": "Hi.Option",
          "name": "getOptions",
          "normalized": "IO[Option]",
          "package": "hi",
          "partial": "Options",
          "signature": "IO[Option]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Option.html#v:getOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAvailable options.\n\u003c/p\u003e",
          "module": "Hi.Option",
          "name": "options",
          "package": "hi",
          "signature": "[OptDescr Option]",
          "source": "src/Hi-Option.html#options",
          "type": "function"
        },
        "index": {
          "description": "Available options",
          "hierarchy": "Hi Option",
          "module": "Hi.Option",
          "name": "options",
          "normalized": "[OptDescr Option]",
          "package": "hi",
          "signature": "[OptDescr Option]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Option.html#v:options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hi.Option",
          "name": "usage",
          "package": "hi",
          "signature": "String",
          "source": "src/Hi-Option.html#usage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hi Option",
          "module": "Hi.Option",
          "name": "usage",
          "package": "hi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Option.html#v:usage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hi.Template",
          "name": "Template",
          "package": "hi",
          "source": "src/Hi-Template.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hi Template",
          "module": "Hi.Template",
          "name": "Template",
          "package": "hi",
          "partial": "Template",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Template.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead templates in given \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Hi.Template",
          "name": "readTemplates",
          "package": "hi",
          "signature": "FilePath -\u003e IO Files",
          "source": "src/Hi-Template.html#readTemplates",
          "type": "function"
        },
        "index": {
          "description": "Read templates in given FilePath",
          "hierarchy": "Hi Template",
          "module": "Hi.Template",
          "name": "readTemplates",
          "normalized": "FilePath-\u003eIO Files",
          "package": "hi",
          "partial": "Templates",
          "signature": "FilePath-\u003eIO Files",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Template.html#v:readTemplates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove \".template\" from \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Hi.Template",
          "name": "untemplate",
          "package": "hi",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/Hi-Template.html#untemplate",
          "type": "function"
        },
        "index": {
          "description": "Remove template from FilePath",
          "hierarchy": "Hi Template",
          "module": "Hi.Template",
          "name": "untemplate",
          "normalized": "FilePath-\u003eFilePath",
          "package": "hi",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Template.html#v:untemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hi.Types",
          "name": "Types",
          "package": "hi",
          "source": "src/Hi-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hi Types",
          "module": "Hi.Types",
          "name": "Types",
          "package": "hi",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hi.Types",
          "name": "Error",
          "package": "hi",
          "source": "src/Hi-Types.html#Error",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hi Types",
          "module": "Hi.Types",
          "name": "Error",
          "package": "hi",
          "partial": "Error",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Types.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hi.Types",
          "name": "Files",
          "package": "hi",
          "source": "src/Hi-Types.html#Files",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hi Types",
          "module": "Hi.Types",
          "name": "Files",
          "package": "hi",
          "partial": "Files",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Types.html#t:Files"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hi.Types",
          "name": "Label",
          "package": "hi",
          "source": "src/Hi-Types.html#Label",
          "type": "type"
        },
        "index": {
          "hierarchy": "Hi Types",
          "module": "Hi.Types",
          "name": "Label",
          "package": "hi",
          "partial": "Label",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Types.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun mode.\n\u003c/p\u003e",
          "module": "Hi.Types",
          "name": "Mode",
          "package": "hi",
          "source": "src/Hi-Types.html#Mode",
          "type": "data"
        },
        "index": {
          "description": "Run mode",
          "hierarchy": "Hi Types",
          "module": "Hi.Types",
          "name": "Mode",
          "package": "hi",
          "partial": "Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Types.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions\n\u003c/p\u003e",
          "module": "Hi.Types",
          "name": "Option",
          "package": "hi",
          "source": "src/Hi-Types.html#Option",
          "type": "data"
        },
        "index": {
          "description": "Options",
          "hierarchy": "Hi Types",
          "module": "Hi.Types",
          "name": "Option",
          "package": "hi",
          "partial": "Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Types.html#t:Option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hi.Types",
          "name": "Arg",
          "package": "hi",
          "signature": "Arg Label String",
          "source": "src/Hi-Types.html#Option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hi Types",
          "module": "Hi.Types",
          "name": "Arg",
          "package": "hi",
          "partial": "Arg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Types.html#v:Arg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hi.Types",
          "name": "Help",
          "package": "hi",
          "signature": "Help",
          "source": "src/Hi-Types.html#Option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hi Types",
          "module": "Hi.Types",
          "name": "Help",
          "package": "hi",
          "partial": "Help",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Types.html#v:Help"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hi.Types",
          "name": "InitializeGitRepository",
          "package": "hi",
          "signature": "InitializeGitRepository",
          "source": "src/Hi-Types.html#Option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hi Types",
          "module": "Hi.Types",
          "name": "InitializeGitRepository",
          "package": "hi",
          "partial": "Initialize Git Repository",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Types.html#v:InitializeGitRepository"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hi.Types",
          "name": "Run",
          "package": "hi",
          "signature": "Run",
          "source": "src/Hi-Types.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hi Types",
          "module": "Hi.Types",
          "name": "Run",
          "package": "hi",
          "partial": "Run",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Types.html#v:Run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hi.Types",
          "name": "ShowHelp",
          "package": "hi",
          "signature": "ShowHelp",
          "source": "src/Hi-Types.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hi Types",
          "module": "Hi.Types",
          "name": "ShowHelp",
          "package": "hi",
          "partial": "Show Help",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Types.html#v:ShowHelp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hi.Types",
          "name": "ShowVersion",
          "package": "hi",
          "signature": "ShowVersion",
          "source": "src/Hi-Types.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hi Types",
          "module": "Hi.Types",
          "name": "ShowVersion",
          "package": "hi",
          "partial": "Show Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Types.html#v:ShowVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hi.Types",
          "name": "Version",
          "package": "hi",
          "signature": "Version",
          "source": "src/Hi-Types.html#Option",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hi Types",
          "module": "Hi.Types",
          "name": "Version",
          "package": "hi",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Types.html#v:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hi.Utils",
          "name": "Utils",
          "package": "hi",
          "source": "src/Hi-Utils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hi Utils",
          "module": "Hi.Utils",
          "name": "Utils",
          "package": "hi",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hi.Utils",
          "name": "lookupArg",
          "package": "hi",
          "signature": "String -\u003e [Option] -\u003e Maybe String",
          "source": "src/Hi-Utils.html#lookupArg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hi Utils",
          "module": "Hi.Utils",
          "name": "lookupArg",
          "normalized": "String-\u003e[Option]-\u003eMaybe String",
          "package": "hi",
          "partial": "Arg",
          "signature": "String-\u003e[Option]-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Utils.html#v:lookupArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hi.Version",
          "name": "Version",
          "package": "hi",
          "source": "src/Hi-Version.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hi Version",
          "module": "Hi.Version",
          "name": "Version",
          "package": "hi",
          "partial": "Version",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Version.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hi.Version",
          "name": "version",
          "package": "hi",
          "signature": "String",
          "source": "src/Hi-Version.html#version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hi Version",
          "module": "Hi.Version",
          "name": "version",
          "package": "hi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi-Version.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hi",
          "name": "Hi",
          "package": "hi",
          "source": "src/Hi.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hi",
          "module": "Hi",
          "name": "Hi",
          "package": "hi",
          "partial": "Hi",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess given \u003ccode\u003e\u003ca\u003eFiles\u003c/a\u003e\u003c/code\u003e and return result. it does\n\u003c/p\u003e\u003col\u003e\u003cli\u003e rewrite path\n\u003c/li\u003e\u003cli\u003e substitute arguments\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Hi",
          "name": "process",
          "package": "hi",
          "signature": "[Option] -\u003e Files -\u003e Files",
          "source": "src/Hi.html#process",
          "type": "function"
        },
        "index": {
          "description": "Process given Files and return result it does rewrite path substitute arguments",
          "hierarchy": "Hi",
          "module": "Hi",
          "name": "process",
          "normalized": "[Option]-\u003eFiles-\u003eFiles",
          "package": "hi",
          "signature": "[Option]-\u003eFiles-\u003eFiles",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi.html#v:process"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \u003ccode\u003ehi\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Hi",
          "name": "run",
          "package": "hi",
          "signature": "[Option] -\u003e IO ()",
          "source": "src/Hi.html#run",
          "type": "function"
        },
        "index": {
          "description": "Run hi",
          "hierarchy": "Hi",
          "module": "Hi",
          "name": "run",
          "normalized": "[Option]-\u003eIO()",
          "package": "hi",
          "signature": "[Option]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hi/docs/Hi.html#v:run"
      }
    }
  ]
]