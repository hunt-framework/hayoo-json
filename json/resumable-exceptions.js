[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monadic interface for resumable exceptions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Resumable.Class",
        "fct-package": "resumable-exceptions",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Resumable-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "monadic interface for resumable exceptions",
        "hierarchy": "Control Monad Resumable Class",
        "module": "Control.Monad.Resumable.Class",
        "name": "Class",
        "normalized": "",
        "package": "resumable-exceptions",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Class.html#t:MonadResumable",
      "description": {
        "fct-descr": "\u003cp\u003eA monadic interface for resumable exceptions.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumable.Class",
        "fct-package": "resumable-exceptions",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Resumable-Class.html#MonadResumable",
        "fct-type": "class",
        "title": "MonadResumable"
      },
      "index": {
        "description": "monadic interface for resumable exceptions",
        "hierarchy": "Control Monad Resumable Class",
        "module": "Control.Monad.Resumable.Class",
        "name": "MonadResumable",
        "normalized": "",
        "package": "resumable-exceptions",
        "partial": "Monad Resumable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Class.html#v:handle",
      "description": {
        "fct-descr": "\u003cp\u003eInstalls a handler to quiesce an exception before it percolates to the\n higher-level handlers.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumable.Class",
        "fct-package": "resumable-exceptions",
        "fct-signature": "m a -\u003e (req -\u003e (res -\u003e m a) -\u003e m a) -\u003e m a",
        "fct-source": "src/Control-Monad-Resumable-Class.html#handle",
        "fct-type": "method",
        "title": "handle"
      },
      "index": {
        "description": "Installs handler to quiesce an exception before it percolates to the higher-level handlers",
        "hierarchy": "Control Monad Resumable Class",
        "module": "Control.Monad.Resumable.Class",
        "name": "handle",
        "normalized": "a b-\u003e(c-\u003e(d-\u003ea b)-\u003ea b)-\u003ea b",
        "package": "resumable-exceptions",
        "partial": "",
        "signature": "m a-\u003e(req-\u003e(res-\u003em a)-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Class.html#v:respond",
      "description": {
        "fct-descr": "\u003cp\u003eVariation on \u003ccode\u003e\u003ca\u003ehandle\u003c/a\u003e\u003c/code\u003e that always applies the resumption.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumable.Class",
        "fct-package": "resumable-exceptions",
        "fct-signature": "(req -\u003e m res) -\u003e m a -\u003e m a",
        "fct-source": "src/Control-Monad-Resumable-Class.html#respond",
        "fct-type": "function",
        "title": "respond"
      },
      "index": {
        "description": "Variation on handle that always applies the resumption",
        "hierarchy": "Control Monad Resumable Class",
        "module": "Control.Monad.Resumable.Class",
        "name": "respond",
        "normalized": "(a-\u003eb c)-\u003eb d-\u003eb d",
        "package": "resumable-exceptions",
        "partial": "",
        "signature": "(req-\u003em res)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Class.html#v:signal",
      "description": {
        "fct-descr": "\u003cp\u003eVariation on \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e that immediately returns the result.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumable.Class",
        "fct-package": "resumable-exceptions",
        "fct-signature": "req -\u003e m res",
        "fct-source": "src/Control-Monad-Resumable-Class.html#signal",
        "fct-type": "function",
        "title": "signal"
      },
      "index": {
        "description": "Variation on yield that immediately returns the result",
        "hierarchy": "Control Monad Resumable Class",
        "module": "Control.Monad.Resumable.Class",
        "name": "signal",
        "normalized": "a-\u003eb c",
        "package": "resumable-exceptions",
        "partial": "",
        "signature": "req-\u003em res"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Class.html#v:yield",
      "description": {
        "fct-descr": "\u003cp\u003eRaise the exception: a request and a resumption to use if the request\n can be handled.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumable.Class",
        "fct-package": "resumable-exceptions",
        "fct-signature": "req -\u003e (res -\u003e m a) -\u003e m a",
        "fct-source": "src/Control-Monad-Resumable-Class.html#yield",
        "fct-type": "method",
        "title": "yield"
      },
      "index": {
        "description": "Raise the exception request and resumption to use if the request can be handled",
        "hierarchy": "Control Monad Resumable Class",
        "module": "Control.Monad.Resumable.Class",
        "name": "yield",
        "normalized": "a-\u003e(b-\u003ec d)-\u003ec d",
        "package": "resumable-exceptions",
        "partial": "",
        "signature": "req-\u003e(res-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Scoped.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA class with an associated type for converting the phantom \u003ccode\u003escope\u003c/code\u003e type of the\n\u003ccode\u003e\u003ca\u003eResumableT\u003c/a\u003e\u003c/code\u003e transformer.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Resumable.Scoped",
        "fct-package": "resumable-exceptions",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Resumable-Scoped.html",
        "fct-type": "module",
        "title": "Scoped"
      },
      "index": {
        "description": "class with an associated type for converting the phantom scope type of the ResumableT transformer",
        "hierarchy": "Control Monad Resumable Scoped",
        "module": "Control.Monad.Resumable.Scoped",
        "name": "Scoped",
        "normalized": "",
        "package": "resumable-exceptions",
        "partial": "Scoped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Scoped.html#t:Dynamic",
      "description": {
        "fct-descr": "\u003cp\u003eToken type for dynamic scoping.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumable.Scoped",
        "fct-package": "resumable-exceptions",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Resumable-Scoped.html#Dynamic",
        "fct-type": "data",
        "title": "Dynamic"
      },
      "index": {
        "description": "Token type for dynamic scoping",
        "hierarchy": "Control Monad Resumable Scoped",
        "module": "Control.Monad.Resumable.Scoped",
        "name": "Dynamic",
        "normalized": "",
        "package": "resumable-exceptions",
        "partial": "Dynamic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Scoped.html#t:Scoped",
      "description": {
        "fct-descr": "\u003cp\u003eType class with an associated type for setting the \u003ccode\u003escope\u003c/code\u003e phantom of the\n \u003ccode\u003e\u003ca\u003eResumableT\u003c/a\u003e\u003c/code\u003e transformer.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumable.Scoped",
        "fct-package": "resumable-exceptions",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Resumable-Scoped.html#Scoped",
        "fct-type": "class",
        "title": "Scoped"
      },
      "index": {
        "description": "Type class with an associated type for setting the scope phantom of the ResumableT transformer",
        "hierarchy": "Control Monad Resumable Scoped",
        "module": "Control.Monad.Resumable.Scoped",
        "name": "Scoped",
        "normalized": "",
        "package": "resumable-exceptions",
        "partial": "Scoped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Scoped.html#t:Static",
      "description": {
        "fct-descr": "\u003cp\u003eToken type for static scoping.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumable.Scoped",
        "fct-package": "resumable-exceptions",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Resumable-Scoped.html#Static",
        "fct-type": "data",
        "title": "Static"
      },
      "index": {
        "description": "Token type for static scoping",
        "hierarchy": "Control Monad Resumable Scoped",
        "module": "Control.Monad.Resumable.Scoped",
        "name": "Static",
        "normalized": "",
        "package": "resumable-exceptions",
        "partial": "Static",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Scoped.html#v:Dynamic",
      "description": {
        "fct-module": "Control.Monad.Resumable.Scoped",
        "fct-package": "resumable-exceptions",
        "fct-signature": "Dynamic",
        "fct-source": "src/Control-Monad-Resumable-Scoped.html#Dynamic",
        "fct-type": "function",
        "title": "Dynamic"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Resumable Scoped",
        "module": "Control.Monad.Resumable.Scoped",
        "name": "Dynamic",
        "normalized": "",
        "package": "resumable-exceptions",
        "partial": "Dynamic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Scoped.html#v:Static",
      "description": {
        "fct-module": "Control.Monad.Resumable.Scoped",
        "fct-package": "resumable-exceptions",
        "fct-signature": "Static",
        "fct-source": "src/Control-Monad-Resumable-Scoped.html#Static",
        "fct-type": "function",
        "title": "Static"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Resumable Scoped",
        "module": "Control.Monad.Resumable.Scoped",
        "name": "Static",
        "normalized": "",
        "package": "resumable-exceptions",
        "partial": "Static",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Scoped.html#v:asDynamic",
      "description": {
        "fct-descr": "\u003cp\u003eAscribes the \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e scoping token to a \u003ccode\u003e\u003ca\u003eResumableT\u003c/a\u003e\u003c/code\u003e transformer.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumable.Scoped",
        "fct-package": "resumable-exceptions",
        "fct-signature": "ResumableT Dynamic req res m a -\u003e ResumableT Dynamic req res m a",
        "fct-source": "src/Control-Monad-Resumable-Scoped.html#asDynamic",
        "fct-type": "function",
        "title": "asDynamic"
      },
      "index": {
        "description": "Ascribes the Dynamic scoping token to ResumableT transformer",
        "hierarchy": "Control Monad Resumable Scoped",
        "module": "Control.Monad.Resumable.Scoped",
        "name": "asDynamic",
        "normalized": "ResumableT Dynamic a b c d-\u003eResumableT Dynamic a b c d",
        "package": "resumable-exceptions",
        "partial": "Dynamic",
        "signature": "ResumableT Dynamic req res m a-\u003eResumableT Dynamic req res m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Scoped.html#v:asStatic",
      "description": {
        "fct-descr": "\u003cp\u003eAscribes the \u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e scoping token to a \u003ccode\u003e\u003ca\u003eResumableT\u003c/a\u003e\u003c/code\u003e transformer.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumable.Scoped",
        "fct-package": "resumable-exceptions",
        "fct-signature": "ResumableT Static req res m a -\u003e ResumableT Static req res m a",
        "fct-source": "src/Control-Monad-Resumable-Scoped.html#asStatic",
        "fct-type": "function",
        "title": "asStatic"
      },
      "index": {
        "description": "Ascribes the Static scoping token to ResumableT transformer",
        "hierarchy": "Control Monad Resumable Scoped",
        "module": "Control.Monad.Resumable.Scoped",
        "name": "asStatic",
        "normalized": "ResumableT Static a b c d-\u003eResumableT Static a b c d",
        "package": "resumable-exceptions",
        "partial": "Static",
        "signature": "ResumableT Static req res m a-\u003eResumableT Static req res m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Scoped.html#v:dynamically",
      "description": {
        "fct-descr": "\u003cp\u003eAscribes the \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e scoping token to a monad transformer stack.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumable.Scoped",
        "fct-package": "resumable-exceptions",
        "fct-signature": "(ScopedAs Dynamic m a -\u003e ScopedAs Dynamic m b) -\u003e m a -\u003e m b",
        "fct-source": "src/Control-Monad-Resumable-Scoped.html#dynamically",
        "fct-type": "function",
        "title": "dynamically"
      },
      "index": {
        "description": "Ascribes the Dynamic scoping token to monad transformer stack",
        "hierarchy": "Control Monad Resumable Scoped",
        "module": "Control.Monad.Resumable.Scoped",
        "name": "dynamically",
        "normalized": "(ScopedAs Dynamic a b-\u003eScopedAs Dynamic a c)-\u003ea b-\u003ea c",
        "package": "resumable-exceptions",
        "partial": "",
        "signature": "(ScopedAs Dynamic m a-\u003eScopedAs Dynamic m b)-\u003em a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Scoped.html#v:scoped",
      "description": {
        "fct-module": "Control.Monad.Resumable.Scoped",
        "fct-package": "resumable-exceptions",
        "fct-signature": "scope -\u003e (ScopedAs scope m a -\u003e ScopedAs scope m b) -\u003e m a -\u003e m b",
        "fct-source": "src/Control-Monad-Resumable-Scoped.html#scoped",
        "fct-type": "method",
        "title": "scoped"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Resumable Scoped",
        "module": "Control.Monad.Resumable.Scoped",
        "name": "scoped",
        "normalized": "a-\u003e(ScopedAs a b c-\u003eScopedAs a b d)-\u003eb c-\u003eb d",
        "package": "resumable-exceptions",
        "partial": "",
        "signature": "scope-\u003e(ScopedAs scope m a-\u003eScopedAs scope m b)-\u003em a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Scoped.html#v:statically",
      "description": {
        "fct-descr": "\u003cp\u003eAscribes the \u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e scoping token to a monad transformer stack.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumable.Scoped",
        "fct-package": "resumable-exceptions",
        "fct-signature": "(ScopedAs Static m a -\u003e ScopedAs Static m b) -\u003e m a -\u003e m b",
        "fct-source": "src/Control-Monad-Resumable-Scoped.html#statically",
        "fct-type": "function",
        "title": "statically"
      },
      "index": {
        "description": "Ascribes the Static scoping token to monad transformer stack",
        "hierarchy": "Control Monad Resumable Scoped",
        "module": "Control.Monad.Resumable.Scoped",
        "name": "statically",
        "normalized": "(ScopedAs Static a b-\u003eScopedAs Static a c)-\u003ea b-\u003ea c",
        "package": "resumable-exceptions",
        "partial": "",
        "signature": "(ScopedAs Static m a-\u003eScopedAs Static m b)-\u003em a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monad transformer for resumable exceptions. The \u003ccode\u003e\u003ca\u003eResumableT\u003c/a\u003e\u003c/code\u003e transformer is\nisomorphic to \u003ccode\u003eReactT\u003c/code\u003e, the dominant reactivity monad in the literature. The\ndifferences serve to match the \u003ccode\u003emtl\u003c/code\u003e style.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Resumable",
        "fct-package": "resumable-exceptions",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Resumable.html",
        "fct-type": "module",
        "title": "Resumable"
      },
      "index": {
        "description": "monad transformer for resumable exceptions The ResumableT transformer is isomorphic to ReactT the dominant reactivity monad in the literature The differences serve to match the mtl style",
        "hierarchy": "Control Monad Resumable",
        "module": "Control.Monad.Resumable",
        "name": "Resumable",
        "normalized": "",
        "package": "resumable-exceptions",
        "partial": "Resumable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#t:Dynamic",
      "description": {
        "fct-module": "Control.Monad.Resumable",
        "fct-package": "resumable-exceptions",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Resumable-Scoped.html#Dynamic",
        "fct-type": "data",
        "title": "Dynamic"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Resumable",
        "module": "Control.Monad.Resumable",
        "name": "Dynamic",
        "normalized": "",
        "package": "resumable-exceptions",
        "partial": "Dynamic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#t:MonadResumable",
      "description": {
        "fct-descr": "\u003cp\u003eA monadic interface for resumable exceptions.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumable",
        "fct-package": "resumable-exceptions",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Resumable-Class.html#MonadResumable",
        "fct-type": "class",
        "title": "MonadResumable"
      },
      "index": {
        "description": "monadic interface for resumable exceptions",
        "hierarchy": "Control Monad Resumable",
        "module": "Control.Monad.Resumable",
        "name": "MonadResumable",
        "normalized": "",
        "package": "resumable-exceptions",
        "partial": "Monad Resumable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#t:Resumable",
      "description": {
        "fct-module": "Control.Monad.Resumable",
        "fct-package": "resumable-exceptions",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Resumable.html#Resumable",
        "fct-type": "type",
        "title": "Resumable"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Resumable",
        "module": "Control.Monad.Resumable",
        "name": "Resumable",
        "normalized": "",
        "package": "resumable-exceptions",
        "partial": "Resumable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#t:ResumableT",
      "description": {
        "fct-module": "Control.Monad.Resumable",
        "fct-package": "resumable-exceptions",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Resumable.html#ResumableT",
        "fct-type": "newtype",
        "title": "ResumableT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Resumable",
        "module": "Control.Monad.Resumable",
        "name": "ResumableT",
        "normalized": "",
        "package": "resumable-exceptions",
        "partial": "Resumable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#t:Static",
      "description": {
        "fct-module": "Control.Monad.Resumable",
        "fct-package": "resumable-exceptions",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-Resumable-Scoped.html#Static",
        "fct-type": "data",
        "title": "Static"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Resumable",
        "module": "Control.Monad.Resumable",
        "name": "Static",
        "normalized": "",
        "package": "resumable-exceptions",
        "partial": "Static",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:ResumableT",
      "description": {
        "fct-module": "Control.Monad.Resumable",
        "fct-package": "resumable-exceptions",
        "fct-signature": "ResumableT",
        "fct-source": "src/Control-Monad-Resumable.html#ResumableT",
        "fct-type": "function",
        "title": "ResumableT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Resumable",
        "module": "Control.Monad.Resumable",
        "name": "ResumableT",
        "normalized": "",
        "package": "resumable-exceptions",
        "partial": "Resumable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:asDynamic",
      "description": {
        "fct-descr": "\u003cp\u003eEstablishes dynamic scoping as default.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumable",
        "fct-package": "resumable-exceptions",
        "fct-signature": "ResumableT Dynamic req res m a -\u003e ResumableT Dynamic req res m a",
        "fct-source": "src/Control-Monad-Resumable.html#asDynamic",
        "fct-type": "function",
        "title": "asDynamic"
      },
      "index": {
        "description": "Establishes dynamic scoping as default",
        "hierarchy": "Control Monad Resumable",
        "module": "Control.Monad.Resumable",
        "name": "asDynamic",
        "normalized": "ResumableT Dynamic a b c d-\u003eResumableT Dynamic a b c d",
        "package": "resumable-exceptions",
        "partial": "Dynamic",
        "signature": "ResumableT Dynamic req res m a-\u003eResumableT Dynamic req res m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:asStatic",
      "description": {
        "fct-descr": "\u003cp\u003eEstablishes static scoping as default.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumable",
        "fct-package": "resumable-exceptions",
        "fct-signature": "ResumableT Static req res m a -\u003e ResumableT Static req res m a",
        "fct-source": "src/Control-Monad-Resumable.html#asStatic",
        "fct-type": "function",
        "title": "asStatic"
      },
      "index": {
        "description": "Establishes static scoping as default",
        "hierarchy": "Control Monad Resumable",
        "module": "Control.Monad.Resumable",
        "name": "asStatic",
        "normalized": "ResumableT Static a b c d-\u003eResumableT Static a b c d",
        "package": "resumable-exceptions",
        "partial": "Static",
        "signature": "ResumableT Static req res m a-\u003eResumableT Static req res m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:dynamically",
      "description": {
        "fct-module": "Control.Monad.Resumable",
        "fct-package": "resumable-exceptions",
        "fct-signature": "(ScopedAs Dynamic m a -\u003e ScopedAs Dynamic m b) -\u003e m a -\u003e m b",
        "fct-source": "src/Control-Monad-Resumable-Scoped.html#dynamically",
        "fct-type": "function",
        "title": "dynamically"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Resumable",
        "module": "Control.Monad.Resumable",
        "name": "dynamically",
        "normalized": "(ScopedAs Dynamic a b-\u003eScopedAs Dynamic a c)-\u003ea b-\u003ea c",
        "package": "resumable-exceptions",
        "partial": "",
        "signature": "(ScopedAs Dynamic m a-\u003eScopedAs Dynamic m b)-\u003em a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:handle",
      "description": {
        "fct-descr": "\u003cp\u003eInstalls a handler to quiesce an exception before it percolates to the\n higher-level handlers.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumable",
        "fct-package": "resumable-exceptions",
        "fct-signature": "m a -\u003e (req -\u003e (res -\u003e m a) -\u003e m a) -\u003e m a",
        "fct-source": "src/Control-Monad-Resumable-Class.html#handle",
        "fct-type": "method",
        "title": "handle"
      },
      "index": {
        "description": "Installs handler to quiesce an exception before it percolates to the higher-level handlers",
        "hierarchy": "Control Monad Resumable",
        "module": "Control.Monad.Resumable",
        "name": "handle",
        "normalized": "a b-\u003e(c-\u003e(d-\u003ea b)-\u003ea b)-\u003ea b",
        "package": "resumable-exceptions",
        "partial": "",
        "signature": "m a-\u003e(req-\u003e(res-\u003em a)-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:mapResumableT_dynamic",
      "description": {
        "fct-descr": "\u003cp\u003eThis manipulation of the inner monad acheives dynamic scoping -- the\n manipulation is preserved in the resumption.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumable",
        "fct-package": "resumable-exceptions",
        "fct-signature": "(m (Either (req, res -\u003e ResumableT scope req res m a) a) -\u003e n (Either (req, res -\u003e ResumableT scope req res m a) b)) -\u003e ResumableT scope req res m a -\u003e ResumableT scope req res n b",
        "fct-source": "src/Control-Monad-Resumable.html#mapResumableT_dynamic",
        "fct-type": "function",
        "title": "mapResumableT_dynamic"
      },
      "index": {
        "description": "This manipulation of the inner monad acheives dynamic scoping the manipulation is preserved in the resumption",
        "hierarchy": "Control Monad Resumable",
        "module": "Control.Monad.Resumable",
        "name": "mapResumableT_dynamic",
        "normalized": "(a(Either(b,c-\u003eResumableT d b c a e)e)-\u003ef(Either(b,c-\u003eResumableT d b c a e)g))-\u003eResumableT d b c a e-\u003eResumableT d b c f g",
        "package": "resumable-exceptions",
        "partial": "Resumable",
        "signature": "(m(Either(req,res-\u003eResumableT scope req res m a)a)-\u003en(Either(req,res-\u003eResumableT scope req res m a)b))-\u003eResumableT scope req res m a-\u003eResumableT scope req res n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:mapResumableT_static",
      "description": {
        "fct-descr": "\u003cp\u003eThis manipulation of the inner monad acheives static scoping -- the\n manipulation is not preserved in the resumption.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumable",
        "fct-package": "resumable-exceptions",
        "fct-signature": "(m (Either (req, res -\u003e ResumableT scope req res m a) a) -\u003e n (Either (req', res' -\u003e ResumableT scope' req' res' n b) b)) -\u003e ResumableT scope req res m a -\u003e ResumableT scope' req' res' n b",
        "fct-source": "src/Control-Monad-Resumable.html#mapResumableT_static",
        "fct-type": "function",
        "title": "mapResumableT_static"
      },
      "index": {
        "description": "This manipulation of the inner monad acheives static scoping the manipulation is not preserved in the resumption",
        "hierarchy": "Control Monad Resumable",
        "module": "Control.Monad.Resumable",
        "name": "mapResumableT_static",
        "normalized": "(a(Either(b,c-\u003eResumableT d b c a e)e)-\u003ef(Either(g,h-\u003eResumableT i g h f j)j))-\u003eResumableT d b c a e-\u003eResumableT i g h f j",
        "package": "resumable-exceptions",
        "partial": "Resumable",
        "signature": "(m(Either(req,res-\u003eResumableT scope req res m a)a)-\u003en(Either(req',res'-\u003eResumableT scope' req' res' n b)b))-\u003eResumableT scope req res m a-\u003eResumableT scope' req' res' n b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:respond",
      "description": {
        "fct-descr": "\u003cp\u003eVariation on \u003ccode\u003e\u003ca\u003ehandle\u003c/a\u003e\u003c/code\u003e that always applies the resumption.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumable",
        "fct-package": "resumable-exceptions",
        "fct-signature": "(req -\u003e m res) -\u003e m a -\u003e m a",
        "fct-source": "src/Control-Monad-Resumable-Class.html#respond",
        "fct-type": "function",
        "title": "respond"
      },
      "index": {
        "description": "Variation on handle that always applies the resumption",
        "hierarchy": "Control Monad Resumable",
        "module": "Control.Monad.Resumable",
        "name": "respond",
        "normalized": "(a-\u003eb c)-\u003eb d-\u003eb d",
        "package": "resumable-exceptions",
        "partial": "",
        "signature": "(req-\u003em res)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:runResumableT",
      "description": {
        "fct-descr": "\u003cp\u003eThe preferred top-level interface nevers allows exceptions to go\n unhandled.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumable",
        "fct-package": "resumable-exceptions",
        "fct-signature": "ResumableT scope req res m a -\u003e m (req -\u003e (res -\u003e ResumableT scope req res m a) -\u003e ResumableT scope req res m a) -\u003e m a",
        "fct-source": "src/Control-Monad-Resumable.html#runResumableT",
        "fct-type": "function",
        "title": "runResumableT"
      },
      "index": {
        "description": "The preferred top-level interface nevers allows exceptions to go unhandled",
        "hierarchy": "Control Monad Resumable",
        "module": "Control.Monad.Resumable",
        "name": "runResumableT",
        "normalized": "ResumableT a b c d e-\u003ed(b-\u003e(c-\u003eResumableT a b c d e)-\u003eResumableT a b c d e)-\u003ed e",
        "package": "resumable-exceptions",
        "partial": "Resumable",
        "signature": "ResumableT scope req res m a-\u003em(req-\u003e(res-\u003eResumableT scope req res m a)-\u003eResumableT scope req res m a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:runResumableT-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThe handler does not depend on the inner monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumable",
        "fct-package": "resumable-exceptions",
        "fct-signature": "ResumableT scope req res m a -\u003e (req -\u003e (res -\u003e ResumableT scope req res m a) -\u003e ResumableT scope req res m a) -\u003e m a",
        "fct-source": "src/Control-Monad-Resumable.html#runResumableT%27",
        "fct-type": "function",
        "title": "runResumableT'"
      },
      "index": {
        "description": "The handler does not depend on the inner monad",
        "hierarchy": "Control Monad Resumable",
        "module": "Control.Monad.Resumable",
        "name": "runResumableT'",
        "normalized": "ResumableT a b c d e-\u003e(b-\u003e(c-\u003eResumableT a b c d e)-\u003eResumableT a b c d e)-\u003ed e",
        "package": "resumable-exceptions",
        "partial": "Resumable T'",
        "signature": "ResumableT scope req res m a-\u003e(req-\u003e(res-\u003eResumableT scope req res m a)-\u003eResumableT scope req res m a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:runResumableT_responder",
      "description": {
        "fct-descr": "\u003cp\u003eThis variation recognizes that the handling of requests primarily\n involves generating responses.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumable",
        "fct-package": "resumable-exceptions",
        "fct-signature": "ResumableT scope req res m a -\u003e m (req -\u003e ResumableT scope req res m res) -\u003e m a",
        "fct-source": "src/Control-Monad-Resumable.html#runResumableT_responder",
        "fct-type": "function",
        "title": "runResumableT_responder"
      },
      "index": {
        "description": "This variation recognizes that the handling of requests primarily involves generating responses",
        "hierarchy": "Control Monad Resumable",
        "module": "Control.Monad.Resumable",
        "name": "runResumableT_responder",
        "normalized": "ResumableT a b c d e-\u003ed(b-\u003eResumableT a b c d c)-\u003ed e",
        "package": "resumable-exceptions",
        "partial": "Resumable",
        "signature": "ResumableT scope req res m a-\u003em(req-\u003eResumableT scope req res m res)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:runResumableT_responder-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThe responder does not depend on the inner monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumable",
        "fct-package": "resumable-exceptions",
        "fct-signature": "ResumableT scope req res m a -\u003e (req -\u003e ResumableT scope req res m res) -\u003e m a",
        "fct-source": "src/Control-Monad-Resumable.html#runResumableT_responder%27",
        "fct-type": "function",
        "title": "runResumableT_responder'"
      },
      "index": {
        "description": "The responder does not depend on the inner monad",
        "hierarchy": "Control Monad Resumable",
        "module": "Control.Monad.Resumable",
        "name": "runResumableT_responder'",
        "normalized": "ResumableT a b c d e-\u003e(b-\u003eResumableT a b c d c)-\u003ed e",
        "package": "resumable-exceptions",
        "partial": "Resumable",
        "signature": "ResumableT scope req res m a-\u003e(req-\u003eResumableT scope req res m res)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:signal",
      "description": {
        "fct-descr": "\u003cp\u003eVariation on \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e that immediately returns the result.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumable",
        "fct-package": "resumable-exceptions",
        "fct-signature": "req -\u003e m res",
        "fct-source": "src/Control-Monad-Resumable-Class.html#signal",
        "fct-type": "function",
        "title": "signal"
      },
      "index": {
        "description": "Variation on yield that immediately returns the result",
        "hierarchy": "Control Monad Resumable",
        "module": "Control.Monad.Resumable",
        "name": "signal",
        "normalized": "a-\u003eb c",
        "package": "resumable-exceptions",
        "partial": "",
        "signature": "req-\u003em res"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:statically",
      "description": {
        "fct-module": "Control.Monad.Resumable",
        "fct-package": "resumable-exceptions",
        "fct-signature": "(ScopedAs Static m a -\u003e ScopedAs Static m b) -\u003e m a -\u003e m b",
        "fct-source": "src/Control-Monad-Resumable-Scoped.html#statically",
        "fct-type": "function",
        "title": "statically"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Resumable",
        "module": "Control.Monad.Resumable",
        "name": "statically",
        "normalized": "(ScopedAs Static a b-\u003eScopedAs Static a c)-\u003ea b-\u003ea c",
        "package": "resumable-exceptions",
        "partial": "",
        "signature": "(ScopedAs Static m a-\u003eScopedAs Static m b)-\u003em a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:unResumableT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Resumable",
        "fct-package": "resumable-exceptions",
        "fct-signature": "m (Either (req, res -\u003e ResumableT scope req res m a) a)",
        "fct-source": "src/Control-Monad-Resumable.html#ResumableT",
        "fct-type": "function",
        "title": "unResumableT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Resumable",
        "module": "Control.Monad.Resumable",
        "name": "unResumableT",
        "normalized": "a(Either(b,c-\u003eResumableT d b c a e)e)",
        "package": "resumable-exceptions",
        "partial": "Resumable",
        "signature": "m(Either(req,res-\u003eResumableT scope req res m a)a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:yield",
      "description": {
        "fct-descr": "\u003cp\u003eRaise the exception: a request and a resumption to use if the request\n can be handled.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Resumable",
        "fct-package": "resumable-exceptions",
        "fct-signature": "req -\u003e (res -\u003e m a) -\u003e m a",
        "fct-source": "src/Control-Monad-Resumable-Class.html#yield",
        "fct-type": "method",
        "title": "yield"
      },
      "index": {
        "description": "Raise the exception request and resumption to use if the request can be handled",
        "hierarchy": "Control Monad Resumable",
        "module": "Control.Monad.Resumable",
        "name": "yield",
        "normalized": "a-\u003e(b-\u003ec d)-\u003ec d",
        "package": "resumable-exceptions",
        "partial": "",
        "signature": "req-\u003e(res-\u003em a)-\u003em a"
      }
    }
  }
]