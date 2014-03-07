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
        "word": "ad"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRoot finding using Halley's rational method (the second in\n the class of Householder methods). Assumes the function is three\n times continuously differentiable and converges cubically when\n progress can be made.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.AD.Halley",
          "name": "Halley",
          "package": "ad",
          "source": "src/Numeric-AD-Halley.html",
          "type": "module"
        },
        "index": {
          "description": "Root finding using Halley rational method the second in the class of Householder methods Assumes the function is three times continuously differentiable and converges cubically when progress can be made",
          "hierarchy": "Numeric AD Halley",
          "module": "Numeric.AD.Halley",
          "name": "Halley",
          "package": "ad",
          "partial": "Halley",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Halley.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eextremum\u003c/a\u003e\u003c/code\u003e function finds an extremum of a scalar\n function using Halley's method; produces a stream of increasingly\n accurate results.  (Modulo the usual caveats.) If the stream becomes\n constant (\u003ca\u003eit converges\u003c/a\u003e), no further elements are returned.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 10 $ extremum cos 1\n\u003c/code\u003e\u003c/strong\u003e[1.0,0.29616942658570555,4.59979519460002e-3,1.6220740159042513e-8,0.0]\n\u003c/pre\u003e",
          "module": "Numeric.AD.Halley",
          "name": "extremum",
          "package": "ad",
          "signature": "AD s a -\u003e AD s a) -\u003e a -\u003e [a]",
          "source": "src/Numeric-AD-Halley.html#extremum",
          "type": "function"
        },
        "index": {
          "description": "The extremum function finds an extremum of scalar function using Halley method produces stream of increasingly accurate results Modulo the usual caveats If the stream becomes constant it converges no further elements are returned take extremum cos e-3 e-8",
          "hierarchy": "Numeric AD Halley",
          "module": "Numeric.AD.Halley",
          "name": "extremum",
          "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e[b]",
          "package": "ad",
          "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Halley.html#v:extremum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindZero\u003c/a\u003e\u003c/code\u003e function finds a zero of a scalar function using\n Halley's method; its output is a stream of increasingly accurate\n results.  (Modulo the usual caveats.) If the stream becomes constant\n (\u003ca\u003eit converges\u003c/a\u003e), no further elements are returned.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 10 $ findZero (\\x-\u003ex^2-4) 1\n\u003c/code\u003e\u003c/strong\u003e[1.0,1.8571428571428572,1.9997967892704736,1.9999999999994755,2.0]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Data.Complex\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elast $ take 10 $ findZero ((+1).(^2)) (1 :+ 1)\n\u003c/code\u003e\u003c/strong\u003e0.0 :+ 1.0\n\u003c/pre\u003e",
          "module": "Numeric.AD.Halley",
          "name": "findZero",
          "package": "ad",
          "signature": "AD s a -\u003e AD s a) -\u003e a -\u003e [a]",
          "source": "src/Numeric-AD-Halley.html#findZero",
          "type": "function"
        },
        "index": {
          "description": "The findZero function finds zero of scalar function using Halley method its output is stream of increasingly accurate results Modulo the usual caveats If the stream becomes constant it converges no further elements are returned Examples take findZero import Data.Complex last take findZero",
          "hierarchy": "Numeric AD Halley",
          "module": "Numeric.AD.Halley",
          "name": "findZero",
          "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e[b]",
          "package": "ad",
          "partial": "Zero",
          "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Halley.html#v:findZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efixedPoint\u003c/a\u003e\u003c/code\u003e function find a fixedpoint of a scalar\n function using Halley's method; its output is a stream of\n increasingly accurate results.  (Modulo the usual caveats.)\n\u003c/p\u003e\u003cp\u003eIf the stream becomes constant (\u003ca\u003eit converges\u003c/a\u003e), no further\n elements are returned.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elast $ take 10 $ fixedPoint cos 1\n\u003c/code\u003e\u003c/strong\u003e0.7390851332151607\n\u003c/pre\u003e",
          "module": "Numeric.AD.Halley",
          "name": "fixedPoint",
          "package": "ad",
          "signature": "AD s a -\u003e AD s a) -\u003e a -\u003e [a]",
          "source": "src/Numeric-AD-Halley.html#fixedPoint",
          "type": "function"
        },
        "index": {
          "description": "The fixedPoint function find fixedpoint of scalar function using Halley method its output is stream of increasingly accurate results Modulo the usual caveats If the stream becomes constant it converges no further elements are returned last take fixedPoint cos",
          "hierarchy": "Numeric AD Halley",
          "module": "Numeric.AD.Halley",
          "name": "fixedPoint",
          "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e[b]",
          "package": "ad",
          "partial": "Point",
          "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Halley.html#v:fixedPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einverse\u003c/a\u003e\u003c/code\u003e function inverts a scalar function using\n Halley's method; its output is a stream of increasingly accurate\n results.  (Modulo the usual caveats.) If the stream becomes constant\n (\u003ca\u003eit converges\u003c/a\u003e), no further elements are returned.\n\u003c/p\u003e\u003cp\u003eNote: the \u003ccode\u003etake 10 $ inverse sqrt 1 (sqrt 10)\u003c/code\u003e example that works for Newton's method\n fails with Halley's method because the preconditions do not hold!\n\u003c/p\u003e",
          "module": "Numeric.AD.Halley",
          "name": "inverse",
          "package": "ad",
          "signature": "AD s a -\u003e AD s a) -\u003e a -\u003e a -\u003e [a]",
          "source": "src/Numeric-AD-Halley.html#inverse",
          "type": "function"
        },
        "index": {
          "description": "The inverse function inverts scalar function using Halley method its output is stream of increasingly accurate results Modulo the usual caveats If the stream becomes constant it converges no further elements are returned Note the take inverse sqrt sqrt example that works for Newton method fails with Halley method because the preconditions do not hold",
          "hierarchy": "Numeric AD Halley",
          "module": "Numeric.AD.Halley",
          "name": "inverse",
          "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003eb-\u003e[b]",
          "package": "ad",
          "signature": "AD s a-\u003eAD s a)-\u003ea-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Halley.html#v:inverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "Classes",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Classes.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "Classes",
          "package": "ad",
          "partial": "Classes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "Iso",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Classes.html#Iso",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "Iso",
          "package": "ad",
          "partial": "Iso",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#t:Iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eJacobian\u003c/a\u003e\u003c/code\u003e is used by \u003ccode\u003ederiveMode\u003c/code\u003e but is not exposed\n via \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e to prevent its abuse by end users\n via the \u003ccode\u003eAD\u003c/code\u003e data type.\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Classes",
          "name": "Jacobian",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Classes.html#Jacobian",
          "type": "class"
        },
        "index": {
          "description": "Jacobian is used by deriveMode but is not exposed via Mode to prevent its abuse by end users via the AD data type",
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "Jacobian",
          "package": "ad",
          "partial": "Jacobian",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#t:Jacobian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "Lifted",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Classes.html#Lifted",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "Lifted",
          "package": "ad",
          "partial": "Lifted",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#t:Lifted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "Mode",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Classes.html#Mode",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "Mode",
          "package": "ad",
          "partial": "Mode",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePrimal\u003c/a\u003e\u003c/code\u003e is used by \u003ccode\u003ederiveMode\u003c/code\u003e but is not exposed\n via the \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e class to prevent its abuse by end users\n via the AD data type.\n\u003c/p\u003e\u003cp\u003eIt provides direct access to the result, stripped of its derivative information,\n but this is unsafe in general as (auto . primal) would discard derivative\n information. The end user is protected from accidentally using this function\n by the universal quantification on the various combinators we expose.\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Classes",
          "name": "Primal",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Classes.html#Primal",
          "type": "class"
        },
        "index": {
          "description": "Primal is used by deriveMode but is not exposed via the Mode class to prevent its abuse by end users via the AD data type It provides direct access to the result stripped of its derivative information but this is unsafe in general as auto primal would discard derivative information The end user is protected from accidentally using this function by the universal quantification on the various combinators we expose",
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "Primal",
          "package": "ad",
          "partial": "Primal",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#t:Primal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "(**!)",
          "package": "ad",
          "signature": "t a -\u003e t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#%2A%2A%21",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "(**!) **!",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "ad",
          "signature": "t a-\u003et a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:-42--42--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScalar-vector multiplication\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Classes",
          "name": "(*^)",
          "package": "ad",
          "signature": "a -\u003e t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#%2A%5E",
          "type": "method"
        },
        "index": {
          "description": "Scalar-vector multiplication",
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "(*^) *^",
          "normalized": "a-\u003eb a-\u003eb a",
          "package": "ad",
          "signature": "a-\u003et a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:-42--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "(+!)",
          "package": "ad",
          "signature": "t a -\u003e t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#%2B%21",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "(+!) +!",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "ad",
          "signature": "t a-\u003et a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:-43--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "(/!)",
          "package": "ad",
          "signature": "t a -\u003e t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#%2F%21",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "(/!) /!",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "ad",
          "signature": "t a-\u003et a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:-47--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExponentiation, this should be overloaded if you can figure out anything about what is constant!\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Classes",
          "name": "(\u003c**\u003e)",
          "package": "ad",
          "signature": "t a -\u003e t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#%3C%2A%2A%3E",
          "type": "method"
        },
        "index": {
          "description": "Exponentiation this should be overloaded if you can figure out anything about what is constant",
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "(\u003c**\u003e) \u003c**\u003e",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "ad",
          "signature": "t a-\u003et a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:-60--42--42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVector sum\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Classes",
          "name": "(\u003c+\u003e)",
          "package": "ad",
          "signature": "t a -\u003e t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#%3C%2B%3E",
          "type": "method"
        },
        "index": {
          "description": "Vector sum",
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "ad",
          "signature": "t a-\u003et a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "(==!)",
          "package": "ad",
          "signature": "t a -\u003e t a -\u003e Bool",
          "source": "src/Numeric-AD-Internal-Classes.html#%3D%3D%21",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "(==!) ==!",
          "normalized": "a b-\u003ea b-\u003eBool",
          "package": "ad",
          "signature": "t a-\u003et a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:-61--61--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVector-scalar multiplication\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Classes",
          "name": "(^*)",
          "package": "ad",
          "signature": "t a -\u003e a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#%5E%2A",
          "type": "method"
        },
        "index": {
          "description": "Vector-scalar multiplication",
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "(^*) ^*",
          "normalized": "a b-\u003eb-\u003ea b",
          "package": "ad",
          "signature": "t a-\u003ea-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:-94--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScalar division\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Classes",
          "name": "(^/)",
          "package": "ad",
          "signature": "t a -\u003e a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#%5E%2F",
          "type": "method"
        },
        "index": {
          "description": "Scalar division",
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "(^/) ^/",
          "normalized": "a b-\u003eb-\u003ea b",
          "package": "ad",
          "signature": "t a-\u003ea-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:-94--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "atan21",
          "package": "ad",
          "signature": "t a -\u003e t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#atan21",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "atan21",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "ad",
          "signature": "t a-\u003et a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:atan21"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a constant\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Classes",
          "name": "auto",
          "package": "ad",
          "signature": "a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#auto",
          "type": "method"
        },
        "index": {
          "description": "Embed constant",
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "auto",
          "normalized": "a-\u003eb a",
          "package": "ad",
          "signature": "a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:auto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "binary",
          "package": "ad",
          "signature": "(a -\u003e a -\u003e a) -\u003e D t a -\u003e D t a -\u003e t a -\u003e t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#binary",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "binary",
          "normalized": "(a-\u003ea-\u003ea)-\u003eD b a-\u003eD b a-\u003eb a-\u003eb a-\u003eb a",
          "package": "ad",
          "signature": "(a-\u003ea-\u003ea)-\u003eD t a-\u003eD t a-\u003et a-\u003et a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "compare1",
          "package": "ad",
          "signature": "t a -\u003e t a -\u003e Ordering",
          "source": "src/Numeric-AD-Internal-Classes.html#compare1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "compare1",
          "normalized": "a b-\u003ea b-\u003eOrdering",
          "package": "ad",
          "signature": "t a-\u003et a-\u003eOrdering",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:compare1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "decodeFloat1",
          "package": "ad",
          "signature": "t a -\u003e (Integer, Int)",
          "source": "src/Numeric-AD-Internal-Classes.html#decodeFloat1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "decodeFloat1",
          "normalized": "a b-\u003e(Integer,Int)",
          "package": "ad",
          "partial": "Float",
          "signature": "t a-\u003e(Integer,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:decodeFloat1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ederiveLifted\u003c/a\u003e\u003c/code\u003e t\u003c/code\u003e provides\n\u003c/p\u003e\u003cpre\u003e instance Lifted $t\n\u003c/pre\u003e\u003cp\u003egiven supplied instances for\n\u003c/p\u003e\u003cpre\u003e instance Lifted $t =\u003e Primal $t where ...\n instance Lifted $t =\u003e Jacobian $t where ...\n\u003c/pre\u003e\u003cp\u003eThe seemingly redundant \u003ccode\u003e\u003ccode\u003e\u003ca\u003eLifted\u003c/a\u003e\u003c/code\u003e $t\u003c/code\u003e constraints are caused by Template Haskell staging restrictions.\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Classes",
          "name": "deriveLifted",
          "package": "ad",
          "signature": "([Q Pred] -\u003e [Q Pred]) -\u003e Q Type -\u003e Q [Dec]",
          "source": "src/Numeric-AD-Internal-Classes.html#deriveLifted",
          "type": "function"
        },
        "index": {
          "description": "deriveLifted provides instance Lifted given supplied instances for instance Lifted Primal where instance Lifted Jacobian where The seemingly redundant Lifted constraints are caused by Template Haskell staging restrictions",
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "deriveLifted",
          "normalized": "([Q Pred]-\u003e[Q Pred])-\u003eQ Type-\u003eQ[Dec]",
          "package": "ad",
          "partial": "Lifted",
          "signature": "([Q Pred]-\u003e[Q Pred])-\u003eQ Type-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:deriveLifted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ederiveNumeric\u003c/a\u003e\u003c/code\u003e f g\u003c/code\u003e provides the following instances:\n\u003c/p\u003e\u003cpre\u003e instance ('Lifted' $f, 'Num' a, 'Enum' a) =\u003e 'Enum' ($g a)\n instance ('Lifted' $f, 'Num' a, 'Eq' a) =\u003e 'Eq' ($g a)\n instance ('Lifted' $f, 'Num' a, 'Ord' a) =\u003e 'Ord' ($g a)\n instance ('Lifted' $f, 'Num' a, 'Bounded' a) =\u003e 'Bounded' ($g a)\n\u003c/pre\u003e\u003cpre\u003e instance ('Lifted' $f, 'Show' a) =\u003e 'Show' ($g a)\n instance ('Lifted' $f, 'Num' a) =\u003e 'Num' ($g a)\n instance ('Lifted' $f, 'Fractional' a) =\u003e 'Fractional' ($g a)\n instance ('Lifted' $f, 'Floating' a) =\u003e 'Floating' ($g a)\n instance ('Lifted' $f, 'RealFloat' a) =\u003e 'RealFloat' ($g a)\n instance ('Lifted' $f, 'RealFrac' a) =\u003e 'RealFrac' ($g a)\n instance ('Lifted' $f, 'Real' a) =\u003e 'Real' ($g a)\n\u003c/pre\u003e",
          "module": "Numeric.AD.Internal.Classes",
          "name": "deriveNumeric",
          "package": "ad",
          "signature": "([Q Pred] -\u003e [Q Pred]) -\u003e Q Type -\u003e Q [Dec]",
          "source": "src/Numeric-AD-Internal-Classes.html#deriveNumeric",
          "type": "function"
        },
        "index": {
          "description": "deriveNumeric provides the following instances instance Lifted Num Enum Enum instance Lifted Num Eq Eq instance Lifted Num Ord Ord instance Lifted Num Bounded Bounded instance Lifted Show Show instance Lifted Num Num instance Lifted Fractional Fractional instance Lifted Floating Floating instance Lifted RealFloat RealFloat instance Lifted RealFrac RealFrac instance Lifted Real Real",
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "deriveNumeric",
          "normalized": "([Q Pred]-\u003e[Q Pred])-\u003eQ Type-\u003eQ[Dec]",
          "package": "ad",
          "partial": "Numeric",
          "signature": "([Q Pred]-\u003e[Q Pred])-\u003eQ Type-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:deriveNumeric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "encodeFloat1",
          "package": "ad",
          "signature": "Integer -\u003e Int -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#encodeFloat1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "encodeFloat1",
          "normalized": "Integer-\u003eInt-\u003ea b",
          "package": "ad",
          "partial": "Float",
          "signature": "Integer-\u003eInt-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:encodeFloat1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "enumFrom1",
          "package": "ad",
          "signature": "t a -\u003e [t a]",
          "source": "src/Numeric-AD-Internal-Classes.html#enumFrom1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "enumFrom1",
          "normalized": "a b-\u003e[a b]",
          "package": "ad",
          "partial": "From",
          "signature": "t a-\u003e[t a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:enumFrom1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "enumFromThen1",
          "package": "ad",
          "signature": "t a -\u003e t a -\u003e [t a]",
          "source": "src/Numeric-AD-Internal-Classes.html#enumFromThen1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "enumFromThen1",
          "normalized": "a b-\u003ea b-\u003e[a b]",
          "package": "ad",
          "partial": "From Then",
          "signature": "t a-\u003et a-\u003e[t a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:enumFromThen1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "enumFromThenTo1",
          "package": "ad",
          "signature": "t a -\u003e t a -\u003e t a -\u003e [t a]",
          "source": "src/Numeric-AD-Internal-Classes.html#enumFromThenTo1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "enumFromThenTo1",
          "normalized": "a b-\u003ea b-\u003ea b-\u003e[a b]",
          "package": "ad",
          "partial": "From Then To",
          "signature": "t a-\u003et a-\u003et a-\u003e[t a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:enumFromThenTo1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "enumFromTo1",
          "package": "ad",
          "signature": "t a -\u003e t a -\u003e [t a]",
          "source": "src/Numeric-AD-Internal-Classes.html#enumFromTo1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "enumFromTo1",
          "normalized": "a b-\u003ea b-\u003e[a b]",
          "package": "ad",
          "partial": "From To",
          "signature": "t a-\u003et a-\u003e[t a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:enumFromTo1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "erf1",
          "package": "ad",
          "signature": "t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#erf1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "erf1",
          "normalized": "a b-\u003ea b",
          "package": "ad",
          "signature": "t a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:erf1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "erfc1",
          "package": "ad",
          "signature": "t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#erfc1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "erfc1",
          "normalized": "a b-\u003ea b",
          "package": "ad",
          "signature": "t a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:erfc1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "exp1",
          "package": "ad",
          "signature": "t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#exp1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "exp1",
          "normalized": "a b-\u003ea b",
          "package": "ad",
          "signature": "t a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:exp1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "exponent1",
          "package": "ad",
          "signature": "t a -\u003e Int",
          "source": "src/Numeric-AD-Internal-Classes.html#exponent1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "exponent1",
          "normalized": "a b-\u003eInt",
          "package": "ad",
          "signature": "t a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:exponent1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "floatDigits1",
          "package": "ad",
          "signature": "t a -\u003e Int",
          "source": "src/Numeric-AD-Internal-Classes.html#floatDigits1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "floatDigits1",
          "normalized": "a b-\u003eInt",
          "package": "ad",
          "partial": "Digits",
          "signature": "t a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:floatDigits1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "floatRadix1",
          "package": "ad",
          "signature": "t a -\u003e Integer",
          "source": "src/Numeric-AD-Internal-Classes.html#floatRadix1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "floatRadix1",
          "normalized": "a b-\u003eInteger",
          "package": "ad",
          "partial": "Radix",
          "signature": "t a-\u003eInteger",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:floatRadix1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "floatRange1",
          "package": "ad",
          "signature": "t a -\u003e (Int, Int)",
          "source": "src/Numeric-AD-Internal-Classes.html#floatRange1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "floatRange1",
          "normalized": "a b-\u003e(Int,Int)",
          "package": "ad",
          "partial": "Range",
          "signature": "t a-\u003e(Int,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:floatRange1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "fromEnum1",
          "package": "ad",
          "signature": "t a -\u003e Int",
          "source": "src/Numeric-AD-Internal-Classes.html#fromEnum1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "fromEnum1",
          "normalized": "a b-\u003eInt",
          "package": "ad",
          "partial": "Enum",
          "signature": "t a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:fromEnum1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "fromInteger1",
          "package": "ad",
          "signature": "Integer -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#fromInteger1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "fromInteger1",
          "normalized": "Integer-\u003ea b",
          "package": "ad",
          "partial": "Integer",
          "signature": "Integer-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:fromInteger1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "fromRational1",
          "package": "ad",
          "signature": "Rational -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#fromRational1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "fromRational1",
          "normalized": "Rational-\u003ea b",
          "package": "ad",
          "partial": "Rational",
          "signature": "Rational-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:fromRational1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "inverf1",
          "package": "ad",
          "signature": "t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#inverf1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "inverf1",
          "normalized": "a b-\u003ea b",
          "package": "ad",
          "signature": "t a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:inverf1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "inverfc1",
          "package": "ad",
          "signature": "t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#inverfc1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "inverfc1",
          "normalized": "a b-\u003ea b",
          "package": "ad",
          "signature": "t a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:inverfc1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "invnormcdf1",
          "package": "ad",
          "signature": "t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#invnormcdf1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "invnormcdf1",
          "normalized": "a b-\u003ea b",
          "package": "ad",
          "signature": "t a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:invnormcdf1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eallowed to return False for items with a zero derivative, but we'll give more NaNs than strictly necessary\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Classes",
          "name": "isKnownConstant",
          "package": "ad",
          "signature": "t a -\u003e Bool",
          "source": "src/Numeric-AD-Internal-Classes.html#isKnownConstant",
          "type": "method"
        },
        "index": {
          "description": "allowed to return False for items with zero derivative but we ll give more NaNs than strictly necessary",
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "isKnownConstant",
          "normalized": "a b-\u003eBool",
          "package": "ad",
          "partial": "Known Constant",
          "signature": "t a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:isKnownConstant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eallowed to return False for zero, but we give more NaN's than strictly necessary then\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Classes",
          "name": "isKnownZero",
          "package": "ad",
          "signature": "t a -\u003e Bool",
          "source": "src/Numeric-AD-Internal-Classes.html#isKnownZero",
          "type": "method"
        },
        "index": {
          "description": "allowed to return False for zero but we give more NaN than strictly necessary then",
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "isKnownZero",
          "normalized": "a b-\u003eBool",
          "package": "ad",
          "partial": "Known Zero",
          "signature": "t a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:isKnownZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "isNaN1",
          "package": "ad",
          "signature": "t a -\u003e Bool",
          "source": "src/Numeric-AD-Internal-Classes.html#isNaN1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "isNaN1",
          "normalized": "a b-\u003eBool",
          "package": "ad",
          "partial": "Na",
          "signature": "t a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:isNaN1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "iso",
          "package": "ad",
          "signature": "f a -\u003e f b",
          "source": "src/Numeric-AD-Internal-Classes.html#iso",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "iso",
          "normalized": "a b-\u003ea c",
          "package": "ad",
          "signature": "f a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "lift1",
          "package": "ad",
          "signature": "(a -\u003e a) -\u003e (D t a -\u003e D t a) -\u003e t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#lift1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "lift1",
          "normalized": "(a-\u003ea)-\u003e(D b a-\u003eD b a)-\u003eb a-\u003eb a",
          "package": "ad",
          "signature": "(a-\u003ea)-\u003e(D t a-\u003eD t a)-\u003et a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:lift1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "lift1_",
          "package": "ad",
          "signature": "(a -\u003e a) -\u003e (D t a -\u003e D t a -\u003e D t a) -\u003e t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#lift1_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "lift1_",
          "normalized": "(a-\u003ea)-\u003e(D b a-\u003eD b a-\u003eD b a)-\u003eb a-\u003eb a",
          "package": "ad",
          "signature": "(a-\u003ea)-\u003e(D t a-\u003eD t a-\u003eD t a)-\u003et a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:lift1_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "lift2",
          "package": "ad",
          "signature": "(a -\u003e a -\u003e a) -\u003e (D t a -\u003e D t a -\u003e (D t a, D t a)) -\u003e t a -\u003e t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#lift2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "lift2",
          "normalized": "(a-\u003ea-\u003ea)-\u003e(D b a-\u003eD b a-\u003e(D b a,D b a))-\u003eb a-\u003eb a-\u003eb a",
          "package": "ad",
          "signature": "(a-\u003ea-\u003ea)-\u003e(D t a-\u003eD t a-\u003e(D t a,D t a))-\u003et a-\u003et a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:lift2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "lift2_",
          "package": "ad",
          "signature": "(a -\u003e a -\u003e a) -\u003e (D t a -\u003e D t a -\u003e D t a -\u003e (D t a, D t a)) -\u003e t a -\u003e t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#lift2_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "lift2_",
          "normalized": "(a-\u003ea-\u003ea)-\u003e(D b a-\u003eD b a-\u003eD b a-\u003e(D b a,D b a))-\u003eb a-\u003eb a-\u003eb a",
          "package": "ad",
          "signature": "(a-\u003ea-\u003ea)-\u003e(D t a-\u003eD t a-\u003eD t a-\u003e(D t a,D t a))-\u003et a-\u003et a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:lift2_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "maxBound1",
          "package": "ad",
          "signature": "t a",
          "source": "src/Numeric-AD-Internal-Classes.html#maxBound1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "maxBound1",
          "package": "ad",
          "partial": "Bound",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:maxBound1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "minBound1",
          "package": "ad",
          "signature": "t a",
          "source": "src/Numeric-AD-Internal-Classes.html#minBound1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "minBound1",
          "package": "ad",
          "partial": "Bound",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:minBound1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "negate1",
          "package": "ad",
          "signature": "t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#negate1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "negate1",
          "normalized": "a b-\u003ea b",
          "package": "ad",
          "signature": "t a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:negate1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "normcdf1",
          "package": "ad",
          "signature": "t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#normcdf1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "normcdf1",
          "normalized": "a b-\u003ea b",
          "package": "ad",
          "signature": "t a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:normcdf1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "one",
          "package": "ad",
          "signature": "t a",
          "source": "src/Numeric-AD-Internal-Classes.html#one",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "one",
          "package": "ad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:one"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "osi",
          "package": "ad",
          "signature": "f b -\u003e f a",
          "source": "src/Numeric-AD-Internal-Classes.html#osi",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "osi",
          "normalized": "a b-\u003ea c",
          "package": "ad",
          "signature": "f b-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:osi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "pi1",
          "package": "ad",
          "signature": "t a",
          "source": "src/Numeric-AD-Internal-Classes.html#pi1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "pi1",
          "package": "ad",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:pi1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "primal",
          "package": "ad",
          "signature": "t a -\u003e a",
          "source": "src/Numeric-AD-Internal-Classes.html#primal",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "primal",
          "normalized": "a b-\u003eb",
          "package": "ad",
          "signature": "t a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:primal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "properFraction1",
          "package": "ad",
          "signature": "t a -\u003e (b, t a)",
          "source": "src/Numeric-AD-Internal-Classes.html#properFraction1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "properFraction1",
          "normalized": "a b-\u003e(c,a b)",
          "package": "ad",
          "partial": "Fraction",
          "signature": "t a-\u003e(b,t a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:properFraction1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "recip1",
          "package": "ad",
          "signature": "t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#recip1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "recip1",
          "normalized": "a b-\u003ea b",
          "package": "ad",
          "signature": "t a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:recip1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "scaleFloat1",
          "package": "ad",
          "signature": "Int -\u003e t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#scaleFloat1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "scaleFloat1",
          "normalized": "Int-\u003ea b-\u003ea b",
          "package": "ad",
          "partial": "Float",
          "signature": "Int-\u003et a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:scaleFloat1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "showsPrec1",
          "package": "ad",
          "signature": "Int -\u003e t a -\u003e ShowS",
          "source": "src/Numeric-AD-Internal-Classes.html#showsPrec1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "showsPrec1",
          "normalized": "Int-\u003ea b-\u003eShowS",
          "package": "ad",
          "partial": "Prec",
          "signature": "Int-\u003et a-\u003eShowS",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:showsPrec1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "significand1",
          "package": "ad",
          "signature": "t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#significand1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "significand1",
          "normalized": "a b-\u003ea b",
          "package": "ad",
          "signature": "t a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:significand1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "sin1",
          "package": "ad",
          "signature": "t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#sin1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "sin1",
          "normalized": "a b-\u003ea b",
          "package": "ad",
          "signature": "t a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:sin1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "sinh1",
          "package": "ad",
          "signature": "t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#sinh1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "sinh1",
          "normalized": "a b-\u003ea b",
          "package": "ad",
          "signature": "t a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:sinh1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "succ1",
          "package": "ad",
          "signature": "t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#succ1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "succ1",
          "normalized": "a b-\u003ea b",
          "package": "ad",
          "signature": "t a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:succ1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "toEnum1",
          "package": "ad",
          "signature": "Int -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#toEnum1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "toEnum1",
          "normalized": "Int-\u003ea b",
          "package": "ad",
          "partial": "Enum",
          "signature": "Int-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:toEnum1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "toRational1",
          "package": "ad",
          "signature": "t a -\u003e Rational",
          "source": "src/Numeric-AD-Internal-Classes.html#toRational1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "toRational1",
          "normalized": "a b-\u003eRational",
          "package": "ad",
          "partial": "Rational",
          "signature": "t a-\u003eRational",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:toRational1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "truncate1",
          "package": "ad",
          "signature": "t a -\u003e b",
          "source": "src/Numeric-AD-Internal-Classes.html#truncate1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "truncate1",
          "normalized": "a b-\u003ec",
          "package": "ad",
          "signature": "t a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:truncate1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Classes",
          "name": "unary",
          "package": "ad",
          "signature": "(a -\u003e a) -\u003e D t a -\u003e t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#unary",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "unary",
          "normalized": "(a-\u003ea)-\u003eD b a-\u003eb a-\u003eb a",
          "package": "ad",
          "signature": "(a-\u003ea)-\u003eD t a-\u003et a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:unary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e 'zero' = 'lift' 0\n\u003c/pre\u003e",
          "module": "Numeric.AD.Internal.Classes",
          "name": "zero",
          "package": "ad",
          "signature": "t a",
          "source": "src/Numeric-AD-Internal-Classes.html#zero",
          "type": "method"
        },
        "index": {
          "description": "zero lift",
          "hierarchy": "Numeric AD Internal Classes",
          "module": "Numeric.AD.Internal.Classes",
          "name": "zero",
          "package": "ad",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Classes.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCombinators used internally by \u003ccode\u003eNumeric.AD\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.AD.Internal.Combinators",
          "name": "Combinators",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Combinators.html",
          "type": "module"
        },
        "index": {
          "description": "Combinators used internally by Numeric.AD",
          "hierarchy": "Numeric AD Internal Combinators",
          "module": "Numeric.AD.Internal.Combinators",
          "name": "Combinators",
          "package": "ad",
          "partial": "Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Combinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZip a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e with a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e g\u003c/code\u003e assuming \u003ccode\u003ef\u003c/code\u003e, using a default value after \u003ccode\u003ef\u003c/code\u003e is exhausted.\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Combinators",
          "name": "zipWithDefaultT",
          "package": "ad",
          "signature": "a -\u003e (a -\u003e b -\u003e c) -\u003e f a -\u003e g b -\u003e g c",
          "source": "src/Numeric-AD-Internal-Combinators.html#zipWithDefaultT",
          "type": "function"
        },
        "index": {
          "description": "Zip Foldable with Traversable assuming using default value after is exhausted",
          "hierarchy": "Numeric AD Internal Combinators",
          "module": "Numeric.AD.Internal.Combinators",
          "name": "zipWithDefaultT",
          "normalized": "a-\u003e(a-\u003eb-\u003ec)-\u003ed a-\u003ee b-\u003ee c",
          "package": "ad",
          "partial": "With Default",
          "signature": "a-\u003e(a-\u003eb-\u003ec)-\u003ef a-\u003eg b-\u003eg c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Combinators.html#v:zipWithDefaultT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZip a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e with a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e g\u003c/code\u003e assuming \u003ccode\u003ef\u003c/code\u003e has at least as many entries as \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Combinators",
          "name": "zipWithT",
          "package": "ad",
          "signature": "(a -\u003e b -\u003e c) -\u003e f a -\u003e g b -\u003e g c",
          "source": "src/Numeric-AD-Internal-Combinators.html#zipWithT",
          "type": "function"
        },
        "index": {
          "description": "Zip Foldable with Traversable assuming has at least as many entries as",
          "hierarchy": "Numeric AD Internal Combinators",
          "module": "Numeric.AD.Internal.Combinators",
          "name": "zipWithT",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ee b-\u003ee c",
          "package": "ad",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003ef a-\u003eg b-\u003eg c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Combinators.html#v:zipWithT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Composition",
          "name": "Composition",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Composition.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Composition",
          "module": "Numeric.AD.Internal.Composition",
          "name": "Composition",
          "package": "ad",
          "partial": "Composition",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Composition.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunctor composition, used to nest the use of jacobian and grad\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Composition",
          "name": "ComposeFunctor",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Composition.html#ComposeFunctor",
          "type": "newtype"
        },
        "index": {
          "description": "Functor composition used to nest the use of jacobian and grad",
          "hierarchy": "Numeric AD Internal Composition",
          "module": "Numeric.AD.Internal.Composition",
          "name": "ComposeFunctor",
          "package": "ad",
          "partial": "Compose Functor",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Composition.html#t:ComposeFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe composition of two AD modes is an AD mode in its own right\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Composition",
          "name": "ComposeMode",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Composition.html#ComposeMode",
          "type": "newtype"
        },
        "index": {
          "description": "The composition of two AD modes is an AD mode in its own right",
          "hierarchy": "Numeric AD Internal Composition",
          "module": "Numeric.AD.Internal.Composition",
          "name": "ComposeMode",
          "package": "ad",
          "partial": "Compose Mode",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Composition.html#t:ComposeMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Composition",
          "name": "ComposeFunctor",
          "package": "ad",
          "signature": "ComposeFunctor",
          "source": "src/Numeric-AD-Internal-Composition.html#ComposeFunctor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Composition",
          "module": "Numeric.AD.Internal.Composition",
          "name": "ComposeFunctor",
          "package": "ad",
          "partial": "Compose Functor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Composition.html#v:ComposeFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Composition",
          "name": "ComposeMode",
          "package": "ad",
          "signature": "ComposeMode",
          "source": "src/Numeric-AD-Internal-Composition.html#ComposeMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Composition",
          "module": "Numeric.AD.Internal.Composition",
          "name": "ComposeMode",
          "package": "ad",
          "partial": "Compose Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Composition.html#v:ComposeMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Composition",
          "name": "composeMode",
          "package": "ad",
          "signature": "AD f (AD g a) -\u003e AD (ComposeMode f g) a",
          "source": "src/Numeric-AD-Internal-Composition.html#composeMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Composition",
          "module": "Numeric.AD.Internal.Composition",
          "name": "composeMode",
          "normalized": "AD a(AD b c)-\u003eAD(ComposeMode a b)c",
          "package": "ad",
          "partial": "Mode",
          "signature": "AD f(AD g a)-\u003eAD(ComposeMode f g)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Composition.html#v:composeMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Composition",
          "name": "decomposeFunctor",
          "package": "ad",
          "signature": "f (g a)",
          "source": "src/Numeric-AD-Internal-Composition.html#ComposeFunctor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Composition",
          "module": "Numeric.AD.Internal.Composition",
          "name": "decomposeFunctor",
          "package": "ad",
          "partial": "Functor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Composition.html#v:decomposeFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Composition",
          "name": "decomposeMode",
          "package": "ad",
          "signature": "AD (ComposeMode f g) a -\u003e AD f (AD g a)",
          "source": "src/Numeric-AD-Internal-Composition.html#decomposeMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Composition",
          "module": "Numeric.AD.Internal.Composition",
          "name": "decomposeMode",
          "normalized": "AD(ComposeMode a b)c-\u003eAD a(AD b c)",
          "package": "ad",
          "partial": "Mode",
          "signature": "AD(ComposeMode f g)a-\u003eAD f(AD g a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Composition.html#v:decomposeMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Composition",
          "name": "runComposeMode",
          "package": "ad",
          "signature": "f (AD g a)",
          "source": "src/Numeric-AD-Internal-Composition.html#ComposeMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Composition",
          "module": "Numeric.AD.Internal.Composition",
          "name": "runComposeMode",
          "package": "ad",
          "partial": "Compose Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Composition.html#v:runComposeMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDense Forward AD. Useful when the result involves the majority of the input\n elements. Do not use for \u003ccode\u003e\u003ca\u003ehessian\u003c/a\u003e\u003c/code\u003e and beyond, since\n they only contain a small number of unique \u003ccode\u003en\u003c/code\u003eth derivatives --\n \u003ccode\u003e(n + k - 1) \u003ccode\u003echoose\u003c/code\u003e k\u003c/code\u003e for functions of \u003ccode\u003ek\u003c/code\u003e inputs rather than the\n \u003ccode\u003ek^n\u003c/code\u003e that would be generated by using \u003ccode\u003e\u003ca\u003eDense\u003c/a\u003e\u003c/code\u003e, not to mention the redundant\n intermediate derivatives that would be\n calculated over and over during that process!\n\u003c/p\u003e\u003cp\u003eAssumes all instances of \u003ccode\u003ef\u003c/code\u003e have the same number of elements.\n\u003c/p\u003e\u003cp\u003eNB: We don't need the full power of \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e here, we could get\n by with a notion of zippable that can plug in 0's for the missing\n entries. This might allow for gradients where \u003ccode\u003ef\u003c/code\u003e has exponentials like \u003ccode\u003e((-\u003e) a)\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.AD.Internal.Dense",
          "name": "Dense",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Dense.html",
          "type": "module"
        },
        "index": {
          "description": "Dense Forward AD Useful when the result involves the majority of the input elements Do not use for hessian and beyond since they only contain small number of unique th derivatives choose for functions of inputs rather than the that would be generated by using Dense not to mention the redundant intermediate derivatives that would be calculated over and over during that process Assumes all instances of have the same number of elements NB We don need the full power of Traversable here we could get by with notion of zippable that can plug in for the missing entries This might allow for gradients where has exponentials like",
          "hierarchy": "Numeric AD Internal Dense",
          "module": "Numeric.AD.Internal.Dense",
          "name": "Dense",
          "package": "ad",
          "partial": "Dense",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Dense.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Dense",
          "name": "Dense",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Dense.html#Dense",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Dense",
          "module": "Numeric.AD.Internal.Dense",
          "name": "Dense",
          "package": "ad",
          "partial": "Dense",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Dense.html#t:Dense"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Dense",
          "name": "Dense",
          "package": "ad",
          "signature": "Dense !a (f a)",
          "source": "src/Numeric-AD-Internal-Dense.html#Dense",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Dense",
          "module": "Numeric.AD.Internal.Dense",
          "name": "Dense",
          "package": "ad",
          "partial": "Dense",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Dense.html#v:Dense"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Dense",
          "name": "Lift",
          "package": "ad",
          "signature": "Lift !a",
          "source": "src/Numeric-AD-Internal-Dense.html#Dense",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Dense",
          "module": "Numeric.AD.Internal.Dense",
          "name": "Lift",
          "package": "ad",
          "partial": "Lift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Dense.html#v:Lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Dense",
          "name": "Zero",
          "package": "ad",
          "signature": "Zero",
          "source": "src/Numeric-AD-Internal-Dense.html#Dense",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Dense",
          "module": "Numeric.AD.Internal.Dense",
          "name": "Zero",
          "package": "ad",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Dense.html#v:Zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Dense",
          "name": "apply",
          "package": "ad",
          "signature": "(f (AD (Dense f) a) -\u003e b) -\u003e f a -\u003e b",
          "source": "src/Numeric-AD-Internal-Dense.html#apply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Dense",
          "module": "Numeric.AD.Internal.Dense",
          "name": "apply",
          "normalized": "(a(AD(Dense a)b)-\u003ec)-\u003ea b-\u003ec",
          "package": "ad",
          "signature": "(f(AD(Dense f)a)-\u003eb)-\u003ef a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Dense.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Dense",
          "name": "ds",
          "package": "ad",
          "signature": "f a -\u003e AD (Dense f) a -\u003e f a",
          "source": "src/Numeric-AD-Internal-Dense.html#ds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Dense",
          "module": "Numeric.AD.Internal.Dense",
          "name": "ds",
          "normalized": "a b-\u003eAD(Dense a)b-\u003ea b",
          "package": "ad",
          "signature": "f a-\u003eAD(Dense f)a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Dense.html#v:ds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Dense",
          "name": "ds'",
          "package": "ad",
          "signature": "f a -\u003e AD (Dense f) a -\u003e (a, f a)",
          "source": "src/Numeric-AD-Internal-Dense.html#ds%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Dense",
          "module": "Numeric.AD.Internal.Dense",
          "name": "ds'",
          "normalized": "a b-\u003eAD(Dense a)b-\u003e(b,a b)",
          "package": "ad",
          "signature": "f a-\u003eAD(Dense f)a-\u003e(a,f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Dense.html#v:ds-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Dense",
          "name": "vars",
          "package": "ad",
          "signature": "f a -\u003e f (AD (Dense f) a)",
          "source": "src/Numeric-AD-Internal-Dense.html#vars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Dense",
          "module": "Numeric.AD.Internal.Dense",
          "name": "vars",
          "normalized": "a b-\u003ea(AD(Dense a)b)",
          "package": "ad",
          "signature": "f a-\u003ef(AD(Dense f)a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Dense.html#v:vars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnsafe and often partial combinators intended for internal usage.\n\u003c/p\u003e\u003cp\u003eHandle with care.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.AD.Internal.Forward",
          "name": "Forward",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Forward.html",
          "type": "module"
        },
        "index": {
          "description": "Unsafe and often partial combinators intended for internal usage Handle with care",
          "hierarchy": "Numeric AD Internal Forward",
          "module": "Numeric.AD.Internal.Forward",
          "name": "Forward",
          "package": "ad",
          "partial": "Forward",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eForward\u003c/a\u003e\u003c/code\u003e mode AD\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Forward",
          "name": "Forward",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Forward.html#Forward",
          "type": "data"
        },
        "index": {
          "description": "Forward mode AD",
          "hierarchy": "Numeric AD Internal Forward",
          "module": "Numeric.AD.Internal.Forward",
          "name": "Forward",
          "package": "ad",
          "partial": "Forward",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#t:Forward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Forward",
          "name": "Forward",
          "package": "ad",
          "signature": "Forward !a a",
          "source": "src/Numeric-AD-Internal-Forward.html#Forward",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Forward",
          "module": "Numeric.AD.Internal.Forward",
          "name": "Forward",
          "package": "ad",
          "partial": "Forward",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#v:Forward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Forward",
          "name": "Lift",
          "package": "ad",
          "signature": "Lift !a",
          "source": "src/Numeric-AD-Internal-Forward.html#Forward",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Forward",
          "module": "Numeric.AD.Internal.Forward",
          "name": "Lift",
          "package": "ad",
          "partial": "Lift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#v:Lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Forward",
          "name": "Zero",
          "package": "ad",
          "signature": "Zero",
          "source": "src/Numeric-AD-Internal-Forward.html#Forward",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Forward",
          "module": "Numeric.AD.Internal.Forward",
          "name": "Zero",
          "package": "ad",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#v:Zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Forward",
          "name": "apply",
          "package": "ad",
          "signature": "(AD Forward a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Numeric-AD-Internal-Forward.html#apply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Forward",
          "module": "Numeric.AD.Internal.Forward",
          "name": "apply",
          "normalized": "(AD Forward a-\u003eb)-\u003ea-\u003eb",
          "package": "ad",
          "signature": "(AD Forward a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Forward",
          "name": "bind",
          "package": "ad",
          "signature": "(f (AD Forward a) -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Numeric-AD-Internal-Forward.html#bind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Forward",
          "module": "Numeric.AD.Internal.Forward",
          "name": "bind",
          "normalized": "(a(AD Forward b)-\u003ec)-\u003ea b-\u003ea c",
          "package": "ad",
          "signature": "(f(AD Forward a)-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#v:bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Forward",
          "name": "bind'",
          "package": "ad",
          "signature": "(f (AD Forward a) -\u003e b) -\u003e f a -\u003e (b, f b)",
          "source": "src/Numeric-AD-Internal-Forward.html#bind%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Forward",
          "module": "Numeric.AD.Internal.Forward",
          "name": "bind'",
          "normalized": "(a(AD Forward b)-\u003ec)-\u003ea b-\u003e(c,a c)",
          "package": "ad",
          "signature": "(f(AD Forward a)-\u003eb)-\u003ef a-\u003e(b,f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#v:bind-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Forward",
          "name": "bindWith",
          "package": "ad",
          "signature": "(a -\u003e b -\u003e c) -\u003e (f (AD Forward a) -\u003e b) -\u003e f a -\u003e f c",
          "source": "src/Numeric-AD-Internal-Forward.html#bindWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Forward",
          "module": "Numeric.AD.Internal.Forward",
          "name": "bindWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d(AD Forward a)-\u003eb)-\u003ed a-\u003ed c",
          "package": "ad",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003e(f(AD Forward a)-\u003eb)-\u003ef a-\u003ef c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#v:bindWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Forward",
          "name": "bindWith'",
          "package": "ad",
          "signature": "(a -\u003e b -\u003e c) -\u003e (f (AD Forward a) -\u003e b) -\u003e f a -\u003e (b, f c)",
          "source": "src/Numeric-AD-Internal-Forward.html#bindWith%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Forward",
          "module": "Numeric.AD.Internal.Forward",
          "name": "bindWith'",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(d(AD Forward a)-\u003eb)-\u003ed a-\u003e(b,d c)",
          "package": "ad",
          "partial": "With'",
          "signature": "(a-\u003eb-\u003ec)-\u003e(f(AD Forward a)-\u003eb)-\u003ef a-\u003e(b,f c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#v:bindWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Forward",
          "name": "bundle",
          "package": "ad",
          "signature": "a -\u003e a -\u003e AD Forward a",
          "source": "src/Numeric-AD-Internal-Forward.html#bundle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Forward",
          "module": "Numeric.AD.Internal.Forward",
          "name": "bundle",
          "normalized": "a-\u003ea-\u003eAD Forward a",
          "package": "ad",
          "signature": "a-\u003ea-\u003eAD Forward a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#v:bundle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the \u003ccode\u003e\u003ca\u003etangent\u003c/a\u003e\u003c/code\u003e using forward mode AD.\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Forward",
          "name": "tangent",
          "package": "ad",
          "signature": "AD Forward a -\u003e a",
          "source": "src/Numeric-AD-Internal-Forward.html#tangent",
          "type": "function"
        },
        "index": {
          "description": "Calculate the tangent using forward mode AD",
          "hierarchy": "Numeric AD Internal Forward",
          "module": "Numeric.AD.Internal.Forward",
          "name": "tangent",
          "normalized": "AD Forward a-\u003ea",
          "package": "ad",
          "signature": "AD Forward a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#v:tangent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Forward",
          "name": "transposeWith",
          "package": "ad",
          "signature": "(b -\u003e f a -\u003e c) -\u003e f (g a) -\u003e g b -\u003e g c",
          "source": "src/Numeric-AD-Internal-Forward.html#transposeWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Forward",
          "module": "Numeric.AD.Internal.Forward",
          "name": "transposeWith",
          "normalized": "(a-\u003eb c-\u003ed)-\u003eb(e c)-\u003ee a-\u003ee d",
          "package": "ad",
          "partial": "With",
          "signature": "(b-\u003ef a-\u003ec)-\u003ef(g a)-\u003eg b-\u003eg c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#v:transposeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Forward",
          "name": "unbundle",
          "package": "ad",
          "signature": "AD Forward a -\u003e (a, a)",
          "source": "src/Numeric-AD-Internal-Forward.html#unbundle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Forward",
          "module": "Numeric.AD.Internal.Forward",
          "name": "unbundle",
          "normalized": "AD Forward a-\u003e(a,a)",
          "package": "ad",
          "signature": "AD Forward a-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Forward.html#v:unbundle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides reverse-mode Automatic Differentiation implementation using\n linear time topological sorting after the fact.\n\u003c/p\u003e\u003cp\u003eFor this form of reverse-mode AD we use \u003ccode\u003e\u003ca\u003eStableName\u003c/a\u003e\u003c/code\u003e to recover\n sharing information from the tape to avoid combinatorial explosion, and thus\n run asymptotically faster than it could without such sharing information, but the use\n of side-effects contained herein is benign.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.AD.Internal.Kahn",
          "name": "Kahn",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Kahn.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides reverse-mode Automatic Differentiation implementation using linear time topological sorting after the fact For this form of reverse-mode AD we use StableName to recover sharing information from the tape to avoid combinatorial explosion and thus run asymptotically faster than it could without such sharing information but the use of side-effects contained herein is benign",
          "hierarchy": "Numeric AD Internal Kahn",
          "module": "Numeric.AD.Internal.Kahn",
          "name": "Kahn",
          "package": "ad",
          "partial": "Kahn",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Kahn",
          "name": "Grad",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Kahn.html#Grad",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Kahn",
          "module": "Numeric.AD.Internal.Kahn",
          "name": "Grad",
          "package": "ad",
          "partial": "Grad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#t:Grad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eKahn\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e using reverse-mode automatic differentiation that provides fast \u003ccode\u003ediffFU\u003c/code\u003e, \u003ccode\u003ediff2FU\u003c/code\u003e, \u003ccode\u003egrad\u003c/code\u003e, \u003ccode\u003egrad2\u003c/code\u003e and a fast \u003ccode\u003ejacobian\u003c/code\u003e when you have a significantly smaller number of outputs than inputs.\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Kahn",
          "name": "Kahn",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Kahn.html#Kahn",
          "type": "newtype"
        },
        "index": {
          "description": "Kahn is Mode using reverse-mode automatic differentiation that provides fast diffFU diff2FU grad grad2 and fast jacobian when you have significantly smaller number of outputs than inputs",
          "hierarchy": "Numeric AD Internal Kahn",
          "module": "Numeric.AD.Internal.Kahn",
          "name": "Kahn",
          "package": "ad",
          "partial": "Kahn",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#t:Kahn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eTape\u003c/code\u003e records the information needed back propagate from the output to each input during reverse \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e AD.\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Kahn",
          "name": "Tape",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Kahn.html#Tape",
          "type": "data"
        },
        "index": {
          "description": "Tape records the information needed back propagate from the output to each input during reverse Mode AD",
          "hierarchy": "Numeric AD Internal Kahn",
          "module": "Numeric.AD.Internal.Kahn",
          "name": "Tape",
          "package": "ad",
          "partial": "Tape",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#t:Tape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Kahn",
          "name": "Binary",
          "package": "ad",
          "signature": "Binary !a a a t t",
          "source": "src/Numeric-AD-Internal-Kahn.html#Tape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Kahn",
          "module": "Numeric.AD.Internal.Kahn",
          "name": "Binary",
          "package": "ad",
          "partial": "Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:Binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Kahn",
          "name": "Kahn",
          "package": "ad",
          "signature": "Kahn (Tape a (Kahn a))",
          "source": "src/Numeric-AD-Internal-Kahn.html#Kahn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Kahn",
          "module": "Numeric.AD.Internal.Kahn",
          "name": "Kahn",
          "package": "ad",
          "partial": "Kahn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:Kahn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Kahn",
          "name": "Lift",
          "package": "ad",
          "signature": "Lift !a",
          "source": "src/Numeric-AD-Internal-Kahn.html#Tape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Kahn",
          "module": "Numeric.AD.Internal.Kahn",
          "name": "Lift",
          "package": "ad",
          "partial": "Lift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:Lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Kahn",
          "name": "Unary",
          "package": "ad",
          "signature": "Unary !a a t",
          "source": "src/Numeric-AD-Internal-Kahn.html#Tape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Kahn",
          "module": "Numeric.AD.Internal.Kahn",
          "name": "Unary",
          "package": "ad",
          "partial": "Unary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:Unary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Kahn",
          "name": "Var",
          "package": "ad",
          "signature": "Var !a !Int",
          "source": "src/Numeric-AD-Internal-Kahn.html#Tape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Kahn",
          "module": "Numeric.AD.Internal.Kahn",
          "name": "Var",
          "package": "ad",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Kahn",
          "name": "Zero",
          "package": "ad",
          "signature": "Zero",
          "source": "src/Numeric-AD-Internal-Kahn.html#Tape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Kahn",
          "module": "Numeric.AD.Internal.Kahn",
          "name": "Zero",
          "package": "ad",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:Zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Kahn",
          "name": "derivative",
          "package": "ad",
          "signature": "AD Kahn a -\u003e a",
          "source": "src/Numeric-AD-Internal-Kahn.html#derivative",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Kahn",
          "module": "Numeric.AD.Internal.Kahn",
          "name": "derivative",
          "normalized": "AD Kahn a-\u003ea",
          "package": "ad",
          "signature": "AD Kahn a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:derivative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Kahn",
          "name": "derivative'",
          "package": "ad",
          "signature": "AD Kahn a -\u003e (a, a)",
          "source": "src/Numeric-AD-Internal-Kahn.html#derivative%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Kahn",
          "module": "Numeric.AD.Internal.Kahn",
          "name": "derivative'",
          "normalized": "AD Kahn a-\u003e(a,a)",
          "package": "ad",
          "signature": "AD Kahn a-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:derivative-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Kahn",
          "name": "pack",
          "package": "ad",
          "signature": "i -\u003e [AD Kahn a] -\u003e AD Kahn a",
          "source": "src/Numeric-AD-Internal-Kahn.html#pack",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Kahn",
          "module": "Numeric.AD.Internal.Kahn",
          "name": "pack",
          "normalized": "a-\u003e[AD Kahn b]-\u003eAD Kahn b",
          "package": "ad",
          "signature": "i-\u003e[AD Kahn a]-\u003eAD Kahn a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003epartials\u003c/a\u003e\u003c/code\u003e given bounds for the variable IDs.\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Kahn",
          "name": "partialArray",
          "package": "ad",
          "signature": "(Int, Int) -\u003e AD Kahn a -\u003e Array Int a",
          "source": "src/Numeric-AD-Internal-Kahn.html#partialArray",
          "type": "function"
        },
        "index": {
          "description": "Return an Array of partials given bounds for the variable IDs",
          "hierarchy": "Numeric AD Internal Kahn",
          "module": "Numeric.AD.Internal.Kahn",
          "name": "partialArray",
          "normalized": "(Int,Int)-\u003eAD Kahn a-\u003eArray Int a",
          "package": "ad",
          "partial": "Array",
          "signature": "(Int,Int)-\u003eAD Kahn a-\u003eArray Int a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:partialArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e of sparse partials\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Kahn",
          "name": "partialMap",
          "package": "ad",
          "signature": "AD Kahn a -\u003e IntMap a",
          "source": "src/Numeric-AD-Internal-Kahn.html#partialMap",
          "type": "function"
        },
        "index": {
          "description": "Return an IntMap of sparse partials",
          "hierarchy": "Numeric AD Internal Kahn",
          "module": "Numeric.AD.Internal.Kahn",
          "name": "partialMap",
          "normalized": "AD Kahn a-\u003eIntMap a",
          "package": "ad",
          "partial": "Map",
          "signature": "AD Kahn a-\u003eIntMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:partialMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis returns a list of contributions to the partials.\n The variable ids returned in the list are likely \u003cem\u003enot\u003c/em\u003e unique!\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Kahn",
          "name": "partials",
          "package": "ad",
          "signature": "AD Kahn a -\u003e [(Int, a)]",
          "source": "src/Numeric-AD-Internal-Kahn.html#partials",
          "type": "function"
        },
        "index": {
          "description": "This returns list of contributions to the partials The variable ids returned in the list are likely not unique",
          "hierarchy": "Numeric AD Internal Kahn",
          "module": "Numeric.AD.Internal.Kahn",
          "name": "partials",
          "normalized": "AD Kahn a-\u003e[(Int,a)]",
          "package": "ad",
          "signature": "AD Kahn a-\u003e[(Int,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:partials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Kahn",
          "name": "unpack",
          "package": "ad",
          "signature": "([a] -\u003e [a]) -\u003e o",
          "source": "src/Numeric-AD-Internal-Kahn.html#unpack",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Kahn",
          "module": "Numeric.AD.Internal.Kahn",
          "name": "unpack",
          "normalized": "([a]-\u003e[a])-\u003eb",
          "package": "ad",
          "signature": "([a]-\u003e[a])-\u003eo",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Kahn",
          "name": "unpack'",
          "package": "ad",
          "signature": "([a] -\u003e (a, [a])) -\u003e o'",
          "source": "src/Numeric-AD-Internal-Kahn.html#unpack%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Kahn",
          "module": "Numeric.AD.Internal.Kahn",
          "name": "unpack'",
          "normalized": "([a]-\u003e(a,[a]))-\u003eb",
          "package": "ad",
          "signature": "([a]-\u003e(a,[a]))-\u003eo'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:unpack-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.AD.Internal.Kahn\",\"Numeric.AD.Mode.Kahn\",\"Numeric.AD.Variadic.Kahn\",\"Numeric.AD.Variadic\"]",
          "name": "vgrad",
          "package": "ad",
          "signature": "i -\u003e o",
          "source": "src/Numeric-AD-Internal-Kahn.html#vgrad",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:vgrad\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:vgrad\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic-Kahn.html#v:vgrad\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic.html#v:vgrad\"]"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Kahn",
          "module": "Numeric.AD.Internal.Kahn",
          "name": "vgrad",
          "normalized": "a-\u003eb",
          "package": "ad",
          "signature": "i-\u003eo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:vgrad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.AD.Internal.Kahn\",\"Numeric.AD.Mode.Kahn\",\"Numeric.AD.Variadic.Kahn\",\"Numeric.AD.Variadic\"]",
          "name": "vgrad'",
          "package": "ad",
          "signature": "i -\u003e o'",
          "source": "src/Numeric-AD-Internal-Kahn.html#vgrad%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:vgrad-39-\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:vgrad-39-\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic-Kahn.html#v:vgrad-39-\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic.html#v:vgrad-39-\"]"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Kahn",
          "module": "Numeric.AD.Internal.Kahn",
          "name": "vgrad'",
          "normalized": "a-\u003eb",
          "package": "ad",
          "signature": "i-\u003eo'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Kahn.html#v:vgrad-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReverse-Mode Automatic Differentiation using a single Wengert list (or \"tape\").\n\u003c/p\u003e\u003cp\u003eThis version uses \u003ccode\u003eData.Reflection\u003c/code\u003e to find and update the tape.\n\u003c/p\u003e\u003cp\u003eThis is asymptotically faster than using \u003ccode\u003eReverse\u003c/code\u003e, which\n is forced to reify and topologically sort the graph, but it requires\n a fairly expensive rendezvous during construction when updated using\n multiple threads.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.AD.Internal.Reverse",
          "name": "Reverse",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Reverse.html",
          "type": "module"
        },
        "index": {
          "description": "Reverse-Mode Automatic Differentiation using single Wengert list or tape This version uses Data.Reflection to find and update the tape This is asymptotically faster than using Reverse which is forced to reify and topologically sort the graph but it requires fairly expensive rendezvous during construction when updated using multiple threads",
          "hierarchy": "Numeric AD Internal Reverse",
          "module": "Numeric.AD.Internal.Reverse",
          "name": "Reverse",
          "package": "ad",
          "partial": "Reverse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Reverse",
          "name": "Cells",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Reverse.html#Cells",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Reverse",
          "module": "Numeric.AD.Internal.Reverse",
          "name": "Cells",
          "package": "ad",
          "partial": "Cells",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#t:Cells"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Reverse",
          "name": "Head",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Reverse.html#Head",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Reverse",
          "module": "Numeric.AD.Internal.Reverse",
          "name": "Head",
          "package": "ad",
          "partial": "Head",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#t:Head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Reverse",
          "name": "Reverse",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Reverse.html#Reverse",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Reverse",
          "module": "Numeric.AD.Internal.Reverse",
          "name": "Reverse",
          "package": "ad",
          "partial": "Reverse",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#t:Reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Reverse",
          "name": "Tape",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Reverse.html#Tape",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Reverse",
          "module": "Numeric.AD.Internal.Reverse",
          "name": "Tape",
          "package": "ad",
          "partial": "Tape",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#t:Tape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Reverse",
          "name": "Binary",
          "package": "ad",
          "signature": "Int -\u003e !Int -\u003e a -\u003e a -\u003e Cells -\u003e Cells",
          "source": "src/Numeric-AD-Internal-Reverse.html#Cells",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Reverse",
          "module": "Numeric.AD.Internal.Reverse",
          "name": "Binary",
          "normalized": "Int-\u003eInt-\u003ea-\u003ea-\u003eCells-\u003eCells",
          "package": "ad",
          "partial": "Binary",
          "signature": "Int-\u003eInt-\u003ea-\u003ea-\u003eCells-\u003eCells",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:Binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Reverse",
          "name": "Head",
          "package": "ad",
          "signature": "Head !Int Cells",
          "source": "src/Numeric-AD-Internal-Reverse.html#Head",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Reverse",
          "module": "Numeric.AD.Internal.Reverse",
          "name": "Head",
          "package": "ad",
          "partial": "Head",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:Head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Reverse",
          "name": "Lift",
          "package": "ad",
          "signature": "a -\u003e Reverse s a",
          "source": "src/Numeric-AD-Internal-Reverse.html#Reverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Reverse",
          "module": "Numeric.AD.Internal.Reverse",
          "name": "Lift",
          "normalized": "a-\u003eReverse b a",
          "package": "ad",
          "partial": "Lift",
          "signature": "a-\u003eReverse s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:Lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Reverse",
          "name": "Nil",
          "package": "ad",
          "signature": "Cells",
          "source": "src/Numeric-AD-Internal-Reverse.html#Cells",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Reverse",
          "module": "Numeric.AD.Internal.Reverse",
          "name": "Nil",
          "package": "ad",
          "partial": "Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Reverse",
          "name": "Reverse",
          "package": "ad",
          "signature": "Int -\u003e a -\u003e Reverse s a",
          "source": "src/Numeric-AD-Internal-Reverse.html#Reverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Reverse",
          "module": "Numeric.AD.Internal.Reverse",
          "name": "Reverse",
          "normalized": "Int-\u003ea-\u003eReverse b a",
          "package": "ad",
          "partial": "Reverse",
          "signature": "Int-\u003ea-\u003eReverse s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:Reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Reverse",
          "name": "Tape",
          "package": "ad",
          "signature": "Tape",
          "source": "src/Numeric-AD-Internal-Reverse.html#Tape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Reverse",
          "module": "Numeric.AD.Internal.Reverse",
          "name": "Tape",
          "package": "ad",
          "partial": "Tape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:Tape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Reverse",
          "name": "Unary",
          "package": "ad",
          "signature": "Int -\u003e a -\u003e Cells -\u003e Cells",
          "source": "src/Numeric-AD-Internal-Reverse.html#Cells",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Reverse",
          "module": "Numeric.AD.Internal.Reverse",
          "name": "Unary",
          "normalized": "Int-\u003ea-\u003eCells-\u003eCells",
          "package": "ad",
          "partial": "Unary",
          "signature": "Int-\u003ea-\u003eCells-\u003eCells",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:Unary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Reverse",
          "name": "Zero",
          "package": "ad",
          "signature": "Reverse s a",
          "source": "src/Numeric-AD-Internal-Reverse.html#Reverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Reverse",
          "module": "Numeric.AD.Internal.Reverse",
          "name": "Zero",
          "package": "ad",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:Zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper that extracts the derivative of a chain when the chain was constructed with one variable.\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Reverse",
          "name": "derivativeOf",
          "package": "ad",
          "signature": "Proxy s -\u003e AD (Reverse s) a -\u003e a",
          "source": "src/Numeric-AD-Internal-Reverse.html#derivativeOf",
          "type": "function"
        },
        "index": {
          "description": "Helper that extracts the derivative of chain when the chain was constructed with one variable",
          "hierarchy": "Numeric AD Internal Reverse",
          "module": "Numeric.AD.Internal.Reverse",
          "name": "derivativeOf",
          "normalized": "Proxy a-\u003eAD(Reverse a)b-\u003eb",
          "package": "ad",
          "partial": "Of",
          "signature": "Proxy s-\u003eAD(Reverse s)a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:derivativeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper that extracts both the primal and derivative of a chain when the chain was constructed with one variable.\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Reverse",
          "name": "derivativeOf'",
          "package": "ad",
          "signature": "Proxy s -\u003e AD (Reverse s) a -\u003e (a, a)",
          "source": "src/Numeric-AD-Internal-Reverse.html#derivativeOf%27",
          "type": "function"
        },
        "index": {
          "description": "Helper that extracts both the primal and derivative of chain when the chain was constructed with one variable",
          "hierarchy": "Numeric AD Internal Reverse",
          "module": "Numeric.AD.Internal.Reverse",
          "name": "derivativeOf'",
          "normalized": "Proxy a-\u003eAD(Reverse a)b-\u003e(b,b)",
          "package": "ad",
          "partial": "Of'",
          "signature": "Proxy s-\u003eAD(Reverse s)a-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:derivativeOf-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Reverse",
          "name": "getTape",
          "package": "ad",
          "signature": "IORef Head",
          "source": "src/Numeric-AD-Internal-Reverse.html#Tape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Reverse",
          "module": "Numeric.AD.Internal.Reverse",
          "name": "getTape",
          "package": "ad",
          "partial": "Tape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:getTape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003epartials\u003c/a\u003e\u003c/code\u003e given bounds for the variable IDs.\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Reverse",
          "name": "partialArrayOf",
          "package": "ad",
          "signature": "Proxy s -\u003e (Int, Int) -\u003e AD (Reverse s) a -\u003e Array Int a",
          "source": "src/Numeric-AD-Internal-Reverse.html#partialArrayOf",
          "type": "function"
        },
        "index": {
          "description": "Return an Array of partials given bounds for the variable IDs",
          "hierarchy": "Numeric AD Internal Reverse",
          "module": "Numeric.AD.Internal.Reverse",
          "name": "partialArrayOf",
          "normalized": "Proxy a-\u003e(Int,Int)-\u003eAD(Reverse a)b-\u003eArray Int b",
          "package": "ad",
          "partial": "Array Of",
          "signature": "Proxy s-\u003e(Int,Int)-\u003eAD(Reverse s)a-\u003eArray Int a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:partialArrayOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn an \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e of sparse partials\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Reverse",
          "name": "partialMapOf",
          "package": "ad",
          "signature": "Proxy s -\u003e AD (Reverse s) a -\u003e IntMap a",
          "source": "src/Numeric-AD-Internal-Reverse.html#partialMapOf",
          "type": "function"
        },
        "index": {
          "description": "Return an IntMap of sparse partials",
          "hierarchy": "Numeric AD Internal Reverse",
          "module": "Numeric.AD.Internal.Reverse",
          "name": "partialMapOf",
          "normalized": "Proxy a-\u003eAD(Reverse a)b-\u003eIntMap b",
          "package": "ad",
          "partial": "Map Of",
          "signature": "Proxy s-\u003eAD(Reverse s)a-\u003eIntMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:partialMapOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the partials from the current chain for a given AD variable.\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Reverse",
          "name": "partials",
          "package": "ad",
          "signature": "AD (Reverse s) a -\u003e [a]",
          "source": "src/Numeric-AD-Internal-Reverse.html#partials",
          "type": "function"
        },
        "index": {
          "description": "Extract the partials from the current chain for given AD variable",
          "hierarchy": "Numeric AD Internal Reverse",
          "module": "Numeric.AD.Internal.Reverse",
          "name": "partials",
          "normalized": "AD(Reverse a)b-\u003e[b]",
          "package": "ad",
          "signature": "AD(Reverse s)a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:partials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a tape that starts with \u003ccode\u003en\u003c/code\u003e variables.\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Reverse",
          "name": "reifyTape",
          "package": "ad",
          "signature": "Proxy s -\u003e r) -\u003e r",
          "source": "src/Numeric-AD-Internal-Reverse.html#reifyTape",
          "type": "function"
        },
        "index": {
          "description": "Construct tape that starts with variables",
          "hierarchy": "Numeric AD Internal Reverse",
          "module": "Numeric.AD.Internal.Reverse",
          "name": "reifyTape",
          "normalized": "Proxy a-\u003eb)-\u003eb",
          "package": "ad",
          "partial": "Tape",
          "signature": "Proxy s-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Reverse.html#v:reifyTape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Sparse",
          "name": "Sparse",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Sparse.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Sparse",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "Sparse",
          "package": "ad",
          "partial": "Sparse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Sparse",
          "name": "Grad",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Sparse.html#Grad",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Sparse",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "Grad",
          "package": "ad",
          "partial": "Grad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#t:Grad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Sparse",
          "name": "Grads",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Sparse.html#Grads",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Sparse",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "Grads",
          "package": "ad",
          "partial": "Grads",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#t:Grads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Sparse",
          "name": "Index",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Sparse.html#Index",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Sparse",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "Index",
          "package": "ad",
          "partial": "Index",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#t:Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe only store partials in sorted order, so the map contained in a partial\n will only contain partials with equal or greater keys to that of the map in\n which it was found. This should be key for efficiently computing sparse hessians.\n there are only (n + k - 1) choose k distinct nth partial derivatives of a\n function with k inputs.\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "Sparse",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Sparse.html#Sparse",
          "type": "data"
        },
        "index": {
          "description": "We only store partials in sorted order so the map contained in partial will only contain partials with equal or greater keys to that of the map in which it was found This should be key for efficiently computing sparse hessians there are only choose distinct nth partial derivatives of function with inputs",
          "hierarchy": "Numeric AD Internal Sparse",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "Sparse",
          "package": "ad",
          "partial": "Sparse",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#t:Sparse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Sparse",
          "name": "Index",
          "package": "ad",
          "signature": "Index (IntMap Int)",
          "source": "src/Numeric-AD-Internal-Sparse.html#Index",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Sparse",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "Index",
          "package": "ad",
          "partial": "Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Sparse",
          "name": "Sparse",
          "package": "ad",
          "signature": "Sparse !a (IntMap (Sparse a))",
          "source": "src/Numeric-AD-Internal-Sparse.html#Sparse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Sparse",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "Sparse",
          "package": "ad",
          "partial": "Sparse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:Sparse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Sparse",
          "name": "Zero",
          "package": "ad",
          "signature": "Zero",
          "source": "src/Numeric-AD-Internal-Sparse.html#Sparse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Sparse",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "Zero",
          "package": "ad",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:Zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Sparse",
          "name": "addToIndex",
          "package": "ad",
          "signature": "Int -\u003e Index -\u003e Index",
          "source": "src/Numeric-AD-Internal-Sparse.html#addToIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Sparse",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "addToIndex",
          "normalized": "Int-\u003eIndex-\u003eIndex",
          "package": "ad",
          "partial": "To Index",
          "signature": "Int-\u003eIndex-\u003eIndex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:addToIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Sparse",
          "name": "apply",
          "package": "ad",
          "signature": "(f (AD Sparse a) -\u003e b) -\u003e f a -\u003e b",
          "source": "src/Numeric-AD-Internal-Sparse.html#apply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Sparse",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "apply",
          "normalized": "(a(AD Sparse b)-\u003ec)-\u003ea b-\u003ec",
          "package": "ad",
          "signature": "(f(AD Sparse a)-\u003eb)-\u003ef a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Sparse",
          "name": "d",
          "package": "ad",
          "signature": "f b -\u003e AD Sparse a -\u003e f a",
          "source": "src/Numeric-AD-Internal-Sparse.html#d",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Sparse",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "d",
          "normalized": "a b-\u003eAD Sparse c-\u003ea c",
          "package": "ad",
          "signature": "f b-\u003eAD Sparse a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Sparse",
          "name": "d'",
          "package": "ad",
          "signature": "f a -\u003e AD Sparse a -\u003e (a, f a)",
          "source": "src/Numeric-AD-Internal-Sparse.html#d%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Sparse",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "d'",
          "normalized": "a b-\u003eAD Sparse b-\u003e(b,a b)",
          "package": "ad",
          "signature": "f a-\u003eAD Sparse a-\u003e(a,f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:d-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Sparse",
          "name": "ds",
          "package": "ad",
          "signature": "f b -\u003e AD Sparse a -\u003e Cofree f a",
          "source": "src/Numeric-AD-Internal-Sparse.html#ds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Sparse",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "ds",
          "normalized": "a b-\u003eAD Sparse c-\u003eCofree a c",
          "package": "ad",
          "signature": "f b-\u003eAD Sparse a-\u003eCofree f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:ds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Sparse",
          "name": "emptyIndex",
          "package": "ad",
          "signature": "Index",
          "source": "src/Numeric-AD-Internal-Sparse.html#emptyIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Sparse",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "emptyIndex",
          "package": "ad",
          "partial": "Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:emptyIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Sparse",
          "name": "indices",
          "package": "ad",
          "signature": "Index -\u003e [Int]",
          "source": "src/Numeric-AD-Internal-Sparse.html#indices",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Sparse",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "indices",
          "normalized": "Index-\u003e[Int]",
          "package": "ad",
          "signature": "Index-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:indices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Sparse",
          "name": "pack",
          "package": "ad",
          "signature": "i -\u003e [AD Sparse a] -\u003e AD Sparse a",
          "source": "src/Numeric-AD-Internal-Sparse.html#pack",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Sparse",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "pack",
          "normalized": "a-\u003e[AD Sparse b]-\u003eAD Sparse b",
          "package": "ad",
          "signature": "i-\u003e[AD Sparse a]-\u003eAD Sparse a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Sparse",
          "name": "packs",
          "package": "ad",
          "signature": "i -\u003e [AD Sparse a] -\u003e AD Sparse a",
          "source": "src/Numeric-AD-Internal-Sparse.html#packs",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Sparse",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "packs",
          "normalized": "a-\u003e[AD Sparse b]-\u003eAD Sparse b",
          "package": "ad",
          "signature": "i-\u003e[AD Sparse a]-\u003eAD Sparse a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:packs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Sparse",
          "name": "partial",
          "package": "ad",
          "signature": "[Int] -\u003e Sparse a -\u003e a",
          "source": "src/Numeric-AD-Internal-Sparse.html#partial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Sparse",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "partial",
          "normalized": "[Int]-\u003eSparse a-\u003ea",
          "package": "ad",
          "signature": "[Int]-\u003eSparse a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:partial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Sparse",
          "name": "skeleton",
          "package": "ad",
          "signature": "f a -\u003e f Int",
          "source": "src/Numeric-AD-Internal-Sparse.html#skeleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Sparse",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "skeleton",
          "normalized": "a b-\u003ea Int",
          "package": "ad",
          "signature": "f a-\u003ef Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:skeleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Sparse",
          "name": "spartial",
          "package": "ad",
          "signature": "[Int] -\u003e Sparse a -\u003e Maybe a",
          "source": "src/Numeric-AD-Internal-Sparse.html#spartial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Sparse",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "spartial",
          "normalized": "[Int]-\u003eSparse a-\u003eMaybe a",
          "package": "ad",
          "signature": "[Int]-\u003eSparse a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:spartial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Sparse",
          "name": "unpack",
          "package": "ad",
          "signature": "([a] -\u003e [a]) -\u003e o",
          "source": "src/Numeric-AD-Internal-Sparse.html#unpack",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Sparse",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "unpack",
          "normalized": "([a]-\u003e[a])-\u003eb",
          "package": "ad",
          "signature": "([a]-\u003e[a])-\u003eo",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Sparse",
          "name": "unpack'",
          "package": "ad",
          "signature": "([a] -\u003e (a, [a])) -\u003e o'",
          "source": "src/Numeric-AD-Internal-Sparse.html#unpack%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Sparse",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "unpack'",
          "normalized": "([a]-\u003e(a,[a]))-\u003eb",
          "package": "ad",
          "signature": "([a]-\u003e(a,[a]))-\u003eo'",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:unpack-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Sparse",
          "name": "unpacks",
          "package": "ad",
          "signature": "([a] -\u003e Cofree [] a) -\u003e o",
          "source": "src/Numeric-AD-Internal-Sparse.html#unpacks",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Sparse",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "unpacks",
          "normalized": "([a]-\u003eCofree[]a)-\u003eb",
          "package": "ad",
          "signature": "([a]-\u003eCofree[]a)-\u003eo",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:unpacks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Sparse",
          "name": "vars",
          "package": "ad",
          "signature": "f a -\u003e f (AD Sparse a)",
          "source": "src/Numeric-AD-Internal-Sparse.html#vars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Sparse",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "vars",
          "normalized": "a b-\u003ea(AD Sparse b)",
          "package": "ad",
          "signature": "f a-\u003ef(AD Sparse a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:vars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.AD.Internal.Sparse\",\"Numeric.AD.Mode.Sparse\",\"Numeric.AD.Variadic.Sparse\"]",
          "name": "vgrad",
          "package": "ad",
          "signature": "i -\u003e o",
          "source": "src/Numeric-AD-Internal-Sparse.html#vgrad",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:vgrad\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:vgrad\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic-Sparse.html#v:vgrad\"]"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Sparse",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "vgrad",
          "normalized": "a-\u003eb",
          "package": "ad",
          "signature": "i-\u003eo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:vgrad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.AD.Internal.Sparse\",\"Numeric.AD.Variadic.Sparse\"]",
          "name": "vgrad'",
          "package": "ad",
          "signature": "i -\u003e o'",
          "source": "src/Numeric-AD-Internal-Sparse.html#vgrad%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:vgrad-39-\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic-Sparse.html#v:vgrad-39-\"]"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Sparse",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "vgrad'",
          "normalized": "a-\u003eb",
          "package": "ad",
          "signature": "i-\u003eo'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:vgrad-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.AD.Internal.Sparse\",\"Numeric.AD.Mode.Sparse\",\"Numeric.AD.Variadic.Sparse\",\"Numeric.AD.Variadic\"]",
          "name": "vgrads",
          "package": "ad",
          "signature": "i -\u003e o",
          "source": "src/Numeric-AD-Internal-Sparse.html#vgrads",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:vgrads\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:vgrads\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic-Sparse.html#v:vgrads\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic.html#v:vgrads\"]"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Sparse",
          "module": "Numeric.AD.Internal.Sparse",
          "name": "vgrads",
          "normalized": "a-\u003eb",
          "package": "ad",
          "signature": "i-\u003eo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Sparse.html#v:vgrads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Tower",
          "name": "Tower",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Tower.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Tower",
          "module": "Numeric.AD.Internal.Tower",
          "name": "Tower",
          "package": "ad",
          "partial": "Tower",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eTower\u003c/code\u003e is an AD \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e that calculates a tangent tower by forward AD, and provides fast \u003ccode\u003ediffsUU\u003c/code\u003e, \u003ccode\u003ediffsUF\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Tower",
          "name": "Tower",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Tower.html#Tower",
          "type": "newtype"
        },
        "index": {
          "description": "Tower is an AD Mode that calculates tangent tower by forward AD and provides fast diffsUU diffsUF",
          "hierarchy": "Numeric AD Internal Tower",
          "module": "Numeric.AD.Internal.Tower",
          "name": "Tower",
          "package": "ad",
          "partial": "Tower",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#t:Tower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Tower",
          "name": "Tower",
          "package": "ad",
          "signature": "Tower",
          "source": "src/Numeric-AD-Internal-Tower.html#Tower",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Tower",
          "module": "Numeric.AD.Internal.Tower",
          "name": "Tower",
          "package": "ad",
          "partial": "Tower",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#v:Tower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Tower",
          "name": "apply",
          "package": "ad",
          "signature": "(AD Tower a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Numeric-AD-Internal-Tower.html#apply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Tower",
          "module": "Numeric.AD.Internal.Tower",
          "name": "apply",
          "normalized": "(AD Tower a-\u003eb)-\u003ea-\u003eb",
          "package": "ad",
          "signature": "(AD Tower a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Tower",
          "name": "bundle",
          "package": "ad",
          "signature": "a -\u003e Tower a -\u003e Tower a",
          "source": "src/Numeric-AD-Internal-Tower.html#bundle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Tower",
          "module": "Numeric.AD.Internal.Tower",
          "name": "bundle",
          "normalized": "a-\u003eTower a-\u003eTower a",
          "package": "ad",
          "signature": "a-\u003eTower a-\u003eTower a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#v:bundle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Tower",
          "name": "d",
          "package": "ad",
          "signature": "[a] -\u003e a",
          "source": "src/Numeric-AD-Internal-Tower.html#d",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Tower",
          "module": "Numeric.AD.Internal.Tower",
          "name": "d",
          "normalized": "[a]-\u003ea",
          "package": "ad",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#v:d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Tower",
          "name": "d'",
          "package": "ad",
          "signature": "[a] -\u003e (a, a)",
          "source": "src/Numeric-AD-Internal-Tower.html#d%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Tower",
          "module": "Numeric.AD.Internal.Tower",
          "name": "d'",
          "normalized": "[a]-\u003e(a,a)",
          "package": "ad",
          "signature": "[a]-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#v:d-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Tower",
          "name": "getADTower",
          "package": "ad",
          "signature": "AD Tower a -\u003e [a]",
          "source": "src/Numeric-AD-Internal-Tower.html#getADTower",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Tower",
          "module": "Numeric.AD.Internal.Tower",
          "name": "getADTower",
          "normalized": "AD Tower a-\u003e[a]",
          "package": "ad",
          "partial": "ADTower",
          "signature": "AD Tower a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#v:getADTower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Tower",
          "name": "getTower",
          "package": "ad",
          "signature": "[a]",
          "source": "src/Numeric-AD-Internal-Tower.html#Tower",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Tower",
          "module": "Numeric.AD.Internal.Tower",
          "name": "getTower",
          "normalized": "[a]",
          "package": "ad",
          "partial": "Tower",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#v:getTower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Tower",
          "name": "tangents",
          "package": "ad",
          "signature": "Tower a -\u003e Tower a",
          "source": "src/Numeric-AD-Internal-Tower.html#tangents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Tower",
          "module": "Numeric.AD.Internal.Tower",
          "name": "tangents",
          "normalized": "Tower a-\u003eTower a",
          "package": "ad",
          "signature": "Tower a-\u003eTower a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#v:tangents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Tower",
          "name": "tower",
          "package": "ad",
          "signature": "[a] -\u003e AD Tower a",
          "source": "src/Numeric-AD-Internal-Tower.html#tower",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Tower",
          "module": "Numeric.AD.Internal.Tower",
          "name": "tower",
          "normalized": "[a]-\u003eAD Tower a",
          "package": "ad",
          "signature": "[a]-\u003eAD Tower a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#v:tower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Tower",
          "name": "transposePadF",
          "package": "ad",
          "signature": "a -\u003e f [a] -\u003e [f a]",
          "source": "src/Numeric-AD-Internal-Tower.html#transposePadF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Tower",
          "module": "Numeric.AD.Internal.Tower",
          "name": "transposePadF",
          "normalized": "a-\u003eb[a]-\u003e[b a]",
          "package": "ad",
          "partial": "Pad",
          "signature": "a-\u003ef[a]-\u003e[f a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#v:transposePadF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Tower",
          "name": "withD",
          "package": "ad",
          "signature": "(a, a) -\u003e AD Tower a",
          "source": "src/Numeric-AD-Internal-Tower.html#withD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Tower",
          "module": "Numeric.AD.Internal.Tower",
          "name": "withD",
          "normalized": "(a,a)-\u003eAD Tower a",
          "package": "ad",
          "signature": "(a,a)-\u003eAD Tower a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#v:withD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Tower",
          "name": "zeroPad",
          "package": "ad",
          "signature": "[a] -\u003e [a]",
          "source": "src/Numeric-AD-Internal-Tower.html#zeroPad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Tower",
          "module": "Numeric.AD.Internal.Tower",
          "name": "zeroPad",
          "normalized": "[a]-\u003e[a]",
          "package": "ad",
          "partial": "Pad",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#v:zeroPad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Tower",
          "name": "zeroPadF",
          "package": "ad",
          "signature": "[f a] -\u003e [f a]",
          "source": "src/Numeric-AD-Internal-Tower.html#zeroPadF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Tower",
          "module": "Numeric.AD.Internal.Tower",
          "name": "zeroPadF",
          "normalized": "[a b]-\u003e[a b]",
          "package": "ad",
          "partial": "Pad",
          "signature": "[f a]-\u003e[f a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Tower.html#v:zeroPadF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVariables used for reverse-mode automatic differentiation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.AD.Internal.Var",
          "name": "Var",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Var.html",
          "type": "module"
        },
        "index": {
          "description": "Variables used for reverse-mode automatic differentiation",
          "hierarchy": "Numeric AD Internal Var",
          "module": "Numeric.AD.Internal.Var",
          "name": "Var",
          "package": "ad",
          "partial": "Var",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Var.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to mark variables for inspection during the reverse pass\n\u003c/p\u003e",
          "module": "Numeric.AD.Internal.Var",
          "name": "Var",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Var.html#Var",
          "type": "class"
        },
        "index": {
          "description": "Used to mark variables for inspection during the reverse pass",
          "hierarchy": "Numeric AD Internal Var",
          "module": "Numeric.AD.Internal.Var",
          "name": "Var",
          "package": "ad",
          "partial": "Var",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Var.html#t:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Var",
          "name": "Variable",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Var.html#Variable",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Var",
          "module": "Numeric.AD.Internal.Var",
          "name": "Variable",
          "package": "ad",
          "partial": "Variable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Var.html#t:Variable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Var",
          "name": "Variable",
          "package": "ad",
          "signature": "Variable a !Int",
          "source": "src/Numeric-AD-Internal-Var.html#Variable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Var",
          "module": "Numeric.AD.Internal.Var",
          "name": "Variable",
          "package": "ad",
          "partial": "Variable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Var.html#v:Variable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Var",
          "name": "bind",
          "package": "ad",
          "signature": "f a -\u003e (f (v a), (Int, Int))",
          "source": "src/Numeric-AD-Internal-Var.html#bind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Var",
          "module": "Numeric.AD.Internal.Var",
          "name": "bind",
          "normalized": "a b-\u003e(a(c b),(Int,Int))",
          "package": "ad",
          "signature": "f a-\u003e(f(v a),(Int,Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Var.html#v:bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Var",
          "name": "unbind",
          "package": "ad",
          "signature": "f (v a) -\u003e Array Int a -\u003e f a",
          "source": "src/Numeric-AD-Internal-Var.html#unbind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Var",
          "module": "Numeric.AD.Internal.Var",
          "name": "unbind",
          "normalized": "a(b c)-\u003eArray Int c-\u003ea c",
          "package": "ad",
          "signature": "f(v a)-\u003eArray Int a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Var.html#v:unbind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Var",
          "name": "unbindMap",
          "package": "ad",
          "signature": "f (v a) -\u003e IntMap a -\u003e f a",
          "source": "src/Numeric-AD-Internal-Var.html#unbindMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Var",
          "module": "Numeric.AD.Internal.Var",
          "name": "unbindMap",
          "normalized": "a(b c)-\u003eIntMap c-\u003ea c",
          "package": "ad",
          "partial": "Map",
          "signature": "f(v a)-\u003eIntMap a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Var.html#v:unbindMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Var",
          "name": "unbindMapWithDefault",
          "package": "ad",
          "signature": "b -\u003e (a -\u003e b -\u003e c) -\u003e f (v a) -\u003e IntMap b -\u003e f c",
          "source": "src/Numeric-AD-Internal-Var.html#unbindMapWithDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Var",
          "module": "Numeric.AD.Internal.Var",
          "name": "unbindMapWithDefault",
          "normalized": "a-\u003e(b-\u003ea-\u003ec)-\u003ed(e b)-\u003eIntMap a-\u003ed c",
          "package": "ad",
          "partial": "Map With Default",
          "signature": "b-\u003e(a-\u003eb-\u003ec)-\u003ef(v a)-\u003eIntMap b-\u003ef c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Var.html#v:unbindMapWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Var",
          "name": "unbindWith",
          "package": "ad",
          "signature": "(a -\u003e b -\u003e c) -\u003e f (v a) -\u003e Array Int b -\u003e f c",
          "source": "src/Numeric-AD-Internal-Var.html#unbindWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Var",
          "module": "Numeric.AD.Internal.Var",
          "name": "unbindWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed(e a)-\u003eArray Int b-\u003ed c",
          "package": "ad",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003ef(v a)-\u003eArray Int b-\u003ef c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Var.html#v:unbindWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Var",
          "name": "var",
          "package": "ad",
          "signature": "a -\u003e Int -\u003e v a",
          "source": "src/Numeric-AD-Internal-Var.html#var",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Var",
          "module": "Numeric.AD.Internal.Var",
          "name": "var",
          "normalized": "a-\u003eInt-\u003eb a",
          "package": "ad",
          "signature": "a-\u003eInt-\u003ev a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Var.html#v:var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Var",
          "name": "varId",
          "package": "ad",
          "signature": "v a -\u003e Int",
          "source": "src/Numeric-AD-Internal-Var.html#varId",
          "type": "method"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Var",
          "module": "Numeric.AD.Internal.Var",
          "name": "varId",
          "normalized": "a b-\u003eInt",
          "package": "ad",
          "partial": "Id",
          "signature": "v a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Var.html#v:varId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Internal.Var",
          "name": "vary",
          "package": "ad",
          "signature": "Variable a -\u003e f a",
          "source": "src/Numeric-AD-Internal-Var.html#vary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Internal Var",
          "module": "Numeric.AD.Internal.Var",
          "name": "vary",
          "normalized": "Variable a-\u003eb a",
          "package": "ad",
          "signature": "Variable a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Internal-Var.html#v:vary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAllows the choice of AD \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e to be specified at the term level for\n benchmarking or more complicated usage patterns.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.AD.Mode.Directed",
          "name": "Directed",
          "package": "ad",
          "source": "src/Numeric-AD-Mode-Directed.html",
          "type": "module"
        },
        "index": {
          "description": "Allows the choice of AD Mode to be specified at the term level for benchmarking or more complicated usage patterns",
          "hierarchy": "Numeric AD Mode Directed",
          "module": "Numeric.AD.Mode.Directed",
          "name": "Directed",
          "package": "ad",
          "partial": "Directed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Directed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Directed",
          "name": "Direction",
          "package": "ad",
          "source": "src/Numeric-AD-Mode-Directed.html#Direction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Directed",
          "module": "Numeric.AD.Mode.Directed",
          "name": "Direction",
          "package": "ad",
          "partial": "Direction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Directed.html#t:Direction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Directed",
          "name": "Forward",
          "package": "ad",
          "signature": "Forward",
          "source": "src/Numeric-AD-Mode-Directed.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Directed",
          "module": "Numeric.AD.Mode.Directed",
          "name": "Forward",
          "package": "ad",
          "partial": "Forward",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Directed.html#v:Forward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Directed",
          "name": "Kahn",
          "package": "ad",
          "signature": "Kahn",
          "source": "src/Numeric-AD-Mode-Directed.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Directed",
          "module": "Numeric.AD.Mode.Directed",
          "name": "Kahn",
          "package": "ad",
          "partial": "Kahn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Directed.html#v:Kahn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Directed",
          "name": "Mixed",
          "package": "ad",
          "signature": "Mixed",
          "source": "src/Numeric-AD-Mode-Directed.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Directed",
          "module": "Numeric.AD.Mode.Directed",
          "name": "Mixed",
          "package": "ad",
          "partial": "Mixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Directed.html#v:Mixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Directed",
          "name": "Reverse",
          "package": "ad",
          "signature": "Reverse",
          "source": "src/Numeric-AD-Mode-Directed.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Directed",
          "module": "Numeric.AD.Mode.Directed",
          "name": "Reverse",
          "package": "ad",
          "partial": "Reverse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Directed.html#v:Reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Directed",
          "name": "Tower",
          "package": "ad",
          "signature": "Tower",
          "source": "src/Numeric-AD-Mode-Directed.html#Direction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Directed",
          "module": "Numeric.AD.Mode.Directed",
          "name": "Tower",
          "package": "ad",
          "partial": "Tower",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Directed.html#v:Tower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Directed",
          "name": "diff",
          "package": "ad",
          "signature": "AD s a -\u003e AD s a) -\u003e a -\u003e a",
          "source": "src/Numeric-AD-Mode-Directed.html#diff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Directed",
          "module": "Numeric.AD.Mode.Directed",
          "name": "diff",
          "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003eb",
          "package": "ad",
          "signature": "AD s a-\u003eAD s a)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Directed.html#v:diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Directed",
          "name": "diff'",
          "package": "ad",
          "signature": "AD s a -\u003e AD s a) -\u003e a -\u003e (a, a)",
          "source": "src/Numeric-AD-Mode-Directed.html#diff%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Directed",
          "module": "Numeric.AD.Mode.Directed",
          "name": "diff'",
          "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e(b,b)",
          "package": "ad",
          "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Directed.html#v:diff-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Directed",
          "name": "grad",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f a",
          "source": "src/Numeric-AD-Mode-Directed.html#grad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Directed",
          "module": "Numeric.AD.Mode.Directed",
          "name": "grad",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea c",
          "package": "ad",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Directed.html#v:grad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Directed",
          "name": "grad'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e (a, f a)",
          "source": "src/Numeric-AD-Mode-Directed.html#grad%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Directed",
          "module": "Numeric.AD.Mode.Directed",
          "name": "grad'",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e(c,a c)",
          "package": "ad",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e(a,f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Directed.html#v:grad-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Directed",
          "name": "jacobian",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f a)",
          "source": "src/Numeric-AD-Mode-Directed.html#jacobian",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Directed",
          "module": "Numeric.AD.Mode.Directed",
          "name": "jacobian",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a c)",
          "package": "ad",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Directed.html#v:jacobian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Directed",
          "name": "jacobian'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (a, f a)",
          "source": "src/Numeric-AD-Mode-Directed.html#jacobian%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Directed",
          "module": "Numeric.AD.Mode.Directed",
          "name": "jacobian'",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(c,a c)",
          "package": "ad",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(a,f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Directed.html#v:jacobian-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eForward mode automatic differentiation\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.AD.Mode.Forward",
          "name": "Forward",
          "package": "ad",
          "source": "src/Numeric-AD-Mode-Forward.html",
          "type": "module"
        },
        "index": {
          "description": "Forward mode automatic differentiation",
          "hierarchy": "Numeric AD Mode Forward",
          "module": "Numeric.AD.Mode.Forward",
          "name": "Forward",
          "package": "ad",
          "partial": "Forward",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediff\u003c/a\u003e\u003c/code\u003e function calculates the first derivative of a scalar-to-scalar function by forward-mode \u003ccode\u003e\u003ca\u003eAD\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediff sin 0\n\u003c/code\u003e\u003c/strong\u003e1.0\n\u003c/pre\u003e",
          "module": "[\"Numeric.AD.Mode.Forward\",\"Numeric.AD\"]",
          "name": "diff",
          "package": "ad",
          "signature": "AD s a -\u003e AD s a) -\u003e a -\u003e a",
          "source": "src/Numeric-AD-Mode-Forward.html#diff",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:diff\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:diff\"]"
        },
        "index": {
          "description": "The diff function calculates the first derivative of scalar-to-scalar function by forward-mode AD diff sin",
          "hierarchy": "Numeric AD Mode Forward",
          "module": "Numeric.AD.Mode.Forward",
          "name": "diff",
          "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003eb",
          "package": "ad",
          "signature": "AD s a-\u003eAD s a)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediff'\u003c/a\u003e\u003c/code\u003e function calculates the result and first derivative of scalar-to-scalar function by \u003ccode\u003e\u003ca\u003eForward\u003c/a\u003e\u003c/code\u003e mode \u003ccode\u003e\u003ca\u003eAD\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ediff'\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esin\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003esin\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e&&&\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ecos\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003ediff'\u003c/a\u003e\u003c/code\u003e f = f \u003ccode\u003e\u003ca\u003e&&&\u003c/a\u003e\u003c/code\u003e d f\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediff' sin 0\n\u003c/code\u003e\u003c/strong\u003e(0.0,1.0)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediff' exp 0\n\u003c/code\u003e\u003c/strong\u003e(1.0,1.0)\n\u003c/pre\u003e",
          "module": "[\"Numeric.AD.Mode.Forward\",\"Numeric.AD\"]",
          "name": "diff'",
          "package": "ad",
          "signature": "AD s a -\u003e AD s a) -\u003e a -\u003e (a, a)",
          "source": "src/Numeric-AD-Mode-Forward.html#diff%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:diff-39-\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:diff-39-\"]"
        },
        "index": {
          "description": "The diff function calculates the result and first derivative of scalar-to-scalar function by Forward mode AD diff sin sin cos diff diff sin diff exp",
          "hierarchy": "Numeric AD Mode Forward",
          "module": "Numeric.AD.Mode.Forward",
          "name": "diff'",
          "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e(b,b)",
          "package": "ad",
          "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:diff-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediffF\u003c/a\u003e\u003c/code\u003e function calculates the first derivatives of scalar-to-nonscalar function by \u003ccode\u003e\u003ca\u003eForward\u003c/a\u003e\u003c/code\u003e mode \u003ccode\u003e\u003ca\u003eAD\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediffF (\\a -\u003e [sin a, cos a]) 0\n\u003c/code\u003e\u003c/strong\u003e[1.0,-0.0]\n\u003c/pre\u003e",
          "module": "[\"Numeric.AD.Mode.Forward\",\"Numeric.AD\"]",
          "name": "diffF",
          "package": "ad",
          "signature": "AD s a -\u003e f (AD s a)) -\u003e a -\u003e f a",
          "source": "src/Numeric-AD-Mode-Forward.html#diffF",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:diffF\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:diffF\"]"
        },
        "index": {
          "description": "The diffF function calculates the first derivatives of scalar-to-nonscalar function by Forward mode AD diffF sin cos",
          "hierarchy": "Numeric AD Mode Forward",
          "module": "Numeric.AD.Mode.Forward",
          "name": "diffF",
          "normalized": "AD a b-\u003ec(AD a b))-\u003eb-\u003ec b",
          "package": "ad",
          "signature": "AD s a-\u003ef(AD s a))-\u003ea-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:diffF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediffF'\u003c/a\u003e\u003c/code\u003e function calculates the result and first derivatives of a scalar-to-non-scalar function by \u003ccode\u003e\u003ca\u003eForward\u003c/a\u003e\u003c/code\u003e mode \u003ccode\u003e\u003ca\u003eAD\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediffF' (\\a -\u003e [sin a, cos a]) 0\n\u003c/code\u003e\u003c/strong\u003e[(0.0,1.0),(1.0,-0.0)]\n\u003c/pre\u003e",
          "module": "[\"Numeric.AD.Mode.Forward\",\"Numeric.AD\"]",
          "name": "diffF'",
          "package": "ad",
          "signature": "AD s a -\u003e f (AD s a)) -\u003e a -\u003e f (a, a)",
          "source": "src/Numeric-AD-Mode-Forward.html#diffF%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:diffF-39-\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:diffF-39-\"]"
        },
        "index": {
          "description": "The diffF function calculates the result and first derivatives of scalar-to-non-scalar function by Forward mode AD diffF sin cos",
          "hierarchy": "Numeric AD Mode Forward",
          "module": "Numeric.AD.Mode.Forward",
          "name": "diffF'",
          "normalized": "AD a b-\u003ec(AD a b))-\u003eb-\u003ec(b,b)",
          "package": "ad",
          "partial": "F'",
          "signature": "AD s a-\u003ef(AD s a))-\u003ea-\u003ef(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:diffF-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the directional derivative of a function given a zipped up \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e of the input values and their derivatives\n\u003c/p\u003e",
          "module": "[\"Numeric.AD.Mode.Forward\",\"Numeric.AD\"]",
          "name": "du",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f (a, a) -\u003e a",
          "source": "src/Numeric-AD-Mode-Forward.html#du",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:du\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:du\"]"
        },
        "index": {
          "description": "Compute the directional derivative of function given zipped up Functor of the input values and their derivatives",
          "hierarchy": "Numeric AD Mode Forward",
          "module": "Numeric.AD.Mode.Forward",
          "name": "du",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea(c,c)-\u003ec",
          "package": "ad",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef(a,a)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:du"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the answer and directional derivative of a function given a zipped up \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e of the input values and their derivatives\n\u003c/p\u003e",
          "module": "[\"Numeric.AD.Mode.Forward\",\"Numeric.AD\"]",
          "name": "du'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f (a, a) -\u003e (a, a)",
          "source": "src/Numeric-AD-Mode-Forward.html#du%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:du-39-\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:du-39-\"]"
        },
        "index": {
          "description": "Compute the answer and directional derivative of function given zipped up Functor of the input values and their derivatives",
          "hierarchy": "Numeric AD Mode Forward",
          "module": "Numeric.AD.Mode.Forward",
          "name": "du'",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea(c,c)-\u003e(c,c)",
          "package": "ad",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef(a,a)-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:du-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a vector of directional derivatives for a function given a zipped up \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e of the input values and their derivatives.\n\u003c/p\u003e",
          "module": "[\"Numeric.AD.Mode.Forward\",\"Numeric.AD\"]",
          "name": "duF",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f (a, a) -\u003e g a",
          "source": "src/Numeric-AD-Mode-Forward.html#duF",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:duF\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:duF\"]"
        },
        "index": {
          "description": "Compute vector of directional derivatives for function given zipped up Functor of the input values and their derivatives",
          "hierarchy": "Numeric AD Mode Forward",
          "module": "Numeric.AD.Mode.Forward",
          "name": "duF",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea(c,c)-\u003ed c",
          "package": "ad",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef(a,a)-\u003eg a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:duF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a vector of answers and directional derivatives for a function given a zipped up \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e of the input values and their derivatives.\n\u003c/p\u003e",
          "module": "[\"Numeric.AD.Mode.Forward\",\"Numeric.AD\"]",
          "name": "duF'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f (a, a) -\u003e g (a, a)",
          "source": "src/Numeric-AD-Mode-Forward.html#duF%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:duF-39-\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:duF-39-\"]"
        },
        "index": {
          "description": "Compute vector of answers and directional derivatives for function given zipped up Functor of the input values and their derivatives",
          "hierarchy": "Numeric AD Mode Forward",
          "module": "Numeric.AD.Mode.Forward",
          "name": "duF'",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea(c,c)-\u003ed(c,c)",
          "package": "ad",
          "partial": "F'",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef(a,a)-\u003eg(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:duF-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the gradient of a function using forward mode AD.\n\u003c/p\u003e\u003cp\u003eNote, this performs \u003cem\u003eO(n)\u003c/em\u003e worse than \u003ccode\u003e\u003ca\u003egrad\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003en\u003c/code\u003e inputs, in exchange for better space utilization.\n\u003c/p\u003e",
          "module": "Numeric.AD.Mode.Forward",
          "name": "grad",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f a",
          "source": "src/Numeric-AD-Mode-Forward.html#grad",
          "type": "function"
        },
        "index": {
          "description": "Compute the gradient of function using forward mode AD Note this performs worse than grad for inputs in exchange for better space utilization",
          "hierarchy": "Numeric AD Mode Forward",
          "module": "Numeric.AD.Mode.Forward",
          "name": "grad",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea c",
          "package": "ad",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:grad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the gradient and answer to a function using forward mode AD.\n\u003c/p\u003e\u003cp\u003eNote, this performs \u003cem\u003eO(n)\u003c/em\u003e worse than \u003ccode\u003e\u003ca\u003egrad'\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003en\u003c/code\u003e inputs, in exchange for better space utilization.\n\u003c/p\u003e",
          "module": "Numeric.AD.Mode.Forward",
          "name": "grad'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e (a, f a)",
          "source": "src/Numeric-AD-Mode-Forward.html#grad%27",
          "type": "function"
        },
        "index": {
          "description": "Compute the gradient and answer to function using forward mode AD Note this performs worse than grad for inputs in exchange for better space utilization",
          "hierarchy": "Numeric AD Mode Forward",
          "module": "Numeric.AD.Mode.Forward",
          "name": "grad'",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e(c,a c)",
          "package": "ad",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e(a,f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:grad-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the gradient of a function using forward mode AD and combine the result with the input using a user-specified function.\n\u003c/p\u003e\u003cp\u003eNote, this performs \u003cem\u003eO(n)\u003c/em\u003e worse than \u003ccode\u003e\u003ca\u003egradWith\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003en\u003c/code\u003e inputs, in exchange for better space utilization.\n\u003c/p\u003e",
          "module": "Numeric.AD.Mode.Forward",
          "name": "gradWith",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f b",
          "source": "src/Numeric-AD-Mode-Forward.html#gradWith",
          "type": "function"
        },
        "index": {
          "description": "Compute the gradient of function using forward mode AD and combine the result with the input using user-specified function Note this performs worse than gradWith for inputs in exchange for better space utilization",
          "hierarchy": "Numeric AD Mode Forward",
          "module": "Numeric.AD.Mode.Forward",
          "name": "gradWith",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea d",
          "package": "ad",
          "partial": "With",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:gradWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the gradient of a function using forward mode AD and the answer, and combine the result with the input using a\n user-specified function.\n\u003c/p\u003e\u003cp\u003eNote, this performs \u003cem\u003eO(n)\u003c/em\u003e worse than \u003ccode\u003e\u003ca\u003egradWith'\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003en\u003c/code\u003e inputs, in exchange for better space utilization.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egradWith' (,) sum [0..4]\n\u003c/code\u003e\u003c/strong\u003e(10,[(0,1),(1,1),(2,1),(3,1),(4,1)])\n\u003c/pre\u003e",
          "module": "Numeric.AD.Mode.Forward",
          "name": "gradWith'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e (a, f b)",
          "source": "src/Numeric-AD-Mode-Forward.html#gradWith%27",
          "type": "function"
        },
        "index": {
          "description": "Compute the gradient of function using forward mode AD and the answer and combine the result with the input using user-specified function Note this performs worse than gradWith for inputs in exchange for better space utilization gradWith sum",
          "hierarchy": "Numeric AD Mode Forward",
          "module": "Numeric.AD.Mode.Forward",
          "name": "gradWith'",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e(c,a d)",
          "package": "ad",
          "partial": "With'",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e(a,f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:gradWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the product of a vector with the Hessian using forward-on-forward-mode AD.\n\u003c/p\u003e",
          "module": "Numeric.AD.Mode.Forward",
          "name": "hessianProduct",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f (a, a) -\u003e f a",
          "source": "src/Numeric-AD-Mode-Forward.html#hessianProduct",
          "type": "function"
        },
        "index": {
          "description": "Compute the product of vector with the Hessian using forward-on-forward-mode AD",
          "hierarchy": "Numeric AD Mode Forward",
          "module": "Numeric.AD.Mode.Forward",
          "name": "hessianProduct",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea(c,c)-\u003ea c",
          "package": "ad",
          "partial": "Product",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef(a,a)-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:hessianProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the gradient and hessian product using forward-on-forward-mode AD.\n\u003c/p\u003e",
          "module": "Numeric.AD.Mode.Forward",
          "name": "hessianProduct'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f (a, a) -\u003e f (a, a)",
          "source": "src/Numeric-AD-Mode-Forward.html#hessianProduct%27",
          "type": "function"
        },
        "index": {
          "description": "Compute the gradient and hessian product using forward-on-forward-mode AD",
          "hierarchy": "Numeric AD Mode Forward",
          "module": "Numeric.AD.Mode.Forward",
          "name": "hessianProduct'",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea(c,c)-\u003ea(c,c)",
          "package": "ad",
          "partial": "Product'",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef(a,a)-\u003ef(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:hessianProduct-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the Jacobian using \u003ccode\u003e\u003ca\u003eForward\u003c/a\u003e\u003c/code\u003e mode \u003ccode\u003e\u003ca\u003eAD\u003c/a\u003e\u003c/code\u003e. This must transpose the result, so \u003ccode\u003e\u003ca\u003ejacobianT\u003c/a\u003e\u003c/code\u003e is faster and allows more result types.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ejacobian (\\[x,y] -\u003e [y,x,x+y,x*y,exp x * sin y]) [pi,1]\n\u003c/code\u003e\u003c/strong\u003e[[0.0,1.0],[1.0,0.0],[1.0,1.0],[1.0,3.141592653589793],[19.472221418841606,12.502969588876512]]\n\u003c/pre\u003e",
          "module": "Numeric.AD.Mode.Forward",
          "name": "jacobian",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f a)",
          "source": "src/Numeric-AD-Mode-Forward.html#jacobian",
          "type": "function"
        },
        "index": {
          "description": "Compute the Jacobian using Forward mode AD This must transpose the result so jacobianT is faster and allows more result types jacobian exp sin pi",
          "hierarchy": "Numeric AD Mode Forward",
          "module": "Numeric.AD.Mode.Forward",
          "name": "jacobian",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a c)",
          "package": "ad",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:jacobian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the Jacobian using \u003ccode\u003e\u003ca\u003eForward\u003c/a\u003e\u003c/code\u003e mode \u003ccode\u003e\u003ca\u003eAD\u003c/a\u003e\u003c/code\u003e along with the actual answer.\n\u003c/p\u003e",
          "module": "Numeric.AD.Mode.Forward",
          "name": "jacobian'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (a, f a)",
          "source": "src/Numeric-AD-Mode-Forward.html#jacobian%27",
          "type": "function"
        },
        "index": {
          "description": "Compute the Jacobian using Forward mode AD along with the actual answer",
          "hierarchy": "Numeric AD Mode Forward",
          "module": "Numeric.AD.Mode.Forward",
          "name": "jacobian'",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(c,a c)",
          "package": "ad",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(a,f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:jacobian-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fast, simple, transposed Jacobian computed with forward-mode AD.\n\u003c/p\u003e",
          "module": "[\"Numeric.AD.Mode.Forward\",\"Numeric.AD\"]",
          "name": "jacobianT",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e f (g a)",
          "source": "src/Numeric-AD-Mode-Forward.html#jacobianT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:jacobianT\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:jacobianT\"]"
        },
        "index": {
          "description": "fast simple transposed Jacobian computed with forward-mode AD",
          "hierarchy": "Numeric AD Mode Forward",
          "module": "Numeric.AD.Mode.Forward",
          "name": "jacobianT",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ea(d c)",
          "package": "ad",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003ef(g a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:jacobianT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the Jacobian using \u003ccode\u003e\u003ca\u003eForward\u003c/a\u003e\u003c/code\u003e mode \u003ccode\u003e\u003ca\u003eAD\u003c/a\u003e\u003c/code\u003e and combine the output with the input. This must transpose the result, so \u003ccode\u003e\u003ca\u003ejacobianWithT\u003c/a\u003e\u003c/code\u003e is faster, and allows more result types.\n\u003c/p\u003e",
          "module": "Numeric.AD.Mode.Forward",
          "name": "jacobianWith",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f b)",
          "source": "src/Numeric-AD-Mode-Forward.html#jacobianWith",
          "type": "function"
        },
        "index": {
          "description": "Compute the Jacobian using Forward mode AD and combine the output with the input This must transpose the result so jacobianWithT is faster and allows more result types",
          "hierarchy": "Numeric AD Mode Forward",
          "module": "Numeric.AD.Mode.Forward",
          "name": "jacobianWith",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a e)",
          "package": "ad",
          "partial": "With",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:jacobianWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the Jacobian using \u003ccode\u003e\u003ca\u003eForward\u003c/a\u003e\u003c/code\u003e mode \u003ccode\u003e\u003ca\u003eAD\u003c/a\u003e\u003c/code\u003e combined with the input using a user specified function, along with the actual answer.\n\u003c/p\u003e",
          "module": "Numeric.AD.Mode.Forward",
          "name": "jacobianWith'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (a, f b)",
          "source": "src/Numeric-AD-Mode-Forward.html#jacobianWith%27",
          "type": "function"
        },
        "index": {
          "description": "Compute the Jacobian using Forward mode AD combined with the input using user specified function along with the actual answer",
          "hierarchy": "Numeric AD Mode Forward",
          "module": "Numeric.AD.Mode.Forward",
          "name": "jacobianWith'",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(c,a e)",
          "package": "ad",
          "partial": "With'",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(a,f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:jacobianWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fast, simple, transposed Jacobian computed with \u003ccode\u003e\u003ca\u003eForward\u003c/a\u003e\u003c/code\u003e mode \u003ccode\u003e\u003ca\u003eAD\u003c/a\u003e\u003c/code\u003e that combines the output with the input.\n\u003c/p\u003e",
          "module": "[\"Numeric.AD.Mode.Forward\",\"Numeric.AD\"]",
          "name": "jacobianWithT",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e f (g b)",
          "source": "src/Numeric-AD-Mode-Forward.html#jacobianWithT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:jacobianWithT\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:jacobianWithT\"]"
        },
        "index": {
          "description": "fast simple transposed Jacobian computed with Forward mode AD that combines the output with the input",
          "hierarchy": "Numeric AD Mode Forward",
          "module": "Numeric.AD.Mode.Forward",
          "name": "jacobianWithT",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ea(d e)",
          "package": "ad",
          "partial": "With",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003ef(g b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Forward.html#v:jacobianWithT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides reverse-mode Automatic Differentiation using post-hoc linear time\n topological sorting.\n\u003c/p\u003e\u003cp\u003eFor reverse mode AD we use \u003ccode\u003e\u003ca\u003eStableName\u003c/a\u003e\u003c/code\u003e to recover sharing information from\n the tape to avoid combinatorial explosion, and thus run asymptotically faster\n than it could without such sharing information, but the use of side-effects\n contained herein is benign.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "Kahn",
          "package": "ad",
          "source": "src/Numeric-AD-Mode-Kahn.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides reverse-mode Automatic Differentiation using post-hoc linear time topological sorting For reverse mode AD we use StableName to recover sharing information from the tape to avoid combinatorial explosion and thus run asymptotically faster than it could without such sharing information but the use of side-effects contained herein is benign",
          "hierarchy": "Numeric AD Mode Kahn",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "Kahn",
          "package": "ad",
          "partial": "Kahn",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Kahn",
          "name": "Grad",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Kahn.html#Grad",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Kahn",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "Grad",
          "package": "ad",
          "partial": "Grad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#t:Grad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the derivative of a function.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediff sin 0\n\u003c/code\u003e\u003c/strong\u003e1.0\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ecos 0\n\u003c/code\u003e\u003c/strong\u003e1.0\n\u003c/pre\u003e",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "diff",
          "package": "ad",
          "signature": "AD s a -\u003e AD s a) -\u003e a -\u003e a",
          "source": "src/Numeric-AD-Mode-Kahn.html#diff",
          "type": "function"
        },
        "index": {
          "description": "Compute the derivative of function diff sin cos",
          "hierarchy": "Numeric AD Mode Kahn",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "diff",
          "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003eb",
          "package": "ad",
          "signature": "AD s a-\u003eAD s a)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediff'\u003c/a\u003e\u003c/code\u003e function calculates the value and derivative, as a\n pair, of a scalar-to-scalar function.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediff' sin 0\n\u003c/code\u003e\u003c/strong\u003e(0.0,1.0)\n\u003c/pre\u003e",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "diff'",
          "package": "ad",
          "signature": "AD s a -\u003e AD s a) -\u003e a -\u003e (a, a)",
          "source": "src/Numeric-AD-Mode-Kahn.html#diff%27",
          "type": "function"
        },
        "index": {
          "description": "The diff function calculates the value and derivative as pair of scalar-to-scalar function diff sin",
          "hierarchy": "Numeric AD Mode Kahn",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "diff'",
          "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e(b,b)",
          "package": "ad",
          "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:diff-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the derivatives of a function that returns a vector with regards to its single input.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediffF (\\a -\u003e [sin a, cos a]) 0\n\u003c/code\u003e\u003c/strong\u003e[1.0,0.0]\n\u003c/pre\u003e",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "diffF",
          "package": "ad",
          "signature": "AD s a -\u003e f (AD s a)) -\u003e a -\u003e f a",
          "source": "src/Numeric-AD-Mode-Kahn.html#diffF",
          "type": "function"
        },
        "index": {
          "description": "Compute the derivatives of function that returns vector with regards to its single input diffF sin cos",
          "hierarchy": "Numeric AD Mode Kahn",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "diffF",
          "normalized": "AD a b-\u003ec(AD a b))-\u003eb-\u003ec b",
          "package": "ad",
          "signature": "AD s a-\u003ef(AD s a))-\u003ea-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:diffF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the derivatives of a function that returns a vector with regards to its single input\n as well as the primal answer.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediffF' (\\a -\u003e [sin a, cos a]) 0\n\u003c/code\u003e\u003c/strong\u003e[(0.0,1.0),(1.0,0.0)]\n\u003c/pre\u003e",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "diffF'",
          "package": "ad",
          "signature": "AD s a -\u003e f (AD s a)) -\u003e a -\u003e f (a, a)",
          "source": "src/Numeric-AD-Mode-Kahn.html#diffF%27",
          "type": "function"
        },
        "index": {
          "description": "Compute the derivatives of function that returns vector with regards to its single input as well as the primal answer diffF sin cos",
          "hierarchy": "Numeric AD Mode Kahn",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "diffF'",
          "normalized": "AD a b-\u003ec(AD a b))-\u003eb-\u003ec(b,b)",
          "package": "ad",
          "partial": "F'",
          "signature": "AD s a-\u003ef(AD s a))-\u003ea-\u003ef(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:diffF-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egrad\u003c/a\u003e\u003c/code\u003e function calculates the gradient of a non-scalar-to-scalar function with reverse-mode AD in a single pass.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egrad (\\[x,y,z] -\u003e x*y+z) [1,2,3]\n\u003c/code\u003e\u003c/strong\u003e[2,1,1]\n\u003c/pre\u003e",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "grad",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f a",
          "source": "src/Numeric-AD-Mode-Kahn.html#grad",
          "type": "function"
        },
        "index": {
          "description": "The grad function calculates the gradient of non-scalar-to-scalar function with reverse-mode AD in single pass grad",
          "hierarchy": "Numeric AD Mode Kahn",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "grad",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea c",
          "package": "ad",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:grad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egrad'\u003c/a\u003e\u003c/code\u003e function calculates the result and gradient of a non-scalar-to-scalar function with reverse-mode AD in a single pass.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egrad' (\\[x,y,z] -\u003e 4*x*exp y+cos z) [1,2,3]\n\u003c/code\u003e\u003c/strong\u003e(28.566231899122155,[29.5562243957226,29.5562243957226,-0.1411200080598672])\n\u003c/pre\u003e",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "grad'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e (a, f a)",
          "source": "src/Numeric-AD-Mode-Kahn.html#grad%27",
          "type": "function"
        },
        "index": {
          "description": "The grad function calculates the result and gradient of non-scalar-to-scalar function with reverse-mode AD in single pass grad exp cos",
          "hierarchy": "Numeric AD Mode Kahn",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "grad'",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e(c,a c)",
          "package": "ad",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e(a,f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:grad-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egrad\u003c/a\u003e\u003c/code\u003e g f\u003c/code\u003e function calculates the gradient of a non-scalar-to-scalar function \u003ccode\u003ef\u003c/code\u003e with reverse-mode AD in a single pass.\n The gradient is combined element-wise with the argument using the function \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003egrad\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003egradWith\u003c/a\u003e\u003c/code\u003e (_ dx -\u003e dx)\n \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003egradWith\u003c/a\u003e\u003c/code\u003e const\n\u003c/pre\u003e",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "gradWith",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f b",
          "source": "src/Numeric-AD-Mode-Kahn.html#gradWith",
          "type": "function"
        },
        "index": {
          "description": "grad function calculates the gradient of non-scalar-to-scalar function with reverse-mode AD in single pass The gradient is combined element-wise with the argument using the function grad gradWith dx dx id gradWith const",
          "hierarchy": "Numeric AD Mode Kahn",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "gradWith",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea d",
          "package": "ad",
          "partial": "With",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:gradWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egrad'\u003c/a\u003e\u003c/code\u003e g f\u003c/code\u003e calculates the result and gradient of a non-scalar-to-scalar function \u003ccode\u003ef\u003c/code\u003e with reverse-mode AD in a single pass\n the gradient is combined element-wise with the argument using the function \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003egrad'\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003egradWith'\u003c/a\u003e\u003c/code\u003e (_ dx -\u003e dx)\u003c/pre\u003e",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "gradWith'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e (a, f b)",
          "source": "src/Numeric-AD-Mode-Kahn.html#gradWith%27",
          "type": "function"
        },
        "index": {
          "description": "grad calculates the result and gradient of non-scalar-to-scalar function with reverse-mode AD in single pass the gradient is combined element-wise with the argument using the function grad gradWith dx dx",
          "hierarchy": "Numeric AD Mode Kahn",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "gradWith'",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e(c,a d)",
          "package": "ad",
          "partial": "With'",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e(a,f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:gradWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the \u003ccode\u003e\u003ca\u003ehessian\u003c/a\u003e\u003c/code\u003e via the \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e of the gradient. gradient is computed in reverse mode and then the \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e is computed in reverse mode.\n\u003c/p\u003e\u003cp\u003eHowever, since the \u003ccode\u003e\u003ccode\u003e\u003ca\u003egrad\u003c/a\u003e\u003c/code\u003e f :: f a -\u003e f a\u003c/code\u003e is square this is not as fast as using the forward-mode \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e of a reverse mode gradient provided by \u003ccode\u003e\u003ca\u003ehessian\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehessian (\\[x,y] -\u003e x*y) [1,2]\n\u003c/code\u003e\u003c/strong\u003e[[0,1],[1,0]]\n\u003c/pre\u003e",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "hessian",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f (f a)",
          "source": "src/Numeric-AD-Mode-Kahn.html#hessian",
          "type": "function"
        },
        "index": {
          "description": "Compute the hessian via the jacobian of the gradient gradient is computed in reverse mode and then the jacobian is computed in reverse mode However since the grad is square this is not as fast as using the forward-mode jacobian of reverse mode gradient provided by hessian hessian",
          "hierarchy": "Numeric AD Mode Kahn",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "hessian",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea(a c)",
          "package": "ad",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:hessian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the order 3 Hessian tensor on a non-scalar-to-non-scalar function via the reverse-mode Jacobian of the reverse-mode Jacobian of the function.\n\u003c/p\u003e\u003cp\u003eLess efficient than \u003ccode\u003e\u003ca\u003ehessianF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehessianF (\\[x,y] -\u003e [x*y,x+y,exp x*cos y]) [1,2]\n\u003c/code\u003e\u003c/strong\u003e[[[0.0,1.0],[1.0,0.0]],[[0.0,0.0],[0.0,0.0]],[[-1.1312043837568135,-2.4717266720048188],[-2.4717266720048188,1.1312043837568135]]]\n\u003c/pre\u003e",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "hessianF",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f (f a))",
          "source": "src/Numeric-AD-Mode-Kahn.html#hessianF",
          "type": "function"
        },
        "index": {
          "description": "Compute the order Hessian tensor on non-scalar-to-non-scalar function via the reverse-mode Jacobian of the reverse-mode Jacobian of the function Less efficient than hessianF hessianF exp cos",
          "hierarchy": "Numeric AD Mode Kahn",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "hessianF",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a(a c))",
          "package": "ad",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f(f a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:hessianF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e function calculates the jacobian of a non-scalar-to-non-scalar function with reverse AD lazily in \u003ccode\u003em\u003c/code\u003e passes for \u003ccode\u003em\u003c/code\u003e outputs.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ejacobian (\\[x,y] -\u003e [y,x,x*y]) [2,1]\n\u003c/code\u003e\u003c/strong\u003e[[0,1],[1,0],[1,2]]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ejacobian (\\[x,y] -\u003e [exp y,cos x,x+y]) [1,2]\n\u003c/code\u003e\u003c/strong\u003e[[0.0,7.38905609893065],[-0.8414709848078965,0.0],[1.0,1.0]]\n\u003c/pre\u003e",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "jacobian",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f a)",
          "source": "src/Numeric-AD-Mode-Kahn.html#jacobian",
          "type": "function"
        },
        "index": {
          "description": "The jacobian function calculates the jacobian of non-scalar-to-non-scalar function with reverse AD lazily in passes for outputs jacobian jacobian exp cos",
          "hierarchy": "Numeric AD Mode Kahn",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "jacobian",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a c)",
          "package": "ad",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:jacobian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ejacobian'\u003c/a\u003e\u003c/code\u003e function calculates both the result and the Jacobian of a nonscalar-to-nonscalar function, using \u003ccode\u003em\u003c/code\u003e invocations of reverse AD,\n where \u003ccode\u003em\u003c/code\u003e is the output dimensionality. Applying \u003ccode\u003efmap snd\u003c/code\u003e to the result will recover the result of \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e\n | An alias for \u003ccode\u003egradF'\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eghci\u003e jacobian' ([x,y] -\u003e [y,x,x*y]) [2,1]\n [(1,[0,1]),(2,[1,0]),(2,[1,2])]\n\u003c/p\u003e",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "jacobian'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (a, f a)",
          "source": "src/Numeric-AD-Mode-Kahn.html#jacobian%27",
          "type": "function"
        },
        "index": {
          "description": "The jacobian function calculates both the result and the Jacobian of nonscalar-to-nonscalar function using invocations of reverse AD where is the output dimensionality Applying fmap snd to the result will recover the result of jacobian An alias for gradF ghci jacobian",
          "hierarchy": "Numeric AD Mode Kahn",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "jacobian'",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(c,a c)",
          "package": "ad",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(a,f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:jacobian-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'jacobianWith g f' calculates the Jacobian of a non-scalar-to-non-scalar function \u003ccode\u003ef\u003c/code\u003e with reverse AD lazily in \u003ccode\u003em\u003c/code\u003e passes for \u003ccode\u003em\u003c/code\u003e outputs.\n\u003c/p\u003e\u003cp\u003eInstead of returning the Jacobian matrix, the elements of the matrix are combined with the input using the \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ejacobianWith\u003c/a\u003e\u003c/code\u003e (_ dx -\u003e dx)\n \u003ccode\u003e\u003ca\u003ejacobianWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e = (f x -\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e x \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e f x)\n\u003c/pre\u003e",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "jacobianWith",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f b)",
          "source": "src/Numeric-AD-Mode-Kahn.html#jacobianWith",
          "type": "function"
        },
        "index": {
          "description": "jacobianWith calculates the Jacobian of non-scalar-to-non-scalar function with reverse AD lazily in passes for outputs Instead of returning the Jacobian matrix the elements of the matrix are combined with the input using the jacobian jacobianWith dx dx jacobianWith const const",
          "hierarchy": "Numeric AD Mode Kahn",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "jacobianWith",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a e)",
          "package": "ad",
          "partial": "With",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:jacobianWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ejacobianWith\u003c/a\u003e\u003c/code\u003e g f' calculates both the result and the Jacobian of a nonscalar-to-nonscalar function \u003ccode\u003ef\u003c/code\u003e, using \u003ccode\u003em\u003c/code\u003e invocations of reverse AD,\n where \u003ccode\u003em\u003c/code\u003e is the output dimensionality. Applying \u003ccode\u003efmap snd\u003c/code\u003e to the result will recover the result of \u003ccode\u003e\u003ca\u003ejacobianWith\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eInstead of returning the Jacobian matrix, the elements of the matrix are combined with the input using the \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ejacobian'\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003ejacobianWith'\u003c/a\u003e\u003c/code\u003e (_ dx -\u003e dx)\u003c/pre\u003e",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "jacobianWith'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (a, f b)",
          "source": "src/Numeric-AD-Mode-Kahn.html#jacobianWith%27",
          "type": "function"
        },
        "index": {
          "description": "jacobianWith calculates both the result and the Jacobian of nonscalar-to-nonscalar function using invocations of reverse AD where is the output dimensionality Applying fmap snd to the result will recover the result of jacobianWith Instead of returning the Jacobian matrix the elements of the matrix are combined with the input using the jacobian jacobianWith dx dx",
          "hierarchy": "Numeric AD Mode Kahn",
          "module": "Numeric.AD.Mode.Kahn",
          "name": "jacobianWith'",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(c,a e)",
          "package": "ad",
          "partial": "With'",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(a,f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Kahn.html#v:jacobianWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReverse-mode automatic differentiation using Wengert lists and\n Data.Reflection\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.AD.Mode.Reverse",
          "name": "Reverse",
          "package": "ad",
          "source": "src/Numeric-AD-Mode-Reverse.html",
          "type": "module"
        },
        "index": {
          "description": "Reverse-mode automatic differentiation using Wengert lists and Data.Reflection",
          "hierarchy": "Numeric AD Mode Reverse",
          "module": "Numeric.AD.Mode.Reverse",
          "name": "Reverse",
          "package": "ad",
          "partial": "Reverse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the derivative of a function.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediff sin 0\n\u003c/code\u003e\u003c/strong\u003e1.0\n\u003c/pre\u003e",
          "module": "Numeric.AD.Mode.Reverse",
          "name": "diff",
          "package": "ad",
          "signature": "AD s a -\u003e AD s a) -\u003e a -\u003e a",
          "source": "src/Numeric-AD-Mode-Reverse.html#diff",
          "type": "function"
        },
        "index": {
          "description": "Compute the derivative of function diff sin",
          "hierarchy": "Numeric AD Mode Reverse",
          "module": "Numeric.AD.Mode.Reverse",
          "name": "diff",
          "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003eb",
          "package": "ad",
          "signature": "AD s a-\u003eAD s a)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ediff'\u003c/a\u003e\u003c/code\u003e function calculates the result and derivative, as a pair, of a scalar-to-scalar function.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediff' sin 0\n\u003c/code\u003e\u003c/strong\u003e(0.0,1.0)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediff' exp 0\n\u003c/code\u003e\u003c/strong\u003e(1.0,1.0)\n\u003c/pre\u003e",
          "module": "Numeric.AD.Mode.Reverse",
          "name": "diff'",
          "package": "ad",
          "signature": "AD s a -\u003e AD s a) -\u003e a -\u003e (a, a)",
          "source": "src/Numeric-AD-Mode-Reverse.html#diff%27",
          "type": "function"
        },
        "index": {
          "description": "The diff function calculates the result and derivative as pair of scalar-to-scalar function diff sin diff exp",
          "hierarchy": "Numeric AD Mode Reverse",
          "module": "Numeric.AD.Mode.Reverse",
          "name": "diff'",
          "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e(b,b)",
          "package": "ad",
          "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:diff-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the derivatives of each result of a scalar-to-vector function with regards to its input.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediffF (\\a -\u003e [sin a, cos a]) 0\n\u003c/code\u003e\u003c/strong\u003e[1.0,0.0]\n\u003c/pre\u003e",
          "module": "Numeric.AD.Mode.Reverse",
          "name": "diffF",
          "package": "ad",
          "signature": "AD s a -\u003e f (AD s a)) -\u003e a -\u003e f a",
          "source": "src/Numeric-AD-Mode-Reverse.html#diffF",
          "type": "function"
        },
        "index": {
          "description": "Compute the derivatives of each result of scalar-to-vector function with regards to its input diffF sin cos",
          "hierarchy": "Numeric AD Mode Reverse",
          "module": "Numeric.AD.Mode.Reverse",
          "name": "diffF",
          "normalized": "AD a b-\u003ec(AD a b))-\u003eb-\u003ec b",
          "package": "ad",
          "signature": "AD s a-\u003ef(AD s a))-\u003ea-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:diffF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the derivatives of each result of a scalar-to-vector function with regards to its input along with the answer.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ediffF' (\\a -\u003e [sin a, cos a]) 0\n\u003c/code\u003e\u003c/strong\u003e[(0.0,1.0),(1.0,0.0)]\n\u003c/pre\u003e",
          "module": "Numeric.AD.Mode.Reverse",
          "name": "diffF'",
          "package": "ad",
          "signature": "AD s a -\u003e f (AD s a)) -\u003e a -\u003e f (a, a)",
          "source": "src/Numeric-AD-Mode-Reverse.html#diffF%27",
          "type": "function"
        },
        "index": {
          "description": "Compute the derivatives of each result of scalar-to-vector function with regards to its input along with the answer diffF sin cos",
          "hierarchy": "Numeric AD Mode Reverse",
          "module": "Numeric.AD.Mode.Reverse",
          "name": "diffF'",
          "normalized": "AD a b-\u003ec(AD a b))-\u003eb-\u003ec(b,b)",
          "package": "ad",
          "partial": "F'",
          "signature": "AD s a-\u003ef(AD s a))-\u003ea-\u003ef(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:diffF-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egrad\u003c/a\u003e\u003c/code\u003e function calculates the gradient of a non-scalar-to-scalar function with reverse-mode AD in a single pass.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egrad (\\[x,y,z] -\u003e x*y+z) [1,2,3]\n\u003c/code\u003e\u003c/strong\u003e[2,1,1]\n\u003c/pre\u003e",
          "module": "[\"Numeric.AD.Mode.Reverse\",\"Numeric.AD\"]",
          "name": "grad",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f a",
          "source": "src/Numeric-AD-Mode-Reverse.html#grad",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:grad\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:grad\"]"
        },
        "index": {
          "description": "The grad function calculates the gradient of non-scalar-to-scalar function with reverse-mode AD in single pass grad",
          "hierarchy": "Numeric AD Mode Reverse",
          "module": "Numeric.AD.Mode.Reverse",
          "name": "grad",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea c",
          "package": "ad",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:grad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egrad'\u003c/a\u003e\u003c/code\u003e function calculates the result and gradient of a non-scalar-to-scalar function with reverse-mode AD in a single pass.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egrad' (\\[x,y,z] -\u003e x*y+z) [1,2,3]\n\u003c/code\u003e\u003c/strong\u003e(5,[2,1,1])\n\u003c/pre\u003e",
          "module": "[\"Numeric.AD.Mode.Reverse\",\"Numeric.AD\"]",
          "name": "grad'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e (a, f a)",
          "source": "src/Numeric-AD-Mode-Reverse.html#grad%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:grad-39-\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:grad-39-\"]"
        },
        "index": {
          "description": "The grad function calculates the result and gradient of non-scalar-to-scalar function with reverse-mode AD in single pass grad",
          "hierarchy": "Numeric AD Mode Reverse",
          "module": "Numeric.AD.Mode.Reverse",
          "name": "grad'",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e(c,a c)",
          "package": "ad",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e(a,f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:grad-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egrad\u003c/a\u003e\u003c/code\u003e g f\u003c/code\u003e function calculates the gradient of a non-scalar-to-scalar function \u003ccode\u003ef\u003c/code\u003e with reverse-mode AD in a single pass.\n The gradient is combined element-wise with the argument using the function \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003egrad\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003egradWith\u003c/a\u003e\u003c/code\u003e (_ dx -\u003e dx)\n \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003egradWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "[\"Numeric.AD.Mode.Reverse\",\"Numeric.AD\"]",
          "name": "gradWith",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f b",
          "source": "src/Numeric-AD-Mode-Reverse.html#gradWith",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:gradWith\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:gradWith\"]"
        },
        "index": {
          "description": "grad function calculates the gradient of non-scalar-to-scalar function with reverse-mode AD in single pass The gradient is combined element-wise with the argument using the function grad gradWith dx dx id gradWith const",
          "hierarchy": "Numeric AD Mode Reverse",
          "module": "Numeric.AD.Mode.Reverse",
          "name": "gradWith",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea d",
          "package": "ad",
          "partial": "With",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:gradWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003egrad'\u003c/a\u003e\u003c/code\u003e g f\u003c/code\u003e calculates the result and gradient of a non-scalar-to-scalar function \u003ccode\u003ef\u003c/code\u003e with reverse-mode AD in a single pass\n the gradient is combined element-wise with the argument using the function \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003egrad'\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003egradWith'\u003c/a\u003e\u003c/code\u003e (_ dx -\u003e dx)\n\u003c/pre\u003e",
          "module": "[\"Numeric.AD.Mode.Reverse\",\"Numeric.AD\"]",
          "name": "gradWith'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e (a, f b)",
          "source": "src/Numeric-AD-Mode-Reverse.html#gradWith%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:gradWith-39-\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:gradWith-39-\"]"
        },
        "index": {
          "description": "grad calculates the result and gradient of non-scalar-to-scalar function with reverse-mode AD in single pass the gradient is combined element-wise with the argument using the function grad gradWith dx dx",
          "hierarchy": "Numeric AD Mode Reverse",
          "module": "Numeric.AD.Mode.Reverse",
          "name": "gradWith'",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e(c,a d)",
          "package": "ad",
          "partial": "With'",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e(a,f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:gradWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the hessian via the jacobian of the gradient. gradient is computed in reverse mode and then the jacobian is computed in reverse mode.\n\u003c/p\u003e\u003cp\u003eHowever, since the \u003ccode\u003e\u003ccode\u003e\u003ca\u003egrad\u003c/a\u003e\u003c/code\u003e f :: f a -\u003e f a\u003c/code\u003e is square this is not as fast as using the forward-mode Jacobian of a reverse mode gradient provided by \u003ccode\u003e\u003ca\u003ehessian\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehessian (\\[x,y] -\u003e x*y) [1,2]\n\u003c/code\u003e\u003c/strong\u003e[[0,1],[1,0]]\n\u003c/pre\u003e",
          "module": "Numeric.AD.Mode.Reverse",
          "name": "hessian",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f (f a)",
          "source": "src/Numeric-AD-Mode-Reverse.html#hessian",
          "type": "function"
        },
        "index": {
          "description": "Compute the hessian via the jacobian of the gradient gradient is computed in reverse mode and then the jacobian is computed in reverse mode However since the grad is square this is not as fast as using the forward-mode Jacobian of reverse mode gradient provided by hessian hessian",
          "hierarchy": "Numeric AD Mode Reverse",
          "module": "Numeric.AD.Mode.Reverse",
          "name": "hessian",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea(a c)",
          "package": "ad",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:hessian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the order 3 Hessian tensor on a non-scalar-to-non-scalar function via the reverse-mode Jacobian of the reverse-mode Jacobian of the function.\n\u003c/p\u003e\u003cp\u003eLess efficient than \u003ccode\u003e\u003ca\u003ehessianF\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehessianF (\\[x,y] -\u003e [x*y,x+y,exp x*cos y]) [1,2]\n\u003c/code\u003e\u003c/strong\u003e[[[0.0,1.0],[1.0,0.0]],[[0.0,0.0],[0.0,0.0]],[[-1.1312043837568135,-2.4717266720048188],[-2.4717266720048188,1.1312043837568135]]]\n\u003c/pre\u003e",
          "module": "Numeric.AD.Mode.Reverse",
          "name": "hessianF",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f (f a))",
          "source": "src/Numeric-AD-Mode-Reverse.html#hessianF",
          "type": "function"
        },
        "index": {
          "description": "Compute the order Hessian tensor on non-scalar-to-non-scalar function via the reverse-mode Jacobian of the reverse-mode Jacobian of the function Less efficient than hessianF hessianF exp cos",
          "hierarchy": "Numeric AD Mode Reverse",
          "module": "Numeric.AD.Mode.Reverse",
          "name": "hessianF",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a(a c))",
          "package": "ad",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f(f a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:hessianF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e function calculates the jacobian of a non-scalar-to-non-scalar function with reverse AD lazily in \u003ccode\u003em\u003c/code\u003e passes for \u003ccode\u003em\u003c/code\u003e outputs.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ejacobian (\\[x,y] -\u003e [y,x,x*y]) [2,1]\n\u003c/code\u003e\u003c/strong\u003e[[0,1],[1,0],[1,2]]\n\u003c/pre\u003e",
          "module": "Numeric.AD.Mode.Reverse",
          "name": "jacobian",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f a)",
          "source": "src/Numeric-AD-Mode-Reverse.html#jacobian",
          "type": "function"
        },
        "index": {
          "description": "The jacobian function calculates the jacobian of non-scalar-to-non-scalar function with reverse AD lazily in passes for outputs jacobian",
          "hierarchy": "Numeric AD Mode Reverse",
          "module": "Numeric.AD.Mode.Reverse",
          "name": "jacobian",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a c)",
          "package": "ad",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:jacobian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ejacobian'\u003c/a\u003e\u003c/code\u003e function calculates both the result and the Jacobian of a nonscalar-to-nonscalar function, using \u003ccode\u003em\u003c/code\u003e invocations of reverse AD,\n where \u003ccode\u003em\u003c/code\u003e is the output dimensionality. Applying \u003ccode\u003efmap snd\u003c/code\u003e to the result will recover the result of \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e\n | An alias for \u003ccode\u003egradF'\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ejacobian' (\\[x,y] -\u003e [y,x,x*y]) [2,1]\n\u003c/code\u003e\u003c/strong\u003e[(1,[0,1]),(2,[1,0]),(2,[1,2])]\n\u003c/pre\u003e",
          "module": "Numeric.AD.Mode.Reverse",
          "name": "jacobian'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (a, f a)",
          "source": "src/Numeric-AD-Mode-Reverse.html#jacobian%27",
          "type": "function"
        },
        "index": {
          "description": "The jacobian function calculates both the result and the Jacobian of nonscalar-to-nonscalar function using invocations of reverse AD where is the output dimensionality Applying fmap snd to the result will recover the result of jacobian An alias for gradF jacobian",
          "hierarchy": "Numeric AD Mode Reverse",
          "module": "Numeric.AD.Mode.Reverse",
          "name": "jacobian'",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(c,a c)",
          "package": "ad",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(a,f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:jacobian-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'jacobianWith g f' calculates the Jacobian of a non-scalar-to-non-scalar function \u003ccode\u003ef\u003c/code\u003e with reverse AD lazily in \u003ccode\u003em\u003c/code\u003e passes for \u003ccode\u003em\u003c/code\u003e outputs.\n\u003c/p\u003e\u003cp\u003eInstead of returning the Jacobian matrix, the elements of the matrix are combined with the input using the \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003ejacobianWith\u003c/a\u003e\u003c/code\u003e (_ dx -\u003e dx)\n \u003ccode\u003e\u003ca\u003ejacobianWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e == (f x -\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e x \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e f x)\n\u003c/pre\u003e",
          "module": "Numeric.AD.Mode.Reverse",
          "name": "jacobianWith",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f b)",
          "source": "src/Numeric-AD-Mode-Reverse.html#jacobianWith",
          "type": "function"
        },
        "index": {
          "description": "jacobianWith calculates the Jacobian of non-scalar-to-non-scalar function with reverse AD lazily in passes for outputs Instead of returning the Jacobian matrix the elements of the matrix are combined with the input using the jacobian jacobianWith dx dx jacobianWith const const",
          "hierarchy": "Numeric AD Mode Reverse",
          "module": "Numeric.AD.Mode.Reverse",
          "name": "jacobianWith",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a e)",
          "package": "ad",
          "partial": "With",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:jacobianWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ejacobianWith\u003c/a\u003e\u003c/code\u003e g f' calculates both the result and the Jacobian of a nonscalar-to-nonscalar function \u003ccode\u003ef\u003c/code\u003e, using \u003ccode\u003em\u003c/code\u003e invocations of reverse AD,\n where \u003ccode\u003em\u003c/code\u003e is the output dimensionality. Applying \u003ccode\u003efmap snd\u003c/code\u003e to the result will recover the result of \u003ccode\u003e\u003ca\u003ejacobianWith\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eInstead of returning the Jacobian matrix, the elements of the matrix are combined with the input using the \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003ejacobian'\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003ejacobianWith'\u003c/a\u003e\u003c/code\u003e (_ dx -\u003e dx)\u003c/pre\u003e",
          "module": "Numeric.AD.Mode.Reverse",
          "name": "jacobianWith'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (a, f b)",
          "source": "src/Numeric-AD-Mode-Reverse.html#jacobianWith%27",
          "type": "function"
        },
        "index": {
          "description": "jacobianWith calculates both the result and the Jacobian of nonscalar-to-nonscalar function using invocations of reverse AD where is the output dimensionality Applying fmap snd to the result will recover the result of jacobianWith Instead of returning the Jacobian matrix the elements of the matrix are combined with the input using the jacobian jacobianWith dx dx",
          "hierarchy": "Numeric AD Mode Reverse",
          "module": "Numeric.AD.Mode.Reverse",
          "name": "jacobianWith'",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(c,a e)",
          "package": "ad",
          "partial": "With'",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(a,f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Reverse.html#v:jacobianWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHigher order derivatives via a \"dual number tower\".\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.AD.Mode.Sparse",
          "name": "Sparse",
          "package": "ad",
          "source": "src/Numeric-AD-Mode-Sparse.html",
          "type": "module"
        },
        "index": {
          "description": "Higher order derivatives via dual number tower",
          "hierarchy": "Numeric AD Mode Sparse",
          "module": "Numeric.AD.Mode.Sparse",
          "name": "Sparse",
          "package": "ad",
          "partial": "Sparse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Sparse",
          "name": "Grad",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Sparse.html#Grad",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Sparse",
          "module": "Numeric.AD.Mode.Sparse",
          "name": "Grad",
          "package": "ad",
          "partial": "Grad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#t:Grad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Sparse",
          "name": "Grads",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Sparse.html#Grads",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Sparse",
          "module": "Numeric.AD.Mode.Sparse",
          "name": "Grads",
          "package": "ad",
          "partial": "Grads",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#t:Grads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Sparse",
          "name": "grad",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f a",
          "source": "src/Numeric-AD-Mode-Sparse.html#grad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Sparse",
          "module": "Numeric.AD.Mode.Sparse",
          "name": "grad",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea c",
          "package": "ad",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:grad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Sparse",
          "name": "grad'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e (a, f a)",
          "source": "src/Numeric-AD-Mode-Sparse.html#grad%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Sparse",
          "module": "Numeric.AD.Mode.Sparse",
          "name": "grad'",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e(c,a c)",
          "package": "ad",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e(a,f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:grad-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Sparse",
          "name": "gradWith",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f b",
          "source": "src/Numeric-AD-Mode-Sparse.html#gradWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Sparse",
          "module": "Numeric.AD.Mode.Sparse",
          "name": "gradWith",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea d",
          "package": "ad",
          "partial": "With",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:gradWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Sparse",
          "name": "gradWith'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e (a, f b)",
          "source": "src/Numeric-AD-Mode-Sparse.html#gradWith%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Sparse",
          "module": "Numeric.AD.Mode.Sparse",
          "name": "gradWith'",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e(c,a d)",
          "package": "ad",
          "partial": "With'",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e(a,f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:gradWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.AD.Mode.Sparse\",\"Numeric.AD\"]",
          "name": "grads",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e Cofree f a",
          "source": "src/Numeric-AD-Mode-Sparse.html#grads",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:grads\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:grads\"]"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Sparse",
          "module": "Numeric.AD.Mode.Sparse",
          "name": "grads",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003eCofree a c",
          "package": "ad",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003eCofree f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:grads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Sparse",
          "name": "hessian",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f (f a)",
          "source": "src/Numeric-AD-Mode-Sparse.html#hessian",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Sparse",
          "module": "Numeric.AD.Mode.Sparse",
          "name": "hessian",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea(a c)",
          "package": "ad",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:hessian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.AD.Mode.Sparse\",\"Numeric.AD\"]",
          "name": "hessian'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e (a, f (a, f a))",
          "source": "src/Numeric-AD-Mode-Sparse.html#hessian%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:hessian-39-\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:hessian-39-\"]"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Sparse",
          "module": "Numeric.AD.Mode.Sparse",
          "name": "hessian'",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e(c,a(c,a c))",
          "package": "ad",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e(a,f(a,f a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:hessian-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Sparse",
          "name": "hessianF",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f (f a))",
          "source": "src/Numeric-AD-Mode-Sparse.html#hessianF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Sparse",
          "module": "Numeric.AD.Mode.Sparse",
          "name": "hessianF",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a(a c))",
          "package": "ad",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f(f a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:hessianF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.AD.Mode.Sparse\",\"Numeric.AD\"]",
          "name": "hessianF'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (a, f (a, f a))",
          "source": "src/Numeric-AD-Mode-Sparse.html#hessianF%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:hessianF-39-\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:hessianF-39-\"]"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Sparse",
          "module": "Numeric.AD.Mode.Sparse",
          "name": "hessianF'",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(c,a(c,a c))",
          "package": "ad",
          "partial": "F'",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(a,f(a,f a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:hessianF-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Sparse",
          "name": "jacobian",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f a)",
          "source": "src/Numeric-AD-Mode-Sparse.html#jacobian",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Sparse",
          "module": "Numeric.AD.Mode.Sparse",
          "name": "jacobian",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a c)",
          "package": "ad",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:jacobian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Sparse",
          "name": "jacobian'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (a, f a)",
          "source": "src/Numeric-AD-Mode-Sparse.html#jacobian%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Sparse",
          "module": "Numeric.AD.Mode.Sparse",
          "name": "jacobian'",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(c,a c)",
          "package": "ad",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(a,f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:jacobian-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Sparse",
          "name": "jacobianWith",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f b)",
          "source": "src/Numeric-AD-Mode-Sparse.html#jacobianWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Sparse",
          "module": "Numeric.AD.Mode.Sparse",
          "name": "jacobianWith",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a e)",
          "package": "ad",
          "partial": "With",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:jacobianWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Sparse",
          "name": "jacobianWith'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (a, f b)",
          "source": "src/Numeric-AD-Mode-Sparse.html#jacobianWith%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Sparse",
          "module": "Numeric.AD.Mode.Sparse",
          "name": "jacobianWith'",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(c,a e)",
          "package": "ad",
          "partial": "With'",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(a,f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:jacobianWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.AD.Mode.Sparse\",\"Numeric.AD\"]",
          "name": "jacobians",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (Cofree f a)",
          "source": "src/Numeric-AD-Mode-Sparse.html#jacobians",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:jacobians\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:jacobians\"]"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Sparse",
          "module": "Numeric.AD.Mode.Sparse",
          "name": "jacobians",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(Cofree a c)",
          "package": "ad",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(Cofree f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Sparse.html#v:jacobians"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHigher order derivatives via a \"dual number tower\".\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.AD.Mode.Tower",
          "name": "Tower",
          "package": "ad",
          "source": "src/Numeric-AD-Mode-Tower.html",
          "type": "module"
        },
        "index": {
          "description": "Higher order derivatives via dual number tower",
          "hierarchy": "Numeric AD Mode Tower",
          "module": "Numeric.AD.Mode.Tower",
          "name": "Tower",
          "package": "ad",
          "partial": "Tower",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Tower",
          "name": "diff",
          "package": "ad",
          "signature": "AD s a -\u003e AD s a) -\u003e a -\u003e a",
          "source": "src/Numeric-AD-Mode-Tower.html#diff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Tower",
          "module": "Numeric.AD.Mode.Tower",
          "name": "diff",
          "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003eb",
          "package": "ad",
          "signature": "AD s a-\u003eAD s a)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Tower",
          "name": "diff'",
          "package": "ad",
          "signature": "AD s a -\u003e AD s a) -\u003e a -\u003e (a, a)",
          "source": "src/Numeric-AD-Mode-Tower.html#diff%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Tower",
          "module": "Numeric.AD.Mode.Tower",
          "name": "diff'",
          "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e(b,b)",
          "package": "ad",
          "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:diff-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.AD.Mode.Tower\",\"Numeric.AD\"]",
          "name": "diffs",
          "package": "ad",
          "signature": "AD s a -\u003e AD s a) -\u003e a -\u003e [a]",
          "source": "src/Numeric-AD-Mode-Tower.html#diffs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:diffs\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:diffs\"]"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Tower",
          "module": "Numeric.AD.Mode.Tower",
          "name": "diffs",
          "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e[b]",
          "package": "ad",
          "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:diffs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.AD.Mode.Tower\",\"Numeric.AD\"]",
          "name": "diffs0",
          "package": "ad",
          "signature": "AD s a -\u003e AD s a) -\u003e a -\u003e [a]",
          "source": "src/Numeric-AD-Mode-Tower.html#diffs0",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:diffs0\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:diffs0\"]"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Tower",
          "module": "Numeric.AD.Mode.Tower",
          "name": "diffs0",
          "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e[b]",
          "package": "ad",
          "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:diffs0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.AD.Mode.Tower\",\"Numeric.AD\"]",
          "name": "diffs0F",
          "package": "ad",
          "signature": "AD s a -\u003e f (AD s a)) -\u003e a -\u003e f [a]",
          "source": "src/Numeric-AD-Mode-Tower.html#diffs0F",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:diffs0F\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:diffs0F\"]"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Tower",
          "module": "Numeric.AD.Mode.Tower",
          "name": "diffs0F",
          "normalized": "AD a b-\u003ec(AD a b))-\u003eb-\u003ec[b]",
          "package": "ad",
          "signature": "AD s a-\u003ef(AD s a))-\u003ea-\u003ef[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:diffs0F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.AD.Mode.Tower\",\"Numeric.AD\"]",
          "name": "diffsF",
          "package": "ad",
          "signature": "AD s a -\u003e f (AD s a)) -\u003e a -\u003e f [a]",
          "source": "src/Numeric-AD-Mode-Tower.html#diffsF",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:diffsF\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:diffsF\"]"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Tower",
          "module": "Numeric.AD.Mode.Tower",
          "name": "diffsF",
          "normalized": "AD a b-\u003ec(AD a b))-\u003eb-\u003ec[b]",
          "package": "ad",
          "signature": "AD s a-\u003ef(AD s a))-\u003ea-\u003ef[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:diffsF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Tower",
          "name": "du",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f (a, a) -\u003e a",
          "source": "src/Numeric-AD-Mode-Tower.html#du",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Tower",
          "module": "Numeric.AD.Mode.Tower",
          "name": "du",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea(c,c)-\u003ec",
          "package": "ad",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef(a,a)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:du"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Tower",
          "name": "du'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f (a, a) -\u003e (a, a)",
          "source": "src/Numeric-AD-Mode-Tower.html#du%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Tower",
          "module": "Numeric.AD.Mode.Tower",
          "name": "du'",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea(c,c)-\u003e(c,c)",
          "package": "ad",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef(a,a)-\u003e(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:du-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Tower",
          "name": "duF",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f (a, a) -\u003e g a",
          "source": "src/Numeric-AD-Mode-Tower.html#duF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Tower",
          "module": "Numeric.AD.Mode.Tower",
          "name": "duF",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea(c,c)-\u003ed c",
          "package": "ad",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef(a,a)-\u003eg a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:duF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Mode.Tower",
          "name": "duF'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f (a, a) -\u003e g (a, a)",
          "source": "src/Numeric-AD-Mode-Tower.html#duF%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Tower",
          "module": "Numeric.AD.Mode.Tower",
          "name": "duF'",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea(c,c)-\u003ed(c,c)",
          "package": "ad",
          "partial": "F'",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef(a,a)-\u003eg(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:duF-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.AD.Mode.Tower\",\"Numeric.AD\"]",
          "name": "dus",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f [a] -\u003e [a]",
          "source": "src/Numeric-AD-Mode-Tower.html#dus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:dus\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:dus\"]"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Tower",
          "module": "Numeric.AD.Mode.Tower",
          "name": "dus",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea[c]-\u003e[c]",
          "package": "ad",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:dus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.AD.Mode.Tower\",\"Numeric.AD\"]",
          "name": "dus0",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f [a] -\u003e [a]",
          "source": "src/Numeric-AD-Mode-Tower.html#dus0",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:dus0\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:dus0\"]"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Tower",
          "module": "Numeric.AD.Mode.Tower",
          "name": "dus0",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea[c]-\u003e[c]",
          "package": "ad",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:dus0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.AD.Mode.Tower\",\"Numeric.AD\"]",
          "name": "dus0F",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f [a] -\u003e g [a]",
          "source": "src/Numeric-AD-Mode-Tower.html#dus0F",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:dus0F\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:dus0F\"]"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Tower",
          "module": "Numeric.AD.Mode.Tower",
          "name": "dus0F",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea[c]-\u003ed[c]",
          "package": "ad",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef[a]-\u003eg[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:dus0F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.AD.Mode.Tower\",\"Numeric.AD\"]",
          "name": "dusF",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f [a] -\u003e g [a]",
          "source": "src/Numeric-AD-Mode-Tower.html#dusF",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:dusF\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:dusF\"]"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Tower",
          "module": "Numeric.AD.Mode.Tower",
          "name": "dusF",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea[c]-\u003ed[c]",
          "package": "ad",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef[a]-\u003eg[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:dusF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.AD.Mode.Tower\",\"Numeric.AD\"]",
          "name": "maclaurin",
          "package": "ad",
          "signature": "AD s a -\u003e AD s a) -\u003e a -\u003e [a]",
          "source": "src/Numeric-AD-Mode-Tower.html#maclaurin",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:maclaurin\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:maclaurin\"]"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Tower",
          "module": "Numeric.AD.Mode.Tower",
          "name": "maclaurin",
          "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e[b]",
          "package": "ad",
          "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:maclaurin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.AD.Mode.Tower\",\"Numeric.AD\"]",
          "name": "maclaurin0",
          "package": "ad",
          "signature": "AD s a -\u003e AD s a) -\u003e a -\u003e [a]",
          "source": "src/Numeric-AD-Mode-Tower.html#maclaurin0",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:maclaurin0\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:maclaurin0\"]"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Tower",
          "module": "Numeric.AD.Mode.Tower",
          "name": "maclaurin0",
          "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e[b]",
          "package": "ad",
          "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:maclaurin0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.AD.Mode.Tower\",\"Numeric.AD\"]",
          "name": "taylor",
          "package": "ad",
          "signature": "AD s a -\u003e AD s a) -\u003e a -\u003e a -\u003e [a]",
          "source": "src/Numeric-AD-Mode-Tower.html#taylor",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:taylor\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:taylor\"]"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Tower",
          "module": "Numeric.AD.Mode.Tower",
          "name": "taylor",
          "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003eb-\u003e[b]",
          "package": "ad",
          "signature": "AD s a-\u003eAD s a)-\u003ea-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:taylor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Numeric.AD.Mode.Tower\",\"Numeric.AD\"]",
          "name": "taylor0",
          "package": "ad",
          "signature": "AD s a -\u003e AD s a) -\u003e a -\u003e a -\u003e [a]",
          "source": "src/Numeric-AD-Mode-Tower.html#taylor0",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:taylor0\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:taylor0\"]"
        },
        "index": {
          "hierarchy": "Numeric AD Mode Tower",
          "module": "Numeric.AD.Mode.Tower",
          "name": "taylor0",
          "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003eb-\u003e[b]",
          "package": "ad",
          "signature": "AD s a-\u003eAD s a)-\u003ea-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Mode-Tower.html#v:taylor0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Newton",
          "name": "Newton",
          "package": "ad",
          "source": "src/Numeric-AD-Newton.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric AD Newton",
          "module": "Numeric.AD.Newton",
          "name": "Newton",
          "package": "ad",
          "partial": "Newton",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Newton.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a conjugate gradient ascent using reverse mode automatic differentiation to compute the gradient.\n\u003c/p\u003e",
          "module": "[\"Numeric.AD.Newton\",\"Numeric.AD\"]",
          "name": "conjugateGradientAscent",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e [f a]",
          "source": "src/Numeric-AD-Newton.html#conjugateGradientAscent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Newton.html#v:conjugateGradientAscent\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:conjugateGradientAscent\"]"
        },
        "index": {
          "description": "Perform conjugate gradient ascent using reverse mode automatic differentiation to compute the gradient",
          "hierarchy": "Numeric AD Newton",
          "module": "Numeric.AD.Newton",
          "name": "conjugateGradientAscent",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e[a c]",
          "package": "ad",
          "partial": "Gradient Ascent",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e[f a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Newton.html#v:conjugateGradientAscent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a conjugate gradient descent using reverse mode automatic differentiation to compute the gradient.\n\u003c/p\u003e",
          "module": "[\"Numeric.AD.Newton\",\"Numeric.AD\"]",
          "name": "conjugateGradientDescent",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e [f a]",
          "source": "src/Numeric-AD-Newton.html#conjugateGradientDescent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Newton.html#v:conjugateGradientDescent\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:conjugateGradientDescent\"]"
        },
        "index": {
          "description": "Perform conjugate gradient descent using reverse mode automatic differentiation to compute the gradient",
          "hierarchy": "Numeric AD Newton",
          "module": "Numeric.AD.Newton",
          "name": "conjugateGradientDescent",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e[a c]",
          "package": "ad",
          "partial": "Gradient Descent",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e[f a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Newton.html#v:conjugateGradientDescent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eextremum\u003c/a\u003e\u003c/code\u003e function finds an extremum of a scalar\n function using Newton's method; produces a stream of increasingly\n accurate results.  (Modulo the usual caveats.) If the stream\n becomes constant (\u003ca\u003eit converges\u003c/a\u003e), no further elements are returned.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elast $ take 10 $ extremum cos 1\n\u003c/code\u003e\u003c/strong\u003e0.0\n\u003c/pre\u003e",
          "module": "Numeric.AD.Newton",
          "name": "extremum",
          "package": "ad",
          "signature": "AD s a -\u003e AD s a) -\u003e a -\u003e [a]",
          "source": "src/Numeric-AD-Newton.html#extremum",
          "type": "function"
        },
        "index": {
          "description": "The extremum function finds an extremum of scalar function using Newton method produces stream of increasingly accurate results Modulo the usual caveats If the stream becomes constant it converges no further elements are returned last take extremum cos",
          "hierarchy": "Numeric AD Newton",
          "module": "Numeric.AD.Newton",
          "name": "extremum",
          "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e[b]",
          "package": "ad",
          "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Newton.html#v:extremum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindZero\u003c/a\u003e\u003c/code\u003e function finds a zero of a scalar function using\n Newton's method; its output is a stream of increasingly accurate\n results.  (Modulo the usual caveats.) If the stream becomes constant\n (\u003ca\u003eit converges\u003c/a\u003e), no further elements are returned.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etake 10 $ findZero (\\x-\u003ex^2-4) 1\n\u003c/code\u003e\u003c/strong\u003e[1.0,2.5,2.05,2.000609756097561,2.0000000929222947,2.000000000000002,2.0]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eimport Data.Complex\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elast $ take 10 $ findZero ((+1).(^2)) (1 :+ 1)\n\u003c/code\u003e\u003c/strong\u003e0.0 :+ 1.0\n\u003c/pre\u003e",
          "module": "Numeric.AD.Newton",
          "name": "findZero",
          "package": "ad",
          "signature": "AD s a -\u003e AD s a) -\u003e a -\u003e [a]",
          "source": "src/Numeric-AD-Newton.html#findZero",
          "type": "function"
        },
        "index": {
          "description": "The findZero function finds zero of scalar function using Newton method its output is stream of increasingly accurate results Modulo the usual caveats If the stream becomes constant it converges no further elements are returned Examples take findZero import Data.Complex last take findZero",
          "hierarchy": "Numeric AD Newton",
          "module": "Numeric.AD.Newton",
          "name": "findZero",
          "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e[b]",
          "package": "ad",
          "partial": "Zero",
          "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Newton.html#v:findZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efixedPoint\u003c/a\u003e\u003c/code\u003e function find a fixedpoint of a scalar\n function using Newton's method; its output is a stream of\n increasingly accurate results.  (Modulo the usual caveats.)\n\u003c/p\u003e\u003cp\u003eIf the stream becomes constant (\u003ca\u003eit converges\u003c/a\u003e), no further\n elements are returned.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elast $ take 10 $ fixedPoint cos 1\n\u003c/code\u003e\u003c/strong\u003e0.7390851332151607\n\u003c/pre\u003e",
          "module": "Numeric.AD.Newton",
          "name": "fixedPoint",
          "package": "ad",
          "signature": "AD s a -\u003e AD s a) -\u003e a -\u003e [a]",
          "source": "src/Numeric-AD-Newton.html#fixedPoint",
          "type": "function"
        },
        "index": {
          "description": "The fixedPoint function find fixedpoint of scalar function using Newton method its output is stream of increasingly accurate results Modulo the usual caveats If the stream becomes constant it converges no further elements are returned last take fixedPoint cos",
          "hierarchy": "Numeric AD Newton",
          "module": "Numeric.AD.Newton",
          "name": "fixedPoint",
          "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003e[b]",
          "package": "ad",
          "partial": "Point",
          "signature": "AD s a-\u003eAD s a)-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Newton.html#v:fixedPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a gradient descent using reverse mode automatic differentiation to compute the gradient.\n\u003c/p\u003e",
          "module": "[\"Numeric.AD.Newton\",\"Numeric.AD\"]",
          "name": "gradientAscent",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e [f a]",
          "source": "src/Numeric-AD-Newton.html#gradientAscent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Newton.html#v:gradientAscent\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:gradientAscent\"]"
        },
        "index": {
          "description": "Perform gradient descent using reverse mode automatic differentiation to compute the gradient",
          "hierarchy": "Numeric AD Newton",
          "module": "Numeric.AD.Newton",
          "name": "gradientAscent",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e[a c]",
          "package": "ad",
          "partial": "Ascent",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e[f a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Newton.html#v:gradientAscent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egradientDescent\u003c/a\u003e\u003c/code\u003e function performs a multivariate\n optimization, based on the naive-gradient-descent in the file\n \u003ccode\u003estalingrad/examples/flow-tests/pre-saddle-1a.vlad\u003c/code\u003e from the\n VLAD compiler Stalingrad sources.  Its output is a stream of\n increasingly accurate results.  (Modulo the usual caveats.)\n\u003c/p\u003e\u003cp\u003eIt uses reverse mode automatic differentiation to compute the gradient.\n\u003c/p\u003e",
          "module": "[\"Numeric.AD.Newton\",\"Numeric.AD\"]",
          "name": "gradientDescent",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e [f a]",
          "source": "src/Numeric-AD-Newton.html#gradientDescent",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ad/docs/Numeric-AD-Newton.html#v:gradientDescent\",\"http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:gradientDescent\"]"
        },
        "index": {
          "description": "The gradientDescent function performs multivariate optimization based on the naive-gradient-descent in the file stalingrad examples flow-tests pre-saddle-1a.vlad from the VLAD compiler Stalingrad sources Its output is stream of increasingly accurate results Modulo the usual caveats It uses reverse mode automatic differentiation to compute the gradient",
          "hierarchy": "Numeric AD Newton",
          "module": "Numeric.AD.Newton",
          "name": "gradientDescent",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003e[a c]",
          "package": "ad",
          "partial": "Descent",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003e[f a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Newton.html#v:gradientDescent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einverse\u003c/a\u003e\u003c/code\u003e function inverts a scalar function using\n Newton's method; its output is a stream of increasingly accurate\n results.  (Modulo the usual caveats.) If the stream becomes\n constant (\u003ca\u003eit converges\u003c/a\u003e), no further elements are returned.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elast $ take 10 $ inverse sqrt 1 (sqrt 10)\n\u003c/code\u003e\u003c/strong\u003e10.0\n\u003c/pre\u003e",
          "module": "Numeric.AD.Newton",
          "name": "inverse",
          "package": "ad",
          "signature": "AD s a -\u003e AD s a) -\u003e a -\u003e a -\u003e [a]",
          "source": "src/Numeric-AD-Newton.html#inverse",
          "type": "function"
        },
        "index": {
          "description": "The inverse function inverts scalar function using Newton method its output is stream of increasingly accurate results Modulo the usual caveats If the stream becomes constant it converges no further elements are returned Example last take inverse sqrt sqrt",
          "hierarchy": "Numeric AD Newton",
          "module": "Numeric.AD.Newton",
          "name": "inverse",
          "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003eb-\u003e[b]",
          "package": "ad",
          "signature": "AD s a-\u003eAD s a)-\u003ea-\u003ea-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Newton.html#v:inverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Types",
          "name": "Types",
          "package": "ad",
          "source": "src/Numeric-AD-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric AD Types",
          "module": "Numeric.AD.Types",
          "name": "Types",
          "package": "ad",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAD\u003c/a\u003e\u003c/code\u003e serves as a common wrapper for different \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e instances, exposing a traditional\n numerical tower. Universal quantification is used to limit the actions in user code to\n machinery that will return the same answers under all AD modes, allowing us to use modes\n interchangeably as both the type level \"brand\" and dictionary, providing a common API.\n\u003c/p\u003e",
          "module": "Numeric.AD.Types",
          "name": "AD",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Types.html#AD",
          "type": "newtype"
        },
        "index": {
          "description": "AD serves as common wrapper for different Mode instances exposing traditional numerical tower Universal quantification is used to limit the actions in user code to machinery that will return the same answers under all AD modes allowing us to use modes interchangeably as both the type level brand and dictionary providing common API",
          "hierarchy": "Numeric AD Types",
          "module": "Numeric.AD.Types",
          "name": "AD",
          "package": "ad",
          "partial": "AD",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#t:AD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eJet\u003c/a\u003e\u003c/code\u003e is a tower of all (higher order) partial derivatives of a function\n\u003c/p\u003e\u003cp\u003eAt each step, a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJet\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e is wrapped in another layer worth of \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e a :- f a :- f (f a) :- f (f (f a)) :- ...\n\u003c/pre\u003e",
          "module": "Numeric.AD.Types",
          "name": "Jet",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Jet.html#Jet",
          "type": "data"
        },
        "index": {
          "description": "Jet is tower of all higher order partial derivatives of function At each step Jet is wrapped in another layer worth of",
          "hierarchy": "Numeric AD Types",
          "module": "Numeric.AD.Types",
          "name": "Jet",
          "package": "ad",
          "partial": "Jet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#t:Jet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Types",
          "name": "Mode",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Classes.html#Mode",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric AD Types",
          "module": "Numeric.AD.Types",
          "name": "Mode",
          "package": "ad",
          "partial": "Mode",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScalar-vector multiplication\n\u003c/p\u003e",
          "module": "Numeric.AD.Types",
          "name": "(*^)",
          "package": "ad",
          "signature": "a -\u003e t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#%2A%5E",
          "type": "method"
        },
        "index": {
          "description": "Scalar-vector multiplication",
          "hierarchy": "Numeric AD Types",
          "module": "Numeric.AD.Types",
          "name": "(*^) *^",
          "normalized": "a-\u003eb a-\u003eb a",
          "package": "ad",
          "signature": "a-\u003et a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:-42--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExponentiation, this should be overloaded if you can figure out anything about what is constant!\n\u003c/p\u003e",
          "module": "Numeric.AD.Types",
          "name": "(\u003c**\u003e)",
          "package": "ad",
          "signature": "t a -\u003e t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#%3C%2A%2A%3E",
          "type": "method"
        },
        "index": {
          "description": "Exponentiation this should be overloaded if you can figure out anything about what is constant",
          "hierarchy": "Numeric AD Types",
          "module": "Numeric.AD.Types",
          "name": "(\u003c**\u003e) \u003c**\u003e",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "ad",
          "signature": "t a-\u003et a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:-60--42--42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVector sum\n\u003c/p\u003e",
          "module": "Numeric.AD.Types",
          "name": "(\u003c+\u003e)",
          "package": "ad",
          "signature": "t a -\u003e t a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#%3C%2B%3E",
          "type": "method"
        },
        "index": {
          "description": "Vector sum",
          "hierarchy": "Numeric AD Types",
          "module": "Numeric.AD.Types",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "ad",
          "signature": "t a-\u003et a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVector-scalar multiplication\n\u003c/p\u003e",
          "module": "Numeric.AD.Types",
          "name": "(^*)",
          "package": "ad",
          "signature": "t a -\u003e a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#%5E%2A",
          "type": "method"
        },
        "index": {
          "description": "Vector-scalar multiplication",
          "hierarchy": "Numeric AD Types",
          "module": "Numeric.AD.Types",
          "name": "(^*) ^*",
          "normalized": "a b-\u003eb-\u003ea b",
          "package": "ad",
          "signature": "t a-\u003ea-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:-94--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScalar division\n\u003c/p\u003e",
          "module": "Numeric.AD.Types",
          "name": "(^/)",
          "package": "ad",
          "signature": "t a -\u003e a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#%5E%2F",
          "type": "method"
        },
        "index": {
          "description": "Scalar division",
          "hierarchy": "Numeric AD Types",
          "module": "Numeric.AD.Types",
          "name": "(^/) ^/",
          "normalized": "a b-\u003eb-\u003ea b",
          "package": "ad",
          "signature": "t a-\u003ea-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:-94--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Types",
          "name": ":-",
          "package": "ad",
          "signature": "a :- (Jet f (f a))",
          "source": "src/Numeric-AD-Internal-Jet.html#Jet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Types",
          "module": "Numeric.AD.Types",
          "name": ":-",
          "package": "ad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v::-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Types",
          "name": "AD",
          "package": "ad",
          "signature": "AD",
          "source": "src/Numeric-AD-Internal-Types.html#AD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Types",
          "module": "Numeric.AD.Types",
          "name": "AD",
          "package": "ad",
          "partial": "AD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:AD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a constant\n\u003c/p\u003e",
          "module": "Numeric.AD.Types",
          "name": "auto",
          "package": "ad",
          "signature": "a -\u003e t a",
          "source": "src/Numeric-AD-Internal-Classes.html#auto",
          "type": "method"
        },
        "index": {
          "description": "Embed constant",
          "hierarchy": "Numeric AD Types",
          "module": "Numeric.AD.Types",
          "name": "auto",
          "normalized": "a-\u003eb a",
          "package": "ad",
          "signature": "a-\u003et a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:auto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the head of a \u003ccode\u003e\u003ca\u003eJet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.AD.Types",
          "name": "headJet",
          "package": "ad",
          "signature": "Jet f a -\u003e a",
          "source": "src/Numeric-AD-Internal-Jet.html#headJet",
          "type": "function"
        },
        "index": {
          "description": "Take the head of Jet",
          "hierarchy": "Numeric AD Types",
          "module": "Numeric.AD.Types",
          "name": "headJet",
          "normalized": "Jet a b-\u003eb",
          "package": "ad",
          "partial": "Jet",
          "signature": "Jet f a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:headJet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eallowed to return False for items with a zero derivative, but we'll give more NaNs than strictly necessary\n\u003c/p\u003e",
          "module": "Numeric.AD.Types",
          "name": "isKnownConstant",
          "package": "ad",
          "signature": "t a -\u003e Bool",
          "source": "src/Numeric-AD-Internal-Classes.html#isKnownConstant",
          "type": "method"
        },
        "index": {
          "description": "allowed to return False for items with zero derivative but we ll give more NaNs than strictly necessary",
          "hierarchy": "Numeric AD Types",
          "module": "Numeric.AD.Types",
          "name": "isKnownConstant",
          "normalized": "a b-\u003eBool",
          "package": "ad",
          "partial": "Known Constant",
          "signature": "t a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:isKnownConstant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eallowed to return False for zero, but we give more NaN's than strictly necessary then\n\u003c/p\u003e",
          "module": "Numeric.AD.Types",
          "name": "isKnownZero",
          "package": "ad",
          "signature": "t a -\u003e Bool",
          "source": "src/Numeric-AD-Internal-Classes.html#isKnownZero",
          "type": "method"
        },
        "index": {
          "description": "allowed to return False for zero but we give more NaN than strictly necessary then",
          "hierarchy": "Numeric AD Types",
          "module": "Numeric.AD.Types",
          "name": "isKnownZero",
          "normalized": "a b-\u003eBool",
          "package": "ad",
          "partial": "Known Zero",
          "signature": "t a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:isKnownZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eJet\u003c/a\u003e\u003c/code\u003e by unzipping the layers of a \u003ccode\u003e\u003ca\u003eCofree\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eComonad\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.AD.Types",
          "name": "jet",
          "package": "ad",
          "signature": "Cofree f a -\u003e Jet f a",
          "source": "src/Numeric-AD-Internal-Jet.html#jet",
          "type": "function"
        },
        "index": {
          "description": "Construct Jet by unzipping the layers of Cofree Comonad",
          "hierarchy": "Numeric AD Types",
          "module": "Numeric.AD.Types",
          "name": "jet",
          "normalized": "Cofree a b-\u003eJet a b",
          "package": "ad",
          "signature": "Cofree f a-\u003eJet f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:jet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a nonscalar-to-nonscalar function in the trivial identity AD mode.\n\u003c/p\u003e",
          "module": "Numeric.AD.Types",
          "name": "lowerFF",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g a",
          "source": "src/Numeric-AD-Types.html#lowerFF",
          "type": "function"
        },
        "index": {
          "description": "Evaluate nonscalar-to-nonscalar function in the trivial identity AD mode",
          "hierarchy": "Numeric AD Types",
          "module": "Numeric.AD.Types",
          "name": "lowerFF",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed c",
          "package": "ad",
          "partial": "FF",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:lowerFF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a nonscalar-to-scalar function in the trivial identity AD mode.\n\u003c/p\u003e",
          "module": "Numeric.AD.Types",
          "name": "lowerFU",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e a",
          "source": "src/Numeric-AD-Types.html#lowerFU",
          "type": "function"
        },
        "index": {
          "description": "Evaluate nonscalar-to-scalar function in the trivial identity AD mode",
          "hierarchy": "Numeric AD Types",
          "module": "Numeric.AD.Types",
          "name": "lowerFU",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ec",
          "package": "ad",
          "partial": "FU",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:lowerFU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a scalar-to-nonscalar function in the trivial identity AD mode.\n\u003c/p\u003e",
          "module": "Numeric.AD.Types",
          "name": "lowerUF",
          "package": "ad",
          "signature": "AD s a -\u003e f (AD s a)) -\u003e a -\u003e f a",
          "source": "src/Numeric-AD-Types.html#lowerUF",
          "type": "function"
        },
        "index": {
          "description": "Evaluate scalar-to-nonscalar function in the trivial identity AD mode",
          "hierarchy": "Numeric AD Types",
          "module": "Numeric.AD.Types",
          "name": "lowerUF",
          "normalized": "AD a b-\u003ec(AD a b))-\u003eb-\u003ec b",
          "package": "ad",
          "partial": "UF",
          "signature": "AD s a-\u003ef(AD s a))-\u003ea-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:lowerUF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a scalar-to-scalar function in the trivial identity AD mode.\n\u003c/p\u003e",
          "module": "Numeric.AD.Types",
          "name": "lowerUU",
          "package": "ad",
          "signature": "AD s a -\u003e AD s a) -\u003e a -\u003e a",
          "source": "src/Numeric-AD-Types.html#lowerUU",
          "type": "function"
        },
        "index": {
          "description": "Evaluate scalar-to-scalar function in the trivial identity AD mode",
          "hierarchy": "Numeric AD Types",
          "module": "Numeric.AD.Types",
          "name": "lowerUU",
          "normalized": "AD a b-\u003eAD a b)-\u003eb-\u003eb",
          "package": "ad",
          "partial": "UU",
          "signature": "AD s a-\u003eAD s a)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:lowerUU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Types",
          "name": "runAD",
          "package": "ad",
          "signature": "f a",
          "source": "src/Numeric-AD-Internal-Types.html#AD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric AD Types",
          "module": "Numeric.AD.Types",
          "name": "runAD",
          "package": "ad",
          "partial": "AD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:runAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the tail of a \u003ccode\u003e\u003ca\u003eJet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.AD.Types",
          "name": "tailJet",
          "package": "ad",
          "signature": "Jet f a -\u003e Jet f (f a)",
          "source": "src/Numeric-AD-Internal-Jet.html#tailJet",
          "type": "function"
        },
        "index": {
          "description": "Take the tail of Jet",
          "hierarchy": "Numeric AD Types",
          "module": "Numeric.AD.Types",
          "name": "tailJet",
          "normalized": "Jet a b-\u003eJet a(a b)",
          "package": "ad",
          "partial": "Jet",
          "signature": "Jet f a-\u003eJet f(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:tailJet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e 'zero' = 'lift' 0\n\u003c/pre\u003e",
          "module": "Numeric.AD.Types",
          "name": "zero",
          "package": "ad",
          "signature": "t a",
          "source": "src/Numeric-AD-Internal-Classes.html#zero",
          "type": "method"
        },
        "index": {
          "description": "zero lift",
          "hierarchy": "Numeric AD Types",
          "module": "Numeric.AD.Types",
          "name": "zero",
          "package": "ad",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Types.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVariadic combinators for reverse-mode automatic differentiation.\n\u003c/p\u003e\u003cp\u003eUnfortunately, variadicity comes at the expense of being able to use\n quantification to avoid sensitivity confusion, so be careful when\n counting the number of \u003ccode\u003elift\u003c/code\u003e you use when taking the gradient of a\n function that takes gradients!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.AD.Variadic.Kahn",
          "name": "Kahn",
          "package": "ad",
          "source": "src/Numeric-AD-Variadic-Kahn.html",
          "type": "module"
        },
        "index": {
          "description": "Variadic combinators for reverse-mode automatic differentiation Unfortunately variadicity comes at the expense of being able to use quantification to avoid sensitivity confusion so be careful when counting the number of lift you use when taking the gradient of function that takes gradients",
          "hierarchy": "Numeric AD Variadic Kahn",
          "module": "Numeric.AD.Variadic.Kahn",
          "name": "Kahn",
          "package": "ad",
          "partial": "Kahn",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic-Kahn.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Variadic.Kahn",
          "name": "Grad",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Kahn.html#Grad",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric AD Variadic Kahn",
          "module": "Numeric.AD.Variadic.Kahn",
          "name": "Grad",
          "package": "ad",
          "partial": "Grad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic-Kahn.html#t:Grad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVariadic combinators for sparse forward mode automatic differentiation.\n\u003c/p\u003e\u003cp\u003eUnfortunately, variadicity comes at the expense of being able to use\n quantification to avoid sensitivity confusion, so be careful when\n counting the number of \u003ccode\u003elift\u003c/code\u003e you use when taking the gradient of a\n function that takes gradients!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.AD.Variadic.Sparse",
          "name": "Sparse",
          "package": "ad",
          "source": "src/Numeric-AD-Variadic-Sparse.html",
          "type": "module"
        },
        "index": {
          "description": "Variadic combinators for sparse forward mode automatic differentiation Unfortunately variadicity comes at the expense of being able to use quantification to avoid sensitivity confusion so be careful when counting the number of lift you use when taking the gradient of function that takes gradients",
          "hierarchy": "Numeric AD Variadic Sparse",
          "module": "Numeric.AD.Variadic.Sparse",
          "name": "Sparse",
          "package": "ad",
          "partial": "Sparse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic-Sparse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Variadic.Sparse",
          "name": "Grad",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Sparse.html#Grad",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric AD Variadic Sparse",
          "module": "Numeric.AD.Variadic.Sparse",
          "name": "Grad",
          "package": "ad",
          "partial": "Grad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic-Sparse.html#t:Grad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Variadic.Sparse",
          "name": "Grads",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Sparse.html#Grads",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric AD Variadic Sparse",
          "module": "Numeric.AD.Variadic.Sparse",
          "name": "Grads",
          "package": "ad",
          "partial": "Grads",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic-Sparse.html#t:Grads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVariadic combinators for variadic mixed-mode automatic differentiation.\n\u003c/p\u003e\u003cp\u003eUnfortunately, variadicity comes at the expense of being able to use\n quantification to avoid sensitivity confusion, so be careful when\n counting the number of \u003ccode\u003elift\u003c/code\u003e you use when taking the gradient of a\n function that takes gradients!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.AD.Variadic",
          "name": "Variadic",
          "package": "ad",
          "source": "src/Numeric-AD-Variadic.html",
          "type": "module"
        },
        "index": {
          "description": "Variadic combinators for variadic mixed-mode automatic differentiation Unfortunately variadicity comes at the expense of being able to use quantification to avoid sensitivity confusion so be careful when counting the number of lift you use when taking the gradient of function that takes gradients",
          "hierarchy": "Numeric AD Variadic",
          "module": "Numeric.AD.Variadic",
          "name": "Variadic",
          "package": "ad",
          "partial": "Variadic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Variadic",
          "name": "Grad",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Kahn.html#Grad",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric AD Variadic",
          "module": "Numeric.AD.Variadic",
          "name": "Grad",
          "package": "ad",
          "partial": "Grad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic.html#t:Grad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.AD.Variadic",
          "name": "Grads",
          "package": "ad",
          "source": "src/Numeric-AD-Internal-Sparse.html#Grads",
          "type": "class"
        },
        "index": {
          "hierarchy": "Numeric AD Variadic",
          "module": "Numeric.AD.Variadic",
          "name": "Grads",
          "package": "ad",
          "partial": "Grads",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD-Variadic.html#t:Grads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMixed-Mode Automatic Differentiation.\n\u003c/p\u003e\u003cp\u003eEach combinator exported from this module chooses an appropriate AD mode.\n The following basic operations are supported, modified as appropriate by the suffixes below:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003egrad\u003c/a\u003e\u003c/code\u003e computes the gradient (partial derivatives) of a function at a point\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e computes the Jacobian matrix of a function at a point\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ediff\u003c/a\u003e\u003c/code\u003e computes the derivative of a function at a point\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003edu\u003c/a\u003e\u003c/code\u003e computes a directional derivative of a function at a point\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ehessian\u003c/a\u003e\u003c/code\u003e compute the Hessian matrix (matrix of second partial derivatives) of a function at a point\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe suffixes have the following meanings:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e'\u003c/code\u003e -- also return the answer\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eWith\u003c/code\u003e lets the user supply a function to blend the input with the output\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eF\u003c/code\u003e is a version of the base function lifted to return a \u003ccode\u003e\u003ca\u003eTraversable\u003c/a\u003e\u003c/code\u003e (or \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e) result\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003es\u003c/code\u003e means the function returns all higher derivatives in a list or f-branching \u003ccode\u003eStream\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eT\u003c/code\u003e means the result is transposed with respect to the traditional formulation.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e0\u003c/code\u003e means that the resulting derivative list is padded with 0s at the end.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Numeric.AD",
          "name": "AD",
          "package": "ad",
          "source": "src/Numeric-AD.html",
          "type": "module"
        },
        "index": {
          "description": "Mixed-Mode Automatic Differentiation Each combinator exported from this module chooses an appropriate AD mode The following basic operations are supported modified as appropriate by the suffixes below grad computes the gradient partial derivatives of function at point jacobian computes the Jacobian matrix of function at point diff computes the derivative of function at point du computes directional derivative of function at point hessian compute the Hessian matrix matrix of second partial derivatives of function at point The suffixes have the following meanings also return the answer With lets the user supply function to blend the input with the output is version of the base function lifted to return Traversable or Functor result means the function returns all higher derivatives in list or f-branching Stream means the result is transposed with respect to the traditional formulation means that the resulting derivative list is padded with at the end",
          "hierarchy": "Numeric AD",
          "module": "Numeric.AD",
          "name": "AD",
          "package": "ad",
          "partial": "AD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the Hessian via the Jacobian of the gradient. gradient is computed in reverse mode and then the Jacobian is computed in sparse (forward) mode.\n\u003c/p\u003e",
          "module": "Numeric.AD",
          "name": "hessian",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f a -\u003e f (f a)",
          "source": "src/Numeric-AD.html#hessian",
          "type": "function"
        },
        "index": {
          "description": "Compute the Hessian via the Jacobian of the gradient gradient is computed in reverse mode and then the Jacobian is computed in sparse forward mode",
          "hierarchy": "Numeric AD",
          "module": "Numeric.AD",
          "name": "hessian",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea c-\u003ea(a c)",
          "package": "ad",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef a-\u003ef(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:hessian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the order 3 Hessian tensor on a non-scalar-to-non-scalar function using \u003ccode\u003eSparse\u003c/code\u003e or 'Sparse'-on-'Reverse'\n\u003c/p\u003e",
          "module": "Numeric.AD",
          "name": "hessianF",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f (f a))",
          "source": "src/Numeric-AD.html#hessianF",
          "type": "function"
        },
        "index": {
          "description": "Compute the order Hessian tensor on non-scalar-to-non-scalar function using Sparse or Sparse on Reverse",
          "hierarchy": "Numeric AD",
          "module": "Numeric.AD",
          "name": "hessianF",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a(a c))",
          "package": "ad",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f(f a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:hessianF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ehessianProduct\u003c/a\u003e\u003c/code\u003e f wv\u003c/code\u003e computes the product of the hessian \u003ccode\u003eH\u003c/code\u003e of a non-scalar-to-scalar function \u003ccode\u003ef\u003c/code\u003e at \u003ccode\u003ew = \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e \u003ca\u003e$\u003c/a\u003e wv\u003c/code\u003e with a vector \u003ccode\u003ev = snd \u003ca\u003e$\u003c/a\u003e wv\u003c/code\u003e using \"Pearlmutter's method\" from \u003ca\u003ehttp://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.29.6143\u003c/a\u003e, which states:\n\u003c/p\u003e\u003cpre\u003e H v = (d/dr) grad_w (w + r v) | r = 0\n\u003c/pre\u003e\u003cp\u003eOr in other words, we take the directional derivative of the gradient. The gradient is calculated in reverse mode, then the directional derivative is calculated in forward mode.\n\u003c/p\u003e",
          "module": "Numeric.AD",
          "name": "hessianProduct",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f (a, a) -\u003e f a",
          "source": "src/Numeric-AD.html#hessianProduct",
          "type": "function"
        },
        "index": {
          "description": "hessianProduct wv computes the product of the hessian of non-scalar-to-scalar function at fst wv with vector snd wv using Pearlmutter method from http citeseerx.ist.psu.edu viewdoc summary doi which states dr grad Or in other words we take the directional derivative of the gradient The gradient is calculated in reverse mode then the directional derivative is calculated in forward mode",
          "hierarchy": "Numeric AD",
          "module": "Numeric.AD",
          "name": "hessianProduct",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea(c,c)-\u003ea c",
          "package": "ad",
          "partial": "Product",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef(a,a)-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:hessianProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ehessianProduct'\u003c/a\u003e\u003c/code\u003e f wv\u003c/code\u003e computes both the gradient of a non-scalar-to-scalar \u003ccode\u003ef\u003c/code\u003e at \u003ccode\u003ew = \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e \u003ca\u003e$\u003c/a\u003e wv\u003c/code\u003e and the product of the hessian \u003ccode\u003eH\u003c/code\u003e at \u003ccode\u003ew\u003c/code\u003e with a vector \u003ccode\u003ev = snd \u003ca\u003e$\u003c/a\u003e wv\u003c/code\u003e using \"Pearlmutter's method\". The outputs are returned wrapped in the same functor.\n\u003c/p\u003e\u003cpre\u003e H v = (d/dr) grad_w (w + r v) | r = 0\n\u003c/pre\u003e\u003cp\u003eOr in other words, we return the gradient and the directional derivative of the gradient. The gradient is calculated in reverse mode, then the directional derivative is calculated in forward mode.\n\u003c/p\u003e",
          "module": "Numeric.AD",
          "name": "hessianProduct'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e AD s a) -\u003e f (a, a) -\u003e f (a, a)",
          "source": "src/Numeric-AD.html#hessianProduct%27",
          "type": "function"
        },
        "index": {
          "description": "hessianProduct wv computes both the gradient of non-scalar-to-scalar at fst wv and the product of the hessian at with vector snd wv using Pearlmutter method The outputs are returned wrapped in the same functor dr grad Or in other words we return the gradient and the directional derivative of the gradient The gradient is calculated in reverse mode then the directional derivative is calculated in forward mode",
          "hierarchy": "Numeric AD",
          "module": "Numeric.AD",
          "name": "hessianProduct'",
          "normalized": "a(AD b c)-\u003eAD b c)-\u003ea(c,c)-\u003ea(c,c)",
          "package": "ad",
          "partial": "Product'",
          "signature": "f(AD s a)-\u003eAD s a)-\u003ef(a,a)-\u003ef(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:hessianProduct-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the Jacobian of a non-scalar-to-non-scalar function, automatically choosing between forward and reverse mode AD based on the number of inputs and outputs.\n\u003c/p\u003e\u003cp\u003eIf you know the relative number of inputs and outputs, consider \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ejacobian\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.AD",
          "name": "jacobian",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f a)",
          "source": "src/Numeric-AD.html#jacobian",
          "type": "function"
        },
        "index": {
          "description": "Calculate the Jacobian of non-scalar-to-non-scalar function automatically choosing between forward and reverse mode AD based on the number of inputs and outputs If you know the relative number of inputs and outputs consider jacobian or jacobian",
          "hierarchy": "Numeric AD",
          "module": "Numeric.AD",
          "name": "jacobian",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a c)",
          "package": "ad",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:jacobian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate both the answer and Jacobian of a non-scalar-to-non-scalar function, automatically choosing between forward- and reverse- mode AD based on the relative, based on the number of inputs\n\u003c/p\u003e\u003cp\u003eIf you know the relative number of inputs and outputs, consider \u003ccode\u003e\u003ca\u003ejacobian'\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ejacobian'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.AD",
          "name": "jacobian'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (a, f a)",
          "source": "src/Numeric-AD.html#jacobian%27",
          "type": "function"
        },
        "index": {
          "description": "Calculate both the answer and Jacobian of non-scalar-to-non-scalar function automatically choosing between forward and reverse mode AD based on the relative based on the number of inputs If you know the relative number of inputs and outputs consider jacobian or jacobian",
          "hierarchy": "Numeric AD",
          "module": "Numeric.AD",
          "name": "jacobian'",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(c,a c)",
          "package": "ad",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(a,f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:jacobian-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ejacobianWith\u003c/a\u003e\u003c/code\u003e g f\u003c/code\u003e calculates the Jacobian of a non-scalar-to-non-scalar function, automatically choosing between forward and reverse mode AD based on the number of inputs and outputs.\n\u003c/p\u003e\u003cp\u003eThe resulting Jacobian matrix is then recombined element-wise with the input using \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you know the relative number of inputs and outputs, consider \u003ccode\u003e\u003ca\u003ejacobianWith\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ejacobianWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.AD",
          "name": "jacobianWith",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (f b)",
          "source": "src/Numeric-AD.html#jacobianWith",
          "type": "function"
        },
        "index": {
          "description": "jacobianWith calculates the Jacobian of non-scalar-to-non-scalar function automatically choosing between forward and reverse mode AD based on the number of inputs and outputs The resulting Jacobian matrix is then recombined element-wise with the input using If you know the relative number of inputs and outputs consider jacobianWith or jacobianWith",
          "hierarchy": "Numeric AD",
          "module": "Numeric.AD",
          "name": "jacobianWith",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(a e)",
          "package": "ad",
          "partial": "With",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:jacobianWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ejacobianWith'\u003c/a\u003e\u003c/code\u003e g f\u003c/code\u003e calculates the answer and Jacobian of a non-scalar-to-non-scalar function, automatically choosing between sparse and reverse mode AD based on the number of inputs and outputs.\n\u003c/p\u003e\u003cp\u003eThe resulting Jacobian matrix is then recombined element-wise with the input using \u003ccode\u003eg\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you know the relative number of inputs and outputs, consider \u003ccode\u003e\u003ca\u003ejacobianWith'\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ejacobianWith'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.AD",
          "name": "jacobianWith'",
          "package": "ad",
          "signature": "f (AD s a) -\u003e g (AD s a)) -\u003e f a -\u003e g (a, f b)",
          "source": "src/Numeric-AD.html#jacobianWith%27",
          "type": "function"
        },
        "index": {
          "description": "jacobianWith calculates the answer and Jacobian of non-scalar-to-non-scalar function automatically choosing between sparse and reverse mode AD based on the number of inputs and outputs The resulting Jacobian matrix is then recombined element-wise with the input using If you know the relative number of inputs and outputs consider jacobianWith or jacobianWith",
          "hierarchy": "Numeric AD",
          "module": "Numeric.AD",
          "name": "jacobianWith'",
          "normalized": "a(AD b c)-\u003ed(AD b c))-\u003ea c-\u003ed(c,a e)",
          "package": "ad",
          "partial": "With'",
          "signature": "f(AD s a)-\u003eg(AD s a))-\u003ef a-\u003eg(a,f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ad/docs/Numeric-AD.html#v:jacobianWith-39-"
      }
    }
  ]
]