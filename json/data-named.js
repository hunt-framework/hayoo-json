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
        "word": "data-named"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of a graph with each internal node identified by a\n unique key and each leaf represented by a position in the sentence.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Named.Graph",
          "name": "Graph",
          "package": "data-named",
          "source": "src/Data-Named-Graph.html",
          "type": "module"
        },
        "index": {
          "description": "Implementation of graph with each internal node identified by unique key and each leaf represented by position in the sentence",
          "hierarchy": "Data Named Graph",
          "module": "Data.Named.Graph",
          "name": "Graph",
          "package": "data-named",
          "partial": "Graph",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Graph.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA graph over a sentence.\n\u003c/p\u003e",
          "module": "Data.Named.Graph",
          "name": "Graph",
          "package": "data-named",
          "source": "src/Data-Named-Graph.html#Graph",
          "type": "data"
        },
        "index": {
          "description": "graph over sentence",
          "hierarchy": "Data Named Graph",
          "module": "Data.Named.Graph",
          "name": "Graph",
          "package": "data-named",
          "partial": "Graph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Graph.html#t:Graph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Named.Graph",
          "name": "Graph",
          "package": "data-named",
          "signature": "Graph",
          "source": "src/Data-Named-Graph.html#Graph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Named Graph",
          "module": "Data.Named.Graph",
          "name": "Graph",
          "package": "data-named",
          "partial": "Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Graph.html#v:Graph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Named.Graph",
          "name": "bounds",
          "package": "data-named",
          "signature": "(w, w)",
          "source": "src/Data-Named-Graph.html#Graph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Named Graph",
          "module": "Data.Named.Graph",
          "name": "bounds",
          "normalized": "(a,a)",
          "package": "data-named",
          "signature": "(w,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Graph.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Named.Graph",
          "name": "edgeMap",
          "package": "data-named",
          "signature": "Map n [Either n w]",
          "source": "src/Data-Named-Graph.html#Graph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Named Graph",
          "module": "Data.Named.Graph",
          "name": "edgeMap",
          "normalized": "Map a[Either a b]",
          "package": "data-named",
          "partial": "Map",
          "signature": "Map n[Either n w]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Graph.html#v:edgeMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet keys of adjacent nodes for the given node key.\n\u003c/p\u003e",
          "module": "Data.Named.Graph",
          "name": "edges",
          "package": "data-named",
          "signature": "Graph n w -\u003e n -\u003e [Either n w]",
          "source": "src/Data-Named-Graph.html#edges",
          "type": "function"
        },
        "index": {
          "description": "Get keys of adjacent nodes for the given node key",
          "hierarchy": "Data Named Graph",
          "module": "Data.Named.Graph",
          "name": "edges",
          "normalized": "Graph a b-\u003ea-\u003e[Either a b]",
          "package": "data-named",
          "signature": "Graph n w-\u003en-\u003e[Either n w]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Graph.html#v:edges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a graph given the bounds and list of edges.\n\u003c/p\u003e",
          "module": "Data.Named.Graph",
          "name": "mkGraph",
          "package": "data-named",
          "signature": "(w, w) -\u003e [(n, [Either n w])] -\u003e Graph n w",
          "source": "src/Data-Named-Graph.html#mkGraph",
          "type": "function"
        },
        "index": {
          "description": "Make graph given the bounds and list of edges",
          "hierarchy": "Data Named Graph",
          "module": "Data.Named.Graph",
          "name": "mkGraph",
          "normalized": "(a,a)-\u003e[(b,[Either b a])]-\u003eGraph b a",
          "package": "data-named",
          "partial": "Graph",
          "signature": "(w,w)-\u003e[(n,[Either n w])]-\u003eGraph n w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Graph.html#v:mkGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all graph roots (i.e. nodes with no parents).\n\u003c/p\u003e",
          "module": "Data.Named.Graph",
          "name": "roots",
          "package": "data-named",
          "signature": "Graph n w -\u003e [n]",
          "source": "src/Data-Named-Graph.html#roots",
          "type": "function"
        },
        "index": {
          "description": "Return all graph roots i.e nodes with no parents",
          "hierarchy": "Data Named Graph",
          "module": "Data.Named.Graph",
          "name": "roots",
          "normalized": "Graph a b-\u003e[a]",
          "package": "data-named",
          "signature": "Graph n w-\u003e[n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Graph.html#v:roots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform graph into a disjoint forest, i.e. with no mutually\n overlapping trees.\n\u003c/p\u003e",
          "module": "Data.Named.Graph",
          "name": "toForest",
          "package": "data-named",
          "signature": "Graph n w -\u003e NeForest n w",
          "source": "src/Data-Named-Graph.html#toForest",
          "type": "function"
        },
        "index": {
          "description": "Transform graph into disjoint forest i.e with no mutually overlapping trees",
          "hierarchy": "Data Named Graph",
          "module": "Data.Named.Graph",
          "name": "toForest",
          "normalized": "Graph a b-\u003eNeForest a b",
          "package": "data-named",
          "partial": "Forest",
          "signature": "Graph n w-\u003eNeForest n w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Graph.html#v:toForest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIOB encoding method extended to forests.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:m Data.Named.IOB Data.Named.Tree Text.Named.Enamex Data.Text.Lazy\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet enamex = pack \"\u003cx\u003ew1.1\\\\ w1.2\u003c/x\u003e w2 \u003cy\u003e\u003cz\u003ew3\u003c/z\u003e w4\u003c/y\u003e\"\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eputStr . drawForest . mapForest show . parseForest $ enamex\n\u003c/code\u003e\u003c/strong\u003eLeft \"x\"\n|\n`- Right \"w1.1 w1.2\"\n,\nRight \"w2\"\n,\nLeft \"y\"\n|\n+- Left \"z\"\n|  |\n|  `- Right \"w3\"\n|\n`- Right \"w4\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emapM_ print . encodeForest . parseForest $ enamex\n\u003c/code\u003e\u003c/strong\u003eIOB {word = \"w1.1 w1.2\", label = [B \"x\"]}\nIOB {word = \"w2\", label = []}\nIOB {word = \"w3\", label = [B \"y\",B \"z\"]}\nIOB {word = \"w4\", label = [I \"y\"]}\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Named.IOB",
          "name": "IOB",
          "package": "data-named",
          "source": "src/Data-Named-IOB.html",
          "type": "module"
        },
        "index": {
          "description": "IOB encoding method extended to forests Example Data.Named.IOB Data.Named.Tree Text.Named.Enamex Data.Text.Lazy let enamex pack w1.1 w1.2 w2 w3 w4 putStr drawForest mapForest show parseForest enamex Left Right w1.1 w1.2 Right w2 Left Left Right w3 Right w4 mapM print encodeForest parseForest enamex IOB word w1.1 w1.2 label IOB word w2 label IOB word w3 label IOB word w4 label",
          "hierarchy": "Data Named IOB",
          "module": "Data.Named.IOB",
          "name": "IOB",
          "package": "data-named",
          "partial": "IOB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-IOB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eAtom\u003c/a\u003e\u003c/code\u003e is the atomic label with additional marker.\n\u003c/p\u003e",
          "module": "Data.Named.IOB",
          "name": "Atom",
          "package": "data-named",
          "source": "src/Data-Named-IOB.html#Atom",
          "type": "data"
        },
        "index": {
          "description": "An Atom is the atomic label with additional marker",
          "hierarchy": "Data Named IOB",
          "module": "Data.Named.IOB",
          "name": "Atom",
          "package": "data-named",
          "partial": "Atom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-IOB.html#t:Atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eIOB\u003c/a\u003e\u003c/code\u003e data structure consists of a word with a corresponding\n compound label.\n\u003c/p\u003e",
          "module": "Data.Named.IOB",
          "name": "IOB",
          "package": "data-named",
          "source": "src/Data-Named-IOB.html#IOB",
          "type": "data"
        },
        "index": {
          "description": "An IOB data structure consists of word with corresponding compound label",
          "hierarchy": "Data Named IOB",
          "module": "Data.Named.IOB",
          "name": "IOB",
          "package": "data-named",
          "partial": "IOB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-IOB.html#t:IOB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e consists of a list of atomic \u003ccode\u003e\u003ca\u003eAtom\u003c/a\u003e\u003c/code\u003e labels.\n\u003c/p\u003e",
          "module": "Data.Named.IOB",
          "name": "Label",
          "package": "data-named",
          "source": "src/Data-Named-IOB.html#Label",
          "type": "type"
        },
        "index": {
          "description": "Label consists of list of atomic Atom labels",
          "hierarchy": "Data Named IOB",
          "module": "Data.Named.IOB",
          "name": "Label",
          "package": "data-named",
          "partial": "Label",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-IOB.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBeginning marker\n\u003c/p\u003e",
          "module": "Data.Named.IOB",
          "name": "B",
          "package": "data-named",
          "signature": "B a",
          "source": "src/Data-Named-IOB.html#Atom",
          "type": "function"
        },
        "index": {
          "description": "Beginning marker",
          "hierarchy": "Data Named IOB",
          "module": "Data.Named.IOB",
          "name": "B",
          "package": "data-named",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-IOB.html#v:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInside marker \n\u003c/p\u003e",
          "module": "Data.Named.IOB",
          "name": "I",
          "package": "data-named",
          "signature": "I a",
          "source": "src/Data-Named-IOB.html#Atom",
          "type": "function"
        },
        "index": {
          "description": "Inside marker",
          "hierarchy": "Data Named IOB",
          "module": "Data.Named.IOB",
          "name": "I",
          "package": "data-named",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-IOB.html#v:I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Named.IOB",
          "name": "IOB",
          "package": "data-named",
          "signature": "IOB",
          "source": "src/Data-Named-IOB.html#IOB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Named IOB",
          "module": "Data.Named.IOB",
          "name": "IOB",
          "package": "data-named",
          "partial": "IOB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-IOB.html#v:IOB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode the forest using the IOB method.\n\u003c/p\u003e",
          "module": "Data.Named.IOB",
          "name": "decodeForest",
          "package": "data-named",
          "signature": "[IOB w a] -\u003e NeForest a w",
          "source": "src/Data-Named-IOB.html#decodeForest",
          "type": "function"
        },
        "index": {
          "description": "Decode the forest using the IOB method",
          "hierarchy": "Data Named IOB",
          "module": "Data.Named.IOB",
          "name": "decodeForest",
          "normalized": "[IOB a b]-\u003eNeForest b a",
          "package": "data-named",
          "partial": "Forest",
          "signature": "[IOB w a]-\u003eNeForest a w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-IOB.html#v:decodeForest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode the forest with the IOB method.\n\u003c/p\u003e",
          "module": "Data.Named.IOB",
          "name": "encodeForest",
          "package": "data-named",
          "signature": "NeForest a w -\u003e [IOB w a]",
          "source": "src/Data-Named-IOB.html#encodeForest",
          "type": "function"
        },
        "index": {
          "description": "Encode the forest with the IOB method",
          "hierarchy": "Data Named IOB",
          "module": "Data.Named.IOB",
          "name": "encodeForest",
          "normalized": "NeForest a b-\u003e[IOB b a]",
          "package": "data-named",
          "partial": "Forest",
          "signature": "NeForest a w-\u003e[IOB w a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-IOB.html#v:encodeForest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Named.IOB",
          "name": "label",
          "package": "data-named",
          "signature": "Label a",
          "source": "src/Data-Named-IOB.html#IOB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Named IOB",
          "module": "Data.Named.IOB",
          "name": "label",
          "package": "data-named",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-IOB.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Named.IOB",
          "name": "word",
          "package": "data-named",
          "signature": "w",
          "source": "src/Data-Named-IOB.html#IOB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Named IOB",
          "module": "Data.Named.IOB",
          "name": "word",
          "package": "data-named",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-IOB.html#v:word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWorking with NE trees and forests.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Named.Tree",
          "name": "Tree",
          "package": "data-named",
          "source": "src/Data-Named-Tree.html",
          "type": "module"
        },
        "index": {
          "description": "Working with NE trees and forests",
          "hierarchy": "Data Named Tree",
          "module": "Data.Named.Tree",
          "name": "Tree",
          "package": "data-named",
          "partial": "Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA forest with a values in internal nodes and b values in leaves.\n\u003c/p\u003e",
          "module": "Data.Named.Tree",
          "name": "NeForest",
          "package": "data-named",
          "source": "src/Data-Named-Tree.html#NeForest",
          "type": "type"
        },
        "index": {
          "description": "forest with values in internal nodes and values in leaves",
          "hierarchy": "Data Named Tree",
          "module": "Data.Named.Tree",
          "name": "NeForest",
          "package": "data-named",
          "partial": "Ne Forest",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#t:NeForest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA tree with a values in internal nodes and b values in leaves.\n\u003c/p\u003e",
          "module": "Data.Named.Tree",
          "name": "NeTree",
          "package": "data-named",
          "source": "src/Data-Named-Tree.html#NeTree",
          "type": "type"
        },
        "index": {
          "description": "tree with values in internal nodes and values in leaves",
          "hierarchy": "Data Named Tree",
          "module": "Data.Named.Tree",
          "name": "NeTree",
          "package": "data-named",
          "partial": "Ne Tree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#t:NeTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpanning of a tree.\n\u003c/p\u003e",
          "module": "Data.Named.Tree",
          "name": "Span",
          "package": "data-named",
          "source": "src/Data-Named-Tree.html#Span",
          "type": "data"
        },
        "index": {
          "description": "Spanning of tree",
          "hierarchy": "Data Named Tree",
          "module": "Data.Named.Tree",
          "name": "Span",
          "package": "data-named",
          "partial": "Span",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#t:Span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinimum span overlapping both input spans.\n\u003c/p\u003e",
          "module": "Data.Named.Tree",
          "name": "(\u003c\u003e)",
          "package": "data-named",
          "signature": "Span w -\u003e Span w -\u003e Span w",
          "source": "src/Data-Named-Tree.html#%3C%3E",
          "type": "function"
        },
        "index": {
          "description": "Minimum span overlapping both input spans",
          "hierarchy": "Data Named Tree",
          "module": "Data.Named.Tree",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "Span a-\u003eSpan a-\u003eSpan a",
          "package": "data-named",
          "signature": "Span w-\u003eSpan w-\u003eSpan w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Named.Tree",
          "name": "Span",
          "package": "data-named",
          "signature": "Span",
          "source": "src/Data-Named-Tree.html#Span",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Named Tree",
          "module": "Data.Named.Tree",
          "name": "Span",
          "package": "data-named",
          "partial": "Span",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:Span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Named.Tree",
          "name": "beg",
          "package": "data-named",
          "signature": "w",
          "source": "src/Data-Named-Tree.html#Span",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Named Tree",
          "module": "Data.Named.Tree",
          "name": "beg",
          "package": "data-named",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:beg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Named.Tree",
          "name": "end",
          "package": "data-named",
          "signature": "w",
          "source": "src/Data-Named-Tree.html#Span",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Named Tree",
          "module": "Data.Named.Tree",
          "name": "end",
          "package": "data-named",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:end"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup leaves with respect to the given equality function.\n\u003c/p\u003e",
          "module": "Data.Named.Tree",
          "name": "groupForestLeaves",
          "package": "data-named",
          "signature": "(b -\u003e b -\u003e Bool) -\u003e NeForest a b -\u003e NeForest a [b]",
          "source": "src/Data-Named-Tree.html#groupForestLeaves",
          "type": "function"
        },
        "index": {
          "description": "Group leaves with respect to the given equality function",
          "hierarchy": "Data Named Tree",
          "module": "Data.Named.Tree",
          "name": "groupForestLeaves",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eNeForest b a-\u003eNeForest b[a]",
          "package": "data-named",
          "partial": "Forest Leaves",
          "signature": "(b-\u003eb-\u003eBool)-\u003eNeForest a b-\u003eNeForest a[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:groupForestLeaves"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup leaves with respect to the given equality function.\n\u003c/p\u003e",
          "module": "Data.Named.Tree",
          "name": "groupTreeLeaves",
          "package": "data-named",
          "signature": "(b -\u003e b -\u003e Bool) -\u003e NeTree a b -\u003e NeTree a [b]",
          "source": "src/Data-Named-Tree.html#groupTreeLeaves",
          "type": "function"
        },
        "index": {
          "description": "Group leaves with respect to the given equality function",
          "hierarchy": "Data Named Tree",
          "module": "Data.Named.Tree",
          "name": "groupTreeLeaves",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eNeTree b a-\u003eNeTree b[a]",
          "package": "data-named",
          "partial": "Tree Leaves",
          "signature": "(b-\u003eb-\u003eBool)-\u003eNeTree a b-\u003eNeTree a[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:groupTreeLeaves"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake span for a leaf node.\n\u003c/p\u003e",
          "module": "Data.Named.Tree",
          "name": "leafSpan",
          "package": "data-named",
          "signature": "w -\u003e Span w",
          "source": "src/Data-Named-Tree.html#leafSpan",
          "type": "function"
        },
        "index": {
          "description": "Make span for leaf node",
          "hierarchy": "Data Named Tree",
          "module": "Data.Named.Tree",
          "name": "leafSpan",
          "normalized": "a-\u003eSpan a",
          "package": "data-named",
          "partial": "Span",
          "signature": "w-\u003eSpan w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:leafSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap function over each tree from the forest.\n\u003c/p\u003e",
          "module": "Data.Named.Tree",
          "name": "mapForest",
          "package": "data-named",
          "signature": "(a -\u003e b) -\u003e Forest a -\u003e Forest b",
          "source": "src/Data-Named-Tree.html#mapForest",
          "type": "function"
        },
        "index": {
          "description": "Map function over each tree from the forest",
          "hierarchy": "Data Named Tree",
          "module": "Data.Named.Tree",
          "name": "mapForest",
          "normalized": "(a-\u003eb)-\u003eForest a-\u003eForest b",
          "package": "data-named",
          "partial": "Forest",
          "signature": "(a-\u003eb)-\u003eForest a-\u003eForest b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:mapForest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap function over the tree.\n\u003c/p\u003e",
          "module": "Data.Named.Tree",
          "name": "mapTree",
          "package": "data-named",
          "signature": "(a -\u003e b) -\u003e Tree a -\u003e Tree b",
          "source": "src/Data-Named-Tree.html#mapTree",
          "type": "function"
        },
        "index": {
          "description": "Map function over the tree",
          "hierarchy": "Data Named Tree",
          "module": "Data.Named.Tree",
          "name": "mapTree",
          "normalized": "(a-\u003eb)-\u003eTree a-\u003eTree b",
          "package": "data-named",
          "partial": "Tree",
          "signature": "(a-\u003eb)-\u003eTree a-\u003eTree b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:mapTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap one function over both node and leaf values.\n\u003c/p\u003e",
          "module": "Data.Named.Tree",
          "name": "onBoth",
          "package": "data-named",
          "signature": "(a -\u003e b) -\u003e Either a a -\u003e Either b b",
          "source": "src/Data-Named-Tree.html#onBoth",
          "type": "function"
        },
        "index": {
          "description": "Map one function over both node and leaf values",
          "hierarchy": "Data Named Tree",
          "module": "Data.Named.Tree",
          "name": "onBoth",
          "normalized": "(a-\u003eb)-\u003eEither a a-\u003eEither b b",
          "package": "data-named",
          "partial": "Both",
          "signature": "(a-\u003eb)-\u003eEither a a-\u003eEither b b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:onBoth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap the first function over internal node value\n and the second one over leaf value.\n\u003c/p\u003e",
          "module": "Data.Named.Tree",
          "name": "onEither",
          "package": "data-named",
          "signature": "(a -\u003e c) -\u003e (b -\u003e d) -\u003e Either a b -\u003e Either c d",
          "source": "src/Data-Named-Tree.html#onEither",
          "type": "function"
        },
        "index": {
          "description": "Map the first function over internal node value and the second one over leaf value",
          "hierarchy": "Data Named Tree",
          "module": "Data.Named.Tree",
          "name": "onEither",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003eEither a c-\u003eEither b d",
          "package": "data-named",
          "partial": "Either",
          "signature": "(a-\u003ec)-\u003e(b-\u003ed)-\u003eEither a b-\u003eEither c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:onEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap function over the leaf value.\n\u003c/p\u003e",
          "module": "Data.Named.Tree",
          "name": "onLeaf",
          "package": "data-named",
          "signature": "(a -\u003e b) -\u003e Either c a -\u003e Either c b",
          "source": "src/Data-Named-Tree.html#onLeaf",
          "type": "function"
        },
        "index": {
          "description": "Map function over the leaf value",
          "hierarchy": "Data Named Tree",
          "module": "Data.Named.Tree",
          "name": "onLeaf",
          "normalized": "(a-\u003eb)-\u003eEither c a-\u003eEither c b",
          "package": "data-named",
          "partial": "Leaf",
          "signature": "(a-\u003eb)-\u003eEither c a-\u003eEither c b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:onLeaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap function over the internal node value.\n\u003c/p\u003e",
          "module": "Data.Named.Tree",
          "name": "onNode",
          "package": "data-named",
          "signature": "(a -\u003e b) -\u003e Either a c -\u003e Either b c",
          "source": "src/Data-Named-Tree.html#onNode",
          "type": "function"
        },
        "index": {
          "description": "Map function over the internal node value",
          "hierarchy": "Data Named Tree",
          "module": "Data.Named.Tree",
          "name": "onNode",
          "normalized": "(a-\u003eb)-\u003eEither a c-\u003eEither b c",
          "package": "data-named",
          "partial": "Node",
          "signature": "(a-\u003eb)-\u003eEither a c-\u003eEither b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:onNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort the forest with respect to spanning info.\n\u003c/p\u003e",
          "module": "Data.Named.Tree",
          "name": "sortForest",
          "package": "data-named",
          "signature": "Forest (k, Span w) -\u003e Forest (k, Span w)",
          "source": "src/Data-Named-Tree.html#sortForest",
          "type": "function"
        },
        "index": {
          "description": "Sort the forest with respect to spanning info",
          "hierarchy": "Data Named Tree",
          "module": "Data.Named.Tree",
          "name": "sortForest",
          "normalized": "Forest(a,Span b)-\u003eForest(a,Span b)",
          "package": "data-named",
          "partial": "Forest",
          "signature": "Forest(k,Span w)-\u003eForest(k,Span w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:sortForest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort the tree with respect to spanning info.\n\u003c/p\u003e",
          "module": "Data.Named.Tree",
          "name": "sortTree",
          "package": "data-named",
          "signature": "Tree (k, Span w) -\u003e Tree (k, Span w)",
          "source": "src/Data-Named-Tree.html#sortTree",
          "type": "function"
        },
        "index": {
          "description": "Sort the tree with respect to spanning info",
          "hierarchy": "Data Named Tree",
          "module": "Data.Named.Tree",
          "name": "sortTree",
          "normalized": "Tree(a,Span b)-\u003eTree(a,Span b)",
          "package": "data-named",
          "partial": "Tree",
          "signature": "Tree(k,Span w)-\u003eTree(k,Span w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:sortTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet span of the span-annotated tree.\n\u003c/p\u003e",
          "module": "Data.Named.Tree",
          "name": "span",
          "package": "data-named",
          "signature": "Tree (a, Span w) -\u003e Span w",
          "source": "src/Data-Named-Tree.html#span",
          "type": "function"
        },
        "index": {
          "description": "Get span of the span-annotated tree",
          "hierarchy": "Data Named Tree",
          "module": "Data.Named.Tree",
          "name": "span",
          "normalized": "Tree(a,Span b)-\u003eSpan b",
          "package": "data-named",
          "signature": "Tree(a,Span w)-\u003eSpan w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotate forest nodes with spanning info.\n\u003c/p\u003e",
          "module": "Data.Named.Tree",
          "name": "spanForest",
          "package": "data-named",
          "signature": "Forest (Either n w) -\u003e Forest (Either n w, Span w)",
          "source": "src/Data-Named-Tree.html#spanForest",
          "type": "function"
        },
        "index": {
          "description": "Annotate forest nodes with spanning info",
          "hierarchy": "Data Named Tree",
          "module": "Data.Named.Tree",
          "name": "spanForest",
          "normalized": "Forest(Either a b)-\u003eForest(Either a b,Span b)",
          "package": "data-named",
          "partial": "Forest",
          "signature": "Forest(Either n w)-\u003eForest(Either n w,Span w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:spanForest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet of positions covered by the span.\n\u003c/p\u003e",
          "module": "Data.Named.Tree",
          "name": "spanSet",
          "package": "data-named",
          "signature": "Span w -\u003e Set w",
          "source": "src/Data-Named-Tree.html#spanSet",
          "type": "function"
        },
        "index": {
          "description": "Set of positions covered by the span",
          "hierarchy": "Data Named Tree",
          "module": "Data.Named.Tree",
          "name": "spanSet",
          "normalized": "Span a-\u003eSet a",
          "package": "data-named",
          "partial": "Set",
          "signature": "Span w-\u003eSet w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:spanSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotate tree nodes with spanning info given the function\n which assignes indices to leaf nodes.\n\u003c/p\u003e",
          "module": "Data.Named.Tree",
          "name": "spanTree",
          "package": "data-named",
          "signature": "Tree (Either n w) -\u003e Tree (Either n w, Span w)",
          "source": "src/Data-Named-Tree.html#spanTree",
          "type": "function"
        },
        "index": {
          "description": "Annotate tree nodes with spanning info given the function which assignes indices to leaf nodes",
          "hierarchy": "Data Named Tree",
          "module": "Data.Named.Tree",
          "name": "spanTree",
          "normalized": "Tree(Either a b)-\u003eTree(Either a b,Span b)",
          "package": "data-named",
          "partial": "Tree",
          "signature": "Tree(Either n w)-\u003eTree(Either n w,Span w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:spanTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove span annotations from the forest.\n\u003c/p\u003e",
          "module": "Data.Named.Tree",
          "name": "unSpanForest",
          "package": "data-named",
          "signature": "Forest (k, Span w) -\u003e Forest k",
          "source": "src/Data-Named-Tree.html#unSpanForest",
          "type": "function"
        },
        "index": {
          "description": "Remove span annotations from the forest",
          "hierarchy": "Data Named Tree",
          "module": "Data.Named.Tree",
          "name": "unSpanForest",
          "normalized": "Forest(a,Span b)-\u003eForest a",
          "package": "data-named",
          "partial": "Span Forest",
          "signature": "Forest(k,Span w)-\u003eForest k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:unSpanForest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove span annotations from the tree.\n\u003c/p\u003e",
          "module": "Data.Named.Tree",
          "name": "unSpanTree",
          "package": "data-named",
          "signature": "Tree (k, Span w) -\u003e Tree k",
          "source": "src/Data-Named-Tree.html#unSpanTree",
          "type": "function"
        },
        "index": {
          "description": "Remove span annotations from the tree",
          "hierarchy": "Data Named Tree",
          "module": "Data.Named.Tree",
          "name": "unSpanTree",
          "normalized": "Tree(a,Span b)-\u003eTree a",
          "package": "data-named",
          "partial": "Span Tree",
          "signature": "Tree(k,Span w)-\u003eTree k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:unSpanTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing text in the Enamex data format.  Each node is enclosed between\n    opening and closing tags with tag name representing the label and contents\n    representing children of the node.  Both leaf and label values should be\n    escaped by prepending the \\ character before special \u003e, \u003c, \\ and space\n    characters.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:m Text.Named.Enamex Data.Named.Tree Data.Text.Lazy\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet drawIt = putStr . drawForest . mapForest show . parseForest\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edrawIt $ pack \"\u003cx\u003ew1.1\\\\ w1.2\u003c/x\u003e \u003cy\u003e\u003cz\u003ew2\u003c/z\u003e w3\u003c/y\u003e\"\n\u003c/code\u003e\u003c/strong\u003eLeft \"x\"\n|\n`- Right \"w1.1 w1.2\"\n,\nLeft \"y\"\n|\n+- Left \"z\"\n|  |\n|  `- Right \"w2\"\n|\n`- Right \"w3\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.Named.Enamex",
          "name": "Enamex",
          "package": "data-named",
          "source": "src/Text-Named-Enamex.html",
          "type": "module"
        },
        "index": {
          "description": "Parsing text in the Enamex data format Each node is enclosed between opening and closing tags with tag name representing the label and contents representing children of the node Both leaf and label values should be escaped by prepending the character before special and space characters Example Text.Named.Enamex Data.Named.Tree Data.Text.Lazy let drawIt putStr drawForest mapForest show parseForest drawIt pack w1.1 w1.2 w2 w3 Left Right w1.1 w1.2 Left Left Right w2 Right w3",
          "hierarchy": "Text Named Enamex",
          "module": "Text.Named.Enamex",
          "name": "Enamex",
          "package": "data-named",
          "partial": "Enamex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Text-Named-Enamex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the enamex file.\n\u003c/p\u003e",
          "module": "Text.Named.Enamex",
          "name": "parseEnamex",
          "package": "data-named",
          "signature": "Text -\u003e [NeForest Text Text]",
          "source": "src/Text-Named-Enamex.html#parseEnamex",
          "type": "function"
        },
        "index": {
          "description": "Parse the enamex file",
          "hierarchy": "Text Named Enamex",
          "module": "Text.Named.Enamex",
          "name": "parseEnamex",
          "normalized": "Text-\u003e[NeForest Text Text]",
          "package": "data-named",
          "partial": "Enamex",
          "signature": "Text-\u003e[NeForest Text Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Text-Named-Enamex.html#v:parseEnamex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the enamex forest.\n\u003c/p\u003e",
          "module": "Text.Named.Enamex",
          "name": "parseForest",
          "package": "data-named",
          "signature": "Text -\u003e NeForest Text Text",
          "source": "src/Text-Named-Enamex.html#parseForest",
          "type": "function"
        },
        "index": {
          "description": "Parse the enamex forest",
          "hierarchy": "Text Named Enamex",
          "module": "Text.Named.Enamex",
          "name": "parseForest",
          "normalized": "Text-\u003eNeForest Text Text",
          "package": "data-named",
          "partial": "Forest",
          "signature": "Text-\u003eNeForest Text Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Text-Named-Enamex.html#v:parseForest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow the enamex file.\n\u003c/p\u003e",
          "module": "Text.Named.Enamex",
          "name": "showEnamex",
          "package": "data-named",
          "signature": "[NeForest Text Text] -\u003e Text",
          "source": "src/Text-Named-Enamex.html#showEnamex",
          "type": "function"
        },
        "index": {
          "description": "Show the enamex file",
          "hierarchy": "Text Named Enamex",
          "module": "Text.Named.Enamex",
          "name": "showEnamex",
          "normalized": "[NeForest Text Text]-\u003eText",
          "package": "data-named",
          "partial": "Enamex",
          "signature": "[NeForest Text Text]-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Text-Named-Enamex.html#v:showEnamex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow the forest.\n\u003c/p\u003e",
          "module": "Text.Named.Enamex",
          "name": "showForest",
          "package": "data-named",
          "signature": "NeForest Text Text -\u003e Text",
          "source": "src/Text-Named-Enamex.html#showForest",
          "type": "function"
        },
        "index": {
          "description": "Show the forest",
          "hierarchy": "Text Named Enamex",
          "module": "Text.Named.Enamex",
          "name": "showForest",
          "normalized": "NeForest Text Text-\u003eText",
          "package": "data-named",
          "partial": "Forest",
          "signature": "NeForest Text Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-named/docs/Text-Named-Enamex.html#v:showForest"
      }
    }
  ]
]