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
        "word": "monadlist"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "ListM",
          "package": "monadlist",
          "source": "src/Control-Monad-ListM.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "ListM",
          "package": "monadlist",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "allM",
          "package": "monadlist",
          "signature": "(a -\u003e m Bool) -\u003e t a -\u003e m Bool",
          "source": "src/Control-Monad-ListM.html#allM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "allM",
          "normalized": "(a-\u003eb Bool)-\u003ec a-\u003eb Bool",
          "package": "monadlist",
          "signature": "(a-\u003em Bool)-\u003et a-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:allM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "anyM",
          "package": "monadlist",
          "signature": "(a -\u003e m Bool) -\u003e t a -\u003e m Bool",
          "source": "src/Control-Monad-ListM.html#anyM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "anyM",
          "normalized": "(a-\u003eb Bool)-\u003ec a-\u003eb Bool",
          "package": "monadlist",
          "signature": "(a-\u003em Bool)-\u003et a-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:anyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "breakM",
          "package": "monadlist",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m (p a, [a])",
          "source": "src/Control-Monad-ListM.html#breakM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "breakM",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb(c a,[a])",
          "package": "monadlist",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em(p a,[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:breakM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "deleteByM",
          "package": "monadlist",
          "signature": "(a -\u003e a -\u003e m Bool) -\u003e a -\u003e [a] -\u003e m [a]",
          "source": "src/Control-Monad-ListM.html#deleteByM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "deleteByM",
          "normalized": "(a-\u003ea-\u003eb Bool)-\u003ea-\u003e[a]-\u003eb[a]",
          "package": "monadlist",
          "partial": "By",
          "signature": "(a-\u003ea-\u003em Bool)-\u003ea-\u003e[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:deleteByM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "deleteFirstsByM",
          "package": "monadlist",
          "signature": "(a -\u003e a -\u003e m Bool) -\u003e [a] -\u003e [a] -\u003e m [a]",
          "source": "src/Control-Monad-ListM.html#deleteFirstsByM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "deleteFirstsByM",
          "normalized": "(a-\u003ea-\u003eb Bool)-\u003e[a]-\u003e[a]-\u003eb[a]",
          "package": "monadlist",
          "partial": "Firsts By",
          "signature": "(a-\u003ea-\u003em Bool)-\u003e[a]-\u003e[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:deleteFirstsByM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "deleteFirstsM",
          "package": "monadlist",
          "signature": "[a] -\u003e [a] -\u003e m [a]",
          "source": "src/Control-Monad-ListM.html#deleteFirstsM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "deleteFirstsM",
          "normalized": "[a]-\u003e[a]-\u003eb[a]",
          "package": "monadlist",
          "partial": "Firsts",
          "signature": "[a]-\u003e[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:deleteFirstsM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "deleteM",
          "package": "monadlist",
          "signature": "a -\u003e [a] -\u003e m [a]",
          "source": "src/Control-Monad-ListM.html#deleteM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "deleteM",
          "normalized": "a-\u003e[a]-\u003eb[a]",
          "package": "monadlist",
          "signature": "a-\u003e[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:deleteM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "dropM",
          "package": "monadlist",
          "signature": "i -\u003e [m a] -\u003e m [a]",
          "source": "src/Control-Monad-ListM.html#dropM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "dropM",
          "normalized": "a-\u003e[b c]-\u003eb[c]",
          "package": "monadlist",
          "signature": "i-\u003e[m a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:dropM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "dropWhileM",
          "package": "monadlist",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m [a]",
          "source": "src/Control-Monad-ListM.html#dropWhileM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "dropWhileM",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb[a]",
          "package": "monadlist",
          "partial": "While",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:dropWhileM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "elemIndexM",
          "package": "monadlist",
          "signature": "a -\u003e [a] -\u003e m (p i)",
          "source": "src/Control-Monad-ListM.html#elemIndexM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "elemIndexM",
          "normalized": "a-\u003e[a]-\u003eb(c d)",
          "package": "monadlist",
          "partial": "Index",
          "signature": "a-\u003e[a]-\u003em(p i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:elemIndexM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "elemIndicesM",
          "package": "monadlist",
          "signature": "a -\u003e [a] -\u003e m (p i)",
          "source": "src/Control-Monad-ListM.html#elemIndicesM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "elemIndicesM",
          "normalized": "a-\u003e[a]-\u003eb(c d)",
          "package": "monadlist",
          "partial": "Indices",
          "signature": "a-\u003e[a]-\u003em(p i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:elemIndicesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "elemM",
          "package": "monadlist",
          "signature": "a -\u003e [a] -\u003e m Bool",
          "source": "src/Control-Monad-ListM.html#elemM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "elemM",
          "normalized": "a-\u003e[a]-\u003eb Bool",
          "package": "monadlist",
          "signature": "a-\u003e[a]-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:elemM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "filterMP",
          "package": "monadlist",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m (p a)",
          "source": "src/Control-Monad-ListM.html#filterMP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "filterMP",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb(c a)",
          "package": "monadlist",
          "partial": "MP",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em(p a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:filterMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "findIndexM",
          "package": "monadlist",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m (p i)",
          "source": "src/Control-Monad-ListM.html#findIndexM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "findIndexM",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb(c d)",
          "package": "monadlist",
          "partial": "Index",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em(p i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:findIndexM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "findIndicesM",
          "package": "monadlist",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m (p i)",
          "source": "src/Control-Monad-ListM.html#findIndicesM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "findIndicesM",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb(c d)",
          "package": "monadlist",
          "partial": "Indices",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em(p i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:findIndicesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "findM",
          "package": "monadlist",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m (p a)",
          "source": "src/Control-Monad-ListM.html#findM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "findM",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb(c a)",
          "package": "monadlist",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em(p a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:findM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "foldM1",
          "package": "monadlist",
          "signature": "(a -\u003e a -\u003e m a) -\u003e [a] -\u003e m a",
          "source": "src/Control-Monad-ListM.html#foldM1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "foldM1",
          "normalized": "(a-\u003ea-\u003eb a)-\u003e[a]-\u003eb a",
          "package": "monadlist",
          "signature": "(a-\u003ea-\u003em a)-\u003e[a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:foldM1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "groupByM",
          "package": "monadlist",
          "signature": "(a -\u003e a -\u003e m Bool) -\u003e [a] -\u003e m (p (q a))",
          "source": "src/Control-Monad-ListM.html#groupByM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "groupByM",
          "normalized": "(a-\u003ea-\u003eb Bool)-\u003e[a]-\u003eb(c(d a))",
          "package": "monadlist",
          "partial": "By",
          "signature": "(a-\u003ea-\u003em Bool)-\u003e[a]-\u003em(p(q a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:groupByM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "groupM",
          "package": "monadlist",
          "signature": "[a] -\u003e m (p (q a))",
          "source": "src/Control-Monad-ListM.html#groupM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "groupM",
          "normalized": "[a]-\u003eb(c(d a))",
          "package": "monadlist",
          "signature": "[a]-\u003em(p(q a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:groupM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "insertByM",
          "package": "monadlist",
          "signature": "(a -\u003e a -\u003e m Ordering) -\u003e a -\u003e [a] -\u003e m [a]",
          "source": "src/Control-Monad-ListM.html#insertByM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "insertByM",
          "normalized": "(a-\u003ea-\u003eb Ordering)-\u003ea-\u003e[a]-\u003eb[a]",
          "package": "monadlist",
          "partial": "By",
          "signature": "(a-\u003ea-\u003em Ordering)-\u003ea-\u003e[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:insertByM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "insertM",
          "package": "monadlist",
          "signature": "a -\u003e [a] -\u003e m [a]",
          "source": "src/Control-Monad-ListM.html#insertM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "insertM",
          "normalized": "a-\u003e[a]-\u003eb[a]",
          "package": "monadlist",
          "signature": "a-\u003e[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:insertM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "intercalateM",
          "package": "monadlist",
          "signature": "m (p a) -\u003e [p a] -\u003e m (p a)",
          "source": "src/Control-Monad-ListM.html#intercalateM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "intercalateM",
          "normalized": "a(b c)-\u003e[b c]-\u003ea(b c)",
          "package": "monadlist",
          "signature": "m(p a)-\u003e[p a]-\u003em(p a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:intercalateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "intersectByM",
          "package": "monadlist",
          "signature": "(a -\u003e a -\u003e m Bool) -\u003e [a] -\u003e [a] -\u003e m (p a)",
          "source": "src/Control-Monad-ListM.html#intersectByM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "intersectByM",
          "normalized": "(a-\u003ea-\u003eb Bool)-\u003e[a]-\u003e[a]-\u003eb(c a)",
          "package": "monadlist",
          "partial": "By",
          "signature": "(a-\u003ea-\u003em Bool)-\u003e[a]-\u003e[a]-\u003em(p a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:intersectByM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "intersectM",
          "package": "monadlist",
          "signature": "[a] -\u003e [a] -\u003e m (p a)",
          "source": "src/Control-Monad-ListM.html#intersectM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "intersectM",
          "normalized": "[a]-\u003e[a]-\u003eb(c a)",
          "package": "monadlist",
          "signature": "[a]-\u003e[a]-\u003em(p a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:intersectM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "intersperseM",
          "package": "monadlist",
          "signature": "m a -\u003e [a] -\u003e m (p a)",
          "source": "src/Control-Monad-ListM.html#intersperseM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "intersperseM",
          "normalized": "a b-\u003e[b]-\u003ea(c b)",
          "package": "monadlist",
          "signature": "m a-\u003e[a]-\u003em(p a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:intersperseM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "iterateM",
          "package": "monadlist",
          "signature": "(a -\u003e m a) -\u003e a -\u003e m (p a)",
          "source": "src/Control-Monad-ListM.html#iterateM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "iterateM",
          "normalized": "(a-\u003eb a)-\u003ea-\u003eb(c a)",
          "package": "monadlist",
          "signature": "(a-\u003em a)-\u003ea-\u003em(p a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:iterateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "joinMap",
          "package": "monadlist",
          "signature": "(a -\u003e m b) -\u003e m a -\u003e m b",
          "source": "src/Control-Monad-ListM.html#joinMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "joinMap",
          "normalized": "(a-\u003eb c)-\u003eb a-\u003eb c",
          "package": "monadlist",
          "partial": "Map",
          "signature": "(a-\u003em b)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:joinMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "joinMapM",
          "package": "monadlist",
          "signature": "(a -\u003e m (p b)) -\u003e [a] -\u003e m (p b)",
          "source": "src/Control-Monad-ListM.html#joinMapM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "joinMapM",
          "normalized": "(a-\u003eb(c d))-\u003e[a]-\u003eb(c d)",
          "package": "monadlist",
          "partial": "Map",
          "signature": "(a-\u003em(p b))-\u003e[a]-\u003em(p b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:joinMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "lookupM",
          "package": "monadlist",
          "signature": "a -\u003e [m (a, b)] -\u003e m (p b)",
          "source": "src/Control-Monad-ListM.html#lookupM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "lookupM",
          "normalized": "a-\u003e[b(a,c)]-\u003eb(d c)",
          "package": "monadlist",
          "signature": "a-\u003e[m(a,b)]-\u003em(p b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:lookupM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "mapAccumM",
          "package": "monadlist",
          "signature": "(acc -\u003e x -\u003e m (acc, y)) -\u003e acc -\u003e [x] -\u003e m (acc, p y)",
          "source": "src/Control-Monad-ListM.html#mapAccumM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "mapAccumM",
          "normalized": "(a-\u003eb-\u003ec(a,d))-\u003ea-\u003e[b]-\u003ec(a,e d)",
          "package": "monadlist",
          "partial": "Accum",
          "signature": "(acc-\u003ex-\u003em(acc,y))-\u003eacc-\u003e[x]-\u003em(acc,p y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:mapAccumM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "mapMP",
          "package": "monadlist",
          "signature": "(a -\u003e m b) -\u003e [a] -\u003e m (p b)",
          "source": "src/Control-Monad-ListM.html#mapMP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "mapMP",
          "normalized": "(a-\u003eb c)-\u003e[a]-\u003eb(d c)",
          "package": "monadlist",
          "partial": "MP",
          "signature": "(a-\u003em b)-\u003e[a]-\u003em(p b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:mapMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "maximumByM",
          "package": "monadlist",
          "signature": "(a -\u003e a -\u003e m Ordering) -\u003e [a] -\u003e m a",
          "source": "src/Control-Monad-ListM.html#maximumByM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "maximumByM",
          "normalized": "(a-\u003ea-\u003eb Ordering)-\u003e[a]-\u003eb a",
          "package": "monadlist",
          "partial": "By",
          "signature": "(a-\u003ea-\u003em Ordering)-\u003e[a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:maximumByM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "maximumM",
          "package": "monadlist",
          "signature": "[a] -\u003e m a",
          "source": "src/Control-Monad-ListM.html#maximumM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "maximumM",
          "normalized": "[a]-\u003eb a",
          "package": "monadlist",
          "signature": "[a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:maximumM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "minimumByM",
          "package": "monadlist",
          "signature": "(a -\u003e a -\u003e m Ordering) -\u003e [a] -\u003e m a",
          "source": "src/Control-Monad-ListM.html#minimumByM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "minimumByM",
          "normalized": "(a-\u003ea-\u003eb Ordering)-\u003e[a]-\u003eb a",
          "package": "monadlist",
          "partial": "By",
          "signature": "(a-\u003ea-\u003em Ordering)-\u003e[a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:minimumByM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "minimumM",
          "package": "monadlist",
          "signature": "[a] -\u003e m a",
          "source": "src/Control-Monad-ListM.html#minimumM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "minimumM",
          "normalized": "[a]-\u003eb a",
          "package": "monadlist",
          "signature": "[a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:minimumM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "notElemM",
          "package": "monadlist",
          "signature": "a -\u003e [a] -\u003e m Bool",
          "source": "src/Control-Monad-ListM.html#notElemM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "notElemM",
          "normalized": "a-\u003e[a]-\u003eb Bool",
          "package": "monadlist",
          "partial": "Elem",
          "signature": "a-\u003e[a]-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:notElemM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "nubByM",
          "package": "monadlist",
          "signature": "(a -\u003e a -\u003e m Bool) -\u003e [a] -\u003e m (p a)",
          "source": "src/Control-Monad-ListM.html#nubByM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "nubByM",
          "normalized": "(a-\u003ea-\u003eb Bool)-\u003e[a]-\u003eb(c a)",
          "package": "monadlist",
          "partial": "By",
          "signature": "(a-\u003ea-\u003em Bool)-\u003e[a]-\u003em(p a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:nubByM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "nubM",
          "package": "monadlist",
          "signature": "[a] -\u003e m (p a)",
          "source": "src/Control-Monad-ListM.html#nubM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "nubM",
          "normalized": "[a]-\u003eb(c a)",
          "package": "monadlist",
          "signature": "[a]-\u003em(p a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:nubM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "partitionM",
          "package": "monadlist",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m (p a, [a])",
          "source": "src/Control-Monad-ListM.html#partitionM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "partitionM",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb(c a,[a])",
          "package": "monadlist",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em(p a,[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:partitionM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "scanM",
          "package": "monadlist",
          "signature": "(a -\u003e b -\u003e m a) -\u003e a -\u003e [b] -\u003e m (p a)",
          "source": "src/Control-Monad-ListM.html#scanM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "scanM",
          "normalized": "(a-\u003eb-\u003ec a)-\u003ea-\u003e[b]-\u003ec(d a)",
          "package": "monadlist",
          "signature": "(a-\u003eb-\u003em a)-\u003ea-\u003e[b]-\u003em(p a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:scanM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "sortByM",
          "package": "monadlist",
          "signature": "(a -\u003e a -\u003e m Ordering) -\u003e [a] -\u003e m [a]",
          "source": "src/Control-Monad-ListM.html#sortByM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "sortByM",
          "normalized": "(a-\u003ea-\u003eb Ordering)-\u003e[a]-\u003eb[a]",
          "package": "monadlist",
          "partial": "By",
          "signature": "(a-\u003ea-\u003em Ordering)-\u003e[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:sortByM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "sortM",
          "package": "monadlist",
          "signature": "[a] -\u003e m [a]",
          "source": "src/Control-Monad-ListM.html#sortM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "sortM",
          "normalized": "[a]-\u003eb[a]",
          "package": "monadlist",
          "signature": "[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:sortM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "spanM",
          "package": "monadlist",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m (p a, [a])",
          "source": "src/Control-Monad-ListM.html#spanM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "spanM",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb(c a,[a])",
          "package": "monadlist",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em(p a,[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:spanM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "splitAtM",
          "package": "monadlist",
          "signature": "i -\u003e [m a] -\u003e m (p a, [a])",
          "source": "src/Control-Monad-ListM.html#splitAtM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "splitAtM",
          "normalized": "a-\u003e[b c]-\u003eb(d c,[c])",
          "package": "monadlist",
          "partial": "At",
          "signature": "i-\u003e[m a]-\u003em(p a,[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:splitAtM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "takeM",
          "package": "monadlist",
          "signature": "i -\u003e [m a] -\u003e m (p a)",
          "source": "src/Control-Monad-ListM.html#takeM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "takeM",
          "normalized": "a-\u003e[b c]-\u003eb(d c)",
          "package": "monadlist",
          "signature": "i-\u003e[m a]-\u003em(p a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:takeM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "takeWhileM",
          "package": "monadlist",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m (p a)",
          "source": "src/Control-Monad-ListM.html#takeWhileM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "takeWhileM",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb(c a)",
          "package": "monadlist",
          "partial": "While",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em(p a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:takeWhileM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "unionByM",
          "package": "monadlist",
          "signature": "(a -\u003e a -\u003e m Bool) -\u003e [a] -\u003e [a] -\u003e m [a]",
          "source": "src/Control-Monad-ListM.html#unionByM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "unionByM",
          "normalized": "(a-\u003ea-\u003eb Bool)-\u003e[a]-\u003e[a]-\u003eb[a]",
          "package": "monadlist",
          "partial": "By",
          "signature": "(a-\u003ea-\u003em Bool)-\u003e[a]-\u003e[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:unionByM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "unionM",
          "package": "monadlist",
          "signature": "[a] -\u003e [a] -\u003e m [a]",
          "source": "src/Control-Monad-ListM.html#unionM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "unionM",
          "normalized": "[a]-\u003e[a]-\u003eb[a]",
          "package": "monadlist",
          "signature": "[a]-\u003e[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:unionM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "zipWithM3",
          "package": "monadlist",
          "signature": "(a -\u003e b -\u003e c -\u003e m d) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e m (p d)",
          "source": "src/Control-Monad-ListM.html#zipWithM3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "zipWithM3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed e)-\u003e[a]-\u003e[b]-\u003e[c]-\u003ed(f e)",
          "package": "monadlist",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003em d)-\u003e[a]-\u003e[b]-\u003e[c]-\u003em(p d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:zipWithM3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "zipWithM4",
          "package": "monadlist",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e m e) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e m (p e)",
          "source": "src/Control-Monad-ListM.html#zipWithM4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "zipWithM4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee f)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003ee(g f)",
          "package": "monadlist",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003em e)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003em(p e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:zipWithM4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "zipWithM5",
          "package": "monadlist",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e m f) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e m (p f)",
          "source": "src/Control-Monad-ListM.html#zipWithM5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "zipWithM5",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef g)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003ef(h g)",
          "package": "monadlist",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003em f)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003em(p f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:zipWithM5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.ListM",
          "name": "zipWithM6",
          "package": "monadlist",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e -\u003e f -\u003e m g) -\u003e [a] -\u003e [b] -\u003e [c] -\u003e [d] -\u003e [e] -\u003e [f] -\u003e m (p g)",
          "source": "src/Control-Monad-ListM.html#zipWithM6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad ListM",
          "module": "Control.Monad.ListM",
          "name": "zipWithM6",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003eg h)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003eg(i h)",
          "package": "monadlist",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee-\u003ef-\u003em g)-\u003e[a]-\u003e[b]-\u003e[c]-\u003e[d]-\u003e[e]-\u003e[f]-\u003em(p g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadlist/docs/Control-Monad-ListM.html#v:zipWithM6"
      }
    }
  ]
]