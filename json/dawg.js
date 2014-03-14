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
        "word": "dawg"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module implements \u003cem\u003edirected acyclic word graphs\u003c/em\u003e (DAWGs) internaly\n represented as \u003cem\u003eminimal acyclic deterministic finite-state automata\u003c/em\u003e.\n The implementation provides fast insert and delete operations\n which can be used to build the DAWG structure incrementaly.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.DAWG.Dynamic",
          "name": "Dynamic",
          "package": "dawg",
          "source": "src/Data-DAWG-Dynamic.html",
          "type": "module"
        },
        "index": {
          "description": "The module implements directed acyclic word graphs DAWGs internaly represented as minimal acyclic deterministic finite-state automata The implementation provides fast insert and delete operations which can be used to build the DAWG structure incrementaly",
          "hierarchy": "Data DAWG Dynamic",
          "module": "Data.DAWG.Dynamic",
          "name": "Dynamic",
          "package": "dawg",
          "partial": "Dynamic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Dynamic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA directed acyclic word graph with phantom type \u003ccode\u003ea\u003c/code\u003e representing\n type of alphabet elements.\n\u003c/p\u003e",
          "module": "Data.DAWG.Dynamic",
          "name": "DAWG",
          "package": "dawg",
          "source": "src/Data-DAWG-Dynamic-Internal.html#DAWG",
          "type": "data"
        },
        "index": {
          "description": "directed acyclic word graph with phantom type representing type of alphabet elements",
          "hierarchy": "Data DAWG Dynamic",
          "module": "Data.DAWG.Dynamic",
          "name": "DAWG",
          "package": "dawg",
          "partial": "DAWG",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Dynamic.html#t:DAWG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all key/value pairs in the DAWG in ascending key order.\n\u003c/p\u003e",
          "module": "Data.DAWG.Dynamic",
          "name": "assocs",
          "package": "dawg",
          "signature": "DAWG a b -\u003e [([a], b)]",
          "source": "src/Data-DAWG-Dynamic.html#assocs",
          "type": "function"
        },
        "index": {
          "description": "Return all key value pairs in the DAWG in ascending key order",
          "hierarchy": "Data DAWG Dynamic",
          "module": "Data.DAWG.Dynamic",
          "name": "assocs",
          "normalized": "DAWG a b-\u003e[([a],b)]",
          "package": "dawg",
          "signature": "DAWG a b-\u003e[([a],b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Dynamic.html#v:assocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the key from the DAWG.\n\u003c/p\u003e",
          "module": "Data.DAWG.Dynamic",
          "name": "delete",
          "package": "dawg",
          "signature": "[a] -\u003e DAWG a b -\u003e DAWG a b",
          "source": "src/Data-DAWG-Dynamic.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Delete the key from the DAWG",
          "hierarchy": "Data DAWG Dynamic",
          "module": "Data.DAWG.Dynamic",
          "name": "delete",
          "normalized": "[a]-\u003eDAWG a b-\u003eDAWG a b",
          "package": "dawg",
          "signature": "[a]-\u003eDAWG a b-\u003eDAWG a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Dynamic.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all elements of the DAWG in the ascending order of their keys.\n\u003c/p\u003e",
          "module": "Data.DAWG.Dynamic",
          "name": "elems",
          "package": "dawg",
          "signature": "DAWG a b -\u003e [b]",
          "source": "src/Data-DAWG-Dynamic.html#elems",
          "type": "function"
        },
        "index": {
          "description": "Return all elements of the DAWG in the ascending order of their keys",
          "hierarchy": "Data DAWG Dynamic",
          "module": "Data.DAWG.Dynamic",
          "name": "elems",
          "normalized": "DAWG a b-\u003e[b]",
          "package": "dawg",
          "signature": "DAWG a b-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Dynamic.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty DAWG.\n\u003c/p\u003e",
          "module": "Data.DAWG.Dynamic",
          "name": "empty",
          "package": "dawg",
          "signature": "DAWG a b",
          "source": "src/Data-DAWG-Dynamic.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Empty DAWG",
          "hierarchy": "Data DAWG Dynamic",
          "module": "Data.DAWG.Dynamic",
          "name": "empty",
          "package": "dawg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Dynamic.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake DAWG from the list of words.  Annotate each word with\n the \u003ccode\u003e()\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Data.DAWG.Dynamic",
          "name": "fromLang",
          "package": "dawg",
          "signature": "[[a]] -\u003e DAWG a ()",
          "source": "src/Data-DAWG-Dynamic.html#fromLang",
          "type": "function"
        },
        "index": {
          "description": "Make DAWG from the list of words Annotate each word with the value",
          "hierarchy": "Data DAWG Dynamic",
          "module": "Data.DAWG.Dynamic",
          "name": "fromLang",
          "normalized": "[[a]]-\u003eDAWG a()",
          "package": "dawg",
          "partial": "Lang",
          "signature": "[[a]]-\u003eDAWG a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Dynamic.html#v:fromLang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct DAWG from the list of (word, value) pairs.\n\u003c/p\u003e",
          "module": "Data.DAWG.Dynamic",
          "name": "fromList",
          "package": "dawg",
          "signature": "[([a], b)] -\u003e DAWG a b",
          "source": "src/Data-DAWG-Dynamic.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Construct DAWG from the list of word value pairs",
          "hierarchy": "Data DAWG Dynamic",
          "module": "Data.DAWG.Dynamic",
          "name": "fromList",
          "normalized": "[([a],b)]-\u003eDAWG a b",
          "package": "dawg",
          "partial": "List",
          "signature": "[([a],b)]-\u003eDAWG a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Dynamic.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct DAWG from the list of (word, value) pairs\n with a combining function.  The combining function is\n applied strictly.\n\u003c/p\u003e",
          "module": "Data.DAWG.Dynamic",
          "name": "fromListWith",
          "package": "dawg",
          "signature": "(b -\u003e b -\u003e b) -\u003e [([a], b)] -\u003e DAWG a b",
          "source": "src/Data-DAWG-Dynamic.html#fromListWith",
          "type": "function"
        },
        "index": {
          "description": "Construct DAWG from the list of word value pairs with combining function The combining function is applied strictly",
          "hierarchy": "Data DAWG Dynamic",
          "module": "Data.DAWG.Dynamic",
          "name": "fromListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[([b],a)]-\u003eDAWG b a",
          "package": "dawg",
          "partial": "List With",
          "signature": "(b-\u003eb-\u003eb)-\u003e[([a],b)]-\u003eDAWG a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Dynamic.html#v:fromListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert the (key, value) pair into the DAWG.\n\u003c/p\u003e",
          "module": "Data.DAWG.Dynamic",
          "name": "insert",
          "package": "dawg",
          "signature": "[a] -\u003e b -\u003e DAWG a b -\u003e DAWG a b",
          "source": "src/Data-DAWG-Dynamic.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert the key value pair into the DAWG",
          "hierarchy": "Data DAWG Dynamic",
          "module": "Data.DAWG.Dynamic",
          "name": "insert",
          "normalized": "[a]-\u003eb-\u003eDAWG a b-\u003eDAWG a b",
          "package": "dawg",
          "signature": "[a]-\u003eb-\u003eDAWG a b-\u003eDAWG a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Dynamic.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert with a function, combining new value and old value.\n \u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e f key value d will insert the pair (key, value) into d if\n key does not exist in the DAWG. If the key does exist, the function\n will insert the pair (key, f new_value old_value).\n\u003c/p\u003e",
          "module": "Data.DAWG.Dynamic",
          "name": "insertWith",
          "package": "dawg",
          "signature": "(b -\u003e b -\u003e b) -\u003e [a] -\u003e b -\u003e DAWG a b -\u003e DAWG a b",
          "source": "src/Data-DAWG-Dynamic.html#insertWith",
          "type": "function"
        },
        "index": {
          "description": "Insert with function combining new value and old value insertWith key value will insert the pair key value into if key does not exist in the DAWG If the key does exist the function will insert the pair key new value old value",
          "hierarchy": "Data DAWG Dynamic",
          "module": "Data.DAWG.Dynamic",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[b]-\u003ea-\u003eDAWG b a-\u003eDAWG b a",
          "package": "dawg",
          "partial": "With",
          "signature": "(b-\u003eb-\u003eb)-\u003e[a]-\u003eb-\u003eDAWG a b-\u003eDAWG a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Dynamic.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all keys of the DAWG in ascending order.\n\u003c/p\u003e",
          "module": "Data.DAWG.Dynamic",
          "name": "keys",
          "package": "dawg",
          "signature": "DAWG a b -\u003e [[a]]",
          "source": "src/Data-DAWG-Dynamic.html#keys",
          "type": "function"
        },
        "index": {
          "description": "Return all keys of the DAWG in ascending order",
          "hierarchy": "Data DAWG Dynamic",
          "module": "Data.DAWG.Dynamic",
          "name": "keys",
          "normalized": "DAWG a b-\u003e[[a]]",
          "package": "dawg",
          "signature": "DAWG a b-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Dynamic.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind value associated with the key.\n\u003c/p\u003e",
          "module": "Data.DAWG.Dynamic",
          "name": "lookup",
          "package": "dawg",
          "signature": "[a] -\u003e DAWG a b -\u003e Maybe b",
          "source": "src/Data-DAWG-Dynamic.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Find value associated with the key",
          "hierarchy": "Data DAWG Dynamic",
          "module": "Data.DAWG.Dynamic",
          "name": "lookup",
          "normalized": "[a]-\u003eDAWG a b-\u003eMaybe b",
          "package": "dawg",
          "signature": "[a]-\u003eDAWG a b-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Dynamic.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of edges in the automaton.\n\u003c/p\u003e",
          "module": "Data.DAWG.Dynamic",
          "name": "numEdges",
          "package": "dawg",
          "signature": "DAWG a b -\u003e Int",
          "source": "src/Data-DAWG-Dynamic.html#numEdges",
          "type": "function"
        },
        "index": {
          "description": "Number of edges in the automaton",
          "hierarchy": "Data DAWG Dynamic",
          "module": "Data.DAWG.Dynamic",
          "name": "numEdges",
          "normalized": "DAWG a b-\u003eInt",
          "package": "dawg",
          "partial": "Edges",
          "signature": "DAWG a b-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Dynamic.html#v:numEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of states in the automaton.\n\u003c/p\u003e",
          "module": "Data.DAWG.Dynamic",
          "name": "numStates",
          "package": "dawg",
          "signature": "DAWG a b -\u003e Int",
          "source": "src/Data-DAWG-Dynamic.html#numStates",
          "type": "function"
        },
        "index": {
          "description": "Number of states in the automaton",
          "hierarchy": "Data DAWG Dynamic",
          "module": "Data.DAWG.Dynamic",
          "name": "numStates",
          "normalized": "DAWG a b-\u003eInt",
          "package": "dawg",
          "partial": "States",
          "signature": "DAWG a b-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Dynamic.html#v:numStates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module implements \u003cem\u003edirected acyclic word graphs\u003c/em\u003e (DAWGs) internaly\n represented as \u003cem\u003eminimal acyclic deterministic finite-state automata\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eIn comparison to \u003ca\u003eData.DAWG.Dynamic\u003c/a\u003e module the automaton implemented here:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Keeps all nodes in one array and therefore uses less memory,\n\u003c/li\u003e\u003cli\u003e When \u003ccode\u003e\u003ca\u003eweigh\u003c/a\u003e\u003c/code\u003eed, it can be used to perform static hashing with\n     \u003ccode\u003e\u003ca\u003eindex\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ebyIndex\u003c/a\u003e\u003c/code\u003e functions,\n\u003c/li\u003e\u003cli\u003e Doesn't provide insert/delete family of operations.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.DAWG.Static",
          "name": "Static",
          "package": "dawg",
          "source": "src/Data-DAWG-Static.html",
          "type": "module"
        },
        "index": {
          "description": "The module implements directed acyclic word graphs DAWGs internaly represented as minimal acyclic deterministic finite-state automata In comparison to Data.DAWG.Dynamic module the automaton implemented here Keeps all nodes in one array and therefore uses less memory When weigh ed it can be used to perform static hashing with index and byIndex functions Doesn provide insert delete family of operations",
          "hierarchy": "Data DAWG Static",
          "module": "Data.DAWG.Static",
          "name": "Static",
          "package": "dawg",
          "partial": "Static",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Static.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eDAWG a b c\u003c/code\u003e constitutes an automaton with alphabet symbols of type \u003cem\u003ea\u003c/em\u003e,\n transition labels of type \u003cem\u003eb\u003c/em\u003e and node values of type \u003cem\u003eMaybe c\u003c/em\u003e.\n All nodes are stored in a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e with positions of nodes corresponding\n to their \u003ccode\u003e\u003ca\u003eID\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.DAWG.Static",
          "name": "DAWG",
          "package": "dawg",
          "source": "src/Data-DAWG-Static.html#DAWG",
          "type": "data"
        },
        "index": {
          "description": "DAWG constitutes an automaton with alphabet symbols of type transition labels of type and node values of type Maybe All nodes are stored in Vector with positions of nodes corresponding to their ID",
          "hierarchy": "Data DAWG Static",
          "module": "Data.DAWG.Static",
          "name": "DAWG",
          "package": "dawg",
          "partial": "DAWG",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Static.html#t:DAWG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNode identifier.\n\u003c/p\u003e",
          "module": "Data.DAWG.Static",
          "name": "ID",
          "package": "dawg",
          "source": "src/Data-DAWG-Types.html#ID",
          "type": "type"
        },
        "index": {
          "description": "Node identifier",
          "hierarchy": "Data DAWG Static",
          "module": "Data.DAWG.Static",
          "name": "ID",
          "package": "dawg",
          "partial": "ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Static.html#t:ID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWeight of a node corresponds to the number of final states\n reachable from the node.  Weight of an edge is a sum of weights\n of preceding nodes outgoing from the same parent node.\n\u003c/p\u003e",
          "module": "Data.DAWG.Static",
          "name": "Weight",
          "package": "dawg",
          "source": "src/Data-DAWG-Static.html#Weight",
          "type": "type"
        },
        "index": {
          "description": "Weight of node corresponds to the number of final states reachable from the node Weight of an edge is sum of weights of preceding nodes outgoing from the same parent node",
          "hierarchy": "Data DAWG Static",
          "module": "Data.DAWG.Static",
          "name": "Weight",
          "package": "dawg",
          "partial": "Weight",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Static.html#t:Weight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all (key, value) pairs in the DAWG in ascending key order.\n\u003c/p\u003e",
          "module": "Data.DAWG.Static",
          "name": "assocs",
          "package": "dawg",
          "signature": "DAWG a b c -\u003e [([a], c)]",
          "source": "src/Data-DAWG-Static.html#assocs",
          "type": "function"
        },
        "index": {
          "description": "Return all key value pairs in the DAWG in ascending key order",
          "hierarchy": "Data DAWG Static",
          "module": "Data.DAWG.Static",
          "name": "assocs",
          "normalized": "DAWG a b c-\u003e[([a],c)]",
          "package": "dawg",
          "signature": "DAWG a b c-\u003e[([a],c)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Static.html#v:assocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve sub-DAWG with a given ID (or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, if there's\n no such DAWG).  This function can be used, together with the\n \u003ccode\u003eroot\u003c/code\u003e function, to store IDs rather than entire DAWGs in a\n data structure.\n\u003c/p\u003e",
          "module": "Data.DAWG.Static",
          "name": "byID",
          "package": "dawg",
          "signature": "ID -\u003e DAWG a b c -\u003e Maybe (DAWG a b c)",
          "source": "src/Data-DAWG-Static.html#byID",
          "type": "function"
        },
        "index": {
          "description": "Retrieve sub-DAWG with given ID or Nothing if there no such DAWG This function can be used together with the root function to store IDs rather than entire DAWGs in data structure",
          "hierarchy": "Data DAWG Static",
          "module": "Data.DAWG.Static",
          "name": "byID",
          "normalized": "ID-\u003eDAWG a b c-\u003eMaybe(DAWG a b c)",
          "package": "dawg",
          "partial": "ID",
          "signature": "ID-\u003eDAWG a b c-\u003eMaybe(DAWG a b c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Static.html#v:byID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind dictionary entry given its index with respect to the\n lexicographic order.\n\u003c/p\u003e",
          "module": "Data.DAWG.Static",
          "name": "byIndex",
          "package": "dawg",
          "signature": "Int -\u003e DAWG a Weight c -\u003e Maybe [a]",
          "source": "src/Data-DAWG-Static.html#byIndex",
          "type": "function"
        },
        "index": {
          "description": "Find dictionary entry given its index with respect to the lexicographic order",
          "hierarchy": "Data DAWG Static",
          "module": "Data.DAWG.Static",
          "name": "byIndex",
          "normalized": "Int-\u003eDAWG a Weight b-\u003eMaybe[a]",
          "package": "dawg",
          "partial": "Index",
          "signature": "Int-\u003eDAWG a Weight c-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Static.html#v:byIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of outgoing edges.\n\u003c/p\u003e",
          "module": "Data.DAWG.Static",
          "name": "edges",
          "package": "dawg",
          "signature": "DAWG a b c -\u003e [(a, DAWG a b c)]",
          "source": "src/Data-DAWG-Static.html#edges",
          "type": "function"
        },
        "index": {
          "description": "list of outgoing edges",
          "hierarchy": "Data DAWG Static",
          "module": "Data.DAWG.Static",
          "name": "edges",
          "normalized": "DAWG a b c-\u003e[(a,DAWG a b c)]",
          "package": "dawg",
          "signature": "DAWG a b c-\u003e[(a,DAWG a b c)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Static.html#v:edges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all elements of the DAWG in the ascending order of their keys.\n\u003c/p\u003e",
          "module": "Data.DAWG.Static",
          "name": "elems",
          "package": "dawg",
          "signature": "DAWG a b c -\u003e [c]",
          "source": "src/Data-DAWG-Static.html#elems",
          "type": "function"
        },
        "index": {
          "description": "Return all elements of the DAWG in the ascending order of their keys",
          "hierarchy": "Data DAWG Static",
          "module": "Data.DAWG.Static",
          "name": "elems",
          "normalized": "DAWG a b c-\u003e[c]",
          "package": "dawg",
          "signature": "DAWG a b c-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Static.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty DAWG.\n\u003c/p\u003e",
          "module": "Data.DAWG.Static",
          "name": "empty",
          "package": "dawg",
          "signature": "DAWG a b c",
          "source": "src/Data-DAWG-Static.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Empty DAWG",
          "hierarchy": "Data DAWG Static",
          "module": "Data.DAWG.Static",
          "name": "empty",
          "package": "dawg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Static.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct immutable version of the automaton.\n\u003c/p\u003e",
          "module": "Data.DAWG.Static",
          "name": "freeze",
          "package": "dawg",
          "signature": "DAWG a b -\u003e DAWG a () b",
          "source": "src/Data-DAWG-Static.html#freeze",
          "type": "function"
        },
        "index": {
          "description": "Construct immutable version of the automaton",
          "hierarchy": "Data DAWG Static",
          "module": "Data.DAWG.Static",
          "name": "freeze",
          "normalized": "DAWG a b-\u003eDAWG a()b",
          "package": "dawg",
          "signature": "DAWG a b-\u003eDAWG a()b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Static.html#v:freeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake DAWG from the list of words.  Annotate each word with\n the \u003ccode\u003e()\u003c/code\u003e value.  First a \u003ccode\u003e\u003ca\u003eDAWG\u003c/a\u003e\u003c/code\u003e is created and then it is frozen\n using the \u003ccode\u003e\u003ca\u003efreeze\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.DAWG.Static",
          "name": "fromLang",
          "package": "dawg",
          "signature": "[[a]] -\u003e DAWG a () ()",
          "source": "src/Data-DAWG-Static.html#fromLang",
          "type": "function"
        },
        "index": {
          "description": "Make DAWG from the list of words Annotate each word with the value First DAWG is created and then it is frozen using the freeze function",
          "hierarchy": "Data DAWG Static",
          "module": "Data.DAWG.Static",
          "name": "fromLang",
          "normalized": "[[a]]-\u003eDAWG a()()",
          "package": "dawg",
          "partial": "Lang",
          "signature": "[[a]]-\u003eDAWG a()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Static.html#v:fromLang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct \u003ccode\u003e\u003ca\u003eDAWG\u003c/a\u003e\u003c/code\u003e from the list of (word, value) pairs.\n First a \u003ccode\u003e\u003ca\u003eDAWG\u003c/a\u003e\u003c/code\u003e is created and then it is frozen using\n the \u003ccode\u003e\u003ca\u003efreeze\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.DAWG.Static",
          "name": "fromList",
          "package": "dawg",
          "signature": "[([a], b)] -\u003e DAWG a () b",
          "source": "src/Data-DAWG-Static.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Construct DAWG from the list of word value pairs First DAWG is created and then it is frozen using the freeze function",
          "hierarchy": "Data DAWG Static",
          "module": "Data.DAWG.Static",
          "name": "fromList",
          "normalized": "[([a],b)]-\u003eDAWG a()b",
          "package": "dawg",
          "partial": "List",
          "signature": "[([a],b)]-\u003eDAWG a()b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Static.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct DAWG from the list of (word, value) pairs\n with a combining function.  The combining function is\n applied strictly. First a \u003ccode\u003e\u003ca\u003eDAWG\u003c/a\u003e\u003c/code\u003e is created and then\n it is frozen using the \u003ccode\u003e\u003ca\u003efreeze\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.DAWG.Static",
          "name": "fromListWith",
          "package": "dawg",
          "signature": "(b -\u003e b -\u003e b) -\u003e [([a], b)] -\u003e DAWG a () b",
          "source": "src/Data-DAWG-Static.html#fromListWith",
          "type": "function"
        },
        "index": {
          "description": "Construct DAWG from the list of word value pairs with combining function The combining function is applied strictly First DAWG is created and then it is frozen using the freeze function",
          "hierarchy": "Data DAWG Static",
          "module": "Data.DAWG.Static",
          "name": "fromListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[([b],a)]-\u003eDAWG b()a",
          "package": "dawg",
          "partial": "List With",
          "signature": "(b-\u003eb-\u003eb)-\u003e[([a],b)]-\u003eDAWG a()b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Static.html#v:fromListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePosition in a set of all dictionary entries with respect\n to the lexicographic order.\n\u003c/p\u003e",
          "module": "Data.DAWG.Static",
          "name": "index",
          "package": "dawg",
          "signature": "[a] -\u003e DAWG a Weight c -\u003e Maybe Int",
          "source": "src/Data-DAWG-Static.html#index",
          "type": "function"
        },
        "index": {
          "description": "Position in set of all dictionary entries with respect to the lexicographic order",
          "hierarchy": "Data DAWG Static",
          "module": "Data.DAWG.Static",
          "name": "index",
          "normalized": "[a]-\u003eDAWG a Weight b-\u003eMaybe Int",
          "package": "dawg",
          "signature": "[a]-\u003eDAWG a Weight c-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Static.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all keys of the DAWG in ascending order.\n\u003c/p\u003e",
          "module": "Data.DAWG.Static",
          "name": "keys",
          "package": "dawg",
          "signature": "DAWG a b c -\u003e [[a]]",
          "source": "src/Data-DAWG-Static.html#keys",
          "type": "function"
        },
        "index": {
          "description": "Return all keys of the DAWG in ascending order",
          "hierarchy": "Data DAWG Static",
          "module": "Data.DAWG.Static",
          "name": "keys",
          "normalized": "DAWG a b c-\u003e[[a]]",
          "package": "dawg",
          "signature": "DAWG a b c-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Static.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind value associated with the key.\n\u003c/p\u003e",
          "module": "Data.DAWG.Static",
          "name": "lookup",
          "package": "dawg",
          "signature": "[a] -\u003e DAWG a b c -\u003e Maybe c",
          "source": "src/Data-DAWG-Static.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Find value associated with the key",
          "hierarchy": "Data DAWG Static",
          "module": "Data.DAWG.Static",
          "name": "lookup",
          "normalized": "[a]-\u003eDAWG a b c-\u003eMaybe c",
          "package": "dawg",
          "signature": "[a]-\u003eDAWG a b c-\u003eMaybe c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Static.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of edges in the automaton.\n TODO: The function ignores the \u003ccode\u003e\u003ca\u003erootID\u003c/a\u003e\u003c/code\u003e value, it won't work properly\n after using the \u003ccode\u003e\u003ca\u003esubmap\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.DAWG.Static",
          "name": "numEdges",
          "package": "dawg",
          "signature": "DAWG a b c -\u003e Int",
          "source": "src/Data-DAWG-Static.html#numEdges",
          "type": "function"
        },
        "index": {
          "description": "Number of edges in the automaton TODO The function ignores the rootID value it won work properly after using the submap function",
          "hierarchy": "Data DAWG Static",
          "module": "Data.DAWG.Static",
          "name": "numEdges",
          "normalized": "DAWG a b c-\u003eInt",
          "package": "dawg",
          "partial": "Edges",
          "signature": "DAWG a b c-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Static.html#v:numEdges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of states in the automaton.\n TODO: The function ignores the \u003ccode\u003e\u003ca\u003erootID\u003c/a\u003e\u003c/code\u003e value, it won't work properly\n after using the \u003ccode\u003e\u003ca\u003esubmap\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Data.DAWG.Static",
          "name": "numStates",
          "package": "dawg",
          "signature": "DAWG a b c -\u003e Int",
          "source": "src/Data-DAWG-Static.html#numStates",
          "type": "function"
        },
        "index": {
          "description": "Number of states in the automaton TODO The function ignores the rootID value it won work properly after using the submap function",
          "hierarchy": "Data DAWG Static",
          "module": "Data.DAWG.Static",
          "name": "numStates",
          "normalized": "DAWG a b c-\u003eInt",
          "package": "dawg",
          "partial": "States",
          "signature": "DAWG a b c-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Static.html#v:numStates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe actual DAWG root has the 0 ID.  Thanks to the \u003ccode\u003e\u003ca\u003erootID\u003c/a\u003e\u003c/code\u003e\n attribute, we can represent a submap of a DAWG.\n\u003c/p\u003e",
          "module": "Data.DAWG.Static",
          "name": "rootID",
          "package": "dawg",
          "signature": "DAWG a b c -\u003e ID",
          "source": "src/Data-DAWG-Static.html#rootID",
          "type": "function"
        },
        "index": {
          "description": "The actual DAWG root has the ID Thanks to the rootID attribute we can represent submap of DAWG",
          "hierarchy": "Data DAWG Static",
          "module": "Data.DAWG.Static",
          "name": "rootID",
          "normalized": "DAWG a b c-\u003eID",
          "package": "dawg",
          "partial": "ID",
          "signature": "DAWG a b c-\u003eID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Static.html#v:rootID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA number of distinct (key, value) pairs in the weighted DAWG.\n\u003c/p\u003e",
          "module": "Data.DAWG.Static",
          "name": "size",
          "package": "dawg",
          "signature": "DAWG a Weight c -\u003e Int",
          "source": "src/Data-DAWG-Static.html#size",
          "type": "function"
        },
        "index": {
          "description": "number of distinct key value pairs in the weighted DAWG",
          "hierarchy": "Data DAWG Static",
          "module": "Data.DAWG.Static",
          "name": "size",
          "normalized": "DAWG a Weight b-\u003eInt",
          "package": "dawg",
          "signature": "DAWG a Weight c-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Static.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the sub-DAWG containing all keys beginning with a prefix.\n The in-memory representation of the resultant DAWG is the same as of\n the original one, only the pointer to the DAWG root will be different.\n\u003c/p\u003e",
          "module": "Data.DAWG.Static",
          "name": "submap",
          "package": "dawg",
          "signature": "[a] -\u003e DAWG a b c -\u003e DAWG a b c",
          "source": "src/Data-DAWG-Static.html#submap",
          "type": "function"
        },
        "index": {
          "description": "Return the sub-DAWG containing all keys beginning with prefix The in-memory representation of the resultant DAWG is the same as of the original one only the pointer to the DAWG root will be different",
          "hierarchy": "Data DAWG Static",
          "module": "Data.DAWG.Static",
          "name": "submap",
          "normalized": "[a]-\u003eDAWG a b c-\u003eDAWG a b c",
          "package": "dawg",
          "signature": "[a]-\u003eDAWG a b c-\u003eDAWG a b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Static.html#v:submap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute node weights and store corresponding values in transition labels.\n Be aware, that the entire DAWG will be weighted, even when (because of the use of\n the \u003ccode\u003e\u003ca\u003esubmap\u003c/a\u003e\u003c/code\u003e function) only a part of the DAWG is currently selected.\n\u003c/p\u003e",
          "module": "Data.DAWG.Static",
          "name": "weigh",
          "package": "dawg",
          "signature": "DAWG a b c -\u003e DAWG a Weight c",
          "source": "src/Data-DAWG-Static.html#weigh",
          "type": "function"
        },
        "index": {
          "description": "Compute node weights and store corresponding values in transition labels Be aware that the entire DAWG will be weighted even when because of the use of the submap function only part of the DAWG is currently selected",
          "hierarchy": "Data DAWG Static",
          "module": "Data.DAWG.Static",
          "name": "weigh",
          "normalized": "DAWG a b c-\u003eDAWG a Weight c",
          "package": "dawg",
          "signature": "DAWG a b c-\u003eDAWG a Weight c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dawg/docs/Data-DAWG-Static.html#v:weigh"
      }
    }
  ]
]