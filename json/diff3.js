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
        "word": "diff3"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of a 3-way merge algorithm. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Algorithm.Diff3",
          "name": "Diff3",
          "package": "diff3",
          "source": "src/Data-Algorithm-Diff3.html",
          "type": "module"
        },
        "index": {
          "description": "An implementation of way merge algorithm",
          "hierarchy": "Data Algorithm Diff3",
          "module": "Data.Algorithm.Diff3",
          "name": "Diff3",
          "package": "diff3",
          "partial": "Diff",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diff3/docs/Data-Algorithm-Diff3.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hunk is a collection of changes that occur in a document. A hunk can be\n some changes only in A, only in B, in both A & B (equally), or conflicting\n between A, B and the original document.  All hunks take 3 constructors, which\n are, in order - the elements in the left document, the original document, and\n the right document. This order matches the order of parameters to \u003ccode\u003e\u003ca\u003ediff3\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Algorithm.Diff3",
          "name": "Hunk",
          "package": "diff3",
          "source": "src/Data-Algorithm-Diff3.html#Hunk",
          "type": "data"
        },
        "index": {
          "description": "hunk is collection of changes that occur in document hunk can be some changes only in only in in both equally or conflicting between and the original document All hunks take constructors which are in order the elements in the left document the original document and the right document This order matches the order of parameters to diff3",
          "hierarchy": "Data Algorithm Diff3",
          "module": "Data.Algorithm.Diff3",
          "name": "Hunk",
          "package": "diff3",
          "partial": "Hunk",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diff3/docs/Data-Algorithm-Diff3.html#t:Hunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algorithm.Diff3",
          "name": "Conflict",
          "package": "diff3",
          "signature": "Conflict [a] [a] [a]",
          "source": "src/Data-Algorithm-Diff3.html#Hunk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algorithm Diff3",
          "module": "Data.Algorithm.Diff3",
          "name": "Conflict",
          "normalized": "Conflict[a][a][a]",
          "package": "diff3",
          "partial": "Conflict",
          "signature": "Conflict[a][a][a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diff3/docs/Data-Algorithm-Diff3.html#v:Conflict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algorithm.Diff3",
          "name": "LeftChange",
          "package": "diff3",
          "signature": "LeftChange [a]",
          "source": "src/Data-Algorithm-Diff3.html#Hunk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algorithm Diff3",
          "module": "Data.Algorithm.Diff3",
          "name": "LeftChange",
          "normalized": "LeftChange[a]",
          "package": "diff3",
          "partial": "Left Change",
          "signature": "LeftChange[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diff3/docs/Data-Algorithm-Diff3.html#v:LeftChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algorithm.Diff3",
          "name": "RightChange",
          "package": "diff3",
          "signature": "RightChange [a]",
          "source": "src/Data-Algorithm-Diff3.html#Hunk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algorithm Diff3",
          "module": "Data.Algorithm.Diff3",
          "name": "RightChange",
          "normalized": "RightChange[a]",
          "package": "diff3",
          "partial": "Right Change",
          "signature": "RightChange[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diff3/docs/Data-Algorithm-Diff3.html#v:RightChange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algorithm.Diff3",
          "name": "Unchanged",
          "package": "diff3",
          "signature": "Unchanged [a]",
          "source": "src/Data-Algorithm-Diff3.html#Hunk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algorithm Diff3",
          "module": "Data.Algorithm.Diff3",
          "name": "Unchanged",
          "normalized": "Unchanged[a]",
          "package": "diff3",
          "partial": "Unchanged",
          "signature": "Unchanged[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diff3/docs/Data-Algorithm-Diff3.html#v:Unchanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a 3-way diff against 2 documents and the original document. This\n returns a list of \u003ccode\u003e\u003ca\u003eHunk\u003c/a\u003e\u003c/code\u003es, where each \u003ccode\u003e\u003ca\u003eHunk\u003c/a\u003e\u003c/code\u003e contains the original document,\n a change in the left or right side, or is in conflict. This can be considered\n a 'low level' interface to the 3-way diff algorithm - you may be more\n interested in \u003ccode\u003e\u003ca\u003emerge\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Algorithm.Diff3",
          "name": "diff3",
          "package": "diff3",
          "signature": "[a] -\u003e [a] -\u003e [a] -\u003e [Hunk a]",
          "source": "src/Data-Algorithm-Diff3.html#diff3",
          "type": "function"
        },
        "index": {
          "description": "Perform way diff against documents and the original document This returns list of Hunk where each Hunk contains the original document change in the left or right side or is in conflict This can be considered low level interface to the way diff algorithm you may be more interested in merge",
          "hierarchy": "Data Algorithm Diff3",
          "module": "Data.Algorithm.Diff3",
          "name": "diff3",
          "normalized": "[a]-\u003e[a]-\u003e[a]-\u003e[Hunk a]",
          "package": "diff3",
          "signature": "[a]-\u003e[a]-\u003e[a]-\u003e[Hunk a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diff3/docs/Data-Algorithm-Diff3.html#v:diff3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algorithm.Diff3",
          "name": "merge",
          "package": "diff3",
          "signature": "[Hunk a] -\u003e Either [Hunk a] [a]",
          "source": "src/Data-Algorithm-Diff3.html#merge",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algorithm Diff3",
          "module": "Data.Algorithm.Diff3",
          "name": "merge",
          "normalized": "[Hunk a]-\u003eEither[Hunk a][a]",
          "package": "diff3",
          "signature": "[Hunk a]-\u003eEither[Hunk a][a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diff3/docs/Data-Algorithm-Diff3.html#v:merge"
      }
    }
  ]
]