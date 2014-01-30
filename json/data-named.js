[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Graph.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of a graph with each internal node identified by a\n unique key and each leaf represented by a position in the sentence.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Named.Graph",
        "fct-package": "data-named",
        "fct-signature": "module",
        "fct-source": "src/Data-Named-Graph.html",
        "fct-type": "module",
        "title": "Graph"
      },
      "index": {
        "description": "Implementation of graph with each internal node identified by unique key and each leaf represented by position in the sentence",
        "hierarchy": "Data Named Graph",
        "module": "Data.Named.Graph",
        "name": "Graph",
        "normalized": "",
        "package": "data-named",
        "partial": "Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Graph.html#t:Graph",
      "description": {
        "fct-descr": "\u003cp\u003eA graph over a sentence.\n\u003c/p\u003e",
        "fct-module": "Data.Named.Graph",
        "fct-package": "data-named",
        "fct-signature": "data",
        "fct-source": "src/Data-Named-Graph.html#Graph",
        "fct-type": "data",
        "title": "Graph"
      },
      "index": {
        "description": "graph over sentence",
        "hierarchy": "Data Named Graph",
        "module": "Data.Named.Graph",
        "name": "Graph",
        "normalized": "",
        "package": "data-named",
        "partial": "Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Graph.html#v:Graph",
      "description": {
        "fct-module": "Data.Named.Graph",
        "fct-package": "data-named",
        "fct-signature": "Graph",
        "fct-source": "src/Data-Named-Graph.html#Graph",
        "fct-type": "function",
        "title": "Graph"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Named Graph",
        "module": "Data.Named.Graph",
        "name": "Graph",
        "normalized": "",
        "package": "data-named",
        "partial": "Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Graph.html#v:bounds",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Named.Graph",
        "fct-package": "data-named",
        "fct-signature": "(w, w)",
        "fct-source": "src/Data-Named-Graph.html#Graph",
        "fct-type": "function",
        "title": "bounds"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Named Graph",
        "module": "Data.Named.Graph",
        "name": "bounds",
        "normalized": "(a,a)",
        "package": "data-named",
        "partial": "",
        "signature": "(w,w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Graph.html#v:edgeMap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Named.Graph",
        "fct-package": "data-named",
        "fct-signature": "Map n [Either n w]",
        "fct-source": "src/Data-Named-Graph.html#Graph",
        "fct-type": "function",
        "title": "edgeMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Named Graph",
        "module": "Data.Named.Graph",
        "name": "edgeMap",
        "normalized": "Map a[Either a b]",
        "package": "data-named",
        "partial": "Map",
        "signature": "Map n[Either n w]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Graph.html#v:edges",
      "description": {
        "fct-descr": "\u003cp\u003eGet keys of adjacent nodes for the given node key.\n\u003c/p\u003e",
        "fct-module": "Data.Named.Graph",
        "fct-package": "data-named",
        "fct-signature": "Graph n w -\u003e n -\u003e [Either n w]",
        "fct-source": "src/Data-Named-Graph.html#edges",
        "fct-type": "function",
        "title": "edges"
      },
      "index": {
        "description": "Get keys of adjacent nodes for the given node key",
        "hierarchy": "Data Named Graph",
        "module": "Data.Named.Graph",
        "name": "edges",
        "normalized": "Graph a b-\u003ea-\u003e[Either a b]",
        "package": "data-named",
        "partial": "",
        "signature": "Graph n w-\u003en-\u003e[Either n w]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Graph.html#v:mkGraph",
      "description": {
        "fct-descr": "\u003cp\u003eMake a graph given the bounds and list of edges.\n\u003c/p\u003e",
        "fct-module": "Data.Named.Graph",
        "fct-package": "data-named",
        "fct-signature": "(w, w) -\u003e [(n, [Either n w])] -\u003e Graph n w",
        "fct-source": "src/Data-Named-Graph.html#mkGraph",
        "fct-type": "function",
        "title": "mkGraph"
      },
      "index": {
        "description": "Make graph given the bounds and list of edges",
        "hierarchy": "Data Named Graph",
        "module": "Data.Named.Graph",
        "name": "mkGraph",
        "normalized": "(a,a)-\u003e[(b,[Either b a])]-\u003eGraph b a",
        "package": "data-named",
        "partial": "Graph",
        "signature": "(w,w)-\u003e[(n,[Either n w])]-\u003eGraph n w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Graph.html#v:roots",
      "description": {
        "fct-descr": "\u003cp\u003eReturn all graph roots (i.e. nodes with no parents).\n\u003c/p\u003e",
        "fct-module": "Data.Named.Graph",
        "fct-package": "data-named",
        "fct-signature": "Graph n w -\u003e [n]",
        "fct-source": "src/Data-Named-Graph.html#roots",
        "fct-type": "function",
        "title": "roots"
      },
      "index": {
        "description": "Return all graph roots i.e nodes with no parents",
        "hierarchy": "Data Named Graph",
        "module": "Data.Named.Graph",
        "name": "roots",
        "normalized": "Graph a b-\u003e[a]",
        "package": "data-named",
        "partial": "",
        "signature": "Graph n w-\u003e[n]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Graph.html#v:toForest",
      "description": {
        "fct-descr": "\u003cp\u003eTransform graph into a disjoint forest, i.e. with no mutually\n overlapping trees.\n\u003c/p\u003e",
        "fct-module": "Data.Named.Graph",
        "fct-package": "data-named",
        "fct-signature": "Graph n w -\u003e NeForest n w",
        "fct-source": "src/Data-Named-Graph.html#toForest",
        "fct-type": "function",
        "title": "toForest"
      },
      "index": {
        "description": "Transform graph into disjoint forest i.e with no mutually overlapping trees",
        "hierarchy": "Data Named Graph",
        "module": "Data.Named.Graph",
        "name": "toForest",
        "normalized": "Graph a b-\u003eNeForest a b",
        "package": "data-named",
        "partial": "Forest",
        "signature": "Graph n w-\u003eNeForest n w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-IOB.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIOB encoding method extended to forests.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:m Data.Named.IOB Data.Named.Tree Text.Named.Enamex Data.Text.Lazy\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet enamex = pack \"\u003cx\u003ew1.1\\\\ w1.2\u003c/x\u003e w2 \u003cy\u003e\u003cz\u003ew3\u003c/z\u003e w4\u003c/y\u003e\"\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eputStr . drawForest . mapForest show . parseForest $ enamex\n\u003c/code\u003e\u003c/strong\u003eLeft \"x\"\n|\n`- Right \"w1.1 w1.2\"\n,\nRight \"w2\"\n,\nLeft \"y\"\n|\n+- Left \"z\"\n|  |\n|  `- Right \"w3\"\n|\n`- Right \"w4\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emapM_ print . encodeForest . parseForest $ enamex\n\u003c/code\u003e\u003c/strong\u003eIOB {word = \"w1.1 w1.2\", label = [B \"x\"]}\nIOB {word = \"w2\", label = []}\nIOB {word = \"w3\", label = [B \"y\",B \"z\"]}\nIOB {word = \"w4\", label = [I \"y\"]}\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Named.IOB",
        "fct-package": "data-named",
        "fct-signature": "module",
        "fct-source": "src/Data-Named-IOB.html",
        "fct-type": "module",
        "title": "IOB"
      },
      "index": {
        "description": "IOB encoding method extended to forests Example Data.Named.IOB Data.Named.Tree Text.Named.Enamex Data.Text.Lazy let enamex pack w1.1 w1.2 w2 w3 w4 putStr drawForest mapForest show parseForest enamex Left Right w1.1 w1.2 Right w2 Left Left Right w3 Right w4 mapM print encodeForest parseForest enamex IOB word w1.1 w1.2 label IOB word w2 label IOB word w3 label IOB word w4 label",
        "hierarchy": "Data Named IOB",
        "module": "Data.Named.IOB",
        "name": "IOB",
        "normalized": "",
        "package": "data-named",
        "partial": "IOB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-IOB.html#t:Atom",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eAtom\u003c/a\u003e\u003c/code\u003e is the atomic label with additional marker.\n\u003c/p\u003e",
        "fct-module": "Data.Named.IOB",
        "fct-package": "data-named",
        "fct-signature": "data",
        "fct-source": "src/Data-Named-IOB.html#Atom",
        "fct-type": "data",
        "title": "Atom"
      },
      "index": {
        "description": "An Atom is the atomic label with additional marker",
        "hierarchy": "Data Named IOB",
        "module": "Data.Named.IOB",
        "name": "Atom",
        "normalized": "",
        "package": "data-named",
        "partial": "Atom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-IOB.html#t:IOB",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eIOB\u003c/a\u003e\u003c/code\u003e data structure consists of a word with a corresponding\n compound label.\n\u003c/p\u003e",
        "fct-module": "Data.Named.IOB",
        "fct-package": "data-named",
        "fct-signature": "data",
        "fct-source": "src/Data-Named-IOB.html#IOB",
        "fct-type": "data",
        "title": "IOB"
      },
      "index": {
        "description": "An IOB data structure consists of word with corresponding compound label",
        "hierarchy": "Data Named IOB",
        "module": "Data.Named.IOB",
        "name": "IOB",
        "normalized": "",
        "package": "data-named",
        "partial": "IOB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-IOB.html#t:Label",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e consists of a list of atomic \u003ccode\u003e\u003ca\u003eAtom\u003c/a\u003e\u003c/code\u003e labels.\n\u003c/p\u003e",
        "fct-module": "Data.Named.IOB",
        "fct-package": "data-named",
        "fct-signature": "type",
        "fct-source": "src/Data-Named-IOB.html#Label",
        "fct-type": "type",
        "title": "Label"
      },
      "index": {
        "description": "Label consists of list of atomic Atom labels",
        "hierarchy": "Data Named IOB",
        "module": "Data.Named.IOB",
        "name": "Label",
        "normalized": "",
        "package": "data-named",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-IOB.html#v:B",
      "description": {
        "fct-descr": "\u003cp\u003eBeginning marker\n\u003c/p\u003e",
        "fct-module": "Data.Named.IOB",
        "fct-package": "data-named",
        "fct-signature": "B a",
        "fct-source": "src/Data-Named-IOB.html#Atom",
        "fct-type": "function",
        "title": "B"
      },
      "index": {
        "description": "Beginning marker",
        "hierarchy": "Data Named IOB",
        "module": "Data.Named.IOB",
        "name": "B",
        "normalized": "",
        "package": "data-named",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-IOB.html#v:I",
      "description": {
        "fct-descr": "\u003cp\u003eInside marker \n\u003c/p\u003e",
        "fct-module": "Data.Named.IOB",
        "fct-package": "data-named",
        "fct-signature": "I a",
        "fct-source": "src/Data-Named-IOB.html#Atom",
        "fct-type": "function",
        "title": "I"
      },
      "index": {
        "description": "Inside marker",
        "hierarchy": "Data Named IOB",
        "module": "Data.Named.IOB",
        "name": "I",
        "normalized": "",
        "package": "data-named",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-IOB.html#v:IOB",
      "description": {
        "fct-module": "Data.Named.IOB",
        "fct-package": "data-named",
        "fct-signature": "IOB",
        "fct-source": "src/Data-Named-IOB.html#IOB",
        "fct-type": "function",
        "title": "IOB"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Named IOB",
        "module": "Data.Named.IOB",
        "name": "IOB",
        "normalized": "",
        "package": "data-named",
        "partial": "IOB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-IOB.html#v:decodeForest",
      "description": {
        "fct-descr": "\u003cp\u003eDecode the forest using the IOB method.\n\u003c/p\u003e",
        "fct-module": "Data.Named.IOB",
        "fct-package": "data-named",
        "fct-signature": "[IOB w a] -\u003e NeForest a w",
        "fct-source": "src/Data-Named-IOB.html#decodeForest",
        "fct-type": "function",
        "title": "decodeForest"
      },
      "index": {
        "description": "Decode the forest using the IOB method",
        "hierarchy": "Data Named IOB",
        "module": "Data.Named.IOB",
        "name": "decodeForest",
        "normalized": "[IOB a b]-\u003eNeForest b a",
        "package": "data-named",
        "partial": "Forest",
        "signature": "[IOB w a]-\u003eNeForest a w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-IOB.html#v:encodeForest",
      "description": {
        "fct-descr": "\u003cp\u003eEncode the forest with the IOB method.\n\u003c/p\u003e",
        "fct-module": "Data.Named.IOB",
        "fct-package": "data-named",
        "fct-signature": "NeForest a w -\u003e [IOB w a]",
        "fct-source": "src/Data-Named-IOB.html#encodeForest",
        "fct-type": "function",
        "title": "encodeForest"
      },
      "index": {
        "description": "Encode the forest with the IOB method",
        "hierarchy": "Data Named IOB",
        "module": "Data.Named.IOB",
        "name": "encodeForest",
        "normalized": "NeForest a b-\u003e[IOB b a]",
        "package": "data-named",
        "partial": "Forest",
        "signature": "NeForest a w-\u003e[IOB w a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-IOB.html#v:label",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Named.IOB",
        "fct-package": "data-named",
        "fct-signature": "Label a",
        "fct-source": "src/Data-Named-IOB.html#IOB",
        "fct-type": "function",
        "title": "label"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Named IOB",
        "module": "Data.Named.IOB",
        "name": "label",
        "normalized": "",
        "package": "data-named",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-IOB.html#v:word",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Named.IOB",
        "fct-package": "data-named",
        "fct-signature": "w",
        "fct-source": "src/Data-Named-IOB.html#IOB",
        "fct-type": "function",
        "title": "word"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Named IOB",
        "module": "Data.Named.IOB",
        "name": "word",
        "normalized": "",
        "package": "data-named",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWorking with NE trees and forests.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Named.Tree",
        "fct-package": "data-named",
        "fct-signature": "module",
        "fct-source": "src/Data-Named-Tree.html",
        "fct-type": "module",
        "title": "Tree"
      },
      "index": {
        "description": "Working with NE trees and forests",
        "hierarchy": "Data Named Tree",
        "module": "Data.Named.Tree",
        "name": "Tree",
        "normalized": "",
        "package": "data-named",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#t:NeForest",
      "description": {
        "fct-descr": "\u003cp\u003eA forest with a values in internal nodes and b values in leaves.\n\u003c/p\u003e",
        "fct-module": "Data.Named.Tree",
        "fct-package": "data-named",
        "fct-signature": "type",
        "fct-source": "src/Data-Named-Tree.html#NeForest",
        "fct-type": "type",
        "title": "NeForest"
      },
      "index": {
        "description": "forest with values in internal nodes and values in leaves",
        "hierarchy": "Data Named Tree",
        "module": "Data.Named.Tree",
        "name": "NeForest",
        "normalized": "",
        "package": "data-named",
        "partial": "Ne Forest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#t:NeTree",
      "description": {
        "fct-descr": "\u003cp\u003eA tree with a values in internal nodes and b values in leaves.\n\u003c/p\u003e",
        "fct-module": "Data.Named.Tree",
        "fct-package": "data-named",
        "fct-signature": "type",
        "fct-source": "src/Data-Named-Tree.html#NeTree",
        "fct-type": "type",
        "title": "NeTree"
      },
      "index": {
        "description": "tree with values in internal nodes and values in leaves",
        "hierarchy": "Data Named Tree",
        "module": "Data.Named.Tree",
        "name": "NeTree",
        "normalized": "",
        "package": "data-named",
        "partial": "Ne Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#t:Span",
      "description": {
        "fct-descr": "\u003cp\u003eSpanning of a tree.\n\u003c/p\u003e",
        "fct-module": "Data.Named.Tree",
        "fct-package": "data-named",
        "fct-signature": "data",
        "fct-source": "src/Data-Named-Tree.html#Span",
        "fct-type": "data",
        "title": "Span"
      },
      "index": {
        "description": "Spanning of tree",
        "hierarchy": "Data Named Tree",
        "module": "Data.Named.Tree",
        "name": "Span",
        "normalized": "",
        "package": "data-named",
        "partial": "Span",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:-60--62-",
      "description": {
        "fct-descr": "\u003cp\u003eMinimum span overlapping both input spans.\n\u003c/p\u003e",
        "fct-module": "Data.Named.Tree",
        "fct-package": "data-named",
        "fct-signature": "Span w -\u003e Span w -\u003e Span w",
        "fct-source": "src/Data-Named-Tree.html#%3C%3E",
        "fct-type": "function",
        "title": "(\u003c\u003e)"
      },
      "index": {
        "description": "Minimum span overlapping both input spans",
        "hierarchy": "Data Named Tree",
        "module": "Data.Named.Tree",
        "name": "(\u003c\u003e) \u003c\u003e",
        "normalized": "Span a-\u003eSpan a-\u003eSpan a",
        "package": "data-named",
        "partial": "",
        "signature": "Span w-\u003eSpan w-\u003eSpan w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:Span",
      "description": {
        "fct-module": "Data.Named.Tree",
        "fct-package": "data-named",
        "fct-signature": "Span",
        "fct-source": "src/Data-Named-Tree.html#Span",
        "fct-type": "function",
        "title": "Span"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Named Tree",
        "module": "Data.Named.Tree",
        "name": "Span",
        "normalized": "",
        "package": "data-named",
        "partial": "Span",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:beg",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Named.Tree",
        "fct-package": "data-named",
        "fct-signature": "w",
        "fct-source": "src/Data-Named-Tree.html#Span",
        "fct-type": "function",
        "title": "beg"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Named Tree",
        "module": "Data.Named.Tree",
        "name": "beg",
        "normalized": "",
        "package": "data-named",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:end",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Named.Tree",
        "fct-package": "data-named",
        "fct-signature": "w",
        "fct-source": "src/Data-Named-Tree.html#Span",
        "fct-type": "function",
        "title": "end"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Named Tree",
        "module": "Data.Named.Tree",
        "name": "end",
        "normalized": "",
        "package": "data-named",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:groupForestLeaves",
      "description": {
        "fct-descr": "\u003cp\u003eGroup leaves with respect to the given equality function.\n\u003c/p\u003e",
        "fct-module": "Data.Named.Tree",
        "fct-package": "data-named",
        "fct-signature": "(b -\u003e b -\u003e Bool) -\u003e NeForest a b -\u003e NeForest a [b]",
        "fct-source": "src/Data-Named-Tree.html#groupForestLeaves",
        "fct-type": "function",
        "title": "groupForestLeaves"
      },
      "index": {
        "description": "Group leaves with respect to the given equality function",
        "hierarchy": "Data Named Tree",
        "module": "Data.Named.Tree",
        "name": "groupForestLeaves",
        "normalized": "(a-\u003ea-\u003eBool)-\u003eNeForest b a-\u003eNeForest b[a]",
        "package": "data-named",
        "partial": "Forest Leaves",
        "signature": "(b-\u003eb-\u003eBool)-\u003eNeForest a b-\u003eNeForest a[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:groupTreeLeaves",
      "description": {
        "fct-descr": "\u003cp\u003eGroup leaves with respect to the given equality function.\n\u003c/p\u003e",
        "fct-module": "Data.Named.Tree",
        "fct-package": "data-named",
        "fct-signature": "(b -\u003e b -\u003e Bool) -\u003e NeTree a b -\u003e NeTree a [b]",
        "fct-source": "src/Data-Named-Tree.html#groupTreeLeaves",
        "fct-type": "function",
        "title": "groupTreeLeaves"
      },
      "index": {
        "description": "Group leaves with respect to the given equality function",
        "hierarchy": "Data Named Tree",
        "module": "Data.Named.Tree",
        "name": "groupTreeLeaves",
        "normalized": "(a-\u003ea-\u003eBool)-\u003eNeTree b a-\u003eNeTree b[a]",
        "package": "data-named",
        "partial": "Tree Leaves",
        "signature": "(b-\u003eb-\u003eBool)-\u003eNeTree a b-\u003eNeTree a[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:leafSpan",
      "description": {
        "fct-descr": "\u003cp\u003eMake span for a leaf node.\n\u003c/p\u003e",
        "fct-module": "Data.Named.Tree",
        "fct-package": "data-named",
        "fct-signature": "w -\u003e Span w",
        "fct-source": "src/Data-Named-Tree.html#leafSpan",
        "fct-type": "function",
        "title": "leafSpan"
      },
      "index": {
        "description": "Make span for leaf node",
        "hierarchy": "Data Named Tree",
        "module": "Data.Named.Tree",
        "name": "leafSpan",
        "normalized": "a-\u003eSpan a",
        "package": "data-named",
        "partial": "Span",
        "signature": "w-\u003eSpan w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:mapForest",
      "description": {
        "fct-descr": "\u003cp\u003eMap function over each tree from the forest.\n\u003c/p\u003e",
        "fct-module": "Data.Named.Tree",
        "fct-package": "data-named",
        "fct-signature": "(a -\u003e b) -\u003e Forest a -\u003e Forest b",
        "fct-source": "src/Data-Named-Tree.html#mapForest",
        "fct-type": "function",
        "title": "mapForest"
      },
      "index": {
        "description": "Map function over each tree from the forest",
        "hierarchy": "Data Named Tree",
        "module": "Data.Named.Tree",
        "name": "mapForest",
        "normalized": "(a-\u003eb)-\u003eForest a-\u003eForest b",
        "package": "data-named",
        "partial": "Forest",
        "signature": "(a-\u003eb)-\u003eForest a-\u003eForest b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:mapTree",
      "description": {
        "fct-descr": "\u003cp\u003eMap function over the tree.\n\u003c/p\u003e",
        "fct-module": "Data.Named.Tree",
        "fct-package": "data-named",
        "fct-signature": "(a -\u003e b) -\u003e Tree a -\u003e Tree b",
        "fct-source": "src/Data-Named-Tree.html#mapTree",
        "fct-type": "function",
        "title": "mapTree"
      },
      "index": {
        "description": "Map function over the tree",
        "hierarchy": "Data Named Tree",
        "module": "Data.Named.Tree",
        "name": "mapTree",
        "normalized": "(a-\u003eb)-\u003eTree a-\u003eTree b",
        "package": "data-named",
        "partial": "Tree",
        "signature": "(a-\u003eb)-\u003eTree a-\u003eTree b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:onBoth",
      "description": {
        "fct-descr": "\u003cp\u003eMap one function over both node and leaf values.\n\u003c/p\u003e",
        "fct-module": "Data.Named.Tree",
        "fct-package": "data-named",
        "fct-signature": "(a -\u003e b) -\u003e Either a a -\u003e Either b b",
        "fct-source": "src/Data-Named-Tree.html#onBoth",
        "fct-type": "function",
        "title": "onBoth"
      },
      "index": {
        "description": "Map one function over both node and leaf values",
        "hierarchy": "Data Named Tree",
        "module": "Data.Named.Tree",
        "name": "onBoth",
        "normalized": "(a-\u003eb)-\u003eEither a a-\u003eEither b b",
        "package": "data-named",
        "partial": "Both",
        "signature": "(a-\u003eb)-\u003eEither a a-\u003eEither b b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:onEither",
      "description": {
        "fct-descr": "\u003cp\u003eMap the first function over internal node value\n and the second one over leaf value.\n\u003c/p\u003e",
        "fct-module": "Data.Named.Tree",
        "fct-package": "data-named",
        "fct-signature": "(a -\u003e c) -\u003e (b -\u003e d) -\u003e Either a b -\u003e Either c d",
        "fct-source": "src/Data-Named-Tree.html#onEither",
        "fct-type": "function",
        "title": "onEither"
      },
      "index": {
        "description": "Map the first function over internal node value and the second one over leaf value",
        "hierarchy": "Data Named Tree",
        "module": "Data.Named.Tree",
        "name": "onEither",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003eEither a c-\u003eEither b d",
        "package": "data-named",
        "partial": "Either",
        "signature": "(a-\u003ec)-\u003e(b-\u003ed)-\u003eEither a b-\u003eEither c d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:onLeaf",
      "description": {
        "fct-descr": "\u003cp\u003eMap function over the leaf value.\n\u003c/p\u003e",
        "fct-module": "Data.Named.Tree",
        "fct-package": "data-named",
        "fct-signature": "(a -\u003e b) -\u003e Either c a -\u003e Either c b",
        "fct-source": "src/Data-Named-Tree.html#onLeaf",
        "fct-type": "function",
        "title": "onLeaf"
      },
      "index": {
        "description": "Map function over the leaf value",
        "hierarchy": "Data Named Tree",
        "module": "Data.Named.Tree",
        "name": "onLeaf",
        "normalized": "(a-\u003eb)-\u003eEither c a-\u003eEither c b",
        "package": "data-named",
        "partial": "Leaf",
        "signature": "(a-\u003eb)-\u003eEither c a-\u003eEither c b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:onNode",
      "description": {
        "fct-descr": "\u003cp\u003eMap function over the internal node value.\n\u003c/p\u003e",
        "fct-module": "Data.Named.Tree",
        "fct-package": "data-named",
        "fct-signature": "(a -\u003e b) -\u003e Either a c -\u003e Either b c",
        "fct-source": "src/Data-Named-Tree.html#onNode",
        "fct-type": "function",
        "title": "onNode"
      },
      "index": {
        "description": "Map function over the internal node value",
        "hierarchy": "Data Named Tree",
        "module": "Data.Named.Tree",
        "name": "onNode",
        "normalized": "(a-\u003eb)-\u003eEither a c-\u003eEither b c",
        "package": "data-named",
        "partial": "Node",
        "signature": "(a-\u003eb)-\u003eEither a c-\u003eEither b c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:sortForest",
      "description": {
        "fct-descr": "\u003cp\u003eSort the forest with respect to spanning info.\n\u003c/p\u003e",
        "fct-module": "Data.Named.Tree",
        "fct-package": "data-named",
        "fct-signature": "Forest (k, Span w) -\u003e Forest (k, Span w)",
        "fct-source": "src/Data-Named-Tree.html#sortForest",
        "fct-type": "function",
        "title": "sortForest"
      },
      "index": {
        "description": "Sort the forest with respect to spanning info",
        "hierarchy": "Data Named Tree",
        "module": "Data.Named.Tree",
        "name": "sortForest",
        "normalized": "Forest(a,Span b)-\u003eForest(a,Span b)",
        "package": "data-named",
        "partial": "Forest",
        "signature": "Forest(k,Span w)-\u003eForest(k,Span w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:sortTree",
      "description": {
        "fct-descr": "\u003cp\u003eSort the tree with respect to spanning info.\n\u003c/p\u003e",
        "fct-module": "Data.Named.Tree",
        "fct-package": "data-named",
        "fct-signature": "Tree (k, Span w) -\u003e Tree (k, Span w)",
        "fct-source": "src/Data-Named-Tree.html#sortTree",
        "fct-type": "function",
        "title": "sortTree"
      },
      "index": {
        "description": "Sort the tree with respect to spanning info",
        "hierarchy": "Data Named Tree",
        "module": "Data.Named.Tree",
        "name": "sortTree",
        "normalized": "Tree(a,Span b)-\u003eTree(a,Span b)",
        "package": "data-named",
        "partial": "Tree",
        "signature": "Tree(k,Span w)-\u003eTree(k,Span w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:span",
      "description": {
        "fct-descr": "\u003cp\u003eGet span of the span-annotated tree.\n\u003c/p\u003e",
        "fct-module": "Data.Named.Tree",
        "fct-package": "data-named",
        "fct-signature": "Tree (a, Span w) -\u003e Span w",
        "fct-source": "src/Data-Named-Tree.html#span",
        "fct-type": "function",
        "title": "span"
      },
      "index": {
        "description": "Get span of the span-annotated tree",
        "hierarchy": "Data Named Tree",
        "module": "Data.Named.Tree",
        "name": "span",
        "normalized": "Tree(a,Span b)-\u003eSpan b",
        "package": "data-named",
        "partial": "",
        "signature": "Tree(a,Span w)-\u003eSpan w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:spanForest",
      "description": {
        "fct-descr": "\u003cp\u003eAnnotate forest nodes with spanning info.\n\u003c/p\u003e",
        "fct-module": "Data.Named.Tree",
        "fct-package": "data-named",
        "fct-signature": "Forest (Either n w) -\u003e Forest (Either n w, Span w)",
        "fct-source": "src/Data-Named-Tree.html#spanForest",
        "fct-type": "function",
        "title": "spanForest"
      },
      "index": {
        "description": "Annotate forest nodes with spanning info",
        "hierarchy": "Data Named Tree",
        "module": "Data.Named.Tree",
        "name": "spanForest",
        "normalized": "Forest(Either a b)-\u003eForest(Either a b,Span b)",
        "package": "data-named",
        "partial": "Forest",
        "signature": "Forest(Either n w)-\u003eForest(Either n w,Span w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:spanSet",
      "description": {
        "fct-descr": "\u003cp\u003eSet of positions covered by the span.\n\u003c/p\u003e",
        "fct-module": "Data.Named.Tree",
        "fct-package": "data-named",
        "fct-signature": "Span w -\u003e Set w",
        "fct-source": "src/Data-Named-Tree.html#spanSet",
        "fct-type": "function",
        "title": "spanSet"
      },
      "index": {
        "description": "Set of positions covered by the span",
        "hierarchy": "Data Named Tree",
        "module": "Data.Named.Tree",
        "name": "spanSet",
        "normalized": "Span a-\u003eSet a",
        "package": "data-named",
        "partial": "Set",
        "signature": "Span w-\u003eSet w"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:spanTree",
      "description": {
        "fct-descr": "\u003cp\u003eAnnotate tree nodes with spanning info given the function\n which assignes indices to leaf nodes.\n\u003c/p\u003e",
        "fct-module": "Data.Named.Tree",
        "fct-package": "data-named",
        "fct-signature": "Tree (Either n w) -\u003e Tree (Either n w, Span w)",
        "fct-source": "src/Data-Named-Tree.html#spanTree",
        "fct-type": "function",
        "title": "spanTree"
      },
      "index": {
        "description": "Annotate tree nodes with spanning info given the function which assignes indices to leaf nodes",
        "hierarchy": "Data Named Tree",
        "module": "Data.Named.Tree",
        "name": "spanTree",
        "normalized": "Tree(Either a b)-\u003eTree(Either a b,Span b)",
        "package": "data-named",
        "partial": "Tree",
        "signature": "Tree(Either n w)-\u003eTree(Either n w,Span w)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:unSpanForest",
      "description": {
        "fct-descr": "\u003cp\u003eRemove span annotations from the forest.\n\u003c/p\u003e",
        "fct-module": "Data.Named.Tree",
        "fct-package": "data-named",
        "fct-signature": "Forest (k, Span w) -\u003e Forest k",
        "fct-source": "src/Data-Named-Tree.html#unSpanForest",
        "fct-type": "function",
        "title": "unSpanForest"
      },
      "index": {
        "description": "Remove span annotations from the forest",
        "hierarchy": "Data Named Tree",
        "module": "Data.Named.Tree",
        "name": "unSpanForest",
        "normalized": "Forest(a,Span b)-\u003eForest a",
        "package": "data-named",
        "partial": "Span Forest",
        "signature": "Forest(k,Span w)-\u003eForest k"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Data-Named-Tree.html#v:unSpanTree",
      "description": {
        "fct-descr": "\u003cp\u003eRemove span annotations from the tree.\n\u003c/p\u003e",
        "fct-module": "Data.Named.Tree",
        "fct-package": "data-named",
        "fct-signature": "Tree (k, Span w) -\u003e Tree k",
        "fct-source": "src/Data-Named-Tree.html#unSpanTree",
        "fct-type": "function",
        "title": "unSpanTree"
      },
      "index": {
        "description": "Remove span annotations from the tree",
        "hierarchy": "Data Named Tree",
        "module": "Data.Named.Tree",
        "name": "unSpanTree",
        "normalized": "Tree(a,Span b)-\u003eTree a",
        "package": "data-named",
        "partial": "Span Tree",
        "signature": "Tree(k,Span w)-\u003eTree k"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Text-Named-Enamex.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing text in the Enamex data format.  Each node is enclosed between\n    opening and closing tags with tag name representing the label and contents\n    representing children of the node.  Both leaf and label values should be\n    escaped by prepending the \\ character before special \u003e, \u003c, \\ and space\n    characters.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:m Text.Named.Enamex Data.Named.Tree Data.Text.Lazy\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet drawIt = putStr . drawForest . mapForest show . parseForest\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edrawIt $ pack \"\u003cx\u003ew1.1\\\\ w1.2\u003c/x\u003e \u003cy\u003e\u003cz\u003ew2\u003c/z\u003e w3\u003c/y\u003e\"\n\u003c/code\u003e\u003c/strong\u003eLeft \"x\"\n|\n`- Right \"w1.1 w1.2\"\n,\nLeft \"y\"\n|\n+- Left \"z\"\n|  |\n|  `- Right \"w2\"\n|\n`- Right \"w3\"\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Text.Named.Enamex",
        "fct-package": "data-named",
        "fct-signature": "module",
        "fct-source": "src/Text-Named-Enamex.html",
        "fct-type": "module",
        "title": "Enamex"
      },
      "index": {
        "description": "Parsing text in the Enamex data format Each node is enclosed between opening and closing tags with tag name representing the label and contents representing children of the node Both leaf and label values should be escaped by prepending the character before special and space characters Example Text.Named.Enamex Data.Named.Tree Data.Text.Lazy let drawIt putStr drawForest mapForest show parseForest drawIt pack w1.1 w1.2 w2 w3 Left Right w1.1 w1.2 Left Left Right w2 Right w3",
        "hierarchy": "Text Named Enamex",
        "module": "Text.Named.Enamex",
        "name": "Enamex",
        "normalized": "",
        "package": "data-named",
        "partial": "Enamex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Text-Named-Enamex.html#v:parseEnamex",
      "description": {
        "fct-descr": "\u003cp\u003eParse the enamex file.\n\u003c/p\u003e",
        "fct-module": "Text.Named.Enamex",
        "fct-package": "data-named",
        "fct-signature": "Text -\u003e [NeForest Text Text]",
        "fct-source": "src/Text-Named-Enamex.html#parseEnamex",
        "fct-type": "function",
        "title": "parseEnamex"
      },
      "index": {
        "description": "Parse the enamex file",
        "hierarchy": "Text Named Enamex",
        "module": "Text.Named.Enamex",
        "name": "parseEnamex",
        "normalized": "Text-\u003e[NeForest Text Text]",
        "package": "data-named",
        "partial": "Enamex",
        "signature": "Text-\u003e[NeForest Text Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Text-Named-Enamex.html#v:parseForest",
      "description": {
        "fct-descr": "\u003cp\u003eParse the enamex forest.\n\u003c/p\u003e",
        "fct-module": "Text.Named.Enamex",
        "fct-package": "data-named",
        "fct-signature": "Text -\u003e NeForest Text Text",
        "fct-source": "src/Text-Named-Enamex.html#parseForest",
        "fct-type": "function",
        "title": "parseForest"
      },
      "index": {
        "description": "Parse the enamex forest",
        "hierarchy": "Text Named Enamex",
        "module": "Text.Named.Enamex",
        "name": "parseForest",
        "normalized": "Text-\u003eNeForest Text Text",
        "package": "data-named",
        "partial": "Forest",
        "signature": "Text-\u003eNeForest Text Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Text-Named-Enamex.html#v:showEnamex",
      "description": {
        "fct-descr": "\u003cp\u003eShow the enamex file.\n\u003c/p\u003e",
        "fct-module": "Text.Named.Enamex",
        "fct-package": "data-named",
        "fct-signature": "[NeForest Text Text] -\u003e Text",
        "fct-source": "src/Text-Named-Enamex.html#showEnamex",
        "fct-type": "function",
        "title": "showEnamex"
      },
      "index": {
        "description": "Show the enamex file",
        "hierarchy": "Text Named Enamex",
        "module": "Text.Named.Enamex",
        "name": "showEnamex",
        "normalized": "[NeForest Text Text]-\u003eText",
        "package": "data-named",
        "partial": "Enamex",
        "signature": "[NeForest Text Text]-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-named/docs/Text-Named-Enamex.html#v:showForest",
      "description": {
        "fct-descr": "\u003cp\u003eShow the forest.\n\u003c/p\u003e",
        "fct-module": "Text.Named.Enamex",
        "fct-package": "data-named",
        "fct-signature": "NeForest Text Text -\u003e Text",
        "fct-source": "src/Text-Named-Enamex.html#showForest",
        "fct-type": "function",
        "title": "showForest"
      },
      "index": {
        "description": "Show the forest",
        "hierarchy": "Text Named Enamex",
        "module": "Text.Named.Enamex",
        "name": "showForest",
        "normalized": "NeForest Text Text-\u003eText",
        "package": "data-named",
        "partial": "Forest",
        "signature": "NeForest Text Text-\u003eText"
      }
    }
  }
]