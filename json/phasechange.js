[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange-Impl.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module allows you to write instances for PhaseChangeable types.\n   To work with PhaseChangeable data, see \u003ca\u003eData.PhaseChange\u003c/a\u003e. For unsafe functions, see \u003ca\u003eData.PhaseChange.Unsafe\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.PhaseChange.Impl",
        "fct-package": "phasechange",
        "fct-signature": "module",
        "fct-source": "src/Data-PhaseChange-Impl.html",
        "fct-type": "module",
        "title": "Impl"
      },
      "index": {
        "description": "This module allows you to write instances for PhaseChangeable types To work with PhaseChangeable data see Data.PhaseChange For unsafe functions see Data.PhaseChange.Unsafe",
        "hierarchy": "Data PhaseChange Impl",
        "module": "Data.PhaseChange.Impl",
        "name": "Impl",
        "normalized": "",
        "package": "phasechange",
        "partial": "Impl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange-Impl.html#t:M1",
      "description": {
        "fct-descr": "\u003cp\u003eNewtype for mutable types whose state thread parameter is in the second-to-last position\n\u003c/p\u003e",
        "fct-module": "Data.PhaseChange.Impl",
        "fct-package": "phasechange",
        "fct-signature": "newtype",
        "fct-source": "src/Data-PhaseChange-Internal.html#M1",
        "fct-type": "newtype",
        "title": "M1"
      },
      "index": {
        "description": "Newtype for mutable types whose state thread parameter is in the second-to-last position",
        "hierarchy": "Data PhaseChange Impl",
        "module": "Data.PhaseChange.Impl",
        "name": "M1",
        "normalized": "",
        "package": "phasechange",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange-Impl.html#t:M2",
      "description": {
        "fct-descr": "\u003cp\u003eNewtype for mutable types whose state thread parameter is in the third-to-last position\n\u003c/p\u003e",
        "fct-module": "Data.PhaseChange.Impl",
        "fct-package": "phasechange",
        "fct-signature": "newtype",
        "fct-source": "src/Data-PhaseChange-Internal.html#M2",
        "fct-type": "newtype",
        "title": "M2"
      },
      "index": {
        "description": "Newtype for mutable types whose state thread parameter is in the third-to-last position",
        "hierarchy": "Data PhaseChange Impl",
        "module": "Data.PhaseChange.Impl",
        "name": "M2",
        "normalized": "",
        "package": "phasechange",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange-Impl.html#t:PhaseChange",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003ePhaseChange\u003c/code\u003e class ties together types which provide a mutable and an immutable view\n   on the same data. The mutable type must have a phantom type parameter representing the\n   state thread it is being used in. Many types have this type parameter in the wrong place\n   (not at the end): instances for them can be provided using the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eM1\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003eM2\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e newtypes.\n\u003c/p\u003e",
        "fct-module": "Data.PhaseChange.Impl",
        "fct-package": "phasechange",
        "fct-signature": "class",
        "fct-source": "src/Data-PhaseChange-Internal.html#PhaseChange",
        "fct-type": "class",
        "title": "PhaseChange"
      },
      "index": {
        "description": "The PhaseChange class ties together types which provide mutable and an immutable view on the same data The mutable type must have phantom type parameter representing the state thread it is being used in Many types have this type parameter in the wrong place not at the end instances for them can be provided using the M1 and M2 newtypes",
        "hierarchy": "Data PhaseChange Impl",
        "module": "Data.PhaseChange.Impl",
        "name": "PhaseChange",
        "normalized": "",
        "package": "phasechange",
        "partial": "Phase Change",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange-Impl.html#v:M1",
      "description": {
        "fct-module": "Data.PhaseChange.Impl",
        "fct-package": "phasechange",
        "fct-signature": "M1",
        "fct-source": "src/Data-PhaseChange-Internal.html#M1",
        "fct-type": "function",
        "title": "M1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PhaseChange Impl",
        "module": "Data.PhaseChange.Impl",
        "name": "M1",
        "normalized": "",
        "package": "phasechange",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange-Impl.html#v:M2",
      "description": {
        "fct-module": "Data.PhaseChange.Impl",
        "fct-package": "phasechange",
        "fct-signature": "M2",
        "fct-source": "src/Data-PhaseChange-Internal.html#M2",
        "fct-type": "function",
        "title": "M2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PhaseChange Impl",
        "module": "Data.PhaseChange.Impl",
        "name": "M2",
        "normalized": "",
        "package": "phasechange",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange-Impl.html#v:copyImpl",
      "description": {
        "fct-descr": "\u003cp\u003eShould make a perfect copy of the input argument, leaving nothing shared between\n   the original and the copy, and making no other changes.\n\u003c/p\u003e",
        "fct-module": "Data.PhaseChange.Impl",
        "fct-package": "phasechange",
        "fct-signature": "mut s -\u003e ST s (mut s)",
        "fct-source": "src/Data-PhaseChange-Internal.html#copyImpl",
        "fct-type": "method",
        "title": "copyImpl"
      },
      "index": {
        "description": "Should make perfect copy of the input argument leaving nothing shared between the original and the copy and making no other changes",
        "hierarchy": "Data PhaseChange Impl",
        "module": "Data.PhaseChange.Impl",
        "name": "copyImpl",
        "normalized": "a b-\u003eST b(a b)",
        "package": "phasechange",
        "partial": "Impl",
        "signature": "mut s-\u003eST s(mut s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange-Impl.html#v:unM1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.PhaseChange.Impl",
        "fct-package": "phasechange",
        "fct-signature": "mut s a",
        "fct-source": "src/Data-PhaseChange-Internal.html#M1",
        "fct-type": "function",
        "title": "unM1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PhaseChange Impl",
        "module": "Data.PhaseChange.Impl",
        "name": "unM1",
        "normalized": "",
        "package": "phasechange",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange-Impl.html#v:unM2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.PhaseChange.Impl",
        "fct-package": "phasechange",
        "fct-signature": "mut s a b",
        "fct-source": "src/Data-PhaseChange-Internal.html#M2",
        "fct-type": "function",
        "title": "unM2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PhaseChange Impl",
        "module": "Data.PhaseChange.Impl",
        "name": "unM2",
        "normalized": "",
        "package": "phasechange",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange-Impl.html#v:unsafeFreezeImpl",
      "description": {
        "fct-descr": "\u003cp\u003eShould return the same data it got as input, viewed as an immutable type, making no\n   changes.\n\u003c/p\u003e",
        "fct-module": "Data.PhaseChange.Impl",
        "fct-package": "phasechange",
        "fct-signature": "mut s -\u003e ST s (Frozen mut)",
        "fct-source": "src/Data-PhaseChange-Internal.html#unsafeFreezeImpl",
        "fct-type": "method",
        "title": "unsafeFreezeImpl"
      },
      "index": {
        "description": "Should return the same data it got as input viewed as an immutable type making no changes",
        "hierarchy": "Data PhaseChange Impl",
        "module": "Data.PhaseChange.Impl",
        "name": "unsafeFreezeImpl",
        "normalized": "a b-\u003eST b(Frozen a)",
        "package": "phasechange",
        "partial": "Freeze Impl",
        "signature": "mut s-\u003eST s(Frozen mut)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange-Impl.html#v:unsafeThawImpl",
      "description": {
        "fct-descr": "\u003cp\u003eShould return the same data it got as input, viewed as a mutable type, making no\n   changes.\n\u003c/p\u003e",
        "fct-module": "Data.PhaseChange.Impl",
        "fct-package": "phasechange",
        "fct-signature": "imm -\u003e ST s (Thawed imm s)",
        "fct-source": "src/Data-PhaseChange-Internal.html#unsafeThawImpl",
        "fct-type": "method",
        "title": "unsafeThawImpl"
      },
      "index": {
        "description": "Should return the same data it got as input viewed as mutable type making no changes",
        "hierarchy": "Data PhaseChange Impl",
        "module": "Data.PhaseChange.Impl",
        "name": "unsafeThawImpl",
        "normalized": "a-\u003eST b(Thawed a b)",
        "package": "phasechange",
        "partial": "Thaw Impl",
        "signature": "imm-\u003eST s(Thawed imm s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange-Unsafe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions on PhaseChangeable data which can break referential transparency if used incorrectly.\n   For safe functions, see \u003ca\u003eData.PhaseChange\u003c/a\u003e. To write an instance, see \u003ca\u003eData.PhaseChange.Impl\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.PhaseChange.Unsafe",
        "fct-package": "phasechange",
        "fct-signature": "module",
        "fct-source": "src/Data-PhaseChange-Unsafe.html",
        "fct-type": "module",
        "title": "Unsafe"
      },
      "index": {
        "description": "This module provides functions on PhaseChangeable data which can break referential transparency if used incorrectly For safe functions see Data.PhaseChange To write an instance see Data.PhaseChange.Impl",
        "hierarchy": "Data PhaseChange Unsafe",
        "module": "Data.PhaseChange.Unsafe",
        "name": "Unsafe",
        "normalized": "",
        "package": "phasechange",
        "partial": "Unsafe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange-Unsafe.html#v:readWith",
      "description": {
        "fct-descr": "\u003cp\u003eRead a value from immutable data with a reading-computation on mutable data.\n   This function is referentially transparent as long as the computation does\n   not mutate its input argument, but there is no way to enforce this.\n\u003c/p\u003e",
        "fct-module": "Data.PhaseChange.Unsafe",
        "fct-package": "phasechange",
        "fct-signature": "(forall s.  Thawed imm s -\u003e ST s a) -\u003e imm -\u003e a",
        "fct-source": "src/Data-PhaseChange-Internal.html#readWith",
        "fct-type": "function",
        "title": "readWith"
      },
      "index": {
        "description": "Read value from immutable data with reading-computation on mutable data This function is referentially transparent as long as the computation does not mutate its input argument but there is no way to enforce this",
        "hierarchy": "Data PhaseChange Unsafe",
        "module": "Data.PhaseChange.Unsafe",
        "name": "readWith",
        "normalized": "(a b Thawed c d-\u003eST d e)-\u003ec-\u003ee",
        "package": "phasechange",
        "partial": "With",
        "signature": "(forall s. Thawed imm s-\u003eST s a)-\u003eimm-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange-Unsafe.html#v:readWith1",
      "description": {
        "fct-module": "Data.PhaseChange.Unsafe",
        "fct-package": "phasechange",
        "fct-signature": "(forall s.  mut s a -\u003e ST s b) -\u003e imm a -\u003e b",
        "fct-source": "src/Data-PhaseChange-Internal.html#readWith1",
        "fct-type": "function",
        "title": "readWith1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PhaseChange Unsafe",
        "module": "Data.PhaseChange.Unsafe",
        "name": "readWith1",
        "normalized": "(a b c d e-\u003eST d f)-\u003eg e-\u003ef",
        "package": "phasechange",
        "partial": "With",
        "signature": "(forall s. mut s a-\u003eST s b)-\u003eimm a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange-Unsafe.html#v:readWith2",
      "description": {
        "fct-module": "Data.PhaseChange.Unsafe",
        "fct-package": "phasechange",
        "fct-signature": "(forall s.  mut s a b -\u003e ST s c) -\u003e imm a b -\u003e c",
        "fct-source": "src/Data-PhaseChange-Internal.html#readWith2",
        "fct-type": "function",
        "title": "readWith2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PhaseChange Unsafe",
        "module": "Data.PhaseChange.Unsafe",
        "name": "readWith2",
        "normalized": "(a b c d e f-\u003eST d g)-\u003eh e f-\u003eg",
        "package": "phasechange",
        "partial": "With",
        "signature": "(forall s. mut s a b-\u003eST s c)-\u003eimm a b-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange-Unsafe.html#v:unsafeFreeze",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the input argument viewed as an immutable type. The input argument must not be used\n   afterwards.\n\u003c/p\u003e",
        "fct-module": "Data.PhaseChange.Unsafe",
        "fct-package": "phasechange",
        "fct-signature": "mut s -\u003e mST (Frozen mut)",
        "fct-source": "src/Data-PhaseChange-Internal.html#unsafeFreeze",
        "fct-type": "function",
        "title": "unsafeFreeze"
      },
      "index": {
        "description": "Returns the input argument viewed as an immutable type The input argument must not be used afterwards",
        "hierarchy": "Data PhaseChange Unsafe",
        "module": "Data.PhaseChange.Unsafe",
        "name": "unsafeFreeze",
        "normalized": "a b-\u003ec(Frozen a)",
        "package": "phasechange",
        "partial": "Freeze",
        "signature": "mut s-\u003emST(Frozen mut)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange-Unsafe.html#v:unsafeFreeze1",
      "description": {
        "fct-module": "Data.PhaseChange.Unsafe",
        "fct-package": "phasechange",
        "fct-signature": "mut s a -\u003e mST (imm a)",
        "fct-source": "src/Data-PhaseChange-Internal.html#unsafeFreeze1",
        "fct-type": "function",
        "title": "unsafeFreeze1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PhaseChange Unsafe",
        "module": "Data.PhaseChange.Unsafe",
        "name": "unsafeFreeze1",
        "normalized": "a b c-\u003ed(e c)",
        "package": "phasechange",
        "partial": "Freeze",
        "signature": "mut s a-\u003emST(imm a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange-Unsafe.html#v:unsafeFreeze2",
      "description": {
        "fct-module": "Data.PhaseChange.Unsafe",
        "fct-package": "phasechange",
        "fct-signature": "mut s a b -\u003e mST (imm a b)",
        "fct-source": "src/Data-PhaseChange-Internal.html#unsafeFreeze2",
        "fct-type": "function",
        "title": "unsafeFreeze2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PhaseChange Unsafe",
        "module": "Data.PhaseChange.Unsafe",
        "name": "unsafeFreeze2",
        "normalized": "a b c d-\u003ee(f c d)",
        "package": "phasechange",
        "partial": "Freeze",
        "signature": "mut s a b-\u003emST(imm a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange-Unsafe.html#v:unsafeThaw",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the input argument viewed as a mutable type. The input argument must not be used\n   afterwards.\n\u003c/p\u003e",
        "fct-module": "Data.PhaseChange.Unsafe",
        "fct-package": "phasechange",
        "fct-signature": "imm -\u003e mST (Thawed imm s)",
        "fct-source": "src/Data-PhaseChange-Internal.html#unsafeThaw",
        "fct-type": "function",
        "title": "unsafeThaw"
      },
      "index": {
        "description": "Returns the input argument viewed as mutable type The input argument must not be used afterwards",
        "hierarchy": "Data PhaseChange Unsafe",
        "module": "Data.PhaseChange.Unsafe",
        "name": "unsafeThaw",
        "normalized": "a-\u003eb(Thawed a c)",
        "package": "phasechange",
        "partial": "Thaw",
        "signature": "imm-\u003emST(Thawed imm s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange-Unsafe.html#v:unsafeThaw1",
      "description": {
        "fct-module": "Data.PhaseChange.Unsafe",
        "fct-package": "phasechange",
        "fct-signature": "imm a -\u003e mST (mut s a)",
        "fct-source": "src/Data-PhaseChange-Internal.html#unsafeThaw1",
        "fct-type": "function",
        "title": "unsafeThaw1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PhaseChange Unsafe",
        "module": "Data.PhaseChange.Unsafe",
        "name": "unsafeThaw1",
        "normalized": "a b-\u003ec(d e b)",
        "package": "phasechange",
        "partial": "Thaw",
        "signature": "imm a-\u003emST(mut s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange-Unsafe.html#v:unsafeThaw2",
      "description": {
        "fct-module": "Data.PhaseChange.Unsafe",
        "fct-package": "phasechange",
        "fct-signature": "imm a b -\u003e mST (mut s a b)",
        "fct-source": "src/Data-PhaseChange-Internal.html#unsafeThaw2",
        "fct-type": "function",
        "title": "unsafeThaw2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PhaseChange Unsafe",
        "module": "Data.PhaseChange.Unsafe",
        "name": "unsafeThaw2",
        "normalized": "a b c-\u003ed(e f b c)",
        "package": "phasechange",
        "partial": "Thaw",
        "signature": "imm a b-\u003emST(mut s a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides referentially transparent functions for working with PhaseChangeable data.\n   For functions that can break referential transparency, see \u003ca\u003eData.PhaseChange.Unsafe\u003c/a\u003e.\n   If you want to write instances, see \u003ca\u003eData.PhaseChange.Impl\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.PhaseChange",
        "fct-package": "phasechange",
        "fct-signature": "module",
        "fct-source": "src/Data-PhaseChange.html",
        "fct-type": "module",
        "title": "PhaseChange"
      },
      "index": {
        "description": "This module provides referentially transparent functions for working with PhaseChangeable data For functions that can break referential transparency see Data.PhaseChange.Unsafe If you want to write instances see Data.PhaseChange.Impl",
        "hierarchy": "Data PhaseChange",
        "module": "Data.PhaseChange",
        "name": "PhaseChange",
        "normalized": "",
        "package": "phasechange",
        "partial": "Phase Change",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange.html#t:Immutable",
      "description": {
        "fct-module": "Data.PhaseChange",
        "fct-package": "phasechange",
        "fct-signature": "type",
        "fct-source": "src/Data-PhaseChange-Internal.html#Immutable",
        "fct-type": "type",
        "title": "Immutable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PhaseChange",
        "module": "Data.PhaseChange",
        "name": "Immutable",
        "normalized": "",
        "package": "phasechange",
        "partial": "Immutable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange.html#t:M1",
      "description": {
        "fct-descr": "\u003cp\u003eNewtype for mutable types whose state thread parameter is in the second-to-last position\n\u003c/p\u003e",
        "fct-module": "Data.PhaseChange",
        "fct-package": "phasechange",
        "fct-signature": "newtype",
        "fct-source": "src/Data-PhaseChange-Internal.html#M1",
        "fct-type": "newtype",
        "title": "M1"
      },
      "index": {
        "description": "Newtype for mutable types whose state thread parameter is in the second-to-last position",
        "hierarchy": "Data PhaseChange",
        "module": "Data.PhaseChange",
        "name": "M1",
        "normalized": "",
        "package": "phasechange",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange.html#t:M2",
      "description": {
        "fct-descr": "\u003cp\u003eNewtype for mutable types whose state thread parameter is in the third-to-last position\n\u003c/p\u003e",
        "fct-module": "Data.PhaseChange",
        "fct-package": "phasechange",
        "fct-signature": "newtype",
        "fct-source": "src/Data-PhaseChange-Internal.html#M2",
        "fct-type": "newtype",
        "title": "M2"
      },
      "index": {
        "description": "Newtype for mutable types whose state thread parameter is in the third-to-last position",
        "hierarchy": "Data PhaseChange",
        "module": "Data.PhaseChange",
        "name": "M2",
        "normalized": "",
        "package": "phasechange",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange.html#t:Mutable",
      "description": {
        "fct-module": "Data.PhaseChange",
        "fct-package": "phasechange",
        "fct-signature": "type",
        "fct-source": "src/Data-PhaseChange-Internal.html#Mutable",
        "fct-type": "type",
        "title": "Mutable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PhaseChange",
        "module": "Data.PhaseChange",
        "name": "Mutable",
        "normalized": "",
        "package": "phasechange",
        "partial": "Mutable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange.html#t:PhaseChange",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003ePhaseChange\u003c/code\u003e class ties together types which provide a mutable and an immutable view\n   on the same data. The mutable type must have a phantom type parameter representing the\n   state thread it is being used in. Many types have this type parameter in the wrong place\n   (not at the end): instances for them can be provided using the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eM1\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e and \u003ccode\u003e\u003ccode\u003e\u003ca\u003eM2\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e newtypes.\n\u003c/p\u003e",
        "fct-module": "Data.PhaseChange",
        "fct-package": "phasechange",
        "fct-signature": "class",
        "fct-source": "src/Data-PhaseChange-Internal.html#PhaseChange",
        "fct-type": "class",
        "title": "PhaseChange"
      },
      "index": {
        "description": "The PhaseChange class ties together types which provide mutable and an immutable view on the same data The mutable type must have phantom type parameter representing the state thread it is being used in Many types have this type parameter in the wrong place not at the end instances for them can be provided using the M1 and M2 newtypes",
        "hierarchy": "Data PhaseChange",
        "module": "Data.PhaseChange",
        "name": "PhaseChange",
        "normalized": "",
        "package": "phasechange",
        "partial": "Phase Change",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange.html#v:M1",
      "description": {
        "fct-module": "Data.PhaseChange",
        "fct-package": "phasechange",
        "fct-signature": "M1",
        "fct-source": "src/Data-PhaseChange-Internal.html#M1",
        "fct-type": "function",
        "title": "M1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PhaseChange",
        "module": "Data.PhaseChange",
        "name": "M1",
        "normalized": "",
        "package": "phasechange",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange.html#v:M2",
      "description": {
        "fct-module": "Data.PhaseChange",
        "fct-package": "phasechange",
        "fct-signature": "M2",
        "fct-source": "src/Data-PhaseChange-Internal.html#M2",
        "fct-type": "function",
        "title": "M2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PhaseChange",
        "module": "Data.PhaseChange",
        "name": "M2",
        "normalized": "",
        "package": "phasechange",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange.html#v:copy",
      "description": {
        "fct-descr": "\u003cp\u003eMake a copy of mutable data.\n\u003c/p\u003e",
        "fct-module": "Data.PhaseChange",
        "fct-package": "phasechange",
        "fct-signature": "mut s -\u003e mST (mut s)",
        "fct-source": "src/Data-PhaseChange-Internal.html#copy",
        "fct-type": "function",
        "title": "copy"
      },
      "index": {
        "description": "Make copy of mutable data",
        "hierarchy": "Data PhaseChange",
        "module": "Data.PhaseChange",
        "name": "copy",
        "normalized": "a b-\u003ec(a b)",
        "package": "phasechange",
        "partial": "",
        "signature": "mut s-\u003emST(mut s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange.html#v:copy1",
      "description": {
        "fct-module": "Data.PhaseChange",
        "fct-package": "phasechange",
        "fct-signature": "mut s a -\u003e mST (mut s a)",
        "fct-source": "src/Data-PhaseChange-Internal.html#copy1",
        "fct-type": "function",
        "title": "copy1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PhaseChange",
        "module": "Data.PhaseChange",
        "name": "copy1",
        "normalized": "a b c-\u003ed(a b c)",
        "package": "phasechange",
        "partial": "",
        "signature": "mut s a-\u003emST(mut s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange.html#v:copy2",
      "description": {
        "fct-module": "Data.PhaseChange",
        "fct-package": "phasechange",
        "fct-signature": "mut s a b -\u003e mST (mut s a b)",
        "fct-source": "src/Data-PhaseChange-Internal.html#copy2",
        "fct-type": "function",
        "title": "copy2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PhaseChange",
        "module": "Data.PhaseChange",
        "name": "copy2",
        "normalized": "a b c d-\u003ee(a b c d)",
        "package": "phasechange",
        "partial": "",
        "signature": "mut s a b-\u003emST(mut s a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange.html#v:freeze",
      "description": {
        "fct-descr": "\u003cp\u003eGet a copy of mutable data in immutable form.\n\u003c/p\u003e",
        "fct-module": "Data.PhaseChange",
        "fct-package": "phasechange",
        "fct-signature": "mut s -\u003e mST (Frozen mut)",
        "fct-source": "src/Data-PhaseChange-Internal.html#freeze",
        "fct-type": "function",
        "title": "freeze"
      },
      "index": {
        "description": "Get copy of mutable data in immutable form",
        "hierarchy": "Data PhaseChange",
        "module": "Data.PhaseChange",
        "name": "freeze",
        "normalized": "a b-\u003ec(Frozen a)",
        "package": "phasechange",
        "partial": "",
        "signature": "mut s-\u003emST(Frozen mut)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange.html#v:freeze1",
      "description": {
        "fct-module": "Data.PhaseChange",
        "fct-package": "phasechange",
        "fct-signature": "mut s a -\u003e mST (imm a)",
        "fct-source": "src/Data-PhaseChange-Internal.html#freeze1",
        "fct-type": "function",
        "title": "freeze1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PhaseChange",
        "module": "Data.PhaseChange",
        "name": "freeze1",
        "normalized": "a b c-\u003ed(e c)",
        "package": "phasechange",
        "partial": "",
        "signature": "mut s a-\u003emST(imm a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange.html#v:freeze2",
      "description": {
        "fct-module": "Data.PhaseChange",
        "fct-package": "phasechange",
        "fct-signature": "mut s a b -\u003e mST (imm a b)",
        "fct-source": "src/Data-PhaseChange-Internal.html#freeze2",
        "fct-type": "function",
        "title": "freeze2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PhaseChange",
        "module": "Data.PhaseChange",
        "name": "freeze2",
        "normalized": "a b c d-\u003ee(f c d)",
        "package": "phasechange",
        "partial": "",
        "signature": "mut s a b-\u003emST(imm a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange.html#v:frozen",
      "description": {
        "fct-descr": "\u003cp\u003eProduce immutable data from a mutating computation. No copies are made.\n\u003c/p\u003e",
        "fct-module": "Data.PhaseChange",
        "fct-package": "phasechange",
        "fct-signature": "(forall s.  ST s (mut s)) -\u003e Frozen mut",
        "fct-source": "src/Data-PhaseChange-Internal.html#frozen",
        "fct-type": "function",
        "title": "frozen"
      },
      "index": {
        "description": "Produce immutable data from mutating computation No copies are made",
        "hierarchy": "Data PhaseChange",
        "module": "Data.PhaseChange",
        "name": "frozen",
        "normalized": "(a b ST c(d c))-\u003eFrozen d",
        "package": "phasechange",
        "partial": "",
        "signature": "(forall s. ST s(mut s))-\u003eFrozen mut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange.html#v:frozen1",
      "description": {
        "fct-module": "Data.PhaseChange",
        "fct-package": "phasechange",
        "fct-signature": "(forall s.  ST s (mut s a)) -\u003e imm a",
        "fct-source": "src/Data-PhaseChange-Internal.html#frozen1",
        "fct-type": "function",
        "title": "frozen1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PhaseChange",
        "module": "Data.PhaseChange",
        "name": "frozen1",
        "normalized": "(a b ST c(d c e))-\u003ef e",
        "package": "phasechange",
        "partial": "",
        "signature": "(forall s. ST s(mut s a))-\u003eimm a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange.html#v:frozen2",
      "description": {
        "fct-module": "Data.PhaseChange",
        "fct-package": "phasechange",
        "fct-signature": "(forall s.  ST s (mut s a b)) -\u003e imm a b",
        "fct-source": "src/Data-PhaseChange-Internal.html#frozen2",
        "fct-type": "function",
        "title": "frozen2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PhaseChange",
        "module": "Data.PhaseChange",
        "name": "frozen2",
        "normalized": "(a b ST c(d c e f))-\u003eg e f",
        "package": "phasechange",
        "partial": "",
        "signature": "(forall s. ST s(mut s a b))-\u003eimm a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange.html#v:thaw",
      "description": {
        "fct-descr": "\u003cp\u003eGet a copy of immutable data in mutable form.\n\u003c/p\u003e",
        "fct-module": "Data.PhaseChange",
        "fct-package": "phasechange",
        "fct-signature": "imm -\u003e mST (Thawed imm s)",
        "fct-source": "src/Data-PhaseChange-Internal.html#thaw",
        "fct-type": "function",
        "title": "thaw"
      },
      "index": {
        "description": "Get copy of immutable data in mutable form",
        "hierarchy": "Data PhaseChange",
        "module": "Data.PhaseChange",
        "name": "thaw",
        "normalized": "a-\u003eb(Thawed a c)",
        "package": "phasechange",
        "partial": "",
        "signature": "imm-\u003emST(Thawed imm s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange.html#v:thaw1",
      "description": {
        "fct-module": "Data.PhaseChange",
        "fct-package": "phasechange",
        "fct-signature": "imm a -\u003e mST (mut s a)",
        "fct-source": "src/Data-PhaseChange-Internal.html#thaw1",
        "fct-type": "function",
        "title": "thaw1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PhaseChange",
        "module": "Data.PhaseChange",
        "name": "thaw1",
        "normalized": "a b-\u003ec(d e b)",
        "package": "phasechange",
        "partial": "",
        "signature": "imm a-\u003emST(mut s a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange.html#v:thaw2",
      "description": {
        "fct-module": "Data.PhaseChange",
        "fct-package": "phasechange",
        "fct-signature": "imm a b -\u003e mST (mut s a b)",
        "fct-source": "src/Data-PhaseChange-Internal.html#thaw2",
        "fct-type": "function",
        "title": "thaw2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PhaseChange",
        "module": "Data.PhaseChange",
        "name": "thaw2",
        "normalized": "a b c-\u003ed(e f b c)",
        "package": "phasechange",
        "partial": "",
        "signature": "imm a b-\u003emST(mut s a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange.html#v:unM1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.PhaseChange",
        "fct-package": "phasechange",
        "fct-signature": "mut s a",
        "fct-source": "src/Data-PhaseChange-Internal.html#M1",
        "fct-type": "function",
        "title": "unM1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PhaseChange",
        "module": "Data.PhaseChange",
        "name": "unM1",
        "normalized": "",
        "package": "phasechange",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange.html#v:unM2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.PhaseChange",
        "fct-package": "phasechange",
        "fct-signature": "mut s a b",
        "fct-source": "src/Data-PhaseChange-Internal.html#M2",
        "fct-type": "function",
        "title": "unM2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PhaseChange",
        "module": "Data.PhaseChange",
        "name": "unM2",
        "normalized": "",
        "package": "phasechange",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange.html#v:updateWith",
      "description": {
        "fct-descr": "\u003cp\u003eMake an update of immutable data by applying a mutating action. This function allows for\n   copy elision.\n\u003c/p\u003e\u003cp\u003eEach chain of \u003ccode\u003e\u003ca\u003eupdateWith\u003c/a\u003e\u003c/code\u003es makes only one copy. A chain of \u003ccode\u003e\u003ca\u003eupdateWith\u003c/a\u003e\u003c/code\u003es on\n   top of a \u003ccode\u003e\u003ca\u003efrozen\u003c/a\u003e\u003c/code\u003e makes no copies.\n\u003c/p\u003e",
        "fct-module": "Data.PhaseChange",
        "fct-package": "phasechange",
        "fct-signature": "(forall s.  mut s -\u003e ST s ()) -\u003e Frozen mut -\u003e Frozen mut",
        "fct-source": "src/Data-PhaseChange-Internal.html#updateWith",
        "fct-type": "function",
        "title": "updateWith"
      },
      "index": {
        "description": "Make an update of immutable data by applying mutating action This function allows for copy elision Each chain of updateWith makes only one copy chain of updateWith on top of frozen makes no copies",
        "hierarchy": "Data PhaseChange",
        "module": "Data.PhaseChange",
        "name": "updateWith",
        "normalized": "(a b c d-\u003eST d())-\u003eFrozen c-\u003eFrozen c",
        "package": "phasechange",
        "partial": "With",
        "signature": "(forall s. mut s-\u003eST s())-\u003eFrozen mut-\u003eFrozen mut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange.html#v:updateWith1",
      "description": {
        "fct-module": "Data.PhaseChange",
        "fct-package": "phasechange",
        "fct-signature": "(forall s.  mut s a -\u003e ST s ()) -\u003e imm a -\u003e imm a",
        "fct-source": "src/Data-PhaseChange-Internal.html#updateWith1",
        "fct-type": "function",
        "title": "updateWith1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PhaseChange",
        "module": "Data.PhaseChange",
        "name": "updateWith1",
        "normalized": "(a b c d e-\u003eST d())-\u003ef e-\u003ef e",
        "package": "phasechange",
        "partial": "With",
        "signature": "(forall s. mut s a-\u003eST s())-\u003eimm a-\u003eimm a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/phasechange/docs/Data-PhaseChange.html#v:updateWith2",
      "description": {
        "fct-module": "Data.PhaseChange",
        "fct-package": "phasechange",
        "fct-signature": "(forall s.  mut s a b -\u003e ST s ()) -\u003e imm a b -\u003e imm a b",
        "fct-source": "src/Data-PhaseChange-Internal.html#updateWith2",
        "fct-type": "function",
        "title": "updateWith2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PhaseChange",
        "module": "Data.PhaseChange",
        "name": "updateWith2",
        "normalized": "(a b c d e f-\u003eST d())-\u003eg e f-\u003eg e f",
        "package": "phasechange",
        "partial": "With",
        "signature": "(forall s. mut s a b-\u003eST s())-\u003eimm a b-\u003eimm a b"
      }
    }
  }
]