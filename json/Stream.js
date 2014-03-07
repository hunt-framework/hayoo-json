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
        "word": "Stream"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStreams are infinite lists. Most operations on streams are\n completely analogous to the definition in Data.List.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Stream",
          "name": "Stream",
          "package": "Stream",
          "source": "src/Data-Stream.html",
          "type": "module"
        },
        "index": {
          "description": "Streams are infinite lists Most operations on streams are completely analogous to the definition in Data.List",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "Stream",
          "package": "Stream",
          "partial": "Stream",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infinite sequence.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: If you use any function from the \u003ccode\u003e Eq \u003c/code\u003e or \u003ccode\u003e Ord \u003c/code\u003e\n class to compare two equal streams, these functions will diverge.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "Stream",
          "package": "Stream",
          "source": "src/Data-Stream.html#Stream",
          "type": "data"
        },
        "index": {
          "description": "An infinite sequence Beware If you use any function from the Eq or Ord class to compare two equal streams these functions will diverge",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "Stream",
          "package": "Stream",
          "partial": "Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#t:Stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003exs !! n\u003c/code\u003e returns the element of the stream \u003ccode\u003exs\u003c/code\u003e at index\n \u003ccode\u003en\u003c/code\u003e. Note that the head of the stream has index 0.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: passing a negative integer as the first argument will cause\n an error.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "(!!)",
          "package": "Stream",
          "signature": "Stream a -\u003e Int -\u003e a",
          "source": "src/Data-Stream.html#%21%21",
          "type": "function"
        },
        "index": {
          "description": "xs returns the element of the stream xs at index Note that the head of the stream has index Beware passing negative integer as the first argument will cause an error",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "(!!) !!",
          "normalized": "Stream a-\u003eInt-\u003ea",
          "package": "Stream",
          "signature": "Stream a-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:-33--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e \u003c:\u003e \u003c/code\u003e operator is an infix version of the \u003ccode\u003e\u003ca\u003eCons\u003c/a\u003e\u003c/code\u003e\n constructor.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "(\u003c:\u003e)",
          "package": "Stream",
          "signature": "a -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Stream.html#%3C%3A%3E",
          "type": "function"
        },
        "index": {
          "description": "The operator is an infix version of the Cons constructor",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "(\u003c:\u003e) \u003c:\u003e",
          "normalized": "a-\u003eStream a-\u003eStream a",
          "package": "Stream",
          "signature": "a-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:-60-:-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Stream",
          "name": "Cons",
          "package": "Stream",
          "signature": "Cons a (Stream a)",
          "source": "src/Data-Stream.html#Stream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "Cons",
          "package": "Stream",
          "partial": "Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e function is equivalent to \u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e \u003ccode\u003enot . p\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "break",
          "package": "Stream",
          "signature": "(a -\u003e Bool) -\u003e Stream a -\u003e ([a], Stream a)",
          "source": "src/Data-Stream.html#break",
          "type": "function"
        },
        "index": {
          "description": "The break function is equivalent to span not",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "break",
          "normalized": "(a-\u003eBool)-\u003eStream a-\u003e([a],Stream a)",
          "package": "Stream",
          "signature": "(a-\u003eBool)-\u003eStream a-\u003e([a],Stream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecycle\u003c/a\u003e\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e returns the infinite repetition of \u003ccode\u003exs\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e cycle [1,2,3] = Cons 1 (Cons 2 (Cons 3 (Cons 1 (Cons 2 ...\n\u003c/pre\u003e",
          "module": "Data.Stream",
          "name": "cycle",
          "package": "Stream",
          "signature": "[a] -\u003e Stream a",
          "source": "src/Data-Stream.html#cycle",
          "type": "function"
        },
        "index": {
          "description": "cycle xs returns the infinite repetition of xs cycle Cons Cons Cons Cons Cons",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "cycle",
          "normalized": "[a]-\u003eStream a",
          "package": "Stream",
          "signature": "[a]-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e drops the first \u003ccode\u003en\u003c/code\u003e elements off the front of\n the sequence \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: passing a negative integer as the first argument will\n cause an error.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "drop",
          "package": "Stream",
          "signature": "Int -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Stream.html#drop",
          "type": "function"
        },
        "index": {
          "description": "drop xs drops the first elements off the front of the sequence xs Beware passing negative integer as the first argument will cause an error",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "drop",
          "normalized": "Int-\u003eStream a-\u003eStream a",
          "package": "Stream",
          "signature": "Int-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e returns the suffix remaining after\n \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: this function may diverge if every element of \u003ccode\u003exs\u003c/code\u003e\n satisfies \u003ccode\u003ep\u003c/code\u003e, e.g.  \u003ccode\u003edropWhile even (repeat 0)\u003c/code\u003e will loop.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "dropWhile",
          "package": "Stream",
          "signature": "(a -\u003e Bool) -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Stream.html#dropWhile",
          "type": "function"
        },
        "index": {
          "description": "dropWhile xs returns the suffix remaining after takeWhile xs Beware this function may diverge if every element of xs satisfies e.g dropWhile even repeat will loop",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "dropWhile",
          "normalized": "(a-\u003eBool)-\u003eStream a-\u003eStream a",
          "package": "Stream",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e function returns the index of the first element\n in the given stream which is equal (by \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e) to the query element,\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ex\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e will diverge if none of the elements\n of \u003ccode\u003exs\u003c/code\u003e equal \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "elemIndex",
          "package": "Stream",
          "signature": "a -\u003e Stream a -\u003e Int",
          "source": "src/Data-Stream.html#elemIndex",
          "type": "function"
        },
        "index": {
          "description": "The elemIndex function returns the index of the first element in the given stream which is equal by to the query element Beware elemIndex xs will diverge if none of the elements of xs equal",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "elemIndex",
          "normalized": "a-\u003eStream a-\u003eInt",
          "package": "Stream",
          "partial": "Index",
          "signature": "a-\u003eStream a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:elemIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eelemIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003eelemIndex\u003c/a\u003e\u003c/code\u003e, by returning the\n indices of all elements equal to the query element, in ascending order.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: \u003ccode\u003e\u003ca\u003eelemIndices\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ex\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e will diverge if any suffix of\n \u003ccode\u003exs\u003c/code\u003e does not contain \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "elemIndices",
          "package": "Stream",
          "signature": "a -\u003e Stream a -\u003e Stream Int",
          "source": "src/Data-Stream.html#elemIndices",
          "type": "function"
        },
        "index": {
          "description": "The elemIndices function extends elemIndex by returning the indices of all elements equal to the query element in ascending order Beware elemIndices xs will diverge if any suffix of xs does not contain",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "elemIndices",
          "normalized": "a-\u003eStream a-\u003eStream Int",
          "package": "Stream",
          "partial": "Indices",
          "signature": "a-\u003eStream a-\u003eStream Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:elemIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e, removes any elements from \u003ccode\u003exs\u003c/code\u003e that do not satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: this function may diverge if there is no element of\n \u003ccode\u003exs\u003c/code\u003e that satisfies \u003ccode\u003ep\u003c/code\u003e, e.g.  \u003ccode\u003efilter odd (repeat 0)\u003c/code\u003e will loop.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "filter",
          "package": "Stream",
          "signature": "(a -\u003e Bool) -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Stream.html#filter",
          "type": "function"
        },
        "index": {
          "description": "filter xs removes any elements from xs that do not satisfy Beware this function may diverge if there is no element of xs that satisfies e.g filter odd repeat will loop",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eStream a-\u003eStream a",
          "package": "Stream",
          "signature": "(a-\u003eBool)-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e function takes a predicate and a stream and returns\n the index of the first element in the stream that satisfies the predicate,\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e will diverge if none of the elements of\n \u003ccode\u003exs\u003c/code\u003e satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "findIndex",
          "package": "Stream",
          "signature": "(a -\u003e Bool) -\u003e Stream a -\u003e Int",
          "source": "src/Data-Stream.html#findIndex",
          "type": "function"
        },
        "index": {
          "description": "The findIndex function takes predicate and stream and returns the index of the first element in the stream that satisfies the predicate Beware findIndex xs will diverge if none of the elements of xs satisfy",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "findIndex",
          "normalized": "(a-\u003eBool)-\u003eStream a-\u003eInt",
          "package": "Stream",
          "partial": "Index",
          "signature": "(a-\u003eBool)-\u003eStream a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:findIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndices\u003c/a\u003e\u003c/code\u003e function extends \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e, by returning the\n indices of all elements satisfying the predicate, in ascending\n order.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: \u003ccode\u003e\u003ca\u003efindIndices\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e will diverge if all the elements\n of any suffix of \u003ccode\u003exs\u003c/code\u003e fails to satisfy \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "findIndices",
          "package": "Stream",
          "signature": "(a -\u003e Bool) -\u003e Stream a -\u003e Stream Int",
          "source": "src/Data-Stream.html#findIndices",
          "type": "function"
        },
        "index": {
          "description": "The findIndices function extends findIndex by returning the indices of all elements satisfying the predicate in ascending order Beware findIndices xs will diverge if all the elements of any suffix of xs fails to satisfy",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "findIndices",
          "normalized": "(a-\u003eBool)-\u003eStream a-\u003eStream Int",
          "package": "Stream",
          "partial": "Indices",
          "signature": "(a-\u003eBool)-\u003eStream a-\u003eStream Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:findIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e converts an infinite list to a\n stream.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: Passing a finite list, will cause an error.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "fromList",
          "package": "Stream",
          "signature": "[a] -\u003e Stream a",
          "source": "src/Data-Stream.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "The fromList converts an infinite list to stream Beware Passing finite list will cause an error",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "fromList",
          "normalized": "[a]-\u003eStream a",
          "package": "Stream",
          "partial": "List",
          "signature": "[a]-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e function takes a stream and returns a stream of\n lists such that flattening the resulting stream is equal to the\n argument.  Moreover, each sublist in the resulting stream\n contains only equal elements.  For example,\n\u003c/p\u003e\u003cpre\u003e group $ cycle \"Mississippi\" = \"M\" ::: \"i\" ::: \"ss\" ::: \"i\" ::: \"ss\" ::: \"i\" ::: \"pp\" ::: \"i\" ::: \"M\" ::: \"i\" ::: ...\n\u003c/pre\u003e",
          "module": "Data.Stream",
          "name": "group",
          "package": "Stream",
          "signature": "Stream a -\u003e Stream [a]",
          "source": "src/Data-Stream.html#group",
          "type": "function"
        },
        "index": {
          "description": "The group function takes stream and returns stream of lists such that flattening the resulting stream is equal to the argument Moreover each sublist in the resulting stream contains only equal elements For example group cycle Mississippi ss ss pp",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "group",
          "normalized": "Stream a-\u003eStream[a]",
          "package": "Stream",
          "signature": "Stream a-\u003eStream[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the first element of the sequence.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "head",
          "package": "Stream",
          "signature": "Stream a -\u003e a",
          "source": "src/Data-Stream.html#head",
          "type": "function"
        },
        "index": {
          "description": "Extract the first element of the sequence",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "head",
          "normalized": "Stream a-\u003ea",
          "package": "Stream",
          "signature": "Stream a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einits\u003c/a\u003e\u003c/code\u003e function takes a stream \u003ccode\u003exs\u003c/code\u003e and returns all the\n finite prefixes of \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that this \u003ccode\u003e\u003ca\u003einits\u003c/a\u003e\u003c/code\u003e is lazier then \u003ccode\u003eData.List.inits\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e inits _|_ = [] ::: _|_\n\u003c/pre\u003e\u003cp\u003ewhile for \u003ccode\u003eData.List.inits\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e inits _|_ = _|_\n\u003c/pre\u003e",
          "module": "Data.Stream",
          "name": "inits",
          "package": "Stream",
          "signature": "Stream a -\u003e Stream [a]",
          "source": "src/Data-Stream.html#inits",
          "type": "function"
        },
        "index": {
          "description": "The inits function takes stream xs and returns all the finite prefixes of xs Note that this inits is lazier then Data.List.inits inits while for Data.List.inits inits",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "inits",
          "normalized": "Stream a-\u003eStream[a]",
          "package": "Stream",
          "signature": "Stream a-\u003eStream[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:inits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterleave two Streams \u003ccode\u003exs\u003c/code\u003e and \u003ccode\u003eys\u003c/code\u003e, alternating elements\n from each list.\n\u003c/p\u003e\u003cpre\u003e [x1,x2,...] `interleave` [y1,y2,...] == [x1,y1,x2,y2,...]\n\u003c/pre\u003e",
          "module": "Data.Stream",
          "name": "interleave",
          "package": "Stream",
          "signature": "Stream a -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Stream.html#interleave",
          "type": "function"
        },
        "index": {
          "description": "Interleave two Streams xs and ys alternating elements from each list x1 x2 interleave y1 y2 x1 y1 x2 y2",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "interleave",
          "normalized": "Stream a-\u003eStream a-\u003eStream a",
          "package": "Stream",
          "signature": "Stream a-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:interleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ey\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e creates an alternating stream of\n elements from \u003ccode\u003exs\u003c/code\u003e and \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "intersperse",
          "package": "Stream",
          "signature": "a -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Stream.html#intersperse",
          "type": "function"
        },
        "index": {
          "description": "intersperse xs creates an alternating stream of elements from xs and",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "intersperse",
          "normalized": "a-\u003eStream a-\u003eStream a",
          "package": "Stream",
          "signature": "a-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eisPrefix\u003c/code\u003e function returns \u003ccode\u003eTrue\u003c/code\u003e if the first argument is\n a prefix of the second.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "isPrefixOf",
          "package": "Stream",
          "signature": "[a] -\u003e Stream a -\u003e Bool",
          "source": "src/Data-Stream.html#isPrefixOf",
          "type": "function"
        },
        "index": {
          "description": "The isPrefix function returns True if the first argument is prefix of the second",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "isPrefixOf",
          "normalized": "[a]-\u003eStream a-\u003eBool",
          "package": "Stream",
          "partial": "Prefix Of",
          "signature": "[a]-\u003eStream a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:isPrefixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eiterate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e \u003ccode\u003ex\u003c/code\u003e function produces the infinite sequence\n of repeated applications of \u003ccode\u003ef\u003c/code\u003e to \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e iterate f x = [x, f x, f (f x), ..]\n\u003c/pre\u003e",
          "module": "Data.Stream",
          "name": "iterate",
          "package": "Stream",
          "signature": "(a -\u003e a) -\u003e a -\u003e Stream a",
          "source": "src/Data-Stream.html#iterate",
          "type": "function"
        },
        "index": {
          "description": "iterate function produces the infinite sequence of repeated applications of to iterate",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "iterate",
          "normalized": "(a-\u003ea)-\u003ea-\u003eStream a",
          "package": "Stream",
          "signature": "(a-\u003ea)-\u003ea-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:iterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e function breaks a stream of characters into a list\n of strings at newline characters. The resulting strings do not\n contain newlines.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: if the stream of characters \u003ccode\u003exs\u003c/code\u003e does not contain\n newline characters, accessing the tail of \u003ccode\u003elines xs\u003c/code\u003e will loop.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "lines",
          "package": "Stream",
          "signature": "Stream Char -\u003e Stream String",
          "source": "src/Data-Stream.html#lines",
          "type": "function"
        },
        "index": {
          "description": "The lines function breaks stream of characters into list of strings at newline characters The resulting strings do not contain newlines Beware if the stream of characters xs does not contain newline characters accessing the tail of lines xs will loop",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "lines",
          "normalized": "Stream Char-\u003eStream String",
          "package": "Stream",
          "signature": "Stream Char-\u003eStream String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function uniformly over all elements of a sequence.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "map",
          "package": "Stream",
          "signature": "(a -\u003e b) -\u003e Stream a -\u003e Stream b",
          "source": "src/Data-Stream.html#map",
          "type": "function"
        },
        "index": {
          "description": "Apply function uniformly over all elements of sequence",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eStream a-\u003eStream b",
          "package": "Stream",
          "signature": "(a-\u003eb)-\u003eStream a-\u003eStream b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e function takes a predicate \u003ccode\u003ep\u003c/code\u003e and a stream\n \u003ccode\u003exs\u003c/code\u003e, and returns a pair of streams. The first stream corresponds\n to the elements of \u003ccode\u003exs\u003c/code\u003e for which \u003ccode\u003ep\u003c/code\u003e holds; the second stream\n corresponds to the elements of \u003ccode\u003exs\u003c/code\u003e for which \u003ccode\u003ep\u003c/code\u003e does not hold.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: One of the elements of the tuple may be undefined. For\n example, \u003ccode\u003efst (partition even (repeat 0)) == repeat 0\u003c/code\u003e; on the\n other hand \u003ccode\u003esnd (partition even (repeat 0))\u003c/code\u003e is undefined.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "partition",
          "package": "Stream",
          "signature": "(a -\u003e Bool) -\u003e Stream a -\u003e (Stream a, Stream a)",
          "source": "src/Data-Stream.html#partition",
          "type": "function"
        },
        "index": {
          "description": "The partition function takes predicate and stream xs and returns pair of streams The first stream corresponds to the elements of xs for which holds the second stream corresponds to the elements of xs for which does not hold Beware One of the elements of the tuple may be undefined For example fst partition even repeat repeat on the other hand snd partition even repeat is undefined",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eStream a-\u003e(Stream a,Stream a)",
          "package": "Stream",
          "signature": "(a-\u003eBool)-\u003eStream a-\u003e(Stream a,Stream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eprefix\u003c/a\u003e\u003c/code\u003e function adds a list as a prefix to an existing\n stream. If the list is infinite, it is converted to a Stream and\n the second argument is ignored.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "prefix",
          "package": "Stream",
          "signature": "[a] -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Stream.html#prefix",
          "type": "function"
        },
        "index": {
          "description": "The prefix function adds list as prefix to an existing stream If the list is infinite it is converted to Stream and the second argument is ignored",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "prefix",
          "normalized": "[a]-\u003eStream a-\u003eStream a",
          "package": "Stream",
          "signature": "[a]-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erepeat\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ex\u003c/code\u003e returns a constant stream, where all elements are\n equal to \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "repeat",
          "package": "Stream",
          "signature": "a -\u003e Stream a",
          "source": "src/Data-Stream.html#repeat",
          "type": "function"
        },
        "index": {
          "description": "repeat returns constant stream where all elements are equal to",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "repeat",
          "normalized": "a-\u003eStream a",
          "package": "Stream",
          "signature": "a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escan\u003c/a\u003e\u003c/code\u003e yields a stream of successive reduced values from:\n\u003c/p\u003e\u003cpre\u003e scan f z [x1, x2, ...] == [z, z `f` x1, (z `f` x1) `f` x2, ...]\n\u003c/pre\u003e",
          "module": "Data.Stream",
          "name": "scan",
          "package": "Stream",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Stream b -\u003e Stream a",
          "source": "src/Data-Stream.html#scan",
          "type": "function"
        },
        "index": {
          "description": "scan yields stream of successive reduced values from scan x1 x2 x1 x1 x2",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "scan",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eStream b-\u003eStream a",
          "package": "Stream",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eStream b-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:scan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003escan'\u003c/code\u003e is a strict scan.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "scan'",
          "package": "Stream",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e Stream b -\u003e Stream a",
          "source": "src/Data-Stream.html#scan%27",
          "type": "function"
        },
        "index": {
          "description": "scan is strict scan",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "scan'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eStream b-\u003eStream a",
          "package": "Stream",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eStream b-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:scan-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003escan1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escan\u003c/a\u003e\u003c/code\u003e that has no starting value argument:\n\u003c/p\u003e\u003cpre\u003e scan1 f [x1, x2, ...] == [x1, x1 `f` x2, ...]\n\u003c/pre\u003e",
          "module": "Data.Stream",
          "name": "scan1",
          "package": "Stream",
          "signature": "(a -\u003e a -\u003e a) -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Stream.html#scan1",
          "type": "function"
        },
        "index": {
          "description": "scan1 is variant of scan that has no starting value argument scan1 x1 x2 x1 x1 x2",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "scan1",
          "normalized": "(a-\u003ea-\u003ea)-\u003eStream a-\u003eStream a",
          "package": "Stream",
          "signature": "(a-\u003ea-\u003ea)-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:scan1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003escan1'\u003c/code\u003e is a strict scan that has no starting value.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "scan1'",
          "package": "Stream",
          "signature": "(a -\u003e a -\u003e a) -\u003e Stream a -\u003e Stream a",
          "source": "src/Data-Stream.html#scan1%27",
          "type": "function"
        },
        "index": {
          "description": "scan1 is strict scan that has no starting value",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "scan1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eStream a-\u003eStream a",
          "package": "Stream",
          "signature": "(a-\u003ea-\u003ea)-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:scan1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e returns the longest prefix of \u003ccode\u003exs\u003c/code\u003e that satisfies\n \u003ccode\u003ep\u003c/code\u003e, together with the remainder of the stream.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "span",
          "package": "Stream",
          "signature": "(a -\u003e Bool) -\u003e Stream a -\u003e ([a], Stream a)",
          "source": "src/Data-Stream.html#span",
          "type": "function"
        },
        "index": {
          "description": "span xs returns the longest prefix of xs that satisfies together with the remainder of the stream",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "span",
          "normalized": "(a-\u003eBool)-\u003eStream a-\u003e([a],Stream a)",
          "package": "Stream",
          "signature": "(a-\u003eBool)-\u003eStream a-\u003e([a],Stream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e function takes an integer \u003ccode\u003en\u003c/code\u003e and a stream \u003ccode\u003exs\u003c/code\u003e\n and returns a pair consisting of the prefix of \u003ccode\u003exs\u003c/code\u003e of length\n \u003ccode\u003en\u003c/code\u003e and the remaining stream immediately following this prefix.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: passing a negative integer as the first argument will\n cause an error.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "splitAt",
          "package": "Stream",
          "signature": "Int -\u003e Stream a -\u003e ([a], Stream a)",
          "source": "src/Data-Stream.html#splitAt",
          "type": "function"
        },
        "index": {
          "description": "The splitAt function takes an integer and stream xs and returns pair consisting of the prefix of xs of length and the remaining stream immediately following this prefix Beware passing negative integer as the first argument will cause an error",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "splitAt",
          "normalized": "Int-\u003eStream a-\u003e([a],Stream a)",
          "package": "Stream",
          "partial": "At",
          "signature": "Int-\u003eStream a-\u003e([a],Stream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the sequence following the head of the stream.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "tail",
          "package": "Stream",
          "signature": "Stream a -\u003e Stream a",
          "source": "src/Data-Stream.html#tail",
          "type": "function"
        },
        "index": {
          "description": "Extract the sequence following the head of the stream",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "tail",
          "normalized": "Stream a-\u003eStream a",
          "package": "Stream",
          "signature": "Stream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etails\u003c/a\u003e\u003c/code\u003e function takes a stream \u003ccode\u003exs\u003c/code\u003e and returns all the\n suffixes of \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "tails",
          "package": "Stream",
          "signature": "Stream a -\u003e Stream (Stream a)",
          "source": "src/Data-Stream.html#tails",
          "type": "function"
        },
        "index": {
          "description": "The tails function takes stream xs and returns all the suffixes of xs",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "tails",
          "normalized": "Stream a-\u003eStream(Stream a)",
          "package": "Stream",
          "signature": "Stream a-\u003eStream(Stream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:tails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e returns the first \u003ccode\u003en\u003c/code\u003e elements of \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: passing a negative integer as the first argument will\n cause an error.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "take",
          "package": "Stream",
          "signature": "Int -\u003e Stream a -\u003e [a]",
          "source": "src/Data-Stream.html#take",
          "type": "function"
        },
        "index": {
          "description": "take xs returns the first elements of xs Beware passing negative integer as the first argument will cause an error",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "take",
          "normalized": "Int-\u003eStream a-\u003e[a]",
          "package": "Stream",
          "signature": "Int-\u003eStream a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e \u003ccode\u003exs\u003c/code\u003e returns the longest prefix of the stream\n \u003ccode\u003exs\u003c/code\u003e for which the predicate \u003ccode\u003ep\u003c/code\u003e holds.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "takeWhile",
          "package": "Stream",
          "signature": "(a -\u003e Bool) -\u003e Stream a -\u003e [a]",
          "source": "src/Data-Stream.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "takeWhile xs returns the longest prefix of the stream xs for which the predicate holds",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "takeWhile",
          "normalized": "(a-\u003eBool)-\u003eStream a-\u003e[a]",
          "package": "Stream",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eStream a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e converts a stream into an infinite list.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "toList",
          "package": "Stream",
          "signature": "Stream a -\u003e [a]",
          "source": "src/Data-Stream.html#toList",
          "type": "function"
        },
        "index": {
          "description": "The toList converts stream into an infinite list",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "toList",
          "normalized": "Stream a-\u003e[a]",
          "package": "Stream",
          "partial": "List",
          "signature": "Stream a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e computes the transposition of a stream of streams.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "transpose",
          "package": "Stream",
          "signature": "Stream (Stream a) -\u003e Stream (Stream a)",
          "source": "src/Data-Stream.html#transpose",
          "type": "function"
        },
        "index": {
          "description": "transpose computes the transposition of stream of streams",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "transpose",
          "normalized": "Stream(Stream a)-\u003eStream(Stream a)",
          "package": "Stream",
          "signature": "Stream(Stream a)-\u003eStream(Stream a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe unfold function is similar to the unfold for lists. Note\n there is no base case: all streams must be infinite.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "unfold",
          "package": "Stream",
          "signature": "(c -\u003e (a, c)) -\u003e c -\u003e Stream a",
          "source": "src/Data-Stream.html#unfold",
          "type": "function"
        },
        "index": {
          "description": "The unfold function is similar to the unfold for lists Note there is no base case all streams must be infinite",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "unfold",
          "normalized": "(a-\u003e(b,a))-\u003ea-\u003eStream b",
          "package": "Stream",
          "signature": "(c-\u003e(a,c))-\u003ec-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:unfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e function is an inverse operation to \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e. It\n joins lines, after appending a terminating newline to each.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "unlines",
          "package": "Stream",
          "signature": "Stream String -\u003e Stream Char",
          "source": "src/Data-Stream.html#unlines",
          "type": "function"
        },
        "index": {
          "description": "The unlines function is an inverse operation to lines It joins lines after appending terminating newline to each",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "unlines",
          "normalized": "Stream String-\u003eStream Char",
          "package": "Stream",
          "signature": "Stream String-\u003eStream Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:unlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunwords\u003c/a\u003e\u003c/code\u003e function is an inverse operation to \u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e. It\n joins words with separating spaces.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "unwords",
          "package": "Stream",
          "signature": "Stream String -\u003e Stream Char",
          "source": "src/Data-Stream.html#unwords",
          "type": "function"
        },
        "index": {
          "description": "The unwords function is an inverse operation to words It joins words with separating spaces",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "unwords",
          "normalized": "Stream String-\u003eStream Char",
          "package": "Stream",
          "signature": "Stream String-\u003eStream Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:unwords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip\u003c/a\u003e\u003c/code\u003e function is the inverse of the \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "unzip",
          "package": "Stream",
          "signature": "Stream (a, b) -\u003e (Stream a, Stream b)",
          "source": "src/Data-Stream.html#unzip",
          "type": "function"
        },
        "index": {
          "description": "The unzip function is the inverse of the zip function",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "unzip",
          "normalized": "Stream(a,b)-\u003e(Stream a,Stream b)",
          "package": "Stream",
          "signature": "Stream(a,b)-\u003e(Stream a,Stream b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:unzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eunzip3\u003c/a\u003e\u003c/code\u003e function is the inverse of the \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "unzip3",
          "package": "Stream",
          "signature": "Stream (a, b, c) -\u003e (Stream a, Stream b, Stream c)",
          "source": "src/Data-Stream.html#unzip3",
          "type": "function"
        },
        "index": {
          "description": "The unzip3 function is the inverse of the zip function",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "unzip3",
          "normalized": "Stream(a,b,c)-\u003e(Stream a,Stream b,Stream c)",
          "package": "Stream",
          "signature": "Stream(a,b,c)-\u003e(Stream a,Stream b,Stream c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:unzip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e function breaks a stream of characters into a\n stream of words, which were delimited by white space.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eBeware\u003c/em\u003e: if the stream of characters \u003ccode\u003exs\u003c/code\u003e does not contain white\n space, accessing the tail of \u003ccode\u003ewords xs\u003c/code\u003e will loop.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "words",
          "package": "Stream",
          "signature": "Stream Char -\u003e Stream String",
          "source": "src/Data-Stream.html#words",
          "type": "function"
        },
        "index": {
          "description": "The words function breaks stream of characters into stream of words which were delimited by white space Beware if the stream of characters xs does not contain white space accessing the tail of words xs will loop",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "words",
          "normalized": "Stream Char-\u003eStream String",
          "package": "Stream",
          "signature": "Stream Char-\u003eStream String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:words"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e function takes two streams and returns the stream of\n pairs obtained by pairing elements at the same position in both\n argument streams.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "zip",
          "package": "Stream",
          "signature": "Stream a -\u003e Stream b -\u003e Stream (a, b)",
          "source": "src/Data-Stream.html#zip",
          "type": "function"
        },
        "index": {
          "description": "The zip function takes two streams and returns the stream of pairs obtained by pairing elements at the same position in both argument streams",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "zip",
          "normalized": "Stream a-\u003eStream b-\u003eStream(a,b)",
          "package": "Stream",
          "signature": "Stream a-\u003eStream b-\u003eStream(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:zip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezip3\u003c/a\u003e\u003c/code\u003e function behaves as the \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e function, but works on\n three streams.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "zip3",
          "package": "Stream",
          "signature": "Stream a -\u003e Stream b -\u003e Stream c -\u003e Stream (a, b, c)",
          "source": "src/Data-Stream.html#zip3",
          "type": "function"
        },
        "index": {
          "description": "The zip3 function behaves as the zip function but works on three streams",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "zip3",
          "normalized": "Stream a-\u003eStream b-\u003eStream c-\u003eStream(a,b,c)",
          "package": "Stream",
          "signature": "Stream a-\u003eStream b-\u003eStream c-\u003eStream(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:zip3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e function generalizes \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e. Rather than tupling\n the functions, the elements are combined using the function\n passed as the first argument to \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "zipWith",
          "package": "Stream",
          "signature": "(a -\u003e b -\u003e c) -\u003e Stream a -\u003e Stream b -\u003e Stream c",
          "source": "src/Data-Stream.html#zipWith",
          "type": "function"
        },
        "index": {
          "description": "The zipWith function generalizes zip Rather than tupling the functions the elements are combined using the function passed as the first argument to zipWith",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "zipWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eStream a-\u003eStream b-\u003eStream c",
          "package": "Stream",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eStream a-\u003eStream b-\u003eStream c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:zipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ezipWith3\u003c/a\u003e\u003c/code\u003e behaves as \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e but takes three stream\n arguments.\n\u003c/p\u003e",
          "module": "Data.Stream",
          "name": "zipWith3",
          "package": "Stream",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e Stream a -\u003e Stream b -\u003e Stream c -\u003e Stream d",
          "source": "src/Data-Stream.html#zipWith3",
          "type": "function"
        },
        "index": {
          "description": "The zipWith3 behaves as zipWith but takes three stream arguments",
          "hierarchy": "Data Stream",
          "module": "Data.Stream",
          "name": "zipWith3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eStream a-\u003eStream b-\u003eStream c-\u003eStream d",
          "package": "Stream",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003eStream a-\u003eStream b-\u003eStream c-\u003eStream d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Stream/docs/Data-Stream.html#v:zipWith3"
      }
    }
  ]
]