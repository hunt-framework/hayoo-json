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
        "word": "Homology"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HomologyZ2",
          "name": "HomologyZ2",
          "package": "Homology",
          "source": "src/HomologyZ2.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "HomologyZ2",
          "module": "HomologyZ2",
          "name": "HomologyZ2",
          "package": "Homology",
          "partial": "Homology",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Homology/docs/HomologyZ2.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA complex is a vector of triples.  Each index represents a generator, $x$, and the triple refers $(dx, d^{-1}x, alive?)$, where $dx$ is the list of generators that $x$ maps to, $d^{-1}x$ is the list of generators $y$ such that $x in dy$, and alive? indicates whether x is still an element of the complex (alive? = true by default).\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eexample1\n\u003c/code\u003e\u003c/strong\u003eIV.fromList [([], [3], True), ([], [3], True), ([], [], True), ([0, 1, 2], [], True), ([], [3], True)]\n\u003c/pre\u003e",
          "module": "HomologyZ2",
          "name": "Complex",
          "package": "Homology",
          "source": "src/HomologyZ2.html#Complex",
          "type": "type"
        },
        "index": {
          "description": "complex is vector of triples Each index represents generator and the triple refers dx alive where dx is the list of generators that maps to is the list of generators such that in dy and alive indicates whether is still an element of the complex alive true by default example1 IV.fromList True True True True True",
          "hierarchy": "HomologyZ2",
          "module": "HomologyZ2",
          "name": "Complex",
          "package": "Homology",
          "partial": "Complex",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Homology/docs/HomologyZ2.html#t:Complex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of representatives of homology classes.\n\u003c/p\u003e",
          "module": "HomologyZ2",
          "name": "Homology",
          "package": "Homology",
          "source": "src/HomologyZ2.html#Homology",
          "type": "type"
        },
        "index": {
          "description": "list of representatives of homology classes",
          "hierarchy": "HomologyZ2",
          "module": "HomologyZ2",
          "name": "Homology",
          "package": "Homology",
          "partial": "Homology",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Homology/docs/HomologyZ2.html#t:Homology"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn example complex.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eexample1\n\u003c/code\u003e\u003c/strong\u003eIV.fromList [([], [3], True), ([], [3], True), ([], [], True), ([0, 1, 2], [], True), ([], [3], True)]\n\u003c/pre\u003e",
          "module": "HomologyZ2",
          "name": "example1",
          "package": "Homology",
          "signature": "Complex",
          "source": "src/HomologyZ2.html#example1",
          "type": "function"
        },
        "index": {
          "description": "An example complex example1 IV.fromList True True True True True",
          "hierarchy": "HomologyZ2",
          "module": "HomologyZ2",
          "name": "example1",
          "package": "Homology",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Homology/docs/HomologyZ2.html#v:example1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn example complex.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eexample2\n\u003c/code\u003e\u003c/strong\u003eIV.fromList [([1,4],[],True), ([],[5,2,0],True), ([4,1],[],True), ([],[],True), ([],[5,2,0],True), ([1,4],[],True)]\n\u003c/pre\u003e",
          "module": "HomologyZ2",
          "name": "example2",
          "package": "Homology",
          "signature": "Complex",
          "source": "src/HomologyZ2.html#example2",
          "type": "function"
        },
        "index": {
          "description": "An example complex example2 IV.fromList True True True True True True",
          "hierarchy": "HomologyZ2",
          "module": "HomologyZ2",
          "name": "example2",
          "package": "Homology",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Homology/docs/HomologyZ2.html#v:example2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the homology of a complex by the following method: Represent the complex by a directed graph, where the vertex set is the set of generators, and there is an edge from x to y if $y in dx$. For each $x$ such that $dx neq emptyset$, pick $y in dx$.  For each $z in d^{-1}y$, and $w in dx$, if there is an edge from $z$ to $w$, delete it, otherwise create an edge from $z$ to $w$. Finally, delete $x$, $y$, and all edges into and out of $x$ and $y$. Continue iterating this process until there are no edges left, then read off the homology (the list of elements that are still alive in the complex).\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehomology example1\n\u003c/code\u003e\u003c/strong\u003e[1,2,4]\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehomology example2\n\u003c/code\u003e\u003c/strong\u003e[2,3,4,5]\n\u003c/pre\u003e",
          "module": "HomologyZ2",
          "name": "homology",
          "package": "Homology",
          "signature": "Complex -\u003e Homology",
          "source": "src/HomologyZ2.html#homology",
          "type": "function"
        },
        "index": {
          "description": "Compute the homology of complex by the following method Represent the complex by directed graph where the vertex set is the set of generators and there is an edge from to if in dx For each such that dx neq emptyset pick in dx For each in and in dx if there is an edge from to delete it otherwise create an edge from to Finally delete and all edges into and out of and Continue iterating this process until there are no edges left then read off the homology the list of elements that are still alive in the complex homology example1 homology example2",
          "hierarchy": "HomologyZ2",
          "module": "HomologyZ2",
          "name": "homology",
          "normalized": "Complex-\u003eHomology",
          "package": "Homology",
          "signature": "Complex-\u003eHomology",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Homology/docs/HomologyZ2.html#v:homology"
      }
    }
  ]
]