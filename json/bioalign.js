[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData structures and helper functions for calculating alignments\n\u003c/p\u003e\u003cp\u003eThere are two ways to view an alignment: either as a list of edits\n   (i.e., insertions, deletions, or substitutions), or as a set of sequences\n   with inserted gaps.\n\u003c/p\u003e\u003cp\u003eThe edit list approach is perhaps more restrictive model but doesn't generalize\n   to multiple alignments.\n\u003c/p\u003e\u003cp\u003eThe gap approach is more general, and probably more commonly used by other software\n   (see e.g. the ACE file format).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Bio.Alignment.AlignData",
        "fct-package": "bioalign",
        "fct-signature": "module",
        "fct-source": "src/Bio-Alignment-AlignData.html",
        "fct-type": "module",
        "title": "AlignData"
      },
      "index": {
        "description": "Data structures and helper functions for calculating alignments There are two ways to view an alignment either as list of edits i.e insertions deletions or substitutions or as set of sequences with inserted gaps The edit list approach is perhaps more restrictive model but doesn generalize to multiple alignments The gap approach is more general and probably more commonly used by other software see e.g the ACE file format",
        "hierarchy": "Bio Alignment AlignData",
        "module": "Bio.Alignment.AlignData",
        "name": "AlignData",
        "normalized": "",
        "package": "bioalign",
        "partial": "Align Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#t:Alignment",
      "description": {
        "fct-module": "Bio.Alignment.AlignData",
        "fct-package": "bioalign",
        "fct-signature": "type",
        "fct-source": "src/Bio-Alignment-AlignData.html#Alignment",
        "fct-type": "type",
        "title": "Alignment"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Alignment AlignData",
        "module": "Bio.Alignment.AlignData",
        "name": "Alignment",
        "normalized": "",
        "package": "bioalign",
        "partial": "Alignment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#t:Chr",
      "description": {
        "fct-descr": "\u003cp\u003eThe sequence element type, used in alignments.\n\u003c/p\u003e",
        "fct-module": "Bio.Alignment.AlignData",
        "fct-package": "bioalign",
        "fct-signature": "type",
        "fct-source": "src/Bio-Alignment-AlignData.html#Chr",
        "fct-type": "type",
        "title": "Chr"
      },
      "index": {
        "description": "The sequence element type used in alignments",
        "hierarchy": "Bio Alignment AlignData",
        "module": "Bio.Alignment.AlignData",
        "name": "Chr",
        "normalized": "",
        "package": "bioalign",
        "partial": "Chr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#t:Edit",
      "description": {
        "fct-descr": "\u003cp\u003eAn Edit is either the insertion, the deletion,\n   or the replacement of a character.\n\u003c/p\u003e",
        "fct-module": "Bio.Alignment.AlignData",
        "fct-package": "bioalign",
        "fct-signature": "data",
        "fct-source": "src/Bio-Alignment-AlignData.html#Edit",
        "fct-type": "data",
        "title": "Edit"
      },
      "index": {
        "description": "An Edit is either the insertion the deletion or the replacement of character",
        "hierarchy": "Bio Alignment AlignData",
        "module": "Bio.Alignment.AlignData",
        "name": "Edit",
        "normalized": "",
        "package": "bioalign",
        "partial": "Edit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#t:EditList",
      "description": {
        "fct-descr": "\u003cp\u003eAn alignment is a sequence of edits.\n\u003c/p\u003e",
        "fct-module": "Bio.Alignment.AlignData",
        "fct-package": "bioalign",
        "fct-signature": "type",
        "fct-source": "src/Bio-Alignment-AlignData.html#EditList",
        "fct-type": "type",
        "title": "EditList"
      },
      "index": {
        "description": "An alignment is sequence of edits",
        "hierarchy": "Bio Alignment AlignData",
        "module": "Bio.Alignment.AlignData",
        "name": "EditList",
        "normalized": "",
        "package": "bioalign",
        "partial": "Edit List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#t:Gaps",
      "description": {
        "fct-module": "Bio.Alignment.AlignData",
        "fct-package": "bioalign",
        "fct-signature": "type",
        "fct-source": "src/Bio-Alignment-AlignData.html#Gaps",
        "fct-type": "type",
        "title": "Gaps"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Alignment AlignData",
        "module": "Bio.Alignment.AlignData",
        "name": "Gaps",
        "normalized": "",
        "package": "bioalign",
        "partial": "Gaps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#t:Selector",
      "description": {
        "fct-descr": "\u003cp\u003eA Selector consists of a zero element, and a funcition\n   that chooses a possible Edit operation, and generates an updated result.\n\u003c/p\u003e",
        "fct-module": "Bio.Alignment.AlignData",
        "fct-package": "bioalign",
        "fct-signature": "type",
        "fct-source": "src/Bio-Alignment-AlignData.html#Selector",
        "fct-type": "type",
        "title": "Selector"
      },
      "index": {
        "description": "Selector consists of zero element and funcition that chooses possible Edit operation and generates an updated result",
        "hierarchy": "Bio Alignment AlignData",
        "module": "Bio.Alignment.AlignData",
        "name": "Selector",
        "normalized": "",
        "package": "bioalign",
        "partial": "Selector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#t:Sequence",
      "description": {
        "fct-module": "Bio.Alignment.AlignData",
        "fct-package": "bioalign",
        "fct-signature": "data",
        "fct-source": "src/Bio-Alignment-AlignData.html#Sequence",
        "fct-type": "data",
        "title": "Sequence"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Alignment AlignData",
        "module": "Bio.Alignment.AlignData",
        "name": "Sequence",
        "normalized": "",
        "package": "bioalign",
        "partial": "Sequence",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#t:SubstMx",
      "description": {
        "fct-descr": "\u003cp\u003eA substitution matrix gives scores for replacing a character with another.\n   Typically, it will be symmetric.  It is type-tagged with the alphabet - Nuc or Amino.\n\u003c/p\u003e",
        "fct-module": "Bio.Alignment.AlignData",
        "fct-package": "bioalign",
        "fct-signature": "type",
        "fct-source": "src/Bio-Alignment-AlignData.html#SubstMx",
        "fct-type": "type",
        "title": "SubstMx"
      },
      "index": {
        "description": "substitution matrix gives scores for replacing character with another Typically it will be symmetric It is type-tagged with the alphabet Nuc or Amino",
        "hierarchy": "Bio Alignment AlignData",
        "module": "Bio.Alignment.AlignData",
        "name": "SubstMx",
        "normalized": "",
        "package": "bioalign",
        "partial": "Subst Mx",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#v:Del",
      "description": {
        "fct-module": "Bio.Alignment.AlignData",
        "fct-package": "bioalign",
        "fct-signature": "Del Chr",
        "fct-source": "src/Bio-Alignment-AlignData.html#Edit",
        "fct-type": "function",
        "title": "Del"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Alignment AlignData",
        "module": "Bio.Alignment.AlignData",
        "name": "Del",
        "normalized": "",
        "package": "bioalign",
        "partial": "Del",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#v:Ins",
      "description": {
        "fct-module": "Bio.Alignment.AlignData",
        "fct-package": "bioalign",
        "fct-signature": "Ins Chr",
        "fct-source": "src/Bio-Alignment-AlignData.html#Edit",
        "fct-type": "function",
        "title": "Ins"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Alignment AlignData",
        "module": "Bio.Alignment.AlignData",
        "name": "Ins",
        "normalized": "",
        "package": "bioalign",
        "partial": "Ins",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#v:Repl",
      "description": {
        "fct-module": "Bio.Alignment.AlignData",
        "fct-package": "bioalign",
        "fct-signature": "Repl Chr Chr",
        "fct-source": "src/Bio-Alignment-AlignData.html#Edit",
        "fct-type": "function",
        "title": "Repl"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Alignment AlignData",
        "module": "Bio.Alignment.AlignData",
        "name": "Repl",
        "normalized": "",
        "package": "bioalign",
        "partial": "Repl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#v:Seq",
      "description": {
        "fct-module": "Bio.Alignment.AlignData",
        "fct-package": "bioalign",
        "fct-signature": "Seq SeqLabel SeqData (Maybe QualData)",
        "fct-source": "src/Bio-Alignment-AlignData.html#Sequence",
        "fct-type": "function",
        "title": "Seq"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Alignment AlignData",
        "module": "Bio.Alignment.AlignData",
        "name": "Seq",
        "normalized": "",
        "package": "bioalign",
        "partial": "Seq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#v:columns",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate a set of columns containing scores\n   This represents the columns of the alignment matrix, but will only require linear space\n   for score calculation.\n\u003c/p\u003e",
        "fct-module": "Bio.Alignment.AlignData",
        "fct-package": "bioalign",
        "fct-signature": "Selector a -\u003e a -\u003e Sequence -\u003e Sequence -\u003e [[a]]",
        "fct-source": "src/Bio-Alignment-AlignData.html#columns",
        "fct-type": "function",
        "title": "columns"
      },
      "index": {
        "description": "Calculate set of columns containing scores This represents the columns of the alignment matrix but will only require linear space for score calculation",
        "hierarchy": "Bio Alignment AlignData",
        "module": "Bio.Alignment.AlignData",
        "name": "columns",
        "normalized": "Selector a-\u003ea-\u003eSequence-\u003eSequence-\u003e[[a]]",
        "package": "bioalign",
        "partial": "",
        "signature": "Selector a-\u003ea-\u003eSequence-\u003eSequence-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#v:eval",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate an Edit based on SubstMx and gap penalty\n\u003c/p\u003e",
        "fct-module": "Bio.Alignment.AlignData",
        "fct-package": "bioalign",
        "fct-signature": "SubstMx t a -\u003e a -\u003e Edit -\u003e a",
        "fct-source": "src/Bio-Alignment-AlignData.html#eval",
        "fct-type": "function",
        "title": "eval"
      },
      "index": {
        "description": "Evaluate an Edit based on SubstMx and gap penalty",
        "hierarchy": "Bio Alignment AlignData",
        "module": "Bio.Alignment.AlignData",
        "name": "eval",
        "normalized": "SubstMx a b-\u003eb-\u003eEdit-\u003eb",
        "package": "bioalign",
        "partial": "",
        "signature": "SubstMx t a-\u003ea-\u003eEdit-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#v:extractGaps",
      "description": {
        "fct-descr": "\u003cp\u003eGaps are coded as \u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003es, this function removes them, and returns\n   the sequence along with the list of gap positions.\n   note that gaps are positioned relative to the *gapped* sequence \n   (contrast to stmassembler/Cluster.hs)\n\u003c/p\u003e",
        "fct-module": "Bio.Alignment.AlignData",
        "fct-package": "bioalign",
        "fct-signature": "SeqData -\u003e (SeqData, Gaps)",
        "fct-source": "src/Bio-Alignment-AlignData.html#extractGaps",
        "fct-type": "function",
        "title": "extractGaps"
      },
      "index": {
        "description": "Gaps are coded as this function removes them and returns the sequence along with the list of gap positions note that gaps are positioned relative to the gapped sequence contrast to stmassembler Cluster.hs",
        "hierarchy": "Bio Alignment AlignData",
        "module": "Bio.Alignment.AlignData",
        "name": "extractGaps",
        "normalized": "SeqData-\u003e(SeqData,Gaps)",
        "package": "bioalign",
        "partial": "Gaps",
        "signature": "SeqData-\u003e(SeqData,Gaps)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#v:insertGaps",
      "description": {
        "fct-module": "Bio.Alignment.AlignData",
        "fct-package": "bioalign",
        "fct-signature": "Char -\u003e (SeqData, Gaps) -\u003e SeqData",
        "fct-source": "src/Bio-Alignment-AlignData.html#insertGaps",
        "fct-type": "function",
        "title": "insertGaps"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Alignment AlignData",
        "module": "Bio.Alignment.AlignData",
        "name": "insertGaps",
        "normalized": "Char-\u003e(SeqData,Gaps)-\u003eSeqData",
        "package": "bioalign",
        "partial": "Gaps",
        "signature": "Char-\u003e(SeqData,Gaps)-\u003eSeqData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#v:isRepl",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if the Edit is a Repl.\n\u003c/p\u003e",
        "fct-module": "Bio.Alignment.AlignData",
        "fct-package": "bioalign",
        "fct-signature": "Edit -\u003e Bool",
        "fct-source": "src/Bio-Alignment-AlignData.html#isRepl",
        "fct-type": "function",
        "title": "isRepl"
      },
      "index": {
        "description": "True if the Edit is Repl",
        "hierarchy": "Bio Alignment AlignData",
        "module": "Bio.Alignment.AlignData",
        "name": "isRepl",
        "normalized": "Edit-\u003eBool",
        "package": "bioalign",
        "partial": "Repl",
        "signature": "Edit-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#v:on",
      "description": {
        "fct-module": "Bio.Alignment.AlignData",
        "fct-package": "bioalign",
        "fct-signature": "(t1 -\u003e t1 -\u003e t) -\u003e (t2 -\u003e t1) -\u003e t2 -\u003e t2 -\u003e t",
        "fct-source": "src/Bio-Alignment-AlignData.html#on",
        "fct-type": "function",
        "title": "on"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Alignment AlignData",
        "module": "Bio.Alignment.AlignData",
        "name": "on",
        "normalized": "(a-\u003ea-\u003ea)-\u003e(a-\u003ea)-\u003ea-\u003ea-\u003ea",
        "package": "bioalign",
        "partial": "",
        "signature": "(t-\u003et-\u003et)-\u003e(t-\u003et)-\u003et-\u003et-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#v:showalign",
      "description": {
        "fct-module": "Bio.Alignment.AlignData",
        "fct-package": "bioalign",
        "fct-signature": "EditList -\u003e [Char]",
        "fct-source": "src/Bio-Alignment-AlignData.html#showalign",
        "fct-type": "function",
        "title": "showalign"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Alignment AlignData",
        "module": "Bio.Alignment.AlignData",
        "name": "showalign",
        "normalized": "EditList-\u003e[Char]",
        "package": "bioalign",
        "partial": "",
        "signature": "EditList-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#v:toStrings",
      "description": {
        "fct-descr": "\u003cp\u003eturn an alignment into sequences with \u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e representing gaps\n (for checking, filtering out the \u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e characters should return\n the original sequences, provided \u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e isn't part of the sequence\n alphabet)\n\u003c/p\u003e",
        "fct-module": "Bio.Alignment.AlignData",
        "fct-package": "bioalign",
        "fct-signature": "EditList -\u003e (String, String)",
        "fct-source": "src/Bio-Alignment-AlignData.html#toStrings",
        "fct-type": "function",
        "title": "toStrings"
      },
      "index": {
        "description": "turn an alignment into sequences with representing gaps for checking filtering out the characters should return the original sequences provided isn part of the sequence alphabet",
        "hierarchy": "Bio Alignment AlignData",
        "module": "Bio.Alignment.AlignData",
        "name": "toStrings",
        "normalized": "EditList-\u003e(String,String)",
        "package": "bioalign",
        "partial": "Strings",
        "signature": "EditList-\u003e(String,String)"
      }
    }
  }
]