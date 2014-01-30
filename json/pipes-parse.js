[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eElement-agnostic parsing utilities for \u003ccode\u003epipes\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003epipes-parse\u003c/code\u003e provides two ways to parse and transform streams in constant\n    space:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The \"list-like\" approach, using the split / transform / join paradigm\n\u003c/li\u003e\u003cli\u003e The monadic approach, using parser combinators\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe top half of this module provides the list-like approach, which is easier\n    to use, but less powerful.  The key idea is that:\n\u003c/p\u003e\u003cpre\u003e -- '~' means \"is analogous to\"\n Producer a m ()            ~   [a]\n\n FreeT (Producer a m) m ()  ~  [[a]]\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e nests each subsequent \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e within the return value of the\n    previous \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e so that you cannot access the next \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e until you\n    completely drain the current \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e.  However, you rarely need to work\n    with \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e directly.  Instead, you structure everything using\n    \"splitters\", \"transformations\" and \"joiners\":\n\u003c/p\u003e\u003cpre\u003e -- A \"splitter\"\n Producer a m ()           -\u003e FreeT (Producer a m) m ()  ~   [a]  -\u003e [[a]]\n\n -- A \"transformation\"\n FreeT (Producer a m) m () -\u003e FreeT (Producer a m) m ()  ~  [[a]] -\u003e [[a]]\n\n -- A \"joiner\"\n FreeT (Producer a m) m () -\u003e Producer a m ()            ~  [[a]] -\u003e  [a]\n\u003c/pre\u003e\u003cp\u003eFor example, if you wanted to group standard input by equal lines and take\n    the first three groups, you would write:\n\u003c/p\u003e\u003cpre\u003e import Pipes\n import qualified Pipes.Parse as Parse\n import qualified Pipes.Prelude as Prelude\n\n threeGroups :: (Monad m, Eq a) =\u003e Producer a m () -\u003e Producer a m ()\n threeGroups = Parse.concat . Parse.takeFree 3 . Parse.groupBy (==)\n --            ^ Joiner       ^ Transformation   ^ Splitter\n\u003c/pre\u003e\u003cp\u003eThis then limits standard input to the first three consecutive groups of\n    equal lines:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erunEffect $ threeGroups Prelude.stdinLn \u003e-\u003e Prelude.stdoutLn\n\u003c/code\u003e\u003c/strong\u003eGroup1\u003cEnter\u003e\nGroup1\nGroup1\u003cEnter\u003e\nGroup1\nGroup2\u003cEnter\u003e\nGroup2\nGroup3\u003cEnter\u003e\nGroup3\nGroup3\u003cEnter\u003e\nGroup3\nGroup4\u003cEnter\u003e\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e-- Done, because we began entering our fourth group\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cp\u003eThe advantage of this style or programming is that you never bring more than\n    a single element into memory.  This works because \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e sub-divides the\n    \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e without concatenating elements together, preserving the laziness\n    of the underlying \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe bottom half of this module lets you implement your own list-like\n    transformations using monadic parsers.\n\u003c/p\u003e\u003cp\u003eFor example, if you wanted to repeatedly sum every 3 elements and yield the\n    result, you would write:\n\u003c/p\u003e\u003cpre\u003e import Control.Monad (unless)\n import Pipes\n import qualified Pipes.Prelude as P\n import Pipes.Parse\n\n sum3 :: (Monad m, Num a) =\u003e Producer a (StateT (Producer a m ()) m) ()\n sum3 = do\n     eof \u003c- lift isEndOfInput\n     unless eof $ do\n         n \u003c- lift $ P.sum (input \u003e-\u003e P.take 3)\n         yield n\n         sum3\n\u003c/pre\u003e\u003cp\u003eWhen you are done building the parser, you convert your parser to a\n    list-like function using \u003ccode\u003eevalStateP\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e import Pipes.Lift (evalStateP)\n\n -- sum3'  ~  (Num a) =\u003e [a] -\u003e [a]\n\n sum3' :: (Monad m, Num a) =\u003e Producer a m () -\u003e Producer a m ()\n sum3' p = evalStateP p sum3\n\u003c/pre\u003e\u003cp\u003e... then apply it to the \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e you want to transform:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003erunEffect $ sum3' (P.readLn \u003e-\u003e P.takeWhile (/= 0)) \u003e-\u003e P.print\n\u003c/code\u003e\u003c/strong\u003e1\u003cEnter\u003e\n4\u003cEnter\u003e\n5\u003cEnter\u003e\n10\n2\u003cEnter\u003e\n0\u003cEnter\u003e\n2\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Pipes.Parse",
        "fct-package": "pipes-parse",
        "fct-signature": "module",
        "fct-source": "src/Pipes-Parse.html",
        "fct-type": "module",
        "title": "Parse"
      },
      "index": {
        "description": "Element-agnostic parsing utilities for pipes pipes-parse provides two ways to parse and transform streams in constant space The list-like approach using the split transform join paradigm The monadic approach using parser combinators The top half of this module provides the list-like approach which is easier to use but less powerful The key idea is that means is analogous to Producer FreeT Producer FreeT nests each subsequent Producer within the return value of the previous Producer so that you cannot access the next Producer until you completely drain the current Producer However you rarely need to work with FreeT directly Instead you structure everything using splitters transformations and joiners splitter Producer FreeT Producer transformation FreeT Producer FreeT Producer joiner FreeT Producer Producer For example if you wanted to group standard input by equal lines and take the first three groups you would write import Pipes import qualified Pipes.Parse as Parse import qualified Pipes.Prelude as Prelude threeGroups Monad Eq Producer Producer threeGroups Parse.concat Parse.takeFree Parse.groupBy Joiner Transformation Splitter This then limits standard input to the first three consecutive groups of equal lines runEffect threeGroups Prelude.stdinLn Prelude.stdoutLn Group1 Enter Group1 Group1 Enter Group1 Group2 Enter Group2 Group3 Enter Group3 Group3 Enter Group3 Group4 Enter Done because we began entering our fourth group The advantage of this style or programming is that you never bring more than single element into memory This works because FreeT sub-divides the Producer without concatenating elements together preserving the laziness of the underlying Producer The bottom half of this module lets you implement your own list-like transformations using monadic parsers For example if you wanted to repeatedly sum every elements and yield the result you would write import Control.Monad unless import Pipes import qualified Pipes.Prelude as import Pipes.Parse sum3 Monad Num Producer StateT Producer sum3 do eof lift isEndOfInput unless eof do lift P.sum input P.take yield sum3 When you are done building the parser you convert your parser to list-like function using evalStateP import Pipes.Lift evalStateP sum3 Num sum3 Monad Num Producer Producer sum3 evalStateP sum3 then apply it to the Producer you want to transform runEffect sum3 P.readLn P.takeWhile P.print Enter Enter Enter Enter Enter",
        "hierarchy": "Pipes Parse",
        "module": "Pipes.Parse",
        "name": "Parse",
        "normalized": "",
        "package": "pipes-parse",
        "partial": "Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:chunksOf",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e-delimited stream of \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003es of the\n    given chunk size\n\u003c/p\u003e",
        "fct-module": "Pipes.Parse",
        "fct-package": "pipes-parse",
        "fct-signature": "Int -\u003e Producer a m r -\u003e FreeT (Producer a m) m r",
        "fct-source": "src/Pipes-Parse.html#chunksOf",
        "fct-type": "function",
        "title": "chunksOf"
      },
      "index": {
        "description": "Split Producer into FreeT delimited stream of Producer of the given chunk size",
        "hierarchy": "Pipes Parse",
        "module": "Pipes.Parse",
        "name": "chunksOf",
        "normalized": "Int-\u003eProducer a b c-\u003eFreeT(Producer a b)b c",
        "package": "pipes-parse",
        "partial": "Of",
        "signature": "Int-\u003eProducer a m r-\u003eFreeT(Producer a m)m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:concat",
      "description": {
        "fct-descr": "\u003cp\u003eJoin a \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e-delimited stream of \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003es into a single \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Pipes.Parse",
        "fct-package": "pipes-parse",
        "fct-signature": "FreeT (Producer a m) m r -\u003e Producer a m r",
        "fct-source": "src/Pipes-Parse.html#concat",
        "fct-type": "function",
        "title": "concat"
      },
      "index": {
        "description": "Join FreeT delimited stream of Producer into single Producer",
        "hierarchy": "Pipes Parse",
        "module": "Pipes.Parse",
        "name": "concat",
        "normalized": "FreeT(Producer a b)b c-\u003eProducer a b c",
        "package": "pipes-parse",
        "partial": "",
        "signature": "FreeT(Producer a m)m r-\u003eProducer a m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:draw",
      "description": {
        "fct-descr": "\u003cp\u003eDraw one element from the underlying \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e, returning \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e if the\n    \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e is empty\n\u003c/p\u003e",
        "fct-module": "Pipes.Parse",
        "fct-package": "pipes-parse",
        "fct-signature": "StateT (Producer a m r) m (Either r a)",
        "fct-source": "src/Pipes-Parse.html#draw",
        "fct-type": "function",
        "title": "draw"
      },
      "index": {
        "description": "Draw one element from the underlying Producer returning Left if the Producer is empty",
        "hierarchy": "Pipes Parse",
        "module": "Pipes.Parse",
        "name": "draw",
        "normalized": "",
        "package": "pipes-parse",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:dropFree",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(dropFree n)\u003c/code\u003e peels off the first \u003ccode\u003en\u003c/code\u003e layers of a \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eUse carefully: the peeling off is not free.   This runs the first \u003ccode\u003en\u003c/code\u003e\n    layers, just discarding everything they produce.\n\u003c/p\u003e",
        "fct-module": "Pipes.Parse",
        "fct-package": "pipes-parse",
        "fct-signature": "Int -\u003e FreeT (Producer a m) m r -\u003e FreeT (Producer a m) m r",
        "fct-source": "src/Pipes-Parse.html#dropFree",
        "fct-type": "function",
        "title": "dropFree"
      },
      "index": {
        "description": "dropFree peels off the first layers of FreeT Use carefully the peeling off is not free This runs the first layers just discarding everything they produce",
        "hierarchy": "Pipes Parse",
        "module": "Pipes.Parse",
        "name": "dropFree",
        "normalized": "Int-\u003eFreeT(Producer a b)b c-\u003eFreeT(Producer a b)b c",
        "package": "pipes-parse",
        "partial": "Free",
        "signature": "Int-\u003eFreeT(Producer a m)m r-\u003eFreeT(Producer a m)m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:groupBy",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e-delimited stream of \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003es grouped by\n    the supplied equality predicate\n\u003c/p\u003e",
        "fct-module": "Pipes.Parse",
        "fct-package": "pipes-parse",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e Producer a m r -\u003e FreeT (Producer a m) m r",
        "fct-source": "src/Pipes-Parse.html#groupBy",
        "fct-type": "function",
        "title": "groupBy"
      },
      "index": {
        "description": "Split Producer into FreeT delimited stream of Producer grouped by the supplied equality predicate",
        "hierarchy": "Pipes Parse",
        "module": "Pipes.Parse",
        "name": "groupBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003eProducer a b c-\u003eFreeT(Producer a b)b c",
        "package": "pipes-parse",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eBool)-\u003eProducer a m r-\u003eFreeT(Producer a m)m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:input",
      "description": {
        "fct-descr": "\u003cp\u003eStream from the underlying \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003einput\u003c/a\u003e\u003c/code\u003e terminates if the \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e is empty, returning the final return\n    value of the \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Pipes.Parse",
        "fct-package": "pipes-parse",
        "fct-signature": "Producer' a (StateT (Producer a m r) m) r",
        "fct-source": "src/Pipes-Parse.html#input",
        "fct-type": "function",
        "title": "input"
      },
      "index": {
        "description": "Stream from the underlying Producer input terminates if the Producer is empty returning the final return value of the Producer",
        "hierarchy": "Pipes Parse",
        "module": "Pipes.Parse",
        "name": "input",
        "normalized": "",
        "package": "pipes-parse",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:intercalate",
      "description": {
        "fct-descr": "\u003cp\u003eJoin a \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e-delimited stream of \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003es into a single \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e by\n    intercalating a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e in between them\n\u003c/p\u003e",
        "fct-module": "Pipes.Parse",
        "fct-package": "pipes-parse",
        "fct-signature": "Producer a m () -\u003e FreeT (Producer a m) m r -\u003e Producer a m r",
        "fct-source": "src/Pipes-Parse.html#intercalate",
        "fct-type": "function",
        "title": "intercalate"
      },
      "index": {
        "description": "Join FreeT delimited stream of Producer into single Producer by intercalating Producer in between them",
        "hierarchy": "Pipes Parse",
        "module": "Pipes.Parse",
        "name": "intercalate",
        "normalized": "Producer a b()-\u003eFreeT(Producer a b)b c-\u003eProducer a b c",
        "package": "pipes-parse",
        "partial": "",
        "signature": "Producer a m()-\u003eFreeT(Producer a m)m r-\u003eProducer a m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:isEndOfInput",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if the underlying \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e is empty\n\u003c/p\u003e\u003cpre\u003e isEndOfInput = liftM isLeft peek\n\u003c/pre\u003e",
        "fct-module": "Pipes.Parse",
        "fct-package": "pipes-parse",
        "fct-signature": "StateT (Producer a m r) m Bool",
        "fct-source": "src/Pipes-Parse.html#isEndOfInput",
        "fct-type": "function",
        "title": "isEndOfInput"
      },
      "index": {
        "description": "Check if the underlying Producer is empty isEndOfInput liftM isLeft peek",
        "hierarchy": "Pipes Parse",
        "module": "Pipes.Parse",
        "name": "isEndOfInput",
        "normalized": "",
        "package": "pipes-parse",
        "partial": "End Of Input",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:peek",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epeek\u003c/a\u003e\u003c/code\u003e checks the first element of the stream, but uses \u003ccode\u003e\u003ca\u003eunDraw\u003c/a\u003e\u003c/code\u003e to push the\n    element back so that it is available for the next \u003ccode\u003e\u003ca\u003edraw\u003c/a\u003e\u003c/code\u003e command.\n\u003c/p\u003e\u003cpre\u003e peek = do\n     x \u003c- draw\n     case x of\n         Left  _ -\u003e return ()\n         Right a -\u003e unDraw a\n     return x\n\u003c/pre\u003e",
        "fct-module": "Pipes.Parse",
        "fct-package": "pipes-parse",
        "fct-signature": "StateT (Producer a m r) m (Either r a)",
        "fct-source": "src/Pipes-Parse.html#peek",
        "fct-type": "function",
        "title": "peek"
      },
      "index": {
        "description": "peek checks the first element of the stream but uses unDraw to push the element back so that it is available for the next draw command peek do draw case of Left return Right unDraw return",
        "hierarchy": "Pipes Parse",
        "module": "Pipes.Parse",
        "name": "peek",
        "normalized": "",
        "package": "pipes-parse",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:splitOn",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e-delimited stream of \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003es separated\n    by elements that satisfy the given predicate\n\u003c/p\u003e",
        "fct-module": "Pipes.Parse",
        "fct-package": "pipes-parse",
        "fct-signature": "(a -\u003e Bool) -\u003e Producer a m r -\u003e FreeT (Producer a m) m r",
        "fct-source": "src/Pipes-Parse.html#splitOn",
        "fct-type": "function",
        "title": "splitOn"
      },
      "index": {
        "description": "Split Producer into FreeT delimited stream of Producer separated by elements that satisfy the given predicate",
        "hierarchy": "Pipes Parse",
        "module": "Pipes.Parse",
        "name": "splitOn",
        "normalized": "(a-\u003eBool)-\u003eProducer a b c-\u003eFreeT(Producer a b)b c",
        "package": "pipes-parse",
        "partial": "On",
        "signature": "(a-\u003eBool)-\u003eProducer a m r-\u003eFreeT(Producer a m)m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:takeFree",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e(takeFree n)\u003c/code\u003e only keeps the first \u003ccode\u003en\u003c/code\u003e functor layers of a \u003ccode\u003e\u003ca\u003eFreeT\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Pipes.Parse",
        "fct-package": "pipes-parse",
        "fct-signature": "Int -\u003e FreeT f m () -\u003e FreeT f m ()",
        "fct-source": "src/Pipes-Parse.html#takeFree",
        "fct-type": "function",
        "title": "takeFree"
      },
      "index": {
        "description": "takeFree only keeps the first functor layers of FreeT",
        "hierarchy": "Pipes Parse",
        "module": "Pipes.Parse",
        "name": "takeFree",
        "normalized": "Int-\u003eFreeT a b()-\u003eFreeT a b()",
        "package": "pipes-parse",
        "partial": "Free",
        "signature": "Int-\u003eFreeT f m()-\u003eFreeT f m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:takeWhile",
      "description": {
        "fct-descr": "\u003cp\u003eA variation on \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003ePipes.Prelude\u003c/code\u003e that \u003ccode\u003e\u003ca\u003eunDraw\u003c/a\u003e\u003c/code\u003es\n    the first element that does not match\n\u003c/p\u003e",
        "fct-module": "Pipes.Parse",
        "fct-package": "pipes-parse",
        "fct-signature": "(a -\u003e Bool) -\u003e Pipe a a (StateT (Producer a m r) m) ()",
        "fct-source": "src/Pipes-Parse.html#takeWhile",
        "fct-type": "function",
        "title": "takeWhile"
      },
      "index": {
        "description": "variation on takeWhile from Pipes.Prelude that unDraw the first element that does not match",
        "hierarchy": "Pipes Parse",
        "module": "Pipes.Parse",
        "name": "takeWhile",
        "normalized": "(a-\u003eBool)-\u003ePipe a a(StateT(Producer a b c)b)()",
        "package": "pipes-parse",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003ePipe a a(StateT(Producer a m r)m)()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:unDraw",
      "description": {
        "fct-descr": "\u003cp\u003ePush back an element onto the underlying \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Pipes.Parse",
        "fct-package": "pipes-parse",
        "fct-signature": "a -\u003e StateT (Producer a m r) m ()",
        "fct-source": "src/Pipes-Parse.html#unDraw",
        "fct-type": "function",
        "title": "unDraw"
      },
      "index": {
        "description": "Push back an element onto the underlying Producer",
        "hierarchy": "Pipes Parse",
        "module": "Pipes.Parse",
        "name": "unDraw",
        "normalized": "a-\u003eStateT(Producer a b c)b()",
        "package": "pipes-parse",
        "partial": "Draw",
        "signature": "a-\u003eStateT(Producer a m r)m()"
      }
    }
  }
]