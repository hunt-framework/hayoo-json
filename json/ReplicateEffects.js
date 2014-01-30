[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReplicateEffects/docs/Control-Replicate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComposable replication schemes of applicative actions.\n\u003c/p\u003e\u003cp\u003eThis module separates common combinators such as \u003ccode\u003esome\u003c/code\u003e and \u003ccode\u003emany\u003c/code\u003e (from\n \u003ccode\u003eControl.Applicative\u003c/code\u003e) from any actual applicative actions. It offers\n composable building blocks for expressing the number (or numbers) of times\n an action should be executed. The building blocks themselves are composed\n using the standard \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eCategory\u003c/a\u003e\u003c/code\u003e combinators.\n Replication schemes can then be run with \u003ccode\u003e\u003ca\u003e*!\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e*?\u003c/a\u003e\u003c/code\u003e to produce actual\n actions.\n\u003c/p\u003e\u003cp\u003eSome examples help see how this works. One of the simplest schemes is\n \u003ccode\u003e\u003ca\u003eone\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e one :: Replicate a a\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003eone *! p\u003c/code\u003e is equivalent to just \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSchemes can be summed by composing them in applicative fashion. In the\n following example, the resulting tuple type makes it clear that the action\n has been run twice and no information is lost:\n\u003c/p\u003e\u003cpre\u003e two :: Replicate a (a, a)\n two = (,) \u003c$\u003e one \u003c*\u003e one\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003etwo *! p\u003c/code\u003e is equivalent to \u003ccode\u003e(,) \u003c$\u003e p \u003c*\u003e p\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThings get more interesting if we use the choice combinator \u003ccode\u003e\u003c|\u003e\u003c/code\u003e to form\n the union of two schemes.\n\u003c/p\u003e\u003cpre\u003e oneOrTwo :: Replicate a (Either a (a, a))\n oneOrTwo = Left \u003c$\u003e one \u003c|\u003e Right \u003c$\u003e two\n\u003c/pre\u003e\u003cp\u003eRunning schemes that allow multiple frequencies expand to actions that\n always use \u003ccode\u003e\u003c|\u003e\u003c/code\u003e as late as possible. Since \u003ccode\u003eoneOrTwo\u003c/code\u003e runs an action at\n least once, we can start by running the action once immediately and\n only then choose whether we want to stop there or run it a second time.\n Running it with \u003ccode\u003e\u003ca\u003e*!\u003c/a\u003e\u003c/code\u003e expands to:\n\u003c/p\u003e\u003cpre\u003e \\p -\u003e p \u003c**\u003e  (  -- Either run the action again and yield Right ... \n                  (\\y x -\u003e Right (x, y)) \u003c$\u003e p\n              \u003c|\u003e -- ... or stop here and yield Left.\n                  pure Left\n               )\n\u003c/pre\u003e\u003cp\u003eReplication schemes can be thought of as sets of Peano numerals. If there\n is overlap between the two operands to \u003ccode\u003e\u003c|\u003e\u003c/code\u003e, the overlap collapses and\n is lost in the result. For example, \u003ccode\u003e\u003ccode\u003e\u003ca\u003ebetween\u003c/a\u003e\u003c/code\u003e 3 5 \u003c|\u003e between 4 6\u003c/code\u003e is\n equivalent to \u003ccode\u003ebetween 3 6\u003c/code\u003e, a scheme that runs an action 3, 4, 5 or 6\n times.\n\u003c/p\u003e\u003cp\u003eThe example above made the second \u003ccode\u003ep\u003c/code\u003e the first choice and the \u003ccode\u003epure\u003c/code\u003e\n option the second choice to \u003ccode\u003e\u003c|\u003e\u003c/code\u003e. In some cases the other way around is\n preferred. This is what \u003ccode\u003e\u003ca\u003e*?\u003c/a\u003e\u003c/code\u003e is for; it prefers running an action fewer\n times over more times. Running \u003ccode\u003eoneOrTwo\u003c/code\u003e with it is equivalent to:\n\u003c/p\u003e\u003cpre\u003e \\p -\u003e p \u003c**\u003e  (  -- Either stop here and yield Left ...\n                  pure Left\n              \u003c|\u003e -- ... or run the action again and yield Right.\n                  (\\y x -\u003e Right (x, y)) \u003c$\u003e p\n               )\n\u003c/pre\u003e\u003cp\u003eFinally, schemes can be multiplied by composing them with the dot operator\n \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003eControl.Category\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e twiceThree :: Replicate a ((a, a, a), (a, a, a))\n twiceThree = two . three\n\n thriceTwo :: Replicate a ((a, a), (a, a), (a, a))\n thriceTwo = three . two\n\u003c/pre\u003e\u003cp\u003eIf \u003ccode\u003e.\u003c/code\u003e's operands allow multiple frequencies, the result will allow the\n products of all pairs of frequencies from the operands. We can use this to\n e.g. produce all even numbers of occurrences:\n\u003c/p\u003e\u003cpre\u003e even :: Replicate a [(a, a)]\n even = many . two\n\u003c/pre\u003e\u003cp\u003eIn this example \u003ccode\u003emany\u003c/code\u003e behaves like the standard Applicative \u003ccode\u003emany\u003c/code\u003e,\n allowing an action to be run any number of {0, 1, ..} times.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Replicate",
        "fct-package": "ReplicateEffects",
        "fct-signature": "module",
        "fct-source": "src/Control-Replicate.html",
        "fct-type": "module",
        "title": "Replicate"
      },
      "index": {
        "description": "Composable replication schemes of applicative actions This module separates common combinators such as some and many from Control.Applicative from any actual applicative actions It offers composable building blocks for expressing the number or numbers of times an action should be executed The building blocks themselves are composed using the standard Applicative Alternative and Category combinators Replication schemes can then be run with and to produce actual actions Some examples help see how this works One of the simplest schemes is one one Replicate one is equivalent to just Schemes can be summed by composing them in applicative fashion In the following example the resulting tuple type makes it clear that the action has been run twice and no information is lost two Replicate two one one two is equivalent to Things get more interesting if we use the choice combinator to form the union of two schemes oneOrTwo Replicate Either oneOrTwo Left one Right two Running schemes that allow multiple frequencies expand to actions that always use as late as possible Since oneOrTwo runs an action at least once we can start by running the action once immediately and only then choose whether we want to stop there or run it second time Running it with expands to Either run the action again and yield Right Right or stop here and yield Left pure Left Replication schemes can be thought of as sets of Peano numerals If there is overlap between the two operands to the overlap collapses and is lost in the result For example between between is equivalent to between scheme that runs an action or times The example above made the second the first choice and the pure option the second choice to In some cases the other way around is preferred This is what is for it prefers running an action fewer times over more times Running oneOrTwo with it is equivalent to Either stop here and yield Left pure Left or run the action again and yield Right Right Finally schemes can be multiplied by composing them with the dot operator from Control.Category twiceThree Replicate twiceThree two three thriceTwo Replicate thriceTwo three two If operands allow multiple frequencies the result will allow the products of all pairs of frequencies from the operands We can use this to e.g produce all even numbers of occurrences even Replicate even many two In this example many behaves like the standard Applicative many allowing an action to be run any number of times",
        "hierarchy": "Control Replicate",
        "module": "Control.Replicate",
        "name": "Replicate",
        "normalized": "",
        "package": "ReplicateEffects",
        "partial": "Replicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReplicateEffects/docs/Control-Replicate.html#t:Replicate",
      "description": {
        "fct-descr": "\u003cp\u003eA set of frequencies which with an applicative action is allowed to\n occur. \u003ccode\u003ea\u003c/code\u003e is the result type of a single atomic action. \u003ccode\u003eb\u003c/code\u003e is the\n composite result type after executing the action a number of times allowed\n by this set.\n\u003c/p\u003e",
        "fct-module": "Control.Replicate",
        "fct-package": "ReplicateEffects",
        "fct-signature": "data",
        "fct-source": "src/Control-Replicate.html#Replicate",
        "fct-type": "data",
        "title": "Replicate"
      },
      "index": {
        "description": "set of frequencies which with an applicative action is allowed to occur is the result type of single atomic action is the composite result type after executing the action number of times allowed by this set",
        "hierarchy": "Control Replicate",
        "module": "Control.Replicate",
        "name": "Replicate",
        "normalized": "",
        "package": "ReplicateEffects",
        "partial": "Replicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReplicateEffects/docs/Control-Replicate.html#v:-42--33-",
      "description": {
        "fct-descr": "\u003cp\u003eRun an action a certain number of times, using \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e to branch (at the\n deepest point possible) if multiple frequencies are allowed. Use greedy\n choices: always make the longer alternative the left operand of \u003ccode\u003e\u003c|\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Replicate",
        "fct-package": "ReplicateEffects",
        "fct-signature": "Replicate a b -\u003e f a -\u003e f b",
        "fct-source": "src/Control-Replicate.html#%2A%21",
        "fct-type": "function",
        "title": "(*!)"
      },
      "index": {
        "description": "Run an action certain number of times using to branch at the deepest point possible if multiple frequencies are allowed Use greedy choices always make the longer alternative the left operand of",
        "hierarchy": "Control Replicate",
        "module": "Control.Replicate",
        "name": "(*!) *!",
        "normalized": "Replicate a b-\u003ec a-\u003ec b",
        "package": "ReplicateEffects",
        "partial": "",
        "signature": "Replicate a b-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReplicateEffects/docs/Control-Replicate.html#v:-42--63-",
      "description": {
        "fct-descr": "\u003cp\u003eRun an action a certain number of times, using \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e to branch (at the\n deepest point possible) if multiple frequencies are allowed. Use lazy\n choices: always make the \u003ccode\u003e\u003ca\u003epure\u003c/a\u003e\u003c/code\u003e alternative the left operand of \u003ccode\u003e\u003c|\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Replicate",
        "fct-package": "ReplicateEffects",
        "fct-signature": "Replicate a b -\u003e f a -\u003e f b",
        "fct-source": "src/Control-Replicate.html#%2A%3F",
        "fct-type": "function",
        "title": "(*?)"
      },
      "index": {
        "description": "Run an action certain number of times using to branch at the deepest point possible if multiple frequencies are allowed Use lazy choices always make the pure alternative the left operand of",
        "hierarchy": "Control Replicate",
        "module": "Control.Replicate",
        "name": "(*?) *?",
        "normalized": "Replicate a b-\u003ec a-\u003ec b",
        "package": "ReplicateEffects",
        "partial": "",
        "signature": "Replicate a b-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReplicateEffects/docs/Control-Replicate.html#v:Cons",
      "description": {
        "fct-module": "Control.Replicate",
        "fct-package": "ReplicateEffects",
        "fct-signature": "(c -\u003e b) -\u003e Maybe c -\u003e Replicate a (a -\u003e c) -\u003e Replicate a b",
        "fct-source": "src/Control-Replicate.html#Replicate",
        "fct-type": "function",
        "title": "Cons"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Replicate",
        "module": "Control.Replicate",
        "name": "Cons",
        "normalized": "(a-\u003eb)-\u003eMaybe a-\u003eReplicate c(c-\u003ea)-\u003eReplicate c b",
        "package": "ReplicateEffects",
        "partial": "Cons",
        "signature": "(c-\u003eb)-\u003eMaybe c-\u003eReplicate a(a-\u003ec)-\u003eReplicate a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReplicateEffects/docs/Control-Replicate.html#v:Nil",
      "description": {
        "fct-module": "Control.Replicate",
        "fct-package": "ReplicateEffects",
        "fct-signature": "Replicate a b",
        "fct-source": "src/Control-Replicate.html#Replicate",
        "fct-type": "function",
        "title": "Nil"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Replicate",
        "module": "Control.Replicate",
        "name": "Nil",
        "normalized": "",
        "package": "ReplicateEffects",
        "partial": "Nil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReplicateEffects/docs/Control-Replicate.html#v:atLeast",
      "description": {
        "fct-descr": "\u003cp\u003ePerform an action at least so many times.\n\u003c/p\u003e",
        "fct-module": "Control.Replicate",
        "fct-package": "ReplicateEffects",
        "fct-signature": "Int -\u003e Replicate a [a]",
        "fct-source": "src/Control-Replicate.html#atLeast",
        "fct-type": "function",
        "title": "atLeast"
      },
      "index": {
        "description": "Perform an action at least so many times",
        "hierarchy": "Control Replicate",
        "module": "Control.Replicate",
        "name": "atLeast",
        "normalized": "Int-\u003eReplicate a[a]",
        "package": "ReplicateEffects",
        "partial": "Least",
        "signature": "Int-\u003eReplicate a[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReplicateEffects/docs/Control-Replicate.html#v:atMost",
      "description": {
        "fct-descr": "\u003cp\u003ePerform an action at most so many times.\n\u003c/p\u003e",
        "fct-module": "Control.Replicate",
        "fct-package": "ReplicateEffects",
        "fct-signature": "Int -\u003e Replicate a [a]",
        "fct-source": "src/Control-Replicate.html#atMost",
        "fct-type": "function",
        "title": "atMost"
      },
      "index": {
        "description": "Perform an action at most so many times",
        "hierarchy": "Control Replicate",
        "module": "Control.Replicate",
        "name": "atMost",
        "normalized": "Int-\u003eReplicate a[a]",
        "package": "ReplicateEffects",
        "partial": "Most",
        "signature": "Int-\u003eReplicate a[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReplicateEffects/docs/Control-Replicate.html#v:between",
      "description": {
        "fct-descr": "\u003cp\u003eAllow an action to be performed between so and so many times (inclusive).\n\u003c/p\u003e",
        "fct-module": "Control.Replicate",
        "fct-package": "ReplicateEffects",
        "fct-signature": "Int -\u003e Int -\u003e Replicate a [a]",
        "fct-source": "src/Control-Replicate.html#between",
        "fct-type": "function",
        "title": "between"
      },
      "index": {
        "description": "Allow an action to be performed between so and so many times inclusive",
        "hierarchy": "Control Replicate",
        "module": "Control.Replicate",
        "name": "between",
        "normalized": "Int-\u003eInt-\u003eReplicate a[a]",
        "package": "ReplicateEffects",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eReplicate a[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReplicateEffects/docs/Control-Replicate.html#v:exactly",
      "description": {
        "fct-descr": "\u003cp\u003ePerform an action exactly so many times.\n\u003c/p\u003e",
        "fct-module": "Control.Replicate",
        "fct-package": "ReplicateEffects",
        "fct-signature": "Int -\u003e Replicate a [a]",
        "fct-source": "src/Control-Replicate.html#exactly",
        "fct-type": "function",
        "title": "exactly"
      },
      "index": {
        "description": "Perform an action exactly so many times",
        "hierarchy": "Control Replicate",
        "module": "Control.Replicate",
        "name": "exactly",
        "normalized": "Int-\u003eReplicate a[a]",
        "package": "ReplicateEffects",
        "partial": "",
        "signature": "Int-\u003eReplicate a[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReplicateEffects/docs/Control-Replicate.html#v:forever",
      "description": {
        "fct-descr": "\u003cp\u003eRepeat an action forever.\n\u003c/p\u003e",
        "fct-module": "Control.Replicate",
        "fct-package": "ReplicateEffects",
        "fct-signature": "Replicate a b",
        "fct-source": "src/Control-Replicate.html#forever",
        "fct-type": "function",
        "title": "forever"
      },
      "index": {
        "description": "Repeat an action forever",
        "hierarchy": "Control Replicate",
        "module": "Control.Replicate",
        "name": "forever",
        "normalized": "",
        "package": "ReplicateEffects",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReplicateEffects/docs/Control-Replicate.html#v:many",
      "description": {
        "fct-descr": "\u003cp\u003ePerform an action zero or more times.\n\u003c/p\u003e",
        "fct-module": "Control.Replicate",
        "fct-package": "ReplicateEffects",
        "fct-signature": "Replicate a [a]",
        "fct-source": "src/Control-Replicate.html#many",
        "fct-type": "function",
        "title": "many"
      },
      "index": {
        "description": "Perform an action zero or more times",
        "hierarchy": "Control Replicate",
        "module": "Control.Replicate",
        "name": "many",
        "normalized": "Replicate a[a]",
        "package": "ReplicateEffects",
        "partial": "",
        "signature": "Replicate a[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReplicateEffects/docs/Control-Replicate.html#v:one",
      "description": {
        "fct-descr": "\u003cp\u003ePerform an action exactly one time.\n\u003c/p\u003e",
        "fct-module": "Control.Replicate",
        "fct-package": "ReplicateEffects",
        "fct-signature": "Replicate a a",
        "fct-source": "src/Control-Replicate.html#one",
        "fct-type": "function",
        "title": "one"
      },
      "index": {
        "description": "Perform an action exactly one time",
        "hierarchy": "Control Replicate",
        "module": "Control.Replicate",
        "name": "one",
        "normalized": "",
        "package": "ReplicateEffects",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReplicateEffects/docs/Control-Replicate.html#v:opt",
      "description": {
        "fct-descr": "\u003cp\u003ePerform an action zero or one times.\n\u003c/p\u003e",
        "fct-module": "Control.Replicate",
        "fct-package": "ReplicateEffects",
        "fct-signature": "Replicate a (Maybe a)",
        "fct-source": "src/Control-Replicate.html#opt",
        "fct-type": "function",
        "title": "opt"
      },
      "index": {
        "description": "Perform an action zero or one times",
        "hierarchy": "Control Replicate",
        "module": "Control.Replicate",
        "name": "opt",
        "normalized": "",
        "package": "ReplicateEffects",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReplicateEffects/docs/Control-Replicate.html#v:sizes",
      "description": {
        "fct-descr": "\u003cp\u003eEnumerate all the numbers of allowed occurrences encoded by the\n replication scheme.\n\u003c/p\u003e",
        "fct-module": "Control.Replicate",
        "fct-package": "ReplicateEffects",
        "fct-signature": "Replicate a b -\u003e [Int]",
        "fct-source": "src/Control-Replicate.html#sizes",
        "fct-type": "function",
        "title": "sizes"
      },
      "index": {
        "description": "Enumerate all the numbers of allowed occurrences encoded by the replication scheme",
        "hierarchy": "Control Replicate",
        "module": "Control.Replicate",
        "name": "sizes",
        "normalized": "Replicate a b-\u003e[Int]",
        "package": "ReplicateEffects",
        "partial": "",
        "signature": "Replicate a b-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReplicateEffects/docs/Control-Replicate.html#v:some",
      "description": {
        "fct-descr": "\u003cp\u003ePerform an action one or more times.\n\u003c/p\u003e",
        "fct-module": "Control.Replicate",
        "fct-package": "ReplicateEffects",
        "fct-signature": "Replicate a [a]",
        "fct-source": "src/Control-Replicate.html#some",
        "fct-type": "function",
        "title": "some"
      },
      "index": {
        "description": "Perform an action one or more times",
        "hierarchy": "Control Replicate",
        "module": "Control.Replicate",
        "name": "some",
        "normalized": "Replicate a[a]",
        "package": "ReplicateEffects",
        "partial": "",
        "signature": "Replicate a[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReplicateEffects/docs/Control-Replicate.html#v:three",
      "description": {
        "fct-descr": "\u003cp\u003ePerform an action exactly three times.\n\u003c/p\u003e",
        "fct-module": "Control.Replicate",
        "fct-package": "ReplicateEffects",
        "fct-signature": "Replicate a (a, a, a)",
        "fct-source": "src/Control-Replicate.html#three",
        "fct-type": "function",
        "title": "three"
      },
      "index": {
        "description": "Perform an action exactly three times",
        "hierarchy": "Control Replicate",
        "module": "Control.Replicate",
        "name": "three",
        "normalized": "Replicate a(a,a,a)",
        "package": "ReplicateEffects",
        "partial": "",
        "signature": "Replicate a(a,a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReplicateEffects/docs/Control-Replicate.html#v:two",
      "description": {
        "fct-descr": "\u003cp\u003ePerform an action exactly two times.\n\u003c/p\u003e",
        "fct-module": "Control.Replicate",
        "fct-package": "ReplicateEffects",
        "fct-signature": "Replicate a (a, a)",
        "fct-source": "src/Control-Replicate.html#two",
        "fct-type": "function",
        "title": "two"
      },
      "index": {
        "description": "Perform an action exactly two times",
        "hierarchy": "Control Replicate",
        "module": "Control.Replicate",
        "name": "two",
        "normalized": "Replicate a(a,a)",
        "package": "ReplicateEffects",
        "partial": "",
        "signature": "Replicate a(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ReplicateEffects/docs/Control-Replicate.html#v:zero",
      "description": {
        "fct-descr": "\u003cp\u003ePerform an action exactly zero times.\n\u003c/p\u003e",
        "fct-module": "Control.Replicate",
        "fct-package": "ReplicateEffects",
        "fct-signature": "b -\u003e Replicate a b",
        "fct-source": "src/Control-Replicate.html#zero",
        "fct-type": "function",
        "title": "zero"
      },
      "index": {
        "description": "Perform an action exactly zero times",
        "hierarchy": "Control Replicate",
        "module": "Control.Replicate",
        "name": "zero",
        "normalized": "a-\u003eReplicate b a",
        "package": "ReplicateEffects",
        "partial": "",
        "signature": "b-\u003eReplicate a b"
      }
    }
  }
]