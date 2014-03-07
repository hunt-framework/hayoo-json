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
        "word": "socket-activation"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a module for systemd socket activation.  See\n \u003ca\u003ehttp://0pointer.de/blog/projects/socket-activation.html\u003c/a\u003e and\n \u003ca\u003ehttp://www.freedesktop.org/software/systemd/man/systemd.socket.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Socket.Activation",
          "name": "Activation",
          "package": "socket-activation",
          "source": "src/Network-Socket-Activation.html",
          "type": "module"
        },
        "index": {
          "description": "This is module for systemd socket activation See http pointer.de blog projects socket-activation.html and http www.freedesktop.org software systemd man systemd.socket.html",
          "hierarchy": "Network Socket Activation",
          "module": "Network.Socket.Activation",
          "name": "Activation",
          "package": "socket-activation",
          "partial": "Activation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/socket-activation/docs/Network-Socket-Activation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a list of activated sockets, if the program was started with\n socket activation.  The sockets are in the same order as in\n the associated \u003ccode\u003e.socket\u003c/code\u003e file.  The sockets will have their family, type,\n and status set appropriately.  Returns \u003ccode\u003eNothing\u003c/code\u003e in systems without socket activation (or\n when the program was not socket activated).\n\u003c/p\u003e",
          "module": "Network.Socket.Activation",
          "name": "getActivatedSockets",
          "package": "socket-activation",
          "signature": "IO (Maybe [Socket])",
          "source": "src/Network-Socket-Activation.html#getActivatedSockets",
          "type": "function"
        },
        "index": {
          "description": "Return list of activated sockets if the program was started with socket activation The sockets are in the same order as in the associated socket file The sockets will have their family type and status set appropriately Returns Nothing in systems without socket activation or when the program was not socket activated",
          "hierarchy": "Network Socket Activation",
          "module": "Network.Socket.Activation",
          "name": "getActivatedSockets",
          "normalized": "IO(Maybe[Socket])",
          "package": "socket-activation",
          "partial": "Activated Sockets",
          "signature": "IO(Maybe[Socket])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/socket-activation/docs/Network-Socket-Activation.html#v:getActivatedSockets"
      }
    }
  ]
]