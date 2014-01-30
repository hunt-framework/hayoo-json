[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Client.html#",
      "description": {
        "fct-module": "Control.OperationalTransformation.Client",
        "fct-package": "ot",
        "fct-signature": "module",
        "fct-source": "src/Control-OperationalTransformation-Client.html",
        "fct-type": "module",
        "title": "Client"
      },
      "index": {
        "description": "",
        "hierarchy": "Control OperationalTransformation Client",
        "module": "Control.OperationalTransformation.Client",
        "name": "Client",
        "normalized": "",
        "package": "ot",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Client.html#t:ClientState",
      "description": {
        "fct-descr": "\u003cp\u003eAt every moment, the client is in one of three states.\n\u003c/p\u003e",
        "fct-module": "Control.OperationalTransformation.Client",
        "fct-package": "ot",
        "fct-signature": "data",
        "fct-source": "src/Control-OperationalTransformation-Client.html#ClientState",
        "fct-type": "data",
        "title": "ClientState"
      },
      "index": {
        "description": "At every moment the client is in one of three states",
        "hierarchy": "Control OperationalTransformation Client",
        "module": "Control.OperationalTransformation.Client",
        "name": "ClientState",
        "normalized": "",
        "package": "ot",
        "partial": "Client State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Client.html#v:ClientSynchronized",
      "description": {
        "fct-descr": "\u003cp\u003eAll of the client's operations have been acknowledged by the server.\n\u003c/p\u003e",
        "fct-module": "Control.OperationalTransformation.Client",
        "fct-package": "ot",
        "fct-signature": "ClientSynchronized",
        "fct-source": "src/Control-OperationalTransformation-Client.html#ClientState",
        "fct-type": "function",
        "title": "ClientSynchronized"
      },
      "index": {
        "description": "All of the client operations have been acknowledged by the server",
        "hierarchy": "Control OperationalTransformation Client",
        "module": "Control.OperationalTransformation.Client",
        "name": "ClientSynchronized",
        "normalized": "",
        "package": "ot",
        "partial": "Client Synchronized",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Client.html#v:ClientWaiting",
      "description": {
        "fct-descr": "\u003cp\u003eThe client has sent an operation to the server and it is still waiting\n for an acknowledgement.\n\u003c/p\u003e",
        "fct-module": "Control.OperationalTransformation.Client",
        "fct-package": "ot",
        "fct-signature": "ClientWaiting op",
        "fct-source": "src/Control-OperationalTransformation-Client.html#ClientState",
        "fct-type": "function",
        "title": "ClientWaiting"
      },
      "index": {
        "description": "The client has sent an operation to the server and it is still waiting for an acknowledgement",
        "hierarchy": "Control OperationalTransformation Client",
        "module": "Control.OperationalTransformation.Client",
        "name": "ClientWaiting",
        "normalized": "",
        "package": "ot",
        "partial": "Client Waiting",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Client.html#v:ClientWaitingWithBuffer",
      "description": {
        "fct-descr": "\u003cp\u003eThe client is waiting for an acknowledgement for a pending operation and\n the client is buffering local changes.\n\u003c/p\u003e",
        "fct-module": "Control.OperationalTransformation.Client",
        "fct-package": "ot",
        "fct-signature": "ClientWaitingWithBuffer op op",
        "fct-source": "src/Control-OperationalTransformation-Client.html#ClientState",
        "fct-type": "function",
        "title": "ClientWaitingWithBuffer"
      },
      "index": {
        "description": "The client is waiting for an acknowledgement for pending operation and the client is buffering local changes",
        "hierarchy": "Control OperationalTransformation Client",
        "module": "Control.OperationalTransformation.Client",
        "name": "ClientWaitingWithBuffer",
        "normalized": "",
        "package": "ot",
        "partial": "Client Waiting With Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Client.html#v:applyClient",
      "description": {
        "fct-descr": "\u003cp\u003eHandle user-generated operations.\n\u003c/p\u003e",
        "fct-module": "Control.OperationalTransformation.Client",
        "fct-package": "ot",
        "fct-signature": "ClientState op-\u003e op-\u003e Either String (Bool, ClientState op)",
        "fct-type": "function",
        "title": "applyClient"
      },
      "index": {
        "description": "Handle user-generated operations",
        "hierarchy": "Control OperationalTransformation Client",
        "module": "Control.OperationalTransformation.Client",
        "name": "applyClient",
        "normalized": "ClientState a-\u003ea-\u003eEither String(Bool,ClientState a)",
        "package": "ot",
        "partial": "Client",
        "signature": "ClientState op-\u003eop-\u003eEither String(Bool,ClientState op)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Client.html#v:applyServer",
      "description": {
        "fct-descr": "\u003cp\u003eHandle incoming operations from the server.\n\u003c/p\u003e",
        "fct-module": "Control.OperationalTransformation.Client",
        "fct-package": "ot",
        "fct-signature": "ClientState op-\u003e op-\u003e Either String (op, ClientState op)",
        "fct-type": "function",
        "title": "applyServer"
      },
      "index": {
        "description": "Handle incoming operations from the server",
        "hierarchy": "Control OperationalTransformation Client",
        "module": "Control.OperationalTransformation.Client",
        "name": "applyServer",
        "normalized": "ClientState a-\u003ea-\u003eEither String(a,ClientState a)",
        "package": "ot",
        "partial": "Server",
        "signature": "ClientState op-\u003eop-\u003eEither String(op,ClientState op)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Client.html#v:initialClientState",
      "description": {
        "fct-descr": "\u003cp\u003eThe state a newly connected client starts in (synonym for\n \u003ccode\u003e\u003ca\u003eClientSynchronized\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Control.OperationalTransformation.Client",
        "fct-package": "ot",
        "fct-signature": "ClientState op",
        "fct-source": "src/Control-OperationalTransformation-Client.html#initialClientState",
        "fct-type": "function",
        "title": "initialClientState"
      },
      "index": {
        "description": "The state newly connected client starts in synonym for ClientSynchronized",
        "hierarchy": "Control OperationalTransformation Client",
        "module": "Control.OperationalTransformation.Client",
        "name": "initialClientState",
        "normalized": "",
        "package": "ot",
        "partial": "Client State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Client.html#v:serverAck",
      "description": {
        "fct-descr": "\u003cp\u003eHandle acknowledgements.\n\u003c/p\u003e",
        "fct-module": "Control.OperationalTransformation.Client",
        "fct-package": "ot",
        "fct-signature": "ClientState op-\u003e Maybe (Maybe op, ClientState op)",
        "fct-type": "function",
        "title": "serverAck"
      },
      "index": {
        "description": "Handle acknowledgements",
        "hierarchy": "Control OperationalTransformation Client",
        "module": "Control.OperationalTransformation.Client",
        "name": "serverAck",
        "normalized": "ClientState a-\u003eMaybe(Maybe a,ClientState a)",
        "package": "ot",
        "partial": "Ack",
        "signature": "ClientState op-\u003eMaybe(Maybe op,ClientState op)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Properties.html#",
      "description": {
        "fct-module": "Control.OperationalTransformation.Properties",
        "fct-package": "ot",
        "fct-signature": "module",
        "fct-source": "src/Control-OperationalTransformation-Properties.html",
        "fct-type": "module",
        "title": "Properties"
      },
      "index": {
        "description": "",
        "hierarchy": "Control OperationalTransformation Properties",
        "module": "Control.OperationalTransformation.Properties",
        "name": "Properties",
        "normalized": "",
        "package": "ot",
        "partial": "Properties",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Properties.html#v:prop_compose_apply",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(b &#8728; a)(d) = a(b(d))\u003c/code\u003e where \u003cem\u003ea\u003c/em\u003e and \u003cem\u003eb\u003c/em\u003e are two consecutive operations\n and \u003cem\u003ed\u003c/em\u003e is the initial document.\n\u003c/p\u003e",
        "fct-module": "Control.OperationalTransformation.Properties",
        "fct-package": "ot",
        "fct-signature": "(doc -\u003e Gen op) -\u003e Property",
        "fct-source": "src/Control-OperationalTransformation-Properties.html#prop_compose_apply",
        "fct-type": "function",
        "title": "prop_compose_apply"
      },
      "index": {
        "description": "where and are two consecutive operations and is the initial document",
        "hierarchy": "Control OperationalTransformation Properties",
        "module": "Control.OperationalTransformation.Properties",
        "name": "prop_compose_apply",
        "normalized": "(a-\u003eGen b)-\u003eProperty",
        "package": "ot",
        "partial": "",
        "signature": "(doc-\u003eGen op)-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Properties.html#v:prop_transform_apply",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eb'(a(d)) = b'(a(d))\u003c/code\u003e&#160;where \u003cem\u003ea\u003c/em\u003e and \u003cem\u003eb\u003c/em\u003e are random operations, \u003cem\u003ed\u003c/em\u003e is the\n initial document and \u003ccode\u003e(a', b') = transform(a, b)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.OperationalTransformation.Properties",
        "fct-package": "ot",
        "fct-signature": "(doc -\u003e Gen op) -\u003e Property",
        "fct-source": "src/Control-OperationalTransformation-Properties.html#prop_transform_apply",
        "fct-type": "function",
        "title": "prop_transform_apply"
      },
      "index": {
        "description": "where and are random operations is the initial document and transform",
        "hierarchy": "Control OperationalTransformation Properties",
        "module": "Control.OperationalTransformation.Properties",
        "name": "prop_transform_apply",
        "normalized": "(a-\u003eGen b)-\u003eProperty",
        "package": "ot",
        "partial": "",
        "signature": "(doc-\u003eGen op)-\u003eProperty"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Server.html#",
      "description": {
        "fct-module": "Control.OperationalTransformation.Server",
        "fct-package": "ot",
        "fct-signature": "module",
        "fct-source": "src/Control-OperationalTransformation-Server.html",
        "fct-type": "module",
        "title": "Server"
      },
      "index": {
        "description": "",
        "hierarchy": "Control OperationalTransformation Server",
        "module": "Control.OperationalTransformation.Server",
        "name": "Server",
        "normalized": "",
        "package": "ot",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Server.html#t:Revision",
      "description": {
        "fct-module": "Control.OperationalTransformation.Server",
        "fct-package": "ot",
        "fct-signature": "type",
        "fct-source": "src/Control-OperationalTransformation-Server.html#Revision",
        "fct-type": "type",
        "title": "Revision"
      },
      "index": {
        "description": "",
        "hierarchy": "Control OperationalTransformation Server",
        "module": "Control.OperationalTransformation.Server",
        "name": "Revision",
        "normalized": "",
        "package": "ot",
        "partial": "Revision",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Server.html#t:ServerState",
      "description": {
        "fct-descr": "\u003cp\u003eThe server keeps the current revision number and a list of previous\n operations to transform incoming operations against.\n\u003c/p\u003e",
        "fct-module": "Control.OperationalTransformation.Server",
        "fct-package": "ot",
        "fct-signature": "data",
        "fct-source": "src/Control-OperationalTransformation-Server.html#ServerState",
        "fct-type": "data",
        "title": "ServerState"
      },
      "index": {
        "description": "The server keeps the current revision number and list of previous operations to transform incoming operations against",
        "hierarchy": "Control OperationalTransformation Server",
        "module": "Control.OperationalTransformation.Server",
        "name": "ServerState",
        "normalized": "",
        "package": "ot",
        "partial": "Server State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Server.html#v:ServerState",
      "description": {
        "fct-module": "Control.OperationalTransformation.Server",
        "fct-package": "ot",
        "fct-signature": "ServerState Revision doc [op]",
        "fct-source": "src/Control-OperationalTransformation-Server.html#ServerState",
        "fct-type": "function",
        "title": "ServerState"
      },
      "index": {
        "description": "",
        "hierarchy": "Control OperationalTransformation Server",
        "module": "Control.OperationalTransformation.Server",
        "name": "ServerState",
        "normalized": "ServerState Revision a[b]",
        "package": "ot",
        "partial": "Server State",
        "signature": "ServerState Revision doc[op]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Server.html#v:applyOperation",
      "description": {
        "fct-descr": "\u003cp\u003eHandles incoming operations.\n\u003c/p\u003e",
        "fct-module": "Control.OperationalTransformation.Server",
        "fct-package": "ot",
        "fct-signature": "ServerState doc op-\u003e Revision-\u003e op-\u003e Either String (op, ServerState doc op)",
        "fct-type": "function",
        "title": "applyOperation"
      },
      "index": {
        "description": "Handles incoming operations",
        "hierarchy": "Control OperationalTransformation Server",
        "module": "Control.OperationalTransformation.Server",
        "name": "applyOperation",
        "normalized": "ServerState a b-\u003eRevision-\u003eb-\u003eEither String(b,ServerState a b)",
        "package": "ot",
        "partial": "Operation",
        "signature": "ServerState doc op-\u003eRevision-\u003eop-\u003eEither String(op,ServerState doc op)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Server.html#v:initialServerState",
      "description": {
        "fct-module": "Control.OperationalTransformation.Server",
        "fct-package": "ot",
        "fct-signature": "doc -\u003e ServerState doc op",
        "fct-source": "src/Control-OperationalTransformation-Server.html#initialServerState",
        "fct-type": "function",
        "title": "initialServerState"
      },
      "index": {
        "description": "",
        "hierarchy": "Control OperationalTransformation Server",
        "module": "Control.OperationalTransformation.Server",
        "name": "initialServerState",
        "normalized": "a-\u003eServerState a b",
        "package": "ot",
        "partial": "Server State",
        "signature": "doc-\u003eServerState doc op"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#",
      "description": {
        "fct-module": "Control.OperationalTransformation.Text",
        "fct-package": "ot",
        "fct-signature": "module",
        "fct-source": "src/Control-OperationalTransformation-Text.html",
        "fct-type": "module",
        "title": "Text"
      },
      "index": {
        "description": "",
        "hierarchy": "Control OperationalTransformation Text",
        "module": "Control.OperationalTransformation.Text",
        "name": "Text",
        "normalized": "",
        "package": "ot",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#t:Action",
      "description": {
        "fct-descr": "\u003cp\u003eAn action changes the text at the current position or advances the cursor.\n\u003c/p\u003e",
        "fct-module": "Control.OperationalTransformation.Text",
        "fct-package": "ot",
        "fct-signature": "data",
        "fct-source": "src/Control-OperationalTransformation-Text.html#Action",
        "fct-type": "data",
        "title": "Action"
      },
      "index": {
        "description": "An action changes the text at the current position or advances the cursor",
        "hierarchy": "Control OperationalTransformation Text",
        "module": "Control.OperationalTransformation.Text",
        "name": "Action",
        "normalized": "",
        "package": "ot",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#t:AugmentedTextOperation",
      "description": {
        "fct-descr": "\u003cp\u003eAn operation bundled with the cursor position after the operation.\n\u003c/p\u003e",
        "fct-module": "Control.OperationalTransformation.Text",
        "fct-package": "ot",
        "fct-signature": "data",
        "fct-source": "src/Control-OperationalTransformation-Text.html#AugmentedTextOperation",
        "fct-type": "data",
        "title": "AugmentedTextOperation"
      },
      "index": {
        "description": "An operation bundled with the cursor position after the operation",
        "hierarchy": "Control OperationalTransformation Text",
        "module": "Control.OperationalTransformation.Text",
        "name": "AugmentedTextOperation",
        "normalized": "",
        "package": "ot",
        "partial": "Augmented Text Operation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#t:Cursor",
      "description": {
        "fct-descr": "\u003cp\u003eA cursor has a \u003ccode\u003e\u003ca\u003ecursorPosition\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003ecursorSelectionEnd\u003c/a\u003e\u003c/code\u003e. Both are\n zero-based indexes into the document. When nothing is selected,\n \u003ccode\u003e\u003ca\u003ecursorSelectionEnd\u003c/a\u003e\u003c/code\u003e is equal to \u003ccode\u003e\u003ca\u003ecursorPosition\u003c/a\u003e\u003c/code\u003e. When there is a selection,\n \u003ccode\u003e\u003ca\u003ecursorPosition\u003c/a\u003e\u003c/code\u003e is always the side of the selection that would move if you\n pressed an arrow key.\n\u003c/p\u003e",
        "fct-module": "Control.OperationalTransformation.Text",
        "fct-package": "ot",
        "fct-signature": "data",
        "fct-source": "src/Control-OperationalTransformation-Text.html#Cursor",
        "fct-type": "data",
        "title": "Cursor"
      },
      "index": {
        "description": "cursor has cursorPosition and cursorSelectionEnd Both are zero-based indexes into the document When nothing is selected cursorSelectionEnd is equal to cursorPosition When there is selection cursorPosition is always the side of the selection that would move if you pressed an arrow key",
        "hierarchy": "Control OperationalTransformation Text",
        "module": "Control.OperationalTransformation.Text",
        "name": "Cursor",
        "normalized": "",
        "package": "ot",
        "partial": "Cursor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#t:TextOperation",
      "description": {
        "fct-descr": "\u003cp\u003eAn edit on plain text documents. An operation consists of multiple actions\n that change the document at the current cursor position or advance the\n cursor. After applying all actions, the cursor must be at the end of the\n document.\n\u003c/p\u003e",
        "fct-module": "Control.OperationalTransformation.Text",
        "fct-package": "ot",
        "fct-signature": "newtype",
        "fct-source": "src/Control-OperationalTransformation-Text.html#TextOperation",
        "fct-type": "newtype",
        "title": "TextOperation"
      },
      "index": {
        "description": "An edit on plain text documents An operation consists of multiple actions that change the document at the current cursor position or advance the cursor After applying all actions the cursor must be at the end of the document",
        "hierarchy": "Control OperationalTransformation Text",
        "module": "Control.OperationalTransformation.Text",
        "name": "TextOperation",
        "normalized": "",
        "package": "ot",
        "partial": "Text Operation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#v:AugmentedTextOperation",
      "description": {
        "fct-module": "Control.OperationalTransformation.Text",
        "fct-package": "ot",
        "fct-signature": "AugmentedTextOperation",
        "fct-source": "src/Control-OperationalTransformation-Text.html#AugmentedTextOperation",
        "fct-type": "function",
        "title": "AugmentedTextOperation"
      },
      "index": {
        "description": "",
        "hierarchy": "Control OperationalTransformation Text",
        "module": "Control.OperationalTransformation.Text",
        "name": "AugmentedTextOperation",
        "normalized": "",
        "package": "ot",
        "partial": "Augmented Text Operation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#v:Cursor",
      "description": {
        "fct-module": "Control.OperationalTransformation.Text",
        "fct-package": "ot",
        "fct-signature": "Cursor",
        "fct-source": "src/Control-OperationalTransformation-Text.html#Cursor",
        "fct-type": "function",
        "title": "Cursor"
      },
      "index": {
        "description": "",
        "hierarchy": "Control OperationalTransformation Text",
        "module": "Control.OperationalTransformation.Text",
        "name": "Cursor",
        "normalized": "",
        "package": "ot",
        "partial": "Cursor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#v:Delete",
      "description": {
        "fct-descr": "\u003cp\u003eDelete the next n characters.\n\u003c/p\u003e",
        "fct-module": "Control.OperationalTransformation.Text",
        "fct-package": "ot",
        "fct-signature": "Delete !Int",
        "fct-source": "src/Control-OperationalTransformation-Text.html#Action",
        "fct-type": "function",
        "title": "Delete"
      },
      "index": {
        "description": "Delete the next characters",
        "hierarchy": "Control OperationalTransformation Text",
        "module": "Control.OperationalTransformation.Text",
        "name": "Delete",
        "normalized": "",
        "package": "ot",
        "partial": "Delete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#v:Insert",
      "description": {
        "fct-descr": "\u003cp\u003eInsert the given text at the current position.\n\u003c/p\u003e",
        "fct-module": "Control.OperationalTransformation.Text",
        "fct-package": "ot",
        "fct-signature": "Insert !Text",
        "fct-source": "src/Control-OperationalTransformation-Text.html#Action",
        "fct-type": "function",
        "title": "Insert"
      },
      "index": {
        "description": "Insert the given text at the current position",
        "hierarchy": "Control OperationalTransformation Text",
        "module": "Control.OperationalTransformation.Text",
        "name": "Insert",
        "normalized": "",
        "package": "ot",
        "partial": "Insert",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#v:Retain",
      "description": {
        "fct-descr": "\u003cp\u003eSkip the next n characters.\n\u003c/p\u003e",
        "fct-module": "Control.OperationalTransformation.Text",
        "fct-package": "ot",
        "fct-signature": "Retain !Int",
        "fct-source": "src/Control-OperationalTransformation-Text.html#Action",
        "fct-type": "function",
        "title": "Retain"
      },
      "index": {
        "description": "Skip the next characters",
        "hierarchy": "Control OperationalTransformation Text",
        "module": "Control.OperationalTransformation.Text",
        "name": "Retain",
        "normalized": "",
        "package": "ot",
        "partial": "Retain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#v:TextOperation",
      "description": {
        "fct-module": "Control.OperationalTransformation.Text",
        "fct-package": "ot",
        "fct-signature": "TextOperation [Action]",
        "fct-source": "src/Control-OperationalTransformation-Text.html#TextOperation",
        "fct-type": "function",
        "title": "TextOperation"
      },
      "index": {
        "description": "",
        "hierarchy": "Control OperationalTransformation Text",
        "module": "Control.OperationalTransformation.Text",
        "name": "TextOperation",
        "normalized": "TextOperation[Action]",
        "package": "ot",
        "partial": "Text Operation",
        "signature": "TextOperation[Action]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#v:augmentedCursor",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.OperationalTransformation.Text",
        "fct-package": "ot",
        "fct-signature": "Cursor",
        "fct-source": "src/Control-OperationalTransformation-Text.html#AugmentedTextOperation",
        "fct-type": "function",
        "title": "augmentedCursor"
      },
      "index": {
        "description": "",
        "hierarchy": "Control OperationalTransformation Text",
        "module": "Control.OperationalTransformation.Text",
        "name": "augmentedCursor",
        "normalized": "",
        "package": "ot",
        "partial": "Cursor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#v:augmentedOperation",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.OperationalTransformation.Text",
        "fct-package": "ot",
        "fct-signature": "TextOperation",
        "fct-source": "src/Control-OperationalTransformation-Text.html#AugmentedTextOperation",
        "fct-type": "function",
        "title": "augmentedOperation"
      },
      "index": {
        "description": "",
        "hierarchy": "Control OperationalTransformation Text",
        "module": "Control.OperationalTransformation.Text",
        "name": "augmentedOperation",
        "normalized": "",
        "package": "ot",
        "partial": "Operation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#v:cursorPosition",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.OperationalTransformation.Text",
        "fct-package": "ot",
        "fct-signature": "Int",
        "fct-source": "src/Control-OperationalTransformation-Text.html#Cursor",
        "fct-type": "function",
        "title": "cursorPosition"
      },
      "index": {
        "description": "",
        "hierarchy": "Control OperationalTransformation Text",
        "module": "Control.OperationalTransformation.Text",
        "name": "cursorPosition",
        "normalized": "",
        "package": "ot",
        "partial": "Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#v:cursorSelectionEnd",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.OperationalTransformation.Text",
        "fct-package": "ot",
        "fct-signature": "Int",
        "fct-source": "src/Control-OperationalTransformation-Text.html#Cursor",
        "fct-type": "function",
        "title": "cursorSelectionEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Control OperationalTransformation Text",
        "module": "Control.OperationalTransformation.Text",
        "name": "cursorSelectionEnd",
        "normalized": "",
        "package": "ot",
        "partial": "Selection End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#v:invertOperation",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the inverse of an operation. Useful for implementing undo.\n\u003c/p\u003e",
        "fct-module": "Control.OperationalTransformation.Text",
        "fct-package": "ot",
        "fct-signature": "TextOperation-\u003e Text-\u003e Either String TextOperation",
        "fct-type": "function",
        "title": "invertOperation"
      },
      "index": {
        "description": "Computes the inverse of an operation Useful for implementing undo",
        "hierarchy": "Control OperationalTransformation Text",
        "module": "Control.OperationalTransformation.Text",
        "name": "invertOperation",
        "normalized": "TextOperation-\u003eText-\u003eEither String TextOperation",
        "package": "ot",
        "partial": "Operation",
        "signature": "TextOperation-\u003eText-\u003eEither String TextOperation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#v:updateCursor",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate cursor with respect to an operation.\n\u003c/p\u003e",
        "fct-module": "Control.OperationalTransformation.Text",
        "fct-package": "ot",
        "fct-signature": "Cursor -\u003e TextOperation -\u003e Cursor",
        "fct-source": "src/Control-OperationalTransformation-Text.html#updateCursor",
        "fct-type": "function",
        "title": "updateCursor"
      },
      "index": {
        "description": "Update cursor with respect to an operation",
        "hierarchy": "Control OperationalTransformation Text",
        "module": "Control.OperationalTransformation.Text",
        "name": "updateCursor",
        "normalized": "Cursor-\u003eTextOperation-\u003eCursor",
        "package": "ot",
        "partial": "Cursor",
        "signature": "Cursor-\u003eTextOperation-\u003eCursor"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation.html#",
      "description": {
        "fct-module": "Control.OperationalTransformation",
        "fct-package": "ot",
        "fct-signature": "module",
        "fct-source": "src/Control-OperationalTransformation.html",
        "fct-type": "module",
        "title": "OperationalTransformation"
      },
      "index": {
        "description": "",
        "hierarchy": "Control OperationalTransformation",
        "module": "Control.OperationalTransformation",
        "name": "OperationalTransformation",
        "normalized": "",
        "package": "ot",
        "partial": "Operational Transformation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation.html#t:OTComposableOperation",
      "description": {
        "fct-module": "Control.OperationalTransformation",
        "fct-package": "ot",
        "fct-signature": "class",
        "fct-source": "src/Control-OperationalTransformation.html#OTComposableOperation",
        "fct-type": "class",
        "title": "OTComposableOperation"
      },
      "index": {
        "description": "",
        "hierarchy": "Control OperationalTransformation",
        "module": "Control.OperationalTransformation",
        "name": "OTComposableOperation",
        "normalized": "",
        "package": "ot",
        "partial": "OTComposable Operation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation.html#t:OTOperation",
      "description": {
        "fct-module": "Control.OperationalTransformation",
        "fct-package": "ot",
        "fct-signature": "class",
        "fct-source": "src/Control-OperationalTransformation.html#OTOperation",
        "fct-type": "class",
        "title": "OTOperation"
      },
      "index": {
        "description": "",
        "hierarchy": "Control OperationalTransformation",
        "module": "Control.OperationalTransformation",
        "name": "OTOperation",
        "normalized": "",
        "package": "ot",
        "partial": "OTOperation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation.html#t:OTSystem",
      "description": {
        "fct-module": "Control.OperationalTransformation",
        "fct-package": "ot",
        "fct-signature": "class",
        "fct-source": "src/Control-OperationalTransformation.html#OTSystem",
        "fct-type": "class",
        "title": "OTSystem"
      },
      "index": {
        "description": "",
        "hierarchy": "Control OperationalTransformation",
        "module": "Control.OperationalTransformation",
        "name": "OTSystem",
        "normalized": "",
        "package": "ot",
        "partial": "OTSystem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation.html#v:apply",
      "description": {
        "fct-descr": "\u003cp\u003eApply an operation to a document, producing a new document.\n\u003c/p\u003e",
        "fct-module": "Control.OperationalTransformation",
        "fct-package": "ot",
        "fct-signature": "op -\u003e doc -\u003e Either String doc",
        "fct-source": "src/Control-OperationalTransformation.html#apply",
        "fct-type": "method",
        "title": "apply"
      },
      "index": {
        "description": "Apply an operation to document producing new document",
        "hierarchy": "Control OperationalTransformation",
        "module": "Control.OperationalTransformation",
        "name": "apply",
        "normalized": "a-\u003eb-\u003eEither String b",
        "package": "ot",
        "partial": "",
        "signature": "op-\u003edoc-\u003eEither String doc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation.html#v:compose",
      "description": {
        "fct-descr": "\u003cp\u003eComposes two operations \u003cem\u003ea\u003c/em\u003e and \u003cem\u003eb\u003c/em\u003e, producing \u003cem\u003ec\u003c/em\u003e, such that \u003cem\u003ec\u003c/em\u003e has the\n same effect when applied to a document as applying \u003cem\u003ea\u003c/em\u003e and \u003cem\u003eb\u003c/em\u003e one after\n another.\n\u003c/p\u003e",
        "fct-module": "Control.OperationalTransformation",
        "fct-package": "ot",
        "fct-signature": "op -\u003e op -\u003e Either String op",
        "fct-source": "src/Control-OperationalTransformation.html#compose",
        "fct-type": "method",
        "title": "compose"
      },
      "index": {
        "description": "Composes two operations and producing such that has the same effect when applied to document as applying and one after another",
        "hierarchy": "Control OperationalTransformation",
        "module": "Control.OperationalTransformation",
        "name": "compose",
        "normalized": "a-\u003ea-\u003eEither String a",
        "package": "ot",
        "partial": "",
        "signature": "op-\u003eop-\u003eEither String op"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation.html#v:transform",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms two concurrent operations \u003cem\u003ea\u003c/em\u003e and \u003cem\u003eb\u003c/em\u003e, producing \u003cem\u003ea'\u003c/em\u003e and \u003cem\u003eb'\u003c/em\u003e \n such that \u003ccode\u003eb' &#8728; a == a' &#8728; b\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.OperationalTransformation",
        "fct-package": "ot",
        "fct-signature": "op -\u003e op -\u003e Either String (op, op)",
        "fct-source": "src/Control-OperationalTransformation.html#transform",
        "fct-type": "method",
        "title": "transform"
      },
      "index": {
        "description": "Transforms two concurrent operations and producing and such that",
        "hierarchy": "Control OperationalTransformation",
        "module": "Control.OperationalTransformation",
        "name": "transform",
        "normalized": "a-\u003ea-\u003eEither String(a,a)",
        "package": "ot",
        "partial": "",
        "signature": "op-\u003eop-\u003eEither String(op,op)"
      }
    }
  }
]