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
        "word": "numeric-tools"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunction useful for writing numeric code which works with mutable\n data.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Numeric",
          "name": "Numeric",
          "package": "numeric-tools",
          "source": "src/Control-Monad-Numeric.html",
          "type": "module"
        },
        "index": {
          "description": "Function useful for writing numeric code which works with mutable data",
          "hierarchy": "Control Monad Numeric",
          "module": "Control.Monad.Numeric",
          "name": "Numeric",
          "package": "numeric-tools",
          "partial": "Numeric",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Control-Monad-Numeric.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialized for loop. Akin to:\n\u003c/p\u003e\u003cpre\u003e for( i = 0; i \u003c 10; i++) { ...\n\u003c/pre\u003e",
          "module": "Control.Monad.Numeric",
          "name": "for",
          "package": "numeric-tools",
          "signature": "Int-\u003e Int-\u003e (Int -\u003e m ())-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Specialized for loop Akin to for",
          "hierarchy": "Control Monad Numeric",
          "module": "Control.Monad.Numeric",
          "name": "for",
          "normalized": "Int-\u003eInt-\u003e(Int-\u003ea())-\u003ea()",
          "package": "numeric-tools",
          "signature": "Int-\u003eInt-\u003e(Int-\u003em())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Control-Monad-Numeric.html#v:for"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor function which act much like for loop in the C\n\u003c/p\u003e",
          "module": "Control.Monad.Numeric",
          "name": "forGen",
          "package": "numeric-tools",
          "signature": "a-\u003e (a -\u003e Bool)-\u003e (a -\u003e a)-\u003e (a -\u003e m ())-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "For function which act much like for loop in the",
          "hierarchy": "Control Monad Numeric",
          "module": "Control.Monad.Numeric",
          "name": "forGen",
          "normalized": "a-\u003e(a-\u003eBool)-\u003e(a-\u003ea)-\u003e(a-\u003eb())-\u003eb()",
          "package": "numeric-tools",
          "partial": "Gen",
          "signature": "a-\u003e(a-\u003eBool)-\u003e(a-\u003ea)-\u003e(a-\u003em())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Control-Monad-Numeric.html#v:forGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDifferent implementations of approximate equality for floating\n point values. There are multiple ways to implement approximate\n equality. They have different semantics and it's up to programmer\n to choose right one.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.ApproxEq",
          "name": "ApproxEq",
          "package": "numeric-tools",
          "source": "src/Numeric-ApproxEq.html",
          "type": "module"
        },
        "index": {
          "description": "Different implementations of approximate equality for floating point values There are multiple ways to implement approximate equality They have different semantics and it up to programmer to choose right one",
          "hierarchy": "Numeric ApproxEq",
          "module": "Numeric.ApproxEq",
          "name": "ApproxEq",
          "package": "numeric-tools",
          "partial": "Approx Eq",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-ApproxEq.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifference between values is less than specified precision.\n\u003c/p\u003e",
          "module": "Numeric.ApproxEq",
          "name": "eqAbsolute",
          "package": "numeric-tools",
          "signature": "a-\u003e a-\u003e a-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Difference between values is less than specified precision",
          "hierarchy": "Numeric ApproxEq",
          "module": "Numeric.ApproxEq",
          "name": "eqAbsolute",
          "normalized": "a-\u003ea-\u003ea-\u003eBool",
          "package": "numeric-tools",
          "partial": "Absolute",
          "signature": "a-\u003ea-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-ApproxEq.html#v:eqAbsolute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelative equality for comlex numbers. \n\u003c/p\u003e",
          "module": "Numeric.ApproxEq",
          "name": "eqRelCompl",
          "package": "numeric-tools",
          "signature": "a-\u003e Complex a-\u003e Complex a-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Relative equality for comlex numbers",
          "hierarchy": "Numeric ApproxEq",
          "module": "Numeric.ApproxEq",
          "name": "eqRelCompl",
          "normalized": "a-\u003eComplex a-\u003eComplex a-\u003eBool",
          "package": "numeric-tools",
          "partial": "Rel Compl",
          "signature": "a-\u003eComplex a-\u003eComplex a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-ApproxEq.html#v:eqRelCompl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelative difference between two numbers are less than predefined\n   value.  For example 1 is approximately equal to 1.0001 with 1e-4\n   precision. Same is true for 10000 and 10001.\n\u003c/p\u003e\u003cp\u003eThis method of camparison doesn't work for numbers which are\n   approximately 0. \u003ccode\u003e\u003ca\u003eeqAbsolute\u003c/a\u003e\u003c/code\u003e should be used instead.\n\u003c/p\u003e",
          "module": "Numeric.ApproxEq",
          "name": "eqRelative",
          "package": "numeric-tools",
          "signature": "a-\u003e a-\u003e a-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Relative difference between two numbers are less than predefined value For example is approximately equal to with e-4 precision Same is true for and This method of camparison doesn work for numbers which are approximately eqAbsolute should be used instead",
          "hierarchy": "Numeric ApproxEq",
          "module": "Numeric.ApproxEq",
          "name": "eqRelative",
          "normalized": "a-\u003ea-\u003ea-\u003eBool",
          "package": "numeric-tools",
          "partial": "Relative",
          "signature": "a-\u003ea-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-ApproxEq.html#v:eqRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare two \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e values for approximate equality, using\n Dawson's method.\n\u003c/p\u003e\u003cp\u003eThe required accuracy is specified in ULPs (units of least\n precision).  If the two numbers differ by the given number of ULPs\n or less, this function returns \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAlgorithm is based on Bruce Dawson's \"Comparing floating point\n numbers\":\n \u003ca\u003ehttp://www.cygnus-software.com/papers/comparingfloats/comparingfloats.htm\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Numeric.ApproxEq",
          "name": "within",
          "package": "numeric-tools",
          "signature": "Int-\u003e Double-\u003e Double-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Compare two Double values for approximate equality using Dawson method The required accuracy is specified in ULPs units of least precision If the two numbers differ by the given number of ULPs or less this function returns True Algorithm is based on Bruce Dawson Comparing floating point numbers http www.cygnus-software.com papers comparingfloats comparingfloats.htm",
          "hierarchy": "Numeric ApproxEq",
          "module": "Numeric.ApproxEq",
          "name": "within",
          "normalized": "Int-\u003eDouble-\u003eDouble-\u003eBool",
          "package": "numeric-tools",
          "signature": "Int-\u003eDouble-\u003eDouble-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-ApproxEq.html#v:within"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Classes.Indexing",
          "name": "Indexing",
          "package": "numeric-tools",
          "source": "src/Numeric-Classes-Indexing.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Numeric Classes Indexing",
          "module": "Numeric.Classes.Indexing",
          "name": "Indexing",
          "package": "numeric-tools",
          "partial": "Indexing",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Classes-Indexing.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for array-like data type which support \u003ccode\u003eO(1)\u003c/code\u003e access\n   by integer index starting from zero.\n\u003c/p\u003e",
          "module": "Numeric.Classes.Indexing",
          "name": "Indexable",
          "package": "numeric-tools",
          "source": "src/Numeric-Classes-Indexing.html#Indexable",
          "type": "class"
        },
        "index": {
          "description": "Type class for array-like data type which support access by integer index starting from zero",
          "hierarchy": "Numeric Classes Indexing",
          "module": "Numeric.Classes.Indexing",
          "name": "Indexable",
          "package": "numeric-tools",
          "partial": "Indexable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Classes-Indexing.html#t:Indexable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Safe indexing. Calls error if index is out of range.\n\u003c/p\u003e",
          "module": "Numeric.Classes.Indexing",
          "name": "(!)",
          "package": "numeric-tools",
          "signature": "a -\u003e Int -\u003e IndexVal a",
          "source": "src/Numeric-Classes-Indexing.html#%21",
          "type": "method"
        },
        "index": {
          "description": "Safe indexing Calls error if index is out of range",
          "hierarchy": "Numeric Classes Indexing",
          "module": "Numeric.Classes.Indexing",
          "name": "(!) !",
          "normalized": "a-\u003eInt-\u003eIndexVal a",
          "package": "numeric-tools",
          "signature": "a-\u003eInt-\u003eIndexVal a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Classes-Indexing.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of table.\n\u003c/p\u003e",
          "module": "Numeric.Classes.Indexing",
          "name": "size",
          "package": "numeric-tools",
          "signature": "a -\u003e Int",
          "source": "src/Numeric-Classes-Indexing.html#size",
          "type": "method"
        },
        "index": {
          "description": "Size of table",
          "hierarchy": "Numeric Classes Indexing",
          "module": "Numeric.Classes.Indexing",
          "name": "size",
          "normalized": "a-\u003eInt",
          "package": "numeric-tools",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Classes-Indexing.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Index table without range cheking.\n\u003c/p\u003e",
          "module": "Numeric.Classes.Indexing",
          "name": "unsafeIndex",
          "package": "numeric-tools",
          "signature": "a -\u003e Int -\u003e IndexVal a",
          "source": "src/Numeric-Classes-Indexing.html#unsafeIndex",
          "type": "method"
        },
        "index": {
          "description": "Index table without range cheking",
          "hierarchy": "Numeric Classes Indexing",
          "module": "Numeric.Classes.Indexing",
          "name": "unsafeIndex",
          "normalized": "a-\u003eInt-\u003eIndexVal a",
          "package": "numeric-tools",
          "partial": "Index",
          "signature": "a-\u003eInt-\u003eIndexVal a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Classes-Indexing.html#v:unsafeIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck that index is valid\n\u003c/p\u003e",
          "module": "Numeric.Classes.Indexing",
          "name": "validIndex",
          "package": "numeric-tools",
          "signature": "a -\u003e Int -\u003e Bool",
          "source": "src/Numeric-Classes-Indexing.html#validIndex",
          "type": "function"
        },
        "index": {
          "description": "Check that index is valid",
          "hierarchy": "Numeric Classes Indexing",
          "module": "Numeric.Classes.Indexing",
          "name": "validIndex",
          "normalized": "a-\u003eInt-\u003eBool",
          "package": "numeric-tools",
          "partial": "Index",
          "signature": "a-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Classes-Indexing.html#v:validIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNumerical differentiation. \u003ccode\u003e\u003ca\u003ediffRichardson\u003c/a\u003e\u003c/code\u003e is preferred way to\n calculate derivative.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Tools.Differentiation",
          "name": "Differentiation",
          "package": "numeric-tools",
          "source": "src/Numeric-Tools-Differentiation.html",
          "type": "module"
        },
        "index": {
          "description": "Numerical differentiation diffRichardson is preferred way to calculate derivative",
          "hierarchy": "Numeric Tools Differentiation",
          "module": "Numeric.Tools.Differentiation",
          "name": "Differentiation",
          "package": "numeric-tools",
          "partial": "Differentiation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Differentiation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifferentiation result\n\u003c/p\u003e",
          "module": "Numeric.Tools.Differentiation",
          "name": "DiffRes",
          "package": "numeric-tools",
          "source": "src/Numeric-Tools-Differentiation.html#DiffRes",
          "type": "data"
        },
        "index": {
          "description": "Differentiation result",
          "hierarchy": "Numeric Tools Differentiation",
          "module": "Numeric.Tools.Differentiation",
          "name": "DiffRes",
          "package": "numeric-tools",
          "partial": "Diff Res",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Differentiation.html#t:DiffRes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Tools.Differentiation",
          "name": "DiffRes",
          "package": "numeric-tools",
          "signature": "DiffRes",
          "source": "src/Numeric-Tools-Differentiation.html#DiffRes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Tools Differentiation",
          "module": "Numeric.Tools.Differentiation",
          "name": "DiffRes",
          "package": "numeric-tools",
          "partial": "Diff Res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Differentiation.html#v:DiffRes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRough error estimate\n\u003c/p\u003e",
          "module": "Numeric.Tools.Differentiation",
          "name": "diffPrecision",
          "package": "numeric-tools",
          "signature": "Double",
          "source": "src/Numeric-Tools-Differentiation.html#DiffRes",
          "type": "function"
        },
        "index": {
          "description": "Rough error estimate",
          "hierarchy": "Numeric Tools Differentiation",
          "module": "Numeric.Tools.Differentiation",
          "name": "diffPrecision",
          "package": "numeric-tools",
          "partial": "Precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Differentiation.html#v:diffPrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerivative value\n\u003c/p\u003e",
          "module": "Numeric.Tools.Differentiation",
          "name": "diffRes",
          "package": "numeric-tools",
          "signature": "Double",
          "source": "src/Numeric-Tools-Differentiation.html#DiffRes",
          "type": "function"
        },
        "index": {
          "description": "Derivative value",
          "hierarchy": "Numeric Tools Differentiation",
          "module": "Numeric.Tools.Differentiation",
          "name": "diffRes",
          "package": "numeric-tools",
          "partial": "Res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Differentiation.html#v:diffRes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate derivative using Richaradson's deferred approach to\n   limit. This is a preferred method for numeric differentiation\n   since it's most precise. Function could be evaluated up to 20\n   times.\n\u003c/p\u003e\u003cp\u003eInitial step size should be chosen fairly big. Too small one will\n   result reduced precision, too big one in nonsensical answer.\n\u003c/p\u003e",
          "module": "Numeric.Tools.Differentiation",
          "name": "diffRichardson",
          "package": "numeric-tools",
          "signature": "(Double -\u003e Double)-\u003e Double-\u003e Double-\u003e DiffRes",
          "type": "function"
        },
        "index": {
          "description": "Calculate derivative using Richaradson deferred approach to limit This is preferred method for numeric differentiation since it most precise Function could be evaluated up to times Initial step size should be chosen fairly big Too small one will result reduced precision too big one in nonsensical answer",
          "hierarchy": "Numeric Tools Differentiation",
          "module": "Numeric.Tools.Differentiation",
          "name": "diffRichardson",
          "normalized": "(Double-\u003eDouble)-\u003eDouble-\u003eDouble-\u003eDiffRes",
          "package": "numeric-tools",
          "partial": "Richardson",
          "signature": "(Double-\u003eDouble)-\u003eDouble-\u003eDouble-\u003eDiffRes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Differentiation.html#v:diffRichardson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple differentiation. It uses simmetric rule and provide\n   reasonable accuracy. It's suitable when function evaluation is\n   expensive and precision could be traded for speed.\n\u003c/p\u003e\u003cpre\u003e f'(x) = f(x-h) + f(x+h) / 2h\n\u003c/pre\u003e",
          "module": "Numeric.Tools.Differentiation",
          "name": "diffSimmetric",
          "package": "numeric-tools",
          "signature": "(Double -\u003e Double)-\u003e Double-\u003e Double-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "Simple differentiation It uses simmetric rule and provide reasonable accuracy It suitable when function evaluation is expensive and precision could be traded for speed x-h",
          "hierarchy": "Numeric Tools Differentiation",
          "module": "Numeric.Tools.Differentiation",
          "name": "diffSimmetric",
          "normalized": "(Double-\u003eDouble)-\u003eDouble-\u003eDouble-\u003eDouble",
          "package": "numeric-tools",
          "partial": "Simmetric",
          "signature": "(Double-\u003eDouble)-\u003eDouble-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Differentiation.html#v:diffSimmetric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimplest form of differentiation. Should be used only when\n   function evaluation is prohibitively expensive and already\n   computed value at point \u003ccode\u003ex\u003c/code\u003e should be reused.\n\u003c/p\u003e\u003cpre\u003e f'(x) = f(x+h) - f(x) / h\n\u003c/pre\u003e",
          "module": "Numeric.Tools.Differentiation",
          "name": "diffSimple",
          "package": "numeric-tools",
          "signature": "(Double -\u003e Double)-\u003e Double-\u003e (Double, Double)-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "Simplest form of differentiation Should be used only when function evaluation is prohibitively expensive and already computed value at point should be reused",
          "hierarchy": "Numeric Tools Differentiation",
          "module": "Numeric.Tools.Differentiation",
          "name": "diffSimple",
          "normalized": "(Double-\u003eDouble)-\u003eDouble-\u003e(Double,Double)-\u003eDouble",
          "package": "numeric-tools",
          "partial": "Simple",
          "signature": "(Double-\u003eDouble)-\u003eDouble-\u003e(Double,Double)-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Differentiation.html#v:diffSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor number \u003ccode\u003ex\u003c/code\u003e and small \u003ccode\u003eh\u003c/code\u003e return such \u003ccode\u003eh'\u003c/code\u003e that \u003ccode\u003ex+h'\u003c/code\u003e and \u003ccode\u003ex\u003c/code\u003e\n differ by representable number\n\u003c/p\u003e",
          "module": "Numeric.Tools.Differentiation",
          "name": "representableDelta",
          "package": "numeric-tools",
          "signature": "Double-\u003e Double-\u003e Double",
          "type": "function"
        },
        "index": {
          "description": "For number and small return such that and differ by representable number",
          "hierarchy": "Numeric Tools Differentiation",
          "module": "Numeric.Tools.Differentiation",
          "name": "representableDelta",
          "normalized": "Double-\u003eDouble-\u003eDouble",
          "package": "numeric-tools",
          "partial": "Delta",
          "signature": "Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Differentiation.html#v:representableDelta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNumerical solution of ordinary equations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Tools.Equation",
          "name": "Equation",
          "package": "numeric-tools",
          "source": "src/Numeric-Tools-Equation.html",
          "type": "module"
        },
        "index": {
          "description": "Numerical solution of ordinary equations",
          "hierarchy": "Numeric Tools Equation",
          "module": "Numeric.Tools.Equation",
          "name": "Equation",
          "package": "numeric-tools",
          "partial": "Equation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Equation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of searching for a root of a mathematical function.\n\u003c/p\u003e",
          "module": "Numeric.Tools.Equation",
          "name": "Root",
          "package": "numeric-tools",
          "source": "src/Numeric-Tools-Equation.html#Root",
          "type": "data"
        },
        "index": {
          "description": "The result of searching for root of mathematical function",
          "hierarchy": "Numeric Tools Equation",
          "module": "Numeric.Tools.Equation",
          "name": "Root",
          "package": "numeric-tools",
          "partial": "Root",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Equation.html#t:Root"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function does not have opposite signs when\n evaluated at the lower and upper bounds of the search.\n\u003c/p\u003e",
          "module": "Numeric.Tools.Equation",
          "name": "NotBracketed",
          "package": "numeric-tools",
          "signature": "NotBracketed",
          "source": "src/Numeric-Tools-Equation.html#Root",
          "type": "function"
        },
        "index": {
          "description": "The function does not have opposite signs when evaluated at the lower and upper bounds of the search",
          "hierarchy": "Numeric Tools Equation",
          "module": "Numeric.Tools.Equation",
          "name": "NotBracketed",
          "package": "numeric-tools",
          "partial": "Not Bracketed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Equation.html#v:NotBracketed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA root was successfully found.\n\u003c/p\u003e",
          "module": "Numeric.Tools.Equation",
          "name": "Root",
          "package": "numeric-tools",
          "signature": "Root a",
          "source": "src/Numeric-Tools-Equation.html#Root",
          "type": "function"
        },
        "index": {
          "description": "root was successfully found",
          "hierarchy": "Numeric Tools Equation",
          "module": "Numeric.Tools.Equation",
          "name": "Root",
          "package": "numeric-tools",
          "partial": "Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Equation.html#v:Root"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe search failed to converge to within the given\n error tolerance after the given number of iterations.\n\u003c/p\u003e",
          "module": "Numeric.Tools.Equation",
          "name": "SearchFailed",
          "package": "numeric-tools",
          "signature": "SearchFailed",
          "source": "src/Numeric-Tools-Equation.html#Root",
          "type": "function"
        },
        "index": {
          "description": "The search failed to converge to within the given error tolerance after the given number of iterations",
          "hierarchy": "Numeric Tools Equation",
          "module": "Numeric.Tools.Equation",
          "name": "SearchFailed",
          "package": "numeric-tools",
          "partial": "Search Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Equation.html#v:SearchFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns either the result of a search for a root, or the default\n value if the search failed.\n\u003c/p\u003e",
          "module": "Numeric.Tools.Equation",
          "name": "fromRoot",
          "package": "numeric-tools",
          "signature": "a-\u003e Root a-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Returns either the result of search for root or the default value if the search failed",
          "hierarchy": "Numeric Tools Equation",
          "module": "Numeric.Tools.Equation",
          "name": "fromRoot",
          "normalized": "a-\u003eRoot a-\u003ea",
          "package": "numeric-tools",
          "partial": "Root",
          "signature": "a-\u003eRoot a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Equation.html#v:fromRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse bisection method to compute root of function.\n\u003c/p\u003e\u003cp\u003eThe function must have opposite signs when evaluated at the lower\n and upper bounds of the search (i.e. the root must be bracketed).\n\u003c/p\u003e",
          "module": "Numeric.Tools.Equation",
          "name": "solveBisection",
          "package": "numeric-tools",
          "signature": "Double-\u003e (Double, Double)-\u003e (Double -\u003e Double)-\u003e Root Double",
          "type": "function"
        },
        "index": {
          "description": "Use bisection method to compute root of function The function must have opposite signs when evaluated at the lower and upper bounds of the search i.e the root must be bracketed",
          "hierarchy": "Numeric Tools Equation",
          "module": "Numeric.Tools.Equation",
          "name": "solveBisection",
          "normalized": "Double-\u003e(Double,Double)-\u003e(Double-\u003eDouble)-\u003eRoot Double",
          "package": "numeric-tools",
          "partial": "Bisection",
          "signature": "Double-\u003e(Double,Double)-\u003e(Double-\u003eDouble)-\u003eRoot Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Equation.html#v:solveBisection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolve equation using Newton-Raphson method. Root must be\n   bracketed. If Newton's step jumps outside of bracket or do not\n   converge sufficiently fast function reverts to bisection.\n\u003c/p\u003e",
          "module": "Numeric.Tools.Equation",
          "name": "solveNewton",
          "package": "numeric-tools",
          "signature": "Double-\u003e (Double, Double)-\u003e (Double -\u003e Double)-\u003e (Double -\u003e Double)-\u003e Root Double",
          "type": "function"
        },
        "index": {
          "description": "Solve equation using Newton-Raphson method Root must be bracketed If Newton step jumps outside of bracket or do not converge sufficiently fast function reverts to bisection",
          "hierarchy": "Numeric Tools Equation",
          "module": "Numeric.Tools.Equation",
          "name": "solveNewton",
          "normalized": "Double-\u003e(Double,Double)-\u003e(Double-\u003eDouble)-\u003e(Double-\u003eDouble)-\u003eRoot Double",
          "package": "numeric-tools",
          "partial": "Newton",
          "signature": "Double-\u003e(Double,Double)-\u003e(Double-\u003eDouble)-\u003e(Double-\u003eDouble)-\u003eRoot Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Equation.html#v:solveNewton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the method of Ridders to compute a root of a function.\n\u003c/p\u003e\u003cp\u003eThe function must have opposite signs when evaluated at the lower\n and upper bounds of the search (i.e. the root must be bracketed).\n\u003c/p\u003e",
          "module": "Numeric.Tools.Equation",
          "name": "solveRidders",
          "package": "numeric-tools",
          "signature": "Double-\u003e (Double, Double)-\u003e (Double -\u003e Double)-\u003e Root Double",
          "type": "function"
        },
        "index": {
          "description": "Use the method of Ridders to compute root of function The function must have opposite signs when evaluated at the lower and upper bounds of the search i.e the root must be bracketed",
          "hierarchy": "Numeric Tools Equation",
          "module": "Numeric.Tools.Equation",
          "name": "solveRidders",
          "normalized": "Double-\u003e(Double,Double)-\u003e(Double-\u003eDouble)-\u003eRoot Double",
          "package": "numeric-tools",
          "partial": "Ridders",
          "signature": "Double-\u003e(Double,Double)-\u003e(Double-\u003eDouble)-\u003eRoot Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Equation.html#v:solveRidders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFuntions for numerical integration. \u003ccode\u003e\u003ca\u003equadRomberg\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003equadSimpson\u003c/a\u003e\u003c/code\u003e\n are reasonable choices in most cases. For non-smooth function they\n converge poorly and \u003ccode\u003e\u003ca\u003equadTrapezoid\u003c/a\u003e\u003c/code\u003e should be used then.\n\u003c/p\u003e\u003cp\u003eFor example this code intergrates exponent from 0 to 1:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet res = quadRomberg defQuad (0, 1) exp\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003equadRes res     -- Integration result\n\u003c/code\u003e\u003c/strong\u003eJust 1.718281828459045\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003equadPrecEst res -- Estimate of precision\n\u003c/code\u003e\u003c/strong\u003e2.5844957590474064e-16\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003equadNIter res   -- Number of iterations performed\n\u003c/code\u003e\u003c/strong\u003e6\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Numeric.Tools.Integration",
          "name": "Integration",
          "package": "numeric-tools",
          "source": "src/Numeric-Tools-Integration.html",
          "type": "module"
        },
        "index": {
          "description": "Funtions for numerical integration quadRomberg or quadSimpson are reasonable choices in most cases For non-smooth function they converge poorly and quadTrapezoid should be used then For example this code intergrates exponent from to let res quadRomberg defQuad exp quadRes res Integration result Just quadPrecEst res Estimate of precision e-16 quadNIter res Number of iterations performed",
          "hierarchy": "Numeric Tools Integration",
          "module": "Numeric.Tools.Integration",
          "name": "Integration",
          "package": "numeric-tools",
          "partial": "Integration",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Integration.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntegration parameters for numerical routines. Note that each\n additional iteration doubles number of function evaluation required\n to compute integral.\n\u003c/p\u003e\u003cp\u003eNumber of iterations is capped at 30.\n\u003c/p\u003e",
          "module": "Numeric.Tools.Integration",
          "name": "QuadParam",
          "package": "numeric-tools",
          "source": "src/Numeric-Tools-Integration.html#QuadParam",
          "type": "data"
        },
        "index": {
          "description": "Integration parameters for numerical routines Note that each additional iteration doubles number of function evaluation required to compute integral Number of iterations is capped at",
          "hierarchy": "Numeric Tools Integration",
          "module": "Numeric.Tools.Integration",
          "name": "QuadParam",
          "package": "numeric-tools",
          "partial": "Quad Param",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Integration.html#t:QuadParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult of numeric integration.\n\u003c/p\u003e",
          "module": "Numeric.Tools.Integration",
          "name": "QuadRes",
          "package": "numeric-tools",
          "source": "src/Numeric-Tools-Integration.html#QuadRes",
          "type": "data"
        },
        "index": {
          "description": "Result of numeric integration",
          "hierarchy": "Numeric Tools Integration",
          "module": "Numeric.Tools.Integration",
          "name": "QuadRes",
          "package": "numeric-tools",
          "partial": "Quad Res",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Integration.html#t:QuadRes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Tools.Integration",
          "name": "QuadParam",
          "package": "numeric-tools",
          "signature": "QuadParam",
          "source": "src/Numeric-Tools-Integration.html#QuadParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Tools Integration",
          "module": "Numeric.Tools.Integration",
          "name": "QuadParam",
          "package": "numeric-tools",
          "partial": "Quad Param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Integration.html#v:QuadParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.Tools.Integration",
          "name": "QuadRes",
          "package": "numeric-tools",
          "signature": "QuadRes",
          "source": "src/Numeric-Tools-Integration.html#QuadRes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric Tools Integration",
          "module": "Numeric.Tools.Integration",
          "name": "QuadRes",
          "package": "numeric-tools",
          "partial": "Quad Res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Integration.html#v:QuadRes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault parameters for integration functions\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Maximum number of iterations = 20\n\u003c/li\u003e\u003cli\u003e Precision is 10&#8315;&#8313;\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Numeric.Tools.Integration",
          "name": "defQuad",
          "package": "numeric-tools",
          "signature": "QuadParam",
          "source": "src/Numeric-Tools-Integration.html#defQuad",
          "type": "function"
        },
        "index": {
          "description": "Default parameters for integration functions Maximum number of iterations Precision is",
          "hierarchy": "Numeric Tools Integration",
          "module": "Numeric.Tools.Integration",
          "name": "defQuad",
          "package": "numeric-tools",
          "partial": "Quad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Integration.html#v:defQuad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBest estimate of integral\n\u003c/p\u003e",
          "module": "Numeric.Tools.Integration",
          "name": "quadBestEst",
          "package": "numeric-tools",
          "signature": "Double",
          "source": "src/Numeric-Tools-Integration.html#QuadRes",
          "type": "function"
        },
        "index": {
          "description": "Best estimate of integral",
          "hierarchy": "Numeric Tools Integration",
          "module": "Numeric.Tools.Integration",
          "name": "quadBestEst",
          "package": "numeric-tools",
          "partial": "Best Est",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Integration.html#v:quadBestEst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum number of iterations\n\u003c/p\u003e",
          "module": "Numeric.Tools.Integration",
          "name": "quadMaxIter",
          "package": "numeric-tools",
          "signature": "Int",
          "source": "src/Numeric-Tools-Integration.html#QuadParam",
          "type": "function"
        },
        "index": {
          "description": "Maximum number of iterations",
          "hierarchy": "Numeric Tools Integration",
          "module": "Numeric.Tools.Integration",
          "name": "quadMaxIter",
          "package": "numeric-tools",
          "partial": "Max Iter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Integration.html#v:quadMaxIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of iterations\n\u003c/p\u003e",
          "module": "Numeric.Tools.Integration",
          "name": "quadNIter",
          "package": "numeric-tools",
          "signature": "Int",
          "source": "src/Numeric-Tools-Integration.html#QuadRes",
          "type": "function"
        },
        "index": {
          "description": "Number of iterations",
          "hierarchy": "Numeric Tools Integration",
          "module": "Numeric.Tools.Integration",
          "name": "quadNIter",
          "package": "numeric-tools",
          "partial": "NIter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Integration.html#v:quadNIter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRough estimate of attained precision\n\u003c/p\u003e",
          "module": "Numeric.Tools.Integration",
          "name": "quadPrecEst",
          "package": "numeric-tools",
          "signature": "Double",
          "source": "src/Numeric-Tools-Integration.html#QuadRes",
          "type": "function"
        },
        "index": {
          "description": "Rough estimate of attained precision",
          "hierarchy": "Numeric Tools Integration",
          "module": "Numeric.Tools.Integration",
          "name": "quadPrecEst",
          "package": "numeric-tools",
          "partial": "Prec Est",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Integration.html#v:quadPrecEst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelative precision of answer\n\u003c/p\u003e",
          "module": "Numeric.Tools.Integration",
          "name": "quadPrecision",
          "package": "numeric-tools",
          "signature": "Double",
          "source": "src/Numeric-Tools-Integration.html#QuadParam",
          "type": "function"
        },
        "index": {
          "description": "Relative precision of answer",
          "hierarchy": "Numeric Tools Integration",
          "module": "Numeric.Tools.Integration",
          "name": "quadPrecision",
          "package": "numeric-tools",
          "partial": "Precision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Integration.html#v:quadPrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntegraion result\n\u003c/p\u003e",
          "module": "Numeric.Tools.Integration",
          "name": "quadRes",
          "package": "numeric-tools",
          "signature": "Maybe Double",
          "source": "src/Numeric-Tools-Integration.html#QuadRes",
          "type": "function"
        },
        "index": {
          "description": "Integraion result",
          "hierarchy": "Numeric Tools Integration",
          "module": "Numeric.Tools.Integration",
          "name": "quadRes",
          "package": "numeric-tools",
          "partial": "Res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Integration.html#v:quadRes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntegration using Romberg rule. For sufficiently smooth functions\n   (e.g. analytic) it's a fastest of three.\n\u003c/p\u003e",
          "module": "Numeric.Tools.Integration",
          "name": "quadRomberg",
          "package": "numeric-tools",
          "signature": "QuadParam-\u003e (Double, Double)-\u003e (Double -\u003e Double)-\u003e QuadRes",
          "type": "function"
        },
        "index": {
          "description": "Integration using Romberg rule For sufficiently smooth functions e.g analytic it fastest of three",
          "hierarchy": "Numeric Tools Integration",
          "module": "Numeric.Tools.Integration",
          "name": "quadRomberg",
          "normalized": "QuadParam-\u003e(Double,Double)-\u003e(Double-\u003eDouble)-\u003eQuadRes",
          "package": "numeric-tools",
          "partial": "Romberg",
          "signature": "QuadParam-\u003e(Double,Double)-\u003e(Double-\u003eDouble)-\u003eQuadRes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Integration.html#v:quadRomberg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntegration using Simpson rule. It should be more efficient than\n   \u003ccode\u003e\u003ca\u003equadTrapezoid\u003c/a\u003e\u003c/code\u003e if function being integrated have finite fourth\n   derivative.\n\u003c/p\u003e",
          "module": "Numeric.Tools.Integration",
          "name": "quadSimpson",
          "package": "numeric-tools",
          "signature": "QuadParam-\u003e (Double, Double)-\u003e (Double -\u003e Double)-\u003e QuadRes",
          "type": "function"
        },
        "index": {
          "description": "Integration using Simpson rule It should be more efficient than quadTrapezoid if function being integrated have finite fourth derivative",
          "hierarchy": "Numeric Tools Integration",
          "module": "Numeric.Tools.Integration",
          "name": "quadSimpson",
          "normalized": "QuadParam-\u003e(Double,Double)-\u003e(Double-\u003eDouble)-\u003eQuadRes",
          "package": "numeric-tools",
          "partial": "Simpson",
          "signature": "QuadParam-\u003e(Double,Double)-\u003e(Double-\u003eDouble)-\u003eQuadRes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Integration.html#v:quadSimpson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntegration of using trapezoids. This is robust algorithm and\n   place and useful for not very smooth. But it is very slow. It\n   hundreds times slower then \u003ccode\u003e\u003ca\u003equadRomberg\u003c/a\u003e\u003c/code\u003e if function is\n   sufficiently smooth.\n\u003c/p\u003e",
          "module": "Numeric.Tools.Integration",
          "name": "quadTrapezoid",
          "package": "numeric-tools",
          "signature": "QuadParam-\u003e (Double, Double)-\u003e (Double -\u003e Double)-\u003e QuadRes",
          "type": "function"
        },
        "index": {
          "description": "Integration of using trapezoids This is robust algorithm and place and useful for not very smooth But it is very slow It hundreds times slower then quadRomberg if function is sufficiently smooth",
          "hierarchy": "Numeric Tools Integration",
          "module": "Numeric.Tools.Integration",
          "name": "quadTrapezoid",
          "normalized": "QuadParam-\u003e(Double,Double)-\u003e(Double-\u003eDouble)-\u003eQuadRes",
          "package": "numeric-tools",
          "partial": "Trapezoid",
          "signature": "QuadParam-\u003e(Double,Double)-\u003e(Double-\u003eDouble)-\u003eQuadRes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Integration.html#v:quadTrapezoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunction interpolation.\n\u003c/p\u003e\u003cp\u003eSine interpolation using cubic splines:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet tbl = cubicSpline $ tabulateFun (uniformMesh (0,10) 100) sin\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etbl `at` 1.786\n\u003c/code\u003e\u003c/strong\u003e0.9769239849844867\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Numeric.Tools.Interpolation",
          "name": "Interpolation",
          "package": "numeric-tools",
          "source": "src/Numeric-Tools-Interpolation.html",
          "type": "module"
        },
        "index": {
          "description": "Function interpolation Sine interpolation using cubic splines let tbl cubicSpline tabulateFun uniformMesh sin tbl at",
          "hierarchy": "Numeric Tools Interpolation",
          "module": "Numeric.Tools.Interpolation",
          "name": "Interpolation",
          "package": "numeric-tools",
          "partial": "Interpolation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Interpolation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNatural cubic splines\n\u003c/p\u003e",
          "module": "Numeric.Tools.Interpolation",
          "name": "CubicSpline",
          "package": "numeric-tools",
          "source": "src/Numeric-Tools-Interpolation.html#CubicSpline",
          "type": "data"
        },
        "index": {
          "description": "Natural cubic splines",
          "hierarchy": "Numeric Tools Interpolation",
          "module": "Numeric.Tools.Interpolation",
          "name": "CubicSpline",
          "package": "numeric-tools",
          "partial": "Cubic Spline",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Interpolation.html#t:CubicSpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterpolation for arbitraty meshes\n\u003c/p\u003e",
          "module": "Numeric.Tools.Interpolation",
          "name": "Interpolation",
          "package": "numeric-tools",
          "source": "src/Numeric-Tools-Interpolation.html#Interpolation",
          "type": "class"
        },
        "index": {
          "description": "Interpolation for arbitraty meshes",
          "hierarchy": "Numeric Tools Interpolation",
          "module": "Numeric.Tools.Interpolation",
          "name": "Interpolation",
          "package": "numeric-tools",
          "partial": "Interpolation",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Interpolation.html#t:Interpolation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData for linear interpolation\n\u003c/p\u003e",
          "module": "Numeric.Tools.Interpolation",
          "name": "LinearInterp",
          "package": "numeric-tools",
          "source": "src/Numeric-Tools-Interpolation.html#LinearInterp",
          "type": "data"
        },
        "index": {
          "description": "Data for linear interpolation",
          "hierarchy": "Numeric Tools Interpolation",
          "module": "Numeric.Tools.Interpolation",
          "name": "LinearInterp",
          "package": "numeric-tools",
          "partial": "Linear Interp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Interpolation.html#t:LinearInterp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterpolate function at some point. Function should not\n   fail outside of mesh however it may and most likely will give\n   nonsensical results\n\u003c/p\u003e",
          "module": "Numeric.Tools.Interpolation",
          "name": "at",
          "package": "numeric-tools",
          "signature": "a m -\u003e Double -\u003e Double",
          "source": "src/Numeric-Tools-Interpolation.html#at",
          "type": "method"
        },
        "index": {
          "description": "Interpolate function at some point Function should not fail outside of mesh however it may and most likely will give nonsensical results",
          "hierarchy": "Numeric Tools Interpolation",
          "module": "Numeric.Tools.Interpolation",
          "name": "at",
          "normalized": "a b-\u003eDouble-\u003eDouble",
          "package": "numeric-tools",
          "signature": "a m-\u003eDouble-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Interpolation.html#v:at"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction used to fix types\n\u003c/p\u003e",
          "module": "Numeric.Tools.Interpolation",
          "name": "cubicSpline",
          "package": "numeric-tools",
          "signature": "CubicSpline a -\u003e CubicSpline a",
          "source": "src/Numeric-Tools-Interpolation.html#cubicSpline",
          "type": "function"
        },
        "index": {
          "description": "Function used to fix types",
          "hierarchy": "Numeric Tools Interpolation",
          "module": "Numeric.Tools.Interpolation",
          "name": "cubicSpline",
          "normalized": "CubicSpline a-\u003eCubicSpline a",
          "package": "numeric-tools",
          "partial": "Spline",
          "signature": "CubicSpline a-\u003eCubicSpline a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Interpolation.html#v:cubicSpline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet mesh.\n\u003c/p\u003e",
          "module": "Numeric.Tools.Interpolation",
          "name": "interpolationMesh",
          "package": "numeric-tools",
          "signature": "a m -\u003e m",
          "source": "src/Numeric-Tools-Interpolation.html#interpolationMesh",
          "type": "method"
        },
        "index": {
          "description": "Get mesh",
          "hierarchy": "Numeric Tools Interpolation",
          "module": "Numeric.Tools.Interpolation",
          "name": "interpolationMesh",
          "normalized": "a b-\u003eb",
          "package": "numeric-tools",
          "partial": "Mesh",
          "signature": "a m-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Interpolation.html#v:interpolationMesh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet table of function values \n\u003c/p\u003e",
          "module": "Numeric.Tools.Interpolation",
          "name": "interpolationTable",
          "package": "numeric-tools",
          "signature": "a m -\u003e Vector Double",
          "source": "src/Numeric-Tools-Interpolation.html#interpolationTable",
          "type": "method"
        },
        "index": {
          "description": "Get table of function values",
          "hierarchy": "Numeric Tools Interpolation",
          "module": "Numeric.Tools.Interpolation",
          "name": "interpolationTable",
          "normalized": "a b-\u003eVector Double",
          "package": "numeric-tools",
          "partial": "Table",
          "signature": "a m-\u003eVector Double",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Interpolation.html#v:interpolationTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction used to fix types\n\u003c/p\u003e",
          "module": "Numeric.Tools.Interpolation",
          "name": "linearInterp",
          "package": "numeric-tools",
          "signature": "LinearInterp a -\u003e LinearInterp a",
          "source": "src/Numeric-Tools-Interpolation.html#linearInterp",
          "type": "function"
        },
        "index": {
          "description": "Function used to fix types",
          "hierarchy": "Numeric Tools Interpolation",
          "module": "Numeric.Tools.Interpolation",
          "name": "linearInterp",
          "normalized": "LinearInterp a-\u003eLinearInterp a",
          "package": "numeric-tools",
          "partial": "Interp",
          "signature": "LinearInterp a-\u003eLinearInterp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Interpolation.html#v:linearInterp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse table of already evaluated function and mesh. Sizes of mesh\n   and table must coincide. \n\u003c/p\u003e",
          "module": "Numeric.Tools.Interpolation",
          "name": "tabulate",
          "package": "numeric-tools",
          "signature": "m -\u003e v Double -\u003e a m",
          "source": "src/Numeric-Tools-Interpolation.html#tabulate",
          "type": "function"
        },
        "index": {
          "description": "Use table of already evaluated function and mesh Sizes of mesh and table must coincide",
          "hierarchy": "Numeric Tools Interpolation",
          "module": "Numeric.Tools.Interpolation",
          "name": "tabulate",
          "normalized": "a-\u003eb Double-\u003ec a",
          "package": "numeric-tools",
          "signature": "m-\u003ev Double-\u003ea m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Interpolation.html#v:tabulate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTabulate function\n\u003c/p\u003e",
          "module": "Numeric.Tools.Interpolation",
          "name": "tabulateFun",
          "package": "numeric-tools",
          "signature": "m -\u003e (Double -\u003e Double) -\u003e a m",
          "source": "src/Numeric-Tools-Interpolation.html#tabulateFun",
          "type": "method"
        },
        "index": {
          "description": "Tabulate function",
          "hierarchy": "Numeric Tools Interpolation",
          "module": "Numeric.Tools.Interpolation",
          "name": "tabulateFun",
          "normalized": "a-\u003e(Double-\u003eDouble)-\u003eb a",
          "package": "numeric-tools",
          "partial": "Fun",
          "signature": "m-\u003e(Double-\u003eDouble)-\u003ea m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Interpolation.html#v:tabulateFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse table of already evaluated function and mesh. Sizes of mesh\n   and table must coincide but it's not checked. Do not use this\n   function use \u003ccode\u003e\u003ca\u003etabulate\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
          "module": "Numeric.Tools.Interpolation",
          "name": "unsafeTabulate",
          "package": "numeric-tools",
          "signature": "m -\u003e v Double -\u003e a m",
          "source": "src/Numeric-Tools-Interpolation.html#unsafeTabulate",
          "type": "method"
        },
        "index": {
          "description": "Use table of already evaluated function and mesh Sizes of mesh and table must coincide but it not checked Do not use this function use tabulate instead",
          "hierarchy": "Numeric Tools Interpolation",
          "module": "Numeric.Tools.Interpolation",
          "name": "unsafeTabulate",
          "normalized": "a-\u003eb Double-\u003ec a",
          "package": "numeric-tools",
          "partial": "Tabulate",
          "signature": "m-\u003ev Double-\u003ea m",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Interpolation.html#v:unsafeTabulate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e1-dimensional meshes. Used by \u003ccode\u003eNumeric.Tools.Interpolation\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.Tools.Mesh",
          "name": "Mesh",
          "package": "numeric-tools",
          "source": "src/Numeric-Tools-Mesh.html",
          "type": "module"
        },
        "index": {
          "description": "dimensional meshes Used by Numeric.Tools.Interpolation",
          "hierarchy": "Numeric Tools Mesh",
          "module": "Numeric.Tools.Mesh",
          "name": "Mesh",
          "package": "numeric-tools",
          "partial": "Mesh",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Mesh.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for 1-dimensional meshes. Mesh is ordered set of\n points. Each instance must guarantee that every next point is\n greater that previous and there is at least 2 points in mesh.\n\u003c/p\u003e",
          "module": "Numeric.Tools.Mesh",
          "name": "Mesh",
          "package": "numeric-tools",
          "source": "src/Numeric-Tools-Mesh.html#Mesh",
          "type": "class"
        },
        "index": {
          "description": "Class for dimensional meshes Mesh is ordered set of points Each instance must guarantee that every next point is greater that previous and there is at least points in mesh",
          "hierarchy": "Numeric Tools Mesh",
          "module": "Numeric.Tools.Mesh",
          "name": "Mesh",
          "package": "numeric-tools",
          "partial": "Mesh",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Mesh.html#t:Mesh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniform mesh\n\u003c/p\u003e",
          "module": "Numeric.Tools.Mesh",
          "name": "UniformMesh",
          "package": "numeric-tools",
          "source": "src/Numeric-Tools-Mesh.html#UniformMesh",
          "type": "data"
        },
        "index": {
          "description": "Uniform mesh",
          "hierarchy": "Numeric Tools Mesh",
          "module": "Numeric.Tools.Mesh",
          "name": "UniformMesh",
          "package": "numeric-tools",
          "partial": "Uniform Mesh",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Mesh.html#t:UniformMesh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind such index for value that\n\u003c/p\u003e\u003cpre\u003e mesh ! i \u003c= x && mesh ! i+1 \u003e x\n\u003c/pre\u003e\u003cp\u003eWill return invalid index if value is out of range.\n\u003c/p\u003e",
          "module": "Numeric.Tools.Mesh",
          "name": "meshFindIndex",
          "package": "numeric-tools",
          "signature": "a -\u003e Double -\u003e Int",
          "source": "src/Numeric-Tools-Mesh.html#meshFindIndex",
          "type": "method"
        },
        "index": {
          "description": "Find such index for value that mesh mesh Will return invalid index if value is out of range",
          "hierarchy": "Numeric Tools Mesh",
          "module": "Numeric.Tools.Mesh",
          "name": "meshFindIndex",
          "normalized": "a-\u003eDouble-\u003eInt",
          "package": "numeric-tools",
          "partial": "Find Index",
          "signature": "a-\u003eDouble-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Mesh.html#v:meshFindIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLow bound of mesh\n\u003c/p\u003e",
          "module": "Numeric.Tools.Mesh",
          "name": "meshLowerBound",
          "package": "numeric-tools",
          "signature": "a -\u003e Double",
          "source": "src/Numeric-Tools-Mesh.html#meshLowerBound",
          "type": "method"
        },
        "index": {
          "description": "Low bound of mesh",
          "hierarchy": "Numeric Tools Mesh",
          "module": "Numeric.Tools.Mesh",
          "name": "meshLowerBound",
          "normalized": "a-\u003eDouble",
          "package": "numeric-tools",
          "partial": "Lower Bound",
          "signature": "a-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Mesh.html#v:meshLowerBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpper bound of mesh\n\u003c/p\u003e",
          "module": "Numeric.Tools.Mesh",
          "name": "meshUpperBound",
          "package": "numeric-tools",
          "signature": "a -\u003e Double",
          "source": "src/Numeric-Tools-Mesh.html#meshUpperBound",
          "type": "method"
        },
        "index": {
          "description": "Upper bound of mesh",
          "hierarchy": "Numeric Tools Mesh",
          "module": "Numeric.Tools.Mesh",
          "name": "meshUpperBound",
          "normalized": "a-\u003eDouble",
          "package": "numeric-tools",
          "partial": "Upper Bound",
          "signature": "a-\u003eDouble",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Mesh.html#v:meshUpperBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate uniform mesh\n\u003c/p\u003e",
          "module": "Numeric.Tools.Mesh",
          "name": "uniformMesh",
          "package": "numeric-tools",
          "signature": "(Double, Double)-\u003e Int-\u003e UniformMesh",
          "type": "function"
        },
        "index": {
          "description": "Create uniform mesh",
          "hierarchy": "Numeric Tools Mesh",
          "module": "Numeric.Tools.Mesh",
          "name": "uniformMesh",
          "normalized": "(Double,Double)-\u003eInt-\u003eUniformMesh",
          "package": "numeric-tools",
          "partial": "Mesh",
          "signature": "(Double,Double)-\u003eInt-\u003eUniformMesh",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Mesh.html#v:uniformMesh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistance between points\n\u003c/p\u003e",
          "module": "Numeric.Tools.Mesh",
          "name": "uniformMeshStep",
          "package": "numeric-tools",
          "signature": "UniformMesh -\u003e Double",
          "source": "src/Numeric-Tools-Mesh.html#uniformMeshStep",
          "type": "function"
        },
        "index": {
          "description": "Distance between points",
          "hierarchy": "Numeric Tools Mesh",
          "module": "Numeric.Tools.Mesh",
          "name": "uniformMeshStep",
          "normalized": "UniformMesh-\u003eDouble",
          "package": "numeric-tools",
          "partial": "Mesh Step",
          "signature": "UniformMesh-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/numeric-tools/docs/Numeric-Tools-Mesh.html#v:uniformMeshStep"
      }
    }
  ]
]