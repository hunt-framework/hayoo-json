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
        "word": "dom-lt"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Lengauer-Tarjan graph dominators algorithm.\n\u003c/p\u003e\u003cp\u003e[1] Lengauer, Tarjan,\n      \u003cem\u003eA Fast Algorithm for Finding Dominators in a Flowgraph\u003c/em\u003e, 1979.\n\u003c/p\u003e\u003cp\u003e[2] Muchnick,\n      \u003cem\u003eAdvanced Compiler Design and Implementation\u003c/em\u003e, 1997.\n\u003c/p\u003e\u003cp\u003e[3] Brisk, Sarrafzadeh,\n      \u003cem\u003eInterference Graphs for Procedures in Static Single\u003c/em\u003e\n      \u003cem\u003eInformation Form are Interval Graphs\u003c/em\u003e, 2007.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Dom",
          "name": "Dom",
          "package": "dom-lt",
          "source": "src/Data-Graph-Dom.html",
          "type": "module"
        },
        "index": {
          "description": "The Lengauer-Tarjan graph dominators algorithm Lengauer Tarjan Fast Algorithm for Finding Dominators in Flowgraph Muchnick Advanced Compiler Design and Implementation Brisk Sarrafzadeh Interference Graphs for Procedures in Static Single Information Form are Interval Graphs",
          "hierarchy": "Data Graph Dom",
          "module": "Data.Graph.Dom",
          "name": "Dom",
          "package": "dom-lt",
          "partial": "Dom",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dom-lt/docs/Data-Graph-Dom.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Dom",
          "name": "Edge",
          "package": "dom-lt",
          "source": "src/Data-Graph-Dom.html#Edge",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Graph Dom",
          "module": "Data.Graph.Dom",
          "name": "Edge",
          "package": "dom-lt",
          "partial": "Edge",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dom-lt/docs/Data-Graph-Dom.html#t:Edge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Dom",
          "name": "Graph",
          "package": "dom-lt",
          "source": "src/Data-Graph-Dom.html#Graph",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Graph Dom",
          "module": "Data.Graph.Dom",
          "name": "Graph",
          "package": "dom-lt",
          "partial": "Graph",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dom-lt/docs/Data-Graph-Dom.html#t:Graph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Dom",
          "name": "Node",
          "package": "dom-lt",
          "source": "src/Data-Graph-Dom.html#Node",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Graph Dom",
          "module": "Data.Graph.Dom",
          "name": "Node",
          "package": "dom-lt",
          "partial": "Node",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dom-lt/docs/Data-Graph-Dom.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Dom",
          "name": "Path",
          "package": "dom-lt",
          "source": "src/Data-Graph-Dom.html#Path",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Graph Dom",
          "module": "Data.Graph.Dom",
          "name": "Path",
          "package": "dom-lt",
          "partial": "Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dom-lt/docs/Data-Graph-Dom.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Dom",
          "name": "Rooted",
          "package": "dom-lt",
          "source": "src/Data-Graph-Dom.html#Rooted",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Graph Dom",
          "module": "Data.Graph.Dom",
          "name": "Rooted",
          "package": "dom-lt",
          "partial": "Rooted",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dom-lt/docs/Data-Graph-Dom.html#t:Rooted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Dom",
          "name": "ancestors",
          "package": "dom-lt",
          "signature": "Tree a -\u003e [(a, [a])]",
          "source": "src/Data-Graph-Dom.html#ancestors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Dom",
          "module": "Data.Graph.Dom",
          "name": "ancestors",
          "normalized": "Tree a-\u003e[(a,[a])]",
          "package": "dom-lt",
          "signature": "Tree a-\u003e[(a,[a])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-lt/docs/Data-Graph-Dom.html#v:ancestors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Dom",
          "name": "asGraph",
          "package": "dom-lt",
          "signature": "Tree Node -\u003e Rooted",
          "source": "src/Data-Graph-Dom.html#asGraph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Dom",
          "module": "Data.Graph.Dom",
          "name": "asGraph",
          "normalized": "Tree Node-\u003eRooted",
          "package": "dom-lt",
          "partial": "Graph",
          "signature": "Tree Node-\u003eRooted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-lt/docs/Data-Graph-Dom.html#v:asGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Dom",
          "name": "asTree",
          "package": "dom-lt",
          "signature": "Rooted -\u003e Tree Node",
          "source": "src/Data-Graph-Dom.html#asTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Dom",
          "module": "Data.Graph.Dom",
          "name": "asTree",
          "normalized": "Rooted-\u003eTree Node",
          "package": "dom-lt",
          "partial": "Tree",
          "signature": "Rooted-\u003eTree Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-lt/docs/Data-Graph-Dom.html#v:asTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eDominators\u003c/em\u003e.\n Complexity as for \u003ccode\u003eidom\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Graph.Dom",
          "name": "dom",
          "package": "dom-lt",
          "signature": "Rooted -\u003e [(Node, Path)]",
          "source": "src/Data-Graph-Dom.html#dom",
          "type": "function"
        },
        "index": {
          "description": "Dominators Complexity as for idom",
          "hierarchy": "Data Graph Dom",
          "module": "Data.Graph.Dom",
          "name": "dom",
          "normalized": "Rooted-\u003e[(Node,Path)]",
          "package": "dom-lt",
          "signature": "Rooted-\u003e[(Node,Path)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-lt/docs/Data-Graph-Dom.html#v:dom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eDominator tree\u003c/em\u003e.\n Complexity as for \u003ccode\u003eidom\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Dom",
          "name": "domTree",
          "package": "dom-lt",
          "signature": "Rooted -\u003e Tree Node",
          "source": "src/Data-Graph-Dom.html#domTree",
          "type": "function"
        },
        "index": {
          "description": "Dominator tree Complexity as for idom",
          "hierarchy": "Data Graph Dom",
          "module": "Data.Graph.Dom",
          "name": "domTree",
          "normalized": "Rooted-\u003eTree Node",
          "package": "dom-lt",
          "partial": "Tree",
          "signature": "Rooted-\u003eTree Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-lt/docs/Data-Graph-Dom.html#v:domTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Dom",
          "name": "fromAdj",
          "package": "dom-lt",
          "signature": "[(Node, [Node])] -\u003e Graph",
          "source": "src/Data-Graph-Dom.html#fromAdj",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Dom",
          "module": "Data.Graph.Dom",
          "name": "fromAdj",
          "normalized": "[(Node,[Node])]-\u003eGraph",
          "package": "dom-lt",
          "partial": "Adj",
          "signature": "[(Node,[Node])]-\u003eGraph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-lt/docs/Data-Graph-Dom.html#v:fromAdj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Dom",
          "name": "fromEdges",
          "package": "dom-lt",
          "signature": "[Edge] -\u003e Graph",
          "source": "src/Data-Graph-Dom.html#fromEdges",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Dom",
          "module": "Data.Graph.Dom",
          "name": "fromEdges",
          "normalized": "[Edge]-\u003eGraph",
          "package": "dom-lt",
          "partial": "Edges",
          "signature": "[Edge]-\u003eGraph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-lt/docs/Data-Graph-Dom.html#v:fromEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eImmediate dominators\u003c/em\u003e.\n \u003cem\u003eO(|E|*alpha(|E|,|V|))\u003c/em\u003e, where \u003cem\u003ealpha(m,n)\u003c/em\u003e is\n \"a functional inverse of Ackermann's function\".\n\u003c/p\u003e\u003cp\u003eThis Complexity bound assumes \u003cem\u003eO(1)\u003c/em\u003e indexing. Since we're\n using \u003ccode\u003eIntMap\u003c/code\u003e, it has an additional \u003cem\u003elg |V|\u003c/em\u003e factor\n somewhere in there. I'm not sure where.\n\u003c/p\u003e",
          "module": "Data.Graph.Dom",
          "name": "idom",
          "package": "dom-lt",
          "signature": "Rooted -\u003e [(Node, Node)]",
          "source": "src/Data-Graph-Dom.html#idom",
          "type": "function"
        },
        "index": {
          "description": "Immediate dominators alpha where alpha is functional inverse of Ackermann function This Complexity bound assumes indexing Since we re using IntMap it has an additional lg factor somewhere in there not sure where",
          "hierarchy": "Data Graph Dom",
          "module": "Data.Graph.Dom",
          "name": "idom",
          "normalized": "Rooted-\u003e[(Node,Node)]",
          "package": "dom-lt",
          "signature": "Rooted-\u003e[(Node,Node)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-lt/docs/Data-Graph-Dom.html#v:idom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eImmediate post-dominators\u003c/em\u003e.\n Complexity as for \u003ccode\u003eidom\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Dom",
          "name": "ipdom",
          "package": "dom-lt",
          "signature": "Rooted -\u003e [(Node, Node)]",
          "source": "src/Data-Graph-Dom.html#ipdom",
          "type": "function"
        },
        "index": {
          "description": "Immediate post-dominators Complexity as for idom",
          "hierarchy": "Data Graph Dom",
          "module": "Data.Graph.Dom",
          "name": "ipdom",
          "normalized": "Rooted-\u003e[(Node,Node)]",
          "package": "dom-lt",
          "signature": "Rooted-\u003e[(Node,Node)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-lt/docs/Data-Graph-Dom.html#v:ipdom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Dom",
          "name": "parents",
          "package": "dom-lt",
          "signature": "Tree a -\u003e [(a, a)]",
          "source": "src/Data-Graph-Dom.html#parents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Dom",
          "module": "Data.Graph.Dom",
          "name": "parents",
          "normalized": "Tree a-\u003e[(a,a)]",
          "package": "dom-lt",
          "signature": "Tree a-\u003e[(a,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-lt/docs/Data-Graph-Dom.html#v:parents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003ePost-dominated depth-first search\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Dom",
          "name": "pddfs",
          "package": "dom-lt",
          "signature": "Rooted -\u003e [Node]",
          "source": "src/Data-Graph-Dom.html#pddfs",
          "type": "function"
        },
        "index": {
          "description": "Post-dominated depth-first search",
          "hierarchy": "Data Graph Dom",
          "module": "Data.Graph.Dom",
          "name": "pddfs",
          "normalized": "Rooted-\u003e[Node]",
          "package": "dom-lt",
          "signature": "Rooted-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-lt/docs/Data-Graph-Dom.html#v:pddfs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003ePost-dominators\u003c/em\u003e.\n Complexity as for \u003ccode\u003eidom\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Dom",
          "name": "pdom",
          "package": "dom-lt",
          "signature": "Rooted -\u003e [(Node, Path)]",
          "source": "src/Data-Graph-Dom.html#pdom",
          "type": "function"
        },
        "index": {
          "description": "Post-dominators Complexity as for idom",
          "hierarchy": "Data Graph Dom",
          "module": "Data.Graph.Dom",
          "name": "pdom",
          "normalized": "Rooted-\u003e[(Node,Path)]",
          "package": "dom-lt",
          "signature": "Rooted-\u003e[(Node,Path)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-lt/docs/Data-Graph-Dom.html#v:pdom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003ePost-dominator tree\u003c/em\u003e.\n Complexity as for \u003ccode\u003eidom\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Dom",
          "name": "pdomTree",
          "package": "dom-lt",
          "signature": "Rooted -\u003e Tree Node",
          "source": "src/Data-Graph-Dom.html#pdomTree",
          "type": "function"
        },
        "index": {
          "description": "Post-dominator tree Complexity as for idom",
          "hierarchy": "Data Graph Dom",
          "module": "Data.Graph.Dom",
          "name": "pdomTree",
          "normalized": "Rooted-\u003eTree Node",
          "package": "dom-lt",
          "partial": "Tree",
          "signature": "Rooted-\u003eTree Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-lt/docs/Data-Graph-Dom.html#v:pdomTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eReverse post-dominated depth-first search\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Dom",
          "name": "rpddfs",
          "package": "dom-lt",
          "signature": "Rooted -\u003e [Node]",
          "source": "src/Data-Graph-Dom.html#rpddfs",
          "type": "function"
        },
        "index": {
          "description": "Reverse post-dominated depth-first search",
          "hierarchy": "Data Graph Dom",
          "module": "Data.Graph.Dom",
          "name": "rpddfs",
          "normalized": "Rooted-\u003e[Node]",
          "package": "dom-lt",
          "signature": "Rooted-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-lt/docs/Data-Graph-Dom.html#v:rpddfs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Dom",
          "name": "toAdj",
          "package": "dom-lt",
          "signature": "Graph -\u003e [(Node, [Node])]",
          "source": "src/Data-Graph-Dom.html#toAdj",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Dom",
          "module": "Data.Graph.Dom",
          "name": "toAdj",
          "normalized": "Graph-\u003e[(Node,[Node])]",
          "package": "dom-lt",
          "partial": "Adj",
          "signature": "Graph-\u003e[(Node,[Node])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-lt/docs/Data-Graph-Dom.html#v:toAdj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Dom",
          "name": "toEdges",
          "package": "dom-lt",
          "signature": "Graph -\u003e [Edge]",
          "source": "src/Data-Graph-Dom.html#toEdges",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Dom",
          "module": "Data.Graph.Dom",
          "name": "toEdges",
          "normalized": "Graph-\u003e[Edge]",
          "package": "dom-lt",
          "partial": "Edges",
          "signature": "Graph-\u003e[Edge]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dom-lt/docs/Data-Graph-Dom.html#v:toEdges"
      }
    }
  ]
]