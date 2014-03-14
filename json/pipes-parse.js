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
        "word": "pipes-parse"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003epipes-parse\u003c/code\u003e builds upon \u003ccode\u003epipes\u003c/code\u003e to add several missing features necessary\n    to implement \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003es:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e End-of-input detection, so that \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003es can react to an exhausted input\n      stream\n\u003c/li\u003e\u003cli\u003e Leftovers support, which simplifies several parsing problems\n\u003c/li\u003e\u003cli\u003e Connect-and-resume, to connect a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e and retrieve\n      unused input\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Pipes.Parse.Tutorial",
          "name": "Tutorial",
          "package": "pipes-parse",
          "source": "src/Pipes-Parse-Tutorial.html",
          "type": "module"
        },
        "index": {
          "description": "pipes-parse builds upon pipes to add several missing features necessary to implement Parser End-of-input detection so that Parser can react to an exhausted input stream Leftovers support which simplifies several parsing problems Connect-and-resume to connect Producer to Parser and retrieve unused input",
          "hierarchy": "Pipes Parse Tutorial",
          "module": "Pipes.Parse.Tutorial",
          "name": "Tutorial",
          "package": "pipes-parse",
          "partial": "Tutorial",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse-Tutorial.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eElement-agnostic parsing utilities for \u003ccode\u003epipes\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSee \u003ca\u003ePipes.Parse.Tutorial\u003c/a\u003e for an extended tutorial\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pipes.Parse",
          "name": "Parse",
          "package": "pipes-parse",
          "source": "src/Pipes-Parse.html",
          "type": "module"
        },
        "index": {
          "description": "Element-agnostic parsing utilities for pipes See Pipes.Parse.Tutorial for an extended tutorial",
          "hierarchy": "Pipes Parse",
          "module": "Pipes.Parse",
          "name": "Parse",
          "package": "pipes-parse",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e is an action that reads from and writes to a stored \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Parse",
          "name": "Parser",
          "package": "pipes-parse",
          "source": "src/Pipes-Parse.html#Parser",
          "type": "type"
        },
        "index": {
          "description": "Parser is an action that reads from and writes to stored Producer",
          "hierarchy": "Pipes Parse",
          "module": "Pipes.Parse",
          "name": "Parser",
          "package": "pipes-parse",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw one element from the underlying \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e, returning \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the\n    \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e is empty\n\u003c/p\u003e",
          "module": "Pipes.Parse",
          "name": "draw",
          "package": "pipes-parse",
          "signature": "Parser a m (Maybe a)",
          "source": "src/Pipes-Parse.html#draw",
          "type": "function"
        },
        "index": {
          "description": "Draw one element from the underlying Producer returning Nothing if the Producer is empty",
          "hierarchy": "Pipes Parse",
          "module": "Pipes.Parse",
          "name": "draw",
          "package": "pipes-parse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:draw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw all elements from the underlying \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003edrawAll\u003c/a\u003e\u003c/code\u003e is not an idiomatic use of \u003ccode\u003epipes-parse\u003c/code\u003e, but I provide\n    it for simple testing purposes.  Idiomatic \u003ccode\u003epipes-parse\u003c/code\u003e style consumes the\n    elements immediately as they are generated instead of loading all elements\n    into memory.  For example, you can use \u003ccode\u003e\u003ca\u003efoldAll\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003efoldAllM\u003c/a\u003e\u003c/code\u003e for this\n    purpose.\n\u003c/p\u003e",
          "module": "Pipes.Parse",
          "name": "drawAll",
          "package": "pipes-parse",
          "signature": "Parser a m [a]",
          "source": "src/Pipes-Parse.html#drawAll",
          "type": "function"
        },
        "index": {
          "description": "Draw all elements from the underlying Producer Note that drawAll is not an idiomatic use of pipes-parse but provide it for simple testing purposes Idiomatic pipes-parse style consumes the elements immediately as they are generated instead of loading all elements into memory For example you can use foldAll or foldAllM for this purpose",
          "hierarchy": "Pipes Parse",
          "module": "Pipes.Parse",
          "name": "drawAll",
          "normalized": "Parser a b[a]",
          "package": "pipes-parse",
          "partial": "All",
          "signature": "Parser a m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:drawAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold all input values\n\u003c/p\u003e\u003cpre\u003e Control.Foldl.purely foldAll :: Monad m =\u003e Fold a b -\u003e Parser a m b\n\u003c/pre\u003e",
          "module": "Pipes.Parse",
          "name": "foldAll",
          "package": "pipes-parse",
          "signature": "(x -\u003e a -\u003e x)-\u003e x-\u003e (x -\u003e b)-\u003e Parser a m b",
          "type": "function"
        },
        "index": {
          "description": "Fold all input values Control.Foldl.purely foldAll Monad Fold Parser",
          "hierarchy": "Pipes Parse",
          "module": "Pipes.Parse",
          "name": "foldAll",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003e(a-\u003ec)-\u003eParser b d c",
          "package": "pipes-parse",
          "partial": "All",
          "signature": "(x-\u003ea-\u003ex)-\u003ex-\u003e(x-\u003eb)-\u003eParser a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:foldAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold all input values monadically\n\u003c/p\u003e\u003cpre\u003e Control.Foldl.impurely foldAllM :: Monad m =\u003e FoldM a m b -\u003e Parser a m b\n\u003c/pre\u003e",
          "module": "Pipes.Parse",
          "name": "foldAllM",
          "package": "pipes-parse",
          "signature": "(x -\u003e a -\u003e m x)-\u003e m x-\u003e (x -\u003e m b)-\u003e Parser a m b",
          "type": "function"
        },
        "index": {
          "description": "Fold all input values monadically Control.Foldl.impurely foldAllM Monad FoldM Parser",
          "hierarchy": "Pipes Parse",
          "module": "Pipes.Parse",
          "name": "foldAllM",
          "normalized": "(a-\u003eb-\u003ec a)-\u003ec a-\u003e(a-\u003ec d)-\u003eParser b c d",
          "package": "pipes-parse",
          "partial": "All",
          "signature": "(x-\u003ea-\u003em x)-\u003em x-\u003e(x-\u003em b)-\u003eParser a m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:foldAllM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e, where the equality predicate is (\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Pipes.Parse",
          "name": "group",
          "package": "pipes-parse",
          "signature": "Lens' (Producer a m x) (Producer a m (Producer a m x))",
          "source": "src/Pipes-Parse.html#group",
          "type": "function"
        },
        "index": {
          "description": "Like groupBy where the equality predicate is",
          "hierarchy": "Pipes Parse",
          "module": "Pipes.Parse",
          "name": "group",
          "package": "pipes-parse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e splits a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e into two \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003es after the first group of\n     elements that are equal according to the equality predicate\n\u003c/p\u003e",
          "module": "Pipes.Parse",
          "name": "groupBy",
          "package": "pipes-parse",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e Lens' (Producer a m x) (Producer a m (Producer a m x))",
          "source": "src/Pipes-Parse.html#groupBy",
          "type": "function"
        },
        "index": {
          "description": "groupBy splits Producer into two Producer after the first group of elements that are equal according to the equality predicate",
          "hierarchy": "Pipes Parse",
          "module": "Pipes.Parse",
          "name": "groupBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eLens'(Producer a b c)(Producer a b(Producer a b c))",
          "package": "pipes-parse",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003eLens'(Producer a m x)(Producer a m(Producer a m x))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the underlying \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e is empty\n\u003c/p\u003e\u003cpre\u003e isEndOfInput = fmap isNothing peek\n\u003c/pre\u003e",
          "module": "Pipes.Parse",
          "name": "isEndOfInput",
          "package": "pipes-parse",
          "signature": "Parser a m Bool",
          "source": "src/Pipes-Parse.html#isEndOfInput",
          "type": "function"
        },
        "index": {
          "description": "Check if the underlying Producer is empty isEndOfInput fmap isNothing peek",
          "hierarchy": "Pipes Parse",
          "module": "Pipes.Parse",
          "name": "isEndOfInput",
          "package": "pipes-parse",
          "partial": "End Of Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:isEndOfInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epeek\u003c/a\u003e\u003c/code\u003e checks the first element of the stream, but uses \u003ccode\u003e\u003ca\u003eunDraw\u003c/a\u003e\u003c/code\u003e to push the\n    element back so that it is available for the next \u003ccode\u003e\u003ca\u003edraw\u003c/a\u003e\u003c/code\u003e command.\n\u003c/p\u003e\u003cpre\u003e peek = do\n     x \u003c- draw\n     case x of\n         Nothing -\u003e return ()\n         Just a  -\u003e unDraw a\n     return x\n\u003c/pre\u003e",
          "module": "Pipes.Parse",
          "name": "peek",
          "package": "pipes-parse",
          "signature": "Parser a m (Maybe a)",
          "source": "src/Pipes-Parse.html#peek",
          "type": "function"
        },
        "index": {
          "description": "peek checks the first element of the stream but uses unDraw to push the element back so that it is available for the next draw command peek do draw case of Nothing return Just unDraw return",
          "hierarchy": "Pipes Parse",
          "module": "Pipes.Parse",
          "name": "peek",
          "package": "pipes-parse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip one element from the underlying \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e, returning \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if\n    successful or \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e is empty\n\u003c/p\u003e\u003cpre\u003e skip = fmap isJust draw\n\u003c/pre\u003e",
          "module": "Pipes.Parse",
          "name": "skip",
          "package": "pipes-parse",
          "signature": "Parser a m Bool",
          "source": "src/Pipes-Parse.html#skip",
          "type": "function"
        },
        "index": {
          "description": "Skip one element from the underlying Producer returning True if successful or False if the Producer is empty skip fmap isJust draw",
          "hierarchy": "Pipes Parse",
          "module": "Pipes.Parse",
          "name": "skip",
          "package": "pipes-parse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrain all elements from the underlying \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Parse",
          "name": "skipAll",
          "package": "pipes-parse",
          "signature": "Parser a m ()",
          "source": "src/Pipes-Parse.html#skipAll",
          "type": "function"
        },
        "index": {
          "description": "Drain all elements from the underlying Producer",
          "hierarchy": "Pipes Parse",
          "module": "Pipes.Parse",
          "name": "skipAll",
          "normalized": "Parser a b()",
          "package": "pipes-parse",
          "partial": "All",
          "signature": "Parser a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:skipAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e is an improper lens that splits the \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e into two \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003es,\n    where the outer \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e is the longest consecutive group of elements that\n    satisfy the predicate\n\u003c/p\u003e",
          "module": "Pipes.Parse",
          "name": "span",
          "package": "pipes-parse",
          "signature": "(a -\u003e Bool) -\u003e Lens' (Producer a m x) (Producer a m (Producer a m x))",
          "source": "src/Pipes-Parse.html#span",
          "type": "function"
        },
        "index": {
          "description": "span is an improper lens that splits the Producer into two Producer where the outer Producer is the longest consecutive group of elements that satisfy the predicate",
          "hierarchy": "Pipes Parse",
          "module": "Pipes.Parse",
          "name": "span",
          "normalized": "(a-\u003eBool)-\u003eLens'(Producer a b c)(Producer a b(Producer a b c))",
          "package": "pipes-parse",
          "signature": "(a-\u003eBool)-\u003eLens'(Producer a m x)(Producer a m(Producer a m x))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e is an improper lens that splits a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e into two \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003es\n    after a fixed number of elements\n\u003c/p\u003e",
          "module": "Pipes.Parse",
          "name": "splitAt",
          "package": "pipes-parse",
          "signature": "Int -\u003e Lens' (Producer a m x) (Producer a m (Producer a m x))",
          "source": "src/Pipes-Parse.html#splitAt",
          "type": "function"
        },
        "index": {
          "description": "splitAt is an improper lens that splits Producer into two Producer after fixed number of elements",
          "hierarchy": "Pipes Parse",
          "module": "Pipes.Parse",
          "name": "splitAt",
          "normalized": "Int-\u003eLens'(Producer a b c)(Producer a b(Producer a b c))",
          "package": "pipes-parse",
          "partial": "At",
          "signature": "Int-\u003eLens'(Producer a m x)(Producer a m(Producer a m x))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e signifies end of input\n\u003c/p\u003e",
          "module": "Pipes.Parse",
          "name": "toParser",
          "package": "pipes-parse",
          "signature": "Consumer (Maybe a) m r -\u003e Parser a m r",
          "source": "src/Pipes-Parse.html#toParser",
          "type": "function"
        },
        "index": {
          "description": "Convert Consumer to Parser Nothing signifies end of input",
          "hierarchy": "Pipes Parse",
          "module": "Pipes.Parse",
          "name": "toParser",
          "normalized": "Consumer(Maybe a)b c-\u003eParser a b c",
          "package": "pipes-parse",
          "partial": "Parser",
          "signature": "Consumer(Maybe a)m r-\u003eParser a m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:toParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a never-ending \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Parse",
          "name": "toParser_",
          "package": "pipes-parse",
          "signature": "Consumer a m X -\u003e Parser a m ()",
          "source": "src/Pipes-Parse.html#toParser_",
          "type": "function"
        },
        "index": {
          "description": "Convert never-ending Consumer to Parser",
          "hierarchy": "Pipes Parse",
          "module": "Pipes.Parse",
          "name": "toParser_",
          "normalized": "Consumer a b X-\u003eParser a b()",
          "package": "pipes-parse",
          "partial": "Parser",
          "signature": "Consumer a m X-\u003eParser a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:toParser_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush back an element onto the underlying \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Parse",
          "name": "unDraw",
          "package": "pipes-parse",
          "signature": "a -\u003e Parser a m ()",
          "source": "src/Pipes-Parse.html#unDraw",
          "type": "function"
        },
        "index": {
          "description": "Push back an element onto the underlying Producer",
          "hierarchy": "Pipes Parse",
          "module": "Pipes.Parse",
          "name": "unDraw",
          "normalized": "a-\u003eParser a b()",
          "package": "pipes-parse",
          "partial": "Draw",
          "signature": "a-\u003eParser a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-parse/docs/Pipes-Parse.html#v:unDraw"
      }
    }
  ]
]