[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-Diff.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is an implementation of the O(ND) diff algorithm as described in\n \"An O(ND) Difference Algorithm and Its Variations (1986)\"\n \u003ca\u003ehttp://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.4.6927\u003c/a\u003e. It is O(mn) in space.\n The algorithm is the same one used by standared Unix diff.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Algorithm.Diff",
        "fct-package": "Diff",
        "fct-signature": "module",
        "fct-source": "src/Data-Algorithm-Diff.html",
        "fct-type": "module",
        "title": "Diff"
      },
      "index": {
        "description": "This is an implementation of the ND diff algorithm as described in An ND Difference Algorithm and Its Variations http citeseerx.ist.psu.edu viewdoc summary doi It is mn in space The algorithm is the same one used by standared Unix diff",
        "hierarchy": "Data Algorithm Diff",
        "module": "Data.Algorithm.Diff",
        "name": "Diff",
        "normalized": "",
        "package": "Diff",
        "partial": "Diff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-Diff.html#t:Diff",
      "description": {
        "fct-descr": "\u003cp\u003eA value is either from the \u003ccode\u003e\u003ca\u003eFirst\u003c/a\u003e\u003c/code\u003e list, the \u003ccode\u003e\u003ca\u003eSecond\u003c/a\u003e\u003c/code\u003e or from \u003ccode\u003e\u003ca\u003eBoth\u003c/a\u003e\u003c/code\u003e.\n \u003ccode\u003e\u003ca\u003eBoth\u003c/a\u003e\u003c/code\u003e contains both the left and right values, in case you are using a form\n of equality that doesn't check all data (for example, if you are using a\n newtype to only perform equality on side of a tuple).\n\u003c/p\u003e",
        "fct-module": "Data.Algorithm.Diff",
        "fct-package": "Diff",
        "fct-signature": "data",
        "fct-source": "src/Data-Algorithm-Diff.html#Diff",
        "fct-type": "data",
        "title": "Diff"
      },
      "index": {
        "description": "value is either from the First list the Second or from Both Both contains both the left and right values in case you are using form of equality that doesn check all data for example if you are using newtype to only perform equality on side of tuple",
        "hierarchy": "Data Algorithm Diff",
        "module": "Data.Algorithm.Diff",
        "name": "Diff",
        "normalized": "",
        "package": "Diff",
        "partial": "Diff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-Diff.html#v:Both",
      "description": {
        "fct-module": "Data.Algorithm.Diff",
        "fct-package": "Diff",
        "fct-signature": "Both a a",
        "fct-source": "src/Data-Algorithm-Diff.html#Diff",
        "fct-type": "function",
        "title": "Both"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algorithm Diff",
        "module": "Data.Algorithm.Diff",
        "name": "Both",
        "normalized": "",
        "package": "Diff",
        "partial": "Both",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-Diff.html#v:First",
      "description": {
        "fct-module": "Data.Algorithm.Diff",
        "fct-package": "Diff",
        "fct-signature": "First a",
        "fct-source": "src/Data-Algorithm-Diff.html#Diff",
        "fct-type": "function",
        "title": "First"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algorithm Diff",
        "module": "Data.Algorithm.Diff",
        "name": "First",
        "normalized": "",
        "package": "Diff",
        "partial": "First",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-Diff.html#v:Second",
      "description": {
        "fct-module": "Data.Algorithm.Diff",
        "fct-package": "Diff",
        "fct-signature": "Second a",
        "fct-source": "src/Data-Algorithm-Diff.html#Diff",
        "fct-type": "function",
        "title": "Second"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algorithm Diff",
        "module": "Data.Algorithm.Diff",
        "name": "Second",
        "normalized": "",
        "package": "Diff",
        "partial": "Second",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-Diff.html#v:getDiff",
      "description": {
        "fct-descr": "\u003cp\u003eTakes two lists and returns a list of differences between them. This is\n \u003ccode\u003e\u003ca\u003egetDiffBy\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e used as predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Algorithm.Diff",
        "fct-package": "Diff",
        "fct-signature": "[t] -\u003e [t] -\u003e [Diff t]",
        "fct-source": "src/Data-Algorithm-Diff.html#getDiff",
        "fct-type": "function",
        "title": "getDiff"
      },
      "index": {
        "description": "Takes two lists and returns list of differences between them This is getDiffBy with used as predicate",
        "hierarchy": "Data Algorithm Diff",
        "module": "Data.Algorithm.Diff",
        "name": "getDiff",
        "normalized": "[a]-\u003e[a]-\u003e[Diff a]",
        "package": "Diff",
        "partial": "Diff",
        "signature": "[t]-\u003e[t]-\u003e[Diff t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-Diff.html#v:getDiffBy",
      "description": {
        "fct-descr": "\u003cp\u003eA form of \u003ccode\u003e\u003ca\u003egetDiff\u003c/a\u003e\u003c/code\u003e with no \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e constraint. Instead, an equality predicate\n is taken as the first argument.\n\u003c/p\u003e",
        "fct-module": "Data.Algorithm.Diff",
        "fct-package": "Diff",
        "fct-signature": "(t -\u003e t -\u003e Bool) -\u003e [t] -\u003e [t] -\u003e [Diff t]",
        "fct-source": "src/Data-Algorithm-Diff.html#getDiffBy",
        "fct-type": "function",
        "title": "getDiffBy"
      },
      "index": {
        "description": "form of getDiff with no Eq constraint Instead an equality predicate is taken as the first argument",
        "hierarchy": "Data Algorithm Diff",
        "module": "Data.Algorithm.Diff",
        "name": "getDiffBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[Diff a]",
        "package": "Diff",
        "partial": "Diff By",
        "signature": "(t-\u003et-\u003eBool)-\u003e[t]-\u003e[t]-\u003e[Diff t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-Diff.html#v:getGroupedDiff",
      "description": {
        "fct-descr": "\u003cp\u003eTakes two lists and returns a list of differences between them, grouped\n into chunks. This is \u003ccode\u003e\u003ca\u003egetGroupedDiffBy\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e used as predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Algorithm.Diff",
        "fct-package": "Diff",
        "fct-signature": "[t] -\u003e [t] -\u003e [Diff [t]]",
        "fct-source": "src/Data-Algorithm-Diff.html#getGroupedDiff",
        "fct-type": "function",
        "title": "getGroupedDiff"
      },
      "index": {
        "description": "Takes two lists and returns list of differences between them grouped into chunks This is getGroupedDiffBy with used as predicate",
        "hierarchy": "Data Algorithm Diff",
        "module": "Data.Algorithm.Diff",
        "name": "getGroupedDiff",
        "normalized": "[a]-\u003e[a]-\u003e[Diff[a]]",
        "package": "Diff",
        "partial": "Grouped Diff",
        "signature": "[t]-\u003e[t]-\u003e[Diff[t]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-Diff.html#v:getGroupedDiffBy",
      "description": {
        "fct-module": "Data.Algorithm.Diff",
        "fct-package": "Diff",
        "fct-signature": "(t -\u003e t -\u003e Bool) -\u003e [t] -\u003e [t] -\u003e [Diff [t]]",
        "fct-source": "src/Data-Algorithm-Diff.html#getGroupedDiffBy",
        "fct-type": "function",
        "title": "getGroupedDiffBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algorithm Diff",
        "module": "Data.Algorithm.Diff",
        "name": "getGroupedDiffBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e[a]-\u003e[a]-\u003e[Diff[a]]",
        "package": "Diff",
        "partial": "Grouped Diff By",
        "signature": "(t-\u003et-\u003eBool)-\u003e[t]-\u003e[t]-\u003e[Diff[t]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-DiffOutput.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAuthor      :  Stephan Wehr (wehr\u003ccode\u003efactisresearch.com) and JP Moresmau (jp\u003c/code\u003emoresmau.fr)\n\u003c/p\u003e\u003cp\u003eGenerates a string output that is similar to diff normal mode\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Algorithm.DiffOutput",
        "fct-package": "Diff",
        "fct-signature": "module",
        "fct-source": "src/Data-Algorithm-DiffOutput.html",
        "fct-type": "module",
        "title": "DiffOutput"
      },
      "index": {
        "description": "Author Stephan Wehr wehr factisresearch.com and JP Moresmau jp moresmau.fr Generates string output that is similar to diff normal mode",
        "hierarchy": "Data Algorithm DiffOutput",
        "module": "Data.Algorithm.DiffOutput",
        "name": "DiffOutput",
        "normalized": "",
        "package": "Diff",
        "partial": "Diff Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-DiffOutput.html#t:DiffOperation",
      "description": {
        "fct-module": "Data.Algorithm.DiffOutput",
        "fct-package": "Diff",
        "fct-signature": "data",
        "fct-source": "src/Data-Algorithm-DiffOutput.html#DiffOperation",
        "fct-type": "data",
        "title": "DiffOperation"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algorithm DiffOutput",
        "module": "Data.Algorithm.DiffOutput",
        "name": "DiffOperation",
        "normalized": "",
        "package": "Diff",
        "partial": "Diff Operation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-DiffOutput.html#t:LineNo",
      "description": {
        "fct-module": "Data.Algorithm.DiffOutput",
        "fct-package": "Diff",
        "fct-signature": "type",
        "fct-source": "src/Data-Algorithm-DiffOutput.html#LineNo",
        "fct-type": "type",
        "title": "LineNo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algorithm DiffOutput",
        "module": "Data.Algorithm.DiffOutput",
        "name": "LineNo",
        "normalized": "",
        "package": "Diff",
        "partial": "Line No",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-DiffOutput.html#t:LineRange",
      "description": {
        "fct-module": "Data.Algorithm.DiffOutput",
        "fct-package": "Diff",
        "fct-signature": "data",
        "fct-source": "src/Data-Algorithm-DiffOutput.html#LineRange",
        "fct-type": "data",
        "title": "LineRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algorithm DiffOutput",
        "module": "Data.Algorithm.DiffOutput",
        "name": "LineRange",
        "normalized": "",
        "package": "Diff",
        "partial": "Line Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-DiffOutput.html#v:Addition",
      "description": {
        "fct-module": "Data.Algorithm.DiffOutput",
        "fct-package": "Diff",
        "fct-signature": "Addition a LineNo",
        "fct-source": "src/Data-Algorithm-DiffOutput.html#DiffOperation",
        "fct-type": "function",
        "title": "Addition"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algorithm DiffOutput",
        "module": "Data.Algorithm.DiffOutput",
        "name": "Addition",
        "normalized": "",
        "package": "Diff",
        "partial": "Addition",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-DiffOutput.html#v:Change",
      "description": {
        "fct-module": "Data.Algorithm.DiffOutput",
        "fct-package": "Diff",
        "fct-signature": "Change a a",
        "fct-source": "src/Data-Algorithm-DiffOutput.html#DiffOperation",
        "fct-type": "function",
        "title": "Change"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algorithm DiffOutput",
        "module": "Data.Algorithm.DiffOutput",
        "name": "Change",
        "normalized": "",
        "package": "Diff",
        "partial": "Change",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-DiffOutput.html#v:Deletion",
      "description": {
        "fct-module": "Data.Algorithm.DiffOutput",
        "fct-package": "Diff",
        "fct-signature": "Deletion a LineNo",
        "fct-source": "src/Data-Algorithm-DiffOutput.html#DiffOperation",
        "fct-type": "function",
        "title": "Deletion"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algorithm DiffOutput",
        "module": "Data.Algorithm.DiffOutput",
        "name": "Deletion",
        "normalized": "",
        "package": "Diff",
        "partial": "Deletion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-DiffOutput.html#v:LineRange",
      "description": {
        "fct-module": "Data.Algorithm.DiffOutput",
        "fct-package": "Diff",
        "fct-signature": "LineRange",
        "fct-source": "src/Data-Algorithm-DiffOutput.html#LineRange",
        "fct-type": "function",
        "title": "LineRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algorithm DiffOutput",
        "module": "Data.Algorithm.DiffOutput",
        "name": "LineRange",
        "normalized": "",
        "package": "Diff",
        "partial": "Line Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-DiffOutput.html#v:lrContents",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Algorithm.DiffOutput",
        "fct-package": "Diff",
        "fct-signature": "[String]",
        "fct-source": "src/Data-Algorithm-DiffOutput.html#LineRange",
        "fct-type": "function",
        "title": "lrContents"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algorithm DiffOutput",
        "module": "Data.Algorithm.DiffOutput",
        "name": "lrContents",
        "normalized": "[String]",
        "package": "Diff",
        "partial": "Contents",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-DiffOutput.html#v:lrNumbers",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Algorithm.DiffOutput",
        "fct-package": "Diff",
        "fct-signature": "(LineNo, LineNo)",
        "fct-source": "src/Data-Algorithm-DiffOutput.html#LineRange",
        "fct-type": "function",
        "title": "lrNumbers"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Algorithm DiffOutput",
        "module": "Data.Algorithm.DiffOutput",
        "name": "lrNumbers",
        "normalized": "(LineNo,LineNo)",
        "package": "Diff",
        "partial": "Numbers",
        "signature": "(LineNo,LineNo)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-DiffOutput.html#v:ppDiff",
      "description": {
        "fct-descr": "\u003cp\u003epretty print the differences. The output is similar to the output of the diff utility\n\u003c/p\u003e",
        "fct-module": "Data.Algorithm.DiffOutput",
        "fct-package": "Diff",
        "fct-signature": "[Diff [String]] -\u003e String",
        "fct-source": "src/Data-Algorithm-DiffOutput.html#ppDiff",
        "fct-type": "function",
        "title": "ppDiff"
      },
      "index": {
        "description": "pretty print the differences The output is similar to the output of the diff utility",
        "hierarchy": "Data Algorithm DiffOutput",
        "module": "Data.Algorithm.DiffOutput",
        "name": "ppDiff",
        "normalized": "[Diff[String]]-\u003eString",
        "package": "Diff",
        "partial": "Diff",
        "signature": "[Diff[String]]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Diff/docs/Data-Algorithm-DiffOutput.html#v:prettyDiffs",
      "description": {
        "fct-descr": "\u003cp\u003epretty print of diff operations\n\u003c/p\u003e",
        "fct-module": "Data.Algorithm.DiffOutput",
        "fct-package": "Diff",
        "fct-signature": "[DiffOperation LineRange] -\u003e Doc",
        "fct-source": "src/Data-Algorithm-DiffOutput.html#prettyDiffs",
        "fct-type": "function",
        "title": "prettyDiffs"
      },
      "index": {
        "description": "pretty print of diff operations",
        "hierarchy": "Data Algorithm DiffOutput",
        "module": "Data.Algorithm.DiffOutput",
        "name": "prettyDiffs",
        "normalized": "[DiffOperation LineRange]-\u003eDoc",
        "package": "Diff",
        "partial": "Diffs",
        "signature": "[DiffOperation LineRange]-\u003eDoc"
      }
    }
  }
]