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
        "word": "Commando"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library providing an interface to generate a lazy stream of command\n results from events occurring in a directory.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Commando",
          "name": "Commando",
          "package": "Commando",
          "source": "src/System-Commando.html",
          "type": "module"
        },
        "index": {
          "description": "library providing an interface to generate lazy stream of command results from events occurring in directory",
          "hierarchy": "System Commando",
          "module": "System.Commando",
          "name": "Commando",
          "package": "Commando",
          "partial": "Commando",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Commando/docs/System-Commando.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions used to configure the behavior of Commando\n\u003c/p\u003e",
          "module": "System.Commando",
          "name": "Options",
          "package": "Commando",
          "source": "src/System-Commando.html#Options",
          "type": "data"
        },
        "index": {
          "description": "Options used to configure the behavior of Commando",
          "hierarchy": "System Commando",
          "module": "System.Commando",
          "name": "Options",
          "package": "Commando",
          "partial": "Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Commando/docs/System-Commando.html#t:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Commando",
          "name": "Options",
          "package": "Commando",
          "signature": "Options",
          "source": "src/System-Commando.html#Options",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Commando",
          "module": "System.Commando",
          "name": "Options",
          "package": "Commando",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Commando/docs/System-Commando.html#v:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe commando to run\n\u003c/p\u003e",
          "module": "System.Commando",
          "name": "command",
          "package": "Commando",
          "signature": "String",
          "source": "src/System-Commando.html#Options",
          "type": "function"
        },
        "index": {
          "description": "The commando to run",
          "hierarchy": "System Commando",
          "module": "System.Commando",
          "name": "command",
          "package": "Commando",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Commando/docs/System-Commando.html#v:command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main listening loop.\n\u003c/p\u003e",
          "module": "System.Commando",
          "name": "commando",
          "package": "Commando",
          "signature": "Options -\u003e IO [String]",
          "source": "src/System-Commando.html#commando",
          "type": "function"
        },
        "index": {
          "description": "The main listening loop",
          "hierarchy": "System Commando",
          "module": "System.Commando",
          "name": "commando",
          "normalized": "Options-\u003eIO[String]",
          "package": "Commando",
          "signature": "Options-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Commando/docs/System-Commando.html#v:commando"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommand accepts input as an argument\n\u003c/p\u003e",
          "module": "System.Commando",
          "name": "consumer",
          "package": "Commando",
          "signature": "Bool",
          "source": "src/System-Commando.html#Options",
          "type": "function"
        },
        "index": {
          "description": "Command accepts input as an argument",
          "hierarchy": "System Commando",
          "module": "System.Commando",
          "name": "consumer",
          "package": "Commando",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Commando/docs/System-Commando.html#v:consumer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe directory listened to - Default is the current directory.\n\u003c/p\u003e",
          "module": "System.Commando",
          "name": "directory",
          "package": "Commando",
          "signature": "FilePath",
          "source": "src/System-Commando.html#Options",
          "type": "function"
        },
        "index": {
          "description": "The directory listened to Default is the current directory",
          "hierarchy": "System Commando",
          "module": "System.Commando",
          "name": "directory",
          "package": "Commando",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Commando/docs/System-Commando.html#v:directory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay show function used to translate events to strings\n\u003c/p\u003e",
          "module": "System.Commando",
          "name": "display",
          "package": "Commando",
          "signature": "Event -\u003e String",
          "source": "src/System-Commando.html#Options",
          "type": "function"
        },
        "index": {
          "description": "Display show function used to translate events to strings",
          "hierarchy": "System Commando",
          "module": "System.Commando",
          "name": "display",
          "normalized": "Event-\u003eString",
          "package": "Commando",
          "signature": "Event-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Commando/docs/System-Commando.html#v:display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn optparse-applicative parser for command-line options.\n\u003c/p\u003e",
          "module": "System.Commando",
          "name": "options",
          "package": "Commando",
          "signature": "Parser Options",
          "source": "src/System-Commando.html#options",
          "type": "function"
        },
        "index": {
          "description": "An optparse-applicative parser for command-line options",
          "hierarchy": "System Commando",
          "module": "System.Commando",
          "name": "options",
          "package": "Commando",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Commando/docs/System-Commando.html#v:options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommand remains running and new events are sent to its STDIN\n\u003c/p\u003e",
          "module": "System.Commando",
          "name": "persist",
          "package": "Commando",
          "signature": "Bool",
          "source": "src/System-Commando.html#Options",
          "type": "function"
        },
        "index": {
          "description": "Command remains running and new events are sent to its STDIN",
          "hierarchy": "System Commando",
          "module": "System.Commando",
          "name": "persist",
          "package": "Commando",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Commando/docs/System-Commando.html#v:persist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSilence any help\n\u003c/p\u003e",
          "module": "System.Commando",
          "name": "quiet",
          "package": "Commando",
          "signature": "Bool",
          "source": "src/System-Commando.html#Options",
          "type": "function"
        },
        "index": {
          "description": "Silence any help",
          "hierarchy": "System Commando",
          "module": "System.Commando",
          "name": "quiet",
          "package": "Commando",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Commando/docs/System-Commando.html#v:quiet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommand accepts input on STDIN\n\u003c/p\u003e",
          "module": "System.Commando",
          "name": "stdin",
          "package": "Commando",
          "signature": "Bool",
          "source": "src/System-Commando.html#Options",
          "type": "function"
        },
        "index": {
          "description": "Command accepts input on STDIN",
          "hierarchy": "System Commando",
          "module": "System.Commando",
          "name": "stdin",
          "package": "Commando",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Commando/docs/System-Commando.html#v:stdin"
      }
    }
  ]
]