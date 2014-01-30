[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/socket-activation/docs/Network-Socket-Activation.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a module for systemd socket activation.  See\n \u003ca\u003ehttp://0pointer.de/blog/projects/socket-activation.html\u003c/a\u003e and\n \u003ca\u003ehttp://www.freedesktop.org/software/systemd/man/systemd.socket.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Socket.Activation",
        "fct-package": "socket-activation",
        "fct-signature": "module",
        "fct-source": "src/Network-Socket-Activation.html",
        "fct-type": "module",
        "title": "Activation"
      },
      "index": {
        "description": "This is module for systemd socket activation See http pointer.de blog projects socket-activation.html and http www.freedesktop.org software systemd man systemd.socket.html",
        "hierarchy": "Network Socket Activation",
        "module": "Network.Socket.Activation",
        "name": "Activation",
        "normalized": "",
        "package": "socket-activation",
        "partial": "Activation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/socket-activation/docs/Network-Socket-Activation.html#v:getActivatedSockets",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a list of activated sockets, if the program was started with\n socket activation.  The sockets are in the same order as in\n the associated \u003ccode\u003e.socket\u003c/code\u003e file.  The sockets will have their family, type,\n and status set appropriately.  Returns \u003ccode\u003eNothing\u003c/code\u003e in systems without socket activation (or\n when the program was not socket activated).\n\u003c/p\u003e",
        "fct-module": "Network.Socket.Activation",
        "fct-package": "socket-activation",
        "fct-signature": "IO (Maybe [Socket])",
        "fct-source": "src/Network-Socket-Activation.html#getActivatedSockets",
        "fct-type": "function",
        "title": "getActivatedSockets"
      },
      "index": {
        "description": "Return list of activated sockets if the program was started with socket activation The sockets are in the same order as in the associated socket file The sockets will have their family type and status set appropriately Returns Nothing in systems without socket activation or when the program was not socket activated",
        "hierarchy": "Network Socket Activation",
        "module": "Network.Socket.Activation",
        "name": "getActivatedSockets",
        "normalized": "IO(Maybe[Socket])",
        "package": "socket-activation",
        "partial": "Activated Sockets",
        "signature": "IO(Maybe[Socket])"
      }
    }
  }
]