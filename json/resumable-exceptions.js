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
        "word": "resumable-exceptions"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monadic interface for resumable exceptions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Resumable.Class",
          "name": "Class",
          "package": "resumable-exceptions",
          "source": "src/Control-Monad-Resumable-Class.html",
          "type": "module"
        },
        "index": {
          "description": "monadic interface for resumable exceptions",
          "hierarchy": "Control Monad Resumable Class",
          "module": "Control.Monad.Resumable.Class",
          "name": "Class",
          "package": "resumable-exceptions",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monadic interface for resumable exceptions.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumable.Class",
          "name": "MonadResumable",
          "package": "resumable-exceptions",
          "source": "src/Control-Monad-Resumable-Class.html#MonadResumable",
          "type": "class"
        },
        "index": {
          "description": "monadic interface for resumable exceptions",
          "hierarchy": "Control Monad Resumable Class",
          "module": "Control.Monad.Resumable.Class",
          "name": "MonadResumable",
          "package": "resumable-exceptions",
          "partial": "Monad Resumable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Class.html#t:MonadResumable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstalls a handler to quiesce an exception before it percolates to the\n higher-level handlers.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumable.Class",
          "name": "handle",
          "package": "resumable-exceptions",
          "signature": "m a -\u003e (req -\u003e (res -\u003e m a) -\u003e m a) -\u003e m a",
          "source": "src/Control-Monad-Resumable-Class.html#handle",
          "type": "method"
        },
        "index": {
          "description": "Installs handler to quiesce an exception before it percolates to the higher-level handlers",
          "hierarchy": "Control Monad Resumable Class",
          "module": "Control.Monad.Resumable.Class",
          "name": "handle",
          "normalized": "a b-\u003e(c-\u003e(d-\u003ea b)-\u003ea b)-\u003ea b",
          "package": "resumable-exceptions",
          "signature": "m a-\u003e(req-\u003e(res-\u003em a)-\u003em a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Class.html#v:handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariation on \u003ccode\u003e\u003ca\u003ehandle\u003c/a\u003e\u003c/code\u003e that always applies the resumption.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Resumable.Class\",\"Control.Monad.Resumable\"]",
          "name": "respond",
          "package": "resumable-exceptions",
          "signature": "(req -\u003e m res) -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-Resumable-Class.html#respond",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Class.html#v:respond\",\"http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:respond\"]"
        },
        "index": {
          "description": "Variation on handle that always applies the resumption",
          "hierarchy": "Control Monad Resumable Class",
          "module": "Control.Monad.Resumable.Class",
          "name": "respond",
          "normalized": "(a-\u003eb c)-\u003eb d-\u003eb d",
          "package": "resumable-exceptions",
          "signature": "(req-\u003em res)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Class.html#v:respond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariation on \u003ccode\u003e\u003ca\u003eyield\u003c/a\u003e\u003c/code\u003e that immediately returns the result.\n\u003c/p\u003e",
          "module": "[\"Control.Monad.Resumable.Class\",\"Control.Monad.Resumable\"]",
          "name": "signal",
          "package": "resumable-exceptions",
          "signature": "req -\u003e m res",
          "source": "src/Control-Monad-Resumable-Class.html#signal",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Class.html#v:signal\",\"http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:signal\"]"
        },
        "index": {
          "description": "Variation on yield that immediately returns the result",
          "hierarchy": "Control Monad Resumable Class",
          "module": "Control.Monad.Resumable.Class",
          "name": "signal",
          "normalized": "a-\u003eb c",
          "package": "resumable-exceptions",
          "signature": "req-\u003em res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Class.html#v:signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaise the exception: a request and a resumption to use if the request\n can be handled.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumable.Class",
          "name": "yield",
          "package": "resumable-exceptions",
          "signature": "req -\u003e (res -\u003e m a) -\u003e m a",
          "source": "src/Control-Monad-Resumable-Class.html#yield",
          "type": "method"
        },
        "index": {
          "description": "Raise the exception request and resumption to use if the request can be handled",
          "hierarchy": "Control Monad Resumable Class",
          "module": "Control.Monad.Resumable.Class",
          "name": "yield",
          "normalized": "a-\u003e(b-\u003ec d)-\u003ec d",
          "package": "resumable-exceptions",
          "signature": "req-\u003e(res-\u003em a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Class.html#v:yield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA class with an associated type for converting the phantom \u003ccode\u003escope\u003c/code\u003e type of the\n\u003ccode\u003e\u003ca\u003eResumableT\u003c/a\u003e\u003c/code\u003e transformer.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Resumable.Scoped",
          "name": "Scoped",
          "package": "resumable-exceptions",
          "source": "src/Control-Monad-Resumable-Scoped.html",
          "type": "module"
        },
        "index": {
          "description": "class with an associated type for converting the phantom scope type of the ResumableT transformer",
          "hierarchy": "Control Monad Resumable Scoped",
          "module": "Control.Monad.Resumable.Scoped",
          "name": "Scoped",
          "package": "resumable-exceptions",
          "partial": "Scoped",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Scoped.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToken type for dynamic scoping.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumable.Scoped",
          "name": "Dynamic",
          "package": "resumable-exceptions",
          "source": "src/Control-Monad-Resumable-Scoped.html#Dynamic",
          "type": "data"
        },
        "index": {
          "description": "Token type for dynamic scoping",
          "hierarchy": "Control Monad Resumable Scoped",
          "module": "Control.Monad.Resumable.Scoped",
          "name": "Dynamic",
          "package": "resumable-exceptions",
          "partial": "Dynamic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Scoped.html#t:Dynamic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class with an associated type for setting the \u003ccode\u003escope\u003c/code\u003e phantom of the\n \u003ccode\u003e\u003ca\u003eResumableT\u003c/a\u003e\u003c/code\u003e transformer.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumable.Scoped",
          "name": "Scoped",
          "package": "resumable-exceptions",
          "source": "src/Control-Monad-Resumable-Scoped.html#Scoped",
          "type": "class"
        },
        "index": {
          "description": "Type class with an associated type for setting the scope phantom of the ResumableT transformer",
          "hierarchy": "Control Monad Resumable Scoped",
          "module": "Control.Monad.Resumable.Scoped",
          "name": "Scoped",
          "package": "resumable-exceptions",
          "partial": "Scoped",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Scoped.html#t:Scoped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToken type for static scoping.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumable.Scoped",
          "name": "Static",
          "package": "resumable-exceptions",
          "source": "src/Control-Monad-Resumable-Scoped.html#Static",
          "type": "data"
        },
        "index": {
          "description": "Token type for static scoping",
          "hierarchy": "Control Monad Resumable Scoped",
          "module": "Control.Monad.Resumable.Scoped",
          "name": "Static",
          "package": "resumable-exceptions",
          "partial": "Static",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Scoped.html#t:Static"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Resumable.Scoped",
          "name": "Dynamic",
          "package": "resumable-exceptions",
          "signature": "Dynamic",
          "source": "src/Control-Monad-Resumable-Scoped.html#Dynamic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Resumable Scoped",
          "module": "Control.Monad.Resumable.Scoped",
          "name": "Dynamic",
          "package": "resumable-exceptions",
          "partial": "Dynamic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Scoped.html#v:Dynamic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Resumable.Scoped",
          "name": "Static",
          "package": "resumable-exceptions",
          "signature": "Static",
          "source": "src/Control-Monad-Resumable-Scoped.html#Static",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Resumable Scoped",
          "module": "Control.Monad.Resumable.Scoped",
          "name": "Static",
          "package": "resumable-exceptions",
          "partial": "Static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Scoped.html#v:Static"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAscribes the \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e scoping token to a \u003ccode\u003e\u003ca\u003eResumableT\u003c/a\u003e\u003c/code\u003e transformer.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumable.Scoped",
          "name": "asDynamic",
          "package": "resumable-exceptions",
          "signature": "ResumableT Dynamic req res m a -\u003e ResumableT Dynamic req res m a",
          "source": "src/Control-Monad-Resumable-Scoped.html#asDynamic",
          "type": "function"
        },
        "index": {
          "description": "Ascribes the Dynamic scoping token to ResumableT transformer",
          "hierarchy": "Control Monad Resumable Scoped",
          "module": "Control.Monad.Resumable.Scoped",
          "name": "asDynamic",
          "normalized": "ResumableT Dynamic a b c d-\u003eResumableT Dynamic a b c d",
          "package": "resumable-exceptions",
          "partial": "Dynamic",
          "signature": "ResumableT Dynamic req res m a-\u003eResumableT Dynamic req res m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Scoped.html#v:asDynamic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAscribes the \u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e scoping token to a \u003ccode\u003e\u003ca\u003eResumableT\u003c/a\u003e\u003c/code\u003e transformer.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumable.Scoped",
          "name": "asStatic",
          "package": "resumable-exceptions",
          "signature": "ResumableT Static req res m a -\u003e ResumableT Static req res m a",
          "source": "src/Control-Monad-Resumable-Scoped.html#asStatic",
          "type": "function"
        },
        "index": {
          "description": "Ascribes the Static scoping token to ResumableT transformer",
          "hierarchy": "Control Monad Resumable Scoped",
          "module": "Control.Monad.Resumable.Scoped",
          "name": "asStatic",
          "normalized": "ResumableT Static a b c d-\u003eResumableT Static a b c d",
          "package": "resumable-exceptions",
          "partial": "Static",
          "signature": "ResumableT Static req res m a-\u003eResumableT Static req res m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Scoped.html#v:asStatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAscribes the \u003ccode\u003e\u003ca\u003eDynamic\u003c/a\u003e\u003c/code\u003e scoping token to a monad transformer stack.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumable.Scoped",
          "name": "dynamically",
          "package": "resumable-exceptions",
          "signature": "(ScopedAs Dynamic m a -\u003e ScopedAs Dynamic m b) -\u003e m a -\u003e m b",
          "source": "src/Control-Monad-Resumable-Scoped.html#dynamically",
          "type": "function"
        },
        "index": {
          "description": "Ascribes the Dynamic scoping token to monad transformer stack",
          "hierarchy": "Control Monad Resumable Scoped",
          "module": "Control.Monad.Resumable.Scoped",
          "name": "dynamically",
          "normalized": "(ScopedAs Dynamic a b-\u003eScopedAs Dynamic a c)-\u003ea b-\u003ea c",
          "package": "resumable-exceptions",
          "signature": "(ScopedAs Dynamic m a-\u003eScopedAs Dynamic m b)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Scoped.html#v:dynamically"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Resumable.Scoped",
          "name": "scoped",
          "package": "resumable-exceptions",
          "signature": "scope -\u003e (ScopedAs scope m a -\u003e ScopedAs scope m b) -\u003e m a -\u003e m b",
          "source": "src/Control-Monad-Resumable-Scoped.html#scoped",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Resumable Scoped",
          "module": "Control.Monad.Resumable.Scoped",
          "name": "scoped",
          "normalized": "a-\u003e(ScopedAs a b c-\u003eScopedAs a b d)-\u003eb c-\u003eb d",
          "package": "resumable-exceptions",
          "signature": "scope-\u003e(ScopedAs scope m a-\u003eScopedAs scope m b)-\u003em a-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Scoped.html#v:scoped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAscribes the \u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e scoping token to a monad transformer stack.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumable.Scoped",
          "name": "statically",
          "package": "resumable-exceptions",
          "signature": "(ScopedAs Static m a -\u003e ScopedAs Static m b) -\u003e m a -\u003e m b",
          "source": "src/Control-Monad-Resumable-Scoped.html#statically",
          "type": "function"
        },
        "index": {
          "description": "Ascribes the Static scoping token to monad transformer stack",
          "hierarchy": "Control Monad Resumable Scoped",
          "module": "Control.Monad.Resumable.Scoped",
          "name": "statically",
          "normalized": "(ScopedAs Static a b-\u003eScopedAs Static a c)-\u003ea b-\u003ea c",
          "package": "resumable-exceptions",
          "signature": "(ScopedAs Static m a-\u003eScopedAs Static m b)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable-Scoped.html#v:statically"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monad transformer for resumable exceptions. The \u003ccode\u003e\u003ca\u003eResumableT\u003c/a\u003e\u003c/code\u003e transformer is\nisomorphic to \u003ccode\u003eReactT\u003c/code\u003e, the dominant reactivity monad in the literature. The\ndifferences serve to match the \u003ccode\u003emtl\u003c/code\u003e style.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Resumable",
          "name": "Resumable",
          "package": "resumable-exceptions",
          "source": "src/Control-Monad-Resumable.html",
          "type": "module"
        },
        "index": {
          "description": "monad transformer for resumable exceptions The ResumableT transformer is isomorphic to ReactT the dominant reactivity monad in the literature The differences serve to match the mtl style",
          "hierarchy": "Control Monad Resumable",
          "module": "Control.Monad.Resumable",
          "name": "Resumable",
          "package": "resumable-exceptions",
          "partial": "Resumable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Resumable",
          "name": "Dynamic",
          "package": "resumable-exceptions",
          "source": "src/Control-Monad-Resumable-Scoped.html#Dynamic",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Resumable",
          "module": "Control.Monad.Resumable",
          "name": "Dynamic",
          "package": "resumable-exceptions",
          "partial": "Dynamic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#t:Dynamic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monadic interface for resumable exceptions.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumable",
          "name": "MonadResumable",
          "package": "resumable-exceptions",
          "source": "src/Control-Monad-Resumable-Class.html#MonadResumable",
          "type": "class"
        },
        "index": {
          "description": "monadic interface for resumable exceptions",
          "hierarchy": "Control Monad Resumable",
          "module": "Control.Monad.Resumable",
          "name": "MonadResumable",
          "package": "resumable-exceptions",
          "partial": "Monad Resumable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#t:MonadResumable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Resumable",
          "name": "Resumable",
          "package": "resumable-exceptions",
          "source": "src/Control-Monad-Resumable.html#Resumable",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Resumable",
          "module": "Control.Monad.Resumable",
          "name": "Resumable",
          "package": "resumable-exceptions",
          "partial": "Resumable",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#t:Resumable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Resumable",
          "name": "ResumableT",
          "package": "resumable-exceptions",
          "source": "src/Control-Monad-Resumable.html#ResumableT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Resumable",
          "module": "Control.Monad.Resumable",
          "name": "ResumableT",
          "package": "resumable-exceptions",
          "partial": "Resumable",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#t:ResumableT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Resumable",
          "name": "Static",
          "package": "resumable-exceptions",
          "source": "src/Control-Monad-Resumable-Scoped.html#Static",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Resumable",
          "module": "Control.Monad.Resumable",
          "name": "Static",
          "package": "resumable-exceptions",
          "partial": "Static",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#t:Static"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Resumable",
          "name": "ResumableT",
          "package": "resumable-exceptions",
          "signature": "ResumableT",
          "source": "src/Control-Monad-Resumable.html#ResumableT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Resumable",
          "module": "Control.Monad.Resumable",
          "name": "ResumableT",
          "package": "resumable-exceptions",
          "partial": "Resumable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:ResumableT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEstablishes dynamic scoping as default.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumable",
          "name": "asDynamic",
          "package": "resumable-exceptions",
          "signature": "ResumableT Dynamic req res m a -\u003e ResumableT Dynamic req res m a",
          "source": "src/Control-Monad-Resumable.html#asDynamic",
          "type": "function"
        },
        "index": {
          "description": "Establishes dynamic scoping as default",
          "hierarchy": "Control Monad Resumable",
          "module": "Control.Monad.Resumable",
          "name": "asDynamic",
          "normalized": "ResumableT Dynamic a b c d-\u003eResumableT Dynamic a b c d",
          "package": "resumable-exceptions",
          "partial": "Dynamic",
          "signature": "ResumableT Dynamic req res m a-\u003eResumableT Dynamic req res m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:asDynamic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEstablishes static scoping as default.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumable",
          "name": "asStatic",
          "package": "resumable-exceptions",
          "signature": "ResumableT Static req res m a -\u003e ResumableT Static req res m a",
          "source": "src/Control-Monad-Resumable.html#asStatic",
          "type": "function"
        },
        "index": {
          "description": "Establishes static scoping as default",
          "hierarchy": "Control Monad Resumable",
          "module": "Control.Monad.Resumable",
          "name": "asStatic",
          "normalized": "ResumableT Static a b c d-\u003eResumableT Static a b c d",
          "package": "resumable-exceptions",
          "partial": "Static",
          "signature": "ResumableT Static req res m a-\u003eResumableT Static req res m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:asStatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Resumable",
          "name": "dynamically",
          "package": "resumable-exceptions",
          "signature": "(ScopedAs Dynamic m a -\u003e ScopedAs Dynamic m b) -\u003e m a -\u003e m b",
          "source": "src/Control-Monad-Resumable-Scoped.html#dynamically",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Resumable",
          "module": "Control.Monad.Resumable",
          "name": "dynamically",
          "normalized": "(ScopedAs Dynamic a b-\u003eScopedAs Dynamic a c)-\u003ea b-\u003ea c",
          "package": "resumable-exceptions",
          "signature": "(ScopedAs Dynamic m a-\u003eScopedAs Dynamic m b)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:dynamically"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstalls a handler to quiesce an exception before it percolates to the\n higher-level handlers.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumable",
          "name": "handle",
          "package": "resumable-exceptions",
          "signature": "m a -\u003e (req -\u003e (res -\u003e m a) -\u003e m a) -\u003e m a",
          "source": "src/Control-Monad-Resumable-Class.html#handle",
          "type": "method"
        },
        "index": {
          "description": "Installs handler to quiesce an exception before it percolates to the higher-level handlers",
          "hierarchy": "Control Monad Resumable",
          "module": "Control.Monad.Resumable",
          "name": "handle",
          "normalized": "a b-\u003e(c-\u003e(d-\u003ea b)-\u003ea b)-\u003ea b",
          "package": "resumable-exceptions",
          "signature": "m a-\u003e(req-\u003e(res-\u003em a)-\u003em a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis manipulation of the inner monad acheives dynamic scoping -- the\n manipulation is preserved in the resumption.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumable",
          "name": "mapResumableT_dynamic",
          "package": "resumable-exceptions",
          "signature": "(m (Either (req, res -\u003e ResumableT scope req res m a) a) -\u003e n (Either (req, res -\u003e ResumableT scope req res m a) b)) -\u003e ResumableT scope req res m a -\u003e ResumableT scope req res n b",
          "source": "src/Control-Monad-Resumable.html#mapResumableT_dynamic",
          "type": "function"
        },
        "index": {
          "description": "This manipulation of the inner monad acheives dynamic scoping the manipulation is preserved in the resumption",
          "hierarchy": "Control Monad Resumable",
          "module": "Control.Monad.Resumable",
          "name": "mapResumableT_dynamic",
          "normalized": "(a(Either(b,c-\u003eResumableT d b c a e)e)-\u003ef(Either(b,c-\u003eResumableT d b c a e)g))-\u003eResumableT d b c a e-\u003eResumableT d b c f g",
          "package": "resumable-exceptions",
          "partial": "Resumable",
          "signature": "(m(Either(req,res-\u003eResumableT scope req res m a)a)-\u003en(Either(req,res-\u003eResumableT scope req res m a)b))-\u003eResumableT scope req res m a-\u003eResumableT scope req res n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:mapResumableT_dynamic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis manipulation of the inner monad acheives static scoping -- the\n manipulation is not preserved in the resumption.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumable",
          "name": "mapResumableT_static",
          "package": "resumable-exceptions",
          "signature": "(m (Either (req, res -\u003e ResumableT scope req res m a) a) -\u003e n (Either (req', res' -\u003e ResumableT scope' req' res' n b) b)) -\u003e ResumableT scope req res m a -\u003e ResumableT scope' req' res' n b",
          "source": "src/Control-Monad-Resumable.html#mapResumableT_static",
          "type": "function"
        },
        "index": {
          "description": "This manipulation of the inner monad acheives static scoping the manipulation is not preserved in the resumption",
          "hierarchy": "Control Monad Resumable",
          "module": "Control.Monad.Resumable",
          "name": "mapResumableT_static",
          "normalized": "(a(Either(b,c-\u003eResumableT d b c a e)e)-\u003ef(Either(g,h-\u003eResumableT i g h f j)j))-\u003eResumableT d b c a e-\u003eResumableT i g h f j",
          "package": "resumable-exceptions",
          "partial": "Resumable",
          "signature": "(m(Either(req,res-\u003eResumableT scope req res m a)a)-\u003en(Either(req',res'-\u003eResumableT scope' req' res' n b)b))-\u003eResumableT scope req res m a-\u003eResumableT scope' req' res' n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:mapResumableT_static"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe preferred top-level interface nevers allows exceptions to go\n unhandled.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumable",
          "name": "runResumableT",
          "package": "resumable-exceptions",
          "signature": "ResumableT scope req res m a -\u003e m (req -\u003e (res -\u003e ResumableT scope req res m a) -\u003e ResumableT scope req res m a) -\u003e m a",
          "source": "src/Control-Monad-Resumable.html#runResumableT",
          "type": "function"
        },
        "index": {
          "description": "The preferred top-level interface nevers allows exceptions to go unhandled",
          "hierarchy": "Control Monad Resumable",
          "module": "Control.Monad.Resumable",
          "name": "runResumableT",
          "normalized": "ResumableT a b c d e-\u003ed(b-\u003e(c-\u003eResumableT a b c d e)-\u003eResumableT a b c d e)-\u003ed e",
          "package": "resumable-exceptions",
          "partial": "Resumable",
          "signature": "ResumableT scope req res m a-\u003em(req-\u003e(res-\u003eResumableT scope req res m a)-\u003eResumableT scope req res m a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:runResumableT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe handler does not depend on the inner monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumable",
          "name": "runResumableT'",
          "package": "resumable-exceptions",
          "signature": "ResumableT scope req res m a -\u003e (req -\u003e (res -\u003e ResumableT scope req res m a) -\u003e ResumableT scope req res m a) -\u003e m a",
          "source": "src/Control-Monad-Resumable.html#runResumableT%27",
          "type": "function"
        },
        "index": {
          "description": "The handler does not depend on the inner monad",
          "hierarchy": "Control Monad Resumable",
          "module": "Control.Monad.Resumable",
          "name": "runResumableT'",
          "normalized": "ResumableT a b c d e-\u003e(b-\u003e(c-\u003eResumableT a b c d e)-\u003eResumableT a b c d e)-\u003ed e",
          "package": "resumable-exceptions",
          "partial": "Resumable T'",
          "signature": "ResumableT scope req res m a-\u003e(req-\u003e(res-\u003eResumableT scope req res m a)-\u003eResumableT scope req res m a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:runResumableT-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis variation recognizes that the handling of requests primarily\n involves generating responses.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumable",
          "name": "runResumableT_responder",
          "package": "resumable-exceptions",
          "signature": "ResumableT scope req res m a -\u003e m (req -\u003e ResumableT scope req res m res) -\u003e m a",
          "source": "src/Control-Monad-Resumable.html#runResumableT_responder",
          "type": "function"
        },
        "index": {
          "description": "This variation recognizes that the handling of requests primarily involves generating responses",
          "hierarchy": "Control Monad Resumable",
          "module": "Control.Monad.Resumable",
          "name": "runResumableT_responder",
          "normalized": "ResumableT a b c d e-\u003ed(b-\u003eResumableT a b c d c)-\u003ed e",
          "package": "resumable-exceptions",
          "partial": "Resumable",
          "signature": "ResumableT scope req res m a-\u003em(req-\u003eResumableT scope req res m res)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:runResumableT_responder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe responder does not depend on the inner monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumable",
          "name": "runResumableT_responder'",
          "package": "resumable-exceptions",
          "signature": "ResumableT scope req res m a -\u003e (req -\u003e ResumableT scope req res m res) -\u003e m a",
          "source": "src/Control-Monad-Resumable.html#runResumableT_responder%27",
          "type": "function"
        },
        "index": {
          "description": "The responder does not depend on the inner monad",
          "hierarchy": "Control Monad Resumable",
          "module": "Control.Monad.Resumable",
          "name": "runResumableT_responder'",
          "normalized": "ResumableT a b c d e-\u003e(b-\u003eResumableT a b c d c)-\u003ed e",
          "package": "resumable-exceptions",
          "partial": "Resumable",
          "signature": "ResumableT scope req res m a-\u003e(req-\u003eResumableT scope req res m res)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:runResumableT_responder-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Resumable",
          "name": "statically",
          "package": "resumable-exceptions",
          "signature": "(ScopedAs Static m a -\u003e ScopedAs Static m b) -\u003e m a -\u003e m b",
          "source": "src/Control-Monad-Resumable-Scoped.html#statically",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Resumable",
          "module": "Control.Monad.Resumable",
          "name": "statically",
          "normalized": "(ScopedAs Static a b-\u003eScopedAs Static a c)-\u003ea b-\u003ea c",
          "package": "resumable-exceptions",
          "signature": "(ScopedAs Static m a-\u003eScopedAs Static m b)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:statically"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Resumable",
          "name": "unResumableT",
          "package": "resumable-exceptions",
          "signature": "m (Either (req, res -\u003e ResumableT scope req res m a) a)",
          "source": "src/Control-Monad-Resumable.html#ResumableT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Resumable",
          "module": "Control.Monad.Resumable",
          "name": "unResumableT",
          "normalized": "a(Either(b,c-\u003eResumableT d b c a e)e)",
          "package": "resumable-exceptions",
          "partial": "Resumable",
          "signature": "m(Either(req,res-\u003eResumableT scope req res m a)a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:unResumableT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaise the exception: a request and a resumption to use if the request\n can be handled.\n\u003c/p\u003e",
          "module": "Control.Monad.Resumable",
          "name": "yield",
          "package": "resumable-exceptions",
          "signature": "req -\u003e (res -\u003e m a) -\u003e m a",
          "source": "src/Control-Monad-Resumable-Class.html#yield",
          "type": "method"
        },
        "index": {
          "description": "Raise the exception request and resumption to use if the request can be handled",
          "hierarchy": "Control Monad Resumable",
          "module": "Control.Monad.Resumable",
          "name": "yield",
          "normalized": "a-\u003e(b-\u003ec d)-\u003ec d",
          "package": "resumable-exceptions",
          "signature": "req-\u003e(res-\u003em a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/resumable-exceptions/docs/Control-Monad-Resumable.html#v:yield"
      }
    }
  ]
]