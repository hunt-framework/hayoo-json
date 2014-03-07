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
        "word": "AC-BuildPlatform"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuery basic properties of the current platform.\n\u003c/p\u003e\u003cp\u003eAll of these values are compile-time constants. If the special\n  magic in the package configure step was unable to determine the\n  correct value for something, it comes back as \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Platform",
          "name": "Platform",
          "package": "AC-BuildPlatform",
          "source": "src/System-Platform.html",
          "type": "module"
        },
        "index": {
          "description": "Query basic properties of the current platform All of these values are compile-time constants If the special magic in the package configure step was unable to determine the correct value for something it comes back as Nothing",
          "hierarchy": "System Platform",
          "module": "System.Platform",
          "name": "Platform",
          "package": "AC-BuildPlatform",
          "partial": "Platform",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/AC-BuildPlatform/docs/System-Platform.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of all possible operating system types.\n\u003c/p\u003e",
          "module": "System.Platform",
          "name": "OS_Type",
          "package": "AC-BuildPlatform",
          "source": "src/System-Platform.html#OS_Type",
          "type": "data"
        },
        "index": {
          "description": "list of all possible operating system types",
          "hierarchy": "System Platform",
          "module": "System.Platform",
          "name": "OS_Type",
          "package": "AC-BuildPlatform",
          "partial": "OS Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/AC-BuildPlatform/docs/System-Platform.html#t:OS_Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome version of Microsoft Windows.\n\u003c/p\u003e",
          "module": "System.Platform",
          "name": "MS_Windows",
          "package": "AC-BuildPlatform",
          "signature": "MS_Windows",
          "source": "src/System-Platform.html#OS_Type",
          "type": "function"
        },
        "index": {
          "description": "Some version of Microsoft Windows",
          "hierarchy": "System Platform",
          "module": "System.Platform",
          "name": "MS_Windows",
          "package": "AC-BuildPlatform",
          "partial": "MS Windows",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-BuildPlatform/docs/System-Platform.html#v:MS_Windows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny sufficiently \"Unix-like\" system.\n\u003c/p\u003e",
          "module": "System.Platform",
          "name": "Unix",
          "package": "AC-BuildPlatform",
          "signature": "Unix",
          "source": "src/System-Platform.html#OS_Type",
          "type": "function"
        },
        "index": {
          "description": "Any sufficiently Unix-like system",
          "hierarchy": "System Platform",
          "module": "System.Platform",
          "name": "Unix",
          "package": "AC-BuildPlatform",
          "partial": "Unix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-BuildPlatform/docs/System-Platform.html#v:Unix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the compiler (e.g., \u003ccode\u003e\"GHC\"\u003c/code\u003e), or \"Unknown\" if\n  this could not be detected.\n\u003c/p\u003e",
          "module": "System.Platform",
          "name": "compiler_name",
          "package": "AC-BuildPlatform",
          "signature": "String",
          "source": "src/System-Platform.html#compiler_name",
          "type": "function"
        },
        "index": {
          "description": "The name of the compiler e.g GHC or Unknown if this could not be detected",
          "hierarchy": "System Platform",
          "module": "System.Platform",
          "name": "compiler_name",
          "package": "AC-BuildPlatform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-BuildPlatform/docs/System-Platform.html#v:compiler_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe numerical version string for the compiler\n  (e.g., \u003ccode\u003e\"6.10.2\"\u003c/code\u003e), or \"\" if this could not be detected.\n\u003c/p\u003e",
          "module": "System.Platform",
          "name": "compiler_version",
          "package": "AC-BuildPlatform",
          "signature": "String",
          "source": "src/System-Platform.html#compiler_version",
          "type": "function"
        },
        "index": {
          "description": "The numerical version string for the compiler e.g or if this could not be detected",
          "hierarchy": "System Platform",
          "module": "System.Platform",
          "name": "compiler_version",
          "package": "AC-BuildPlatform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-BuildPlatform/docs/System-Platform.html#v:compiler_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of operating system under which we are running.\n\u003c/p\u003e",
          "module": "System.Platform",
          "name": "os_type",
          "package": "AC-BuildPlatform",
          "signature": "OS_Type",
          "source": "src/System-Platform.html#os_type",
          "type": "function"
        },
        "index": {
          "description": "The type of operating system under which we are running",
          "hierarchy": "System Platform",
          "module": "System.Platform",
          "name": "os_type",
          "package": "AC-BuildPlatform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/AC-BuildPlatform/docs/System-Platform.html#v:os_type"
      }
    }
  ]
]