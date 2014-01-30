[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lax/docs/Control-Arrow-Lax.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLax arrows.\n\u003c/p\u003e\u003cp\u003eIn order to get an understanding of what a lax arrow is, consider the following code example:\n\u003c/p\u003e\u003cpre\u003e\n    looping :: IO ()\n    looping = fixIO (\\char -\u003e putChar char \u003e\u003e return 'A')\n\u003c/pre\u003e\u003cp\u003eOne might expect that executing \u003ccode\u003elooping\u003c/code\u003e will result in a capital A being printed but this is\n    not the case.  The resulting \u003ccode\u003e'A'\u003c/code\u003e will become &#8220;available&#8221; not until the action\n    \u003ccode\u003eputChar char\u003c/code\u003e has been executed.\n\u003c/p\u003e\u003cp\u003eIn order to explain this, let&#8217;s think of \u003ccode\u003eIO o\u003c/code\u003e as being equivalent to \u003ccode\u003eWorld -\u003e Either\n    Exception (o,World)\u003c/code\u003e.  The \u003ccode\u003e\u003e\u003e=\u003c/code\u003e operator could now be defined as follows:\n\u003c/p\u003e\u003cpre\u003e\n    io1 \u003e\u003e= io2Gen = \\world -\u003e case io1 world of\n                                   Left  exc         -\u003e Left exc\n                                   Right (o1,world') -\u003e io2Gen o1 world'\n\u003c/pre\u003e\u003cp\u003eThis results in the following situation:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e In order to decide whether \u003ccode\u003elooping\u003c/code\u003e outputs a value or throws an exception, the system has\n      to decide whether \u003ccode\u003eputChar char \u003e\u003e return 'A'\u003c/code\u003e outputs a value or throws an exception.\n\u003c/li\u003e\u003cli\u003e In order to decide whether \u003ccode\u003eputChar char \u003e\u003e return 'A'\u003c/code\u003e outputs a value or throws an\n      exception, the system has to decide whether \u003ccode\u003eputChar char\u003c/code\u003e outputs a value or throws an\n      exception (because of the way, \u003ccode\u003e\u003e\u003e=\u003c/code\u003e is implemented).\n\u003c/li\u003e\u003cli\u003e In order to decide whether \u003ccode\u003eputChar char\u003c/code\u003e outputs a value or throws an exception, the system\n      has to know if there is really a \u003ccode\u003echar\u003c/code\u003e to output or whether there is none because of an\n      exception. So it has to decide whether \u003ccode\u003eputChar char \u003e\u003e return 'A'\u003c/code\u003e outputs a value or\n      throws an exception.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSo we have a circular dependency resulting in an output value of \u003ccode\u003e_|_\u003c/code\u003e for \u003ccode\u003elooping\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eLaxArrow\u003c/a\u003e\u003c/code\u003e type constructor transforms a given arrow into a new arrow which works mostly\n    like the base arrow but is &#8220;a bit less strict&#8221;.  To be more precise, all parts of\n    a lax arrow value which are constructed with \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e are internally moved to the\n    beginning.  This way, data produced by such parts is available at each point in the arrow when\n    \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e is used.  For the above example, this would mean that the result \u003ccode\u003e'A'\u003c/code\u003e is\n    already known before the \u003ccode\u003eputChar\u003c/code\u003e action is executed and can therefore be used by this action.\n\u003c/p\u003e\u003cp\u003eNote that relaxation only works for arrows, not directly for monads.  It is unknown whether a\n    relaxation mechanism for monads exists but it is considered unlikely.  Of course, you can\n    transform any monad into an arrow by using \u003ccode\u003e\u003ca\u003eKleisli\u003c/a\u003e\u003c/code\u003e.  However, the lax arrow type\n    is not an instance of \u003ccode\u003e\u003ca\u003eArrowChoice\u003c/a\u003e\u003c/code\u003e nor is it one of \u003ccode\u003e\u003ca\u003eArrowApply\u003c/a\u003e\u003c/code\u003e,\n    and at least the current implementation does not allow it to be an instance of either class.\n\u003c/p\u003e\u003cp\u003eFurther note that the implementation of lax arrows does not use \u003ccode\u003eunsafePerformIO\u003c/code\u003e nor\n    \u003ccode\u003eunsafeInterleaveIO\u003c/code\u003e and is not tied to \u003ccode\u003eIO\u003c/code\u003e at all.\n\u003c/p\u003e\u003cp\u003eThe lax arrow version of the \u003ccode\u003elooping\u003c/code\u003e example would be as follows:\n\u003c/p\u003e\u003cpre\u003e\n    looping :: IO ()\n    looping = runKleisli (runLax (loop $ second $ impure (Kleisli putChar) \u003e\u003e\u003e arr (const 'A')))\n                         ()\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Arrow.Lax",
        "fct-package": "lax",
        "fct-signature": "module",
        "fct-source": "src/Control-Arrow-Lax.html",
        "fct-type": "module",
        "title": "Lax"
      },
      "index": {
        "description": "Lax arrows In order to get an understanding of what lax arrow is consider the following code example looping IO looping fixIO char putChar char return One might expect that executing looping will result in capital being printed but this is not the case The resulting will become available not until the action putChar char has been executed In order to explain this let think of IO as being equivalent to World Either Exception World The operator could now be defined as follows io1 io2Gen world case io1 world of Left exc Left exc Right o1 world io2Gen o1 world This results in the following situation In order to decide whether looping outputs value or throws an exception the system has to decide whether putChar char return outputs value or throws an exception In order to decide whether putChar char return outputs value or throws an exception the system has to decide whether putChar char outputs value or throws an exception because of the way is implemented In order to decide whether putChar char outputs value or throws an exception the system has to know if there is really char to output or whether there is none because of an exception So it has to decide whether putChar char return outputs value or throws an exception So we have circular dependency resulting in an output value of for looping The LaxArrow type constructor transforms given arrow into new arrow which works mostly like the base arrow but is bit less strict To be more precise all parts of lax arrow value which are constructed with arr are internally moved to the beginning This way data produced by such parts is available at each point in the arrow when loop is used For the above example this would mean that the result is already known before the putChar action is executed and can therefore be used by this action Note that relaxation only works for arrows not directly for monads It is unknown whether relaxation mechanism for monads exists but it is considered unlikely Of course you can transform any monad into an arrow by using Kleisli However the lax arrow type is not an instance of ArrowChoice nor is it one of ArrowApply and at least the current implementation does not allow it to be an instance of either class Further note that the implementation of lax arrows does not use unsafePerformIO nor unsafeInterleaveIO and is not tied to IO at all The lax arrow version of the looping example would be as follows looping IO looping runKleisli runLax loop second impure Kleisli putChar arr const",
        "hierarchy": "Control Arrow Lax",
        "module": "Control.Arrow.Lax",
        "name": "Lax",
        "normalized": "",
        "package": "lax",
        "partial": "Lax",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lax/docs/Control-Arrow-Lax.html#t:LaxArrow",
      "description": {
        "fct-descr": "\u003cp\u003eA lax arrow.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Lax",
        "fct-package": "lax",
        "fct-signature": "data",
        "fct-source": "src/Control-Arrow-Lax.html#LaxArrow",
        "fct-type": "data",
        "title": "LaxArrow"
      },
      "index": {
        "description": "lax arrow",
        "hierarchy": "Control Arrow Lax",
        "module": "Control.Arrow.Lax",
        "name": "LaxArrow",
        "normalized": "",
        "package": "lax",
        "partial": "Lax Arrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lax/docs/Control-Arrow-Lax.html#v:impure",
      "description": {
        "fct-descr": "\u003cp\u003eTransforms a value of the base arrow type into a lax arrow value.  Pure parts of the\n        argument are not affected by relaxation, only parts of the lax arrow value which are\n        constructed with \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eLaxArrow\u003c/a\u003e\u003c/code\u003e instance of \u003ccode\u003e\u003ca\u003eArrow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003elift\u003c/code\u003e from the \u003ccode\u003eArrowTransformer\u003c/code\u003e class is not used since it is probably supposed to be a\n        homomorphism but \u003ccode\u003e\u003ca\u003eimpure\u003c/a\u003e\u003c/code\u003e is not a homomorphism.  While \u003ccode\u003e\u003ca\u003eimpure\u003c/a\u003e\u003c/code\u003e preserves\n        \u003ccode\u003e\u003ca\u003e\u003e\u003e\u003e\u003c/a\u003e\u003c/code\u003e, it does not preserve \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e and\n        \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e. If it would then we would have no relaxation effect at all.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Lax",
        "fct-package": "lax",
        "fct-signature": "base i o -\u003e LaxArrow base i o",
        "fct-source": "src/Control-Arrow-Lax.html#impure",
        "fct-type": "function",
        "title": "impure"
      },
      "index": {
        "description": "Transforms value of the base arrow type into lax arrow value Pure parts of the argument are not affected by relaxation only parts of the lax arrow value which are constructed with arr from the LaxArrow instance of Arrow lift from the ArrowTransformer class is not used since it is probably supposed to be homomorphism but impure is not homomorphism While impure preserves it does not preserve arr first and loop If it would then we would have no relaxation effect at all",
        "hierarchy": "Control Arrow Lax",
        "module": "Control.Arrow.Lax",
        "name": "impure",
        "normalized": "a b c-\u003eLaxArrow a b c",
        "package": "lax",
        "partial": "",
        "signature": "base i o-\u003eLaxArrow base i o"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/lax/docs/Control-Arrow-Lax.html#v:runLax",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a lax arrow value into a value of the base arrow type.\n\u003c/p\u003e",
        "fct-module": "Control.Arrow.Lax",
        "fct-package": "lax",
        "fct-signature": "LaxArrow base i o -\u003e base i o",
        "fct-source": "src/Control-Arrow-Lax.html#runLax",
        "fct-type": "function",
        "title": "runLax"
      },
      "index": {
        "description": "Converts lax arrow value into value of the base arrow type",
        "hierarchy": "Control Arrow Lax",
        "module": "Control.Arrow.Lax",
        "name": "runLax",
        "normalized": "LaxArrow a b c-\u003ea b c",
        "package": "lax",
        "partial": "Lax",
        "signature": "LaxArrow base i o-\u003ebase i o"
      }
    }
  }
]