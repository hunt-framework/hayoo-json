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
        "word": "Diff"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is an implementation of the O(ND) diff algorithm as described in\n \"An O(ND) Difference Algorithm and Its Variations (1986)\"\n \u003ca\u003ehttp://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.4.6927\u003c/a\u003e. It is O(mn) in space.\n The algorithm is the same one used by standared Unix diff.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Algorithm.Diff",
          "name": "Diff",
          "package": "Diff",
          "source": "src/Data-Algorithm-Diff.html",
          "type": "module"
        },
        "index": {
          "description": "This is an implementation of the ND diff algorithm as described in An ND Difference Algorithm and Its Variations http citeseerx.ist.psu.edu viewdoc summary doi It is mn in space The algorithm is the same one used by standared Unix diff",
          "hierarchy": "Data Algorithm Diff",
          "module": "Data.Algorithm.Diff",
          "name": "Diff",
          "package": "Diff",
          "partial": "Diff",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-Diff.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value is either from the \u003ccode\u003e\u003ca\u003eFirst\u003c/a\u003e\u003c/code\u003e list, the \u003ccode\u003e\u003ca\u003eSecond\u003c/a\u003e\u003c/code\u003e or from \u003ccode\u003e\u003ca\u003eBoth\u003c/a\u003e\u003c/code\u003e.\n \u003ccode\u003e\u003ca\u003eBoth\u003c/a\u003e\u003c/code\u003e contains both the left and right values, in case you are using a form\n of equality that doesn't check all data (for example, if you are using a\n newtype to only perform equality on side of a tuple).\n\u003c/p\u003e",
          "module": "Data.Algorithm.Diff",
          "name": "Diff",
          "package": "Diff",
          "source": "src/Data-Algorithm-Diff.html#Diff",
          "type": "data"
        },
        "index": {
          "description": "value is either from the First list the Second or from Both Both contains both the left and right values in case you are using form of equality that doesn check all data for example if you are using newtype to only perform equality on side of tuple",
          "hierarchy": "Data Algorithm Diff",
          "module": "Data.Algorithm.Diff",
          "name": "Diff",
          "package": "Diff",
          "partial": "Diff",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-Diff.html#t:Diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algorithm.Diff",
          "name": "Both",
          "package": "Diff",
          "signature": "Both a a",
          "source": "src/Data-Algorithm-Diff.html#Diff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algorithm Diff",
          "module": "Data.Algorithm.Diff",
          "name": "Both",
          "package": "Diff",
          "partial": "Both",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-Diff.html#v:Both"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algorithm.Diff",
          "name": "First",
          "package": "Diff",
          "signature": "First a",
          "source": "src/Data-Algorithm-Diff.html#Diff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algorithm Diff",
          "module": "Data.Algorithm.Diff",
          "name": "First",
          "package": "Diff",
          "partial": "First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-Diff.html#v:First"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algorithm.Diff",
          "name": "Second",
          "package": "Diff",
          "signature": "Second a",
          "source": "src/Data-Algorithm-Diff.html#Diff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algorithm Diff",
          "module": "Data.Algorithm.Diff",
          "name": "Second",
          "package": "Diff",
          "partial": "Second",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-Diff.html#v:Second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes two lists and returns a list of differences between them. This is\n \u003ccode\u003e\u003ca\u003egetDiffBy\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e used as predicate.\n\u003c/p\u003e",
          "module": "Data.Algorithm.Diff",
          "name": "getDiff",
          "package": "Diff",
          "signature": "[t] -\u003e [t] -\u003e [Diff t]",
          "source": "src/Data-Algorithm-Diff.html#getDiff",
          "type": "function"
        },
        "index": {
          "description": "Takes two lists and returns list of differences between them This is getDiffBy with used as predicate",
          "hierarchy": "Data Algorithm Diff",
          "module": "Data.Algorithm.Diff",
          "name": "getDiff",
          "normalized": "[a]-\u003e[a]-\u003e[Diff a]",
          "package": "Diff",
          "partial": "Diff",
          "signature": "[t]-\u003e[t]-\u003e[Diff t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-Diff.html#v:getDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA form of \u003ccode\u003e\u003ca\u003egetDiff\u003c/a\u003e\u003c/code\u003e with no \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e constraint. Instead, an equality predicate\n is taken as the first argument.\n\u003c/p\u003e",
          "module": "Data.Algorithm.Diff",
          "name": "getDiffBy",
          "package": "Diff",
          "signature": "(t -\u003e t -\u003e Bool) -\u003e [t] -\u003e [t] -\u003e [Diff t]",
          "source": "src/Data-Algorithm-Diff.html#getDiffBy",
          "type": "function"
        },
        "index": {
          "description": "form of getDiff with no Eq constraint Instead an equality predicate is taken as the first argument",
          "hierarchy": "Data Algorithm Diff",
          "module": "Data.Algorithm.Diff",
          "name": "getDiffBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[Diff a]",
          "package": "Diff",
          "partial": "Diff By",
          "signature": "(t-\u003et-\u003eBool)-\u003e[t]-\u003e[t]-\u003e[Diff t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-Diff.html#v:getDiffBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes two lists and returns a list of differences between them, grouped\n into chunks. This is \u003ccode\u003e\u003ca\u003egetGroupedDiffBy\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e used as predicate.\n\u003c/p\u003e",
          "module": "Data.Algorithm.Diff",
          "name": "getGroupedDiff",
          "package": "Diff",
          "signature": "[t] -\u003e [t] -\u003e [Diff [t]]",
          "source": "src/Data-Algorithm-Diff.html#getGroupedDiff",
          "type": "function"
        },
        "index": {
          "description": "Takes two lists and returns list of differences between them grouped into chunks This is getGroupedDiffBy with used as predicate",
          "hierarchy": "Data Algorithm Diff",
          "module": "Data.Algorithm.Diff",
          "name": "getGroupedDiff",
          "normalized": "[a]-\u003e[a]-\u003e[Diff[a]]",
          "package": "Diff",
          "partial": "Grouped Diff",
          "signature": "[t]-\u003e[t]-\u003e[Diff[t]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-Diff.html#v:getGroupedDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algorithm.Diff",
          "name": "getGroupedDiffBy",
          "package": "Diff",
          "signature": "(t -\u003e t -\u003e Bool) -\u003e [t] -\u003e [t] -\u003e [Diff [t]]",
          "source": "src/Data-Algorithm-Diff.html#getGroupedDiffBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algorithm Diff",
          "module": "Data.Algorithm.Diff",
          "name": "getGroupedDiffBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[Diff[a]]",
          "package": "Diff",
          "partial": "Grouped Diff By",
          "signature": "(t-\u003et-\u003eBool)-\u003e[t]-\u003e[t]-\u003e[Diff[t]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-Diff.html#v:getGroupedDiffBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAuthor      :  Stephan Wehr (wehr\u003ccode\u003efactisresearch.com) and JP Moresmau (jp\u003c/code\u003emoresmau.fr)\n\u003c/p\u003e\u003cp\u003eGenerates a string output that is similar to diff normal mode\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Algorithm.DiffOutput",
          "name": "DiffOutput",
          "package": "Diff",
          "source": "src/Data-Algorithm-DiffOutput.html",
          "type": "module"
        },
        "index": {
          "description": "Author Stephan Wehr wehr factisresearch.com and JP Moresmau jp moresmau.fr Generates string output that is similar to diff normal mode",
          "hierarchy": "Data Algorithm DiffOutput",
          "module": "Data.Algorithm.DiffOutput",
          "name": "DiffOutput",
          "package": "Diff",
          "partial": "Diff Output",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-DiffOutput.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algorithm.DiffOutput",
          "name": "DiffOperation",
          "package": "Diff",
          "source": "src/Data-Algorithm-DiffOutput.html#DiffOperation",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Algorithm DiffOutput",
          "module": "Data.Algorithm.DiffOutput",
          "name": "DiffOperation",
          "package": "Diff",
          "partial": "Diff Operation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-DiffOutput.html#t:DiffOperation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algorithm.DiffOutput",
          "name": "LineNo",
          "package": "Diff",
          "source": "src/Data-Algorithm-DiffOutput.html#LineNo",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Algorithm DiffOutput",
          "module": "Data.Algorithm.DiffOutput",
          "name": "LineNo",
          "package": "Diff",
          "partial": "Line No",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-DiffOutput.html#t:LineNo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algorithm.DiffOutput",
          "name": "LineRange",
          "package": "Diff",
          "source": "src/Data-Algorithm-DiffOutput.html#LineRange",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Algorithm DiffOutput",
          "module": "Data.Algorithm.DiffOutput",
          "name": "LineRange",
          "package": "Diff",
          "partial": "Line Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-DiffOutput.html#t:LineRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algorithm.DiffOutput",
          "name": "Addition",
          "package": "Diff",
          "signature": "Addition a LineNo",
          "source": "src/Data-Algorithm-DiffOutput.html#DiffOperation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algorithm DiffOutput",
          "module": "Data.Algorithm.DiffOutput",
          "name": "Addition",
          "package": "Diff",
          "partial": "Addition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-DiffOutput.html#v:Addition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algorithm.DiffOutput",
          "name": "Change",
          "package": "Diff",
          "signature": "Change a a",
          "source": "src/Data-Algorithm-DiffOutput.html#DiffOperation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algorithm DiffOutput",
          "module": "Data.Algorithm.DiffOutput",
          "name": "Change",
          "package": "Diff",
          "partial": "Change",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-DiffOutput.html#v:Change"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algorithm.DiffOutput",
          "name": "Deletion",
          "package": "Diff",
          "signature": "Deletion a LineNo",
          "source": "src/Data-Algorithm-DiffOutput.html#DiffOperation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algorithm DiffOutput",
          "module": "Data.Algorithm.DiffOutput",
          "name": "Deletion",
          "package": "Diff",
          "partial": "Deletion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-DiffOutput.html#v:Deletion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algorithm.DiffOutput",
          "name": "LineRange",
          "package": "Diff",
          "signature": "LineRange",
          "source": "src/Data-Algorithm-DiffOutput.html#LineRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algorithm DiffOutput",
          "module": "Data.Algorithm.DiffOutput",
          "name": "LineRange",
          "package": "Diff",
          "partial": "Line Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-DiffOutput.html#v:LineRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algorithm.DiffOutput",
          "name": "lrContents",
          "package": "Diff",
          "signature": "[String]",
          "source": "src/Data-Algorithm-DiffOutput.html#LineRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algorithm DiffOutput",
          "module": "Data.Algorithm.DiffOutput",
          "name": "lrContents",
          "normalized": "[String]",
          "package": "Diff",
          "partial": "Contents",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-DiffOutput.html#v:lrContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Algorithm.DiffOutput",
          "name": "lrNumbers",
          "package": "Diff",
          "signature": "(LineNo, LineNo)",
          "source": "src/Data-Algorithm-DiffOutput.html#LineRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Algorithm DiffOutput",
          "module": "Data.Algorithm.DiffOutput",
          "name": "lrNumbers",
          "normalized": "(LineNo,LineNo)",
          "package": "Diff",
          "partial": "Numbers",
          "signature": "(LineNo,LineNo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-DiffOutput.html#v:lrNumbers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epretty print the differences. The output is similar to the output of the diff utility\n\u003c/p\u003e",
          "module": "Data.Algorithm.DiffOutput",
          "name": "ppDiff",
          "package": "Diff",
          "signature": "[Diff [String]] -\u003e String",
          "source": "src/Data-Algorithm-DiffOutput.html#ppDiff",
          "type": "function"
        },
        "index": {
          "description": "pretty print the differences The output is similar to the output of the diff utility",
          "hierarchy": "Data Algorithm DiffOutput",
          "module": "Data.Algorithm.DiffOutput",
          "name": "ppDiff",
          "normalized": "[Diff[String]]-\u003eString",
          "package": "Diff",
          "partial": "Diff",
          "signature": "[Diff[String]]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-DiffOutput.html#v:ppDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epretty print of diff operations\n\u003c/p\u003e",
          "module": "Data.Algorithm.DiffOutput",
          "name": "prettyDiffs",
          "package": "Diff",
          "signature": "[DiffOperation LineRange] -\u003e Doc",
          "source": "src/Data-Algorithm-DiffOutput.html#prettyDiffs",
          "type": "function"
        },
        "index": {
          "description": "pretty print of diff operations",
          "hierarchy": "Data Algorithm DiffOutput",
          "module": "Data.Algorithm.DiffOutput",
          "name": "prettyDiffs",
          "normalized": "[DiffOperation LineRange]-\u003eDoc",
          "package": "Diff",
          "partial": "Diffs",
          "signature": "[DiffOperation LineRange]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-DiffOutput.html#v:prettyDiffs"
      }
    }
  ]
]