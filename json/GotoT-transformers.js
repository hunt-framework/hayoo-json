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
        "word": "GotoT-transformers"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a monad and a monad transformer that allow the\n user to transfer the flow of execution from an arbitrary point of a\n monadic computation to another monadic computation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.Goto",
          "name": "Goto",
          "package": "GotoT-transformers",
          "source": "src/Control-Monad-Trans-Goto.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides monad and monad transformer that allow the user to transfer the flow of execution from an arbitrary point of monadic computation to another monadic computation",
          "hierarchy": "Control Monad Trans Goto",
          "module": "Control.Monad.Trans.Goto",
          "name": "Goto",
          "package": "GotoT-transformers",
          "partial": "Goto",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GotoT-transformers/docs/Control-Monad-Trans-Goto.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA goto monad, parameterized by the type \u003ccode\u003er\u003c/code\u003e of the value to return.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Goto",
          "name": "Goto",
          "package": "GotoT-transformers",
          "source": "src/Control-Monad-Trans-Goto.html#Goto",
          "type": "type"
        },
        "index": {
          "description": "goto monad parameterized by the type of the value to return",
          "hierarchy": "Control Monad Trans Goto",
          "module": "Control.Monad.Trans.Goto",
          "name": "Goto",
          "package": "GotoT-transformers",
          "partial": "Goto",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/GotoT-transformers/docs/Control-Monad-Trans-Goto.html#t:Goto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA goto monad transformer parameterized by\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003er\u003c/code\u003e - the value that will ultimately be returned; and\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - the inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eGotoT\u003c/a\u003e\u003c/code\u003e type wraps a monadic value that contains either a pure value or\n the next place at which the flow of execution should be continued.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Goto",
          "name": "GotoT",
          "package": "GotoT-transformers",
          "source": "src/Control-Monad-Trans-Goto.html#GotoT",
          "type": "newtype"
        },
        "index": {
          "description": "goto monad transformer parameterized by the value that will ultimately be returned and the inner monad The GotoT type wraps monadic value that contains either pure value or the next place at which the flow of execution should be continued",
          "hierarchy": "Control Monad Trans Goto",
          "module": "Control.Monad.Trans.Goto",
          "name": "GotoT",
          "package": "GotoT-transformers",
          "partial": "Goto",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/GotoT-transformers/docs/Control-Monad-Trans-Goto.html#t:GotoT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Goto",
          "name": "GotoT",
          "package": "GotoT-transformers",
          "signature": "GotoT",
          "source": "src/Control-Monad-Trans-Goto.html#GotoT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Goto",
          "module": "Control.Monad.Trans.Goto",
          "name": "GotoT",
          "package": "GotoT-transformers",
          "partial": "Goto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GotoT-transformers/docs/Control-Monad-Trans-Goto.html#v:GotoT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransfer the flow of executation from an arbitrary point in the current\n   monadic computation to another monadic computation.\n\u003c/p\u003e\u003cp\u003eNote that the destination computation must promise to produce the\n same value that was promised to be returned by the origin\n computation.  Also, since control is being transferred away from\n the origin computation, the goto function returns a monadic value that\n can have an arbitrary type, since the monadic value will never\n be used by the originating computation.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Goto",
          "name": "goto",
          "package": "GotoT-transformers",
          "signature": "GotoT r m r-\u003e GotoT r m a",
          "type": "function"
        },
        "index": {
          "description": "Transfer the flow of executation from an arbitrary point in the current monadic computation to another monadic computation Note that the destination computation must promise to produce the same value that was promised to be returned by the origin computation Also since control is being transferred away from the origin computation the goto function returns monadic value that can have an arbitrary type since the monadic value will never be used by the originating computation",
          "hierarchy": "Control Monad Trans Goto",
          "module": "Control.Monad.Trans.Goto",
          "name": "goto",
          "normalized": "GotoT a b a-\u003eGotoT a b c",
          "package": "GotoT-transformers",
          "signature": "GotoT r m r-\u003eGotoT r m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GotoT-transformers/docs/Control-Monad-Trans-Goto.html#v:goto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the goto monad computation and return the resulting value.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Goto",
          "name": "runGoto",
          "package": "GotoT-transformers",
          "signature": "Goto r r-\u003e r",
          "type": "function"
        },
        "index": {
          "description": "Execute the goto monad computation and return the resulting value",
          "hierarchy": "Control Monad Trans Goto",
          "module": "Control.Monad.Trans.Goto",
          "name": "runGoto",
          "normalized": "Goto a a-\u003ea",
          "package": "GotoT-transformers",
          "partial": "Goto",
          "signature": "Goto r r-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GotoT-transformers/docs/Control-Monad-Trans-Goto.html#v:runGoto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the goto monad computation and return the resulting value.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003erunGotoT\u003c/a\u003e\u003c/code\u003e is implemented by using a ''trampoline'' approach.  It\n looks at the monadic value and checks whether it is either a \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e\n containing a continuation or a \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e containing the result.  As\n long as it sees a \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e it executes the continuation and then\n feeds the result back into itself.  Thus the computation bounces\n back to this function (hence the ''trampoline'') as long as the\n user keeps calling \u003ccode\u003e\u003ca\u003egoto\u003c/a\u003e\u003c/code\u003e until the final result has been obtained.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Goto",
          "name": "runGotoT",
          "package": "GotoT-transformers",
          "signature": "GotoT r m r-\u003e m r",
          "type": "function"
        },
        "index": {
          "description": "Execute the goto monad computation and return the resulting value runGotoT is implemented by using trampoline approach It looks at the monadic value and checks whether it is either Left containing continuation or Right containing the result As long as it sees Left it executes the continuation and then feeds the result back into itself Thus the computation bounces back to this function hence the trampoline as long as the user keeps calling goto until the final result has been obtained",
          "hierarchy": "Control Monad Trans Goto",
          "module": "Control.Monad.Trans.Goto",
          "name": "runGotoT",
          "normalized": "GotoT a b a-\u003eb a",
          "package": "GotoT-transformers",
          "partial": "Goto",
          "signature": "GotoT r m r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GotoT-transformers/docs/Control-Monad-Trans-Goto.html#v:runGotoT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Goto",
          "name": "unwrapGotoT",
          "package": "GotoT-transformers",
          "signature": "m (Either (GotoT r m r) a)",
          "source": "src/Control-Monad-Trans-Goto.html#GotoT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Goto",
          "module": "Control.Monad.Trans.Goto",
          "name": "unwrapGotoT",
          "package": "GotoT-transformers",
          "partial": "Goto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GotoT-transformers/docs/Control-Monad-Trans-Goto.html#v:unwrapGotoT"
      }
    }
  ]
]