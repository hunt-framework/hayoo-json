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
        "word": "bioalign"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData structures and helper functions for calculating alignments\n\u003c/p\u003e\u003cp\u003eThere are two ways to view an alignment: either as a list of edits\n   (i.e., insertions, deletions, or substitutions), or as a set of sequences\n   with inserted gaps.\n\u003c/p\u003e\u003cp\u003eThe edit list approach is perhaps more restrictive model but doesn't generalize\n   to multiple alignments.\n\u003c/p\u003e\u003cp\u003eThe gap approach is more general, and probably more commonly used by other software\n   (see e.g. the ACE file format).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Alignment.AlignData",
          "name": "AlignData",
          "package": "bioalign",
          "source": "src/Bio-Alignment-AlignData.html",
          "type": "module"
        },
        "index": {
          "description": "Data structures and helper functions for calculating alignments There are two ways to view an alignment either as list of edits i.e insertions deletions or substitutions or as set of sequences with inserted gaps The edit list approach is perhaps more restrictive model but doesn generalize to multiple alignments The gap approach is more general and probably more commonly used by other software see e.g the ACE file format",
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "AlignData",
          "package": "bioalign",
          "partial": "Align Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.AlignData",
          "name": "Alignment",
          "package": "bioalign",
          "source": "src/Bio-Alignment-AlignData.html#Alignment",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "Alignment",
          "package": "bioalign",
          "partial": "Alignment",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#t:Alignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sequence element type, used in alignments.\n\u003c/p\u003e",
          "module": "Bio.Alignment.AlignData",
          "name": "Chr",
          "package": "bioalign",
          "source": "src/Bio-Alignment-AlignData.html#Chr",
          "type": "type"
        },
        "index": {
          "description": "The sequence element type used in alignments",
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "Chr",
          "package": "bioalign",
          "partial": "Chr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#t:Chr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn Edit is either the insertion, the deletion,\n   or the replacement of a character.\n\u003c/p\u003e",
          "module": "Bio.Alignment.AlignData",
          "name": "Edit",
          "package": "bioalign",
          "source": "src/Bio-Alignment-AlignData.html#Edit",
          "type": "data"
        },
        "index": {
          "description": "An Edit is either the insertion the deletion or the replacement of character",
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "Edit",
          "package": "bioalign",
          "partial": "Edit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#t:Edit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alignment is a sequence of edits.\n\u003c/p\u003e",
          "module": "Bio.Alignment.AlignData",
          "name": "EditList",
          "package": "bioalign",
          "source": "src/Bio-Alignment-AlignData.html#EditList",
          "type": "type"
        },
        "index": {
          "description": "An alignment is sequence of edits",
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "EditList",
          "package": "bioalign",
          "partial": "Edit List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#t:EditList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.AlignData",
          "name": "Gaps",
          "package": "bioalign",
          "source": "src/Bio-Alignment-AlignData.html#Gaps",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "Gaps",
          "package": "bioalign",
          "partial": "Gaps",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#t:Gaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Selector consists of a zero element, and a funcition\n   that chooses a possible Edit operation, and generates an updated result.\n\u003c/p\u003e",
          "module": "Bio.Alignment.AlignData",
          "name": "Selector",
          "package": "bioalign",
          "source": "src/Bio-Alignment-AlignData.html#Selector",
          "type": "type"
        },
        "index": {
          "description": "Selector consists of zero element and funcition that chooses possible Edit operation and generates an updated result",
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "Selector",
          "package": "bioalign",
          "partial": "Selector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#t:Selector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.AlignData",
          "name": "Sequence",
          "package": "bioalign",
          "source": "src/Bio-Alignment-AlignData.html#Sequence",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "Sequence",
          "package": "bioalign",
          "partial": "Sequence",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#t:Sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA substitution matrix gives scores for replacing a character with another.\n   Typically, it will be symmetric.  It is type-tagged with the alphabet - Nuc or Amino.\n\u003c/p\u003e",
          "module": "Bio.Alignment.AlignData",
          "name": "SubstMx",
          "package": "bioalign",
          "source": "src/Bio-Alignment-AlignData.html#SubstMx",
          "type": "type"
        },
        "index": {
          "description": "substitution matrix gives scores for replacing character with another Typically it will be symmetric It is type-tagged with the alphabet Nuc or Amino",
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "SubstMx",
          "package": "bioalign",
          "partial": "Subst Mx",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#t:SubstMx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.AlignData",
          "name": "Del",
          "package": "bioalign",
          "signature": "Del Chr",
          "source": "src/Bio-Alignment-AlignData.html#Edit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "Del",
          "package": "bioalign",
          "partial": "Del",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#v:Del"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.AlignData",
          "name": "Ins",
          "package": "bioalign",
          "signature": "Ins Chr",
          "source": "src/Bio-Alignment-AlignData.html#Edit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "Ins",
          "package": "bioalign",
          "partial": "Ins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#v:Ins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.AlignData",
          "name": "Repl",
          "package": "bioalign",
          "signature": "Repl Chr Chr",
          "source": "src/Bio-Alignment-AlignData.html#Edit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "Repl",
          "package": "bioalign",
          "partial": "Repl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#v:Repl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.AlignData",
          "name": "Seq",
          "package": "bioalign",
          "signature": "Seq SeqLabel SeqData (Maybe QualData)",
          "source": "src/Bio-Alignment-AlignData.html#Sequence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "Seq",
          "package": "bioalign",
          "partial": "Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#v:Seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate a set of columns containing scores\n   This represents the columns of the alignment matrix, but will only require linear space\n   for score calculation.\n\u003c/p\u003e",
          "module": "Bio.Alignment.AlignData",
          "name": "columns",
          "package": "bioalign",
          "signature": "Selector a -\u003e a -\u003e Sequence -\u003e Sequence -\u003e [[a]]",
          "source": "src/Bio-Alignment-AlignData.html#columns",
          "type": "function"
        },
        "index": {
          "description": "Calculate set of columns containing scores This represents the columns of the alignment matrix but will only require linear space for score calculation",
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "columns",
          "normalized": "Selector a-\u003ea-\u003eSequence-\u003eSequence-\u003e[[a]]",
          "package": "bioalign",
          "signature": "Selector a-\u003ea-\u003eSequence-\u003eSequence-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#v:columns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate an Edit based on SubstMx and gap penalty\n\u003c/p\u003e",
          "module": "Bio.Alignment.AlignData",
          "name": "eval",
          "package": "bioalign",
          "signature": "SubstMx t a -\u003e a -\u003e Edit -\u003e a",
          "source": "src/Bio-Alignment-AlignData.html#eval",
          "type": "function"
        },
        "index": {
          "description": "Evaluate an Edit based on SubstMx and gap penalty",
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "eval",
          "normalized": "SubstMx a b-\u003eb-\u003eEdit-\u003eb",
          "package": "bioalign",
          "signature": "SubstMx t a-\u003ea-\u003eEdit-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGaps are coded as \u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003es, this function removes them, and returns\n   the sequence along with the list of gap positions.\n   note that gaps are positioned relative to the *gapped* sequence \n   (contrast to stmassembler/Cluster.hs)\n\u003c/p\u003e",
          "module": "Bio.Alignment.AlignData",
          "name": "extractGaps",
          "package": "bioalign",
          "signature": "SeqData -\u003e (SeqData, Gaps)",
          "source": "src/Bio-Alignment-AlignData.html#extractGaps",
          "type": "function"
        },
        "index": {
          "description": "Gaps are coded as this function removes them and returns the sequence along with the list of gap positions note that gaps are positioned relative to the gapped sequence contrast to stmassembler Cluster.hs",
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "extractGaps",
          "normalized": "SeqData-\u003e(SeqData,Gaps)",
          "package": "bioalign",
          "partial": "Gaps",
          "signature": "SeqData-\u003e(SeqData,Gaps)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#v:extractGaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.AlignData",
          "name": "insertGaps",
          "package": "bioalign",
          "signature": "Char -\u003e (SeqData, Gaps) -\u003e SeqData",
          "source": "src/Bio-Alignment-AlignData.html#insertGaps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "insertGaps",
          "normalized": "Char-\u003e(SeqData,Gaps)-\u003eSeqData",
          "package": "bioalign",
          "partial": "Gaps",
          "signature": "Char-\u003e(SeqData,Gaps)-\u003eSeqData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#v:insertGaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the Edit is a Repl.\n\u003c/p\u003e",
          "module": "Bio.Alignment.AlignData",
          "name": "isRepl",
          "package": "bioalign",
          "signature": "Edit -\u003e Bool",
          "source": "src/Bio-Alignment-AlignData.html#isRepl",
          "type": "function"
        },
        "index": {
          "description": "True if the Edit is Repl",
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "isRepl",
          "normalized": "Edit-\u003eBool",
          "package": "bioalign",
          "partial": "Repl",
          "signature": "Edit-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#v:isRepl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.AlignData",
          "name": "on",
          "package": "bioalign",
          "signature": "(t1 -\u003e t1 -\u003e t) -\u003e (t2 -\u003e t1) -\u003e t2 -\u003e t2 -\u003e t",
          "source": "src/Bio-Alignment-AlignData.html#on",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "on",
          "normalized": "(a-\u003ea-\u003ea)-\u003e(a-\u003ea)-\u003ea-\u003ea-\u003ea",
          "package": "bioalign",
          "signature": "(t-\u003et-\u003et)-\u003e(t-\u003et)-\u003et-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#v:on"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.AlignData",
          "name": "showalign",
          "package": "bioalign",
          "signature": "EditList -\u003e [Char]",
          "source": "src/Bio-Alignment-AlignData.html#showalign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "showalign",
          "normalized": "EditList-\u003e[Char]",
          "package": "bioalign",
          "signature": "EditList-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#v:showalign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eturn an alignment into sequences with \u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e representing gaps\n (for checking, filtering out the \u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e characters should return\n the original sequences, provided \u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e isn't part of the sequence\n alphabet)\n\u003c/p\u003e",
          "module": "Bio.Alignment.AlignData",
          "name": "toStrings",
          "package": "bioalign",
          "signature": "EditList -\u003e (String, String)",
          "source": "src/Bio-Alignment-AlignData.html#toStrings",
          "type": "function"
        },
        "index": {
          "description": "turn an alignment into sequences with representing gaps for checking filtering out the characters should return the original sequences provided isn part of the sequence alphabet",
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "toStrings",
          "normalized": "EditList-\u003e(String,String)",
          "package": "bioalign",
          "partial": "Strings",
          "signature": "EditList-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bioalign/docs/Bio-Alignment-AlignData.html#v:toStrings"
      }
    }
  ]
]