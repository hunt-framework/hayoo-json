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
        "word": "ot"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.OperationalTransformation.Client",
          "name": "Client",
          "package": "ot",
          "source": "src/Control-OperationalTransformation-Client.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control OperationalTransformation Client",
          "module": "Control.OperationalTransformation.Client",
          "name": "Client",
          "package": "ot",
          "partial": "Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Client.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAt every moment, the client is in one of three states.\n\u003c/p\u003e",
          "module": "Control.OperationalTransformation.Client",
          "name": "ClientState",
          "package": "ot",
          "source": "src/Control-OperationalTransformation-Client.html#ClientState",
          "type": "data"
        },
        "index": {
          "description": "At every moment the client is in one of three states",
          "hierarchy": "Control OperationalTransformation Client",
          "module": "Control.OperationalTransformation.Client",
          "name": "ClientState",
          "package": "ot",
          "partial": "Client State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Client.html#t:ClientState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll of the client's operations have been acknowledged by the server.\n\u003c/p\u003e",
          "module": "Control.OperationalTransformation.Client",
          "name": "ClientSynchronized",
          "package": "ot",
          "signature": "ClientSynchronized",
          "source": "src/Control-OperationalTransformation-Client.html#ClientState",
          "type": "function"
        },
        "index": {
          "description": "All of the client operations have been acknowledged by the server",
          "hierarchy": "Control OperationalTransformation Client",
          "module": "Control.OperationalTransformation.Client",
          "name": "ClientSynchronized",
          "package": "ot",
          "partial": "Client Synchronized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Client.html#v:ClientSynchronized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe client has sent an operation to the server and it is still waiting\n for an acknowledgement.\n\u003c/p\u003e",
          "module": "Control.OperationalTransformation.Client",
          "name": "ClientWaiting",
          "package": "ot",
          "signature": "ClientWaiting op",
          "source": "src/Control-OperationalTransformation-Client.html#ClientState",
          "type": "function"
        },
        "index": {
          "description": "The client has sent an operation to the server and it is still waiting for an acknowledgement",
          "hierarchy": "Control OperationalTransformation Client",
          "module": "Control.OperationalTransformation.Client",
          "name": "ClientWaiting",
          "package": "ot",
          "partial": "Client Waiting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Client.html#v:ClientWaiting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe client is waiting for an acknowledgement for a pending operation and\n the client is buffering local changes.\n\u003c/p\u003e",
          "module": "Control.OperationalTransformation.Client",
          "name": "ClientWaitingWithBuffer",
          "package": "ot",
          "signature": "ClientWaitingWithBuffer op op",
          "source": "src/Control-OperationalTransformation-Client.html#ClientState",
          "type": "function"
        },
        "index": {
          "description": "The client is waiting for an acknowledgement for pending operation and the client is buffering local changes",
          "hierarchy": "Control OperationalTransformation Client",
          "module": "Control.OperationalTransformation.Client",
          "name": "ClientWaitingWithBuffer",
          "package": "ot",
          "partial": "Client Waiting With Buffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Client.html#v:ClientWaitingWithBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle user-generated operations.\n\u003c/p\u003e",
          "module": "Control.OperationalTransformation.Client",
          "name": "applyClient",
          "package": "ot",
          "signature": "ClientState op-\u003e op-\u003e Either String (Bool, ClientState op)",
          "type": "function"
        },
        "index": {
          "description": "Handle user-generated operations",
          "hierarchy": "Control OperationalTransformation Client",
          "module": "Control.OperationalTransformation.Client",
          "name": "applyClient",
          "normalized": "ClientState a-\u003ea-\u003eEither String(Bool,ClientState a)",
          "package": "ot",
          "partial": "Client",
          "signature": "ClientState op-\u003eop-\u003eEither String(Bool,ClientState op)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Client.html#v:applyClient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle incoming operations from the server.\n\u003c/p\u003e",
          "module": "Control.OperationalTransformation.Client",
          "name": "applyServer",
          "package": "ot",
          "signature": "ClientState op-\u003e op-\u003e Either String (op, ClientState op)",
          "type": "function"
        },
        "index": {
          "description": "Handle incoming operations from the server",
          "hierarchy": "Control OperationalTransformation Client",
          "module": "Control.OperationalTransformation.Client",
          "name": "applyServer",
          "normalized": "ClientState a-\u003ea-\u003eEither String(a,ClientState a)",
          "package": "ot",
          "partial": "Server",
          "signature": "ClientState op-\u003eop-\u003eEither String(op,ClientState op)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Client.html#v:applyServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state a newly connected client starts in (synonym for\n \u003ccode\u003e\u003ca\u003eClientSynchronized\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Control.OperationalTransformation.Client",
          "name": "initialClientState",
          "package": "ot",
          "signature": "ClientState op",
          "source": "src/Control-OperationalTransformation-Client.html#initialClientState",
          "type": "function"
        },
        "index": {
          "description": "The state newly connected client starts in synonym for ClientSynchronized",
          "hierarchy": "Control OperationalTransformation Client",
          "module": "Control.OperationalTransformation.Client",
          "name": "initialClientState",
          "package": "ot",
          "partial": "Client State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Client.html#v:initialClientState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle acknowledgements.\n\u003c/p\u003e",
          "module": "Control.OperationalTransformation.Client",
          "name": "serverAck",
          "package": "ot",
          "signature": "ClientState op-\u003e Maybe (Maybe op, ClientState op)",
          "type": "function"
        },
        "index": {
          "description": "Handle acknowledgements",
          "hierarchy": "Control OperationalTransformation Client",
          "module": "Control.OperationalTransformation.Client",
          "name": "serverAck",
          "normalized": "ClientState a-\u003eMaybe(Maybe a,ClientState a)",
          "package": "ot",
          "partial": "Ack",
          "signature": "ClientState op-\u003eMaybe(Maybe op,ClientState op)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Client.html#v:serverAck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.OperationalTransformation.Properties",
          "name": "Properties",
          "package": "ot",
          "source": "src/Control-OperationalTransformation-Properties.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control OperationalTransformation Properties",
          "module": "Control.OperationalTransformation.Properties",
          "name": "Properties",
          "package": "ot",
          "partial": "Properties",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Properties.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e(b &#8728; a)(d) = a(b(d))\u003c/code\u003e where \u003cem\u003ea\u003c/em\u003e and \u003cem\u003eb\u003c/em\u003e are two consecutive operations\n and \u003cem\u003ed\u003c/em\u003e is the initial document.\n\u003c/p\u003e",
          "module": "Control.OperationalTransformation.Properties",
          "name": "prop_compose_apply",
          "package": "ot",
          "signature": "(doc -\u003e Gen op) -\u003e Property",
          "source": "src/Control-OperationalTransformation-Properties.html#prop_compose_apply",
          "type": "function"
        },
        "index": {
          "description": "where and are two consecutive operations and is the initial document",
          "hierarchy": "Control OperationalTransformation Properties",
          "module": "Control.OperationalTransformation.Properties",
          "name": "prop_compose_apply",
          "normalized": "(a-\u003eGen b)-\u003eProperty",
          "package": "ot",
          "signature": "(doc-\u003eGen op)-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Properties.html#v:prop_compose_apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eb'(a(d)) = b'(a(d))\u003c/code\u003e&#160;where \u003cem\u003ea\u003c/em\u003e and \u003cem\u003eb\u003c/em\u003e are random operations, \u003cem\u003ed\u003c/em\u003e is the\n initial document and \u003ccode\u003e(a', b') = transform(a, b)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.OperationalTransformation.Properties",
          "name": "prop_transform_apply",
          "package": "ot",
          "signature": "(doc -\u003e Gen op) -\u003e Property",
          "source": "src/Control-OperationalTransformation-Properties.html#prop_transform_apply",
          "type": "function"
        },
        "index": {
          "description": "where and are random operations is the initial document and transform",
          "hierarchy": "Control OperationalTransformation Properties",
          "module": "Control.OperationalTransformation.Properties",
          "name": "prop_transform_apply",
          "normalized": "(a-\u003eGen b)-\u003eProperty",
          "package": "ot",
          "signature": "(doc-\u003eGen op)-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Properties.html#v:prop_transform_apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.OperationalTransformation.Server",
          "name": "Server",
          "package": "ot",
          "source": "src/Control-OperationalTransformation-Server.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control OperationalTransformation Server",
          "module": "Control.OperationalTransformation.Server",
          "name": "Server",
          "package": "ot",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Server.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.OperationalTransformation.Server",
          "name": "Revision",
          "package": "ot",
          "source": "src/Control-OperationalTransformation-Server.html#Revision",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control OperationalTransformation Server",
          "module": "Control.OperationalTransformation.Server",
          "name": "Revision",
          "package": "ot",
          "partial": "Revision",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Server.html#t:Revision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe server keeps the current revision number and a list of previous\n operations to transform incoming operations against.\n\u003c/p\u003e",
          "module": "Control.OperationalTransformation.Server",
          "name": "ServerState",
          "package": "ot",
          "source": "src/Control-OperationalTransformation-Server.html#ServerState",
          "type": "data"
        },
        "index": {
          "description": "The server keeps the current revision number and list of previous operations to transform incoming operations against",
          "hierarchy": "Control OperationalTransformation Server",
          "module": "Control.OperationalTransformation.Server",
          "name": "ServerState",
          "package": "ot",
          "partial": "Server State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Server.html#t:ServerState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.OperationalTransformation.Server",
          "name": "ServerState",
          "package": "ot",
          "signature": "ServerState Revision doc [op]",
          "source": "src/Control-OperationalTransformation-Server.html#ServerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control OperationalTransformation Server",
          "module": "Control.OperationalTransformation.Server",
          "name": "ServerState",
          "normalized": "ServerState Revision a[b]",
          "package": "ot",
          "partial": "Server State",
          "signature": "ServerState Revision doc[op]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Server.html#v:ServerState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandles incoming operations.\n\u003c/p\u003e",
          "module": "Control.OperationalTransformation.Server",
          "name": "applyOperation",
          "package": "ot",
          "signature": "ServerState doc op-\u003e Revision-\u003e op-\u003e Either String (op, ServerState doc op)",
          "type": "function"
        },
        "index": {
          "description": "Handles incoming operations",
          "hierarchy": "Control OperationalTransformation Server",
          "module": "Control.OperationalTransformation.Server",
          "name": "applyOperation",
          "normalized": "ServerState a b-\u003eRevision-\u003eb-\u003eEither String(b,ServerState a b)",
          "package": "ot",
          "partial": "Operation",
          "signature": "ServerState doc op-\u003eRevision-\u003eop-\u003eEither String(op,ServerState doc op)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Server.html#v:applyOperation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.OperationalTransformation.Server",
          "name": "initialServerState",
          "package": "ot",
          "signature": "doc -\u003e ServerState doc op",
          "source": "src/Control-OperationalTransformation-Server.html#initialServerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control OperationalTransformation Server",
          "module": "Control.OperationalTransformation.Server",
          "name": "initialServerState",
          "normalized": "a-\u003eServerState a b",
          "package": "ot",
          "partial": "Server State",
          "signature": "doc-\u003eServerState doc op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Server.html#v:initialServerState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.OperationalTransformation.Text",
          "name": "Text",
          "package": "ot",
          "source": "src/Control-OperationalTransformation-Text.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control OperationalTransformation Text",
          "module": "Control.OperationalTransformation.Text",
          "name": "Text",
          "package": "ot",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn action changes the text at the current position or advances the cursor.\n\u003c/p\u003e",
          "module": "Control.OperationalTransformation.Text",
          "name": "Action",
          "package": "ot",
          "source": "src/Control-OperationalTransformation-Text.html#Action",
          "type": "data"
        },
        "index": {
          "description": "An action changes the text at the current position or advances the cursor",
          "hierarchy": "Control OperationalTransformation Text",
          "module": "Control.OperationalTransformation.Text",
          "name": "Action",
          "package": "ot",
          "partial": "Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#t:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn operation bundled with the cursor position after the operation.\n\u003c/p\u003e",
          "module": "Control.OperationalTransformation.Text",
          "name": "AugmentedTextOperation",
          "package": "ot",
          "source": "src/Control-OperationalTransformation-Text.html#AugmentedTextOperation",
          "type": "data"
        },
        "index": {
          "description": "An operation bundled with the cursor position after the operation",
          "hierarchy": "Control OperationalTransformation Text",
          "module": "Control.OperationalTransformation.Text",
          "name": "AugmentedTextOperation",
          "package": "ot",
          "partial": "Augmented Text Operation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#t:AugmentedTextOperation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA cursor has a \u003ccode\u003e\u003ca\u003ecursorPosition\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003ecursorSelectionEnd\u003c/a\u003e\u003c/code\u003e. Both are\n zero-based indexes into the document. When nothing is selected,\n \u003ccode\u003e\u003ca\u003ecursorSelectionEnd\u003c/a\u003e\u003c/code\u003e is equal to \u003ccode\u003e\u003ca\u003ecursorPosition\u003c/a\u003e\u003c/code\u003e. When there is a selection,\n \u003ccode\u003e\u003ca\u003ecursorPosition\u003c/a\u003e\u003c/code\u003e is always the side of the selection that would move if you\n pressed an arrow key.\n\u003c/p\u003e",
          "module": "Control.OperationalTransformation.Text",
          "name": "Cursor",
          "package": "ot",
          "source": "src/Control-OperationalTransformation-Text.html#Cursor",
          "type": "data"
        },
        "index": {
          "description": "cursor has cursorPosition and cursorSelectionEnd Both are zero-based indexes into the document When nothing is selected cursorSelectionEnd is equal to cursorPosition When there is selection cursorPosition is always the side of the selection that would move if you pressed an arrow key",
          "hierarchy": "Control OperationalTransformation Text",
          "module": "Control.OperationalTransformation.Text",
          "name": "Cursor",
          "package": "ot",
          "partial": "Cursor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#t:Cursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn edit on plain text documents. An operation consists of multiple actions\n that change the document at the current cursor position or advance the\n cursor. After applying all actions, the cursor must be at the end of the\n document.\n\u003c/p\u003e",
          "module": "Control.OperationalTransformation.Text",
          "name": "TextOperation",
          "package": "ot",
          "source": "src/Control-OperationalTransformation-Text.html#TextOperation",
          "type": "newtype"
        },
        "index": {
          "description": "An edit on plain text documents An operation consists of multiple actions that change the document at the current cursor position or advance the cursor After applying all actions the cursor must be at the end of the document",
          "hierarchy": "Control OperationalTransformation Text",
          "module": "Control.OperationalTransformation.Text",
          "name": "TextOperation",
          "package": "ot",
          "partial": "Text Operation",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#t:TextOperation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.OperationalTransformation.Text",
          "name": "AugmentedTextOperation",
          "package": "ot",
          "signature": "AugmentedTextOperation",
          "source": "src/Control-OperationalTransformation-Text.html#AugmentedTextOperation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control OperationalTransformation Text",
          "module": "Control.OperationalTransformation.Text",
          "name": "AugmentedTextOperation",
          "package": "ot",
          "partial": "Augmented Text Operation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#v:AugmentedTextOperation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.OperationalTransformation.Text",
          "name": "Cursor",
          "package": "ot",
          "signature": "Cursor",
          "source": "src/Control-OperationalTransformation-Text.html#Cursor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control OperationalTransformation Text",
          "module": "Control.OperationalTransformation.Text",
          "name": "Cursor",
          "package": "ot",
          "partial": "Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#v:Cursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the next n characters.\n\u003c/p\u003e",
          "module": "Control.OperationalTransformation.Text",
          "name": "Delete",
          "package": "ot",
          "signature": "Delete !Int",
          "source": "src/Control-OperationalTransformation-Text.html#Action",
          "type": "function"
        },
        "index": {
          "description": "Delete the next characters",
          "hierarchy": "Control OperationalTransformation Text",
          "module": "Control.OperationalTransformation.Text",
          "name": "Delete",
          "package": "ot",
          "partial": "Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#v:Delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert the given text at the current position.\n\u003c/p\u003e",
          "module": "Control.OperationalTransformation.Text",
          "name": "Insert",
          "package": "ot",
          "signature": "Insert !Text",
          "source": "src/Control-OperationalTransformation-Text.html#Action",
          "type": "function"
        },
        "index": {
          "description": "Insert the given text at the current position",
          "hierarchy": "Control OperationalTransformation Text",
          "module": "Control.OperationalTransformation.Text",
          "name": "Insert",
          "package": "ot",
          "partial": "Insert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#v:Insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip the next n characters.\n\u003c/p\u003e",
          "module": "Control.OperationalTransformation.Text",
          "name": "Retain",
          "package": "ot",
          "signature": "Retain !Int",
          "source": "src/Control-OperationalTransformation-Text.html#Action",
          "type": "function"
        },
        "index": {
          "description": "Skip the next characters",
          "hierarchy": "Control OperationalTransformation Text",
          "module": "Control.OperationalTransformation.Text",
          "name": "Retain",
          "package": "ot",
          "partial": "Retain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#v:Retain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.OperationalTransformation.Text",
          "name": "TextOperation",
          "package": "ot",
          "signature": "TextOperation [Action]",
          "source": "src/Control-OperationalTransformation-Text.html#TextOperation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control OperationalTransformation Text",
          "module": "Control.OperationalTransformation.Text",
          "name": "TextOperation",
          "normalized": "TextOperation[Action]",
          "package": "ot",
          "partial": "Text Operation",
          "signature": "TextOperation[Action]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#v:TextOperation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.OperationalTransformation.Text",
          "name": "augmentedCursor",
          "package": "ot",
          "signature": "Cursor",
          "source": "src/Control-OperationalTransformation-Text.html#AugmentedTextOperation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control OperationalTransformation Text",
          "module": "Control.OperationalTransformation.Text",
          "name": "augmentedCursor",
          "package": "ot",
          "partial": "Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#v:augmentedCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.OperationalTransformation.Text",
          "name": "augmentedOperation",
          "package": "ot",
          "signature": "TextOperation",
          "source": "src/Control-OperationalTransformation-Text.html#AugmentedTextOperation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control OperationalTransformation Text",
          "module": "Control.OperationalTransformation.Text",
          "name": "augmentedOperation",
          "package": "ot",
          "partial": "Operation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#v:augmentedOperation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.OperationalTransformation.Text",
          "name": "cursorPosition",
          "package": "ot",
          "signature": "Int",
          "source": "src/Control-OperationalTransformation-Text.html#Cursor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control OperationalTransformation Text",
          "module": "Control.OperationalTransformation.Text",
          "name": "cursorPosition",
          "package": "ot",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#v:cursorPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.OperationalTransformation.Text",
          "name": "cursorSelectionEnd",
          "package": "ot",
          "signature": "Int",
          "source": "src/Control-OperationalTransformation-Text.html#Cursor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control OperationalTransformation Text",
          "module": "Control.OperationalTransformation.Text",
          "name": "cursorSelectionEnd",
          "package": "ot",
          "partial": "Selection End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#v:cursorSelectionEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the inverse of an operation. Useful for implementing undo.\n\u003c/p\u003e",
          "module": "Control.OperationalTransformation.Text",
          "name": "invertOperation",
          "package": "ot",
          "signature": "TextOperation-\u003e Text-\u003e Either String TextOperation",
          "type": "function"
        },
        "index": {
          "description": "Computes the inverse of an operation Useful for implementing undo",
          "hierarchy": "Control OperationalTransformation Text",
          "module": "Control.OperationalTransformation.Text",
          "name": "invertOperation",
          "normalized": "TextOperation-\u003eText-\u003eEither String TextOperation",
          "package": "ot",
          "partial": "Operation",
          "signature": "TextOperation-\u003eText-\u003eEither String TextOperation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#v:invertOperation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate cursor with respect to an operation.\n\u003c/p\u003e",
          "module": "Control.OperationalTransformation.Text",
          "name": "updateCursor",
          "package": "ot",
          "signature": "Cursor -\u003e TextOperation -\u003e Cursor",
          "source": "src/Control-OperationalTransformation-Text.html#updateCursor",
          "type": "function"
        },
        "index": {
          "description": "Update cursor with respect to an operation",
          "hierarchy": "Control OperationalTransformation Text",
          "module": "Control.OperationalTransformation.Text",
          "name": "updateCursor",
          "normalized": "Cursor-\u003eTextOperation-\u003eCursor",
          "package": "ot",
          "partial": "Cursor",
          "signature": "Cursor-\u003eTextOperation-\u003eCursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation-Text.html#v:updateCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.OperationalTransformation",
          "name": "OperationalTransformation",
          "package": "ot",
          "source": "src/Control-OperationalTransformation.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control OperationalTransformation",
          "module": "Control.OperationalTransformation",
          "name": "OperationalTransformation",
          "package": "ot",
          "partial": "Operational Transformation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.OperationalTransformation",
          "name": "OTComposableOperation",
          "package": "ot",
          "source": "src/Control-OperationalTransformation.html#OTComposableOperation",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control OperationalTransformation",
          "module": "Control.OperationalTransformation",
          "name": "OTComposableOperation",
          "package": "ot",
          "partial": "OTComposable Operation",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation.html#t:OTComposableOperation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.OperationalTransformation",
          "name": "OTOperation",
          "package": "ot",
          "source": "src/Control-OperationalTransformation.html#OTOperation",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control OperationalTransformation",
          "module": "Control.OperationalTransformation",
          "name": "OTOperation",
          "package": "ot",
          "partial": "OTOperation",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation.html#t:OTOperation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.OperationalTransformation",
          "name": "OTSystem",
          "package": "ot",
          "source": "src/Control-OperationalTransformation.html#OTSystem",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control OperationalTransformation",
          "module": "Control.OperationalTransformation",
          "name": "OTSystem",
          "package": "ot",
          "partial": "OTSystem",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation.html#t:OTSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an operation to a document, producing a new document.\n\u003c/p\u003e",
          "module": "Control.OperationalTransformation",
          "name": "apply",
          "package": "ot",
          "signature": "op -\u003e doc -\u003e Either String doc",
          "source": "src/Control-OperationalTransformation.html#apply",
          "type": "method"
        },
        "index": {
          "description": "Apply an operation to document producing new document",
          "hierarchy": "Control OperationalTransformation",
          "module": "Control.OperationalTransformation",
          "name": "apply",
          "normalized": "a-\u003eb-\u003eEither String b",
          "package": "ot",
          "signature": "op-\u003edoc-\u003eEither String doc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposes two operations \u003cem\u003ea\u003c/em\u003e and \u003cem\u003eb\u003c/em\u003e, producing \u003cem\u003ec\u003c/em\u003e, such that \u003cem\u003ec\u003c/em\u003e has the\n same effect when applied to a document as applying \u003cem\u003ea\u003c/em\u003e and \u003cem\u003eb\u003c/em\u003e one after\n another.\n\u003c/p\u003e",
          "module": "Control.OperationalTransformation",
          "name": "compose",
          "package": "ot",
          "signature": "op -\u003e op -\u003e Either String op",
          "source": "src/Control-OperationalTransformation.html#compose",
          "type": "method"
        },
        "index": {
          "description": "Composes two operations and producing such that has the same effect when applied to document as applying and one after another",
          "hierarchy": "Control OperationalTransformation",
          "module": "Control.OperationalTransformation",
          "name": "compose",
          "normalized": "a-\u003ea-\u003eEither String a",
          "package": "ot",
          "signature": "op-\u003eop-\u003eEither String op",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation.html#v:compose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms two concurrent operations \u003cem\u003ea\u003c/em\u003e and \u003cem\u003eb\u003c/em\u003e, producing \u003cem\u003ea'\u003c/em\u003e and \u003cem\u003eb'\u003c/em\u003e \n such that \u003ccode\u003eb' &#8728; a == a' &#8728; b\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.OperationalTransformation",
          "name": "transform",
          "package": "ot",
          "signature": "op -\u003e op -\u003e Either String (op, op)",
          "source": "src/Control-OperationalTransformation.html#transform",
          "type": "method"
        },
        "index": {
          "description": "Transforms two concurrent operations and producing and such that",
          "hierarchy": "Control OperationalTransformation",
          "module": "Control.OperationalTransformation",
          "name": "transform",
          "normalized": "a-\u003ea-\u003eEither String(a,a)",
          "package": "ot",
          "signature": "op-\u003eop-\u003eEither String(op,op)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ot/docs/Control-OperationalTransformation.html#v:transform"
      }
    }
  ]
]