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
        "word": "DeepArrow"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeepArrow examples.\n\u003c/p\u003e\u003cp\u003eThe types in the source code are formatted for easier reading.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Arrow.DeepArrow.Examples",
          "name": "Examples",
          "package": "DeepArrow",
          "source": "src/Control-Arrow-DeepArrow-Examples.html",
          "type": "module"
        },
        "index": {
          "description": "DeepArrow examples The types in the source code are formatted for easier reading",
          "hierarchy": "Control Arrow DeepArrow Examples",
          "module": "Control.Arrow.DeepArrow.Examples",
          "name": "Examples",
          "package": "DeepArrow",
          "partial": "Examples",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow-Examples.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a value of type \u003ccode\u003e(a -\u003e (f,b -\u003e (c,g)),e)\u003c/code\u003e, apply a function to\n just the \u003ccode\u003ec\u003c/code\u003e part and leave the rest intact.\n\u003c/p\u003e\u003cpre\u003edeep = \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eresult\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003esecond\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003eresult\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Control.Arrow.DeepArrow.Examples",
          "name": "deep",
          "package": "DeepArrow",
          "signature": "(c `ar` c') -\u003e (a -\u003e (f, b -\u003e (c, g)), e) `ar` (a -\u003e (f, b -\u003e (c', g)), e)",
          "source": "src/Control-Arrow-DeepArrow-Examples.html#deep",
          "type": "function"
        },
        "index": {
          "description": "Given value of type apply function to just the part and leave the rest intact deep first result second result first",
          "hierarchy": "Control Arrow DeepArrow Examples",
          "module": "Control.Arrow.DeepArrow.Examples",
          "name": "deep",
          "normalized": "(a b c)-\u003e(d-\u003e(e,f-\u003e(a,g)),h)b(d-\u003e(e,f-\u003e(c,g)),h)",
          "package": "DeepArrow",
          "signature": "(c ar c')-\u003e(a-\u003e(f,b-\u003e(c,g)),e)ar(a-\u003e(f,b-\u003e(c',g)),e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow-Examples.html#v:deep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a way to extract a function from a \u003ccode\u003ed\u003c/code\u003e value, create a way to\n extract a function from a \u003ccode\u003e(e -\u003e (a,d), f)\u003c/code\u003e value.\n\u003c/p\u003e\u003cpre\u003eextF = \u003ccode\u003e\u003ca\u003efunFirst\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003efunResult\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003efunSecond\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Control.Arrow.DeepArrow.Examples",
          "name": "extF",
          "package": "DeepArrow",
          "signature": "(d `ar` (c -\u003e b)) -\u003e (e -\u003e (a, d), f) `ar` (c -\u003e (e -\u003e (a, b), f))",
          "source": "src/Control-Arrow-DeepArrow-Examples.html#extF",
          "type": "function"
        },
        "index": {
          "description": "Given way to extract function from value create way to extract function from value extF funFirst funResult funSecond",
          "hierarchy": "Control Arrow DeepArrow Examples",
          "module": "Control.Arrow.DeepArrow.Examples",
          "name": "extF",
          "normalized": "(a b(c-\u003ed))-\u003e(e-\u003e(f,a),g)b(c-\u003e(e-\u003e(f,d),g))",
          "package": "DeepArrow",
          "signature": "(d ar(c-\u003eb))-\u003e(e-\u003e(a,d),f)ar(c-\u003e(e-\u003e(a,b),f))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow-Examples.html#v:extF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo make an extractor, simply apply the extractor-transformer \u003ccode\u003e\u003ca\u003eextF\u003c/a\u003e\u003c/code\u003e\n to the identity arrow.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eextFF\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eextF\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eidA\u003c/code\u003e\u003c/pre\u003e",
          "module": "Control.Arrow.DeepArrow.Examples",
          "name": "extFF",
          "package": "DeepArrow",
          "signature": "(e -\u003e (a, c -\u003e b), f) `ar` (c -\u003e (e -\u003e (a, b), f))",
          "source": "src/Control-Arrow-DeepArrow-Examples.html#extFF",
          "type": "function"
        },
        "index": {
          "description": "To make an extractor simply apply the extractor-transformer extF to the identity arrow extFF extF idA",
          "hierarchy": "Control Arrow DeepArrow Examples",
          "module": "Control.Arrow.DeepArrow.Examples",
          "name": "extFF",
          "normalized": "(a-\u003e(b,c-\u003ed),e)f(c-\u003e(a-\u003e(b,d),e))",
          "package": "DeepArrow",
          "partial": "FF",
          "signature": "(e-\u003e(a,c-\u003eb),f)ar(c-\u003e(e-\u003e(a,b),f))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow-Examples.html#v:extFF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypically, we will have to combine function and input extractors.\n For instance, combine \u003ccode\u003e\u003ca\u003eextF\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eextI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003eextFI = \u003ccode\u003e\u003ca\u003eextF\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eextI\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Control.Arrow.DeepArrow.Examples",
          "name": "extFI",
          "package": "DeepArrow",
          "signature": "(e -\u003e (g, ((a, (b, e)), c) -\u003e d), f) `ar` (b -\u003e (e -\u003e (g, ((a, e), c) -\u003e d), f))",
          "source": "src/Control-Arrow-DeepArrow-Examples.html#extFI",
          "type": "function"
        },
        "index": {
          "description": "Typically we will have to combine function and input extractors For instance combine extF and extI extFI extF extI",
          "hierarchy": "Control Arrow DeepArrow Examples",
          "module": "Control.Arrow.DeepArrow.Examples",
          "name": "extFI",
          "normalized": "(a-\u003e(b,((c,(d,a)),e)-\u003ef),g)h(d-\u003e(a-\u003e(b,((c,a),e)-\u003ef),g))",
          "package": "DeepArrow",
          "partial": "FI",
          "signature": "(e-\u003e(g,((a,(b,e)),c)-\u003ed),f)ar(b-\u003e(e-\u003e(g,((a,e),c)-\u003ed),f))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow-Examples.html#v:extFI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a \u003ccode\u003eb\u003c/code\u003e input from a \u003ccode\u003e((a,(b,e)),c)\u003c/code\u003e argument.\n\u003c/p\u003e\u003cpre\u003eextI = (\u003ccode\u003e\u003ca\u003einpFirst\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003einpSecond\u003c/a\u003e\u003c/code\u003e) \u003ccode\u003e\u003ca\u003einpF\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Control.Arrow.DeepArrow.Examples",
          "name": "extI",
          "package": "DeepArrow",
          "signature": "(((a, (b, e)), c) -\u003e d) `ar` (b -\u003e ((a, e), c) -\u003e d)",
          "source": "src/Control-Arrow-DeepArrow-Examples.html#extI",
          "type": "function"
        },
        "index": {
          "description": "Extract input from argument extI inpFirst inpSecond inpF",
          "hierarchy": "Control Arrow DeepArrow Examples",
          "module": "Control.Arrow.DeepArrow.Examples",
          "name": "extI",
          "normalized": "(((a,(b,c)),d)-\u003ee)f(b-\u003e((a,c),d)-\u003ee)",
          "package": "DeepArrow",
          "signature": "(((a,(b,e)),c)-\u003ed)ar(b-\u003e((a,e),c)-\u003ed)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow-Examples.html#v:extI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\"Deep arrows\" as an \u003ccode\u003e\u003ca\u003eArrow\u003c/a\u003e\u003c/code\u003e subclass.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Arrow.DeepArrow",
          "name": "DeepArrow",
          "package": "DeepArrow",
          "source": "src/Control-Arrow-DeepArrow.html",
          "type": "module"
        },
        "index": {
          "description": "Deep arrows as an Arrow subclass",
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "DeepArrow",
          "package": "DeepArrow",
          "partial": "Deep Arrow",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArrows for deep application.  Most of these methods could be defined\nusing \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e, but \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e is not definable for some types.  If your\n\u003ccode\u003e\u003ca\u003eDeepArrow\u003c/a\u003e\u003c/code\u003e instance has \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e, you might want to use these\nimplementations\n\u003c/p\u003e\u003cpre\u003e\n    \u003ccode\u003e\u003ca\u003efstA\u003c/a\u003e\u003c/code\u003e     = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e\n    \u003ccode\u003e\u003ca\u003edupA\u003c/a\u003e\u003c/code\u003e     = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\\ x -\u003e (x,x))\n    \u003ccode\u003e\u003ca\u003esndA\u003c/a\u003e\u003c/code\u003e     = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e\n    \u003ccode\u003e\u003ca\u003efunF\u003c/a\u003e\u003c/code\u003e     = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\\ (f,b) -\u003e \\ c -\u003e (f c, b))\n    \u003ccode\u003e\u003ca\u003efunS\u003c/a\u003e\u003c/code\u003e     = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\\ (a,f) -\u003e \\ c -\u003e (a, f c))\n    \u003ccode\u003e\u003ca\u003efunR\u003c/a\u003e\u003c/code\u003e     = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eflip\u003c/a\u003e\u003c/code\u003e\n    \u003ccode\u003e\u003ca\u003ecurryA\u003c/a\u003e\u003c/code\u003e   = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ecurry\u003c/a\u003e\u003c/code\u003e\n    \u003ccode\u003e\u003ca\u003euncurryA\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e\n    \u003ccode\u003e\u003ca\u003eswapA\u003c/a\u003e\u003c/code\u003e    = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\\ (a,b) -\u003e (b,a))\n    \u003ccode\u003e\u003ca\u003elAssocA\u003c/a\u003e\u003c/code\u003e  = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\\ (a,(b,c)) -\u003e ((a,b),c))\n    \u003ccode\u003e\u003ca\u003erAssocA\u003c/a\u003e\u003c/code\u003e  = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\\ ((a,b),c) -\u003e (a,(b,c)))\n\u003c/pre\u003e\u003cp\u003eIf your \u003ccode\u003e\u003ca\u003eDeepArrow\u003c/a\u003e\u003c/code\u003e instance \u003cem\u003edoes not\u003c/em\u003e have \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e, you'll have to come up\nwith other definitions.  In any case, I recommend the following\ndefinitions, which mirror \u003ccode\u003e\u003ca\u003eArrow\u003c/a\u003e\u003c/code\u003e defaults while avoiding \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e.  Be sure\nalso to define \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003epure\u003c/code\u003e to yield an error message (rather than\nping-ponging infinitely between them via the \u003ccode\u003e\u003ca\u003eArrow\u003c/a\u003e\u003c/code\u003e default definitions).\n\u003c/p\u003e\u003cpre\u003e\n    \u003ccode\u003e\u003ca\u003esecond\u003c/a\u003e\u003c/code\u003e f = \u003ccode\u003e\u003ca\u003eswapA\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eswapA\u003c/a\u003e\u003c/code\u003e\n    f \u003ccode\u003e\u003ca\u003e&&&\u003c/a\u003e\u003c/code\u003e g  = \u003ccode\u003e\u003ca\u003edupA\u003c/a\u003e\u003c/code\u003e  \u003ccode\u003e\u003ca\u003e\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e f \u003ccode\u003e\u003ca\u003e***\u003c/a\u003e\u003c/code\u003e g\n\u003c/pre\u003e\u003cp\u003eIn a few cases, there are default methods, as noted below.  The\ndefaults do not use \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Arrow.DeepArrow",
          "name": "DeepArrow",
          "package": "DeepArrow",
          "source": "src/Control-Arrow-DeepArrow.html#DeepArrow",
          "type": "class"
        },
        "index": {
          "description": "Arrows for deep application Most of these methods could be defined using arr but arr is not definable for some types If your DeepArrow instance has arr you might want to use these implementations fstA arr fst dupA arr sndA arr snd funF arr funS arr funR arr flip curryA arr curry uncurryA arr uncurry swapA arr lAssocA arr rAssocA arr If your DeepArrow instance does not have arr you ll have to come up with other definitions In any case recommend the following definitions which mirror Arrow defaults while avoiding arr Be sure also to define arr or pure to yield an error message rather than ping-ponging infinitely between them via the Arrow default definitions second swapA first swapA dupA In few cases there are default methods as noted below The defaults do not use arr",
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "DeepArrow",
          "package": "DeepArrow",
          "partial": "Deep Arrow",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#t:DeepArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupport needed for a \u003ccode\u003e\u003ca\u003eFunA\u003c/a\u003e\u003c/code\u003e to be a \u003ccode\u003e\u003ca\u003eDeepArrow\u003c/a\u003e\u003c/code\u003e (as \u003ccode\u003e\u003ca\u003eFunAble\u003c/a\u003e\u003c/code\u003e serves\n \u003ccode\u003e\u003ca\u003eArrow\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Control.Arrow.DeepArrow",
          "name": "FunDble",
          "package": "DeepArrow",
          "source": "src/Control-Arrow-DeepArrow.html#FunDble",
          "type": "class"
        },
        "index": {
          "description": "Support needed for FunA to be DeepArrow as FunAble serves Arrow",
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "FunDble",
          "package": "DeepArrow",
          "partial": "Fun Dble",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#t:FunDble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose wrapped functions\n\u003c/p\u003e",
          "module": "Control.Arrow.DeepArrow",
          "name": "(-\u003e|)",
          "package": "DeepArrow",
          "signature": "w (a -\u003e b) -\u003e w (b -\u003e c) -\u003e w (a -\u003e c)",
          "source": "src/Control-Arrow-DeepArrow.html#-%3E%7C",
          "type": "function"
        },
        "index": {
          "description": "Compose wrapped functions",
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "(-\u003e|) -\u003e|",
          "normalized": "a(b-\u003ec)-\u003ea(c-\u003ed)-\u003ea(b-\u003ed)",
          "package": "DeepArrow",
          "signature": "w(a-\u003eb)-\u003ew(b-\u003ec)-\u003ew(a-\u003ec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:-45--62--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurry arrow.\n\u003c/p\u003e",
          "module": "Control.Arrow.DeepArrow",
          "name": "curryA",
          "package": "DeepArrow",
          "signature": "((a, b) -\u003e c) `ar` (a -\u003e b -\u003e c)",
          "source": "src/Control-Arrow-DeepArrow.html#curryA",
          "type": "method"
        },
        "index": {
          "description": "Curry arrow",
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "curryA",
          "normalized": "((a,b)-\u003ec)d(a-\u003eb-\u003ec)",
          "package": "DeepArrow",
          "signature": "((a,b)-\u003ec)ar(a-\u003eb-\u003ec)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:curryA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.DeepArrow",
          "name": "curryAFun",
          "package": "DeepArrow",
          "signature": "h ((a, b) -\u003e c) -\u003e h (a -\u003e b -\u003e c)",
          "source": "src/Control-Arrow-DeepArrow.html#curryAFun",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "curryAFun",
          "normalized": "a((b,c)-\u003ed)-\u003ea(b-\u003ec-\u003ed)",
          "package": "DeepArrow",
          "partial": "AFun",
          "signature": "h((a,b)-\u003ec)-\u003eh(a-\u003eb-\u003ec)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:curryAFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDuplicate.\n\u003c/p\u003e",
          "module": "Control.Arrow.DeepArrow",
          "name": "dupA",
          "package": "DeepArrow",
          "signature": "a `ar` (a, a)",
          "source": "src/Control-Arrow-DeepArrow.html#dupA",
          "type": "method"
        },
        "index": {
          "description": "Duplicate",
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "dupA",
          "normalized": "a b(a,a)",
          "package": "DeepArrow",
          "signature": "a ar(a,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:dupA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.DeepArrow",
          "name": "dupAFun",
          "package": "DeepArrow",
          "signature": "h a -\u003e h (a, a)",
          "source": "src/Control-Arrow-DeepArrow.html#dupAFun",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "dupAFun",
          "normalized": "a b-\u003ea(b,b)",
          "package": "DeepArrow",
          "partial": "AFun",
          "signature": "h a-\u003eh(a,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:dupAFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlip argument order\n\u003c/p\u003e",
          "module": "Control.Arrow.DeepArrow",
          "name": "flipA",
          "package": "DeepArrow",
          "signature": "(a -\u003e c -\u003e b) `ar` (c -\u003e a -\u003e b)",
          "source": "src/Control-Arrow-DeepArrow.html#flipA",
          "type": "function"
        },
        "index": {
          "description": "Flip argument order",
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "flipA",
          "normalized": "(a-\u003eb-\u003ec)d(b-\u003ea-\u003ec)",
          "package": "DeepArrow",
          "signature": "(a-\u003ec-\u003eb)ar(c-\u003ea-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:flipA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract first.\n\u003c/p\u003e",
          "module": "Control.Arrow.DeepArrow",
          "name": "fstA",
          "package": "DeepArrow",
          "signature": "(a, b) `ar` a",
          "source": "src/Control-Arrow-DeepArrow.html#fstA",
          "type": "method"
        },
        "index": {
          "description": "Extract first",
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "fstA",
          "normalized": "(a,b)c a",
          "package": "DeepArrow",
          "signature": "(a,b)ar a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:fstA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.DeepArrow",
          "name": "fstAFun",
          "package": "DeepArrow",
          "signature": "h (a, b) -\u003e h a",
          "source": "src/Control-Arrow-DeepArrow.html#fstAFun",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "fstAFun",
          "normalized": "a(b,c)-\u003ea b",
          "package": "DeepArrow",
          "partial": "AFun",
          "signature": "h(a,b)-\u003eh a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:fstAFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract function from first element.\n\u003c/p\u003e",
          "module": "Control.Arrow.DeepArrow",
          "name": "funF",
          "package": "DeepArrow",
          "signature": "(c -\u003e a, b) `ar` (c -\u003e (a, b))",
          "source": "src/Control-Arrow-DeepArrow.html#funF",
          "type": "method"
        },
        "index": {
          "description": "Extract function from first element",
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "funF",
          "normalized": "(a-\u003eb,c)d(a-\u003e(b,c))",
          "package": "DeepArrow",
          "signature": "(c-\u003ea,b)ar(c-\u003e(a,b))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:funF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.DeepArrow",
          "name": "funFFun",
          "package": "DeepArrow",
          "signature": "h (c -\u003e a, b) -\u003e h (c -\u003e (a, b))",
          "source": "src/Control-Arrow-DeepArrow.html#funFFun",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "funFFun",
          "normalized": "a(b-\u003ec,d)-\u003ea(b-\u003e(c,d))",
          "package": "DeepArrow",
          "partial": "FFun",
          "signature": "h(c-\u003ea,b)-\u003eh(c-\u003e(a,b))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:funFFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function extractor into one that reaches into the first\n element of a pair.\n\u003c/p\u003e",
          "module": "Control.Arrow.DeepArrow",
          "name": "funFirst",
          "package": "DeepArrow",
          "signature": "(a `ar` (d -\u003e a')) -\u003e (a, b) `ar` (d -\u003e (a', b))",
          "source": "src/Control-Arrow-DeepArrow.html#funFirst",
          "type": "function"
        },
        "index": {
          "description": "Promote function extractor into one that reaches into the first element of pair",
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "funFirst",
          "normalized": "(a b(c-\u003ed))-\u003e(a,e)b(c-\u003e(d,e))",
          "package": "DeepArrow",
          "partial": "First",
          "signature": "(a ar(d-\u003ea'))-\u003e(a,b)ar(d-\u003e(a',b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:funFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract function from result.\n\u003c/p\u003e",
          "module": "Control.Arrow.DeepArrow",
          "name": "funR",
          "package": "DeepArrow",
          "signature": "(a -\u003e c -\u003e b) `ar` (c -\u003e a -\u003e b)",
          "source": "src/Control-Arrow-DeepArrow.html#funR",
          "type": "method"
        },
        "index": {
          "description": "Extract function from result",
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "funR",
          "normalized": "(a-\u003eb-\u003ec)d(b-\u003ea-\u003ec)",
          "package": "DeepArrow",
          "signature": "(a-\u003ec-\u003eb)ar(c-\u003ea-\u003eb)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:funR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.DeepArrow",
          "name": "funRFun",
          "package": "DeepArrow",
          "signature": "h (a -\u003e c -\u003e b) -\u003e h (c -\u003e a -\u003e b)",
          "source": "src/Control-Arrow-DeepArrow.html#funRFun",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "funRFun",
          "normalized": "a(b-\u003ec-\u003ed)-\u003ea(c-\u003eb-\u003ed)",
          "package": "DeepArrow",
          "partial": "RFun",
          "signature": "h(a-\u003ec-\u003eb)-\u003eh(c-\u003ea-\u003eb)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:funRFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function extractor into one that reaches into the result\n element of a function.\n\u003c/p\u003e",
          "module": "Control.Arrow.DeepArrow",
          "name": "funResult",
          "package": "DeepArrow",
          "signature": "(b `ar` (d -\u003e b')) -\u003e (a -\u003e b) `ar` (d -\u003e a -\u003e b')",
          "source": "src/Control-Arrow-DeepArrow.html#funResult",
          "type": "function"
        },
        "index": {
          "description": "Promote function extractor into one that reaches into the result element of function",
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "funResult",
          "normalized": "(a b(c-\u003ed))-\u003e(e-\u003ea)b(c-\u003ee-\u003ed)",
          "package": "DeepArrow",
          "partial": "Result",
          "signature": "(b ar(d-\u003eb'))-\u003e(a-\u003eb)ar(d-\u003ea-\u003eb')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:funResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract function from second element.\n\u003c/p\u003e",
          "module": "Control.Arrow.DeepArrow",
          "name": "funS",
          "package": "DeepArrow",
          "signature": "(a, c -\u003e b) `ar` (c -\u003e (a, b))",
          "source": "src/Control-Arrow-DeepArrow.html#funS",
          "type": "method"
        },
        "index": {
          "description": "Extract function from second element",
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "funS",
          "normalized": "(a,b-\u003ec)d(b-\u003e(a,c))",
          "package": "DeepArrow",
          "signature": "(a,c-\u003eb)ar(c-\u003e(a,b))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:funS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.DeepArrow",
          "name": "funSFun",
          "package": "DeepArrow",
          "signature": "h (a, c -\u003e b) -\u003e h (c -\u003e (a, b))",
          "source": "src/Control-Arrow-DeepArrow.html#funSFun",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "funSFun",
          "normalized": "a(b,c-\u003ed)-\u003ea(c-\u003e(b,d))",
          "package": "DeepArrow",
          "partial": "SFun",
          "signature": "h(a,c-\u003eb)-\u003eh(c-\u003e(a,b))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:funSFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote a function extractor into one that reaches into the second\n element of a pair.\n\u003c/p\u003e",
          "module": "Control.Arrow.DeepArrow",
          "name": "funSecond",
          "package": "DeepArrow",
          "signature": "(b `ar` (d -\u003e b')) -\u003e (a, b) `ar` (d -\u003e (a, b'))",
          "source": "src/Control-Arrow-DeepArrow.html#funSecond",
          "type": "function"
        },
        "index": {
          "description": "Promote function extractor into one that reaches into the second element of pair",
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "funSecond",
          "normalized": "(a b(c-\u003ed))-\u003e(e,a)b(c-\u003e(e,d))",
          "package": "DeepArrow",
          "partial": "Second",
          "signature": "(b ar(d-\u003eb'))-\u003e(a,b)ar(d-\u003e(a,b'))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:funSecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the first component of a pair input.\n\u003c/p\u003e",
          "module": "Control.Arrow.DeepArrow",
          "name": "inpF",
          "package": "DeepArrow",
          "signature": "((a, b) -\u003e c) `ar` (a -\u003e b -\u003e c)",
          "source": "src/Control-Arrow-DeepArrow.html#inpF",
          "type": "function"
        },
        "index": {
          "description": "Extract the first component of pair input",
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "inpF",
          "normalized": "((a,b)-\u003ec)d(a-\u003eb-\u003ec)",
          "package": "DeepArrow",
          "signature": "((a,b)-\u003ec)ar(a-\u003eb-\u003ec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:inpF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a way to extract a \u003ccode\u003ed\u003c/code\u003e input from an \u003ccode\u003ea\u003c/code\u003e input, leaving an \u003ccode\u003ea'\u003c/code\u003e\n residual input, \u003ccode\u003e\u003ca\u003einpFirst\u003c/a\u003e\u003c/code\u003e yields a way to extract a \u003ccode\u003ed\u003c/code\u003e input from an\n \u003ccode\u003e(a,b)\u003c/code\u003e input, leaving an \u003ccode\u003e(a',b)\u003c/code\u003e residual input.\n\u003c/p\u003e",
          "module": "Control.Arrow.DeepArrow",
          "name": "inpFirst",
          "package": "DeepArrow",
          "signature": "((a -\u003e c) `ar` (d -\u003e a' -\u003e c)) -\u003e ((a, b) -\u003e c) `ar` (d -\u003e (a', b) -\u003e c)",
          "source": "src/Control-Arrow-DeepArrow.html#inpFirst",
          "type": "function"
        },
        "index": {
          "description": "Given way to extract input from an input leaving an residual input inpFirst yields way to extract input from an input leaving an residual input",
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "inpFirst",
          "normalized": "((a-\u003eb)c(d-\u003ee-\u003eb))-\u003e((a,f)-\u003eb)c(d-\u003e(e,f)-\u003eb)",
          "package": "DeepArrow",
          "partial": "First",
          "signature": "((a-\u003ec)ar(d-\u003ea'-\u003ec))-\u003e((a,b)-\u003ec)ar(d-\u003e(a',b)-\u003ec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:inpFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the second component of a pair input.\n\u003c/p\u003e",
          "module": "Control.Arrow.DeepArrow",
          "name": "inpS",
          "package": "DeepArrow",
          "signature": "((a, b) -\u003e c) `ar` (b -\u003e a -\u003e c)",
          "source": "src/Control-Arrow-DeepArrow.html#inpS",
          "type": "function"
        },
        "index": {
          "description": "Extract the second component of pair input",
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "inpS",
          "normalized": "((a,b)-\u003ec)d(b-\u003ea-\u003ec)",
          "package": "DeepArrow",
          "signature": "((a,b)-\u003ec)ar(b-\u003ea-\u003ec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:inpS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalogous to \u003ccode\u003e\u003ca\u003einpFirst\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Arrow.DeepArrow",
          "name": "inpSecond",
          "package": "DeepArrow",
          "signature": "((b -\u003e c) `ar` (d -\u003e b' -\u003e c)) -\u003e ((a, b) -\u003e c) `ar` (d -\u003e (a, b') -\u003e c)",
          "source": "src/Control-Arrow-DeepArrow.html#inpSecond",
          "type": "function"
        },
        "index": {
          "description": "Analogous to inpFirst",
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "inpSecond",
          "normalized": "((a-\u003eb)c(d-\u003ee-\u003eb))-\u003e((f,a)-\u003eb)c(d-\u003e(f,e)-\u003eb)",
          "package": "DeepArrow",
          "partial": "Second",
          "signature": "((b-\u003ec)ar(d-\u003eb'-\u003ec))-\u003e((a,b)-\u003ec)ar(d-\u003e(a,b')-\u003ec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:inpSecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-associate.  Has default.\n\u003c/p\u003e",
          "module": "Control.Arrow.DeepArrow",
          "name": "lAssocA",
          "package": "DeepArrow",
          "signature": "(a, (b, c)) `ar` ((a, b), c)",
          "source": "src/Control-Arrow-DeepArrow.html#lAssocA",
          "type": "method"
        },
        "index": {
          "description": "Left-associate Has default",
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "lAssocA",
          "normalized": "(a,(b,c))d((a,b),c)",
          "package": "DeepArrow",
          "partial": "Assoc",
          "signature": "(a,(b,c))ar((a,b),c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:lAssocA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.DeepArrow",
          "name": "lAssocAFun",
          "package": "DeepArrow",
          "signature": "h (a, (b, c)) -\u003e h ((a, b), c)",
          "source": "src/Control-Arrow-DeepArrow.html#lAssocAFun",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "lAssocAFun",
          "normalized": "a(b,(c,d))-\u003ea((b,c),d)",
          "package": "DeepArrow",
          "partial": "Assoc AFun",
          "signature": "h(a,(b,c))-\u003eh((a,b),c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:lAssocAFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight-associate.  Has default.\n\u003c/p\u003e",
          "module": "Control.Arrow.DeepArrow",
          "name": "rAssocA",
          "package": "DeepArrow",
          "signature": "((a, b), c) `ar` (a, (b, c))",
          "source": "src/Control-Arrow-DeepArrow.html#rAssocA",
          "type": "method"
        },
        "index": {
          "description": "Right-associate Has default",
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "rAssocA",
          "normalized": "((a,b),c)d(a,(b,c))",
          "package": "DeepArrow",
          "partial": "Assoc",
          "signature": "((a,b),c)ar(a,(b,c))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:rAssocA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.DeepArrow",
          "name": "rAssocAFun",
          "package": "DeepArrow",
          "signature": "h ((a, b), c) -\u003e h (a, (b, c))",
          "source": "src/Control-Arrow-DeepArrow.html#rAssocAFun",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "rAssocAFun",
          "normalized": "a((b,c),d)-\u003ea(b,(c,d))",
          "package": "DeepArrow",
          "partial": "Assoc AFun",
          "signature": "h((a,b),c)-\u003eh(a,(b,c))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:rAssocAFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDirect arrow into a function's result.  Analogous to \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003esecond\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Arrow.DeepArrow",
          "name": "result",
          "package": "DeepArrow",
          "signature": "(b `ar` b') -\u003e (a -\u003e b) `ar` (a -\u003e b')",
          "source": "src/Control-Arrow-DeepArrow.html#result",
          "type": "method"
        },
        "index": {
          "description": "Direct arrow into function result Analogous to first and second",
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "result",
          "normalized": "(a b c)-\u003e(d-\u003ea)b(d-\u003ec)",
          "package": "DeepArrow",
          "signature": "(b ar b')-\u003e(a-\u003eb)ar(a-\u003eb')",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.DeepArrow",
          "name": "resultFun",
          "package": "DeepArrow",
          "signature": "(h b -\u003e h b') -\u003e h (a -\u003e b) -\u003e h (a -\u003e b')",
          "source": "src/Control-Arrow-DeepArrow.html#resultFun",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "resultFun",
          "normalized": "(a b-\u003ea c)-\u003ea(d-\u003eb)-\u003ea(d-\u003ec)",
          "package": "DeepArrow",
          "partial": "Fun",
          "signature": "(h b-\u003eh b')-\u003eh(a-\u003eb)-\u003eh(a-\u003eb')",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:resultFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract second.\n\u003c/p\u003e",
          "module": "Control.Arrow.DeepArrow",
          "name": "sndA",
          "package": "DeepArrow",
          "signature": "(a, b) `ar` b",
          "source": "src/Control-Arrow-DeepArrow.html#sndA",
          "type": "method"
        },
        "index": {
          "description": "Extract second",
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "sndA",
          "normalized": "(a,b)c b",
          "package": "DeepArrow",
          "signature": "(a,b)ar b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:sndA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.DeepArrow",
          "name": "sndAFun",
          "package": "DeepArrow",
          "signature": "h (a, b) -\u003e h b",
          "source": "src/Control-Arrow-DeepArrow.html#sndAFun",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "sndAFun",
          "normalized": "a(b,c)-\u003ea c",
          "package": "DeepArrow",
          "partial": "AFun",
          "signature": "h(a,b)-\u003eh b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:sndAFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwap elements.  Has default.\n\u003c/p\u003e",
          "module": "Control.Arrow.DeepArrow",
          "name": "swapA",
          "package": "DeepArrow",
          "signature": "(a, b) `ar` (b, a)",
          "source": "src/Control-Arrow-DeepArrow.html#swapA",
          "type": "method"
        },
        "index": {
          "description": "Swap elements Has default",
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "swapA",
          "normalized": "(a,b)c(b,a)",
          "package": "DeepArrow",
          "signature": "(a,b)ar(b,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:swapA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.DeepArrow",
          "name": "swapAFun",
          "package": "DeepArrow",
          "signature": "h (a, b) -\u003e h (b, a)",
          "source": "src/Control-Arrow-DeepArrow.html#swapAFun",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "swapAFun",
          "normalized": "a(b,c)-\u003ea(c,b)",
          "package": "DeepArrow",
          "partial": "AFun",
          "signature": "h(a,b)-\u003eh(b,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:swapAFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUncurry arrow.\n\u003c/p\u003e",
          "module": "Control.Arrow.DeepArrow",
          "name": "uncurryA",
          "package": "DeepArrow",
          "signature": "(a -\u003e b -\u003e c) `ar` ((a, b) -\u003e c)",
          "source": "src/Control-Arrow-DeepArrow.html#uncurryA",
          "type": "method"
        },
        "index": {
          "description": "Uncurry arrow",
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "uncurryA",
          "normalized": "(a-\u003eb-\u003ec)d((a,b)-\u003ec)",
          "package": "DeepArrow",
          "signature": "(a-\u003eb-\u003ec)ar((a,b)-\u003ec)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:uncurryA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.DeepArrow",
          "name": "uncurryAFun",
          "package": "DeepArrow",
          "signature": "h (a -\u003e b -\u003e c) -\u003e h ((a, b) -\u003e c)",
          "source": "src/Control-Arrow-DeepArrow.html#uncurryAFun",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "uncurryAFun",
          "normalized": "a(b-\u003ec-\u003ed)-\u003ea((b,c)-\u003ed)",
          "package": "DeepArrow",
          "partial": "AFun",
          "signature": "h(a-\u003eb-\u003ec)-\u003eh((a,b)-\u003ec)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:uncurryAFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e but for \u003ccode\u003e\u003ca\u003eDeepArrow\u003c/a\u003e\u003c/code\u003e arrows instead of lists.\n\u003c/p\u003e",
          "module": "Control.Arrow.DeepArrow",
          "name": "unzipA",
          "package": "DeepArrow",
          "signature": "(a `ar` (b, c)) -\u003e (a `ar` b, a `ar` c)",
          "source": "src/Control-Arrow-DeepArrow.html#unzipA",
          "type": "function"
        },
        "index": {
          "description": "Like unzip but for DeepArrow arrows instead of lists",
          "hierarchy": "Control Arrow DeepArrow",
          "module": "Control.Arrow.DeepArrow",
          "name": "unzipA",
          "normalized": "(a b(c,d))-\u003e(a b c,a b d)",
          "package": "DeepArrow",
          "signature": "(a ar(b,c))-\u003e(a ar b,a ar c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Control-Arrow-DeepArrow.html#v:unzipA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\"Deep arrows\" as a data type.  Handy for code generation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.DDeepArrow",
          "name": "DDeepArrow",
          "package": "DeepArrow",
          "source": "src/Data-DDeepArrow.html",
          "type": "module"
        },
        "index": {
          "description": "Deep arrows as data type Handy for code generation",
          "hierarchy": "Data DDeepArrow",
          "module": "Data.DDeepArrow",
          "name": "DDeepArrow",
          "package": "DeepArrow",
          "partial": "DDeep Arrow",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis GADT mirrors the \u003ccode\u003e\u003ca\u003eDeepArrow\u003c/a\u003e\u003c/code\u003e class and part of the \u003ccode\u003e\u003ca\u003eFunArr\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Data.DDeepArrow",
          "name": "DArrow",
          "package": "DeepArrow",
          "source": "src/Data-DDeepArrow.html#DArrow",
          "type": "data"
        },
        "index": {
          "description": "This GADT mirrors the DeepArrow class and part of the FunArr class",
          "hierarchy": "Data DDeepArrow",
          "module": "Data.DDeepArrow",
          "name": "DArrow",
          "package": "DeepArrow",
          "partial": "DArrow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#t:DArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA GADT alternative to terms.  Allows generation of Haskell terms and,\n from there, strings and eval. \n\u003c/p\u003e",
          "module": "Data.DDeepArrow",
          "name": "DVal",
          "package": "DeepArrow",
          "source": "src/Data-DDeepArrow.html#DVal",
          "type": "data"
        },
        "index": {
          "description": "GADT alternative to terms Allows generation of Haskell terms and from there strings and eval",
          "hierarchy": "Data DDeepArrow",
          "module": "Data.DDeepArrow",
          "name": "DVal",
          "package": "DeepArrow",
          "partial": "DVal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#t:DVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DDeepArrow",
          "name": "AppDA",
          "package": "DeepArrow",
          "signature": "(a `DArrow` b) -\u003e DVal a -\u003e DVal b",
          "source": "src/Data-DDeepArrow.html#DVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DDeepArrow",
          "module": "Data.DDeepArrow",
          "name": "AppDA",
          "normalized": "(a DArrow b)-\u003eDVal a-\u003eDVal b",
          "package": "DeepArrow",
          "partial": "App DA",
          "signature": "(a DArrow b)-\u003eDVal a-\u003eDVal b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:AppDA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DDeepArrow",
          "name": "Arr",
          "package": "DeepArrow",
          "signature": "DVal (a -\u003e b) -\u003e a `DArrow` b",
          "source": "src/Data-DDeepArrow.html#DArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DDeepArrow",
          "module": "Data.DDeepArrow",
          "name": "Arr",
          "normalized": "DVal(a-\u003eb)-\u003ea DArrow b",
          "package": "DeepArrow",
          "partial": "Arr",
          "signature": "DVal(a-\u003eb)-\u003ea DArrow b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:Arr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DDeepArrow",
          "name": "Compose",
          "package": "DeepArrow",
          "signature": "(a `DArrow` b) -\u003e (b `DArrow` c) -\u003e a `DArrow` c",
          "source": "src/Data-DDeepArrow.html#DArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DDeepArrow",
          "module": "Data.DDeepArrow",
          "name": "Compose",
          "normalized": "(a DArrow b)-\u003e(b DArrow c)-\u003ea DArrow c",
          "package": "DeepArrow",
          "partial": "Compose",
          "signature": "(a DArrow b)-\u003e(b DArrow c)-\u003ea DArrow c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:Compose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DDeepArrow",
          "name": "CurryA",
          "package": "DeepArrow",
          "signature": "((a, b) -\u003e c) `DArrow` (a -\u003e b -\u003e c)",
          "source": "src/Data-DDeepArrow.html#DArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DDeepArrow",
          "module": "Data.DDeepArrow",
          "name": "CurryA",
          "normalized": "((a,b)-\u003ec)DArrow(a-\u003eb-\u003ec)",
          "package": "DeepArrow",
          "partial": "Curry",
          "signature": "((a,b)-\u003ec)DArrow(a-\u003eb-\u003ec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:CurryA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DDeepArrow",
          "name": "DupA",
          "package": "DeepArrow",
          "signature": "a `DArrow` (a, a)",
          "source": "src/Data-DDeepArrow.html#DArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DDeepArrow",
          "module": "Data.DDeepArrow",
          "name": "DupA",
          "normalized": "a DArrow(a,a)",
          "package": "DeepArrow",
          "partial": "Dup",
          "signature": "a DArrow(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:DupA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DDeepArrow",
          "name": "ExpDV",
          "package": "DeepArrow",
          "signature": "HsExp -\u003e DVal a",
          "source": "src/Data-DDeepArrow.html#DVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DDeepArrow",
          "module": "Data.DDeepArrow",
          "name": "ExpDV",
          "normalized": "HsExp-\u003eDVal a",
          "package": "DeepArrow",
          "partial": "Exp DV",
          "signature": "HsExp-\u003eDVal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:ExpDV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DDeepArrow",
          "name": "First",
          "package": "DeepArrow",
          "signature": "(a `DArrow` a') -\u003e (a, b) `DArrow` (a', b)",
          "source": "src/Data-DDeepArrow.html#DArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DDeepArrow",
          "module": "Data.DDeepArrow",
          "name": "First",
          "normalized": "(a DArrow b)-\u003e(a,c)DArrow(b,c)",
          "package": "DeepArrow",
          "partial": "First",
          "signature": "(a DArrow a')-\u003e(a,b)DArrow(a',b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:First"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DDeepArrow",
          "name": "FstA",
          "package": "DeepArrow",
          "signature": "(a, b) `DArrow` a",
          "source": "src/Data-DDeepArrow.html#DArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DDeepArrow",
          "module": "Data.DDeepArrow",
          "name": "FstA",
          "normalized": "(a,b)DArrow a",
          "package": "DeepArrow",
          "partial": "Fst",
          "signature": "(a,b)DArrow a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:FstA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DDeepArrow",
          "name": "FunF",
          "package": "DeepArrow",
          "signature": "(c -\u003e a, b) `DArrow` (c -\u003e (a, b))",
          "source": "src/Data-DDeepArrow.html#DArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DDeepArrow",
          "module": "Data.DDeepArrow",
          "name": "FunF",
          "normalized": "(a-\u003eb,c)DArrow(a-\u003e(b,c))",
          "package": "DeepArrow",
          "partial": "Fun",
          "signature": "(c-\u003ea,b)DArrow(c-\u003e(a,b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:FunF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DDeepArrow",
          "name": "FunR",
          "package": "DeepArrow",
          "signature": "(a -\u003e c -\u003e b) `DArrow` (c -\u003e a -\u003e b)",
          "source": "src/Data-DDeepArrow.html#DArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DDeepArrow",
          "module": "Data.DDeepArrow",
          "name": "FunR",
          "normalized": "(a-\u003eb-\u003ec)DArrow(b-\u003ea-\u003ec)",
          "package": "DeepArrow",
          "partial": "Fun",
          "signature": "(a-\u003ec-\u003eb)DArrow(c-\u003ea-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:FunR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DDeepArrow",
          "name": "FunS",
          "package": "DeepArrow",
          "signature": "(a, c -\u003e b) `DArrow` (c -\u003e (a, b))",
          "source": "src/Data-DDeepArrow.html#DArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DDeepArrow",
          "module": "Data.DDeepArrow",
          "name": "FunS",
          "normalized": "(a,b-\u003ec)DArrow(b-\u003e(a,c))",
          "package": "DeepArrow",
          "partial": "Fun",
          "signature": "(a,c-\u003eb)DArrow(c-\u003e(a,b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:FunS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DDeepArrow",
          "name": "IdA",
          "package": "DeepArrow",
          "signature": "a `DArrow` a",
          "source": "src/Data-DDeepArrow.html#DArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DDeepArrow",
          "module": "Data.DDeepArrow",
          "name": "IdA",
          "package": "DeepArrow",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:IdA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DDeepArrow",
          "name": "LAssocA",
          "package": "DeepArrow",
          "signature": "(a, (b, c)) `DArrow` ((a, b), c)",
          "source": "src/Data-DDeepArrow.html#DArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DDeepArrow",
          "module": "Data.DDeepArrow",
          "name": "LAssocA",
          "normalized": "(a,(b,c))DArrow((a,b),c)",
          "package": "DeepArrow",
          "partial": "LAssoc",
          "signature": "(a,(b,c))DArrow((a,b),c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:LAssocA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DDeepArrow",
          "name": "RAssocA",
          "package": "DeepArrow",
          "signature": "((a, b), c) `DArrow` (a, (b, c))",
          "source": "src/Data-DDeepArrow.html#DArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DDeepArrow",
          "module": "Data.DDeepArrow",
          "name": "RAssocA",
          "normalized": "((a,b),c)DArrow(a,(b,c))",
          "package": "DeepArrow",
          "partial": "RAssoc",
          "signature": "((a,b),c)DArrow(a,(b,c))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:RAssocA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DDeepArrow",
          "name": "Result",
          "package": "DeepArrow",
          "signature": "(b `DArrow` b') -\u003e (a -\u003e b) `DArrow` (a -\u003e b')",
          "source": "src/Data-DDeepArrow.html#DArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DDeepArrow",
          "module": "Data.DDeepArrow",
          "name": "Result",
          "normalized": "(a DArrow b)-\u003e(c-\u003ea)DArrow(c-\u003eb)",
          "package": "DeepArrow",
          "partial": "Result",
          "signature": "(b DArrow b')-\u003e(a-\u003eb)DArrow(a-\u003eb')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DDeepArrow",
          "name": "Second",
          "package": "DeepArrow",
          "signature": "(b `DArrow` b') -\u003e (a, b) `DArrow` (a, b')",
          "source": "src/Data-DDeepArrow.html#DArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DDeepArrow",
          "module": "Data.DDeepArrow",
          "name": "Second",
          "normalized": "(a DArrow b)-\u003e(c,a)DArrow(c,b)",
          "package": "DeepArrow",
          "partial": "Second",
          "signature": "(b DArrow b')-\u003e(a,b)DArrow(a,b')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:Second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DDeepArrow",
          "name": "SndA",
          "package": "DeepArrow",
          "signature": "(a, b) `DArrow` b",
          "source": "src/Data-DDeepArrow.html#DArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DDeepArrow",
          "module": "Data.DDeepArrow",
          "name": "SndA",
          "normalized": "(a,b)DArrow b",
          "package": "DeepArrow",
          "partial": "Snd",
          "signature": "(a,b)DArrow b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:SndA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DDeepArrow",
          "name": "SwapA",
          "package": "DeepArrow",
          "signature": "(a, b) `DArrow` (b, a)",
          "source": "src/Data-DDeepArrow.html#DArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DDeepArrow",
          "module": "Data.DDeepArrow",
          "name": "SwapA",
          "normalized": "(a,b)DArrow(b,a)",
          "package": "DeepArrow",
          "partial": "Swap",
          "signature": "(a,b)DArrow(b,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:SwapA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DDeepArrow",
          "name": "UncurryA",
          "package": "DeepArrow",
          "signature": "(a -\u003e b -\u003e c) `DArrow` ((a, b) -\u003e c)",
          "source": "src/Data-DDeepArrow.html#DArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DDeepArrow",
          "module": "Data.DDeepArrow",
          "name": "UncurryA",
          "normalized": "(a-\u003eb-\u003ec)DArrow((a,b)-\u003ec)",
          "package": "DeepArrow",
          "partial": "Uncurry",
          "signature": "(a-\u003eb-\u003ec)DArrow((a,b)-\u003ec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:UncurryA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DDeepArrow",
          "name": "ZipDV",
          "package": "DeepArrow",
          "signature": "DVal a -\u003e DVal b -\u003e DVal (a, b)",
          "source": "src/Data-DDeepArrow.html#DVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DDeepArrow",
          "module": "Data.DDeepArrow",
          "name": "ZipDV",
          "normalized": "DVal a-\u003eDVal b-\u003eDVal(a,b)",
          "package": "DeepArrow",
          "partial": "Zip DV",
          "signature": "DVal a-\u003eDVal b-\u003eDVal(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-DDeepArrow.html#v:ZipDV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConversion between arrow values and wrapped functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.FunArr",
          "name": "FunArr",
          "package": "DeepArrow",
          "source": "src/Data-FunArr.html",
          "type": "module"
        },
        "index": {
          "description": "Conversion between arrow values and wrapped functions",
          "hierarchy": "Data FunArr",
          "module": "Data.FunArr",
          "name": "FunArr",
          "package": "DeepArrow",
          "partial": "Fun Arr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-FunArr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert between an arrow value and a \"wrapped function\".  The \"arrow\"\n doesn't really have to be an arrow.  I'd appreciate ideas for names &\n uses.\n\u003c/p\u003e",
          "module": "Data.FunArr",
          "name": "FunArr",
          "package": "DeepArrow",
          "source": "src/Data-FunArr.html#FunArr",
          "type": "class"
        },
        "index": {
          "description": "Convert between an arrow value and wrapped function The arrow doesn really have to be an arrow appreciate ideas for names uses",
          "hierarchy": "Data FunArr",
          "module": "Data.FunArr",
          "name": "FunArr",
          "package": "DeepArrow",
          "partial": "Fun Arr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-FunArr.html#t:FunArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an arrow to a \u003ccode\u003ew\u003c/code\u003e-wrapped value\n\u003c/p\u003e",
          "module": "Data.FunArr",
          "name": "($$)",
          "package": "DeepArrow",
          "signature": "(a `ar` b) -\u003e w a -\u003e w b",
          "source": "src/Data-FunArr.html#%24%24",
          "type": "method"
        },
        "index": {
          "description": "Apply an arrow to wrapped value",
          "hierarchy": "Data FunArr",
          "module": "Data.FunArr",
          "name": "($$) $$",
          "normalized": "(a b c)-\u003ed a-\u003ed c",
          "package": "DeepArrow",
          "signature": "(a ar b)-\u003ew a-\u003ew b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-FunArr.html#v:-36--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003ew\u003c/code\u003e-wrapped function to an arrow value\n\u003c/p\u003e",
          "module": "Data.FunArr",
          "name": "toArr",
          "package": "DeepArrow",
          "signature": "w (a -\u003e b) -\u003e a `ar` b",
          "source": "src/Data-FunArr.html#toArr",
          "type": "method"
        },
        "index": {
          "description": "Convert wrapped function to an arrow value",
          "hierarchy": "Data FunArr",
          "module": "Data.FunArr",
          "name": "toArr",
          "normalized": "a(b-\u003ec)-\u003eb d c",
          "package": "DeepArrow",
          "partial": "Arr",
          "signature": "w(a-\u003eb)-\u003ea ar b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Data-FunArr.html#v:toArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInsert parens where necessary in Haskell expressions.\n Inspired by Sigbjorn Finne's Pan pretty-printer.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.Parens",
          "name": "Parens",
          "package": "DeepArrow",
          "source": "src/Language-Haskell-Parens.html",
          "type": "module"
        },
        "index": {
          "description": "Insert parens where necessary in Haskell expressions Inspired by Sigbjorn Finne Pan pretty-printer",
          "hierarchy": "Language Haskell Parens",
          "module": "Language.Haskell.Parens",
          "name": "Parens",
          "package": "DeepArrow",
          "partial": "Parens",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-Parens.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Parens",
          "name": "Cify",
          "package": "DeepArrow",
          "source": "src/Language-Haskell-Parens.html#Cify",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Haskell Parens",
          "module": "Language.Haskell.Parens",
          "name": "Cify",
          "package": "DeepArrow",
          "partial": "Cify",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-Parens.html#t:Cify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Parens",
          "name": "cifyExp",
          "package": "DeepArrow",
          "signature": "Cify HsExp",
          "source": "src/Language-Haskell-Parens.html#cifyExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Parens",
          "module": "Language.Haskell.Parens",
          "name": "cifyExp",
          "package": "DeepArrow",
          "partial": "Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-Parens.html#v:cifyExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Parens",
          "name": "hasOpInfo",
          "package": "DeepArrow",
          "signature": "HsName -\u003e Bool",
          "source": "src/Language-Haskell-Parens.html#hasOpInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Parens",
          "module": "Language.Haskell.Parens",
          "name": "hasOpInfo",
          "normalized": "HsName-\u003eBool",
          "package": "DeepArrow",
          "partial": "Op Info",
          "signature": "HsName-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-Parens.html#v:hasOpInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Parens",
          "name": "pretty",
          "package": "DeepArrow",
          "signature": "HsExp -\u003e String",
          "source": "src/Language-Haskell-Parens.html#pretty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Parens",
          "module": "Language.Haskell.Parens",
          "name": "pretty",
          "normalized": "HsExp-\u003eString",
          "package": "DeepArrow",
          "signature": "HsExp-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-Parens.html#v:pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Parens",
          "name": "unCify",
          "package": "DeepArrow",
          "signature": "(Context -\u003e a) -\u003e a",
          "source": "src/Language-Haskell-Parens.html#unCify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Parens",
          "module": "Language.Haskell.Parens",
          "name": "unCify",
          "normalized": "(Context-\u003ea)-\u003ea",
          "package": "DeepArrow",
          "partial": "Cify",
          "signature": "(Context-\u003ea)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-Parens.html#v:unCify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert values to Haskell abstract syntax\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.ToHs",
          "name": "ToHs",
          "package": "DeepArrow",
          "source": "src/Language-Haskell-ToHs.html",
          "type": "module"
        },
        "index": {
          "description": "Convert values to Haskell abstract syntax",
          "hierarchy": "Language Haskell ToHs",
          "module": "Language.Haskell.ToHs",
          "name": "ToHs",
          "package": "DeepArrow",
          "partial": "To Hs",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-ToHs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion to Haskell expressions\n\u003c/p\u003e",
          "module": "Language.Haskell.ToHs",
          "name": "ToHsExp",
          "package": "DeepArrow",
          "source": "src/Language-Haskell-ToHs.html#ToHsExp",
          "type": "class"
        },
        "index": {
          "description": "Conversion to Haskell expressions",
          "hierarchy": "Language Haskell ToHs",
          "module": "Language.Haskell.ToHs",
          "name": "ToHsExp",
          "package": "DeepArrow",
          "partial": "To Hs Exp",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-ToHs.html#t:ToHsExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.ToHs",
          "name": "infixApp",
          "package": "DeepArrow",
          "signature": "HsName -\u003e HsExp -\u003e HsExp -\u003e HsExp",
          "source": "src/Language-Haskell-ToHs.html#infixApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell ToHs",
          "module": "Language.Haskell.ToHs",
          "name": "infixApp",
          "normalized": "HsName-\u003eHsExp-\u003eHsExp-\u003eHsExp",
          "package": "DeepArrow",
          "partial": "App",
          "signature": "HsName-\u003eHsExp-\u003eHsExp-\u003eHsExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-ToHs.html#v:infixApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.ToHs",
          "name": "prettyAsHsExp",
          "package": "DeepArrow",
          "signature": "a -\u003e String",
          "source": "src/Language-Haskell-ToHs.html#prettyAsHsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell ToHs",
          "module": "Language.Haskell.ToHs",
          "name": "prettyAsHsExp",
          "normalized": "a-\u003eString",
          "package": "DeepArrow",
          "partial": "As Hs Exp",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-ToHs.html#v:prettyAsHsExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.ToHs",
          "name": "toHsApp1",
          "package": "DeepArrow",
          "signature": "String -\u003e a -\u003e HsExp",
          "source": "src/Language-Haskell-ToHs.html#toHsApp1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell ToHs",
          "module": "Language.Haskell.ToHs",
          "name": "toHsApp1",
          "normalized": "String-\u003ea-\u003eHsExp",
          "package": "DeepArrow",
          "partial": "Hs App",
          "signature": "String-\u003ea-\u003eHsExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-ToHs.html#v:toHsApp1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.ToHs",
          "name": "toHsApp2",
          "package": "DeepArrow",
          "signature": "String -\u003e a -\u003e b -\u003e HsExp",
          "source": "src/Language-Haskell-ToHs.html#toHsApp2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell ToHs",
          "module": "Language.Haskell.ToHs",
          "name": "toHsApp2",
          "normalized": "String-\u003ea-\u003eb-\u003eHsExp",
          "package": "DeepArrow",
          "partial": "Hs App",
          "signature": "String-\u003ea-\u003eb-\u003eHsExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-ToHs.html#v:toHsApp2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.ToHs",
          "name": "toHsExp",
          "package": "DeepArrow",
          "signature": "a -\u003e HsExp",
          "source": "src/Language-Haskell-ToHs.html#toHsExp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Haskell ToHs",
          "module": "Language.Haskell.ToHs",
          "name": "toHsExp",
          "normalized": "a-\u003eHsExp",
          "package": "DeepArrow",
          "partial": "Hs Exp",
          "signature": "a-\u003eHsExp",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-ToHs.html#v:toHsExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.ToHs",
          "name": "toHsInfix",
          "package": "DeepArrow",
          "signature": "HsName -\u003e a -\u003e b -\u003e HsExp",
          "source": "src/Language-Haskell-ToHs.html#toHsInfix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell ToHs",
          "module": "Language.Haskell.ToHs",
          "name": "toHsInfix",
          "normalized": "HsName-\u003ea-\u003eb-\u003eHsExp",
          "package": "DeepArrow",
          "partial": "Hs Infix",
          "signature": "HsName-\u003ea-\u003eb-\u003eHsExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-ToHs.html#v:toHsInfix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.ToHs",
          "name": "varid",
          "package": "DeepArrow",
          "signature": "String -\u003e HsExp",
          "source": "src/Language-Haskell-ToHs.html#varid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell ToHs",
          "module": "Language.Haskell.ToHs",
          "name": "varid",
          "normalized": "String-\u003eHsExp",
          "package": "DeepArrow",
          "signature": "String-\u003eHsExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-ToHs.html#v:varid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.ToHs",
          "name": "varsym",
          "package": "DeepArrow",
          "signature": "String -\u003e HsExp",
          "source": "src/Language-Haskell-ToHs.html#varsym",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell ToHs",
          "module": "Language.Haskell.ToHs",
          "name": "varsym",
          "normalized": "String-\u003eHsExp",
          "package": "DeepArrow",
          "signature": "String-\u003eHsExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/DeepArrow/docs/Language-Haskell-ToHs.html#v:varsym"
      }
    }
  ]
]