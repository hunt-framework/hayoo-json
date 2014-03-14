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
        "word": "arrow-list"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.ArrowF",
          "name": "ArrowF",
          "package": "arrow-list",
          "source": "src/Control-Arrow-ArrowF.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Arrow ArrowF",
          "module": "Control.Arrow.ArrowF",
          "name": "ArrowF",
          "package": "arrow-list",
          "partial": "Arrow",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for arrows that produce containers of results. The container\n arrow can be seen as a generalization for list arrows. Most operations\n assume the container type has an \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e, an \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e and a\n \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowF",
          "name": "ArrowF",
          "package": "arrow-list",
          "source": "src/Control-Arrow-ArrowF.html#ArrowF",
          "type": "class"
        },
        "index": {
          "description": "type class for arrows that produce containers of results The container arrow can be seen as generalization for list arrows Most operations assume the container type has an Applicative an Alternative and Foldable instance",
          "hierarchy": "Control Arrow ArrowF",
          "module": "Control.Arrow.ArrowF",
          "name": "ArrowF",
          "package": "arrow-list",
          "partial": "Arrow",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#t:ArrowF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a monadic function returning an ordered list into a container arrow.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowF",
          "name": "arrMF",
          "package": "arrow-list",
          "signature": "(a -\u003e m (f c)) -\u003e a `ar` c",
          "source": "src/Control-Arrow-ArrowF.html#arrMF",
          "type": "function"
        },
        "index": {
          "description": "Embed monadic function returning an ordered list into container arrow",
          "hierarchy": "Control Arrow ArrowF",
          "module": "Control.Arrow.ArrowF",
          "name": "arrMF",
          "normalized": "(a-\u003eb(c d))-\u003ea e d",
          "package": "arrow-list",
          "partial": "MF",
          "signature": "(a-\u003em(f c))-\u003ea ar c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:arrMF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect the results of applying multiple arrows to the same input.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowF",
          "name": "concatA",
          "package": "arrow-list",
          "signature": "[a `ar` b] -\u003e a `ar` b",
          "source": "src/Control-Arrow-ArrowF.html#concatA",
          "type": "function"
        },
        "index": {
          "description": "Collect the results of applying multiple arrows to the same input",
          "hierarchy": "Control Arrow ArrowF",
          "module": "Control.Arrow.ArrowF",
          "name": "concatA",
          "normalized": "[a b c]-\u003ea b c",
          "package": "arrow-list",
          "signature": "[a ar b]-\u003ea ar b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:concatA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip the input and produce a constant output.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowF",
          "name": "const",
          "package": "arrow-list",
          "signature": "b -\u003e a `ar` b",
          "source": "src/Control-Arrow-ArrowF.html#const",
          "type": "function"
        },
        "index": {
          "description": "Skip the input and produce constant output",
          "hierarchy": "Control Arrow ArrowF",
          "module": "Control.Arrow.ArrowF",
          "name": "const",
          "normalized": "a-\u003eb c a",
          "package": "arrow-list",
          "signature": "b-\u003ea ar b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip the input and produce a constant output specified as a container.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowF",
          "name": "constF",
          "package": "arrow-list",
          "signature": "f c -\u003e a `ar` c",
          "source": "src/Control-Arrow-ArrowF.html#constF",
          "type": "function"
        },
        "index": {
          "description": "Skip the input and produce constant output specified as container",
          "hierarchy": "Control Arrow ArrowF",
          "module": "Control.Arrow.ArrowF",
          "name": "constF",
          "normalized": "a b-\u003ec d b",
          "package": "arrow-list",
          "signature": "f c-\u003ea ar c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:constF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.ArrowF",
          "name": "embed",
          "package": "arrow-list",
          "signature": "embed",
          "source": "src/Control-Arrow-ArrowF.html#embed",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Arrow ArrowF",
          "module": "Control.Arrow.ArrowF",
          "name": "embed",
          "package": "arrow-list",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:embed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter the results of an arrow with a predicate arrow, when the filter\n condition produces results the input is accepted otherwise it is excluded.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowF",
          "name": "filterA",
          "package": "arrow-list",
          "signature": "(a `ar` c) -\u003e a `ar` a",
          "source": "src/Control-Arrow-ArrowF.html#filterA",
          "type": "function"
        },
        "index": {
          "description": "Filter the results of an arrow with predicate arrow when the filter condition produces results the input is accepted otherwise it is excluded",
          "hierarchy": "Control Arrow ArrowF",
          "module": "Control.Arrow.ArrowF",
          "name": "filterA",
          "normalized": "(a b c)-\u003ea b a",
          "package": "arrow-list",
          "signature": "(a ar c)-\u003ea ar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:filterA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a container arrow only when a conditional arrow produces any\n results.  When the conditional produces no results the output arrow\n \u003cem\u003eproduces no results\u003c/em\u003e. The \u003cem\u003efirst\u003c/em\u003e input arrow is used as the conditional,\n this allow you to write: \u003ccode\u003e condition `guards` a \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowF",
          "name": "guards",
          "package": "arrow-list",
          "signature": "(a `ar` c) -\u003e (a `ar` b) -\u003e a `ar` b",
          "source": "src/Control-Arrow-ArrowF.html#guards",
          "type": "function"
        },
        "index": {
          "description": "Apply container arrow only when conditional arrow produces any results When the conditional produces no results the output arrow produces no results The first input arrow is used as the conditional this allow you to write condition guards",
          "hierarchy": "Control Arrow ArrowF",
          "module": "Control.Arrow.ArrowF",
          "name": "guards",
          "normalized": "(a b c)-\u003e(a b d)-\u003ea b d",
          "package": "arrow-list",
          "signature": "(a ar c)-\u003e(a ar b)-\u003ea ar b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:guards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the result of a container arrow as a conditional, like an if-then-else\n arrow. When the first arrow produces any results the \u003cem\u003ethen\u003c/em\u003e arrow will be\n used, when the first arrow produces no results the \u003cem\u003eelse\u003c/em\u003e arrow will be\n used.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowF",
          "name": "ifA",
          "package": "arrow-list",
          "signature": "(a `ar` b) -\u003e (a `ar` t) -\u003e (a `ar` t) -\u003e a `ar` t",
          "source": "src/Control-Arrow-ArrowF.html#ifA",
          "type": "function"
        },
        "index": {
          "description": "Use the result of container arrow as conditional like an if-then-else arrow When the first arrow produces any results the then arrow will be used when the first arrow produces no results the else arrow will be used",
          "hierarchy": "Control Arrow ArrowF",
          "module": "Control.Arrow.ArrowF",
          "name": "ifA",
          "normalized": "(a b c)-\u003e(a b d)-\u003e(a b d)-\u003ea b d",
          "package": "arrow-list",
          "signature": "(a ar b)-\u003e(a ar t)-\u003e(a ar t)-\u003ea ar t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:ifA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a filtering container arrow by mapping a predicate function over the\n input. When the predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e the input will be returned in the\n output container, when \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e the empty container is returned.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowF",
          "name": "isA",
          "package": "arrow-list",
          "signature": "(a -\u003e Bool) -\u003e a `ar` a",
          "source": "src/Control-Arrow-ArrowF.html#isA",
          "type": "function"
        },
        "index": {
          "description": "Create filtering container arrow by mapping predicate function over the input When the predicate returns True the input will be returned in the output container when False the empty container is returned",
          "hierarchy": "Control Arrow ArrowF",
          "module": "Control.Arrow.ArrowF",
          "name": "isA",
          "normalized": "(a-\u003eBool)-\u003ea b a",
          "package": "arrow-list",
          "signature": "(a-\u003eBool)-\u003ea ar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:isA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a function over the result collection of a container arrow.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowF",
          "name": "mapF",
          "package": "arrow-list",
          "signature": "(f b -\u003e f c) -\u003e (a `ar` b) -\u003e a `ar` c",
          "source": "src/Control-Arrow-ArrowF.html#mapF",
          "type": "function"
        },
        "index": {
          "description": "Map function over the result collection of container arrow",
          "hierarchy": "Control Arrow ArrowF",
          "module": "Control.Arrow.ArrowF",
          "name": "mapF",
          "normalized": "(a b-\u003ea c)-\u003e(d e b)-\u003ed e c",
          "package": "arrow-list",
          "signature": "(f b-\u003ef c)-\u003e(a ar b)-\u003ea ar c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:mapF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e input to a container output. When the Maybe is a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n an empty container will be returned, \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e will result in a singleton\n container.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowF",
          "name": "maybeA",
          "package": "arrow-list",
          "signature": "Maybe a `ar` a",
          "source": "src/Control-Arrow-ArrowF.html#maybeA",
          "type": "function"
        },
        "index": {
          "description": "Map Maybe input to container output When the Maybe is Nothing an empty container will be returned Just will result in singleton container",
          "hierarchy": "Control Arrow ArrowF",
          "module": "Control.Arrow.ArrowF",
          "name": "maybeA",
          "package": "arrow-list",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:maybeA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIgnore the input and produce no results. Like \u003ccode\u003e\u003ca\u003ezeroArrow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowF",
          "name": "none",
          "package": "arrow-list",
          "signature": "a `ar` b",
          "source": "src/Control-Arrow-ArrowF.html#none",
          "type": "function"
        },
        "index": {
          "description": "Ignore the input and produce no results Like zeroArrow",
          "hierarchy": "Control Arrow ArrowF",
          "module": "Control.Arrow.ArrowF",
          "name": "none",
          "package": "arrow-list",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:none"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegation container arrow. Only accept the input when the condition\n produces no output.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowF",
          "name": "notA",
          "package": "arrow-list",
          "signature": "(a `ar` c) -\u003e a `ar` a",
          "source": "src/Control-Arrow-ArrowF.html#notA",
          "type": "function"
        },
        "index": {
          "description": "Negation container arrow Only accept the input when the condition produces no output",
          "hierarchy": "Control Arrow ArrowF",
          "module": "Control.Arrow.ArrowF",
          "name": "notA",
          "normalized": "(a b c)-\u003ea b a",
          "package": "arrow-list",
          "signature": "(a ar c)-\u003ea ar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:notA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.ArrowF",
          "name": "observe",
          "package": "arrow-list",
          "signature": "observe",
          "source": "src/Control-Arrow-ArrowF.html#observe",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Arrow ArrowF",
          "module": "Control.Arrow.ArrowF",
          "name": "observe",
          "package": "arrow-list",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:observe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a container arrow, when there are no results a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e will be\n returned, otherwise the results will be wrapped in a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e. This function\n always produces result.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowF",
          "name": "optional",
          "package": "arrow-list",
          "signature": "(a `ar` b) -\u003e a `ar` Maybe b",
          "source": "src/Control-Arrow-ArrowF.html#optional",
          "type": "function"
        },
        "index": {
          "description": "Apply container arrow when there are no results Nothing will be returned otherwise the results will be wrapped in Just This function always produces result",
          "hierarchy": "Control Arrow ArrowF",
          "module": "Control.Arrow.ArrowF",
          "name": "optional",
          "normalized": "(a b c)-\u003ea b Maybe c",
          "package": "arrow-list",
          "signature": "(a ar b)-\u003ea ar Maybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:optional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the input arrow, when the arrow does not produces any results the\n second fallback arrow is applied.\n Likely written infix like this \u003ccode\u003e a `orElse` b \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowF",
          "name": "orElse",
          "package": "arrow-list",
          "signature": "(a `ar` b) -\u003e (a `ar` b) -\u003e a `ar` b",
          "source": "src/Control-Arrow-ArrowF.html#orElse",
          "type": "function"
        },
        "index": {
          "description": "Apply the input arrow when the arrow does not produces any results the second fallback arrow is applied Likely written infix like this orElse",
          "hierarchy": "Control Arrow ArrowF",
          "module": "Control.Arrow.ArrowF",
          "name": "orElse",
          "normalized": "(a b c)-\u003e(a b c)-\u003ea b c",
          "package": "arrow-list",
          "partial": "Else",
          "signature": "(a ar b)-\u003e(a ar b)-\u003ea ar b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:orElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin the results of two arrows, like (\u003ca\u003e+\u003c/a\u003e) from ArrowPlus.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowF",
          "name": "plus",
          "package": "arrow-list",
          "signature": "(a `ar` b) -\u003e (a `ar` b) -\u003e a `ar` b",
          "source": "src/Control-Arrow-ArrowF.html#plus",
          "type": "function"
        },
        "index": {
          "description": "Join the results of two arrows like from ArrowPlus",
          "hierarchy": "Control Arrow ArrowF",
          "module": "Control.Arrow.ArrowF",
          "name": "plus",
          "normalized": "(a b c)-\u003e(a b c)-\u003ea b c",
          "package": "arrow-list",
          "signature": "(a ar b)-\u003e(a ar b)-\u003ea ar b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e indicating whether the input arrow produces a container\n with any results.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowF",
          "name": "results",
          "package": "arrow-list",
          "signature": "(a `ar` b) -\u003e a `ar` Bool",
          "source": "src/Control-Arrow-ArrowF.html#results",
          "type": "function"
        },
        "index": {
          "description": "Returns Bool indicating whether the input arrow produces container with any results",
          "hierarchy": "Control Arrow ArrowF",
          "module": "Control.Arrow.ArrowF",
          "name": "results",
          "normalized": "(a b c)-\u003ea b Bool",
          "package": "arrow-list",
          "signature": "(a ar b)-\u003ea ar Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:results"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the output of an arrow producing two results and concatenate them\n into the result of the container arrow.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowF",
          "name": "unite",
          "package": "arrow-list",
          "signature": "(b, b) `ar` b",
          "source": "src/Control-Arrow-ArrowF.html#unite",
          "type": "function"
        },
        "index": {
          "description": "Take the output of an arrow producing two results and concatenate them into the result of the container arrow",
          "hierarchy": "Control Arrow ArrowF",
          "module": "Control.Arrow.ArrowF",
          "name": "unite",
          "normalized": "(a,a)b a",
          "package": "arrow-list",
          "signature": "(b,b)ar b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:unite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a container arrow only when a conditional arrow produces any\n results.  When the conditional produces no results the output arrow /behaves\n like the identity\u003cem\u003e. The \u003c/em\u003esecond/ input arrow is used as the conditional,\n this allow you to write: \u003ccode\u003e a `when` condition \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowF",
          "name": "when",
          "package": "arrow-list",
          "signature": "(a `ar` a) -\u003e (a `ar` c) -\u003e a `ar` a",
          "source": "src/Control-Arrow-ArrowF.html#when",
          "type": "function"
        },
        "index": {
          "description": "Apply container arrow only when conditional arrow produces any results When the conditional produces no results the output arrow behaves like the identity The second input arrow is used as the conditional this allow you to write when condition",
          "hierarchy": "Control Arrow ArrowF",
          "module": "Control.Arrow.ArrowF",
          "name": "when",
          "normalized": "(a b a)-\u003e(a b c)-\u003ea b a",
          "package": "arrow-list",
          "signature": "(a ar a)-\u003e(a ar c)-\u003ea ar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowF.html#v:when"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eArrowKleisli\u003c/a\u003e\u003c/code\u003e type class allows for embedding monadic operations in\nKleisli arrows.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Arrow.ArrowKleisli",
          "name": "ArrowKleisli",
          "package": "arrow-list",
          "source": "src/Control-Arrow-ArrowKleisli.html",
          "type": "module"
        },
        "index": {
          "description": "The ArrowKleisli type class allows for embedding monadic operations in Kleisli arrows",
          "hierarchy": "Control Arrow ArrowKleisli",
          "module": "Control.Arrow.ArrowKleisli",
          "name": "ArrowKleisli",
          "package": "arrow-list",
          "partial": "Arrow Kleisli",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowKleisli.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.ArrowKleisli",
          "name": "ArrowKleisli",
          "package": "arrow-list",
          "source": "src/Control-Arrow-ArrowKleisli.html#ArrowKleisli",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Arrow ArrowKleisli",
          "module": "Control.Arrow.ArrowKleisli",
          "name": "ArrowKleisli",
          "package": "arrow-list",
          "partial": "Arrow Kleisli",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowKleisli.html#t:ArrowKleisli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.ArrowKleisli",
          "name": "arrIO",
          "package": "arrow-list",
          "signature": "(a -\u003e IO b) -\u003e a `ar` b",
          "source": "src/Control-Arrow-ArrowKleisli.html#arrIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Arrow ArrowKleisli",
          "module": "Control.Arrow.ArrowKleisli",
          "name": "arrIO",
          "normalized": "(a-\u003eIO b)-\u003ea c b",
          "package": "arrow-list",
          "partial": "IO",
          "signature": "(a-\u003eIO b)-\u003ea ar b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowKleisli.html#v:arrIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.ArrowKleisli",
          "name": "arrM",
          "package": "arrow-list",
          "signature": "(a -\u003e m b) -\u003e a `ar` b",
          "source": "src/Control-Arrow-ArrowKleisli.html#arrM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Arrow ArrowKleisli",
          "module": "Control.Arrow.ArrowKleisli",
          "name": "arrM",
          "normalized": "(a-\u003eb c)-\u003ea d c",
          "package": "arrow-list",
          "signature": "(a-\u003em b)-\u003ea ar b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowKleisli.html#v:arrM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.ArrowKleisli",
          "name": "constM",
          "package": "arrow-list",
          "signature": "m b -\u003e a `ar` b",
          "source": "src/Control-Arrow-ArrowKleisli.html#constM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Arrow ArrowKleisli",
          "module": "Control.Arrow.ArrowKleisli",
          "name": "constM",
          "normalized": "a b-\u003ec d b",
          "package": "arrow-list",
          "signature": "m b-\u003ea ar b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowKleisli.html#v:constM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.ArrowKleisli",
          "name": "effect",
          "package": "arrow-list",
          "signature": "m () -\u003e a `ar` a",
          "source": "src/Control-Arrow-ArrowKleisli.html#effect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Arrow ArrowKleisli",
          "module": "Control.Arrow.ArrowKleisli",
          "name": "effect",
          "normalized": "a()-\u003eb c b",
          "package": "arrow-list",
          "signature": "m()-\u003ea ar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowKleisli.html#v:effect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eArrowList\u003c/a\u003e\u003c/code\u003e type class, and a collection of list arrow related functions.\nThis typeclass can be used to embed functions producing multiple outputs into a\nan arrow.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Arrow.ArrowList",
          "name": "ArrowList",
          "package": "arrow-list",
          "source": "src/Control-Arrow-ArrowList.html",
          "type": "module"
        },
        "index": {
          "description": "The ArrowList type class and collection of list arrow related functions This typeclass can be used to embed functions producing multiple outputs into an arrow",
          "hierarchy": "Control Arrow ArrowList",
          "module": "Control.Arrow.ArrowList",
          "name": "ArrowList",
          "package": "arrow-list",
          "partial": "Arrow List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eArrowList\u003c/a\u003e\u003c/code\u003e class represents two possible actions:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Lifting functions from one value to a list of values into a list arrow.\n\u003c/li\u003e\u003cli\u003e Mapping a function over the result list of a list arrow.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Control.Arrow.ArrowList",
          "name": "ArrowList",
          "package": "arrow-list",
          "source": "src/Control-Arrow-ArrowList.html#ArrowList",
          "type": "class"
        },
        "index": {
          "description": "The ArrowList class represents two possible actions Lifting functions from one value to list of values into list arrow Mapping function over the result list of list arrow",
          "hierarchy": "Control Arrow ArrowList",
          "module": "Control.Arrow.ArrowList",
          "name": "ArrowList",
          "package": "arrow-list",
          "partial": "Arrow List",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#t:ArrowList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.ArrowList",
          "name": "arrL",
          "package": "arrow-list",
          "signature": "(a -\u003e [b]) -\u003e a `ar` b",
          "source": "src/Control-Arrow-ArrowList.html#arrL",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Arrow ArrowList",
          "module": "Control.Arrow.ArrowList",
          "name": "arrL",
          "normalized": "(a-\u003e[b])-\u003ea c b",
          "package": "arrow-list",
          "signature": "(a-\u003e[b])-\u003ea ar b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:arrL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect the results of applying multiple arrows to the same input.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowList",
          "name": "concatA",
          "package": "arrow-list",
          "signature": "[a `ar` b] -\u003e a `ar` b",
          "source": "src/Control-Arrow-ArrowList.html#concatA",
          "type": "function"
        },
        "index": {
          "description": "Collect the results of applying multiple arrows to the same input",
          "hierarchy": "Control Arrow ArrowList",
          "module": "Control.Arrow.ArrowList",
          "name": "concatA",
          "normalized": "[a b c]-\u003ea b c",
          "package": "arrow-list",
          "signature": "[a ar b]-\u003ea ar b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:concatA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e indicating whether the input arrow produce any results.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowList",
          "name": "empty",
          "package": "arrow-list",
          "signature": "(a `ar` b) -\u003e a `ar` Bool",
          "source": "src/Control-Arrow-ArrowList.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Returns Bool indicating whether the input arrow produce any results",
          "hierarchy": "Control Arrow ArrowList",
          "module": "Control.Arrow.ArrowList",
          "name": "empty",
          "normalized": "(a b c)-\u003ea b Bool",
          "package": "arrow-list",
          "signature": "(a ar b)-\u003ea ar Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter the results of an arrow with a predicate arrow, when the filter\n condition produces results the input is accepted otherwise it is excluded.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowList",
          "name": "filterA",
          "package": "arrow-list",
          "signature": "(a `ar` c) -\u003e a `ar` a",
          "source": "src/Control-Arrow-ArrowList.html#filterA",
          "type": "function"
        },
        "index": {
          "description": "Filter the results of an arrow with predicate arrow when the filter condition produces results the input is accepted otherwise it is excluded",
          "hierarchy": "Control Arrow ArrowList",
          "module": "Control.Arrow.ArrowList",
          "name": "filterA",
          "normalized": "(a b c)-\u003ea b a",
          "package": "arrow-list",
          "signature": "(a ar c)-\u003ea ar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:filterA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a list arrow only when a conditional arrow produces any results.\n When the conditional produces no results the output arrow \u003cem\u003eproduces no results\u003c/em\u003e.\n The \u003cem\u003efirst\u003c/em\u003e input arrow is used as the conditional, this allow you\n to write: \u003ccode\u003e c `guards` a \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowList",
          "name": "guards",
          "package": "arrow-list",
          "signature": "(a `ar` c)-\u003e (a `ar` b)-\u003e a `ar` b",
          "type": "function"
        },
        "index": {
          "description": "Apply list arrow only when conditional arrow produces any results When the conditional produces no results the output arrow produces no results The first input arrow is used as the conditional this allow you to write guards",
          "hierarchy": "Control Arrow ArrowList",
          "module": "Control.Arrow.ArrowList",
          "name": "guards",
          "normalized": "(a b c)-\u003e(a b d)-\u003ea b d",
          "package": "arrow-list",
          "signature": "(a ar c)-\u003e(a ar b)-\u003ea ar b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:guards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the result a list arrow as a conditional, like an if-then-else arrow.\n When the first arrow produces any results the \u003cem\u003ethen\u003c/em\u003e arrow will be used,\n when the first arrow produces no results the \u003cem\u003eelse\u003c/em\u003e arrow will be used.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowList",
          "name": "ifA",
          "package": "arrow-list",
          "signature": "(a `ar` c)-\u003e (a `ar` b)-\u003e (a `ar` b)-\u003e a `ar` b",
          "type": "function"
        },
        "index": {
          "description": "Use the result list arrow as conditional like an if-then-else arrow When the first arrow produces any results the then arrow will be used when the first arrow produces no results the else arrow will be used",
          "hierarchy": "Control Arrow ArrowList",
          "module": "Control.Arrow.ArrowList",
          "name": "ifA",
          "normalized": "(a b c)-\u003e(a b d)-\u003e(a b d)-\u003ea b d",
          "package": "arrow-list",
          "signature": "(a ar c)-\u003e(a ar b)-\u003e(a ar b)-\u003ea ar b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:ifA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a filtering list arrow by mapping a predicate function over the\n input. When the predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e the input will be returned in the\n output list, when \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e the empty list is returned.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowList",
          "name": "isA",
          "package": "arrow-list",
          "signature": "(a -\u003e Bool) -\u003e a `ar` a",
          "source": "src/Control-Arrow-ArrowList.html#isA",
          "type": "function"
        },
        "index": {
          "description": "Create filtering list arrow by mapping predicate function over the input When the predicate returns True the input will be returned in the output list when False the empty list is returned",
          "hierarchy": "Control Arrow ArrowList",
          "module": "Control.Arrow.ArrowList",
          "name": "isA",
          "normalized": "(a-\u003eBool)-\u003ea b a",
          "package": "arrow-list",
          "signature": "(a-\u003eBool)-\u003ea ar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:isA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect the entire results of an list arrow as a singleton value in the\n result list.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowList",
          "name": "list",
          "package": "arrow-list",
          "signature": "(a `ar` b) -\u003e a `ar` [b]",
          "source": "src/Control-Arrow-ArrowList.html#list",
          "type": "function"
        },
        "index": {
          "description": "Collect the entire results of an list arrow as singleton value in the result list",
          "hierarchy": "Control Arrow ArrowList",
          "module": "Control.Arrow.ArrowList",
          "name": "list",
          "normalized": "(a b c)-\u003ea b[c]",
          "package": "arrow-list",
          "signature": "(a ar b)-\u003ea ar[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.ArrowList",
          "name": "mapL",
          "package": "arrow-list",
          "signature": "([b] -\u003e [c]) -\u003e (a `ar` b) -\u003e a `ar` c",
          "source": "src/Control-Arrow-ArrowList.html#mapL",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Arrow ArrowList",
          "module": "Control.Arrow.ArrowList",
          "name": "mapL",
          "normalized": "([a]-\u003e[b])-\u003e(c d a)-\u003ec d b",
          "package": "arrow-list",
          "signature": "([b]-\u003e[c])-\u003e(a ar b)-\u003ea ar c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:mapL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e input to a list output. When the Maybe is a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e an\n empty list will be returned, \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e will result in a singleton list.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowList",
          "name": "maybeL",
          "package": "arrow-list",
          "signature": "Maybe a `ar` a",
          "source": "src/Control-Arrow-ArrowList.html#maybeL",
          "type": "function"
        },
        "index": {
          "description": "Map Maybe input to list output When the Maybe is Nothing an empty list will be returned Just will result in singleton list",
          "hierarchy": "Control Arrow ArrowList",
          "module": "Control.Arrow.ArrowList",
          "name": "maybeL",
          "package": "arrow-list",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:maybeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIgnore the input and produce no results. Like \u003ccode\u003e\u003ca\u003ezeroArrow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowList",
          "name": "none",
          "package": "arrow-list",
          "signature": "a `ar` b",
          "source": "src/Control-Arrow-ArrowList.html#none",
          "type": "function"
        },
        "index": {
          "description": "Ignore the input and produce no results Like zeroArrow",
          "hierarchy": "Control Arrow ArrowList",
          "module": "Control.Arrow.ArrowList",
          "name": "none",
          "package": "arrow-list",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:none"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegation list arrow. Only accept the input when the condition produces no\n output.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowList",
          "name": "notA",
          "package": "arrow-list",
          "signature": "(a `ar` c) -\u003e a `ar` a",
          "source": "src/Control-Arrow-ArrowList.html#notA",
          "type": "function"
        },
        "index": {
          "description": "Negation list arrow Only accept the input when the condition produces no output",
          "hierarchy": "Control Arrow ArrowList",
          "module": "Control.Arrow.ArrowList",
          "name": "notA",
          "normalized": "(a b c)-\u003ea b a",
          "package": "arrow-list",
          "signature": "(a ar c)-\u003ea ar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:notA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a list arrow, when there are no results a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e will be\n returned, otherwise the results will be wrapped in a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e. This function\n always produces result.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowList",
          "name": "optional",
          "package": "arrow-list",
          "signature": "(a `ar` b) -\u003e a `ar` Maybe b",
          "source": "src/Control-Arrow-ArrowList.html#optional",
          "type": "function"
        },
        "index": {
          "description": "Apply list arrow when there are no results Nothing will be returned otherwise the results will be wrapped in Just This function always produces result",
          "hierarchy": "Control Arrow ArrowList",
          "module": "Control.Arrow.ArrowList",
          "name": "optional",
          "normalized": "(a b c)-\u003ea b Maybe c",
          "package": "arrow-list",
          "signature": "(a ar b)-\u003ea ar Maybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:optional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the input arrow, when the arrow does not produces any results the\n second fallback arrow is applied.\n Likely written infix like this \u003ccode\u003e a `orElse` b \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowList",
          "name": "orElse",
          "package": "arrow-list",
          "signature": "(a `ar` b) -\u003e (a `ar` b) -\u003e a `ar` b",
          "source": "src/Control-Arrow-ArrowList.html#orElse",
          "type": "function"
        },
        "index": {
          "description": "Apply the input arrow when the arrow does not produces any results the second fallback arrow is applied Likely written infix like this orElse",
          "hierarchy": "Control Arrow ArrowList",
          "module": "Control.Arrow.ArrowList",
          "name": "orElse",
          "normalized": "(a b c)-\u003e(a b c)-\u003ea b c",
          "package": "arrow-list",
          "partial": "Else",
          "signature": "(a ar b)-\u003e(a ar b)-\u003ea ar b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:orElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the output of an arrow producing two results and concatenate them\n into the result of the list arrow.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowList",
          "name": "unite",
          "package": "arrow-list",
          "signature": "(a `ar` (b, b)) -\u003e a `ar` b",
          "source": "src/Control-Arrow-ArrowList.html#unite",
          "type": "function"
        },
        "index": {
          "description": "Take the output of an arrow producing two results and concatenate them into the result of the list arrow",
          "hierarchy": "Control Arrow ArrowList",
          "module": "Control.Arrow.ArrowList",
          "name": "unite",
          "normalized": "(a b(c,c))-\u003ea b c",
          "package": "arrow-list",
          "signature": "(a ar(b,b))-\u003ea ar b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:unite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a list arrow of an input list.\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowList",
          "name": "unlist",
          "package": "arrow-list",
          "signature": "[b] `ar` b",
          "source": "src/Control-Arrow-ArrowList.html#unlist",
          "type": "function"
        },
        "index": {
          "description": "Create list arrow of an input list",
          "hierarchy": "Control Arrow ArrowList",
          "module": "Control.Arrow.ArrowList",
          "name": "unlist",
          "normalized": "[a]b a",
          "package": "arrow-list",
          "signature": "[b]ar b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:unlist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a list arrow only when a conditional arrow produces any results.\n When the conditional produces no results the output arrow \u003cem\u003ebehaves like the identity\u003c/em\u003e.\n The \u003cem\u003esecond\u003c/em\u003e input arrow is used as the conditional, this allow\n you to write: \u003ccode\u003e a `when` c \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Arrow.ArrowList",
          "name": "when",
          "package": "arrow-list",
          "signature": "(a `ar` a)-\u003e (a `ar` b)-\u003e a `ar` a",
          "type": "function"
        },
        "index": {
          "description": "Apply list arrow only when conditional arrow produces any results When the conditional produces no results the output arrow behaves like the identity The second input arrow is used as the conditional this allow you to write when",
          "hierarchy": "Control Arrow ArrowList",
          "module": "Control.Arrow.ArrowList",
          "name": "when",
          "normalized": "(a b a)-\u003e(a b c)-\u003ea b a",
          "package": "arrow-list",
          "signature": "(a ar a)-\u003e(a ar b)-\u003ea ar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-ArrowList.html#v:when"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.List",
          "name": "List",
          "package": "arrow-list",
          "source": "src/Control-Arrow-List.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Arrow List",
          "module": "Control.Arrow.List",
          "name": "List",
          "package": "arrow-list",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.List",
          "name": "ListArrow",
          "package": "arrow-list",
          "source": "src/Control-Arrow-List.html#ListArrow",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Arrow List",
          "module": "Control.Arrow.List",
          "name": "ListArrow",
          "package": "arrow-list",
          "partial": "List Arrow",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-List.html#t:ListArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.List",
          "name": "ListTArrow",
          "package": "arrow-list",
          "source": "src/Control-Arrow-List.html#ListTArrow",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Arrow List",
          "module": "Control.Arrow.List",
          "name": "ListTArrow",
          "package": "arrow-list",
          "partial": "List TArrow",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-List.html#t:ListTArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.List",
          "name": "ListTArrow",
          "package": "arrow-list",
          "signature": "ListTArrow",
          "source": "src/Control-Arrow-List.html#ListTArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Arrow List",
          "module": "Control.Arrow.List",
          "name": "ListTArrow",
          "package": "arrow-list",
          "partial": "List TArrow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-List.html#v:ListTArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.List",
          "name": "arrML",
          "package": "arrow-list",
          "signature": "(a -\u003e m [b]) -\u003e a `ar` b",
          "source": "src/Control-Arrow-List.html#arrML",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Arrow List",
          "module": "Control.Arrow.List",
          "name": "arrML",
          "normalized": "(a-\u003eb[c])-\u003ea d c",
          "package": "arrow-list",
          "partial": "ML",
          "signature": "(a-\u003em[b])-\u003ea ar b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-List.html#v:arrML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.List",
          "name": "runListArrow",
          "package": "arrow-list",
          "signature": "ListArrow a b -\u003e a -\u003e [b]",
          "source": "src/Control-Arrow-List.html#runListArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Arrow List",
          "module": "Control.Arrow.List",
          "name": "runListArrow",
          "normalized": "ListArrow a b-\u003ea-\u003e[b]",
          "package": "arrow-list",
          "partial": "List Arrow",
          "signature": "ListArrow a b-\u003ea-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-List.html#v:runListArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.List",
          "name": "runListTArrow",
          "package": "arrow-list",
          "signature": "ListTArrow m a b -\u003e a -\u003e m [b]",
          "source": "src/Control-Arrow-List.html#runListTArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Arrow List",
          "module": "Control.Arrow.List",
          "name": "runListTArrow",
          "normalized": "ListTArrow a b c-\u003eb-\u003ea[c]",
          "package": "arrow-list",
          "partial": "List TArrow",
          "signature": "ListTArrow m a b-\u003ea-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-List.html#v:runListTArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.List",
          "name": "runListTArrow'",
          "package": "arrow-list",
          "signature": "Kleisli (ListT m) a b",
          "source": "src/Control-Arrow-List.html#ListTArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Arrow List",
          "module": "Control.Arrow.List",
          "name": "runListTArrow'",
          "package": "arrow-list",
          "partial": "List TArrow'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-List.html#v:runListTArrow-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.Sequence",
          "name": "Sequence",
          "package": "arrow-list",
          "source": "src/Control-Arrow-Sequence.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Arrow Sequence",
          "module": "Control.Arrow.Sequence",
          "name": "Sequence",
          "package": "arrow-list",
          "partial": "Sequence",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-Sequence.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.Sequence",
          "name": "SeqArrow",
          "package": "arrow-list",
          "source": "src/Control-Arrow-Sequence.html#SeqArrow",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Arrow Sequence",
          "module": "Control.Arrow.Sequence",
          "name": "SeqArrow",
          "package": "arrow-list",
          "partial": "Seq Arrow",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-Sequence.html#t:SeqArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.Sequence",
          "name": "SeqTArrow",
          "package": "arrow-list",
          "source": "src/Control-Arrow-Sequence.html#SeqTArrow",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Arrow Sequence",
          "module": "Control.Arrow.Sequence",
          "name": "SeqTArrow",
          "package": "arrow-list",
          "partial": "Seq TArrow",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-Sequence.html#t:SeqTArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.Sequence",
          "name": "SeqTArrow",
          "package": "arrow-list",
          "signature": "SeqTArrow",
          "source": "src/Control-Arrow-Sequence.html#SeqTArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Arrow Sequence",
          "module": "Control.Arrow.Sequence",
          "name": "SeqTArrow",
          "package": "arrow-list",
          "partial": "Seq TArrow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-Sequence.html#v:SeqTArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.Sequence",
          "name": "runSeqArrow",
          "package": "arrow-list",
          "signature": "SeqArrow a b -\u003e a -\u003e Seq b",
          "source": "src/Control-Arrow-Sequence.html#runSeqArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Arrow Sequence",
          "module": "Control.Arrow.Sequence",
          "name": "runSeqArrow",
          "normalized": "SeqArrow a b-\u003ea-\u003eSeq b",
          "package": "arrow-list",
          "partial": "Seq Arrow",
          "signature": "SeqArrow a b-\u003ea-\u003eSeq b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-Sequence.html#v:runSeqArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.Sequence",
          "name": "runSeqTArrow",
          "package": "arrow-list",
          "signature": "SeqTArrow m a b -\u003e a -\u003e m (Seq b)",
          "source": "src/Control-Arrow-Sequence.html#runSeqTArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Arrow Sequence",
          "module": "Control.Arrow.Sequence",
          "name": "runSeqTArrow",
          "normalized": "SeqTArrow a b c-\u003eb-\u003ea(Seq c)",
          "package": "arrow-list",
          "partial": "Seq TArrow",
          "signature": "SeqTArrow m a b-\u003ea-\u003em(Seq b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-Sequence.html#v:runSeqTArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.Sequence",
          "name": "runSeqTArrow'",
          "package": "arrow-list",
          "signature": "Kleisli (SeqT m) a b",
          "source": "src/Control-Arrow-Sequence.html#SeqTArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Arrow Sequence",
          "module": "Control.Arrow.Sequence",
          "name": "runSeqTArrow'",
          "package": "arrow-list",
          "partial": "Seq TArrow'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Arrow-Sequence.html#v:runSeqTArrow-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Sequence",
          "name": "Sequence",
          "package": "arrow-list",
          "source": "src/Control-Monad-Sequence.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Sequence",
          "module": "Control.Monad.Sequence",
          "name": "Sequence",
          "package": "arrow-list",
          "partial": "Sequence",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Monad-Sequence.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParameterizable \u003ccode\u003eSequence\u003c/code\u003e monad, with an inner monad. The semantics of\n \u003ccode\u003e\u003ca\u003eSeqT\u003c/a\u003e\u003c/code\u003e are comparable to that of \u003ccode\u003eListT\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e Like the ListT monad, this does not yield a monad unless the\n argument monad is commutative.\n\u003c/p\u003e",
          "module": "Control.Monad.Sequence",
          "name": "SeqT",
          "package": "arrow-list",
          "source": "src/Control-Monad-Sequence.html#SeqT",
          "type": "newtype"
        },
        "index": {
          "description": "Parameterizable Sequence monad with an inner monad The semantics of SeqT are comparable to that of ListT Note Like the ListT monad this does not yield monad unless the argument monad is commutative",
          "hierarchy": "Control Monad Sequence",
          "module": "Control.Monad.Sequence",
          "name": "SeqT",
          "package": "arrow-list",
          "partial": "Seq",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Monad-Sequence.html#t:SeqT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Sequence",
          "name": "SeqT",
          "package": "arrow-list",
          "signature": "SeqT",
          "source": "src/Control-Monad-Sequence.html#SeqT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Sequence",
          "module": "Control.Monad.Sequence",
          "name": "SeqT",
          "package": "arrow-list",
          "partial": "Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Monad-Sequence.html#v:SeqT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Sequence",
          "name": "runSeqT",
          "package": "arrow-list",
          "signature": "m (Seq a)",
          "source": "src/Control-Monad-Sequence.html#SeqT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Sequence",
          "module": "Control.Monad.Sequence",
          "name": "runSeqT",
          "package": "arrow-list",
          "partial": "Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrow-list/docs/Control-Monad-Sequence.html#v:runSeqT"
      }
    }
  ]
]