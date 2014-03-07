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
        "word": "parallel"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallel Evaluation Strategies, or Strategies for short, provide\n ways to express parallel computations.  Strategies have the following\n key features:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Strategies express \u003cem\u003edeterministic parallelism\u003c/em\u003e:\n    the result of the program is unaffected by evaluating in parallel.\n    The parallel tasks evaluated by a Strategy may have no side effects.\n    For non-deterministic parallel programming, see \u003ca\u003eControl.Concurrent\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e Strategies let you separate the description of the parallelism from the\n    logic of your program, enabling modular parallelism.  The basic idea\n    is to build a lazy data structure representing the computation, and\n    then write a Strategy that describes how to traverse the data structure\n    and evaluate components of it sequentially or in parallel.\n\u003c/li\u003e\u003cli\u003e Strategies are \u003cem\u003ecompositional\u003c/em\u003e: larger strategies can be built\n    by gluing together smaller ones.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e instances are provided, for quickly building\n    strategies that involve traversing structures in a regular way.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor API history and changes in this release, see \u003ca\u003eControl.Parallel.Strategies\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "Strategies",
          "package": "parallel",
          "source": "src/Control-Parallel-Strategies.html",
          "type": "module"
        },
        "index": {
          "description": "Parallel Evaluation Strategies or Strategies for short provide ways to express parallel computations Strategies have the following key features Strategies express deterministic parallelism the result of the program is unaffected by evaluating in parallel The parallel tasks evaluated by Strategy may have no side effects For non-deterministic parallel programming see Control.Concurrent Strategies let you separate the description of the parallelism from the logic of your program enabling modular parallelism The basic idea is to build lazy data structure representing the computation and then write Strategy that describes how to traverse the data structure and evaluate components of it sequentially or in parallel Strategies are compositional larger strategies can be built by gluing together smaller ones Monad and Applicative instances are provided for quickly building strategies that involve traversing structures in regular way For API history and changes in this release see Control.Parallel.Strategies",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "Strategies",
          "package": "parallel",
          "partial": "Strategies",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: The Strategy type is now a -\u003e Eval a, not a -\u003e Done\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDEPRECCATED: replaced by the \u003ccode\u003e\u003ca\u003eEval\u003c/a\u003e\u003c/code\u003e monad\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "Done",
          "package": "parallel",
          "source": "src/Control-Parallel-Strategies.html#Done",
          "type": "type"
        },
        "index": {
          "description": "Deprecated The Strategy type is now Eval not Done DEPRECCATED replaced by the Eval monad",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "Done",
          "package": "parallel",
          "partial": "Done",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#t:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eEval\u003c/a\u003e\u003c/code\u003e is a Monad that makes it easier to define parallel\n strategies.  It is a strict identity monad: that is, in\n\u003c/p\u003e\u003cpre\u003e m \u003e\u003e= f\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003em\u003c/code\u003e is evaluated before the result is passed to \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e instance Monad Eval where\n   return  = Done\n   m \u003e\u003e= k = case m of\n               Done x -\u003e k x\n\u003c/pre\u003e\u003cp\u003eIf you wanted to construct a \u003ccode\u003e\u003ca\u003eStrategy\u003c/a\u003e\u003c/code\u003e for a pair that sparked the\n first component in parallel and then evaluated the second\n component, you could write\n\u003c/p\u003e\u003cpre\u003e myStrat :: Strategy (a,b)\n myStrat (a,b) = do { a' \u003c- rpar a; b' \u003c- rseq b; return (a',b') }\n\u003c/pre\u003e\u003cp\u003eAlternatively, you could write this more compactly using the\n Applicative style as\n\u003c/p\u003e\u003cpre\u003e myStrat (a,b) = (,) \u003c$\u003e rpar a \u003c*\u003e rseq b\n\u003c/pre\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "Eval",
          "package": "parallel",
          "source": "src/Control-Parallel-Strategies.html#Eval",
          "type": "data"
        },
        "index": {
          "description": "Eval is Monad that makes it easier to define parallel strategies It is strict identity monad that is in is evaluated before the result is passed to instance Monad Eval where return Done case of Done If you wanted to construct Strategy for pair that sparked the first component in parallel and then evaluated the second component you could write myStrat Strategy myStrat do rpar rseq return Alternatively you could write this more compactly using the Applicative style as myStrat rpar rseq",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "Eval",
          "package": "parallel",
          "partial": "Eval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#t:Eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class of types that can be fully evaluated.\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "NFData",
          "package": "parallel",
          "type": "class"
        },
        "index": {
          "description": "class of types that can be fully evaluated",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "NFData",
          "package": "parallel",
          "partial": "NFData",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#t:NFData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea name for \u003ccode\u003eControl.Seq.Strategy\u003c/code\u003e, for documetnation only.\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "SeqStrategy",
          "package": "parallel",
          "source": "src/Control-Parallel-Strategies.html#SeqStrategy",
          "type": "type"
        },
        "index": {
          "description": "name for Control.Seq.Strategy for documetnation only",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "SeqStrategy",
          "package": "parallel",
          "partial": "Seq Strategy",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#t:SeqStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eStrategy\u003c/a\u003e\u003c/code\u003e is a function that embodies a parallel evaluation strategy.\n The function traverses (parts of) its argument, evaluating subexpressions\n in parallel or in sequence.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eStrategy\u003c/a\u003e\u003c/code\u003e may do an arbitrary amount of evaluation of its\n argument, but should not return a value different from the one it\n was passed.\n\u003c/p\u003e\u003cp\u003eParallel computations may be discarded by the runtime system if the\n program no longer requires their result, which is why a \u003ccode\u003e\u003ca\u003eStrategy\u003c/a\u003e\u003c/code\u003e\n function returns a new value equivalent to the old value.  The\n intention is that the program applies the \u003ccode\u003e\u003ca\u003eStrategy\u003c/a\u003e\u003c/code\u003e to a\n structure, and then uses the returned value, discarding the old\n value.  This idiom is expressed by the \u003ccode\u003e\u003ca\u003eusing\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "Strategy",
          "package": "parallel",
          "source": "src/Control-Parallel-Strategies.html#Strategy",
          "type": "type"
        },
        "index": {
          "description": "Strategy is function that embodies parallel evaluation strategy The function traverses parts of its argument evaluating subexpressions in parallel or in sequence Strategy may do an arbitrary amount of evaluation of its argument but should not return value different from the one it was passed Parallel computations may be discarded by the runtime system if the program no longer requires their result which is why Strategy function returns new value equivalent to the old value The intention is that the program applies the Strategy to structure and then uses the returned value discarding the old value This idiom is expressed by the using function",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "Strategy",
          "package": "parallel",
          "partial": "Strategy",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#t:Strategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential function application. The argument is evaluated using\n   the given strategy before it is given to the function.\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "($|)",
          "package": "parallel",
          "signature": "(a -\u003e b) -\u003e Strategy a -\u003e a -\u003e b",
          "source": "src/Control-Parallel-Strategies.html#%24%7C",
          "type": "function"
        },
        "index": {
          "description": "Sequential function application The argument is evaluated using the given strategy before it is given to the function",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "($|) $|",
          "normalized": "(a-\u003eb)-\u003eStrategy a-\u003ea-\u003eb",
          "package": "parallel",
          "signature": "(a-\u003eb)-\u003eStrategy a-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:-36--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel function application. The argument is evaluated using\n the given strategy, in parallel with the function application.\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "($||)",
          "package": "parallel",
          "signature": "(a -\u003e b) -\u003e Strategy a -\u003e a -\u003e b",
          "source": "src/Control-Parallel-Strategies.html#%24%7C%7C",
          "type": "function"
        },
        "index": {
          "description": "Parallel function application The argument is evaluated using the given strategy in parallel with the function application",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "($||) $||",
          "normalized": "(a-\u003eb)-\u003eStrategy a-\u003ea-\u003eb",
          "package": "parallel",
          "signature": "(a-\u003eb)-\u003eStrategy a-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:-36--124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential inverse function composition,\n for those who read their programs from left to right.\n The result of the first function is evaluated using the\n given strategy, and then given to the second function.\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "(-|)",
          "package": "parallel",
          "signature": "(a -\u003e b) -\u003e Strategy b -\u003e (b -\u003e c) -\u003e a -\u003e c",
          "source": "src/Control-Parallel-Strategies.html#-%7C",
          "type": "function"
        },
        "index": {
          "description": "Sequential inverse function composition for those who read their programs from left to right The result of the first function is evaluated using the given strategy and then given to the second function",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "(-|) -|",
          "normalized": "(a-\u003eb)-\u003eStrategy b-\u003e(b-\u003ec)-\u003ea-\u003ec",
          "package": "parallel",
          "signature": "(a-\u003eb)-\u003eStrategy b-\u003e(b-\u003ec)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:-45--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel inverse function composition,\n for those who read their programs from left to right.\n The result of the first function is evaluated using the\n given strategy, in parallel with the application of the\n second function.\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "(-||)",
          "package": "parallel",
          "signature": "(a -\u003e b) -\u003e Strategy b -\u003e (b -\u003e c) -\u003e a -\u003e c",
          "source": "src/Control-Parallel-Strategies.html#-%7C%7C",
          "type": "function"
        },
        "index": {
          "description": "Parallel inverse function composition for those who read their programs from left to right The result of the first function is evaluated using the given strategy in parallel with the application of the second function",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "(-||) -||",
          "normalized": "(a-\u003eb)-\u003eStrategy b-\u003e(b-\u003ec)-\u003ea-\u003ec",
          "package": "parallel",
          "signature": "(a-\u003eb)-\u003eStrategy b-\u003e(b-\u003ec)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:-45--124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use pseq or $| instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDEPRECATED: Use \u003ccode\u003e\u003ca\u003epseq\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e$|\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "(\u003e|)",
          "package": "parallel",
          "signature": "Done -\u003e Done -\u003e Done",
          "source": "src/Control-Parallel-Strategies.html#%3E%7C",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use pseq or instead DEPRECATED Use pseq or instead",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "(\u003e|) \u003e|",
          "normalized": "Done-\u003eDone-\u003eDone",
          "package": "parallel",
          "signature": "Done-\u003eDone-\u003eDone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:-62--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use par or $|| instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDEPRECATED: Use \u003ccode\u003e\u003ca\u003epar\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e$||\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "(\u003e||)",
          "package": "parallel",
          "signature": "Done -\u003e Done -\u003e Done",
          "source": "src/Control-Parallel-Strategies.html#%3E%7C%7C",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use par or instead DEPRECATED Use par or instead",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "(\u003e||) \u003e||",
          "normalized": "Done-\u003eDone-\u003eDone",
          "package": "parallel",
          "signature": "Done-\u003eDone-\u003eDone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:-62--124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential function composition. The result of\n the second function is evaluated using the given strategy,\n and then given to the first function.\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "(.|)",
          "package": "parallel",
          "signature": "(b -\u003e c) -\u003e Strategy b -\u003e (a -\u003e b) -\u003e a -\u003e c",
          "source": "src/Control-Parallel-Strategies.html#.%7C",
          "type": "function"
        },
        "index": {
          "description": "Sequential function composition The result of the second function is evaluated using the given strategy and then given to the first function",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "(.|) .|",
          "normalized": "(a-\u003eb)-\u003eStrategy a-\u003e(c-\u003ea)-\u003ec-\u003eb",
          "package": "parallel",
          "signature": "(b-\u003ec)-\u003eStrategy b-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:.-124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel function composition. The result of the second\n function is evaluated using the given strategy,\n in parallel with the application of the first function.\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "(.||)",
          "package": "parallel",
          "signature": "(b -\u003e c) -\u003e Strategy b -\u003e (a -\u003e b) -\u003e a -\u003e c",
          "source": "src/Control-Parallel-Strategies.html#.%7C%7C",
          "type": "function"
        },
        "index": {
          "description": "Parallel function composition The result of the second function is evaluated using the given strategy in parallel with the application of the first function",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "(.||) .||",
          "normalized": "(a-\u003eb)-\u003eStrategy a-\u003e(c-\u003ea)-\u003ec-\u003eb",
          "package": "parallel",
          "signature": "(b-\u003ec)-\u003eStrategy b-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:.-124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use pseq or $| instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDEPRECATED: Use \u003ccode\u003e\u003ca\u003epseq\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e$|\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "demanding",
          "package": "parallel",
          "signature": "a -\u003e Done -\u003e a",
          "source": "src/Control-Parallel-Strategies.html#demanding",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use pseq or instead DEPRECATED Use pseq or instead",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "demanding",
          "normalized": "a-\u003eDone-\u003ea",
          "package": "parallel",
          "signature": "a-\u003eDone-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:demanding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two strategies sequentially.\n This is the analogue to function composition on strategies.\n\u003c/p\u003e\u003cpre\u003e strat2 `dot` strat1 == strat2 . withStrategy strat1\n\u003c/pre\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "dot",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy a -\u003e Strategy a",
          "source": "src/Control-Parallel-Strategies.html#dot",
          "type": "function"
        },
        "index": {
          "description": "Compose two strategies sequentially This is the analogue to function composition on strategies strat2 dot strat1 strat2 withStrategy strat1",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "dot",
          "normalized": "Strategy a-\u003eStrategy a-\u003eStrategy a",
          "package": "parallel",
          "signature": "Strategy a-\u003eStrategy a-\u003eStrategy a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eevalBuffer\u003c/a\u003e\u003c/code\u003e is a rolling buffer strategy combinator for (lazy) lists.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eevalBuffer\u003c/a\u003e\u003c/code\u003e is not as compositional as the type suggests. In fact,\n it evaluates list elements at least to weak head normal form,\n disregarding a strategy argument \u003ccode\u003e\u003ca\u003er0\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e evalBuffer n r0 == evalBuffer n rseq\n\u003c/pre\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "evalBuffer",
          "package": "parallel",
          "signature": "Int -\u003e Strategy a -\u003e Strategy [a]",
          "source": "src/Control-Parallel-Strategies.html#evalBuffer",
          "type": "function"
        },
        "index": {
          "description": "evalBuffer is rolling buffer strategy combinator for lazy lists evalBuffer is not as compositional as the type suggests In fact it evaluates list elements at least to weak head normal form disregarding strategy argument r0 evalBuffer r0 evalBuffer rseq",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "evalBuffer",
          "normalized": "Int-\u003eStrategy a-\u003eStrategy[a]",
          "package": "parallel",
          "partial": "Buffer",
          "signature": "Int-\u003eStrategy a-\u003eStrategy[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:evalBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate each element of a list according to the given strategy.\n  Equivalent to \u003ccode\u003e\u003ca\u003eevalTraversable\u003c/a\u003e\u003c/code\u003e at the list type.\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "evalList",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy [a]",
          "source": "src/Control-Parallel-Strategies.html#evalList",
          "type": "function"
        },
        "index": {
          "description": "Evaluate each element of list according to the given strategy Equivalent to evalTraversable at the list type",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "evalList",
          "normalized": "Strategy a-\u003eStrategy[a]",
          "package": "parallel",
          "partial": "List",
          "signature": "Strategy a-\u003eStrategy[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:evalList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate the first n elements of a list according to the given strategy.\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "evalListN",
          "package": "parallel",
          "signature": "Int -\u003e Strategy a -\u003e Strategy [a]",
          "source": "src/Control-Parallel-Strategies.html#evalListN",
          "type": "function"
        },
        "index": {
          "description": "Evaluate the first elements of list according to the given strategy",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "evalListN",
          "normalized": "Int-\u003eStrategy a-\u003eStrategy[a]",
          "package": "parallel",
          "partial": "List",
          "signature": "Int-\u003eStrategy a-\u003eStrategy[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:evalListN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate the nth element of a list (if there is such) according to\n the given strategy.\n The spine of the list up to the nth element is evaluated as a side effect.\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "evalListNth",
          "package": "parallel",
          "signature": "Int -\u003e Strategy a -\u003e Strategy [a]",
          "source": "src/Control-Parallel-Strategies.html#evalListNth",
          "type": "function"
        },
        "index": {
          "description": "Evaluate the nth element of list if there is such according to the given strategy The spine of the list up to the nth element is evaluated as side effect",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "evalListNth",
          "normalized": "Int-\u003eStrategy a-\u003eStrategy[a]",
          "package": "parallel",
          "partial": "List Nth",
          "signature": "Int-\u003eStrategy a-\u003eStrategy[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:evalListNth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003eevaListSplitAt\u003c/code\u003e n stratPref stratSuff\u003c/code\u003e evaluates the prefix\n (of length \u003ccode\u003en\u003c/code\u003e) of a list according to \u003ccode\u003estratPref\u003c/code\u003e and its the suffix\n according to \u003ccode\u003estratSuff\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "evalListSplitAt",
          "package": "parallel",
          "signature": "Int -\u003e Strategy [a] -\u003e Strategy [a] -\u003e Strategy [a]",
          "source": "src/Control-Parallel-Strategies.html#evalListSplitAt",
          "type": "function"
        },
        "index": {
          "description": "evaListSplitAt stratPref stratSuff evaluates the prefix of length of list according to stratPref and its the suffix according to stratSuff",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "evalListSplitAt",
          "normalized": "Int-\u003eStrategy[a]-\u003eStrategy[a]-\u003eStrategy[a]",
          "package": "parallel",
          "partial": "List Split At",
          "signature": "Int-\u003eStrategy[a]-\u003eStrategy[a]-\u003eStrategy[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:evalListSplitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInject a sequential strategy (ie. coerce a sequential strategy\n to a general strategy).\n\u003c/p\u003e\u003cp\u003eThanks to \u003ccode\u003e\u003ca\u003eevalSeq\u003c/a\u003e\u003c/code\u003e, the type \u003ccode\u003eControl.Seq.Strategy a\u003c/code\u003e is a subtype\n of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStrategy\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "evalSeq",
          "package": "parallel",
          "signature": "SeqStrategy a -\u003e Strategy a",
          "source": "src/Control-Parallel-Strategies.html#evalSeq",
          "type": "function"
        },
        "index": {
          "description": "Inject sequential strategy ie coerce sequential strategy to general strategy Thanks to evalSeq the type Control.Seq.Strategy is subtype of Strategy",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "evalSeq",
          "normalized": "SeqStrategy a-\u003eStrategy a",
          "package": "parallel",
          "partial": "Seq",
          "signature": "SeqStrategy a-\u003eStrategy a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:evalSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate the elements of a traversable data structure\n according to the given strategy.\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "evalTraversable",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy (t a)",
          "source": "src/Control-Parallel-Strategies.html#evalTraversable",
          "type": "function"
        },
        "index": {
          "description": "Evaluate the elements of traversable data structure according to the given strategy",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "evalTraversable",
          "normalized": "Strategy a-\u003eStrategy(b a)",
          "package": "parallel",
          "partial": "Traversable",
          "signature": "Strategy a-\u003eStrategy(t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:evalTraversable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.Strategies",
          "name": "evalTuple2",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy (a, b)",
          "source": "src/Control-Parallel-Strategies.html#evalTuple2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "evalTuple2",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy(a,b)",
          "package": "parallel",
          "partial": "Tuple",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:evalTuple2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.Strategies",
          "name": "evalTuple3",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy c -\u003e Strategy (a, b, c)",
          "source": "src/Control-Parallel-Strategies.html#evalTuple3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "evalTuple3",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy(a,b,c)",
          "package": "parallel",
          "partial": "Tuple",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:evalTuple3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.Strategies",
          "name": "evalTuple4",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy c -\u003e Strategy d -\u003e Strategy (a, b, c, d)",
          "source": "src/Control-Parallel-Strategies.html#evalTuple4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "evalTuple4",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy(a,b,c,d)",
          "package": "parallel",
          "partial": "Tuple",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:evalTuple4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.Strategies",
          "name": "evalTuple5",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy c -\u003e Strategy d -\u003e Strategy e -\u003e Strategy (a, b, c, d, e)",
          "source": "src/Control-Parallel-Strategies.html#evalTuple5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "evalTuple5",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy(a,b,c,d,e)",
          "package": "parallel",
          "partial": "Tuple",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy(a,b,c,d,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:evalTuple5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.Strategies",
          "name": "evalTuple6",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy c -\u003e Strategy d -\u003e Strategy e -\u003e Strategy f -\u003e Strategy (a, b, c, d, e, f)",
          "source": "src/Control-Parallel-Strategies.html#evalTuple6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "evalTuple6",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy f-\u003eStrategy(a,b,c,d,e,f)",
          "package": "parallel",
          "partial": "Tuple",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy f-\u003eStrategy(a,b,c,d,e,f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:evalTuple6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.Strategies",
          "name": "evalTuple7",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy c -\u003e Strategy d -\u003e Strategy e -\u003e Strategy f -\u003e Strategy g -\u003e Strategy (a, b, c, d, e, f, g)",
          "source": "src/Control-Parallel-Strategies.html#evalTuple7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "evalTuple7",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy f-\u003eStrategy g-\u003eStrategy(a,b,c,d,e,f,g)",
          "package": "parallel",
          "partial": "Tuple",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy f-\u003eStrategy g-\u003eStrategy(a,b,c,d,e,f,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:evalTuple7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.Strategies",
          "name": "evalTuple8",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy c -\u003e Strategy d -\u003e Strategy e -\u003e Strategy f -\u003e Strategy g -\u003e Strategy h -\u003e Strategy (a, b, c, d, e, f, g, h)",
          "source": "src/Control-Parallel-Strategies.html#evalTuple8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "evalTuple8",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy f-\u003eStrategy g-\u003eStrategy h-\u003eStrategy(a,b,c,d,e,f,g,h)",
          "package": "parallel",
          "partial": "Tuple",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy f-\u003eStrategy g-\u003eStrategy h-\u003eStrategy(a,b,c,d,e,f,g,h)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:evalTuple8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.Strategies",
          "name": "evalTuple9",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy c -\u003e Strategy d -\u003e Strategy e -\u003e Strategy f -\u003e Strategy g -\u003e Strategy h -\u003e Strategy i -\u003e Strategy (a, b, c, d, e, f, g, h, i)",
          "source": "src/Control-Parallel-Strategies.html#evalTuple9",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "evalTuple9",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy f-\u003eStrategy g-\u003eStrategy h-\u003eStrategy i-\u003eStrategy(a,b,c,d,e,f,g,h,i)",
          "package": "parallel",
          "partial": "Tuple",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy f-\u003eStrategy g-\u003eStrategy h-\u003eStrategy i-\u003eStrategy(a,b,c,d,e,f,g,h,i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:evalTuple9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eevalBuffer\u003c/a\u003e\u003c/code\u003e but evaluates the list elements in parallel when\n pushing them into the buffer.\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "parBuffer",
          "package": "parallel",
          "signature": "Int -\u003e Strategy a -\u003e Strategy [a]",
          "source": "src/Control-Parallel-Strategies.html#parBuffer",
          "type": "function"
        },
        "index": {
          "description": "Like evalBuffer but evaluates the list elements in parallel when pushing them into the buffer",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "parBuffer",
          "normalized": "Int-\u003eStrategy a-\u003eStrategy[a]",
          "package": "parallel",
          "partial": "Buffer",
          "signature": "Int-\u003eStrategy a-\u003eStrategy[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:parBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate each element of a list in parallel according to given strategy.\n  Equivalent to \u003ccode\u003e\u003ca\u003eparTraversable\u003c/a\u003e\u003c/code\u003e at the list type.\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "parList",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy [a]",
          "source": "src/Control-Parallel-Strategies.html#parList",
          "type": "function"
        },
        "index": {
          "description": "Evaluate each element of list in parallel according to given strategy Equivalent to parTraversable at the list type",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "parList",
          "normalized": "Strategy a-\u003eStrategy[a]",
          "package": "parallel",
          "partial": "List",
          "signature": "Strategy a-\u003eStrategy[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:parList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivides a list into chunks, and applies the strategy\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eevalList\u003c/a\u003e\u003c/code\u003e strat\u003c/code\u003e to each chunk in parallel.\n\u003c/p\u003e\u003cp\u003eIt is expected that this function will be replaced by a more\n generic clustering infrastructure in the future.\n\u003c/p\u003e\u003cp\u003eIf the chunk size is 1 or less, \u003ccode\u003e\u003ca\u003eparListChunk\u003c/a\u003e\u003c/code\u003e is equivalent to\n \u003ccode\u003e\u003ca\u003eparList\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "parListChunk",
          "package": "parallel",
          "signature": "Int -\u003e Strategy a -\u003e Strategy [a]",
          "source": "src/Control-Parallel-Strategies.html#parListChunk",
          "type": "function"
        },
        "index": {
          "description": "Divides list into chunks and applies the strategy evalList strat to each chunk in parallel It is expected that this function will be replaced by more generic clustering infrastructure in the future If the chunk size is or less parListChunk is equivalent to parList",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "parListChunk",
          "normalized": "Int-\u003eStrategy a-\u003eStrategy[a]",
          "package": "parallel",
          "partial": "List Chunk",
          "signature": "Int-\u003eStrategy a-\u003eStrategy[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:parListChunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eevalListN\u003c/a\u003e\u003c/code\u003e but evaluates the first n elements in parallel.\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "parListN",
          "package": "parallel",
          "signature": "Int -\u003e Strategy a -\u003e Strategy [a]",
          "source": "src/Control-Parallel-Strategies.html#parListN",
          "type": "function"
        },
        "index": {
          "description": "Like evalListN but evaluates the first elements in parallel",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "parListN",
          "normalized": "Int-\u003eStrategy a-\u003eStrategy[a]",
          "package": "parallel",
          "partial": "List",
          "signature": "Int-\u003eStrategy a-\u003eStrategy[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:parListN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eevalListN\u003c/a\u003e\u003c/code\u003e but evaluates the nth element in parallel.\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "parListNth",
          "package": "parallel",
          "signature": "Int -\u003e Strategy a -\u003e Strategy [a]",
          "source": "src/Control-Parallel-Strategies.html#parListNth",
          "type": "function"
        },
        "index": {
          "description": "Like evalListN but evaluates the nth element in parallel",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "parListNth",
          "normalized": "Int-\u003eStrategy a-\u003eStrategy[a]",
          "package": "parallel",
          "partial": "List Nth",
          "signature": "Int-\u003eStrategy a-\u003eStrategy[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:parListNth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eevalListSplitAt\u003c/a\u003e\u003c/code\u003e but evaluates both sublists in parallel.\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "parListSplitAt",
          "package": "parallel",
          "signature": "Int -\u003e Strategy [a] -\u003e Strategy [a] -\u003e Strategy [a]",
          "source": "src/Control-Parallel-Strategies.html#parListSplitAt",
          "type": "function"
        },
        "index": {
          "description": "Like evalListSplitAt but evaluates both sublists in parallel",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "parListSplitAt",
          "normalized": "Int-\u003eStrategy[a]-\u003eStrategy[a]-\u003eStrategy[a]",
          "package": "parallel",
          "partial": "List Split At",
          "signature": "Int-\u003eStrategy[a]-\u003eStrategy[a]-\u003eStrategy[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:parListSplitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA combination of \u003ccode\u003e\u003ca\u003eparList\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e, encapsulating a common pattern:\n\u003c/p\u003e\u003cpre\u003e parMap strat f = withStrategy (parList strat) . map f\n\u003c/pre\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "parMap",
          "package": "parallel",
          "signature": "Strategy b -\u003e (a -\u003e b) -\u003e [a] -\u003e [b]",
          "source": "src/Control-Parallel-Strategies.html#parMap",
          "type": "function"
        },
        "index": {
          "description": "combination of parList and map encapsulating common pattern parMap strat withStrategy parList strat map",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "parMap",
          "normalized": "Strategy a-\u003e(b-\u003ea)-\u003e[b]-\u003e[a]",
          "package": "parallel",
          "partial": "Map",
          "signature": "Strategy b-\u003e(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:parMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: renamed to parTuple2\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDEPRECATED: renamed to \u003ccode\u003e\u003ca\u003eparTuple2\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "parPair",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy (a, b)",
          "source": "src/Control-Parallel-Strategies.html#parPair",
          "type": "function"
        },
        "index": {
          "description": "Deprecated renamed to parTuple2 DEPRECATED renamed to parTuple2",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "parPair",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy(a,b)",
          "package": "parallel",
          "partial": "Pair",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:parPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eevalTraversable\u003c/a\u003e\u003c/code\u003e but evaluates all elements in parallel.\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "parTraversable",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy (t a)",
          "source": "src/Control-Parallel-Strategies.html#parTraversable",
          "type": "function"
        },
        "index": {
          "description": "Like evalTraversable but evaluates all elements in parallel",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "parTraversable",
          "normalized": "Strategy a-\u003eStrategy(b a)",
          "package": "parallel",
          "partial": "Traversable",
          "signature": "Strategy a-\u003eStrategy(t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:parTraversable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: renamed to parTraversable\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDEPRECATED: renamed to \u003ccode\u003e\u003ca\u003eparTraversable\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "parTraverse",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy (t a)",
          "source": "src/Control-Parallel-Strategies.html#parTraverse",
          "type": "function"
        },
        "index": {
          "description": "Deprecated renamed to parTraversable DEPRECATED renamed to parTraversable",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "parTraverse",
          "normalized": "Strategy a-\u003eStrategy(b a)",
          "package": "parallel",
          "partial": "Traverse",
          "signature": "Strategy a-\u003eStrategy(t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:parTraverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: renamed to parTuple3\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDEPRECATED: renamed to \u003ccode\u003e\u003ca\u003eparTuple3\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "parTriple",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy c -\u003e Strategy (a, b, c)",
          "source": "src/Control-Parallel-Strategies.html#parTriple",
          "type": "function"
        },
        "index": {
          "description": "Deprecated renamed to parTuple3 DEPRECATED renamed to parTuple3",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "parTriple",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy(a,b,c)",
          "package": "parallel",
          "partial": "Triple",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:parTriple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.Strategies",
          "name": "parTuple2",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy (a, b)",
          "source": "src/Control-Parallel-Strategies.html#parTuple2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "parTuple2",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy(a,b)",
          "package": "parallel",
          "partial": "Tuple",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:parTuple2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.Strategies",
          "name": "parTuple3",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy c -\u003e Strategy (a, b, c)",
          "source": "src/Control-Parallel-Strategies.html#parTuple3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "parTuple3",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy(a,b,c)",
          "package": "parallel",
          "partial": "Tuple",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:parTuple3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.Strategies",
          "name": "parTuple4",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy c -\u003e Strategy d -\u003e Strategy (a, b, c, d)",
          "source": "src/Control-Parallel-Strategies.html#parTuple4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "parTuple4",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy(a,b,c,d)",
          "package": "parallel",
          "partial": "Tuple",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:parTuple4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.Strategies",
          "name": "parTuple5",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy c -\u003e Strategy d -\u003e Strategy e -\u003e Strategy (a, b, c, d, e)",
          "source": "src/Control-Parallel-Strategies.html#parTuple5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "parTuple5",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy(a,b,c,d,e)",
          "package": "parallel",
          "partial": "Tuple",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy(a,b,c,d,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:parTuple5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.Strategies",
          "name": "parTuple6",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy c -\u003e Strategy d -\u003e Strategy e -\u003e Strategy f -\u003e Strategy (a, b, c, d, e, f)",
          "source": "src/Control-Parallel-Strategies.html#parTuple6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "parTuple6",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy f-\u003eStrategy(a,b,c,d,e,f)",
          "package": "parallel",
          "partial": "Tuple",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy f-\u003eStrategy(a,b,c,d,e,f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:parTuple6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.Strategies",
          "name": "parTuple7",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy c -\u003e Strategy d -\u003e Strategy e -\u003e Strategy f -\u003e Strategy g -\u003e Strategy (a, b, c, d, e, f, g)",
          "source": "src/Control-Parallel-Strategies.html#parTuple7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "parTuple7",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy f-\u003eStrategy g-\u003eStrategy(a,b,c,d,e,f,g)",
          "package": "parallel",
          "partial": "Tuple",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy f-\u003eStrategy g-\u003eStrategy(a,b,c,d,e,f,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:parTuple7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.Strategies",
          "name": "parTuple8",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy c -\u003e Strategy d -\u003e Strategy e -\u003e Strategy f -\u003e Strategy g -\u003e Strategy h -\u003e Strategy (a, b, c, d, e, f, g, h)",
          "source": "src/Control-Parallel-Strategies.html#parTuple8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "parTuple8",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy f-\u003eStrategy g-\u003eStrategy h-\u003eStrategy(a,b,c,d,e,f,g,h)",
          "package": "parallel",
          "partial": "Tuple",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy f-\u003eStrategy g-\u003eStrategy h-\u003eStrategy(a,b,c,d,e,f,g,h)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:parTuple8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.Strategies",
          "name": "parTuple9",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy c -\u003e Strategy d -\u003e Strategy e -\u003e Strategy f -\u003e Strategy g -\u003e Strategy h -\u003e Strategy i -\u003e Strategy (a, b, c, d, e, f, g, h, i)",
          "source": "src/Control-Parallel-Strategies.html#parTuple9",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "parTuple9",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy f-\u003eStrategy g-\u003eStrategy h-\u003eStrategy i-\u003eStrategy(a,b,c,d,e,f,g,h,i)",
          "package": "parallel",
          "partial": "Tuple",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy f-\u003eStrategy g-\u003eStrategy h-\u003eStrategy i-\u003eStrategy(a,b,c,d,e,f,g,h,i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:parTuple9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003er0\u003c/a\u003e\u003c/code\u003e performs *no* evaluation.\n\u003c/p\u003e\u003cpre\u003e r0 == evalSeq Control.Seq.r0\n\u003c/pre\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "r0",
          "package": "parallel",
          "signature": "Strategy a",
          "source": "src/Control-Parallel-Strategies.html#r0",
          "type": "function"
        },
        "index": {
          "description": "r0 performs no evaluation r0 evalSeq Control.Seq.r0",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "r0",
          "package": "parallel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:r0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erdeepseq\u003c/a\u003e\u003c/code\u003e fully evaluates its argument.\n\u003c/p\u003e\u003cpre\u003e rdeepseq == evalSeq Control.Seq.rdeepseq\n\u003c/pre\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "rdeepseq",
          "package": "parallel",
          "signature": "Strategy a",
          "source": "src/Control-Parallel-Strategies.html#rdeepseq",
          "type": "function"
        },
        "index": {
          "description": "rdeepseq fully evaluates its argument rdeepseq evalSeq Control.Seq.rdeepseq",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "rdeepseq",
          "package": "parallel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:rdeepseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erpar\u003c/a\u003e\u003c/code\u003e sparks its argument (for evaluation in parallel).\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "rpar",
          "package": "parallel",
          "signature": "a -\u003e Eval a",
          "source": "src/Control-Parallel-Strategies.html#rpar",
          "type": "function"
        },
        "index": {
          "description": "rpar sparks its argument for evaluation in parallel",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "rpar",
          "normalized": "a-\u003eEval a",
          "package": "parallel",
          "signature": "a-\u003eEval a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:rpar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003einstead of saying \u003ccode\u003erpar \u003ccode\u003e\u003ca\u003edot\u003c/a\u003e\u003c/code\u003e strat\u003c/code\u003e, you can say\n \u003ccode\u003erparWith strat\u003c/code\u003e.  Compared to \u003ccode\u003e\u003ca\u003erpar\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003erparWith\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e does not exit the \u003ccode\u003e\u003ca\u003eEval\u003c/a\u003e\u003c/code\u003e monad\n\u003c/li\u003e\u003cli\u003e does not have a built-in \u003ccode\u003e\u003ca\u003erseq\u003c/a\u003e\u003c/code\u003e, so for example `rparWith r0`\n    behaves as you might expect (it is a strategy that creates a\n    spark that does no evaluation).\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "rparWith",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy a",
          "source": "src/Control-Parallel-Strategies.html#rparWith",
          "type": "function"
        },
        "index": {
          "description": "instead of saying rpar dot strat you can say rparWith strat Compared to rpar rparWith does not exit the Eval monad does not have built-in rseq so for example rparWith r0 behaves as you might expect it is strategy that creates spark that does no evaluation",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "rparWith",
          "normalized": "Strategy a-\u003eStrategy a",
          "package": "parallel",
          "partial": "With",
          "signature": "Strategy a-\u003eStrategy a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:rparWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erseq\u003c/a\u003e\u003c/code\u003e evaluates its argument to weak head normal form.\n\u003c/p\u003e\u003cpre\u003e rseq == evalSeq Control.Seq.rseq\n\u003c/pre\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "rseq",
          "package": "parallel",
          "signature": "Strategy a",
          "source": "src/Control-Parallel-Strategies.html#rseq",
          "type": "function"
        },
        "index": {
          "description": "rseq evaluates its argument to weak head normal form rseq evalSeq Control.Seq.rseq",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "rseq",
          "package": "parallel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:rseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePull the result out of the monad.\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "runEval",
          "package": "parallel",
          "signature": "Eval a -\u003e a",
          "source": "src/Control-Parallel-Strategies.html#runEval",
          "type": "function"
        },
        "index": {
          "description": "Pull the result out of the monad",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "runEval",
          "normalized": "Eval a-\u003ea",
          "package": "parallel",
          "partial": "Eval",
          "signature": "Eval a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:runEval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: renamed to rseq\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDEPRECATED: renamed to \u003ccode\u003e\u003ca\u003erseq\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "rwhnf",
          "package": "parallel",
          "signature": "Strategy a",
          "source": "src/Control-Parallel-Strategies.html#rwhnf",
          "type": "function"
        },
        "index": {
          "description": "Deprecated renamed to rseq DEPRECATED renamed to rseq",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "rwhnf",
          "package": "parallel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:rwhnf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: renamed to evalList\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDEPRECATED: renamed to \u003ccode\u003e\u003ca\u003eevalList\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "seqList",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy [a]",
          "source": "src/Control-Parallel-Strategies.html#seqList",
          "type": "function"
        },
        "index": {
          "description": "Deprecated renamed to evalList DEPRECATED renamed to evalList",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "seqList",
          "normalized": "Strategy a-\u003eStrategy[a]",
          "package": "parallel",
          "partial": "List",
          "signature": "Strategy a-\u003eStrategy[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:seqList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: renamed to evalTuple2\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDEPRECATED: renamed to \u003ccode\u003e\u003ca\u003eevalTuple2\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "seqPair",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy (a, b)",
          "source": "src/Control-Parallel-Strategies.html#seqPair",
          "type": "function"
        },
        "index": {
          "description": "Deprecated renamed to evalTuple2 DEPRECATED renamed to evalTuple2",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "seqPair",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy(a,b)",
          "package": "parallel",
          "partial": "Pair",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:seqPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: renamed to evalTraversable\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDEPRECATED: renamed to \u003ccode\u003e\u003ca\u003eevalTraversable\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "seqTraverse",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy (t a)",
          "source": "src/Control-Parallel-Strategies.html#seqTraverse",
          "type": "function"
        },
        "index": {
          "description": "Deprecated renamed to evalTraversable DEPRECATED renamed to evalTraversable",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "seqTraverse",
          "normalized": "Strategy a-\u003eStrategy(b a)",
          "package": "parallel",
          "partial": "Traverse",
          "signature": "Strategy a-\u003eStrategy(t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:seqTraverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: renamed to evalTuple3\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDEPRECATED: renamed to \u003ccode\u003e\u003ca\u003eevalTuple3\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "seqTriple",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy c -\u003e Strategy (a, b, c)",
          "source": "src/Control-Parallel-Strategies.html#seqTriple",
          "type": "function"
        },
        "index": {
          "description": "Deprecated renamed to evalTuple3 DEPRECATED renamed to evalTuple3",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "seqTriple",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy(a,b,c)",
          "package": "parallel",
          "partial": "Triple",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:seqTriple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use par or $|| instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDEPRECATED: Use \u003ccode\u003e\u003ca\u003epar\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e$||\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "sparking",
          "package": "parallel",
          "signature": "a -\u003e Done -\u003e a",
          "source": "src/Control-Parallel-Strategies.html#sparking",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use par or instead DEPRECATED Use par or instead",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "sparking",
          "normalized": "a-\u003eDone-\u003ea",
          "package": "parallel",
          "signature": "a-\u003eDone-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:sparking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: renamed to runEval\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDEPRECATED: renamed to \u003ccode\u003e\u003ca\u003erunEval\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "unEval",
          "package": "parallel",
          "signature": "Eval a -\u003e a",
          "source": "src/Control-Parallel-Strategies.html#unEval",
          "type": "function"
        },
        "index": {
          "description": "Deprecated renamed to runEval DEPRECATED renamed to runEval",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "unEval",
          "normalized": "Eval a-\u003ea",
          "package": "parallel",
          "partial": "Eval",
          "signature": "Eval a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:unEval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a value using the given \u003ccode\u003e\u003ca\u003eStrategy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e x `using` s = runEval (s x)\n\u003c/pre\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "using",
          "package": "parallel",
          "signature": "a -\u003e Strategy a -\u003e a",
          "source": "src/Control-Parallel-Strategies.html#using",
          "type": "function"
        },
        "index": {
          "description": "Evaluate value using the given Strategy using runEval",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "using",
          "normalized": "a-\u003eStrategy a-\u003ea",
          "package": "parallel",
          "signature": "a-\u003eStrategy a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:using"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eevaluate a value using the given \u003ccode\u003e\u003ca\u003eStrategy\u003c/a\u003e\u003c/code\u003e.  This is simply\n \u003ccode\u003e\u003ca\u003eusing\u003c/a\u003e\u003c/code\u003e with the arguments reversed.\n\u003c/p\u003e",
          "module": "Control.Parallel.Strategies",
          "name": "withStrategy",
          "package": "parallel",
          "signature": "Strategy a -\u003e a -\u003e a",
          "source": "src/Control-Parallel-Strategies.html#withStrategy",
          "type": "function"
        },
        "index": {
          "description": "evaluate value using the given Strategy This is simply using with the arguments reversed",
          "hierarchy": "Control Parallel Strategies",
          "module": "Control.Parallel.Strategies",
          "name": "withStrategy",
          "normalized": "Strategy a-\u003ea-\u003ea",
          "package": "parallel",
          "partial": "Strategy",
          "signature": "Strategy a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel-Strategies.html#v:withStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParallel Constructs\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Parallel",
          "name": "Parallel",
          "package": "parallel",
          "source": "src/Control-Parallel.html",
          "type": "module"
        },
        "index": {
          "description": "Parallel Constructs",
          "hierarchy": "Control Parallel",
          "module": "Control.Parallel",
          "name": "Parallel",
          "package": "parallel",
          "partial": "Parallel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates that it may be beneficial to evaluate the first\n argument in parallel with the second.  Returns the value of the\n second argument.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003ea `\u003ccode\u003e\u003ca\u003epar\u003c/a\u003e\u003c/code\u003e` b\u003c/code\u003e is exactly equivalent semantically to \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003epar\u003c/code\u003e is generally used when the value of \u003ccode\u003ea\u003c/code\u003e is likely to be\n required later, but not immediately.  Also it is a good idea to\n ensure that \u003ccode\u003ea\u003c/code\u003e is not a trivial computation, otherwise the cost of\n spawning it in parallel overshadows the benefits obtained by\n running it in parallel.\n\u003c/p\u003e\u003cp\u003eNote that actual parallelism is only supported by certain\n implementations (GHC with the \u003ccode\u003e-threaded\u003c/code\u003e option, and GPH, for\n now).  On other implementations, \u003ccode\u003epar a b = b\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel",
          "name": "par",
          "package": "parallel",
          "signature": "a -\u003e b -\u003e b",
          "source": "src/Control-Parallel.html#par",
          "type": "function"
        },
        "index": {
          "description": "Indicates that it may be beneficial to evaluate the first argument in parallel with the second Returns the value of the second argument par is exactly equivalent semantically to par is generally used when the value of is likely to be required later but not immediately Also it is good idea to ensure that is not trivial computation otherwise the cost of spawning it in parallel overshadows the benefits obtained by running it in parallel Note that actual parallelism is only supported by certain implementations GHC with the threaded option and GPH for now On other implementations par",
          "hierarchy": "Control Parallel",
          "module": "Control.Parallel",
          "name": "par",
          "normalized": "a-\u003eb-\u003eb",
          "package": "parallel",
          "signature": "a-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel.html#v:par"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSemantically identical to \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e, but with a subtle operational\n difference: \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e is strict in both its arguments, so the compiler\n may, for example, rearrange \u003ccode\u003ea `\u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e` b\u003c/code\u003e into \u003ccode\u003eb `\u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e` a `\u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e` b\u003c/code\u003e.\n This is normally no problem when using \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e to express strictness,\n but it can be a problem when annotating code for parallelism,\n because we need more control over the order of evaluation; we may\n want to evaluate \u003ccode\u003ea\u003c/code\u003e before \u003ccode\u003eb\u003c/code\u003e, because we know that \u003ccode\u003eb\u003c/code\u003e has\n already been sparked in parallel with \u003ccode\u003e\u003ca\u003epar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis is why we have \u003ccode\u003e\u003ca\u003epseq\u003c/a\u003e\u003c/code\u003e.  In contrast to \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epseq\u003c/a\u003e\u003c/code\u003e is only\n strict in its first argument (as far as the compiler is concerned),\n which restricts the transformations that the compiler can do, and\n ensures that the user can retain control of the evaluation order.\n\u003c/p\u003e",
          "module": "Control.Parallel",
          "name": "pseq",
          "package": "parallel",
          "signature": "a -\u003e b -\u003e b",
          "source": "src/Control-Parallel.html#pseq",
          "type": "function"
        },
        "index": {
          "description": "Semantically identical to seq but with subtle operational difference seq is strict in both its arguments so the compiler may for example rearrange seq into seq seq This is normally no problem when using seq to express strictness but it can be problem when annotating code for parallelism because we need more control over the order of evaluation we may want to evaluate before because we know that has already been sparked in parallel with par This is why we have pseq In contrast to seq pseq is only strict in its first argument as far as the compiler is concerned which restricts the transformations that the compiler can do and ensures that the user can retain control of the evaluation order",
          "hierarchy": "Control Parallel",
          "module": "Control.Parallel",
          "name": "pseq",
          "normalized": "a-\u003eb-\u003eb",
          "package": "parallel",
          "signature": "a-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Parallel.html#v:pseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSequential strategies provide ways to compositionally specify\n the degree of evaluation of a data type between the extremes of\n no evaluation and full evaluation.\n Sequential strategies may be viewed as complimentary to the parallel\n ones (see module \u003ca\u003eControl.Parallel.Strategies\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Seq",
          "name": "Seq",
          "package": "parallel",
          "source": "src/Control-Seq.html",
          "type": "module"
        },
        "index": {
          "description": "Sequential strategies provide ways to compositionally specify the degree of evaluation of data type between the extremes of no evaluation and full evaluation Sequential strategies may be viewed as complimentary to the parallel ones see module Control.Parallel.Strategies",
          "hierarchy": "Control Seq",
          "module": "Control.Seq",
          "name": "Seq",
          "package": "parallel",
          "partial": "Seq",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Seq.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStrategy\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e is \u003ccode\u003ea -\u003e ()\u003c/code\u003e.\n Thus, a strategy is a function whose sole purpose it is to evaluate\n its argument (either in full or in part).\n\u003c/p\u003e",
          "module": "Control.Seq",
          "name": "Strategy",
          "package": "parallel",
          "source": "src/Control-Seq.html#Strategy",
          "type": "type"
        },
        "index": {
          "description": "The type Strategy is Thus strategy is function whose sole purpose it is to evaluate its argument either in full or in part",
          "hierarchy": "Control Seq",
          "module": "Control.Seq",
          "name": "Strategy",
          "package": "parallel",
          "partial": "Strategy",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Seq.html#t:Strategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003er0\u003c/a\u003e\u003c/code\u003e performs *no* evaluation.\n\u003c/p\u003e",
          "module": "Control.Seq",
          "name": "r0",
          "package": "parallel",
          "signature": "Strategy a",
          "source": "src/Control-Seq.html#r0",
          "type": "function"
        },
        "index": {
          "description": "r0 performs no evaluation",
          "hierarchy": "Control Seq",
          "module": "Control.Seq",
          "name": "r0",
          "package": "parallel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Seq.html#v:r0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erdeepseq\u003c/a\u003e\u003c/code\u003e fully evaluates its argument.\n Relies on class \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e from module \u003ca\u003eControl.DeepSeq\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Control.Seq",
          "name": "rdeepseq",
          "package": "parallel",
          "signature": "Strategy a",
          "source": "src/Control-Seq.html#rdeepseq",
          "type": "function"
        },
        "index": {
          "description": "rdeepseq fully evaluates its argument Relies on class NFData from module Control.DeepSeq",
          "hierarchy": "Control Seq",
          "module": "Control.Seq",
          "name": "rdeepseq",
          "package": "parallel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Seq.html#v:rdeepseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erseq\u003c/a\u003e\u003c/code\u003e evaluates its argument to weak head normal form.\n\u003c/p\u003e",
          "module": "Control.Seq",
          "name": "rseq",
          "package": "parallel",
          "signature": "Strategy a",
          "source": "src/Control-Seq.html#rseq",
          "type": "function"
        },
        "index": {
          "description": "rseq evaluates its argument to weak head normal form",
          "hierarchy": "Control Seq",
          "module": "Control.Seq",
          "name": "rseq",
          "package": "parallel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Seq.html#v:rseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate the elements of an array according to the given strategy.\n Evaluation of the array bounds may be triggered as a side effect.\n\u003c/p\u003e",
          "module": "Control.Seq",
          "name": "seqArray",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy (Array i a)",
          "source": "src/Control-Seq.html#seqArray",
          "type": "function"
        },
        "index": {
          "description": "Evaluate the elements of an array according to the given strategy Evaluation of the array bounds may be triggered as side effect",
          "hierarchy": "Control Seq",
          "module": "Control.Seq",
          "name": "seqArray",
          "normalized": "Strategy a-\u003eStrategy(Array b a)",
          "package": "parallel",
          "partial": "Array",
          "signature": "Strategy a-\u003eStrategy(Array i a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Seq.html#v:seqArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate the bounds of an array according to the given strategy.\n\u003c/p\u003e",
          "module": "Control.Seq",
          "name": "seqArrayBounds",
          "package": "parallel",
          "signature": "Strategy i -\u003e Strategy (Array i a)",
          "source": "src/Control-Seq.html#seqArrayBounds",
          "type": "function"
        },
        "index": {
          "description": "Evaluate the bounds of an array according to the given strategy",
          "hierarchy": "Control Seq",
          "module": "Control.Seq",
          "name": "seqArrayBounds",
          "normalized": "Strategy a-\u003eStrategy(Array a b)",
          "package": "parallel",
          "partial": "Array Bounds",
          "signature": "Strategy i-\u003eStrategy(Array i a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Seq.html#v:seqArrayBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate the elements of a foldable data structure according to\n the given strategy.\n\u003c/p\u003e",
          "module": "Control.Seq",
          "name": "seqFoldable",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy (t a)",
          "source": "src/Control-Seq.html#seqFoldable",
          "type": "function"
        },
        "index": {
          "description": "Evaluate the elements of foldable data structure according to the given strategy",
          "hierarchy": "Control Seq",
          "module": "Control.Seq",
          "name": "seqFoldable",
          "normalized": "Strategy a-\u003eStrategy(b a)",
          "package": "parallel",
          "partial": "Foldable",
          "signature": "Strategy a-\u003eStrategy(t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Seq.html#v:seqFoldable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate each element of a list according to the given strategy.\n This function is a specialisation of \u003ccode\u003e\u003ca\u003eseqFoldable\u003c/a\u003e\u003c/code\u003e to lists.\n\u003c/p\u003e",
          "module": "Control.Seq",
          "name": "seqList",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy [a]",
          "source": "src/Control-Seq.html#seqList",
          "type": "function"
        },
        "index": {
          "description": "Evaluate each element of list according to the given strategy This function is specialisation of seqFoldable to lists",
          "hierarchy": "Control Seq",
          "module": "Control.Seq",
          "name": "seqList",
          "normalized": "Strategy a-\u003eStrategy[a]",
          "package": "parallel",
          "partial": "List",
          "signature": "Strategy a-\u003eStrategy[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Seq.html#v:seqList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate the first n elements of a list according to the given strategy.\n\u003c/p\u003e",
          "module": "Control.Seq",
          "name": "seqListN",
          "package": "parallel",
          "signature": "Int -\u003e Strategy a -\u003e Strategy [a]",
          "source": "src/Control-Seq.html#seqListN",
          "type": "function"
        },
        "index": {
          "description": "Evaluate the first elements of list according to the given strategy",
          "hierarchy": "Control Seq",
          "module": "Control.Seq",
          "name": "seqListN",
          "normalized": "Int-\u003eStrategy a-\u003eStrategy[a]",
          "package": "parallel",
          "partial": "List",
          "signature": "Int-\u003eStrategy a-\u003eStrategy[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Seq.html#v:seqListN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate the nth element of a list (if there is such) according to\n the given strategy.\n The spine of the list up to the nth element is evaluated as a side effect.\n\u003c/p\u003e",
          "module": "Control.Seq",
          "name": "seqListNth",
          "package": "parallel",
          "signature": "Int -\u003e Strategy a -\u003e Strategy [a]",
          "source": "src/Control-Seq.html#seqListNth",
          "type": "function"
        },
        "index": {
          "description": "Evaluate the nth element of list if there is such according to the given strategy The spine of the list up to the nth element is evaluated as side effect",
          "hierarchy": "Control Seq",
          "module": "Control.Seq",
          "name": "seqListNth",
          "normalized": "Int-\u003eStrategy a-\u003eStrategy[a]",
          "package": "parallel",
          "partial": "List Nth",
          "signature": "Int-\u003eStrategy a-\u003eStrategy[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Seq.html#v:seqListNth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate the keys and values of a map according to the given strategies.\n\u003c/p\u003e",
          "module": "Control.Seq",
          "name": "seqMap",
          "package": "parallel",
          "signature": "Strategy k -\u003e Strategy v -\u003e Strategy (Map k v)",
          "source": "src/Control-Seq.html#seqMap",
          "type": "function"
        },
        "index": {
          "description": "Evaluate the keys and values of map according to the given strategies",
          "hierarchy": "Control Seq",
          "module": "Control.Seq",
          "name": "seqMap",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy(Map a b)",
          "package": "parallel",
          "partial": "Map",
          "signature": "Strategy k-\u003eStrategy v-\u003eStrategy(Map k v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Seq.html#v:seqMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Seq",
          "name": "seqTuple2",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy (a, b)",
          "source": "src/Control-Seq.html#seqTuple2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Seq",
          "module": "Control.Seq",
          "name": "seqTuple2",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy(a,b)",
          "package": "parallel",
          "partial": "Tuple",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Seq.html#v:seqTuple2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Seq",
          "name": "seqTuple3",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy c -\u003e Strategy (a, b, c)",
          "source": "src/Control-Seq.html#seqTuple3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Seq",
          "module": "Control.Seq",
          "name": "seqTuple3",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy(a,b,c)",
          "package": "parallel",
          "partial": "Tuple",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Seq.html#v:seqTuple3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Seq",
          "name": "seqTuple4",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy c -\u003e Strategy d -\u003e Strategy (a, b, c, d)",
          "source": "src/Control-Seq.html#seqTuple4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Seq",
          "module": "Control.Seq",
          "name": "seqTuple4",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy(a,b,c,d)",
          "package": "parallel",
          "partial": "Tuple",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Seq.html#v:seqTuple4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Seq",
          "name": "seqTuple5",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy c -\u003e Strategy d -\u003e Strategy e -\u003e Strategy (a, b, c, d, e)",
          "source": "src/Control-Seq.html#seqTuple5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Seq",
          "module": "Control.Seq",
          "name": "seqTuple5",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy(a,b,c,d,e)",
          "package": "parallel",
          "partial": "Tuple",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy(a,b,c,d,e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Seq.html#v:seqTuple5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Seq",
          "name": "seqTuple6",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy c -\u003e Strategy d -\u003e Strategy e -\u003e Strategy f -\u003e Strategy (a, b, c, d, e, f)",
          "source": "src/Control-Seq.html#seqTuple6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Seq",
          "module": "Control.Seq",
          "name": "seqTuple6",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy f-\u003eStrategy(a,b,c,d,e,f)",
          "package": "parallel",
          "partial": "Tuple",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy f-\u003eStrategy(a,b,c,d,e,f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Seq.html#v:seqTuple6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Seq",
          "name": "seqTuple7",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy c -\u003e Strategy d -\u003e Strategy e -\u003e Strategy f -\u003e Strategy g -\u003e Strategy (a, b, c, d, e, f, g)",
          "source": "src/Control-Seq.html#seqTuple7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Seq",
          "module": "Control.Seq",
          "name": "seqTuple7",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy f-\u003eStrategy g-\u003eStrategy(a,b,c,d,e,f,g)",
          "package": "parallel",
          "partial": "Tuple",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy f-\u003eStrategy g-\u003eStrategy(a,b,c,d,e,f,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Seq.html#v:seqTuple7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Seq",
          "name": "seqTuple8",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy c -\u003e Strategy d -\u003e Strategy e -\u003e Strategy f -\u003e Strategy g -\u003e Strategy h -\u003e Strategy (a, b, c, d, e, f, g, h)",
          "source": "src/Control-Seq.html#seqTuple8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Seq",
          "module": "Control.Seq",
          "name": "seqTuple8",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy f-\u003eStrategy g-\u003eStrategy h-\u003eStrategy(a,b,c,d,e,f,g,h)",
          "package": "parallel",
          "partial": "Tuple",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy f-\u003eStrategy g-\u003eStrategy h-\u003eStrategy(a,b,c,d,e,f,g,h)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Seq.html#v:seqTuple8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Seq",
          "name": "seqTuple9",
          "package": "parallel",
          "signature": "Strategy a -\u003e Strategy b -\u003e Strategy c -\u003e Strategy d -\u003e Strategy e -\u003e Strategy f -\u003e Strategy g -\u003e Strategy h -\u003e Strategy i -\u003e Strategy (a, b, c, d, e, f, g, h, i)",
          "source": "src/Control-Seq.html#seqTuple9",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Seq",
          "module": "Control.Seq",
          "name": "seqTuple9",
          "normalized": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy f-\u003eStrategy g-\u003eStrategy h-\u003eStrategy i-\u003eStrategy(a,b,c,d,e,f,g,h,i)",
          "package": "parallel",
          "partial": "Tuple",
          "signature": "Strategy a-\u003eStrategy b-\u003eStrategy c-\u003eStrategy d-\u003eStrategy e-\u003eStrategy f-\u003eStrategy g-\u003eStrategy h-\u003eStrategy i-\u003eStrategy(a,b,c,d,e,f,g,h,i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Seq.html#v:seqTuple9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a value using the given strategy.\n\u003c/p\u003e",
          "module": "Control.Seq",
          "name": "using",
          "package": "parallel",
          "signature": "a -\u003e Strategy a -\u003e a",
          "source": "src/Control-Seq.html#using",
          "type": "function"
        },
        "index": {
          "description": "Evaluate value using the given strategy",
          "hierarchy": "Control Seq",
          "module": "Control.Seq",
          "name": "using",
          "normalized": "a-\u003eStrategy a-\u003ea",
          "package": "parallel",
          "signature": "a-\u003eStrategy a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Seq.html#v:using"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a value using the given strategy. \n This is simply \u003ccode\u003e\u003ca\u003eusing\u003c/a\u003e\u003c/code\u003e with arguments reversed.\n\u003c/p\u003e",
          "module": "Control.Seq",
          "name": "withStrategy",
          "package": "parallel",
          "signature": "Strategy a -\u003e a -\u003e a",
          "source": "src/Control-Seq.html#withStrategy",
          "type": "function"
        },
        "index": {
          "description": "Evaluate value using the given strategy This is simply using with arguments reversed",
          "hierarchy": "Control Seq",
          "module": "Control.Seq",
          "name": "withStrategy",
          "normalized": "Strategy a-\u003ea-\u003ea",
          "package": "parallel",
          "partial": "Strategy",
          "signature": "Strategy a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parallel/docs/Control-Seq.html#v:withStrategy"
      }
    }
  ]
]