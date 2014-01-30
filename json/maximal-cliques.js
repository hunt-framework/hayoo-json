[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maximal-cliques/docs/Data-Algorithm-MaximalCliques.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library uses the Bron-Kerbosch algorithm to enumerate all maximal cliques in an undirected graph. A clique is a set of nodes such that there is an edge between every node and every other node in the set. A maximal clique is a clique such that no node may be added while preserving the clique property.\n\u003c/p\u003e\u003cp\u003eMaximal clique enumeration is ExpTime complete, and even finding the greatest single clique (the maximum clique) is NP-complete. The Bron-Kerbosch algorithm is known to run well in practice while maintaining a simple implementation. If more efficiency is desired, there are now better algorithms. See, for example, Makino and Uno: \u003ca\u003ehttp://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.138.705\u003c/a\u003e. Patches providing improved implementations are more than welcome.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Algorithm.MaximalCliques",
        "fct-package": "maximal-cliques",
        "fct-signature": "module",
        "fct-source": "src/Data-Algorithm-MaximalCliques.html",
        "fct-type": "module",
        "title": "MaximalCliques"
      },
      "index": {
        "description": "This library uses the Bron-Kerbosch algorithm to enumerate all maximal cliques in an undirected graph clique is set of nodes such that there is an edge between every node and every other node in the set maximal clique is clique such that no node may be added while preserving the clique property Maximal clique enumeration is ExpTime complete and even finding the greatest single clique the maximum clique is NP-complete The Bron-Kerbosch algorithm is known to run well in practice while maintaining simple implementation If more efficiency is desired there are now better algorithms See for example Makino and Uno http citeseerx.ist.psu.edu viewdoc summary doi Patches providing improved implementations are more than welcome",
        "hierarchy": "Data Algorithm MaximalCliques",
        "module": "Data.Algorithm.MaximalCliques",
        "name": "MaximalCliques",
        "normalized": "",
        "package": "maximal-cliques",
        "partial": "Maximal Cliques",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maximal-cliques/docs/Data-Algorithm-MaximalCliques.html#v:getMaximalCliques",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list of nodes, and a function that determines whether there is an edge between any two nodes, yields a list of maximal cliques -- sets of nodes such that every node is connected to every other, and such that no other node may be added while maintaining this property.\n\u003c/p\u003e",
        "fct-module": "Data.Algorithm.MaximalCliques",
        "fct-package": "maximal-cliques",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/Data-Algorithm-MaximalCliques.html#getMaximalCliques",
        "fct-type": "function",
        "title": "getMaximalCliques"
      },
      "index": {
        "description": "Given list of nodes and function that determines whether there is an edge between any two nodes yields list of maximal cliques sets of nodes such that every node is connected to every other and such that no other node may be added while maintaining this property",
        "hierarchy": "Data Algorithm MaximalCliques",
        "module": "Data.Algorithm.MaximalCliques",
        "name": "getMaximalCliques",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[[a]]",
        "package": "maximal-cliques",
        "partial": "Maximal Cliques",
        "signature": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/maximal-cliques/docs/Data-Algorithm-MaximalCliques.html#v:maximalCliques",
      "description": {
        "fct-descr": "\u003cp\u003eThe Bron-Kerbosch algorithm for finding all maximal cliques in an undirected graph.\n \u003ca\u003ehttp://en.wikipedia.org/wiki/Bron%E2%80%93Kerbosch_algorithm\u003c/a\u003e. Works on nodes represented as \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Algorithm.MaximalCliques",
        "fct-package": "maximal-cliques",
        "fct-signature": "(IntSet -\u003e IntSet -\u003e Int)-\u003e (Int -\u003e IntSet)-\u003e IntSet-\u003e [IntSet]",
        "fct-type": "function",
        "title": "maximalCliques"
      },
      "index": {
        "description": "The Bron-Kerbosch algorithm for finding all maximal cliques in an undirected graph http en.wikipedia.org wiki Bron E2 Kerbosch algorithm Works on nodes represented as Int",
        "hierarchy": "Data Algorithm MaximalCliques",
        "module": "Data.Algorithm.MaximalCliques",
        "name": "maximalCliques",
        "normalized": "(IntSet-\u003eIntSet-\u003eInt)-\u003e(Int-\u003eIntSet)-\u003eIntSet-\u003e[IntSet]",
        "package": "maximal-cliques",
        "partial": "Cliques",
        "signature": "(IntSet-\u003eIntSet-\u003eInt)-\u003e(Int-\u003eIntSet)-\u003eIntSet-\u003e[IntSet]"
      }
    }
  }
]