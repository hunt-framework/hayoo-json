[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diff3/docs/Data-Algorithm-Diff3.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of a 3-way merge algorithm. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Algorithm.Diff3",
        "fct-package": "diff3",
        "fct-signature": "module",
        "fct-source": "src/Data-Algorithm-Diff3.html",
        "fct-type": "module",
        "title": "Diff3"
      },
      "index": {
        "description": "An implementation of way merge algorithm",
        "hierarchy": "Data Algorithm Diff3",
        "module": "Data.Algorithm.Diff3",
        "name": "Diff3",
        "normalized": "",
        "package": "diff3",
        "partial": "Diff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diff3/docs/Data-Algorithm-Diff3.html#t:Hunk",
      "description": {
        "fct-descr": "\u003cp\u003eA hunk is a collection of changes that occur in a document. A hunk can be\n some changes only in A, only in B, in both A & B (equally), or conflicting\n between A, B and the original document.  All hunks take 3 constructors, which\n are, in order - the elements in the left document, the original document, and\n the right document. This order matches the order of parameters to \u003ccode\u003e\u003ca\u003ediff3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Algorithm.Diff3",
        "fct-package": "diff3",
        "fct-signature": "data",
        "fct-source": "src/Data-Algorithm-Diff3.html#Hunk",
        "fct-type": "data",
        "title": "Hunk"
      },
      "index": {
        "description": "hunk is collection of changes that occur in document hunk can be some changes only in only in in both equally or conflicting between and the original document All hunks take constructors which are in order the elements in the left document the original document and the right document This order matches the order of parameters to diff3",
        "hierarchy": "Data Algorithm Diff3",
        "module": "Data.Algorithm.Diff3",
        "name": "Hunk",
        "normalized": "",
        "package": "diff3",
        "partial": "Hunk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diff3/docs/Data-Algorithm-Diff3.html#v:Conflict",
      "description": {
        "fct-module": "Data.Algorithm.Diff3",
        "fct-package": "diff3",
        "fct-signature": "Conflict [a] [a] [a]",
        "fct-source": "src/Data-Algorithm-Diff3.html#Hunk",
        "fct-type": "function",
        "title": "Conflict"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algorithm Diff3",
        "module": "Data.Algorithm.Diff3",
        "name": "Conflict",
        "normalized": "Conflict[a][a][a]",
        "package": "diff3",
        "partial": "Conflict",
        "signature": "Conflict[a][a][a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diff3/docs/Data-Algorithm-Diff3.html#v:LeftChange",
      "description": {
        "fct-module": "Data.Algorithm.Diff3",
        "fct-package": "diff3",
        "fct-signature": "LeftChange [a]",
        "fct-source": "src/Data-Algorithm-Diff3.html#Hunk",
        "fct-type": "function",
        "title": "LeftChange"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algorithm Diff3",
        "module": "Data.Algorithm.Diff3",
        "name": "LeftChange",
        "normalized": "LeftChange[a]",
        "package": "diff3",
        "partial": "Left Change",
        "signature": "LeftChange[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diff3/docs/Data-Algorithm-Diff3.html#v:RightChange",
      "description": {
        "fct-module": "Data.Algorithm.Diff3",
        "fct-package": "diff3",
        "fct-signature": "RightChange [a]",
        "fct-source": "src/Data-Algorithm-Diff3.html#Hunk",
        "fct-type": "function",
        "title": "RightChange"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algorithm Diff3",
        "module": "Data.Algorithm.Diff3",
        "name": "RightChange",
        "normalized": "RightChange[a]",
        "package": "diff3",
        "partial": "Right Change",
        "signature": "RightChange[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diff3/docs/Data-Algorithm-Diff3.html#v:Unchanged",
      "description": {
        "fct-module": "Data.Algorithm.Diff3",
        "fct-package": "diff3",
        "fct-signature": "Unchanged [a]",
        "fct-source": "src/Data-Algorithm-Diff3.html#Hunk",
        "fct-type": "function",
        "title": "Unchanged"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algorithm Diff3",
        "module": "Data.Algorithm.Diff3",
        "name": "Unchanged",
        "normalized": "Unchanged[a]",
        "package": "diff3",
        "partial": "Unchanged",
        "signature": "Unchanged[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diff3/docs/Data-Algorithm-Diff3.html#v:diff3",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a 3-way diff against 2 documents and the original document. This\n returns a list of \u003ccode\u003e\u003ca\u003eHunk\u003c/a\u003e\u003c/code\u003es, where each \u003ccode\u003e\u003ca\u003eHunk\u003c/a\u003e\u003c/code\u003e contains the original document,\n a change in the left or right side, or is in conflict. This can be considered\n a 'low level' interface to the 3-way diff algorithm - you may be more\n interested in \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Algorithm.Diff3",
        "fct-package": "diff3",
        "fct-signature": "[a] -\u003e [a] -\u003e [a] -\u003e [Hunk a]",
        "fct-source": "src/Data-Algorithm-Diff3.html#diff3",
        "fct-type": "function",
        "title": "diff3"
      },
      "index": {
        "description": "Perform way diff against documents and the original document This returns list of Hunk where each Hunk contains the original document change in the left or right side or is in conflict This can be considered low level interface to the way diff algorithm you may be more interested in merge",
        "hierarchy": "Data Algorithm Diff3",
        "module": "Data.Algorithm.Diff3",
        "name": "diff3",
        "normalized": "[a]-\u003e[a]-\u003e[a]-\u003e[Hunk a]",
        "package": "diff3",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[a]-\u003e[Hunk a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/diff3/docs/Data-Algorithm-Diff3.html#v:merge",
      "description": {
        "fct-module": "Data.Algorithm.Diff3",
        "fct-package": "diff3",
        "fct-signature": "[Hunk a] -\u003e Either [Hunk a] [a]",
        "fct-source": "src/Data-Algorithm-Diff3.html#merge",
        "fct-type": "function",
        "title": "merge"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algorithm Diff3",
        "module": "Data.Algorithm.Diff3",
        "name": "merge",
        "normalized": "[Hunk a]-\u003eEither[Hunk a][a]",
        "package": "diff3",
        "partial": "",
        "signature": "[Hunk a]-\u003eEither[Hunk a][a]"
      }
    }
  }
]