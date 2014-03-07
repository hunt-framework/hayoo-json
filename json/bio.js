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
        "word": "bio"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplement alignments/edit distance with affine gap penalties\n\u003c/p\u003e\u003cp\u003eI've seen g = (-10,-1) as the suggested price to pay for a gaps\n   using BLOSUM62.  Good choice as any, I guess.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Alignment.AAlign",
          "name": "AAlign",
          "package": "bio",
          "source": "src/Bio-Alignment-AAlign.html",
          "type": "module"
        },
        "index": {
          "description": "Implement alignments edit distance with affine gap penalties ve seen as the suggested price to pay for gaps using BLOSUM62 Good choice as any guess",
          "hierarchy": "Bio Alignment AAlign",
          "module": "Bio.Alignment.AAlign",
          "name": "AAlign",
          "package": "bio",
          "partial": "AAlign",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-AAlign.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate global alignment (Needleman-Wunsch)\n\u003c/p\u003e",
          "module": "Bio.Alignment.AAlign",
          "name": "global_align",
          "package": "bio",
          "signature": "SubstMx t a -\u003e (a, a) -\u003e Sequence t -\u003e Sequence t -\u003e (a, EditList)",
          "source": "src/Bio-Alignment-AAlign.html#global_align",
          "type": "function"
        },
        "index": {
          "description": "Calculate global alignment Needleman-Wunsch",
          "hierarchy": "Bio Alignment AAlign",
          "module": "Bio.Alignment.AAlign",
          "name": "global_align",
          "normalized": "SubstMx a b-\u003e(b,b)-\u003eSequence a-\u003eSequence a-\u003e(b,EditList)",
          "package": "bio",
          "signature": "SubstMx t a-\u003e(a,a)-\u003eSequence t-\u003eSequence t-\u003e(a,EditList)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-AAlign.html#v:global_align"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate global edit distance (Needleman-Wunsch alignment score)\n\u003c/p\u003e",
          "module": "Bio.Alignment.AAlign",
          "name": "global_score",
          "package": "bio",
          "signature": "SubstMx t a -\u003e (a, a) -\u003e Sequence t -\u003e Sequence t -\u003e a",
          "source": "src/Bio-Alignment-AAlign.html#global_score",
          "type": "function"
        },
        "index": {
          "description": "Calculate global edit distance Needleman-Wunsch alignment score",
          "hierarchy": "Bio Alignment AAlign",
          "module": "Bio.Alignment.AAlign",
          "name": "global_score",
          "normalized": "SubstMx a b-\u003e(b,b)-\u003eSequence a-\u003eSequence a-\u003eb",
          "package": "bio",
          "signature": "SubstMx t a-\u003e(a,a)-\u003eSequence t-\u003eSequence t-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-AAlign.html#v:global_score"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate local alignmnet (Smith-Waterman)\n\u003c/p\u003e",
          "module": "Bio.Alignment.AAlign",
          "name": "local_align",
          "package": "bio",
          "signature": "SubstMx t a -\u003e (a, a) -\u003e Sequence t -\u003e Sequence t -\u003e (a, EditList)",
          "source": "src/Bio-Alignment-AAlign.html#local_align",
          "type": "function"
        },
        "index": {
          "description": "Calculate local alignmnet Smith-Waterman",
          "hierarchy": "Bio Alignment AAlign",
          "module": "Bio.Alignment.AAlign",
          "name": "local_align",
          "normalized": "SubstMx a b-\u003e(b,b)-\u003eSequence a-\u003eSequence a-\u003e(b,EditList)",
          "package": "bio",
          "signature": "SubstMx t a-\u003e(a,a)-\u003eSequence t-\u003eSequence t-\u003e(a,EditList)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-AAlign.html#v:local_align"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate local edit distance (Smith-Waterman alignment score)\n\u003c/p\u003e",
          "module": "Bio.Alignment.AAlign",
          "name": "local_score",
          "package": "bio",
          "signature": "SubstMx t a -\u003e (a, a) -\u003e Sequence t -\u003e Sequence t -\u003e a",
          "source": "src/Bio-Alignment-AAlign.html#local_score",
          "type": "function"
        },
        "index": {
          "description": "Calculate local edit distance Smith-Waterman alignment score",
          "hierarchy": "Bio Alignment AAlign",
          "module": "Bio.Alignment.AAlign",
          "name": "local_score",
          "normalized": "SubstMx a b-\u003e(b,b)-\u003eSequence a-\u003eSequence a-\u003eb",
          "package": "bio",
          "signature": "SubstMx t a-\u003e(a,a)-\u003eSequence t-\u003eSequence t-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-AAlign.html#v:local_score"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead ACE format assembly files\n\u003c/p\u003e\u003cp\u003eThese are typically output by sequence assembly tools,\n   like CAP3 or Phrap.\n\u003c/p\u003e\u003cp\u003eDocumented in the section labelled \"ACE FILE FORMAT\" at\n   \u003ca\u003ehttp://bozeman.mbt.washington.edu/consed/distributions/README.14.0.txt\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eBriefly: each field is a line starting with a two letter code,\n            in some cases followed by data lines termintated by a blank line.\n   Here's an brief example how an ACE file looks like:\n\u003c/p\u003e\u003cpre\u003e\n          AS contigs reads\n          CO contig_name bases reads segments compl (CAP3: segments=0)\n          sequence\n          BQ base_qualities\n          AF read1 compl padded_start_consensus (negatives meaning?)\n          AF read2 ..\n          BS segments\n          RD read1 bases info_items info_tags (latter two set to 0 by CAP3)\n          sequence\n          QA read1 qual_start qual_end align_start align_end\n          DS (phred header? left empty by CAP3)\n          RD read2 ...\n\u003c/pre\u003e\u003cp\u003eAs far as I know, this is only used for nucleotide sequences.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Alignment.ACE",
          "name": "ACE",
          "package": "bio",
          "source": "src/Bio-Alignment-ACE.html",
          "type": "module"
        },
        "index": {
          "description": "Read ACE format assembly files These are typically output by sequence assembly tools like CAP3 or Phrap Documented in the section labelled ACE FILE FORMAT at http bozeman.mbt.washington.edu consed distributions README.14.0.txt Briefly each field is line starting with two letter code in some cases followed by data lines termintated by blank line Here an brief example how an ACE file looks like AS contigs reads CO contig name bases reads segments compl CAP3 segments sequence BQ base qualities AF read1 compl padded start consensus negatives meaning AF read2 BS segments RD read1 bases info items info tags latter two set to by CAP3 sequence QA read1 qual start qual end align start align end DS phred header left empty by CAP3 RD read2 As far as know this is only used for nucleotide sequences",
          "hierarchy": "Bio Alignment ACE",
          "module": "Bio.Alignment.ACE",
          "name": "ACE",
          "package": "bio",
          "partial": "ACE",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-ACE.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.ACE",
          "name": "Assembly",
          "package": "bio",
          "source": "src/Bio-Alignment-ACE.html#Assembly",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bio Alignment ACE",
          "module": "Bio.Alignment.ACE",
          "name": "Assembly",
          "package": "bio",
          "partial": "Assembly",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-ACE.html#t:Assembly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.ACE",
          "name": "Asm",
          "package": "bio",
          "signature": "Asm",
          "source": "src/Bio-Alignment-ACE.html#Assembly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment ACE",
          "module": "Bio.Alignment.ACE",
          "name": "Asm",
          "package": "bio",
          "partial": "Asm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-ACE.html#v:Asm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.ACE",
          "name": "contig",
          "package": "bio",
          "signature": "(Sequence Nuc, Gaps)",
          "source": "src/Bio-Alignment-ACE.html#Assembly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment ACE",
          "module": "Bio.Alignment.ACE",
          "name": "contig",
          "normalized": "(Sequence Nuc,Gaps)",
          "package": "bio",
          "signature": "(Sequence Nuc,Gaps)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-ACE.html#v:contig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.ACE",
          "name": "fragments",
          "package": "bio",
          "signature": "Alignment Nuc",
          "source": "src/Bio-Alignment-ACE.html#Assembly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment ACE",
          "module": "Bio.Alignment.ACE",
          "name": "fragments",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-ACE.html#v:fragments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest parser p on a list of ACE elements\n\u003c/p\u003e",
          "module": "Bio.Alignment.ACE",
          "name": "ptest",
          "package": "bio",
          "signature": "String -\u003e AceParser a -\u003e [ACE] -\u003e IO ()",
          "source": "src/Bio-Alignment-ACE.html#ptest",
          "type": "function"
        },
        "index": {
          "description": "Test parser on list of ACE elements",
          "hierarchy": "Bio Alignment ACE",
          "module": "Bio.Alignment.ACE",
          "name": "ptest",
          "normalized": "String-\u003eAceParser a-\u003e[ACE]-\u003eIO()",
          "package": "bio",
          "signature": "String-\u003eAceParser a-\u003e[ACE]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-ACE.html#v:ptest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReading an ACE file.\n\u003c/p\u003e",
          "module": "Bio.Alignment.ACE",
          "name": "readACE",
          "package": "bio",
          "signature": "FilePath -\u003e IO [[Assembly]]",
          "source": "src/Bio-Alignment-ACE.html#readACE",
          "type": "function"
        },
        "index": {
          "description": "Reading an ACE file",
          "hierarchy": "Bio Alignment ACE",
          "module": "Bio.Alignment.ACE",
          "name": "readACE",
          "normalized": "FilePath-\u003eIO[[Assembly]]",
          "package": "bio",
          "partial": "ACE",
          "signature": "FilePath-\u003eIO[[Assembly]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-ACE.html#v:readACE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Stupid name, replaced by \u003ccode\u003e\u003ca\u003efragments\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Alignment.ACE",
          "name": "reads",
          "package": "bio",
          "signature": "Assembly -\u003e Alignment Nuc",
          "source": "src/Bio-Alignment-ACE.html#reads",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Stupid name replaced by fragments",
          "hierarchy": "Bio Alignment ACE",
          "module": "Bio.Alignment.ACE",
          "name": "reads",
          "normalized": "Assembly-\u003eAlignment Nuc",
          "package": "bio",
          "signature": "Assembly-\u003eAlignment Nuc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-ACE.html#v:reads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.ACE",
          "name": "writeACE",
          "package": "bio",
          "signature": "FilePath -\u003e [Assembly] -\u003e IO ()",
          "source": "src/Bio-Alignment-ACE.html#writeACE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment ACE",
          "module": "Bio.Alignment.ACE",
          "name": "writeACE",
          "normalized": "FilePath-\u003e[Assembly]-\u003eIO()",
          "package": "bio",
          "partial": "ACE",
          "signature": "FilePath-\u003e[Assembly]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-ACE.html#v:writeACE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData structures and helper functions for calculating alignments\n\u003c/p\u003e\u003cp\u003eThere are two ways to view an alignment: either as a list of edits\n   (i.e., insertions, deletions, or substitutions), or as a set of sequences\n   with inserted gaps.\n\u003c/p\u003e\u003cp\u003eThe edit list approach is perhaps more restrictive model but doesn't generalize\n   to multiple alignments.\n\u003c/p\u003e\u003cp\u003eThe gap approach is more general, and probably more commonly used by other software\n   (see e.g. the ACE file format).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Alignment.AlignData",
          "name": "AlignData",
          "package": "bio",
          "source": "src/Bio-Alignment-AlignData.html",
          "type": "module"
        },
        "index": {
          "description": "Data structures and helper functions for calculating alignments There are two ways to view an alignment either as list of edits i.e insertions deletions or substitutions or as set of sequences with inserted gaps The edit list approach is perhaps more restrictive model but doesn generalize to multiple alignments The gap approach is more general and probably more commonly used by other software see e.g the ACE file format",
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "AlignData",
          "package": "bio",
          "partial": "Align Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-AlignData.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.AlignData",
          "name": "Alignment",
          "package": "bio",
          "source": "src/Bio-Alignment-AlignData.html#Alignment",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "Alignment",
          "package": "bio",
          "partial": "Alignment",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-AlignData.html#t:Alignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sequence element type, used in alignments.\n\u003c/p\u003e",
          "module": "Bio.Alignment.AlignData",
          "name": "Chr",
          "package": "bio",
          "source": "src/Bio-Alignment-AlignData.html#Chr",
          "type": "type"
        },
        "index": {
          "description": "The sequence element type used in alignments",
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "Chr",
          "package": "bio",
          "partial": "Chr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-AlignData.html#t:Chr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.AlignData",
          "name": "Dir",
          "package": "bio",
          "source": "src/Bio-Alignment-AlignData.html#Dir",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "Dir",
          "package": "bio",
          "partial": "Dir",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-AlignData.html#t:Dir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn Edit is either the insertion, the deletion,\n   or the replacement of a character.\n\u003c/p\u003e",
          "module": "Bio.Alignment.AlignData",
          "name": "Edit",
          "package": "bio",
          "source": "src/Bio-Alignment-AlignData.html#Edit",
          "type": "data"
        },
        "index": {
          "description": "An Edit is either the insertion the deletion or the replacement of character",
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "Edit",
          "package": "bio",
          "partial": "Edit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-AlignData.html#t:Edit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alignment is a sequence of edits.\n\u003c/p\u003e",
          "module": "Bio.Alignment.AlignData",
          "name": "EditList",
          "package": "bio",
          "source": "src/Bio-Alignment-AlignData.html#EditList",
          "type": "type"
        },
        "index": {
          "description": "An alignment is sequence of edits",
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "EditList",
          "package": "bio",
          "partial": "Edit List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-AlignData.html#t:EditList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.AlignData",
          "name": "Gaps",
          "package": "bio",
          "source": "src/Bio-Alignment-AlignData.html#Gaps",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "Gaps",
          "package": "bio",
          "partial": "Gaps",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-AlignData.html#t:Gaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Selector consists of a zero element, and a funcition\n   that chooses a possible Edit operation, and generates an updated result.\n\u003c/p\u003e",
          "module": "Bio.Alignment.AlignData",
          "name": "Selector",
          "package": "bio",
          "source": "src/Bio-Alignment-AlignData.html#Selector",
          "type": "type"
        },
        "index": {
          "description": "Selector consists of zero element and funcition that chooses possible Edit operation and generates an updated result",
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "Selector",
          "package": "bio",
          "partial": "Selector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-AlignData.html#t:Selector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA substitution matrix gives scores for replacing a character with another.\n   Typically, it will be symmetric.  It is type-tagged with the alphabet - Nuc or Amino.\n\u003c/p\u003e",
          "module": "Bio.Alignment.AlignData",
          "name": "SubstMx",
          "package": "bio",
          "source": "src/Bio-Alignment-AlignData.html#SubstMx",
          "type": "type"
        },
        "index": {
          "description": "substitution matrix gives scores for replacing character with another Typically it will be symmetric It is type-tagged with the alphabet Nuc or Amino",
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "SubstMx",
          "package": "bio",
          "partial": "Subst Mx",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-AlignData.html#t:SubstMx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.AlignData",
          "name": "Del",
          "package": "bio",
          "signature": "Del Chr",
          "source": "src/Bio-Alignment-AlignData.html#Edit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "Del",
          "package": "bio",
          "partial": "Del",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-AlignData.html#v:Del"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.AlignData",
          "name": "Fwd",
          "package": "bio",
          "signature": "Fwd",
          "source": "src/Bio-Alignment-AlignData.html#Dir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "Fwd",
          "package": "bio",
          "partial": "Fwd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-AlignData.html#v:Fwd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.AlignData",
          "name": "Ins",
          "package": "bio",
          "signature": "Ins Chr",
          "source": "src/Bio-Alignment-AlignData.html#Edit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "Ins",
          "package": "bio",
          "partial": "Ins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-AlignData.html#v:Ins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.AlignData",
          "name": "Repl",
          "package": "bio",
          "signature": "Repl Chr Chr",
          "source": "src/Bio-Alignment-AlignData.html#Edit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "Repl",
          "package": "bio",
          "partial": "Repl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-AlignData.html#v:Repl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.AlignData",
          "name": "Rev",
          "package": "bio",
          "signature": "Rev",
          "source": "src/Bio-Alignment-AlignData.html#Dir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "Rev",
          "package": "bio",
          "partial": "Rev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-AlignData.html#v:Rev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate a set of columns containing scores\n   This represents the columns of the alignment matrix, but will only require linear space\n   for score calculation.\n\u003c/p\u003e",
          "module": "Bio.Alignment.AlignData",
          "name": "columns",
          "package": "bio",
          "signature": "Selector a -\u003e a -\u003e Sequence b -\u003e Sequence b -\u003e [[a]]",
          "source": "src/Bio-Alignment-AlignData.html#columns",
          "type": "function"
        },
        "index": {
          "description": "Calculate set of columns containing scores This represents the columns of the alignment matrix but will only require linear space for score calculation",
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "columns",
          "normalized": "Selector a-\u003ea-\u003eSequence b-\u003eSequence b-\u003e[[a]]",
          "package": "bio",
          "signature": "Selector a-\u003ea-\u003eSequence b-\u003eSequence b-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-AlignData.html#v:columns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate an Edit based on SubstMx and gap penalty\n\u003c/p\u003e",
          "module": "Bio.Alignment.AlignData",
          "name": "eval",
          "package": "bio",
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
          "package": "bio",
          "signature": "SubstMx t a-\u003ea-\u003eEdit-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-AlignData.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGaps are coded as \u003ccode\u003e\u003ca\u003e*\u003c/a\u003e\u003c/code\u003es, this function removes them, and returns\n   the sequence along with the list of gap positions.\n   note that gaps are positioned relative to the *gapped* sequence \n   (contrast to stmassembler/Cluster.hs)\n\u003c/p\u003e",
          "module": "Bio.Alignment.AlignData",
          "name": "extractGaps",
          "package": "bio",
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
          "package": "bio",
          "partial": "Gaps",
          "signature": "SeqData-\u003e(SeqData,Gaps)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-AlignData.html#v:extractGaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.AlignData",
          "name": "insertGaps",
          "package": "bio",
          "signature": "Char -\u003e (SeqData, Gaps) -\u003e SeqData",
          "source": "src/Bio-Alignment-AlignData.html#insertGaps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "insertGaps",
          "normalized": "Char-\u003e(SeqData,Gaps)-\u003eSeqData",
          "package": "bio",
          "partial": "Gaps",
          "signature": "Char-\u003e(SeqData,Gaps)-\u003eSeqData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-AlignData.html#v:insertGaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the Edit is a Repl.\n\u003c/p\u003e",
          "module": "Bio.Alignment.AlignData",
          "name": "isRepl",
          "package": "bio",
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
          "package": "bio",
          "partial": "Repl",
          "signature": "Edit-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-AlignData.html#v:isRepl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.AlignData",
          "name": "on",
          "package": "bio",
          "signature": "(t1 -\u003e t1 -\u003e t) -\u003e (t2 -\u003e t1) -\u003e t2 -\u003e t2 -\u003e t",
          "source": "src/Bio-Alignment-AlignData.html#on",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "on",
          "normalized": "(a-\u003ea-\u003ea)-\u003e(a-\u003ea)-\u003ea-\u003ea-\u003ea",
          "package": "bio",
          "signature": "(t-\u003et-\u003et)-\u003e(t-\u003et)-\u003et-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-AlignData.html#v:on"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.AlignData",
          "name": "showalign",
          "package": "bio",
          "signature": "[Edit] -\u003e [Char]",
          "source": "src/Bio-Alignment-AlignData.html#showalign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment AlignData",
          "module": "Bio.Alignment.AlignData",
          "name": "showalign",
          "normalized": "[Edit]-\u003e[Char]",
          "package": "bio",
          "signature": "[Edit]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-AlignData.html#v:showalign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eturn an alignment into sequences with \u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e representing gaps\n (for checking, filtering out the \u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e characters should return\n the original sequences, provided \u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e isn't part of the sequence\n alphabet)\n\u003c/p\u003e",
          "module": "Bio.Alignment.AlignData",
          "name": "toStrings",
          "package": "bio",
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
          "package": "bio",
          "partial": "Strings",
          "signature": "EditList-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-AlignData.html#v:toStrings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModel the BED format, according to the spec at\n http:\u003cem/\u003egenome.ucsc.edu\u003cem\u003eFAQ\u003c/em\u003eFAQformat#format1\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Alignment.BED",
          "name": "BED",
          "package": "bio",
          "source": "src/Bio-Alignment-BED.html",
          "type": "module"
        },
        "index": {
          "description": "Model the BED format according to the spec at http genome.ucsc.edu FAQ FAQformat format1",
          "hierarchy": "Bio Alignment BED",
          "module": "Bio.Alignment.BED",
          "name": "BED",
          "package": "bio",
          "partial": "BED",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BED.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe BED data type Note that the specification allows a variable number of fields, with\n only the three first required.  This definition requires all fields to be present.\n\u003c/p\u003e",
          "module": "Bio.Alignment.BED",
          "name": "BED",
          "package": "bio",
          "source": "src/Bio-Alignment-BED.html#BED",
          "type": "data"
        },
        "index": {
          "description": "The BED data type Note that the specification allows variable number of fields with only the three first required This definition requires all fields to be present",
          "hierarchy": "Bio Alignment BED",
          "module": "Bio.Alignment.BED",
          "name": "BED",
          "package": "bio",
          "partial": "BED",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BED.html#t:BED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYet another direction data structure.\n\u003c/p\u003e",
          "module": "Bio.Alignment.BED",
          "name": "Dir",
          "package": "bio",
          "source": "src/Bio-Alignment-BED.html#Dir",
          "type": "data"
        },
        "index": {
          "description": "Yet another direction data structure",
          "hierarchy": "Bio Alignment BED",
          "module": "Bio.Alignment.BED",
          "name": "Dir",
          "package": "bio",
          "partial": "Dir",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BED.html#t:Dir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BED",
          "name": "BED",
          "package": "bio",
          "signature": "BED",
          "source": "src/Bio-Alignment-BED.html#BED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BED",
          "module": "Bio.Alignment.BED",
          "name": "BED",
          "package": "bio",
          "partial": "BED",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BED.html#v:BED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BED",
          "name": "Fwd",
          "package": "bio",
          "signature": "Fwd",
          "source": "src/Bio-Alignment-BED.html#Dir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BED",
          "module": "Bio.Alignment.BED",
          "name": "Fwd",
          "package": "bio",
          "partial": "Fwd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BED.html#v:Fwd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BED",
          "name": "Rev",
          "package": "bio",
          "signature": "Rev",
          "source": "src/Bio-Alignment-BED.html#Dir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BED",
          "module": "Bio.Alignment.BED",
          "name": "Rev",
          "package": "bio",
          "partial": "Rev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BED.html#v:Rev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLists of lenght blockCount, blockStarts\n  are relative to chromStart\n\u003c/p\u003e",
          "module": "Bio.Alignment.BED",
          "name": "blockSizeStart",
          "package": "bio",
          "signature": "[(Offset, Offset)]",
          "source": "src/Bio-Alignment-BED.html#BED",
          "type": "function"
        },
        "index": {
          "description": "Lists of lenght blockCount blockStarts are relative to chromStart",
          "hierarchy": "Bio Alignment BED",
          "module": "Bio.Alignment.BED",
          "name": "blockSizeStart",
          "normalized": "[(Offset,Offset)]",
          "package": "bio",
          "partial": "Size Start",
          "signature": "[(Offset,Offset)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BED.html#v:blockSizeStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BED",
          "name": "chrom",
          "package": "bio",
          "signature": "ByteString",
          "source": "src/Bio-Alignment-BED.html#BED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BED",
          "module": "Bio.Alignment.BED",
          "name": "chrom",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BED.html#v:chrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BED",
          "name": "chromEnd",
          "package": "bio",
          "signature": "Offset",
          "source": "src/Bio-Alignment-BED.html#BED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BED",
          "module": "Bio.Alignment.BED",
          "name": "chromEnd",
          "package": "bio",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BED.html#v:chromEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BED",
          "name": "chromStart",
          "package": "bio",
          "signature": "Offset",
          "source": "src/Bio-Alignment-BED.html#BED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BED",
          "module": "Bio.Alignment.BED",
          "name": "chromStart",
          "package": "bio",
          "partial": "Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BED.html#v:chromStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAvailable BED files appear to not\n support this format.  RGB is therefore\n ignored (read and written as '0')\n\u003c/p\u003e",
          "module": "Bio.Alignment.BED",
          "name": "itemRGB",
          "package": "bio",
          "signature": "(Word8, Word8, Word8)",
          "source": "src/Bio-Alignment-BED.html#BED",
          "type": "function"
        },
        "index": {
          "description": "Available BED files appear to not support this format RGB is therefore ignored read and written as",
          "hierarchy": "Bio Alignment BED",
          "module": "Bio.Alignment.BED",
          "name": "itemRGB",
          "normalized": "(Word,Word,Word)",
          "package": "bio",
          "partial": "RGB",
          "signature": "(Word,Word,Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BED.html#v:itemRGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BED",
          "name": "name",
          "package": "bio",
          "signature": "ByteString",
          "source": "src/Bio-Alignment-BED.html#BED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BED",
          "module": "Bio.Alignment.BED",
          "name": "name",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BED.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BED",
          "name": "readBED",
          "package": "bio",
          "signature": "FilePath -\u003e IO [BED]",
          "source": "src/Bio-Alignment-BED.html#readBED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BED",
          "module": "Bio.Alignment.BED",
          "name": "readBED",
          "normalized": "FilePath-\u003eIO[BED]",
          "package": "bio",
          "partial": "BED",
          "signature": "FilePath-\u003eIO[BED]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BED.html#v:readBED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRange 0..1000\n\u003c/p\u003e",
          "module": "Bio.Alignment.BED",
          "name": "score",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-BED.html#BED",
          "type": "function"
        },
        "index": {
          "description": "Range",
          "hierarchy": "Bio Alignment BED",
          "module": "Bio.Alignment.BED",
          "name": "score",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BED.html#v:score"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BED",
          "name": "strand",
          "package": "bio",
          "signature": "Dir",
          "source": "src/Bio-Alignment-BED.html#BED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BED",
          "module": "Bio.Alignment.BED",
          "name": "strand",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BED.html#v:strand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BED",
          "name": "thickEnd",
          "package": "bio",
          "signature": "Offset",
          "source": "src/Bio-Alignment-BED.html#BED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BED",
          "module": "Bio.Alignment.BED",
          "name": "thickEnd",
          "package": "bio",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BED.html#v:thickEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BED",
          "name": "thickStart",
          "package": "bio",
          "signature": "Offset",
          "source": "src/Bio-Alignment-BED.html#BED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BED",
          "module": "Bio.Alignment.BED",
          "name": "thickStart",
          "package": "bio",
          "partial": "Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BED.html#v:thickStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BED",
          "name": "writeBED",
          "package": "bio",
          "signature": "FilePath -\u003e [BED] -\u003e IO ()",
          "source": "src/Bio-Alignment-BED.html#writeBED",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BED",
          "module": "Bio.Alignment.BED",
          "name": "writeBED",
          "normalized": "FilePath-\u003e[BED]-\u003eIO()",
          "package": "bio",
          "partial": "BED",
          "signature": "FilePath-\u003e[BED]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BED.html#v:writeBED"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use XML output and the BlastXML module\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eThis module implements a parser for BLAST results.\n\u003c/p\u003e\u003cp\u003eThis module is DEPRECATED.\n   It is *very* recommended that you run blast with XML output\n   instaed, and use the BlastXML module to parse it.\n   Don't say I didn't warn you!\n\u003c/p\u003e\u003cp\u003eBLAST is a tool for searching in (biological) sequences for\n   similarity.  This library is tested against NCBI-blast version\n   2.2.14.  There exist several independent versions, so expect some\n   incompatbilities if you're using a different BLAST version.\n\u003c/p\u003e\u003cp\u003eThe format is straightforward (and non-recursive), and this implementation\n   uses a simple line-based, hierarchical parser.\n\u003c/p\u003e\u003cp\u003eFor more information on BLAST, check \u003ca\u003ehttp://www.ncbi.nlm.nih.gov/Education/BLASTinfo/information3.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Alignment.Blast",
          "name": "Blast",
          "package": "bio",
          "source": "src/Bio-Alignment-Blast.html",
          "type": "module"
        },
        "index": {
          "description": "Deprecated Use XML output and the BlastXML module This module implements parser for BLAST results This module is DEPRECATED It is very recommended that you run blast with XML output instaed and use the BlastXML module to parse it Don say didn warn you BLAST is tool for searching in biological sequences for similarity This library is tested against NCBI-blast version There exist several independent versions so expect some incompatbilities if you re using different BLAST version The format is straightforward and non-recursive and this implementation uses simple line-based hierarchical parser For more information on BLAST check http www.ncbi.nlm.nih.gov Education BLASTinfo information3.html",
          "hierarchy": "Bio Alignment Blast",
          "module": "Bio.Alignment.Blast",
          "name": "Blast",
          "package": "bio",
          "partial": "Blast",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Blast.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Blast",
          "name": "parse",
          "package": "bio",
          "signature": "ByteString -\u003e BlastResult",
          "source": "src/Bio-Alignment-Blast.html#parse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment Blast",
          "module": "Bio.Alignment.Blast",
          "name": "parse",
          "normalized": "ByteString-\u003eBlastResult",
          "package": "bio",
          "signature": "ByteString-\u003eBlastResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Blast.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a hierarchical data structure for BLAST results,\n   there is an alternative flat structure in the \u003ca\u003eBio.Alignment.BlastFlat\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003eBLAST is a tool for searching in (biological) sequences for\n   similarity.  This library is tested against NCBI-blast version\n   2.2.14.  There exist several independent versions of BLAST, so expect some\n   incompatbilities if you're using a different BLAST version.\n\u003c/p\u003e\u003cp\u003eFor parsing BLAST results, the XML format (blastall -m 7) is by far the most\n   robust choice, and is implemented in the \u003ca\u003eBio.Alignment.BlastXML\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003eThe format is straightforward (and non-recursive).\n   For more information on BLAST, check \u003ca\u003ehttp://www.ncbi.nlm.nih.gov/Education/BLASTinfo/information3.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Alignment.BlastData",
          "name": "BlastData",
          "package": "bio",
          "source": "src/Bio-Alignment-BlastData.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements hierarchical data structure for BLAST results there is an alternative flat structure in the Bio.Alignment.BlastFlat module BLAST is tool for searching in biological sequences for similarity This library is tested against NCBI-blast version There exist several independent versions of BLAST so expect some incompatbilities if you re using different BLAST version For parsing BLAST results the XML format blastall is by far the most robust choice and is implemented in the Bio.Alignment.BlastXML module The format is straightforward and non-recursive For more information on BLAST check http www.ncbi.nlm.nih.gov Education BLASTinfo information3.html",
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "BlastData",
          "package": "bio",
          "partial": "Blast Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Aux field in the BLAST output includes match information that depends\n   on the BLAST flavor (blastn, blastx, or blastp).  This data structure captures\n   those variations.\n\u003c/p\u003e",
          "module": "Bio.Alignment.BlastData",
          "name": "Aux",
          "package": "bio",
          "source": "src/Bio-Alignment-BlastData.html#Aux",
          "type": "data"
        },
        "index": {
          "description": "The Aux field in the BLAST output includes match information that depends on the BLAST flavor blastn blastx or blastp This data structure captures those variations",
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "Aux",
          "package": "bio",
          "partial": "Aux",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#t:Aux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach match between a query and a target sequence (or subject)\n   is a \u003ccode\u003e\u003ca\u003eBlastHit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Bio.Alignment.BlastData",
          "name": "BlastHit",
          "package": "bio",
          "source": "src/Bio-Alignment-BlastData.html#BlastHit",
          "type": "data"
        },
        "index": {
          "description": "Each match between query and target sequence or subject is BlastHit",
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "BlastHit",
          "package": "bio",
          "partial": "Blast Hit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#t:BlastHit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBlastHit\u003c/a\u003e\u003c/code\u003e may contain multiple separate matches (typcially when\n   an indel causes a frameshift that blastx is unable to bridge).\n\u003c/p\u003e",
          "module": "Bio.Alignment.BlastData",
          "name": "BlastMatch",
          "package": "bio",
          "source": "src/Bio-Alignment-BlastData.html#BlastMatch",
          "type": "data"
        },
        "index": {
          "description": "BlastHit may contain multiple separate matches typcially when an indel causes frameshift that blastx is unable to bridge",
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "BlastMatch",
          "package": "bio",
          "partial": "Blast Match",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#t:BlastMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach query sequence generates a \u003ccode\u003e\u003ca\u003eBlastRecord\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Bio.Alignment.BlastData",
          "name": "BlastRecord",
          "package": "bio",
          "source": "src/Bio-Alignment-BlastData.html#BlastRecord",
          "type": "data"
        },
        "index": {
          "description": "Each query sequence generates BlastRecord",
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "BlastRecord",
          "package": "bio",
          "partial": "Blast Record",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#t:BlastRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBlastResult\u003c/a\u003e\u003c/code\u003e is the root of the hierarchy.\n\u003c/p\u003e",
          "module": "Bio.Alignment.BlastData",
          "name": "BlastResult",
          "package": "bio",
          "source": "src/Bio-Alignment-BlastData.html#BlastResult",
          "type": "data"
        },
        "index": {
          "description": "BlastResult is the root of the hierarchy",
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "BlastResult",
          "package": "bio",
          "partial": "Blast Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#t:BlastResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sequence id, i.e. the first word of the header field.\n\u003c/p\u003e",
          "module": "Bio.Alignment.BlastData",
          "name": "SeqId",
          "package": "bio",
          "source": "src/Bio-Alignment-BlastData.html#SeqId",
          "type": "type"
        },
        "index": {
          "description": "The sequence id i.e the first word of the header field",
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "SeqId",
          "package": "bio",
          "partial": "Seq Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#t:SeqId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eStrand\u003c/a\u003e\u003c/code\u003e indicates the direction of the match, i.e. the plain sequence or\n   its reverse complement.\n\u003c/p\u003e",
          "module": "Bio.Alignment.BlastData",
          "name": "Strand",
          "package": "bio",
          "source": "src/Bio-Alignment-BlastData.html#Strand",
          "type": "data"
        },
        "index": {
          "description": "The Strand indicates the direction of the match i.e the plain sequence or its reverse complement",
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "Strand",
          "package": "bio",
          "partial": "Strand",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#t:Strand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastData",
          "name": "BlastHit",
          "package": "bio",
          "signature": "BlastHit",
          "source": "src/Bio-Alignment-BlastData.html#BlastHit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "BlastHit",
          "package": "bio",
          "partial": "Blast Hit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:BlastHit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastData",
          "name": "BlastMatch",
          "package": "bio",
          "signature": "BlastMatch",
          "source": "src/Bio-Alignment-BlastData.html#BlastMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "BlastMatch",
          "package": "bio",
          "partial": "Blast Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:BlastMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastData",
          "name": "BlastRecord",
          "package": "bio",
          "signature": "BlastRecord",
          "source": "src/Bio-Alignment-BlastData.html#BlastRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "BlastRecord",
          "package": "bio",
          "partial": "Blast Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:BlastRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastData",
          "name": "BlastResult",
          "package": "bio",
          "signature": "BlastResult",
          "source": "src/Bio-Alignment-BlastData.html#BlastResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "BlastResult",
          "package": "bio",
          "partial": "Blast Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:BlastResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eblastx\n\u003c/p\u003e",
          "module": "[\"Bio.Alignment.BlastData\",\"Bio.Alignment.BlastFlat\"]",
          "name": "Frame",
          "package": "bio",
          "signature": "Frame !Strand !Int",
          "source": "src/Bio-Alignment-BlastData.html#Aux",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:Frame\",\"http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#v:Frame\"]"
        },
        "index": {
          "description": "blastx",
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "Frame",
          "package": "bio",
          "partial": "Frame",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:Frame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Alignment.BlastData\",\"Bio.Alignment.BlastFlat\"]",
          "name": "Minus",
          "package": "bio",
          "signature": "Minus",
          "source": "src/Bio-Alignment-BlastData.html#Strand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:Minus\",\"http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#v:Minus\"]"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "Minus",
          "package": "bio",
          "partial": "Minus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:Minus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Alignment.BlastData\",\"Bio.Alignment.BlastFlat\"]",
          "name": "Plus",
          "package": "bio",
          "signature": "Plus",
          "source": "src/Bio-Alignment-BlastData.html#Strand",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:Plus\",\"http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#v:Plus\"]"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "Plus",
          "package": "bio",
          "partial": "Plus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:Plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eblastn\n\u003c/p\u003e",
          "module": "[\"Bio.Alignment.BlastData\",\"Bio.Alignment.BlastFlat\"]",
          "name": "Strands",
          "package": "bio",
          "signature": "Strands !Strand !Strand",
          "source": "src/Bio-Alignment-BlastData.html#Aux",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:Strands\",\"http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#v:Strands\"]"
        },
        "index": {
          "description": "blastn",
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "Strands",
          "package": "bio",
          "partial": "Strands",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:Strands"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastData",
          "name": "aux",
          "package": "bio",
          "signature": "Aux",
          "source": "src/Bio-Alignment-BlastData.html#BlastMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "aux",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:aux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastData",
          "name": "bits",
          "package": "bio",
          "signature": "Double",
          "source": "src/Bio-Alignment-BlastData.html#BlastMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "bits",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:bits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastData",
          "name": "blastdate",
          "package": "bio",
          "signature": "ByteString",
          "source": "src/Bio-Alignment-BlastData.html#BlastResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "blastdate",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:blastdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastData",
          "name": "blastprogram",
          "package": "bio",
          "signature": "ByteString",
          "source": "src/Bio-Alignment-BlastData.html#BlastResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "blastprogram",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:blastprogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastData",
          "name": "blastreferences",
          "package": "bio",
          "signature": "ByteString",
          "source": "src/Bio-Alignment-BlastData.html#BlastResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "blastreferences",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:blastreferences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastData",
          "name": "blastversion",
          "package": "bio",
          "signature": "ByteString",
          "source": "src/Bio-Alignment-BlastData.html#BlastResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "blastversion",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:blastversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastData",
          "name": "database",
          "package": "bio",
          "signature": "ByteString",
          "source": "src/Bio-Alignment-BlastData.html#BlastResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "database",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:database"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastData",
          "name": "dbchars",
          "package": "bio",
          "signature": "Integer",
          "source": "src/Bio-Alignment-BlastData.html#BlastResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "dbchars",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:dbchars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastData",
          "name": "dbsequences",
          "package": "bio",
          "signature": "Integer",
          "source": "src/Bio-Alignment-BlastData.html#BlastResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "dbsequences",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:dbsequences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastData",
          "name": "e_val",
          "package": "bio",
          "signature": "Double",
          "source": "src/Bio-Alignment-BlastData.html#BlastMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "e_val",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:e_val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastData",
          "name": "h_from",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-BlastData.html#BlastMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "h_from",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:h_from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastData",
          "name": "h_to",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-BlastData.html#BlastMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "h_to",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:h_to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastData",
          "name": "hits",
          "package": "bio",
          "signature": "[BlastHit]",
          "source": "src/Bio-Alignment-BlastData.html#BlastRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "hits",
          "normalized": "[BlastHit]",
          "package": "bio",
          "signature": "[BlastHit]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:hits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastData",
          "name": "identity",
          "package": "bio",
          "signature": "(Int, Int)",
          "source": "src/Bio-Alignment-BlastData.html#BlastMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "identity",
          "normalized": "(Int,Int)",
          "package": "bio",
          "signature": "(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastData",
          "name": "matches",
          "package": "bio",
          "signature": "[BlastMatch]",
          "source": "src/Bio-Alignment-BlastData.html#BlastHit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "matches",
          "normalized": "[BlastMatch]",
          "package": "bio",
          "signature": "[BlastMatch]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:matches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastData",
          "name": "q_from",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-BlastData.html#BlastMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "q_from",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:q_from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastData",
          "name": "q_to",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-BlastData.html#BlastMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "q_to",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:q_to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastData",
          "name": "qlength",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-BlastData.html#BlastRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "qlength",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:qlength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastData",
          "name": "query",
          "package": "bio",
          "signature": "SeqId",
          "source": "src/Bio-Alignment-BlastData.html#BlastRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "query",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastData",
          "name": "results",
          "package": "bio",
          "signature": "[BlastRecord]",
          "source": "src/Bio-Alignment-BlastData.html#BlastResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "results",
          "normalized": "[BlastRecord]",
          "package": "bio",
          "signature": "[BlastRecord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:results"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastData",
          "name": "slength",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-BlastData.html#BlastHit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "slength",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:slength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastData",
          "name": "subject",
          "package": "bio",
          "signature": "SeqId",
          "source": "src/Bio-Alignment-BlastData.html#BlastHit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastData",
          "module": "Bio.Alignment.BlastData",
          "name": "subject",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastData.html#v:subject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a \"flattened\" data structure for Blast hits,\n   as opposed to the hierarchical structure in \u003ca\u003eBio.Alignment.BlastData\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe flat data type is useful in many cases where it is more natural\n   to see the result as a set of rows (e.g. for insertaion in a database).\n\u003c/p\u003e\u003cp\u003eIt would probably be more (memory-) efficient to go the other way\n   (i.e. from flat to hierarchical), as passing the current, partially\n   built \u003ca\u003eBlastFlat\u003c/a\u003e object down the stream of results and stamping\n   out a stream of completed ones.  (See \u003ca\u003eBio.Alignment.BlastXML.breaks\u003c/a\u003e\n   for this week's most cumbersome use of parallelism to avoid the\n   memory issue.)  \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Alignment.BlastFlat",
          "name": "BlastFlat",
          "package": "bio",
          "source": "src/Bio-Alignment-BlastFlat.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements flattened data structure for Blast hits as opposed to the hierarchical structure in Bio.Alignment.BlastData The flat data type is useful in many cases where it is more natural to see the result as set of rows e.g for insertaion in database It would probably be more memory efficient to go the other way i.e from flat to hierarchical as passing the current partially built BlastFlat object down the stream of results and stamping out stream of completed ones See Bio.Alignment.BlastXML.breaks for this week most cumbersome use of parallelism to avoid the memory issue",
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "BlastFlat",
          "package": "bio",
          "partial": "Blast Flat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Aux field in the BLAST output includes match information that depends\n   on the BLAST flavor (blastn, blastx, or blastp).  This data structure captures\n   those variations.\n\u003c/p\u003e",
          "module": "Bio.Alignment.BlastFlat",
          "name": "Aux",
          "package": "bio",
          "source": "src/Bio-Alignment-BlastData.html#Aux",
          "type": "data"
        },
        "index": {
          "description": "The Aux field in the BLAST output includes match information that depends on the BLAST flavor blastn blastx or blastp This data structure captures those variations",
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "Aux",
          "package": "bio",
          "partial": "Aux",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#t:Aux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe BlastFlat data structure contains information about a single match\n\u003c/p\u003e",
          "module": "Bio.Alignment.BlastFlat",
          "name": "BlastFlat",
          "package": "bio",
          "source": "src/Bio-Alignment-BlastFlat.html#BlastFlat",
          "type": "data"
        },
        "index": {
          "description": "The BlastFlat data structure contains information about single match",
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "BlastFlat",
          "package": "bio",
          "partial": "Blast Flat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#t:BlastFlat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach query sequence generates a \u003ccode\u003e\u003ca\u003eBlastRecord\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Bio.Alignment.BlastFlat",
          "name": "BlastRecord",
          "package": "bio",
          "source": "src/Bio-Alignment-BlastData.html#BlastRecord",
          "type": "data"
        },
        "index": {
          "description": "Each query sequence generates BlastRecord",
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "BlastRecord",
          "package": "bio",
          "partial": "Blast Record",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#t:BlastRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eStrand\u003c/a\u003e\u003c/code\u003e indicates the direction of the match, i.e. the plain sequence or\n   its reverse complement.\n\u003c/p\u003e",
          "module": "Bio.Alignment.BlastFlat",
          "name": "Strand",
          "package": "bio",
          "source": "src/Bio-Alignment-BlastData.html#Strand",
          "type": "data"
        },
        "index": {
          "description": "The Strand indicates the direction of the match i.e the plain sequence or its reverse complement",
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "Strand",
          "package": "bio",
          "partial": "Strand",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#t:Strand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastFlat",
          "name": "BlastFlat",
          "package": "bio",
          "signature": "BlastFlat",
          "source": "src/Bio-Alignment-BlastFlat.html#BlastFlat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "BlastFlat",
          "package": "bio",
          "partial": "Blast Flat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#v:BlastFlat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastFlat",
          "name": "aux",
          "package": "bio",
          "signature": "Aux",
          "source": "src/Bio-Alignment-BlastFlat.html#BlastFlat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "aux",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#v:aux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastFlat",
          "name": "bits",
          "package": "bio",
          "signature": "Double",
          "source": "src/Bio-Alignment-BlastFlat.html#BlastFlat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "bits",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#v:bits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastFlat",
          "name": "blastdate",
          "package": "bio",
          "signature": "BlastResult -\u003e ByteString",
          "source": "src/Bio-Alignment-BlastData.html#blastdate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "blastdate",
          "normalized": "BlastResult-\u003eByteString",
          "package": "bio",
          "signature": "BlastResult-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#v:blastdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastFlat",
          "name": "blastprogram",
          "package": "bio",
          "signature": "BlastResult -\u003e ByteString",
          "source": "src/Bio-Alignment-BlastData.html#blastprogram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "blastprogram",
          "normalized": "BlastResult-\u003eByteString",
          "package": "bio",
          "signature": "BlastResult-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#v:blastprogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastFlat",
          "name": "blastreferences",
          "package": "bio",
          "signature": "BlastResult -\u003e ByteString",
          "source": "src/Bio-Alignment-BlastData.html#blastreferences",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "blastreferences",
          "normalized": "BlastResult-\u003eByteString",
          "package": "bio",
          "signature": "BlastResult-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#v:blastreferences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastFlat",
          "name": "blastversion",
          "package": "bio",
          "signature": "BlastResult -\u003e ByteString",
          "source": "src/Bio-Alignment-BlastData.html#blastversion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "blastversion",
          "normalized": "BlastResult-\u003eByteString",
          "package": "bio",
          "signature": "BlastResult-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#v:blastversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastFlat",
          "name": "database",
          "package": "bio",
          "signature": "BlastResult -\u003e ByteString",
          "source": "src/Bio-Alignment-BlastData.html#database",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "database",
          "normalized": "BlastResult-\u003eByteString",
          "package": "bio",
          "signature": "BlastResult-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#v:database"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastFlat",
          "name": "dbchars",
          "package": "bio",
          "signature": "BlastResult -\u003e Integer",
          "source": "src/Bio-Alignment-BlastData.html#dbchars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "dbchars",
          "normalized": "BlastResult-\u003eInteger",
          "package": "bio",
          "signature": "BlastResult-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#v:dbchars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastFlat",
          "name": "dbsequences",
          "package": "bio",
          "signature": "BlastResult -\u003e Integer",
          "source": "src/Bio-Alignment-BlastData.html#dbsequences",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "dbsequences",
          "normalized": "BlastResult-\u003eInteger",
          "package": "bio",
          "signature": "BlastResult-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#v:dbsequences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastFlat",
          "name": "e_val",
          "package": "bio",
          "signature": "Double",
          "source": "src/Bio-Alignment-BlastFlat.html#BlastFlat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "e_val",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#v:e_val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert BlastRecords into BlastFlats (representing a depth-first traversal of the \n   BlastRecord structure.)\n\u003c/p\u003e",
          "module": "Bio.Alignment.BlastFlat",
          "name": "flatten",
          "package": "bio",
          "signature": "[BlastRecord] -\u003e [BlastFlat]",
          "source": "src/Bio-Alignment-BlastFlat.html#flatten",
          "type": "function"
        },
        "index": {
          "description": "Convert BlastRecords into BlastFlats representing depth-first traversal of the BlastRecord structure",
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "flatten",
          "normalized": "[BlastRecord]-\u003e[BlastFlat]",
          "package": "bio",
          "signature": "[BlastRecord]-\u003e[BlastFlat]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#v:flatten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastFlat",
          "name": "h_from",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-BlastFlat.html#BlastFlat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "h_from",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#v:h_from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastFlat",
          "name": "h_to",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-BlastFlat.html#BlastFlat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "h_to",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#v:h_to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastFlat",
          "name": "identity",
          "package": "bio",
          "signature": "(Int, Int)",
          "source": "src/Bio-Alignment-BlastFlat.html#BlastFlat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "identity",
          "normalized": "(Int,Int)",
          "package": "bio",
          "signature": "(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#v:identity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastFlat",
          "name": "q_from",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-BlastFlat.html#BlastFlat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "q_from",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#v:q_from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastFlat",
          "name": "q_to",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-BlastFlat.html#BlastFlat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "q_to",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#v:q_to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastFlat",
          "name": "qlength",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-BlastFlat.html#BlastFlat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "qlength",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#v:qlength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastFlat",
          "name": "query",
          "package": "bio",
          "signature": "SeqId",
          "source": "src/Bio-Alignment-BlastFlat.html#BlastFlat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "query",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastFlat",
          "name": "readXML",
          "package": "bio",
          "signature": "FilePath -\u003e IO [BlastFlat]",
          "source": "src/Bio-Alignment-BlastFlat.html#readXML",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "readXML",
          "normalized": "FilePath-\u003eIO[BlastFlat]",
          "package": "bio",
          "partial": "XML",
          "signature": "FilePath-\u003eIO[BlastFlat]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#v:readXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastFlat",
          "name": "results",
          "package": "bio",
          "signature": "BlastResult -\u003e [BlastRecord]",
          "source": "src/Bio-Alignment-BlastData.html#results",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "results",
          "normalized": "BlastResult-\u003e[BlastRecord]",
          "package": "bio",
          "signature": "BlastResult-\u003e[BlastRecord]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#v:results"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastFlat",
          "name": "slength",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-BlastFlat.html#BlastFlat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "slength",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#v:slength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.BlastFlat",
          "name": "subject",
          "package": "bio",
          "signature": "SeqId",
          "source": "src/Bio-Alignment-BlastFlat.html#BlastFlat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment BlastFlat",
          "module": "Bio.Alignment.BlastFlat",
          "name": "subject",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastFlat.html#v:subject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse blast XML output.\n\u003c/p\u003e\u003cp\u003eIf you use a recent version of NCBI BLAST and specify XML output (blastall -m 7),\n   this module should be able to parse the result into a hierarchical \u003ccode\u003e\u003ca\u003eBlastResult\u003c/a\u003e\u003c/code\u003e\n   structure.\n\u003c/p\u003e\u003cp\u003eWhile the process may consume a bit of memory, the parsing is lazy,\n   and file sizes of several gigabytes can be parsed (see e.g. the\n   xml2x tool for an example).  To parse XML, we use\n   \u003ccode\u003e\u003ca\u003eTagSoup\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Alignment.BlastXML",
          "name": "BlastXML",
          "package": "bio",
          "source": "src/Bio-Alignment-BlastXML.html",
          "type": "module"
        },
        "index": {
          "description": "Parse blast XML output If you use recent version of NCBI BLAST and specify XML output blastall this module should be able to parse the result into hierarchical BlastResult structure While the process may consume bit of memory the parsing is lazy and file sizes of several gigabytes can be parsed see e.g the xml2x tool for an example To parse XML we use TagSoup",
          "hierarchy": "Bio Alignment BlastXML",
          "module": "Bio.Alignment.BlastXML",
          "name": "BlastXML",
          "package": "bio",
          "partial": "Blast XML",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastXML.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse BLAST results in XML format\n\u003c/p\u003e",
          "module": "Bio.Alignment.BlastXML",
          "name": "readXML",
          "package": "bio",
          "signature": "FilePath -\u003e IO [BlastResult]",
          "source": "src/Bio-Alignment-BlastXML.html#readXML",
          "type": "function"
        },
        "index": {
          "description": "Parse BLAST results in XML format",
          "hierarchy": "Bio Alignment BlastXML",
          "module": "Bio.Alignment.BlastXML",
          "name": "readXML",
          "normalized": "FilePath-\u003eIO[BlastResult]",
          "package": "bio",
          "partial": "XML",
          "signature": "FilePath-\u003eIO[BlastResult]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-BlastXML.html#v:readXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a data type to represent an alignment\nproduced by the Bowtie short-read alignment tool (see\n\u003ca\u003ehttp://bowtie-bio.sourceforge.net/index.shtml\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eThe simple accessors recapitulate the details of the Bowtie alignment\noutput.  The position of the alignment is given by the \"0-based offset\ninto the reference sequence where leftmost character of the alignment\noccurs\".  Thus, for forward-strand alignments this is the 5' end of\nthe query sequence while for reverse-complement alignments this is the\n3' end of the query sequence.  Similarly, the query sequence and query\nquality are shown in reference forward strand orientation, and thus\nmay be reverse complemented.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Alignment.Bowtie",
          "name": "Bowtie",
          "package": "bio",
          "source": "src/Bio-Alignment-Bowtie.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides data type to represent an alignment produced by the Bowtie short-read alignment tool see http bowtie-bio.sourceforge.net index.shtml The simple accessors recapitulate the details of the Bowtie alignment output The position of the alignment is given by the based offset into the reference sequence where leftmost character of the alignment occurs Thus for forward-strand alignments this is the end of the query sequence while for reverse-complement alignments this is the end of the query sequence Similarly the query sequence and query quality are shown in reference forward strand orientation and thus may be reverse complemented",
          "hierarchy": "Bio Alignment Bowtie",
          "module": "Bio.Alignment.Bowtie",
          "name": "Bowtie",
          "package": "bio",
          "partial": "Bowtie",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Bowtie.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Bowtie",
          "name": "Align",
          "package": "bio",
          "source": "src/Bio-Alignment-Bowtie.html#Align",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bio Alignment Bowtie",
          "module": "Bio.Alignment.Bowtie",
          "name": "Align",
          "package": "bio",
          "partial": "Align",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Bowtie.html#t:Align"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of a single mismatch in a bowtie alignment\n\u003c/p\u003e",
          "module": "Bio.Alignment.Bowtie",
          "name": "Mismatch",
          "package": "bio",
          "source": "src/Bio-Alignment-Bowtie.html#Mismatch",
          "type": "data"
        },
        "index": {
          "description": "Representation of single mismatch in bowtie alignment",
          "hierarchy": "Bio Alignment Bowtie",
          "module": "Bio.Alignment.Bowtie",
          "name": "Mismatch",
          "package": "bio",
          "partial": "Mismatch",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Bowtie.html#t:Mismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Bowtie",
          "name": "Align",
          "package": "bio",
          "signature": "Align",
          "source": "src/Bio-Alignment-Bowtie.html#Align",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment Bowtie",
          "module": "Bio.Alignment.Bowtie",
          "name": "Align",
          "package": "bio",
          "partial": "Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Bowtie.html#v:Align"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Bowtie",
          "name": "Mismatch",
          "package": "bio",
          "signature": "Mismatch",
          "source": "src/Bio-Alignment-Bowtie.html#Mismatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment Bowtie",
          "module": "Bio.Alignment.Bowtie",
          "name": "Mismatch",
          "package": "bio",
          "partial": "Mismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Bowtie.html#v:Mismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZero-based offset of the left-most aligned position in the reference\n\u003c/p\u003e",
          "module": "Bio.Alignment.Bowtie",
          "name": "leftoffset",
          "package": "bio",
          "signature": "Offset",
          "source": "src/Bio-Alignment-Bowtie.html#Align",
          "type": "function"
        },
        "index": {
          "description": "Zero-based offset of the left-most aligned position in the reference",
          "hierarchy": "Bio Alignment Bowtie",
          "module": "Bio.Alignment.Bowtie",
          "name": "leftoffset",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Bowtie.html#v:leftoffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the length of the query sequence\n\u003c/p\u003e",
          "module": "Bio.Alignment.Bowtie",
          "name": "length",
          "package": "bio",
          "signature": "Align -\u003e Offset",
          "source": "src/Bio-Alignment-Bowtie.html#length",
          "type": "function"
        },
        "index": {
          "description": "Returns the length of the query sequence",
          "hierarchy": "Bio Alignment Bowtie",
          "module": "Bio.Alignment.Bowtie",
          "name": "length",
          "normalized": "Align-\u003eOffset",
          "package": "bio",
          "signature": "Align-\u003eOffset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Bowtie.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence position of a mismatch on the reference sequence.\n\u003c/p\u003e",
          "module": "Bio.Alignment.Bowtie",
          "name": "mismatchSeqPos",
          "package": "bio",
          "signature": "Align -\u003e Mismatch -\u003e SeqPos",
          "source": "src/Bio-Alignment-Bowtie.html#mismatchSeqPos",
          "type": "function"
        },
        "index": {
          "description": "Sequence position of mismatch on the reference sequence",
          "hierarchy": "Bio Alignment Bowtie",
          "module": "Bio.Alignment.Bowtie",
          "name": "mismatchSeqPos",
          "normalized": "Align-\u003eMismatch-\u003eSeqPos",
          "package": "bio",
          "partial": "Seq Pos",
          "signature": "Align-\u003eMismatch-\u003eSeqPos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Bowtie.html#v:mismatchSeqPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMismatches\n\u003c/p\u003e",
          "module": "Bio.Alignment.Bowtie",
          "name": "mismatches",
          "package": "bio",
          "signature": "[Mismatch]",
          "source": "src/Bio-Alignment-Bowtie.html#Align",
          "type": "function"
        },
        "index": {
          "description": "Mismatches",
          "hierarchy": "Bio Alignment Bowtie",
          "module": "Bio.Alignment.Bowtie",
          "name": "mismatches",
          "normalized": "[Mismatch]",
          "package": "bio",
          "signature": "[Mismatch]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Bowtie.html#v:mismatches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOffset of the mismatch site from the 5' end of the query\n\u003c/p\u003e",
          "module": "Bio.Alignment.Bowtie",
          "name": "mmoffset",
          "package": "bio",
          "signature": "Offset",
          "source": "src/Bio-Alignment-Bowtie.html#Mismatch",
          "type": "function"
        },
        "index": {
          "description": "Offset of the mismatch site from the end of the query",
          "hierarchy": "Bio Alignment Bowtie",
          "module": "Bio.Alignment.Bowtie",
          "name": "mmoffset",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Bowtie.html#v:mmoffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the query sequence\n\u003c/p\u003e",
          "module": "Bio.Alignment.Bowtie",
          "name": "name",
          "package": "bio",
          "signature": "SeqName",
          "source": "src/Bio-Alignment-Bowtie.html#Align",
          "type": "function"
        },
        "index": {
          "description": "Name of the query sequence",
          "hierarchy": "Bio Alignment Bowtie",
          "module": "Bio.Alignment.Bowtie",
          "name": "name",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Bowtie.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of mismatches in the alignment\n\u003c/p\u003e",
          "module": "Bio.Alignment.Bowtie",
          "name": "nmismatch",
          "package": "bio",
          "signature": "Align -\u003e Int",
          "source": "src/Bio-Alignment-Bowtie.html#nmismatch",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of mismatches in the alignment",
          "hierarchy": "Bio Alignment Bowtie",
          "module": "Bio.Alignment.Bowtie",
          "name": "nmismatch",
          "normalized": "Align-\u003eInt",
          "package": "bio",
          "signature": "Align-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Bowtie.html#v:nmismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a line of Bowtie output to produce a \u003ccode\u003e\u003ca\u003eAlign\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Bio.Alignment.Bowtie",
          "name": "parse",
          "package": "bio",
          "signature": "ByteString -\u003e Either String Align",
          "source": "src/Bio-Alignment-Bowtie.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Parses line of Bowtie output to produce Align",
          "hierarchy": "Bio Alignment Bowtie",
          "module": "Bio.Alignment.Bowtie",
          "name": "parse",
          "normalized": "ByteString-\u003eEither String Align",
          "package": "bio",
          "signature": "ByteString-\u003eEither String Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Bowtie.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery quality, in the reference forward strand orientation\n\u003c/p\u003e",
          "module": "Bio.Alignment.Bowtie",
          "name": "qual",
          "package": "bio",
          "signature": "QualData",
          "source": "src/Bio-Alignment-Bowtie.html#Align",
          "type": "function"
        },
        "index": {
          "description": "Query quality in the reference forward strand orientation",
          "hierarchy": "Bio Alignment Bowtie",
          "module": "Bio.Alignment.Bowtie",
          "name": "qual",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Bowtie.html#v:qual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery quality as given in the query file\n\u003c/p\u003e",
          "module": "Bio.Alignment.Bowtie",
          "name": "queryQual",
          "package": "bio",
          "signature": "Align -\u003e QualData",
          "source": "src/Bio-Alignment-Bowtie.html#queryQual",
          "type": "function"
        },
        "index": {
          "description": "Query quality as given in the query file",
          "hierarchy": "Bio Alignment Bowtie",
          "module": "Bio.Alignment.Bowtie",
          "name": "queryQual",
          "normalized": "Align-\u003eQualData",
          "package": "bio",
          "partial": "Qual",
          "signature": "Align-\u003eQualData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Bowtie.html#v:queryQual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery sequence as given in the query file\n\u003c/p\u003e",
          "module": "Bio.Alignment.Bowtie",
          "name": "querySequ",
          "package": "bio",
          "signature": "Align -\u003e SeqData",
          "source": "src/Bio-Alignment-Bowtie.html#querySequ",
          "type": "function"
        },
        "index": {
          "description": "Query sequence as given in the query file",
          "hierarchy": "Bio Alignment Bowtie",
          "module": "Bio.Alignment.Bowtie",
          "name": "querySequ",
          "normalized": "Align-\u003eSeqData",
          "package": "bio",
          "partial": "Sequ",
          "signature": "Align-\u003eSeqData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Bowtie.html#v:querySequ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery nucleotide\n\u003c/p\u003e",
          "module": "Bio.Alignment.Bowtie",
          "name": "readbase",
          "package": "bio",
          "signature": "Char",
          "source": "src/Bio-Alignment-Bowtie.html#Mismatch",
          "type": "function"
        },
        "index": {
          "description": "Query nucleotide",
          "hierarchy": "Bio Alignment Bowtie",
          "module": "Bio.Alignment.Bowtie",
          "name": "readbase",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Bowtie.html#v:readbase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003erefCSeqLoc\u003c/a\u003e\u003c/code\u003e but without the reference sequence name.\n\u003c/p\u003e",
          "module": "Bio.Alignment.Bowtie",
          "name": "refCLoc",
          "package": "bio",
          "signature": "Align -\u003e ContigLoc",
          "source": "src/Bio-Alignment-Bowtie.html#refCLoc",
          "type": "function"
        },
        "index": {
          "description": "As refCSeqLoc but without the reference sequence name",
          "hierarchy": "Bio Alignment Bowtie",
          "module": "Bio.Alignment.Bowtie",
          "name": "refCLoc",
          "normalized": "Align-\u003eContigLoc",
          "package": "bio",
          "partial": "CLoc",
          "signature": "Align-\u003eContigLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Bowtie.html#v:refCLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the sequence location covered by the query in\n the alignment.  This will be a sequence location on the reference\n sequence and may run on the forward or the reverse complement\n strand.\n\u003c/p\u003e",
          "module": "Bio.Alignment.Bowtie",
          "name": "refCSeqLoc",
          "package": "bio",
          "signature": "Align -\u003e ContigSeqLoc",
          "source": "src/Bio-Alignment-Bowtie.html#refCSeqLoc",
          "type": "function"
        },
        "index": {
          "description": "Returns the sequence location covered by the query in the alignment This will be sequence location on the reference sequence and may run on the forward or the reverse complement strand",
          "hierarchy": "Bio Alignment Bowtie",
          "module": "Bio.Alignment.Bowtie",
          "name": "refCSeqLoc",
          "normalized": "Align-\u003eContigSeqLoc",
          "package": "bio",
          "partial": "CSeq Loc",
          "signature": "Align-\u003eContigSeqLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Bowtie.html#v:refCSeqLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the sequence location covered by the query, as\n \u003ccode\u003e\u003ca\u003erefCSeqLoc\u003c/a\u003e\u003c/code\u003e, as a \u003ccode\u003e\u003ca\u003eSeqLoc\u003c/a\u003e\u003c/code\u003e location.\n\u003c/p\u003e",
          "module": "Bio.Alignment.Bowtie",
          "name": "refSeqLoc",
          "package": "bio",
          "signature": "Align -\u003e SeqLoc",
          "source": "src/Bio-Alignment-Bowtie.html#refSeqLoc",
          "type": "function"
        },
        "index": {
          "description": "Returns the sequence location covered by the query as refCSeqLoc as SeqLoc location",
          "hierarchy": "Bio Alignment Bowtie",
          "module": "Bio.Alignment.Bowtie",
          "name": "refSeqLoc",
          "normalized": "Align-\u003eSeqLoc",
          "package": "bio",
          "partial": "Seq Loc",
          "signature": "Align-\u003eSeqLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Bowtie.html#v:refSeqLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the sequence position of the start of the query sequence\n alignment.  This will include the strand of the alignment and will\n not be the same as the position computed from \u003ccode\u003e\u003ca\u003eleftoffset\u003c/a\u003e\u003c/code\u003e when the\n alignment is on the reverse complement strand.\n\u003c/p\u003e",
          "module": "Bio.Alignment.Bowtie",
          "name": "refSeqPos",
          "package": "bio",
          "signature": "Align -\u003e SeqPos",
          "source": "src/Bio-Alignment-Bowtie.html#refSeqPos",
          "type": "function"
        },
        "index": {
          "description": "Returns the sequence position of the start of the query sequence alignment This will include the strand of the alignment and will not be the same as the position computed from leftoffset when the alignment is on the reverse complement strand",
          "hierarchy": "Bio Alignment Bowtie",
          "module": "Bio.Alignment.Bowtie",
          "name": "refSeqPos",
          "normalized": "Align-\u003eSeqPos",
          "package": "bio",
          "partial": "Seq Pos",
          "signature": "Align-\u003eSeqPos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Bowtie.html#v:refSeqPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReference nucleotide\n\u003c/p\u003e",
          "module": "Bio.Alignment.Bowtie",
          "name": "refbase",
          "package": "bio",
          "signature": "Char",
          "source": "src/Bio-Alignment-Bowtie.html#Mismatch",
          "type": "function"
        },
        "index": {
          "description": "Reference nucleotide",
          "hierarchy": "Bio Alignment Bowtie",
          "module": "Bio.Alignment.Bowtie",
          "name": "refbase",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Bowtie.html#v:refbase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the reference sequence\n\u003c/p\u003e",
          "module": "Bio.Alignment.Bowtie",
          "name": "refname",
          "package": "bio",
          "signature": "SeqName",
          "source": "src/Bio-Alignment-Bowtie.html#Align",
          "type": "function"
        },
        "index": {
          "description": "Name of the reference sequence",
          "hierarchy": "Bio Alignment Bowtie",
          "module": "Bio.Alignment.Bowtie",
          "name": "refname",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Bowtie.html#v:refname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true when two alignments were derived from the same\n sequencing read.  As Bowtie writes alignments of query sequences in\n their order in the query file, all alignments of a given read are\n grouped together and the lists of all alignments for each read can\n be gathered with\n\u003c/p\u003e\u003cpre\u003e groupBy sameRead\n\u003c/pre\u003e",
          "module": "Bio.Alignment.Bowtie",
          "name": "sameRead",
          "package": "bio",
          "signature": "Align -\u003e Align -\u003e Bool",
          "source": "src/Bio-Alignment-Bowtie.html#sameRead",
          "type": "function"
        },
        "index": {
          "description": "Returns true when two alignments were derived from the same sequencing read As Bowtie writes alignments of query sequences in their order in the query file all alignments of given read are grouped together and the lists of all alignments for each read can be gathered with groupBy sameRead",
          "hierarchy": "Bio Alignment Bowtie",
          "module": "Bio.Alignment.Bowtie",
          "name": "sameRead",
          "normalized": "Align-\u003eAlign-\u003eBool",
          "package": "bio",
          "partial": "Read",
          "signature": "Align-\u003eAlign-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Bowtie.html#v:sameRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery sequence, in the reference forward strand orientation\n\u003c/p\u003e",
          "module": "Bio.Alignment.Bowtie",
          "name": "sequ",
          "package": "bio",
          "signature": "SeqData",
          "source": "src/Bio-Alignment-Bowtie.html#Align",
          "type": "function"
        },
        "index": {
          "description": "Query sequence in the reference forward strand orientation",
          "hierarchy": "Bio Alignment Bowtie",
          "module": "Bio.Alignment.Bowtie",
          "name": "sequ",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Bowtie.html#v:sequ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrand of the alignment on the reference sequence\n\u003c/p\u003e",
          "module": "Bio.Alignment.Bowtie",
          "name": "strand",
          "package": "bio",
          "signature": "Strand",
          "source": "src/Bio-Alignment-Bowtie.html#Align",
          "type": "function"
        },
        "index": {
          "description": "Strand of the alignment on the reference sequence",
          "hierarchy": "Bio Alignment Bowtie",
          "module": "Bio.Alignment.Bowtie",
          "name": "strand",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Bowtie.html#v:strand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon substitution matrices for alignments.\n\u003c/p\u003e\u003cp\u003eWhen in doubt, use BLOSUM62.\n   Consult \u003ca\u003ehttp://www.ncbi.nlm.nih.gov/blast/blast_whatsnew.shtml#20051206\u003c/a\u003e\n   for some hints on good parameters for nucleotide alignments.\n\u003c/p\u003e\u003cp\u003eSee also \u003ca\u003ehttp://en.wikipedia.org/wiki/Substitution_matrix\u003c/a\u003e for a\n   summary about the difference between the different matrices. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Alignment.Matrices",
          "name": "Matrices",
          "package": "bio",
          "source": "src/Bio-Alignment-Matrices.html",
          "type": "module"
        },
        "index": {
          "description": "Common substitution matrices for alignments When in doubt use BLOSUM62 Consult http www.ncbi.nlm.nih.gov blast blast whatsnew.shtml for some hints on good parameters for nucleotide alignments See also http en.wikipedia.org wiki Substitution matrix for summary about the difference between the different matrices",
          "hierarchy": "Bio Alignment Matrices",
          "module": "Bio.Alignment.Matrices",
          "name": "Matrices",
          "package": "bio",
          "partial": "Matrices",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Matrices.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlast defaults, use with gap_open = -5 gap_extend = -3\n   This should really check for valid nucleotides, and perhaps be more\n   lenient in the case of Ns.  Oh well.\n\u003c/p\u003e",
          "module": "Bio.Alignment.Matrices",
          "name": "blastn_default",
          "package": "bio",
          "signature": "(Chr, Chr) -\u003e a",
          "source": "src/Bio-Alignment-Matrices.html#blastn_default",
          "type": "function"
        },
        "index": {
          "description": "Blast defaults use with gap open gap extend This should really check for valid nucleotides and perhaps be more lenient in the case of Ns Oh well",
          "hierarchy": "Bio Alignment Matrices",
          "module": "Bio.Alignment.Matrices",
          "name": "blastn_default",
          "normalized": "(Chr,Chr)-\u003ea",
          "package": "bio",
          "signature": "(Chr,Chr)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Matrices.html#v:blastn_default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBLOSUM45 matrix, suitable for distantly related sequences\n\u003c/p\u003e",
          "module": "Bio.Alignment.Matrices",
          "name": "blosum45",
          "package": "bio",
          "signature": "(Chr, Chr) -\u003e Int",
          "source": "src/Bio-Alignment-Matrices.html#blosum45",
          "type": "function"
        },
        "index": {
          "description": "BLOSUM45 matrix suitable for distantly related sequences",
          "hierarchy": "Bio Alignment Matrices",
          "module": "Bio.Alignment.Matrices",
          "name": "blosum45",
          "normalized": "(Chr,Chr)-\u003eInt",
          "package": "bio",
          "signature": "(Chr,Chr)-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Matrices.html#v:blosum45"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe standard BLOSUM62 matrix.\n\u003c/p\u003e",
          "module": "Bio.Alignment.Matrices",
          "name": "blosum62",
          "package": "bio",
          "signature": "(Chr, Chr) -\u003e Int",
          "source": "src/Bio-Alignment-Matrices.html#blosum62",
          "type": "function"
        },
        "index": {
          "description": "The standard BLOSUM62 matrix",
          "hierarchy": "Bio Alignment Matrices",
          "module": "Bio.Alignment.Matrices",
          "name": "blosum62",
          "normalized": "(Chr,Chr)-\u003eInt",
          "package": "bio",
          "signature": "(Chr,Chr)-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Matrices.html#v:blosum62"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBLOSUM80 matrix, suitable for closely related sequences. \n\u003c/p\u003e",
          "module": "Bio.Alignment.Matrices",
          "name": "blosum80",
          "package": "bio",
          "signature": "(Chr, Chr) -\u003e Int",
          "source": "src/Bio-Alignment-Matrices.html#blosum80",
          "type": "function"
        },
        "index": {
          "description": "BLOSUM80 matrix suitable for closely related sequences",
          "hierarchy": "Bio Alignment Matrices",
          "module": "Bio.Alignment.Matrices",
          "name": "blosum80",
          "normalized": "(Chr,Chr)-\u003eInt",
          "package": "bio",
          "signature": "(Chr,Chr)-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Matrices.html#v:blosum80"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe standard PAM30 matrix\n\u003c/p\u003e",
          "module": "Bio.Alignment.Matrices",
          "name": "pam30",
          "package": "bio",
          "signature": "(Chr, Chr) -\u003e Int",
          "source": "src/Bio-Alignment-Matrices.html#pam30",
          "type": "function"
        },
        "index": {
          "description": "The standard PAM30 matrix",
          "hierarchy": "Bio Alignment Matrices",
          "module": "Bio.Alignment.Matrices",
          "name": "pam30",
          "normalized": "(Chr,Chr)-\u003eInt",
          "package": "bio",
          "signature": "(Chr,Chr)-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Matrices.html#v:pam30"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe standard PAM70 matrix.\n\u003c/p\u003e",
          "module": "Bio.Alignment.Matrices",
          "name": "pam70",
          "package": "bio",
          "signature": "(Chr, Chr) -\u003e Int",
          "source": "src/Bio-Alignment-Matrices.html#pam70",
          "type": "function"
        },
        "index": {
          "description": "The standard PAM70 matrix",
          "hierarchy": "Bio Alignment Matrices",
          "module": "Bio.Alignment.Matrices",
          "name": "pam70",
          "normalized": "(Chr,Chr)-\u003eInt",
          "package": "bio",
          "signature": "(Chr,Chr)-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Matrices.html#v:pam70"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a simple \u003ca\u003ematrix\u003c/a\u003e from match score/mismatch penalty\n\u003c/p\u003e",
          "module": "Bio.Alignment.Matrices",
          "name": "simpleMx",
          "package": "bio",
          "signature": "a -\u003e a -\u003e (Chr, Chr) -\u003e a",
          "source": "src/Bio-Alignment-Matrices.html#simpleMx",
          "type": "function"
        },
        "index": {
          "description": "Construct simple matrix from match score mismatch penalty",
          "hierarchy": "Bio Alignment Matrices",
          "module": "Bio.Alignment.Matrices",
          "name": "simpleMx",
          "normalized": "a-\u003ea-\u003e(Chr,Chr)-\u003ea",
          "package": "bio",
          "partial": "Mx",
          "signature": "a-\u003ea-\u003e(Chr,Chr)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Matrices.html#v:simpleMx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMultiple alignments.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Alignment.Multiple",
          "name": "Multiple",
          "package": "bio",
          "source": "src/Bio-Alignment-Multiple.html",
          "type": "module"
        },
        "index": {
          "description": "Multiple alignments",
          "hierarchy": "Bio Alignment Multiple",
          "module": "Bio.Alignment.Multiple",
          "name": "Multiple",
          "package": "bio",
          "partial": "Multiple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Multiple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive alignments indirectly, i.e. calculate A|C using alignments A|B and B|C.\n    This is central for \u003ccode\u003eCoffee\u003c/code\u003e evaluation of alignments, and T-Coffee construction\n    of alignments.\n\u003c/p\u003e",
          "module": "Bio.Alignment.Multiple",
          "name": "indirect",
          "package": "bio",
          "signature": "EditList -\u003e EditList -\u003e EditList",
          "source": "src/Bio-Alignment-Multiple.html#indirect",
          "type": "function"
        },
        "index": {
          "description": "Derive alignments indirectly i.e calculate using alignments and This is central for Coffee evaluation of alignments and T-Coffee construction of alignments",
          "hierarchy": "Bio Alignment Multiple",
          "module": "Bio.Alignment.Multiple",
          "name": "indirect",
          "normalized": "EditList-\u003eEditList-\u003eEditList",
          "package": "bio",
          "signature": "EditList-\u003eEditList-\u003eEditList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Multiple.html#v:indirect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProgressive multiple alignment.\n   Calculate a tree from agglomerative clustering, then align\n   at each branch going bottom up.  Returns a list of columns (rows?).\n\u003c/p\u003e",
          "module": "Bio.Alignment.Multiple",
          "name": "progressive",
          "package": "bio",
          "signature": "(Sequence a -\u003e Sequence a -\u003e (Double, EditList)) -\u003e [Sequence a] -\u003e [String]",
          "source": "src/Bio-Alignment-Multiple.html#progressive",
          "type": "function"
        },
        "index": {
          "description": "Progressive multiple alignment Calculate tree from agglomerative clustering then align at each branch going bottom up Returns list of columns rows",
          "hierarchy": "Bio Alignment Multiple",
          "module": "Bio.Alignment.Multiple",
          "name": "progressive",
          "normalized": "(Sequence a-\u003eSequence a-\u003e(Double,EditList))-\u003e[Sequence a]-\u003e[String]",
          "package": "bio",
          "signature": "(Sequence a-\u003eSequence a-\u003e(Double,EditList))-\u003e[Sequence a]-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Multiple.html#v:progressive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis models the PSL format used by e.g. the alignment tool BLAT.  \n    It is a simple, textual representation of (spliced) alignments,\n    with tab-separated fields.\n\u003c/p\u003e\u003cp\u003eSee http:\u003cem/\u003egenome.ucsc.edu\u003cem\u003eFAQ\u003c/em\u003eFAQformat#format2 for details.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Alignment.PSL",
          "name": "PSL",
          "package": "bio",
          "source": "src/Bio-Alignment-PSL.html",
          "type": "module"
        },
        "index": {
          "description": "This models the PSL format used by e.g the alignment tool BLAT It is simple textual representation of spliced alignments with tab-separated fields See http genome.ucsc.edu FAQ FAQformat format2 for details",
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "PSL",
          "package": "bio",
          "partial": "PSL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "PSL",
          "package": "bio",
          "source": "src/Bio-Alignment-PSL.html#PSL",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "PSL",
          "package": "bio",
          "partial": "PSL",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#t:PSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "PSL",
          "package": "bio",
          "signature": "PSL",
          "source": "src/Bio-Alignment-PSL.html#PSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "PSL",
          "package": "bio",
          "partial": "PSL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#v:PSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "blockcount",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-PSL.html#PSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "blockcount",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#v:blockcount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "blocksizes",
          "package": "bio",
          "signature": "[Int]",
          "source": "src/Bio-Alignment-PSL.html#PSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "blocksizes",
          "normalized": "[Int]",
          "package": "bio",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#v:blocksizes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "match",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-PSL.html#PSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "match",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "mismatch",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-PSL.html#PSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "mismatch",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#v:mismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "ncount",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-PSL.html#PSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "ncount",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#v:ncount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "parsePSL",
          "package": "bio",
          "signature": "ByteString -\u003e [PSL]",
          "source": "src/Bio-Alignment-PSL.html#parsePSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "parsePSL",
          "normalized": "ByteString-\u003e[PSL]",
          "package": "bio",
          "partial": "PSL",
          "signature": "ByteString-\u003e[PSL]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#v:parsePSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "pslHeader",
          "package": "bio",
          "signature": "ByteString",
          "source": "src/Bio-Alignment-PSL.html#pslHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "pslHeader",
          "package": "bio",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#v:pslHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "qend",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-PSL.html#PSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "qend",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#v:qend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "qgapcount",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-PSL.html#PSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "qgapcount",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#v:qgapcount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "qgaplength",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-PSL.html#PSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "qgaplength",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#v:qgaplength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "qname",
          "package": "bio",
          "signature": "ByteString",
          "source": "src/Bio-Alignment-PSL.html#PSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "qname",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#v:qname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "qsize",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-PSL.html#PSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "qsize",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#v:qsize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "qstart",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-PSL.html#PSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "qstart",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#v:qstart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "qstarts",
          "package": "bio",
          "signature": "[Int]",
          "source": "src/Bio-Alignment-PSL.html#PSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "qstarts",
          "normalized": "[Int]",
          "package": "bio",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#v:qstarts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "readPSL",
          "package": "bio",
          "signature": "FilePath -\u003e IO [PSL]",
          "source": "src/Bio-Alignment-PSL.html#readPSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "readPSL",
          "normalized": "FilePath-\u003eIO[PSL]",
          "package": "bio",
          "partial": "PSL",
          "signature": "FilePath-\u003eIO[PSL]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#v:readPSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "repmatch",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-PSL.html#PSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "repmatch",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#v:repmatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "strand",
          "package": "bio",
          "signature": "ByteString",
          "source": "src/Bio-Alignment-PSL.html#PSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "strand",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#v:strand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "tend",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-PSL.html#PSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "tend",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#v:tend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "tgapcount",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-PSL.html#PSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "tgapcount",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#v:tgapcount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "tgaplength",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-PSL.html#PSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "tgaplength",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#v:tgaplength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "tname",
          "package": "bio",
          "signature": "ByteString",
          "source": "src/Bio-Alignment-PSL.html#PSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "tname",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#v:tname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "tsize",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-PSL.html#PSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "tsize",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#v:tsize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "tstart",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-PSL.html#PSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "tstart",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#v:tstart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "tstarts",
          "package": "bio",
          "signature": "[Int]",
          "source": "src/Bio-Alignment-PSL.html#PSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "tstarts",
          "normalized": "[Int]",
          "package": "bio",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#v:tstarts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "unparsePSL",
          "package": "bio",
          "signature": "[PSL] -\u003e ByteString",
          "source": "src/Bio-Alignment-PSL.html#unparsePSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "unparsePSL",
          "normalized": "[PSL]-\u003eByteString",
          "package": "bio",
          "partial": "PSL",
          "signature": "[PSL]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#v:unparsePSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.PSL",
          "name": "writePSL",
          "package": "bio",
          "signature": "FilePath -\u003e [PSL] -\u003e IO ()",
          "source": "src/Bio-Alignment-PSL.html#writePSL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment PSL",
          "module": "Bio.Alignment.PSL",
          "name": "writePSL",
          "normalized": "FilePath-\u003e[PSL]-\u003eIO()",
          "package": "bio",
          "partial": "PSL",
          "signature": "FilePath-\u003e[PSL]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-PSL.html#v:writePSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuality-aware alignments\n\u003c/p\u003e\u003cp\u003eGenerally, quality data are ignored for alignment/pattern searching\n   like Smith-Waterman, Needleman-Wunsch, or BLAST(p|n|x).  I believe\n   that accounting for quality will at the very least affect things like\n   BLAST statistics, and e.g. is crucial for good EST annotation using Blastx.\n\u003c/p\u003e\u003cp\u003eThis module performs sequences alignments, takes quality values into\n   account.\n\u003c/p\u003e\u003cp\u003eSee also \u003ca\u003ehttp://bioinformatics.oxfordjournals.org/cgi/content/abstract/btn052v1\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Alignment.QAlign",
          "name": "QAlign",
          "package": "bio",
          "source": "src/Bio-Alignment-QAlign.html",
          "type": "module"
        },
        "index": {
          "description": "Quality-aware alignments Generally quality data are ignored for alignment pattern searching like Smith-Waterman Needleman-Wunsch or BLAST believe that accounting for quality will at the very least affect things like BLAST statistics and e.g is crucial for good EST annotation using Blastx This module performs sequences alignments takes quality values into account See also http bioinformatics.oxfordjournals.org cgi content abstract btn052v1",
          "hierarchy": "Bio Alignment QAlign",
          "module": "Bio.Alignment.QAlign",
          "name": "QAlign",
          "package": "bio",
          "partial": "QAlign",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-QAlign.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate global alignment (Needleman-Wunsch)\n\u003c/p\u003e",
          "module": "Bio.Alignment.QAlign",
          "name": "global_align",
          "package": "bio",
          "signature": "QualMx t Double -\u003e (Double, Double) -\u003e Sequence t -\u003e Sequence t -\u003e (Double, EditList)",
          "source": "src/Bio-Alignment-QAlign.html#global_align",
          "type": "function"
        },
        "index": {
          "description": "Calculate global alignment Needleman-Wunsch",
          "hierarchy": "Bio Alignment QAlign",
          "module": "Bio.Alignment.QAlign",
          "name": "global_align",
          "normalized": "QualMx a Double-\u003e(Double,Double)-\u003eSequence a-\u003eSequence a-\u003e(Double,EditList)",
          "package": "bio",
          "signature": "QualMx t Double-\u003e(Double,Double)-\u003eSequence t-\u003eSequence t-\u003e(Double,EditList)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-QAlign.html#v:global_align"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate global edit distance (Needleman-Wunsch alignment score)\n\u003c/p\u003e",
          "module": "Bio.Alignment.QAlign",
          "name": "global_score",
          "package": "bio",
          "signature": "QualMx t Double -\u003e (Double, Double) -\u003e Sequence t -\u003e Sequence t -\u003e Double",
          "source": "src/Bio-Alignment-QAlign.html#global_score",
          "type": "function"
        },
        "index": {
          "description": "Calculate global edit distance Needleman-Wunsch alignment score",
          "hierarchy": "Bio Alignment QAlign",
          "module": "Bio.Alignment.QAlign",
          "name": "global_score",
          "normalized": "QualMx a Double-\u003e(Double,Double)-\u003eSequence a-\u003eSequence a-\u003eDouble",
          "package": "bio",
          "signature": "QualMx t Double-\u003e(Double,Double)-\u003eSequence t-\u003eSequence t-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-QAlign.html#v:global_score"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate local alignment (Smith-Waterman)\n   (can we replace uncurry max' with fst - a local alignment must always end on a subst, no?)\n\u003c/p\u003e",
          "module": "Bio.Alignment.QAlign",
          "name": "local_align",
          "package": "bio",
          "signature": "QualMx t Double -\u003e (Double, Double) -\u003e Sequence t -\u003e Sequence t -\u003e (Double, EditList)",
          "source": "src/Bio-Alignment-QAlign.html#local_align",
          "type": "function"
        },
        "index": {
          "description": "Calculate local alignment Smith-Waterman can we replace uncurry max with fst local alignment must always end on subst no",
          "hierarchy": "Bio Alignment QAlign",
          "module": "Bio.Alignment.QAlign",
          "name": "local_align",
          "normalized": "QualMx a Double-\u003e(Double,Double)-\u003eSequence a-\u003eSequence a-\u003e(Double,EditList)",
          "package": "bio",
          "signature": "QualMx t Double-\u003e(Double,Double)-\u003eSequence t-\u003eSequence t-\u003e(Double,EditList)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-QAlign.html#v:local_align"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate local edit distance (Smith-Waterman alignment score)\n\u003c/p\u003e",
          "module": "Bio.Alignment.QAlign",
          "name": "local_score",
          "package": "bio",
          "signature": "QualMx t Double -\u003e (Double, Double) -\u003e Sequence t -\u003e Sequence t -\u003e Double",
          "source": "src/Bio-Alignment-QAlign.html#local_score",
          "type": "function"
        },
        "index": {
          "description": "Calculate local edit distance Smith-Waterman alignment score",
          "hierarchy": "Bio Alignment QAlign",
          "module": "Bio.Alignment.QAlign",
          "name": "local_score",
          "normalized": "QualMx a Double-\u003e(Double,Double)-\u003eSequence a-\u003eSequence a-\u003eDouble",
          "package": "bio",
          "signature": "QualMx t Double-\u003e(Double,Double)-\u003eSequence t-\u003eSequence t-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-QAlign.html#v:local_score"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalucalte best overlap score, where gaps at the edges are free\n   The starting point is like for local score (0 cost for initial indels),\n   the result is the maximum anywhere in the last column or bottom row of the matrix.\n\u003c/p\u003e",
          "module": "Bio.Alignment.QAlign",
          "name": "overlap_align",
          "package": "bio",
          "signature": "QualMx t Double -\u003e (Double, Double) -\u003e Sequence t -\u003e Sequence t -\u003e (Double, EditList)",
          "source": "src/Bio-Alignment-QAlign.html#overlap_align",
          "type": "function"
        },
        "index": {
          "description": "Calucalte best overlap score where gaps at the edges are free The starting point is like for local score cost for initial indels the result is the maximum anywhere in the last column or bottom row of the matrix",
          "hierarchy": "Bio Alignment QAlign",
          "module": "Bio.Alignment.QAlign",
          "name": "overlap_align",
          "normalized": "QualMx a Double-\u003e(Double,Double)-\u003eSequence a-\u003eSequence a-\u003e(Double,EditList)",
          "package": "bio",
          "signature": "QualMx t Double-\u003e(Double,Double)-\u003eSequence t-\u003eSequence t-\u003e(Double,EditList)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-QAlign.html#v:overlap_align"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalucalte best overlap score, where gaps at the edges are free\n   The starting point is like for local score (0 cost for initial indels),\n   the result is the maximum anywhere in the last column or bottom row of the matrix.\n\u003c/p\u003e",
          "module": "Bio.Alignment.QAlign",
          "name": "overlap_score",
          "package": "bio",
          "signature": "QualMx t Double -\u003e (Double, Double) -\u003e Sequence t -\u003e Sequence t -\u003e Double",
          "source": "src/Bio-Alignment-QAlign.html#overlap_score",
          "type": "function"
        },
        "index": {
          "description": "Calucalte best overlap score where gaps at the edges are free The starting point is like for local score cost for initial indels the result is the maximum anywhere in the last column or bottom row of the matrix",
          "hierarchy": "Bio Alignment QAlign",
          "module": "Bio.Alignment.QAlign",
          "name": "overlap_score",
          "normalized": "QualMx a Double-\u003e(Double,Double)-\u003eSequence a-\u003eSequence a-\u003eDouble",
          "package": "bio",
          "signature": "QualMx t Double-\u003e(Double,Double)-\u003eSequence t-\u003eSequence t-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-QAlign.html#v:overlap_score"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.QAlign",
          "name": "qualMx",
          "package": "bio",
          "signature": "Qual -\u003e Qual -\u003e (Chr, Chr) -\u003e Double",
          "source": "src/Bio-Alignment-QAlign.html#qualMx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment QAlign",
          "module": "Bio.Alignment.QAlign",
          "name": "qualMx",
          "normalized": "Qual-\u003eQual-\u003e(Chr,Chr)-\u003eDouble",
          "package": "bio",
          "partial": "Mx",
          "signature": "Qual-\u003eQual-\u003e(Chr,Chr)-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-QAlign.html#v:qualMx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.QAlign",
          "name": "test",
          "package": "bio",
          "signature": "IO ()",
          "source": "src/Bio-Alignment-QAlign.html#test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment QAlign",
          "module": "Bio.Alignment.QAlign",
          "name": "test",
          "normalized": "IO()",
          "package": "bio",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-QAlign.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple alignment of sequences\n\u003c/p\u003e\u003cp\u003eStandard alignment/edit distance \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Alignment.SAlign",
          "name": "SAlign",
          "package": "bio",
          "source": "src/Bio-Alignment-SAlign.html",
          "type": "module"
        },
        "index": {
          "description": "Simple alignment of sequences Standard alignment edit distance",
          "hierarchy": "Bio Alignment SAlign",
          "module": "Bio.Alignment.SAlign",
          "name": "SAlign",
          "package": "bio",
          "partial": "SAlign",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-SAlign.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate alignments.\n\u003c/p\u003e",
          "module": "Bio.Alignment.SAlign",
          "name": "global_align",
          "package": "bio",
          "signature": "SubstMx t a -\u003e a -\u003e Sequence t -\u003e Sequence t -\u003e EditList",
          "source": "src/Bio-Alignment-SAlign.html#global_align",
          "type": "function"
        },
        "index": {
          "description": "Calculate alignments",
          "hierarchy": "Bio Alignment SAlign",
          "module": "Bio.Alignment.SAlign",
          "name": "global_align",
          "normalized": "SubstMx a b-\u003eb-\u003eSequence a-\u003eSequence a-\u003eEditList",
          "package": "bio",
          "signature": "SubstMx t a-\u003ea-\u003eSequence t-\u003eSequence t-\u003eEditList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-SAlign.html#v:global_align"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate global edit distance (Needleman-Wunsch alignment score)\n\u003c/p\u003e",
          "module": "Bio.Alignment.SAlign",
          "name": "global_score",
          "package": "bio",
          "signature": "SubstMx t a -\u003e a -\u003e Sequence t -\u003e Sequence t -\u003e a",
          "source": "src/Bio-Alignment-SAlign.html#global_score",
          "type": "function"
        },
        "index": {
          "description": "Calculate global edit distance Needleman-Wunsch alignment score",
          "hierarchy": "Bio Alignment SAlign",
          "module": "Bio.Alignment.SAlign",
          "name": "global_score",
          "normalized": "SubstMx a b-\u003eb-\u003eSequence a-\u003eSequence a-\u003eb",
          "package": "bio",
          "signature": "SubstMx t a-\u003ea-\u003eSequence t-\u003eSequence t-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-SAlign.html#v:global_score"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.SAlign",
          "name": "local_align",
          "package": "bio",
          "signature": "SubstMx t a -\u003e a -\u003e Sequence t -\u003e Sequence t -\u003e EditList",
          "source": "src/Bio-Alignment-SAlign.html#local_align",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment SAlign",
          "module": "Bio.Alignment.SAlign",
          "name": "local_align",
          "normalized": "SubstMx a b-\u003eb-\u003eSequence a-\u003eSequence a-\u003eEditList",
          "package": "bio",
          "signature": "SubstMx t a-\u003ea-\u003eSequence t-\u003eSequence t-\u003eEditList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-SAlign.html#v:local_align"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate local edit distance (Smith-Waterman alignment score)\n\u003c/p\u003e",
          "module": "Bio.Alignment.SAlign",
          "name": "local_score",
          "package": "bio",
          "signature": "SubstMx t a -\u003e a -\u003e Sequence t -\u003e Sequence t -\u003e a",
          "source": "src/Bio-Alignment-SAlign.html#local_score",
          "type": "function"
        },
        "index": {
          "description": "Calculate local edit distance Smith-Waterman alignment score",
          "hierarchy": "Bio Alignment SAlign",
          "module": "Bio.Alignment.SAlign",
          "name": "local_score",
          "normalized": "SubstMx a b-\u003eb-\u003eSequence a-\u003eSequence a-\u003eb",
          "package": "bio",
          "signature": "SubstMx t a-\u003ea-\u003eSequence t-\u003eSequence t-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-SAlign.html#v:local_score"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Soap",
          "name": "Soap",
          "package": "bio",
          "source": "src/Bio-Alignment-Soap.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "Soap",
          "package": "bio",
          "partial": "Soap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlignment output from SOAP\n\u003c/p\u003e",
          "module": "Bio.Alignment.Soap",
          "name": "SoapAlign",
          "package": "bio",
          "source": "src/Bio-Alignment-Soap.html#SoapAlign",
          "type": "data"
        },
        "index": {
          "description": "Alignment output from SOAP",
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "SoapAlign",
          "package": "bio",
          "partial": "Soap Align",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#t:SoapAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Soap",
          "name": "SoapAlignMismatch",
          "package": "bio",
          "source": "src/Bio-Alignment-Soap.html#SoapAlignMismatch",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "SoapAlignMismatch",
          "package": "bio",
          "partial": "Soap Align Mismatch",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#t:SoapAlignMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Soap",
          "name": "SA",
          "package": "bio",
          "signature": "SA",
          "source": "src/Bio-Alignment-Soap.html#SoapAlign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "SA",
          "package": "bio",
          "partial": "SA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#v:SA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Soap",
          "name": "SAM",
          "package": "bio",
          "signature": "SAM",
          "source": "src/Bio-Alignment-Soap.html#SoapAlignMismatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "SAM",
          "package": "bio",
          "partial": "SAM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#v:SAM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Soap",
          "name": "group",
          "package": "bio",
          "signature": "[SoapAlign] -\u003e [[SoapAlign]]",
          "source": "src/Bio-Alignment-Soap.html#group",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "group",
          "normalized": "[SoapAlign]-\u003e[[SoapAlign]]",
          "package": "bio",
          "signature": "[SoapAlign]-\u003e[[SoapAlign]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Soap",
          "name": "length",
          "package": "bio",
          "signature": "Offset",
          "source": "src/Bio-Alignment-Soap.html#SoapAlign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "length",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Soap",
          "name": "mismatchSeqPos",
          "package": "bio",
          "signature": "SoapAlign -\u003e SoapAlignMismatch -\u003e SeqPos",
          "source": "src/Bio-Alignment-Soap.html#mismatchSeqPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "mismatchSeqPos",
          "normalized": "SoapAlign-\u003eSoapAlignMismatch-\u003eSeqPos",
          "package": "bio",
          "partial": "Seq Pos",
          "signature": "SoapAlign-\u003eSoapAlignMismatch-\u003eSeqPos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#v:mismatchSeqPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Soap",
          "name": "mismatches",
          "package": "bio",
          "signature": "[SoapAlignMismatch]",
          "source": "src/Bio-Alignment-Soap.html#SoapAlign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "mismatches",
          "normalized": "[SoapAlignMismatch]",
          "package": "bio",
          "signature": "[SoapAlignMismatch]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#v:mismatches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Soap",
          "name": "name",
          "package": "bio",
          "signature": "SeqName",
          "source": "src/Bio-Alignment-Soap.html#SoapAlign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "name",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Soap",
          "name": "nhit",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-Soap.html#SoapAlign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "nhit",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#v:nhit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Soap",
          "name": "nmismatch",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Alignment-Soap.html#SoapAlign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "nmismatch",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#v:nmismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOffset from reference strand 5' end in reference strand orientation\n\u003c/p\u003e",
          "module": "Bio.Alignment.Soap",
          "name": "offset",
          "package": "bio",
          "signature": "Offset",
          "source": "src/Bio-Alignment-Soap.html#SoapAlignMismatch",
          "type": "function"
        },
        "index": {
          "description": "Offset from reference strand end in reference strand orientation",
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "offset",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#v:offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Soap",
          "name": "pairend",
          "package": "bio",
          "signature": "Char",
          "source": "src/Bio-Alignment-Soap.html#SoapAlign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "pairend",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#v:pairend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Soap",
          "name": "parse",
          "package": "bio",
          "signature": "ByteString -\u003e m SoapAlign",
          "source": "src/Bio-Alignment-Soap.html#parse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "parse",
          "normalized": "ByteString-\u003ea SoapAlign",
          "package": "bio",
          "signature": "ByteString-\u003em SoapAlign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Soap",
          "name": "parseMismatch",
          "package": "bio",
          "signature": "ByteString -\u003e m SoapAlignMismatch",
          "source": "src/Bio-Alignment-Soap.html#parseMismatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "parseMismatch",
          "normalized": "ByteString-\u003ea SoapAlignMismatch",
          "package": "bio",
          "partial": "Mismatch",
          "signature": "ByteString-\u003em SoapAlignMismatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#v:parseMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReference strand orientation quality data\n\u003c/p\u003e",
          "module": "Bio.Alignment.Soap",
          "name": "qual",
          "package": "bio",
          "signature": "QualData",
          "source": "src/Bio-Alignment-Soap.html#SoapAlign",
          "type": "function"
        },
        "index": {
          "description": "Reference strand orientation quality data",
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "qual",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#v:qual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuality score of read nt\n\u003c/p\u003e",
          "module": "Bio.Alignment.Soap",
          "name": "qualnt",
          "package": "bio",
          "signature": "Qual",
          "source": "src/Bio-Alignment-Soap.html#SoapAlignMismatch",
          "type": "function"
        },
        "index": {
          "description": "Quality score of read nt",
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "qualnt",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#v:qualnt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead nt in reference strand orientation\n\u003c/p\u003e",
          "module": "Bio.Alignment.Soap",
          "name": "readnt",
          "package": "bio",
          "signature": "Char",
          "source": "src/Bio-Alignment-Soap.html#SoapAlignMismatch",
          "type": "function"
        },
        "index": {
          "description": "Read nt in reference strand orientation",
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "readnt",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#v:readnt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Soap",
          "name": "refCSeqLoc",
          "package": "bio",
          "signature": "SoapAlign -\u003e ContigSeqLoc",
          "source": "src/Bio-Alignment-Soap.html#refCSeqLoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "refCSeqLoc",
          "normalized": "SoapAlign-\u003eContigSeqLoc",
          "package": "bio",
          "partial": "CSeq Loc",
          "signature": "SoapAlign-\u003eContigSeqLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#v:refCSeqLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Soap",
          "name": "refSeqLoc",
          "package": "bio",
          "signature": "SoapAlign -\u003e SeqLoc",
          "source": "src/Bio-Alignment-Soap.html#refSeqLoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "refSeqLoc",
          "normalized": "SoapAlign-\u003eSeqLoc",
          "package": "bio",
          "partial": "Seq Loc",
          "signature": "SoapAlign-\u003eSeqLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#v:refSeqLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Soap",
          "name": "refSeqPos",
          "package": "bio",
          "signature": "SoapAlign -\u003e SeqPos",
          "source": "src/Bio-Alignment-Soap.html#refSeqPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "refSeqPos",
          "normalized": "SoapAlign-\u003eSeqPos",
          "package": "bio",
          "partial": "Seq Pos",
          "signature": "SoapAlign-\u003eSeqPos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#v:refSeqPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Soap",
          "name": "refname",
          "package": "bio",
          "signature": "SeqName",
          "source": "src/Bio-Alignment-Soap.html#SoapAlign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "refname",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#v:refname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReference nt in reference strand orientation\n\u003c/p\u003e",
          "module": "Bio.Alignment.Soap",
          "name": "refnt",
          "package": "bio",
          "signature": "Char",
          "source": "src/Bio-Alignment-Soap.html#SoapAlignMismatch",
          "type": "function"
        },
        "index": {
          "description": "Reference nt in reference strand orientation",
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "refnt",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#v:refnt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1-based index, as output by SOAP, of reference strand 5' end\n\u003c/p\u003e",
          "module": "Bio.Alignment.Soap",
          "name": "refstart",
          "package": "bio",
          "signature": "Offset",
          "source": "src/Bio-Alignment-Soap.html#SoapAlign",
          "type": "function"
        },
        "index": {
          "description": "based index as output by SOAP of reference strand end",
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "refstart",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#v:refstart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReference strand orientation sequence\n\u003c/p\u003e",
          "module": "Bio.Alignment.Soap",
          "name": "sequ",
          "package": "bio",
          "signature": "SeqData",
          "source": "src/Bio-Alignment-Soap.html#SoapAlign",
          "type": "function"
        },
        "index": {
          "description": "Reference strand orientation sequence",
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "sequ",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#v:sequ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Soap",
          "name": "strand",
          "package": "bio",
          "signature": "Strand",
          "source": "src/Bio-Alignment-Soap.html#SoapAlign",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "strand",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#v:strand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Soap",
          "name": "unparse",
          "package": "bio",
          "signature": "SoapAlign -\u003e ByteString",
          "source": "src/Bio-Alignment-Soap.html#unparse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "unparse",
          "normalized": "SoapAlign-\u003eByteString",
          "package": "bio",
          "signature": "SoapAlign-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#v:unparse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Soap",
          "name": "unparseMismatch",
          "package": "bio",
          "signature": "SoapAlignMismatch -\u003e ByteString",
          "source": "src/Bio-Alignment-Soap.html#unparseMismatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment Soap",
          "module": "Bio.Alignment.Soap",
          "name": "unparseMismatch",
          "normalized": "SoapAlignMismatch-\u003eByteString",
          "package": "bio",
          "partial": "Mismatch",
          "signature": "SoapAlignMismatch-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Alignment-Soap.html#v:unparseMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplement clustering\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Clustering",
          "name": "Clustering",
          "package": "bio",
          "source": "src/Bio-Clustering.html",
          "type": "module"
        },
        "index": {
          "description": "Implement clustering",
          "hierarchy": "Bio Clustering",
          "module": "Bio.Clustering",
          "name": "Clustering",
          "package": "bio",
          "partial": "Clustering",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Clustering.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData structure for storing hierarchical clusters\n\u003c/p\u003e",
          "module": "Bio.Clustering",
          "name": "Clustered",
          "package": "bio",
          "source": "src/Bio-Clustering.html#Clustered",
          "type": "data"
        },
        "index": {
          "description": "Data structure for storing hierarchical clusters",
          "hierarchy": "Bio Clustering",
          "module": "Bio.Clustering",
          "name": "Clustered",
          "package": "bio",
          "partial": "Clustered",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Clustering.html#t:Clustered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Clustering",
          "name": "Branch",
          "package": "bio",
          "signature": "Branch score (Clustered score datum) (Clustered score datum)",
          "source": "src/Bio-Clustering.html#Clustered",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Clustering",
          "module": "Bio.Clustering",
          "name": "Branch",
          "package": "bio",
          "partial": "Branch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Clustering.html#v:Branch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Clustering",
          "name": "Leaf",
          "package": "bio",
          "signature": "Leaf datum",
          "source": "src/Bio-Clustering.html#Clustered",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Clustering",
          "module": "Bio.Clustering",
          "name": "Leaf",
          "package": "bio",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Clustering.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle linkage agglomerative clustering.\n   Cluster elements by slurping a sorted list of pairs with score (i.e. triples :-)\n   Keeps a set of contained elements at each branch's root, so O(n log n),\n   and requires elements to be in Ord.\n   For this to work, the triples must be sorted on score. Earlier scores in the list will\n   make up the lower nodes, so sort descending for similarity, ascending for distance.\n\u003c/p\u003e",
          "module": "Bio.Clustering",
          "name": "cluster_sl",
          "package": "bio",
          "signature": "[(s, a, a)] -\u003e [Clustered s a]",
          "source": "src/Bio-Clustering.html#cluster_sl",
          "type": "function"
        },
        "index": {
          "description": "Single linkage agglomerative clustering Cluster elements by slurping sorted list of pairs with score i.e triples Keeps set of contained elements at each branch root so log and requires elements to be in Ord For this to work the triples must be sorted on score Earlier scores in the list will make up the lower nodes so sort descending for similarity ascending for distance",
          "hierarchy": "Bio Clustering",
          "module": "Bio.Clustering",
          "name": "cluster_sl",
          "normalized": "[(a,b,b)]-\u003e[Clustered a b]",
          "package": "bio",
          "signature": "[(s,a,a)]-\u003e[Clustered s a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Clustering.html#v:cluster_sl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Escape",
          "name": "Escape",
          "package": "bio",
          "source": "src/Bio-GFF3-Escape.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bio GFF3 Escape",
          "module": "Bio.GFF3.Escape",
          "name": "Escape",
          "package": "bio",
          "partial": "Escape",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Escape.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Escape",
          "name": "escapeAllBut",
          "package": "bio",
          "signature": "String -\u003e ByteString -\u003e ByteString",
          "source": "src/Bio-GFF3-Escape.html#escapeAllBut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Escape",
          "module": "Bio.GFF3.Escape",
          "name": "escapeAllBut",
          "normalized": "String-\u003eByteString-\u003eByteString",
          "package": "bio",
          "partial": "All But",
          "signature": "String-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Escape.html#v:escapeAllBut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Escape",
          "name": "escapeAllOf",
          "package": "bio",
          "signature": "String -\u003e ByteString -\u003e ByteString",
          "source": "src/Bio-GFF3-Escape.html#escapeAllOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Escape",
          "module": "Bio.GFF3.Escape",
          "name": "escapeAllOf",
          "normalized": "String-\u003eByteString-\u003eByteString",
          "package": "bio",
          "partial": "All Of",
          "signature": "String-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Escape.html#v:escapeAllOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Escape",
          "name": "escapeByteString",
          "package": "bio",
          "signature": "(Char -\u003e Bool) -\u003e ByteString -\u003e ByteString",
          "source": "src/Bio-GFF3-Escape.html#escapeByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Escape",
          "module": "Bio.GFF3.Escape",
          "name": "escapeByteString",
          "normalized": "(Char-\u003eBool)-\u003eByteString-\u003eByteString",
          "package": "bio",
          "partial": "Byte String",
          "signature": "(Char-\u003eBool)-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Escape.html#v:escapeByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Escape",
          "name": "unEscapeByteString",
          "package": "bio",
          "signature": "ByteString -\u003e m ByteString",
          "source": "src/Bio-GFF3-Escape.html#unEscapeByteString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Escape",
          "module": "Bio.GFF3.Escape",
          "name": "unEscapeByteString",
          "normalized": "ByteString-\u003ea ByteString",
          "package": "bio",
          "partial": "Escape Byte String",
          "signature": "ByteString-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Escape.html#v:unEscapeByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Feature",
          "name": "Feature",
          "package": "bio",
          "source": "src/Bio-GFF3-Feature.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bio GFF3 Feature",
          "module": "Bio.GFF3.Feature",
          "name": "Feature",
          "package": "bio",
          "partial": "Feature",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Feature.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Feature",
          "name": "Feature",
          "package": "bio",
          "source": "src/Bio-GFF3-Feature.html#Feature",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bio GFF3 Feature",
          "module": "Bio.GFF3.Feature",
          "name": "Feature",
          "package": "bio",
          "partial": "Feature",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Feature.html#t:Feature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Feature",
          "name": "GFFAttr",
          "package": "bio",
          "source": "src/Bio-GFF3-Feature.html#GFFAttr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bio GFF3 Feature",
          "module": "Bio.GFF3.Feature",
          "name": "GFFAttr",
          "package": "bio",
          "partial": "GFFAttr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Feature.html#t:GFFAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Feature",
          "name": "Feature",
          "package": "bio",
          "signature": "Feature",
          "source": "src/Bio-GFF3-Feature.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Feature",
          "module": "Bio.GFF3.Feature",
          "name": "Feature",
          "package": "bio",
          "partial": "Feature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Feature.html#v:Feature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Feature",
          "name": "GFFAttr",
          "package": "bio",
          "signature": "GFFAttr",
          "source": "src/Bio-GFF3-Feature.html#GFFAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Feature",
          "module": "Bio.GFF3.Feature",
          "name": "GFFAttr",
          "package": "bio",
          "partial": "GFFAttr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Feature.html#v:GFFAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Feature",
          "name": "attrByTag",
          "package": "bio",
          "signature": "ByteString -\u003e Feature -\u003e [ByteString]",
          "source": "src/Bio-GFF3-Feature.html#attrByTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Feature",
          "module": "Bio.GFF3.Feature",
          "name": "attrByTag",
          "normalized": "ByteString-\u003eFeature-\u003e[ByteString]",
          "package": "bio",
          "partial": "By Tag",
          "signature": "ByteString-\u003eFeature-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Feature.html#v:attrByTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Feature",
          "name": "attrTag",
          "package": "bio",
          "signature": "ByteString",
          "source": "src/Bio-GFF3-Feature.html#GFFAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Feature",
          "module": "Bio.GFF3.Feature",
          "name": "attrTag",
          "package": "bio",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Feature.html#v:attrTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Feature",
          "name": "attrValues",
          "package": "bio",
          "signature": "[ByteString]",
          "source": "src/Bio-GFF3-Feature.html#GFFAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Feature",
          "module": "Bio.GFF3.Feature",
          "name": "attrValues",
          "normalized": "[ByteString]",
          "package": "bio",
          "partial": "Values",
          "signature": "[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Feature.html#v:attrValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Feature",
          "name": "attributes",
          "package": "bio",
          "signature": "[GFFAttr]",
          "source": "src/Bio-GFF3-Feature.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Feature",
          "module": "Bio.GFF3.Feature",
          "name": "attributes",
          "normalized": "[GFFAttr]",
          "package": "bio",
          "signature": "[GFFAttr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Feature.html#v:attributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Feature",
          "name": "contigLoc",
          "package": "bio",
          "signature": "Feature -\u003e ContigLoc",
          "source": "src/Bio-GFF3-Feature.html#contigLoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Feature",
          "module": "Bio.GFF3.Feature",
          "name": "contigLoc",
          "normalized": "Feature-\u003eContigLoc",
          "package": "bio",
          "partial": "Loc",
          "signature": "Feature-\u003eContigLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Feature.html#v:contigLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Feature",
          "name": "end",
          "package": "bio",
          "signature": "Offset",
          "source": "src/Bio-GFF3-Feature.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Feature",
          "module": "Bio.GFF3.Feature",
          "name": "end",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Feature.html#v:end"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Feature",
          "name": "ftype",
          "package": "bio",
          "signature": "ByteString",
          "source": "src/Bio-GFF3-Feature.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Feature",
          "module": "Bio.GFF3.Feature",
          "name": "ftype",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Feature.html#v:ftype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Feature",
          "name": "ids",
          "package": "bio",
          "signature": "Feature -\u003e [ByteString]",
          "source": "src/Bio-GFF3-Feature.html#ids",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Feature",
          "module": "Bio.GFF3.Feature",
          "name": "ids",
          "normalized": "Feature-\u003e[ByteString]",
          "package": "bio",
          "signature": "Feature-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Feature.html#v:ids"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Feature",
          "name": "length",
          "package": "bio",
          "signature": "Feature -\u003e Offset",
          "source": "src/Bio-GFF3-Feature.html#length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Feature",
          "module": "Bio.GFF3.Feature",
          "name": "length",
          "normalized": "Feature-\u003eOffset",
          "package": "bio",
          "signature": "Feature-\u003eOffset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Feature.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Feature",
          "name": "loc",
          "package": "bio",
          "signature": "Feature -\u003e Loc",
          "source": "src/Bio-GFF3-Feature.html#loc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Feature",
          "module": "Bio.GFF3.Feature",
          "name": "loc",
          "normalized": "Feature-\u003eLoc",
          "package": "bio",
          "signature": "Feature-\u003eLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Feature.html#v:loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Feature",
          "name": "name",
          "package": "bio",
          "signature": "Feature -\u003e m SeqName",
          "source": "src/Bio-GFF3-Feature.html#name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Feature",
          "module": "Bio.GFF3.Feature",
          "name": "name",
          "normalized": "Feature-\u003ea SeqName",
          "package": "bio",
          "signature": "Feature-\u003em SeqName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Feature.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Feature",
          "name": "parentIds",
          "package": "bio",
          "signature": "Feature -\u003e [ByteString]",
          "source": "src/Bio-GFF3-Feature.html#parentIds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Feature",
          "module": "Bio.GFF3.Feature",
          "name": "parentIds",
          "normalized": "Feature-\u003e[ByteString]",
          "package": "bio",
          "partial": "Ids",
          "signature": "Feature-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Feature.html#v:parentIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Feature",
          "name": "parse",
          "package": "bio",
          "signature": "ByteString -\u003e m Feature",
          "source": "src/Bio-GFF3-Feature.html#parse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Feature",
          "module": "Bio.GFF3.Feature",
          "name": "parse",
          "normalized": "ByteString-\u003ea Feature",
          "package": "bio",
          "signature": "ByteString-\u003em Feature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Feature.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Feature",
          "name": "parseWithFasta",
          "package": "bio",
          "signature": "ByteString -\u003e m ([Feature], [ByteString])",
          "source": "src/Bio-GFF3-Feature.html#parseWithFasta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Feature",
          "module": "Bio.GFF3.Feature",
          "name": "parseWithFasta",
          "normalized": "ByteString-\u003ea([Feature],[ByteString])",
          "package": "bio",
          "partial": "With Fasta",
          "signature": "ByteString-\u003em([Feature],[ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Feature.html#v:parseWithFasta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Feature",
          "name": "phase",
          "package": "bio",
          "signature": "(Maybe Offset)",
          "source": "src/Bio-GFF3-Feature.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Feature",
          "module": "Bio.GFF3.Feature",
          "name": "phase",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Feature.html#v:phase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Feature",
          "name": "score",
          "package": "bio",
          "signature": "(Maybe Double)",
          "source": "src/Bio-GFF3-Feature.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Feature",
          "module": "Bio.GFF3.Feature",
          "name": "score",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Feature.html#v:score"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Feature",
          "name": "seqLoc",
          "package": "bio",
          "signature": "Feature -\u003e SeqLoc",
          "source": "src/Bio-GFF3-Feature.html#seqLoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Feature",
          "module": "Bio.GFF3.Feature",
          "name": "seqLoc",
          "normalized": "Feature-\u003eSeqLoc",
          "package": "bio",
          "partial": "Loc",
          "signature": "Feature-\u003eSeqLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Feature.html#v:seqLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Feature",
          "name": "seqid",
          "package": "bio",
          "signature": "ByteString",
          "source": "src/Bio-GFF3-Feature.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Feature",
          "module": "Bio.GFF3.Feature",
          "name": "seqid",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Feature.html#v:seqid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Feature",
          "name": "source",
          "package": "bio",
          "signature": "ByteString",
          "source": "src/Bio-GFF3-Feature.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Feature",
          "module": "Bio.GFF3.Feature",
          "name": "source",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Feature.html#v:source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Feature",
          "name": "start",
          "package": "bio",
          "signature": "Offset",
          "source": "src/Bio-GFF3-Feature.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Feature",
          "module": "Bio.GFF3.Feature",
          "name": "start",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Feature.html#v:start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Feature",
          "name": "strand",
          "package": "bio",
          "signature": "(Maybe Strand)",
          "source": "src/Bio-GFF3-Feature.html#Feature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Feature",
          "module": "Bio.GFF3.Feature",
          "name": "strand",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Feature.html#v:strand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.Feature",
          "name": "unparse",
          "package": "bio",
          "signature": "Feature -\u003e ByteString",
          "source": "src/Bio-GFF3-Feature.html#unparse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 Feature",
          "module": "Bio.GFF3.Feature",
          "name": "unparse",
          "normalized": "Feature-\u003eByteString",
          "package": "bio",
          "signature": "Feature-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-Feature.html#v:unparse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHier",
          "name": "FeatureHier",
          "package": "bio",
          "source": "src/Bio-GFF3-FeatureHier.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHier",
          "module": "Bio.GFF3.FeatureHier",
          "name": "FeatureHier",
          "package": "bio",
          "partial": "Feature Hier",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHier.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHier",
          "name": "FeatureHier",
          "package": "bio",
          "source": "src/Bio-GFF3-FeatureHier.html#FeatureHier",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHier",
          "module": "Bio.GFF3.FeatureHier",
          "name": "FeatureHier",
          "package": "bio",
          "partial": "Feature Hier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHier.html#t:FeatureHier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHier",
          "name": "checkInvariants",
          "package": "bio",
          "signature": "FeatureHier -\u003e [String]",
          "source": "src/Bio-GFF3-FeatureHier.html#checkInvariants",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHier",
          "module": "Bio.GFF3.FeatureHier",
          "name": "checkInvariants",
          "normalized": "FeatureHier-\u003e[String]",
          "package": "bio",
          "partial": "Invariants",
          "signature": "FeatureHier-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHier.html#v:checkInvariants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHier",
          "name": "children",
          "package": "bio",
          "signature": "FeatureHier -\u003e Feature -\u003e [Feature]",
          "source": "src/Bio-GFF3-FeatureHier.html#children",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHier",
          "module": "Bio.GFF3.FeatureHier",
          "name": "children",
          "normalized": "FeatureHier-\u003eFeature-\u003e[Feature]",
          "package": "bio",
          "signature": "FeatureHier-\u003eFeature-\u003e[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHier.html#v:children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHier",
          "name": "childrenM",
          "package": "bio",
          "signature": "Feature -\u003e m [Feature]",
          "source": "src/Bio-GFF3-FeatureHier.html#childrenM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHier",
          "module": "Bio.GFF3.FeatureHier",
          "name": "childrenM",
          "normalized": "Feature-\u003ea[Feature]",
          "package": "bio",
          "signature": "Feature-\u003em[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHier.html#v:childrenM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHier",
          "name": "delete",
          "package": "bio",
          "signature": "Feature -\u003e FeatureHier -\u003e m FeatureHier",
          "source": "src/Bio-GFF3-FeatureHier.html#delete",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHier",
          "module": "Bio.GFF3.FeatureHier",
          "name": "delete",
          "normalized": "Feature-\u003eFeatureHier-\u003ea FeatureHier",
          "package": "bio",
          "signature": "Feature-\u003eFeatureHier-\u003em FeatureHier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHier.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHier",
          "name": "features",
          "package": "bio",
          "signature": "FeatureHier -\u003e Set Feature",
          "source": "src/Bio-GFF3-FeatureHier.html#features",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHier",
          "module": "Bio.GFF3.FeatureHier",
          "name": "features",
          "normalized": "FeatureHier-\u003eSet Feature",
          "package": "bio",
          "signature": "FeatureHier-\u003eSet Feature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHier.html#v:features"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHier",
          "name": "fromList",
          "package": "bio",
          "signature": "[Feature] -\u003e m FeatureHier",
          "source": "src/Bio-GFF3-FeatureHier.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHier",
          "module": "Bio.GFF3.FeatureHier",
          "name": "fromList",
          "normalized": "[Feature]-\u003ea FeatureHier",
          "package": "bio",
          "partial": "List",
          "signature": "[Feature]-\u003em FeatureHier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHier.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHier",
          "name": "insert",
          "package": "bio",
          "signature": "Feature -\u003e FeatureHier -\u003e m FeatureHier",
          "source": "src/Bio-GFF3-FeatureHier.html#insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHier",
          "module": "Bio.GFF3.FeatureHier",
          "name": "insert",
          "normalized": "Feature-\u003eFeatureHier-\u003ea FeatureHier",
          "package": "bio",
          "signature": "Feature-\u003eFeatureHier-\u003em FeatureHier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHier.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHier",
          "name": "lookupId",
          "package": "bio",
          "signature": "FeatureHier -\u003e ByteString -\u003e m Feature",
          "source": "src/Bio-GFF3-FeatureHier.html#lookupId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHier",
          "module": "Bio.GFF3.FeatureHier",
          "name": "lookupId",
          "normalized": "FeatureHier-\u003eByteString-\u003ea Feature",
          "package": "bio",
          "partial": "Id",
          "signature": "FeatureHier-\u003eByteString-\u003em Feature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHier.html#v:lookupId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHier",
          "name": "lookupIdChildren",
          "package": "bio",
          "signature": "FeatureHier -\u003e ByteString -\u003e m [Feature]",
          "source": "src/Bio-GFF3-FeatureHier.html#lookupIdChildren",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHier",
          "module": "Bio.GFF3.FeatureHier",
          "name": "lookupIdChildren",
          "normalized": "FeatureHier-\u003eByteString-\u003ea[Feature]",
          "package": "bio",
          "partial": "Id Children",
          "signature": "FeatureHier-\u003eByteString-\u003em[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHier.html#v:lookupIdChildren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHier",
          "name": "parents",
          "package": "bio",
          "signature": "FeatureHier -\u003e Feature -\u003e [Feature]",
          "source": "src/Bio-GFF3-FeatureHier.html#parents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHier",
          "module": "Bio.GFF3.FeatureHier",
          "name": "parents",
          "normalized": "FeatureHier-\u003eFeature-\u003e[Feature]",
          "package": "bio",
          "signature": "FeatureHier-\u003eFeature-\u003e[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHier.html#v:parents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHier",
          "name": "parentsM",
          "package": "bio",
          "signature": "Feature -\u003e m [Feature]",
          "source": "src/Bio-GFF3-FeatureHier.html#parentsM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHier",
          "module": "Bio.GFF3.FeatureHier",
          "name": "parentsM",
          "normalized": "Feature-\u003ea[Feature]",
          "package": "bio",
          "signature": "Feature-\u003em[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHier.html#v:parentsM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "FeatureHierSequences",
          "package": "bio",
          "source": "src/Bio-GFF3-FeatureHierSequences.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHierSequences",
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "FeatureHierSequences",
          "package": "bio",
          "partial": "Feature Hier Sequences",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHierSequences.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "FeatureHierSequences",
          "package": "bio",
          "source": "src/Bio-GFF3-FeatureHierSequences.html#FeatureHierSequences",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHierSequences",
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "FeatureHierSequences",
          "package": "bio",
          "partial": "Feature Hier Sequences",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHierSequences.html#t:FeatureHierSequences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "asksGFF",
          "package": "bio",
          "signature": "(FeatureHierSequences -\u003e a -\u003e m b) -\u003e a -\u003e m b",
          "source": "src/Bio-GFF3-FeatureHierSequences.html#asksGFF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHierSequences",
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "asksGFF",
          "normalized": "(FeatureHierSequences-\u003ea-\u003eb c)-\u003ea-\u003eb c",
          "package": "bio",
          "partial": "GFF",
          "signature": "(FeatureHierSequences-\u003ea-\u003em b)-\u003ea-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHierSequences.html#v:asksGFF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "children",
          "package": "bio",
          "signature": "FeatureHierSequences -\u003e Feature -\u003e [Feature]",
          "source": "src/Bio-GFF3-FeatureHierSequences.html#children",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHierSequences",
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "children",
          "normalized": "FeatureHierSequences-\u003eFeature-\u003e[Feature]",
          "package": "bio",
          "signature": "FeatureHierSequences-\u003eFeature-\u003e[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHierSequences.html#v:children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "featureSequence",
          "package": "bio",
          "signature": "FeatureHierSequences -\u003e Feature -\u003e m (Sequence a)",
          "source": "src/Bio-GFF3-FeatureHierSequences.html#featureSequence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHierSequences",
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "featureSequence",
          "normalized": "FeatureHierSequences-\u003eFeature-\u003ea(Sequence b)",
          "package": "bio",
          "partial": "Sequence",
          "signature": "FeatureHierSequences-\u003eFeature-\u003em(Sequence a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHierSequences.html#v:featureSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "features",
          "package": "bio",
          "signature": "FeatureHierSequences -\u003e Set Feature",
          "source": "src/Bio-GFF3-FeatureHierSequences.html#features",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHierSequences",
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "features",
          "normalized": "FeatureHierSequences-\u003eSet Feature",
          "package": "bio",
          "signature": "FeatureHierSequences-\u003eSet Feature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHierSequences.html#v:features"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "fromLists",
          "package": "bio",
          "signature": "[Feature] -\u003e [Sequence a] -\u003e m FeatureHierSequences",
          "source": "src/Bio-GFF3-FeatureHierSequences.html#fromLists",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHierSequences",
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "fromLists",
          "normalized": "[Feature]-\u003e[Sequence a]-\u003eb FeatureHierSequences",
          "package": "bio",
          "partial": "Lists",
          "signature": "[Feature]-\u003e[Sequence a]-\u003em FeatureHierSequences",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHierSequences.html#v:fromLists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "getSequence",
          "package": "bio",
          "signature": "FeatureHierSequences -\u003e SeqName -\u003e m SeqData",
          "source": "src/Bio-GFF3-FeatureHierSequences.html#getSequence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHierSequences",
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "getSequence",
          "normalized": "FeatureHierSequences-\u003eSeqName-\u003ea SeqData",
          "package": "bio",
          "partial": "Sequence",
          "signature": "FeatureHierSequences-\u003eSeqName-\u003em SeqData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHierSequences.html#v:getSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "lookupId",
          "package": "bio",
          "signature": "FeatureHierSequences -\u003e SeqName -\u003e m Feature",
          "source": "src/Bio-GFF3-FeatureHierSequences.html#lookupId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHierSequences",
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "lookupId",
          "normalized": "FeatureHierSequences-\u003eSeqName-\u003ea Feature",
          "package": "bio",
          "partial": "Id",
          "signature": "FeatureHierSequences-\u003eSeqName-\u003em Feature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHierSequences.html#v:lookupId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "parents",
          "package": "bio",
          "signature": "FeatureHierSequences -\u003e Feature -\u003e [Feature]",
          "source": "src/Bio-GFF3-FeatureHierSequences.html#parents",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHierSequences",
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "parents",
          "normalized": "FeatureHierSequences-\u003eFeature-\u003e[Feature]",
          "package": "bio",
          "signature": "FeatureHierSequences-\u003eFeature-\u003e[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHierSequences.html#v:parents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "parse",
          "package": "bio",
          "signature": "ByteString -\u003e m FeatureHierSequences",
          "source": "src/Bio-GFF3-FeatureHierSequences.html#parse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHierSequences",
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "parse",
          "normalized": "ByteString-\u003ea FeatureHierSequences",
          "package": "bio",
          "signature": "ByteString-\u003em FeatureHierSequences",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHierSequences.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "runGFF",
          "package": "bio",
          "signature": "FilePath -\u003e ErrorT String (Reader FeatureHierSequences) a -\u003e ErrorT String IO a",
          "source": "src/Bio-GFF3-FeatureHierSequences.html#runGFF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHierSequences",
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "runGFF",
          "normalized": "FilePath-\u003eErrorT String(Reader FeatureHierSequences)a-\u003eErrorT String IO a",
          "package": "bio",
          "partial": "GFF",
          "signature": "FilePath-\u003eErrorT String(Reader FeatureHierSequences)a-\u003eErrorT String IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHierSequences.html#v:runGFF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "runGFFIO",
          "package": "bio",
          "signature": "FilePath -\u003e ErrorT String (ReaderT FeatureHierSequences IO) a -\u003e ErrorT String IO a",
          "source": "src/Bio-GFF3-FeatureHierSequences.html#runGFFIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHierSequences",
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "runGFFIO",
          "normalized": "FilePath-\u003eErrorT String(ReaderT FeatureHierSequences IO)a-\u003eErrorT String IO a",
          "package": "bio",
          "partial": "GFFIO",
          "signature": "FilePath-\u003eErrorT String(ReaderT FeatureHierSequences IO)a-\u003eErrorT String IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHierSequences.html#v:runGFFIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "seqData",
          "package": "bio",
          "signature": "FeatureHierSequences -\u003e SeqLoc -\u003e m SeqData",
          "source": "src/Bio-GFF3-FeatureHierSequences.html#seqData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHierSequences",
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "seqData",
          "normalized": "FeatureHierSequences-\u003eSeqLoc-\u003ea SeqData",
          "package": "bio",
          "partial": "Data",
          "signature": "FeatureHierSequences-\u003eSeqLoc-\u003em SeqData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHierSequences.html#v:seqData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "sequences",
          "package": "bio",
          "signature": "FeatureHierSequences -\u003e [Sequence a]",
          "source": "src/Bio-GFF3-FeatureHierSequences.html#sequences",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 FeatureHierSequences",
          "module": "Bio.GFF3.FeatureHierSequences",
          "name": "sequences",
          "normalized": "FeatureHierSequences-\u003e[Sequence a]",
          "package": "bio",
          "signature": "FeatureHierSequences-\u003e[Sequence a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-FeatureHierSequences.html#v:sequences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.SGD",
          "name": "SGD",
          "package": "bio",
          "source": "src/Bio-GFF3-SGD.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bio GFF3 SGD",
          "module": "Bio.GFF3.SGD",
          "name": "SGD",
          "package": "bio",
          "partial": "SGD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-SGD.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.SGD",
          "name": "chromosomes",
          "package": "bio",
          "signature": "FeatureHierSequences -\u003e [Feature]",
          "source": "src/Bio-GFF3-SGD.html#chromosomes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 SGD",
          "module": "Bio.GFF3.SGD",
          "name": "chromosomes",
          "normalized": "FeatureHierSequences-\u003e[Feature]",
          "package": "bio",
          "signature": "FeatureHierSequences-\u003e[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-SGD.html#v:chromosomes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.SGD",
          "name": "geneCDS_SLM",
          "package": "bio",
          "signature": "FeatureHierSequences -\u003e m (SeqLocMap Feature)",
          "source": "src/Bio-GFF3-SGD.html#geneCDS_SLM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 SGD",
          "module": "Bio.GFF3.SGD",
          "name": "geneCDS_SLM",
          "normalized": "FeatureHierSequences-\u003ea(SeqLocMap Feature)",
          "package": "bio",
          "partial": "CDS SLM",
          "signature": "FeatureHierSequences-\u003em(SeqLocMap Feature)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-SGD.html#v:geneCDS_SLM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.SGD",
          "name": "geneCDSes",
          "package": "bio",
          "signature": "FeatureHierSequences -\u003e Feature -\u003e [Feature]",
          "source": "src/Bio-GFF3-SGD.html#geneCDSes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 SGD",
          "module": "Bio.GFF3.SGD",
          "name": "geneCDSes",
          "normalized": "FeatureHierSequences-\u003eFeature-\u003e[Feature]",
          "package": "bio",
          "partial": "CDSes",
          "signature": "FeatureHierSequences-\u003eFeature-\u003e[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-SGD.html#v:geneCDSes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.SGD",
          "name": "geneSeqLoc",
          "package": "bio",
          "signature": "FeatureHierSequences -\u003e Feature -\u003e m SeqLoc",
          "source": "src/Bio-GFF3-SGD.html#geneSeqLoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 SGD",
          "module": "Bio.GFF3.SGD",
          "name": "geneSeqLoc",
          "normalized": "FeatureHierSequences-\u003eFeature-\u003ea SeqLoc",
          "package": "bio",
          "partial": "Seq Loc",
          "signature": "FeatureHierSequences-\u003eFeature-\u003em SeqLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-SGD.html#v:geneSeqLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.SGD",
          "name": "geneSequence",
          "package": "bio",
          "signature": "FeatureHierSequences -\u003e Feature -\u003e m (Sequence a)",
          "source": "src/Bio-GFF3-SGD.html#geneSequence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 SGD",
          "module": "Bio.GFF3.SGD",
          "name": "geneSequence",
          "normalized": "FeatureHierSequences-\u003eFeature-\u003ea(Sequence b)",
          "package": "bio",
          "partial": "Sequence",
          "signature": "FeatureHierSequences-\u003eFeature-\u003em(Sequence a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-SGD.html#v:geneSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.SGD",
          "name": "genes",
          "package": "bio",
          "signature": "FeatureHierSequences -\u003e [Feature]",
          "source": "src/Bio-GFF3-SGD.html#genes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 SGD",
          "module": "Bio.GFF3.SGD",
          "name": "genes",
          "normalized": "FeatureHierSequences-\u003e[Feature]",
          "package": "bio",
          "signature": "FeatureHierSequences-\u003e[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-SGD.html#v:genes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.SGD",
          "name": "namedSLM",
          "package": "bio",
          "signature": "FeatureHierSequences -\u003e SeqLocMap Feature",
          "source": "src/Bio-GFF3-SGD.html#namedSLM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 SGD",
          "module": "Bio.GFF3.SGD",
          "name": "namedSLM",
          "normalized": "FeatureHierSequences-\u003eSeqLocMap Feature",
          "package": "bio",
          "partial": "SLM",
          "signature": "FeatureHierSequences-\u003eSeqLocMap Feature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-SGD.html#v:namedSLM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.SGD",
          "name": "noncodingExons",
          "package": "bio",
          "signature": "FeatureHierSequences -\u003e Feature -\u003e [Feature]",
          "source": "src/Bio-GFF3-SGD.html#noncodingExons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 SGD",
          "module": "Bio.GFF3.SGD",
          "name": "noncodingExons",
          "normalized": "FeatureHierSequences-\u003eFeature-\u003e[Feature]",
          "package": "bio",
          "partial": "Exons",
          "signature": "FeatureHierSequences-\u003eFeature-\u003e[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-SGD.html#v:noncodingExons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.SGD",
          "name": "noncodingSeqLoc",
          "package": "bio",
          "signature": "FeatureHierSequences -\u003e Feature -\u003e m SeqLoc",
          "source": "src/Bio-GFF3-SGD.html#noncodingSeqLoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 SGD",
          "module": "Bio.GFF3.SGD",
          "name": "noncodingSeqLoc",
          "normalized": "FeatureHierSequences-\u003eFeature-\u003ea SeqLoc",
          "package": "bio",
          "partial": "Seq Loc",
          "signature": "FeatureHierSequences-\u003eFeature-\u003em SeqLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-SGD.html#v:noncodingSeqLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.SGD",
          "name": "noncodingSequence",
          "package": "bio",
          "signature": "FeatureHierSequences -\u003e Feature -\u003e m (Sequence a)",
          "source": "src/Bio-GFF3-SGD.html#noncodingSequence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 SGD",
          "module": "Bio.GFF3.SGD",
          "name": "noncodingSequence",
          "normalized": "FeatureHierSequences-\u003eFeature-\u003ea(Sequence b)",
          "package": "bio",
          "partial": "Sequence",
          "signature": "FeatureHierSequences-\u003eFeature-\u003em(Sequence a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-SGD.html#v:noncodingSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.SGD",
          "name": "rRNAs",
          "package": "bio",
          "signature": "FeatureHierSequences -\u003e [Feature]",
          "source": "src/Bio-GFF3-SGD.html#rRNAs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 SGD",
          "module": "Bio.GFF3.SGD",
          "name": "rRNAs",
          "normalized": "FeatureHierSequences-\u003e[Feature]",
          "package": "bio",
          "partial": "RNAs",
          "signature": "FeatureHierSequences-\u003e[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-SGD.html#v:rRNAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.GFF3.SGD",
          "name": "sortExons",
          "package": "bio",
          "signature": "[Feature] -\u003e m [Feature]",
          "source": "src/Bio-GFF3-SGD.html#sortExons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio GFF3 SGD",
          "module": "Bio.GFF3.SGD",
          "name": "sortExons",
          "normalized": "[Feature]-\u003ea[Feature]",
          "package": "bio",
          "partial": "Exons",
          "signature": "[Feature]-\u003em[Feature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-GFF3-SGD.html#v:sortExons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData type for a sequence location consiting of a contiguous range\nof positions on the sequence.\n\u003c/p\u003e\u003cp\u003eThroughout, \u003cem\u003esequence position\u003c/em\u003e refers to a \u003ccode\u003e\u003ca\u003ePos\u003c/a\u003e\u003c/code\u003e which includes a\nstrand.  An index into a sequence is referred to as an \u003cem\u003eoffset\u003c/em\u003e, and\nis generally of type \u003ccode\u003e\u003ca\u003eOffset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Location.ContigLocation",
          "name": "ContigLocation",
          "package": "bio",
          "source": "src/Bio-Location-ContigLocation.html",
          "type": "module"
        },
        "index": {
          "description": "Data type for sequence location consiting of contiguous range of positions on the sequence Throughout sequence position refers to Pos which includes strand An index into sequence is referred to as an offset and is generally of type Offset",
          "hierarchy": "Bio Location ContigLocation",
          "module": "Bio.Location.ContigLocation",
          "name": "ContigLocation",
          "package": "bio",
          "partial": "Contig Location",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-ContigLocation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContiguous sequence location defined by a span of sequence\n positions, lying on a specific strand of the sequence.\n\u003c/p\u003e",
          "module": "Bio.Location.ContigLocation",
          "name": "ContigLoc",
          "package": "bio",
          "source": "src/Bio-Location-ContigLocation.html#ContigLoc",
          "type": "data"
        },
        "index": {
          "description": "Contiguous sequence location defined by span of sequence positions lying on specific strand of the sequence",
          "hierarchy": "Bio Location ContigLocation",
          "module": "Bio.Location.ContigLocation",
          "name": "ContigLoc",
          "package": "bio",
          "partial": "Contig Loc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-ContigLocation.html#t:ContigLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Location.ContigLocation",
          "name": "ContigLoc",
          "package": "bio",
          "signature": "ContigLoc",
          "source": "src/Bio-Location-ContigLocation.html#ContigLoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Location ContigLocation",
          "module": "Bio.Location.ContigLocation",
          "name": "ContigLoc",
          "package": "bio",
          "partial": "Contig Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-ContigLocation.html#v:ContigLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe bounds of a sequence location.  This is a pair consisting of\n the lowest and highest sequence offsets covered by the region.  The\n bounds ignore the strand of the sequence location, and the first\n element of the pair will always be lower than the second.\n\u003c/p\u003e",
          "module": "Bio.Location.ContigLocation",
          "name": "bounds",
          "package": "bio",
          "signature": "ContigLoc -\u003e (Offset, Offset)",
          "source": "src/Bio-Location-ContigLocation.html#bounds",
          "type": "function"
        },
        "index": {
          "description": "The bounds of sequence location This is pair consisting of the lowest and highest sequence offsets covered by the region The bounds ignore the strand of the sequence location and the first element of the pair will always be lower than the second",
          "hierarchy": "Bio Location ContigLocation",
          "module": "Bio.Location.ContigLocation",
          "name": "bounds",
          "normalized": "ContigLoc-\u003e(Offset,Offset)",
          "package": "bio",
          "signature": "ContigLoc-\u003e(Offset,Offset)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-ContigLocation.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a human-friendly, zero-based representation of a sequence location.\n\u003c/p\u003e",
          "module": "Bio.Location.ContigLocation",
          "name": "display",
          "package": "bio",
          "signature": "ContigLoc -\u003e String",
          "source": "src/Bio-Location-ContigLocation.html#display",
          "type": "function"
        },
        "index": {
          "description": "Display human-friendly zero-based representation of sequence location",
          "hierarchy": "Bio Location ContigLocation",
          "module": "Bio.Location.ContigLocation",
          "name": "display",
          "normalized": "ContigLoc-\u003eString",
          "package": "bio",
          "signature": "ContigLoc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-ContigLocation.html#v:display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence position of the end of the location, as described in \u003ccode\u003e\u003ca\u003estartPos\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Bio.Location.ContigLocation",
          "name": "endPos",
          "package": "bio",
          "signature": "ContigLoc -\u003e Pos",
          "source": "src/Bio-Location-ContigLocation.html#endPos",
          "type": "function"
        },
        "index": {
          "description": "Sequence position of the end of the location as described in startPos",
          "hierarchy": "Bio Location ContigLocation",
          "module": "Bio.Location.ContigLocation",
          "name": "endPos",
          "normalized": "ContigLoc-\u003ePos",
          "package": "bio",
          "partial": "Pos",
          "signature": "ContigLoc-\u003ePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-ContigLocation.html#v:endPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a sequence location produced by extending the original\n location on each end, based on a pair of (\u003cem\u003e5\\' extension\u003c/em\u003e, /3'\n extension/).  The 5' extension is applied to the 5' end of the\n location on the location strand; if the location is on the\n \u003ccode\u003e\u003ca\u003eRevCompl\u003c/a\u003e\u003c/code\u003e strand, the 5' end will have a higher offset than the\n 3' end and this offset will increase by the amount of the 5'\n extension.  Similarly, the 3' extension is applied to the 3' end\n of the location.\n\u003c/p\u003e",
          "module": "Bio.Location.ContigLocation",
          "name": "extend",
          "package": "bio",
          "signature": "(Offset, Offset) -\u003e ContigLoc -\u003e ContigLoc",
          "source": "src/Bio-Location-ContigLocation.html#extend",
          "type": "function"
        },
        "index": {
          "description": "Returns sequence location produced by extending the original location on each end based on pair of extension extension The extension is applied to the end of the location on the location strand if the location is on the RevCompl strand the end will have higher offset than the end and this offset will increase by the amount of the extension Similarly the extension is applied to the end of the location",
          "hierarchy": "Bio Location ContigLocation",
          "module": "Bio.Location.ContigLocation",
          "name": "extend",
          "normalized": "(Offset,Offset)-\u003eContigLoc-\u003eContigLoc",
          "package": "bio",
          "signature": "(Offset,Offset)-\u003eContigLoc-\u003eContigLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-ContigLocation.html#v:extend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a sequence location from the sequence position of the\n start of the location and the length of the position.  The strand\n of the location, and the direction it extends from the starting\n position, are determined by the strand of the starting position.\n\u003c/p\u003e",
          "module": "Bio.Location.ContigLocation",
          "name": "fromPosLen",
          "package": "bio",
          "signature": "Pos -\u003e Offset -\u003e ContigLoc",
          "source": "src/Bio-Location-ContigLocation.html#fromPosLen",
          "type": "function"
        },
        "index": {
          "description": "Create sequence location from the sequence position of the start of the location and the length of the position The strand of the location and the direction it extends from the starting position are determined by the strand of the starting position",
          "hierarchy": "Bio Location ContigLocation",
          "module": "Bio.Location.ContigLocation",
          "name": "fromPosLen",
          "normalized": "Pos-\u003eOffset-\u003eContigLoc",
          "package": "bio",
          "partial": "Pos Len",
          "signature": "Pos-\u003eOffset-\u003eContigLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-ContigLocation.html#v:fromPosLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a sequence location lying between 0-based starting and\n ending offsets.  When \u003ccode\u003estart \u003c end\u003c/code\u003e, the location\n be on the forward strand, otherwise it will be on the\n reverse complement strand.\n\u003c/p\u003e",
          "module": "Bio.Location.ContigLocation",
          "name": "fromStartEnd",
          "package": "bio",
          "signature": "Offset -\u003e Offset -\u003e ContigLoc",
          "source": "src/Bio-Location-ContigLocation.html#fromStartEnd",
          "type": "function"
        },
        "index": {
          "description": "Create sequence location lying between based starting and ending offsets When start end the location be on the forward strand otherwise it will be on the reverse complement strand",
          "hierarchy": "Bio Location ContigLocation",
          "module": "Bio.Location.ContigLocation",
          "name": "fromStartEnd",
          "normalized": "Offset-\u003eOffset-\u003eContigLoc",
          "package": "bio",
          "partial": "Start End",
          "signature": "Offset-\u003eOffset-\u003eContigLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-ContigLocation.html#v:fromStartEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e when  a sequence position lies within a sequence\n location on the same sequence, and occupies the same strand.\n\u003c/p\u003e",
          "module": "Bio.Location.ContigLocation",
          "name": "isWithin",
          "package": "bio",
          "signature": "Pos -\u003e ContigLoc -\u003e Bool",
          "source": "src/Bio-Location-ContigLocation.html#isWithin",
          "type": "function"
        },
        "index": {
          "description": "Returns True when sequence position lies within sequence location on the same sequence and occupies the same strand",
          "hierarchy": "Bio Location ContigLocation",
          "module": "Bio.Location.ContigLocation",
          "name": "isWithin",
          "normalized": "Pos-\u003eContigLoc-\u003eBool",
          "package": "bio",
          "partial": "Within",
          "signature": "Pos-\u003eContigLoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-ContigLocation.html#v:isWithin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe length of the location\n\u003c/p\u003e",
          "module": "Bio.Location.ContigLocation",
          "name": "length",
          "package": "bio",
          "signature": "Offset",
          "source": "src/Bio-Location-ContigLocation.html#ContigLoc",
          "type": "function"
        },
        "index": {
          "description": "The length of the location",
          "hierarchy": "Bio Location ContigLocation",
          "module": "Bio.Location.ContigLocation",
          "name": "length",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-ContigLocation.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe offset of the 5' end of the location, as a 0-based index\n\u003c/p\u003e",
          "module": "Bio.Location.ContigLocation",
          "name": "offset5",
          "package": "bio",
          "signature": "Offset",
          "source": "src/Bio-Location-ContigLocation.html#ContigLoc",
          "type": "function"
        },
        "index": {
          "description": "The offset of the end of the location as based index",
          "hierarchy": "Bio Location ContigLocation",
          "module": "Bio.Location.ContigLocation",
          "name": "offset5",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-ContigLocation.html#v:offset5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e when two sequence locations overlap at any\n position.\n\u003c/p\u003e",
          "module": "Bio.Location.ContigLocation",
          "name": "overlaps",
          "package": "bio",
          "signature": "ContigLoc -\u003e ContigLoc -\u003e Bool",
          "source": "src/Bio-Location-ContigLocation.html#overlaps",
          "type": "function"
        },
        "index": {
          "description": "Returns True when two sequence locations overlap at any position",
          "hierarchy": "Bio Location ContigLocation",
          "module": "Bio.Location.ContigLocation",
          "name": "overlaps",
          "normalized": "ContigLoc-\u003eContigLoc-\u003eBool",
          "package": "bio",
          "signature": "ContigLoc-\u003eContigLoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-ContigLocation.html#v:overlaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a sequence position and a sequence location relative to the\n same sequence, compute a new position representing the original\n position relative to the subsequence defined by the location.  If\n the sequence position lies outside of the sequence location,\n \u003ccode\u003eNothing\u003c/code\u003e is returned; thus, the offset of the new position will\n always be in the range \u003ccode\u003e[0, length cloc - 1]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Bio.Location.ContigLocation",
          "name": "posInto",
          "package": "bio",
          "signature": "Pos -\u003e ContigLoc -\u003e Maybe Pos",
          "source": "src/Bio-Location-ContigLocation.html#posInto",
          "type": "function"
        },
        "index": {
          "description": "Given sequence position and sequence location relative to the same sequence compute new position representing the original position relative to the subsequence defined by the location If the sequence position lies outside of the sequence location Nothing is returned thus the offset of the new position will always be in the range length cloc",
          "hierarchy": "Bio Location ContigLocation",
          "module": "Bio.Location.ContigLocation",
          "name": "posInto",
          "normalized": "Pos-\u003eContigLoc-\u003eMaybe Pos",
          "package": "bio",
          "partial": "Into",
          "signature": "Pos-\u003eContigLoc-\u003eMaybe Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-ContigLocation.html#v:posInto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a sequence location and a sequence position within that\n location, compute a new position representing the original position\n relative to the outer sequence.  If the sequence position lies\n outside the location, \u003ccode\u003eNothing\u003c/code\u003e is returned.\n\u003c/p\u003e\u003cp\u003eThis function inverts \u003ccode\u003e\u003ca\u003eposInto\u003c/a\u003e\u003c/code\u003e when the sequence position lies\n within the position is actually within the location.\n\u003c/p\u003e",
          "module": "Bio.Location.ContigLocation",
          "name": "posOutof",
          "package": "bio",
          "signature": "Pos -\u003e ContigLoc -\u003e Maybe Pos",
          "source": "src/Bio-Location-ContigLocation.html#posOutof",
          "type": "function"
        },
        "index": {
          "description": "Given sequence location and sequence position within that location compute new position representing the original position relative to the outer sequence If the sequence position lies outside the location Nothing is returned This function inverts posInto when the sequence position lies within the position is actually within the location",
          "hierarchy": "Bio Location ContigLocation",
          "module": "Bio.Location.ContigLocation",
          "name": "posOutof",
          "normalized": "Pos-\u003eContigLoc-\u003eMaybe Pos",
          "package": "bio",
          "partial": "Outof",
          "signature": "Pos-\u003eContigLoc-\u003eMaybe Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-ContigLocation.html#v:posOutof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the nucleotide \u003ccode\u003e\u003ca\u003eSeqData\u003c/a\u003e\u003c/code\u003e for the sequence location.  If\n any part of the location lies outside the bounds of the sequence,\n an error results.\n\u003c/p\u003e",
          "module": "Bio.Location.ContigLocation",
          "name": "seqData",
          "package": "bio",
          "signature": "SeqData -\u003e ContigLoc -\u003e m SeqData",
          "source": "src/Bio-Location-ContigLocation.html#seqData",
          "type": "function"
        },
        "index": {
          "description": "Extract the nucleotide SeqData for the sequence location If any part of the location lies outside the bounds of the sequence an error results",
          "hierarchy": "Bio Location ContigLocation",
          "module": "Bio.Location.ContigLocation",
          "name": "seqData",
          "normalized": "SeqData-\u003eContigLoc-\u003ea SeqData",
          "package": "bio",
          "partial": "Data",
          "signature": "SeqData-\u003eContigLoc-\u003em SeqData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-ContigLocation.html#v:seqData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eseqData\u003c/a\u003e\u003c/code\u003e, extract the nucleotide subsequence for the\n location.  Any positions in the location lying outside the bounds\n of the sequence are returned as \u003ccode\u003eN\u003c/code\u003e rather than producing an error.\n\u003c/p\u003e",
          "module": "Bio.Location.ContigLocation",
          "name": "seqDataPadded",
          "package": "bio",
          "signature": "SeqData -\u003e ContigLoc -\u003e SeqData",
          "source": "src/Bio-Location-ContigLocation.html#seqDataPadded",
          "type": "function"
        },
        "index": {
          "description": "As seqData extract the nucleotide subsequence for the location Any positions in the location lying outside the bounds of the sequence are returned as rather than producing an error",
          "hierarchy": "Bio Location ContigLocation",
          "module": "Bio.Location.ContigLocation",
          "name": "seqDataPadded",
          "normalized": "SeqData-\u003eContigLoc-\u003eSeqData",
          "package": "bio",
          "partial": "Data Padded",
          "signature": "SeqData-\u003eContigLoc-\u003eSeqData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-ContigLocation.html#v:seqDataPadded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a location resulting from sliding the original location\n along the sequence by a specified offset.  A positive offset will\n move the location away from the 5' end of the forward stand of the\n sequence regardless of the strand of the location itself.  Thus,\n\u003c/p\u003e\u003cpre\u003e slide (revCompl cloc) off == revCompl (slide cloc off)\n\u003c/pre\u003e",
          "module": "Bio.Location.ContigLocation",
          "name": "slide",
          "package": "bio",
          "signature": "Offset -\u003e ContigLoc -\u003e ContigLoc",
          "source": "src/Bio-Location-ContigLocation.html#slide",
          "type": "function"
        },
        "index": {
          "description": "Returns location resulting from sliding the original location along the sequence by specified offset positive offset will move the location away from the end of the forward stand of the sequence regardless of the strand of the location itself Thus slide revCompl cloc off revCompl slide cloc off",
          "hierarchy": "Bio Location ContigLocation",
          "module": "Bio.Location.ContigLocation",
          "name": "slide",
          "normalized": "Offset-\u003eContigLoc-\u003eContigLoc",
          "package": "bio",
          "signature": "Offset-\u003eContigLoc-\u003eContigLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-ContigLocation.html#v:slide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence position of the start of the location.  This is the 5'\n end on the location strand, which will have a higher offset than\n \u003ccode\u003e\u003ca\u003eendPos\u003c/a\u003e\u003c/code\u003e if the location is on the \u003ccode\u003e\u003ca\u003eRevCompl\u003c/a\u003e\u003c/code\u003e strand.\n\u003c/p\u003e",
          "module": "Bio.Location.ContigLocation",
          "name": "startPos",
          "package": "bio",
          "signature": "ContigLoc -\u003e Pos",
          "source": "src/Bio-Location-ContigLocation.html#startPos",
          "type": "function"
        },
        "index": {
          "description": "Sequence position of the start of the location This is the end on the location strand which will have higher offset than endPos if the location is on the RevCompl strand",
          "hierarchy": "Bio Location ContigLocation",
          "module": "Bio.Location.ContigLocation",
          "name": "startPos",
          "normalized": "ContigLoc-\u003ePos",
          "package": "bio",
          "partial": "Pos",
          "signature": "ContigLoc-\u003ePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-ContigLocation.html#v:startPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strand of the location\n\u003c/p\u003e",
          "module": "Bio.Location.ContigLocation",
          "name": "strand",
          "package": "bio",
          "signature": "Strand",
          "source": "src/Bio-Location-ContigLocation.html#ContigLoc",
          "type": "function"
        },
        "index": {
          "description": "The strand of the location",
          "hierarchy": "Bio Location ContigLocation",
          "module": "Bio.Location.ContigLocation",
          "name": "strand",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-ContigLocation.html#v:strand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficient lookup of sequence positions and locations in a large\nmap of target locations.  For example, target locations might\nrepresent a collection of genes annotated on a chromosome.  The\n\u003ccode\u003e\u003ca\u003eLocMap\u003c/a\u003e\u003c/code\u003e would efficiently find which gene(s) overlapped a sequence\nposition on that chromosome.\n\u003c/p\u003e\u003cp\u003eTarget locations are assigned to one or more zones based on\n\u003ccode\u003e\u003ca\u003ebounds\u003c/a\u003e\u003c/code\u003e.  Query locations are then tested only against the target\nlocations in the relevant zones.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Location.LocMap",
          "name": "LocMap",
          "package": "bio",
          "source": "src/Bio-Location-LocMap.html",
          "type": "module"
        },
        "index": {
          "description": "Efficient lookup of sequence positions and locations in large map of target locations For example target locations might represent collection of genes annotated on chromosome The LocMap would efficiently find which gene overlapped sequence position on that chromosome Target locations are assigned to one or more zones based on bounds Query locations are then tested only against the target locations in the relevant zones",
          "hierarchy": "Bio Location LocMap",
          "module": "Bio.Location.LocMap",
          "name": "LocMap",
          "package": "bio",
          "partial": "Loc Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-LocMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData structure allowing efficient lookup of target sequence\n locations that overlap a query location.  Target locations can be\n paired with an arbitrary object.\n\u003c/p\u003e",
          "module": "Bio.Location.LocMap",
          "name": "LocMap",
          "package": "bio",
          "source": "src/Bio-Location-LocMap.html#LocMap",
          "type": "data"
        },
        "index": {
          "description": "Data structure allowing efficient lookup of target sequence locations that overlap query location Target locations can be paired with an arbitrary object",
          "hierarchy": "Bio Location LocMap",
          "module": "Bio.Location.LocMap",
          "name": "LocMap",
          "package": "bio",
          "partial": "Loc Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-LocMap.html#t:LocMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Location.LocMap",
          "name": "checkInvariants",
          "package": "bio",
          "signature": "LocMap a -\u003e [String]",
          "source": "src/Bio-Location-LocMap.html#checkInvariants",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Location LocMap",
          "module": "Bio.Location.LocMap",
          "name": "checkInvariants",
          "normalized": "LocMap a-\u003e[String]",
          "package": "bio",
          "partial": "Invariants",
          "signature": "LocMap a-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-LocMap.html#v:checkInvariants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a target location and object association from the map, if it is\n present.  If it is present multiple times, only the first\n occurrence will be deleted.\n\u003c/p\u003e",
          "module": "Bio.Location.LocMap",
          "name": "delete",
          "package": "bio",
          "signature": "(Loc, a) -\u003e LocMap a -\u003e LocMap a",
          "source": "src/Bio-Location-LocMap.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Remove target location and object association from the map if it is present If it is present multiple times only the first occurrence will be deleted",
          "hierarchy": "Bio Location LocMap",
          "module": "Bio.Location.LocMap",
          "name": "delete",
          "normalized": "(Loc,a)-\u003eLocMap a-\u003eLocMap a",
          "package": "bio",
          "signature": "(Loc,a)-\u003eLocMap a-\u003eLocMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-LocMap.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralized version of \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e that removes the first target\n location / object association that satisfies a predicate function.\n\u003c/p\u003e",
          "module": "Bio.Location.LocMap",
          "name": "deleteBy",
          "package": "bio",
          "signature": "((Loc, a) -\u003e Bool) -\u003e LocMap a -\u003e LocMap a",
          "source": "src/Bio-Location-LocMap.html#deleteBy",
          "type": "function"
        },
        "index": {
          "description": "Generalized version of delete that removes the first target location object association that satisfies predicate function",
          "hierarchy": "Bio Location LocMap",
          "module": "Bio.Location.LocMap",
          "name": "deleteBy",
          "normalized": "((Loc,a)-\u003eBool)-\u003eLocMap a-\u003eLocMap a",
          "package": "bio",
          "partial": "By",
          "signature": "((Loc,a)-\u003eBool)-\u003eLocMap a-\u003eLocMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-LocMap.html#v:deleteBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eLocMap\u003c/a\u003e\u003c/code\u003e from an association list of target locations.\n\u003c/p\u003e",
          "module": "Bio.Location.LocMap",
          "name": "fromList",
          "package": "bio",
          "signature": "Offset -\u003e [(Loc, a)] -\u003e LocMap a",
          "source": "src/Bio-Location-LocMap.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Create LocMap from an association list of target locations",
          "hierarchy": "Bio Location LocMap",
          "module": "Bio.Location.LocMap",
          "name": "fromList",
          "normalized": "Offset-\u003e[(Loc,a)]-\u003eLocMap a",
          "package": "bio",
          "partial": "List",
          "signature": "Offset-\u003e[(Loc,a)]-\u003eLocMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-LocMap.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a new target association into a target location map.\n\u003c/p\u003e",
          "module": "Bio.Location.LocMap",
          "name": "insert",
          "package": "bio",
          "signature": "Loc -\u003e a -\u003e LocMap a -\u003e LocMap a",
          "source": "src/Bio-Location-LocMap.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert new target association into target location map",
          "hierarchy": "Bio Location LocMap",
          "module": "Bio.Location.LocMap",
          "name": "insert",
          "normalized": "Loc-\u003ea-\u003eLocMap a-\u003eLocMap a",
          "package": "bio",
          "signature": "Loc-\u003ea-\u003eLocMap a-\u003eLocMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-LocMap.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the (possibly empty) list of target locations and associated\n objects that overlap a sequence location, in the sense of \u003ccode\u003e\u003ca\u003eoverlaps\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Bio.Location.LocMap",
          "name": "lookupOverlaps",
          "package": "bio",
          "signature": "Loc -\u003e LocMap a -\u003e [(Loc, a)]",
          "source": "src/Bio-Location-LocMap.html#lookupOverlaps",
          "type": "function"
        },
        "index": {
          "description": "Find the possibly empty list of target locations and associated objects that overlap sequence location in the sense of overlaps",
          "hierarchy": "Bio Location LocMap",
          "module": "Bio.Location.LocMap",
          "name": "lookupOverlaps",
          "normalized": "Loc-\u003eLocMap a-\u003e[(Loc,a)]",
          "package": "bio",
          "partial": "Overlaps",
          "signature": "Loc-\u003eLocMap a-\u003e[(Loc,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-LocMap.html#v:lookupOverlaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the (possibly empty) list of target locations and associated\n objects that contain a sequence position, in the sense of\n \u003ccode\u003e\u003ca\u003eisWithin\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Bio.Location.LocMap",
          "name": "lookupWithin",
          "package": "bio",
          "signature": "Pos -\u003e LocMap a -\u003e [(Loc, a)]",
          "source": "src/Bio-Location-LocMap.html#lookupWithin",
          "type": "function"
        },
        "index": {
          "description": "Find the possibly empty list of target locations and associated objects that contain sequence position in the sense of isWithin",
          "hierarchy": "Bio Location LocMap",
          "module": "Bio.Location.LocMap",
          "name": "lookupWithin",
          "normalized": "Pos-\u003eLocMap a-\u003e[(Loc,a)]",
          "package": "bio",
          "partial": "Within",
          "signature": "Pos-\u003eLocMap a-\u003e[(Loc,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-LocMap.html#v:lookupWithin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData type for a more general sequence location consiting of\npotentially disjoint ranges of positions on the sequence.\n\u003c/p\u003e\u003cp\u003eThroughout, \u003cem\u003esequence position\u003c/em\u003e refers to a \u003ccode\u003e\u003ca\u003ePos\u003c/a\u003e\u003c/code\u003e which includes a\nstrand.  An index into a sequence is referred to as an \u003cem\u003eoffset\u003c/em\u003e, and\nis generally of type \u003ccode\u003e\u003ca\u003eOffset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Location.Location",
          "name": "Location",
          "package": "bio",
          "source": "src/Bio-Location-Location.html",
          "type": "module"
        },
        "index": {
          "description": "Data type for more general sequence location consiting of potentially disjoint ranges of positions on the sequence Throughout sequence position refers to Pos which includes strand An index into sequence is referred to as an offset and is generally of type Offset",
          "hierarchy": "Bio Location Location",
          "module": "Bio.Location.Location",
          "name": "Location",
          "package": "bio",
          "partial": "Location",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Location.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral (disjoint) sequence region consisting of a concatenated\n   set of contiguous regions (see \u003ccode\u003e\u003ca\u003eContigLoc\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Bio.Location.Location",
          "name": "Loc",
          "package": "bio",
          "source": "src/Bio-Location-Location.html#Loc",
          "type": "newtype"
        },
        "index": {
          "description": "General disjoint sequence region consisting of concatenated set of contiguous regions see ContigLoc",
          "hierarchy": "Bio Location Location",
          "module": "Bio.Location.Location",
          "name": "Loc",
          "package": "bio",
          "partial": "Loc",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Location.html#t:Loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Location.Location",
          "name": "Loc",
          "package": "bio",
          "signature": "Loc [ContigLoc]",
          "source": "src/Bio-Location-Location.html#Loc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Location Location",
          "module": "Bio.Location.Location",
          "name": "Loc",
          "normalized": "Loc[ContigLoc]",
          "package": "bio",
          "partial": "Loc",
          "signature": "Loc[ContigLoc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Location.html#v:Loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe bounds of a sequence location.  This is a pair consisting of\n the lowest and highest sequence offsets covered by the region.  The\n bounds ignore the strand of the sequence location, and the first\n element of the pair will always be lower than the second.  Even if\n the positions in the location do not run monotonically through the\n location, the overall lowest and highest sequence offsets are returned.\n\u003c/p\u003e",
          "module": "Bio.Location.Location",
          "name": "bounds",
          "package": "bio",
          "signature": "Loc -\u003e (Offset, Offset)",
          "source": "src/Bio-Location-Location.html#bounds",
          "type": "function"
        },
        "index": {
          "description": "The bounds of sequence location This is pair consisting of the lowest and highest sequence offsets covered by the region The bounds ignore the strand of the sequence location and the first element of the pair will always be lower than the second Even if the positions in the location do not run monotonically through the location the overall lowest and highest sequence offsets are returned",
          "hierarchy": "Bio Location Location",
          "module": "Bio.Location.Location",
          "name": "bounds",
          "normalized": "Loc-\u003e(Offset,Offset)",
          "package": "bio",
          "signature": "Loc-\u003e(Offset,Offset)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Location.html#v:bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a human-friendly, zero-based representation of a sequence location.\n\u003c/p\u003e",
          "module": "Bio.Location.Location",
          "name": "display",
          "package": "bio",
          "signature": "Loc -\u003e String",
          "source": "src/Bio-Location-Location.html#display",
          "type": "function"
        },
        "index": {
          "description": "Display human-friendly zero-based representation of sequence location",
          "hierarchy": "Bio Location Location",
          "module": "Bio.Location.Location",
          "name": "display",
          "normalized": "Loc-\u003eString",
          "package": "bio",
          "signature": "Loc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Location.html#v:display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence position of the end of the location, as described in \u003ccode\u003e\u003ca\u003estartPos\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Bio.Location.Location",
          "name": "endPos",
          "package": "bio",
          "signature": "Loc -\u003e Pos",
          "source": "src/Bio-Location-Location.html#endPos",
          "type": "function"
        },
        "index": {
          "description": "Sequence position of the end of the location as described in startPos",
          "hierarchy": "Bio Location Location",
          "module": "Bio.Location.Location",
          "name": "endPos",
          "normalized": "Loc-\u003ePos",
          "package": "bio",
          "partial": "Pos",
          "signature": "Loc-\u003ePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Location.html#v:endPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a sequence location produced by extending the original\n location on each end, based on a pair of (\u003cem\u003e5\\' extension\u003c/em\u003e, /3'\n extension/).  These add contiguous positions to the 5' and 3'\n ends of the original location.  The 5' extension is applied to the\n 5' end of the location on the location strand; if the location is\n on the \u003ccode\u003e\u003ca\u003eRevCompl\u003c/a\u003e\u003c/code\u003e strand, the 5' end will have a higher offset\n than the 3' end and this offset will increase by the amount of the\n 5' extension.  Similarly, the 3' extension is applied to the 3'\n end of the location.\n\u003c/p\u003e",
          "module": "Bio.Location.Location",
          "name": "extend",
          "package": "bio",
          "signature": "(Offset, Offset)-\u003e Loc-\u003e Loc",
          "type": "function"
        },
        "index": {
          "description": "Returns sequence location produced by extending the original location on each end based on pair of extension extension These add contiguous positions to the and ends of the original location The extension is applied to the end of the location on the location strand if the location is on the RevCompl strand the end will have higher offset than the end and this offset will increase by the amount of the extension Similarly the extension is applied to the end of the location",
          "hierarchy": "Bio Location Location",
          "module": "Bio.Location.Location",
          "name": "extend",
          "normalized": "(Offset,Offset)-\u003eLoc-\u003eLoc",
          "package": "bio",
          "signature": "(Offset,Offset)-\u003eLoc-\u003eLoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Location.html#v:extend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e when  a sequence position lies within a sequence\n location on the same sequence, and occupies the same strand.\n\u003c/p\u003e",
          "module": "Bio.Location.Location",
          "name": "isWithin",
          "package": "bio",
          "signature": "Pos -\u003e Loc -\u003e Bool",
          "source": "src/Bio-Location-Location.html#isWithin",
          "type": "function"
        },
        "index": {
          "description": "Returns True when sequence position lies within sequence location on the same sequence and occupies the same strand",
          "hierarchy": "Bio Location Location",
          "module": "Bio.Location.Location",
          "name": "isWithin",
          "normalized": "Pos-\u003eLoc-\u003eBool",
          "package": "bio",
          "partial": "Within",
          "signature": "Pos-\u003eLoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Location.html#v:isWithin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the length of the region\n\u003c/p\u003e",
          "module": "Bio.Location.Location",
          "name": "length",
          "package": "bio",
          "signature": "Loc -\u003e Offset",
          "source": "src/Bio-Location-Location.html#length",
          "type": "function"
        },
        "index": {
          "description": "Returns the length of the region",
          "hierarchy": "Bio Location Location",
          "module": "Bio.Location.Location",
          "name": "length",
          "normalized": "Loc-\u003eOffset",
          "package": "bio",
          "signature": "Loc-\u003eOffset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Location.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e when two sequence locations overlap at any\n position.\n\u003c/p\u003e",
          "module": "Bio.Location.Location",
          "name": "overlaps",
          "package": "bio",
          "signature": "Loc -\u003e Loc -\u003e Bool",
          "source": "src/Bio-Location-Location.html#overlaps",
          "type": "function"
        },
        "index": {
          "description": "Returns True when two sequence locations overlap at any position",
          "hierarchy": "Bio Location Location",
          "module": "Bio.Location.Location",
          "name": "overlaps",
          "normalized": "Loc-\u003eLoc-\u003eBool",
          "package": "bio",
          "signature": "Loc-\u003eLoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Location.html#v:overlaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a sequence position and a sequence location relative to the\n same sequence, compute a new position representing the original\n position relative to the subsequence defined by the location.  If\n the sequence position lies outside of the sequence location,\n \u003ccode\u003eNothing\u003c/code\u003e is returned; thus, the offset of the new position will\n always be in the range \u003ccode\u003e[0, length cloc - 1]\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhen the sequence positions in the location are not monotonic,\n there may be multiple possible posInto solutions.  That is, if the\n same outer sequence position is covered by two different contiguous\n blocks of the location, then it would have two possible sequence\n positions relative to the location. In this case, the position\n 5'-most in the location orientation is returned.\n\u003c/p\u003e",
          "module": "Bio.Location.Location",
          "name": "posInto",
          "package": "bio",
          "signature": "Pos -\u003e Loc -\u003e Maybe Pos",
          "source": "src/Bio-Location-Location.html#posInto",
          "type": "function"
        },
        "index": {
          "description": "Given sequence position and sequence location relative to the same sequence compute new position representing the original position relative to the subsequence defined by the location If the sequence position lies outside of the sequence location Nothing is returned thus the offset of the new position will always be in the range length cloc When the sequence positions in the location are not monotonic there may be multiple possible posInto solutions That is if the same outer sequence position is covered by two different contiguous blocks of the location then it would have two possible sequence positions relative to the location In this case the position most in the location orientation is returned",
          "hierarchy": "Bio Location Location",
          "module": "Bio.Location.Location",
          "name": "posInto",
          "normalized": "Pos-\u003eLoc-\u003eMaybe Pos",
          "package": "bio",
          "partial": "Into",
          "signature": "Pos-\u003eLoc-\u003eMaybe Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Location.html#v:posInto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a sequence location and a sequence position within that\n location, compute a new position representing the original position\n relative to the outer sequence.  If the sequence position lies\n outside the location, \u003ccode\u003eNothing\u003c/code\u003e is returned.  \n\u003c/p\u003e\u003cp\u003eThis function inverts \u003ccode\u003e\u003ca\u003eposInto\u003c/a\u003e\u003c/code\u003e when the sequence position lies\n within the position is actually within the location.  Due to the\n possibility of redundant location-relative positions for a given\n absolute position, \u003ccode\u003e\u003ca\u003eposInto\u003c/a\u003e\u003c/code\u003e does not necessary invert \u003ccode\u003e\u003ca\u003eposOutof\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Bio.Location.Location",
          "name": "posOutof",
          "package": "bio",
          "signature": "Pos -\u003e Loc -\u003e Maybe Pos",
          "source": "src/Bio-Location-Location.html#posOutof",
          "type": "function"
        },
        "index": {
          "description": "Given sequence location and sequence position within that location compute new position representing the original position relative to the outer sequence If the sequence position lies outside the location Nothing is returned This function inverts posInto when the sequence position lies within the position is actually within the location Due to the possibility of redundant location-relative positions for given absolute position posInto does not necessary invert posOutof",
          "hierarchy": "Bio Location Location",
          "module": "Bio.Location.Location",
          "name": "posOutof",
          "normalized": "Pos-\u003eLoc-\u003eMaybe Pos",
          "package": "bio",
          "partial": "Outof",
          "signature": "Pos-\u003eLoc-\u003eMaybe Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Location.html#v:posOutof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the nucleotide \u003ccode\u003e\u003ca\u003eSeqData\u003c/a\u003e\u003c/code\u003e for the sequence location.  If\n any part of the location lies outside the bounds of the sequence,\n an error results.\n\u003c/p\u003e",
          "module": "Bio.Location.Location",
          "name": "seqData",
          "package": "bio",
          "signature": "SeqData -\u003e Loc -\u003e m SeqData",
          "source": "src/Bio-Location-Location.html#seqData",
          "type": "function"
        },
        "index": {
          "description": "Extract the nucleotide SeqData for the sequence location If any part of the location lies outside the bounds of the sequence an error results",
          "hierarchy": "Bio Location Location",
          "module": "Bio.Location.Location",
          "name": "seqData",
          "normalized": "SeqData-\u003eLoc-\u003ea SeqData",
          "package": "bio",
          "partial": "Data",
          "signature": "SeqData-\u003eLoc-\u003em SeqData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Location.html#v:seqData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eseqData\u003c/a\u003e\u003c/code\u003e, extract the nucleotide subsequence for the\n location.  Any positions in the location lying outside the bounds\n of the sequence are returned as \u003ccode\u003eN\u003c/code\u003e rather than producing an error.\n\u003c/p\u003e",
          "module": "Bio.Location.Location",
          "name": "seqDataPadded",
          "package": "bio",
          "signature": "SeqData -\u003e Loc -\u003e SeqData",
          "source": "src/Bio-Location-Location.html#seqDataPadded",
          "type": "function"
        },
        "index": {
          "description": "As seqData extract the nucleotide subsequence for the location Any positions in the location lying outside the bounds of the sequence are returned as rather than producing an error",
          "hierarchy": "Bio Location Location",
          "module": "Bio.Location.Location",
          "name": "seqDataPadded",
          "normalized": "SeqData-\u003eLoc-\u003eSeqData",
          "package": "bio",
          "partial": "Data Padded",
          "signature": "SeqData-\u003eLoc-\u003eSeqData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Location.html#v:seqDataPadded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence position of the start of the location.  This is the 5'\n end on the location strand, which will have a higher offset than\n \u003ccode\u003e\u003ca\u003eendPos\u003c/a\u003e\u003c/code\u003e if the location is on the \u003ccode\u003e\u003ca\u003eRevCompl\u003c/a\u003e\u003c/code\u003e strand.\n\u003c/p\u003e",
          "module": "Bio.Location.Location",
          "name": "startPos",
          "package": "bio",
          "signature": "Loc -\u003e Pos",
          "source": "src/Bio-Location-Location.html#startPos",
          "type": "function"
        },
        "index": {
          "description": "Sequence position of the start of the location This is the end on the location strand which will have higher offset than endPos if the location is on the RevCompl strand",
          "hierarchy": "Bio Location Location",
          "module": "Bio.Location.Location",
          "name": "startPos",
          "normalized": "Loc-\u003ePos",
          "package": "bio",
          "partial": "Pos",
          "signature": "Loc-\u003ePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Location.html#v:startPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData types for functorially lifting sequence positions and\nlocations onto named sequences.  These are useful for taking functions\nthat work with sequence positions and locations and associating them\nspecific, named sequences.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Location.OnSeq",
          "name": "OnSeq",
          "package": "bio",
          "source": "src/Bio-Location-OnSeq.html",
          "type": "module"
        },
        "index": {
          "description": "Data types for functorially lifting sequence positions and locations onto named sequences These are useful for taking functions that work with sequence positions and locations and associating them specific named sequences",
          "hierarchy": "Bio Location OnSeq",
          "module": "Bio.Location.OnSeq",
          "name": "OnSeq",
          "package": "bio",
          "partial": "On Seq",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-OnSeq.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for an object associated with a specific, named sequence\n\u003c/p\u003e",
          "module": "Bio.Location.OnSeq",
          "name": "OnSeq",
          "package": "bio",
          "source": "src/Bio-Location-OnSeq.html#OnSeq",
          "type": "data"
        },
        "index": {
          "description": "Data type for an object associated with specific named sequence",
          "hierarchy": "Bio Location OnSeq",
          "module": "Bio.Location.OnSeq",
          "name": "OnSeq",
          "package": "bio",
          "partial": "On Seq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-OnSeq.html#t:OnSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for a collection of objects indexed by sequence name\n\u003c/p\u003e",
          "module": "Bio.Location.OnSeq",
          "name": "OnSeqs",
          "package": "bio",
          "source": "src/Bio-Location-OnSeq.html#OnSeqs",
          "type": "type"
        },
        "index": {
          "description": "Data type for collection of objects indexed by sequence name",
          "hierarchy": "Bio Location OnSeq",
          "module": "Bio.Location.OnSeq",
          "name": "OnSeqs",
          "package": "bio",
          "partial": "On Seqs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-OnSeq.html#t:OnSeqs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence name, as in a \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Bio.Location.OnSeq",
          "name": "SeqName",
          "package": "bio",
          "source": "src/Bio-Location-OnSeq.html#SeqName",
          "type": "type"
        },
        "index": {
          "description": "Sequence name as in Sequence",
          "hierarchy": "Bio Location OnSeq",
          "module": "Bio.Location.OnSeq",
          "name": "SeqName",
          "package": "bio",
          "partial": "Seq Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-OnSeq.html#t:SeqName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Location.OnSeq",
          "name": "OnSeq",
          "package": "bio",
          "signature": "OnSeq",
          "source": "src/Bio-Location-OnSeq.html#OnSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Location OnSeq",
          "module": "Bio.Location.OnSeq",
          "name": "OnSeq",
          "package": "bio",
          "partial": "On Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-OnSeq.html#v:OnSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests a predicate when two objects are on the same sequence,\n returning \u003ccode\u003eFalse\u003c/code\u003e if they are on different sequences.\n\u003c/p\u003e",
          "module": "Bio.Location.OnSeq",
          "name": "andSameSeq",
          "package": "bio",
          "signature": "(a -\u003e b -\u003e Bool) -\u003e OnSeq a -\u003e OnSeq b -\u003e Bool",
          "source": "src/Bio-Location-OnSeq.html#andSameSeq",
          "type": "function"
        },
        "index": {
          "description": "Tests predicate when two objects are on the same sequence returning False if they are on different sequences",
          "hierarchy": "Bio Location OnSeq",
          "module": "Bio.Location.OnSeq",
          "name": "andSameSeq",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eOnSeq a-\u003eOnSeq b-\u003eBool",
          "package": "bio",
          "partial": "Same Seq",
          "signature": "(a-\u003eb-\u003eBool)-\u003eOnSeq a-\u003eOnSeq b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-OnSeq.html#v:andSameSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms an action when two objects are on the same sequence and\n produces an error otherwise.\n\u003c/p\u003e",
          "module": "Bio.Location.OnSeq",
          "name": "onSameSeq",
          "package": "bio",
          "signature": "(a -\u003e b -\u003e m c) -\u003e OnSeq a -\u003e OnSeq b -\u003e m c",
          "source": "src/Bio-Location-OnSeq.html#onSameSeq",
          "type": "function"
        },
        "index": {
          "description": "Performs an action when two objects are on the same sequence and produces an error otherwise",
          "hierarchy": "Bio Location OnSeq",
          "module": "Bio.Location.OnSeq",
          "name": "onSameSeq",
          "normalized": "(a-\u003eb-\u003ec d)-\u003eOnSeq a-\u003eOnSeq b-\u003ec d",
          "package": "bio",
          "partial": "Same Seq",
          "signature": "(a-\u003eb-\u003em c)-\u003eOnSeq a-\u003eOnSeq b-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-OnSeq.html#v:onSameSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Location.OnSeq",
          "name": "onSeqName",
          "package": "bio",
          "signature": "SeqName",
          "source": "src/Bio-Location-OnSeq.html#OnSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Location OnSeq",
          "module": "Bio.Location.OnSeq",
          "name": "onSeqName",
          "package": "bio",
          "partial": "Seq Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-OnSeq.html#v:onSeqName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Location.OnSeq",
          "name": "onSeqObj",
          "package": "bio",
          "signature": "a",
          "source": "src/Bio-Location-OnSeq.html#OnSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Location OnSeq",
          "module": "Bio.Location.OnSeq",
          "name": "onSeqObj",
          "package": "bio",
          "partial": "Seq Obj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-OnSeq.html#v:onSeqObj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifts a function on an underlying object to look up the sequence\n name in a name-indexed collection.\n\u003c/p\u003e",
          "module": "Bio.Location.OnSeq",
          "name": "perSeq",
          "package": "bio",
          "signature": "(a -\u003e b -\u003e c) -\u003e OnSeq a -\u003e OnSeqs b -\u003e c",
          "source": "src/Bio-Location-OnSeq.html#perSeq",
          "type": "function"
        },
        "index": {
          "description": "Lifts function on an underlying object to look up the sequence name in name-indexed collection",
          "hierarchy": "Bio Location OnSeq",
          "module": "Bio.Location.OnSeq",
          "name": "perSeq",
          "normalized": "(a-\u003eb-\u003ec)-\u003eOnSeq a-\u003eOnSeqs b-\u003ec",
          "package": "bio",
          "partial": "Seq",
          "signature": "(a-\u003eb-\u003ec)-\u003eOnSeq a-\u003eOnSeqs b-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-OnSeq.html#v:perSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifts a function that updates an underlying object to look up the\n named sequence and update a named-index collection.\n\u003c/p\u003e",
          "module": "Bio.Location.OnSeq",
          "name": "perSeqUpdate",
          "package": "bio",
          "signature": "(a -\u003e b -\u003e b) -\u003e OnSeq a -\u003e OnSeqs b -\u003e OnSeqs b",
          "source": "src/Bio-Location-OnSeq.html#perSeqUpdate",
          "type": "function"
        },
        "index": {
          "description": "Lifts function that updates an underlying object to look up the named sequence and update named-index collection",
          "hierarchy": "Bio Location OnSeq",
          "module": "Bio.Location.OnSeq",
          "name": "perSeqUpdate",
          "normalized": "(a-\u003eb-\u003eb)-\u003eOnSeq a-\u003eOnSeqs b-\u003eOnSeqs b",
          "package": "bio",
          "partial": "Seq Update",
          "signature": "(a-\u003eb-\u003eb)-\u003eOnSeq a-\u003eOnSeqs b-\u003eOnSeqs b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-OnSeq.html#v:perSeqUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifts a function on underlying objects to look up a sequence in a\n name-indexed collection\n\u003c/p\u003e",
          "module": "Bio.Location.OnSeq",
          "name": "withNameAndSeq",
          "package": "bio",
          "signature": "(SeqName -\u003e a -\u003e b -\u003e m c) -\u003e OnSeq a -\u003e OnSeqs b -\u003e m c",
          "source": "src/Bio-Location-OnSeq.html#withNameAndSeq",
          "type": "function"
        },
        "index": {
          "description": "Lifts function on underlying objects to look up sequence in name-indexed collection",
          "hierarchy": "Bio Location OnSeq",
          "module": "Bio.Location.OnSeq",
          "name": "withNameAndSeq",
          "normalized": "(SeqName-\u003ea-\u003eb-\u003ec d)-\u003eOnSeq a-\u003eOnSeqs b-\u003ec d",
          "package": "bio",
          "partial": "Name And Seq",
          "signature": "(SeqName-\u003ea-\u003eb-\u003em c)-\u003eOnSeq a-\u003eOnSeqs b-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-OnSeq.html#v:withNameAndSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLooks up a sequence by name and applies a function to it\n\u003c/p\u003e",
          "module": "Bio.Location.OnSeq",
          "name": "withSeqData",
          "package": "bio",
          "signature": "(SeqData -\u003e a -\u003e m b)-\u003e (SeqName -\u003e m SeqData)-\u003e OnSeq a-\u003e m b",
          "type": "function"
        },
        "index": {
          "description": "Looks up sequence by name and applies function to it",
          "hierarchy": "Bio Location OnSeq",
          "module": "Bio.Location.OnSeq",
          "name": "withSeqData",
          "normalized": "(SeqData-\u003ea-\u003eb c)-\u003e(SeqName-\u003eb SeqData)-\u003eOnSeq a-\u003eb c",
          "package": "bio",
          "partial": "Seq Data",
          "signature": "(SeqData-\u003ea-\u003em b)-\u003e(SeqName-\u003em SeqData)-\u003eOnSeq a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-OnSeq.html#v:withSeqData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData type for a sequence position.\n\u003c/p\u003e\u003cp\u003eZero-based \u003ccode\u003e\u003ca\u003eOffset\u003c/a\u003e\u003c/code\u003e / \u003ccode\u003eInt64\u003c/code\u003e indices are used throughout, to\nfacilitate direct use of indexing functions on \u003ccode\u003e\u003ca\u003eSeqData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Location.Position",
          "name": "Position",
          "package": "bio",
          "source": "src/Bio-Location-Position.html",
          "type": "module"
        },
        "index": {
          "description": "Data type for sequence position Zero-based Offset Int64 indices are used throughout to facilitate direct use of indexing functions on SeqData",
          "hierarchy": "Bio Location Position",
          "module": "Bio.Location.Position",
          "name": "Position",
          "package": "bio",
          "partial": "Position",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Position.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePosition in a sequence\n\u003c/p\u003e",
          "module": "Bio.Location.Position",
          "name": "Pos",
          "package": "bio",
          "source": "src/Bio-Location-Position.html#Pos",
          "type": "data"
        },
        "index": {
          "description": "Position in sequence",
          "hierarchy": "Bio Location Position",
          "module": "Bio.Location.Position",
          "name": "Pos",
          "package": "bio",
          "partial": "Pos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Position.html#t:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Location.Position",
          "name": "Pos",
          "package": "bio",
          "signature": "Pos",
          "source": "src/Bio-Location-Position.html#Pos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Location Position",
          "module": "Bio.Location.Position",
          "name": "Pos",
          "package": "bio",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Position.html#v:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a human-friendly, zero-based representation of a sequence position.\n\u003c/p\u003e",
          "module": "Bio.Location.Position",
          "name": "display",
          "package": "bio",
          "signature": "Pos -\u003e String",
          "source": "src/Bio-Location-Position.html#display",
          "type": "function"
        },
        "index": {
          "description": "Display human-friendly zero-based representation of sequence position",
          "hierarchy": "Bio Location Position",
          "module": "Bio.Location.Position",
          "name": "display",
          "normalized": "Pos-\u003eString",
          "package": "bio",
          "signature": "Pos-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Position.html#v:display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e0-based index of the position\n\u003c/p\u003e",
          "module": "Bio.Location.Position",
          "name": "offset",
          "package": "bio",
          "signature": "Offset",
          "source": "src/Bio-Location-Position.html#Pos",
          "type": "function"
        },
        "index": {
          "description": "based index of the position",
          "hierarchy": "Bio Location Position",
          "module": "Bio.Location.Position",
          "name": "offset",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Position.html#v:offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the nucleotide at a specific sequence position.  If the\n position lies outside the bounds of the sequence, an error results.\n\u003c/p\u003e",
          "module": "Bio.Location.Position",
          "name": "seqNt",
          "package": "bio",
          "signature": "SeqData -\u003e Pos -\u003e m Char",
          "source": "src/Bio-Location-Position.html#seqNt",
          "type": "function"
        },
        "index": {
          "description": "Extract the nucleotide at specific sequence position If the position lies outside the bounds of the sequence an error results",
          "hierarchy": "Bio Location Position",
          "module": "Bio.Location.Position",
          "name": "seqNt",
          "normalized": "SeqData-\u003ePos-\u003ea Char",
          "package": "bio",
          "partial": "Nt",
          "signature": "SeqData-\u003ePos-\u003em Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Position.html#v:seqNt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eseqNt\u003c/a\u003e\u003c/code\u003e, extract the nucleotide at a specific sequence\n position, but return \u003ccode\u003eN\u003c/code\u003e when the position lies outside the\n bounds of the sequence.\n\u003c/p\u003e\u003cpre\u003e seqNtPadded sequ pos == (either 'N' id . seqNt sequ) pos\n\u003c/pre\u003e",
          "module": "Bio.Location.Position",
          "name": "seqNtPadded",
          "package": "bio",
          "signature": "SeqData -\u003e Pos -\u003e Char",
          "source": "src/Bio-Location-Position.html#seqNtPadded",
          "type": "function"
        },
        "index": {
          "description": "As seqNt extract the nucleotide at specific sequence position but return when the position lies outside the bounds of the sequence seqNtPadded sequ pos either id seqNt sequ pos",
          "hierarchy": "Bio Location Position",
          "module": "Bio.Location.Position",
          "name": "seqNtPadded",
          "normalized": "SeqData-\u003ePos-\u003eChar",
          "package": "bio",
          "partial": "Nt Padded",
          "signature": "SeqData-\u003ePos-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Position.html#v:seqNtPadded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a position resulting from sliding the original position\n along the sequence by a specified offset.  A positive offset will\n move the position away from the 5' end of the forward stand of the\n sequence regardless of the strand of the position itself.  Thus,\n\u003c/p\u003e\u003cpre\u003e slide (revCompl pos) off == revCompl (slide pos off)\n\u003c/pre\u003e",
          "module": "Bio.Location.Position",
          "name": "slide",
          "package": "bio",
          "signature": "Pos -\u003e Offset -\u003e Pos",
          "source": "src/Bio-Location-Position.html#slide",
          "type": "function"
        },
        "index": {
          "description": "Returns position resulting from sliding the original position along the sequence by specified offset positive offset will move the position away from the end of the forward stand of the sequence regardless of the strand of the position itself Thus slide revCompl pos off revCompl slide pos off",
          "hierarchy": "Bio Location Position",
          "module": "Bio.Location.Position",
          "name": "slide",
          "normalized": "Pos-\u003eOffset-\u003ePos",
          "package": "bio",
          "signature": "Pos-\u003eOffset-\u003ePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Position.html#v:slide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrand of the position\n\u003c/p\u003e",
          "module": "Bio.Location.Position",
          "name": "strand",
          "package": "bio",
          "signature": "Strand",
          "source": "src/Bio-Location-Position.html#Pos",
          "type": "function"
        },
        "index": {
          "description": "Strand of the position",
          "hierarchy": "Bio Location Position",
          "module": "Bio.Location.Position",
          "name": "strand",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Position.html#v:strand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficient lookup of query positions in a collection of target sequence\nlocations where positions and locations are associated with specific\nsequence names.  This is an extension of \u003ccode\u003eLocMap\u003c/code\u003e to use locations and\npositions on named sequences as in \u003ccode\u003eSeqLocation\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Location.SeqLocMap",
          "name": "SeqLocMap",
          "package": "bio",
          "source": "src/Bio-Location-SeqLocMap.html",
          "type": "module"
        },
        "index": {
          "description": "Efficient lookup of query positions in collection of target sequence locations where positions and locations are associated with specific sequence names This is an extension of LocMap to use locations and positions on named sequences as in SeqLocation",
          "hierarchy": "Bio Location SeqLocMap",
          "module": "Bio.Location.SeqLocMap",
          "name": "SeqLocMap",
          "package": "bio",
          "partial": "Seq Loc Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-SeqLocMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure for efficiently finding target sequence\n locations (\u003ccode\u003e\u003ca\u003eLoc\u003c/a\u003e\u003c/code\u003e) that overlap query positions or locations.\n Each target location can be associated with an arbitrary additional\n value in the lookup map.\n\u003c/p\u003e",
          "module": "Bio.Location.SeqLocMap",
          "name": "SeqLocMap",
          "package": "bio",
          "source": "src/Bio-Location-SeqLocMap.html#SeqLocMap",
          "type": "type"
        },
        "index": {
          "description": "data structure for efficiently finding target sequence locations Loc that overlap query positions or locations Each target location can be associated with an arbitrary additional value in the lookup map",
          "hierarchy": "Bio Location SeqLocMap",
          "module": "Bio.Location.SeqLocMap",
          "name": "SeqLocMap",
          "package": "bio",
          "partial": "Seq Loc Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-SeqLocMap.html#t:SeqLocMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty lookup map.\n\u003c/p\u003e",
          "module": "Bio.Location.SeqLocMap",
          "name": "empty",
          "package": "bio",
          "signature": "SeqLocMap a",
          "source": "src/Bio-Location-SeqLocMap.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Empty lookup map",
          "hierarchy": "Bio Location SeqLocMap",
          "module": "Bio.Location.SeqLocMap",
          "name": "empty",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-SeqLocMap.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eSeqLocMap\u003c/a\u003e\u003c/code\u003e from a list of target locations and their\n associated objects\n\u003c/p\u003e",
          "module": "Bio.Location.SeqLocMap",
          "name": "fromList",
          "package": "bio",
          "signature": "[(SeqLoc, a)] -\u003e SeqLocMap a",
          "source": "src/Bio-Location-SeqLocMap.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Creates SeqLocMap from list of target locations and their associated objects",
          "hierarchy": "Bio Location SeqLocMap",
          "module": "Bio.Location.SeqLocMap",
          "name": "fromList",
          "normalized": "[(SeqLoc,a)]-\u003eSeqLocMap a",
          "package": "bio",
          "partial": "List",
          "signature": "[(SeqLoc,a)]-\u003eSeqLocMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-SeqLocMap.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts a new target location and associated object into the\n location lookup map.\n\u003c/p\u003e",
          "module": "Bio.Location.SeqLocMap",
          "name": "insert",
          "package": "bio",
          "signature": "SeqLoc -\u003e a -\u003e SeqLocMap a -\u003e SeqLocMap a",
          "source": "src/Bio-Location-SeqLocMap.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Inserts new target location and associated object into the location lookup map",
          "hierarchy": "Bio Location SeqLocMap",
          "module": "Bio.Location.SeqLocMap",
          "name": "insert",
          "normalized": "SeqLoc-\u003ea-\u003eSeqLocMap a-\u003eSeqLocMap a",
          "package": "bio",
          "signature": "SeqLoc-\u003ea-\u003eSeqLocMap a-\u003eSeqLocMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-SeqLocMap.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the (possibly empty) list of target locations and associated\n objects that overlap a sequence location, in the sense of\n \u003ccode\u003e\u003ca\u003eoverlaps\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Bio.Location.SeqLocMap",
          "name": "lookupOverlaps",
          "package": "bio",
          "signature": "SeqLoc -\u003e SeqLocMap a -\u003e [(SeqLoc, a)]",
          "source": "src/Bio-Location-SeqLocMap.html#lookupOverlaps",
          "type": "function"
        },
        "index": {
          "description": "Find the possibly empty list of target locations and associated objects that overlap sequence location in the sense of overlaps",
          "hierarchy": "Bio Location SeqLocMap",
          "module": "Bio.Location.SeqLocMap",
          "name": "lookupOverlaps",
          "normalized": "SeqLoc-\u003eSeqLocMap a-\u003e[(SeqLoc,a)]",
          "package": "bio",
          "partial": "Overlaps",
          "signature": "SeqLoc-\u003eSeqLocMap a-\u003e[(SeqLoc,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-SeqLocMap.html#v:lookupOverlaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the (possibly empty) list of target locations and associated\n objects that contain a sequence position, in the sense of\n \u003ccode\u003e\u003ca\u003eisWithin\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Bio.Location.SeqLocMap",
          "name": "lookupWithin",
          "package": "bio",
          "signature": "SeqPos -\u003e SeqLocMap a -\u003e [(SeqLoc, a)]",
          "source": "src/Bio-Location-SeqLocMap.html#lookupWithin",
          "type": "function"
        },
        "index": {
          "description": "Find the possibly empty list of target locations and associated objects that contain sequence position in the sense of isWithin",
          "hierarchy": "Bio Location SeqLocMap",
          "module": "Bio.Location.SeqLocMap",
          "name": "lookupWithin",
          "normalized": "SeqPos-\u003eSeqLocMap a-\u003e[(SeqLoc,a)]",
          "package": "bio",
          "partial": "Within",
          "signature": "SeqPos-\u003eSeqLocMap a-\u003e[(SeqLoc,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-SeqLocMap.html#v:lookupWithin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData types for sequence locations and sequence positions associated\nwith specific, named sequences.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Location.SeqLocation",
          "name": "SeqLocation",
          "package": "bio",
          "source": "src/Bio-Location-SeqLocation.html",
          "type": "module"
        },
        "index": {
          "description": "Data types for sequence locations and sequence positions associated with specific named sequences",
          "hierarchy": "Bio Location SeqLocation",
          "module": "Bio.Location.SeqLocation",
          "name": "SeqLocation",
          "package": "bio",
          "partial": "Seq Location",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-SeqLocation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA location consisting of a contiguous span of positions on a\n named sequence.\n\u003c/p\u003e",
          "module": "Bio.Location.SeqLocation",
          "name": "ContigSeqLoc",
          "package": "bio",
          "source": "src/Bio-Location-SeqLocation.html#ContigSeqLoc",
          "type": "type"
        },
        "index": {
          "description": "location consisting of contiguous span of positions on named sequence",
          "hierarchy": "Bio Location SeqLocation",
          "module": "Bio.Location.SeqLocation",
          "name": "ContigSeqLoc",
          "package": "bio",
          "partial": "Contig Seq Loc",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-SeqLocation.html#t:ContigSeqLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA general location, consisting of spans of sequence positions on\n a specific, named sequence.\n\u003c/p\u003e",
          "module": "Bio.Location.SeqLocation",
          "name": "SeqLoc",
          "package": "bio",
          "source": "src/Bio-Location-SeqLocation.html#SeqLoc",
          "type": "type"
        },
        "index": {
          "description": "general location consisting of spans of sequence positions on specific named sequence",
          "hierarchy": "Bio Location SeqLocation",
          "module": "Bio.Location.SeqLocation",
          "name": "SeqLoc",
          "package": "bio",
          "partial": "Seq Loc",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-SeqLocation.html#t:SeqLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA position on a named sequence\n\u003c/p\u003e",
          "module": "Bio.Location.SeqLocation",
          "name": "SeqPos",
          "package": "bio",
          "source": "src/Bio-Location-SeqLocation.html#SeqPos",
          "type": "type"
        },
        "index": {
          "description": "position on named sequence",
          "hierarchy": "Bio Location SeqLocation",
          "module": "Bio.Location.SeqLocation",
          "name": "SeqPos",
          "package": "bio",
          "partial": "Seq Pos",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-SeqLocation.html#t:SeqPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a human-friendly representation of a \u003ccode\u003e\u003ca\u003eSeqLoc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Bio.Location.SeqLocation",
          "name": "display",
          "package": "bio",
          "signature": "SeqLoc -\u003e String",
          "source": "src/Bio-Location-SeqLocation.html#display",
          "type": "function"
        },
        "index": {
          "description": "Display human-friendly representation of SeqLoc",
          "hierarchy": "Bio Location SeqLocation",
          "module": "Bio.Location.SeqLocation",
          "name": "display",
          "normalized": "SeqLoc-\u003eString",
          "package": "bio",
          "signature": "SeqLoc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-SeqLocation.html#v:display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a human-friendly representation of a \u003ccode\u003e\u003ca\u003eContigSeqLoc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Bio.Location.SeqLocation",
          "name": "displayContigSeqLoc",
          "package": "bio",
          "signature": "ContigSeqLoc -\u003e String",
          "source": "src/Bio-Location-SeqLocation.html#displayContigSeqLoc",
          "type": "function"
        },
        "index": {
          "description": "Display human-friendly representation of ContigSeqLoc",
          "hierarchy": "Bio Location SeqLocation",
          "module": "Bio.Location.SeqLocation",
          "name": "displayContigSeqLoc",
          "normalized": "ContigSeqLoc-\u003eString",
          "package": "bio",
          "partial": "Contig Seq Loc",
          "signature": "ContigSeqLoc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-SeqLocation.html#v:displayContigSeqLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a human-friendly representation of a \u003ccode\u003e\u003ca\u003eSeqPos\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Bio.Location.SeqLocation",
          "name": "displaySeqPos",
          "package": "bio",
          "signature": "SeqPos -\u003e String",
          "source": "src/Bio-Location-SeqLocation.html#displaySeqPos",
          "type": "function"
        },
        "index": {
          "description": "Display human-friendly representation of SeqPos",
          "hierarchy": "Bio Location SeqLocation",
          "module": "Bio.Location.SeqLocation",
          "name": "displaySeqPos",
          "normalized": "SeqPos-\u003eString",
          "package": "bio",
          "partial": "Seq Pos",
          "signature": "SeqPos-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-SeqLocation.html#v:displaySeqPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether a sequence position lies within a sequence location.\n This requires that the position lie within the location as per\n \u003ccode\u003e\u003ca\u003eisWithin\u003c/a\u003e\u003c/code\u003e and have the same sequence name.\n\u003c/p\u003e",
          "module": "Bio.Location.SeqLocation",
          "name": "isWithin",
          "package": "bio",
          "signature": "SeqPos -\u003e SeqLoc -\u003e Bool",
          "source": "src/Bio-Location-SeqLocation.html#isWithin",
          "type": "function"
        },
        "index": {
          "description": "Test whether sequence position lies within sequence location This requires that the position lie within the location as per isWithin and have the same sequence name",
          "hierarchy": "Bio Location SeqLocation",
          "module": "Bio.Location.SeqLocation",
          "name": "isWithin",
          "normalized": "SeqPos-\u003eSeqLoc-\u003eBool",
          "package": "bio",
          "partial": "Within",
          "signature": "SeqPos-\u003eSeqLoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-SeqLocation.html#v:isWithin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether two sequence locations overlap in any position.\n This requires that the locations overlap as per \u003ccode\u003e\u003ca\u003eoverlaps\u003c/a\u003e\u003c/code\u003e and\n have the same sequence name.\n\u003c/p\u003e",
          "module": "Bio.Location.SeqLocation",
          "name": "overlaps",
          "package": "bio",
          "signature": "SeqLoc -\u003e SeqLoc -\u003e Bool",
          "source": "src/Bio-Location-SeqLocation.html#overlaps",
          "type": "function"
        },
        "index": {
          "description": "Test whether two sequence locations overlap in any position This requires that the locations overlap as per overlaps and have the same sequence name",
          "hierarchy": "Bio Location SeqLocation",
          "module": "Bio.Location.SeqLocation",
          "name": "overlaps",
          "normalized": "SeqLoc-\u003eSeqLoc-\u003eBool",
          "package": "bio",
          "signature": "SeqLoc-\u003eSeqLoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-SeqLocation.html#v:overlaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the subsequence specified by a sequence location from a\n sequence database.  The sequence name is used to retrieve the full\n sequence and the subsequence is extracted as by \u003ccode\u003e\u003ca\u003eseqData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Bio.Location.SeqLocation",
          "name": "seqData",
          "package": "bio",
          "signature": "(SeqName -\u003e m SeqData) -\u003e SeqLoc -\u003e m SeqData",
          "source": "src/Bio-Location-SeqLocation.html#seqData",
          "type": "function"
        },
        "index": {
          "description": "Extract the subsequence specified by sequence location from sequence database The sequence name is used to retrieve the full sequence and the subsequence is extracted as by seqData",
          "hierarchy": "Bio Location SeqLocation",
          "module": "Bio.Location.SeqLocation",
          "name": "seqData",
          "normalized": "(SeqName-\u003ea SeqData)-\u003eSeqLoc-\u003ea SeqData",
          "package": "bio",
          "partial": "Data",
          "signature": "(SeqName-\u003em SeqData)-\u003eSeqLoc-\u003em SeqData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-SeqLocation.html#v:seqData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether a sequence position lies within a sequence location.\n This requires that the position lie within the location as per\n \u003ccode\u003e\u003ca\u003eisWithin\u003c/a\u003e\u003c/code\u003e and have the same sequence name.\n\u003c/p\u003e",
          "module": "Bio.Location.SeqLocation",
          "name": "withinContigSeqLoc",
          "package": "bio",
          "signature": "SeqPos -\u003e ContigSeqLoc -\u003e Bool",
          "source": "src/Bio-Location-SeqLocation.html#withinContigSeqLoc",
          "type": "function"
        },
        "index": {
          "description": "Test whether sequence position lies within sequence location This requires that the position lie within the location as per isWithin and have the same sequence name",
          "hierarchy": "Bio Location SeqLocation",
          "module": "Bio.Location.SeqLocation",
          "name": "withinContigSeqLoc",
          "normalized": "SeqPos-\u003eContigSeqLoc-\u003eBool",
          "package": "bio",
          "partial": "Contig Seq Loc",
          "signature": "SeqPos-\u003eContigSeqLoc-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-SeqLocation.html#v:withinContigSeqLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for manipulating nucleotide sequences and locations on\nnucleotide sequences that occur on a forward or a reverse-complement\nstrand.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Location.Strand",
          "name": "Strand",
          "package": "bio",
          "source": "src/Bio-Location-Strand.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for manipulating nucleotide sequences and locations on nucleotide sequences that occur on forward or reverse-complement strand",
          "hierarchy": "Bio Location Strand",
          "module": "Bio.Location.Strand",
          "name": "Strand",
          "package": "bio",
          "partial": "Strand",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Strand.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence strand\n\u003c/p\u003e",
          "module": "Bio.Location.Strand",
          "name": "Strand",
          "package": "bio",
          "source": "src/Bio-Location-Strand.html#Strand",
          "type": "data"
        },
        "index": {
          "description": "Sequence strand",
          "hierarchy": "Bio Location Strand",
          "module": "Bio.Location.Strand",
          "name": "Strand",
          "package": "bio",
          "partial": "Strand",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Strand.html#t:Strand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA nucleotide sequence or location on a nucleotide sequence that\n   lies on a specific strand and has an orientation.\n\u003c/p\u003e",
          "module": "Bio.Location.Strand",
          "name": "Stranded",
          "package": "bio",
          "source": "src/Bio-Location-Strand.html#Stranded",
          "type": "class"
        },
        "index": {
          "description": "nucleotide sequence or location on nucleotide sequence that lies on specific strand and has an orientation",
          "hierarchy": "Bio Location Strand",
          "module": "Bio.Location.Strand",
          "name": "Stranded",
          "package": "bio",
          "partial": "Stranded",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Strand.html#t:Stranded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Location.Strand",
          "name": "Fwd",
          "package": "bio",
          "signature": "Fwd",
          "source": "src/Bio-Location-Strand.html#Strand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Location Strand",
          "module": "Bio.Location.Strand",
          "name": "Fwd",
          "package": "bio",
          "partial": "Fwd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Strand.html#v:Fwd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Location.Strand",
          "name": "RevCompl",
          "package": "bio",
          "signature": "RevCompl",
          "source": "src/Bio-Location-Strand.html#Strand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Location Strand",
          "module": "Bio.Location.Strand",
          "name": "RevCompl",
          "package": "bio",
          "partial": "Rev Compl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Strand.html#v:RevCompl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Location.Strand",
          "name": "revCompl",
          "package": "bio",
          "signature": "s -\u003e s",
          "source": "src/Bio-Location-Strand.html#revCompl",
          "type": "method"
        },
        "index": {
          "hierarchy": "Bio Location Strand",
          "module": "Bio.Location.Strand",
          "name": "revCompl",
          "normalized": "a-\u003ea",
          "package": "bio",
          "partial": "Compl",
          "signature": "s-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Strand.html#v:revCompl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the orientation of a \u003ccode\u003e\u003ca\u003eStranded\u003c/a\u003e\u003c/code\u003e thing based on a\n   specified \u003ccode\u003e\u003ca\u003eStrand\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Bio.Location.Strand",
          "name": "stranded",
          "package": "bio",
          "signature": "Strand -\u003e s -\u003e s",
          "source": "src/Bio-Location-Strand.html#stranded",
          "type": "function"
        },
        "index": {
          "description": "Convert the orientation of Stranded thing based on specified Strand",
          "hierarchy": "Bio Location Strand",
          "module": "Bio.Location.Strand",
          "name": "stranded",
          "normalized": "Strand-\u003ea-\u003ea",
          "package": "bio",
          "signature": "Strand-\u003es-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Location-Strand.html#v:stranded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEncodes a table of amino acid properties. \n    Based on Livingstone & Barton, CABIOS, 9, 745-756, 1993, as seen at:\n    http:\u003cem/\u003ewww.compbio.dundee.ac.uk\u003cem\u003euser\u003c/em\u003ews-dev1\u003cem\u003ejalview\u003c/em\u003elatest\u003cem\u003ehelp\u003c/em\u003ehtml\u003cem\u003emisc\u003c/em\u003eaaproperties.html\n   NB: based on the graphic, not the table (in which P is polar, but T is not)\n|\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Sequence.AminoProperties",
          "name": "AminoProperties",
          "package": "bio",
          "source": "src/Bio-Sequence-AminoProperties.html",
          "type": "module"
        },
        "index": {
          "description": "Encodes table of amino acid properties Based on Livingstone Barton CABIOS as seen at http www.compbio.dundee.ac.uk user ws-dev1 jalview latest help html misc aaproperties.html NB based on the graphic not the table in which is polar but is not",
          "hierarchy": "Bio Sequence AminoProperties",
          "module": "Bio.Sequence.AminoProperties",
          "name": "AminoProperties",
          "package": "bio",
          "partial": "Amino Properties",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-AminoProperties.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.AminoProperties",
          "name": "AAProp",
          "package": "bio",
          "source": "src/Bio-Sequence-AminoProperties.html#AAProp",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bio Sequence AminoProperties",
          "module": "Bio.Sequence.AminoProperties",
          "name": "AAProp",
          "package": "bio",
          "partial": "AAProp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-AminoProperties.html#t:AAProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.AminoProperties",
          "name": "aliphatic",
          "package": "bio",
          "signature": "AAProp",
          "source": "src/Bio-Sequence-AminoProperties.html#aliphatic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence AminoProperties",
          "module": "Bio.Sequence.AminoProperties",
          "name": "aliphatic",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-AminoProperties.html#v:aliphatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.AminoProperties",
          "name": "aromatic",
          "package": "bio",
          "signature": "AAProp",
          "source": "src/Bio-Sequence-AminoProperties.html#aromatic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence AminoProperties",
          "module": "Bio.Sequence.AminoProperties",
          "name": "aromatic",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-AminoProperties.html#v:aromatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.AminoProperties",
          "name": "charged",
          "package": "bio",
          "signature": "AAProp",
          "source": "src/Bio-Sequence-AminoProperties.html#charged",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence AminoProperties",
          "module": "Bio.Sequence.AminoProperties",
          "name": "charged",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-AminoProperties.html#v:charged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe propensities for forming secondary structures\n  From Zvelebil and Baum: Understanding Bioinformatics, Chapter 11\n  citing Chou and Fasman.\n  Today, more complex methods like GOR are recommended instead.\n\u003c/p\u003e",
          "module": "Bio.Sequence.AminoProperties",
          "name": "helixP",
          "package": "bio",
          "signature": "Amino -\u003e Double",
          "source": "src/Bio-Sequence-AminoProperties.html#helixP",
          "type": "function"
        },
        "index": {
          "description": "The propensities for forming secondary structures From Zvelebil and Baum Understanding Bioinformatics Chapter citing Chou and Fasman Today more complex methods like GOR are recommended instead",
          "hierarchy": "Bio Sequence AminoProperties",
          "module": "Bio.Sequence.AminoProperties",
          "name": "helixP",
          "normalized": "Amino-\u003eDouble",
          "package": "bio",
          "signature": "Amino-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-AminoProperties.html#v:helixP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.AminoProperties",
          "name": "hydropathy",
          "package": "bio",
          "signature": "Amino -\u003e Double",
          "source": "src/Bio-Sequence-AminoProperties.html#hydropathy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence AminoProperties",
          "module": "Bio.Sequence.AminoProperties",
          "name": "hydropathy",
          "normalized": "Amino-\u003eDouble",
          "package": "bio",
          "signature": "Amino-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-AminoProperties.html#v:hydropathy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.AminoProperties",
          "name": "hydrophobic",
          "package": "bio",
          "signature": "AAProp",
          "source": "src/Bio-Sequence-AminoProperties.html#hydrophobic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence AminoProperties",
          "module": "Bio.Sequence.AminoProperties",
          "name": "hydrophobic",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-AminoProperties.html#v:hydrophobic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.AminoProperties",
          "name": "mass",
          "package": "bio",
          "signature": "Amino -\u003e Double",
          "source": "src/Bio-Sequence-AminoProperties.html#mass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence AminoProperties",
          "module": "Bio.Sequence.AminoProperties",
          "name": "mass",
          "normalized": "Amino-\u003eDouble",
          "package": "bio",
          "signature": "Amino-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-AminoProperties.html#v:mass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.AminoProperties",
          "name": "negative",
          "package": "bio",
          "signature": "AAProp",
          "source": "src/Bio-Sequence-AminoProperties.html#negative",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence AminoProperties",
          "module": "Bio.Sequence.AminoProperties",
          "name": "negative",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-AminoProperties.html#v:negative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.AminoProperties",
          "name": "oneOf",
          "package": "bio",
          "signature": "[Amino] -\u003e Amino -\u003e Bool",
          "source": "src/Bio-Sequence-AminoProperties.html#oneOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence AminoProperties",
          "module": "Bio.Sequence.AminoProperties",
          "name": "oneOf",
          "normalized": "[Amino]-\u003eAmino-\u003eBool",
          "package": "bio",
          "partial": "Of",
          "signature": "[Amino]-\u003eAmino-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-AminoProperties.html#v:oneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.AminoProperties",
          "name": "or",
          "package": "bio",
          "signature": "(t -\u003e Bool) -\u003e (t -\u003e Bool) -\u003e t -\u003e Bool",
          "source": "src/Bio-Sequence-AminoProperties.html#or",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence AminoProperties",
          "module": "Bio.Sequence.AminoProperties",
          "name": "or",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003eBool)-\u003ea-\u003eBool",
          "package": "bio",
          "signature": "(t-\u003eBool)-\u003e(t-\u003eBool)-\u003et-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-AminoProperties.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.AminoProperties",
          "name": "polar",
          "package": "bio",
          "signature": "AAProp",
          "source": "src/Bio-Sequence-AminoProperties.html#polar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence AminoProperties",
          "module": "Bio.Sequence.AminoProperties",
          "name": "polar",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-AminoProperties.html#v:polar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.AminoProperties",
          "name": "positive",
          "package": "bio",
          "signature": "AAProp",
          "source": "src/Bio-Sequence-AminoProperties.html#positive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence AminoProperties",
          "module": "Bio.Sequence.AminoProperties",
          "name": "positive",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-AminoProperties.html#v:positive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.AminoProperties",
          "name": "small",
          "package": "bio",
          "signature": "AAProp",
          "source": "src/Bio-Sequence-AminoProperties.html#small",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence AminoProperties",
          "module": "Bio.Sequence.AminoProperties",
          "name": "small",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-AminoProperties.html#v:small"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe propensities for forming secondary structures\n  From Zvelebil and Baum: Understanding Bioinformatics, Chapter 11\n  citing Chou and Fasman.\n  Today, more complex methods like GOR are recommended instead.\n\u003c/p\u003e",
          "module": "Bio.Sequence.AminoProperties",
          "name": "strandP",
          "package": "bio",
          "signature": "Amino -\u003e Double",
          "source": "src/Bio-Sequence-AminoProperties.html#strandP",
          "type": "function"
        },
        "index": {
          "description": "The propensities for forming secondary structures From Zvelebil and Baum Understanding Bioinformatics Chapter citing Chou and Fasman Today more complex methods like GOR are recommended instead",
          "hierarchy": "Bio Sequence AminoProperties",
          "module": "Bio.Sequence.AminoProperties",
          "name": "strandP",
          "normalized": "Amino-\u003eDouble",
          "package": "bio",
          "signature": "Amino-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-AminoProperties.html#v:strandP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.AminoProperties",
          "name": "tiny",
          "package": "bio",
          "signature": "AAProp",
          "source": "src/Bio-Sequence-AminoProperties.html#tiny",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence AminoProperties",
          "module": "Bio.Sequence.AminoProperties",
          "name": "tiny",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-AminoProperties.html#v:tiny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.Entropy",
          "name": "Entropy",
          "package": "bio",
          "source": "src/Bio-Sequence-Entropy.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bio Sequence Entropy",
          "module": "Bio.Sequence.Entropy",
          "name": "Entropy",
          "package": "bio",
          "partial": "Entropy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Entropy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.Entropy",
          "name": "KWords",
          "package": "bio",
          "source": "src/Bio-Sequence-Entropy.html#KWords",
          "type": "class"
        },
        "index": {
          "hierarchy": "Bio Sequence Entropy",
          "module": "Bio.Sequence.Entropy",
          "name": "KWords",
          "package": "bio",
          "partial": "KWords",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Entropy.html#t:KWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.Entropy\",\"Bio.Sequence\"]",
          "name": "entropy",
          "package": "bio",
          "signature": "Int -\u003e str -\u003e Double",
          "source": "src/Bio-Sequence-Entropy.html#entropy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Entropy.html#v:entropy\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:entropy\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence Entropy",
          "module": "Bio.Sequence.Entropy",
          "name": "entropy",
          "normalized": "Int-\u003ea-\u003eDouble",
          "package": "bio",
          "signature": "Int-\u003estr-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Entropy.html#v:entropy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.Entropy",
          "name": "kwords",
          "package": "bio",
          "signature": "Int -\u003e s -\u003e [s]",
          "source": "src/Bio-Sequence-Entropy.html#kwords",
          "type": "method"
        },
        "index": {
          "hierarchy": "Bio Sequence Entropy",
          "module": "Bio.Sequence.Entropy",
          "name": "kwords",
          "normalized": "Int-\u003ea-\u003e[a]",
          "package": "bio",
          "signature": "Int-\u003es-\u003e[s]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Entropy.html#v:kwords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport the FastQ format that combines sequence and quality. See:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://www.bioperl.org/wiki/FASTQ_sequence_format\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eOf course, this is yet another vaguely defined pseudo-standard with\n   conflicting definitions.  Of course Solexa had to go and invent not one, but two \n   different, and indistinguishably so, ways to do it:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://www.bcgsc.ca/pipermail/ssrformat/2007-March/000137.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://maq.sourceforge.net/fastq.shtml\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/FASTQ_format\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSanger-style FastQ-format is supported with the (h)read/writeSangerQ functions,\n   and the new Illumina\u003cem\u003eSolexa-style with (h)read\u003c/em\u003ewriteIllumina.\n\u003c/p\u003e\u003cp\u003eAs far as I know, FastQ is only used for nucleotide sequences, never amino acid.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Sequence.FastQ",
          "name": "FastQ",
          "package": "bio",
          "source": "src/Bio-Sequence-FastQ.html",
          "type": "module"
        },
        "index": {
          "description": "Support the FastQ format that combines sequence and quality See http www.bioperl.org wiki FASTQ sequence format Of course this is yet another vaguely defined pseudo-standard with conflicting definitions Of course Solexa had to go and invent not one but two different and indistinguishably so ways to do it http www.bcgsc.ca pipermail ssrformat March html http maq.sourceforge.net fastq.shtml http en.wikipedia.org wiki FASTQ format Sanger-style FastQ-format is supported with the read writeSangerQ functions and the new Illumina Solexa-style with read writeIllumina As far as know FastQ is only used for nucleotide sequences never amino acid",
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "FastQ",
          "package": "bio",
          "partial": "Fast",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-FastQ.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: FastQ assumes Sanger-style quality info use {read,write}SangerQ or -Illumina instead\n\u003c/p\u003e\u003c/div\u003e",
          "module": "[\"Bio.Sequence.FastQ\",\"Bio.Sequence\"]",
          "name": "hReadFastQ",
          "package": "bio",
          "signature": "Handle -\u003e IO [Sequence Nuc]",
          "source": "src/Bio-Sequence-FastQ.html#hReadFastQ",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-FastQ.html#v:hReadFastQ\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:hReadFastQ\"]"
        },
        "index": {
          "description": "Deprecated FastQ assumes Sanger-style quality info use read write SangerQ or Illumina instead",
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "hReadFastQ",
          "normalized": "Handle-\u003eIO[Sequence Nuc]",
          "package": "bio",
          "partial": "Read Fast",
          "signature": "Handle-\u003eIO[Sequence Nuc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-FastQ.html#v:hReadFastQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.FastQ\",\"Bio.Sequence\"]",
          "name": "hReadIllumina",
          "package": "bio",
          "signature": "Handle -\u003e IO [Sequence Nuc]",
          "source": "src/Bio-Sequence-FastQ.html#hReadIllumina",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-FastQ.html#v:hReadIllumina\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:hReadIllumina\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "hReadIllumina",
          "normalized": "Handle-\u003eIO[Sequence Nuc]",
          "package": "bio",
          "partial": "Read Illumina",
          "signature": "Handle-\u003eIO[Sequence Nuc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-FastQ.html#v:hReadIllumina"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.FastQ\",\"Bio.Sequence\"]",
          "name": "hReadSangerQ",
          "package": "bio",
          "signature": "Handle -\u003e IO [Sequence Nuc]",
          "source": "src/Bio-Sequence-FastQ.html#hReadSangerQ",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-FastQ.html#v:hReadSangerQ\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:hReadSangerQ\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "hReadSangerQ",
          "normalized": "Handle-\u003eIO[Sequence Nuc]",
          "package": "bio",
          "partial": "Read Sanger",
          "signature": "Handle-\u003eIO[Sequence Nuc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-FastQ.html#v:hReadSangerQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: FastQ assumes Sanger-style quality info use {read,write}SangerQ or -Illumina instead\n\u003c/p\u003e\u003c/div\u003e",
          "module": "[\"Bio.Sequence.FastQ\",\"Bio.Sequence\"]",
          "name": "hWriteFastQ",
          "package": "bio",
          "signature": "Handle -\u003e [Sequence Nuc] -\u003e IO ()",
          "source": "src/Bio-Sequence-FastQ.html#hWriteFastQ",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-FastQ.html#v:hWriteFastQ\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:hWriteFastQ\"]"
        },
        "index": {
          "description": "Deprecated FastQ assumes Sanger-style quality info use read write SangerQ or Illumina instead",
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "hWriteFastQ",
          "normalized": "Handle-\u003e[Sequence Nuc]-\u003eIO()",
          "package": "bio",
          "partial": "Write Fast",
          "signature": "Handle-\u003e[Sequence Nuc]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-FastQ.html#v:hWriteFastQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.FastQ\",\"Bio.Sequence\"]",
          "name": "hWriteIllumina",
          "package": "bio",
          "signature": "Handle -\u003e [Sequence Nuc] -\u003e IO ()",
          "source": "src/Bio-Sequence-FastQ.html#hWriteIllumina",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-FastQ.html#v:hWriteIllumina\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:hWriteIllumina\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "hWriteIllumina",
          "normalized": "Handle-\u003e[Sequence Nuc]-\u003eIO()",
          "package": "bio",
          "partial": "Write Illumina",
          "signature": "Handle-\u003e[Sequence Nuc]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-FastQ.html#v:hWriteIllumina"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.FastQ\",\"Bio.Sequence\"]",
          "name": "hWriteSangerQ",
          "package": "bio",
          "signature": "Handle -\u003e [Sequence Nuc] -\u003e IO ()",
          "source": "src/Bio-Sequence-FastQ.html#hWriteSangerQ",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-FastQ.html#v:hWriteSangerQ\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:hWriteSangerQ\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "hWriteSangerQ",
          "normalized": "Handle-\u003e[Sequence Nuc]-\u003eIO()",
          "package": "bio",
          "partial": "Write Sanger",
          "signature": "Handle-\u003e[Sequence Nuc]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-FastQ.html#v:hWriteSangerQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse one FastQ entry, suitable for using in \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e over\n   \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e from a file\n\u003c/p\u003e",
          "module": "Bio.Sequence.FastQ",
          "name": "parse",
          "package": "bio",
          "signature": "[ByteString] -\u003e Maybe (Either String (Sequence Nuc), [ByteString])",
          "source": "src/Bio-Sequence-FastQ.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Parse one FastQ entry suitable for using in unfoldr over lines from file",
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "parse",
          "normalized": "[ByteString]-\u003eMaybe(Either String(Sequence Nuc),[ByteString])",
          "package": "bio",
          "signature": "[ByteString]-\u003eMaybe(Either String(Sequence Nuc),[ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-FastQ.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: FastQ assumes Sanger-style quality info use {read,write}SangerQ or -Illumina instead\n\u003c/p\u003e\u003c/div\u003e",
          "module": "[\"Bio.Sequence.FastQ\",\"Bio.Sequence\"]",
          "name": "readFastQ",
          "package": "bio",
          "signature": "FilePath -\u003e IO [Sequence Nuc]",
          "source": "src/Bio-Sequence-FastQ.html#readFastQ",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-FastQ.html#v:readFastQ\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:readFastQ\"]"
        },
        "index": {
          "description": "Deprecated FastQ assumes Sanger-style quality info use read write SangerQ or Illumina instead",
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "readFastQ",
          "normalized": "FilePath-\u003eIO[Sequence Nuc]",
          "package": "bio",
          "partial": "Fast",
          "signature": "FilePath-\u003eIO[Sequence Nuc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-FastQ.html#v:readFastQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.FastQ\",\"Bio.Sequence\"]",
          "name": "readIllumina",
          "package": "bio",
          "signature": "FilePath -\u003e IO [Sequence Nuc]",
          "source": "src/Bio-Sequence-FastQ.html#readIllumina",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-FastQ.html#v:readIllumina\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:readIllumina\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "readIllumina",
          "normalized": "FilePath-\u003eIO[Sequence Nuc]",
          "package": "bio",
          "partial": "Illumina",
          "signature": "FilePath-\u003eIO[Sequence Nuc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-FastQ.html#v:readIllumina"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.FastQ\",\"Bio.Sequence\"]",
          "name": "readSangerQ",
          "package": "bio",
          "signature": "FilePath -\u003e IO [Sequence Nuc]",
          "source": "src/Bio-Sequence-FastQ.html#readSangerQ",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-FastQ.html#v:readSangerQ\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:readSangerQ\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "readSangerQ",
          "normalized": "FilePath-\u003eIO[Sequence Nuc]",
          "package": "bio",
          "partial": "Sanger",
          "signature": "FilePath-\u003eIO[Sequence Nuc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-FastQ.html#v:readSangerQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.FastQ",
          "name": "unparse",
          "package": "bio",
          "signature": "Sequence Nuc -\u003e ByteString",
          "source": "src/Bio-Sequence-FastQ.html#unparse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "unparse",
          "normalized": "Sequence Nuc-\u003eByteString",
          "package": "bio",
          "signature": "Sequence Nuc-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-FastQ.html#v:unparse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: FastQ assumes Sanger-style quality info use {read,write}SangerQ or -Illumina instead\n\u003c/p\u003e\u003c/div\u003e",
          "module": "[\"Bio.Sequence.FastQ\",\"Bio.Sequence\"]",
          "name": "writeFastQ",
          "package": "bio",
          "signature": "FilePath -\u003e [Sequence Nuc] -\u003e IO ()",
          "source": "src/Bio-Sequence-FastQ.html#writeFastQ",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-FastQ.html#v:writeFastQ\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:writeFastQ\"]"
        },
        "index": {
          "description": "Deprecated FastQ assumes Sanger-style quality info use read write SangerQ or Illumina instead",
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "writeFastQ",
          "normalized": "FilePath-\u003e[Sequence Nuc]-\u003eIO()",
          "package": "bio",
          "partial": "Fast",
          "signature": "FilePath-\u003e[Sequence Nuc]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-FastQ.html#v:writeFastQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.FastQ\",\"Bio.Sequence\"]",
          "name": "writeIllumina",
          "package": "bio",
          "signature": "FilePath -\u003e [Sequence Nuc] -\u003e IO ()",
          "source": "src/Bio-Sequence-FastQ.html#writeIllumina",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-FastQ.html#v:writeIllumina\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:writeIllumina\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "writeIllumina",
          "normalized": "FilePath-\u003e[Sequence Nuc]-\u003eIO()",
          "package": "bio",
          "partial": "Illumina",
          "signature": "FilePath-\u003e[Sequence Nuc]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-FastQ.html#v:writeIllumina"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.FastQ\",\"Bio.Sequence\"]",
          "name": "writeSangerQ",
          "package": "bio",
          "signature": "FilePath -\u003e [Sequence Nuc] -\u003e IO ()",
          "source": "src/Bio-Sequence-FastQ.html#writeSangerQ",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-FastQ.html#v:writeSangerQ\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:writeSangerQ\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "writeSangerQ",
          "normalized": "FilePath-\u003e[Sequence Nuc]-\u003eIO()",
          "package": "bio",
          "partial": "Sanger",
          "signature": "FilePath-\u003e[Sequence Nuc]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-FastQ.html#v:writeSangerQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module incorporates functionality for reading and writing\n   sequence data in the Fasta format.\n   Each sequence consists of a header (with a \u003ccode\u003e\u003ca\u003e\u003e\u003c/a\u003e\u003c/code\u003e prefix)\n   and a set of lines containing the sequence data.\n\u003c/p\u003e\u003cp\u003eAs Fasta is used for both amino acids and nucleotides, the\n   resulting \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003es are type-tagged with \u003ccode\u003e\u003ca\u003eUnknown\u003c/a\u003e\u003c/code\u003e.  If you know the \n   type of sequence you are reading, use \u003ccode\u003e\u003ca\u003ecastToAmino\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ecastToNuc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Sequence.Fasta",
          "name": "Fasta",
          "package": "bio",
          "source": "src/Bio-Sequence-Fasta.html",
          "type": "module"
        },
        "index": {
          "description": "This module incorporates functionality for reading and writing sequence data in the Fasta format Each sequence consists of header with prefix and set of lines containing the sequence data As Fasta is used for both amino acids and nucleotides the resulting Sequence are type-tagged with Unknown If you know the type of sequence you are reading use castToAmino or castToNuc",
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "Fasta",
          "package": "bio",
          "partial": "Fasta",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Fasta.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic type for quality data.  Range 0..255.  Typical Phred output is in\n   the range 6..50, with 20 as the line in the sand separating good from bad.\n\u003c/p\u003e",
          "module": "Bio.Sequence.Fasta",
          "name": "Qual",
          "package": "bio",
          "source": "src/Bio-Sequence-SeqData.html#Qual",
          "type": "type"
        },
        "index": {
          "description": "Basic type for quality data Range Typical Phred output is in the range with as the line in the sand separating good from bad",
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "Qual",
          "package": "bio",
          "partial": "Qual",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Fasta.html#t:Qual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.Fasta",
          "name": "countSeqs",
          "package": "bio",
          "signature": "FilePath -\u003e IO Int",
          "source": "src/Bio-Sequence-Fasta.html#countSeqs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "countSeqs",
          "normalized": "FilePath-\u003eIO Int",
          "package": "bio",
          "partial": "Seqs",
          "signature": "FilePath-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Fasta.html#v:countSeqs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazily read sequence from handle\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.Fasta\",\"Bio.Sequence\"]",
          "name": "hReadFasta",
          "package": "bio",
          "signature": "Handle -\u003e IO [Sequence Unknown]",
          "source": "src/Bio-Sequence-Fasta.html#hReadFasta",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Fasta.html#v:hReadFasta\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:hReadFasta\"]"
        },
        "index": {
          "description": "Lazily read sequence from handle",
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "hReadFasta",
          "normalized": "Handle-\u003eIO[Sequence Unknown]",
          "package": "bio",
          "partial": "Read Fasta",
          "signature": "Handle-\u003eIO[Sequence Unknown]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Fasta.html#v:hReadFasta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite sequences in FASTA format to a handle.\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.Fasta\",\"Bio.Sequence\"]",
          "name": "hWriteFasta",
          "package": "bio",
          "signature": "Handle -\u003e [Sequence a] -\u003e IO ()",
          "source": "src/Bio-Sequence-Fasta.html#hWriteFasta",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Fasta.html#v:hWriteFasta\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:hWriteFasta\"]"
        },
        "index": {
          "description": "Write sequences in FASTA format to handle",
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "hWriteFasta",
          "normalized": "Handle-\u003e[Sequence a]-\u003eIO()",
          "package": "bio",
          "partial": "Write Fasta",
          "signature": "Handle-\u003e[Sequence a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Fasta.html#v:hWriteFasta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.Fasta\",\"Bio.Sequence\"]",
          "name": "hWriteFastaQual",
          "package": "bio",
          "signature": "Handle -\u003e Handle -\u003e [Sequence a] -\u003e IO ()",
          "source": "src/Bio-Sequence-Fasta.html#hWriteFastaQual",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Fasta.html#v:hWriteFastaQual\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:hWriteFastaQual\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "hWriteFastaQual",
          "normalized": "Handle-\u003eHandle-\u003e[Sequence a]-\u003eIO()",
          "package": "bio",
          "partial": "Write Fasta Qual",
          "signature": "Handle-\u003eHandle-\u003e[Sequence a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Fasta.html#v:hWriteFastaQual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.Fasta\",\"Bio.Sequence\"]",
          "name": "hWriteQual",
          "package": "bio",
          "signature": "Handle -\u003e [Sequence a] -\u003e IO ()",
          "source": "src/Bio-Sequence-Fasta.html#hWriteQual",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Fasta.html#v:hWriteQual\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:hWriteQual\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "hWriteQual",
          "normalized": "Handle-\u003e[Sequence a]-\u003eIO()",
          "package": "bio",
          "partial": "Write Qual",
          "signature": "Handle-\u003e[Sequence a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Fasta.html#v:hWriteQual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list of FASTA-formatted lines into a list of sequences.\n   Blank lines are ignored.\n   Comment lines start with \u003ca/\u003e are allowed between sequences (and ignored).\n   Lines starting with \u003ca\u003e\u003e\u003c/a\u003e initiate a new sequence.\n\u003c/p\u003e",
          "module": "Bio.Sequence.Fasta",
          "name": "mkSeqs",
          "package": "bio",
          "signature": "[ByteString] -\u003e [Sequence Unknown]",
          "source": "src/Bio-Sequence-Fasta.html#mkSeqs",
          "type": "function"
        },
        "index": {
          "description": "Convert list of FASTA-formatted lines into list of sequences Blank lines are ignored Comment lines start with are allowed between sequences and ignored Lines starting with initiate new sequence",
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "mkSeqs",
          "normalized": "[ByteString]-\u003e[Sequence Unknown]",
          "package": "bio",
          "partial": "Seqs",
          "signature": "[ByteString]-\u003e[Sequence Unknown]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Fasta.html#v:mkSeqs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazily read sequences from a FASTA-formatted file\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.Fasta\",\"Bio.Sequence\"]",
          "name": "readFasta",
          "package": "bio",
          "signature": "FilePath -\u003e IO [Sequence Unknown]",
          "source": "src/Bio-Sequence-Fasta.html#readFasta",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Fasta.html#v:readFasta\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:readFasta\"]"
        },
        "index": {
          "description": "Lazily read sequences from FASTA-formatted file",
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "readFasta",
          "normalized": "FilePath-\u003eIO[Sequence Unknown]",
          "package": "bio",
          "partial": "Fasta",
          "signature": "FilePath-\u003eIO[Sequence Unknown]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Fasta.html#v:readFasta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead sequence and associated quality.  Will error if\n   the sequences and qualites do not match one-to-one in sequence.\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.Fasta\",\"Bio.Sequence\"]",
          "name": "readFastaQual",
          "package": "bio",
          "signature": "FilePath -\u003e FilePath -\u003e IO [Sequence Unknown]",
          "source": "src/Bio-Sequence-Fasta.html#readFastaQual",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Fasta.html#v:readFastaQual\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:readFastaQual\"]"
        },
        "index": {
          "description": "Read sequence and associated quality Will error if the sequences and qualites do not match one-to-one in sequence",
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "readFastaQual",
          "normalized": "FilePath-\u003eFilePath-\u003eIO[Sequence Unknown]",
          "package": "bio",
          "partial": "Fasta Qual",
          "signature": "FilePath-\u003eFilePath-\u003eIO[Sequence Unknown]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Fasta.html#v:readFastaQual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead quality data for sequences to a file.\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.Fasta\",\"Bio.Sequence\"]",
          "name": "readQual",
          "package": "bio",
          "signature": "FilePath -\u003e IO [Sequence Unknown]",
          "source": "src/Bio-Sequence-Fasta.html#readQual",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Fasta.html#v:readQual\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:readQual\"]"
        },
        "index": {
          "description": "Read quality data for sequences to file",
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "readQual",
          "normalized": "FilePath-\u003eIO[Sequence Unknown]",
          "package": "bio",
          "partial": "Qual",
          "signature": "FilePath-\u003eIO[Sequence Unknown]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Fasta.html#v:readQual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite sequences to a FASTA-formatted file.\n   Line length is 60.\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.Fasta\",\"Bio.Sequence\"]",
          "name": "writeFasta",
          "package": "bio",
          "signature": "FilePath -\u003e [Sequence a] -\u003e IO ()",
          "source": "src/Bio-Sequence-Fasta.html#writeFasta",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Fasta.html#v:writeFasta\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:writeFasta\"]"
        },
        "index": {
          "description": "Write sequences to FASTA-formatted file Line length is",
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "writeFasta",
          "normalized": "FilePath-\u003e[Sequence a]-\u003eIO()",
          "package": "bio",
          "partial": "Fasta",
          "signature": "FilePath-\u003e[Sequence a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Fasta.html#v:writeFasta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite sequence and quality data simulatnously\n   This may be more laziness-friendly.\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.Fasta\",\"Bio.Sequence\"]",
          "name": "writeFastaQual",
          "package": "bio",
          "signature": "FilePath -\u003e FilePath -\u003e [Sequence a] -\u003e IO ()",
          "source": "src/Bio-Sequence-Fasta.html#writeFastaQual",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Fasta.html#v:writeFastaQual\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:writeFastaQual\"]"
        },
        "index": {
          "description": "Write sequence and quality data simulatnously This may be more laziness-friendly",
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "writeFastaQual",
          "normalized": "FilePath-\u003eFilePath-\u003e[Sequence a]-\u003eIO()",
          "package": "bio",
          "partial": "Fasta Qual",
          "signature": "FilePath-\u003eFilePath-\u003e[Sequence a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Fasta.html#v:writeFastaQual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite quality data for sequences to a file.\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.Fasta\",\"Bio.Sequence\"]",
          "name": "writeQual",
          "package": "bio",
          "signature": "FilePath -\u003e [Sequence a] -\u003e IO ()",
          "source": "src/Bio-Sequence-Fasta.html#writeQual",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Fasta.html#v:writeQual\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:writeQual\"]"
        },
        "index": {
          "description": "Write quality data for sequences to file",
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "writeQual",
          "normalized": "FilePath-\u003e[Sequence a]-\u003eIO()",
          "package": "bio",
          "partial": "Qual",
          "signature": "FilePath-\u003e[Sequence a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Fasta.html#v:writeQual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Moved to Bio.Sequence.GeneOntology, use that instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eMoved to GeneOnthology - this is for backwards compatibility.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Sequence.GOA",
          "name": "GOA",
          "package": "bio",
          "source": "src/Bio-Sequence-GOA.html",
          "type": "module"
        },
        "index": {
          "description": "Deprecated Moved to Bio.Sequence.GeneOntology use that instead Moved to GeneOnthology this is for backwards compatibility",
          "hierarchy": "Bio Sequence GOA",
          "module": "Bio.Sequence.GOA",
          "name": "GOA",
          "package": "bio",
          "partial": "GOA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GOA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.GOA",
          "name": "readGO",
          "package": "bio",
          "signature": "FilePath -\u003e IO [GoDef]",
          "source": "src/Bio-Sequence-GOA.html#readGO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence GOA",
          "module": "Bio.Sequence.GOA",
          "name": "readGO",
          "normalized": "FilePath-\u003eIO[GoDef]",
          "package": "bio",
          "partial": "GO",
          "signature": "FilePath-\u003eIO[GoDef]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GOA.html#v:readGO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneOntology - parse and index Gene Ontology Annotations\n   In particular, the file 'gene_association.goa_uniprot' that contains\n   links between GO terms and UniProt accessions.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://www.geneontology.org/ontology/gene_ontology.obo\u003c/a\u003e \n   -- Contains the hierarchy including isA relationships.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.geneontology.org/GO.format.obo-1_2.shtml\u003c/a\u003e \n   -- Describes the OBO format.\n\u003c/li\u003e\u003cli\u003e \u003ca\u003eftp://ftp.ebi.ac.uk/pub/databases/GO/goa/UNIPROT/\u003c/a\u003e \n   -- Contains the GOA-UniProt mapping (and a README file).\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.geneontology.org/ontology/GO.defs\u003c/a\u003e \n   -- Contains GO definitions (not supported here yet).\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.geneontology.org/doc/GO.terms_and_ids\u003c/a\u003e \n   -- GO definitions, simpler and more schematically.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Bio.Sequence.GeneOntology",
          "name": "GeneOntology",
          "package": "bio",
          "source": "src/Bio-Sequence-GeneOntology.html",
          "type": "module"
        },
        "index": {
          "description": "GeneOntology parse and index Gene Ontology Annotations In particular the file gene association.goa uniprot that contains links between GO terms and UniProt accessions http www.geneontology.org ontology gene ontology.obo Contains the hierarchy including isA relationships http www.geneontology.org GO.format.obo-1 shtml Describes the OBO format ftp ftp.ebi.ac.uk pub databases GO goa UNIPROT Contains the GOA-UniProt mapping and README file http www.geneontology.org ontology GO.defs Contains GO definitions not supported here yet http www.geneontology.org doc GO.terms and ids GO definitions simpler and more schematically",
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "GeneOntology",
          "package": "bio",
          "partial": "Gene Ontology",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA GOA annotation, containing a UniProt identifier, a GoTerm and an evidence code.\n\u003c/p\u003e",
          "module": "Bio.Sequence.GeneOntology",
          "name": "Annotation",
          "package": "bio",
          "source": "src/Bio-Sequence-GeneOntology.html#Annotation",
          "type": "data"
        },
        "index": {
          "description": "GOA annotation containing UniProt identifier GoTerm and an evidence code",
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "Annotation",
          "package": "bio",
          "partial": "Annotation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#t:Annotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvidence codes describe the type of support for an annotation\n \u003ca\u003ehttp://www.geneontology.org/GO.evidence.shtml\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Bio.Sequence.GeneOntology",
          "name": "EvidenceCode",
          "package": "bio",
          "source": "src/Bio-Sequence-GeneOntology.html#EvidenceCode",
          "type": "data"
        },
        "index": {
          "description": "Evidence codes describe the type of support for an annotation http www.geneontology.org GO.evidence.shtml",
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "EvidenceCode",
          "package": "bio",
          "partial": "Evidence Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#t:EvidenceCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.GeneOntology",
          "name": "GoClass",
          "package": "bio",
          "source": "src/Bio-Sequence-GeneOntology.html#GoClass",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "GoClass",
          "package": "bio",
          "partial": "Go Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#t:GoClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA GoDef maps a \u003ca\u003eGoTerm\u003c/a\u003e to a description and a \u003ca\u003eGoClass\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Bio.Sequence.GeneOntology",
          "name": "GoDef",
          "package": "bio",
          "source": "src/Bio-Sequence-GeneOntology.html#GoDef",
          "type": "data"
        },
        "index": {
          "description": "GoDef maps GoTerm to description and GoClass",
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "GoDef",
          "package": "bio",
          "partial": "Go Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#t:GoDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of Go definitions, with pointers to parent nodes.  Read from the .obo file.\n   The user may construct the explicit hierachy by storing these in a Map or similar\n\u003c/p\u003e",
          "module": "Bio.Sequence.GeneOntology",
          "name": "GoHierarchy",
          "package": "bio",
          "source": "src/Bio-Sequence-GeneOntology.html#GoHierarchy",
          "type": "type"
        },
        "index": {
          "description": "list of Go definitions with pointers to parent nodes Read from the obo file The user may construct the explicit hierachy by storing these in Map or similar",
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "GoHierarchy",
          "package": "bio",
          "partial": "Go Hierarchy",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#t:GoHierarchy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA GO term is a positive integer\n\u003c/p\u003e",
          "module": "Bio.Sequence.GeneOntology",
          "name": "GoTerm",
          "package": "bio",
          "source": "src/Bio-Sequence-GeneOntology.html#GoTerm",
          "type": "newtype"
        },
        "index": {
          "description": "GO term is positive integer",
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "GoTerm",
          "package": "bio",
          "partial": "Go Term",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#t:GoTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA UniProt identifier (short string of capitals and numbers).\n\u003c/p\u003e",
          "module": "Bio.Sequence.GeneOntology",
          "name": "UniProtAcc",
          "package": "bio",
          "source": "src/Bio-Sequence-GeneOntology.html#UniProtAcc",
          "type": "type"
        },
        "index": {
          "description": "UniProt identifier short string of capitals and numbers",
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "UniProtAcc",
          "package": "bio",
          "partial": "Uni Prot Acc",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#t:UniProtAcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.GeneOntology",
          "name": "Ann",
          "package": "bio",
          "signature": "Ann !UniProtAcc !GoTerm !EvidenceCode",
          "source": "src/Bio-Sequence-GeneOntology.html#Annotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "Ann",
          "package": "bio",
          "partial": "Ann",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#v:Ann"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.GeneOntology",
          "name": "Comp",
          "package": "bio",
          "signature": "Comp",
          "source": "src/Bio-Sequence-GeneOntology.html#GoClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "Comp",
          "package": "bio",
          "partial": "Comp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#v:Comp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.GeneOntology",
          "name": "Func",
          "package": "bio",
          "signature": "Func",
          "source": "src/Bio-Sequence-GeneOntology.html#GoClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "Func",
          "package": "bio",
          "partial": "Func",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#v:Func"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.GeneOntology",
          "name": "GO",
          "package": "bio",
          "signature": "GO Int",
          "source": "src/Bio-Sequence-GeneOntology.html#GoTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "GO",
          "package": "bio",
          "partial": "GO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#v:GO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.GeneOntology",
          "name": "GoDef",
          "package": "bio",
          "signature": "GoDef !GoTerm !ByteString !GoClass",
          "source": "src/Bio-Sequence-GeneOntology.html#GoDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "GoDef",
          "package": "bio",
          "partial": "Go Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#v:GoDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInferred by Curator\n\u003c/p\u003e",
          "module": "Bio.Sequence.GeneOntology",
          "name": "IC",
          "package": "bio",
          "signature": "IC",
          "source": "src/Bio-Sequence-GeneOntology.html#EvidenceCode",
          "type": "function"
        },
        "index": {
          "description": "Inferred by Curator",
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "IC",
          "package": "bio",
          "partial": "IC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#v:IC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInferred from Direct Assay\n\u003c/p\u003e",
          "module": "Bio.Sequence.GeneOntology",
          "name": "IDA",
          "package": "bio",
          "signature": "IDA",
          "source": "src/Bio-Sequence-GeneOntology.html#EvidenceCode",
          "type": "function"
        },
        "index": {
          "description": "Inferred from Direct Assay",
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "IDA",
          "package": "bio",
          "partial": "IDA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#v:IDA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInferred from Electronic Annotation\n\u003c/p\u003e",
          "module": "Bio.Sequence.GeneOntology",
          "name": "IEA",
          "package": "bio",
          "signature": "IEA",
          "source": "src/Bio-Sequence-GeneOntology.html#EvidenceCode",
          "type": "function"
        },
        "index": {
          "description": "Inferred from Electronic Annotation",
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "IEA",
          "package": "bio",
          "partial": "IEA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#v:IEA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInferred from Expression Pattern\n\u003c/p\u003e",
          "module": "Bio.Sequence.GeneOntology",
          "name": "IEP",
          "package": "bio",
          "signature": "IEP",
          "source": "src/Bio-Sequence-GeneOntology.html#EvidenceCode",
          "type": "function"
        },
        "index": {
          "description": "Inferred from Expression Pattern",
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "IEP",
          "package": "bio",
          "partial": "IEP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#v:IEP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInferred from Genomic Context\n\u003c/p\u003e",
          "module": "Bio.Sequence.GeneOntology",
          "name": "IGC",
          "package": "bio",
          "signature": "IGC",
          "source": "src/Bio-Sequence-GeneOntology.html#EvidenceCode",
          "type": "function"
        },
        "index": {
          "description": "Inferred from Genomic Context",
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "IGC",
          "package": "bio",
          "partial": "IGC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#v:IGC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInferred from Genetic Interaction\n\u003c/p\u003e",
          "module": "Bio.Sequence.GeneOntology",
          "name": "IGI",
          "package": "bio",
          "signature": "IGI",
          "source": "src/Bio-Sequence-GeneOntology.html#EvidenceCode",
          "type": "function"
        },
        "index": {
          "description": "Inferred from Genetic Interaction",
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "IGI",
          "package": "bio",
          "partial": "IGI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#v:IGI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInferred from Mutant Phenotype\n\u003c/p\u003e",
          "module": "Bio.Sequence.GeneOntology",
          "name": "IMP",
          "package": "bio",
          "signature": "IMP",
          "source": "src/Bio-Sequence-GeneOntology.html#EvidenceCode",
          "type": "function"
        },
        "index": {
          "description": "Inferred from Mutant Phenotype",
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "IMP",
          "package": "bio",
          "partial": "IMP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#v:IMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInferred from Physical Interaction\n\u003c/p\u003e",
          "module": "Bio.Sequence.GeneOntology",
          "name": "IPI",
          "package": "bio",
          "signature": "IPI",
          "source": "src/Bio-Sequence-GeneOntology.html#EvidenceCode",
          "type": "function"
        },
        "index": {
          "description": "Inferred from Physical Interaction",
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "IPI",
          "package": "bio",
          "partial": "IPI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#v:IPI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInferred from Sequence or Structural Similarity\n\u003c/p\u003e",
          "module": "Bio.Sequence.GeneOntology",
          "name": "ISS",
          "package": "bio",
          "signature": "ISS",
          "source": "src/Bio-Sequence-GeneOntology.html#EvidenceCode",
          "type": "function"
        },
        "index": {
          "description": "Inferred from Sequence or Structural Similarity",
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "ISS",
          "package": "bio",
          "partial": "ISS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#v:ISS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-traceable Author Statement\n\u003c/p\u003e",
          "module": "Bio.Sequence.GeneOntology",
          "name": "NAS",
          "package": "bio",
          "signature": "NAS",
          "source": "src/Bio-Sequence-GeneOntology.html#EvidenceCode",
          "type": "function"
        },
        "index": {
          "description": "Non-traceable Author Statement",
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "NAS",
          "package": "bio",
          "partial": "NAS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#v:NAS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo biological Data available\n\u003c/p\u003e",
          "module": "Bio.Sequence.GeneOntology",
          "name": "ND",
          "package": "bio",
          "signature": "ND",
          "source": "src/Bio-Sequence-GeneOntology.html#EvidenceCode",
          "type": "function"
        },
        "index": {
          "description": "No biological Data available",
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "ND",
          "package": "bio",
          "partial": "ND",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#v:ND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot Recorded \n\u003c/p\u003e",
          "module": "Bio.Sequence.GeneOntology",
          "name": "NR",
          "package": "bio",
          "signature": "NR",
          "source": "src/Bio-Sequence-GeneOntology.html#EvidenceCode",
          "type": "function"
        },
        "index": {
          "description": "Not Recorded",
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "NR",
          "package": "bio",
          "partial": "NR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#v:NR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.GeneOntology",
          "name": "Proc",
          "package": "bio",
          "signature": "Proc",
          "source": "src/Bio-Sequence-GeneOntology.html#GoClass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "Proc",
          "package": "bio",
          "partial": "Proc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#v:Proc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInferred from Reviewed Computational Analysis\n\u003c/p\u003e",
          "module": "Bio.Sequence.GeneOntology",
          "name": "RCA",
          "package": "bio",
          "signature": "RCA",
          "source": "src/Bio-Sequence-GeneOntology.html#EvidenceCode",
          "type": "function"
        },
        "index": {
          "description": "Inferred from Reviewed Computational Analysis",
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "RCA",
          "package": "bio",
          "partial": "RCA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#v:RCA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraceable Author Statement\n\u003c/p\u003e",
          "module": "Bio.Sequence.GeneOntology",
          "name": "TAS",
          "package": "bio",
          "signature": "TAS",
          "source": "src/Bio-Sequence-GeneOntology.html#EvidenceCode",
          "type": "function"
        },
        "index": {
          "description": "Traceable Author Statement",
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "TAS",
          "package": "bio",
          "partial": "TAS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#v:TAS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.GeneOntology",
          "name": "decomment",
          "package": "bio",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Bio-Sequence-GeneOntology.html#decomment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "decomment",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "bio",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#v:decomment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe vast majority of GOA data is IEA, while the most reliable information\n   is manually curated.  Filtering on this is useful to keep data set sizes\n   manageable, too.\n\u003c/p\u003e",
          "module": "Bio.Sequence.GeneOntology",
          "name": "isCurated",
          "package": "bio",
          "signature": "EvidenceCode -\u003e Bool",
          "source": "src/Bio-Sequence-GeneOntology.html#isCurated",
          "type": "function"
        },
        "index": {
          "description": "The vast majority of GOA data is IEA while the most reliable information is manually curated Filtering on this is useful to keep data set sizes manageable too",
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "isCurated",
          "normalized": "EvidenceCode-\u003eBool",
          "package": "bio",
          "partial": "Curated",
          "signature": "EvidenceCode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#v:isCurated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the goa_uniprot file (warning: this one is huge!)\n\u003c/p\u003e",
          "module": "Bio.Sequence.GeneOntology",
          "name": "readGOA",
          "package": "bio",
          "signature": "FilePath -\u003e IO [Annotation]",
          "source": "src/Bio-Sequence-GeneOntology.html#readGOA",
          "type": "function"
        },
        "index": {
          "description": "Read the goa uniprot file warning this one is huge",
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "readGOA",
          "normalized": "FilePath-\u003eIO[Annotation]",
          "package": "bio",
          "partial": "GOA",
          "signature": "FilePath-\u003eIO[Annotation]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#v:readGOA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the GO hierarchy from the obo file.  Note that this is not quite a tree structure.\n\u003c/p\u003e",
          "module": "Bio.Sequence.GeneOntology",
          "name": "readObo",
          "package": "bio",
          "signature": "FilePath -\u003e IO GoHierarchy",
          "source": "src/Bio-Sequence-GeneOntology.html#readObo",
          "type": "function"
        },
        "index": {
          "description": "Read the GO hierarchy from the obo file Note that this is not quite tree structure",
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "readObo",
          "normalized": "FilePath-\u003eIO GoHierarchy",
          "package": "bio",
          "partial": "Obo",
          "signature": "FilePath-\u003eIO GoHierarchy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#v:readObo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead GO term definitions, from the GO.terms_and_ids file\n\u003c/p\u003e",
          "module": "Bio.Sequence.GeneOntology",
          "name": "readTerms",
          "package": "bio",
          "signature": "FilePath -\u003e IO [GoDef]",
          "source": "src/Bio-Sequence-GeneOntology.html#readTerms",
          "type": "function"
        },
        "index": {
          "description": "Read GO term definitions from the GO.terms and ids file",
          "hierarchy": "Bio Sequence GeneOntology",
          "module": "Bio.Sequence.GeneOntology",
          "name": "readTerms",
          "normalized": "FilePath-\u003eIO[GoDef]",
          "package": "bio",
          "partial": "Terms",
          "signature": "FilePath-\u003eIO[GoDef]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-GeneOntology.html#v:readTerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.HashWord",
          "name": "HashWord",
          "package": "bio",
          "source": "src/Bio-Sequence-HashWord.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bio Sequence HashWord",
          "module": "Bio.Sequence.HashWord",
          "name": "HashWord",
          "package": "bio",
          "partial": "Hash Word",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a struct for containing a set of hashing functions\n\u003c/p\u003e",
          "module": "Bio.Sequence.HashWord",
          "name": "HashF",
          "package": "bio",
          "source": "src/Bio-Sequence-HashWord.html#HashF",
          "type": "data"
        },
        "index": {
          "description": "This is struct for containing set of hashing functions",
          "hierarchy": "Bio Sequence HashWord",
          "module": "Bio.Sequence.HashWord",
          "name": "HashF",
          "package": "bio",
          "partial": "Hash",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#t:HashF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.HashWord",
          "name": "Shape",
          "package": "bio",
          "source": "src/Bio-Sequence-HashWord.html#Shape",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bio Sequence HashWord",
          "module": "Bio.Sequence.HashWord",
          "name": "Shape",
          "package": "bio",
          "partial": "Shape",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#t:Shape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.HashWord\",\"Bio.Sequence\"]",
          "name": "HF",
          "package": "bio",
          "signature": "HF",
          "source": "src/Bio-Sequence-HashWord.html#HashF",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#v:HF\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:HF\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence HashWord",
          "module": "Bio.Sequence.HashWord",
          "name": "HF",
          "package": "bio",
          "partial": "HF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#v:HF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.HashWord",
          "name": "compact",
          "package": "bio",
          "signature": "SeqData -\u003e [SeqData]",
          "source": "src/Bio-Sequence-HashWord.html#compact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence HashWord",
          "module": "Bio.Sequence.HashWord",
          "name": "compact",
          "normalized": "SeqData-\u003e[SeqData]",
          "package": "bio",
          "signature": "SeqData-\u003e[SeqData]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#v:compact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.HashWord",
          "name": "complement",
          "package": "bio",
          "signature": "Char -\u003e Char",
          "source": "src/Bio-Sequence-HashWord.html#complement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence HashWord",
          "module": "Bio.Sequence.HashWord",
          "name": "complement",
          "normalized": "Char-\u003eChar",
          "package": "bio",
          "signature": "Char-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#v:complement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContigous constructs an int/eger from a contigous k-word.\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.HashWord\",\"Bio.Sequence\"]",
          "name": "contigous",
          "package": "bio",
          "signature": "Int -\u003e HashF k",
          "source": "src/Bio-Sequence-HashWord.html#contigous",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#v:contigous\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:contigous\"]"
        },
        "index": {
          "description": "Contigous constructs an int eger from contigous k-word",
          "hierarchy": "Bio Sequence HashWord",
          "module": "Bio.Sequence.HashWord",
          "name": "contigous",
          "normalized": "Int-\u003eHashF a",
          "package": "bio",
          "signature": "Int-\u003eHashF k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#v:contigous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.HashWord",
          "name": "gapped",
          "package": "bio",
          "signature": "Shape -\u003e HashF k",
          "source": "src/Bio-Sequence-HashWord.html#gapped",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence HashWord",
          "module": "Bio.Sequence.HashWord",
          "name": "gapped",
          "normalized": "Shape-\u003eHashF a",
          "package": "bio",
          "signature": "Shape-\u003eHashF k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#v:gapped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds a default \u003ca\u003ehashes\u003c/a\u003e function to a \u003ccode\u003eHashF\u003c/code\u003e, when \u003ca\u003ehash\u003c/a\u003e is defined.\n\u003c/p\u003e",
          "module": "Bio.Sequence.HashWord",
          "name": "genkeys",
          "package": "bio",
          "signature": "HashF k -\u003e HashF k",
          "source": "src/Bio-Sequence-HashWord.html#genkeys",
          "type": "function"
        },
        "index": {
          "description": "Adds default hashes function to HashF when hash is defined",
          "hierarchy": "Bio Sequence HashWord",
          "module": "Bio.Sequence.HashWord",
          "name": "genkeys",
          "normalized": "HashF a-\u003eHashF a",
          "package": "bio",
          "signature": "HashF k-\u003eHashF k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#v:genkeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecalculates the hash at a given offset in the sequence\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.HashWord\",\"Bio.Sequence\"]",
          "name": "hash",
          "package": "bio",
          "signature": "SeqData -\u003e Offset -\u003e Maybe k",
          "source": "src/Bio-Sequence-HashWord.html#HashF",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#v:hash\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:hash\"]"
        },
        "index": {
          "description": "calculates the hash at given offset in the sequence",
          "hierarchy": "Bio Sequence HashWord",
          "module": "Bio.Sequence.HashWord",
          "name": "hash",
          "normalized": "SeqData-\u003eOffset-\u003eMaybe a",
          "package": "bio",
          "signature": "SeqData-\u003eOffset-\u003eMaybe k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#v:hash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecalculate all hashes from a sequence, and their indices\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.HashWord\",\"Bio.Sequence\"]",
          "name": "hashes",
          "package": "bio",
          "signature": "SeqData -\u003e [(k, Offset)]",
          "source": "src/Bio-Sequence-HashWord.html#HashF",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#v:hashes\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:hashes\"]"
        },
        "index": {
          "description": "calculate all hashes from sequence and their indices",
          "hierarchy": "Bio Sequence HashWord",
          "module": "Bio.Sequence.HashWord",
          "name": "hashes",
          "normalized": "SeqData-\u003e[(a,Offset)]",
          "package": "bio",
          "signature": "SeqData-\u003e[(k,Offset)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#v:hashes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.HashWord",
          "name": "isN",
          "package": "bio",
          "signature": "Char -\u003e Bool",
          "source": "src/Bio-Sequence-HashWord.html#isN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence HashWord",
          "module": "Bio.Sequence.HashWord",
          "name": "isN",
          "normalized": "Char-\u003eBool",
          "package": "bio",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#v:isN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.HashWord",
          "name": "k2n",
          "package": "bio",
          "signature": "Int -\u003e k -\u003e SeqData",
          "source": "src/Bio-Sequence-HashWord.html#k2n",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence HashWord",
          "module": "Bio.Sequence.HashWord",
          "name": "k2n",
          "normalized": "Int-\u003ea-\u003eSeqData",
          "package": "bio",
          "signature": "Int-\u003ek-\u003eSeqData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#v:k2n"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.HashWord",
          "name": "k2n'",
          "package": "bio",
          "signature": "a -\u003e a1 -\u003e String",
          "source": "src/Bio-Sequence-HashWord.html#k2n%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence HashWord",
          "module": "Bio.Sequence.HashWord",
          "name": "k2n'",
          "normalized": "a-\u003ea-\u003eString",
          "package": "bio",
          "signature": "a-\u003ea-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#v:k2n-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efor sorting hashes\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.HashWord\",\"Bio.Sequence\"]",
          "name": "ksort",
          "package": "bio",
          "signature": "[k] -\u003e [k]",
          "source": "src/Bio-Sequence-HashWord.html#HashF",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#v:ksort\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:ksort\"]"
        },
        "index": {
          "description": "for sorting hashes",
          "hierarchy": "Bio Sequence HashWord",
          "module": "Bio.Sequence.HashWord",
          "name": "ksort",
          "normalized": "[a]-\u003e[a]",
          "package": "bio",
          "signature": "[k]-\u003e[k]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#v:ksort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.HashWord",
          "name": "n2i'",
          "package": "bio",
          "signature": "a -\u003e SeqData -\u003e a",
          "source": "src/Bio-Sequence-HashWord.html#n2i%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence HashWord",
          "module": "Bio.Sequence.HashWord",
          "name": "n2i'",
          "normalized": "a-\u003eSeqData-\u003ea",
          "package": "bio",
          "signature": "a-\u003eSeqData-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#v:n2i-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.HashWord",
          "name": "n2k",
          "package": "bio",
          "signature": "Int -\u003e SeqData -\u003e k",
          "source": "src/Bio-Sequence-HashWord.html#n2k",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence HashWord",
          "module": "Bio.Sequence.HashWord",
          "name": "n2k",
          "normalized": "Int-\u003eSeqData-\u003ea",
          "package": "bio",
          "signature": "Int-\u003eSeqData-\u003ek",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#v:n2k"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003econtigous\u003c/a\u003e\u003c/code\u003e, but returns the same hash for a word and its reverse complement.\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.HashWord\",\"Bio.Sequence\"]",
          "name": "rcontig",
          "package": "bio",
          "signature": "Int -\u003e HashF k",
          "source": "src/Bio-Sequence-HashWord.html#rcontig",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#v:rcontig\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:rcontig\"]"
        },
        "index": {
          "description": "Like contigous but returns the same hash for word and its reverse complement",
          "hierarchy": "Bio Sequence HashWord",
          "module": "Bio.Sequence.HashWord",
          "name": "rcontig",
          "normalized": "Int-\u003eHashF a",
          "package": "bio",
          "signature": "Int-\u003eHashF k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#v:rcontig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003ercontig\u003c/code\u003e, but ignoring monomers (i.e. arbitrarily long runs of a single nucelotide\n   are treated the same a single nucleotide.\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.HashWord\",\"Bio.Sequence\"]",
          "name": "rcpacked",
          "package": "bio",
          "signature": "Int -\u003e HashF k",
          "source": "src/Bio-Sequence-HashWord.html#rcpacked",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#v:rcpacked\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:rcpacked\"]"
        },
        "index": {
          "description": "Like rcontig but ignoring monomers i.e arbitrarily long runs of single nucelotide are treated the same single nucleotide",
          "hierarchy": "Bio Sequence HashWord",
          "module": "Bio.Sequence.HashWord",
          "name": "rcpacked",
          "normalized": "Int-\u003eHashF a",
          "package": "bio",
          "signature": "Int-\u003eHashF k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#v:rcpacked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.HashWord",
          "name": "unval",
          "package": "bio",
          "signature": "a -\u003e Char",
          "source": "src/Bio-Sequence-HashWord.html#unval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence HashWord",
          "module": "Bio.Sequence.HashWord",
          "name": "unval",
          "normalized": "a-\u003eChar",
          "package": "bio",
          "signature": "a-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#v:unval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.HashWord",
          "name": "val",
          "package": "bio",
          "signature": "Char -\u003e t",
          "source": "src/Bio-Sequence-HashWord.html#val",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence HashWord",
          "module": "Bio.Sequence.HashWord",
          "name": "val",
          "normalized": "Char-\u003ea",
          "package": "bio",
          "signature": "Char-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-HashWord.html#v:val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctionality for manipulating KEGG annotations.\n\u003c/p\u003e\u003cp\u003eKEGG is a bit hard find, but there exist species-specific tables\n   Available organisms are listed in the table at\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eftp://ftp.genome.jp/pub/kegg/genes/etc/all_species.tab\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eData for each organism is stored its own subdirectory under\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eftp://ftp.genome.jp/pub/kegg/genes/organisms/\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eContaining tables linking everything -- including external resources like\n   UniProt, PDB, or NCBI -- together.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Sequence.KEGG",
          "name": "KEGG",
          "package": "bio",
          "source": "src/Bio-Sequence-KEGG.html",
          "type": "module"
        },
        "index": {
          "description": "Functionality for manipulating KEGG annotations KEGG is bit hard find but there exist species-specific tables Available organisms are listed in the table at ftp ftp.genome.jp pub kegg genes etc all species.tab Data for each organism is stored its own subdirectory under ftp ftp.genome.jp pub kegg genes organisms Containing tables linking everything including external resources like UniProt PDB or NCBI together",
          "hierarchy": "Bio Sequence KEGG",
          "module": "Bio.Sequence.KEGG",
          "name": "KEGG",
          "package": "bio",
          "partial": "KEGG",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-KEGG.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.KEGG",
          "name": "KO",
          "package": "bio",
          "source": "src/Bio-Sequence-KEGG.html#KO",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Bio Sequence KEGG",
          "module": "Bio.Sequence.KEGG",
          "name": "KO",
          "package": "bio",
          "partial": "KO",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-KEGG.html#t:KO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.KEGG",
          "name": "KO",
          "package": "bio",
          "signature": "KO ByteString",
          "source": "src/Bio-Sequence-KEGG.html#KO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence KEGG",
          "module": "Bio.Sequence.KEGG",
          "name": "KO",
          "package": "bio",
          "partial": "KO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-KEGG.html#v:KO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert KO IDs (ko:xxxxx) to the \u003ca\u003eKO\u003c/a\u003e data type.\n\u003c/p\u003e",
          "module": "Bio.Sequence.KEGG",
          "name": "decodeKO",
          "package": "bio",
          "signature": "ByteString -\u003e KO",
          "source": "src/Bio-Sequence-KEGG.html#decodeKO",
          "type": "function"
        },
        "index": {
          "description": "Convert KO IDs ko xxxxx to the KO data type",
          "hierarchy": "Bio Sequence KEGG",
          "module": "Bio.Sequence.KEGG",
          "name": "decodeKO",
          "normalized": "ByteString-\u003eKO",
          "package": "bio",
          "partial": "KO",
          "signature": "ByteString-\u003eKO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-KEGG.html#v:decodeKO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert UniProt IDs (up:xxxxxx) to the \u003ca\u003eUniProtAcc\u003c/a\u003e type.\n\u003c/p\u003e",
          "module": "Bio.Sequence.KEGG",
          "name": "decodeUP",
          "package": "bio",
          "signature": "ByteString -\u003e UniProtAcc",
          "source": "src/Bio-Sequence-KEGG.html#decodeUP",
          "type": "function"
        },
        "index": {
          "description": "Convert UniProt IDs up xxxxxx to the UniProtAcc type",
          "hierarchy": "Bio Sequence KEGG",
          "module": "Bio.Sequence.KEGG",
          "name": "decodeUP",
          "normalized": "ByteString-\u003eUniProtAcc",
          "package": "bio",
          "partial": "UP",
          "signature": "ByteString-\u003eUniProtAcc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-KEGG.html#v:decodeUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMost KEGG files that contain associations, have one association per line,\n   consisting of two items separated by whitespace.  This is a generalized reader\n   function.\n\u003c/p\u003e",
          "module": "Bio.Sequence.KEGG",
          "name": "genReadKegg",
          "package": "bio",
          "signature": "FilePath -\u003e IO [(ByteString, ByteString)]",
          "source": "src/Bio-Sequence-KEGG.html#genReadKegg",
          "type": "function"
        },
        "index": {
          "description": "Most KEGG files that contain associations have one association per line consisting of two items separated by whitespace This is generalized reader function",
          "hierarchy": "Bio Sequence KEGG",
          "module": "Bio.Sequence.KEGG",
          "name": "genReadKegg",
          "normalized": "FilePath-\u003eIO[(ByteString,ByteString)]",
          "package": "bio",
          "partial": "Read Kegg",
          "signature": "FilePath-\u003eIO[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-KEGG.html#v:genReadKegg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKEGG uses strings with an identifying prefix for IDs. This helper function checks\n   and removes prefix to construct native values.\n\u003c/p\u003e",
          "module": "Bio.Sequence.KEGG",
          "name": "removePrefix",
          "package": "bio",
          "signature": "String -\u003e String -\u003e (ByteString -\u003e a) -\u003e ByteString -\u003e a",
          "source": "src/Bio-Sequence-KEGG.html#removePrefix",
          "type": "function"
        },
        "index": {
          "description": "KEGG uses strings with an identifying prefix for IDs This helper function checks and removes prefix to construct native values",
          "hierarchy": "Bio Sequence KEGG",
          "module": "Bio.Sequence.KEGG",
          "name": "removePrefix",
          "normalized": "String-\u003eString-\u003e(ByteString-\u003ea)-\u003eByteString-\u003ea",
          "package": "bio",
          "partial": "Prefix",
          "signature": "String-\u003eString-\u003e(ByteString-\u003ea)-\u003eByteString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-KEGG.html#v:removePrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse phd files (phred base calling output).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Sequence.Phd",
          "name": "Phd",
          "package": "bio",
          "source": "src/Bio-Sequence-Phd.html",
          "type": "module"
        },
        "index": {
          "description": "Parse phd files phred base calling output",
          "hierarchy": "Bio Sequence Phd",
          "module": "Bio.Sequence.Phd",
          "name": "Phd",
          "package": "bio",
          "partial": "Phd",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Phd.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse .phd contents from a handle\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.Phd\",\"Bio.Sequence\"]",
          "name": "hReadPhd",
          "package": "bio",
          "signature": "Handle -\u003e IO (Sequence Nuc)",
          "source": "src/Bio-Sequence-Phd.html#hReadPhd",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Phd.html#v:hReadPhd\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:hReadPhd\"]"
        },
        "index": {
          "description": "Parse phd contents from handle",
          "hierarchy": "Bio Sequence Phd",
          "module": "Bio.Sequence.Phd",
          "name": "hReadPhd",
          "normalized": "Handle-\u003eIO(Sequence Nuc)",
          "package": "bio",
          "partial": "Read Phd",
          "signature": "Handle-\u003eIO(Sequence Nuc)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Phd.html#v:hReadPhd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a .phd file, extracting the contents as a Sequence\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.Phd\",\"Bio.Sequence\"]",
          "name": "readPhd",
          "package": "bio",
          "signature": "FilePath -\u003e IO (Sequence Nuc)",
          "source": "src/Bio-Sequence-Phd.html#readPhd",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Phd.html#v:readPhd\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:readPhd\"]"
        },
        "index": {
          "description": "Parse phd file extracting the contents as Sequence",
          "hierarchy": "Bio Sequence Phd",
          "module": "Bio.Sequence.Phd",
          "name": "readPhd",
          "normalized": "FilePath-\u003eIO(Sequence Nuc)",
          "package": "bio",
          "partial": "Phd",
          "signature": "FilePath-\u003eIO(Sequence Nuc)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-Phd.html#v:readPhd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead and write the SFF file format used by\n   Roche/454 sequencing to store flowgram data.\n\u003c/p\u003e\u003cp\u003eA flowgram is a series of values (intensities) representing homopolymer runs of\n   A,G,C, and T in a fixed cycle, and usually displayed as a histogram.\n\u003c/p\u003e\u003cp\u003eThis file is based on information in the Roche FLX manual.  Among other sources for information about\n   the format, are The Staden Package, which contains an io_lib with a C routine for parsing this format.\n   According to comments in the sources, the io_lib implementation is based on a file\n   called getsff.c, which I've been unable to track down.  Other software parsing SFFs \n   are QIIME, sff_extract, and Celera's sffToCa.\n\u003c/p\u003e\u003cp\u003eIt is believed that all values are stored big endian.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "SFF",
          "package": "bio",
          "source": "src/Bio-Sequence-SFF.html",
          "type": "module"
        },
        "index": {
          "description": "Read and write the SFF file format used by Roche sequencing to store flowgram data flowgram is series of values intensities representing homopolymer runs of and in fixed cycle and usually displayed as histogram This file is based on information in the Roche FLX manual Among other sources for information about the format are The Staden Package which contains an io lib with routine for parsing this format According to comments in the sources the io lib implementation is based on file called getsff.c which ve been unable to track down Other software parsing SFFs are QIIME sff extract and Celera sffToCa It is believed that all values are stored big endian",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "SFF",
          "package": "bio",
          "partial": "SFF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSFF has a 31-byte common header\n\u003c/p\u003e\u003cp\u003eThe format is open to having the index anywhere between reads,\n   we should really keep count and check for each read.  In practice, it\n   seems to be places after the reads.\n\u003c/p\u003e\u003cp\u003eThe following two fields are considered part of the header, but as\n   they are static, they are not part of the data structure\n\u003c/p\u003e\u003cpre\u003e        \n     magic   :: Word32   -- 0x2e736666, i.e. the string \".sff\"\n     version :: Word32   -- 0x00000001\n\u003c/pre\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "CommonHeader",
          "package": "bio",
          "source": "src/Bio-Sequence-SFF.html#CommonHeader",
          "type": "data"
        },
        "index": {
          "description": "SFF has byte common header The format is open to having the index anywhere between reads we should really keep count and check for each read In practice it seems to be places after the reads The following two fields are considered part of the header but as they are static they are not part of the data structure magic Word32 x2e736666 i.e the string sff version Word32 x00000001",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "CommonHeader",
          "package": "bio",
          "partial": "Common Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#t:CommonHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of flowgram value\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "Flow",
          "package": "bio",
          "source": "src/Bio-Sequence-SFF.html#Flow",
          "type": "type"
        },
        "index": {
          "description": "The type of flowgram value",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "Flow",
          "package": "bio",
          "partial": "Flow",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#t:Flow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "Index",
          "package": "bio",
          "source": "src/Bio-Sequence-SFF.html#Index",
          "type": "type"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "Index",
          "package": "bio",
          "partial": "Index",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#t:Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic type for quality data.  Range 0..255.  Typical Phred output is in\n   the range 6..50, with 20 as the line in the sand separating good from bad.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "Qual",
          "package": "bio",
          "source": "src/Bio-Sequence-SeqData.html#Qual",
          "type": "type"
        },
        "index": {
          "description": "Basic type for quality data Range Typical Phred output is in the range with as the line in the sand separating good from bad",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "Qual",
          "package": "bio",
          "partial": "Qual",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#t:Qual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuality data is a \u003ccode\u003e\u003ca\u003eQual\u003c/a\u003e\u003c/code\u003e vector, currently implemented as a \u003ccode\u003eByteString\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "QualData",
          "package": "bio",
          "source": "src/Bio-Sequence-SeqData.html#QualData",
          "type": "type"
        },
        "index": {
          "description": "Quality data is Qual vector currently implemented as ByteString",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "QualData",
          "package": "bio",
          "partial": "Qual Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#t:QualData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis contains the actual flowgram for a single read.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "ReadBlock",
          "package": "bio",
          "source": "src/Bio-Sequence-SFF.html#ReadBlock",
          "type": "data"
        },
        "index": {
          "description": "This contains the actual flowgram for single read",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "ReadBlock",
          "package": "bio",
          "partial": "Read Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#t:ReadBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach Read has a fixed read header, containing various information.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "ReadHeader",
          "package": "bio",
          "source": "src/Bio-Sequence-SFF.html#ReadHeader",
          "type": "data"
        },
        "index": {
          "description": "Each Read has fixed read header containing various information",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "ReadHeader",
          "package": "bio",
          "partial": "Read Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#t:ReadHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead names encode various information, as per this struct.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "ReadName",
          "package": "bio",
          "source": "src/Bio-Sequence-SFF_name.html#ReadName",
          "type": "data"
        },
        "index": {
          "description": "Read names encode various information as per this struct",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "ReadName",
          "package": "bio",
          "partial": "Read Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#t:ReadName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data structure storing the contents of an SFF file (modulo the index)\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "SFF",
          "package": "bio",
          "source": "src/Bio-Sequence-SFF.html#SFF",
          "type": "data"
        },
        "index": {
          "description": "The data structure storing the contents of an SFF file modulo the index",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "SFF",
          "package": "bio",
          "partial": "SFF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#t:SFF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic data type used in \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "SeqData",
          "package": "bio",
          "source": "src/Bio-Sequence-SeqData.html#SeqData",
          "type": "type"
        },
        "index": {
          "description": "The basic data type used in Sequence",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "SeqData",
          "package": "bio",
          "partial": "Seq Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#t:SeqData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "CommonHeader",
          "package": "bio",
          "signature": "CommonHeader",
          "source": "src/Bio-Sequence-SFF.html#CommonHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "CommonHeader",
          "package": "bio",
          "partial": "Common Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:CommonHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "ReadBlock",
          "package": "bio",
          "signature": "ReadBlock",
          "source": "src/Bio-Sequence-SFF.html#ReadBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "ReadBlock",
          "package": "bio",
          "partial": "Read Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:ReadBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "ReadHeader",
          "package": "bio",
          "signature": "ReadHeader",
          "source": "src/Bio-Sequence-SFF.html#ReadHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "ReadHeader",
          "package": "bio",
          "partial": "Read Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:ReadHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SFF\",\"Bio.Sequence.SFF_name\"]",
          "name": "ReadName",
          "package": "bio",
          "signature": "ReadName",
          "source": "src/Bio-Sequence-SFF_name.html#ReadName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:ReadName\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_name.html#v:ReadName\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "ReadName",
          "package": "bio",
          "partial": "Read Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:ReadName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "SFF",
          "package": "bio",
          "signature": "SFF !CommonHeader [ReadBlock]",
          "source": "src/Bio-Sequence-SFF.html#SFF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "SFF",
          "normalized": "SFF CommonHeader[ReadBlock]",
          "package": "bio",
          "partial": "SFF",
          "signature": "SFF CommonHeader[ReadBlock]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:SFF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a sequence position to the corresponding flow position\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "baseToFlowPos",
          "package": "bio",
          "signature": "ReadBlock -\u003e i -\u003e Int",
          "source": "src/Bio-Sequence-SFF.html#baseToFlowPos",
          "type": "function"
        },
        "index": {
          "description": "Convert sequence position to the corresponding flow position",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "baseToFlowPos",
          "normalized": "ReadBlock-\u003ea-\u003eInt",
          "package": "bio",
          "partial": "To Flow Pos",
          "signature": "ReadBlock-\u003ei-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:baseToFlowPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "bases",
          "package": "bio",
          "signature": "SeqData",
          "source": "src/Bio-Sequence-SFF.html#ReadBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "bases",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:bases"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "clip_adapter_left",
          "package": "bio",
          "signature": "Int16",
          "source": "src/Bio-Sequence-SFF.html#ReadHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "clip_adapter_left",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:clip_adapter_left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "clip_adapter_right",
          "package": "bio",
          "signature": "Int16",
          "source": "src/Bio-Sequence-SFF.html#ReadHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "clip_adapter_right",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:clip_adapter_right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "clip_qual_left",
          "package": "bio",
          "signature": "Int16",
          "source": "src/Bio-Sequence-SFF.html#ReadHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "clip_qual_left",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:clip_qual_left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "clip_qual_right",
          "package": "bio",
          "signature": "Int16",
          "source": "src/Bio-Sequence-SFF.html#ReadHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "clip_qual_right",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:clip_qual_right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a file by decoding it and re-encoding it\n   This will lose the index (which isn't really necessary)\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "convert",
          "package": "bio",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/Bio-Sequence-SFF.html#convert",
          "type": "function"
        },
        "index": {
          "description": "Convert file by decoding it and re-encoding it This will lose the index which isn really necessary",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "convert",
          "normalized": "FilePath-\u003eIO()",
          "package": "bio",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:convert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the index as absolute coordinates, not relative.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "cumulative_index",
          "package": "bio",
          "signature": "ReadBlock -\u003e [Int]",
          "source": "src/Bio-Sequence-SFF.html#cumulative_index",
          "type": "function"
        },
        "index": {
          "description": "Extract the index as absolute coordinates not relative",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "cumulative_index",
          "normalized": "ReadBlock-\u003e[Int]",
          "package": "bio",
          "signature": "ReadBlock-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:cumulative_index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SFF\",\"Bio.Sequence.SFF_name\"]",
          "name": "date",
          "package": "bio",
          "signature": "(Int, Int, Int)",
          "source": "src/Bio-Sequence-SFF_name.html#ReadName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:date\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_name.html#v:date\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "date",
          "normalized": "(Int,Int,Int)",
          "package": "bio",
          "signature": "(Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SFF\",\"Bio.Sequence.SFF_name\"]",
          "name": "decodeReadName",
          "package": "bio",
          "signature": "ByteString -\u003e Maybe ReadName",
          "source": "src/Bio-Sequence-SFF_name.html#decodeReadName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:decodeReadName\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_name.html#v:decodeReadName\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "decodeReadName",
          "normalized": "ByteString-\u003eMaybe ReadName",
          "package": "bio",
          "partial": "Read Name",
          "signature": "ByteString-\u003eMaybe ReadName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:decodeReadName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SFF\",\"Bio.Sequence.SFF_name\"]",
          "name": "encodeReadName",
          "package": "bio",
          "signature": "ReadName -\u003e ByteString",
          "source": "src/Bio-Sequence-SFF_name.html#encodeReadName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:encodeReadName\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_name.html#v:encodeReadName\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "encodeReadName",
          "normalized": "ReadName-\u003eByteString",
          "package": "bio",
          "partial": "Read Name",
          "signature": "ReadName-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:encodeReadName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "flow",
          "package": "bio",
          "signature": "ByteString",
          "source": "src/Bio-Sequence-SFF.html#CommonHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "flow",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:flow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a flow position to the corresponding sequence position\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "flowToBasePos",
          "package": "bio",
          "signature": "ReadBlock -\u003e i -\u003e Int",
          "source": "src/Bio-Sequence-SFF.html#flowToBasePos",
          "type": "function"
        },
        "index": {
          "description": "Convert flow position to the corresponding sequence position",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "flowToBasePos",
          "normalized": "ReadBlock-\u003ea-\u003eInt",
          "package": "bio",
          "partial": "To Base Pos",
          "signature": "ReadBlock-\u003ei-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:flowToBasePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "flow_data",
          "package": "bio",
          "signature": "ByteString",
          "source": "src/Bio-Sequence-SFF.html#ReadBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "flow_data",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:flow_data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "flow_index",
          "package": "bio",
          "signature": "ByteString",
          "source": "src/Bio-Sequence-SFF.html#ReadBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "flow_index",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:flow_index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "flow_length",
          "package": "bio",
          "signature": "Int16",
          "source": "src/Bio-Sequence-SFF.html#CommonHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "flow_length",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:flow_length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to access the flowgram\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "flowgram",
          "package": "bio",
          "signature": "ReadBlock -\u003e [Flow]",
          "source": "src/Bio-Sequence-SFF.html#flowgram",
          "type": "function"
        },
        "index": {
          "description": "Helper function to access the flowgram",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "flowgram",
          "normalized": "ReadBlock-\u003e[Flow]",
          "package": "bio",
          "signature": "ReadBlock-\u003e[Flow]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:flowgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "flowgram_fmt",
          "package": "bio",
          "signature": "Word8",
          "source": "src/Bio-Sequence-SFF.html#CommonHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "flowgram_fmt",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:flowgram_fmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "index_length",
          "package": "bio",
          "signature": "Int32",
          "source": "src/Bio-Sequence-SFF.html#CommonHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "index_length",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:index_length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePoints to a text(?) section\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "index_offset",
          "package": "bio",
          "signature": "Int64",
          "source": "src/Bio-Sequence-SFF.html#CommonHeader",
          "type": "function"
        },
        "index": {
          "description": "Points to text section",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "index_offset",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:index_offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "key",
          "package": "bio",
          "signature": "ByteString",
          "source": "src/Bio-Sequence-SFF.html#CommonHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "key",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "key_length",
          "package": "bio",
          "signature": "Int16",
          "source": "src/Bio-Sequence-SFF.html#CommonHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "key_length",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:key_length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the sequence with masked bases in lower case\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "masked_bases",
          "package": "bio",
          "signature": "ReadBlock -\u003e SeqData",
          "source": "src/Bio-Sequence-SFF.html#masked_bases",
          "type": "function"
        },
        "index": {
          "description": "Extract the sequence with masked bases in lower case",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "masked_bases",
          "normalized": "ReadBlock-\u003eSeqData",
          "package": "bio",
          "signature": "ReadBlock-\u003eSeqData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:masked_bases"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "name_length",
          "package": "bio",
          "signature": "Int16",
          "source": "src/Bio-Sequence-SFF.html#ReadHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "name_length",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:name_length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "num_bases",
          "package": "bio",
          "signature": "Int32",
          "source": "src/Bio-Sequence-SFF.html#ReadHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "num_bases",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:num_bases"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "num_reads",
          "package": "bio",
          "signature": "Int32",
          "source": "src/Bio-Sequence-SFF.html#CommonHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "num_reads",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:num_reads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePack a list of flows into the corresponding binary structure (the flow_data field)\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "packFlows",
          "package": "bio",
          "signature": "[Flow] -\u003e ByteString",
          "source": "src/Bio-Sequence-SFF.html#packFlows",
          "type": "function"
        },
        "index": {
          "description": "Pack list of flows into the corresponding binary structure the flow data field",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "packFlows",
          "normalized": "[Flow]-\u003eByteString",
          "package": "bio",
          "partial": "Flows",
          "signature": "[Flow]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:packFlows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "quality",
          "package": "bio",
          "signature": "QualData",
          "source": "src/Bio-Sequence-SFF.html#ReadBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "quality",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:quality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the sequence information from a \u003ccode\u003e\u003ca\u003eReadBlock\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "rbToSequence",
          "package": "bio",
          "signature": "ReadBlock -\u003e Sequence Nuc",
          "source": "src/Bio-Sequence-SFF.html#rbToSequence",
          "type": "function"
        },
        "index": {
          "description": "Extract the sequence information from ReadBlock",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "rbToSequence",
          "normalized": "ReadBlock-\u003eSequence Nuc",
          "package": "bio",
          "partial": "To Sequence",
          "signature": "ReadBlock-\u003eSequence Nuc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:rbToSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an SFF file.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "readSFF",
          "package": "bio",
          "signature": "FilePath -\u003e IO SFF",
          "source": "src/Bio-Sequence-SFF.html#readSFF",
          "type": "function"
        },
        "index": {
          "description": "Read an SFF file",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "readSFF",
          "normalized": "FilePath-\u003eIO SFF",
          "package": "bio",
          "partial": "SFF",
          "signature": "FilePath-\u003eIO SFF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:readSFF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "read_header",
          "package": "bio",
          "signature": "ReadHeader",
          "source": "src/Bio-Sequence-SFF.html#ReadBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "read_header",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:read_header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF",
          "name": "read_name",
          "package": "bio",
          "signature": "ByteString",
          "source": "src/Bio-Sequence-SFF.html#ReadHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "read_name",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:read_name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an SFF file, but be resilient against errors.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "recoverSFF",
          "package": "bio",
          "signature": "FilePath -\u003e IO SFF",
          "source": "src/Bio-Sequence-SFF.html#recoverSFF",
          "type": "function"
        },
        "index": {
          "description": "Read an SFF file but be resilient against errors",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "recoverSFF",
          "normalized": "FilePath-\u003eIO SFF",
          "package": "bio",
          "partial": "SFF",
          "signature": "FilePath-\u003eIO SFF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:recoverSFF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SFF\",\"Bio.Sequence.SFF_name\"]",
          "name": "region",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Sequence-SFF_name.html#ReadName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:region\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_name.html#v:region\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "region",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:region"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the sequences from an \u003ccode\u003e\u003ca\u003eSFF\u003c/a\u003e\u003c/code\u003e data structure.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "sffToSequence",
          "package": "bio",
          "signature": "SFF -\u003e [Sequence Nuc]",
          "source": "src/Bio-Sequence-SFF.html#sffToSequence",
          "type": "function"
        },
        "index": {
          "description": "Extract the sequences from an SFF data structure",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "sffToSequence",
          "normalized": "SFF-\u003e[Sequence Nuc]",
          "package": "bio",
          "partial": "To Sequence",
          "signature": "SFF-\u003e[Sequence Nuc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:sffToSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etest serialization by output'ing the header and first two reads \n   in an SFF, and the same after a decode + encode cycle.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "test",
          "package": "bio",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/Bio-Sequence-SFF.html#test",
          "type": "function"
        },
        "index": {
          "description": "test serialization by output ing the header and first two reads in an SFF and the same after decode encode cycle",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "test",
          "normalized": "FilePath-\u003eIO()",
          "package": "bio",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SFF\",\"Bio.Sequence.SFF_name\"]",
          "name": "time",
          "package": "bio",
          "signature": "(Int, Int, Int)",
          "source": "src/Bio-Sequence-SFF_name.html#ReadName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:time\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_name.html#v:time\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "time",
          "normalized": "(Int,Int,Int)",
          "package": "bio",
          "signature": "(Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrim a read according to clipping information\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "trim",
          "package": "bio",
          "signature": "ReadBlock -\u003e ReadBlock",
          "source": "src/Bio-Sequence-SFF.html#trim",
          "type": "function"
        },
        "index": {
          "description": "Trim read according to clipping information",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "trim",
          "normalized": "ReadBlock-\u003eReadBlock",
          "package": "bio",
          "signature": "ReadBlock-\u003eReadBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:trim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrim a \u003ccode\u003e\u003ca\u003eReadBlock\u003c/a\u003e\u003c/code\u003e limiting the number of flows.  If writing to\n   an SFF file, make sure you update the \u003ccode\u003e\u003ca\u003eCommonHeader\u003c/a\u003e\u003c/code\u003e accordingly.\n   See \u003ccode\u003eexamples/Flx.hs\u003c/code\u003e for how to use this.  \n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "trimFlows",
          "package": "bio",
          "signature": "i -\u003e ReadBlock -\u003e ReadBlock",
          "source": "src/Bio-Sequence-SFF.html#trimFlows",
          "type": "function"
        },
        "index": {
          "description": "Trim ReadBlock limiting the number of flows If writing to an SFF file make sure you update the CommonHeader accordingly See examples Flx.hs for how to use this",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "trimFlows",
          "normalized": "a-\u003eReadBlock-\u003eReadBlock",
          "package": "bio",
          "partial": "Flows",
          "signature": "i-\u003eReadBlock-\u003eReadBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:trimFlows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrim a read to specific sequence position, inclusive bounds.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "trimFromTo",
          "package": "bio",
          "signature": "i -\u003e i -\u003e ReadBlock -\u003e ReadBlock",
          "source": "src/Bio-Sequence-SFF.html#trimFromTo",
          "type": "function"
        },
        "index": {
          "description": "Trim read to specific sequence position inclusive bounds",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "trimFromTo",
          "normalized": "a-\u003ea-\u003eReadBlock-\u003eReadBlock",
          "package": "bio",
          "partial": "From To",
          "signature": "i-\u003ei-\u003eReadBlock-\u003eReadBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:trimFromTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the read without the initial (TCAG) key.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "trimKey",
          "package": "bio",
          "signature": "CommonHeader -\u003e Sequence Nuc -\u003e Maybe (Sequence Nuc)",
          "source": "src/Bio-Sequence-SFF.html#trimKey",
          "type": "function"
        },
        "index": {
          "description": "Extract the read without the initial TCAG key",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "trimKey",
          "normalized": "CommonHeader-\u003eSequence Nuc-\u003eMaybe(Sequence Nuc)",
          "package": "bio",
          "partial": "Key",
          "signature": "CommonHeader-\u003eSequence Nuc-\u003eMaybe(Sequence Nuc)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:trimKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnpack the flow_data field into a list of flow values\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "unpackFlows",
          "package": "bio",
          "signature": "ByteString -\u003e [Flow]",
          "source": "src/Bio-Sequence-SFF.html#unpackFlows",
          "type": "function"
        },
        "index": {
          "description": "Unpack the flow data field into list of flow values",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "unpackFlows",
          "normalized": "ByteString-\u003e[Flow]",
          "package": "bio",
          "partial": "Flows",
          "signature": "ByteString-\u003e[Flow]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:unpackFlows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an \u003ccode\u003e\u003ca\u003eSFF\u003c/a\u003e\u003c/code\u003e to the specified file name\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "writeSFF",
          "package": "bio",
          "signature": "FilePath -\u003e SFF -\u003e IO ()",
          "source": "src/Bio-Sequence-SFF.html#writeSFF",
          "type": "function"
        },
        "index": {
          "description": "Write an SFF to the specified file name",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "writeSFF",
          "normalized": "FilePath-\u003eSFF-\u003eIO()",
          "package": "bio",
          "partial": "SFF",
          "signature": "FilePath-\u003eSFF-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:writeSFF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an \u003ccode\u003e\u003ca\u003eSFF\u003c/a\u003e\u003c/code\u003e to the specified file name, but go back and\n   update the read count.  Useful if you want to output a lazy\n   stream of \u003ccode\u003e\u003ca\u003eReadBlock\u003c/a\u003e\u003c/code\u003es.  Returns the number of reads written.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF",
          "name": "writeSFF'",
          "package": "bio",
          "signature": "FilePath -\u003e SFF -\u003e IO Int",
          "source": "src/Bio-Sequence-SFF.html#writeSFF%27",
          "type": "function"
        },
        "index": {
          "description": "Write an SFF to the specified file name but go back and update the read count Useful if you want to output lazy stream of ReadBlock Returns the number of reads written",
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "writeSFF'",
          "normalized": "FilePath-\u003eSFF-\u003eIO Int",
          "package": "bio",
          "partial": "SFF'",
          "signature": "FilePath-\u003eSFF-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:writeSFF-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SFF\",\"Bio.Sequence.SFF_name\"]",
          "name": "x_loc",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Sequence-SFF_name.html#ReadName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:x_loc\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_name.html#v:x_loc\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "x_loc",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:x_loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SFF\",\"Bio.Sequence.SFF_name\"]",
          "name": "y_loc",
          "package": "bio",
          "signature": "Int",
          "source": "src/Bio-Sequence-SFF_name.html#ReadName",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:y_loc\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_name.html#v:y_loc\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF",
          "module": "Bio.Sequence.SFF",
          "name": "y_loc",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF.html#v:y_loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis implements a number of filters used in the Titanium pipeline, \n   based on published documentation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "SFF_filters",
          "package": "bio",
          "source": "src/Bio-Sequence-SFF_filters.html",
          "type": "module"
        },
        "index": {
          "description": "This implements number of filters used in the Titanium pipeline based on published documentation",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "SFF_filters",
          "package": "bio",
          "partial": "SFF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_filters.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscardFilters determine whether a read is to be retained or discarded\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "DiscardFilter",
          "package": "bio",
          "source": "src/Bio-Sequence-SFF_filters.html#DiscardFilter",
          "type": "type"
        },
        "index": {
          "description": "DiscardFilters determine whether read is to be retained or discarded",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "DiscardFilter",
          "package": "bio",
          "partial": "Discard Filter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_filters.html#t:DiscardFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrimFilters modify the read, typically trimming it for quality\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "TrimFilter",
          "package": "bio",
          "source": "src/Bio-Sequence-SFF_filters.html#TrimFilter",
          "type": "type"
        },
        "index": {
          "description": "TrimFilters modify the read typically trimming it for quality",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "TrimFilter",
          "package": "bio",
          "partial": "Trim Filter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_filters.html#t:TrimFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate average of a list\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "avg",
          "package": "bio",
          "signature": "[a] -\u003e Double",
          "source": "src/Bio-Sequence-SFF_filters.html#avg",
          "type": "function"
        },
        "index": {
          "description": "Calculate average of list",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "avg",
          "normalized": "[a]-\u003eDouble",
          "package": "bio",
          "signature": "[a]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_filters.html#v:avg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate a number of flows to position in sequence, and update clipping data accordingly\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "clipFlows",
          "package": "bio",
          "signature": "ReadBlock -\u003e Int -\u003e ReadBlock",
          "source": "src/Bio-Sequence-SFF_filters.html#clipFlows",
          "type": "function"
        },
        "index": {
          "description": "Translate number of flows to position in sequence and update clipping data accordingly",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "clipFlows",
          "normalized": "ReadBlock-\u003eInt-\u003eReadBlock",
          "package": "bio",
          "partial": "Flows",
          "signature": "ReadBlock-\u003eInt-\u003eReadBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_filters.html#v:clipFlows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate clip_qual_right if more severe than previous value\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "clipSeq",
          "package": "bio",
          "signature": "ReadBlock -\u003e Int -\u003e ReadBlock",
          "source": "src/Bio-Sequence-SFF_filters.html#clipSeq",
          "type": "function"
        },
        "index": {
          "description": "Update clip qual right if more severe than previous value",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "clipSeq",
          "normalized": "ReadBlock-\u003eInt-\u003eReadBlock",
          "package": "bio",
          "partial": "Seq",
          "signature": "ReadBlock-\u003eInt-\u003eReadBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_filters.html#v:clipSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003col\u003e\u003cli\u003e2.2.1.2 The \u003ca\u003edots\u003c/a\u003e filter discards sequences where the last positive flow is \n   before flow 84, and flows with \u003e5% dots (i.e. three successive noise values) \n   before the last postitive flow.  The percentage can be given as a parameter.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "discard_dots",
          "package": "bio",
          "signature": "Double -\u003e DiscardFilter",
          "source": "src/Bio-Sequence-SFF_filters.html#discard_dots",
          "type": "function"
        },
        "index": {
          "description": "The dots filter discards sequences where the last positive flow is before flow and flows with dots i.e three successive noise values before the last postitive flow The percentage can be given as parameter",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "discard_dots",
          "normalized": "Double-\u003eDiscardFilter",
          "package": "bio",
          "signature": "Double-\u003eDiscardFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_filters.html#v:discard_dots"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis filter discards empty sequences.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "discard_empty",
          "package": "bio",
          "signature": "DiscardFilter",
          "source": "src/Bio-Sequence-SFF_filters.html#discard_empty",
          "type": "function"
        },
        "index": {
          "description": "This filter discards empty sequences",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "discard_empty",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_filters.html#v:discard_empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscard sequences that don't have the given key tag (typically TCAG) at the start\n   of the read.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "discard_key",
          "package": "bio",
          "signature": "String -\u003e DiscardFilter",
          "source": "src/Bio-Sequence-SFF_filters.html#discard_key",
          "type": "function"
        },
        "index": {
          "description": "Discard sequences that don have the given key tag typically TCAG at the start of the read",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "discard_key",
          "normalized": "String-\u003eDiscardFilter",
          "package": "bio",
          "signature": "String-\u003eDiscardFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_filters.html#v:discard_key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscard a read if the number of untrimmed flows is less than n (n=186 for Titanium)\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "discard_length",
          "package": "bio",
          "signature": "Int -\u003e DiscardFilter",
          "source": "src/Bio-Sequence-SFF_filters.html#discard_length",
          "type": "function"
        },
        "index": {
          "description": "Discard read if the number of untrimmed flows is less than for Titanium",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "discard_length",
          "normalized": "Int-\u003eDiscardFilter",
          "package": "bio",
          "signature": "Int-\u003eDiscardFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_filters.html#v:discard_length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003col\u003e\u003cli\u003e2.2.1.3 The \u003ca\u003emixed\u003c/a\u003e filter discards sequences with more than 70% positive flows.  \n   Also, discard with \u003ca\u003enoise,\u003c/a\u003e20% middle (0.45..0.75) or \u003c30% positive.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "discard_mixed",
          "package": "bio",
          "signature": "DiscardFilter",
          "source": "src/Bio-Sequence-SFF_filters.html#discard_mixed",
          "type": "function"
        },
        "index": {
          "description": "The mixed filter discards sequences with more than positive flows Also discard with noise middle or positive",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "discard_mixed",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_filters.html#v:discard_mixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList length as a double (eliminates many instances of fromIntegral)\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "dlength",
          "package": "bio",
          "signature": "[a] -\u003e Double",
          "source": "src/Bio-Sequence-SFF_filters.html#dlength",
          "type": "function"
        },
        "index": {
          "description": "List length as double eliminates many instances of fromIntegral",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "dlength",
          "normalized": "[a]-\u003eDouble",
          "package": "bio",
          "signature": "[a]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_filters.html#v:dlength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_filters",
          "name": "find_primer",
          "package": "bio",
          "signature": "String -\u003e ReadBlock -\u003e Int",
          "source": "src/Bio-Sequence-SFF_filters.html#find_primer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "find_primer",
          "normalized": "String-\u003eReadBlock-\u003eInt",
          "package": "bio",
          "signature": "String-\u003eReadBlock-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_filters.html#v:find_primer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_filters",
          "name": "flx_linker",
          "package": "bio",
          "signature": "String",
          "source": "src/Bio-Sequence-SFF_filters.html#flx_linker",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "flx_linker",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_filters.html#v:flx_linker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_filters",
          "name": "qual20",
          "package": "bio",
          "signature": "Int -\u003e ReadBlock -\u003e Int",
          "source": "src/Bio-Sequence-SFF_filters.html#qual20",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "qual20",
          "normalized": "Int-\u003eReadBlock-\u003eInt",
          "package": "bio",
          "signature": "Int-\u003eReadBlock-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_filters.html#v:qual20"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_filters",
          "name": "rapid_adapter",
          "package": "bio",
          "signature": "String",
          "source": "src/Bio-Sequence-SFF_filters.html#rapid_adapter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "rapid_adapter",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_filters.html#v:rapid_adapter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_filters",
          "name": "rna_adapter",
          "package": "bio",
          "signature": "String",
          "source": "src/Bio-Sequence-SFF_filters.html#rna_adapter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "rna_adapter",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_filters.html#v:rna_adapter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_filters",
          "name": "rna_adapter2",
          "package": "bio",
          "signature": "String",
          "source": "src/Bio-Sequence-SFF_filters.html#rna_adapter2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "rna_adapter2",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_filters.html#v:rna_adapter2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_filters",
          "name": "rna_adapter3",
          "package": "bio",
          "signature": "String",
          "source": "src/Bio-Sequence-SFF_filters.html#rna_adapter3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "rna_adapter3",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_filters.html#v:rna_adapter3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_filters",
          "name": "sigint",
          "package": "bio",
          "signature": "ReadBlock -\u003e Int",
          "source": "src/Bio-Sequence-SFF_filters.html#sigint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "sigint",
          "normalized": "ReadBlock-\u003eInt",
          "package": "bio",
          "signature": "ReadBlock-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_filters.html#v:sigint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_filters",
          "name": "ti_adapter_b",
          "package": "bio",
          "signature": "String",
          "source": "src/Bio-Sequence-SFF_filters.html#ti_adapter_b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "ti_adapter_b",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_filters.html#v:ti_adapter_b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_filters",
          "name": "ti_linker",
          "package": "bio",
          "signature": "String",
          "source": "src/Bio-Sequence-SFF_filters.html#ti_linker",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "ti_linker",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_filters.html#v:ti_linker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003col\u003e\u003cli\u003e2.2.1.5 Primer filter \n This looks for the B-adaptor at the end of the read.  The 454 implementation isn't very\n effective at finding mutated adaptors.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "trim_primer",
          "package": "bio",
          "signature": "String -\u003e TrimFilter",
          "source": "src/Bio-Sequence-SFF_filters.html#trim_primer",
          "type": "function"
        },
        "index": {
          "description": "Primer filter This looks for the B-adaptor at the end of the read The implementation isn very effective at finding mutated adaptors",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "trim_primer",
          "normalized": "String-\u003eTrimFilter",
          "package": "bio",
          "signature": "String-\u003eTrimFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_filters.html#v:trim_primer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003col\u003e\u003cli\u003e2.2.1.7 Quality score trimming trims using a 10-base window until a Q20 average is found.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "trim_qual20",
          "package": "bio",
          "signature": "Int -\u003e TrimFilter",
          "source": "src/Bio-Sequence-SFF_filters.html#trim_qual20",
          "type": "function"
        },
        "index": {
          "description": "Quality score trimming trims using base window until Q20 average is found",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "trim_qual20",
          "normalized": "Int-\u003eTrimFilter",
          "package": "bio",
          "signature": "Int-\u003eTrimFilter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_filters.html#v:trim_qual20"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003col\u003e\u003cli\u003e2.2.1.4 Signal intensity trim - trim back until \u003c3% borderline flows (0.5..0.7).\n   Then trim borderline values or dots from the end (use a window).\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Bio.Sequence.SFF_filters",
          "name": "trim_sigint",
          "package": "bio",
          "signature": "TrimFilter",
          "source": "src/Bio-Sequence-SFF_filters.html#trim_sigint",
          "type": "function"
        },
        "index": {
          "description": "Signal intensity trim trim back until borderline flows Then trim borderline values or dots from the end use window",
          "hierarchy": "Bio Sequence SFF_filters",
          "module": "Bio.Sequence.SFF_filters",
          "name": "trim_sigint",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_filters.html#v:trim_sigint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_name",
          "name": "SFF_name",
          "package": "bio",
          "source": "src/Bio-Sequence-SFF_name.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_name",
          "module": "Bio.Sequence.SFF_name",
          "name": "SFF_name",
          "package": "bio",
          "partial": "SFF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_name.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead names encode various information, as per this struct.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SFF_name",
          "name": "ReadName",
          "package": "bio",
          "source": "src/Bio-Sequence-SFF_name.html#ReadName",
          "type": "data"
        },
        "index": {
          "description": "Read names encode various information as per this struct",
          "hierarchy": "Bio Sequence SFF_name",
          "module": "Bio.Sequence.SFF_name",
          "name": "ReadName",
          "package": "bio",
          "partial": "Read Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_name.html#t:ReadName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_name",
          "name": "b36",
          "package": "bio",
          "signature": "UArray Int Char",
          "source": "src/Bio-Sequence-SFF_name.html#b36",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_name",
          "module": "Bio.Sequence.SFF_name",
          "name": "b36",
          "package": "bio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_name.html#v:b36"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_name",
          "name": "decCh",
          "package": "bio",
          "signature": "Char -\u003e Maybe Int",
          "source": "src/Bio-Sequence-SFF_name.html#decCh",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_name",
          "module": "Bio.Sequence.SFF_name",
          "name": "decCh",
          "normalized": "Char-\u003eMaybe Int",
          "package": "bio",
          "partial": "Ch",
          "signature": "Char-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_name.html#v:decCh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_name",
          "name": "decode36",
          "package": "bio",
          "signature": "ByteString -\u003e Maybe Int",
          "source": "src/Bio-Sequence-SFF_name.html#decode36",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_name",
          "module": "Bio.Sequence.SFF_name",
          "name": "decode36",
          "normalized": "ByteString-\u003eMaybe Int",
          "package": "bio",
          "signature": "ByteString-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_name.html#v:decode36"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_name",
          "name": "decodeDate",
          "package": "bio",
          "signature": "ByteString -\u003e Maybe [Int]",
          "source": "src/Bio-Sequence-SFF_name.html#decodeDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_name",
          "module": "Bio.Sequence.SFF_name",
          "name": "decodeDate",
          "normalized": "ByteString-\u003eMaybe[Int]",
          "package": "bio",
          "partial": "Date",
          "signature": "ByteString-\u003eMaybe[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_name.html#v:decodeDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_name",
          "name": "decodeLocation",
          "package": "bio",
          "signature": "ByteString -\u003e Maybe (Int, Int)",
          "source": "src/Bio-Sequence-SFF_name.html#decodeLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_name",
          "module": "Bio.Sequence.SFF_name",
          "name": "decodeLocation",
          "normalized": "ByteString-\u003eMaybe(Int,Int)",
          "package": "bio",
          "partial": "Location",
          "signature": "ByteString-\u003eMaybe(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_name.html#v:decodeLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_name",
          "name": "divMods",
          "package": "bio",
          "signature": "Int -\u003e [Int] -\u003e [Int]",
          "source": "src/Bio-Sequence-SFF_name.html#divMods",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_name",
          "module": "Bio.Sequence.SFF_name",
          "name": "divMods",
          "normalized": "Int-\u003e[Int]-\u003e[Int]",
          "package": "bio",
          "partial": "Mods",
          "signature": "Int-\u003e[Int]-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_name.html#v:divMods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_name",
          "name": "encode36",
          "package": "bio",
          "signature": "Int -\u003e ByteString",
          "source": "src/Bio-Sequence-SFF_name.html#encode36",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_name",
          "module": "Bio.Sequence.SFF_name",
          "name": "encode36",
          "normalized": "Int-\u003eByteString",
          "package": "bio",
          "signature": "Int-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_name.html#v:encode36"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_name",
          "name": "encodeDate",
          "package": "bio",
          "signature": "(Int, Int, Int) -\u003e (Int, Int, Int) -\u003e ByteString",
          "source": "src/Bio-Sequence-SFF_name.html#encodeDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_name",
          "module": "Bio.Sequence.SFF_name",
          "name": "encodeDate",
          "normalized": "(Int,Int,Int)-\u003e(Int,Int,Int)-\u003eByteString",
          "package": "bio",
          "partial": "Date",
          "signature": "(Int,Int,Int)-\u003e(Int,Int,Int)-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_name.html#v:encodeDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_name",
          "name": "encodeLocation",
          "package": "bio",
          "signature": "Int -\u003e Int -\u003e ByteString",
          "source": "src/Bio-Sequence-SFF_name.html#encodeLocation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_name",
          "module": "Bio.Sequence.SFF_name",
          "name": "encodeLocation",
          "normalized": "Int-\u003eInt-\u003eByteString",
          "package": "bio",
          "partial": "Location",
          "signature": "Int-\u003eInt-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_name.html#v:encodeLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SFF_name",
          "name": "encodeRegion",
          "package": "bio",
          "signature": "Int -\u003e ByteString",
          "source": "src/Bio-Sequence-SFF_name.html#encodeRegion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SFF_name",
          "module": "Bio.Sequence.SFF_name",
          "name": "encodeRegion",
          "normalized": "Int-\u003eByteString",
          "package": "bio",
          "partial": "Region",
          "signature": "Int-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SFF_name.html#v:encodeRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData structures for manipulating (biological) sequences.\n\u003c/p\u003e\u003cp\u003eGenerally supports both nucleotide and protein sequences, some functions,\n   like \u003ccode\u003erevcompl\u003c/code\u003e, only makes sense for nucleotides.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Sequence.SeqData",
          "name": "SeqData",
          "package": "bio",
          "source": "src/Bio-Sequence-SeqData.html",
          "type": "module"
        },
        "index": {
          "description": "Data structures for manipulating biological sequences Generally supports both nucleotide and protein sequences some functions like revcompl only makes sense for nucleotides",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "SeqData",
          "package": "bio",
          "partial": "Seq Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SeqData",
          "name": "Amino",
          "package": "bio",
          "source": "src/Bio-Sequence-SeqData.html#Amino",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Amino",
          "package": "bio",
          "partial": "Amino",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#t:Amino"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor type tagging sequences (protein sequences use \u003ccode\u003e\u003ca\u003eAmino\u003c/a\u003e\u003c/code\u003e below)\n\u003c/p\u003e",
          "module": "Bio.Sequence.SeqData",
          "name": "Nuc",
          "package": "bio",
          "source": "src/Bio-Sequence-SeqData.html#Nuc",
          "type": "data"
        },
        "index": {
          "description": "For type tagging sequences protein sequences use Amino below",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Nuc",
          "package": "bio",
          "partial": "Nuc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#t:Nuc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn offset, index, or length of a \u003ccode\u003e\u003ca\u003eSeqData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Bio.Sequence.SeqData",
          "name": "Offset",
          "package": "bio",
          "source": "src/Bio-Sequence-SeqData.html#Offset",
          "type": "type"
        },
        "index": {
          "description": "An offset index or length of SeqData",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Offset",
          "package": "bio",
          "partial": "Offset",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#t:Offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic type for quality data.  Range 0..255.  Typical Phred output is in\n   the range 6..50, with 20 as the line in the sand separating good from bad.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SeqData",
          "name": "Qual",
          "package": "bio",
          "source": "src/Bio-Sequence-SeqData.html#Qual",
          "type": "type"
        },
        "index": {
          "description": "Basic type for quality data Range Typical Phred output is in the range with as the line in the sand separating good from bad",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Qual",
          "package": "bio",
          "partial": "Qual",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#t:Qual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuality data is a \u003ccode\u003e\u003ca\u003eQual\u003c/a\u003e\u003c/code\u003e vector, currently implemented as a \u003ccode\u003eByteString\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SeqData",
          "name": "QualData",
          "package": "bio",
          "source": "src/Bio-Sequence-SeqData.html#QualData",
          "type": "type"
        },
        "index": {
          "description": "Quality data is Qual vector currently implemented as ByteString",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "QualData",
          "package": "bio",
          "partial": "Qual Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#t:QualData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic data type used in \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Bio.Sequence.SeqData",
          "name": "SeqData",
          "package": "bio",
          "source": "src/Bio-Sequence-SeqData.html#SeqData",
          "type": "type"
        },
        "index": {
          "description": "The basic data type used in Sequence",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "SeqData",
          "package": "bio",
          "partial": "Seq Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#t:SeqData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sequence consists of a header, the sequence data itself, and optional quality data.\n   The type parameter is a phantom type to separate nucleotide and amino acid sequences\n\u003c/p\u003e",
          "module": "Bio.Sequence.SeqData",
          "name": "Sequence",
          "package": "bio",
          "source": "src/Bio-Sequence-SeqData.html#Sequence",
          "type": "data"
        },
        "index": {
          "description": "sequence consists of header the sequence data itself and optional quality data The type parameter is phantom type to separate nucleotide and amino acid sequences",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Sequence",
          "package": "bio",
          "partial": "Sequence",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#t:Sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SeqData",
          "name": "Unknown",
          "package": "bio",
          "source": "src/Bio-Sequence-SeqData.html#Unknown",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Unknown",
          "package": "bio",
          "partial": "Unknown",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#t:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the character at the specified position in the sequence.\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "(!)",
          "package": "bio",
          "signature": "Sequence a -\u003e Offset -\u003e Char",
          "source": "src/Bio-Sequence-SeqData.html#%21",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:-33-\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:-33-\"]"
        },
        "index": {
          "description": "Read the character at the specified position in the sequence",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "(!) !",
          "normalized": "Sequence a-\u003eOffset-\u003eChar",
          "package": "bio",
          "signature": "Sequence a-\u003eOffset-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.SeqData",
          "name": "(?)",
          "package": "bio",
          "signature": "Sequence a -\u003e Offset -\u003e Qual",
          "source": "src/Bio-Sequence-SeqData.html#%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "(?) ?",
          "normalized": "Sequence a-\u003eOffset-\u003eQual",
          "package": "bio",
          "signature": "Sequence a-\u003eOffset-\u003eQual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:-63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "Ala",
          "package": "bio",
          "signature": "Ala",
          "source": "src/Bio-Sequence-SeqData.html#Amino",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Ala\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:Ala\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Ala",
          "package": "bio",
          "partial": "Ala",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Ala"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "Arg",
          "package": "bio",
          "signature": "Arg",
          "source": "src/Bio-Sequence-SeqData.html#Amino",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Arg\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:Arg\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Arg",
          "package": "bio",
          "partial": "Arg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Arg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "Asn",
          "package": "bio",
          "signature": "Asn",
          "source": "src/Bio-Sequence-SeqData.html#Amino",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Asn\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:Asn\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Asn",
          "package": "bio",
          "partial": "Asn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Asn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "Asp",
          "package": "bio",
          "signature": "Asp",
          "source": "src/Bio-Sequence-SeqData.html#Amino",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Asp\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:Asp\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Asp",
          "package": "bio",
          "partial": "Asp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Asp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "Asx",
          "package": "bio",
          "signature": "Asx",
          "source": "src/Bio-Sequence-SeqData.html#Amino",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Asx\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:Asx\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Asx",
          "package": "bio",
          "partial": "Asx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Asx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "Cys",
          "package": "bio",
          "signature": "Cys",
          "source": "src/Bio-Sequence-SeqData.html#Amino",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Cys\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:Cys\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Cys",
          "package": "bio",
          "partial": "Cys",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Cys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "Gln",
          "package": "bio",
          "signature": "Gln",
          "source": "src/Bio-Sequence-SeqData.html#Amino",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Gln\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:Gln\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Gln",
          "package": "bio",
          "partial": "Gln",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Gln"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "Glu",
          "package": "bio",
          "signature": "Glu",
          "source": "src/Bio-Sequence-SeqData.html#Amino",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Glu\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:Glu\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Glu",
          "package": "bio",
          "partial": "Glu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Glu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "Glx",
          "package": "bio",
          "signature": "Glx",
          "source": "src/Bio-Sequence-SeqData.html#Amino",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Glx\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:Glx\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Glx",
          "package": "bio",
          "partial": "Glx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Glx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "Gly",
          "package": "bio",
          "signature": "Gly",
          "source": "src/Bio-Sequence-SeqData.html#Amino",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Gly\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:Gly\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Gly",
          "package": "bio",
          "partial": "Gly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Gly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "His",
          "package": "bio",
          "signature": "His",
          "source": "src/Bio-Sequence-SeqData.html#Amino",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:His\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:His\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "His",
          "package": "bio",
          "partial": "His",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:His"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "Ile",
          "package": "bio",
          "signature": "Ile",
          "source": "src/Bio-Sequence-SeqData.html#Amino",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Ile\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:Ile\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Ile",
          "package": "bio",
          "partial": "Ile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Ile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "Leu",
          "package": "bio",
          "signature": "Leu",
          "source": "src/Bio-Sequence-SeqData.html#Amino",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Leu\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:Leu\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Leu",
          "package": "bio",
          "partial": "Leu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Leu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "Lys",
          "package": "bio",
          "signature": "Lys",
          "source": "src/Bio-Sequence-SeqData.html#Amino",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Lys\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:Lys\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Lys",
          "package": "bio",
          "partial": "Lys",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Lys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "Met",
          "package": "bio",
          "signature": "Met",
          "source": "src/Bio-Sequence-SeqData.html#Amino",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Met\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:Met\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Met",
          "package": "bio",
          "partial": "Met",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Met"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "Phe",
          "package": "bio",
          "signature": "Phe",
          "source": "src/Bio-Sequence-SeqData.html#Amino",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Phe\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:Phe\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Phe",
          "package": "bio",
          "partial": "Phe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Phe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "Pro",
          "package": "bio",
          "signature": "Pro",
          "source": "src/Bio-Sequence-SeqData.html#Amino",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Pro\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:Pro\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Pro",
          "package": "bio",
          "partial": "Pro",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Pro"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "STP",
          "package": "bio",
          "signature": "STP",
          "source": "src/Bio-Sequence-SeqData.html#Amino",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:STP\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:STP\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "STP",
          "package": "bio",
          "partial": "STP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:STP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eheader and actual sequence\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "Seq",
          "package": "bio",
          "signature": "Seq !SeqData !SeqData !(Maybe QualData)",
          "source": "src/Bio-Sequence-SeqData.html#Sequence",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Seq\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:Seq\"]"
        },
        "index": {
          "description": "header and actual sequence",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Seq",
          "package": "bio",
          "partial": "Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "Ser",
          "package": "bio",
          "signature": "Ser",
          "source": "src/Bio-Sequence-SeqData.html#Amino",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Ser\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:Ser\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Ser",
          "package": "bio",
          "partial": "Ser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Ser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "Thr",
          "package": "bio",
          "signature": "Thr",
          "source": "src/Bio-Sequence-SeqData.html#Amino",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Thr\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:Thr\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Thr",
          "package": "bio",
          "partial": "Thr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Thr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "Trp",
          "package": "bio",
          "signature": "Trp",
          "source": "src/Bio-Sequence-SeqData.html#Amino",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Trp\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:Trp\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Trp",
          "package": "bio",
          "partial": "Trp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Trp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "Tyr",
          "package": "bio",
          "signature": "Tyr",
          "source": "src/Bio-Sequence-SeqData.html#Amino",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Tyr\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:Tyr\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Tyr",
          "package": "bio",
          "partial": "Tyr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Tyr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "Val",
          "package": "bio",
          "signature": "Val",
          "source": "src/Bio-Sequence-SeqData.html#Amino",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Val\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:Val\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Val",
          "package": "bio",
          "partial": "Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "Xaa",
          "package": "bio",
          "signature": "Xaa",
          "source": "src/Bio-Sequence-SeqData.html#Amino",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Xaa\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:Xaa\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Xaa",
          "package": "bio",
          "partial": "Xaa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Xaa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "Xle",
          "package": "bio",
          "signature": "Xle",
          "source": "src/Bio-Sequence-SeqData.html#Amino",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Xle\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:Xle\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "Xle",
          "package": "bio",
          "partial": "Xle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:Xle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the header by appending text, or by replacing\n   all but the sequence label (i.e. first word).\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "appendHeader",
          "package": "bio",
          "signature": "Sequence a -\u003e String -\u003e Sequence a",
          "source": "src/Bio-Sequence-SeqData.html#appendHeader",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:appendHeader\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:appendHeader\"]"
        },
        "index": {
          "description": "Modify the header by appending text or by replacing all but the sequence label i.e first word",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "appendHeader",
          "normalized": "Sequence a-\u003eString-\u003eSequence a",
          "package": "bio",
          "partial": "Header",
          "signature": "Sequence a-\u003eString-\u003eSequence a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:appendHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePhantom type functionality, unchecked conversion between sequence types\n\u003c/p\u003e",
          "module": "Bio.Sequence.SeqData",
          "name": "castSeq",
          "package": "bio",
          "signature": "Sequence a -\u003e Sequence b",
          "source": "src/Bio-Sequence-SeqData.html#castSeq",
          "type": "function"
        },
        "index": {
          "description": "Phantom type functionality unchecked conversion between sequence types",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "castSeq",
          "normalized": "Sequence a-\u003eSequence b",
          "package": "bio",
          "partial": "Seq",
          "signature": "Sequence a-\u003eSequence b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:castSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "castToAmino",
          "package": "bio",
          "signature": "Sequence a -\u003e Sequence Amino",
          "source": "src/Bio-Sequence-SeqData.html#castToAmino",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:castToAmino\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:castToAmino\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "castToAmino",
          "normalized": "Sequence a-\u003eSequence Amino",
          "package": "bio",
          "partial": "To Amino",
          "signature": "Sequence a-\u003eSequence Amino",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:castToAmino"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "castToNuc",
          "package": "bio",
          "signature": "Sequence a -\u003e Sequence Nuc",
          "source": "src/Bio-Sequence-SeqData.html#castToNuc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:castToNuc\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:castToNuc\"]"
        },
        "index": {
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "castToNuc",
          "normalized": "Sequence a-\u003eSequence Nuc",
          "package": "bio",
          "partial": "To Nuc",
          "signature": "Sequence a-\u003eSequence Nuc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:castToNuc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplement a single character.  I.e. identify the nucleotide it \n   can hybridize with.  Note that for multiple nucleotides, you usually\n   want the reverse complement (see \u003ccode\u003e\u003ca\u003erevcompl\u003c/a\u003e\u003c/code\u003e for that).\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "compl",
          "package": "bio",
          "signature": "Char -\u003e Char",
          "source": "src/Bio-Sequence-SeqData.html#compl",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:compl\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:compl\"]"
        },
        "index": {
          "description": "Complement single character I.e identify the nucleotide it can hybridize with Note that for multiple nucleotides you usually want the reverse complement see revcompl for that",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "compl",
          "normalized": "Char-\u003eChar",
          "package": "bio",
          "signature": "Char-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:compl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a sequence with all internal storage freshly copied and\n with sequence and quality data present as a single chunk.  \n\u003c/p\u003e\u003cp\u003eBy freshly copying internal storage, \u003ccode\u003e\u003ca\u003edefragSeq\u003c/a\u003e\u003c/code\u003e allows garbage\n collection of the original data source whence the sequence was\n read; otherwise, use of just a short sequence name can cause an\n entire sequence file buffer to be retained.\n\u003c/p\u003e\u003cp\u003eBy compacting sequence data into a single chunk, \u003ccode\u003e\u003ca\u003edefragSeq\u003c/a\u003e\u003c/code\u003e avoids\n linear-time traversal of sequence chunks during random access into\n sequence data.\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "defragSeq",
          "package": "bio",
          "signature": "Sequence t -\u003e Sequence t",
          "source": "src/Bio-Sequence-SeqData.html#defragSeq",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:defragSeq\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:defragSeq\"]"
        },
        "index": {
          "description": "Returns sequence with all internal storage freshly copied and with sequence and quality data present as single chunk By freshly copying internal storage defragSeq allows garbage collection of the original data source whence the sequence was read otherwise use of just short sequence name can cause an entire sequence file buffer to be retained By compacting sequence data into single chunk defragSeq avoids linear-time traversal of sequence chunks during random access into sequence data",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "defragSeq",
          "normalized": "Sequence a-\u003eSequence a",
          "package": "bio",
          "partial": "Seq",
          "signature": "Sequence t-\u003eSequence t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:defragSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a sequence in IUPAC format to a list of amino acids.\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "fromIUPAC",
          "package": "bio",
          "signature": "SeqData -\u003e [Amino]",
          "source": "src/Bio-Sequence-SeqData.html#fromIUPAC",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:fromIUPAC\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:fromIUPAC\"]"
        },
        "index": {
          "description": "Convert sequence in IUPAC format to list of amino acids",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "fromIUPAC",
          "normalized": "SeqData-\u003e[Amino]",
          "package": "bio",
          "partial": "IUPAC",
          "signature": "SeqData-\u003e[Amino]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:fromIUPAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a String to \u003ccode\u003e\u003ca\u003eSeqData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "fromStr",
          "package": "bio",
          "signature": "String -\u003e SeqData",
          "source": "src/Bio-Sequence-SeqData.html#fromStr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:fromStr\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:fromStr\"]"
        },
        "index": {
          "description": "Convert String to SeqData",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "fromStr",
          "normalized": "String-\u003eSeqData",
          "package": "bio",
          "partial": "Str",
          "signature": "String-\u003eSeqData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:fromStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether the sequence has associated quality data.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SeqData",
          "name": "hasqual",
          "package": "bio",
          "signature": "Sequence a -\u003e Bool",
          "source": "src/Bio-Sequence-SeqData.html#hasqual",
          "type": "function"
        },
        "index": {
          "description": "Check whether the sequence has associated quality data",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "hasqual",
          "normalized": "Sequence a-\u003eBool",
          "package": "bio",
          "signature": "Sequence a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:hasqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple function to display a sequence: we generate the sequence string and\n | call putStrLn\n\u003c/p\u003e",
          "module": "Bio.Sequence.SeqData",
          "name": "putSeqLn",
          "package": "bio",
          "signature": "Sequence a -\u003e Int -\u003e Int -\u003e [(Int, Int)] -\u003e IO ()",
          "source": "src/Bio-Sequence-SeqData.html#putSeqLn",
          "type": "function"
        },
        "index": {
          "description": "simple function to display sequence we generate the sequence string and call putStrLn",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "putSeqLn",
          "normalized": "Sequence a-\u003eInt-\u003eInt-\u003e[(Int,Int)]-\u003eIO()",
          "package": "bio",
          "partial": "Seq Ln",
          "signature": "Sequence a-\u003eInt-\u003eInt-\u003e[(Int,Int)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:putSeqLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the reverse complement.\n   This is only relevant for the nucleotide alphabet, \n   and it leaves other characters unmodified.  \n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "revcompl",
          "package": "bio",
          "signature": "Sequence Nuc -\u003e Sequence Nuc",
          "source": "src/Bio-Sequence-SeqData.html#revcompl",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:revcompl\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:revcompl\"]"
        },
        "index": {
          "description": "Calculate the reverse complement This is only relevant for the nucleotide alphabet and it leaves other characters unmodified",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "revcompl",
          "normalized": "Sequence Nuc-\u003eSequence Nuc",
          "package": "bio",
          "signature": "Sequence Nuc-\u003eSequence Nuc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:revcompl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the reverse complent for SeqData only.\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "revcompl'",
          "package": "bio",
          "signature": "SeqData -\u003e SeqData",
          "source": "src/Bio-Sequence-SeqData.html#revcompl%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:revcompl-39-\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:revcompl-39-\"]"
        },
        "index": {
          "description": "Calculate the reverse complent for SeqData only",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "revcompl'",
          "normalized": "SeqData-\u003eSeqData",
          "package": "bio",
          "signature": "SeqData-\u003eSeqData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:revcompl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a properly formatted and probably highlighted string\n | representation of a sequence. Highlighting is done using ANSI-Escape\n | sequences.\n\u003c/p\u003e",
          "module": "Bio.Sequence.SeqData",
          "name": "seqToStr",
          "package": "bio",
          "signature": "Sequence a -\u003e Int -\u003e Int -\u003e [(Int, Int)] -\u003e [Char]",
          "source": "src/Bio-Sequence-SeqData.html#seqToStr",
          "type": "function"
        },
        "index": {
          "description": "Returns properly formatted and probably highlighted string representation of sequence Highlighting is done using ANSI-Escape sequences",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "seqToStr",
          "normalized": "Sequence a-\u003eInt-\u003eInt-\u003e[(Int,Int)]-\u003e[Char]",
          "package": "bio",
          "partial": "To Str",
          "signature": "Sequence a-\u003eInt-\u003eInt-\u003e[(Int,Int)]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:seqToStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the sequence data.\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "seqdata",
          "package": "bio",
          "signature": "Sequence a -\u003e SeqData",
          "source": "src/Bio-Sequence-SeqData.html#seqdata",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:seqdata\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:seqdata\"]"
        },
        "index": {
          "description": "Return the sequence data",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "seqdata",
          "normalized": "Sequence a-\u003eSeqData",
          "package": "bio",
          "signature": "Sequence a-\u003eSeqData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:seqdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn full header.\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "seqheader",
          "package": "bio",
          "signature": "Sequence a -\u003e SeqData",
          "source": "src/Bio-Sequence-SeqData.html#seqheader",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:seqheader\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:seqheader\"]"
        },
        "index": {
          "description": "Return full header",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "seqheader",
          "normalized": "Sequence a-\u003eSeqData",
          "package": "bio",
          "signature": "Sequence a-\u003eSeqData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:seqheader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn sequence label (first word of header)\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "seqlabel",
          "package": "bio",
          "signature": "Sequence a -\u003e SeqData",
          "source": "src/Bio-Sequence-SeqData.html#seqlabel",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:seqlabel\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:seqlabel\"]"
        },
        "index": {
          "description": "Return sequence label first word of header",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "seqlabel",
          "normalized": "Sequence a-\u003eSeqData",
          "package": "bio",
          "signature": "Sequence a-\u003eSeqData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:seqlabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn sequence length.\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "seqlength",
          "package": "bio",
          "signature": "Sequence a -\u003e Offset",
          "source": "src/Bio-Sequence-SeqData.html#seqlength",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:seqlength\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:seqlength\"]"
        },
        "index": {
          "description": "Return sequence length",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "seqlength",
          "normalized": "Sequence a-\u003eOffset",
          "package": "bio",
          "signature": "Sequence a-\u003eOffset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:seqlength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emap over sequences, treating them as a sequence of (char,word8) pairs.\n   This will work on sequences without quality, as long as the function doesn't \n   try to examine it.\n   The current implementation is not very efficient.\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "seqmap",
          "package": "bio",
          "signature": "((Char, Qual) -\u003e (Char, Qual)) -\u003e Sequence t -\u003e Sequence t",
          "source": "src/Bio-Sequence-SeqData.html#seqmap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:seqmap\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:seqmap\"]"
        },
        "index": {
          "description": "map over sequences treating them as sequence of char word8 pairs This will work on sequences without quality as long as the function doesn try to examine it The current implementation is not very efficient",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "seqmap",
          "normalized": "((Char,Qual)-\u003e(Char,Qual))-\u003eSequence a-\u003eSequence a",
          "package": "bio",
          "signature": "((Char,Qual)-\u003e(Char,Qual))-\u003eSequence t-\u003eSequence t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:seqmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the quality data, or error if none exist.  Use hasqual if in doubt.\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "seqqual",
          "package": "bio",
          "signature": "Sequence a -\u003e QualData",
          "source": "src/Bio-Sequence-SeqData.html#seqqual",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:seqqual\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:seqqual\"]"
        },
        "index": {
          "description": "Return the quality data or error if none exist Use hasqual if in doubt",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "seqqual",
          "normalized": "Sequence a-\u003eQualData",
          "package": "bio",
          "signature": "Sequence a-\u003eQualData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:seqqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the header by appending text, or by replacing\n   all but the sequence label (i.e. first word).\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "setHeader",
          "package": "bio",
          "signature": "Sequence a -\u003e String -\u003e Sequence a",
          "source": "src/Bio-Sequence-SeqData.html#setHeader",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:setHeader\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:setHeader\"]"
        },
        "index": {
          "description": "Modify the header by appending text or by replacing all but the sequence label i.e first word",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "setHeader",
          "normalized": "Sequence a-\u003eString-\u003eSequence a",
          "package": "bio",
          "partial": "Header",
          "signature": "Sequence a-\u003eString-\u003eSequence a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:setHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list of amino acids to a sequence in IUPAC format.\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "toIUPAC",
          "package": "bio",
          "signature": "[Amino] -\u003e SeqData",
          "source": "src/Bio-Sequence-SeqData.html#toIUPAC",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:toIUPAC\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:toIUPAC\"]"
        },
        "index": {
          "description": "Convert list of amino acids to sequence in IUPAC format",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "toIUPAC",
          "normalized": "[Amino]-\u003eSeqData",
          "package": "bio",
          "partial": "IUPAC",
          "signature": "[Amino]-\u003eSeqData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:toIUPAC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eSeqData\u003c/a\u003e\u003c/code\u003e to a String\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "toStr",
          "package": "bio",
          "signature": "SeqData -\u003e String",
          "source": "src/Bio-Sequence-SeqData.html#toStr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:toStr\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:toStr\"]"
        },
        "index": {
          "description": "Convert SeqData to String",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "toStr",
          "normalized": "SeqData-\u003eString",
          "package": "bio",
          "partial": "Str",
          "signature": "SeqData-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:toStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate a nucleotide sequence into the corresponding protein\n   sequence.  This works rather blindly, with no attempt to identify ORFs\n   or otherwise QA the result.\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.SeqData\",\"Bio.Sequence\"]",
          "name": "translate",
          "package": "bio",
          "signature": "Sequence Nuc -\u003e Offset -\u003e [Amino]",
          "source": "src/Bio-Sequence-SeqData.html#translate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:translate\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:translate\"]"
        },
        "index": {
          "description": "Translate nucleotide sequence into the corresponding protein sequence This works rather blindly with no attempt to identify ORFs or otherwise QA the result",
          "hierarchy": "Bio Sequence SeqData",
          "module": "Bio.Sequence.SeqData",
          "name": "translate",
          "normalized": "Sequence Nuc-\u003eOffset-\u003e[Amino]",
          "package": "bio",
          "signature": "Sequence Nuc-\u003eOffset-\u003e[Amino]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-SeqData.html#v:translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements the 2bit format for sequences.\n\u003c/p\u003e\u003cp\u003eBased on: \u003ca\u003ehttp://genome.ucsc.edu/FAQ/FAQformat#format7\u003c/a\u003e\n   Note! the description is not accurate, it is missing a reserved word\n         in each sequence record.\n\u003c/p\u003e\u003cp\u003eThere are also other, completely different ideas of the 2bit format, e.g.\n      \u003ca\u003ehttp://jcomeau.freeshell.org/www/genome/2bitformat.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Sequence.TwoBit",
          "name": "TwoBit",
          "package": "bio",
          "source": "src/Bio-Sequence-TwoBit.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements the bit format for sequences Based on http genome.ucsc.edu FAQ FAQformat format7 Note the description is not accurate it is missing reserved word in each sequence record There are also other completely different ideas of the bit format e.g http jcomeau.freeshell.org www genome bitformat.html",
          "hierarchy": "Bio Sequence TwoBit",
          "module": "Bio.Sequence.TwoBit",
          "name": "TwoBit",
          "package": "bio",
          "partial": "Two Bit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-TwoBit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a (lazy) ByteString as sequences in the 2bit format.\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.TwoBit\",\"Bio.Sequence\"]",
          "name": "decode2Bit",
          "package": "bio",
          "signature": "ByteString -\u003e [Sequence Nuc]",
          "source": "src/Bio-Sequence-TwoBit.html#decode2Bit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-TwoBit.html#v:decode2Bit\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:decode2Bit\"]"
        },
        "index": {
          "description": "Parse lazy ByteString as sequences in the bit format",
          "hierarchy": "Bio Sequence TwoBit",
          "module": "Bio.Sequence.TwoBit",
          "name": "decode2Bit",
          "normalized": "ByteString-\u003e[Sequence Nuc]",
          "package": "bio",
          "partial": "Bit",
          "signature": "ByteString-\u003e[Sequence Nuc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-TwoBit.html#v:decode2Bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshall from neutral representation to the 2Bit ByteString rep\n\u003c/p\u003e",
          "module": "Bio.Sequence.TwoBit",
          "name": "encode2Bit",
          "package": "bio",
          "signature": "[Sequence a] -\u003e ByteString",
          "source": "src/Bio-Sequence-TwoBit.html#encode2Bit",
          "type": "function"
        },
        "index": {
          "description": "Marshall from neutral representation to the Bit ByteString rep",
          "hierarchy": "Bio Sequence TwoBit",
          "module": "Bio.Sequence.TwoBit",
          "name": "encode2Bit",
          "normalized": "[Sequence a]-\u003eByteString",
          "package": "bio",
          "partial": "Bit",
          "signature": "[Sequence a]-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-TwoBit.html#v:encode2Bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead sequences from a file handle in the 2bit format and\n | unmarshall/deserialze into Sequence format.\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.TwoBit\",\"Bio.Sequence\"]",
          "name": "hRead2Bit",
          "package": "bio",
          "signature": "Handle -\u003e IO [Sequence Nuc]",
          "source": "src/Bio-Sequence-TwoBit.html#hRead2Bit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-TwoBit.html#v:hRead2Bit\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:hRead2Bit\"]"
        },
        "index": {
          "description": "Read sequences from file handle in the bit format and unmarshall deserialze into Sequence format",
          "hierarchy": "Bio Sequence TwoBit",
          "module": "Bio.Sequence.TwoBit",
          "name": "hRead2Bit",
          "normalized": "Handle-\u003eIO[Sequence Nuc]",
          "package": "bio",
          "partial": "Read Bit",
          "signature": "Handle-\u003eIO[Sequence Nuc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-TwoBit.html#v:hRead2Bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshall/serialize [Sequence] into 2Bit format and write to a file using handle. \n\u003c/p\u003e",
          "module": "Bio.Sequence.TwoBit",
          "name": "hWrite2Bit",
          "package": "bio",
          "signature": "Handle -\u003e [Sequence a] -\u003e IO ()",
          "source": "src/Bio-Sequence-TwoBit.html#hWrite2Bit",
          "type": "function"
        },
        "index": {
          "description": "Marshall serialize Sequence into Bit format and write to file using handle",
          "hierarchy": "Bio Sequence TwoBit",
          "module": "Bio.Sequence.TwoBit",
          "name": "hWrite2Bit",
          "normalized": "Handle-\u003e[Sequence a]-\u003eIO()",
          "package": "bio",
          "partial": "Write Bit",
          "signature": "Handle-\u003e[Sequence a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-TwoBit.html#v:hWrite2Bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead sequences from a file in 2bit format and \n | unmarshall/deserialize into Sequence format.\n\u003c/p\u003e",
          "module": "[\"Bio.Sequence.TwoBit\",\"Bio.Sequence\"]",
          "name": "read2Bit",
          "package": "bio",
          "signature": "FilePath -\u003e IO [Sequence Nuc]",
          "source": "src/Bio-Sequence-TwoBit.html#read2Bit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence-TwoBit.html#v:read2Bit\",\"http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:read2Bit\"]"
        },
        "index": {
          "description": "Read sequences from file in bit format and unmarshall deserialize into Sequence format",
          "hierarchy": "Bio Sequence TwoBit",
          "module": "Bio.Sequence.TwoBit",
          "name": "read2Bit",
          "normalized": "FilePath-\u003eIO[Sequence Nuc]",
          "package": "bio",
          "partial": "Bit",
          "signature": "FilePath-\u003eIO[Sequence Nuc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-TwoBit.html#v:read2Bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshall/serialize [Sequence] into 2Bit format and write to a file. \n\u003c/p\u003e",
          "module": "Bio.Sequence.TwoBit",
          "name": "write2Bit",
          "package": "bio",
          "signature": "FilePath -\u003e [Sequence a] -\u003e IO ()",
          "source": "src/Bio-Sequence-TwoBit.html#write2Bit",
          "type": "function"
        },
        "index": {
          "description": "Marshall serialize Sequence into Bit format and write to file",
          "hierarchy": "Bio Sequence TwoBit",
          "module": "Bio.Sequence.TwoBit",
          "name": "write2Bit",
          "normalized": "FilePath-\u003e[Sequence a]-\u003eIO()",
          "package": "bio",
          "partial": "Bit",
          "signature": "FilePath-\u003e[Sequence a]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence-TwoBit.html#v:write2Bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a meta-module importing and re-exporting sequence-related stuff.\n\u003c/p\u003e\u003cp\u003eIt encompasses the \u003ca\u003eBio.Sequence.SeqData\u003c/a\u003e, \u003ca\u003eBio.Sequence.Fasta\u003c/a\u003e, and \u003ca\u003eBio.Sequence.TwoBit\u003c/a\u003e modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Sequence",
          "name": "Sequence",
          "package": "bio",
          "source": "src/Bio-Sequence.html",
          "type": "module"
        },
        "index": {
          "description": "This is meta-module importing and re-exporting sequence-related stuff It encompasses the Bio.Sequence.SeqData Bio.Sequence.Fasta and Bio.Sequence.TwoBit modules",
          "hierarchy": "Bio Sequence",
          "module": "Bio.Sequence",
          "name": "Sequence",
          "package": "bio",
          "partial": "Sequence",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence",
          "name": "Amino",
          "package": "bio",
          "source": "src/Bio-Sequence-SeqData.html#Amino",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bio Sequence",
          "module": "Bio.Sequence",
          "name": "Amino",
          "package": "bio",
          "partial": "Amino",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#t:Amino"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a struct for containing a set of hashing functions\n\u003c/p\u003e",
          "module": "Bio.Sequence",
          "name": "HashF",
          "package": "bio",
          "source": "src/Bio-Sequence-HashWord.html#HashF",
          "type": "data"
        },
        "index": {
          "description": "This is struct for containing set of hashing functions",
          "hierarchy": "Bio Sequence",
          "module": "Bio.Sequence",
          "name": "HashF",
          "package": "bio",
          "partial": "Hash",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#t:HashF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence",
          "name": "KWords",
          "package": "bio",
          "source": "src/Bio-Sequence-Entropy.html#KWords",
          "type": "class"
        },
        "index": {
          "hierarchy": "Bio Sequence",
          "module": "Bio.Sequence",
          "name": "KWords",
          "package": "bio",
          "partial": "KWords",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#t:KWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor type tagging sequences (protein sequences use \u003ccode\u003e\u003ca\u003eAmino\u003c/a\u003e\u003c/code\u003e below)\n\u003c/p\u003e",
          "module": "Bio.Sequence",
          "name": "Nuc",
          "package": "bio",
          "source": "src/Bio-Sequence-SeqData.html#Nuc",
          "type": "data"
        },
        "index": {
          "description": "For type tagging sequences protein sequences use Amino below",
          "hierarchy": "Bio Sequence",
          "module": "Bio.Sequence",
          "name": "Nuc",
          "package": "bio",
          "partial": "Nuc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#t:Nuc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn offset, index, or length of a \u003ccode\u003e\u003ca\u003eSeqData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Bio.Sequence",
          "name": "Offset",
          "package": "bio",
          "source": "src/Bio-Sequence-SeqData.html#Offset",
          "type": "type"
        },
        "index": {
          "description": "An offset index or length of SeqData",
          "hierarchy": "Bio Sequence",
          "module": "Bio.Sequence",
          "name": "Offset",
          "package": "bio",
          "partial": "Offset",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#t:Offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic type for quality data.  Range 0..255.  Typical Phred output is in\n   the range 6..50, with 20 as the line in the sand separating good from bad.\n\u003c/p\u003e",
          "module": "Bio.Sequence",
          "name": "Qual",
          "package": "bio",
          "source": "src/Bio-Sequence-SeqData.html#Qual",
          "type": "type"
        },
        "index": {
          "description": "Basic type for quality data Range Typical Phred output is in the range with as the line in the sand separating good from bad",
          "hierarchy": "Bio Sequence",
          "module": "Bio.Sequence",
          "name": "Qual",
          "package": "bio",
          "partial": "Qual",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#t:Qual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuality data is a \u003ccode\u003e\u003ca\u003eQual\u003c/a\u003e\u003c/code\u003e vector, currently implemented as a \u003ccode\u003eByteString\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Bio.Sequence",
          "name": "QualData",
          "package": "bio",
          "source": "src/Bio-Sequence-SeqData.html#QualData",
          "type": "type"
        },
        "index": {
          "description": "Quality data is Qual vector currently implemented as ByteString",
          "hierarchy": "Bio Sequence",
          "module": "Bio.Sequence",
          "name": "QualData",
          "package": "bio",
          "partial": "Qual Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#t:QualData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic data type used in \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Bio.Sequence",
          "name": "SeqData",
          "package": "bio",
          "source": "src/Bio-Sequence-SeqData.html#SeqData",
          "type": "type"
        },
        "index": {
          "description": "The basic data type used in Sequence",
          "hierarchy": "Bio Sequence",
          "module": "Bio.Sequence",
          "name": "SeqData",
          "package": "bio",
          "partial": "Seq Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#t:SeqData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sequence consists of a header, the sequence data itself, and optional quality data.\n   The type parameter is a phantom type to separate nucleotide and amino acid sequences\n\u003c/p\u003e",
          "module": "Bio.Sequence",
          "name": "Sequence",
          "package": "bio",
          "source": "src/Bio-Sequence-SeqData.html#Sequence",
          "type": "data"
        },
        "index": {
          "description": "sequence consists of header the sequence data itself and optional quality data The type parameter is phantom type to separate nucleotide and amino acid sequences",
          "hierarchy": "Bio Sequence",
          "module": "Bio.Sequence",
          "name": "Sequence",
          "package": "bio",
          "partial": "Sequence",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#t:Sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence",
          "name": "Unknown",
          "package": "bio",
          "source": "src/Bio-Sequence-SeqData.html#Unknown",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bio Sequence",
          "module": "Bio.Sequence",
          "name": "Unknown",
          "package": "bio",
          "partial": "Unknown",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#t:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence",
          "name": "kwords",
          "package": "bio",
          "signature": "Int -\u003e s -\u003e [s]",
          "source": "src/Bio-Sequence-Entropy.html#kwords",
          "type": "method"
        },
        "index": {
          "hierarchy": "Bio Sequence",
          "module": "Bio.Sequence",
          "name": "kwords",
          "normalized": "Int-\u003ea-\u003e[a]",
          "package": "bio",
          "signature": "Int-\u003es-\u003e[s]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:kwords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead nucleotide sequences in any format - Fasta, SFF, FastQ, 2bit, PHD...\n   Todo: detect Illumina vs Sanger FastQ, transparent compression\n\u003c/p\u003e",
          "module": "Bio.Sequence",
          "name": "readNuc",
          "package": "bio",
          "signature": "FilePath -\u003e IO [Sequence Nuc]",
          "source": "src/Bio-Sequence.html#readNuc",
          "type": "function"
        },
        "index": {
          "description": "Read nucleotide sequences in any format Fasta SFF FastQ bit PHD Todo detect Illumina vs Sanger FastQ transparent compression",
          "hierarchy": "Bio Sequence",
          "module": "Bio.Sequence",
          "name": "readNuc",
          "normalized": "FilePath-\u003eIO[Sequence Nuc]",
          "package": "bio",
          "partial": "Nuc",
          "signature": "FilePath-\u003eIO[Sequence Nuc]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:readNuc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead protein sequences in any supported format (i.e. Fasta)\n\u003c/p\u003e",
          "module": "Bio.Sequence",
          "name": "readProt",
          "package": "bio",
          "signature": "FilePath -\u003e IO [Sequence Amino]",
          "source": "src/Bio-Sequence.html#readProt",
          "type": "function"
        },
        "index": {
          "description": "Read protein sequences in any supported format i.e Fasta",
          "hierarchy": "Bio Sequence",
          "module": "Bio.Sequence",
          "name": "readProt",
          "normalized": "FilePath-\u003eIO[Sequence Amino]",
          "package": "bio",
          "partial": "Prot",
          "signature": "FilePath-\u003eIO[Sequence Amino]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Sequence.html#v:readProt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLazy \"many\" combinator for Parsec.\n   Courtesy of Tomasz Zielonka.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Util.Parsex",
          "name": "Parsex",
          "package": "bio",
          "source": "src/Bio-Util-Parsex.html",
          "type": "module"
        },
        "index": {
          "description": "Lazy many combinator for Parsec Courtesy of Tomasz Zielonka",
          "hierarchy": "Bio Util Parsex",
          "module": "Bio.Util.Parsex",
          "name": "Parsex",
          "package": "bio",
          "partial": "Parsex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Util-Parsex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Util.Parsex",
          "name": "lazyMany",
          "package": "bio",
          "signature": "GenParser Char () a -\u003e SourceName -\u003e [Char] -\u003e [a]",
          "source": "src/Bio-Util-Parsex.html#lazyMany",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Util Parsex",
          "module": "Bio.Util.Parsex",
          "name": "lazyMany",
          "normalized": "GenParser Char()a-\u003eSourceName-\u003e[Char]-\u003e[a]",
          "package": "bio",
          "partial": "Many",
          "signature": "GenParser Char()a-\u003eSourceName-\u003e[Char]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Util-Parsex.html#v:lazyMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility module, with various useful stuff.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Util",
          "name": "Util",
          "package": "bio",
          "source": "src/Bio-Util.html",
          "type": "module"
        },
        "index": {
          "description": "Utility module with various useful stuff",
          "hierarchy": "Bio Util",
          "module": "Bio.Util",
          "name": "Util",
          "package": "bio",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput (to stderr) progress while evaluating a lazy list.\n   Useful for generating output while (conceptually, at least) in pure code\n\u003c/p\u003e",
          "module": "Bio.Util",
          "name": "countIO",
          "package": "bio",
          "signature": "String -\u003e String -\u003e Int -\u003e [a] -\u003e IO [a]",
          "source": "src/Bio-Util.html#countIO",
          "type": "function"
        },
        "index": {
          "description": "Output to stderr progress while evaluating lazy list Useful for generating output while conceptually at least in pure code",
          "hierarchy": "Bio Util",
          "module": "Bio.Util",
          "name": "countIO",
          "normalized": "String-\u003eString-\u003eInt-\u003e[a]-\u003eIO[a]",
          "package": "bio",
          "partial": "IO",
          "signature": "String-\u003eString-\u003eInt-\u003e[a]-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Util.html#v:countIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWorkaround, the current \u003ca\u003eData.ByteString.Lazy.Char8\u003c/a\u003e contains a bug in \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Bio.Util",
          "name": "lines",
          "package": "bio",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Bio-Util.html#lines",
          "type": "function"
        },
        "index": {
          "description": "Workaround the current Data.ByteString.Lazy.Char8 contains bug in lines",
          "hierarchy": "Bio Util",
          "module": "Bio.Util",
          "name": "lines",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "bio",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Util.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWorkaround, the current \u003ca\u003eData.ByteString.Lazy.Char8\u003c/a\u003e contains a bug in \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Bio.Util",
          "name": "mylines",
          "package": "bio",
          "signature": "ByteString -\u003e [ByteString]",
          "source": "src/Bio-Util.html#mylines",
          "type": "function"
        },
        "index": {
          "description": "Workaround the current Data.ByteString.Lazy.Char8 contains bug in lines",
          "hierarchy": "Bio Util",
          "module": "Bio.Util",
          "name": "mylines",
          "normalized": "ByteString-\u003e[ByteString]",
          "package": "bio",
          "signature": "ByteString-\u003e[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Util.html#v:mylines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA lazier version of \u003ccode\u003e\u003ca\u003esequence\u003c/a\u003e\u003c/code\u003e in \u003ca\u003eControl.Monad\u003c/a\u003e, needed by \u003ccode\u003e\u003ca\u003ecountIO\u003c/a\u003e\u003c/code\u003e above.\n\u003c/p\u003e",
          "module": "Bio.Util",
          "name": "sequence'",
          "package": "bio",
          "signature": "[IO a] -\u003e IO [a]",
          "source": "src/Bio-Util.html#sequence%27",
          "type": "function"
        },
        "index": {
          "description": "lazier version of sequence in Control.Monad needed by countIO above",
          "hierarchy": "Bio Util",
          "module": "Bio.Util",
          "name": "sequence'",
          "normalized": "[IO a]-\u003eIO[a]",
          "package": "bio",
          "signature": "[IO a]-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Util.html#v:sequence-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreak a list of bytestrings on a predicate.\n\u003c/p\u003e",
          "module": "Bio.Util",
          "name": "splitWhen",
          "package": "bio",
          "signature": "(ByteString -\u003e Bool) -\u003e [ByteString] -\u003e [[ByteString]]",
          "source": "src/Bio-Util.html#splitWhen",
          "type": "function"
        },
        "index": {
          "description": "Break list of bytestrings on predicate",
          "hierarchy": "Bio Util",
          "module": "Bio.Util",
          "name": "splitWhen",
          "normalized": "(ByteString-\u003eBool)-\u003e[ByteString]-\u003e[[ByteString]]",
          "package": "bio",
          "partial": "When",
          "signature": "(ByteString-\u003eBool)-\u003e[ByteString]-\u003e[[ByteString]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bio/docs/Bio-Util.html#v:splitWhen"
      }
    }
  ]
]