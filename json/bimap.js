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
        "word": "bimap"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of bidirectional maps between values of two\nkey types. A \u003ccode\u003e\u003ca\u003eBimap\u003c/a\u003e\u003c/code\u003e is essentially a bijection between subsets of\nits two argument types.\n\u003c/p\u003e\u003cp\u003eEach element of the left-hand type is associated with an element\nof the right-hand type, and vice-versa, such that the two mappings\nare inverses. Deleting an element will cause its twin to be deleted,\nand inserting a pair of elements will cause any overlapping bindings\nto be deleted.\n\u003c/p\u003e\u003cp\u003eMost functions implicitly consider the left-hand type to be the\nkey, and the right-hand type to be the value.\nFunctions with an \u003ccode\u003eR\u003c/code\u003e suffix reverse this convention, treating the\nright-hand type as the key and the left-hand type as the value.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Bimap",
          "name": "Bimap",
          "package": "bimap",
          "source": "src/Data-Bimap.html",
          "type": "module"
        },
        "index": {
          "description": "An implementation of bidirectional maps between values of two key types Bimap is essentially bijection between subsets of its two argument types Each element of the left-hand type is associated with an element of the right-hand type and vice-versa such that the two mappings are inverses Deleting an element will cause its twin to be deleted and inserting pair of elements will cause any overlapping bindings to be deleted Most functions implicitly consider the left-hand type to be the key and the right-hand type to be the value Functions with an suffix reverse this convention treating the right-hand type as the key and the left-hand type as the value",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "Bimap",
          "package": "bimap",
          "partial": "Bimap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA bidirectional map between values of types \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "Bimap",
          "package": "bimap",
          "source": "src/Data-Bimap.html#Bimap",
          "type": "data"
        },
        "index": {
          "description": "bidirectional map between values of types and",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "Bimap",
          "package": "bimap",
          "partial": "Bimap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#t:Bimap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\nFind the right key corresponding to a given left key.\nCalls \u003ccode\u003e\u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e when the key is not in the bimap.\n\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "(!)",
          "package": "bimap",
          "signature": "Bimap a b -\u003e a -\u003e b",
          "source": "src/Data-Bimap.html#%21",
          "type": "function"
        },
        "index": {
          "description": "log Find the right key corresponding to given left key Calls error when the key is not in the bimap Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "(!) !",
          "normalized": "Bimap a b-\u003ea-\u003eb",
          "package": "bimap",
          "signature": "Bimap a b-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\nA version of \u003ccode\u003e(!)\u003c/code\u003e that is specialized to the right key,\nand returns the corresponding left key.\n\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "(!\u003e)",
          "package": "bimap",
          "signature": "Bimap a b -\u003e b -\u003e a",
          "source": "src/Data-Bimap.html#%21%3E",
          "type": "function"
        },
        "index": {
          "description": "log version of that is specialized to the right key and returns the corresponding left key Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "(!\u003e) !\u003e",
          "normalized": "Bimap a b-\u003eb-\u003ea",
          "package": "bimap",
          "signature": "Bimap a b-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:-33--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.\nReturn all associated pairs in the bimap, with the left-hand\nvalues in ascending order.\n\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "assocs",
          "package": "bimap",
          "signature": "Bimap a b -\u003e [(a, b)]",
          "source": "src/Data-Bimap.html#assocs",
          "type": "function"
        },
        "index": {
          "description": "Return all associated pairs in the bimap with the left-hand values in ascending order Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "assocs",
          "normalized": "Bimap a b-\u003e[(a,b)]",
          "package": "bimap",
          "signature": "Bimap a b-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:assocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\nDelete a value and its twin from a bimap.\n\u003c/p\u003e\u003cp\u003eWhen the value is not a member of the bimap, the original bimap is\nreturned.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "delete",
          "package": "bimap",
          "signature": "a -\u003e Bimap a b -\u003e Bimap a b",
          "source": "src/Data-Bimap.html#delete",
          "type": "function"
        },
        "index": {
          "description": "log Delete value and its twin from bimap When the value is not member of the bimap the original bimap is returned Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "delete",
          "normalized": "a-\u003eBimap a b-\u003eBimap a b",
          "package": "bimap",
          "signature": "a-\u003eBimap a b-\u003eBimap a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\nDelete and find the element with maximal left key.\nCalls \u003ccode\u003e\u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e if the bimap is empty.\n\u003cem\u003eVersion: 0.2.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "deleteFindMax",
          "package": "bimap",
          "signature": "Bimap a b -\u003e ((a, b), Bimap a b)",
          "source": "src/Data-Bimap.html#deleteFindMax",
          "type": "function"
        },
        "index": {
          "description": "log Delete and find the element with maximal left key Calls error if the bimap is empty Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "deleteFindMax",
          "normalized": "Bimap a b-\u003e((a,b),Bimap a b)",
          "package": "bimap",
          "partial": "Find Max",
          "signature": "Bimap a b-\u003e((a,b),Bimap a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:deleteFindMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\nDelete and find the element with maximal right key.\nCalls \u003ccode\u003e\u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e if the bimap is empty.\n\u003cem\u003eVersion: 0.2.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "deleteFindMaxR",
          "package": "bimap",
          "signature": "Bimap a b -\u003e ((b, a), Bimap a b)",
          "source": "src/Data-Bimap.html#deleteFindMaxR",
          "type": "function"
        },
        "index": {
          "description": "log Delete and find the element with maximal right key Calls error if the bimap is empty Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "deleteFindMaxR",
          "normalized": "Bimap a b-\u003e((b,a),Bimap a b)",
          "package": "bimap",
          "partial": "Find Max",
          "signature": "Bimap a b-\u003e((b,a),Bimap a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:deleteFindMaxR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\nDelete and find the element with minimal left key.\nCalls \u003ccode\u003e\u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e if the bimap is empty.\n\u003cem\u003eVersion: 0.2.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "deleteFindMin",
          "package": "bimap",
          "signature": "Bimap a b -\u003e ((a, b), Bimap a b)",
          "source": "src/Data-Bimap.html#deleteFindMin",
          "type": "function"
        },
        "index": {
          "description": "log Delete and find the element with minimal left key Calls error if the bimap is empty Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "deleteFindMin",
          "normalized": "Bimap a b-\u003e((a,b),Bimap a b)",
          "package": "bimap",
          "partial": "Find Min",
          "signature": "Bimap a b-\u003e((a,b),Bimap a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:deleteFindMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\nDelete and find the element with minimal right key.\nCalls \u003ccode\u003e\u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e if the bimap is empty.\n\u003cem\u003eVersion: 0.2.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "deleteFindMinR",
          "package": "bimap",
          "signature": "Bimap a b -\u003e ((b, a), Bimap a b)",
          "source": "src/Data-Bimap.html#deleteFindMinR",
          "type": "function"
        },
        "index": {
          "description": "log Delete and find the element with minimal right key Calls error if the bimap is empty Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "deleteFindMinR",
          "normalized": "Bimap a b-\u003e((b,a),Bimap a b)",
          "package": "bimap",
          "partial": "Find Min",
          "signature": "Bimap a b-\u003e((b,a),Bimap a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:deleteFindMinR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\nDelete the element with maximal left key.\nCalls \u003ccode\u003e\u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e if the bimap is empty.\n\u003cem\u003eVersion: 0.2.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "deleteMax",
          "package": "bimap",
          "signature": "Bimap a b -\u003e Bimap a b",
          "source": "src/Data-Bimap.html#deleteMax",
          "type": "function"
        },
        "index": {
          "description": "log Delete the element with maximal left key Calls error if the bimap is empty Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "deleteMax",
          "normalized": "Bimap a b-\u003eBimap a b",
          "package": "bimap",
          "partial": "Max",
          "signature": "Bimap a b-\u003eBimap a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:deleteMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\nDelete the element with maximal right key.\nCalls \u003ccode\u003e\u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e if the bimap is empty.\n\u003cem\u003eVersion: 0.2.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "deleteMaxR",
          "package": "bimap",
          "signature": "Bimap a b -\u003e Bimap a b",
          "source": "src/Data-Bimap.html#deleteMaxR",
          "type": "function"
        },
        "index": {
          "description": "log Delete the element with maximal right key Calls error if the bimap is empty Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "deleteMaxR",
          "normalized": "Bimap a b-\u003eBimap a b",
          "package": "bimap",
          "partial": "Max",
          "signature": "Bimap a b-\u003eBimap a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:deleteMaxR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\nDelete the element with minimal left key.\nCalls \u003ccode\u003e\u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e if the bimap is empty.\n\u003cem\u003eVersion: 0.2.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "deleteMin",
          "package": "bimap",
          "signature": "Bimap a b -\u003e Bimap a b",
          "source": "src/Data-Bimap.html#deleteMin",
          "type": "function"
        },
        "index": {
          "description": "log Delete the element with minimal left key Calls error if the bimap is empty Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "deleteMin",
          "normalized": "Bimap a b-\u003eBimap a b",
          "package": "bimap",
          "partial": "Min",
          "signature": "Bimap a b-\u003eBimap a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\nDelete the element with minimal right key.\nCalls \u003ccode\u003e\u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e if the bimap is empty.\n\u003cem\u003eVersion: 0.2.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "deleteMinR",
          "package": "bimap",
          "signature": "Bimap a b -\u003e Bimap a b",
          "source": "src/Data-Bimap.html#deleteMinR",
          "type": "function"
        },
        "index": {
          "description": "log Delete the element with minimal right key Calls error if the bimap is empty Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "deleteMinR",
          "normalized": "Bimap a b-\u003eBimap a b",
          "package": "bimap",
          "partial": "Min",
          "signature": "Bimap a b-\u003eBimap a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:deleteMinR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e A version of \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e specialized to the right key.\n\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "deleteR",
          "package": "bimap",
          "signature": "b -\u003e Bimap a b -\u003e Bimap a b",
          "source": "src/Data-Bimap.html#deleteR",
          "type": "function"
        },
        "index": {
          "description": "log version of delete specialized to the right key Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "deleteR",
          "normalized": "a-\u003eBimap b a-\u003eBimap b a",
          "package": "bimap",
          "signature": "b-\u003eBimap a b-\u003eBimap a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:deleteR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. An alias for \u003ccode\u003e\u003ca\u003ekeysR\u003c/a\u003e\u003c/code\u003e.\n\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "elems",
          "package": "bimap",
          "signature": "Bimap a b -\u003e [b]",
          "source": "src/Data-Bimap.html#elems",
          "type": "function"
        },
        "index": {
          "description": "An alias for keysR Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "elems",
          "normalized": "Bimap a b-\u003e[b]",
          "package": "bimap",
          "signature": "Bimap a b-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The empty bimap.\n\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "empty",
          "package": "bimap",
          "signature": "Bimap a b",
          "source": "src/Data-Bimap.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty bimap Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "empty",
          "package": "bimap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.\nFilter all association pairs that satisfy the predicate.\n\u003c/p\u003e\u003cp\u003eNote that the predicate will be applied \u003cem\u003etwice\u003c/em\u003e for each association\nin the bimap.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eVersion: 0.2.4\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "filter",
          "package": "bimap",
          "signature": "(a -\u003e b -\u003e Bool) -\u003e Bimap a b -\u003e Bimap a b",
          "source": "src/Data-Bimap.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Filter all association pairs that satisfy the predicate Note that the predicate will be applied twice for each association in the bimap Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "filter",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eBimap a b-\u003eBimap a b",
          "package": "bimap",
          "signature": "(a-\u003eb-\u003eBool)-\u003eBimap a b-\u003eBimap a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\nFind the element with maximal left key.\nCalls \u003ccode\u003e\u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e if the bimap is empty.\n\u003cem\u003eVersion: 0.2.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "findMax",
          "package": "bimap",
          "signature": "Bimap a b -\u003e (a, b)",
          "source": "src/Data-Bimap.html#findMax",
          "type": "function"
        },
        "index": {
          "description": "log Find the element with maximal left key Calls error if the bimap is empty Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "findMax",
          "normalized": "Bimap a b-\u003e(a,b)",
          "package": "bimap",
          "partial": "Max",
          "signature": "Bimap a b-\u003e(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:findMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\nFind the element with maximal right key. The \nright-hand key is the first entry in the pair.\nCalls \u003ccode\u003e\u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e if the bimap is empty.\n\u003cem\u003eVersion: 0.2.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "findMaxR",
          "package": "bimap",
          "signature": "Bimap a b -\u003e (b, a)",
          "source": "src/Data-Bimap.html#findMaxR",
          "type": "function"
        },
        "index": {
          "description": "log Find the element with maximal right key The right-hand key is the first entry in the pair Calls error if the bimap is empty Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "findMaxR",
          "normalized": "Bimap a b-\u003e(b,a)",
          "package": "bimap",
          "partial": "Max",
          "signature": "Bimap a b-\u003e(b,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:findMaxR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\nFind the element with minimal left key.\nCalls \u003ccode\u003e\u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e if the bimap is empty.\n\u003cem\u003eVersion: 0.2.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "findMin",
          "package": "bimap",
          "signature": "Bimap a b -\u003e (a, b)",
          "source": "src/Data-Bimap.html#findMin",
          "type": "function"
        },
        "index": {
          "description": "log Find the element with minimal left key Calls error if the bimap is empty Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "findMin",
          "normalized": "Bimap a b-\u003e(a,b)",
          "package": "bimap",
          "partial": "Min",
          "signature": "Bimap a b-\u003e(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:findMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\nFind the element with minimal right key. The \nright-hand key is the first entry in the pair.\nCalls \u003ccode\u003e\u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e if the bimap is empty.\n\u003cem\u003eVersion: 0.2.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "findMinR",
          "package": "bimap",
          "signature": "Bimap a b -\u003e (b, a)",
          "source": "src/Data-Bimap.html#findMinR",
          "type": "function"
        },
        "index": {
          "description": "log Find the element with minimal right key The right-hand key is the first entry in the pair Calls error if the bimap is empty Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "findMinR",
          "normalized": "Bimap a b-\u003e(b,a)",
          "package": "bimap",
          "partial": "Min",
          "signature": "Bimap a b-\u003e(b,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:findMinR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.\nFold the association pairs in the map, such that\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e f z == \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e f z . \u003ccode\u003e\u003ca\u003eassocs\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "fold",
          "package": "bimap",
          "signature": "(a -\u003e b -\u003e c -\u003e c) -\u003e c -\u003e Bimap a b -\u003e c",
          "source": "src/Data-Bimap.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Fold the association pairs in the map such that fold foldr assocs Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "fold",
          "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eBimap a b-\u003ec",
          "package": "bimap",
          "signature": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eBimap a b-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e.\nBuild a map from a list of pairs. Unlike \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e, earlier pairs\nwill take precedence over later ones.\n\u003c/p\u003e\u003cp\u003eThe name \u003ccode\u003efromAList\u003c/code\u003e is a reference to Lisp-style association\nlists, where associations can be overridden by prepending new ones.\n\u003c/p\u003e\u003cp\u003eNote that when duplicates occur in both the keys and in the values,\n\u003ccode\u003efromList xs /= fromAList (reverse xs)\u003c/code\u003e. However, if either\ncontains no duplicates, then the equality holds.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eVersion: 0.2.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "fromAList",
          "package": "bimap",
          "signature": "[(a, b)] -\u003e Bimap a b",
          "source": "src/Data-Bimap.html#fromAList",
          "type": "function"
        },
        "index": {
          "description": "log Build map from list of pairs Unlike fromList earlier pairs will take precedence over later ones The name fromAList is reference to Lisp-style association lists where associations can be overridden by prepending new ones Note that when duplicates occur in both the keys and in the values fromList xs fromAList reverse xs However if either contains no duplicates then the equality holds Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "fromAList",
          "normalized": "[(a,b)]-\u003eBimap a b",
          "package": "bimap",
          "partial": "AList",
          "signature": "[(a,b)]-\u003eBimap a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:fromAList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a bimap from a list of pairs, where both the \u003ccode\u003efst\u003c/code\u003e\nand \u003ccode\u003esnd\u003c/code\u003e halves of the list are in strictly ascending order.\n\u003c/p\u003e\u003cp\u003eThis precondition is checked; an invalid list will cause an error.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eVersion: 0.2.3\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "fromAscPairList",
          "package": "bimap",
          "signature": "[(a, b)] -\u003e Bimap a b",
          "source": "src/Data-Bimap.html#fromAscPairList",
          "type": "function"
        },
        "index": {
          "description": "Build bimap from list of pairs where both the fst and snd halves of the list are in strictly ascending order This precondition is checked an invalid list will cause an error Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "fromAscPairList",
          "normalized": "[(a,b)]-\u003eBimap a b",
          "package": "bimap",
          "partial": "Asc Pair List",
          "signature": "[(a,b)]-\u003eBimap a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:fromAscPairList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a bimap from a list of pairs, where both the \u003ccode\u003efst\u003c/code\u003e\nand \u003ccode\u003esnd\u003c/code\u003e halves of the list are in strictly ascending order.\n\u003c/p\u003e\u003cp\u003eThis precondition is \u003cem\u003enot\u003c/em\u003e checked; an invalid list will produce a\nmalformed bimap.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eVersion: 0.2.3\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "fromAscPairListUnchecked",
          "package": "bimap",
          "signature": "[(a, b)] -\u003e Bimap a b",
          "source": "src/Data-Bimap.html#fromAscPairListUnchecked",
          "type": "function"
        },
        "index": {
          "description": "Build bimap from list of pairs where both the fst and snd halves of the list are in strictly ascending order This precondition is not checked an invalid list will produce malformed bimap Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "fromAscPairListUnchecked",
          "normalized": "[(a,b)]-\u003eBimap a b",
          "package": "bimap",
          "partial": "Asc Pair List Unchecked",
          "signature": "[(a,b)]-\u003eBimap a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:fromAscPairListUnchecked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e.\nBuild a map from a list of pairs. If there are any overlapping\npairs in the list, the later ones will override the earlier ones.\n\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "fromList",
          "package": "bimap",
          "signature": "[(a, b)] -\u003e Bimap a b",
          "source": "src/Data-Bimap.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "log Build map from list of pairs If there are any overlapping pairs in the list the later ones will override the earlier ones Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "fromList",
          "normalized": "[(a,b)]-\u003eBimap a b",
          "package": "bimap",
          "partial": "List",
          "signature": "[(a,b)]-\u003eBimap a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\nInsert a pair of values into the bimap, associating them.\n\u003c/p\u003e\u003cp\u003eIf either of the values is already in the bimap, any overlapping\nbindings are deleted.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "insert",
          "package": "bimap",
          "signature": "a -\u003e b -\u003e Bimap a b -\u003e Bimap a b",
          "source": "src/Data-Bimap.html#insert",
          "type": "function"
        },
        "index": {
          "description": "log Insert pair of values into the bimap associating them If either of the values is already in the bimap any overlapping bindings are deleted Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eBimap a b-\u003eBimap a b",
          "package": "bimap",
          "signature": "a-\u003eb-\u003eBimap a b-\u003eBimap a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.\nReturn all left-hand keys in the bimap in ascending order.\n\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "keys",
          "package": "bimap",
          "signature": "Bimap a b -\u003e [a]",
          "source": "src/Data-Bimap.html#keys",
          "type": "function"
        },
        "index": {
          "description": "Return all left-hand keys in the bimap in ascending order Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "keys",
          "normalized": "Bimap a b-\u003e[a]",
          "package": "bimap",
          "signature": "Bimap a b-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.\nReturn all right-hand keys in the bimap in ascending order.\n\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "keysR",
          "package": "bimap",
          "signature": "Bimap a b -\u003e [b]",
          "source": "src/Data-Bimap.html#keysR",
          "type": "function"
        },
        "index": {
          "description": "Return all right-hand keys in the bimap in ascending order Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "keysR",
          "normalized": "Bimap a b-\u003e[b]",
          "package": "bimap",
          "signature": "Bimap a b-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:keysR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\nLookup a left key in the bimap, returning the associated right key.\n\u003c/p\u003e\u003cp\u003eThis function will \u003ccode\u003ereturn\u003c/code\u003e the result in the monad, or \u003ccode\u003efail\u003c/code\u003e if\nthe value isn't in the bimap.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "lookup",
          "package": "bimap",
          "signature": "a -\u003e Bimap a b -\u003e m b",
          "source": "src/Data-Bimap.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "log Lookup left key in the bimap returning the associated right key This function will return the result in the monad or fail if the value isn in the bimap Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "lookup",
          "normalized": "a-\u003eBimap a b-\u003ec b",
          "package": "bimap",
          "signature": "a-\u003eBimap a b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\nA version of \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e that is specialized to the right key,\nand returns the corresponding left key.\n\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "lookupR",
          "package": "bimap",
          "signature": "b -\u003e Bimap a b -\u003e m a",
          "source": "src/Data-Bimap.html#lookupR",
          "type": "function"
        },
        "index": {
          "description": "log version of lookup that is specialized to the right key and returns the corresponding left key Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "lookupR",
          "normalized": "a-\u003eBimap b a-\u003ec b",
          "package": "bimap",
          "signature": "b-\u003eBimap a b-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:lookupR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Is the specified value a member of the bimap?\n\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "member",
          "package": "bimap",
          "signature": "a -\u003e Bimap a b -\u003e Bool",
          "source": "src/Data-Bimap.html#member",
          "type": "function"
        },
        "index": {
          "description": "log Is the specified value member of the bimap Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "member",
          "normalized": "a-\u003eBimap a b-\u003eBool",
          "package": "bimap",
          "signature": "a-\u003eBimap a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. A version of \u003ccode\u003e\u003ca\u003emember\u003c/a\u003e\u003c/code\u003e specialized to the right key.\n\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "memberR",
          "package": "bimap",
          "signature": "b -\u003e Bimap a b -\u003e Bool",
          "source": "src/Data-Bimap.html#memberR",
          "type": "function"
        },
        "index": {
          "description": "log version of member specialized to the right key Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "memberR",
          "normalized": "a-\u003eBimap b a-\u003eBool",
          "package": "bimap",
          "signature": "b-\u003eBimap a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:memberR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Is the specified value not a member of the bimap?\n\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "notMember",
          "package": "bimap",
          "signature": "a -\u003e Bimap a b -\u003e Bool",
          "source": "src/Data-Bimap.html#notMember",
          "type": "function"
        },
        "index": {
          "description": "log Is the specified value not member of the bimap Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "notMember",
          "normalized": "a-\u003eBimap a b-\u003eBool",
          "package": "bimap",
          "partial": "Member",
          "signature": "a-\u003eBimap a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. A version of \u003ccode\u003e\u003ca\u003enotMember\u003c/a\u003e\u003c/code\u003e specialized to the right key.\n\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "notMemberR",
          "package": "bimap",
          "signature": "b -\u003e Bimap a b -\u003e Bool",
          "source": "src/Data-Bimap.html#notMemberR",
          "type": "function"
        },
        "index": {
          "description": "log version of notMember specialized to the right key Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "notMemberR",
          "normalized": "a-\u003eBimap b a-\u003eBool",
          "package": "bimap",
          "partial": "Member",
          "signature": "b-\u003eBimap a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:notMemberR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the bimap empty?\n\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "null",
          "package": "bimap",
          "signature": "Bimap a b -\u003e Bool",
          "source": "src/Data-Bimap.html#null",
          "type": "function"
        },
        "index": {
          "description": "Is the bimap empty Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "null",
          "normalized": "Bimap a b-\u003eBool",
          "package": "bimap",
          "signature": "Bimap a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\nAre the two values associated \u003cem\u003ewith each other\u003c/em\u003e in the bimap?\n\u003c/p\u003e\u003cp\u003eThis function is uncurried in its first two arguments, so that it\ncan be used infix.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "pairMember",
          "package": "bimap",
          "signature": "(a, b) -\u003e Bimap a b -\u003e Bool",
          "source": "src/Data-Bimap.html#pairMember",
          "type": "function"
        },
        "index": {
          "description": "log Are the two values associated with each other in the bimap This function is uncurried in its first two arguments so that it can be used infix Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "pairMember",
          "normalized": "(a,b)-\u003eBimap a b-\u003eBool",
          "package": "bimap",
          "partial": "Member",
          "signature": "(a,b)-\u003eBimap a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:pairMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\nAre the two values not in the bimap, or not associated\nwith each other? (Complement of \u003ccode\u003e\u003ca\u003epairMember\u003c/a\u003e\u003c/code\u003e.)\n\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "pairNotMember",
          "package": "bimap",
          "signature": "(a, b) -\u003e Bimap a b -\u003e Bool",
          "source": "src/Data-Bimap.html#pairNotMember",
          "type": "function"
        },
        "index": {
          "description": "log Are the two values not in the bimap or not associated with each other Complement of pairMember Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "pairNotMember",
          "normalized": "(a,b)-\u003eBimap a b-\u003eBool",
          "package": "bimap",
          "partial": "Not Member",
          "signature": "(a,b)-\u003eBimap a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:pairNotMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.\nPartition the bimap according to a predicate.\nThe first bimap contains all associations that satisfy the predicate;\nthe second contains all associations that fail the predicate.\n\u003c/p\u003e\u003cp\u003eNote that the predicate will be applied \u003cem\u003etwice\u003c/em\u003e for each association\nin the bimap.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eVersion: 0.2.4\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "partition",
          "package": "bimap",
          "signature": "(a -\u003e b -\u003e Bool) -\u003e Bimap a b -\u003e (Bimap a b, Bimap a b)",
          "source": "src/Data-Bimap.html#partition",
          "type": "function"
        },
        "index": {
          "description": "Partition the bimap according to predicate The first bimap contains all associations that satisfy the predicate the second contains all associations that fail the predicate Note that the predicate will be applied twice for each association in the bimap Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "partition",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eBimap a b-\u003e(Bimap a b,Bimap a b)",
          "package": "bimap",
          "signature": "(a-\u003eb-\u003eBool)-\u003eBimap a b-\u003e(Bimap a b,Bimap a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. A bimap with a single element.\n\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "singleton",
          "package": "bimap",
          "signature": "a -\u003e b -\u003e Bimap a b",
          "source": "src/Data-Bimap.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "bimap with single element Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "singleton",
          "normalized": "a-\u003eb-\u003eBimap a b",
          "package": "bimap",
          "signature": "a-\u003eb-\u003eBimap a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The number of elements in the bimap.\n\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "size",
          "package": "bimap",
          "signature": "Bimap a b -\u003e Int",
          "source": "src/Data-Bimap.html#size",
          "type": "function"
        },
        "index": {
          "description": "The number of elements in the bimap Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "size",
          "normalized": "Bimap a b-\u003eInt",
          "package": "bimap",
          "signature": "Bimap a b-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.\nConvert to a list of associated pairs, with the left-hand\nvalues in ascending order.\n\u003c/p\u003e\u003cp\u003eSince pair ordering is lexical, the pairs will also be in\nascending order.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "toAscList",
          "package": "bimap",
          "signature": "Bimap a b -\u003e [(a, b)]",
          "source": "src/Data-Bimap.html#toAscList",
          "type": "function"
        },
        "index": {
          "description": "Convert to list of associated pairs with the left-hand values in ascending order Since pair ordering is lexical the pairs will also be in ascending order Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "toAscList",
          "normalized": "Bimap a b-\u003e[(a,b)]",
          "package": "bimap",
          "partial": "Asc List",
          "signature": "Bimap a b-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:toAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.\nConvert to a list of associated pairs, with the right-hand\nvalues first in the pair and in ascending order.\n\u003c/p\u003e\u003cp\u003eSince pair ordering is lexical, the pairs will also be in\nascending order.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "toAscListR",
          "package": "bimap",
          "signature": "Bimap a b -\u003e [(b, a)]",
          "source": "src/Data-Bimap.html#toAscListR",
          "type": "function"
        },
        "index": {
          "description": "Convert to list of associated pairs with the right-hand values first in the pair and in ascending order Since pair ordering is lexical the pairs will also be in ascending order Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "toAscListR",
          "normalized": "Bimap a b-\u003e[(b,a)]",
          "package": "bimap",
          "partial": "Asc List",
          "signature": "Bimap a b-\u003e[(b,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:toAscListR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert to a list of associated pairs.\n\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "toList",
          "package": "bimap",
          "signature": "Bimap a b -\u003e [(a, b)]",
          "source": "src/Data-Bimap.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert to list of associated pairs Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "toList",
          "normalized": "Bimap a b-\u003e[(a,b)]",
          "package": "bimap",
          "partial": "List",
          "signature": "Bimap a b-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Extract only the left-to-right component of a bimap.\n\u003cem\u003eVersion: 0.2.1\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "toMap",
          "package": "bimap",
          "signature": "Bimap a b -\u003e Map a b",
          "source": "src/Data-Bimap.html#toMap",
          "type": "function"
        },
        "index": {
          "description": "Extract only the left-to-right component of bimap Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "toMap",
          "normalized": "Bimap a b-\u003eMap a b",
          "package": "bimap",
          "partial": "Map",
          "signature": "Bimap a b-\u003eMap a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:toMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Extract only the right-to-left component of a bimap.\n\u003cem\u003eVersion: 0.2.1\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "toMapR",
          "package": "bimap",
          "signature": "Bimap a b -\u003e Map b a",
          "source": "src/Data-Bimap.html#toMapR",
          "type": "function"
        },
        "index": {
          "description": "Extract only the right-to-left component of bimap Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "toMapR",
          "normalized": "Bimap a b-\u003eMap b a",
          "package": "bimap",
          "partial": "Map",
          "signature": "Bimap a b-\u003eMap b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:toMapR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e.\nInsert a pair of values into the bimap, but only if neither is\nalready in the bimap.\n\u003cem\u003eVersion: 0.2.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "tryInsert",
          "package": "bimap",
          "signature": "a -\u003e b -\u003e Bimap a b -\u003e Bimap a b",
          "source": "src/Data-Bimap.html#tryInsert",
          "type": "function"
        },
        "index": {
          "description": "log Insert pair of values into the bimap but only if neither is already in the bimap Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "tryInsert",
          "normalized": "a-\u003eb-\u003eBimap a b-\u003eBimap a b",
          "package": "bimap",
          "partial": "Insert",
          "signature": "a-\u003eb-\u003eBimap a b-\u003eBimap a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:tryInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.\nReverse the positions of the two element types in the bimap.\n\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "twist",
          "package": "bimap",
          "signature": "Bimap a b -\u003e Bimap b a",
          "source": "src/Data-Bimap.html#twist",
          "type": "function"
        },
        "index": {
          "description": "Reverse the positions of the two element types in the bimap Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "twist",
          "normalized": "Bimap a b-\u003eBimap b a",
          "package": "bimap",
          "signature": "Bimap a b-\u003eBimap b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:twist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e.\nReverse the positions of the two element types in a bimap\ntransformation.\n\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "twisted",
          "package": "bimap",
          "signature": "(Bimap a b -\u003e Bimap a b) -\u003e Bimap b a -\u003e Bimap b a",
          "source": "src/Data-Bimap.html#twisted",
          "type": "function"
        },
        "index": {
          "description": "Reverse the positions of the two element types in bimap transformation Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "twisted",
          "normalized": "(Bimap a b-\u003eBimap a b)-\u003eBimap b a-\u003eBimap b a",
          "package": "bimap",
          "signature": "(Bimap a b-\u003eBimap a b)-\u003eBimap b a-\u003eBimap b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:twisted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n*log n)\u003c/em\u003e.\nTest if the internal bimap structure is valid. This should be true\nfor any bimap created using the public interface, unless\n\u003ccode\u003e\u003ca\u003efromAscPairListUnchecked\u003c/a\u003e\u003c/code\u003e has been used inappropriately.\n\u003cem\u003eVersion: 0.2\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Bimap",
          "name": "valid",
          "package": "bimap",
          "signature": "Bimap a b -\u003e Bool",
          "source": "src/Data-Bimap.html#valid",
          "type": "function"
        },
        "index": {
          "description": "log Test if the internal bimap structure is valid This should be true for any bimap created using the public interface unless fromAscPairListUnchecked has been used inappropriately Version",
          "hierarchy": "Data Bimap",
          "module": "Data.Bimap",
          "name": "valid",
          "normalized": "Bimap a b-\u003eBool",
          "package": "bimap",
          "signature": "Bimap a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bimap/docs/Data-Bimap.html#v:valid"
      }
    }
  ]
]