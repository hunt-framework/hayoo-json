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
        "word": "Munkres"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Munkres version of the Hungarian Method for weighted minimal \n bipartite matching. \n The implementation is based on Robert A. Pilgrim's notes, \n \u003ca\u003ehttp://216.249.163.93/bob.pilgrim/445/munkres.html\u003c/a\u003e\n (mirror: \u003ca\u003ehttp://www.public.iastate.edu/~ddoty/HungarianAlgorithm.html\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Algorithm.Munkres",
          "name": "Munkres",
          "package": "Munkres",
          "source": "src/Data-Algorithm-Munkres.html",
          "type": "module"
        },
        "index": {
          "description": "The Munkres version of the Hungarian Method for weighted minimal bipartite matching The implementation is based on Robert Pilgrim notes http bob.pilgrim munkres.html mirror http www.public.iastate.edu ddoty HungarianAlgorithm.html",
          "hierarchy": "Data Algorithm Munkres",
          "module": "Data.Algorithm.Munkres",
          "name": "Munkres",
          "package": "Munkres",
          "partial": "Munkres",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Munkres/docs/Data-Algorithm-Munkres.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as 'hungarianMethod\u003cType\u003e', but uses boxed values (thus works with\n any data type which an instance of \u003ccode\u003e\u003ca\u003eReal\u003c/a\u003e\u003c/code\u003e). \n The usage of one the unboxed versions is recommended where possible, \n for performance reasons.\n\u003c/p\u003e",
          "module": "Data.Algorithm.Munkres",
          "name": "hungarianMethodBoxed",
          "package": "Munkres",
          "signature": "a (Int, Int) e -\u003e ([(Int, Int)], e)",
          "source": "src/Data-Algorithm-Munkres.html#hungarianMethodBoxed",
          "type": "function"
        },
        "index": {
          "description": "The same as hungarianMethod Type but uses boxed values thus works with any data type which an instance of Real The usage of one the unboxed versions is recommended where possible for performance reasons",
          "hierarchy": "Data Algorithm Munkres",
          "module": "Data.Algorithm.Munkres",
          "name": "hungarianMethodBoxed",
          "normalized": "a(Int,Int)b-\u003e([(Int,Int)],b)",
          "package": "Munkres",
          "partial": "Method Boxed",
          "signature": "a(Int,Int)e-\u003e([(Int,Int)],e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Munkres/docs/Data-Algorithm-Munkres.html#v:hungarianMethodBoxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algorithm.Munkres",
          "name": "hungarianMethodDouble",
          "package": "Munkres",
          "signature": "UArray (Int, Int) Double -\u003e ([(Int, Int)], Double)",
          "source": "src/Data-Algorithm-Munkres.html#hungarianMethodDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algorithm Munkres",
          "module": "Data.Algorithm.Munkres",
          "name": "hungarianMethodDouble",
          "normalized": "UArray(Int,Int)Double-\u003e([(Int,Int)],Double)",
          "package": "Munkres",
          "partial": "Method Double",
          "signature": "UArray(Int,Int)Double-\u003e([(Int,Int)],Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Munkres/docs/Data-Algorithm-Munkres.html#v:hungarianMethodDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algorithm.Munkres",
          "name": "hungarianMethodFloat",
          "package": "Munkres",
          "signature": "UArray (Int, Int) Float -\u003e ([(Int, Int)], Float)",
          "source": "src/Data-Algorithm-Munkres.html#hungarianMethodFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algorithm Munkres",
          "module": "Data.Algorithm.Munkres",
          "name": "hungarianMethodFloat",
          "normalized": "UArray(Int,Int)Float-\u003e([(Int,Int)],Float)",
          "package": "Munkres",
          "partial": "Method Float",
          "signature": "UArray(Int,Int)Float-\u003e([(Int,Int)],Float)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Munkres/docs/Data-Algorithm-Munkres.html#v:hungarianMethodFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNeeds a rectangular array of \u003cem\u003enonnegative\u003c/em\u003e weights, which\n encode the weights on the edges of a (complete) bipartitate graph.\n The indexing should start from \u003ccode\u003e(1,1)\u003c/code\u003e.\n Returns a minimal matching, and the cost of it.\n\u003c/p\u003e\u003cp\u003eUnfortunately, GHC is opposing hard the polymorphicity of this function. I think\n the main reasons for that is that the there is no \u003ccode\u003eUnboxed\u003c/code\u003e type class, and\n thus the contexts \u003ccode\u003eIArray UArray e\u003c/code\u003e and \u003ccode\u003eMArray (STUArray s) e (ST s)\u003c/code\u003e do not\n know about each other. (And I have problems with the \u003ccode\u003eforall s\u003c/code\u003e part, too).\n\u003c/p\u003e",
          "module": "Data.Algorithm.Munkres",
          "name": "hungarianMethodInt",
          "package": "Munkres",
          "signature": "UArray (Int, Int) Int -\u003e ([(Int, Int)], Int)",
          "source": "src/Data-Algorithm-Munkres.html#hungarianMethodInt",
          "type": "function"
        },
        "index": {
          "description": "Needs rectangular array of nonnegative weights which encode the weights on the edges of complete bipartitate graph The indexing should start from Returns minimal matching and the cost of it Unfortunately GHC is opposing hard the polymorphicity of this function think the main reasons for that is that the there is no Unboxed type class and thus the contexts IArray UArray and MArray STUArray ST do not know about each other And have problems with the forall part too",
          "hierarchy": "Data Algorithm Munkres",
          "module": "Data.Algorithm.Munkres",
          "name": "hungarianMethodInt",
          "normalized": "UArray(Int,Int)Int-\u003e([(Int,Int)],Int)",
          "package": "Munkres",
          "partial": "Method Int",
          "signature": "UArray(Int,Int)Int-\u003e([(Int,Int)],Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Munkres/docs/Data-Algorithm-Munkres.html#v:hungarianMethodInt"
      }
    }
  ]
]