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
        "word": "holy-project"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HolyProject.GithubAPI",
          "name": "GithubAPI",
          "package": "holy-project",
          "source": "src/HolyProject-GithubAPI.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HolyProject GithubAPI",
          "module": "HolyProject.GithubAPI",
          "name": "GithubAPI",
          "package": "holy-project",
          "partial": "Github API",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/holy-project/docs/HolyProject-GithubAPI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch a username using the github API\n\u003c/p\u003e",
          "module": "HolyProject.GithubAPI",
          "name": "searchGHUser",
          "package": "holy-project",
          "signature": "String -\u003e IO (Maybe String)",
          "source": "src/HolyProject-GithubAPI.html#searchGHUser",
          "type": "function"
        },
        "index": {
          "description": "Search username using the github API",
          "hierarchy": "HolyProject GithubAPI",
          "module": "HolyProject.GithubAPI",
          "name": "searchGHUser",
          "normalized": "String-\u003eIO(Maybe String)",
          "package": "holy-project",
          "partial": "GHUser",
          "signature": "String-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holy-project/docs/HolyProject-GithubAPI.html#v:searchGHUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HolyProject.StringUtils",
          "name": "StringUtils",
          "package": "holy-project",
          "source": "src/HolyProject-StringUtils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HolyProject StringUtils",
          "module": "HolyProject.StringUtils",
          "name": "StringUtils",
          "package": "holy-project",
          "partial": "String Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/holy-project/docs/HolyProject-StringUtils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etransform a chain like \u003ca\u003eHoly project\u003c/a\u003e in \u003ca\u003eHolyProject\u003c/a\u003e\n\u003c/p\u003e",
          "module": "HolyProject.StringUtils",
          "name": "capitalize",
          "package": "holy-project",
          "signature": "String -\u003e String",
          "source": "src/HolyProject-StringUtils.html#capitalize",
          "type": "function"
        },
        "index": {
          "description": "transform chain like Holy project in HolyProject",
          "hierarchy": "HolyProject StringUtils",
          "module": "HolyProject.StringUtils",
          "name": "capitalize",
          "normalized": "String-\u003eString",
          "package": "holy-project",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holy-project/docs/HolyProject-StringUtils.html#v:capitalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003everify if a project name is conform\n\u003c/p\u003e",
          "module": "HolyProject.StringUtils",
          "name": "checkProjectName",
          "package": "holy-project",
          "signature": "String -\u003e Bool",
          "source": "src/HolyProject-StringUtils.html#checkProjectName",
          "type": "function"
        },
        "index": {
          "description": "verify if project name is conform",
          "hierarchy": "HolyProject StringUtils",
          "module": "HolyProject.StringUtils",
          "name": "checkProjectName",
          "normalized": "String-\u003eBool",
          "package": "holy-project",
          "partial": "Project Name",
          "signature": "String-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holy-project/docs/HolyProject-StringUtils.html#v:checkProjectName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etransform a chain like \u003ca\u003eHoly project\u003c/a\u003e in \u003ca\u003eholy-project\u003c/a\u003e\n\u003c/p\u003e",
          "module": "HolyProject.StringUtils",
          "name": "projectNameFromString",
          "package": "holy-project",
          "signature": "String -\u003e String",
          "source": "src/HolyProject-StringUtils.html#projectNameFromString",
          "type": "function"
        },
        "index": {
          "description": "transform chain like Holy project in holy-project",
          "hierarchy": "HolyProject StringUtils",
          "module": "HolyProject.StringUtils",
          "name": "projectNameFromString",
          "normalized": "String-\u003eString",
          "package": "holy-project",
          "partial": "Name From String",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holy-project/docs/HolyProject-StringUtils.html#v:projectNameFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HolyProject",
          "name": "HolyProject",
          "package": "holy-project",
          "source": "src/HolyProject.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HolyProject",
          "module": "HolyProject",
          "name": "HolyProject",
          "package": "holy-project",
          "partial": "Holy Project",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/holy-project/docs/HolyProject.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecord containing all information to initialize a project\n\u003c/p\u003e",
          "module": "HolyProject",
          "name": "Project",
          "package": "holy-project",
          "source": "src/HolyProject.html#Project",
          "type": "data"
        },
        "index": {
          "description": "Record containing all information to initialize project",
          "hierarchy": "HolyProject",
          "module": "HolyProject",
          "name": "Project",
          "package": "holy-project",
          "partial": "Project",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/holy-project/docs/HolyProject.html#t:Project"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HolyProject",
          "name": "Project",
          "package": "holy-project",
          "signature": "Project",
          "source": "src/HolyProject.html#Project",
          "type": "function"
        },
        "index": {
          "hierarchy": "HolyProject",
          "module": "HolyProject",
          "name": "Project",
          "package": "holy-project",
          "partial": "Project",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holy-project/docs/HolyProject.html#v:Project"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HolyProject",
          "name": "author",
          "package": "holy-project",
          "signature": "String",
          "source": "src/HolyProject.html#Project",
          "type": "function"
        },
        "index": {
          "hierarchy": "HolyProject",
          "module": "HolyProject",
          "name": "author",
          "package": "holy-project",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holy-project/docs/HolyProject.html#v:author"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is where we create the project once the\n question are answered\n\u003c/p\u003e",
          "module": "HolyProject",
          "name": "createProject",
          "package": "holy-project",
          "signature": "Project -\u003e IO ()",
          "source": "src/HolyProject.html#createProject",
          "type": "function"
        },
        "index": {
          "description": "This function is where we create the project once the question are answered",
          "hierarchy": "HolyProject",
          "module": "HolyProject",
          "name": "createProject",
          "normalized": "Project-\u003eIO()",
          "package": "holy-project",
          "partial": "Project",
          "signature": "Project-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holy-project/docs/HolyProject.html#v:createProject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow the final dialog\n\u003c/p\u003e",
          "module": "HolyProject",
          "name": "end",
          "package": "holy-project",
          "signature": "IO ()",
          "source": "src/HolyProject.html#end",
          "type": "function"
        },
        "index": {
          "description": "Show the final dialog",
          "hierarchy": "HolyProject",
          "module": "HolyProject",
          "name": "end",
          "normalized": "IO()",
          "package": "holy-project",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holy-project/docs/HolyProject.html#v:end"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function use a Data file mustache template\n and a hastache context to write a destination file\n\u003c/p\u003e",
          "module": "HolyProject",
          "name": "genFile",
          "package": "holy-project",
          "signature": "MuContext IO-\u003e String-\u003e FilePath-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "This function use Data file mustache template and hastache context to write destination file",
          "hierarchy": "HolyProject",
          "module": "HolyProject",
          "name": "genFile",
          "normalized": "MuContext IO-\u003eString-\u003eFilePath-\u003eIO()",
          "package": "holy-project",
          "partial": "File",
          "signature": "MuContext IO-\u003eString-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holy-project/docs/HolyProject.html#v:genFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;Simply return the current year as String\u003c/p\u003e",
          "module": "HolyProject",
          "name": "getCurrentYear",
          "package": "holy-project",
          "signature": "IO String",
          "source": "src/HolyProject.html#getCurrentYear",
          "type": "function"
        },
        "index": {
          "description": "Simply return the current year as String",
          "hierarchy": "HolyProject",
          "module": "HolyProject",
          "name": "getCurrentYear",
          "package": "holy-project",
          "partial": "Current Year",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holy-project/docs/HolyProject.html#v:getCurrentYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HolyProject",
          "name": "ghaccount",
          "package": "holy-project",
          "signature": "String",
          "source": "src/HolyProject.html#Project",
          "type": "function"
        },
        "index": {
          "hierarchy": "HolyProject",
          "module": "HolyProject",
          "name": "ghaccount",
          "package": "holy-project",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holy-project/docs/HolyProject.html#v:ghaccount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandomly choose an end scenario and then show a \"serious\" error message\n\u003c/p\u003e",
          "module": "HolyProject",
          "name": "holyError",
          "package": "holy-project",
          "signature": "String -\u003e IO ()",
          "source": "src/HolyProject.html#holyError",
          "type": "function"
        },
        "index": {
          "description": "Randomly choose an end scenario and then show serious error message",
          "hierarchy": "HolyProject",
          "module": "HolyProject",
          "name": "holyError",
          "normalized": "String-\u003eIO()",
          "package": "holy-project",
          "partial": "Error",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holy-project/docs/HolyProject.html#v:holyError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsk, questions and create the initial project\n\u003c/p\u003e",
          "module": "HolyProject",
          "name": "holyStarter",
          "package": "holy-project",
          "signature": "IO ()",
          "source": "src/HolyProject.html#holyStarter",
          "type": "function"
        },
        "index": {
          "description": "Ask questions and create the initial project",
          "hierarchy": "HolyProject",
          "module": "HolyProject",
          "name": "holyStarter",
          "normalized": "IO()",
          "package": "holy-project",
          "partial": "Starter",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holy-project/docs/HolyProject.html#v:holyStarter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow an introduction test\n\u003c/p\u003e",
          "module": "HolyProject",
          "name": "intro",
          "package": "holy-project",
          "signature": "IO ()",
          "source": "src/HolyProject.html#intro",
          "type": "function"
        },
        "index": {
          "description": "Show an introduction test",
          "hierarchy": "HolyProject",
          "module": "HolyProject",
          "name": "intro",
          "normalized": "IO()",
          "package": "holy-project",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holy-project/docs/HolyProject.html#v:intro"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert something true. In any other case show the holy error\n\u003c/p\u003e",
          "module": "HolyProject",
          "name": "ioassert",
          "package": "holy-project",
          "signature": "Bool -\u003e String -\u003e IO ()",
          "source": "src/HolyProject.html#ioassert",
          "type": "function"
        },
        "index": {
          "description": "Assert something true In any other case show the holy error",
          "hierarchy": "HolyProject",
          "module": "HolyProject",
          "name": "ioassert",
          "normalized": "Bool-\u003eString-\u003eIO()",
          "package": "holy-project",
          "signature": "Bool-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holy-project/docs/HolyProject.html#v:ioassert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HolyProject",
          "name": "mail",
          "package": "holy-project",
          "signature": "String",
          "source": "src/HolyProject.html#Project",
          "type": "function"
        },
        "index": {
          "hierarchy": "HolyProject",
          "module": "HolyProject",
          "name": "mail",
          "package": "holy-project",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holy-project/docs/HolyProject.html#v:mail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HolyProject",
          "name": "moduleName",
          "package": "holy-project",
          "signature": "String",
          "source": "src/HolyProject.html#Project",
          "type": "function"
        },
        "index": {
          "hierarchy": "HolyProject",
          "module": "HolyProject",
          "name": "moduleName",
          "package": "holy-project",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holy-project/docs/HolyProject.html#v:moduleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HolyProject",
          "name": "projectName",
          "package": "holy-project",
          "signature": "String",
          "source": "src/HolyProject.html#Project",
          "type": "function"
        },
        "index": {
          "hierarchy": "HolyProject",
          "module": "HolyProject",
          "name": "projectName",
          "package": "holy-project",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holy-project/docs/HolyProject.html#v:projectName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HolyProject",
          "name": "synopsis",
          "package": "holy-project",
          "signature": "String",
          "source": "src/HolyProject.html#Project",
          "type": "function"
        },
        "index": {
          "hierarchy": "HolyProject",
          "module": "HolyProject",
          "name": "synopsis",
          "package": "holy-project",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holy-project/docs/HolyProject.html#v:synopsis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HolyProject",
          "name": "year",
          "package": "holy-project",
          "signature": "String",
          "source": "src/HolyProject.html#Project",
          "type": "function"
        },
        "index": {
          "hierarchy": "HolyProject",
          "module": "HolyProject",
          "name": "year",
          "package": "holy-project",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/holy-project/docs/HolyProject.html#v:year"
      }
    }
  ]
]