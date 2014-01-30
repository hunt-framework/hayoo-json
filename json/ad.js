[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Halley.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRoot finding using Halley's rational method (the second in\n the class of Householder methods). Assumes the function is three\n times continuously differentiable and converges cubically when\n progress can be made.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.AD.Halley",
        "fct-package": "ad",
        "fct-signature": "module",
        "fct-source": "src/Numeric-AD-Halley.html",
        "fct-type": "module",
        "title": "Halley"
      },
      "index": {
        "description": "Root finding using Halley rational method the second in the class of Householder methods Assumes the function is three times continuously differentiable and converges cubically when progress can be made",
        "hierarchy": "Numeric AD Halley",
        "module": "Numeric.AD.Halley",
        "name": "Halley",
        "normalized": "",
        "package": "ad",
        "partial": "Halley",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Halley.html#v:extremum",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eextremum\u003c/a\u003e\u003c/code\u003e function finds an extremum of a scalar\n function using Halley's method; produces a stream of increasingly\n accurate results.  (Modulo the usual caveats.) If the stream becomes\n constant (\u003ca\u003eit converges\u003c/a\u003e), no further elements are returned.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 10 $ extremum cos 1\n\u003c/code\u003e\u003c/strong\u003e[1.0,0.29616942658570555,4.59979519460002e-3,1.6220740159042513e-8,0.0]\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Halley",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e [a]",
        "fct-source": "src/Numeric-AD-Halley.html#extremum",
        "fct-type": "function",
        "title": "extremum"
      },
      "index": {
        "description": "The extremum function finds an extremum of scalar function using Halley method produces stream of increasingly accurate results Modulo the usual caveats If the stream becomes constant it converges no further elements are returned take extremum cos e-3 e-8",
        "hierarchy": "Numeric AD Halley",
        "module": "Numeric.AD.Halley",
        "name": "extremum",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e[b]",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Halley.html#v:findZero",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindZero\u003c/a\u003e\u003c/code\u003e function finds a zero of a scalar function using\n Halley's method; its output is a stream of increasingly accurate\n results.  (Modulo the usual caveats.) If the stream becomes constant\n (\u003ca\u003eit converges\u003c/a\u003e), no further elements are returned.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 10 $ findZero (\\x-\u003ex^2-4) 1\n\u003c/code\u003e\u003c/strong\u003e[1.0,1.8571428571428572,1.9997967892704736,1.9999999999994755,2.0]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Data.Complex\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elast $ take 10 $ findZero ((+1).(^2)) (1 :+ 1)\n\u003c/code\u003e\u003c/strong\u003e0.0 :+ 1.0\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Halley",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e [a]",
        "fct-source": "src/Numeric-AD-Halley.html#findZero",
        "fct-type": "function",
        "title": "findZero"
      },
      "index": {
        "description": "The findZero function finds zero of scalar function using Halley method its output is stream of increasingly accurate results Modulo the usual caveats If the stream becomes constant it converges no further elements are returned Examples take findZero import Data.Complex last take findZero",
        "hierarchy": "Numeric AD Halley",
        "module": "Numeric.AD.Halley",
        "name": "findZero",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e[b]",
        "package": "ad",
        "partial": "Zero",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Halley.html#v:fixedPoint",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efixedPoint\u003c/a\u003e\u003c/code\u003e function find a fixedpoint of a scalar\n function using Halley's method; its output is a stream of\n increasingly accurate results.  (Modulo the usual caveats.)\n\u003c/p\u003e\u003cp\u003eIf the stream becomes constant (\u003ca\u003eit converges\u003c/a\u003e), no further\n elements are returned.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elast $ take 10 $ fixedPoint cos 1\n\u003c/code\u003e\u003c/strong\u003e0.7390851332151607\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Halley",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e [a]",
        "fct-source": "src/Numeric-AD-Halley.html#fixedPoint",
        "fct-type": "function",
        "title": "fixedPoint"
      },
      "index": {
        "description": "The fixedPoint function find fixedpoint of scalar function using Halley method its output is stream of increasingly accurate results Modulo the usual caveats If the stream becomes constant it converges no further elements are returned last take fixedPoint cos",
        "hierarchy": "Numeric AD Halley",
        "module": "Numeric.AD.Halley",
        "name": "fixedPoint",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e[b]",
        "package": "ad",
        "partial": "Point",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Halley.html#v:inverse",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einverse\u003c/a\u003e\u003c/code\u003e function inverts a scalar function using\n Halley's method; its output is a stream of increasingly accurate\n results.  (Modulo the usual caveats.) If the stream becomes constant\n (\u003ca\u003eit converges\u003c/a\u003e), no further elements are returned.\n\u003c/p\u003e\u003cp\u003eNote: the \u003ccode\u003etake 10 $ inverse sqrt 1 (sqrt 10)\u003c/code\u003e example that works for Newton's method\n fails with Halley's method because the preconditions do not hold!\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Halley",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e a -\u003e [a]",
        "fct-source": "src/Numeric-AD-Halley.html#inverse",
        "fct-type": "function",
        "title": "inverse"
      },
      "index": {
        "description": "The inverse function inverts scalar function using Halley method its output is stream of increasingly accurate results Modulo the usual caveats If the stream becomes constant it converges no further elements are returned Note the take inverse sqrt sqrt example that works for Newton method fails with Halley method because the preconditions do not hold",
        "hierarchy": "Numeric AD Halley",
        "module": "Numeric.AD.Halley",
        "name": "inverse",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003eb-\u003e[b]",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "module",
        "fct-source": "src/Numeric-AD-Internal-Classes.html",
        "fct-type": "module",
        "title": "Classes"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "Classes",
        "normalized": "",
        "package": "ad",
        "partial": "Classes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#t:Iso",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "class",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#Iso",
        "fct-type": "class",
        "title": "Iso"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "Iso",
        "normalized": "",
        "package": "ad",
        "partial": "Iso",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#t:Jacobian",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eJacobian\u003c/a\u003e\u003c/code\u003e is used by \u003ccode\u003ederiveMode\u003c/code\u003e but is not exposed\n via \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e to prevent its abuse by end users\n via the \u003ccode\u003eAD\u003c/code\u003e data type.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "class",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#Jacobian",
        "fct-type": "class",
        "title": "Jacobian"
      },
      "index": {
        "description": "Jacobian is used by deriveMode but is not exposed via Mode to prevent its abuse by end users via the AD data type",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "Jacobian",
        "normalized": "",
        "package": "ad",
        "partial": "Jacobian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#t:Lifted",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "class",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#Lifted",
        "fct-type": "class",
        "title": "Lifted"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "Lifted",
        "normalized": "",
        "package": "ad",
        "partial": "Lifted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#t:Mode",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "class",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#Mode",
        "fct-type": "class",
        "title": "Mode"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "Mode",
        "normalized": "",
        "package": "ad",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#t:Primal",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePrimal\u003c/a\u003e\u003c/code\u003e is used by \u003ccode\u003ederiveMode\u003c/code\u003e but is not exposed\n via the \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e class to prevent its abuse by end users\n via the AD data type.\n\u003c/p\u003e\u003cp\u003eIt provides direct access to the result, stripped of its derivative information,\n but this is unsafe in general as (auto . primal) would discard derivative\n information. The end user is protected from accidentally using this function\n by the universal quantification on the various combinators we expose.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "class",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#Primal",
        "fct-type": "class",
        "title": "Primal"
      },
      "index": {
        "description": "Primal is used by deriveMode but is not exposed via the Mode class to prevent its abuse by end users via the AD data type It provides direct access to the result stripped of its derivative information but this is unsafe in general as auto primal would discard derivative information The end user is protected from accidentally using this function by the universal quantification on the various combinators we expose",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "Primal",
        "normalized": "",
        "package": "ad",
        "partial": "Primal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:-42--42--33-",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#%2A%2A%21",
        "fct-type": "method",
        "title": "(**!)"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "(**!) **!",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003et a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:-42--94-",
      "description": {
        "fct-descr": "\u003cp\u003eScalar-vector multiplication\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "a -\u003e t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#%2A%5E",
        "fct-type": "method",
        "title": "(*^)"
      },
      "index": {
        "description": "Scalar-vector multiplication",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "(*^) *^",
        "normalized": "a-\u003eb a-\u003eb a",
        "package": "ad",
        "partial": "",
        "signature": "a-\u003et a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:-43--33-",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#%2B%21",
        "fct-type": "method",
        "title": "(+!)"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "(+!) +!",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003et a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:-47--33-",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#%2F%21",
        "fct-type": "method",
        "title": "(/!)"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "(/!) /!",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003et a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:-60--42--42--62-",
      "description": {
        "fct-descr": "\u003cp\u003eExponentiation, this should be overloaded if you can figure out anything about what is constant!\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#%3C%2A%2A%3E",
        "fct-type": "method",
        "title": "(\u003c**\u003e)"
      },
      "index": {
        "description": "Exponentiation this should be overloaded if you can figure out anything about what is constant",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "(\u003c**\u003e) \u003c**\u003e",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003et a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:-60--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003eVector sum\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#%3C%2B%3E",
        "fct-type": "method",
        "title": "(\u003c+\u003e)"
      },
      "index": {
        "description": "Vector sum",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "(\u003c+\u003e) \u003c+\u003e",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003et a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:-61--61--33-",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e t a -\u003e Bool",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#%3D%3D%21",
        "fct-type": "method",
        "title": "(==!)"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "(==!) ==!",
        "normalized": "a b-\u003ea b-\u003eBool",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003et a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:-94--42-",
      "description": {
        "fct-descr": "\u003cp\u003eVector-scalar multiplication\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#%5E%2A",
        "fct-type": "method",
        "title": "(^*)"
      },
      "index": {
        "description": "Vector-scalar multiplication",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "(^*) ^*",
        "normalized": "a b-\u003eb-\u003ea b",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003ea-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:-94--47-",
      "description": {
        "fct-descr": "\u003cp\u003eScalar division\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#%5E%2F",
        "fct-type": "method",
        "title": "(^/)"
      },
      "index": {
        "description": "Scalar division",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "(^/) ^/",
        "normalized": "a b-\u003eb-\u003ea b",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003ea-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:atan21",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#atan21",
        "fct-type": "method",
        "title": "atan21"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "atan21",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003et a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:auto",
      "description": {
        "fct-descr": "\u003cp\u003eEmbed a constant\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#auto",
        "fct-type": "method",
        "title": "auto"
      },
      "index": {
        "description": "Embed constant",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "auto",
        "normalized": "a-\u003eb a",
        "package": "ad",
        "partial": "",
        "signature": "a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:binary",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e D t a -\u003e D t a -\u003e t a -\u003e t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#binary",
        "fct-type": "method",
        "title": "binary"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "binary",
        "normalized": "(a-\u003ea-\u003ea)-\u003eD b a-\u003eD b a-\u003eb a-\u003eb a-\u003eb a",
        "package": "ad",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003eD t a-\u003eD t a-\u003et a-\u003et a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:compare1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e t a -\u003e Ordering",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#compare1",
        "fct-type": "method",
        "title": "compare1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "compare1",
        "normalized": "a b-\u003ea b-\u003eOrdering",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003et a-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:decodeFloat1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e (Integer, Int)",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#decodeFloat1",
        "fct-type": "method",
        "title": "decodeFloat1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "decodeFloat1",
        "normalized": "a b-\u003e(Integer,Int)",
        "package": "ad",
        "partial": "Float",
        "signature": "t a-\u003e(Integer,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:deriveLifted",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ederiveLifted\u003c/a\u003e\u003c/code\u003e t\u003c/code\u003e provides\n\u003c/p\u003e\u003cpre\u003e instance Lifted $t\n\u003c/pre\u003e\u003cp\u003egiven supplied instances for\n\u003c/p\u003e\u003cpre\u003e instance Lifted $t =\u003e Primal $t where ...\n instance Lifted $t =\u003e Jacobian $t where ...\n\u003c/pre\u003e\u003cp\u003eThe seemingly redundant \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLifted\u003c/a\u003e\u003c/code\u003e $t\u003c/code\u003e constraints are caused by Template Haskell staging restrictions.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "([Q Pred] -\u003e [Q Pred]) -\u003e Q Type -\u003e Q [Dec]",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#deriveLifted",
        "fct-type": "function",
        "title": "deriveLifted"
      },
      "index": {
        "description": "deriveLifted provides instance Lifted given supplied instances for instance Lifted Primal where instance Lifted Jacobian where The seemingly redundant Lifted constraints are caused by Template Haskell staging restrictions",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "deriveLifted",
        "normalized": "([Q Pred]-\u003e[Q Pred])-\u003eQ Type-\u003eQ[Dec]",
        "package": "ad",
        "partial": "Lifted",
        "signature": "([Q Pred]-\u003e[Q Pred])-\u003eQ Type-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:deriveNumeric",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ederiveNumeric\u003c/a\u003e\u003c/code\u003e f g\u003c/code\u003e provides the following instances:\n\u003c/p\u003e\u003cpre\u003e instance ('Lifted' $f, 'Num' a, 'Enum' a) =\u003e 'Enum' ($g a)\n instance ('Lifted' $f, 'Num' a, 'Eq' a) =\u003e 'Eq' ($g a)\n instance ('Lifted' $f, 'Num' a, 'Ord' a) =\u003e 'Ord' ($g a)\n instance ('Lifted' $f, 'Num' a, 'Bounded' a) =\u003e 'Bounded' ($g a)\n\u003c/pre\u003e\u003cpre\u003e instance ('Lifted' $f, 'Show' a) =\u003e 'Show' ($g a)\n instance ('Lifted' $f, 'Num' a) =\u003e 'Num' ($g a)\n instance ('Lifted' $f, 'Fractional' a) =\u003e 'Fractional' ($g a)\n instance ('Lifted' $f, 'Floating' a) =\u003e 'Floating' ($g a)\n instance ('Lifted' $f, 'RealFloat' a) =\u003e 'RealFloat' ($g a)\n instance ('Lifted' $f, 'RealFrac' a) =\u003e 'RealFrac' ($g a)\n instance ('Lifted' $f, 'Real' a) =\u003e 'Real' ($g a)\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "([Q Pred] -\u003e [Q Pred]) -\u003e Q Type -\u003e Q [Dec]",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#deriveNumeric",
        "fct-type": "function",
        "title": "deriveNumeric"
      },
      "index": {
        "description": "deriveNumeric provides the following instances instance Lifted Num Enum Enum instance Lifted Num Eq Eq instance Lifted Num Ord Ord instance Lifted Num Bounded Bounded instance Lifted Show Show instance Lifted Num Num instance Lifted Fractional Fractional instance Lifted Floating Floating instance Lifted RealFloat RealFloat instance Lifted RealFrac RealFrac instance Lifted Real Real",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "deriveNumeric",
        "normalized": "([Q Pred]-\u003e[Q Pred])-\u003eQ Type-\u003eQ[Dec]",
        "package": "ad",
        "partial": "Numeric",
        "signature": "([Q Pred]-\u003e[Q Pred])-\u003eQ Type-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:encodeFloat1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "Integer -\u003e Int -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#encodeFloat1",
        "fct-type": "method",
        "title": "encodeFloat1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "encodeFloat1",
        "normalized": "Integer-\u003eInt-\u003ea b",
        "package": "ad",
        "partial": "Float",
        "signature": "Integer-\u003eInt-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:enumFrom1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e [t a]",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#enumFrom1",
        "fct-type": "method",
        "title": "enumFrom1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "enumFrom1",
        "normalized": "a b-\u003e[a b]",
        "package": "ad",
        "partial": "From",
        "signature": "t a-\u003e[t a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:enumFromThen1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e t a -\u003e [t a]",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#enumFromThen1",
        "fct-type": "method",
        "title": "enumFromThen1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "enumFromThen1",
        "normalized": "a b-\u003ea b-\u003e[a b]",
        "package": "ad",
        "partial": "From Then",
        "signature": "t a-\u003et a-\u003e[t a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:enumFromThenTo1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e t a -\u003e t a -\u003e [t a]",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#enumFromThenTo1",
        "fct-type": "method",
        "title": "enumFromThenTo1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "enumFromThenTo1",
        "normalized": "a b-\u003ea b-\u003ea b-\u003e[a b]",
        "package": "ad",
        "partial": "From Then To",
        "signature": "t a-\u003et a-\u003et a-\u003e[t a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:enumFromTo1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e t a -\u003e [t a]",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#enumFromTo1",
        "fct-type": "method",
        "title": "enumFromTo1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "enumFromTo1",
        "normalized": "a b-\u003ea b-\u003e[a b]",
        "package": "ad",
        "partial": "From To",
        "signature": "t a-\u003et a-\u003e[t a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:erf1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#erf1",
        "fct-type": "method",
        "title": "erf1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "erf1",
        "normalized": "a b-\u003ea b",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:erfc1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#erfc1",
        "fct-type": "method",
        "title": "erfc1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "erfc1",
        "normalized": "a b-\u003ea b",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:exp1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#exp1",
        "fct-type": "method",
        "title": "exp1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "exp1",
        "normalized": "a b-\u003ea b",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:exponent1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e Int",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#exponent1",
        "fct-type": "method",
        "title": "exponent1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "exponent1",
        "normalized": "a b-\u003eInt",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:floatDigits1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e Int",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#floatDigits1",
        "fct-type": "method",
        "title": "floatDigits1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "floatDigits1",
        "normalized": "a b-\u003eInt",
        "package": "ad",
        "partial": "Digits",
        "signature": "t a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:floatRadix1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e Integer",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#floatRadix1",
        "fct-type": "method",
        "title": "floatRadix1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "floatRadix1",
        "normalized": "a b-\u003eInteger",
        "package": "ad",
        "partial": "Radix",
        "signature": "t a-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:floatRange1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e (Int, Int)",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#floatRange1",
        "fct-type": "method",
        "title": "floatRange1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "floatRange1",
        "normalized": "a b-\u003e(Int,Int)",
        "package": "ad",
        "partial": "Range",
        "signature": "t a-\u003e(Int,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:fromEnum1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e Int",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#fromEnum1",
        "fct-type": "method",
        "title": "fromEnum1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "fromEnum1",
        "normalized": "a b-\u003eInt",
        "package": "ad",
        "partial": "Enum",
        "signature": "t a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:fromInteger1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "Integer -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#fromInteger1",
        "fct-type": "method",
        "title": "fromInteger1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "fromInteger1",
        "normalized": "Integer-\u003ea b",
        "package": "ad",
        "partial": "Integer",
        "signature": "Integer-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:fromRational1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "Rational -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#fromRational1",
        "fct-type": "method",
        "title": "fromRational1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "fromRational1",
        "normalized": "Rational-\u003ea b",
        "package": "ad",
        "partial": "Rational",
        "signature": "Rational-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:inverf1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#inverf1",
        "fct-type": "method",
        "title": "inverf1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "inverf1",
        "normalized": "a b-\u003ea b",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:inverfc1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#inverfc1",
        "fct-type": "method",
        "title": "inverfc1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "inverfc1",
        "normalized": "a b-\u003ea b",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:invnormcdf1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#invnormcdf1",
        "fct-type": "method",
        "title": "invnormcdf1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "invnormcdf1",
        "normalized": "a b-\u003ea b",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:isKnownConstant",
      "description": {
        "fct-descr": "\u003cp\u003eallowed to return False for items with a zero derivative, but we'll give more NaNs than strictly necessary\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e Bool",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#isKnownConstant",
        "fct-type": "method",
        "title": "isKnownConstant"
      },
      "index": {
        "description": "allowed to return False for items with zero derivative but we ll give more NaNs than strictly necessary",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "isKnownConstant",
        "normalized": "a b-\u003eBool",
        "package": "ad",
        "partial": "Known Constant",
        "signature": "t a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:isKnownZero",
      "description": {
        "fct-descr": "\u003cp\u003eallowed to return False for zero, but we give more NaN's than strictly necessary then\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e Bool",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#isKnownZero",
        "fct-type": "method",
        "title": "isKnownZero"
      },
      "index": {
        "description": "allowed to return False for zero but we give more NaN than strictly necessary then",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "isKnownZero",
        "normalized": "a b-\u003eBool",
        "package": "ad",
        "partial": "Known Zero",
        "signature": "t a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:isNaN1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e Bool",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#isNaN1",
        "fct-type": "method",
        "title": "isNaN1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "isNaN1",
        "normalized": "a b-\u003eBool",
        "package": "ad",
        "partial": "Na",
        "signature": "t a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:iso",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "f a -\u003e f b",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#iso",
        "fct-type": "method",
        "title": "iso"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "iso",
        "normalized": "a b-\u003ea c",
        "package": "ad",
        "partial": "",
        "signature": "f a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:lift1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "(a -\u003e a) -\u003e (D t a -\u003e D t a) -\u003e t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#lift1",
        "fct-type": "method",
        "title": "lift1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "lift1",
        "normalized": "(a-\u003ea)-\u003e(D b a-\u003eD b a)-\u003eb a-\u003eb a",
        "package": "ad",
        "partial": "",
        "signature": "(a-\u003ea)-\u003e(D t a-\u003eD t a)-\u003et a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:lift1_",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "(a -\u003e a) -\u003e (D t a -\u003e D t a -\u003e D t a) -\u003e t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#lift1_",
        "fct-type": "method",
        "title": "lift1_"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "lift1_",
        "normalized": "(a-\u003ea)-\u003e(D b a-\u003eD b a-\u003eD b a)-\u003eb a-\u003eb a",
        "package": "ad",
        "partial": "",
        "signature": "(a-\u003ea)-\u003e(D t a-\u003eD t a-\u003eD t a)-\u003et a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:lift2",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e (D t a -\u003e D t a -\u003e (D t a, D t a)) -\u003e t a -\u003e t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#lift2",
        "fct-type": "method",
        "title": "lift2"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "lift2",
        "normalized": "(a-\u003ea-\u003ea)-\u003e(D b a-\u003eD b a-\u003e(D b a,D b a))-\u003eb a-\u003eb a-\u003eb a",
        "package": "ad",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003e(D t a-\u003eD t a-\u003e(D t a,D t a))-\u003et a-\u003et a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:lift2_",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e (D t a -\u003e D t a -\u003e D t a -\u003e (D t a, D t a)) -\u003e t a -\u003e t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#lift2_",
        "fct-type": "method",
        "title": "lift2_"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "lift2_",
        "normalized": "(a-\u003ea-\u003ea)-\u003e(D b a-\u003eD b a-\u003eD b a-\u003e(D b a,D b a))-\u003eb a-\u003eb a-\u003eb a",
        "package": "ad",
        "partial": "",
        "signature": "(a-\u003ea-\u003ea)-\u003e(D t a-\u003eD t a-\u003eD t a-\u003e(D t a,D t a))-\u003et a-\u003et a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:maxBound1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#maxBound1",
        "fct-type": "method",
        "title": "maxBound1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "maxBound1",
        "normalized": "",
        "package": "ad",
        "partial": "Bound",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:minBound1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#minBound1",
        "fct-type": "method",
        "title": "minBound1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "minBound1",
        "normalized": "",
        "package": "ad",
        "partial": "Bound",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:negate1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#negate1",
        "fct-type": "method",
        "title": "negate1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "negate1",
        "normalized": "a b-\u003ea b",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:normcdf1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#normcdf1",
        "fct-type": "method",
        "title": "normcdf1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "normcdf1",
        "normalized": "a b-\u003ea b",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:one",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#one",
        "fct-type": "function",
        "title": "one"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "one",
        "normalized": "",
        "package": "ad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:osi",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "f b -\u003e f a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#osi",
        "fct-type": "method",
        "title": "osi"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "osi",
        "normalized": "a b-\u003ea c",
        "package": "ad",
        "partial": "",
        "signature": "f b-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:pi1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#pi1",
        "fct-type": "method",
        "title": "pi1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "pi1",
        "normalized": "",
        "package": "ad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:primal",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#primal",
        "fct-type": "method",
        "title": "primal"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "primal",
        "normalized": "a b-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:properFraction1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e (b, t a)",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#properFraction1",
        "fct-type": "method",
        "title": "properFraction1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "properFraction1",
        "normalized": "a b-\u003e(c,a b)",
        "package": "ad",
        "partial": "Fraction",
        "signature": "t a-\u003e(b,t a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:recip1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#recip1",
        "fct-type": "method",
        "title": "recip1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "recip1",
        "normalized": "a b-\u003ea b",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:scaleFloat1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "Int -\u003e t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#scaleFloat1",
        "fct-type": "method",
        "title": "scaleFloat1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "scaleFloat1",
        "normalized": "Int-\u003ea b-\u003ea b",
        "package": "ad",
        "partial": "Float",
        "signature": "Int-\u003et a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:showsPrec1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "Int -\u003e t a -\u003e ShowS",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#showsPrec1",
        "fct-type": "method",
        "title": "showsPrec1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "showsPrec1",
        "normalized": "Int-\u003ea b-\u003eShowS",
        "package": "ad",
        "partial": "Prec",
        "signature": "Int-\u003et a-\u003eShowS"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:significand1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#significand1",
        "fct-type": "method",
        "title": "significand1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "significand1",
        "normalized": "a b-\u003ea b",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:sin1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#sin1",
        "fct-type": "method",
        "title": "sin1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "sin1",
        "normalized": "a b-\u003ea b",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:sinh1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#sinh1",
        "fct-type": "method",
        "title": "sinh1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "sinh1",
        "normalized": "a b-\u003ea b",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:succ1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#succ1",
        "fct-type": "method",
        "title": "succ1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "succ1",
        "normalized": "a b-\u003ea b",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:toEnum1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "Int -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#toEnum1",
        "fct-type": "method",
        "title": "toEnum1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "toEnum1",
        "normalized": "Int-\u003ea b",
        "package": "ad",
        "partial": "Enum",
        "signature": "Int-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:toRational1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e Rational",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#toRational1",
        "fct-type": "method",
        "title": "toRational1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "toRational1",
        "normalized": "a b-\u003eRational",
        "package": "ad",
        "partial": "Rational",
        "signature": "t a-\u003eRational"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:truncate1",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e b",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#truncate1",
        "fct-type": "method",
        "title": "truncate1"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "truncate1",
        "normalized": "a b-\u003ec",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:unary",
      "description": {
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "(a -\u003e a) -\u003e D t a -\u003e t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#unary",
        "fct-type": "method",
        "title": "unary"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "unary",
        "normalized": "(a-\u003ea)-\u003eD b a-\u003eb a-\u003eb a",
        "package": "ad",
        "partial": "",
        "signature": "(a-\u003ea)-\u003eD t a-\u003et a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:zero",
      "description": {
        "fct-descr": "\u003cpre\u003e 'zero' = 'lift' 0\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Internal.Classes",
        "fct-package": "ad",
        "fct-signature": "t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#zero",
        "fct-type": "method",
        "title": "zero"
      },
      "index": {
        "description": "zero lift",
        "hierarchy": "Numeric AD Internal Classes",
        "module": "Numeric.AD.Internal.Classes",
        "name": "zero",
        "normalized": "",
        "package": "ad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Combinators.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCombinators used internally by \u003ccode\u003eNumeric.AD\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.AD.Internal.Combinators",
        "fct-package": "ad",
        "fct-signature": "module",
        "fct-source": "src/Numeric-AD-Internal-Combinators.html",
        "fct-type": "module",
        "title": "Combinators"
      },
      "index": {
        "description": "Combinators used internally by Numeric.AD",
        "hierarchy": "Numeric AD Internal Combinators",
        "module": "Numeric.AD.Internal.Combinators",
        "name": "Combinators",
        "normalized": "",
        "package": "ad",
        "partial": "Combinators",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Combinators.html#v:zipWithDefaultT",
      "description": {
        "fct-descr": "\u003cp\u003eZip a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e with a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e g\u003c/code\u003e assuming \u003ccode\u003ef\u003c/code\u003e, using a default value after \u003ccode\u003ef\u003c/code\u003e is exhausted.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Combinators",
        "fct-package": "ad",
        "fct-signature": "a -\u003e (a -\u003e b -\u003e c) -\u003e f a -\u003e g b -\u003e g c",
        "fct-source": "src/Numeric-AD-Internal-Combinators.html#zipWithDefaultT",
        "fct-type": "function",
        "title": "zipWithDefaultT"
      },
      "index": {
        "description": "Zip Foldable with Traversable assuming using default value after is exhausted",
        "hierarchy": "Numeric AD Internal Combinators",
        "module": "Numeric.AD.Internal.Combinators",
        "name": "zipWithDefaultT",
        "normalized": "a-\u003e(a-\u003eb-\u003ec)-\u003ed a-\u003ee b-\u003ee c",
        "package": "ad",
        "partial": "With Default",
        "signature": "a-\u003e(a-\u003eb-\u003ec)-\u003ef a-\u003eg b-\u003eg c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Combinators.html#v:zipWithT",
      "description": {
        "fct-descr": "\u003cp\u003eZip a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e with a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e g\u003c/code\u003e assuming \u003ccode\u003ef\u003c/code\u003e has at least as many entries as \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Combinators",
        "fct-package": "ad",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e f a -\u003e g b -\u003e g c",
        "fct-source": "src/Numeric-AD-Internal-Combinators.html#zipWithT",
        "fct-type": "function",
        "title": "zipWithT"
      },
      "index": {
        "description": "Zip Foldable with Traversable assuming has at least as many entries as",
        "hierarchy": "Numeric AD Internal Combinators",
        "module": "Numeric.AD.Internal.Combinators",
        "name": "zipWithT",
        "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ee b-\u003ee c",
        "package": "ad",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003ef a-\u003eg b-\u003eg c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Composition.html#",
      "description": {
        "fct-module": "Numeric.AD.Internal.Composition",
        "fct-package": "ad",
        "fct-signature": "module",
        "fct-source": "src/Numeric-AD-Internal-Composition.html",
        "fct-type": "module",
        "title": "Composition"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Composition",
        "module": "Numeric.AD.Internal.Composition",
        "name": "Composition",
        "normalized": "",
        "package": "ad",
        "partial": "Composition",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Composition.html#t:ComposeFunctor",
      "description": {
        "fct-descr": "\u003cp\u003eFunctor composition, used to nest the use of jacobian and grad\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Composition",
        "fct-package": "ad",
        "fct-signature": "newtype",
        "fct-source": "src/Numeric-AD-Internal-Composition.html#ComposeFunctor",
        "fct-type": "newtype",
        "title": "ComposeFunctor"
      },
      "index": {
        "description": "Functor composition used to nest the use of jacobian and grad",
        "hierarchy": "Numeric AD Internal Composition",
        "module": "Numeric.AD.Internal.Composition",
        "name": "ComposeFunctor",
        "normalized": "",
        "package": "ad",
        "partial": "Compose Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Composition.html#t:ComposeMode",
      "description": {
        "fct-descr": "\u003cp\u003eThe composition of two AD modes is an AD mode in its own right\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Composition",
        "fct-package": "ad",
        "fct-signature": "newtype",
        "fct-source": "src/Numeric-AD-Internal-Composition.html#ComposeMode",
        "fct-type": "newtype",
        "title": "ComposeMode"
      },
      "index": {
        "description": "The composition of two AD modes is an AD mode in its own right",
        "hierarchy": "Numeric AD Internal Composition",
        "module": "Numeric.AD.Internal.Composition",
        "name": "ComposeMode",
        "normalized": "",
        "package": "ad",
        "partial": "Compose Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Composition.html#v:ComposeFunctor",
      "description": {
        "fct-module": "Numeric.AD.Internal.Composition",
        "fct-package": "ad",
        "fct-signature": "ComposeFunctor",
        "fct-source": "src/Numeric-AD-Internal-Composition.html#ComposeFunctor",
        "fct-type": "function",
        "title": "ComposeFunctor"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Composition",
        "module": "Numeric.AD.Internal.Composition",
        "name": "ComposeFunctor",
        "normalized": "",
        "package": "ad",
        "partial": "Compose Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Composition.html#v:ComposeMode",
      "description": {
        "fct-module": "Numeric.AD.Internal.Composition",
        "fct-package": "ad",
        "fct-signature": "ComposeMode",
        "fct-source": "src/Numeric-AD-Internal-Composition.html#ComposeMode",
        "fct-type": "function",
        "title": "ComposeMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Composition",
        "module": "Numeric.AD.Internal.Composition",
        "name": "ComposeMode",
        "normalized": "",
        "package": "ad",
        "partial": "Compose Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Composition.html#v:composeMode",
      "description": {
        "fct-module": "Numeric.AD.Internal.Composition",
        "fct-package": "ad",
        "fct-signature": "AD f (AD g a) -\u003e AD (ComposeMode f g) a",
        "fct-source": "src/Numeric-AD-Internal-Composition.html#composeMode",
        "fct-type": "function",
        "title": "composeMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Composition",
        "module": "Numeric.AD.Internal.Composition",
        "name": "composeMode",
        "normalized": "AD a(AD b c)-\u003eAD(ComposeMode a b)c",
        "package": "ad",
        "partial": "Mode",
        "signature": "AD f(AD g a)-\u003eAD(ComposeMode f g)a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Composition.html#v:decomposeFunctor",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.AD.Internal.Composition",
        "fct-package": "ad",
        "fct-signature": "f (g a)",
        "fct-source": "src/Numeric-AD-Internal-Composition.html#ComposeFunctor",
        "fct-type": "function",
        "title": "decomposeFunctor"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Composition",
        "module": "Numeric.AD.Internal.Composition",
        "name": "decomposeFunctor",
        "normalized": "",
        "package": "ad",
        "partial": "Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Composition.html#v:decomposeMode",
      "description": {
        "fct-module": "Numeric.AD.Internal.Composition",
        "fct-package": "ad",
        "fct-signature": "AD (ComposeMode f g) a -\u003e AD f (AD g a)",
        "fct-source": "src/Numeric-AD-Internal-Composition.html#decomposeMode",
        "fct-type": "function",
        "title": "decomposeMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Composition",
        "module": "Numeric.AD.Internal.Composition",
        "name": "decomposeMode",
        "normalized": "AD(ComposeMode a b)c-\u003eAD a(AD b c)",
        "package": "ad",
        "partial": "Mode",
        "signature": "AD(ComposeMode f g)a-\u003eAD f(AD g a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Composition.html#v:runComposeMode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.AD.Internal.Composition",
        "fct-package": "ad",
        "fct-signature": "f (AD g a)",
        "fct-source": "src/Numeric-AD-Internal-Composition.html#ComposeMode",
        "fct-type": "function",
        "title": "runComposeMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Composition",
        "module": "Numeric.AD.Internal.Composition",
        "name": "runComposeMode",
        "normalized": "",
        "package": "ad",
        "partial": "Compose Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Dense.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDense Forward AD. Useful when the result involves the majority of the input\n elements. Do not use for \u003ccode\u003e\u003ca\u003ehessian\u003c/a\u003e\u003c/code\u003e and beyond, since\n they only contain a small number of unique \u003ccode\u003en\u003c/code\u003eth derivatives --\n \u003ccode\u003e(n + k - 1) \u003ccode\u003echoose\u003c/code\u003e k\u003c/code\u003e for functions of \u003ccode\u003ek\u003c/code\u003e inputs rather than the\n \u003ccode\u003ek^n\u003c/code\u003e that would be generated by using \u003ccode\u003e\u003ca\u003eDense\u003c/a\u003e\u003c/code\u003e, not to mention the redundant\n intermediate derivatives that would be\n calculated over and over during that process!\n\u003c/p\u003e\u003cp\u003eAssumes all instances of \u003ccode\u003ef\u003c/code\u003e have the same number of elements.\n\u003c/p\u003e\u003cp\u003eNB: We don't need the full power of \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e here, we could get\n by with a notion of zippable that can plug in 0's for the missing\n entries. This might allow for gradients where \u003ccode\u003ef\u003c/code\u003e has exponentials like \u003ccode\u003e((-\u003e) a)\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.AD.Internal.Dense",
        "fct-package": "ad",
        "fct-signature": "module",
        "fct-source": "src/Numeric-AD-Internal-Dense.html",
        "fct-type": "module",
        "title": "Dense"
      },
      "index": {
        "description": "Dense Forward AD Useful when the result involves the majority of the input elements Do not use for hessian and beyond since they only contain small number of unique th derivatives choose for functions of inputs rather than the that would be generated by using Dense not to mention the redundant intermediate derivatives that would be calculated over and over during that process Assumes all instances of have the same number of elements NB We don need the full power of Traversable here we could get by with notion of zippable that can plug in for the missing entries This might allow for gradients where has exponentials like",
        "hierarchy": "Numeric AD Internal Dense",
        "module": "Numeric.AD.Internal.Dense",
        "name": "Dense",
        "normalized": "",
        "package": "ad",
        "partial": "Dense",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Dense.html#t:Dense",
      "description": {
        "fct-module": "Numeric.AD.Internal.Dense",
        "fct-package": "ad",
        "fct-signature": "data",
        "fct-source": "src/Numeric-AD-Internal-Dense.html#Dense",
        "fct-type": "data",
        "title": "Dense"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Dense",
        "module": "Numeric.AD.Internal.Dense",
        "name": "Dense",
        "normalized": "",
        "package": "ad",
        "partial": "Dense",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Dense.html#v:Dense",
      "description": {
        "fct-module": "Numeric.AD.Internal.Dense",
        "fct-package": "ad",
        "fct-signature": "Dense !a (f a)",
        "fct-source": "src/Numeric-AD-Internal-Dense.html#Dense",
        "fct-type": "function",
        "title": "Dense"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Dense",
        "module": "Numeric.AD.Internal.Dense",
        "name": "Dense",
        "normalized": "",
        "package": "ad",
        "partial": "Dense",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Dense.html#v:Lift",
      "description": {
        "fct-module": "Numeric.AD.Internal.Dense",
        "fct-package": "ad",
        "fct-signature": "Lift !a",
        "fct-source": "src/Numeric-AD-Internal-Dense.html#Dense",
        "fct-type": "function",
        "title": "Lift"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Dense",
        "module": "Numeric.AD.Internal.Dense",
        "name": "Lift",
        "normalized": "",
        "package": "ad",
        "partial": "Lift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Dense.html#v:Zero",
      "description": {
        "fct-module": "Numeric.AD.Internal.Dense",
        "fct-package": "ad",
        "fct-signature": "Zero",
        "fct-source": "src/Numeric-AD-Internal-Dense.html#Dense",
        "fct-type": "function",
        "title": "Zero"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Dense",
        "module": "Numeric.AD.Internal.Dense",
        "name": "Zero",
        "normalized": "",
        "package": "ad",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Dense.html#v:apply",
      "description": {
        "fct-module": "Numeric.AD.Internal.Dense",
        "fct-package": "ad",
        "fct-signature": "(f (AD (Dense f) a) -\u003e b) -\u003e f a -\u003e b",
        "fct-source": "src/Numeric-AD-Internal-Dense.html#apply",
        "fct-type": "function",
        "title": "apply"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Dense",
        "module": "Numeric.AD.Internal.Dense",
        "name": "apply",
        "normalized": "(a(AD(Dense a)b)-\u003ec)-\u003ea b-\u003ec",
        "package": "ad",
        "partial": "",
        "signature": "(f(AD(Dense f)a)-\u003eb)-\u003ef a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Dense.html#v:ds",
      "description": {
        "fct-module": "Numeric.AD.Internal.Dense",
        "fct-package": "ad",
        "fct-signature": "f a -\u003e AD (Dense f) a -\u003e f a",
        "fct-source": "src/Numeric-AD-Internal-Dense.html#ds",
        "fct-type": "function",
        "title": "ds"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Dense",
        "module": "Numeric.AD.Internal.Dense",
        "name": "ds",
        "normalized": "a b-\u003eAD(Dense a)b-\u003ea b",
        "package": "ad",
        "partial": "",
        "signature": "f a-\u003eAD(Dense f)a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Dense.html#v:ds-39-",
      "description": {
        "fct-module": "Numeric.AD.Internal.Dense",
        "fct-package": "ad",
        "fct-signature": "f a -\u003e AD (Dense f) a -\u003e (a, f a)",
        "fct-source": "src/Numeric-AD-Internal-Dense.html#ds%27",
        "fct-type": "function",
        "title": "ds'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Dense",
        "module": "Numeric.AD.Internal.Dense",
        "name": "ds'",
        "normalized": "a b-\u003eAD(Dense a)b-\u003e(b,a b)",
        "package": "ad",
        "partial": "",
        "signature": "f a-\u003eAD(Dense f)a-\u003e(a,f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Dense.html#v:vars",
      "description": {
        "fct-module": "Numeric.AD.Internal.Dense",
        "fct-package": "ad",
        "fct-signature": "f a -\u003e f (AD (Dense f) a)",
        "fct-source": "src/Numeric-AD-Internal-Dense.html#vars",
        "fct-type": "function",
        "title": "vars"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Dense",
        "module": "Numeric.AD.Internal.Dense",
        "name": "vars",
        "normalized": "a b-\u003ea(AD(Dense a)b)",
        "package": "ad",
        "partial": "",
        "signature": "f a-\u003ef(AD(Dense f)a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnsafe and often partial combinators intended for internal usage.\n\u003c/p\u003e\u003cp\u003eHandle with care.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.AD.Internal.Forward",
        "fct-package": "ad",
        "fct-signature": "module",
        "fct-source": "src/Numeric-AD-Internal-Forward.html",
        "fct-type": "module",
        "title": "Forward"
      },
      "index": {
        "description": "Unsafe and often partial combinators intended for internal usage Handle with care",
        "hierarchy": "Numeric AD Internal Forward",
        "module": "Numeric.AD.Internal.Forward",
        "name": "Forward",
        "normalized": "",
        "package": "ad",
        "partial": "Forward",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#t:Forward",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eForward\u003c/a\u003e\u003c/code\u003e mode AD\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Forward",
        "fct-package": "ad",
        "fct-signature": "data",
        "fct-source": "src/Numeric-AD-Internal-Forward.html#Forward",
        "fct-type": "data",
        "title": "Forward"
      },
      "index": {
        "description": "Forward mode AD",
        "hierarchy": "Numeric AD Internal Forward",
        "module": "Numeric.AD.Internal.Forward",
        "name": "Forward",
        "normalized": "",
        "package": "ad",
        "partial": "Forward",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#v:Forward",
      "description": {
        "fct-module": "Numeric.AD.Internal.Forward",
        "fct-package": "ad",
        "fct-signature": "Forward !a a",
        "fct-source": "src/Numeric-AD-Internal-Forward.html#Forward",
        "fct-type": "function",
        "title": "Forward"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Forward",
        "module": "Numeric.AD.Internal.Forward",
        "name": "Forward",
        "normalized": "",
        "package": "ad",
        "partial": "Forward",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#v:Lift",
      "description": {
        "fct-module": "Numeric.AD.Internal.Forward",
        "fct-package": "ad",
        "fct-signature": "Lift !a",
        "fct-source": "src/Numeric-AD-Internal-Forward.html#Forward",
        "fct-type": "function",
        "title": "Lift"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Forward",
        "module": "Numeric.AD.Internal.Forward",
        "name": "Lift",
        "normalized": "",
        "package": "ad",
        "partial": "Lift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#v:Zero",
      "description": {
        "fct-module": "Numeric.AD.Internal.Forward",
        "fct-package": "ad",
        "fct-signature": "Zero",
        "fct-source": "src/Numeric-AD-Internal-Forward.html#Forward",
        "fct-type": "function",
        "title": "Zero"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Forward",
        "module": "Numeric.AD.Internal.Forward",
        "name": "Zero",
        "normalized": "",
        "package": "ad",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#v:apply",
      "description": {
        "fct-module": "Numeric.AD.Internal.Forward",
        "fct-package": "ad",
        "fct-signature": "(AD Forward a -\u003e b) -\u003e a -\u003e b",
        "fct-source": "src/Numeric-AD-Internal-Forward.html#apply",
        "fct-type": "function",
        "title": "apply"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Forward",
        "module": "Numeric.AD.Internal.Forward",
        "name": "apply",
        "normalized": "(AD Forward a-\u003eb)-\u003ea-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "(AD Forward a-\u003eb)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#v:bind",
      "description": {
        "fct-module": "Numeric.AD.Internal.Forward",
        "fct-package": "ad",
        "fct-signature": "(f (AD Forward a) -\u003e b) -\u003e f a -\u003e f b",
        "fct-source": "src/Numeric-AD-Internal-Forward.html#bind",
        "fct-type": "function",
        "title": "bind"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Forward",
        "module": "Numeric.AD.Internal.Forward",
        "name": "bind",
        "normalized": "(a(AD Forward b)-\u003ec)-\u003ea b-\u003ea c",
        "package": "ad",
        "partial": "",
        "signature": "(f(AD Forward a)-\u003eb)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#v:bind-39-",
      "description": {
        "fct-module": "Numeric.AD.Internal.Forward",
        "fct-package": "ad",
        "fct-signature": "(f (AD Forward a) -\u003e b) -\u003e f a -\u003e (b, f b)",
        "fct-source": "src/Numeric-AD-Internal-Forward.html#bind%27",
        "fct-type": "function",
        "title": "bind'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Forward",
        "module": "Numeric.AD.Internal.Forward",
        "name": "bind'",
        "normalized": "(a(AD Forward b)-\u003ec)-\u003ea b-\u003e(c,a c)",
        "package": "ad",
        "partial": "",
        "signature": "(f(AD Forward a)-\u003eb)-\u003ef a-\u003e(b,f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#v:bindWith",
      "description": {
        "fct-module": "Numeric.AD.Internal.Forward",
        "fct-package": "ad",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e (f (AD Forward a) -\u003e b) -\u003e f a -\u003e f c",
        "fct-source": "src/Numeric-AD-Internal-Forward.html#bindWith",
        "fct-type": "function",
        "title": "bindWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Forward",
        "module": "Numeric.AD.Internal.Forward",
        "name": "bindWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003e(d(AD Forward a)-\u003eb)-\u003ed a-\u003ed c",
        "package": "ad",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003e(f(AD Forward a)-\u003eb)-\u003ef a-\u003ef c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#v:bindWith-39-",
      "description": {
        "fct-module": "Numeric.AD.Internal.Forward",
        "fct-package": "ad",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e (f (AD Forward a) -\u003e b) -\u003e f a -\u003e (b, f c)",
        "fct-source": "src/Numeric-AD-Internal-Forward.html#bindWith%27",
        "fct-type": "function",
        "title": "bindWith'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Forward",
        "module": "Numeric.AD.Internal.Forward",
        "name": "bindWith'",
        "normalized": "(a-\u003eb-\u003ec)-\u003e(d(AD Forward a)-\u003eb)-\u003ed a-\u003e(b,d c)",
        "package": "ad",
        "partial": "With'",
        "signature": "(a-\u003eb-\u003ec)-\u003e(f(AD Forward a)-\u003eb)-\u003ef a-\u003e(b,f c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#v:bundle",
      "description": {
        "fct-module": "Numeric.AD.Internal.Forward",
        "fct-package": "ad",
        "fct-signature": "a -\u003e a -\u003e AD Forward a",
        "fct-source": "src/Numeric-AD-Internal-Forward.html#bundle",
        "fct-type": "function",
        "title": "bundle"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Forward",
        "module": "Numeric.AD.Internal.Forward",
        "name": "bundle",
        "normalized": "a-\u003ea-\u003eAD Forward a",
        "package": "ad",
        "partial": "",
        "signature": "a-\u003ea-\u003eAD Forward a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#v:tangent",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the \u003ccode\u003e\u003ca\u003etangent\u003c/a\u003e\u003c/code\u003e using forward mode AD.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Forward",
        "fct-package": "ad",
        "fct-signature": "AD Forward a -\u003e a",
        "fct-source": "src/Numeric-AD-Internal-Forward.html#tangent",
        "fct-type": "function",
        "title": "tangent"
      },
      "index": {
        "description": "Calculate the tangent using forward mode AD",
        "hierarchy": "Numeric AD Internal Forward",
        "module": "Numeric.AD.Internal.Forward",
        "name": "tangent",
        "normalized": "AD Forward a-\u003ea",
        "package": "ad",
        "partial": "",
        "signature": "AD Forward a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#v:transposeWith",
      "description": {
        "fct-module": "Numeric.AD.Internal.Forward",
        "fct-package": "ad",
        "fct-signature": "(b -\u003e f a -\u003e c) -\u003e f (g a) -\u003e g b -\u003e g c",
        "fct-source": "src/Numeric-AD-Internal-Forward.html#transposeWith",
        "fct-type": "function",
        "title": "transposeWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Forward",
        "module": "Numeric.AD.Internal.Forward",
        "name": "transposeWith",
        "normalized": "(a-\u003eb c-\u003ed)-\u003eb(e c)-\u003ee a-\u003ee d",
        "package": "ad",
        "partial": "With",
        "signature": "(b-\u003ef a-\u003ec)-\u003ef(g a)-\u003eg b-\u003eg c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#v:unbundle",
      "description": {
        "fct-module": "Numeric.AD.Internal.Forward",
        "fct-package": "ad",
        "fct-signature": "AD Forward a -\u003e (a, a)",
        "fct-source": "src/Numeric-AD-Internal-Forward.html#unbundle",
        "fct-type": "function",
        "title": "unbundle"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Forward",
        "module": "Numeric.AD.Internal.Forward",
        "name": "unbundle",
        "normalized": "AD Forward a-\u003e(a,a)",
        "package": "ad",
        "partial": "",
        "signature": "AD Forward a-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides reverse-mode Automatic Differentiation implementation using\n linear time topological sorting after the fact.\n\u003c/p\u003e\u003cp\u003eFor this form of reverse-mode AD we use \u003ccode\u003e\u003ca\u003eStableName\u003c/a\u003e\u003c/code\u003e to recover\n sharing information from the tape to avoid combinatorial explosion, and thus\n run asymptotically faster than it could without such sharing information, but the use\n of side-effects contained herein is benign.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.AD.Internal.Kahn",
        "fct-package": "ad",
        "fct-signature": "module",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html",
        "fct-type": "module",
        "title": "Kahn"
      },
      "index": {
        "description": "This module provides reverse-mode Automatic Differentiation implementation using linear time topological sorting after the fact For this form of reverse-mode AD we use StableName to recover sharing information from the tape to avoid combinatorial explosion and thus run asymptotically faster than it could without such sharing information but the use of side-effects contained herein is benign",
        "hierarchy": "Numeric AD Internal Kahn",
        "module": "Numeric.AD.Internal.Kahn",
        "name": "Kahn",
        "normalized": "",
        "package": "ad",
        "partial": "Kahn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#t:Grad",
      "description": {
        "fct-module": "Numeric.AD.Internal.Kahn",
        "fct-package": "ad",
        "fct-signature": "class",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#Grad",
        "fct-type": "class",
        "title": "Grad"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Kahn",
        "module": "Numeric.AD.Internal.Kahn",
        "name": "Grad",
        "normalized": "",
        "package": "ad",
        "partial": "Grad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#t:Kahn",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eKahn\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e using reverse-mode automatic differentiation that provides fast \u003ccode\u003ediffFU\u003c/code\u003e, \u003ccode\u003ediff2FU\u003c/code\u003e, \u003ccode\u003egrad\u003c/code\u003e, \u003ccode\u003egrad2\u003c/code\u003e and a fast \u003ccode\u003ejacobian\u003c/code\u003e when you have a significantly smaller number of outputs than inputs.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Kahn",
        "fct-package": "ad",
        "fct-signature": "newtype",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#Kahn",
        "fct-type": "newtype",
        "title": "Kahn"
      },
      "index": {
        "description": "Kahn is Mode using reverse-mode automatic differentiation that provides fast diffFU diff2FU grad grad2 and fast jacobian when you have significantly smaller number of outputs than inputs",
        "hierarchy": "Numeric AD Internal Kahn",
        "module": "Numeric.AD.Internal.Kahn",
        "name": "Kahn",
        "normalized": "",
        "package": "ad",
        "partial": "Kahn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#t:Tape",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eTape\u003c/code\u003e records the information needed back propagate from the output to each input during reverse \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e AD.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Kahn",
        "fct-package": "ad",
        "fct-signature": "data",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#Tape",
        "fct-type": "data",
        "title": "Tape"
      },
      "index": {
        "description": "Tape records the information needed back propagate from the output to each input during reverse Mode AD",
        "hierarchy": "Numeric AD Internal Kahn",
        "module": "Numeric.AD.Internal.Kahn",
        "name": "Tape",
        "normalized": "",
        "package": "ad",
        "partial": "Tape",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:Binary",
      "description": {
        "fct-module": "Numeric.AD.Internal.Kahn",
        "fct-package": "ad",
        "fct-signature": "Binary !a a a t t",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#Tape",
        "fct-type": "function",
        "title": "Binary"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Kahn",
        "module": "Numeric.AD.Internal.Kahn",
        "name": "Binary",
        "normalized": "",
        "package": "ad",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:Kahn",
      "description": {
        "fct-module": "Numeric.AD.Internal.Kahn",
        "fct-package": "ad",
        "fct-signature": "Kahn (Tape a (Kahn a))",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#Kahn",
        "fct-type": "function",
        "title": "Kahn"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Kahn",
        "module": "Numeric.AD.Internal.Kahn",
        "name": "Kahn",
        "normalized": "",
        "package": "ad",
        "partial": "Kahn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:Lift",
      "description": {
        "fct-module": "Numeric.AD.Internal.Kahn",
        "fct-package": "ad",
        "fct-signature": "Lift !a",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#Tape",
        "fct-type": "function",
        "title": "Lift"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Kahn",
        "module": "Numeric.AD.Internal.Kahn",
        "name": "Lift",
        "normalized": "",
        "package": "ad",
        "partial": "Lift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:Unary",
      "description": {
        "fct-module": "Numeric.AD.Internal.Kahn",
        "fct-package": "ad",
        "fct-signature": "Unary !a a t",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#Tape",
        "fct-type": "function",
        "title": "Unary"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Kahn",
        "module": "Numeric.AD.Internal.Kahn",
        "name": "Unary",
        "normalized": "",
        "package": "ad",
        "partial": "Unary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:Var",
      "description": {
        "fct-module": "Numeric.AD.Internal.Kahn",
        "fct-package": "ad",
        "fct-signature": "Var !a !Int",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#Tape",
        "fct-type": "function",
        "title": "Var"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Kahn",
        "module": "Numeric.AD.Internal.Kahn",
        "name": "Var",
        "normalized": "",
        "package": "ad",
        "partial": "Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:Zero",
      "description": {
        "fct-module": "Numeric.AD.Internal.Kahn",
        "fct-package": "ad",
        "fct-signature": "Zero",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#Tape",
        "fct-type": "function",
        "title": "Zero"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Kahn",
        "module": "Numeric.AD.Internal.Kahn",
        "name": "Zero",
        "normalized": "",
        "package": "ad",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:derivative",
      "description": {
        "fct-module": "Numeric.AD.Internal.Kahn",
        "fct-package": "ad",
        "fct-signature": "AD Kahn a -\u003e a",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#derivative",
        "fct-type": "function",
        "title": "derivative"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Kahn",
        "module": "Numeric.AD.Internal.Kahn",
        "name": "derivative",
        "normalized": "AD Kahn a-\u003ea",
        "package": "ad",
        "partial": "",
        "signature": "AD Kahn a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:derivative-39-",
      "description": {
        "fct-module": "Numeric.AD.Internal.Kahn",
        "fct-package": "ad",
        "fct-signature": "AD Kahn a -\u003e (a, a)",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#derivative%27",
        "fct-type": "function",
        "title": "derivative'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Kahn",
        "module": "Numeric.AD.Internal.Kahn",
        "name": "derivative'",
        "normalized": "AD Kahn a-\u003e(a,a)",
        "package": "ad",
        "partial": "",
        "signature": "AD Kahn a-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:pack",
      "description": {
        "fct-module": "Numeric.AD.Internal.Kahn",
        "fct-package": "ad",
        "fct-signature": "i -\u003e [AD Kahn a] -\u003e AD Kahn a",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#pack",
        "fct-type": "method",
        "title": "pack"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Kahn",
        "module": "Numeric.AD.Internal.Kahn",
        "name": "pack",
        "normalized": "a-\u003e[AD Kahn b]-\u003eAD Kahn b",
        "package": "ad",
        "partial": "",
        "signature": "i-\u003e[AD Kahn a]-\u003eAD Kahn a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:partialArray",
      "description": {
        "fct-descr": "\u003cp\u003eReturn an \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003epartials\u003c/a\u003e\u003c/code\u003e given bounds for the variable IDs.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Kahn",
        "fct-package": "ad",
        "fct-signature": "(Int, Int) -\u003e AD Kahn a -\u003e Array Int a",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#partialArray",
        "fct-type": "function",
        "title": "partialArray"
      },
      "index": {
        "description": "Return an Array of partials given bounds for the variable IDs",
        "hierarchy": "Numeric AD Internal Kahn",
        "module": "Numeric.AD.Internal.Kahn",
        "name": "partialArray",
        "normalized": "(Int,Int)-\u003eAD Kahn a-\u003eArray Int a",
        "package": "ad",
        "partial": "Array",
        "signature": "(Int,Int)-\u003eAD Kahn a-\u003eArray Int a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:partialMap",
      "description": {
        "fct-descr": "\u003cp\u003eReturn an \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e of sparse partials\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Kahn",
        "fct-package": "ad",
        "fct-signature": "AD Kahn a -\u003e IntMap a",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#partialMap",
        "fct-type": "function",
        "title": "partialMap"
      },
      "index": {
        "description": "Return an IntMap of sparse partials",
        "hierarchy": "Numeric AD Internal Kahn",
        "module": "Numeric.AD.Internal.Kahn",
        "name": "partialMap",
        "normalized": "AD Kahn a-\u003eIntMap a",
        "package": "ad",
        "partial": "Map",
        "signature": "AD Kahn a-\u003eIntMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:partials",
      "description": {
        "fct-descr": "\u003cp\u003eThis returns a list of contributions to the partials.\n The variable ids returned in the list are likely \u003cem\u003enot\u003c/em\u003e unique!\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Kahn",
        "fct-package": "ad",
        "fct-signature": "AD Kahn a -\u003e [(Int, a)]",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#partials",
        "fct-type": "function",
        "title": "partials"
      },
      "index": {
        "description": "This returns list of contributions to the partials The variable ids returned in the list are likely not unique",
        "hierarchy": "Numeric AD Internal Kahn",
        "module": "Numeric.AD.Internal.Kahn",
        "name": "partials",
        "normalized": "AD Kahn a-\u003e[(Int,a)]",
        "package": "ad",
        "partial": "",
        "signature": "AD Kahn a-\u003e[(Int,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:unpack",
      "description": {
        "fct-module": "Numeric.AD.Internal.Kahn",
        "fct-package": "ad",
        "fct-signature": "([a] -\u003e [a]) -\u003e o",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#unpack",
        "fct-type": "method",
        "title": "unpack"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Kahn",
        "module": "Numeric.AD.Internal.Kahn",
        "name": "unpack",
        "normalized": "([a]-\u003e[a])-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "([a]-\u003e[a])-\u003eo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:unpack-39-",
      "description": {
        "fct-module": "Numeric.AD.Internal.Kahn",
        "fct-package": "ad",
        "fct-signature": "([a] -\u003e (a, [a])) -\u003e o'",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#unpack%27",
        "fct-type": "method",
        "title": "unpack'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Kahn",
        "module": "Numeric.AD.Internal.Kahn",
        "name": "unpack'",
        "normalized": "([a]-\u003e(a,[a]))-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "([a]-\u003e(a,[a]))-\u003eo'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:vgrad",
      "description": {
        "fct-module": "Numeric.AD.Internal.Kahn",
        "fct-package": "ad",
        "fct-signature": "i -\u003e o",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#vgrad",
        "fct-type": "function",
        "title": "vgrad"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Kahn",
        "module": "Numeric.AD.Internal.Kahn",
        "name": "vgrad",
        "normalized": "a-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "i-\u003eo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:vgrad-39-",
      "description": {
        "fct-module": "Numeric.AD.Internal.Kahn",
        "fct-package": "ad",
        "fct-signature": "i -\u003e o'",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#vgrad%27",
        "fct-type": "function",
        "title": "vgrad'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Kahn",
        "module": "Numeric.AD.Internal.Kahn",
        "name": "vgrad'",
        "normalized": "a-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "i-\u003eo'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReverse-Mode Automatic Differentiation using a single Wengert list (or \"tape\").\n\u003c/p\u003e\u003cp\u003eThis version uses \u003ccode\u003eData.Reflection\u003c/code\u003e to find and update the tape.\n\u003c/p\u003e\u003cp\u003eThis is asymptotically faster than using \u003ccode\u003eReverse\u003c/code\u003e, which\n is forced to reify and topologically sort the graph, but it requires\n a fairly expensive rendezvous during construction when updated using\n multiple threads.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.AD.Internal.Reverse",
        "fct-package": "ad",
        "fct-signature": "module",
        "fct-source": "src/Numeric-AD-Internal-Reverse.html",
        "fct-type": "module",
        "title": "Reverse"
      },
      "index": {
        "description": "Reverse-Mode Automatic Differentiation using single Wengert list or tape This version uses Data.Reflection to find and update the tape This is asymptotically faster than using Reverse which is forced to reify and topologically sort the graph but it requires fairly expensive rendezvous during construction when updated using multiple threads",
        "hierarchy": "Numeric AD Internal Reverse",
        "module": "Numeric.AD.Internal.Reverse",
        "name": "Reverse",
        "normalized": "",
        "package": "ad",
        "partial": "Reverse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#t:Cells",
      "description": {
        "fct-module": "Numeric.AD.Internal.Reverse",
        "fct-package": "ad",
        "fct-signature": "data",
        "fct-source": "src/Numeric-AD-Internal-Reverse.html#Cells",
        "fct-type": "data",
        "title": "Cells"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Reverse",
        "module": "Numeric.AD.Internal.Reverse",
        "name": "Cells",
        "normalized": "",
        "package": "ad",
        "partial": "Cells",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#t:Head",
      "description": {
        "fct-module": "Numeric.AD.Internal.Reverse",
        "fct-package": "ad",
        "fct-signature": "data",
        "fct-source": "src/Numeric-AD-Internal-Reverse.html#Head",
        "fct-type": "data",
        "title": "Head"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Reverse",
        "module": "Numeric.AD.Internal.Reverse",
        "name": "Head",
        "normalized": "",
        "package": "ad",
        "partial": "Head",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#t:Reverse",
      "description": {
        "fct-module": "Numeric.AD.Internal.Reverse",
        "fct-package": "ad",
        "fct-signature": "data",
        "fct-source": "src/Numeric-AD-Internal-Reverse.html#Reverse",
        "fct-type": "data",
        "title": "Reverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Reverse",
        "module": "Numeric.AD.Internal.Reverse",
        "name": "Reverse",
        "normalized": "",
        "package": "ad",
        "partial": "Reverse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#t:Tape",
      "description": {
        "fct-module": "Numeric.AD.Internal.Reverse",
        "fct-package": "ad",
        "fct-signature": "newtype",
        "fct-source": "src/Numeric-AD-Internal-Reverse.html#Tape",
        "fct-type": "newtype",
        "title": "Tape"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Reverse",
        "module": "Numeric.AD.Internal.Reverse",
        "name": "Tape",
        "normalized": "",
        "package": "ad",
        "partial": "Tape",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:Binary",
      "description": {
        "fct-module": "Numeric.AD.Internal.Reverse",
        "fct-package": "ad",
        "fct-signature": "!Int -\u003e !Int -\u003e a -\u003e a -\u003e Cells -\u003e Cells",
        "fct-source": "src/Numeric-AD-Internal-Reverse.html#Cells",
        "fct-type": "function",
        "title": "Binary"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Reverse",
        "module": "Numeric.AD.Internal.Reverse",
        "name": "Binary",
        "normalized": "Int-\u003eInt-\u003ea-\u003ea-\u003eCells-\u003eCells",
        "package": "ad",
        "partial": "Binary",
        "signature": "Int-\u003eInt-\u003ea-\u003ea-\u003eCells-\u003eCells"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:Head",
      "description": {
        "fct-module": "Numeric.AD.Internal.Reverse",
        "fct-package": "ad",
        "fct-signature": "Head !Int Cells",
        "fct-source": "src/Numeric-AD-Internal-Reverse.html#Head",
        "fct-type": "function",
        "title": "Head"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Reverse",
        "module": "Numeric.AD.Internal.Reverse",
        "name": "Head",
        "normalized": "",
        "package": "ad",
        "partial": "Head",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:Lift",
      "description": {
        "fct-module": "Numeric.AD.Internal.Reverse",
        "fct-package": "ad",
        "fct-signature": "a -\u003e Reverse s a",
        "fct-source": "src/Numeric-AD-Internal-Reverse.html#Reverse",
        "fct-type": "function",
        "title": "Lift"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Reverse",
        "module": "Numeric.AD.Internal.Reverse",
        "name": "Lift",
        "normalized": "a-\u003eReverse b a",
        "package": "ad",
        "partial": "Lift",
        "signature": "a-\u003eReverse s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:Nil",
      "description": {
        "fct-module": "Numeric.AD.Internal.Reverse",
        "fct-package": "ad",
        "fct-signature": "Cells",
        "fct-source": "src/Numeric-AD-Internal-Reverse.html#Cells",
        "fct-type": "function",
        "title": "Nil"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Reverse",
        "module": "Numeric.AD.Internal.Reverse",
        "name": "Nil",
        "normalized": "",
        "package": "ad",
        "partial": "Nil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:Reverse",
      "description": {
        "fct-module": "Numeric.AD.Internal.Reverse",
        "fct-package": "ad",
        "fct-signature": "!Int -\u003e a -\u003e Reverse s a",
        "fct-source": "src/Numeric-AD-Internal-Reverse.html#Reverse",
        "fct-type": "function",
        "title": "Reverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Reverse",
        "module": "Numeric.AD.Internal.Reverse",
        "name": "Reverse",
        "normalized": "Int-\u003ea-\u003eReverse b a",
        "package": "ad",
        "partial": "Reverse",
        "signature": "Int-\u003ea-\u003eReverse s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:Tape",
      "description": {
        "fct-module": "Numeric.AD.Internal.Reverse",
        "fct-package": "ad",
        "fct-signature": "Tape",
        "fct-source": "src/Numeric-AD-Internal-Reverse.html#Tape",
        "fct-type": "function",
        "title": "Tape"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Reverse",
        "module": "Numeric.AD.Internal.Reverse",
        "name": "Tape",
        "normalized": "",
        "package": "ad",
        "partial": "Tape",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:Unary",
      "description": {
        "fct-module": "Numeric.AD.Internal.Reverse",
        "fct-package": "ad",
        "fct-signature": "!Int -\u003e a -\u003e Cells -\u003e Cells",
        "fct-source": "src/Numeric-AD-Internal-Reverse.html#Cells",
        "fct-type": "function",
        "title": "Unary"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Reverse",
        "module": "Numeric.AD.Internal.Reverse",
        "name": "Unary",
        "normalized": "Int-\u003ea-\u003eCells-\u003eCells",
        "package": "ad",
        "partial": "Unary",
        "signature": "Int-\u003ea-\u003eCells-\u003eCells"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:Zero",
      "description": {
        "fct-module": "Numeric.AD.Internal.Reverse",
        "fct-package": "ad",
        "fct-signature": "Reverse s a",
        "fct-source": "src/Numeric-AD-Internal-Reverse.html#Reverse",
        "fct-type": "function",
        "title": "Zero"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Reverse",
        "module": "Numeric.AD.Internal.Reverse",
        "name": "Zero",
        "normalized": "",
        "package": "ad",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:derivativeOf",
      "description": {
        "fct-descr": "\u003cp\u003eHelper that extracts the derivative of a chain when the chain was constructed with one variable.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Reverse",
        "fct-package": "ad",
        "fct-signature": "Proxy s -\u003e AD (Reverse s) a -\u003e a",
        "fct-source": "src/Numeric-AD-Internal-Reverse.html#derivativeOf",
        "fct-type": "function",
        "title": "derivativeOf"
      },
      "index": {
        "description": "Helper that extracts the derivative of chain when the chain was constructed with one variable",
        "hierarchy": "Numeric AD Internal Reverse",
        "module": "Numeric.AD.Internal.Reverse",
        "name": "derivativeOf",
        "normalized": "Proxy a-\u003eAD(Reverse a)b-\u003eb",
        "package": "ad",
        "partial": "Of",
        "signature": "Proxy s-\u003eAD(Reverse s)a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:derivativeOf-39-",
      "description": {
        "fct-descr": "\u003cp\u003eHelper that extracts both the primal and derivative of a chain when the chain was constructed with one variable.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Reverse",
        "fct-package": "ad",
        "fct-signature": "Proxy s -\u003e AD (Reverse s) a -\u003e (a, a)",
        "fct-source": "src/Numeric-AD-Internal-Reverse.html#derivativeOf%27",
        "fct-type": "function",
        "title": "derivativeOf'"
      },
      "index": {
        "description": "Helper that extracts both the primal and derivative of chain when the chain was constructed with one variable",
        "hierarchy": "Numeric AD Internal Reverse",
        "module": "Numeric.AD.Internal.Reverse",
        "name": "derivativeOf'",
        "normalized": "Proxy a-\u003eAD(Reverse a)b-\u003e(b,b)",
        "package": "ad",
        "partial": "Of'",
        "signature": "Proxy s-\u003eAD(Reverse s)a-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:getTape",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.AD.Internal.Reverse",
        "fct-package": "ad",
        "fct-signature": "IORef Head",
        "fct-source": "src/Numeric-AD-Internal-Reverse.html#Tape",
        "fct-type": "function",
        "title": "getTape"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Reverse",
        "module": "Numeric.AD.Internal.Reverse",
        "name": "getTape",
        "normalized": "",
        "package": "ad",
        "partial": "Tape",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:partialArrayOf",
      "description": {
        "fct-descr": "\u003cp\u003eReturn an \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003epartials\u003c/a\u003e\u003c/code\u003e given bounds for the variable IDs.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Reverse",
        "fct-package": "ad",
        "fct-signature": "Proxy s -\u003e (Int, Int) -\u003e AD (Reverse s) a -\u003e Array Int a",
        "fct-source": "src/Numeric-AD-Internal-Reverse.html#partialArrayOf",
        "fct-type": "function",
        "title": "partialArrayOf"
      },
      "index": {
        "description": "Return an Array of partials given bounds for the variable IDs",
        "hierarchy": "Numeric AD Internal Reverse",
        "module": "Numeric.AD.Internal.Reverse",
        "name": "partialArrayOf",
        "normalized": "Proxy a-\u003e(Int,Int)-\u003eAD(Reverse a)b-\u003eArray Int b",
        "package": "ad",
        "partial": "Array Of",
        "signature": "Proxy s-\u003e(Int,Int)-\u003eAD(Reverse s)a-\u003eArray Int a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:partialMapOf",
      "description": {
        "fct-descr": "\u003cp\u003eReturn an \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e of sparse partials\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Reverse",
        "fct-package": "ad",
        "fct-signature": "Proxy s -\u003e AD (Reverse s) a -\u003e IntMap a",
        "fct-source": "src/Numeric-AD-Internal-Reverse.html#partialMapOf",
        "fct-type": "function",
        "title": "partialMapOf"
      },
      "index": {
        "description": "Return an IntMap of sparse partials",
        "hierarchy": "Numeric AD Internal Reverse",
        "module": "Numeric.AD.Internal.Reverse",
        "name": "partialMapOf",
        "normalized": "Proxy a-\u003eAD(Reverse a)b-\u003eIntMap b",
        "package": "ad",
        "partial": "Map Of",
        "signature": "Proxy s-\u003eAD(Reverse s)a-\u003eIntMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:partials",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the partials from the current chain for a given AD variable.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Reverse",
        "fct-package": "ad",
        "fct-signature": "AD (Reverse s) a -\u003e [a]",
        "fct-source": "src/Numeric-AD-Internal-Reverse.html#partials",
        "fct-type": "function",
        "title": "partials"
      },
      "index": {
        "description": "Extract the partials from the current chain for given AD variable",
        "hierarchy": "Numeric AD Internal Reverse",
        "module": "Numeric.AD.Internal.Reverse",
        "name": "partials",
        "normalized": "AD(Reverse a)b-\u003e[b]",
        "package": "ad",
        "partial": "",
        "signature": "AD(Reverse s)a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:reifyTape",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a tape that starts with \u003ccode\u003en\u003c/code\u003e variables.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Reverse",
        "fct-package": "ad",
        "fct-signature": "Proxy s -\u003e r) -\u003e r",
        "fct-source": "src/Numeric-AD-Internal-Reverse.html#reifyTape",
        "fct-type": "function",
        "title": "reifyTape"
      },
      "index": {
        "description": "Construct tape that starts with variables",
        "hierarchy": "Numeric AD Internal Reverse",
        "module": "Numeric.AD.Internal.Reverse",
        "name": "reifyTape",
        "normalized": "Proxy a-\u003eb)-\u003eb",
        "package": "ad",
        "partial": "Tape",
        "signature": "Proxy s-\u003er)-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#",
      "description": {
        "fct-module": "Numeric.AD.Internal.Sparse",
        "fct-package": "ad",
        "fct-signature": "module",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html",
        "fct-type": "module",
        "title": "Sparse"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Sparse",
        "module": "Numeric.AD.Internal.Sparse",
        "name": "Sparse",
        "normalized": "",
        "package": "ad",
        "partial": "Sparse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#t:Grad",
      "description": {
        "fct-module": "Numeric.AD.Internal.Sparse",
        "fct-package": "ad",
        "fct-signature": "class",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#Grad",
        "fct-type": "class",
        "title": "Grad"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Sparse",
        "module": "Numeric.AD.Internal.Sparse",
        "name": "Grad",
        "normalized": "",
        "package": "ad",
        "partial": "Grad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#t:Grads",
      "description": {
        "fct-module": "Numeric.AD.Internal.Sparse",
        "fct-package": "ad",
        "fct-signature": "class",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#Grads",
        "fct-type": "class",
        "title": "Grads"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Sparse",
        "module": "Numeric.AD.Internal.Sparse",
        "name": "Grads",
        "normalized": "",
        "package": "ad",
        "partial": "Grads",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#t:Index",
      "description": {
        "fct-module": "Numeric.AD.Internal.Sparse",
        "fct-package": "ad",
        "fct-signature": "newtype",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#Index",
        "fct-type": "newtype",
        "title": "Index"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Sparse",
        "module": "Numeric.AD.Internal.Sparse",
        "name": "Index",
        "normalized": "",
        "package": "ad",
        "partial": "Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#t:Sparse",
      "description": {
        "fct-descr": "\u003cp\u003eWe only store partials in sorted order, so the map contained in a partial\n will only contain partials with equal or greater keys to that of the map in\n which it was found. This should be key for efficiently computing sparse hessians.\n there are only (n + k - 1) choose k distinct nth partial derivatives of a\n function with k inputs.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Sparse",
        "fct-package": "ad",
        "fct-signature": "data",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#Sparse",
        "fct-type": "data",
        "title": "Sparse"
      },
      "index": {
        "description": "We only store partials in sorted order so the map contained in partial will only contain partials with equal or greater keys to that of the map in which it was found This should be key for efficiently computing sparse hessians there are only choose distinct nth partial derivatives of function with inputs",
        "hierarchy": "Numeric AD Internal Sparse",
        "module": "Numeric.AD.Internal.Sparse",
        "name": "Sparse",
        "normalized": "",
        "package": "ad",
        "partial": "Sparse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:Index",
      "description": {
        "fct-module": "Numeric.AD.Internal.Sparse",
        "fct-package": "ad",
        "fct-signature": "Index (IntMap Int)",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#Index",
        "fct-type": "function",
        "title": "Index"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Sparse",
        "module": "Numeric.AD.Internal.Sparse",
        "name": "Index",
        "normalized": "",
        "package": "ad",
        "partial": "Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:Sparse",
      "description": {
        "fct-module": "Numeric.AD.Internal.Sparse",
        "fct-package": "ad",
        "fct-signature": "Sparse !a (IntMap (Sparse a))",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#Sparse",
        "fct-type": "function",
        "title": "Sparse"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Sparse",
        "module": "Numeric.AD.Internal.Sparse",
        "name": "Sparse",
        "normalized": "",
        "package": "ad",
        "partial": "Sparse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:Zero",
      "description": {
        "fct-module": "Numeric.AD.Internal.Sparse",
        "fct-package": "ad",
        "fct-signature": "Zero",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#Sparse",
        "fct-type": "function",
        "title": "Zero"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Sparse",
        "module": "Numeric.AD.Internal.Sparse",
        "name": "Zero",
        "normalized": "",
        "package": "ad",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:addToIndex",
      "description": {
        "fct-module": "Numeric.AD.Internal.Sparse",
        "fct-package": "ad",
        "fct-signature": "Int -\u003e Index -\u003e Index",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#addToIndex",
        "fct-type": "function",
        "title": "addToIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Sparse",
        "module": "Numeric.AD.Internal.Sparse",
        "name": "addToIndex",
        "normalized": "Int-\u003eIndex-\u003eIndex",
        "package": "ad",
        "partial": "To Index",
        "signature": "Int-\u003eIndex-\u003eIndex"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:apply",
      "description": {
        "fct-module": "Numeric.AD.Internal.Sparse",
        "fct-package": "ad",
        "fct-signature": "(f (AD Sparse a) -\u003e b) -\u003e f a -\u003e b",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#apply",
        "fct-type": "function",
        "title": "apply"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Sparse",
        "module": "Numeric.AD.Internal.Sparse",
        "name": "apply",
        "normalized": "(a(AD Sparse b)-\u003ec)-\u003ea b-\u003ec",
        "package": "ad",
        "partial": "",
        "signature": "(f(AD Sparse a)-\u003eb)-\u003ef a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:d",
      "description": {
        "fct-module": "Numeric.AD.Internal.Sparse",
        "fct-package": "ad",
        "fct-signature": "f b -\u003e AD Sparse a -\u003e f a",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#d",
        "fct-type": "function",
        "title": "d"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Sparse",
        "module": "Numeric.AD.Internal.Sparse",
        "name": "d",
        "normalized": "a b-\u003eAD Sparse c-\u003ea c",
        "package": "ad",
        "partial": "",
        "signature": "f b-\u003eAD Sparse a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:d-39-",
      "description": {
        "fct-module": "Numeric.AD.Internal.Sparse",
        "fct-package": "ad",
        "fct-signature": "f a -\u003e AD Sparse a -\u003e (a, f a)",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#d%27",
        "fct-type": "function",
        "title": "d'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Sparse",
        "module": "Numeric.AD.Internal.Sparse",
        "name": "d'",
        "normalized": "a b-\u003eAD Sparse b-\u003e(b,a b)",
        "package": "ad",
        "partial": "",
        "signature": "f a-\u003eAD Sparse a-\u003e(a,f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:ds",
      "description": {
        "fct-module": "Numeric.AD.Internal.Sparse",
        "fct-package": "ad",
        "fct-signature": "f b -\u003e AD Sparse a -\u003e Cofree f a",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#ds",
        "fct-type": "function",
        "title": "ds"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Sparse",
        "module": "Numeric.AD.Internal.Sparse",
        "name": "ds",
        "normalized": "a b-\u003eAD Sparse c-\u003eCofree a c",
        "package": "ad",
        "partial": "",
        "signature": "f b-\u003eAD Sparse a-\u003eCofree f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:emptyIndex",
      "description": {
        "fct-module": "Numeric.AD.Internal.Sparse",
        "fct-package": "ad",
        "fct-signature": "Index",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#emptyIndex",
        "fct-type": "function",
        "title": "emptyIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Sparse",
        "module": "Numeric.AD.Internal.Sparse",
        "name": "emptyIndex",
        "normalized": "",
        "package": "ad",
        "partial": "Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:indices",
      "description": {
        "fct-module": "Numeric.AD.Internal.Sparse",
        "fct-package": "ad",
        "fct-signature": "Index -\u003e [Int]",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#indices",
        "fct-type": "function",
        "title": "indices"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Sparse",
        "module": "Numeric.AD.Internal.Sparse",
        "name": "indices",
        "normalized": "Index-\u003e[Int]",
        "package": "ad",
        "partial": "",
        "signature": "Index-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:pack",
      "description": {
        "fct-module": "Numeric.AD.Internal.Sparse",
        "fct-package": "ad",
        "fct-signature": "i -\u003e [AD Sparse a] -\u003e AD Sparse a",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#pack",
        "fct-type": "method",
        "title": "pack"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Sparse",
        "module": "Numeric.AD.Internal.Sparse",
        "name": "pack",
        "normalized": "a-\u003e[AD Sparse b]-\u003eAD Sparse b",
        "package": "ad",
        "partial": "",
        "signature": "i-\u003e[AD Sparse a]-\u003eAD Sparse a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:packs",
      "description": {
        "fct-module": "Numeric.AD.Internal.Sparse",
        "fct-package": "ad",
        "fct-signature": "i -\u003e [AD Sparse a] -\u003e AD Sparse a",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#packs",
        "fct-type": "method",
        "title": "packs"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Sparse",
        "module": "Numeric.AD.Internal.Sparse",
        "name": "packs",
        "normalized": "a-\u003e[AD Sparse b]-\u003eAD Sparse b",
        "package": "ad",
        "partial": "",
        "signature": "i-\u003e[AD Sparse a]-\u003eAD Sparse a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:partial",
      "description": {
        "fct-module": "Numeric.AD.Internal.Sparse",
        "fct-package": "ad",
        "fct-signature": "[Int] -\u003e Sparse a -\u003e a",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#partial",
        "fct-type": "function",
        "title": "partial"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Sparse",
        "module": "Numeric.AD.Internal.Sparse",
        "name": "partial",
        "normalized": "[Int]-\u003eSparse a-\u003ea",
        "package": "ad",
        "partial": "",
        "signature": "[Int]-\u003eSparse a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:skeleton",
      "description": {
        "fct-module": "Numeric.AD.Internal.Sparse",
        "fct-package": "ad",
        "fct-signature": "f a -\u003e f Int",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#skeleton",
        "fct-type": "function",
        "title": "skeleton"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Sparse",
        "module": "Numeric.AD.Internal.Sparse",
        "name": "skeleton",
        "normalized": "a b-\u003ea Int",
        "package": "ad",
        "partial": "",
        "signature": "f a-\u003ef Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:spartial",
      "description": {
        "fct-module": "Numeric.AD.Internal.Sparse",
        "fct-package": "ad",
        "fct-signature": "[Int] -\u003e Sparse a -\u003e Maybe a",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#spartial",
        "fct-type": "function",
        "title": "spartial"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Sparse",
        "module": "Numeric.AD.Internal.Sparse",
        "name": "spartial",
        "normalized": "[Int]-\u003eSparse a-\u003eMaybe a",
        "package": "ad",
        "partial": "",
        "signature": "[Int]-\u003eSparse a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:unpack",
      "description": {
        "fct-module": "Numeric.AD.Internal.Sparse",
        "fct-package": "ad",
        "fct-signature": "([a] -\u003e [a]) -\u003e o",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#unpack",
        "fct-type": "method",
        "title": "unpack"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Sparse",
        "module": "Numeric.AD.Internal.Sparse",
        "name": "unpack",
        "normalized": "([a]-\u003e[a])-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "([a]-\u003e[a])-\u003eo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:unpack-39-",
      "description": {
        "fct-module": "Numeric.AD.Internal.Sparse",
        "fct-package": "ad",
        "fct-signature": "([a] -\u003e (a, [a])) -\u003e o'",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#unpack%27",
        "fct-type": "method",
        "title": "unpack'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Sparse",
        "module": "Numeric.AD.Internal.Sparse",
        "name": "unpack'",
        "normalized": "([a]-\u003e(a,[a]))-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "([a]-\u003e(a,[a]))-\u003eo'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:unpacks",
      "description": {
        "fct-module": "Numeric.AD.Internal.Sparse",
        "fct-package": "ad",
        "fct-signature": "([a] -\u003e Cofree [] a) -\u003e o",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#unpacks",
        "fct-type": "method",
        "title": "unpacks"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Sparse",
        "module": "Numeric.AD.Internal.Sparse",
        "name": "unpacks",
        "normalized": "([a]-\u003eCofree[]a)-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "([a]-\u003eCofree[]a)-\u003eo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:vars",
      "description": {
        "fct-module": "Numeric.AD.Internal.Sparse",
        "fct-package": "ad",
        "fct-signature": "f a -\u003e f (AD Sparse a)",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#vars",
        "fct-type": "function",
        "title": "vars"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Sparse",
        "module": "Numeric.AD.Internal.Sparse",
        "name": "vars",
        "normalized": "a b-\u003ea(AD Sparse b)",
        "package": "ad",
        "partial": "",
        "signature": "f a-\u003ef(AD Sparse a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:vgrad",
      "description": {
        "fct-module": "Numeric.AD.Internal.Sparse",
        "fct-package": "ad",
        "fct-signature": "i -\u003e o",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#vgrad",
        "fct-type": "function",
        "title": "vgrad"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Sparse",
        "module": "Numeric.AD.Internal.Sparse",
        "name": "vgrad",
        "normalized": "a-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "i-\u003eo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:vgrad-39-",
      "description": {
        "fct-module": "Numeric.AD.Internal.Sparse",
        "fct-package": "ad",
        "fct-signature": "i -\u003e o'",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#vgrad%27",
        "fct-type": "function",
        "title": "vgrad'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Sparse",
        "module": "Numeric.AD.Internal.Sparse",
        "name": "vgrad'",
        "normalized": "a-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "i-\u003eo'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:vgrads",
      "description": {
        "fct-module": "Numeric.AD.Internal.Sparse",
        "fct-package": "ad",
        "fct-signature": "i -\u003e o",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#vgrads",
        "fct-type": "function",
        "title": "vgrads"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Sparse",
        "module": "Numeric.AD.Internal.Sparse",
        "name": "vgrads",
        "normalized": "a-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "i-\u003eo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#",
      "description": {
        "fct-module": "Numeric.AD.Internal.Tower",
        "fct-package": "ad",
        "fct-signature": "module",
        "fct-source": "src/Numeric-AD-Internal-Tower.html",
        "fct-type": "module",
        "title": "Tower"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Tower",
        "module": "Numeric.AD.Internal.Tower",
        "name": "Tower",
        "normalized": "",
        "package": "ad",
        "partial": "Tower",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#t:Tower",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eTower\u003c/code\u003e is an AD \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e that calculates a tangent tower by forward AD, and provides fast \u003ccode\u003ediffsUU\u003c/code\u003e, \u003ccode\u003ediffsUF\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Tower",
        "fct-package": "ad",
        "fct-signature": "newtype",
        "fct-source": "src/Numeric-AD-Internal-Tower.html#Tower",
        "fct-type": "newtype",
        "title": "Tower"
      },
      "index": {
        "description": "Tower is an AD Mode that calculates tangent tower by forward AD and provides fast diffsUU diffsUF",
        "hierarchy": "Numeric AD Internal Tower",
        "module": "Numeric.AD.Internal.Tower",
        "name": "Tower",
        "normalized": "",
        "package": "ad",
        "partial": "Tower",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#v:Tower",
      "description": {
        "fct-module": "Numeric.AD.Internal.Tower",
        "fct-package": "ad",
        "fct-signature": "Tower",
        "fct-source": "src/Numeric-AD-Internal-Tower.html#Tower",
        "fct-type": "function",
        "title": "Tower"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Tower",
        "module": "Numeric.AD.Internal.Tower",
        "name": "Tower",
        "normalized": "",
        "package": "ad",
        "partial": "Tower",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#v:apply",
      "description": {
        "fct-module": "Numeric.AD.Internal.Tower",
        "fct-package": "ad",
        "fct-signature": "(AD Tower a -\u003e b) -\u003e a -\u003e b",
        "fct-source": "src/Numeric-AD-Internal-Tower.html#apply",
        "fct-type": "function",
        "title": "apply"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Tower",
        "module": "Numeric.AD.Internal.Tower",
        "name": "apply",
        "normalized": "(AD Tower a-\u003eb)-\u003ea-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "(AD Tower a-\u003eb)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#v:bundle",
      "description": {
        "fct-module": "Numeric.AD.Internal.Tower",
        "fct-package": "ad",
        "fct-signature": "a -\u003e Tower a -\u003e Tower a",
        "fct-source": "src/Numeric-AD-Internal-Tower.html#bundle",
        "fct-type": "function",
        "title": "bundle"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Tower",
        "module": "Numeric.AD.Internal.Tower",
        "name": "bundle",
        "normalized": "a-\u003eTower a-\u003eTower a",
        "package": "ad",
        "partial": "",
        "signature": "a-\u003eTower a-\u003eTower a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#v:d",
      "description": {
        "fct-module": "Numeric.AD.Internal.Tower",
        "fct-package": "ad",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Numeric-AD-Internal-Tower.html#d",
        "fct-type": "function",
        "title": "d"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Tower",
        "module": "Numeric.AD.Internal.Tower",
        "name": "d",
        "normalized": "[a]-\u003ea",
        "package": "ad",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#v:d-39-",
      "description": {
        "fct-module": "Numeric.AD.Internal.Tower",
        "fct-package": "ad",
        "fct-signature": "[a] -\u003e (a, a)",
        "fct-source": "src/Numeric-AD-Internal-Tower.html#d%27",
        "fct-type": "function",
        "title": "d'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Tower",
        "module": "Numeric.AD.Internal.Tower",
        "name": "d'",
        "normalized": "[a]-\u003e(a,a)",
        "package": "ad",
        "partial": "",
        "signature": "[a]-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#v:getADTower",
      "description": {
        "fct-module": "Numeric.AD.Internal.Tower",
        "fct-package": "ad",
        "fct-signature": "AD Tower a -\u003e [a]",
        "fct-source": "src/Numeric-AD-Internal-Tower.html#getADTower",
        "fct-type": "function",
        "title": "getADTower"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Tower",
        "module": "Numeric.AD.Internal.Tower",
        "name": "getADTower",
        "normalized": "AD Tower a-\u003e[a]",
        "package": "ad",
        "partial": "ADTower",
        "signature": "AD Tower a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#v:getTower",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.AD.Internal.Tower",
        "fct-package": "ad",
        "fct-signature": "[a]",
        "fct-source": "src/Numeric-AD-Internal-Tower.html#Tower",
        "fct-type": "function",
        "title": "getTower"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Tower",
        "module": "Numeric.AD.Internal.Tower",
        "name": "getTower",
        "normalized": "[a]",
        "package": "ad",
        "partial": "Tower",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#v:tangents",
      "description": {
        "fct-module": "Numeric.AD.Internal.Tower",
        "fct-package": "ad",
        "fct-signature": "Tower a -\u003e Tower a",
        "fct-source": "src/Numeric-AD-Internal-Tower.html#tangents",
        "fct-type": "function",
        "title": "tangents"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Tower",
        "module": "Numeric.AD.Internal.Tower",
        "name": "tangents",
        "normalized": "Tower a-\u003eTower a",
        "package": "ad",
        "partial": "",
        "signature": "Tower a-\u003eTower a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#v:tower",
      "description": {
        "fct-module": "Numeric.AD.Internal.Tower",
        "fct-package": "ad",
        "fct-signature": "[a] -\u003e AD Tower a",
        "fct-source": "src/Numeric-AD-Internal-Tower.html#tower",
        "fct-type": "function",
        "title": "tower"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Tower",
        "module": "Numeric.AD.Internal.Tower",
        "name": "tower",
        "normalized": "[a]-\u003eAD Tower a",
        "package": "ad",
        "partial": "",
        "signature": "[a]-\u003eAD Tower a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#v:transposePadF",
      "description": {
        "fct-module": "Numeric.AD.Internal.Tower",
        "fct-package": "ad",
        "fct-signature": "a -\u003e f [a] -\u003e [f a]",
        "fct-source": "src/Numeric-AD-Internal-Tower.html#transposePadF",
        "fct-type": "function",
        "title": "transposePadF"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Tower",
        "module": "Numeric.AD.Internal.Tower",
        "name": "transposePadF",
        "normalized": "a-\u003eb[a]-\u003e[b a]",
        "package": "ad",
        "partial": "Pad",
        "signature": "a-\u003ef[a]-\u003e[f a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#v:withD",
      "description": {
        "fct-module": "Numeric.AD.Internal.Tower",
        "fct-package": "ad",
        "fct-signature": "(a, a) -\u003e AD Tower a",
        "fct-source": "src/Numeric-AD-Internal-Tower.html#withD",
        "fct-type": "function",
        "title": "withD"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Tower",
        "module": "Numeric.AD.Internal.Tower",
        "name": "withD",
        "normalized": "(a,a)-\u003eAD Tower a",
        "package": "ad",
        "partial": "",
        "signature": "(a,a)-\u003eAD Tower a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#v:zeroPad",
      "description": {
        "fct-module": "Numeric.AD.Internal.Tower",
        "fct-package": "ad",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/Numeric-AD-Internal-Tower.html#zeroPad",
        "fct-type": "function",
        "title": "zeroPad"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Tower",
        "module": "Numeric.AD.Internal.Tower",
        "name": "zeroPad",
        "normalized": "[a]-\u003e[a]",
        "package": "ad",
        "partial": "Pad",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#v:zeroPadF",
      "description": {
        "fct-module": "Numeric.AD.Internal.Tower",
        "fct-package": "ad",
        "fct-signature": "[f a] -\u003e [f a]",
        "fct-source": "src/Numeric-AD-Internal-Tower.html#zeroPadF",
        "fct-type": "function",
        "title": "zeroPadF"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Tower",
        "module": "Numeric.AD.Internal.Tower",
        "name": "zeroPadF",
        "normalized": "[a b]-\u003e[a b]",
        "package": "ad",
        "partial": "Pad",
        "signature": "[f a]-\u003e[f a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Var.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVariables used for reverse-mode automatic differentiation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.AD.Internal.Var",
        "fct-package": "ad",
        "fct-signature": "module",
        "fct-source": "src/Numeric-AD-Internal-Var.html",
        "fct-type": "module",
        "title": "Var"
      },
      "index": {
        "description": "Variables used for reverse-mode automatic differentiation",
        "hierarchy": "Numeric AD Internal Var",
        "module": "Numeric.AD.Internal.Var",
        "name": "Var",
        "normalized": "",
        "package": "ad",
        "partial": "Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Var.html#t:Var",
      "description": {
        "fct-descr": "\u003cp\u003eUsed to mark variables for inspection during the reverse pass\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Internal.Var",
        "fct-package": "ad",
        "fct-signature": "class",
        "fct-source": "src/Numeric-AD-Internal-Var.html#Var",
        "fct-type": "class",
        "title": "Var"
      },
      "index": {
        "description": "Used to mark variables for inspection during the reverse pass",
        "hierarchy": "Numeric AD Internal Var",
        "module": "Numeric.AD.Internal.Var",
        "name": "Var",
        "normalized": "",
        "package": "ad",
        "partial": "Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Var.html#t:Variable",
      "description": {
        "fct-module": "Numeric.AD.Internal.Var",
        "fct-package": "ad",
        "fct-signature": "data",
        "fct-source": "src/Numeric-AD-Internal-Var.html#Variable",
        "fct-type": "data",
        "title": "Variable"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Var",
        "module": "Numeric.AD.Internal.Var",
        "name": "Variable",
        "normalized": "",
        "package": "ad",
        "partial": "Variable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Var.html#v:Variable",
      "description": {
        "fct-module": "Numeric.AD.Internal.Var",
        "fct-package": "ad",
        "fct-signature": "Variable a !Int",
        "fct-source": "src/Numeric-AD-Internal-Var.html#Variable",
        "fct-type": "function",
        "title": "Variable"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Var",
        "module": "Numeric.AD.Internal.Var",
        "name": "Variable",
        "normalized": "",
        "package": "ad",
        "partial": "Variable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Var.html#v:bind",
      "description": {
        "fct-module": "Numeric.AD.Internal.Var",
        "fct-package": "ad",
        "fct-signature": "f a -\u003e (f (v a), (Int, Int))",
        "fct-source": "src/Numeric-AD-Internal-Var.html#bind",
        "fct-type": "function",
        "title": "bind"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Var",
        "module": "Numeric.AD.Internal.Var",
        "name": "bind",
        "normalized": "a b-\u003e(a(c b),(Int,Int))",
        "package": "ad",
        "partial": "",
        "signature": "f a-\u003e(f(v a),(Int,Int))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Var.html#v:unbind",
      "description": {
        "fct-module": "Numeric.AD.Internal.Var",
        "fct-package": "ad",
        "fct-signature": "f (v a) -\u003e Array Int a -\u003e f a",
        "fct-source": "src/Numeric-AD-Internal-Var.html#unbind",
        "fct-type": "function",
        "title": "unbind"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Var",
        "module": "Numeric.AD.Internal.Var",
        "name": "unbind",
        "normalized": "a(b c)-\u003eArray Int c-\u003ea c",
        "package": "ad",
        "partial": "",
        "signature": "f(v a)-\u003eArray Int a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Var.html#v:unbindMap",
      "description": {
        "fct-module": "Numeric.AD.Internal.Var",
        "fct-package": "ad",
        "fct-signature": "f (v a) -\u003e IntMap a -\u003e f a",
        "fct-source": "src/Numeric-AD-Internal-Var.html#unbindMap",
        "fct-type": "function",
        "title": "unbindMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Var",
        "module": "Numeric.AD.Internal.Var",
        "name": "unbindMap",
        "normalized": "a(b c)-\u003eIntMap c-\u003ea c",
        "package": "ad",
        "partial": "Map",
        "signature": "f(v a)-\u003eIntMap a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Var.html#v:unbindMapWithDefault",
      "description": {
        "fct-module": "Numeric.AD.Internal.Var",
        "fct-package": "ad",
        "fct-signature": "b -\u003e (a -\u003e b -\u003e c) -\u003e f (v a) -\u003e IntMap b -\u003e f c",
        "fct-source": "src/Numeric-AD-Internal-Var.html#unbindMapWithDefault",
        "fct-type": "function",
        "title": "unbindMapWithDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Var",
        "module": "Numeric.AD.Internal.Var",
        "name": "unbindMapWithDefault",
        "normalized": "a-\u003e(b-\u003ea-\u003ec)-\u003ed(e b)-\u003eIntMap a-\u003ed c",
        "package": "ad",
        "partial": "Map With Default",
        "signature": "b-\u003e(a-\u003eb-\u003ec)-\u003ef(v a)-\u003eIntMap b-\u003ef c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Var.html#v:unbindWith",
      "description": {
        "fct-module": "Numeric.AD.Internal.Var",
        "fct-package": "ad",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e f (v a) -\u003e Array Int b -\u003e f c",
        "fct-source": "src/Numeric-AD-Internal-Var.html#unbindWith",
        "fct-type": "function",
        "title": "unbindWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Var",
        "module": "Numeric.AD.Internal.Var",
        "name": "unbindWith",
        "normalized": "(a-\u003eb-\u003ec)-\u003ed(e a)-\u003eArray Int b-\u003ed c",
        "package": "ad",
        "partial": "With",
        "signature": "(a-\u003eb-\u003ec)-\u003ef(v a)-\u003eArray Int b-\u003ef c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Var.html#v:var",
      "description": {
        "fct-module": "Numeric.AD.Internal.Var",
        "fct-package": "ad",
        "fct-signature": "a -\u003e Int -\u003e v a",
        "fct-source": "src/Numeric-AD-Internal-Var.html#var",
        "fct-type": "method",
        "title": "var"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Var",
        "module": "Numeric.AD.Internal.Var",
        "name": "var",
        "normalized": "a-\u003eInt-\u003eb a",
        "package": "ad",
        "partial": "",
        "signature": "a-\u003eInt-\u003ev a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Var.html#v:varId",
      "description": {
        "fct-module": "Numeric.AD.Internal.Var",
        "fct-package": "ad",
        "fct-signature": "v a -\u003e Int",
        "fct-source": "src/Numeric-AD-Internal-Var.html#varId",
        "fct-type": "method",
        "title": "varId"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Var",
        "module": "Numeric.AD.Internal.Var",
        "name": "varId",
        "normalized": "a b-\u003eInt",
        "package": "ad",
        "partial": "Id",
        "signature": "v a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Var.html#v:vary",
      "description": {
        "fct-module": "Numeric.AD.Internal.Var",
        "fct-package": "ad",
        "fct-signature": "Variable a -\u003e f a",
        "fct-source": "src/Numeric-AD-Internal-Var.html#vary",
        "fct-type": "function",
        "title": "vary"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Internal Var",
        "module": "Numeric.AD.Internal.Var",
        "name": "vary",
        "normalized": "Variable a-\u003eb a",
        "package": "ad",
        "partial": "",
        "signature": "Variable a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Directed.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAllows the choice of AD \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e to be specified at the term level for\n benchmarking or more complicated usage patterns.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.AD.Mode.Directed",
        "fct-package": "ad",
        "fct-signature": "module",
        "fct-source": "src/Numeric-AD-Mode-Directed.html",
        "fct-type": "module",
        "title": "Directed"
      },
      "index": {
        "description": "Allows the choice of AD Mode to be specified at the term level for benchmarking or more complicated usage patterns",
        "hierarchy": "Numeric AD Mode Directed",
        "module": "Numeric.AD.Mode.Directed",
        "name": "Directed",
        "normalized": "",
        "package": "ad",
        "partial": "Directed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Directed.html#t:Direction",
      "description": {
        "fct-module": "Numeric.AD.Mode.Directed",
        "fct-package": "ad",
        "fct-signature": "data",
        "fct-source": "src/Numeric-AD-Mode-Directed.html#Direction",
        "fct-type": "data",
        "title": "Direction"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Directed",
        "module": "Numeric.AD.Mode.Directed",
        "name": "Direction",
        "normalized": "",
        "package": "ad",
        "partial": "Direction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Directed.html#v:Forward",
      "description": {
        "fct-module": "Numeric.AD.Mode.Directed",
        "fct-package": "ad",
        "fct-signature": "Forward",
        "fct-source": "src/Numeric-AD-Mode-Directed.html#Direction",
        "fct-type": "function",
        "title": "Forward"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Directed",
        "module": "Numeric.AD.Mode.Directed",
        "name": "Forward",
        "normalized": "",
        "package": "ad",
        "partial": "Forward",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Directed.html#v:Kahn",
      "description": {
        "fct-module": "Numeric.AD.Mode.Directed",
        "fct-package": "ad",
        "fct-signature": "Kahn",
        "fct-source": "src/Numeric-AD-Mode-Directed.html#Direction",
        "fct-type": "function",
        "title": "Kahn"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Directed",
        "module": "Numeric.AD.Mode.Directed",
        "name": "Kahn",
        "normalized": "",
        "package": "ad",
        "partial": "Kahn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Directed.html#v:Mixed",
      "description": {
        "fct-module": "Numeric.AD.Mode.Directed",
        "fct-package": "ad",
        "fct-signature": "Mixed",
        "fct-source": "src/Numeric-AD-Mode-Directed.html#Direction",
        "fct-type": "function",
        "title": "Mixed"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Directed",
        "module": "Numeric.AD.Mode.Directed",
        "name": "Mixed",
        "normalized": "",
        "package": "ad",
        "partial": "Mixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Directed.html#v:Reverse",
      "description": {
        "fct-module": "Numeric.AD.Mode.Directed",
        "fct-package": "ad",
        "fct-signature": "Reverse",
        "fct-source": "src/Numeric-AD-Mode-Directed.html#Direction",
        "fct-type": "function",
        "title": "Reverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Directed",
        "module": "Numeric.AD.Mode.Directed",
        "name": "Reverse",
        "normalized": "",
        "package": "ad",
        "partial": "Reverse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Directed.html#v:Tower",
      "description": {
        "fct-module": "Numeric.AD.Mode.Directed",
        "fct-package": "ad",
        "fct-signature": "Tower",
        "fct-source": "src/Numeric-AD-Mode-Directed.html#Direction",
        "fct-type": "function",
        "title": "Tower"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Directed",
        "module": "Numeric.AD.Mode.Directed",
        "name": "Tower",
        "normalized": "",
        "package": "ad",
        "partial": "Tower",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Directed.html#v:diff",
      "description": {
        "fct-module": "Numeric.AD.Mode.Directed",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e a",
        "fct-source": "src/Numeric-AD-Mode-Directed.html#diff",
        "fct-type": "function",
        "title": "diff"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Directed",
        "module": "Numeric.AD.Mode.Directed",
        "name": "diff",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Directed.html#v:diff-39-",
      "description": {
        "fct-module": "Numeric.AD.Mode.Directed",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e (a, a)",
        "fct-source": "src/Numeric-AD-Mode-Directed.html#diff%27",
        "fct-type": "function",
        "title": "diff'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Directed",
        "module": "Numeric.AD.Mode.Directed",
        "name": "diff'",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e(b,b)",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Directed.html#v:grad",
      "description": {
        "fct-module": "Numeric.AD.Mode.Directed",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f a",
        "fct-source": "src/Numeric-AD-Mode-Directed.html#grad",
        "fct-type": "function",
        "title": "grad"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Directed",
        "module": "Numeric.AD.Mode.Directed",
        "name": "grad",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea c",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Directed.html#v:grad-39-",
      "description": {
        "fct-module": "Numeric.AD.Mode.Directed",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e (a, f a)",
        "fct-source": "src/Numeric-AD-Mode-Directed.html#grad%27",
        "fct-type": "function",
        "title": "grad'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Directed",
        "module": "Numeric.AD.Mode.Directed",
        "name": "grad'",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e(c,a c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e(a,f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Directed.html#v:jacobian",
      "description": {
        "fct-module": "Numeric.AD.Mode.Directed",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f a)",
        "fct-source": "src/Numeric-AD-Mode-Directed.html#jacobian",
        "fct-type": "function",
        "title": "jacobian"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Directed",
        "module": "Numeric.AD.Mode.Directed",
        "name": "jacobian",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Directed.html#v:jacobian-39-",
      "description": {
        "fct-module": "Numeric.AD.Mode.Directed",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (a, f a)",
        "fct-source": "src/Numeric-AD-Mode-Directed.html#jacobian%27",
        "fct-type": "function",
        "title": "jacobian'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Directed",
        "module": "Numeric.AD.Mode.Directed",
        "name": "jacobian'",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(c,a c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(a,f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eForward mode automatic differentiation\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.AD.Mode.Forward",
        "fct-package": "ad",
        "fct-signature": "module",
        "fct-source": "src/Numeric-AD-Mode-Forward.html",
        "fct-type": "module",
        "title": "Forward"
      },
      "index": {
        "description": "Forward mode automatic differentiation",
        "hierarchy": "Numeric AD Mode Forward",
        "module": "Numeric.AD.Mode.Forward",
        "name": "Forward",
        "normalized": "",
        "package": "ad",
        "partial": "Forward",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:diff",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediff\u003c/a\u003e\u003c/code\u003e function calculates the first derivative of a scalar-to-scalar function by forward-mode \u003ccode\u003e\u003ca\u003eAD\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediff sin 0\n\u003c/code\u003e\u003c/strong\u003e1.0\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Forward",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e a",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#diff",
        "fct-type": "function",
        "title": "diff"
      },
      "index": {
        "description": "The diff function calculates the first derivative of scalar-to-scalar function by forward-mode AD diff sin",
        "hierarchy": "Numeric AD Mode Forward",
        "module": "Numeric.AD.Mode.Forward",
        "name": "diff",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:diff-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediff'\u003c/a\u003e\u003c/code\u003e function calculates the result and first derivative of scalar-to-scalar function by \u003ccode\u003e\u003ca\u003eForward\u003c/a\u003e\u003c/code\u003e mode \u003ccode\u003e\u003ca\u003eAD\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ediff'\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esin\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003esin\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e&&&\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ecos\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003ediff'\u003c/a\u003e\u003c/code\u003e f = f \u003ccode\u003e\u003ca\u003e&&&\u003c/a\u003e\u003c/code\u003e d f\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediff' sin 0\n\u003c/code\u003e\u003c/strong\u003e(0.0,1.0)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediff' exp 0\n\u003c/code\u003e\u003c/strong\u003e(1.0,1.0)\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Forward",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e (a, a)",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#diff%27",
        "fct-type": "function",
        "title": "diff'"
      },
      "index": {
        "description": "The diff function calculates the result and first derivative of scalar-to-scalar function by Forward mode AD diff sin sin cos diff diff sin diff exp",
        "hierarchy": "Numeric AD Mode Forward",
        "module": "Numeric.AD.Mode.Forward",
        "name": "diff'",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e(b,b)",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:diffF",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediffF\u003c/a\u003e\u003c/code\u003e function calculates the first derivatives of scalar-to-nonscalar function by \u003ccode\u003e\u003ca\u003eForward\u003c/a\u003e\u003c/code\u003e mode \u003ccode\u003e\u003ca\u003eAD\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediffF (\\a -\u003e [sin a, cos a]) 0\n\u003c/code\u003e\u003c/strong\u003e[1.0,-0.0]\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Forward",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e f (AD s a)) -\u003e a -\u003e f a",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#diffF",
        "fct-type": "function",
        "title": "diffF"
      },
      "index": {
        "description": "The diffF function calculates the first derivatives of scalar-to-nonscalar function by Forward mode AD diffF sin cos",
        "hierarchy": "Numeric AD Mode Forward",
        "module": "Numeric.AD.Mode.Forward",
        "name": "diffF",
        "normalized": "AD a b-\u003ec(AD a b))-\u003eb-\u003ec b",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003ef(AD s a))-\u003ea-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:diffF-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediffF'\u003c/a\u003e\u003c/code\u003e function calculates the result and first derivatives of a scalar-to-non-scalar function by \u003ccode\u003e\u003ca\u003eForward\u003c/a\u003e\u003c/code\u003e mode \u003ccode\u003e\u003ca\u003eAD\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediffF' (\\a -\u003e [sin a, cos a]) 0\n\u003c/code\u003e\u003c/strong\u003e[(0.0,1.0),(1.0,-0.0)]\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Forward",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e f (AD s a)) -\u003e a -\u003e f (a, a)",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#diffF%27",
        "fct-type": "function",
        "title": "diffF'"
      },
      "index": {
        "description": "The diffF function calculates the result and first derivatives of scalar-to-non-scalar function by Forward mode AD diffF sin cos",
        "hierarchy": "Numeric AD Mode Forward",
        "module": "Numeric.AD.Mode.Forward",
        "name": "diffF'",
        "normalized": "AD a b-\u003ec(AD a b))-\u003eb-\u003ec(b,b)",
        "package": "ad",
        "partial": "F'",
        "signature": "AD s a-\u003ef(AD s a))-\u003ea-\u003ef(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:du",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the directional derivative of a function given a zipped up \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e of the input values and their derivatives\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Mode.Forward",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f (a, a) -\u003e a",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#du",
        "fct-type": "function",
        "title": "du"
      },
      "index": {
        "description": "Compute the directional derivative of function given zipped up Functor of the input values and their derivatives",
        "hierarchy": "Numeric AD Mode Forward",
        "module": "Numeric.AD.Mode.Forward",
        "name": "du",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea(c,c)-\u003ec",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef(a,a)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:du-39-",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the answer and directional derivative of a function given a zipped up \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e of the input values and their derivatives\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Mode.Forward",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f (a, a) -\u003e (a, a)",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#du%27",
        "fct-type": "function",
        "title": "du'"
      },
      "index": {
        "description": "Compute the answer and directional derivative of function given zipped up Functor of the input values and their derivatives",
        "hierarchy": "Numeric AD Mode Forward",
        "module": "Numeric.AD.Mode.Forward",
        "name": "du'",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea(c,c)-\u003e(c,c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef(a,a)-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:duF",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a vector of directional derivatives for a function given a zipped up \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e of the input values and their derivatives.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Mode.Forward",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f (a, a) -\u003e g a",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#duF",
        "fct-type": "function",
        "title": "duF"
      },
      "index": {
        "description": "Compute vector of directional derivatives for function given zipped up Functor of the input values and their derivatives",
        "hierarchy": "Numeric AD Mode Forward",
        "module": "Numeric.AD.Mode.Forward",
        "name": "duF",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea(c,c)-\u003ed c",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef(a,a)-\u003eg a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:duF-39-",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a vector of answers and directional derivatives for a function given a zipped up \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e of the input values and their derivatives.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Mode.Forward",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f (a, a) -\u003e g (a, a)",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#duF%27",
        "fct-type": "function",
        "title": "duF'"
      },
      "index": {
        "description": "Compute vector of answers and directional derivatives for function given zipped up Functor of the input values and their derivatives",
        "hierarchy": "Numeric AD Mode Forward",
        "module": "Numeric.AD.Mode.Forward",
        "name": "duF'",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea(c,c)-\u003ed(c,c)",
        "package": "ad",
        "partial": "F'",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef(a,a)-\u003eg(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:grad",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the gradient of a function using forward mode AD.\n\u003c/p\u003e\u003cp\u003eNote, this performs \u003cem\u003eO(n)\u003c/em\u003e worse than \u003ccode\u003e\u003ca\u003egrad\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003en\u003c/code\u003e inputs, in exchange for better space utilization.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Mode.Forward",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f a",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#grad",
        "fct-type": "function",
        "title": "grad"
      },
      "index": {
        "description": "Compute the gradient of function using forward mode AD Note this performs worse than grad for inputs in exchange for better space utilization",
        "hierarchy": "Numeric AD Mode Forward",
        "module": "Numeric.AD.Mode.Forward",
        "name": "grad",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea c",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:grad-39-",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the gradient and answer to a function using forward mode AD.\n\u003c/p\u003e\u003cp\u003eNote, this performs \u003cem\u003eO(n)\u003c/em\u003e worse than \u003ccode\u003e\u003ca\u003egrad'\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003en\u003c/code\u003e inputs, in exchange for better space utilization.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Mode.Forward",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e (a, f a)",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#grad%27",
        "fct-type": "function",
        "title": "grad'"
      },
      "index": {
        "description": "Compute the gradient and answer to function using forward mode AD Note this performs worse than grad for inputs in exchange for better space utilization",
        "hierarchy": "Numeric AD Mode Forward",
        "module": "Numeric.AD.Mode.Forward",
        "name": "grad'",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e(c,a c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e(a,f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:gradWith",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the gradient of a function using forward mode AD and combine the result with the input using a user-specified function.\n\u003c/p\u003e\u003cp\u003eNote, this performs \u003cem\u003eO(n)\u003c/em\u003e worse than \u003ccode\u003e\u003ca\u003egradWith\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003en\u003c/code\u003e inputs, in exchange for better space utilization.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Mode.Forward",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f b",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#gradWith",
        "fct-type": "function",
        "title": "gradWith"
      },
      "index": {
        "description": "Compute the gradient of function using forward mode AD and combine the result with the input using user-specified function Note this performs worse than gradWith for inputs in exchange for better space utilization",
        "hierarchy": "Numeric AD Mode Forward",
        "module": "Numeric.AD.Mode.Forward",
        "name": "gradWith",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea d",
        "package": "ad",
        "partial": "With",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:gradWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the gradient of a function using forward mode AD and the answer, and combine the result with the input using a\n user-specified function.\n\u003c/p\u003e\u003cp\u003eNote, this performs \u003cem\u003eO(n)\u003c/em\u003e worse than \u003ccode\u003e\u003ca\u003egradWith'\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003en\u003c/code\u003e inputs, in exchange for better space utilization.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egradWith' (,) sum [0..4]\n\u003c/code\u003e\u003c/strong\u003e(10,[(0,1),(1,1),(2,1),(3,1),(4,1)])\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Forward",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e (a, f b)",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#gradWith%27",
        "fct-type": "function",
        "title": "gradWith'"
      },
      "index": {
        "description": "Compute the gradient of function using forward mode AD and the answer and combine the result with the input using user-specified function Note this performs worse than gradWith for inputs in exchange for better space utilization gradWith sum",
        "hierarchy": "Numeric AD Mode Forward",
        "module": "Numeric.AD.Mode.Forward",
        "name": "gradWith'",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e(c,a d)",
        "package": "ad",
        "partial": "With'",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e(a,f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:hessianProduct",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the product of a vector with the Hessian using forward-on-forward-mode AD.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Mode.Forward",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f (a, a) -\u003e f a",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#hessianProduct",
        "fct-type": "function",
        "title": "hessianProduct"
      },
      "index": {
        "description": "Compute the product of vector with the Hessian using forward-on-forward-mode AD",
        "hierarchy": "Numeric AD Mode Forward",
        "module": "Numeric.AD.Mode.Forward",
        "name": "hessianProduct",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea(c,c)-\u003ea c",
        "package": "ad",
        "partial": "Product",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef(a,a)-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:hessianProduct-39-",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the gradient and hessian product using forward-on-forward-mode AD.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Mode.Forward",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f (a, a) -\u003e f (a, a)",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#hessianProduct%27",
        "fct-type": "function",
        "title": "hessianProduct'"
      },
      "index": {
        "description": "Compute the gradient and hessian product using forward-on-forward-mode AD",
        "hierarchy": "Numeric AD Mode Forward",
        "module": "Numeric.AD.Mode.Forward",
        "name": "hessianProduct'",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea(c,c)-\u003ea(c,c)",
        "package": "ad",
        "partial": "Product'",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef(a,a)-\u003ef(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:jacobian",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the Jacobian using \u003ccode\u003e\u003ca\u003eForward\u003c/a\u003e\u003c/code\u003e mode \u003ccode\u003e\u003ca\u003eAD\u003c/a\u003e\u003c/code\u003e. This must transpose the result, so \u003ccode\u003e\u003ca\u003ejacobianT\u003c/a\u003e\u003c/code\u003e is faster and allows more result types.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ejacobian (\\[x,y] -\u003e [y,x,x+y,x*y,exp x * sin y]) [pi,1]\n\u003c/code\u003e\u003c/strong\u003e[[0.0,1.0],[1.0,0.0],[1.0,1.0],[1.0,3.141592653589793],[19.472221418841606,12.502969588876512]]\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Forward",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f a)",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#jacobian",
        "fct-type": "function",
        "title": "jacobian"
      },
      "index": {
        "description": "Compute the Jacobian using Forward mode AD This must transpose the result so jacobianT is faster and allows more result types jacobian exp sin pi",
        "hierarchy": "Numeric AD Mode Forward",
        "module": "Numeric.AD.Mode.Forward",
        "name": "jacobian",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:jacobian-39-",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the Jacobian using \u003ccode\u003e\u003ca\u003eForward\u003c/a\u003e\u003c/code\u003e mode \u003ccode\u003e\u003ca\u003eAD\u003c/a\u003e\u003c/code\u003e along with the actual answer.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Mode.Forward",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (a, f a)",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#jacobian%27",
        "fct-type": "function",
        "title": "jacobian'"
      },
      "index": {
        "description": "Compute the Jacobian using Forward mode AD along with the actual answer",
        "hierarchy": "Numeric AD Mode Forward",
        "module": "Numeric.AD.Mode.Forward",
        "name": "jacobian'",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(c,a c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(a,f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:jacobianT",
      "description": {
        "fct-descr": "\u003cp\u003eA fast, simple, transposed Jacobian computed with forward-mode AD.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Mode.Forward",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e f (g a)",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#jacobianT",
        "fct-type": "function",
        "title": "jacobianT"
      },
      "index": {
        "description": "fast simple transposed Jacobian computed with forward-mode AD",
        "hierarchy": "Numeric AD Mode Forward",
        "module": "Numeric.AD.Mode.Forward",
        "name": "jacobianT",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ea(d c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003ef(g a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:jacobianWith",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the Jacobian using \u003ccode\u003e\u003ca\u003eForward\u003c/a\u003e\u003c/code\u003e mode \u003ccode\u003e\u003ca\u003eAD\u003c/a\u003e\u003c/code\u003e and combine the output with the input. This must transpose the result, so \u003ccode\u003e\u003ca\u003ejacobianWithT\u003c/a\u003e\u003c/code\u003e is faster, and allows more result types.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Mode.Forward",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f b)",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#jacobianWith",
        "fct-type": "function",
        "title": "jacobianWith"
      },
      "index": {
        "description": "Compute the Jacobian using Forward mode AD and combine the output with the input This must transpose the result so jacobianWithT is faster and allows more result types",
        "hierarchy": "Numeric AD Mode Forward",
        "module": "Numeric.AD.Mode.Forward",
        "name": "jacobianWith",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a e)",
        "package": "ad",
        "partial": "With",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:jacobianWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the Jacobian using \u003ccode\u003e\u003ca\u003eForward\u003c/a\u003e\u003c/code\u003e mode \u003ccode\u003e\u003ca\u003eAD\u003c/a\u003e\u003c/code\u003e combined with the input using a user specified function, along with the actual answer.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Mode.Forward",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (a, f b)",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#jacobianWith%27",
        "fct-type": "function",
        "title": "jacobianWith'"
      },
      "index": {
        "description": "Compute the Jacobian using Forward mode AD combined with the input using user specified function along with the actual answer",
        "hierarchy": "Numeric AD Mode Forward",
        "module": "Numeric.AD.Mode.Forward",
        "name": "jacobianWith'",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(c,a e)",
        "package": "ad",
        "partial": "With'",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(a,f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:jacobianWithT",
      "description": {
        "fct-descr": "\u003cp\u003eA fast, simple, transposed Jacobian computed with \u003ccode\u003e\u003ca\u003eForward\u003c/a\u003e\u003c/code\u003e mode \u003ccode\u003e\u003ca\u003eAD\u003c/a\u003e\u003c/code\u003e that combines the output with the input.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Mode.Forward",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e f (g b)",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#jacobianWithT",
        "fct-type": "function",
        "title": "jacobianWithT"
      },
      "index": {
        "description": "fast simple transposed Jacobian computed with Forward mode AD that combines the output with the input",
        "hierarchy": "Numeric AD Mode Forward",
        "module": "Numeric.AD.Mode.Forward",
        "name": "jacobianWithT",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ea(d e)",
        "package": "ad",
        "partial": "With",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003ef(g b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides reverse-mode Automatic Differentiation using post-hoc linear time\n topological sorting.\n\u003c/p\u003e\u003cp\u003eFor reverse mode AD we use \u003ccode\u003e\u003ca\u003eStableName\u003c/a\u003e\u003c/code\u003e to recover sharing information from\n the tape to avoid combinatorial explosion, and thus run asymptotically faster\n than it could without such sharing information, but the use of side-effects\n contained herein is benign.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.AD.Mode.Kahn",
        "fct-package": "ad",
        "fct-signature": "module",
        "fct-source": "src/Numeric-AD-Mode-Kahn.html",
        "fct-type": "module",
        "title": "Kahn"
      },
      "index": {
        "description": "This module provides reverse-mode Automatic Differentiation using post-hoc linear time topological sorting For reverse mode AD we use StableName to recover sharing information from the tape to avoid combinatorial explosion and thus run asymptotically faster than it could without such sharing information but the use of side-effects contained herein is benign",
        "hierarchy": "Numeric AD Mode Kahn",
        "module": "Numeric.AD.Mode.Kahn",
        "name": "Kahn",
        "normalized": "",
        "package": "ad",
        "partial": "Kahn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#t:Grad",
      "description": {
        "fct-module": "Numeric.AD.Mode.Kahn",
        "fct-package": "ad",
        "fct-signature": "class",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#Grad",
        "fct-type": "class",
        "title": "Grad"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Kahn",
        "module": "Numeric.AD.Mode.Kahn",
        "name": "Grad",
        "normalized": "",
        "package": "ad",
        "partial": "Grad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:diff",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the derivative of a function.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediff sin 0\n\u003c/code\u003e\u003c/strong\u003e1.0\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ecos 0\n\u003c/code\u003e\u003c/strong\u003e1.0\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Kahn",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e a",
        "fct-source": "src/Numeric-AD-Mode-Kahn.html#diff",
        "fct-type": "function",
        "title": "diff"
      },
      "index": {
        "description": "Compute the derivative of function diff sin cos",
        "hierarchy": "Numeric AD Mode Kahn",
        "module": "Numeric.AD.Mode.Kahn",
        "name": "diff",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:diff-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediff'\u003c/a\u003e\u003c/code\u003e function calculates the value and derivative, as a\n pair, of a scalar-to-scalar function.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediff' sin 0\n\u003c/code\u003e\u003c/strong\u003e(0.0,1.0)\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Kahn",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e (a, a)",
        "fct-source": "src/Numeric-AD-Mode-Kahn.html#diff%27",
        "fct-type": "function",
        "title": "diff'"
      },
      "index": {
        "description": "The diff function calculates the value and derivative as pair of scalar-to-scalar function diff sin",
        "hierarchy": "Numeric AD Mode Kahn",
        "module": "Numeric.AD.Mode.Kahn",
        "name": "diff'",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e(b,b)",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:diffF",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the derivatives of a function that returns a vector with regards to its single input.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediffF (\\a -\u003e [sin a, cos a]) 0\n\u003c/code\u003e\u003c/strong\u003e[1.0,0.0]\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Kahn",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e f (AD s a)) -\u003e a -\u003e f a",
        "fct-source": "src/Numeric-AD-Mode-Kahn.html#diffF",
        "fct-type": "function",
        "title": "diffF"
      },
      "index": {
        "description": "Compute the derivatives of function that returns vector with regards to its single input diffF sin cos",
        "hierarchy": "Numeric AD Mode Kahn",
        "module": "Numeric.AD.Mode.Kahn",
        "name": "diffF",
        "normalized": "AD a b-\u003ec(AD a b))-\u003eb-\u003ec b",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003ef(AD s a))-\u003ea-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:diffF-39-",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the derivatives of a function that returns a vector with regards to its single input\n as well as the primal answer.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediffF' (\\a -\u003e [sin a, cos a]) 0\n\u003c/code\u003e\u003c/strong\u003e[(0.0,1.0),(1.0,0.0)]\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Kahn",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e f (AD s a)) -\u003e a -\u003e f (a, a)",
        "fct-source": "src/Numeric-AD-Mode-Kahn.html#diffF%27",
        "fct-type": "function",
        "title": "diffF'"
      },
      "index": {
        "description": "Compute the derivatives of function that returns vector with regards to its single input as well as the primal answer diffF sin cos",
        "hierarchy": "Numeric AD Mode Kahn",
        "module": "Numeric.AD.Mode.Kahn",
        "name": "diffF'",
        "normalized": "AD a b-\u003ec(AD a b))-\u003eb-\u003ec(b,b)",
        "package": "ad",
        "partial": "F'",
        "signature": "AD s a-\u003ef(AD s a))-\u003ea-\u003ef(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:grad",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egrad\u003c/a\u003e\u003c/code\u003e function calculates the gradient of a non-scalar-to-scalar function with reverse-mode AD in a single pass.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egrad (\\[x,y,z] -\u003e x*y+z) [1,2,3]\n\u003c/code\u003e\u003c/strong\u003e[2,1,1]\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Kahn",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f a",
        "fct-source": "src/Numeric-AD-Mode-Kahn.html#grad",
        "fct-type": "function",
        "title": "grad"
      },
      "index": {
        "description": "The grad function calculates the gradient of non-scalar-to-scalar function with reverse-mode AD in single pass grad",
        "hierarchy": "Numeric AD Mode Kahn",
        "module": "Numeric.AD.Mode.Kahn",
        "name": "grad",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea c",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:grad-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egrad'\u003c/a\u003e\u003c/code\u003e function calculates the result and gradient of a non-scalar-to-scalar function with reverse-mode AD in a single pass.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egrad' (\\[x,y,z] -\u003e 4*x*exp y+cos z) [1,2,3]\n\u003c/code\u003e\u003c/strong\u003e(28.566231899122155,[29.5562243957226,29.5562243957226,-0.1411200080598672])\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Kahn",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e (a, f a)",
        "fct-source": "src/Numeric-AD-Mode-Kahn.html#grad%27",
        "fct-type": "function",
        "title": "grad'"
      },
      "index": {
        "description": "The grad function calculates the result and gradient of non-scalar-to-scalar function with reverse-mode AD in single pass grad exp cos",
        "hierarchy": "Numeric AD Mode Kahn",
        "module": "Numeric.AD.Mode.Kahn",
        "name": "grad'",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e(c,a c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e(a,f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:gradWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egrad\u003c/a\u003e\u003c/code\u003e g f\u003c/code\u003e function calculates the gradient of a non-scalar-to-scalar function \u003ccode\u003ef\u003c/code\u003e with reverse-mode AD in a single pass.\n The gradient is combined element-wise with the argument using the function \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003egrad\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003egradWith\u003c/a\u003e\u003c/code\u003e (_ dx -\u003e dx)\n \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003egradWith\u003c/a\u003e\u003c/code\u003e const\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Kahn",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f b",
        "fct-source": "src/Numeric-AD-Mode-Kahn.html#gradWith",
        "fct-type": "function",
        "title": "gradWith"
      },
      "index": {
        "description": "grad function calculates the gradient of non-scalar-to-scalar function with reverse-mode AD in single pass The gradient is combined element-wise with the argument using the function grad gradWith dx dx id gradWith const",
        "hierarchy": "Numeric AD Mode Kahn",
        "module": "Numeric.AD.Mode.Kahn",
        "name": "gradWith",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea d",
        "package": "ad",
        "partial": "With",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:gradWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egrad'\u003c/a\u003e\u003c/code\u003e g f\u003c/code\u003e calculates the result and gradient of a non-scalar-to-scalar function \u003ccode\u003ef\u003c/code\u003e with reverse-mode AD in a single pass\n the gradient is combined element-wise with the argument using the function \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003egrad'\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003egradWith'\u003c/a\u003e\u003c/code\u003e (_ dx -\u003e dx)\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Kahn",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e (a, f b)",
        "fct-source": "src/Numeric-AD-Mode-Kahn.html#gradWith%27",
        "fct-type": "function",
        "title": "gradWith'"
      },
      "index": {
        "description": "grad calculates the result and gradient of non-scalar-to-scalar function with reverse-mode AD in single pass the gradient is combined element-wise with the argument using the function grad gradWith dx dx",
        "hierarchy": "Numeric AD Mode Kahn",
        "module": "Numeric.AD.Mode.Kahn",
        "name": "gradWith'",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e(c,a d)",
        "package": "ad",
        "partial": "With'",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e(a,f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:hessian",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the \u003ccode\u003e\u003ca\u003ehessian\u003c/a\u003e\u003c/code\u003e via the \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e of the gradient. gradient is computed in reverse mode and then the \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e is computed in reverse mode.\n\u003c/p\u003e\u003cp\u003eHowever, since the \u003ccode\u003e\u003ccode\u003e\u003ca\u003egrad\u003c/a\u003e\u003c/code\u003e f :: f a -\u003e f a\u003c/code\u003e is square this is not as fast as using the forward-mode \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e of a reverse mode gradient provided by \u003ccode\u003e\u003ca\u003ehessian\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehessian (\\[x,y] -\u003e x*y) [1,2]\n\u003c/code\u003e\u003c/strong\u003e[[0,1],[1,0]]\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Kahn",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f (f a)",
        "fct-source": "src/Numeric-AD-Mode-Kahn.html#hessian",
        "fct-type": "function",
        "title": "hessian"
      },
      "index": {
        "description": "Compute the hessian via the jacobian of the gradient gradient is computed in reverse mode and then the jacobian is computed in reverse mode However since the grad is square this is not as fast as using the forward-mode jacobian of reverse mode gradient provided by hessian hessian",
        "hierarchy": "Numeric AD Mode Kahn",
        "module": "Numeric.AD.Mode.Kahn",
        "name": "hessian",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea(a c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:hessianF",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the order 3 Hessian tensor on a non-scalar-to-non-scalar function via the reverse-mode Jacobian of the reverse-mode Jacobian of the function.\n\u003c/p\u003e\u003cp\u003eLess efficient than \u003ccode\u003e\u003ca\u003ehessianF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehessianF (\\[x,y] -\u003e [x*y,x+y,exp x*cos y]) [1,2]\n\u003c/code\u003e\u003c/strong\u003e[[[0.0,1.0],[1.0,0.0]],[[0.0,0.0],[0.0,0.0]],[[-1.1312043837568135,-2.4717266720048188],[-2.4717266720048188,1.1312043837568135]]]\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Kahn",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f (f a))",
        "fct-source": "src/Numeric-AD-Mode-Kahn.html#hessianF",
        "fct-type": "function",
        "title": "hessianF"
      },
      "index": {
        "description": "Compute the order Hessian tensor on non-scalar-to-non-scalar function via the reverse-mode Jacobian of the reverse-mode Jacobian of the function Less efficient than hessianF hessianF exp cos",
        "hierarchy": "Numeric AD Mode Kahn",
        "module": "Numeric.AD.Mode.Kahn",
        "name": "hessianF",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a(a c))",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f(f a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:jacobian",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e function calculates the jacobian of a non-scalar-to-non-scalar function with reverse AD lazily in \u003ccode\u003em\u003c/code\u003e passes for \u003ccode\u003em\u003c/code\u003e outputs.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ejacobian (\\[x,y] -\u003e [y,x,x*y]) [2,1]\n\u003c/code\u003e\u003c/strong\u003e[[0,1],[1,0],[1,2]]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ejacobian (\\[x,y] -\u003e [exp y,cos x,x+y]) [1,2]\n\u003c/code\u003e\u003c/strong\u003e[[0.0,7.38905609893065],[-0.8414709848078965,0.0],[1.0,1.0]]\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Kahn",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f a)",
        "fct-source": "src/Numeric-AD-Mode-Kahn.html#jacobian",
        "fct-type": "function",
        "title": "jacobian"
      },
      "index": {
        "description": "The jacobian function calculates the jacobian of non-scalar-to-non-scalar function with reverse AD lazily in passes for outputs jacobian jacobian exp cos",
        "hierarchy": "Numeric AD Mode Kahn",
        "module": "Numeric.AD.Mode.Kahn",
        "name": "jacobian",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:jacobian-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ejacobian'\u003c/a\u003e\u003c/code\u003e function calculates both the result and the Jacobian of a nonscalar-to-nonscalar function, using \u003ccode\u003em\u003c/code\u003e invocations of reverse AD,\n where \u003ccode\u003em\u003c/code\u003e is the output dimensionality. Applying \u003ccode\u003efmap snd\u003c/code\u003e to the result will recover the result of \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e\n | An alias for \u003ccode\u003egradF'\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eghci\u003e jacobian' ([x,y] -\u003e [y,x,x*y]) [2,1]\n [(1,[0,1]),(2,[1,0]),(2,[1,2])]\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Mode.Kahn",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (a, f a)",
        "fct-source": "src/Numeric-AD-Mode-Kahn.html#jacobian%27",
        "fct-type": "function",
        "title": "jacobian'"
      },
      "index": {
        "description": "The jacobian function calculates both the result and the Jacobian of nonscalar-to-nonscalar function using invocations of reverse AD where is the output dimensionality Applying fmap snd to the result will recover the result of jacobian An alias for gradF ghci jacobian",
        "hierarchy": "Numeric AD Mode Kahn",
        "module": "Numeric.AD.Mode.Kahn",
        "name": "jacobian'",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(c,a c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(a,f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:jacobianWith",
      "description": {
        "fct-descr": "\u003cp\u003e'jacobianWith g f' calculates the Jacobian of a non-scalar-to-non-scalar function \u003ccode\u003ef\u003c/code\u003e with reverse AD lazily in \u003ccode\u003em\u003c/code\u003e passes for \u003ccode\u003em\u003c/code\u003e outputs.\n\u003c/p\u003e\u003cp\u003eInstead of returning the Jacobian matrix, the elements of the matrix are combined with the input using the \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ejacobianWith\u003c/a\u003e\u003c/code\u003e (_ dx -\u003e dx)\n \u003ccode\u003e\u003ca\u003ejacobianWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e = (f x -\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e x \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e f x)\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Kahn",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f b)",
        "fct-source": "src/Numeric-AD-Mode-Kahn.html#jacobianWith",
        "fct-type": "function",
        "title": "jacobianWith"
      },
      "index": {
        "description": "jacobianWith calculates the Jacobian of non-scalar-to-non-scalar function with reverse AD lazily in passes for outputs Instead of returning the Jacobian matrix the elements of the matrix are combined with the input using the jacobian jacobianWith dx dx jacobianWith const const",
        "hierarchy": "Numeric AD Mode Kahn",
        "module": "Numeric.AD.Mode.Kahn",
        "name": "jacobianWith",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a e)",
        "package": "ad",
        "partial": "With",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:jacobianWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ejacobianWith\u003c/a\u003e\u003c/code\u003e g f' calculates both the result and the Jacobian of a nonscalar-to-nonscalar function \u003ccode\u003ef\u003c/code\u003e, using \u003ccode\u003em\u003c/code\u003e invocations of reverse AD,\n where \u003ccode\u003em\u003c/code\u003e is the output dimensionality. Applying \u003ccode\u003efmap snd\u003c/code\u003e to the result will recover the result of \u003ccode\u003e\u003ca\u003ejacobianWith\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eInstead of returning the Jacobian matrix, the elements of the matrix are combined with the input using the \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ejacobian'\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003ejacobianWith'\u003c/a\u003e\u003c/code\u003e (_ dx -\u003e dx)\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Kahn",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (a, f b)",
        "fct-source": "src/Numeric-AD-Mode-Kahn.html#jacobianWith%27",
        "fct-type": "function",
        "title": "jacobianWith'"
      },
      "index": {
        "description": "jacobianWith calculates both the result and the Jacobian of nonscalar-to-nonscalar function using invocations of reverse AD where is the output dimensionality Applying fmap snd to the result will recover the result of jacobianWith Instead of returning the Jacobian matrix the elements of the matrix are combined with the input using the jacobian jacobianWith dx dx",
        "hierarchy": "Numeric AD Mode Kahn",
        "module": "Numeric.AD.Mode.Kahn",
        "name": "jacobianWith'",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(c,a e)",
        "package": "ad",
        "partial": "With'",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(a,f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:vgrad",
      "description": {
        "fct-module": "Numeric.AD.Mode.Kahn",
        "fct-package": "ad",
        "fct-signature": "i -\u003e o",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#vgrad",
        "fct-type": "function",
        "title": "vgrad"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Kahn",
        "module": "Numeric.AD.Mode.Kahn",
        "name": "vgrad",
        "normalized": "a-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "i-\u003eo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:vgrad-39-",
      "description": {
        "fct-module": "Numeric.AD.Mode.Kahn",
        "fct-package": "ad",
        "fct-signature": "i -\u003e o'",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#vgrad%27",
        "fct-type": "function",
        "title": "vgrad'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Kahn",
        "module": "Numeric.AD.Mode.Kahn",
        "name": "vgrad'",
        "normalized": "a-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "i-\u003eo'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReverse-mode automatic differentiation using Wengert lists and\n Data.Reflection\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.AD.Mode.Reverse",
        "fct-package": "ad",
        "fct-signature": "module",
        "fct-source": "src/Numeric-AD-Mode-Reverse.html",
        "fct-type": "module",
        "title": "Reverse"
      },
      "index": {
        "description": "Reverse-mode automatic differentiation using Wengert lists and Data.Reflection",
        "hierarchy": "Numeric AD Mode Reverse",
        "module": "Numeric.AD.Mode.Reverse",
        "name": "Reverse",
        "normalized": "",
        "package": "ad",
        "partial": "Reverse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:diff",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the derivative of a function.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediff sin 0\n\u003c/code\u003e\u003c/strong\u003e1.0\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Reverse",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e a",
        "fct-source": "src/Numeric-AD-Mode-Reverse.html#diff",
        "fct-type": "function",
        "title": "diff"
      },
      "index": {
        "description": "Compute the derivative of function diff sin",
        "hierarchy": "Numeric AD Mode Reverse",
        "module": "Numeric.AD.Mode.Reverse",
        "name": "diff",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:diff-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediff'\u003c/a\u003e\u003c/code\u003e function calculates the result and derivative, as a pair, of a scalar-to-scalar function.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediff' sin 0\n\u003c/code\u003e\u003c/strong\u003e(0.0,1.0)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediff' exp 0\n\u003c/code\u003e\u003c/strong\u003e(1.0,1.0)\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Reverse",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e (a, a)",
        "fct-source": "src/Numeric-AD-Mode-Reverse.html#diff%27",
        "fct-type": "function",
        "title": "diff'"
      },
      "index": {
        "description": "The diff function calculates the result and derivative as pair of scalar-to-scalar function diff sin diff exp",
        "hierarchy": "Numeric AD Mode Reverse",
        "module": "Numeric.AD.Mode.Reverse",
        "name": "diff'",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e(b,b)",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:diffF",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the derivatives of each result of a scalar-to-vector function with regards to its input.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediffF (\\a -\u003e [sin a, cos a]) 0\n\u003c/code\u003e\u003c/strong\u003e[1.0,0.0]\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Reverse",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e f (AD s a)) -\u003e a -\u003e f a",
        "fct-source": "src/Numeric-AD-Mode-Reverse.html#diffF",
        "fct-type": "function",
        "title": "diffF"
      },
      "index": {
        "description": "Compute the derivatives of each result of scalar-to-vector function with regards to its input diffF sin cos",
        "hierarchy": "Numeric AD Mode Reverse",
        "module": "Numeric.AD.Mode.Reverse",
        "name": "diffF",
        "normalized": "AD a b-\u003ec(AD a b))-\u003eb-\u003ec b",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003ef(AD s a))-\u003ea-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:diffF-39-",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the derivatives of each result of a scalar-to-vector function with regards to its input along with the answer.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediffF' (\\a -\u003e [sin a, cos a]) 0\n\u003c/code\u003e\u003c/strong\u003e[(0.0,1.0),(1.0,0.0)]\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Reverse",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e f (AD s a)) -\u003e a -\u003e f (a, a)",
        "fct-source": "src/Numeric-AD-Mode-Reverse.html#diffF%27",
        "fct-type": "function",
        "title": "diffF'"
      },
      "index": {
        "description": "Compute the derivatives of each result of scalar-to-vector function with regards to its input along with the answer diffF sin cos",
        "hierarchy": "Numeric AD Mode Reverse",
        "module": "Numeric.AD.Mode.Reverse",
        "name": "diffF'",
        "normalized": "AD a b-\u003ec(AD a b))-\u003eb-\u003ec(b,b)",
        "package": "ad",
        "partial": "F'",
        "signature": "AD s a-\u003ef(AD s a))-\u003ea-\u003ef(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:grad",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egrad\u003c/a\u003e\u003c/code\u003e function calculates the gradient of a non-scalar-to-scalar function with reverse-mode AD in a single pass.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egrad (\\[x,y,z] -\u003e x*y+z) [1,2,3]\n\u003c/code\u003e\u003c/strong\u003e[2,1,1]\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Reverse",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f a",
        "fct-source": "src/Numeric-AD-Mode-Reverse.html#grad",
        "fct-type": "function",
        "title": "grad"
      },
      "index": {
        "description": "The grad function calculates the gradient of non-scalar-to-scalar function with reverse-mode AD in single pass grad",
        "hierarchy": "Numeric AD Mode Reverse",
        "module": "Numeric.AD.Mode.Reverse",
        "name": "grad",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea c",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:grad-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egrad'\u003c/a\u003e\u003c/code\u003e function calculates the result and gradient of a non-scalar-to-scalar function with reverse-mode AD in a single pass.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egrad' (\\[x,y,z] -\u003e x*y+z) [1,2,3]\n\u003c/code\u003e\u003c/strong\u003e(5,[2,1,1])\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Reverse",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e (a, f a)",
        "fct-source": "src/Numeric-AD-Mode-Reverse.html#grad%27",
        "fct-type": "function",
        "title": "grad'"
      },
      "index": {
        "description": "The grad function calculates the result and gradient of non-scalar-to-scalar function with reverse-mode AD in single pass grad",
        "hierarchy": "Numeric AD Mode Reverse",
        "module": "Numeric.AD.Mode.Reverse",
        "name": "grad'",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e(c,a c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e(a,f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:gradWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egrad\u003c/a\u003e\u003c/code\u003e g f\u003c/code\u003e function calculates the gradient of a non-scalar-to-scalar function \u003ccode\u003ef\u003c/code\u003e with reverse-mode AD in a single pass.\n The gradient is combined element-wise with the argument using the function \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003egrad\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003egradWith\u003c/a\u003e\u003c/code\u003e (_ dx -\u003e dx)\n \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003egradWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Reverse",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f b",
        "fct-source": "src/Numeric-AD-Mode-Reverse.html#gradWith",
        "fct-type": "function",
        "title": "gradWith"
      },
      "index": {
        "description": "grad function calculates the gradient of non-scalar-to-scalar function with reverse-mode AD in single pass The gradient is combined element-wise with the argument using the function grad gradWith dx dx id gradWith const",
        "hierarchy": "Numeric AD Mode Reverse",
        "module": "Numeric.AD.Mode.Reverse",
        "name": "gradWith",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea d",
        "package": "ad",
        "partial": "With",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:gradWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egrad'\u003c/a\u003e\u003c/code\u003e g f\u003c/code\u003e calculates the result and gradient of a non-scalar-to-scalar function \u003ccode\u003ef\u003c/code\u003e with reverse-mode AD in a single pass\n the gradient is combined element-wise with the argument using the function \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003egrad'\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003egradWith'\u003c/a\u003e\u003c/code\u003e (_ dx -\u003e dx)\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Reverse",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e (a, f b)",
        "fct-source": "src/Numeric-AD-Mode-Reverse.html#gradWith%27",
        "fct-type": "function",
        "title": "gradWith'"
      },
      "index": {
        "description": "grad calculates the result and gradient of non-scalar-to-scalar function with reverse-mode AD in single pass the gradient is combined element-wise with the argument using the function grad gradWith dx dx",
        "hierarchy": "Numeric AD Mode Reverse",
        "module": "Numeric.AD.Mode.Reverse",
        "name": "gradWith'",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e(c,a d)",
        "package": "ad",
        "partial": "With'",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e(a,f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:hessian",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the hessian via the jacobian of the gradient. gradient is computed in reverse mode and then the jacobian is computed in reverse mode.\n\u003c/p\u003e\u003cp\u003eHowever, since the \u003ccode\u003e\u003ccode\u003e\u003ca\u003egrad\u003c/a\u003e\u003c/code\u003e f :: f a -\u003e f a\u003c/code\u003e is square this is not as fast as using the forward-mode Jacobian of a reverse mode gradient provided by \u003ccode\u003e\u003ca\u003ehessian\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehessian (\\[x,y] -\u003e x*y) [1,2]\n\u003c/code\u003e\u003c/strong\u003e[[0,1],[1,0]]\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Reverse",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f (f a)",
        "fct-source": "src/Numeric-AD-Mode-Reverse.html#hessian",
        "fct-type": "function",
        "title": "hessian"
      },
      "index": {
        "description": "Compute the hessian via the jacobian of the gradient gradient is computed in reverse mode and then the jacobian is computed in reverse mode However since the grad is square this is not as fast as using the forward-mode Jacobian of reverse mode gradient provided by hessian hessian",
        "hierarchy": "Numeric AD Mode Reverse",
        "module": "Numeric.AD.Mode.Reverse",
        "name": "hessian",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea(a c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:hessianF",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the order 3 Hessian tensor on a non-scalar-to-non-scalar function via the reverse-mode Jacobian of the reverse-mode Jacobian of the function.\n\u003c/p\u003e\u003cp\u003eLess efficient than \u003ccode\u003e\u003ca\u003ehessianF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehessianF (\\[x,y] -\u003e [x*y,x+y,exp x*cos y]) [1,2]\n\u003c/code\u003e\u003c/strong\u003e[[[0.0,1.0],[1.0,0.0]],[[0.0,0.0],[0.0,0.0]],[[-1.1312043837568135,-2.4717266720048188],[-2.4717266720048188,1.1312043837568135]]]\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Reverse",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f (f a))",
        "fct-source": "src/Numeric-AD-Mode-Reverse.html#hessianF",
        "fct-type": "function",
        "title": "hessianF"
      },
      "index": {
        "description": "Compute the order Hessian tensor on non-scalar-to-non-scalar function via the reverse-mode Jacobian of the reverse-mode Jacobian of the function Less efficient than hessianF hessianF exp cos",
        "hierarchy": "Numeric AD Mode Reverse",
        "module": "Numeric.AD.Mode.Reverse",
        "name": "hessianF",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a(a c))",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f(f a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:jacobian",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e function calculates the jacobian of a non-scalar-to-non-scalar function with reverse AD lazily in \u003ccode\u003em\u003c/code\u003e passes for \u003ccode\u003em\u003c/code\u003e outputs.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ejacobian (\\[x,y] -\u003e [y,x,x*y]) [2,1]\n\u003c/code\u003e\u003c/strong\u003e[[0,1],[1,0],[1,2]]\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Reverse",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f a)",
        "fct-source": "src/Numeric-AD-Mode-Reverse.html#jacobian",
        "fct-type": "function",
        "title": "jacobian"
      },
      "index": {
        "description": "The jacobian function calculates the jacobian of non-scalar-to-non-scalar function with reverse AD lazily in passes for outputs jacobian",
        "hierarchy": "Numeric AD Mode Reverse",
        "module": "Numeric.AD.Mode.Reverse",
        "name": "jacobian",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:jacobian-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ejacobian'\u003c/a\u003e\u003c/code\u003e function calculates both the result and the Jacobian of a nonscalar-to-nonscalar function, using \u003ccode\u003em\u003c/code\u003e invocations of reverse AD,\n where \u003ccode\u003em\u003c/code\u003e is the output dimensionality. Applying \u003ccode\u003efmap snd\u003c/code\u003e to the result will recover the result of \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e\n | An alias for \u003ccode\u003egradF'\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ejacobian' (\\[x,y] -\u003e [y,x,x*y]) [2,1]\n\u003c/code\u003e\u003c/strong\u003e[(1,[0,1]),(2,[1,0]),(2,[1,2])]\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Reverse",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (a, f a)",
        "fct-source": "src/Numeric-AD-Mode-Reverse.html#jacobian%27",
        "fct-type": "function",
        "title": "jacobian'"
      },
      "index": {
        "description": "The jacobian function calculates both the result and the Jacobian of nonscalar-to-nonscalar function using invocations of reverse AD where is the output dimensionality Applying fmap snd to the result will recover the result of jacobian An alias for gradF jacobian",
        "hierarchy": "Numeric AD Mode Reverse",
        "module": "Numeric.AD.Mode.Reverse",
        "name": "jacobian'",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(c,a c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(a,f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:jacobianWith",
      "description": {
        "fct-descr": "\u003cp\u003e'jacobianWith g f' calculates the Jacobian of a non-scalar-to-non-scalar function \u003ccode\u003ef\u003c/code\u003e with reverse AD lazily in \u003ccode\u003em\u003c/code\u003e passes for \u003ccode\u003em\u003c/code\u003e outputs.\n\u003c/p\u003e\u003cp\u003eInstead of returning the Jacobian matrix, the elements of the matrix are combined with the input using the \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003ejacobianWith\u003c/a\u003e\u003c/code\u003e (_ dx -\u003e dx)\n \u003ccode\u003e\u003ca\u003ejacobianWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e == (f x -\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e x \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e f x)\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Reverse",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f b)",
        "fct-source": "src/Numeric-AD-Mode-Reverse.html#jacobianWith",
        "fct-type": "function",
        "title": "jacobianWith"
      },
      "index": {
        "description": "jacobianWith calculates the Jacobian of non-scalar-to-non-scalar function with reverse AD lazily in passes for outputs Instead of returning the Jacobian matrix the elements of the matrix are combined with the input using the jacobian jacobianWith dx dx jacobianWith const const",
        "hierarchy": "Numeric AD Mode Reverse",
        "module": "Numeric.AD.Mode.Reverse",
        "name": "jacobianWith",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a e)",
        "package": "ad",
        "partial": "With",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:jacobianWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ejacobianWith\u003c/a\u003e\u003c/code\u003e g f' calculates both the result and the Jacobian of a nonscalar-to-nonscalar function \u003ccode\u003ef\u003c/code\u003e, using \u003ccode\u003em\u003c/code\u003e invocations of reverse AD,\n where \u003ccode\u003em\u003c/code\u003e is the output dimensionality. Applying \u003ccode\u003efmap snd\u003c/code\u003e to the result will recover the result of \u003ccode\u003e\u003ca\u003ejacobianWith\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eInstead of returning the Jacobian matrix, the elements of the matrix are combined with the input using the \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ejacobian'\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003ejacobianWith'\u003c/a\u003e\u003c/code\u003e (_ dx -\u003e dx)\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Mode.Reverse",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (a, f b)",
        "fct-source": "src/Numeric-AD-Mode-Reverse.html#jacobianWith%27",
        "fct-type": "function",
        "title": "jacobianWith'"
      },
      "index": {
        "description": "jacobianWith calculates both the result and the Jacobian of nonscalar-to-nonscalar function using invocations of reverse AD where is the output dimensionality Applying fmap snd to the result will recover the result of jacobianWith Instead of returning the Jacobian matrix the elements of the matrix are combined with the input using the jacobian jacobianWith dx dx",
        "hierarchy": "Numeric AD Mode Reverse",
        "module": "Numeric.AD.Mode.Reverse",
        "name": "jacobianWith'",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(c,a e)",
        "package": "ad",
        "partial": "With'",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(a,f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHigher order derivatives via a \"dual number tower\".\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.AD.Mode.Sparse",
        "fct-package": "ad",
        "fct-signature": "module",
        "fct-source": "src/Numeric-AD-Mode-Sparse.html",
        "fct-type": "module",
        "title": "Sparse"
      },
      "index": {
        "description": "Higher order derivatives via dual number tower",
        "hierarchy": "Numeric AD Mode Sparse",
        "module": "Numeric.AD.Mode.Sparse",
        "name": "Sparse",
        "normalized": "",
        "package": "ad",
        "partial": "Sparse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#t:Grad",
      "description": {
        "fct-module": "Numeric.AD.Mode.Sparse",
        "fct-package": "ad",
        "fct-signature": "class",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#Grad",
        "fct-type": "class",
        "title": "Grad"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Sparse",
        "module": "Numeric.AD.Mode.Sparse",
        "name": "Grad",
        "normalized": "",
        "package": "ad",
        "partial": "Grad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#t:Grads",
      "description": {
        "fct-module": "Numeric.AD.Mode.Sparse",
        "fct-package": "ad",
        "fct-signature": "class",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#Grads",
        "fct-type": "class",
        "title": "Grads"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Sparse",
        "module": "Numeric.AD.Mode.Sparse",
        "name": "Grads",
        "normalized": "",
        "package": "ad",
        "partial": "Grads",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:grad",
      "description": {
        "fct-module": "Numeric.AD.Mode.Sparse",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f a",
        "fct-source": "src/Numeric-AD-Mode-Sparse.html#grad",
        "fct-type": "function",
        "title": "grad"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Sparse",
        "module": "Numeric.AD.Mode.Sparse",
        "name": "grad",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea c",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:grad-39-",
      "description": {
        "fct-module": "Numeric.AD.Mode.Sparse",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e (a, f a)",
        "fct-source": "src/Numeric-AD-Mode-Sparse.html#grad%27",
        "fct-type": "function",
        "title": "grad'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Sparse",
        "module": "Numeric.AD.Mode.Sparse",
        "name": "grad'",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e(c,a c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e(a,f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:gradWith",
      "description": {
        "fct-module": "Numeric.AD.Mode.Sparse",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f b",
        "fct-source": "src/Numeric-AD-Mode-Sparse.html#gradWith",
        "fct-type": "function",
        "title": "gradWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Sparse",
        "module": "Numeric.AD.Mode.Sparse",
        "name": "gradWith",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea d",
        "package": "ad",
        "partial": "With",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:gradWith-39-",
      "description": {
        "fct-module": "Numeric.AD.Mode.Sparse",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e (a, f b)",
        "fct-source": "src/Numeric-AD-Mode-Sparse.html#gradWith%27",
        "fct-type": "function",
        "title": "gradWith'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Sparse",
        "module": "Numeric.AD.Mode.Sparse",
        "name": "gradWith'",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e(c,a d)",
        "package": "ad",
        "partial": "With'",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e(a,f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:grads",
      "description": {
        "fct-module": "Numeric.AD.Mode.Sparse",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e Cofree f a",
        "fct-source": "src/Numeric-AD-Mode-Sparse.html#grads",
        "fct-type": "function",
        "title": "grads"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Sparse",
        "module": "Numeric.AD.Mode.Sparse",
        "name": "grads",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003eCofree a c",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003eCofree f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:hessian",
      "description": {
        "fct-module": "Numeric.AD.Mode.Sparse",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f (f a)",
        "fct-source": "src/Numeric-AD-Mode-Sparse.html#hessian",
        "fct-type": "function",
        "title": "hessian"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Sparse",
        "module": "Numeric.AD.Mode.Sparse",
        "name": "hessian",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea(a c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:hessian-39-",
      "description": {
        "fct-module": "Numeric.AD.Mode.Sparse",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e (a, f (a, f a))",
        "fct-source": "src/Numeric-AD-Mode-Sparse.html#hessian%27",
        "fct-type": "function",
        "title": "hessian'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Sparse",
        "module": "Numeric.AD.Mode.Sparse",
        "name": "hessian'",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e(c,a(c,a c))",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e(a,f(a,f a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:hessianF",
      "description": {
        "fct-module": "Numeric.AD.Mode.Sparse",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f (f a))",
        "fct-source": "src/Numeric-AD-Mode-Sparse.html#hessianF",
        "fct-type": "function",
        "title": "hessianF"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Sparse",
        "module": "Numeric.AD.Mode.Sparse",
        "name": "hessianF",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a(a c))",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f(f a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:hessianF-39-",
      "description": {
        "fct-module": "Numeric.AD.Mode.Sparse",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (a, f (a, f a))",
        "fct-source": "src/Numeric-AD-Mode-Sparse.html#hessianF%27",
        "fct-type": "function",
        "title": "hessianF'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Sparse",
        "module": "Numeric.AD.Mode.Sparse",
        "name": "hessianF'",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(c,a(c,a c))",
        "package": "ad",
        "partial": "F'",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(a,f(a,f a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:jacobian",
      "description": {
        "fct-module": "Numeric.AD.Mode.Sparse",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f a)",
        "fct-source": "src/Numeric-AD-Mode-Sparse.html#jacobian",
        "fct-type": "function",
        "title": "jacobian"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Sparse",
        "module": "Numeric.AD.Mode.Sparse",
        "name": "jacobian",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:jacobian-39-",
      "description": {
        "fct-module": "Numeric.AD.Mode.Sparse",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (a, f a)",
        "fct-source": "src/Numeric-AD-Mode-Sparse.html#jacobian%27",
        "fct-type": "function",
        "title": "jacobian'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Sparse",
        "module": "Numeric.AD.Mode.Sparse",
        "name": "jacobian'",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(c,a c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(a,f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:jacobianWith",
      "description": {
        "fct-module": "Numeric.AD.Mode.Sparse",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f b)",
        "fct-source": "src/Numeric-AD-Mode-Sparse.html#jacobianWith",
        "fct-type": "function",
        "title": "jacobianWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Sparse",
        "module": "Numeric.AD.Mode.Sparse",
        "name": "jacobianWith",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a e)",
        "package": "ad",
        "partial": "With",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:jacobianWith-39-",
      "description": {
        "fct-module": "Numeric.AD.Mode.Sparse",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (a, f b)",
        "fct-source": "src/Numeric-AD-Mode-Sparse.html#jacobianWith%27",
        "fct-type": "function",
        "title": "jacobianWith'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Sparse",
        "module": "Numeric.AD.Mode.Sparse",
        "name": "jacobianWith'",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(c,a e)",
        "package": "ad",
        "partial": "With'",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(a,f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:jacobians",
      "description": {
        "fct-module": "Numeric.AD.Mode.Sparse",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (Cofree f a)",
        "fct-source": "src/Numeric-AD-Mode-Sparse.html#jacobians",
        "fct-type": "function",
        "title": "jacobians"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Sparse",
        "module": "Numeric.AD.Mode.Sparse",
        "name": "jacobians",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(Cofree a c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(Cofree f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:vgrad",
      "description": {
        "fct-module": "Numeric.AD.Mode.Sparse",
        "fct-package": "ad",
        "fct-signature": "i -\u003e o",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#vgrad",
        "fct-type": "function",
        "title": "vgrad"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Sparse",
        "module": "Numeric.AD.Mode.Sparse",
        "name": "vgrad",
        "normalized": "a-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "i-\u003eo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:vgrads",
      "description": {
        "fct-module": "Numeric.AD.Mode.Sparse",
        "fct-package": "ad",
        "fct-signature": "i -\u003e o",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#vgrads",
        "fct-type": "function",
        "title": "vgrads"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Sparse",
        "module": "Numeric.AD.Mode.Sparse",
        "name": "vgrads",
        "normalized": "a-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "i-\u003eo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHigher order derivatives via a \"dual number tower\".\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.AD.Mode.Tower",
        "fct-package": "ad",
        "fct-signature": "module",
        "fct-source": "src/Numeric-AD-Mode-Tower.html",
        "fct-type": "module",
        "title": "Tower"
      },
      "index": {
        "description": "Higher order derivatives via dual number tower",
        "hierarchy": "Numeric AD Mode Tower",
        "module": "Numeric.AD.Mode.Tower",
        "name": "Tower",
        "normalized": "",
        "package": "ad",
        "partial": "Tower",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:diff",
      "description": {
        "fct-module": "Numeric.AD.Mode.Tower",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e a",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#diff",
        "fct-type": "function",
        "title": "diff"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Tower",
        "module": "Numeric.AD.Mode.Tower",
        "name": "diff",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:diff-39-",
      "description": {
        "fct-module": "Numeric.AD.Mode.Tower",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e (a, a)",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#diff%27",
        "fct-type": "function",
        "title": "diff'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Tower",
        "module": "Numeric.AD.Mode.Tower",
        "name": "diff'",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e(b,b)",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:diffs",
      "description": {
        "fct-module": "Numeric.AD.Mode.Tower",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e [a]",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#diffs",
        "fct-type": "function",
        "title": "diffs"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Tower",
        "module": "Numeric.AD.Mode.Tower",
        "name": "diffs",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e[b]",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:diffs0",
      "description": {
        "fct-module": "Numeric.AD.Mode.Tower",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e [a]",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#diffs0",
        "fct-type": "function",
        "title": "diffs0"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Tower",
        "module": "Numeric.AD.Mode.Tower",
        "name": "diffs0",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e[b]",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:diffs0F",
      "description": {
        "fct-module": "Numeric.AD.Mode.Tower",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e f (AD s a)) -\u003e a -\u003e f [a]",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#diffs0F",
        "fct-type": "function",
        "title": "diffs0F"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Tower",
        "module": "Numeric.AD.Mode.Tower",
        "name": "diffs0F",
        "normalized": "AD a b-\u003ec(AD a b))-\u003eb-\u003ec[b]",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003ef(AD s a))-\u003ea-\u003ef[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:diffsF",
      "description": {
        "fct-module": "Numeric.AD.Mode.Tower",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e f (AD s a)) -\u003e a -\u003e f [a]",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#diffsF",
        "fct-type": "function",
        "title": "diffsF"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Tower",
        "module": "Numeric.AD.Mode.Tower",
        "name": "diffsF",
        "normalized": "AD a b-\u003ec(AD a b))-\u003eb-\u003ec[b]",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003ef(AD s a))-\u003ea-\u003ef[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:du",
      "description": {
        "fct-module": "Numeric.AD.Mode.Tower",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f (a, a) -\u003e a",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#du",
        "fct-type": "function",
        "title": "du"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Tower",
        "module": "Numeric.AD.Mode.Tower",
        "name": "du",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea(c,c)-\u003ec",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef(a,a)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:du-39-",
      "description": {
        "fct-module": "Numeric.AD.Mode.Tower",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f (a, a) -\u003e (a, a)",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#du%27",
        "fct-type": "function",
        "title": "du'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Tower",
        "module": "Numeric.AD.Mode.Tower",
        "name": "du'",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea(c,c)-\u003e(c,c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef(a,a)-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:duF",
      "description": {
        "fct-module": "Numeric.AD.Mode.Tower",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f (a, a) -\u003e g a",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#duF",
        "fct-type": "function",
        "title": "duF"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Tower",
        "module": "Numeric.AD.Mode.Tower",
        "name": "duF",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea(c,c)-\u003ed c",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef(a,a)-\u003eg a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:duF-39-",
      "description": {
        "fct-module": "Numeric.AD.Mode.Tower",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f (a, a) -\u003e g (a, a)",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#duF%27",
        "fct-type": "function",
        "title": "duF'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Tower",
        "module": "Numeric.AD.Mode.Tower",
        "name": "duF'",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea(c,c)-\u003ed(c,c)",
        "package": "ad",
        "partial": "F'",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef(a,a)-\u003eg(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:dus",
      "description": {
        "fct-module": "Numeric.AD.Mode.Tower",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f [a] -\u003e [a]",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#dus",
        "fct-type": "function",
        "title": "dus"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Tower",
        "module": "Numeric.AD.Mode.Tower",
        "name": "dus",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea[c]-\u003e[c]",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:dus0",
      "description": {
        "fct-module": "Numeric.AD.Mode.Tower",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f [a] -\u003e [a]",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#dus0",
        "fct-type": "function",
        "title": "dus0"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Tower",
        "module": "Numeric.AD.Mode.Tower",
        "name": "dus0",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea[c]-\u003e[c]",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:dus0F",
      "description": {
        "fct-module": "Numeric.AD.Mode.Tower",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f [a] -\u003e g [a]",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#dus0F",
        "fct-type": "function",
        "title": "dus0F"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Tower",
        "module": "Numeric.AD.Mode.Tower",
        "name": "dus0F",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea[c]-\u003ed[c]",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef[a]-\u003eg[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:dusF",
      "description": {
        "fct-module": "Numeric.AD.Mode.Tower",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f [a] -\u003e g [a]",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#dusF",
        "fct-type": "function",
        "title": "dusF"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Tower",
        "module": "Numeric.AD.Mode.Tower",
        "name": "dusF",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea[c]-\u003ed[c]",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef[a]-\u003eg[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:maclaurin",
      "description": {
        "fct-module": "Numeric.AD.Mode.Tower",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e [a]",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#maclaurin",
        "fct-type": "function",
        "title": "maclaurin"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Tower",
        "module": "Numeric.AD.Mode.Tower",
        "name": "maclaurin",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e[b]",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:maclaurin0",
      "description": {
        "fct-module": "Numeric.AD.Mode.Tower",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e [a]",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#maclaurin0",
        "fct-type": "function",
        "title": "maclaurin0"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Tower",
        "module": "Numeric.AD.Mode.Tower",
        "name": "maclaurin0",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e[b]",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:taylor",
      "description": {
        "fct-module": "Numeric.AD.Mode.Tower",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e a -\u003e [a]",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#taylor",
        "fct-type": "function",
        "title": "taylor"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Tower",
        "module": "Numeric.AD.Mode.Tower",
        "name": "taylor",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003eb-\u003e[b]",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:taylor0",
      "description": {
        "fct-module": "Numeric.AD.Mode.Tower",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e a -\u003e [a]",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#taylor0",
        "fct-type": "function",
        "title": "taylor0"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Mode Tower",
        "module": "Numeric.AD.Mode.Tower",
        "name": "taylor0",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003eb-\u003e[b]",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Newton.html#",
      "description": {
        "fct-module": "Numeric.AD.Newton",
        "fct-package": "ad",
        "fct-signature": "module",
        "fct-source": "src/Numeric-AD-Newton.html",
        "fct-type": "module",
        "title": "Newton"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Newton",
        "module": "Numeric.AD.Newton",
        "name": "Newton",
        "normalized": "",
        "package": "ad",
        "partial": "Newton",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Newton.html#v:conjugateGradientAscent",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a conjugate gradient ascent using reverse mode automatic differentiation to compute the gradient.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Newton",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e [f a]",
        "fct-source": "src/Numeric-AD-Newton.html#conjugateGradientAscent",
        "fct-type": "function",
        "title": "conjugateGradientAscent"
      },
      "index": {
        "description": "Perform conjugate gradient ascent using reverse mode automatic differentiation to compute the gradient",
        "hierarchy": "Numeric AD Newton",
        "module": "Numeric.AD.Newton",
        "name": "conjugateGradientAscent",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e[a c]",
        "package": "ad",
        "partial": "Gradient Ascent",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e[f a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Newton.html#v:conjugateGradientDescent",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a conjugate gradient descent using reverse mode automatic differentiation to compute the gradient.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Newton",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e [f a]",
        "fct-source": "src/Numeric-AD-Newton.html#conjugateGradientDescent",
        "fct-type": "function",
        "title": "conjugateGradientDescent"
      },
      "index": {
        "description": "Perform conjugate gradient descent using reverse mode automatic differentiation to compute the gradient",
        "hierarchy": "Numeric AD Newton",
        "module": "Numeric.AD.Newton",
        "name": "conjugateGradientDescent",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e[a c]",
        "package": "ad",
        "partial": "Gradient Descent",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e[f a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Newton.html#v:extremum",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eextremum\u003c/a\u003e\u003c/code\u003e function finds an extremum of a scalar\n function using Newton's method; produces a stream of increasingly\n accurate results.  (Modulo the usual caveats.) If the stream\n becomes constant (\u003ca\u003eit converges\u003c/a\u003e), no further elements are returned.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elast $ take 10 $ extremum cos 1\n\u003c/code\u003e\u003c/strong\u003e0.0\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Newton",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e [a]",
        "fct-source": "src/Numeric-AD-Newton.html#extremum",
        "fct-type": "function",
        "title": "extremum"
      },
      "index": {
        "description": "The extremum function finds an extremum of scalar function using Newton method produces stream of increasingly accurate results Modulo the usual caveats If the stream becomes constant it converges no further elements are returned last take extremum cos",
        "hierarchy": "Numeric AD Newton",
        "module": "Numeric.AD.Newton",
        "name": "extremum",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e[b]",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Newton.html#v:findZero",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindZero\u003c/a\u003e\u003c/code\u003e function finds a zero of a scalar function using\n Newton's method; its output is a stream of increasingly accurate\n results.  (Modulo the usual caveats.) If the stream becomes constant\n (\u003ca\u003eit converges\u003c/a\u003e), no further elements are returned.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 10 $ findZero (\\x-\u003ex^2-4) 1\n\u003c/code\u003e\u003c/strong\u003e[1.0,2.5,2.05,2.000609756097561,2.0000000929222947,2.000000000000002,2.0]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Data.Complex\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elast $ take 10 $ findZero ((+1).(^2)) (1 :+ 1)\n\u003c/code\u003e\u003c/strong\u003e0.0 :+ 1.0\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Newton",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e [a]",
        "fct-source": "src/Numeric-AD-Newton.html#findZero",
        "fct-type": "function",
        "title": "findZero"
      },
      "index": {
        "description": "The findZero function finds zero of scalar function using Newton method its output is stream of increasingly accurate results Modulo the usual caveats If the stream becomes constant it converges no further elements are returned Examples take findZero import Data.Complex last take findZero",
        "hierarchy": "Numeric AD Newton",
        "module": "Numeric.AD.Newton",
        "name": "findZero",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e[b]",
        "package": "ad",
        "partial": "Zero",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Newton.html#v:fixedPoint",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efixedPoint\u003c/a\u003e\u003c/code\u003e function find a fixedpoint of a scalar\n function using Newton's method; its output is a stream of\n increasingly accurate results.  (Modulo the usual caveats.)\n\u003c/p\u003e\u003cp\u003eIf the stream becomes constant (\u003ca\u003eit converges\u003c/a\u003e), no further\n elements are returned.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elast $ take 10 $ fixedPoint cos 1\n\u003c/code\u003e\u003c/strong\u003e0.7390851332151607\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Newton",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e [a]",
        "fct-source": "src/Numeric-AD-Newton.html#fixedPoint",
        "fct-type": "function",
        "title": "fixedPoint"
      },
      "index": {
        "description": "The fixedPoint function find fixedpoint of scalar function using Newton method its output is stream of increasingly accurate results Modulo the usual caveats If the stream becomes constant it converges no further elements are returned last take fixedPoint cos",
        "hierarchy": "Numeric AD Newton",
        "module": "Numeric.AD.Newton",
        "name": "fixedPoint",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e[b]",
        "package": "ad",
        "partial": "Point",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Newton.html#v:gradientAscent",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a gradient descent using reverse mode automatic differentiation to compute the gradient.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Newton",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e [f a]",
        "fct-source": "src/Numeric-AD-Newton.html#gradientAscent",
        "fct-type": "function",
        "title": "gradientAscent"
      },
      "index": {
        "description": "Perform gradient descent using reverse mode automatic differentiation to compute the gradient",
        "hierarchy": "Numeric AD Newton",
        "module": "Numeric.AD.Newton",
        "name": "gradientAscent",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e[a c]",
        "package": "ad",
        "partial": "Ascent",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e[f a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Newton.html#v:gradientDescent",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egradientDescent\u003c/a\u003e\u003c/code\u003e function performs a multivariate\n optimization, based on the naive-gradient-descent in the file\n \u003ccode\u003estalingrad/examples/flow-tests/pre-saddle-1a.vlad\u003c/code\u003e from the\n VLAD compiler Stalingrad sources.  Its output is a stream of\n increasingly accurate results.  (Modulo the usual caveats.)\n\u003c/p\u003e\u003cp\u003eIt uses reverse mode automatic differentiation to compute the gradient.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Newton",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e [f a]",
        "fct-source": "src/Numeric-AD-Newton.html#gradientDescent",
        "fct-type": "function",
        "title": "gradientDescent"
      },
      "index": {
        "description": "The gradientDescent function performs multivariate optimization based on the naive-gradient-descent in the file stalingrad examples flow-tests pre-saddle-1a.vlad from the VLAD compiler Stalingrad sources Its output is stream of increasingly accurate results Modulo the usual caveats It uses reverse mode automatic differentiation to compute the gradient",
        "hierarchy": "Numeric AD Newton",
        "module": "Numeric.AD.Newton",
        "name": "gradientDescent",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e[a c]",
        "package": "ad",
        "partial": "Descent",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e[f a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Newton.html#v:inverse",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einverse\u003c/a\u003e\u003c/code\u003e function inverts a scalar function using\n Newton's method; its output is a stream of increasingly accurate\n results.  (Modulo the usual caveats.) If the stream becomes\n constant (\u003ca\u003eit converges\u003c/a\u003e), no further elements are returned.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elast $ take 10 $ inverse sqrt 1 (sqrt 10)\n\u003c/code\u003e\u003c/strong\u003e10.0\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Newton",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e a -\u003e [a]",
        "fct-source": "src/Numeric-AD-Newton.html#inverse",
        "fct-type": "function",
        "title": "inverse"
      },
      "index": {
        "description": "The inverse function inverts scalar function using Newton method its output is stream of increasingly accurate results Modulo the usual caveats If the stream becomes constant it converges no further elements are returned Example last take inverse sqrt sqrt",
        "hierarchy": "Numeric AD Newton",
        "module": "Numeric.AD.Newton",
        "name": "inverse",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003eb-\u003e[b]",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#",
      "description": {
        "fct-module": "Numeric.AD.Types",
        "fct-package": "ad",
        "fct-signature": "module",
        "fct-source": "src/Numeric-AD-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Types",
        "module": "Numeric.AD.Types",
        "name": "Types",
        "normalized": "",
        "package": "ad",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#t:AD",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAD\u003c/a\u003e\u003c/code\u003e serves as a common wrapper for different \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e instances, exposing a traditional\n numerical tower. Universal quantification is used to limit the actions in user code to\n machinery that will return the same answers under all AD modes, allowing us to use modes\n interchangeably as both the type level \"brand\" and dictionary, providing a common API.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Types",
        "fct-package": "ad",
        "fct-signature": "newtype",
        "fct-source": "src/Numeric-AD-Internal-Types.html#AD",
        "fct-type": "newtype",
        "title": "AD"
      },
      "index": {
        "description": "AD serves as common wrapper for different Mode instances exposing traditional numerical tower Universal quantification is used to limit the actions in user code to machinery that will return the same answers under all AD modes allowing us to use modes interchangeably as both the type level brand and dictionary providing common API",
        "hierarchy": "Numeric AD Types",
        "module": "Numeric.AD.Types",
        "name": "AD",
        "normalized": "",
        "package": "ad",
        "partial": "AD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#t:Jet",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eJet\u003c/a\u003e\u003c/code\u003e is a tower of all (higher order) partial derivatives of a function\n\u003c/p\u003e\u003cp\u003eAt each step, a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJet\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e is wrapped in another layer worth of \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e a :- f a :- f (f a) :- f (f (f a)) :- ...\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Types",
        "fct-package": "ad",
        "fct-signature": "data",
        "fct-source": "src/Numeric-AD-Internal-Jet.html#Jet",
        "fct-type": "data",
        "title": "Jet"
      },
      "index": {
        "description": "Jet is tower of all higher order partial derivatives of function At each step Jet is wrapped in another layer worth of",
        "hierarchy": "Numeric AD Types",
        "module": "Numeric.AD.Types",
        "name": "Jet",
        "normalized": "",
        "package": "ad",
        "partial": "Jet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#t:Mode",
      "description": {
        "fct-module": "Numeric.AD.Types",
        "fct-package": "ad",
        "fct-signature": "class",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#Mode",
        "fct-type": "class",
        "title": "Mode"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Types",
        "module": "Numeric.AD.Types",
        "name": "Mode",
        "normalized": "",
        "package": "ad",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:-42--94-",
      "description": {
        "fct-descr": "\u003cp\u003eScalar-vector multiplication\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Types",
        "fct-package": "ad",
        "fct-signature": "a -\u003e t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#%2A%5E",
        "fct-type": "method",
        "title": "(*^)"
      },
      "index": {
        "description": "Scalar-vector multiplication",
        "hierarchy": "Numeric AD Types",
        "module": "Numeric.AD.Types",
        "name": "(*^) *^",
        "normalized": "a-\u003eb a-\u003eb a",
        "package": "ad",
        "partial": "",
        "signature": "a-\u003et a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:-60--42--42--62-",
      "description": {
        "fct-descr": "\u003cp\u003eExponentiation, this should be overloaded if you can figure out anything about what is constant!\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Types",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#%3C%2A%2A%3E",
        "fct-type": "method",
        "title": "(\u003c**\u003e)"
      },
      "index": {
        "description": "Exponentiation this should be overloaded if you can figure out anything about what is constant",
        "hierarchy": "Numeric AD Types",
        "module": "Numeric.AD.Types",
        "name": "(\u003c**\u003e) \u003c**\u003e",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003et a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:-60--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003eVector sum\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Types",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e t a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#%3C%2B%3E",
        "fct-type": "method",
        "title": "(\u003c+\u003e)"
      },
      "index": {
        "description": "Vector sum",
        "hierarchy": "Numeric AD Types",
        "module": "Numeric.AD.Types",
        "name": "(\u003c+\u003e) \u003c+\u003e",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003et a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:-94--42-",
      "description": {
        "fct-descr": "\u003cp\u003eVector-scalar multiplication\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Types",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#%5E%2A",
        "fct-type": "method",
        "title": "(^*)"
      },
      "index": {
        "description": "Vector-scalar multiplication",
        "hierarchy": "Numeric AD Types",
        "module": "Numeric.AD.Types",
        "name": "(^*) ^*",
        "normalized": "a b-\u003eb-\u003ea b",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003ea-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:-94--47-",
      "description": {
        "fct-descr": "\u003cp\u003eScalar division\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Types",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#%5E%2F",
        "fct-type": "method",
        "title": "(^/)"
      },
      "index": {
        "description": "Scalar division",
        "hierarchy": "Numeric AD Types",
        "module": "Numeric.AD.Types",
        "name": "(^/) ^/",
        "normalized": "a b-\u003eb-\u003ea b",
        "package": "ad",
        "partial": "",
        "signature": "t a-\u003ea-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v::-45-",
      "description": {
        "fct-module": "Numeric.AD.Types",
        "fct-package": "ad",
        "fct-signature": "a :- (Jet f (f a))",
        "fct-source": "src/Numeric-AD-Internal-Jet.html#Jet",
        "fct-type": "function",
        "title": ":-"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Types",
        "module": "Numeric.AD.Types",
        "name": ":-",
        "normalized": "",
        "package": "ad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:AD",
      "description": {
        "fct-module": "Numeric.AD.Types",
        "fct-package": "ad",
        "fct-signature": "AD",
        "fct-source": "src/Numeric-AD-Internal-Types.html#AD",
        "fct-type": "function",
        "title": "AD"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Types",
        "module": "Numeric.AD.Types",
        "name": "AD",
        "normalized": "",
        "package": "ad",
        "partial": "AD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:auto",
      "description": {
        "fct-descr": "\u003cp\u003eEmbed a constant\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Types",
        "fct-package": "ad",
        "fct-signature": "a -\u003e t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#auto",
        "fct-type": "method",
        "title": "auto"
      },
      "index": {
        "description": "Embed constant",
        "hierarchy": "Numeric AD Types",
        "module": "Numeric.AD.Types",
        "name": "auto",
        "normalized": "a-\u003eb a",
        "package": "ad",
        "partial": "",
        "signature": "a-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:headJet",
      "description": {
        "fct-descr": "\u003cp\u003eTake the head of a \u003ccode\u003e\u003ca\u003eJet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Types",
        "fct-package": "ad",
        "fct-signature": "Jet f a -\u003e a",
        "fct-source": "src/Numeric-AD-Internal-Jet.html#headJet",
        "fct-type": "function",
        "title": "headJet"
      },
      "index": {
        "description": "Take the head of Jet",
        "hierarchy": "Numeric AD Types",
        "module": "Numeric.AD.Types",
        "name": "headJet",
        "normalized": "Jet a b-\u003eb",
        "package": "ad",
        "partial": "Jet",
        "signature": "Jet f a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:isKnownConstant",
      "description": {
        "fct-descr": "\u003cp\u003eallowed to return False for items with a zero derivative, but we'll give more NaNs than strictly necessary\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Types",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e Bool",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#isKnownConstant",
        "fct-type": "method",
        "title": "isKnownConstant"
      },
      "index": {
        "description": "allowed to return False for items with zero derivative but we ll give more NaNs than strictly necessary",
        "hierarchy": "Numeric AD Types",
        "module": "Numeric.AD.Types",
        "name": "isKnownConstant",
        "normalized": "a b-\u003eBool",
        "package": "ad",
        "partial": "Known Constant",
        "signature": "t a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:isKnownZero",
      "description": {
        "fct-descr": "\u003cp\u003eallowed to return False for zero, but we give more NaN's than strictly necessary then\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Types",
        "fct-package": "ad",
        "fct-signature": "t a -\u003e Bool",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#isKnownZero",
        "fct-type": "method",
        "title": "isKnownZero"
      },
      "index": {
        "description": "allowed to return False for zero but we give more NaN than strictly necessary then",
        "hierarchy": "Numeric AD Types",
        "module": "Numeric.AD.Types",
        "name": "isKnownZero",
        "normalized": "a b-\u003eBool",
        "package": "ad",
        "partial": "Known Zero",
        "signature": "t a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:jet",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eJet\u003c/a\u003e\u003c/code\u003e by unzipping the layers of a \u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eComonad\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Types",
        "fct-package": "ad",
        "fct-signature": "Cofree f a -\u003e Jet f a",
        "fct-source": "src/Numeric-AD-Internal-Jet.html#jet",
        "fct-type": "function",
        "title": "jet"
      },
      "index": {
        "description": "Construct Jet by unzipping the layers of Cofree Comonad",
        "hierarchy": "Numeric AD Types",
        "module": "Numeric.AD.Types",
        "name": "jet",
        "normalized": "Cofree a b-\u003eJet a b",
        "package": "ad",
        "partial": "",
        "signature": "Cofree f a-\u003eJet f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:lowerFF",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a nonscalar-to-nonscalar function in the trivial identity AD mode.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Types",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g a",
        "fct-source": "src/Numeric-AD-Types.html#lowerFF",
        "fct-type": "function",
        "title": "lowerFF"
      },
      "index": {
        "description": "Evaluate nonscalar-to-nonscalar function in the trivial identity AD mode",
        "hierarchy": "Numeric AD Types",
        "module": "Numeric.AD.Types",
        "name": "lowerFF",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed c",
        "package": "ad",
        "partial": "FF",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:lowerFU",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a nonscalar-to-scalar function in the trivial identity AD mode.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Types",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e a",
        "fct-source": "src/Numeric-AD-Types.html#lowerFU",
        "fct-type": "function",
        "title": "lowerFU"
      },
      "index": {
        "description": "Evaluate nonscalar-to-scalar function in the trivial identity AD mode",
        "hierarchy": "Numeric AD Types",
        "module": "Numeric.AD.Types",
        "name": "lowerFU",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ec",
        "package": "ad",
        "partial": "FU",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:lowerUF",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a scalar-to-nonscalar function in the trivial identity AD mode.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Types",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e f (AD s a)) -\u003e a -\u003e f a",
        "fct-source": "src/Numeric-AD-Types.html#lowerUF",
        "fct-type": "function",
        "title": "lowerUF"
      },
      "index": {
        "description": "Evaluate scalar-to-nonscalar function in the trivial identity AD mode",
        "hierarchy": "Numeric AD Types",
        "module": "Numeric.AD.Types",
        "name": "lowerUF",
        "normalized": "AD a b-\u003ec(AD a b))-\u003eb-\u003ec b",
        "package": "ad",
        "partial": "UF",
        "signature": "AD s a-\u003ef(AD s a))-\u003ea-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:lowerUU",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate a scalar-to-scalar function in the trivial identity AD mode.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Types",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e a",
        "fct-source": "src/Numeric-AD-Types.html#lowerUU",
        "fct-type": "function",
        "title": "lowerUU"
      },
      "index": {
        "description": "Evaluate scalar-to-scalar function in the trivial identity AD mode",
        "hierarchy": "Numeric AD Types",
        "module": "Numeric.AD.Types",
        "name": "lowerUU",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003eb",
        "package": "ad",
        "partial": "UU",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:runAD",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Numeric.AD.Types",
        "fct-package": "ad",
        "fct-signature": "f a",
        "fct-source": "src/Numeric-AD-Internal-Types.html#AD",
        "fct-type": "function",
        "title": "runAD"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Types",
        "module": "Numeric.AD.Types",
        "name": "runAD",
        "normalized": "",
        "package": "ad",
        "partial": "AD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:tailJet",
      "description": {
        "fct-descr": "\u003cp\u003eTake the tail of a \u003ccode\u003e\u003ca\u003eJet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD.Types",
        "fct-package": "ad",
        "fct-signature": "Jet f a -\u003e Jet f (f a)",
        "fct-source": "src/Numeric-AD-Internal-Jet.html#tailJet",
        "fct-type": "function",
        "title": "tailJet"
      },
      "index": {
        "description": "Take the tail of Jet",
        "hierarchy": "Numeric AD Types",
        "module": "Numeric.AD.Types",
        "name": "tailJet",
        "normalized": "Jet a b-\u003eJet a(a b)",
        "package": "ad",
        "partial": "Jet",
        "signature": "Jet f a-\u003eJet f(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:zero",
      "description": {
        "fct-descr": "\u003cpre\u003e 'zero' = 'lift' 0\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD.Types",
        "fct-package": "ad",
        "fct-signature": "t a",
        "fct-source": "src/Numeric-AD-Internal-Classes.html#zero",
        "fct-type": "method",
        "title": "zero"
      },
      "index": {
        "description": "zero lift",
        "hierarchy": "Numeric AD Types",
        "module": "Numeric.AD.Types",
        "name": "zero",
        "normalized": "",
        "package": "ad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic-Kahn.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVariadic combinators for reverse-mode automatic differentiation.\n\u003c/p\u003e\u003cp\u003eUnfortunately, variadicity comes at the expense of being able to use\n quantification to avoid sensitivity confusion, so be careful when\n counting the number of \u003ccode\u003elift\u003c/code\u003e you use when taking the gradient of a\n function that takes gradients!\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.AD.Variadic.Kahn",
        "fct-package": "ad",
        "fct-signature": "module",
        "fct-source": "src/Numeric-AD-Variadic-Kahn.html",
        "fct-type": "module",
        "title": "Kahn"
      },
      "index": {
        "description": "Variadic combinators for reverse-mode automatic differentiation Unfortunately variadicity comes at the expense of being able to use quantification to avoid sensitivity confusion so be careful when counting the number of lift you use when taking the gradient of function that takes gradients",
        "hierarchy": "Numeric AD Variadic Kahn",
        "module": "Numeric.AD.Variadic.Kahn",
        "name": "Kahn",
        "normalized": "",
        "package": "ad",
        "partial": "Kahn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic-Kahn.html#t:Grad",
      "description": {
        "fct-module": "Numeric.AD.Variadic.Kahn",
        "fct-package": "ad",
        "fct-signature": "class",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#Grad",
        "fct-type": "class",
        "title": "Grad"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Variadic Kahn",
        "module": "Numeric.AD.Variadic.Kahn",
        "name": "Grad",
        "normalized": "",
        "package": "ad",
        "partial": "Grad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic-Kahn.html#v:vgrad",
      "description": {
        "fct-module": "Numeric.AD.Variadic.Kahn",
        "fct-package": "ad",
        "fct-signature": "i -\u003e o",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#vgrad",
        "fct-type": "function",
        "title": "vgrad"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Variadic Kahn",
        "module": "Numeric.AD.Variadic.Kahn",
        "name": "vgrad",
        "normalized": "a-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "i-\u003eo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic-Kahn.html#v:vgrad-39-",
      "description": {
        "fct-module": "Numeric.AD.Variadic.Kahn",
        "fct-package": "ad",
        "fct-signature": "i -\u003e o'",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#vgrad%27",
        "fct-type": "function",
        "title": "vgrad'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Variadic Kahn",
        "module": "Numeric.AD.Variadic.Kahn",
        "name": "vgrad'",
        "normalized": "a-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "i-\u003eo'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic-Sparse.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVariadic combinators for sparse forward mode automatic differentiation.\n\u003c/p\u003e\u003cp\u003eUnfortunately, variadicity comes at the expense of being able to use\n quantification to avoid sensitivity confusion, so be careful when\n counting the number of \u003ccode\u003elift\u003c/code\u003e you use when taking the gradient of a\n function that takes gradients!\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.AD.Variadic.Sparse",
        "fct-package": "ad",
        "fct-signature": "module",
        "fct-source": "src/Numeric-AD-Variadic-Sparse.html",
        "fct-type": "module",
        "title": "Sparse"
      },
      "index": {
        "description": "Variadic combinators for sparse forward mode automatic differentiation Unfortunately variadicity comes at the expense of being able to use quantification to avoid sensitivity confusion so be careful when counting the number of lift you use when taking the gradient of function that takes gradients",
        "hierarchy": "Numeric AD Variadic Sparse",
        "module": "Numeric.AD.Variadic.Sparse",
        "name": "Sparse",
        "normalized": "",
        "package": "ad",
        "partial": "Sparse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic-Sparse.html#t:Grad",
      "description": {
        "fct-module": "Numeric.AD.Variadic.Sparse",
        "fct-package": "ad",
        "fct-signature": "class",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#Grad",
        "fct-type": "class",
        "title": "Grad"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Variadic Sparse",
        "module": "Numeric.AD.Variadic.Sparse",
        "name": "Grad",
        "normalized": "",
        "package": "ad",
        "partial": "Grad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic-Sparse.html#t:Grads",
      "description": {
        "fct-module": "Numeric.AD.Variadic.Sparse",
        "fct-package": "ad",
        "fct-signature": "class",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#Grads",
        "fct-type": "class",
        "title": "Grads"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Variadic Sparse",
        "module": "Numeric.AD.Variadic.Sparse",
        "name": "Grads",
        "normalized": "",
        "package": "ad",
        "partial": "Grads",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic-Sparse.html#v:vgrad",
      "description": {
        "fct-module": "Numeric.AD.Variadic.Sparse",
        "fct-package": "ad",
        "fct-signature": "i -\u003e o",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#vgrad",
        "fct-type": "function",
        "title": "vgrad"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Variadic Sparse",
        "module": "Numeric.AD.Variadic.Sparse",
        "name": "vgrad",
        "normalized": "a-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "i-\u003eo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic-Sparse.html#v:vgrad-39-",
      "description": {
        "fct-module": "Numeric.AD.Variadic.Sparse",
        "fct-package": "ad",
        "fct-signature": "i -\u003e o'",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#vgrad%27",
        "fct-type": "function",
        "title": "vgrad'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Variadic Sparse",
        "module": "Numeric.AD.Variadic.Sparse",
        "name": "vgrad'",
        "normalized": "a-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "i-\u003eo'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic-Sparse.html#v:vgrads",
      "description": {
        "fct-module": "Numeric.AD.Variadic.Sparse",
        "fct-package": "ad",
        "fct-signature": "i -\u003e o",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#vgrads",
        "fct-type": "function",
        "title": "vgrads"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Variadic Sparse",
        "module": "Numeric.AD.Variadic.Sparse",
        "name": "vgrads",
        "normalized": "a-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "i-\u003eo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVariadic combinators for variadic mixed-mode automatic differentiation.\n\u003c/p\u003e\u003cp\u003eUnfortunately, variadicity comes at the expense of being able to use\n quantification to avoid sensitivity confusion, so be careful when\n counting the number of \u003ccode\u003elift\u003c/code\u003e you use when taking the gradient of a\n function that takes gradients!\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Numeric.AD.Variadic",
        "fct-package": "ad",
        "fct-signature": "module",
        "fct-source": "src/Numeric-AD-Variadic.html",
        "fct-type": "module",
        "title": "Variadic"
      },
      "index": {
        "description": "Variadic combinators for variadic mixed-mode automatic differentiation Unfortunately variadicity comes at the expense of being able to use quantification to avoid sensitivity confusion so be careful when counting the number of lift you use when taking the gradient of function that takes gradients",
        "hierarchy": "Numeric AD Variadic",
        "module": "Numeric.AD.Variadic",
        "name": "Variadic",
        "normalized": "",
        "package": "ad",
        "partial": "Variadic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic.html#t:Grad",
      "description": {
        "fct-module": "Numeric.AD.Variadic",
        "fct-package": "ad",
        "fct-signature": "class",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#Grad",
        "fct-type": "class",
        "title": "Grad"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Variadic",
        "module": "Numeric.AD.Variadic",
        "name": "Grad",
        "normalized": "",
        "package": "ad",
        "partial": "Grad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic.html#t:Grads",
      "description": {
        "fct-module": "Numeric.AD.Variadic",
        "fct-package": "ad",
        "fct-signature": "class",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#Grads",
        "fct-type": "class",
        "title": "Grads"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Variadic",
        "module": "Numeric.AD.Variadic",
        "name": "Grads",
        "normalized": "",
        "package": "ad",
        "partial": "Grads",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic.html#v:vgrad",
      "description": {
        "fct-module": "Numeric.AD.Variadic",
        "fct-package": "ad",
        "fct-signature": "i -\u003e o",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#vgrad",
        "fct-type": "function",
        "title": "vgrad"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Variadic",
        "module": "Numeric.AD.Variadic",
        "name": "vgrad",
        "normalized": "a-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "i-\u003eo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic.html#v:vgrad-39-",
      "description": {
        "fct-module": "Numeric.AD.Variadic",
        "fct-package": "ad",
        "fct-signature": "i -\u003e o'",
        "fct-source": "src/Numeric-AD-Internal-Kahn.html#vgrad%27",
        "fct-type": "function",
        "title": "vgrad'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Variadic",
        "module": "Numeric.AD.Variadic",
        "name": "vgrad'",
        "normalized": "a-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "i-\u003eo'"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic.html#v:vgrads",
      "description": {
        "fct-module": "Numeric.AD.Variadic",
        "fct-package": "ad",
        "fct-signature": "i -\u003e o",
        "fct-source": "src/Numeric-AD-Internal-Sparse.html#vgrads",
        "fct-type": "function",
        "title": "vgrads"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD Variadic",
        "module": "Numeric.AD.Variadic",
        "name": "vgrads",
        "normalized": "a-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "i-\u003eo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMixed-Mode Automatic Differentiation.\n\u003c/p\u003e\u003cp\u003eEach combinator exported from this module chooses an appropriate AD mode.\n The following basic operations are supported, modified as appropriate by the suffixes below:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003egrad\u003c/a\u003e\u003c/code\u003e computes the gradient (partial derivatives) of a function at a point\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e computes the Jacobian matrix of a function at a point\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ediff\u003c/a\u003e\u003c/code\u003e computes the derivative of a function at a point\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003edu\u003c/a\u003e\u003c/code\u003e computes a directional derivative of a function at a point\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ehessian\u003c/a\u003e\u003c/code\u003e compute the Hessian matrix (matrix of second partial derivatives) of a function at a point\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe suffixes have the following meanings:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e'\u003c/code\u003e -- also return the answer\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eWith\u003c/code\u003e lets the user supply a function to blend the input with the output\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eF\u003c/code\u003e is a version of the base function lifted to return a \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e (or \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e) result\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003es\u003c/code\u003e means the function returns all higher derivatives in a list or f-branching \u003ccode\u003eStream\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eT\u003c/code\u003e means the result is transposed with respect to the traditional formulation.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e0\u003c/code\u003e means that the resulting derivative list is padded with 0s at the end.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "module",
        "fct-source": "src/Numeric-AD.html",
        "fct-type": "module",
        "title": "AD"
      },
      "index": {
        "description": "Mixed-Mode Automatic Differentiation Each combinator exported from this module chooses an appropriate AD mode The following basic operations are supported modified as appropriate by the suffixes below grad computes the gradient partial derivatives of function at point jacobian computes the Jacobian matrix of function at point diff computes the derivative of function at point du computes directional derivative of function at point hessian compute the Hessian matrix matrix of second partial derivatives of function at point The suffixes have the following meanings also return the answer With lets the user supply function to blend the input with the output is version of the base function lifted to return Traversable or Functor result means the function returns all higher derivatives in list or f-branching Stream means the result is transposed with respect to the traditional formulation means that the resulting derivative list is padded with at the end",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "AD",
        "normalized": "",
        "package": "ad",
        "partial": "AD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:conjugateGradientAscent",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a conjugate gradient ascent using reverse mode automatic differentiation to compute the gradient.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e [f a]",
        "fct-source": "src/Numeric-AD-Newton.html#conjugateGradientAscent",
        "fct-type": "function",
        "title": "conjugateGradientAscent"
      },
      "index": {
        "description": "Perform conjugate gradient ascent using reverse mode automatic differentiation to compute the gradient",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "conjugateGradientAscent",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e[a c]",
        "package": "ad",
        "partial": "Gradient Ascent",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e[f a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:conjugateGradientDescent",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a conjugate gradient descent using reverse mode automatic differentiation to compute the gradient.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e [f a]",
        "fct-source": "src/Numeric-AD-Newton.html#conjugateGradientDescent",
        "fct-type": "function",
        "title": "conjugateGradientDescent"
      },
      "index": {
        "description": "Perform conjugate gradient descent using reverse mode automatic differentiation to compute the gradient",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "conjugateGradientDescent",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e[a c]",
        "package": "ad",
        "partial": "Gradient Descent",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e[f a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:diff",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediff\u003c/a\u003e\u003c/code\u003e function calculates the first derivative of a scalar-to-scalar function by forward-mode \u003ccode\u003e\u003ca\u003eAD\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediff sin 0\n\u003c/code\u003e\u003c/strong\u003e1.0\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e a",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#diff",
        "fct-type": "function",
        "title": "diff"
      },
      "index": {
        "description": "The diff function calculates the first derivative of scalar-to-scalar function by forward-mode AD diff sin",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "diff",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003eb",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:diff-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediff'\u003c/a\u003e\u003c/code\u003e function calculates the result and first derivative of scalar-to-scalar function by \u003ccode\u003e\u003ca\u003eForward\u003c/a\u003e\u003c/code\u003e mode \u003ccode\u003e\u003ca\u003eAD\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ediff'\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esin\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003esin\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e&&&\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ecos\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003ediff'\u003c/a\u003e\u003c/code\u003e f = f \u003ccode\u003e\u003ca\u003e&&&\u003c/a\u003e\u003c/code\u003e d f\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediff' sin 0\n\u003c/code\u003e\u003c/strong\u003e(0.0,1.0)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediff' exp 0\n\u003c/code\u003e\u003c/strong\u003e(1.0,1.0)\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e (a, a)",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#diff%27",
        "fct-type": "function",
        "title": "diff'"
      },
      "index": {
        "description": "The diff function calculates the result and first derivative of scalar-to-scalar function by Forward mode AD diff sin sin cos diff diff sin diff exp",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "diff'",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e(b,b)",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:diffF",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediffF\u003c/a\u003e\u003c/code\u003e function calculates the first derivatives of scalar-to-nonscalar function by \u003ccode\u003e\u003ca\u003eForward\u003c/a\u003e\u003c/code\u003e mode \u003ccode\u003e\u003ca\u003eAD\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediffF (\\a -\u003e [sin a, cos a]) 0\n\u003c/code\u003e\u003c/strong\u003e[1.0,-0.0]\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e f (AD s a)) -\u003e a -\u003e f a",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#diffF",
        "fct-type": "function",
        "title": "diffF"
      },
      "index": {
        "description": "The diffF function calculates the first derivatives of scalar-to-nonscalar function by Forward mode AD diffF sin cos",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "diffF",
        "normalized": "AD a b-\u003ec(AD a b))-\u003eb-\u003ec b",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003ef(AD s a))-\u003ea-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:diffF-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediffF'\u003c/a\u003e\u003c/code\u003e function calculates the result and first derivatives of a scalar-to-non-scalar function by \u003ccode\u003e\u003ca\u003eForward\u003c/a\u003e\u003c/code\u003e mode \u003ccode\u003e\u003ca\u003eAD\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediffF' (\\a -\u003e [sin a, cos a]) 0\n\u003c/code\u003e\u003c/strong\u003e[(0.0,1.0),(1.0,-0.0)]\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e f (AD s a)) -\u003e a -\u003e f (a, a)",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#diffF%27",
        "fct-type": "function",
        "title": "diffF'"
      },
      "index": {
        "description": "The diffF function calculates the result and first derivatives of scalar-to-non-scalar function by Forward mode AD diffF sin cos",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "diffF'",
        "normalized": "AD a b-\u003ec(AD a b))-\u003eb-\u003ec(b,b)",
        "package": "ad",
        "partial": "F'",
        "signature": "AD s a-\u003ef(AD s a))-\u003ea-\u003ef(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:diffs",
      "description": {
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e [a]",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#diffs",
        "fct-type": "function",
        "title": "diffs"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "diffs",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e[b]",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:diffs0",
      "description": {
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e [a]",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#diffs0",
        "fct-type": "function",
        "title": "diffs0"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "diffs0",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e[b]",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:diffs0F",
      "description": {
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e f (AD s a)) -\u003e a -\u003e f [a]",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#diffs0F",
        "fct-type": "function",
        "title": "diffs0F"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "diffs0F",
        "normalized": "AD a b-\u003ec(AD a b))-\u003eb-\u003ec[b]",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003ef(AD s a))-\u003ea-\u003ef[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:diffsF",
      "description": {
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e f (AD s a)) -\u003e a -\u003e f [a]",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#diffsF",
        "fct-type": "function",
        "title": "diffsF"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "diffsF",
        "normalized": "AD a b-\u003ec(AD a b))-\u003eb-\u003ec[b]",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003ef(AD s a))-\u003ea-\u003ef[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:du",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the directional derivative of a function given a zipped up \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e of the input values and their derivatives\n\u003c/p\u003e",
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f (a, a) -\u003e a",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#du",
        "fct-type": "function",
        "title": "du"
      },
      "index": {
        "description": "Compute the directional derivative of function given zipped up Functor of the input values and their derivatives",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "du",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea(c,c)-\u003ec",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef(a,a)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:du-39-",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the answer and directional derivative of a function given a zipped up \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e of the input values and their derivatives\n\u003c/p\u003e",
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f (a, a) -\u003e (a, a)",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#du%27",
        "fct-type": "function",
        "title": "du'"
      },
      "index": {
        "description": "Compute the answer and directional derivative of function given zipped up Functor of the input values and their derivatives",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "du'",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea(c,c)-\u003e(c,c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef(a,a)-\u003e(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:duF",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a vector of directional derivatives for a function given a zipped up \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e of the input values and their derivatives.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f (a, a) -\u003e g a",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#duF",
        "fct-type": "function",
        "title": "duF"
      },
      "index": {
        "description": "Compute vector of directional derivatives for function given zipped up Functor of the input values and their derivatives",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "duF",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea(c,c)-\u003ed c",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef(a,a)-\u003eg a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:duF-39-",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a vector of answers and directional derivatives for a function given a zipped up \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e of the input values and their derivatives.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f (a, a) -\u003e g (a, a)",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#duF%27",
        "fct-type": "function",
        "title": "duF'"
      },
      "index": {
        "description": "Compute vector of answers and directional derivatives for function given zipped up Functor of the input values and their derivatives",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "duF'",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea(c,c)-\u003ed(c,c)",
        "package": "ad",
        "partial": "F'",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef(a,a)-\u003eg(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:dus",
      "description": {
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f [a] -\u003e [a]",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#dus",
        "fct-type": "function",
        "title": "dus"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "dus",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea[c]-\u003e[c]",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:dus0",
      "description": {
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f [a] -\u003e [a]",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#dus0",
        "fct-type": "function",
        "title": "dus0"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "dus0",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea[c]-\u003e[c]",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:dus0F",
      "description": {
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f [a] -\u003e g [a]",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#dus0F",
        "fct-type": "function",
        "title": "dus0F"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "dus0F",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea[c]-\u003ed[c]",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef[a]-\u003eg[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:dusF",
      "description": {
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f [a] -\u003e g [a]",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#dusF",
        "fct-type": "function",
        "title": "dusF"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "dusF",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea[c]-\u003ed[c]",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef[a]-\u003eg[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:grad",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egrad\u003c/a\u003e\u003c/code\u003e function calculates the gradient of a non-scalar-to-scalar function with reverse-mode AD in a single pass.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egrad (\\[x,y,z] -\u003e x*y+z) [1,2,3]\n\u003c/code\u003e\u003c/strong\u003e[2,1,1]\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f a",
        "fct-source": "src/Numeric-AD-Mode-Reverse.html#grad",
        "fct-type": "function",
        "title": "grad"
      },
      "index": {
        "description": "The grad function calculates the gradient of non-scalar-to-scalar function with reverse-mode AD in single pass grad",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "grad",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea c",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:grad-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egrad'\u003c/a\u003e\u003c/code\u003e function calculates the result and gradient of a non-scalar-to-scalar function with reverse-mode AD in a single pass.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egrad' (\\[x,y,z] -\u003e x*y+z) [1,2,3]\n\u003c/code\u003e\u003c/strong\u003e(5,[2,1,1])\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e (a, f a)",
        "fct-source": "src/Numeric-AD-Mode-Reverse.html#grad%27",
        "fct-type": "function",
        "title": "grad'"
      },
      "index": {
        "description": "The grad function calculates the result and gradient of non-scalar-to-scalar function with reverse-mode AD in single pass grad",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "grad'",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e(c,a c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e(a,f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:gradWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egrad\u003c/a\u003e\u003c/code\u003e g f\u003c/code\u003e function calculates the gradient of a non-scalar-to-scalar function \u003ccode\u003ef\u003c/code\u003e with reverse-mode AD in a single pass.\n The gradient is combined element-wise with the argument using the function \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003egrad\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003egradWith\u003c/a\u003e\u003c/code\u003e (_ dx -\u003e dx)\n \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003egradWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f b",
        "fct-source": "src/Numeric-AD-Mode-Reverse.html#gradWith",
        "fct-type": "function",
        "title": "gradWith"
      },
      "index": {
        "description": "grad function calculates the gradient of non-scalar-to-scalar function with reverse-mode AD in single pass The gradient is combined element-wise with the argument using the function grad gradWith dx dx id gradWith const",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "gradWith",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea d",
        "package": "ad",
        "partial": "With",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:gradWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egrad'\u003c/a\u003e\u003c/code\u003e g f\u003c/code\u003e calculates the result and gradient of a non-scalar-to-scalar function \u003ccode\u003ef\u003c/code\u003e with reverse-mode AD in a single pass\n the gradient is combined element-wise with the argument using the function \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003egrad'\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003egradWith'\u003c/a\u003e\u003c/code\u003e (_ dx -\u003e dx)\n\u003c/pre\u003e",
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e (a, f b)",
        "fct-source": "src/Numeric-AD-Mode-Reverse.html#gradWith%27",
        "fct-type": "function",
        "title": "gradWith'"
      },
      "index": {
        "description": "grad calculates the result and gradient of non-scalar-to-scalar function with reverse-mode AD in single pass the gradient is combined element-wise with the argument using the function grad gradWith dx dx",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "gradWith'",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e(c,a d)",
        "package": "ad",
        "partial": "With'",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e(a,f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:gradientAscent",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a gradient descent using reverse mode automatic differentiation to compute the gradient.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e [f a]",
        "fct-source": "src/Numeric-AD-Newton.html#gradientAscent",
        "fct-type": "function",
        "title": "gradientAscent"
      },
      "index": {
        "description": "Perform gradient descent using reverse mode automatic differentiation to compute the gradient",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "gradientAscent",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e[a c]",
        "package": "ad",
        "partial": "Ascent",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e[f a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:gradientDescent",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egradientDescent\u003c/a\u003e\u003c/code\u003e function performs a multivariate\n optimization, based on the naive-gradient-descent in the file\n \u003ccode\u003estalingrad/examples/flow-tests/pre-saddle-1a.vlad\u003c/code\u003e from the\n VLAD compiler Stalingrad sources.  Its output is a stream of\n increasingly accurate results.  (Modulo the usual caveats.)\n\u003c/p\u003e\u003cp\u003eIt uses reverse mode automatic differentiation to compute the gradient.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e [f a]",
        "fct-source": "src/Numeric-AD-Newton.html#gradientDescent",
        "fct-type": "function",
        "title": "gradientDescent"
      },
      "index": {
        "description": "The gradientDescent function performs multivariate optimization based on the naive-gradient-descent in the file stalingrad examples flow-tests pre-saddle-1a.vlad from the VLAD compiler Stalingrad sources Its output is stream of increasingly accurate results Modulo the usual caveats It uses reverse mode automatic differentiation to compute the gradient",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "gradientDescent",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e[a c]",
        "package": "ad",
        "partial": "Descent",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e[f a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:grads",
      "description": {
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e Cofree f a",
        "fct-source": "src/Numeric-AD-Mode-Sparse.html#grads",
        "fct-type": "function",
        "title": "grads"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "grads",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003eCofree a c",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003eCofree f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:hessian",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the Hessian via the Jacobian of the gradient. gradient is computed in reverse mode and then the Jacobian is computed in sparse (forward) mode.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f (f a)",
        "fct-source": "src/Numeric-AD.html#hessian",
        "fct-type": "function",
        "title": "hessian"
      },
      "index": {
        "description": "Compute the Hessian via the Jacobian of the gradient gradient is computed in reverse mode and then the Jacobian is computed in sparse forward mode",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "hessian",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea(a c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:hessian-39-",
      "description": {
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e (a, f (a, f a))",
        "fct-source": "src/Numeric-AD-Mode-Sparse.html#hessian%27",
        "fct-type": "function",
        "title": "hessian'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "hessian'",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e(c,a(c,a c))",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e(a,f(a,f a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:hessianF",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the order 3 Hessian tensor on a non-scalar-to-non-scalar function using \u003ccode\u003eSparse\u003c/code\u003e or 'Sparse'-on-'Reverse'\n\u003c/p\u003e",
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f (f a))",
        "fct-source": "src/Numeric-AD.html#hessianF",
        "fct-type": "function",
        "title": "hessianF"
      },
      "index": {
        "description": "Compute the order Hessian tensor on non-scalar-to-non-scalar function using Sparse or Sparse on Reverse",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "hessianF",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a(a c))",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f(f a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:hessianF-39-",
      "description": {
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (a, f (a, f a))",
        "fct-source": "src/Numeric-AD-Mode-Sparse.html#hessianF%27",
        "fct-type": "function",
        "title": "hessianF'"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "hessianF'",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(c,a(c,a c))",
        "package": "ad",
        "partial": "F'",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(a,f(a,f a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:hessianProduct",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ehessianProduct\u003c/a\u003e\u003c/code\u003e f wv\u003c/code\u003e computes the product of the hessian \u003ccode\u003eH\u003c/code\u003e of a non-scalar-to-scalar function \u003ccode\u003ef\u003c/code\u003e at \u003ccode\u003ew = \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e \u003ca\u003e$\u003c/a\u003e wv\u003c/code\u003e with a vector \u003ccode\u003ev = snd \u003ca\u003e$\u003c/a\u003e wv\u003c/code\u003e using \"Pearlmutter's method\" from \u003ca\u003ehttp://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.29.6143\u003c/a\u003e, which states:\n\u003c/p\u003e\u003cpre\u003e H v = (d/dr) grad_w (w + r v) | r = 0\n\u003c/pre\u003e\u003cp\u003eOr in other words, we take the directional derivative of the gradient. The gradient is calculated in reverse mode, then the directional derivative is calculated in forward mode.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f (a, a) -\u003e f a",
        "fct-source": "src/Numeric-AD.html#hessianProduct",
        "fct-type": "function",
        "title": "hessianProduct"
      },
      "index": {
        "description": "hessianProduct wv computes the product of the hessian of non-scalar-to-scalar function at fst wv with vector snd wv using Pearlmutter method from http citeseerx.ist.psu.edu viewdoc summary doi which states dr grad Or in other words we take the directional derivative of the gradient The gradient is calculated in reverse mode then the directional derivative is calculated in forward mode",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "hessianProduct",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea(c,c)-\u003ea c",
        "package": "ad",
        "partial": "Product",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef(a,a)-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:hessianProduct-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ehessianProduct'\u003c/a\u003e\u003c/code\u003e f wv\u003c/code\u003e computes both the gradient of a non-scalar-to-scalar \u003ccode\u003ef\u003c/code\u003e at \u003ccode\u003ew = \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e \u003ca\u003e$\u003c/a\u003e wv\u003c/code\u003e and the product of the hessian \u003ccode\u003eH\u003c/code\u003e at \u003ccode\u003ew\u003c/code\u003e with a vector \u003ccode\u003ev = snd \u003ca\u003e$\u003c/a\u003e wv\u003c/code\u003e using \"Pearlmutter's method\". The outputs are returned wrapped in the same functor.\n\u003c/p\u003e\u003cpre\u003e H v = (d/dr) grad_w (w + r v) | r = 0\n\u003c/pre\u003e\u003cp\u003eOr in other words, we return the gradient and the directional derivative of the gradient. The gradient is calculated in reverse mode, then the directional derivative is calculated in forward mode.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e AD s a) -\u003e f (a, a) -\u003e f (a, a)",
        "fct-source": "src/Numeric-AD.html#hessianProduct%27",
        "fct-type": "function",
        "title": "hessianProduct'"
      },
      "index": {
        "description": "hessianProduct wv computes both the gradient of non-scalar-to-scalar at fst wv and the product of the hessian at with vector snd wv using Pearlmutter method The outputs are returned wrapped in the same functor dr grad Or in other words we return the gradient and the directional derivative of the gradient The gradient is calculated in reverse mode then the directional derivative is calculated in forward mode",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "hessianProduct'",
        "normalized": "a(AD b c)-\u003eAD b c)-\u003ea(c,c)-\u003ea(c,c)",
        "package": "ad",
        "partial": "Product'",
        "signature": "f(AD s a)-\u003eAD s a)-\u003ef(a,a)-\u003ef(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:jacobian",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the Jacobian of a non-scalar-to-non-scalar function, automatically choosing between forward and reverse mode AD based on the number of inputs and outputs.\n\u003c/p\u003e\u003cp\u003eIf you know the relative number of inputs and outputs, consider \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f a)",
        "fct-source": "src/Numeric-AD.html#jacobian",
        "fct-type": "function",
        "title": "jacobian"
      },
      "index": {
        "description": "Calculate the Jacobian of non-scalar-to-non-scalar function automatically choosing between forward and reverse mode AD based on the number of inputs and outputs If you know the relative number of inputs and outputs consider jacobian or jacobian",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "jacobian",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:jacobian-39-",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate both the answer and Jacobian of a non-scalar-to-non-scalar function, automatically choosing between forward- and reverse- mode AD based on the relative, based on the number of inputs\n\u003c/p\u003e\u003cp\u003eIf you know the relative number of inputs and outputs, consider \u003ccode\u003e\u003ca\u003ejacobian'\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ejacobian'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (a, f a)",
        "fct-source": "src/Numeric-AD.html#jacobian%27",
        "fct-type": "function",
        "title": "jacobian'"
      },
      "index": {
        "description": "Calculate both the answer and Jacobian of non-scalar-to-non-scalar function automatically choosing between forward and reverse mode AD based on the relative based on the number of inputs If you know the relative number of inputs and outputs consider jacobian or jacobian",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "jacobian'",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(c,a c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(a,f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:jacobianT",
      "description": {
        "fct-descr": "\u003cp\u003eA fast, simple, transposed Jacobian computed with forward-mode AD.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e f (g a)",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#jacobianT",
        "fct-type": "function",
        "title": "jacobianT"
      },
      "index": {
        "description": "fast simple transposed Jacobian computed with forward-mode AD",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "jacobianT",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ea(d c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003ef(g a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:jacobianWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ejacobianWith\u003c/a\u003e\u003c/code\u003e g f\u003c/code\u003e calculates the Jacobian of a non-scalar-to-non-scalar function, automatically choosing between forward and reverse mode AD based on the number of inputs and outputs.\n\u003c/p\u003e\u003cp\u003eThe resulting Jacobian matrix is then recombined element-wise with the input using \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you know the relative number of inputs and outputs, consider \u003ccode\u003e\u003ca\u003ejacobianWith\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ejacobianWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f b)",
        "fct-source": "src/Numeric-AD.html#jacobianWith",
        "fct-type": "function",
        "title": "jacobianWith"
      },
      "index": {
        "description": "jacobianWith calculates the Jacobian of non-scalar-to-non-scalar function automatically choosing between forward and reverse mode AD based on the number of inputs and outputs The resulting Jacobian matrix is then recombined element-wise with the input using If you know the relative number of inputs and outputs consider jacobianWith or jacobianWith",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "jacobianWith",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a e)",
        "package": "ad",
        "partial": "With",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:jacobianWith-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ejacobianWith'\u003c/a\u003e\u003c/code\u003e g f\u003c/code\u003e calculates the answer and Jacobian of a non-scalar-to-non-scalar function, automatically choosing between sparse and reverse mode AD based on the number of inputs and outputs.\n\u003c/p\u003e\u003cp\u003eThe resulting Jacobian matrix is then recombined element-wise with the input using \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you know the relative number of inputs and outputs, consider \u003ccode\u003e\u003ca\u003ejacobianWith'\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ejacobianWith'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (a, f b)",
        "fct-source": "src/Numeric-AD.html#jacobianWith%27",
        "fct-type": "function",
        "title": "jacobianWith'"
      },
      "index": {
        "description": "jacobianWith calculates the answer and Jacobian of non-scalar-to-non-scalar function automatically choosing between sparse and reverse mode AD based on the number of inputs and outputs The resulting Jacobian matrix is then recombined element-wise with the input using If you know the relative number of inputs and outputs consider jacobianWith or jacobianWith",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "jacobianWith'",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(c,a e)",
        "package": "ad",
        "partial": "With'",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(a,f b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:jacobianWithT",
      "description": {
        "fct-descr": "\u003cp\u003eA fast, simple, transposed Jacobian computed with \u003ccode\u003e\u003ca\u003eForward\u003c/a\u003e\u003c/code\u003e mode \u003ccode\u003e\u003ca\u003eAD\u003c/a\u003e\u003c/code\u003e that combines the output with the input.\n\u003c/p\u003e",
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e f (g b)",
        "fct-source": "src/Numeric-AD-Mode-Forward.html#jacobianWithT",
        "fct-type": "function",
        "title": "jacobianWithT"
      },
      "index": {
        "description": "fast simple transposed Jacobian computed with Forward mode AD that combines the output with the input",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "jacobianWithT",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ea(d e)",
        "package": "ad",
        "partial": "With",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003ef(g b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:jacobians",
      "description": {
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (Cofree f a)",
        "fct-source": "src/Numeric-AD-Mode-Sparse.html#jacobians",
        "fct-type": "function",
        "title": "jacobians"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "jacobians",
        "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(Cofree a c)",
        "package": "ad",
        "partial": "",
        "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(Cofree f a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:maclaurin",
      "description": {
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e [a]",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#maclaurin",
        "fct-type": "function",
        "title": "maclaurin"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "maclaurin",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e[b]",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:maclaurin0",
      "description": {
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e [a]",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#maclaurin0",
        "fct-type": "function",
        "title": "maclaurin0"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "maclaurin0",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e[b]",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:taylor",
      "description": {
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e a -\u003e [a]",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#taylor",
        "fct-type": "function",
        "title": "taylor"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "taylor",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003eb-\u003e[b]",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:taylor0",
      "description": {
        "fct-module": "Numeric.AD",
        "fct-package": "ad",
        "fct-signature": "AD s a -\u003e AD s a) -\u003e a -\u003e a -\u003e [a]",
        "fct-source": "src/Numeric-AD-Mode-Tower.html#taylor0",
        "fct-type": "function",
        "title": "taylor0"
      },
      "index": {
        "description": "",
        "hierarchy": "Numeric AD",
        "module": "Numeric.AD",
        "name": "taylor0",
        "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003eb-\u003e[b]",
        "package": "ad",
        "partial": "",
        "signature": "AD s a-\u003eAD s a)-\u003ea-\u003ea-\u003e[a]"
      }
    }
  }
]