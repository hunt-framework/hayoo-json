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
        "word": "yjtools"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Applicative.Tools",
          "name": "Tools",
          "package": "yjtools",
          "source": "src/Control-Applicative-Tools.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Applicative Tools",
          "module": "Control.Applicative.Tools",
          "name": "Tools",
          "package": "yjtools",
          "partial": "Tools",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Control-Applicative-Tools.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Applicative.Tools",
          "name": "(\u003c.\u003e)",
          "package": "yjtools",
          "signature": "(a -\u003e b) -\u003e (c -\u003e f a) -\u003e c -\u003e f b",
          "source": "src/Control-Applicative-Tools.html#%3C.%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Applicative Tools",
          "module": "Control.Applicative.Tools",
          "name": "(\u003c.\u003e) \u003c.\u003e",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed a)-\u003ec-\u003ed b",
          "package": "yjtools",
          "signature": "(a-\u003eb)-\u003e(c-\u003ef a)-\u003ec-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Control-Applicative-Tools.html#v:-60-.-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Tools",
          "name": "Tools",
          "package": "yjtools",
          "source": "src/Control-Monad-Tools.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Tools",
          "module": "Control.Monad.Tools",
          "name": "Tools",
          "package": "yjtools",
          "partial": "Tools",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Control-Monad-Tools.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Tools",
          "name": "doUntil",
          "package": "yjtools",
          "signature": "a -\u003e (a -\u003e m (a, Bool)) -\u003e m a",
          "source": "src/Control-Monad-Tools.html#doUntil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Tools",
          "module": "Control.Monad.Tools",
          "name": "doUntil",
          "normalized": "a-\u003e(a-\u003eb(a,Bool))-\u003eb a",
          "package": "yjtools",
          "partial": "Until",
          "signature": "a-\u003e(a-\u003em(a,Bool))-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Control-Monad-Tools.html#v:doUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Tools",
          "name": "doUntil_",
          "package": "yjtools",
          "signature": "m Bool -\u003e m ()",
          "source": "src/Control-Monad-Tools.html#doUntil_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Tools",
          "module": "Control.Monad.Tools",
          "name": "doUntil_",
          "normalized": "a Bool-\u003ea()",
          "package": "yjtools",
          "partial": "Until",
          "signature": "m Bool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Control-Monad-Tools.html#v:doUntil_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Tools",
          "name": "doWhile",
          "package": "yjtools",
          "signature": "a -\u003e (a -\u003e m (a, Bool)) -\u003e m a",
          "source": "src/Control-Monad-Tools.html#doWhile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Tools",
          "module": "Control.Monad.Tools",
          "name": "doWhile",
          "normalized": "a-\u003e(a-\u003eb(a,Bool))-\u003eb a",
          "package": "yjtools",
          "partial": "While",
          "signature": "a-\u003e(a-\u003em(a,Bool))-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Control-Monad-Tools.html#v:doWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Tools",
          "name": "doWhile_",
          "package": "yjtools",
          "signature": "m Bool -\u003e m ()",
          "source": "src/Control-Monad-Tools.html#doWhile_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Tools",
          "module": "Control.Monad.Tools",
          "name": "doWhile_",
          "normalized": "a Bool-\u003ea()",
          "package": "yjtools",
          "partial": "While",
          "signature": "m Bool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Control-Monad-Tools.html#v:doWhile_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Tools",
          "name": "filterM",
          "package": "yjtools",
          "signature": "(a -\u003e m Bool) -\u003e [a] -\u003e m [a]",
          "source": "src/Control-Monad-Tools.html#filterM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Tools",
          "module": "Control.Monad.Tools",
          "name": "filterM",
          "normalized": "(a-\u003eb Bool)-\u003e[a]-\u003eb[a]",
          "package": "yjtools",
          "signature": "(a-\u003em Bool)-\u003e[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Control-Monad-Tools.html#v:filterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Tools",
          "name": "for",
          "package": "yjtools",
          "signature": "a -\u003e (a -\u003e Bool) -\u003e (a -\u003e a) -\u003e b -\u003e (a -\u003e b -\u003e m b) -\u003e m b",
          "source": "src/Control-Monad-Tools.html#for",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Tools",
          "module": "Control.Monad.Tools",
          "name": "for",
          "normalized": "a-\u003e(a-\u003eBool)-\u003e(a-\u003ea)-\u003eb-\u003e(a-\u003eb-\u003ec b)-\u003ec b",
          "package": "yjtools",
          "signature": "a-\u003e(a-\u003eBool)-\u003e(a-\u003ea)-\u003eb-\u003e(a-\u003eb-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Control-Monad-Tools.html#v:for"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Tools",
          "name": "for_",
          "package": "yjtools",
          "signature": "a -\u003e (a -\u003e Bool) -\u003e (a -\u003e a) -\u003e (a -\u003e m b) -\u003e m ()",
          "source": "src/Control-Monad-Tools.html#for_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Tools",
          "module": "Control.Monad.Tools",
          "name": "for_",
          "normalized": "a-\u003e(a-\u003eBool)-\u003e(a-\u003ea)-\u003e(a-\u003eb c)-\u003eb()",
          "package": "yjtools",
          "signature": "a-\u003e(a-\u003eBool)-\u003e(a-\u003ea)-\u003e(a-\u003em b)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Control-Monad-Tools.html#v:for_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Tools",
          "name": "ifM",
          "package": "yjtools",
          "signature": "m Bool -\u003e m a -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-Tools.html#ifM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Tools",
          "module": "Control.Monad.Tools",
          "name": "ifM",
          "normalized": "a Bool-\u003ea b-\u003ea b-\u003ea b",
          "package": "yjtools",
          "signature": "m Bool-\u003em a-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Control-Monad-Tools.html#v:ifM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Tools",
          "name": "repeatM",
          "package": "yjtools",
          "signature": "m a -\u003e m [a]",
          "source": "src/Control-Monad-Tools.html#repeatM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Tools",
          "module": "Control.Monad.Tools",
          "name": "repeatM",
          "normalized": "a b-\u003ea[b]",
          "package": "yjtools",
          "signature": "m a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Control-Monad-Tools.html#v:repeatM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Tools",
          "name": "repeatM_",
          "package": "yjtools",
          "signature": "m a -\u003e m ()",
          "source": "src/Control-Monad-Tools.html#repeatM_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Tools",
          "module": "Control.Monad.Tools",
          "name": "repeatM_",
          "normalized": "a b-\u003ea()",
          "package": "yjtools",
          "signature": "m a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Control-Monad-Tools.html#v:repeatM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Tools",
          "name": "skipRet",
          "package": "yjtools",
          "signature": "m b -\u003e a -\u003e m a",
          "source": "src/Control-Monad-Tools.html#skipRet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Tools",
          "module": "Control.Monad.Tools",
          "name": "skipRet",
          "normalized": "a b-\u003ec-\u003ea c",
          "package": "yjtools",
          "partial": "Ret",
          "signature": "m b-\u003ea-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Control-Monad-Tools.html#v:skipRet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Tools",
          "name": "unlessM",
          "package": "yjtools",
          "signature": "m Bool -\u003e m () -\u003e m ()",
          "source": "src/Control-Monad-Tools.html#unlessM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Tools",
          "module": "Control.Monad.Tools",
          "name": "unlessM",
          "normalized": "a Bool-\u003ea()-\u003ea()",
          "package": "yjtools",
          "signature": "m Bool-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Control-Monad-Tools.html#v:unlessM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Tools",
          "name": "whenM",
          "package": "yjtools",
          "signature": "m Bool -\u003e m () -\u003e m ()",
          "source": "src/Control-Monad-Tools.html#whenM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Tools",
          "module": "Control.Monad.Tools",
          "name": "whenM",
          "normalized": "a Bool-\u003ea()-\u003ea()",
          "package": "yjtools",
          "signature": "m Bool-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Control-Monad-Tools.html#v:whenM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bool.Tools",
          "name": "Tools",
          "package": "yjtools",
          "source": "src/Data-Bool-Tools.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Bool Tools",
          "module": "Data.Bool.Tools",
          "name": "Tools",
          "package": "yjtools",
          "partial": "Tools",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Data-Bool-Tools.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bool.Tools",
          "name": "(|||)",
          "package": "yjtools",
          "signature": "m Bool -\u003e m Bool -\u003e m Bool",
          "source": "src/Data-Bool-Tools.html#%7C%7C%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bool Tools",
          "module": "Data.Bool.Tools",
          "name": "(|||) |||",
          "normalized": "a Bool-\u003ea Bool-\u003ea Bool",
          "package": "yjtools",
          "signature": "m Bool-\u003em Bool-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Data-Bool-Tools.html#v:-124--124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bool.Tools",
          "name": "(&&&)",
          "package": "yjtools",
          "signature": "m Bool -\u003e m Bool -\u003e m Bool",
          "source": "src/Data-Bool-Tools.html#%26%26%26",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bool Tools",
          "module": "Data.Bool.Tools",
          "name": "(&&&) &&&",
          "normalized": "a Bool-\u003ea Bool-\u003ea Bool",
          "package": "yjtools",
          "signature": "m Bool-\u003em Bool-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Data-Bool-Tools.html#v:-38--38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Bool.Tools",
          "name": "whether",
          "package": "yjtools",
          "signature": "a -\u003e a -\u003e Bool -\u003e a",
          "source": "src/Data-Bool-Tools.html#whether",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Bool Tools",
          "module": "Data.Bool.Tools",
          "name": "whether",
          "normalized": "a-\u003ea-\u003eBool-\u003ea",
          "package": "yjtools",
          "signature": "a-\u003ea-\u003eBool-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Data-Bool-Tools.html#v:whether"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Function.Tools",
          "name": "Tools",
          "package": "yjtools",
          "source": "src/Data-Function-Tools.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Function Tools",
          "module": "Data.Function.Tools",
          "name": "Tools",
          "package": "yjtools",
          "partial": "Tools",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Data-Function-Tools.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Function.Tools",
          "name": "apply2way",
          "package": "yjtools",
          "signature": "(a -\u003e b -\u003e c) -\u003e (d -\u003e a) -\u003e (d -\u003e b) -\u003e d -\u003e c",
          "source": "src/Data-Function-Tools.html#apply2way",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Function Tools",
          "module": "Data.Function.Tools",
          "name": "apply2way",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d-\u003ea)-\u003e(d-\u003eb)-\u003ed-\u003ec",
          "package": "yjtools",
          "signature": "(a-\u003eb-\u003ec)-\u003e(d-\u003ea)-\u003e(d-\u003eb)-\u003ed-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Data-Function-Tools.html#v:apply2way"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Function.Tools",
          "name": "applyUnless",
          "package": "yjtools",
          "signature": "Bool -\u003e (a -\u003e a) -\u003e a -\u003e a",
          "source": "src/Data-Function-Tools.html#applyUnless",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Function Tools",
          "module": "Data.Function.Tools",
          "name": "applyUnless",
          "normalized": "Bool-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "package": "yjtools",
          "partial": "Unless",
          "signature": "Bool-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Data-Function-Tools.html#v:applyUnless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Function.Tools",
          "name": "applyWhen",
          "package": "yjtools",
          "signature": "Bool -\u003e (a -\u003e a) -\u003e a -\u003e a",
          "source": "src/Data-Function-Tools.html#applyWhen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Function Tools",
          "module": "Data.Function.Tools",
          "name": "applyWhen",
          "normalized": "Bool-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "package": "yjtools",
          "partial": "When",
          "signature": "Bool-\u003e(a-\u003ea)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Data-Function-Tools.html#v:applyWhen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Function.Tools",
          "name": "const2",
          "package": "yjtools",
          "signature": "a -\u003e b -\u003e c -\u003e a",
          "source": "src/Data-Function-Tools.html#const2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Function Tools",
          "module": "Data.Function.Tools",
          "name": "const2",
          "normalized": "a-\u003eb-\u003ec-\u003ea",
          "package": "yjtools",
          "signature": "a-\u003eb-\u003ec-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Data-Function-Tools.html#v:const2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Function.Tools",
          "name": "const3",
          "package": "yjtools",
          "signature": "a -\u003e b -\u003e c -\u003e d -\u003e a",
          "source": "src/Data-Function-Tools.html#const3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Function Tools",
          "module": "Data.Function.Tools",
          "name": "const3",
          "normalized": "a-\u003eb-\u003ec-\u003ed-\u003ea",
          "package": "yjtools",
          "signature": "a-\u003eb-\u003ec-\u003ed-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Data-Function-Tools.html#v:const3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IORef.Tools",
          "name": "Tools",
          "package": "yjtools",
          "source": "src/Data-IORef-Tools.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data IORef Tools",
          "module": "Data.IORef.Tools",
          "name": "Tools",
          "package": "yjtools",
          "partial": "Tools",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Data-IORef-Tools.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IORef.Tools",
          "name": "atomicModifyIORef_",
          "package": "yjtools",
          "signature": "IORef a -\u003e (a -\u003e a) -\u003e IO ()",
          "source": "src/Data-IORef-Tools.html#atomicModifyIORef_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IORef Tools",
          "module": "Data.IORef.Tools",
          "name": "atomicModifyIORef_",
          "normalized": "IORef a-\u003e(a-\u003ea)-\u003eIO()",
          "package": "yjtools",
          "partial": "Modify IORef",
          "signature": "IORef a-\u003e(a-\u003ea)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Data-IORef-Tools.html#v:atomicModifyIORef_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Tools",
          "name": "Tools",
          "package": "yjtools",
          "source": "src/Data-List-Tools.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data List Tools",
          "module": "Data.List.Tools",
          "name": "Tools",
          "package": "yjtools",
          "partial": "Tools",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Data-List-Tools.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Tools",
          "name": "defaultElem",
          "package": "yjtools",
          "signature": "a -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Tools.html#defaultElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Tools",
          "module": "Data.List.Tools",
          "name": "defaultElem",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "yjtools",
          "partial": "Elem",
          "signature": "a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Data-List-Tools.html#v:defaultElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Tools",
          "name": "dropUntil",
          "package": "yjtools",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Tools.html#dropUntil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Tools",
          "module": "Data.List.Tools",
          "name": "dropUntil",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "yjtools",
          "partial": "Until",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Data-List-Tools.html#v:dropUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Tools",
          "name": "isIncludedElem",
          "package": "yjtools",
          "signature": "[a] -\u003e [a] -\u003e Bool",
          "source": "src/Data-List-Tools.html#isIncludedElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Tools",
          "module": "Data.List.Tools",
          "name": "isIncludedElem",
          "normalized": "[a]-\u003e[a]-\u003eBool",
          "package": "yjtools",
          "partial": "Included Elem",
          "signature": "[a]-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Data-List-Tools.html#v:isIncludedElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Tools",
          "name": "modifyAt",
          "package": "yjtools",
          "signature": "[a] -\u003e Int -\u003e (a -\u003e a) -\u003e [a]",
          "source": "src/Data-List-Tools.html#modifyAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Tools",
          "module": "Data.List.Tools",
          "name": "modifyAt",
          "normalized": "[a]-\u003eInt-\u003e(a-\u003ea)-\u003e[a]",
          "package": "yjtools",
          "partial": "At",
          "signature": "[a]-\u003eInt-\u003e(a-\u003ea)-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Data-List-Tools.html#v:modifyAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Tools",
          "name": "mulLists",
          "package": "yjtools",
          "signature": "[[a]] -\u003e [[a]]",
          "source": "src/Data-List-Tools.html#mulLists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Tools",
          "module": "Data.List.Tools",
          "name": "mulLists",
          "normalized": "[[a]]-\u003e[[a]]",
          "package": "yjtools",
          "partial": "Lists",
          "signature": "[[a]]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Data-List-Tools.html#v:mulLists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Tools",
          "name": "setAt",
          "package": "yjtools",
          "signature": "[a] -\u003e Int -\u003e a -\u003e [a]",
          "source": "src/Data-List-Tools.html#setAt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Tools",
          "module": "Data.List.Tools",
          "name": "setAt",
          "normalized": "[a]-\u003eInt-\u003ea-\u003e[a]",
          "package": "yjtools",
          "partial": "At",
          "signature": "[a]-\u003eInt-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Data-List-Tools.html#v:setAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.Tools",
          "name": "takeUntil",
          "package": "yjtools",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [a]",
          "source": "src/Data-List-Tools.html#takeUntil",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List Tools",
          "module": "Data.List.Tools",
          "name": "takeUntil",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "yjtools",
          "partial": "Until",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Data-List-Tools.html#v:takeUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Tools",
          "name": "Tools",
          "package": "yjtools",
          "source": "src/Data-Tuple-Tools.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Tuple Tools",
          "module": "Data.Tuple.Tools",
          "name": "Tools",
          "package": "yjtools",
          "partial": "Tools",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Data-Tuple-Tools.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Tools",
          "name": "curry3",
          "package": "yjtools",
          "signature": "((a, b, c) -\u003e d) -\u003e a -\u003e b -\u003e c -\u003e d",
          "source": "src/Data-Tuple-Tools.html#curry3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Tools",
          "module": "Data.Tuple.Tools",
          "name": "curry3",
          "normalized": "((a,b,c)-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
          "package": "yjtools",
          "signature": "((a,b,c)-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Data-Tuple-Tools.html#v:curry3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Tools",
          "name": "rotate",
          "package": "yjtools",
          "signature": "a -\u003e (a, a) -\u003e (a, a)",
          "source": "src/Data-Tuple-Tools.html#rotate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Tools",
          "module": "Data.Tuple.Tools",
          "name": "rotate",
          "normalized": "a-\u003e(a,a)-\u003e(a,a)",
          "package": "yjtools",
          "signature": "a-\u003e(a,a)-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Data-Tuple-Tools.html#v:rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tuple.Tools",
          "name": "uncurry3",
          "package": "yjtools",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e (a, b, c) -\u003e d",
          "source": "src/Data-Tuple-Tools.html#uncurry3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tuple Tools",
          "module": "Data.Tuple.Tools",
          "name": "uncurry3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e(a,b,c)-\u003ed",
          "package": "yjtools",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003e(a,b,c)-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yjtools/docs/Data-Tuple-Tools.html#v:uncurry3"
      }
    }
  ]
]