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
        "word": "monadLib"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a number of functions that make it easy\nto get the functionality of MonadLib for user-defined newtypes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MonadLib.Derive",
          "name": "Derive",
          "package": "monadLib",
          "source": "src/MonadLib-Derive.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines number of functions that make it easy to get the functionality of MonadLib for user-defined newtypes",
          "hierarchy": "MonadLib Derive",
          "module": "MonadLib.Derive",
          "name": "Derive",
          "package": "monadLib",
          "partial": "Derive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn isomorphism between (usually) monads.\n Typically the constructor and selector of a newtype delcaration.\n\u003c/p\u003e",
          "module": "MonadLib.Derive",
          "name": "Iso",
          "package": "monadLib",
          "source": "src/MonadLib-Derive.html#Iso",
          "type": "data"
        },
        "index": {
          "description": "An isomorphism between usually monads Typically the constructor and selector of newtype delcaration",
          "hierarchy": "MonadLib Derive",
          "module": "MonadLib.Derive",
          "name": "Iso",
          "package": "monadLib",
          "partial": "Iso",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#t:Iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MonadLib.Derive",
          "name": "Iso",
          "package": "monadLib",
          "signature": "Iso (forall a.  m a -\u003e n a) (forall a.  n a -\u003e m a)",
          "source": "src/MonadLib-Derive.html#Iso",
          "type": "function"
        },
        "index": {
          "hierarchy": "MonadLib Derive",
          "module": "MonadLib.Derive",
          "name": "Iso",
          "normalized": "Iso(a b c d-\u003ee d)(a b e d-\u003ec d)",
          "package": "monadLib",
          "partial": "Iso",
          "signature": "Iso(forall a. m a-\u003en a)(forall a. n a-\u003em a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:Iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MonadLib.Derive",
          "name": "derive_abort",
          "package": "monadLib",
          "signature": "Iso m n -\u003e i -\u003e n a",
          "source": "src/MonadLib-Derive.html#derive_abort",
          "type": "function"
        },
        "index": {
          "hierarchy": "MonadLib Derive",
          "module": "MonadLib.Derive",
          "name": "derive_abort",
          "normalized": "Iso a b-\u003ec-\u003eb d",
          "package": "monadLib",
          "signature": "Iso m n-\u003ei-\u003en a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_abort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib.Derive",
          "name": "derive_apply",
          "package": "monadLib",
          "signature": "Iso m n -\u003e n (a -\u003e b) -\u003e n a -\u003e n b",
          "source": "src/MonadLib-Derive.html#derive_apply",
          "type": "function"
        },
        "index": {
          "description": "Derive the implementation of from Applicative",
          "hierarchy": "MonadLib Derive",
          "module": "MonadLib.Derive",
          "name": "derive_apply",
          "normalized": "Iso a b-\u003eb(c-\u003ed)-\u003eb c-\u003eb d",
          "package": "monadLib",
          "signature": "Iso m n-\u003en(a-\u003eb)-\u003en a-\u003en b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003eask\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eReaderM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib.Derive",
          "name": "derive_ask",
          "package": "monadLib",
          "signature": "Iso m n -\u003e n i",
          "source": "src/MonadLib-Derive.html#derive_ask",
          "type": "function"
        },
        "index": {
          "description": "Derive the implementation of ask from ReaderM",
          "hierarchy": "MonadLib Derive",
          "module": "MonadLib.Derive",
          "name": "derive_ask",
          "normalized": "Iso a b-\u003eb c",
          "package": "monadLib",
          "signature": "Iso m n-\u003en i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_ask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib.Derive",
          "name": "derive_bind",
          "package": "monadLib",
          "signature": "Iso m n -\u003e n a -\u003e (a -\u003e n b) -\u003e n b",
          "source": "src/MonadLib-Derive.html#derive_bind",
          "type": "function"
        },
        "index": {
          "description": "Derive the implementation of from Monad",
          "hierarchy": "MonadLib Derive",
          "module": "MonadLib.Derive",
          "name": "derive_bind",
          "normalized": "Iso a b-\u003eb c-\u003e(c-\u003eb d)-\u003eb d",
          "package": "monadLib",
          "signature": "Iso m n-\u003en a-\u003e(a-\u003en b)-\u003en b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003ecallWithCC\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eContM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib.Derive",
          "name": "derive_callWithCC",
          "package": "monadLib",
          "signature": "Iso m n -\u003e ((a -\u003e Label n) -\u003e n a) -\u003e n a",
          "source": "src/MonadLib-Derive.html#derive_callWithCC",
          "type": "function"
        },
        "index": {
          "description": "Derive the implementation of callWithCC from ContM",
          "hierarchy": "MonadLib Derive",
          "module": "MonadLib.Derive",
          "name": "derive_callWithCC",
          "normalized": "Iso a b-\u003e((c-\u003eLabel b)-\u003eb c)-\u003eb c",
          "package": "monadLib",
          "partial": "With CC",
          "signature": "Iso m n-\u003e((a-\u003eLabel n)-\u003en a)-\u003en a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_callWithCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003ecollect\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eRunWriterM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib.Derive",
          "name": "derive_collect",
          "package": "monadLib",
          "signature": "Iso m n -\u003e n a -\u003e n (a, i)",
          "source": "src/MonadLib-Derive.html#derive_collect",
          "type": "function"
        },
        "index": {
          "description": "Derive the implementation of collect from RunWriterM",
          "hierarchy": "MonadLib Derive",
          "module": "MonadLib.Derive",
          "name": "derive_collect",
          "normalized": "Iso a b-\u003eb c-\u003eb(c,d)",
          "package": "monadLib",
          "signature": "Iso m n-\u003en a-\u003en(a,i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_collect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib.Derive",
          "name": "derive_empty",
          "package": "monadLib",
          "signature": "Iso m n -\u003e n a",
          "source": "src/MonadLib-Derive.html#derive_empty",
          "type": "function"
        },
        "index": {
          "description": "Derive the implementation of empty from Alternative",
          "hierarchy": "MonadLib Derive",
          "module": "MonadLib.Derive",
          "name": "derive_empty",
          "normalized": "Iso a b-\u003eb c",
          "package": "monadLib",
          "signature": "Iso m n-\u003en a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MonadLib.Derive",
          "name": "derive_fail",
          "package": "monadLib",
          "signature": "Iso m n -\u003e String -\u003e n a",
          "source": "src/MonadLib-Derive.html#derive_fail",
          "type": "function"
        },
        "index": {
          "hierarchy": "MonadLib Derive",
          "module": "MonadLib.Derive",
          "name": "derive_fail",
          "normalized": "Iso a b-\u003eString-\u003eb c",
          "package": "monadLib",
          "signature": "Iso m n-\u003eString-\u003en a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib.Derive",
          "name": "derive_fmap",
          "package": "monadLib",
          "signature": "Iso m n -\u003e (a -\u003e b) -\u003e n a -\u003e n b",
          "source": "src/MonadLib-Derive.html#derive_fmap",
          "type": "function"
        },
        "index": {
          "description": "Derive the implementation of fmap from Functor",
          "hierarchy": "MonadLib Derive",
          "module": "MonadLib.Derive",
          "name": "derive_fmap",
          "normalized": "Iso a b-\u003e(c-\u003ed)-\u003eb c-\u003eb d",
          "package": "monadLib",
          "signature": "Iso m n-\u003e(a-\u003eb)-\u003en a-\u003en b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_fmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eStateM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib.Derive",
          "name": "derive_get",
          "package": "monadLib",
          "signature": "Iso m n -\u003e n i",
          "source": "src/MonadLib-Derive.html#derive_get",
          "type": "function"
        },
        "index": {
          "description": "Derive the implementation of get from StateM",
          "hierarchy": "MonadLib Derive",
          "module": "MonadLib.Derive",
          "name": "derive_get",
          "normalized": "Iso a b-\u003eb c",
          "package": "monadLib",
          "signature": "Iso m n-\u003en i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003einBase\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eBaseM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib.Derive",
          "name": "derive_inBase",
          "package": "monadLib",
          "signature": "Iso m n -\u003e x a -\u003e n a",
          "source": "src/MonadLib-Derive.html#derive_inBase",
          "type": "function"
        },
        "index": {
          "description": "Derive the implementation of inBase from BaseM",
          "hierarchy": "MonadLib Derive",
          "module": "MonadLib.Derive",
          "name": "derive_inBase",
          "normalized": "Iso a b-\u003ec d-\u003eb d",
          "package": "monadLib",
          "partial": "Base",
          "signature": "Iso m n-\u003ex a-\u003en a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_inBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eMonadT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib.Derive",
          "name": "derive_lift",
          "package": "monadLib",
          "signature": "Iso (t m) n -\u003e m a -\u003e n a",
          "source": "src/MonadLib-Derive.html#derive_lift",
          "type": "function"
        },
        "index": {
          "description": "Derive the implementation of lift from MonadT",
          "hierarchy": "MonadLib Derive",
          "module": "MonadLib.Derive",
          "name": "derive_lift",
          "normalized": "Iso(a b)c-\u003eb d-\u003ec d",
          "package": "monadLib",
          "signature": "Iso(t m)n-\u003em a-\u003en a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003elocal\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eRunReaderM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib.Derive",
          "name": "derive_local",
          "package": "monadLib",
          "signature": "Iso m n -\u003e i -\u003e n a -\u003e n a",
          "source": "src/MonadLib-Derive.html#derive_local",
          "type": "function"
        },
        "index": {
          "description": "Derive the implementation of local from RunReaderM",
          "hierarchy": "MonadLib Derive",
          "module": "MonadLib.Derive",
          "name": "derive_local",
          "normalized": "Iso a b-\u003ec-\u003eb d-\u003eb d",
          "package": "monadLib",
          "signature": "Iso m n-\u003ei-\u003en a-\u003en a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003emfix\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eMonadFix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib.Derive",
          "name": "derive_mfix",
          "package": "monadLib",
          "signature": "Iso m n -\u003e (a -\u003e n a) -\u003e n a",
          "source": "src/MonadLib-Derive.html#derive_mfix",
          "type": "function"
        },
        "index": {
          "description": "Derive the implementation of mfix from MonadFix",
          "hierarchy": "MonadLib Derive",
          "module": "MonadLib.Derive",
          "name": "derive_mfix",
          "normalized": "Iso a b-\u003e(c-\u003eb c)-\u003eb c",
          "package": "monadLib",
          "signature": "Iso m n-\u003e(a-\u003en a)-\u003en a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_mfix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib.Derive",
          "name": "derive_mplus",
          "package": "monadLib",
          "signature": "Iso m n -\u003e n a -\u003e n a -\u003e n a",
          "source": "src/MonadLib-Derive.html#derive_mplus",
          "type": "function"
        },
        "index": {
          "description": "Derive the implementation of mplus from MonadPlus",
          "hierarchy": "MonadLib Derive",
          "module": "MonadLib.Derive",
          "name": "derive_mplus",
          "normalized": "Iso a b-\u003eb c-\u003eb c-\u003eb c",
          "package": "monadLib",
          "signature": "Iso m n-\u003en a-\u003en a-\u003en a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_mplus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib.Derive",
          "name": "derive_mzero",
          "package": "monadLib",
          "signature": "Iso m n -\u003e n a",
          "source": "src/MonadLib-Derive.html#derive_mzero",
          "type": "function"
        },
        "index": {
          "description": "Derive the implementation of mzero from MonadPlus",
          "hierarchy": "MonadLib Derive",
          "module": "MonadLib.Derive",
          "name": "derive_mzero",
          "normalized": "Iso a b-\u003eb c",
          "package": "monadLib",
          "signature": "Iso m n-\u003en a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_mzero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib.Derive",
          "name": "derive_or",
          "package": "monadLib",
          "signature": "Iso m n -\u003e n a -\u003e n a -\u003e n a",
          "source": "src/MonadLib-Derive.html#derive_or",
          "type": "function"
        },
        "index": {
          "description": "Derive the implementation of from Alternative",
          "hierarchy": "MonadLib Derive",
          "module": "MonadLib.Derive",
          "name": "derive_or",
          "normalized": "Iso a b-\u003eb c-\u003eb c-\u003eb c",
          "package": "monadLib",
          "signature": "Iso m n-\u003en a-\u003en a-\u003en a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib.Derive",
          "name": "derive_pure",
          "package": "monadLib",
          "signature": "Iso m n -\u003e a -\u003e n a",
          "source": "src/MonadLib-Derive.html#derive_pure",
          "type": "function"
        },
        "index": {
          "description": "Derive the implementation of pure from Applicative",
          "hierarchy": "MonadLib Derive",
          "module": "MonadLib.Derive",
          "name": "derive_pure",
          "normalized": "Iso a b-\u003ec-\u003eb c",
          "package": "monadLib",
          "signature": "Iso m n-\u003ea-\u003en a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eWriterM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib.Derive",
          "name": "derive_put",
          "package": "monadLib",
          "signature": "Iso m n -\u003e i -\u003e n ()",
          "source": "src/MonadLib-Derive.html#derive_put",
          "type": "function"
        },
        "index": {
          "description": "Derive the implementation of put from WriterM",
          "hierarchy": "MonadLib Derive",
          "module": "MonadLib.Derive",
          "name": "derive_put",
          "normalized": "Iso a b-\u003ec-\u003eb()",
          "package": "monadLib",
          "signature": "Iso m n-\u003ei-\u003en()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003eraise\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eExceptionM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib.Derive",
          "name": "derive_raise",
          "package": "monadLib",
          "signature": "Iso m n -\u003e i -\u003e n a",
          "source": "src/MonadLib-Derive.html#derive_raise",
          "type": "function"
        },
        "index": {
          "description": "Derive the implementation of raise from ExceptionM",
          "hierarchy": "MonadLib Derive",
          "module": "MonadLib.Derive",
          "name": "derive_raise",
          "normalized": "Iso a b-\u003ec-\u003eb d",
          "package": "monadLib",
          "signature": "Iso m n-\u003ei-\u003en a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_raise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib.Derive",
          "name": "derive_return",
          "package": "monadLib",
          "signature": "Iso m n -\u003e a -\u003e n a",
          "source": "src/MonadLib-Derive.html#derive_return",
          "type": "function"
        },
        "index": {
          "description": "Derive the implementation of return from Monad",
          "hierarchy": "MonadLib Derive",
          "module": "MonadLib.Derive",
          "name": "derive_return",
          "normalized": "Iso a b-\u003ec-\u003eb c",
          "package": "monadLib",
          "signature": "Iso m n-\u003ea-\u003en a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive the implementation of the \u003ccode\u003e\u003ca\u003erunM\u003c/a\u003e\u003c/code\u003e function from \u003ccode\u003e\u003ca\u003eRunM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib.Derive",
          "name": "derive_runM",
          "package": "monadLib",
          "signature": "Iso m n -\u003e n a -\u003e r",
          "source": "src/MonadLib-Derive.html#derive_runM",
          "type": "function"
        },
        "index": {
          "description": "Derive the implementation of the runM function from RunM",
          "hierarchy": "MonadLib Derive",
          "module": "MonadLib.Derive",
          "name": "derive_runM",
          "normalized": "Iso a b-\u003eb c-\u003ed",
          "package": "monadLib",
          "signature": "Iso m n-\u003en a-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_runM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eStateM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib.Derive",
          "name": "derive_set",
          "package": "monadLib",
          "signature": "Iso m n -\u003e i -\u003e n ()",
          "source": "src/MonadLib-Derive.html#derive_set",
          "type": "function"
        },
        "index": {
          "description": "Derive the implementation of set from StateM",
          "hierarchy": "MonadLib Derive",
          "module": "MonadLib.Derive",
          "name": "derive_set",
          "normalized": "Iso a b-\u003ec-\u003eb()",
          "package": "monadLib",
          "signature": "Iso m n-\u003ei-\u003en()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eRunExceptionM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib.Derive",
          "name": "derive_try",
          "package": "monadLib",
          "signature": "Iso m n -\u003e n a -\u003e n (Either i a)",
          "source": "src/MonadLib-Derive.html#derive_try",
          "type": "function"
        },
        "index": {
          "description": "Derive the implementation of try from RunExceptionM",
          "hierarchy": "MonadLib Derive",
          "module": "MonadLib.Derive",
          "name": "derive_try",
          "normalized": "Iso a b-\u003eb c-\u003eb(Either d c)",
          "package": "monadLib",
          "signature": "Iso m n-\u003en a-\u003en(Either i a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a collection of monads that\n   are defined in terms of the monad transformers from\n   \u003ca\u003eMonadLib\u003c/a\u003e.   The definitions in this module are\n   completely mechanical and so this module may become\n   obsolete if support for automated derivations for instances\n   becomes well supported across implementations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MonadLib.Monads",
          "name": "Monads",
          "package": "monadLib",
          "source": "src/MonadLib-Monads.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains collection of monads that are defined in terms of the monad transformers from MonadLib The definitions in this module are completely mechanical and so this module may become obsolete if support for automated derivations for instances becomes well supported across implementations",
          "hierarchy": "MonadLib Monads",
          "module": "MonadLib.Monads",
          "name": "Monads",
          "package": "monadLib",
          "partial": "Monads",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Monads.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MonadLib.Monads",
          "name": "Cont",
          "package": "monadLib",
          "source": "src/MonadLib-Monads.html#Cont",
          "type": "data"
        },
        "index": {
          "hierarchy": "MonadLib Monads",
          "module": "MonadLib.Monads",
          "name": "Cont",
          "package": "monadLib",
          "partial": "Cont",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Monads.html#t:Cont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MonadLib.Monads",
          "name": "Exception",
          "package": "monadLib",
          "source": "src/MonadLib-Monads.html#Exception",
          "type": "data"
        },
        "index": {
          "hierarchy": "MonadLib Monads",
          "module": "MonadLib.Monads",
          "name": "Exception",
          "package": "monadLib",
          "partial": "Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Monads.html#t:Exception"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MonadLib.Monads",
          "name": "Reader",
          "package": "monadLib",
          "source": "src/MonadLib-Monads.html#Reader",
          "type": "data"
        },
        "index": {
          "hierarchy": "MonadLib Monads",
          "module": "MonadLib.Monads",
          "name": "Reader",
          "package": "monadLib",
          "partial": "Reader",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Monads.html#t:Reader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MonadLib.Monads",
          "name": "State",
          "package": "monadLib",
          "source": "src/MonadLib-Monads.html#State",
          "type": "data"
        },
        "index": {
          "hierarchy": "MonadLib Monads",
          "module": "MonadLib.Monads",
          "name": "State",
          "package": "monadLib",
          "partial": "State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Monads.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MonadLib.Monads",
          "name": "Writer",
          "package": "monadLib",
          "source": "src/MonadLib-Monads.html#Writer",
          "type": "data"
        },
        "index": {
          "hierarchy": "MonadLib Monads",
          "module": "MonadLib.Monads",
          "name": "Writer",
          "package": "monadLib",
          "partial": "Writer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Monads.html#t:Writer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MonadLib.Monads",
          "name": "runCont",
          "package": "monadLib",
          "signature": "(a -\u003e i) -\u003e Cont i a -\u003e i",
          "source": "src/MonadLib-Monads.html#runCont",
          "type": "function"
        },
        "index": {
          "hierarchy": "MonadLib Monads",
          "module": "MonadLib.Monads",
          "name": "runCont",
          "normalized": "(a-\u003eb)-\u003eCont b a-\u003eb",
          "package": "monadLib",
          "partial": "Cont",
          "signature": "(a-\u003ei)-\u003eCont i a-\u003ei",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Monads.html#v:runCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MonadLib.Monads",
          "name": "runException",
          "package": "monadLib",
          "signature": "Exception i a -\u003e Either i a",
          "source": "src/MonadLib-Monads.html#runException",
          "type": "function"
        },
        "index": {
          "hierarchy": "MonadLib Monads",
          "module": "MonadLib.Monads",
          "name": "runException",
          "normalized": "Exception a b-\u003eEither a b",
          "package": "monadLib",
          "partial": "Exception",
          "signature": "Exception i a-\u003eEither i a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Monads.html#v:runException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MonadLib.Monads",
          "name": "runReader",
          "package": "monadLib",
          "signature": "i -\u003e Reader i a -\u003e a",
          "source": "src/MonadLib-Monads.html#runReader",
          "type": "function"
        },
        "index": {
          "hierarchy": "MonadLib Monads",
          "module": "MonadLib.Monads",
          "name": "runReader",
          "normalized": "a-\u003eReader a b-\u003eb",
          "package": "monadLib",
          "partial": "Reader",
          "signature": "i-\u003eReader i a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Monads.html#v:runReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MonadLib.Monads",
          "name": "runState",
          "package": "monadLib",
          "signature": "i -\u003e State i a -\u003e (a, i)",
          "source": "src/MonadLib-Monads.html#runState",
          "type": "function"
        },
        "index": {
          "hierarchy": "MonadLib Monads",
          "module": "MonadLib.Monads",
          "name": "runState",
          "normalized": "a-\u003eState a b-\u003e(b,a)",
          "package": "monadLib",
          "partial": "State",
          "signature": "i-\u003eState i a-\u003e(a,i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Monads.html#v:runState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MonadLib.Monads",
          "name": "runWriter",
          "package": "monadLib",
          "signature": "Writer i a -\u003e (a, i)",
          "source": "src/MonadLib-Monads.html#runWriter",
          "type": "function"
        },
        "index": {
          "hierarchy": "MonadLib Monads",
          "module": "MonadLib.Monads",
          "name": "runWriter",
          "normalized": "Writer a b-\u003e(b,a)",
          "package": "monadLib",
          "partial": "Writer",
          "signature": "Writer i a-\u003e(a,i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Monads.html#v:runWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library provides a collection of monad transformers that\n    can be combined to produce various monads.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MonadLib",
          "name": "MonadLib",
          "package": "monadLib",
          "source": "src/MonadLib.html",
          "type": "module"
        },
        "index": {
          "description": "This library provides collection of monad transformers that can be combined to produce various monads",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "MonadLib",
          "package": "monadLib",
          "partial": "Monad Lib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClassifies monads that support aborting the program and returning\n a given final result of type \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "AbortM",
          "package": "monadLib",
          "source": "src/MonadLib.html#AbortM",
          "type": "class"
        },
        "index": {
          "description": "Classifies monads that support aborting the program and returning given final result of type",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "AbortM",
          "package": "monadLib",
          "partial": "Abort",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:AbortM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MonadLib",
          "name": "BaseM",
          "package": "monadLib",
          "source": "src/MonadLib.html#BaseM",
          "type": "class"
        },
        "index": {
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "BaseM",
          "package": "monadLib",
          "partial": "Base",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:BaseM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd support for multiple answers.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "ChoiceT",
          "package": "monadLib",
          "source": "src/MonadLib.html#ChoiceT",
          "type": "data"
        },
        "index": {
          "description": "Add support for multiple answers",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "ChoiceT",
          "package": "monadLib",
          "partial": "Choice",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:ChoiceT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClassifies monads that provide access to a computation's continuation.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "ContM",
          "package": "monadLib",
          "source": "src/MonadLib.html#ContM",
          "type": "class"
        },
        "index": {
          "description": "Classifies monads that provide access to computation continuation",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "ContM",
          "package": "monadLib",
          "partial": "Cont",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:ContM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd support for continuations within a prompt of type \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "ContT",
          "package": "monadLib",
          "source": "src/MonadLib.html#ContT",
          "type": "data"
        },
        "index": {
          "description": "Add support for continuations within prompt of type",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "ContT",
          "package": "monadLib",
          "partial": "Cont",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:ContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClassifies monads that support raising exceptions of type \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "ExceptionM",
          "package": "monadLib",
          "source": "src/MonadLib.html#ExceptionM",
          "type": "class"
        },
        "index": {
          "description": "Classifies monads that support raising exceptions of type",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "ExceptionM",
          "package": "monadLib",
          "partial": "Exception",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:ExceptionM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd support for exceptions of type \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "ExceptionT",
          "package": "monadLib",
          "source": "src/MonadLib.html#ExceptionT",
          "type": "data"
        },
        "index": {
          "description": "Add support for exceptions of type",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "ExceptionT",
          "package": "monadLib",
          "partial": "Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:ExceptionT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputations with no effects.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "Id",
          "package": "monadLib",
          "source": "src/MonadLib.html#Id",
          "type": "data"
        },
        "index": {
          "description": "Computations with no effects",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "Id",
          "package": "monadLib",
          "partial": "Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds no new features.  Useful as a placeholder.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "IdT",
          "package": "monadLib",
          "source": "src/MonadLib.html#IdT",
          "type": "data"
        },
        "index": {
          "description": "Adds no new features Useful as placeholder",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "IdT",
          "package": "monadLib",
          "partial": "Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:IdT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn explicit representation for monadic continuations.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "Label",
          "package": "monadLib",
          "source": "src/MonadLib.html#Label",
          "type": "data"
        },
        "index": {
          "description": "An explicit representation for monadic continuations",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "Label",
          "package": "monadLib",
          "partial": "Label",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputation with no effects (strict).\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "Lift",
          "package": "monadLib",
          "source": "src/MonadLib.html#Lift",
          "type": "data"
        },
        "index": {
          "description": "Computation with no effects strict",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "Lift",
          "package": "monadLib",
          "partial": "Lift",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:Lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MonadLib",
          "name": "MonadT",
          "package": "monadLib",
          "source": "src/MonadLib.html#MonadT",
          "type": "class"
        },
        "index": {
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "MonadT",
          "package": "monadLib",
          "partial": "Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:MonadT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClassifies monads that provide access to a context of type \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "ReaderM",
          "package": "monadLib",
          "source": "src/MonadLib.html#ReaderM",
          "type": "class"
        },
        "index": {
          "description": "Classifies monads that provide access to context of type",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "ReaderM",
          "package": "monadLib",
          "partial": "Reader",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:ReaderM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd support for propagating a context of type \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "ReaderT",
          "package": "monadLib",
          "source": "src/MonadLib.html#ReaderT",
          "type": "data"
        },
        "index": {
          "description": "Add support for propagating context of type",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "ReaderT",
          "package": "monadLib",
          "partial": "Reader",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:ReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClassifies monads that support handling of exceptions.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "RunExceptionM",
          "package": "monadLib",
          "source": "src/MonadLib.html#RunExceptionM",
          "type": "class"
        },
        "index": {
          "description": "Classifies monads that support handling of exceptions",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "RunExceptionM",
          "package": "monadLib",
          "partial": "Run Exception",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:RunExceptionM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized running.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "RunM",
          "package": "monadLib",
          "source": "src/MonadLib.html#RunM",
          "type": "class"
        },
        "index": {
          "description": "Generalized running",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "RunM",
          "package": "monadLib",
          "partial": "Run",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:RunM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClassifies monads that support changing the context for a\n sub-computation.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "RunReaderM",
          "package": "monadLib",
          "source": "src/MonadLib.html#RunReaderM",
          "type": "class"
        },
        "index": {
          "description": "Classifies monads that support changing the context for sub-computation",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "RunReaderM",
          "package": "monadLib",
          "partial": "Run Reader",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:RunReaderM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClassifies monads that support collecting the output of\n a sub-computation.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "RunWriterM",
          "package": "monadLib",
          "source": "src/MonadLib.html#RunWriterM",
          "type": "class"
        },
        "index": {
          "description": "Classifies monads that support collecting the output of sub-computation",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "RunWriterM",
          "package": "monadLib",
          "partial": "Run Writer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:RunWriterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClassifies monads that propagate a state component of type \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "StateM",
          "package": "monadLib",
          "source": "src/MonadLib.html#StateM",
          "type": "class"
        },
        "index": {
          "description": "Classifies monads that propagate state component of type",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "StateM",
          "package": "monadLib",
          "partial": "State",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:StateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd support for threading state of type \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "StateT",
          "package": "monadLib",
          "source": "src/MonadLib.html#StateT",
          "type": "data"
        },
        "index": {
          "description": "Add support for threading state of type",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "StateT",
          "package": "monadLib",
          "partial": "State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:StateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClassifies monads that can collect values of type \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "WriterM",
          "package": "monadLib",
          "source": "src/MonadLib.html#WriterM",
          "type": "class"
        },
        "index": {
          "description": "Classifies monads that can collect values of type",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "WriterM",
          "package": "monadLib",
          "partial": "Writer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:WriterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd support for collecting values of type \u003ccode\u003ei\u003c/code\u003e.\n The type \u003ccode\u003ei\u003c/code\u003e should be a monoid, whose unit is used to represent\n a lack of a value, and whose binary operation is used to combine\n multiple values.\n This transformer is strict in its output component.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "WriterT",
          "package": "monadLib",
          "source": "src/MonadLib.html#WriterT",
          "type": "data"
        },
        "index": {
          "description": "Add support for collecting values of type The type should be monoid whose unit is used to represent lack of value and whose binary operation is used to combine multiple values This transformer is strict in its output component",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "WriterT",
          "package": "monadLib",
          "partial": "Writer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:WriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbort the program with the given value as final result.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "abort",
          "package": "monadLib",
          "signature": "i -\u003e m a",
          "source": "src/MonadLib.html#abort",
          "type": "method"
        },
        "index": {
          "description": "Abort the program with the given value as final result",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "abort",
          "normalized": "a-\u003eb c",
          "package": "monadLib",
          "signature": "i-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:abort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the context.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "ask",
          "package": "monadLib",
          "signature": "m i",
          "source": "src/MonadLib.html#ask",
          "type": "method"
        },
        "index": {
          "description": "Get the context",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "ask",
          "package": "monadLib",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:ask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the environment.\n Useful for accessing environmnt components.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "asks",
          "package": "monadLib",
          "signature": "(r -\u003e a) -\u003e m a",
          "source": "src/MonadLib.html#asks",
          "type": "function"
        },
        "index": {
          "description": "Apply function to the environment Useful for accessing environmnt components",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "asks",
          "normalized": "(a-\u003eb)-\u003ec b",
          "package": "monadLib",
          "signature": "(r-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:asks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ecallWithCC\u003c/a\u003e\u003c/code\u003e that avoids the need for an explicit\n use of the \u003ccode\u003e\u003ca\u003ejump\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "callCC",
          "package": "monadLib",
          "signature": "((a -\u003e m b) -\u003e m a) -\u003e m a",
          "source": "src/MonadLib.html#callCC",
          "type": "function"
        },
        "index": {
          "description": "version of callWithCC that avoids the need for an explicit use of the jump function",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "callCC",
          "normalized": "((a-\u003eb c)-\u003eb a)-\u003eb a",
          "package": "monadLib",
          "partial": "CC",
          "signature": "((a-\u003em b)-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:callCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCapture the current continuation.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "callWithCC",
          "package": "monadLib",
          "signature": "((a -\u003e Label m) -\u003e m a) -\u003e m a",
          "source": "src/MonadLib.html#callWithCC",
          "type": "method"
        },
        "index": {
          "description": "Capture the current continuation",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "callWithCC",
          "normalized": "((a-\u003eLabel b)-\u003eb a)-\u003eb a",
          "package": "monadLib",
          "partial": "With CC",
          "signature": "((a-\u003eLabel m)-\u003em a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:callWithCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect the output from a sub-computation.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "collect",
          "package": "monadLib",
          "signature": "m a -\u003e m (a, i)",
          "source": "src/MonadLib.html#collect",
          "type": "method"
        },
        "index": {
          "description": "Collect the output from sub-computation",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "collect",
          "normalized": "a b-\u003ea(b,c)",
          "package": "monadLib",
          "signature": "m a-\u003em(a,i)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:collect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a computation that may return multiple answers,\n collecting all possible answers.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "findAll",
          "package": "monadLib",
          "signature": "ChoiceT m a -\u003e m [a]",
          "source": "src/MonadLib.html#findAll",
          "type": "function"
        },
        "index": {
          "description": "Execute computation that may return multiple answers collecting all possible answers",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "findAll",
          "normalized": "ChoiceT a b-\u003ea[b]",
          "package": "monadLib",
          "partial": "All",
          "signature": "ChoiceT m a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:findAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a computation that may return multiple answers,\n returning at most one answer.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "findOne",
          "package": "monadLib",
          "signature": "ChoiceT m a -\u003e m (Maybe a)",
          "source": "src/MonadLib.html#findOne",
          "type": "function"
        },
        "index": {
          "description": "Execute computation that may return multiple answers returning at most one answer",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "findOne",
          "normalized": "ChoiceT a b-\u003ea(Maybe b)",
          "package": "monadLib",
          "partial": "One",
          "signature": "ChoiceT m a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:findOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the state.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "get",
          "package": "monadLib",
          "signature": "m i",
          "source": "src/MonadLib.html#get",
          "type": "method"
        },
        "index": {
          "description": "Get the state",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "get",
          "package": "monadLib",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the given exception handler, if a computation raises an exception.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "handle",
          "package": "monadLib",
          "signature": "m a -\u003e (x -\u003e m a) -\u003e m a",
          "source": "src/MonadLib.html#handle",
          "type": "function"
        },
        "index": {
          "description": "Apply the given exception handler if computation raises an exception",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "handle",
          "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
          "package": "monadLib",
          "signature": "m a-\u003e(x-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a computation from the base monad.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "inBase",
          "package": "monadLib",
          "signature": "n a -\u003e m a",
          "source": "src/MonadLib.html#inBase",
          "type": "method"
        },
        "index": {
          "description": "Promote computation from the base monad",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "inBase",
          "normalized": "a b-\u003ec b",
          "package": "monadLib",
          "partial": "Base",
          "signature": "n a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:inBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestart a previously captured computation.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "jump",
          "package": "monadLib",
          "signature": "Label m -\u003e m a",
          "source": "src/MonadLib.html#jump",
          "type": "function"
        },
        "index": {
          "description": "Restart previously captured computation",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "jump",
          "normalized": "Label a-\u003ea b",
          "package": "monadLib",
          "signature": "Label m-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:jump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel a given continuation.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "labelC",
          "package": "monadLib",
          "signature": "(forall b.  m b) -\u003e Label m",
          "source": "src/MonadLib.html#labelC",
          "type": "function"
        },
        "index": {
          "description": "Label given continuation",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "labelC",
          "normalized": "(a b c d)-\u003eLabel c",
          "package": "monadLib",
          "signature": "(forall b. m b)-\u003eLabel m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:labelC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCapture the current continuation.\n This function is like \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e, except that it also captures\n the current continuation.  Later, we can use \u003ccode\u003e\u003ca\u003ejump\u003c/a\u003e\u003c/code\u003e to repeat the\n computation from this point onwards but with a possibly different value.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "labelCC",
          "package": "monadLib",
          "signature": "a -\u003e m (a, a -\u003e Label m)",
          "source": "src/MonadLib.html#labelCC",
          "type": "function"
        },
        "index": {
          "description": "Capture the current continuation This function is like return except that it also captures the current continuation Later we can use jump to repeat the computation from this point onwards but with possibly different value",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "labelCC",
          "normalized": "a-\u003eb(a,a-\u003eLabel b)",
          "package": "monadLib",
          "partial": "CC",
          "signature": "a-\u003em(a,a-\u003eLabel m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:labelCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCapture the current continuation.\n Later we can use \u003ccode\u003e\u003ca\u003ejump\u003c/a\u003e\u003c/code\u003e to restart the program from this point.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "labelCC_",
          "package": "monadLib",
          "signature": "m (Label m)",
          "source": "src/MonadLib.html#labelCC_",
          "type": "function"
        },
        "index": {
          "description": "Capture the current continuation Later we can use jump to restart the program from this point",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "labelCC_",
          "package": "monadLib",
          "partial": "CC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:labelCC_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a computation from the underlying monad.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "lift",
          "package": "monadLib",
          "signature": "m a -\u003e t m a",
          "source": "src/MonadLib.html#lift",
          "type": "method"
        },
        "index": {
          "description": "Promote computation from the underlying monad",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "lift",
          "normalized": "a b-\u003ec a b",
          "package": "monadLib",
          "signature": "m a-\u003et m a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the context for the duration of a sub-computation.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "local",
          "package": "monadLib",
          "signature": "i -\u003e m a -\u003e m a",
          "source": "src/MonadLib.html#local",
          "type": "method"
        },
        "index": {
          "description": "Change the context for the duration of sub-computation",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "local",
          "normalized": "a-\u003eb c-\u003eb c",
          "package": "monadLib",
          "signature": "i-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the exception that was risen by a computation.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "mapException",
          "package": "monadLib",
          "signature": "(x -\u003e x) -\u003e m a -\u003e m a",
          "source": "src/MonadLib.html#mapException",
          "type": "function"
        },
        "index": {
          "description": "Modify the exception that was risen by computation",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "mapException",
          "normalized": "(a-\u003ea)-\u003eb c-\u003eb c",
          "package": "monadLib",
          "partial": "Exception",
          "signature": "(x-\u003ex)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:mapException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the environment for the duration of a computation.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "mapReader",
          "package": "monadLib",
          "signature": "(r -\u003e r) -\u003e m a -\u003e m a",
          "source": "src/MonadLib.html#mapReader",
          "type": "function"
        },
        "index": {
          "description": "Modify the environment for the duration of computation",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "mapReader",
          "normalized": "(a-\u003ea)-\u003eb c-\u003eb c",
          "package": "monadLib",
          "partial": "Reader",
          "signature": "(r-\u003er)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:mapReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the output of a computation.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "mapWriter",
          "package": "monadLib",
          "signature": "(w -\u003e w) -\u003e m a -\u003e m a",
          "source": "src/MonadLib.html#mapWriter",
          "type": "function"
        },
        "index": {
          "description": "Modify the output of computation",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "mapWriter",
          "normalized": "(a-\u003ea)-\u003eb c-\u003eb c",
          "package": "monadLib",
          "partial": "Writer",
          "signature": "(w-\u003ew)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:mapWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a value to the collection.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "put",
          "package": "monadLib",
          "signature": "i -\u003e m ()",
          "source": "src/MonadLib.html#put",
          "type": "method"
        },
        "index": {
          "description": "Add value to the collection",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "put",
          "normalized": "a-\u003eb()",
          "package": "monadLib",
          "signature": "i-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd content the output and return a result.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "puts",
          "package": "monadLib",
          "signature": "(a, w) -\u003e m a",
          "source": "src/MonadLib.html#puts",
          "type": "function"
        },
        "index": {
          "description": "Add content the output and return result",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "puts",
          "normalized": "(a,b)-\u003ec a",
          "package": "monadLib",
          "signature": "(a,w)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:puts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaise an exception.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "raise",
          "package": "monadLib",
          "signature": "i -\u003e m a",
          "source": "src/MonadLib.html#raise",
          "type": "method"
        },
        "index": {
          "description": "Raise an exception",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "raise",
          "normalized": "a-\u003eb c",
          "package": "monadLib",
          "signature": "i-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:raise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither raise an exception or return a value.\n \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e values signify the we should raise an exception,\n \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e values indicate success.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "raises",
          "package": "monadLib",
          "signature": "Either x a -\u003e m a",
          "source": "src/MonadLib.html#raises",
          "type": "function"
        },
        "index": {
          "description": "Either raise an exception or return value Left values signify the we should raise an exception Right values indicate success",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "raises",
          "normalized": "Either a b-\u003ec b",
          "package": "monadLib",
          "signature": "Either x a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:raises"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a computation that may return multiple answers.\n The resulting computation returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if no answers were found, or \u003ccode\u003eJust (answer,new_comp)\u003c/code\u003e,\n where \u003ccode\u003eanswer\u003c/code\u003e is an answer, and \u003ccode\u003enew_comp\u003c/code\u003e is a computation\n that may produce more answers.\n The search is depth-first and left-biased with respect to the\n \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e operation.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "runChoiceT",
          "package": "monadLib",
          "signature": "ChoiceT m a -\u003e m (Maybe (a, ChoiceT m a))",
          "source": "src/MonadLib.html#runChoiceT",
          "type": "function"
        },
        "index": {
          "description": "Execute computation that may return multiple answers The resulting computation returns Nothing if no answers were found or Just answer new comp where answer is an answer and new comp is computation that may produce more answers The search is depth-first and left-biased with respect to the mplus operation",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "runChoiceT",
          "normalized": "ChoiceT a b-\u003ea(Maybe(b,ChoiceT a b))",
          "package": "monadLib",
          "partial": "Choice",
          "signature": "ChoiceT m a-\u003em(Maybe(a,ChoiceT m a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:runChoiceT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a computation with the given continuation.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "runContT",
          "package": "monadLib",
          "signature": "(a -\u003e m i) -\u003e ContT i m a -\u003e m i",
          "source": "src/MonadLib.html#runContT",
          "type": "function"
        },
        "index": {
          "description": "Execute computation with the given continuation",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "runContT",
          "normalized": "(a-\u003eb c)-\u003eContT c b a-\u003eb c",
          "package": "monadLib",
          "partial": "Cont",
          "signature": "(a-\u003em i)-\u003eContT i m a-\u003em i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:runContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a computation with exceptions.\n Successful results are tagged with \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e,\n exceptional results are tagged with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "runExceptionT",
          "package": "monadLib",
          "signature": "ExceptionT i m a -\u003e m (Either i a)",
          "source": "src/MonadLib.html#runExceptionT",
          "type": "function"
        },
        "index": {
          "description": "Execute computation with exceptions Successful results are tagged with Right exceptional results are tagged with Left",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "runExceptionT",
          "normalized": "ExceptionT a b c-\u003eb(Either a c)",
          "package": "monadLib",
          "partial": "Exception",
          "signature": "ExceptionT i m a-\u003em(Either i a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:runExceptionT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the result of a pure computation.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "runId",
          "package": "monadLib",
          "signature": "Id a -\u003e a",
          "source": "src/MonadLib.html#runId",
          "type": "function"
        },
        "index": {
          "description": "Get the result of pure computation",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "runId",
          "normalized": "Id a-\u003ea",
          "package": "monadLib",
          "partial": "Id",
          "signature": "Id a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:runId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove an identity layer.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "runIdT",
          "package": "monadLib",
          "signature": "IdT m a -\u003e m a",
          "source": "src/MonadLib.html#runIdT",
          "type": "function"
        },
        "index": {
          "description": "Remove an identity layer",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "runIdT",
          "normalized": "IdT a b-\u003ea b",
          "package": "monadLib",
          "partial": "Id",
          "signature": "IdT m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:runIdT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the result of a pure strict computation.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "runLift",
          "package": "monadLib",
          "signature": "Lift a -\u003e a",
          "source": "src/MonadLib.html#runLift",
          "type": "function"
        },
        "index": {
          "description": "Get the result of pure strict computation",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "runLift",
          "normalized": "Lift a-\u003ea",
          "package": "monadLib",
          "partial": "Lift",
          "signature": "Lift a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:runLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MonadLib",
          "name": "runM",
          "package": "monadLib",
          "signature": "m a -\u003e r",
          "source": "src/MonadLib.html#runM",
          "type": "method"
        },
        "index": {
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "runM",
          "normalized": "a b-\u003ec",
          "package": "monadLib",
          "signature": "m a-\u003er",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:runM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a reader computation in the given context.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "runReaderT",
          "package": "monadLib",
          "signature": "i -\u003e ReaderT i m a -\u003e m a",
          "source": "src/MonadLib.html#runReaderT",
          "type": "function"
        },
        "index": {
          "description": "Execute reader computation in the given context",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "runReaderT",
          "normalized": "a-\u003eReaderT a b c-\u003eb c",
          "package": "monadLib",
          "partial": "Reader",
          "signature": "i-\u003eReaderT i m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:runReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a stateful computation in the given initial state.\n The second component of the result is the final state.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "runStateT",
          "package": "monadLib",
          "signature": "i -\u003e StateT i m a -\u003e m (a, i)",
          "source": "src/MonadLib.html#runStateT",
          "type": "function"
        },
        "index": {
          "description": "Execute stateful computation in the given initial state The second component of the result is the final state",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "runStateT",
          "normalized": "a-\u003eStateT a b c-\u003eb(c,a)",
          "package": "monadLib",
          "partial": "State",
          "signature": "i-\u003eStateT i m a-\u003em(a,i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:runStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a writer computation.\n Returns the result and the collected output.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "runWriterT",
          "package": "monadLib",
          "signature": "WriterT i m a -\u003e m (a, i)",
          "source": "src/MonadLib.html#runWriterT",
          "type": "function"
        },
        "index": {
          "description": "Execute writer computation Returns the result and the collected output",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "runWriterT",
          "normalized": "WriterT a b c-\u003eb(c,a)",
          "package": "monadLib",
          "partial": "Writer",
          "signature": "WriterT i m a-\u003em(a,i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:runWriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the state.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "set",
          "package": "monadLib",
          "signature": "i -\u003e m ()",
          "source": "src/MonadLib.html#set",
          "type": "method"
        },
        "index": {
          "description": "Set the state",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "set",
          "normalized": "a-\u003eb()",
          "package": "monadLib",
          "signature": "i-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the state and return a result.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "sets",
          "package": "monadLib",
          "signature": "(s -\u003e (a, s)) -\u003e m a",
          "source": "src/MonadLib.html#sets",
          "type": "function"
        },
        "index": {
          "description": "Update the state and return result",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "sets",
          "normalized": "(a-\u003e(b,a))-\u003ec b",
          "package": "monadLib",
          "signature": "(s-\u003e(a,s))-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:sets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdates the state with the given function.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "sets_",
          "package": "monadLib",
          "signature": "(s -\u003e s) -\u003e m ()",
          "source": "src/MonadLib.html#sets_",
          "type": "function"
        },
        "index": {
          "description": "Updates the state with the given function",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "sets_",
          "normalized": "(a-\u003ea)-\u003eb()",
          "package": "monadLib",
          "signature": "(s-\u003es)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:sets_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert computations that may raise an exception\n into computations that do not raise exception but instead,\n yield a tagged results.  Exceptions are tagged with \u003ca\u003eLeft\u003c/a\u003e,\n successful computations are tagged with \u003ca\u003eRight\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "try",
          "package": "monadLib",
          "signature": "m a -\u003e m (Either i a)",
          "source": "src/MonadLib.html#try",
          "type": "method"
        },
        "index": {
          "description": "Convert computations that may raise an exception into computations that do not raise exception but instead yield tagged results Exceptions are tagged with Left successful computations are tagged with Right",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "try",
          "normalized": "a b-\u003ea(Either c b)",
          "package": "monadLib",
          "signature": "m a-\u003em(Either i a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe current version of the library.\n\u003c/p\u003e",
          "module": "MonadLib",
          "name": "version",
          "package": "monadLib",
          "signature": "(Int, Int, Int)",
          "source": "src/MonadLib.html#version",
          "type": "function"
        },
        "index": {
          "description": "The current version of the library",
          "hierarchy": "MonadLib",
          "module": "MonadLib",
          "name": "version",
          "normalized": "(Int,Int,Int)",
          "package": "monadLib",
          "signature": "(Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:version"
      }
    }
  ]
]