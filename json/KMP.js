[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/KMP/docs/Data-Algorithms-KMP.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements the Knuth-Morris-Pratt algorithm.\n It can search a word in a text in O(m+n) time, where m and n are the length of the word and the text.\n\u003c/p\u003e\u003cp\u003eThis module can apply on any list of instance of Eq.\n\u003c/p\u003e\u003cp\u003eDonald Knuth; James H. Morris, Jr, Vaughan Pratt (1977).\n Fast pattern matching in strings.\n SIAM Journal on Computing 6 (2): 323-350. doi:10.1137/0206024\n\u003c/p\u003e\u003cp\u003eSample usage:\n\u003c/p\u003e\u003cpre\u003e\n  let\n    word = \"abababcaba\"\n    text = \"abababababcabababcababbb\"\n    kmpTable = build word\n    result = match kmpTable text\n    -- the result should be [4, 11]\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Algorithms.KMP",
        "fct-package": "KMP",
        "fct-signature": "module",
        "fct-source": "src/Data-Algorithms-KMP.html",
        "fct-type": "module",
        "title": "KMP"
      },
      "index": {
        "description": "This module implements the Knuth-Morris-Pratt algorithm It can search word in text in time where and are the length of the word and the text This module can apply on any list of instance of Eq Donald Knuth James Morris Jr Vaughan Pratt Fast pattern matching in strings SIAM Journal on Computing doi Sample usage let word abababcaba text abababababcabababcababbb kmpTable build word result match kmpTable text the result should be",
        "hierarchy": "Data Algorithms KMP",
        "module": "Data.Algorithms.KMP",
        "name": "KMP",
        "normalized": "",
        "package": "KMP",
        "partial": "KMP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/KMP/docs/Data-Algorithms-KMP.html#t:Table",
      "description": {
        "fct-descr": "\u003cp\u003eThe solid data type of KMP table\n\u003c/p\u003e",
        "fct-module": "Data.Algorithms.KMP",
        "fct-package": "KMP",
        "fct-signature": "data",
        "fct-source": "src/Data-Algorithms-KMP.html#Table",
        "fct-type": "data",
        "title": "Table"
      },
      "index": {
        "description": "The solid data type of KMP table",
        "hierarchy": "Data Algorithms KMP",
        "module": "Data.Algorithms.KMP",
        "name": "Table",
        "normalized": "",
        "package": "KMP",
        "partial": "Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/KMP/docs/Data-Algorithms-KMP.html#v:build",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ebuild\u003c/a\u003e\u003c/code\u003e function eats a pattern (list of some Eq) and generates a KMP table.\n\u003c/p\u003e\u003cp\u003eThe time and space complexities are both O(length of the pattern)\n\u003c/p\u003e",
        "fct-module": "Data.Algorithms.KMP",
        "fct-package": "KMP",
        "fct-signature": "[a] -\u003e Table a",
        "fct-source": "src/Data-Algorithms-KMP.html#build",
        "fct-type": "function",
        "title": "build"
      },
      "index": {
        "description": "The build function eats pattern list of some Eq and generates KMP table The time and space complexities are both length of the pattern",
        "hierarchy": "Data Algorithms KMP",
        "module": "Data.Algorithms.KMP",
        "name": "build",
        "normalized": "[a]-\u003eTable a",
        "package": "KMP",
        "partial": "",
        "signature": "[a]-\u003eTable a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/KMP/docs/Data-Algorithms-KMP.html#v:match",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ematch\u003c/a\u003e\u003c/code\u003e function takes the KMP table and a list to be searched (might be infinite)\n and then generates the search results as a list of every matched begining (might be infinite).\n\u003c/p\u003e\u003cp\u003eThe time complexity is O(length of the pattern + length of the searched list)\n\u003c/p\u003e",
        "fct-module": "Data.Algorithms.KMP",
        "fct-package": "KMP",
        "fct-signature": "Table a -\u003e [a] -\u003e [Int]",
        "fct-source": "src/Data-Algorithms-KMP.html#match",
        "fct-type": "function",
        "title": "match"
      },
      "index": {
        "description": "The match function takes the KMP table and list to be searched might be infinite and then generates the search results as list of every matched begining might be infinite The time complexity is length of the pattern length of the searched list",
        "hierarchy": "Data Algorithms KMP",
        "module": "Data.Algorithms.KMP",
        "name": "match",
        "normalized": "Table a-\u003e[a]-\u003e[Int]",
        "package": "KMP",
        "partial": "",
        "signature": "Table a-\u003e[a]-\u003e[Int]"
      }
    }
  }
]