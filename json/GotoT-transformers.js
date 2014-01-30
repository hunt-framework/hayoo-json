[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GotoT-transformers/docs/Control-Monad-Trans-Goto.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a monad and a monad transformer that allow the\n user to transfer the flow of execution from an arbitrary point of a\n monadic computation to another monadic computation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.Goto",
        "fct-package": "GotoT-transformers",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Goto.html",
        "fct-type": "module",
        "title": "Goto"
      },
      "index": {
        "description": "This module provides monad and monad transformer that allow the user to transfer the flow of execution from an arbitrary point of monadic computation to another monadic computation",
        "hierarchy": "Control Monad Trans Goto",
        "module": "Control.Monad.Trans.Goto",
        "name": "Goto",
        "normalized": "",
        "package": "GotoT-transformers",
        "partial": "Goto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GotoT-transformers/docs/Control-Monad-Trans-Goto.html#t:Goto",
      "description": {
        "fct-descr": "\u003cp\u003eA goto monad, parameterized by the type \u003ccode\u003er\u003c/code\u003e of the value to return.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Goto",
        "fct-package": "GotoT-transformers",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Goto.html#Goto",
        "fct-type": "type",
        "title": "Goto"
      },
      "index": {
        "description": "goto monad parameterized by the type of the value to return",
        "hierarchy": "Control Monad Trans Goto",
        "module": "Control.Monad.Trans.Goto",
        "name": "Goto",
        "normalized": "",
        "package": "GotoT-transformers",
        "partial": "Goto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GotoT-transformers/docs/Control-Monad-Trans-Goto.html#t:GotoT",
      "description": {
        "fct-descr": "\u003cp\u003eA goto monad transformer parameterized by\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003er\u003c/code\u003e - the value that will ultimately be returned; and\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e - the inner monad.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eGotoT\u003c/a\u003e\u003c/code\u003e type wraps a monadic value that contains either a pure value or\n the next place at which the flow of execution should be continued.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Goto",
        "fct-package": "GotoT-transformers",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-Goto.html#GotoT",
        "fct-type": "newtype",
        "title": "GotoT"
      },
      "index": {
        "description": "goto monad transformer parameterized by the value that will ultimately be returned and the inner monad The GotoT type wraps monadic value that contains either pure value or the next place at which the flow of execution should be continued",
        "hierarchy": "Control Monad Trans Goto",
        "module": "Control.Monad.Trans.Goto",
        "name": "GotoT",
        "normalized": "",
        "package": "GotoT-transformers",
        "partial": "Goto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GotoT-transformers/docs/Control-Monad-Trans-Goto.html#v:GotoT",
      "description": {
        "fct-module": "Control.Monad.Trans.Goto",
        "fct-package": "GotoT-transformers",
        "fct-signature": "GotoT",
        "fct-source": "src/Control-Monad-Trans-Goto.html#GotoT",
        "fct-type": "function",
        "title": "GotoT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Goto",
        "module": "Control.Monad.Trans.Goto",
        "name": "GotoT",
        "normalized": "",
        "package": "GotoT-transformers",
        "partial": "Goto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GotoT-transformers/docs/Control-Monad-Trans-Goto.html#v:goto",
      "description": {
        "fct-descr": "\u003cp\u003eTransfer the flow of executation from an arbitrary point in the current\n   monadic computation to another monadic computation.\n\u003c/p\u003e\u003cp\u003eNote that the destination computation must promise to produce the\n same value that was promised to be returned by the origin\n computation.  Also, since control is being transferred away from\n the origin computation, the goto function returns a monadic value that\n can have an arbitrary type, since the monadic value will never\n be used by the originating computation.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Goto",
        "fct-package": "GotoT-transformers",
        "fct-signature": "GotoT r m r-\u003e GotoT r m a",
        "fct-type": "function",
        "title": "goto"
      },
      "index": {
        "description": "Transfer the flow of executation from an arbitrary point in the current monadic computation to another monadic computation Note that the destination computation must promise to produce the same value that was promised to be returned by the origin computation Also since control is being transferred away from the origin computation the goto function returns monadic value that can have an arbitrary type since the monadic value will never be used by the originating computation",
        "hierarchy": "Control Monad Trans Goto",
        "module": "Control.Monad.Trans.Goto",
        "name": "goto",
        "normalized": "GotoT a b a-\u003eGotoT a b c",
        "package": "GotoT-transformers",
        "partial": "",
        "signature": "GotoT r m r-\u003eGotoT r m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GotoT-transformers/docs/Control-Monad-Trans-Goto.html#v:runGoto",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the goto monad computation and return the resulting value.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Goto",
        "fct-package": "GotoT-transformers",
        "fct-signature": "Goto r r-\u003e r",
        "fct-type": "function",
        "title": "runGoto"
      },
      "index": {
        "description": "Execute the goto monad computation and return the resulting value",
        "hierarchy": "Control Monad Trans Goto",
        "module": "Control.Monad.Trans.Goto",
        "name": "runGoto",
        "normalized": "Goto a a-\u003ea",
        "package": "GotoT-transformers",
        "partial": "Goto",
        "signature": "Goto r r-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GotoT-transformers/docs/Control-Monad-Trans-Goto.html#v:runGotoT",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the goto monad computation and return the resulting value.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003erunGotoT\u003c/a\u003e\u003c/code\u003e is implemented by using a ''trampoline'' approach.  It\n looks at the monadic value and checks whether it is either a \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e\n containing a continuation or a \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e containing the result.  As\n long as it sees a \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e it executes the continuation and then\n feeds the result back into itself.  Thus the computation bounces\n back to this function (hence the ''trampoline'') as long as the\n user keeps calling \u003ccode\u003e\u003ca\u003egoto\u003c/a\u003e\u003c/code\u003e until the final result has been obtained.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Goto",
        "fct-package": "GotoT-transformers",
        "fct-signature": "GotoT r m r-\u003e m r",
        "fct-type": "function",
        "title": "runGotoT"
      },
      "index": {
        "description": "Execute the goto monad computation and return the resulting value runGotoT is implemented by using trampoline approach It looks at the monadic value and checks whether it is either Left containing continuation or Right containing the result As long as it sees Left it executes the continuation and then feeds the result back into itself Thus the computation bounces back to this function hence the trampoline as long as the user keeps calling goto until the final result has been obtained",
        "hierarchy": "Control Monad Trans Goto",
        "module": "Control.Monad.Trans.Goto",
        "name": "runGotoT",
        "normalized": "GotoT a b a-\u003eb a",
        "package": "GotoT-transformers",
        "partial": "Goto",
        "signature": "GotoT r m r-\u003em r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/GotoT-transformers/docs/Control-Monad-Trans-Goto.html#v:unwrapGotoT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.Goto",
        "fct-package": "GotoT-transformers",
        "fct-signature": "m (Either (GotoT r m r) a)",
        "fct-source": "src/Control-Monad-Trans-Goto.html#GotoT",
        "fct-type": "function",
        "title": "unwrapGotoT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Goto",
        "module": "Control.Monad.Trans.Goto",
        "name": "unwrapGotoT",
        "normalized": "",
        "package": "GotoT-transformers",
        "partial": "Goto",
        "signature": ""
      }
    }
  }
]