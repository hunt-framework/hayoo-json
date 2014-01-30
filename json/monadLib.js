[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a number of functions that make it easy\nto get the functionality of MonadLib for user-defined newtypes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "MonadLib.Derive",
        "fct-package": "monadLib",
        "fct-signature": "module",
        "fct-source": "src/MonadLib-Derive.html",
        "fct-type": "module",
        "title": "Derive"
      },
      "index": {
        "description": "This module defines number of functions that make it easy to get the functionality of MonadLib for user-defined newtypes",
        "hierarchy": "MonadLib Derive",
        "module": "MonadLib.Derive",
        "name": "Derive",
        "normalized": "",
        "package": "monadLib",
        "partial": "Derive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#t:Iso",
      "description": {
        "fct-descr": "\u003cp\u003eAn isomorphism between (usually) monads.\n Typically the constructor and selector of a newtype delcaration.\n\u003c/p\u003e",
        "fct-module": "MonadLib.Derive",
        "fct-package": "monadLib",
        "fct-signature": "data",
        "fct-source": "src/MonadLib-Derive.html#Iso",
        "fct-type": "data",
        "title": "Iso"
      },
      "index": {
        "description": "An isomorphism between usually monads Typically the constructor and selector of newtype delcaration",
        "hierarchy": "MonadLib Derive",
        "module": "MonadLib.Derive",
        "name": "Iso",
        "normalized": "",
        "package": "monadLib",
        "partial": "Iso",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:Iso",
      "description": {
        "fct-module": "MonadLib.Derive",
        "fct-package": "monadLib",
        "fct-signature": "Iso (forall a.  m a -\u003e n a) (forall a.  n a -\u003e m a)",
        "fct-source": "src/MonadLib-Derive.html#Iso",
        "fct-type": "function",
        "title": "Iso"
      },
      "index": {
        "description": "",
        "hierarchy": "MonadLib Derive",
        "module": "MonadLib.Derive",
        "name": "Iso",
        "normalized": "Iso(a b c d-\u003ee d)(a b e d-\u003ec d)",
        "package": "monadLib",
        "partial": "Iso",
        "signature": "Iso(forall a. m a-\u003en a)(forall a. n a-\u003em a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_abort",
      "description": {
        "fct-module": "MonadLib.Derive",
        "fct-package": "monadLib",
        "fct-signature": "Iso m n -\u003e i -\u003e n a",
        "fct-source": "src/MonadLib-Derive.html#derive_abort",
        "fct-type": "function",
        "title": "derive_abort"
      },
      "index": {
        "description": "",
        "hierarchy": "MonadLib Derive",
        "module": "MonadLib.Derive",
        "name": "derive_abort",
        "normalized": "Iso a b-\u003ec-\u003eb d",
        "package": "monadLib",
        "partial": "",
        "signature": "Iso m n-\u003ei-\u003en a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_apply",
      "description": {
        "fct-descr": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib.Derive",
        "fct-package": "monadLib",
        "fct-signature": "Iso m n -\u003e n (a -\u003e b) -\u003e n a -\u003e n b",
        "fct-source": "src/MonadLib-Derive.html#derive_apply",
        "fct-type": "function",
        "title": "derive_apply"
      },
      "index": {
        "description": "Derive the implementation of from Applicative",
        "hierarchy": "MonadLib Derive",
        "module": "MonadLib.Derive",
        "name": "derive_apply",
        "normalized": "Iso a b-\u003eb(c-\u003ed)-\u003eb c-\u003eb d",
        "package": "monadLib",
        "partial": "",
        "signature": "Iso m n-\u003en(a-\u003eb)-\u003en a-\u003en b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_ask",
      "description": {
        "fct-descr": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003eask\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eReaderM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib.Derive",
        "fct-package": "monadLib",
        "fct-signature": "Iso m n -\u003e n i",
        "fct-source": "src/MonadLib-Derive.html#derive_ask",
        "fct-type": "function",
        "title": "derive_ask"
      },
      "index": {
        "description": "Derive the implementation of ask from ReaderM",
        "hierarchy": "MonadLib Derive",
        "module": "MonadLib.Derive",
        "name": "derive_ask",
        "normalized": "Iso a b-\u003eb c",
        "package": "monadLib",
        "partial": "",
        "signature": "Iso m n-\u003en i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_bind",
      "description": {
        "fct-descr": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib.Derive",
        "fct-package": "monadLib",
        "fct-signature": "Iso m n -\u003e n a -\u003e (a -\u003e n b) -\u003e n b",
        "fct-source": "src/MonadLib-Derive.html#derive_bind",
        "fct-type": "function",
        "title": "derive_bind"
      },
      "index": {
        "description": "Derive the implementation of from Monad",
        "hierarchy": "MonadLib Derive",
        "module": "MonadLib.Derive",
        "name": "derive_bind",
        "normalized": "Iso a b-\u003eb c-\u003e(c-\u003eb d)-\u003eb d",
        "package": "monadLib",
        "partial": "",
        "signature": "Iso m n-\u003en a-\u003e(a-\u003en b)-\u003en b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_callWithCC",
      "description": {
        "fct-descr": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003ecallWithCC\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eContM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib.Derive",
        "fct-package": "monadLib",
        "fct-signature": "Iso m n -\u003e ((a -\u003e Label n) -\u003e n a) -\u003e n a",
        "fct-source": "src/MonadLib-Derive.html#derive_callWithCC",
        "fct-type": "function",
        "title": "derive_callWithCC"
      },
      "index": {
        "description": "Derive the implementation of callWithCC from ContM",
        "hierarchy": "MonadLib Derive",
        "module": "MonadLib.Derive",
        "name": "derive_callWithCC",
        "normalized": "Iso a b-\u003e((c-\u003eLabel b)-\u003eb c)-\u003eb c",
        "package": "monadLib",
        "partial": "With CC",
        "signature": "Iso m n-\u003e((a-\u003eLabel n)-\u003en a)-\u003en a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_collect",
      "description": {
        "fct-descr": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003ecollect\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eRunWriterM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib.Derive",
        "fct-package": "monadLib",
        "fct-signature": "Iso m n -\u003e n a -\u003e n (a, i)",
        "fct-source": "src/MonadLib-Derive.html#derive_collect",
        "fct-type": "function",
        "title": "derive_collect"
      },
      "index": {
        "description": "Derive the implementation of collect from RunWriterM",
        "hierarchy": "MonadLib Derive",
        "module": "MonadLib.Derive",
        "name": "derive_collect",
        "normalized": "Iso a b-\u003eb c-\u003eb(c,d)",
        "package": "monadLib",
        "partial": "",
        "signature": "Iso m n-\u003en a-\u003en(a,i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_empty",
      "description": {
        "fct-descr": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib.Derive",
        "fct-package": "monadLib",
        "fct-signature": "Iso m n -\u003e n a",
        "fct-source": "src/MonadLib-Derive.html#derive_empty",
        "fct-type": "function",
        "title": "derive_empty"
      },
      "index": {
        "description": "Derive the implementation of empty from Alternative",
        "hierarchy": "MonadLib Derive",
        "module": "MonadLib.Derive",
        "name": "derive_empty",
        "normalized": "Iso a b-\u003eb c",
        "package": "monadLib",
        "partial": "",
        "signature": "Iso m n-\u003en a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_fail",
      "description": {
        "fct-module": "MonadLib.Derive",
        "fct-package": "monadLib",
        "fct-signature": "Iso m n -\u003e String -\u003e n a",
        "fct-source": "src/MonadLib-Derive.html#derive_fail",
        "fct-type": "function",
        "title": "derive_fail"
      },
      "index": {
        "description": "",
        "hierarchy": "MonadLib Derive",
        "module": "MonadLib.Derive",
        "name": "derive_fail",
        "normalized": "Iso a b-\u003eString-\u003eb c",
        "package": "monadLib",
        "partial": "",
        "signature": "Iso m n-\u003eString-\u003en a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_fmap",
      "description": {
        "fct-descr": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib.Derive",
        "fct-package": "monadLib",
        "fct-signature": "Iso m n -\u003e (a -\u003e b) -\u003e n a -\u003e n b",
        "fct-source": "src/MonadLib-Derive.html#derive_fmap",
        "fct-type": "function",
        "title": "derive_fmap"
      },
      "index": {
        "description": "Derive the implementation of fmap from Functor",
        "hierarchy": "MonadLib Derive",
        "module": "MonadLib.Derive",
        "name": "derive_fmap",
        "normalized": "Iso a b-\u003e(c-\u003ed)-\u003eb c-\u003eb d",
        "package": "monadLib",
        "partial": "",
        "signature": "Iso m n-\u003e(a-\u003eb)-\u003en a-\u003en b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_get",
      "description": {
        "fct-descr": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eStateM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib.Derive",
        "fct-package": "monadLib",
        "fct-signature": "Iso m n -\u003e n i",
        "fct-source": "src/MonadLib-Derive.html#derive_get",
        "fct-type": "function",
        "title": "derive_get"
      },
      "index": {
        "description": "Derive the implementation of get from StateM",
        "hierarchy": "MonadLib Derive",
        "module": "MonadLib.Derive",
        "name": "derive_get",
        "normalized": "Iso a b-\u003eb c",
        "package": "monadLib",
        "partial": "",
        "signature": "Iso m n-\u003en i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_inBase",
      "description": {
        "fct-descr": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003einBase\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eBaseM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib.Derive",
        "fct-package": "monadLib",
        "fct-signature": "Iso m n -\u003e x a -\u003e n a",
        "fct-source": "src/MonadLib-Derive.html#derive_inBase",
        "fct-type": "function",
        "title": "derive_inBase"
      },
      "index": {
        "description": "Derive the implementation of inBase from BaseM",
        "hierarchy": "MonadLib Derive",
        "module": "MonadLib.Derive",
        "name": "derive_inBase",
        "normalized": "Iso a b-\u003ec d-\u003eb d",
        "package": "monadLib",
        "partial": "Base",
        "signature": "Iso m n-\u003ex a-\u003en a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_lift",
      "description": {
        "fct-descr": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003elift\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eMonadT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib.Derive",
        "fct-package": "monadLib",
        "fct-signature": "Iso (t m) n -\u003e m a -\u003e n a",
        "fct-source": "src/MonadLib-Derive.html#derive_lift",
        "fct-type": "function",
        "title": "derive_lift"
      },
      "index": {
        "description": "Derive the implementation of lift from MonadT",
        "hierarchy": "MonadLib Derive",
        "module": "MonadLib.Derive",
        "name": "derive_lift",
        "normalized": "Iso(a b)c-\u003eb d-\u003ec d",
        "package": "monadLib",
        "partial": "",
        "signature": "Iso(t m)n-\u003em a-\u003en a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_local",
      "description": {
        "fct-descr": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003elocal\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eRunReaderM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib.Derive",
        "fct-package": "monadLib",
        "fct-signature": "Iso m n -\u003e i -\u003e n a -\u003e n a",
        "fct-source": "src/MonadLib-Derive.html#derive_local",
        "fct-type": "function",
        "title": "derive_local"
      },
      "index": {
        "description": "Derive the implementation of local from RunReaderM",
        "hierarchy": "MonadLib Derive",
        "module": "MonadLib.Derive",
        "name": "derive_local",
        "normalized": "Iso a b-\u003ec-\u003eb d-\u003eb d",
        "package": "monadLib",
        "partial": "",
        "signature": "Iso m n-\u003ei-\u003en a-\u003en a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_mfix",
      "description": {
        "fct-descr": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003emfix\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eMonadFix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib.Derive",
        "fct-package": "monadLib",
        "fct-signature": "Iso m n -\u003e (a -\u003e n a) -\u003e n a",
        "fct-source": "src/MonadLib-Derive.html#derive_mfix",
        "fct-type": "function",
        "title": "derive_mfix"
      },
      "index": {
        "description": "Derive the implementation of mfix from MonadFix",
        "hierarchy": "MonadLib Derive",
        "module": "MonadLib.Derive",
        "name": "derive_mfix",
        "normalized": "Iso a b-\u003e(c-\u003eb c)-\u003eb c",
        "package": "monadLib",
        "partial": "",
        "signature": "Iso m n-\u003e(a-\u003en a)-\u003en a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_mplus",
      "description": {
        "fct-descr": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib.Derive",
        "fct-package": "monadLib",
        "fct-signature": "Iso m n -\u003e n a -\u003e n a -\u003e n a",
        "fct-source": "src/MonadLib-Derive.html#derive_mplus",
        "fct-type": "function",
        "title": "derive_mplus"
      },
      "index": {
        "description": "Derive the implementation of mplus from MonadPlus",
        "hierarchy": "MonadLib Derive",
        "module": "MonadLib.Derive",
        "name": "derive_mplus",
        "normalized": "Iso a b-\u003eb c-\u003eb c-\u003eb c",
        "package": "monadLib",
        "partial": "",
        "signature": "Iso m n-\u003en a-\u003en a-\u003en a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_mzero",
      "description": {
        "fct-descr": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eMonadPlus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib.Derive",
        "fct-package": "monadLib",
        "fct-signature": "Iso m n -\u003e n a",
        "fct-source": "src/MonadLib-Derive.html#derive_mzero",
        "fct-type": "function",
        "title": "derive_mzero"
      },
      "index": {
        "description": "Derive the implementation of mzero from MonadPlus",
        "hierarchy": "MonadLib Derive",
        "module": "MonadLib.Derive",
        "name": "derive_mzero",
        "normalized": "Iso a b-\u003eb c",
        "package": "monadLib",
        "partial": "",
        "signature": "Iso m n-\u003en a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_or",
      "description": {
        "fct-descr": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib.Derive",
        "fct-package": "monadLib",
        "fct-signature": "Iso m n -\u003e n a -\u003e n a -\u003e n a",
        "fct-source": "src/MonadLib-Derive.html#derive_or",
        "fct-type": "function",
        "title": "derive_or"
      },
      "index": {
        "description": "Derive the implementation of from Alternative",
        "hierarchy": "MonadLib Derive",
        "module": "MonadLib.Derive",
        "name": "derive_or",
        "normalized": "Iso a b-\u003eb c-\u003eb c-\u003eb c",
        "package": "monadLib",
        "partial": "",
        "signature": "Iso m n-\u003en a-\u003en a-\u003en a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_pure",
      "description": {
        "fct-descr": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib.Derive",
        "fct-package": "monadLib",
        "fct-signature": "Iso m n -\u003e a -\u003e n a",
        "fct-source": "src/MonadLib-Derive.html#derive_pure",
        "fct-type": "function",
        "title": "derive_pure"
      },
      "index": {
        "description": "Derive the implementation of pure from Applicative",
        "hierarchy": "MonadLib Derive",
        "module": "MonadLib.Derive",
        "name": "derive_pure",
        "normalized": "Iso a b-\u003ec-\u003eb c",
        "package": "monadLib",
        "partial": "",
        "signature": "Iso m n-\u003ea-\u003en a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_put",
      "description": {
        "fct-descr": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eWriterM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib.Derive",
        "fct-package": "monadLib",
        "fct-signature": "Iso m n -\u003e i -\u003e n ()",
        "fct-source": "src/MonadLib-Derive.html#derive_put",
        "fct-type": "function",
        "title": "derive_put"
      },
      "index": {
        "description": "Derive the implementation of put from WriterM",
        "hierarchy": "MonadLib Derive",
        "module": "MonadLib.Derive",
        "name": "derive_put",
        "normalized": "Iso a b-\u003ec-\u003eb()",
        "package": "monadLib",
        "partial": "",
        "signature": "Iso m n-\u003ei-\u003en()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_raise",
      "description": {
        "fct-descr": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003eraise\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eExceptionM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib.Derive",
        "fct-package": "monadLib",
        "fct-signature": "Iso m n -\u003e i -\u003e n a",
        "fct-source": "src/MonadLib-Derive.html#derive_raise",
        "fct-type": "function",
        "title": "derive_raise"
      },
      "index": {
        "description": "Derive the implementation of raise from ExceptionM",
        "hierarchy": "MonadLib Derive",
        "module": "MonadLib.Derive",
        "name": "derive_raise",
        "normalized": "Iso a b-\u003ec-\u003eb d",
        "package": "monadLib",
        "partial": "",
        "signature": "Iso m n-\u003ei-\u003en a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_return",
      "description": {
        "fct-descr": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib.Derive",
        "fct-package": "monadLib",
        "fct-signature": "Iso m n -\u003e a -\u003e n a",
        "fct-source": "src/MonadLib-Derive.html#derive_return",
        "fct-type": "function",
        "title": "derive_return"
      },
      "index": {
        "description": "Derive the implementation of return from Monad",
        "hierarchy": "MonadLib Derive",
        "module": "MonadLib.Derive",
        "name": "derive_return",
        "normalized": "Iso a b-\u003ec-\u003eb c",
        "package": "monadLib",
        "partial": "",
        "signature": "Iso m n-\u003ea-\u003en a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_runM",
      "description": {
        "fct-descr": "\u003cp\u003eDerive the implementation of the \u003ccode\u003e\u003ca\u003erunM\u003c/a\u003e\u003c/code\u003e function from \u003ccode\u003e\u003ca\u003eRunM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib.Derive",
        "fct-package": "monadLib",
        "fct-signature": "Iso m n -\u003e n a -\u003e r",
        "fct-source": "src/MonadLib-Derive.html#derive_runM",
        "fct-type": "function",
        "title": "derive_runM"
      },
      "index": {
        "description": "Derive the implementation of the runM function from RunM",
        "hierarchy": "MonadLib Derive",
        "module": "MonadLib.Derive",
        "name": "derive_runM",
        "normalized": "Iso a b-\u003eb c-\u003ed",
        "package": "monadLib",
        "partial": "",
        "signature": "Iso m n-\u003en a-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_set",
      "description": {
        "fct-descr": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003eset\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eStateM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib.Derive",
        "fct-package": "monadLib",
        "fct-signature": "Iso m n -\u003e i -\u003e n ()",
        "fct-source": "src/MonadLib-Derive.html#derive_set",
        "fct-type": "function",
        "title": "derive_set"
      },
      "index": {
        "description": "Derive the implementation of set from StateM",
        "hierarchy": "MonadLib Derive",
        "module": "MonadLib.Derive",
        "name": "derive_set",
        "normalized": "Iso a b-\u003ec-\u003eb()",
        "package": "monadLib",
        "partial": "",
        "signature": "Iso m n-\u003ei-\u003en()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Derive.html#v:derive_try",
      "description": {
        "fct-descr": "\u003cp\u003eDerive the implementation of \u003ccode\u003e\u003ca\u003etry\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eRunExceptionM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib.Derive",
        "fct-package": "monadLib",
        "fct-signature": "Iso m n -\u003e n a -\u003e n (Either i a)",
        "fct-source": "src/MonadLib-Derive.html#derive_try",
        "fct-type": "function",
        "title": "derive_try"
      },
      "index": {
        "description": "Derive the implementation of try from RunExceptionM",
        "hierarchy": "MonadLib Derive",
        "module": "MonadLib.Derive",
        "name": "derive_try",
        "normalized": "Iso a b-\u003eb c-\u003eb(Either d c)",
        "package": "monadLib",
        "partial": "",
        "signature": "Iso m n-\u003en a-\u003en(Either i a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Monads.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a collection of monads that\n   are defined in terms of the monad transformers from\n   \u003ca\u003eMonadLib\u003c/a\u003e.   The definitions in this module are\n   completely mechanical and so this module may become\n   obsolete if support for automated derivations for instances\n   becomes well supported across implementations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "MonadLib.Monads",
        "fct-package": "monadLib",
        "fct-signature": "module",
        "fct-source": "src/MonadLib-Monads.html",
        "fct-type": "module",
        "title": "Monads"
      },
      "index": {
        "description": "This module contains collection of monads that are defined in terms of the monad transformers from MonadLib The definitions in this module are completely mechanical and so this module may become obsolete if support for automated derivations for instances becomes well supported across implementations",
        "hierarchy": "MonadLib Monads",
        "module": "MonadLib.Monads",
        "name": "Monads",
        "normalized": "",
        "package": "monadLib",
        "partial": "Monads",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Monads.html#t:Cont",
      "description": {
        "fct-module": "MonadLib.Monads",
        "fct-package": "monadLib",
        "fct-signature": "data",
        "fct-source": "src/MonadLib-Monads.html#Cont",
        "fct-type": "data",
        "title": "Cont"
      },
      "index": {
        "description": "",
        "hierarchy": "MonadLib Monads",
        "module": "MonadLib.Monads",
        "name": "Cont",
        "normalized": "",
        "package": "monadLib",
        "partial": "Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Monads.html#t:Exception",
      "description": {
        "fct-module": "MonadLib.Monads",
        "fct-package": "monadLib",
        "fct-signature": "data",
        "fct-source": "src/MonadLib-Monads.html#Exception",
        "fct-type": "data",
        "title": "Exception"
      },
      "index": {
        "description": "",
        "hierarchy": "MonadLib Monads",
        "module": "MonadLib.Monads",
        "name": "Exception",
        "normalized": "",
        "package": "monadLib",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Monads.html#t:Reader",
      "description": {
        "fct-module": "MonadLib.Monads",
        "fct-package": "monadLib",
        "fct-signature": "data",
        "fct-source": "src/MonadLib-Monads.html#Reader",
        "fct-type": "data",
        "title": "Reader"
      },
      "index": {
        "description": "",
        "hierarchy": "MonadLib Monads",
        "module": "MonadLib.Monads",
        "name": "Reader",
        "normalized": "",
        "package": "monadLib",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Monads.html#t:State",
      "description": {
        "fct-module": "MonadLib.Monads",
        "fct-package": "monadLib",
        "fct-signature": "data",
        "fct-source": "src/MonadLib-Monads.html#State",
        "fct-type": "data",
        "title": "State"
      },
      "index": {
        "description": "",
        "hierarchy": "MonadLib Monads",
        "module": "MonadLib.Monads",
        "name": "State",
        "normalized": "",
        "package": "monadLib",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Monads.html#t:Writer",
      "description": {
        "fct-module": "MonadLib.Monads",
        "fct-package": "monadLib",
        "fct-signature": "data",
        "fct-source": "src/MonadLib-Monads.html#Writer",
        "fct-type": "data",
        "title": "Writer"
      },
      "index": {
        "description": "",
        "hierarchy": "MonadLib Monads",
        "module": "MonadLib.Monads",
        "name": "Writer",
        "normalized": "",
        "package": "monadLib",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Monads.html#v:runCont",
      "description": {
        "fct-module": "MonadLib.Monads",
        "fct-package": "monadLib",
        "fct-signature": "(a -\u003e i) -\u003e Cont i a -\u003e i",
        "fct-source": "src/MonadLib-Monads.html#runCont",
        "fct-type": "function",
        "title": "runCont"
      },
      "index": {
        "description": "",
        "hierarchy": "MonadLib Monads",
        "module": "MonadLib.Monads",
        "name": "runCont",
        "normalized": "(a-\u003eb)-\u003eCont b a-\u003eb",
        "package": "monadLib",
        "partial": "Cont",
        "signature": "(a-\u003ei)-\u003eCont i a-\u003ei"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Monads.html#v:runException",
      "description": {
        "fct-module": "MonadLib.Monads",
        "fct-package": "monadLib",
        "fct-signature": "Exception i a -\u003e Either i a",
        "fct-source": "src/MonadLib-Monads.html#runException",
        "fct-type": "function",
        "title": "runException"
      },
      "index": {
        "description": "",
        "hierarchy": "MonadLib Monads",
        "module": "MonadLib.Monads",
        "name": "runException",
        "normalized": "Exception a b-\u003eEither a b",
        "package": "monadLib",
        "partial": "Exception",
        "signature": "Exception i a-\u003eEither i a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Monads.html#v:runReader",
      "description": {
        "fct-module": "MonadLib.Monads",
        "fct-package": "monadLib",
        "fct-signature": "i -\u003e Reader i a -\u003e a",
        "fct-source": "src/MonadLib-Monads.html#runReader",
        "fct-type": "function",
        "title": "runReader"
      },
      "index": {
        "description": "",
        "hierarchy": "MonadLib Monads",
        "module": "MonadLib.Monads",
        "name": "runReader",
        "normalized": "a-\u003eReader a b-\u003eb",
        "package": "monadLib",
        "partial": "Reader",
        "signature": "i-\u003eReader i a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Monads.html#v:runState",
      "description": {
        "fct-module": "MonadLib.Monads",
        "fct-package": "monadLib",
        "fct-signature": "i -\u003e State i a -\u003e (a, i)",
        "fct-source": "src/MonadLib-Monads.html#runState",
        "fct-type": "function",
        "title": "runState"
      },
      "index": {
        "description": "",
        "hierarchy": "MonadLib Monads",
        "module": "MonadLib.Monads",
        "name": "runState",
        "normalized": "a-\u003eState a b-\u003e(b,a)",
        "package": "monadLib",
        "partial": "State",
        "signature": "i-\u003eState i a-\u003e(a,i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib-Monads.html#v:runWriter",
      "description": {
        "fct-module": "MonadLib.Monads",
        "fct-package": "monadLib",
        "fct-signature": "Writer i a -\u003e (a, i)",
        "fct-source": "src/MonadLib-Monads.html#runWriter",
        "fct-type": "function",
        "title": "runWriter"
      },
      "index": {
        "description": "",
        "hierarchy": "MonadLib Monads",
        "module": "MonadLib.Monads",
        "name": "runWriter",
        "normalized": "Writer a b-\u003e(b,a)",
        "package": "monadLib",
        "partial": "Writer",
        "signature": "Writer i a-\u003e(a,i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library provides a collection of monad transformers that\n    can be combined to produce various monads.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "module",
        "fct-source": "src/MonadLib.html",
        "fct-type": "module",
        "title": "MonadLib"
      },
      "index": {
        "description": "This library provides collection of monad transformers that can be combined to produce various monads",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "MonadLib",
        "normalized": "",
        "package": "monadLib",
        "partial": "Monad Lib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:AbortM",
      "description": {
        "fct-descr": "\u003cp\u003eClassifies monads that support aborting the program and returning\n a given final result of type \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "class",
        "fct-source": "src/MonadLib.html#AbortM",
        "fct-type": "class",
        "title": "AbortM"
      },
      "index": {
        "description": "Classifies monads that support aborting the program and returning given final result of type",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "AbortM",
        "normalized": "",
        "package": "monadLib",
        "partial": "Abort",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:BaseM",
      "description": {
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "class",
        "fct-source": "src/MonadLib.html#BaseM",
        "fct-type": "class",
        "title": "BaseM"
      },
      "index": {
        "description": "",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "BaseM",
        "normalized": "",
        "package": "monadLib",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:ChoiceT",
      "description": {
        "fct-descr": "\u003cp\u003eAdd support for multiple answers.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "data",
        "fct-source": "src/MonadLib.html#ChoiceT",
        "fct-type": "data",
        "title": "ChoiceT"
      },
      "index": {
        "description": "Add support for multiple answers",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "ChoiceT",
        "normalized": "",
        "package": "monadLib",
        "partial": "Choice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:ContM",
      "description": {
        "fct-descr": "\u003cp\u003eClassifies monads that provide access to a computation's continuation.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "class",
        "fct-source": "src/MonadLib.html#ContM",
        "fct-type": "class",
        "title": "ContM"
      },
      "index": {
        "description": "Classifies monads that provide access to computation continuation",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "ContM",
        "normalized": "",
        "package": "monadLib",
        "partial": "Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:ContT",
      "description": {
        "fct-descr": "\u003cp\u003eAdd support for continuations within a prompt of type \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "data",
        "fct-source": "src/MonadLib.html#ContT",
        "fct-type": "data",
        "title": "ContT"
      },
      "index": {
        "description": "Add support for continuations within prompt of type",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "ContT",
        "normalized": "",
        "package": "monadLib",
        "partial": "Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:ExceptionM",
      "description": {
        "fct-descr": "\u003cp\u003eClassifies monads that support raising exceptions of type \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "class",
        "fct-source": "src/MonadLib.html#ExceptionM",
        "fct-type": "class",
        "title": "ExceptionM"
      },
      "index": {
        "description": "Classifies monads that support raising exceptions of type",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "ExceptionM",
        "normalized": "",
        "package": "monadLib",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:ExceptionT",
      "description": {
        "fct-descr": "\u003cp\u003eAdd support for exceptions of type \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "data",
        "fct-source": "src/MonadLib.html#ExceptionT",
        "fct-type": "data",
        "title": "ExceptionT"
      },
      "index": {
        "description": "Add support for exceptions of type",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "ExceptionT",
        "normalized": "",
        "package": "monadLib",
        "partial": "Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:Id",
      "description": {
        "fct-descr": "\u003cp\u003eComputations with no effects.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "data",
        "fct-source": "src/MonadLib.html#Id",
        "fct-type": "data",
        "title": "Id"
      },
      "index": {
        "description": "Computations with no effects",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "Id",
        "normalized": "",
        "package": "monadLib",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:IdT",
      "description": {
        "fct-descr": "\u003cp\u003eAdds no new features.  Useful as a placeholder.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "data",
        "fct-source": "src/MonadLib.html#IdT",
        "fct-type": "data",
        "title": "IdT"
      },
      "index": {
        "description": "Adds no new features Useful as placeholder",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "IdT",
        "normalized": "",
        "package": "monadLib",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:Label",
      "description": {
        "fct-descr": "\u003cp\u003eAn explicit representation for monadic continuations.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "data",
        "fct-source": "src/MonadLib.html#Label",
        "fct-type": "data",
        "title": "Label"
      },
      "index": {
        "description": "An explicit representation for monadic continuations",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "Label",
        "normalized": "",
        "package": "monadLib",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:Lift",
      "description": {
        "fct-descr": "\u003cp\u003eComputation with no effects (strict).\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "data",
        "fct-source": "src/MonadLib.html#Lift",
        "fct-type": "data",
        "title": "Lift"
      },
      "index": {
        "description": "Computation with no effects strict",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "Lift",
        "normalized": "",
        "package": "monadLib",
        "partial": "Lift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:MonadT",
      "description": {
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "class",
        "fct-source": "src/MonadLib.html#MonadT",
        "fct-type": "class",
        "title": "MonadT"
      },
      "index": {
        "description": "",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "MonadT",
        "normalized": "",
        "package": "monadLib",
        "partial": "Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:ReaderM",
      "description": {
        "fct-descr": "\u003cp\u003eClassifies monads that provide access to a context of type \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "class",
        "fct-source": "src/MonadLib.html#ReaderM",
        "fct-type": "class",
        "title": "ReaderM"
      },
      "index": {
        "description": "Classifies monads that provide access to context of type",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "ReaderM",
        "normalized": "",
        "package": "monadLib",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:ReaderT",
      "description": {
        "fct-descr": "\u003cp\u003eAdd support for propagating a context of type \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "data",
        "fct-source": "src/MonadLib.html#ReaderT",
        "fct-type": "data",
        "title": "ReaderT"
      },
      "index": {
        "description": "Add support for propagating context of type",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "ReaderT",
        "normalized": "",
        "package": "monadLib",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:RunExceptionM",
      "description": {
        "fct-descr": "\u003cp\u003eClassifies monads that support handling of exceptions.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "class",
        "fct-source": "src/MonadLib.html#RunExceptionM",
        "fct-type": "class",
        "title": "RunExceptionM"
      },
      "index": {
        "description": "Classifies monads that support handling of exceptions",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "RunExceptionM",
        "normalized": "",
        "package": "monadLib",
        "partial": "Run Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:RunM",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized running.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "class",
        "fct-source": "src/MonadLib.html#RunM",
        "fct-type": "class",
        "title": "RunM"
      },
      "index": {
        "description": "Generalized running",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "RunM",
        "normalized": "",
        "package": "monadLib",
        "partial": "Run",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:RunReaderM",
      "description": {
        "fct-descr": "\u003cp\u003eClassifies monads that support changing the context for a\n sub-computation.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "class",
        "fct-source": "src/MonadLib.html#RunReaderM",
        "fct-type": "class",
        "title": "RunReaderM"
      },
      "index": {
        "description": "Classifies monads that support changing the context for sub-computation",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "RunReaderM",
        "normalized": "",
        "package": "monadLib",
        "partial": "Run Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:RunWriterM",
      "description": {
        "fct-descr": "\u003cp\u003eClassifies monads that support collecting the output of\n a sub-computation.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "class",
        "fct-source": "src/MonadLib.html#RunWriterM",
        "fct-type": "class",
        "title": "RunWriterM"
      },
      "index": {
        "description": "Classifies monads that support collecting the output of sub-computation",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "RunWriterM",
        "normalized": "",
        "package": "monadLib",
        "partial": "Run Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:StateM",
      "description": {
        "fct-descr": "\u003cp\u003eClassifies monads that propagate a state component of type \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "class",
        "fct-source": "src/MonadLib.html#StateM",
        "fct-type": "class",
        "title": "StateM"
      },
      "index": {
        "description": "Classifies monads that propagate state component of type",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "StateM",
        "normalized": "",
        "package": "monadLib",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:StateT",
      "description": {
        "fct-descr": "\u003cp\u003eAdd support for threading state of type \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "data",
        "fct-source": "src/MonadLib.html#StateT",
        "fct-type": "data",
        "title": "StateT"
      },
      "index": {
        "description": "Add support for threading state of type",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "StateT",
        "normalized": "",
        "package": "monadLib",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:WriterM",
      "description": {
        "fct-descr": "\u003cp\u003eClassifies monads that can collect values of type \u003ccode\u003ei\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "class",
        "fct-source": "src/MonadLib.html#WriterM",
        "fct-type": "class",
        "title": "WriterM"
      },
      "index": {
        "description": "Classifies monads that can collect values of type",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "WriterM",
        "normalized": "",
        "package": "monadLib",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#t:WriterT",
      "description": {
        "fct-descr": "\u003cp\u003eAdd support for collecting values of type \u003ccode\u003ei\u003c/code\u003e.\n The type \u003ccode\u003ei\u003c/code\u003e should be a monoid, whose unit is used to represent\n a lack of a value, and whose binary operation is used to combine\n multiple values.\n This transformer is strict in its output component.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "data",
        "fct-source": "src/MonadLib.html#WriterT",
        "fct-type": "data",
        "title": "WriterT"
      },
      "index": {
        "description": "Add support for collecting values of type The type should be monoid whose unit is used to represent lack of value and whose binary operation is used to combine multiple values This transformer is strict in its output component",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "WriterT",
        "normalized": "",
        "package": "monadLib",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:abort",
      "description": {
        "fct-descr": "\u003cp\u003eAbort the program with the given value as final result.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "i -\u003e m a",
        "fct-source": "src/MonadLib.html#abort",
        "fct-type": "method",
        "title": "abort"
      },
      "index": {
        "description": "Abort the program with the given value as final result",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "abort",
        "normalized": "a-\u003eb c",
        "package": "monadLib",
        "partial": "",
        "signature": "i-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:ask",
      "description": {
        "fct-descr": "\u003cp\u003eGet the context.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "m i",
        "fct-source": "src/MonadLib.html#ask",
        "fct-type": "method",
        "title": "ask"
      },
      "index": {
        "description": "Get the context",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "ask",
        "normalized": "",
        "package": "monadLib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:asks",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to the environment.\n Useful for accessing environmnt components.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "(r -\u003e a) -\u003e m a",
        "fct-source": "src/MonadLib.html#asks",
        "fct-type": "function",
        "title": "asks"
      },
      "index": {
        "description": "Apply function to the environment Useful for accessing environmnt components",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "asks",
        "normalized": "(a-\u003eb)-\u003ec b",
        "package": "monadLib",
        "partial": "",
        "signature": "(r-\u003ea)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:callCC",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ecallWithCC\u003c/a\u003e\u003c/code\u003e that avoids the need for an explicit\n use of the \u003ccode\u003e\u003ca\u003ejump\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "((a -\u003e m b) -\u003e m a) -\u003e m a",
        "fct-source": "src/MonadLib.html#callCC",
        "fct-type": "function",
        "title": "callCC"
      },
      "index": {
        "description": "version of callWithCC that avoids the need for an explicit use of the jump function",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "callCC",
        "normalized": "((a-\u003eb c)-\u003eb a)-\u003eb a",
        "package": "monadLib",
        "partial": "CC",
        "signature": "((a-\u003em b)-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:callWithCC",
      "description": {
        "fct-descr": "\u003cp\u003eCapture the current continuation.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "((a -\u003e Label m) -\u003e m a) -\u003e m a",
        "fct-source": "src/MonadLib.html#callWithCC",
        "fct-type": "method",
        "title": "callWithCC"
      },
      "index": {
        "description": "Capture the current continuation",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "callWithCC",
        "normalized": "((a-\u003eLabel b)-\u003eb a)-\u003eb a",
        "package": "monadLib",
        "partial": "With CC",
        "signature": "((a-\u003eLabel m)-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:collect",
      "description": {
        "fct-descr": "\u003cp\u003eCollect the output from a sub-computation.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "m a -\u003e m (a, i)",
        "fct-source": "src/MonadLib.html#collect",
        "fct-type": "method",
        "title": "collect"
      },
      "index": {
        "description": "Collect the output from sub-computation",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "collect",
        "normalized": "a b-\u003ea(b,c)",
        "package": "monadLib",
        "partial": "",
        "signature": "m a-\u003em(a,i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:findAll",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a computation that may return multiple answers,\n collecting all possible answers.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "ChoiceT m a -\u003e m [a]",
        "fct-source": "src/MonadLib.html#findAll",
        "fct-type": "function",
        "title": "findAll"
      },
      "index": {
        "description": "Execute computation that may return multiple answers collecting all possible answers",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "findAll",
        "normalized": "ChoiceT a b-\u003ea[b]",
        "package": "monadLib",
        "partial": "All",
        "signature": "ChoiceT m a-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:findOne",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a computation that may return multiple answers,\n returning at most one answer.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "ChoiceT m a -\u003e m (Maybe a)",
        "fct-source": "src/MonadLib.html#findOne",
        "fct-type": "function",
        "title": "findOne"
      },
      "index": {
        "description": "Execute computation that may return multiple answers returning at most one answer",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "findOne",
        "normalized": "ChoiceT a b-\u003ea(Maybe b)",
        "package": "monadLib",
        "partial": "One",
        "signature": "ChoiceT m a-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eGet the state.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "m i",
        "fct-source": "src/MonadLib.html#get",
        "fct-type": "method",
        "title": "get"
      },
      "index": {
        "description": "Get the state",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "get",
        "normalized": "",
        "package": "monadLib",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:handle",
      "description": {
        "fct-descr": "\u003cp\u003eApply the given exception handler, if a computation raises an exception.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "m a -\u003e (x -\u003e m a) -\u003e m a",
        "fct-source": "src/MonadLib.html#handle",
        "fct-type": "function",
        "title": "handle"
      },
      "index": {
        "description": "Apply the given exception handler if computation raises an exception",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "handle",
        "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
        "package": "monadLib",
        "partial": "",
        "signature": "m a-\u003e(x-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:inBase",
      "description": {
        "fct-descr": "\u003cp\u003ePromote a computation from the base monad.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "n a -\u003e m a",
        "fct-source": "src/MonadLib.html#inBase",
        "fct-type": "method",
        "title": "inBase"
      },
      "index": {
        "description": "Promote computation from the base monad",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "inBase",
        "normalized": "a b-\u003ec b",
        "package": "monadLib",
        "partial": "Base",
        "signature": "n a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:jump",
      "description": {
        "fct-descr": "\u003cp\u003eRestart a previously captured computation.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "Label m -\u003e m a",
        "fct-source": "src/MonadLib.html#jump",
        "fct-type": "function",
        "title": "jump"
      },
      "index": {
        "description": "Restart previously captured computation",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "jump",
        "normalized": "Label a-\u003ea b",
        "package": "monadLib",
        "partial": "",
        "signature": "Label m-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:labelC",
      "description": {
        "fct-descr": "\u003cp\u003eLabel a given continuation.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "(forall b.  m b) -\u003e Label m",
        "fct-source": "src/MonadLib.html#labelC",
        "fct-type": "function",
        "title": "labelC"
      },
      "index": {
        "description": "Label given continuation",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "labelC",
        "normalized": "(a b c d)-\u003eLabel c",
        "package": "monadLib",
        "partial": "",
        "signature": "(forall b. m b)-\u003eLabel m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:labelCC",
      "description": {
        "fct-descr": "\u003cp\u003eCapture the current continuation.\n This function is like \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e, except that it also captures\n the current continuation.  Later, we can use \u003ccode\u003e\u003ca\u003ejump\u003c/a\u003e\u003c/code\u003e to repeat the\n computation from this point onwards but with a possibly different value.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "a -\u003e m (a, a -\u003e Label m)",
        "fct-source": "src/MonadLib.html#labelCC",
        "fct-type": "function",
        "title": "labelCC"
      },
      "index": {
        "description": "Capture the current continuation This function is like return except that it also captures the current continuation Later we can use jump to repeat the computation from this point onwards but with possibly different value",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "labelCC",
        "normalized": "a-\u003eb(a,a-\u003eLabel b)",
        "package": "monadLib",
        "partial": "CC",
        "signature": "a-\u003em(a,a-\u003eLabel m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:labelCC_",
      "description": {
        "fct-descr": "\u003cp\u003eCapture the current continuation.\n Later we can use \u003ccode\u003e\u003ca\u003ejump\u003c/a\u003e\u003c/code\u003e to restart the program from this point.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "m (Label m)",
        "fct-source": "src/MonadLib.html#labelCC_",
        "fct-type": "function",
        "title": "labelCC_"
      },
      "index": {
        "description": "Capture the current continuation Later we can use jump to restart the program from this point",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "labelCC_",
        "normalized": "",
        "package": "monadLib",
        "partial": "CC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:lift",
      "description": {
        "fct-descr": "\u003cp\u003ePromote a computation from the underlying monad.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "m a -\u003e t m a",
        "fct-source": "src/MonadLib.html#lift",
        "fct-type": "method",
        "title": "lift"
      },
      "index": {
        "description": "Promote computation from the underlying monad",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "lift",
        "normalized": "a b-\u003ec a b",
        "package": "monadLib",
        "partial": "",
        "signature": "m a-\u003et m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:local",
      "description": {
        "fct-descr": "\u003cp\u003eChange the context for the duration of a sub-computation.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "i -\u003e m a -\u003e m a",
        "fct-source": "src/MonadLib.html#local",
        "fct-type": "method",
        "title": "local"
      },
      "index": {
        "description": "Change the context for the duration of sub-computation",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "local",
        "normalized": "a-\u003eb c-\u003eb c",
        "package": "monadLib",
        "partial": "",
        "signature": "i-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:mapException",
      "description": {
        "fct-descr": "\u003cp\u003eModify the exception that was risen by a computation.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "(x -\u003e x) -\u003e m a -\u003e m a",
        "fct-source": "src/MonadLib.html#mapException",
        "fct-type": "function",
        "title": "mapException"
      },
      "index": {
        "description": "Modify the exception that was risen by computation",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "mapException",
        "normalized": "(a-\u003ea)-\u003eb c-\u003eb c",
        "package": "monadLib",
        "partial": "Exception",
        "signature": "(x-\u003ex)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:mapReader",
      "description": {
        "fct-descr": "\u003cp\u003eModify the environment for the duration of a computation.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "(r -\u003e r) -\u003e m a -\u003e m a",
        "fct-source": "src/MonadLib.html#mapReader",
        "fct-type": "function",
        "title": "mapReader"
      },
      "index": {
        "description": "Modify the environment for the duration of computation",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "mapReader",
        "normalized": "(a-\u003ea)-\u003eb c-\u003eb c",
        "package": "monadLib",
        "partial": "Reader",
        "signature": "(r-\u003er)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:mapWriter",
      "description": {
        "fct-descr": "\u003cp\u003eModify the output of a computation.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "(w -\u003e w) -\u003e m a -\u003e m a",
        "fct-source": "src/MonadLib.html#mapWriter",
        "fct-type": "function",
        "title": "mapWriter"
      },
      "index": {
        "description": "Modify the output of computation",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "mapWriter",
        "normalized": "(a-\u003ea)-\u003eb c-\u003eb c",
        "package": "monadLib",
        "partial": "Writer",
        "signature": "(w-\u003ew)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a value to the collection.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "i -\u003e m ()",
        "fct-source": "src/MonadLib.html#put",
        "fct-type": "method",
        "title": "put"
      },
      "index": {
        "description": "Add value to the collection",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "put",
        "normalized": "a-\u003eb()",
        "package": "monadLib",
        "partial": "",
        "signature": "i-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:puts",
      "description": {
        "fct-descr": "\u003cp\u003eAdd content the output and return a result.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "(a, w) -\u003e m a",
        "fct-source": "src/MonadLib.html#puts",
        "fct-type": "function",
        "title": "puts"
      },
      "index": {
        "description": "Add content the output and return result",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "puts",
        "normalized": "(a,b)-\u003ec a",
        "package": "monadLib",
        "partial": "",
        "signature": "(a,w)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:raise",
      "description": {
        "fct-descr": "\u003cp\u003eRaise an exception.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "i -\u003e m a",
        "fct-source": "src/MonadLib.html#raise",
        "fct-type": "method",
        "title": "raise"
      },
      "index": {
        "description": "Raise an exception",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "raise",
        "normalized": "a-\u003eb c",
        "package": "monadLib",
        "partial": "",
        "signature": "i-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:raises",
      "description": {
        "fct-descr": "\u003cp\u003eEither raise an exception or return a value.\n \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e values signify the we should raise an exception,\n \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e values indicate success.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "Either x a -\u003e m a",
        "fct-source": "src/MonadLib.html#raises",
        "fct-type": "function",
        "title": "raises"
      },
      "index": {
        "description": "Either raise an exception or return value Left values signify the we should raise an exception Right values indicate success",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "raises",
        "normalized": "Either a b-\u003ec b",
        "package": "monadLib",
        "partial": "",
        "signature": "Either x a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:runChoiceT",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a computation that may return multiple answers.\n The resulting computation returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if no answers were found, or \u003ccode\u003eJust (answer,new_comp)\u003c/code\u003e,\n where \u003ccode\u003eanswer\u003c/code\u003e is an answer, and \u003ccode\u003enew_comp\u003c/code\u003e is a computation\n that may produce more answers.\n The search is depth-first and left-biased with respect to the\n \u003ccode\u003e\u003ca\u003emplus\u003c/a\u003e\u003c/code\u003e operation.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "ChoiceT m a -\u003e m (Maybe (a, ChoiceT m a))",
        "fct-source": "src/MonadLib.html#runChoiceT",
        "fct-type": "function",
        "title": "runChoiceT"
      },
      "index": {
        "description": "Execute computation that may return multiple answers The resulting computation returns Nothing if no answers were found or Just answer new comp where answer is an answer and new comp is computation that may produce more answers The search is depth-first and left-biased with respect to the mplus operation",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "runChoiceT",
        "normalized": "ChoiceT a b-\u003ea(Maybe(b,ChoiceT a b))",
        "package": "monadLib",
        "partial": "Choice",
        "signature": "ChoiceT m a-\u003em(Maybe(a,ChoiceT m a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:runContT",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a computation with the given continuation.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "(a -\u003e m i) -\u003e ContT i m a -\u003e m i",
        "fct-source": "src/MonadLib.html#runContT",
        "fct-type": "function",
        "title": "runContT"
      },
      "index": {
        "description": "Execute computation with the given continuation",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "runContT",
        "normalized": "(a-\u003eb c)-\u003eContT c b a-\u003eb c",
        "package": "monadLib",
        "partial": "Cont",
        "signature": "(a-\u003em i)-\u003eContT i m a-\u003em i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:runExceptionT",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a computation with exceptions.\n Successful results are tagged with \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e,\n exceptional results are tagged with \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "ExceptionT i m a -\u003e m (Either i a)",
        "fct-source": "src/MonadLib.html#runExceptionT",
        "fct-type": "function",
        "title": "runExceptionT"
      },
      "index": {
        "description": "Execute computation with exceptions Successful results are tagged with Right exceptional results are tagged with Left",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "runExceptionT",
        "normalized": "ExceptionT a b c-\u003eb(Either a c)",
        "package": "monadLib",
        "partial": "Exception",
        "signature": "ExceptionT i m a-\u003em(Either i a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:runId",
      "description": {
        "fct-descr": "\u003cp\u003eGet the result of a pure computation.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "Id a -\u003e a",
        "fct-source": "src/MonadLib.html#runId",
        "fct-type": "function",
        "title": "runId"
      },
      "index": {
        "description": "Get the result of pure computation",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "runId",
        "normalized": "Id a-\u003ea",
        "package": "monadLib",
        "partial": "Id",
        "signature": "Id a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:runIdT",
      "description": {
        "fct-descr": "\u003cp\u003eRemove an identity layer.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "IdT m a -\u003e m a",
        "fct-source": "src/MonadLib.html#runIdT",
        "fct-type": "function",
        "title": "runIdT"
      },
      "index": {
        "description": "Remove an identity layer",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "runIdT",
        "normalized": "IdT a b-\u003ea b",
        "package": "monadLib",
        "partial": "Id",
        "signature": "IdT m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:runLift",
      "description": {
        "fct-descr": "\u003cp\u003eGet the result of a pure strict computation.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "Lift a -\u003e a",
        "fct-source": "src/MonadLib.html#runLift",
        "fct-type": "function",
        "title": "runLift"
      },
      "index": {
        "description": "Get the result of pure strict computation",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "runLift",
        "normalized": "Lift a-\u003ea",
        "package": "monadLib",
        "partial": "Lift",
        "signature": "Lift a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:runM",
      "description": {
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "m a -\u003e r",
        "fct-source": "src/MonadLib.html#runM",
        "fct-type": "method",
        "title": "runM"
      },
      "index": {
        "description": "",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "runM",
        "normalized": "a b-\u003ec",
        "package": "monadLib",
        "partial": "",
        "signature": "m a-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:runReaderT",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a reader computation in the given context.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "i -\u003e ReaderT i m a -\u003e m a",
        "fct-source": "src/MonadLib.html#runReaderT",
        "fct-type": "function",
        "title": "runReaderT"
      },
      "index": {
        "description": "Execute reader computation in the given context",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "runReaderT",
        "normalized": "a-\u003eReaderT a b c-\u003eb c",
        "package": "monadLib",
        "partial": "Reader",
        "signature": "i-\u003eReaderT i m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:runStateT",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a stateful computation in the given initial state.\n The second component of the result is the final state.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "i -\u003e StateT i m a -\u003e m (a, i)",
        "fct-source": "src/MonadLib.html#runStateT",
        "fct-type": "function",
        "title": "runStateT"
      },
      "index": {
        "description": "Execute stateful computation in the given initial state The second component of the result is the final state",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "runStateT",
        "normalized": "a-\u003eStateT a b c-\u003eb(c,a)",
        "package": "monadLib",
        "partial": "State",
        "signature": "i-\u003eStateT i m a-\u003em(a,i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:runWriterT",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a writer computation.\n Returns the result and the collected output.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "WriterT i m a -\u003e m (a, i)",
        "fct-source": "src/MonadLib.html#runWriterT",
        "fct-type": "function",
        "title": "runWriterT"
      },
      "index": {
        "description": "Execute writer computation Returns the result and the collected output",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "runWriterT",
        "normalized": "WriterT a b c-\u003eb(c,a)",
        "package": "monadLib",
        "partial": "Writer",
        "signature": "WriterT i m a-\u003em(a,i)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:set",
      "description": {
        "fct-descr": "\u003cp\u003eSet the state.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "i -\u003e m ()",
        "fct-source": "src/MonadLib.html#set",
        "fct-type": "method",
        "title": "set"
      },
      "index": {
        "description": "Set the state",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "set",
        "normalized": "a-\u003eb()",
        "package": "monadLib",
        "partial": "",
        "signature": "i-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:sets",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate the state and return a result.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "(s -\u003e (a, s)) -\u003e m a",
        "fct-source": "src/MonadLib.html#sets",
        "fct-type": "function",
        "title": "sets"
      },
      "index": {
        "description": "Update the state and return result",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "sets",
        "normalized": "(a-\u003e(b,a))-\u003ec b",
        "package": "monadLib",
        "partial": "",
        "signature": "(s-\u003e(a,s))-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:sets_",
      "description": {
        "fct-descr": "\u003cp\u003eUpdates the state with the given function.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "(s -\u003e s) -\u003e m ()",
        "fct-source": "src/MonadLib.html#sets_",
        "fct-type": "function",
        "title": "sets_"
      },
      "index": {
        "description": "Updates the state with the given function",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "sets_",
        "normalized": "(a-\u003ea)-\u003eb()",
        "package": "monadLib",
        "partial": "",
        "signature": "(s-\u003es)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:try",
      "description": {
        "fct-descr": "\u003cp\u003eConvert computations that may raise an exception\n into computations that do not raise exception but instead,\n yield a tagged results.  Exceptions are tagged with \u003ca\u003eLeft\u003c/a\u003e,\n successful computations are tagged with \u003ca\u003eRight\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "m a -\u003e m (Either i a)",
        "fct-source": "src/MonadLib.html#try",
        "fct-type": "method",
        "title": "try"
      },
      "index": {
        "description": "Convert computations that may raise an exception into computations that do not raise exception but instead yield tagged results Exceptions are tagged with Left successful computations are tagged with Right",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "try",
        "normalized": "a b-\u003ea(Either c b)",
        "package": "monadLib",
        "partial": "",
        "signature": "m a-\u003em(Either i a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/monadLib/docs/MonadLib.html#v:version",
      "description": {
        "fct-descr": "\u003cp\u003eThe current version of the library.\n\u003c/p\u003e",
        "fct-module": "MonadLib",
        "fct-package": "monadLib",
        "fct-signature": "(Int, Int, Int)",
        "fct-source": "src/MonadLib.html#version",
        "fct-type": "function",
        "title": "version"
      },
      "index": {
        "description": "The current version of the library",
        "hierarchy": "MonadLib",
        "module": "MonadLib",
        "name": "version",
        "normalized": "(Int,Int,Int)",
        "package": "monadLib",
        "partial": "",
        "signature": "(Int,Int,Int)"
      }
    }
  }
]