[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow-Examples.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeepArrow examples.\n\u003c/p\u003e\u003cp\u003eThe types in the source code are formatted for easier reading.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Arrow.DeepArrow.Examples",
        "fct-package": "DeepArrow",
        "fct-signature": "module",
        "fct-source": "src/Control-Arrow-DeepArrow-Examples.html",
        "fct-type": "module",
        "title": "Examples"
      },
      "index": {
        "description": "DeepArrow examples The types in the source code are formatted for easier reading",
        "hierarchy": "Control Arrow DeepArrow Examples",
        "module": "Control.Arrow.DeepArrow.Examples",
        "name": "Examples",
        "normalized": "",
        "package": "DeepArrow",
        "partial": "Examples",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow-Examples.html#v:deep",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a value of type \u003ccode\u003e(a -\u003e (f,b -\u003e (c,g)),e)\u003c/code\u003e, apply a function to\n just the \u003ccode\u003ec\u003c/code\u003e part and leave the rest intact.\n\u003c/p\u003e\u003cpre\u003edeep = \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eresult\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003esecond\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eresult\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Control.Arrow.DeepArrow.Examples",
        "fct-package": "DeepArrow",
        "fct-signature": "(c `ar` c') -\u003e (a -\u003e (f, b -\u003e (c, g)), e) `ar` (a -\u003e (f, b -\u003e (c', g)), e)",
        "fct-source": "src/Control-Arrow-DeepArrow-Examples.html#deep",
        "fct-type": "function",
        "title": "deep"
      },
      "index": {
        "description": "Given value of type apply function to just the part and leave the rest intact deep first result second result first",
        "hierarchy": "Control Arrow DeepArrow Examples",
        "module": "Control.Arrow.DeepArrow.Examples",
        "name": "deep",
        "normalized": "(a b c)-\u003e(d-\u003e(e,f-\u003e(a,g)),h)b(d-\u003e(e,f-\u003e(c,g)),h)",
        "package": "DeepArrow",
        "partial": "",
        "signature": "(c ar c')-\u003e(a-\u003e(f,b-\u003e(c,g)),e)ar(a-\u003e(f,b-\u003e(c',g)),e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow-Examples.html#v:extF",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a way to extract a function from a \u003ccode\u003ed\u003c/code\u003e value, create a way to\n extract a function from a \u003ccode\u003e(e -\u003e (a,d), f)\u003c/code\u003e value.\n\u003c/p\u003e\u003cpre\u003eextF = \u003ccode\u003e\u003ca\u003efunFirst\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003efunResult\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003efunSecond\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Control.Arrow.DeepArrow.Examples",
        "fct-package": "DeepArrow",
        "fct-signature": "(d `ar` (c -\u003e b)) -\u003e (e -\u003e (a, d), f) `ar` (c -\u003e (e -\u003e (a, b), f))",
        "fct-source": "src/Control-Arrow-DeepArrow-Examples.html#extF",
        "fct-type": "function",
        "title": "extF"
      },
      "index": {
        "description": "Given way to extract function from value create way to extract function from value extF funFirst funResult funSecond",
        "hierarchy": "Control Arrow DeepArrow Examples",
        "module": "Control.Arrow.DeepArrow.Examples",
        "name": "extF",
        "normalized": "(a b(c-\u003ed))-\u003e(e-\u003e(f,a),g)b(c-\u003e(e-\u003e(f,d),g))",
        "package": "DeepArrow",
        "partial": "",
        "signature": "(d ar(c-\u003eb))-\u003e(e-\u003e(a,d),f)ar(c-\u003e(e-\u003e(a,b),f))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow-Examples.html#v:extFF",
      "description": {
        "fct-descr": "\u003cp\u003eTo make an extractor, simply apply the extractor-transformer \u003ccode\u003e\u003ca\u003eextF\u003c/a\u003e\u003c/code\u003e\n to the identity arrow.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eextFF\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eextF\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eidA\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Control.Arrow.DeepArrow.Examples",
        "fct-package": "DeepArrow",
        "fct-signature": "(e -\u003e (a, c -\u003e b), f) `ar` (c -\u003e (e -\u003e (a, b), f))",
        "fct-source": "src/Control-Arrow-DeepArrow-Examples.html#extFF",
        "fct-type": "function",
        "title": "extFF"
      },
      "index": {
        "description": "To make an extractor simply apply the extractor-transformer extF to the identity arrow extFF extF idA",
        "hierarchy": "Control Arrow DeepArrow Examples",
        "module": "Control.Arrow.DeepArrow.Examples",
        "name": "extFF",
        "normalized": "(a-\u003e(b,c-\u003ed),e)f(c-\u003e(a-\u003e(b,d),e))",
        "package": "DeepArrow",
        "partial": "FF",
        "signature": "(e-\u003e(a,c-\u003eb),f)ar(c-\u003e(e-\u003e(a,b),f))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow-Examples.html#v:extFI",
      "description": {
        "fct-descr": "\u003cp\u003eTypically, we will have to combine function and input extractors.\n For instance, combine \u003ccode\u003e\u003ca\u003eextF\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eextI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003eextFI = \u003ccode\u003e\u003ca\u003eextF\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eextI\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Control.Arrow.DeepArrow.Examples",
        "fct-package": "DeepArrow",
        "fct-signature": "(e -\u003e (g, ((a, (b, e)), c) -\u003e d), f) `ar` (b -\u003e (e -\u003e (g, ((a, e), c) -\u003e d), f))",
        "fct-source": "src/Control-Arrow-DeepArrow-Examples.html#extFI",
        "fct-type": "function",
        "title": "extFI"
      },
      "index": {
        "description": "Typically we will have to combine function and input extractors For instance combine extF and extI extFI extF extI",
        "hierarchy": "Control Arrow DeepArrow Examples",
        "module": "Control.Arrow.DeepArrow.Examples",
        "name": "extFI",
        "normalized": "(a-\u003e(b,((c,(d,a)),e)-\u003ef),g)h(d-\u003e(a-\u003e(b,((c,a),e)-\u003ef),g))",
        "package": "DeepArrow",
        "partial": "FI",
        "signature": "(e-\u003e(g,((a,(b,e)),c)-\u003ed),f)ar(b-\u003e(e-\u003e(g,((a,e),c)-\u003ed),f))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow-Examples.html#v:extI",
      "description": {
        "fct-descr": "\u003cp\u003eExtract a \u003ccode\u003eb\u003c/code\u003e input from a \u003ccode\u003e((a,(b,e)),c)\u003c/code\u003e argument.\n\u003c/p\u003e\u003cpre\u003eextI = (\u003ccode\u003e\u003ca\u003einpFirst\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003einpSecond\u003c/a\u003e\u003c/code\u003e) \u003ccode\u003e\u003ca\u003einpF\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Control.Arrow.DeepArrow.Examples",
        "fct-package": "DeepArrow",
        "fct-signature": "(((a, (b, e)), c) -\u003e d) `ar` (b -\u003e ((a, e), c) -\u003e d)",
        "fct-source": "src/Control-Arrow-DeepArrow-Examples.html#extI",
        "fct-type": "function",
        "title": "extI"
      },
      "index": {
        "description": "Extract input from argument extI inpFirst inpSecond inpF",
        "hierarchy": "Control Arrow DeepArrow Examples",
        "module": "Control.Arrow.DeepArrow.Examples",
        "name": "extI",
        "normalized": "(((a,(b,c)),d)-\u003ee)f(b-\u003e((a,c),d)-\u003ee)",
        "package": "DeepArrow",
        "partial": "",
        "signature": "(((a,(b,e)),c)-\u003ed)ar(b-\u003e((a,e),c)-\u003ed)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\"Deep arrows\" as an \u003ccode\u003e\u003ca\u003eArrow\u003c/a\u003e\u003c/code\u003e subclass.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "module",
        "fct-source": "src/Control-Arrow-DeepArrow.html",
        "fct-type": "module",
        "title": "DeepArrow"
      },
      "index": {
        "description": "Deep arrows as an Arrow subclass",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "DeepArrow",
        "normalized": "",
        "package": "DeepArrow",
        "partial": "Deep Arrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#t:DeepArrow",
      "description": {
        "fct-descr": "\u003cp\u003eArrows for deep application.  Most of these methods could be defined\nusing \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e, but \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e is not definable for some types.  If your\n\u003ccode\u003e\u003ca\u003eDeepArrow\u003c/a\u003e\u003c/code\u003e instance has \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e, you might want to use these\nimplementations\n\u003c/p\u003e\u003cpre\u003e\n    \u003ccode\u003e\u003ca\u003efstA\u003c/a\u003e\u003c/code\u003e     = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e\n    \u003ccode\u003e\u003ca\u003edupA\u003c/a\u003e\u003c/code\u003e     = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\\ x -\u003e (x,x))\n    \u003ccode\u003e\u003ca\u003esndA\u003c/a\u003e\u003c/code\u003e     = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e\n    \u003ccode\u003e\u003ca\u003efunF\u003c/a\u003e\u003c/code\u003e     = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\\ (f,b) -\u003e \\ c -\u003e (f c, b))\n    \u003ccode\u003e\u003ca\u003efunS\u003c/a\u003e\u003c/code\u003e     = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\\ (a,f) -\u003e \\ c -\u003e (a, f c))\n    \u003ccode\u003e\u003ca\u003efunR\u003c/a\u003e\u003c/code\u003e     = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e\n    \u003ccode\u003e\u003ca\u003ecurryA\u003c/a\u003e\u003c/code\u003e   = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ecurry\u003c/a\u003e\u003c/code\u003e\n    \u003ccode\u003e\u003ca\u003euncurryA\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e\n    \u003ccode\u003e\u003ca\u003eswapA\u003c/a\u003e\u003c/code\u003e    = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\\ (a,b) -\u003e (b,a))\n    \u003ccode\u003e\u003ca\u003elAssocA\u003c/a\u003e\u003c/code\u003e  = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\\ (a,(b,c)) -\u003e ((a,b),c))\n    \u003ccode\u003e\u003ca\u003erAssocA\u003c/a\u003e\u003c/code\u003e  = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\\ ((a,b),c) -\u003e (a,(b,c)))\n\u003c/pre\u003e\u003cp\u003eIf your \u003ccode\u003e\u003ca\u003eDeepArrow\u003c/a\u003e\u003c/code\u003e instance \u003cem\u003edoes not\u003c/em\u003e have \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e, you'll have to come up\nwith other definitions.  In any case, I recommend the following\ndefinitions, which mirror \u003ccode\u003e\u003ca\u003eArrow\u003c/a\u003e\u003c/code\u003e defaults while avoiding \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e.  Be sure\nalso to define \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003epure\u003c/code\u003e to yield an error message (rather than\nping-ponging infinitely between them via the \u003ccode\u003e\u003ca\u003eArrow\u003c/a\u003e\u003c/code\u003e default definitions).\n\u003c/p\u003e\u003cpre\u003e\n    \u003ccode\u003e\u003ca\u003esecond\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003eswapA\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eswapA\u003c/a\u003e\u003c/code\u003e\n    f \u003ccode\u003e\u003ca\u003e&&&\u003c/a\u003e\u003c/code\u003e g  = \u003ccode\u003e\u003ca\u003edupA\u003c/a\u003e\u003c/code\u003e  \u003ccode\u003e\u003ca\u003e\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e***\u003c/a\u003e\u003c/code\u003e g\n\u003c/pre\u003e\u003cp\u003eIn a few cases, there are default methods, as noted below.  The\ndefaults do not use \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "class",
        "fct-source": "src/Control-Arrow-DeepArrow.html#DeepArrow",
        "fct-type": "class",
        "title": "DeepArrow"
      },
      "index": {
        "description": "Arrows for deep application Most of these methods could be defined using arr but arr is not definable for some types If your DeepArrow instance has arr you might want to use these implementations fstA arr fst dupA arr sndA arr snd funF arr funS arr funR arr flip curryA arr curry uncurryA arr uncurry swapA arr lAssocA arr rAssocA arr If your DeepArrow instance does not have arr you ll have to come up with other definitions In any case recommend the following definitions which mirror Arrow defaults while avoiding arr Be sure also to define arr or pure to yield an error message rather than ping-ponging infinitely between them via the Arrow default definitions second swapA first swapA dupA In few cases there are default methods as noted below The defaults do not use arr",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "DeepArrow",
        "normalized": "",
        "package": "DeepArrow",
        "partial": "Deep Arrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#t:FunDble",
      "description": {
        "fct-descr": "\u003cp\u003eSupport needed for a \u003ccode\u003e\u003ca\u003eFunA\u003c/a\u003e\u003c/code\u003e to be a \u003ccode\u003e\u003ca\u003eDeepArrow\u003c/a\u003e\u003c/code\u003e (as \u003ccode\u003e\u003ca\u003eFunAble\u003c/a\u003e\u003c/code\u003e serves\n \u003ccode\u003e\u003ca\u003eArrow\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "class",
        "fct-source": "src/Control-Arrow-DeepArrow.html#FunDble",
        "fct-type": "class",
        "title": "FunDble"
      },
      "index": {
        "description": "Support needed for FunA to be DeepArrow as FunAble serves Arrow",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "FunDble",
        "normalized": "",
        "package": "DeepArrow",
        "partial": "Fun Dble",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:-45--62--124-",
      "description": {
        "fct-descr": "\u003cp\u003eCompose wrapped functions\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "w (a -\u003e b) -\u003e w (b -\u003e c) -\u003e w (a -\u003e c)",
        "fct-source": "src/Control-Arrow-DeepArrow.html#-%3E%7C",
        "fct-type": "function",
        "title": "(-\u003e|)"
      },
      "index": {
        "description": "Compose wrapped functions",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "(-\u003e|) -\u003e|",
        "normalized": "a(b-\u003ec)-\u003ea(c-\u003ed)-\u003ea(b-\u003ed)",
        "package": "DeepArrow",
        "partial": "",
        "signature": "w(a-\u003eb)-\u003ew(b-\u003ec)-\u003ew(a-\u003ec)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:curryA",
      "description": {
        "fct-descr": "\u003cp\u003eCurry arrow.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "((a, b) -\u003e c) `ar` (a -\u003e b -\u003e c)",
        "fct-source": "src/Control-Arrow-DeepArrow.html#curryA",
        "fct-type": "method",
        "title": "curryA"
      },
      "index": {
        "description": "Curry arrow",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "curryA",
        "normalized": "((a,b)-\u003ec)d(a-\u003eb-\u003ec)",
        "package": "DeepArrow",
        "partial": "",
        "signature": "((a,b)-\u003ec)ar(a-\u003eb-\u003ec)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:curryAFun",
      "description": {
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "h ((a, b) -\u003e c) -\u003e h (a -\u003e b -\u003e c)",
        "fct-source": "src/Control-Arrow-DeepArrow.html#curryAFun",
        "fct-type": "method",
        "title": "curryAFun"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "curryAFun",
        "normalized": "a((b,c)-\u003ed)-\u003ea(b-\u003ec-\u003ed)",
        "package": "DeepArrow",
        "partial": "AFun",
        "signature": "h((a,b)-\u003ec)-\u003eh(a-\u003eb-\u003ec)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:dupA",
      "description": {
        "fct-descr": "\u003cp\u003eDuplicate.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "a `ar` (a, a)",
        "fct-source": "src/Control-Arrow-DeepArrow.html#dupA",
        "fct-type": "method",
        "title": "dupA"
      },
      "index": {
        "description": "Duplicate",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "dupA",
        "normalized": "a b(a,a)",
        "package": "DeepArrow",
        "partial": "",
        "signature": "a ar(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:dupAFun",
      "description": {
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "h a -\u003e h (a, a)",
        "fct-source": "src/Control-Arrow-DeepArrow.html#dupAFun",
        "fct-type": "method",
        "title": "dupAFun"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "dupAFun",
        "normalized": "a b-\u003ea(b,b)",
        "package": "DeepArrow",
        "partial": "AFun",
        "signature": "h a-\u003eh(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:flipA",
      "description": {
        "fct-descr": "\u003cp\u003eFlip argument order\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(a -\u003e c -\u003e b) `ar` (c -\u003e a -\u003e b)",
        "fct-source": "src/Control-Arrow-DeepArrow.html#flipA",
        "fct-type": "function",
        "title": "flipA"
      },
      "index": {
        "description": "Flip argument order",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "flipA",
        "normalized": "(a-\u003eb-\u003ec)d(b-\u003ea-\u003ec)",
        "package": "DeepArrow",
        "partial": "",
        "signature": "(a-\u003ec-\u003eb)ar(c-\u003ea-\u003eb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:fstA",
      "description": {
        "fct-descr": "\u003cp\u003eExtract first.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(a, b) `ar` a",
        "fct-source": "src/Control-Arrow-DeepArrow.html#fstA",
        "fct-type": "method",
        "title": "fstA"
      },
      "index": {
        "description": "Extract first",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "fstA",
        "normalized": "(a,b)c a",
        "package": "DeepArrow",
        "partial": "",
        "signature": "(a,b)ar a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:fstAFun",
      "description": {
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "h (a, b) -\u003e h a",
        "fct-source": "src/Control-Arrow-DeepArrow.html#fstAFun",
        "fct-type": "method",
        "title": "fstAFun"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "fstAFun",
        "normalized": "a(b,c)-\u003ea b",
        "package": "DeepArrow",
        "partial": "AFun",
        "signature": "h(a,b)-\u003eh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:funF",
      "description": {
        "fct-descr": "\u003cp\u003eExtract function from first element.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(c -\u003e a, b) `ar` (c -\u003e (a, b))",
        "fct-source": "src/Control-Arrow-DeepArrow.html#funF",
        "fct-type": "method",
        "title": "funF"
      },
      "index": {
        "description": "Extract function from first element",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "funF",
        "normalized": "(a-\u003eb,c)d(a-\u003e(b,c))",
        "package": "DeepArrow",
        "partial": "",
        "signature": "(c-\u003ea,b)ar(c-\u003e(a,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:funFFun",
      "description": {
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "h (c -\u003e a, b) -\u003e h (c -\u003e (a, b))",
        "fct-source": "src/Control-Arrow-DeepArrow.html#funFFun",
        "fct-type": "method",
        "title": "funFFun"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "funFFun",
        "normalized": "a(b-\u003ec,d)-\u003ea(b-\u003e(c,d))",
        "package": "DeepArrow",
        "partial": "FFun",
        "signature": "h(c-\u003ea,b)-\u003eh(c-\u003e(a,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:funFirst",
      "description": {
        "fct-descr": "\u003cp\u003ePromote a function extractor into one that reaches into the first\n element of a pair.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(a `ar` (d -\u003e a')) -\u003e (a, b) `ar` (d -\u003e (a', b))",
        "fct-source": "src/Control-Arrow-DeepArrow.html#funFirst",
        "fct-type": "function",
        "title": "funFirst"
      },
      "index": {
        "description": "Promote function extractor into one that reaches into the first element of pair",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "funFirst",
        "normalized": "(a b(c-\u003ed))-\u003e(a,e)b(c-\u003e(d,e))",
        "package": "DeepArrow",
        "partial": "First",
        "signature": "(a ar(d-\u003ea'))-\u003e(a,b)ar(d-\u003e(a',b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:funR",
      "description": {
        "fct-descr": "\u003cp\u003eExtract function from result.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(a -\u003e c -\u003e b) `ar` (c -\u003e a -\u003e b)",
        "fct-source": "src/Control-Arrow-DeepArrow.html#funR",
        "fct-type": "method",
        "title": "funR"
      },
      "index": {
        "description": "Extract function from result",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "funR",
        "normalized": "(a-\u003eb-\u003ec)d(b-\u003ea-\u003ec)",
        "package": "DeepArrow",
        "partial": "",
        "signature": "(a-\u003ec-\u003eb)ar(c-\u003ea-\u003eb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:funRFun",
      "description": {
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "h (a -\u003e c -\u003e b) -\u003e h (c -\u003e a -\u003e b)",
        "fct-source": "src/Control-Arrow-DeepArrow.html#funRFun",
        "fct-type": "method",
        "title": "funRFun"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "funRFun",
        "normalized": "a(b-\u003ec-\u003ed)-\u003ea(c-\u003eb-\u003ed)",
        "package": "DeepArrow",
        "partial": "RFun",
        "signature": "h(a-\u003ec-\u003eb)-\u003eh(c-\u003ea-\u003eb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:funResult",
      "description": {
        "fct-descr": "\u003cp\u003ePromote a function extractor into one that reaches into the result\n element of a function.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(b `ar` (d -\u003e b')) -\u003e (a -\u003e b) `ar` (d -\u003e a -\u003e b')",
        "fct-source": "src/Control-Arrow-DeepArrow.html#funResult",
        "fct-type": "function",
        "title": "funResult"
      },
      "index": {
        "description": "Promote function extractor into one that reaches into the result element of function",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "funResult",
        "normalized": "(a b(c-\u003ed))-\u003e(e-\u003ea)b(c-\u003ee-\u003ed)",
        "package": "DeepArrow",
        "partial": "Result",
        "signature": "(b ar(d-\u003eb'))-\u003e(a-\u003eb)ar(d-\u003ea-\u003eb')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:funS",
      "description": {
        "fct-descr": "\u003cp\u003eExtract function from second element.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(a, c -\u003e b) `ar` (c -\u003e (a, b))",
        "fct-source": "src/Control-Arrow-DeepArrow.html#funS",
        "fct-type": "method",
        "title": "funS"
      },
      "index": {
        "description": "Extract function from second element",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "funS",
        "normalized": "(a,b-\u003ec)d(b-\u003e(a,c))",
        "package": "DeepArrow",
        "partial": "",
        "signature": "(a,c-\u003eb)ar(c-\u003e(a,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:funSFun",
      "description": {
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "h (a, c -\u003e b) -\u003e h (c -\u003e (a, b))",
        "fct-source": "src/Control-Arrow-DeepArrow.html#funSFun",
        "fct-type": "method",
        "title": "funSFun"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "funSFun",
        "normalized": "a(b,c-\u003ed)-\u003ea(c-\u003e(b,d))",
        "package": "DeepArrow",
        "partial": "SFun",
        "signature": "h(a,c-\u003eb)-\u003eh(c-\u003e(a,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:funSecond",
      "description": {
        "fct-descr": "\u003cp\u003ePromote a function extractor into one that reaches into the second\n element of a pair.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(b `ar` (d -\u003e b')) -\u003e (a, b) `ar` (d -\u003e (a, b'))",
        "fct-source": "src/Control-Arrow-DeepArrow.html#funSecond",
        "fct-type": "function",
        "title": "funSecond"
      },
      "index": {
        "description": "Promote function extractor into one that reaches into the second element of pair",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "funSecond",
        "normalized": "(a b(c-\u003ed))-\u003e(e,a)b(c-\u003e(e,d))",
        "package": "DeepArrow",
        "partial": "Second",
        "signature": "(b ar(d-\u003eb'))-\u003e(a,b)ar(d-\u003e(a,b'))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:inpF",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the first component of a pair input.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "((a, b) -\u003e c) `ar` (a -\u003e b -\u003e c)",
        "fct-source": "src/Control-Arrow-DeepArrow.html#inpF",
        "fct-type": "function",
        "title": "inpF"
      },
      "index": {
        "description": "Extract the first component of pair input",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "inpF",
        "normalized": "((a,b)-\u003ec)d(a-\u003eb-\u003ec)",
        "package": "DeepArrow",
        "partial": "",
        "signature": "((a,b)-\u003ec)ar(a-\u003eb-\u003ec)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:inpFirst",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a way to extract a \u003ccode\u003ed\u003c/code\u003e input from an \u003ccode\u003ea\u003c/code\u003e input, leaving an \u003ccode\u003ea'\u003c/code\u003e\n residual input, \u003ccode\u003e\u003ca\u003einpFirst\u003c/a\u003e\u003c/code\u003e yields a way to extract a \u003ccode\u003ed\u003c/code\u003e input from an\n \u003ccode\u003e(a,b)\u003c/code\u003e input, leaving an \u003ccode\u003e(a',b)\u003c/code\u003e residual input.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "((a -\u003e c) `ar` (d -\u003e a' -\u003e c)) -\u003e ((a, b) -\u003e c) `ar` (d -\u003e (a', b) -\u003e c)",
        "fct-source": "src/Control-Arrow-DeepArrow.html#inpFirst",
        "fct-type": "function",
        "title": "inpFirst"
      },
      "index": {
        "description": "Given way to extract input from an input leaving an residual input inpFirst yields way to extract input from an input leaving an residual input",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "inpFirst",
        "normalized": "((a-\u003eb)c(d-\u003ee-\u003eb))-\u003e((a,f)-\u003eb)c(d-\u003e(e,f)-\u003eb)",
        "package": "DeepArrow",
        "partial": "First",
        "signature": "((a-\u003ec)ar(d-\u003ea'-\u003ec))-\u003e((a,b)-\u003ec)ar(d-\u003e(a',b)-\u003ec)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:inpS",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the second component of a pair input.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "((a, b) -\u003e c) `ar` (b -\u003e a -\u003e c)",
        "fct-source": "src/Control-Arrow-DeepArrow.html#inpS",
        "fct-type": "function",
        "title": "inpS"
      },
      "index": {
        "description": "Extract the second component of pair input",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "inpS",
        "normalized": "((a,b)-\u003ec)d(b-\u003ea-\u003ec)",
        "package": "DeepArrow",
        "partial": "",
        "signature": "((a,b)-\u003ec)ar(b-\u003ea-\u003ec)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:inpSecond",
      "description": {
        "fct-descr": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003einpFirst\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "((b -\u003e c) `ar` (d -\u003e b' -\u003e c)) -\u003e ((a, b) -\u003e c) `ar` (d -\u003e (a, b') -\u003e c)",
        "fct-source": "src/Control-Arrow-DeepArrow.html#inpSecond",
        "fct-type": "function",
        "title": "inpSecond"
      },
      "index": {
        "description": "Analogous to inpFirst",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "inpSecond",
        "normalized": "((a-\u003eb)c(d-\u003ee-\u003eb))-\u003e((f,a)-\u003eb)c(d-\u003e(f,e)-\u003eb)",
        "package": "DeepArrow",
        "partial": "Second",
        "signature": "((b-\u003ec)ar(d-\u003eb'-\u003ec))-\u003e((a,b)-\u003ec)ar(d-\u003e(a,b')-\u003ec)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:lAssocA",
      "description": {
        "fct-descr": "\u003cp\u003eLeft-associate.  Has default.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(a, (b, c)) `ar` ((a, b), c)",
        "fct-source": "src/Control-Arrow-DeepArrow.html#lAssocA",
        "fct-type": "method",
        "title": "lAssocA"
      },
      "index": {
        "description": "Left-associate Has default",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "lAssocA",
        "normalized": "(a,(b,c))d((a,b),c)",
        "package": "DeepArrow",
        "partial": "Assoc",
        "signature": "(a,(b,c))ar((a,b),c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:lAssocAFun",
      "description": {
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "h (a, (b, c)) -\u003e h ((a, b), c)",
        "fct-source": "src/Control-Arrow-DeepArrow.html#lAssocAFun",
        "fct-type": "method",
        "title": "lAssocAFun"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "lAssocAFun",
        "normalized": "a(b,(c,d))-\u003ea((b,c),d)",
        "package": "DeepArrow",
        "partial": "Assoc AFun",
        "signature": "h(a,(b,c))-\u003eh((a,b),c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:rAssocA",
      "description": {
        "fct-descr": "\u003cp\u003eRight-associate.  Has default.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "((a, b), c) `ar` (a, (b, c))",
        "fct-source": "src/Control-Arrow-DeepArrow.html#rAssocA",
        "fct-type": "method",
        "title": "rAssocA"
      },
      "index": {
        "description": "Right-associate Has default",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "rAssocA",
        "normalized": "((a,b),c)d(a,(b,c))",
        "package": "DeepArrow",
        "partial": "Assoc",
        "signature": "((a,b),c)ar(a,(b,c))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:rAssocAFun",
      "description": {
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "h ((a, b), c) -\u003e h (a, (b, c))",
        "fct-source": "src/Control-Arrow-DeepArrow.html#rAssocAFun",
        "fct-type": "method",
        "title": "rAssocAFun"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "rAssocAFun",
        "normalized": "a((b,c),d)-\u003ea(b,(c,d))",
        "package": "DeepArrow",
        "partial": "Assoc AFun",
        "signature": "h((a,b),c)-\u003eh(a,(b,c))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:result",
      "description": {
        "fct-descr": "\u003cp\u003eDirect arrow into a function's result.  Analogous to \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003esecond\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(b `ar` b') -\u003e (a -\u003e b) `ar` (a -\u003e b')",
        "fct-source": "src/Control-Arrow-DeepArrow.html#result",
        "fct-type": "method",
        "title": "result"
      },
      "index": {
        "description": "Direct arrow into function result Analogous to first and second",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "result",
        "normalized": "(a b c)-\u003e(d-\u003ea)b(d-\u003ec)",
        "package": "DeepArrow",
        "partial": "",
        "signature": "(b ar b')-\u003e(a-\u003eb)ar(a-\u003eb')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:resultFun",
      "description": {
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(h b -\u003e h b') -\u003e h (a -\u003e b) -\u003e h (a -\u003e b')",
        "fct-source": "src/Control-Arrow-DeepArrow.html#resultFun",
        "fct-type": "method",
        "title": "resultFun"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "resultFun",
        "normalized": "(a b-\u003ea c)-\u003ea(d-\u003eb)-\u003ea(d-\u003ec)",
        "package": "DeepArrow",
        "partial": "Fun",
        "signature": "(h b-\u003eh b')-\u003eh(a-\u003eb)-\u003eh(a-\u003eb')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:sndA",
      "description": {
        "fct-descr": "\u003cp\u003eExtract second.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(a, b) `ar` b",
        "fct-source": "src/Control-Arrow-DeepArrow.html#sndA",
        "fct-type": "method",
        "title": "sndA"
      },
      "index": {
        "description": "Extract second",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "sndA",
        "normalized": "(a,b)c b",
        "package": "DeepArrow",
        "partial": "",
        "signature": "(a,b)ar b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:sndAFun",
      "description": {
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "h (a, b) -\u003e h b",
        "fct-source": "src/Control-Arrow-DeepArrow.html#sndAFun",
        "fct-type": "method",
        "title": "sndAFun"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "sndAFun",
        "normalized": "a(b,c)-\u003ea c",
        "package": "DeepArrow",
        "partial": "AFun",
        "signature": "h(a,b)-\u003eh b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:swapA",
      "description": {
        "fct-descr": "\u003cp\u003eSwap elements.  Has default.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(a, b) `ar` (b, a)",
        "fct-source": "src/Control-Arrow-DeepArrow.html#swapA",
        "fct-type": "method",
        "title": "swapA"
      },
      "index": {
        "description": "Swap elements Has default",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "swapA",
        "normalized": "(a,b)c(b,a)",
        "package": "DeepArrow",
        "partial": "",
        "signature": "(a,b)ar(b,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:swapAFun",
      "description": {
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "h (a, b) -\u003e h (b, a)",
        "fct-source": "src/Control-Arrow-DeepArrow.html#swapAFun",
        "fct-type": "method",
        "title": "swapAFun"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "swapAFun",
        "normalized": "a(b,c)-\u003ea(c,b)",
        "package": "DeepArrow",
        "partial": "AFun",
        "signature": "h(a,b)-\u003eh(b,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:uncurryA",
      "description": {
        "fct-descr": "\u003cp\u003eUncurry arrow.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(a -\u003e b -\u003e c) `ar` ((a, b) -\u003e c)",
        "fct-source": "src/Control-Arrow-DeepArrow.html#uncurryA",
        "fct-type": "method",
        "title": "uncurryA"
      },
      "index": {
        "description": "Uncurry arrow",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "uncurryA",
        "normalized": "(a-\u003eb-\u003ec)d((a,b)-\u003ec)",
        "package": "DeepArrow",
        "partial": "",
        "signature": "(a-\u003eb-\u003ec)ar((a,b)-\u003ec)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:uncurryAFun",
      "description": {
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "h (a -\u003e b -\u003e c) -\u003e h ((a, b) -\u003e c)",
        "fct-source": "src/Control-Arrow-DeepArrow.html#uncurryAFun",
        "fct-type": "method",
        "title": "uncurryAFun"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "uncurryAFun",
        "normalized": "a(b-\u003ec-\u003ed)-\u003ea((b,c)-\u003ed)",
        "package": "DeepArrow",
        "partial": "AFun",
        "signature": "h(a-\u003eb-\u003ec)-\u003eh((a,b)-\u003ec)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:unzipA",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e but for \u003ccode\u003e\u003ca\u003eDeepArrow\u003c/a\u003e\u003c/code\u003e arrows instead of lists.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.DeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(a `ar` (b, c)) -\u003e (a `ar` b, a `ar` c)",
        "fct-source": "src/Control-Arrow-DeepArrow.html#unzipA",
        "fct-type": "function",
        "title": "unzipA"
      },
      "index": {
        "description": "Like unzip but for DeepArrow arrows instead of lists",
        "hierarchy": "Control Arrow DeepArrow",
        "module": "Control.Arrow.DeepArrow",
        "name": "unzipA",
        "normalized": "(a b(c,d))-\u003e(a b c,a b d)",
        "package": "DeepArrow",
        "partial": "",
        "signature": "(a ar(b,c))-\u003e(a ar b,a ar c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\"Deep arrows\" as a data type.  Handy for code generation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.DDeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "module",
        "fct-source": "src/Data-DDeepArrow.html",
        "fct-type": "module",
        "title": "DDeepArrow"
      },
      "index": {
        "description": "Deep arrows as data type Handy for code generation",
        "hierarchy": "Data DDeepArrow",
        "module": "Data.DDeepArrow",
        "name": "DDeepArrow",
        "normalized": "",
        "package": "DeepArrow",
        "partial": "DDeep Arrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#t:DArrow",
      "description": {
        "fct-descr": "\u003cp\u003eThis GADT mirrors the \u003ccode\u003e\u003ca\u003eDeepArrow\u003c/a\u003e\u003c/code\u003e class and part of the \u003ccode\u003e\u003ca\u003eFunArr\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
        "fct-module": "Data.DDeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "data",
        "fct-source": "src/Data-DDeepArrow.html#DArrow",
        "fct-type": "data",
        "title": "DArrow"
      },
      "index": {
        "description": "This GADT mirrors the DeepArrow class and part of the FunArr class",
        "hierarchy": "Data DDeepArrow",
        "module": "Data.DDeepArrow",
        "name": "DArrow",
        "normalized": "",
        "package": "DeepArrow",
        "partial": "DArrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#t:DVal",
      "description": {
        "fct-descr": "\u003cp\u003eA GADT alternative to terms.  Allows generation of Haskell terms and,\n from there, strings and eval. \n\u003c/p\u003e",
        "fct-module": "Data.DDeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "data",
        "fct-source": "src/Data-DDeepArrow.html#DVal",
        "fct-type": "data",
        "title": "DVal"
      },
      "index": {
        "description": "GADT alternative to terms Allows generation of Haskell terms and from there strings and eval",
        "hierarchy": "Data DDeepArrow",
        "module": "Data.DDeepArrow",
        "name": "DVal",
        "normalized": "",
        "package": "DeepArrow",
        "partial": "DVal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:AppDA",
      "description": {
        "fct-module": "Data.DDeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(a `DArrow` b) -\u003e DVal a -\u003e DVal b",
        "fct-source": "src/Data-DDeepArrow.html#DVal",
        "fct-type": "function",
        "title": "AppDA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DDeepArrow",
        "module": "Data.DDeepArrow",
        "name": "AppDA",
        "normalized": "(a DArrow b)-\u003eDVal a-\u003eDVal b",
        "package": "DeepArrow",
        "partial": "App DA",
        "signature": "(a DArrow b)-\u003eDVal a-\u003eDVal b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:Arr",
      "description": {
        "fct-module": "Data.DDeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "DVal (a -\u003e b) -\u003e a `DArrow` b",
        "fct-source": "src/Data-DDeepArrow.html#DArrow",
        "fct-type": "function",
        "title": "Arr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DDeepArrow",
        "module": "Data.DDeepArrow",
        "name": "Arr",
        "normalized": "DVal(a-\u003eb)-\u003ea DArrow b",
        "package": "DeepArrow",
        "partial": "Arr",
        "signature": "DVal(a-\u003eb)-\u003ea DArrow b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:Compose",
      "description": {
        "fct-module": "Data.DDeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(a `DArrow` b) -\u003e (b `DArrow` c) -\u003e a `DArrow` c",
        "fct-source": "src/Data-DDeepArrow.html#DArrow",
        "fct-type": "function",
        "title": "Compose"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DDeepArrow",
        "module": "Data.DDeepArrow",
        "name": "Compose",
        "normalized": "(a DArrow b)-\u003e(b DArrow c)-\u003ea DArrow c",
        "package": "DeepArrow",
        "partial": "Compose",
        "signature": "(a DArrow b)-\u003e(b DArrow c)-\u003ea DArrow c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:CurryA",
      "description": {
        "fct-module": "Data.DDeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "((a, b) -\u003e c) `DArrow` (a -\u003e b -\u003e c)",
        "fct-source": "src/Data-DDeepArrow.html#DArrow",
        "fct-type": "function",
        "title": "CurryA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DDeepArrow",
        "module": "Data.DDeepArrow",
        "name": "CurryA",
        "normalized": "((a,b)-\u003ec)DArrow(a-\u003eb-\u003ec)",
        "package": "DeepArrow",
        "partial": "Curry",
        "signature": "((a,b)-\u003ec)DArrow(a-\u003eb-\u003ec)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:DupA",
      "description": {
        "fct-module": "Data.DDeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "a `DArrow` (a, a)",
        "fct-source": "src/Data-DDeepArrow.html#DArrow",
        "fct-type": "function",
        "title": "DupA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DDeepArrow",
        "module": "Data.DDeepArrow",
        "name": "DupA",
        "normalized": "a DArrow(a,a)",
        "package": "DeepArrow",
        "partial": "Dup",
        "signature": "a DArrow(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:ExpDV",
      "description": {
        "fct-module": "Data.DDeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "HsExp -\u003e DVal a",
        "fct-source": "src/Data-DDeepArrow.html#DVal",
        "fct-type": "function",
        "title": "ExpDV"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DDeepArrow",
        "module": "Data.DDeepArrow",
        "name": "ExpDV",
        "normalized": "HsExp-\u003eDVal a",
        "package": "DeepArrow",
        "partial": "Exp DV",
        "signature": "HsExp-\u003eDVal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:First",
      "description": {
        "fct-module": "Data.DDeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(a `DArrow` a') -\u003e (a, b) `DArrow` (a', b)",
        "fct-source": "src/Data-DDeepArrow.html#DArrow",
        "fct-type": "function",
        "title": "First"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DDeepArrow",
        "module": "Data.DDeepArrow",
        "name": "First",
        "normalized": "(a DArrow b)-\u003e(a,c)DArrow(b,c)",
        "package": "DeepArrow",
        "partial": "First",
        "signature": "(a DArrow a')-\u003e(a,b)DArrow(a',b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:FstA",
      "description": {
        "fct-module": "Data.DDeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(a, b) `DArrow` a",
        "fct-source": "src/Data-DDeepArrow.html#DArrow",
        "fct-type": "function",
        "title": "FstA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DDeepArrow",
        "module": "Data.DDeepArrow",
        "name": "FstA",
        "normalized": "(a,b)DArrow a",
        "package": "DeepArrow",
        "partial": "Fst",
        "signature": "(a,b)DArrow a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:FunF",
      "description": {
        "fct-module": "Data.DDeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(c -\u003e a, b) `DArrow` (c -\u003e (a, b))",
        "fct-source": "src/Data-DDeepArrow.html#DArrow",
        "fct-type": "function",
        "title": "FunF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DDeepArrow",
        "module": "Data.DDeepArrow",
        "name": "FunF",
        "normalized": "(a-\u003eb,c)DArrow(a-\u003e(b,c))",
        "package": "DeepArrow",
        "partial": "Fun",
        "signature": "(c-\u003ea,b)DArrow(c-\u003e(a,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:FunR",
      "description": {
        "fct-module": "Data.DDeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(a -\u003e c -\u003e b) `DArrow` (c -\u003e a -\u003e b)",
        "fct-source": "src/Data-DDeepArrow.html#DArrow",
        "fct-type": "function",
        "title": "FunR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DDeepArrow",
        "module": "Data.DDeepArrow",
        "name": "FunR",
        "normalized": "(a-\u003eb-\u003ec)DArrow(b-\u003ea-\u003ec)",
        "package": "DeepArrow",
        "partial": "Fun",
        "signature": "(a-\u003ec-\u003eb)DArrow(c-\u003ea-\u003eb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:FunS",
      "description": {
        "fct-module": "Data.DDeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(a, c -\u003e b) `DArrow` (c -\u003e (a, b))",
        "fct-source": "src/Data-DDeepArrow.html#DArrow",
        "fct-type": "function",
        "title": "FunS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DDeepArrow",
        "module": "Data.DDeepArrow",
        "name": "FunS",
        "normalized": "(a,b-\u003ec)DArrow(b-\u003e(a,c))",
        "package": "DeepArrow",
        "partial": "Fun",
        "signature": "(a,c-\u003eb)DArrow(c-\u003e(a,b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:IdA",
      "description": {
        "fct-module": "Data.DDeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "a `DArrow` a",
        "fct-source": "src/Data-DDeepArrow.html#DArrow",
        "fct-type": "function",
        "title": "IdA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DDeepArrow",
        "module": "Data.DDeepArrow",
        "name": "IdA",
        "normalized": "",
        "package": "DeepArrow",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:LAssocA",
      "description": {
        "fct-module": "Data.DDeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(a, (b, c)) `DArrow` ((a, b), c)",
        "fct-source": "src/Data-DDeepArrow.html#DArrow",
        "fct-type": "function",
        "title": "LAssocA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DDeepArrow",
        "module": "Data.DDeepArrow",
        "name": "LAssocA",
        "normalized": "(a,(b,c))DArrow((a,b),c)",
        "package": "DeepArrow",
        "partial": "LAssoc",
        "signature": "(a,(b,c))DArrow((a,b),c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:RAssocA",
      "description": {
        "fct-module": "Data.DDeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "((a, b), c) `DArrow` (a, (b, c))",
        "fct-source": "src/Data-DDeepArrow.html#DArrow",
        "fct-type": "function",
        "title": "RAssocA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DDeepArrow",
        "module": "Data.DDeepArrow",
        "name": "RAssocA",
        "normalized": "((a,b),c)DArrow(a,(b,c))",
        "package": "DeepArrow",
        "partial": "RAssoc",
        "signature": "((a,b),c)DArrow(a,(b,c))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:Result",
      "description": {
        "fct-module": "Data.DDeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(b `DArrow` b') -\u003e (a -\u003e b) `DArrow` (a -\u003e b')",
        "fct-source": "src/Data-DDeepArrow.html#DArrow",
        "fct-type": "function",
        "title": "Result"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DDeepArrow",
        "module": "Data.DDeepArrow",
        "name": "Result",
        "normalized": "(a DArrow b)-\u003e(c-\u003ea)DArrow(c-\u003eb)",
        "package": "DeepArrow",
        "partial": "Result",
        "signature": "(b DArrow b')-\u003e(a-\u003eb)DArrow(a-\u003eb')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:Second",
      "description": {
        "fct-module": "Data.DDeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(b `DArrow` b') -\u003e (a, b) `DArrow` (a, b')",
        "fct-source": "src/Data-DDeepArrow.html#DArrow",
        "fct-type": "function",
        "title": "Second"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DDeepArrow",
        "module": "Data.DDeepArrow",
        "name": "Second",
        "normalized": "(a DArrow b)-\u003e(c,a)DArrow(c,b)",
        "package": "DeepArrow",
        "partial": "Second",
        "signature": "(b DArrow b')-\u003e(a,b)DArrow(a,b')"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:SndA",
      "description": {
        "fct-module": "Data.DDeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(a, b) `DArrow` b",
        "fct-source": "src/Data-DDeepArrow.html#DArrow",
        "fct-type": "function",
        "title": "SndA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DDeepArrow",
        "module": "Data.DDeepArrow",
        "name": "SndA",
        "normalized": "(a,b)DArrow b",
        "package": "DeepArrow",
        "partial": "Snd",
        "signature": "(a,b)DArrow b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:SwapA",
      "description": {
        "fct-module": "Data.DDeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(a, b) `DArrow` (b, a)",
        "fct-source": "src/Data-DDeepArrow.html#DArrow",
        "fct-type": "function",
        "title": "SwapA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DDeepArrow",
        "module": "Data.DDeepArrow",
        "name": "SwapA",
        "normalized": "(a,b)DArrow(b,a)",
        "package": "DeepArrow",
        "partial": "Swap",
        "signature": "(a,b)DArrow(b,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:UncurryA",
      "description": {
        "fct-module": "Data.DDeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "(a -\u003e b -\u003e c) `DArrow` ((a, b) -\u003e c)",
        "fct-source": "src/Data-DDeepArrow.html#DArrow",
        "fct-type": "function",
        "title": "UncurryA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DDeepArrow",
        "module": "Data.DDeepArrow",
        "name": "UncurryA",
        "normalized": "(a-\u003eb-\u003ec)DArrow((a,b)-\u003ec)",
        "package": "DeepArrow",
        "partial": "Uncurry",
        "signature": "(a-\u003eb-\u003ec)DArrow((a,b)-\u003ec)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:ZipDV",
      "description": {
        "fct-module": "Data.DDeepArrow",
        "fct-package": "DeepArrow",
        "fct-signature": "DVal a -\u003e DVal b -\u003e DVal (a, b)",
        "fct-source": "src/Data-DDeepArrow.html#DVal",
        "fct-type": "function",
        "title": "ZipDV"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DDeepArrow",
        "module": "Data.DDeepArrow",
        "name": "ZipDV",
        "normalized": "DVal a-\u003eDVal b-\u003eDVal(a,b)",
        "package": "DeepArrow",
        "partial": "Zip DV",
        "signature": "DVal a-\u003eDVal b-\u003eDVal(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-FunArr.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConversion between arrow values and wrapped functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.FunArr",
        "fct-package": "DeepArrow",
        "fct-signature": "module",
        "fct-source": "src/Data-FunArr.html",
        "fct-type": "module",
        "title": "FunArr"
      },
      "index": {
        "description": "Conversion between arrow values and wrapped functions",
        "hierarchy": "Data FunArr",
        "module": "Data.FunArr",
        "name": "FunArr",
        "normalized": "",
        "package": "DeepArrow",
        "partial": "Fun Arr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-FunArr.html#t:FunArr",
      "description": {
        "fct-descr": "\u003cp\u003eConvert between an arrow value and a \"wrapped function\".  The \"arrow\"\n doesn't really have to be an arrow.  I'd appreciate ideas for names &\n uses.\n\u003c/p\u003e",
        "fct-module": "Data.FunArr",
        "fct-package": "DeepArrow",
        "fct-signature": "class",
        "fct-source": "src/Data-FunArr.html#FunArr",
        "fct-type": "class",
        "title": "FunArr"
      },
      "index": {
        "description": "Convert between an arrow value and wrapped function The arrow doesn really have to be an arrow appreciate ideas for names uses",
        "hierarchy": "Data FunArr",
        "module": "Data.FunArr",
        "name": "FunArr",
        "normalized": "",
        "package": "DeepArrow",
        "partial": "Fun Arr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-FunArr.html#v:-36--36-",
      "description": {
        "fct-descr": "\u003cp\u003eApply an arrow to a \u003ccode\u003ew\u003c/code\u003e-wrapped value\n\u003c/p\u003e",
        "fct-module": "Data.FunArr",
        "fct-package": "DeepArrow",
        "fct-signature": "(a `ar` b) -\u003e w a -\u003e w b",
        "fct-source": "src/Data-FunArr.html#%24%24",
        "fct-type": "method",
        "title": "($$)"
      },
      "index": {
        "description": "Apply an arrow to wrapped value",
        "hierarchy": "Data FunArr",
        "module": "Data.FunArr",
        "name": "($$) $$",
        "normalized": "(a b c)-\u003ed a-\u003ed c",
        "package": "DeepArrow",
        "partial": "",
        "signature": "(a ar b)-\u003ew a-\u003ew b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-FunArr.html#v:toArr",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003ew\u003c/code\u003e-wrapped function to an arrow value\n\u003c/p\u003e",
        "fct-module": "Data.FunArr",
        "fct-package": "DeepArrow",
        "fct-signature": "w (a -\u003e b) -\u003e a `ar` b",
        "fct-source": "src/Data-FunArr.html#toArr",
        "fct-type": "method",
        "title": "toArr"
      },
      "index": {
        "description": "Convert wrapped function to an arrow value",
        "hierarchy": "Data FunArr",
        "module": "Data.FunArr",
        "name": "toArr",
        "normalized": "a(b-\u003ec)-\u003eb d c",
        "package": "DeepArrow",
        "partial": "Arr",
        "signature": "w(a-\u003eb)-\u003ea ar b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-Parens.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInsert parens where necessary in Haskell expressions.\n Inspired by Sigbjorn Finne's Pan pretty-printer.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Haskell.Parens",
        "fct-package": "DeepArrow",
        "fct-signature": "module",
        "fct-source": "src/Language-Haskell-Parens.html",
        "fct-type": "module",
        "title": "Parens"
      },
      "index": {
        "description": "Insert parens where necessary in Haskell expressions Inspired by Sigbjorn Finne Pan pretty-printer",
        "hierarchy": "Language Haskell Parens",
        "module": "Language.Haskell.Parens",
        "name": "Parens",
        "normalized": "",
        "package": "DeepArrow",
        "partial": "Parens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-Parens.html#t:Cify",
      "description": {
        "fct-module": "Language.Haskell.Parens",
        "fct-package": "DeepArrow",
        "fct-signature": "type",
        "fct-source": "src/Language-Haskell-Parens.html#Cify",
        "fct-type": "type",
        "title": "Cify"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Parens",
        "module": "Language.Haskell.Parens",
        "name": "Cify",
        "normalized": "",
        "package": "DeepArrow",
        "partial": "Cify",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-Parens.html#v:cifyExp",
      "description": {
        "fct-module": "Language.Haskell.Parens",
        "fct-package": "DeepArrow",
        "fct-signature": "Cify HsExp",
        "fct-source": "src/Language-Haskell-Parens.html#cifyExp",
        "fct-type": "function",
        "title": "cifyExp"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Parens",
        "module": "Language.Haskell.Parens",
        "name": "cifyExp",
        "normalized": "",
        "package": "DeepArrow",
        "partial": "Exp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-Parens.html#v:hasOpInfo",
      "description": {
        "fct-module": "Language.Haskell.Parens",
        "fct-package": "DeepArrow",
        "fct-signature": "HsName -\u003e Bool",
        "fct-source": "src/Language-Haskell-Parens.html#hasOpInfo",
        "fct-type": "function",
        "title": "hasOpInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Parens",
        "module": "Language.Haskell.Parens",
        "name": "hasOpInfo",
        "normalized": "HsName-\u003eBool",
        "package": "DeepArrow",
        "partial": "Op Info",
        "signature": "HsName-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-Parens.html#v:pretty",
      "description": {
        "fct-module": "Language.Haskell.Parens",
        "fct-package": "DeepArrow",
        "fct-signature": "HsExp -\u003e String",
        "fct-source": "src/Language-Haskell-Parens.html#pretty",
        "fct-type": "function",
        "title": "pretty"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Parens",
        "module": "Language.Haskell.Parens",
        "name": "pretty",
        "normalized": "HsExp-\u003eString",
        "package": "DeepArrow",
        "partial": "",
        "signature": "HsExp-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-Parens.html#v:unCify",
      "description": {
        "fct-module": "Language.Haskell.Parens",
        "fct-package": "DeepArrow",
        "fct-signature": "(Context -\u003e a) -\u003e a",
        "fct-source": "src/Language-Haskell-Parens.html#unCify",
        "fct-type": "function",
        "title": "unCify"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Parens",
        "module": "Language.Haskell.Parens",
        "name": "unCify",
        "normalized": "(Context-\u003ea)-\u003ea",
        "package": "DeepArrow",
        "partial": "Cify",
        "signature": "(Context-\u003ea)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-ToHs.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert values to Haskell abstract syntax\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Haskell.ToHs",
        "fct-package": "DeepArrow",
        "fct-signature": "module",
        "fct-source": "src/Language-Haskell-ToHs.html",
        "fct-type": "module",
        "title": "ToHs"
      },
      "index": {
        "description": "Convert values to Haskell abstract syntax",
        "hierarchy": "Language Haskell ToHs",
        "module": "Language.Haskell.ToHs",
        "name": "ToHs",
        "normalized": "",
        "package": "DeepArrow",
        "partial": "To Hs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-ToHs.html#t:ToHsExp",
      "description": {
        "fct-descr": "\u003cp\u003eConversion to Haskell expressions\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.ToHs",
        "fct-package": "DeepArrow",
        "fct-signature": "class",
        "fct-source": "src/Language-Haskell-ToHs.html#ToHsExp",
        "fct-type": "class",
        "title": "ToHsExp"
      },
      "index": {
        "description": "Conversion to Haskell expressions",
        "hierarchy": "Language Haskell ToHs",
        "module": "Language.Haskell.ToHs",
        "name": "ToHsExp",
        "normalized": "",
        "package": "DeepArrow",
        "partial": "To Hs Exp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-ToHs.html#v:infixApp",
      "description": {
        "fct-module": "Language.Haskell.ToHs",
        "fct-package": "DeepArrow",
        "fct-signature": "HsName -\u003e HsExp -\u003e HsExp -\u003e HsExp",
        "fct-source": "src/Language-Haskell-ToHs.html#infixApp",
        "fct-type": "function",
        "title": "infixApp"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell ToHs",
        "module": "Language.Haskell.ToHs",
        "name": "infixApp",
        "normalized": "HsName-\u003eHsExp-\u003eHsExp-\u003eHsExp",
        "package": "DeepArrow",
        "partial": "App",
        "signature": "HsName-\u003eHsExp-\u003eHsExp-\u003eHsExp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-ToHs.html#v:prettyAsHsExp",
      "description": {
        "fct-module": "Language.Haskell.ToHs",
        "fct-package": "DeepArrow",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Language-Haskell-ToHs.html#prettyAsHsExp",
        "fct-type": "function",
        "title": "prettyAsHsExp"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell ToHs",
        "module": "Language.Haskell.ToHs",
        "name": "prettyAsHsExp",
        "normalized": "a-\u003eString",
        "package": "DeepArrow",
        "partial": "As Hs Exp",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-ToHs.html#v:toHsApp1",
      "description": {
        "fct-module": "Language.Haskell.ToHs",
        "fct-package": "DeepArrow",
        "fct-signature": "String -\u003e a -\u003e HsExp",
        "fct-source": "src/Language-Haskell-ToHs.html#toHsApp1",
        "fct-type": "function",
        "title": "toHsApp1"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell ToHs",
        "module": "Language.Haskell.ToHs",
        "name": "toHsApp1",
        "normalized": "String-\u003ea-\u003eHsExp",
        "package": "DeepArrow",
        "partial": "Hs App",
        "signature": "String-\u003ea-\u003eHsExp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-ToHs.html#v:toHsApp2",
      "description": {
        "fct-module": "Language.Haskell.ToHs",
        "fct-package": "DeepArrow",
        "fct-signature": "String -\u003e a -\u003e b -\u003e HsExp",
        "fct-source": "src/Language-Haskell-ToHs.html#toHsApp2",
        "fct-type": "function",
        "title": "toHsApp2"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell ToHs",
        "module": "Language.Haskell.ToHs",
        "name": "toHsApp2",
        "normalized": "String-\u003ea-\u003eb-\u003eHsExp",
        "package": "DeepArrow",
        "partial": "Hs App",
        "signature": "String-\u003ea-\u003eb-\u003eHsExp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-ToHs.html#v:toHsExp",
      "description": {
        "fct-module": "Language.Haskell.ToHs",
        "fct-package": "DeepArrow",
        "fct-signature": "a -\u003e HsExp",
        "fct-source": "src/Language-Haskell-ToHs.html#toHsExp",
        "fct-type": "method",
        "title": "toHsExp"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell ToHs",
        "module": "Language.Haskell.ToHs",
        "name": "toHsExp",
        "normalized": "a-\u003eHsExp",
        "package": "DeepArrow",
        "partial": "Hs Exp",
        "signature": "a-\u003eHsExp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-ToHs.html#v:toHsInfix",
      "description": {
        "fct-module": "Language.Haskell.ToHs",
        "fct-package": "DeepArrow",
        "fct-signature": "HsName -\u003e a -\u003e b -\u003e HsExp",
        "fct-source": "src/Language-Haskell-ToHs.html#toHsInfix",
        "fct-type": "function",
        "title": "toHsInfix"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell ToHs",
        "module": "Language.Haskell.ToHs",
        "name": "toHsInfix",
        "normalized": "HsName-\u003ea-\u003eb-\u003eHsExp",
        "package": "DeepArrow",
        "partial": "Hs Infix",
        "signature": "HsName-\u003ea-\u003eb-\u003eHsExp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-ToHs.html#v:varid",
      "description": {
        "fct-module": "Language.Haskell.ToHs",
        "fct-package": "DeepArrow",
        "fct-signature": "String -\u003e HsExp",
        "fct-source": "src/Language-Haskell-ToHs.html#varid",
        "fct-type": "function",
        "title": "varid"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell ToHs",
        "module": "Language.Haskell.ToHs",
        "name": "varid",
        "normalized": "String-\u003eHsExp",
        "package": "DeepArrow",
        "partial": "",
        "signature": "String-\u003eHsExp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-ToHs.html#v:varsym",
      "description": {
        "fct-module": "Language.Haskell.ToHs",
        "fct-package": "DeepArrow",
        "fct-signature": "String -\u003e HsExp",
        "fct-source": "src/Language-Haskell-ToHs.html#varsym",
        "fct-type": "function",
        "title": "varsym"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell ToHs",
        "module": "Language.Haskell.ToHs",
        "name": "varsym",
        "normalized": "String-\u003eHsExp",
        "package": "DeepArrow",
        "partial": "",
        "signature": "String-\u003eHsExp"
      }
    }
  }
]