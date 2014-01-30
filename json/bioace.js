[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioace/docs/Bio-Alignment-Ace.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead ACE format assembly files\n\u003c/p\u003e\u003cp\u003eThese are typically output by sequence assembly tools,\n   like CAP3 or Phrap.\n\u003c/p\u003e\u003cp\u003eDocumented in the section labelled \"ACE FILE FORMAT\" at\n   \u003ca\u003ehttp://bozeman.mbt.washington.edu/consed/distributions/README.14.0.txt\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eBriefly: each field is a line starting with a two letter code,\n            in some cases followed by data lines termintated by a blank line.\n   Here's an brief example how an ACE file looks like:\n\u003c/p\u003e\u003cpre\u003e\n          AS contigs reads\n          CO contig_name bases reads segments compl (CAP3: segments=0)\n          sequence\n          BQ base_qualities\n          AF read1 compl padded_start_consensus (negatives meaning?)\n          AF read2 ..\n          BS segments\n          RD read1 bases info_items info_tags (latter two set to 0 by CAP3)\n          sequence\n          QA read1 qual_start qual_end align_start align_end\n          DS (phred header? left empty by CAP3)\n          RD read2 ...\n\u003c/pre\u003e\u003cp\u003eAs far as I know, this is only used for nucleotide sequences.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Bio.Alignment.Ace",
        "fct-package": "bioace",
        "fct-signature": "module",
        "fct-source": "src/Bio-Alignment-Ace.html",
        "fct-type": "module",
        "title": "Ace"
      },
      "index": {
        "description": "Read ACE format assembly files These are typically output by sequence assembly tools like CAP3 or Phrap Documented in the section labelled ACE FILE FORMAT at http bozeman.mbt.washington.edu consed distributions README.14.0.txt Briefly each field is line starting with two letter code in some cases followed by data lines termintated by blank line Here an brief example how an ACE file looks like AS contigs reads CO contig name bases reads segments compl CAP3 segments sequence BQ base qualities AF read1 compl padded start consensus negatives meaning AF read2 BS segments RD read1 bases info items info tags latter two set to by CAP3 sequence QA read1 qual start qual end align start align end DS phred header left empty by CAP3 RD read2 As far as know this is only used for nucleotide sequences",
        "hierarchy": "Bio Alignment Ace",
        "module": "Bio.Alignment.Ace",
        "name": "Ace",
        "normalized": "",
        "package": "bioace",
        "partial": "Ace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioace/docs/Bio-Alignment-Ace.html#t:Assembly",
      "description": {
        "fct-module": "Bio.Alignment.Ace",
        "fct-package": "bioace",
        "fct-signature": "data",
        "fct-source": "src/Bio-Alignment-Ace.html#Assembly",
        "fct-type": "data",
        "title": "Assembly"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Alignment Ace",
        "module": "Bio.Alignment.Ace",
        "name": "Assembly",
        "normalized": "",
        "package": "bioace",
        "partial": "Assembly",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioace/docs/Bio-Alignment-Ace.html#v:Asm",
      "description": {
        "fct-module": "Bio.Alignment.Ace",
        "fct-package": "bioace",
        "fct-signature": "Asm",
        "fct-source": "src/Bio-Alignment-Ace.html#Assembly",
        "fct-type": "function",
        "title": "Asm"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Alignment Ace",
        "module": "Bio.Alignment.Ace",
        "name": "Asm",
        "normalized": "",
        "package": "bioace",
        "partial": "Asm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioace/docs/Bio-Alignment-Ace.html#v:contig",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Alignment.Ace",
        "fct-package": "bioace",
        "fct-signature": "(Sequence, Gaps)",
        "fct-source": "src/Bio-Alignment-Ace.html#Assembly",
        "fct-type": "function",
        "title": "contig"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Alignment Ace",
        "module": "Bio.Alignment.Ace",
        "name": "contig",
        "normalized": "(Sequence,Gaps)",
        "package": "bioace",
        "partial": "",
        "signature": "(Sequence,Gaps)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioace/docs/Bio-Alignment-Ace.html#v:fragments",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Bio.Alignment.Ace",
        "fct-package": "bioace",
        "fct-signature": "Alignment",
        "fct-source": "src/Bio-Alignment-Ace.html#Assembly",
        "fct-type": "function",
        "title": "fragments"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Alignment Ace",
        "module": "Bio.Alignment.Ace",
        "name": "fragments",
        "normalized": "",
        "package": "bioace",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioace/docs/Bio-Alignment-Ace.html#v:ptest",
      "description": {
        "fct-descr": "\u003cp\u003eTest parser p on a list of ACE elements\n\u003c/p\u003e",
        "fct-module": "Bio.Alignment.Ace",
        "fct-package": "bioace",
        "fct-signature": "String -\u003e AceParser a -\u003e [ACE] -\u003e IO ()",
        "fct-source": "src/Bio-Alignment-Ace.html#ptest",
        "fct-type": "function",
        "title": "ptest"
      },
      "index": {
        "description": "Test parser on list of ACE elements",
        "hierarchy": "Bio Alignment Ace",
        "module": "Bio.Alignment.Ace",
        "name": "ptest",
        "normalized": "String-\u003eAceParser a-\u003e[ACE]-\u003eIO()",
        "package": "bioace",
        "partial": "",
        "signature": "String-\u003eAceParser a-\u003e[ACE]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioace/docs/Bio-Alignment-Ace.html#v:readACE",
      "description": {
        "fct-descr": "\u003cp\u003eReading an ACE file.\n\u003c/p\u003e",
        "fct-module": "Bio.Alignment.Ace",
        "fct-package": "bioace",
        "fct-signature": "FilePath -\u003e IO [[Assembly]]",
        "fct-source": "src/Bio-Alignment-Ace.html#readACE",
        "fct-type": "function",
        "title": "readACE"
      },
      "index": {
        "description": "Reading an ACE file",
        "hierarchy": "Bio Alignment Ace",
        "module": "Bio.Alignment.Ace",
        "name": "readACE",
        "normalized": "FilePath-\u003eIO[[Assembly]]",
        "package": "bioace",
        "partial": "ACE",
        "signature": "FilePath-\u003eIO[[Assembly]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioace/docs/Bio-Alignment-Ace.html#v:reads",
      "description": {
        "fct-module": "Bio.Alignment.Ace",
        "fct-package": "bioace",
        "fct-signature": "Assembly -\u003e Alignment",
        "fct-source": "src/Bio-Alignment-Ace.html#reads",
        "fct-type": "function",
        "title": "reads"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Alignment Ace",
        "module": "Bio.Alignment.Ace",
        "name": "reads",
        "normalized": "Assembly-\u003eAlignment",
        "package": "bioace",
        "partial": "",
        "signature": "Assembly-\u003eAlignment"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bioace/docs/Bio-Alignment-Ace.html#v:writeACE",
      "description": {
        "fct-module": "Bio.Alignment.Ace",
        "fct-package": "bioace",
        "fct-signature": "FilePath -\u003e [Assembly] -\u003e IO ()",
        "fct-source": "src/Bio-Alignment-Ace.html#writeACE",
        "fct-type": "function",
        "title": "writeACE"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Alignment Ace",
        "module": "Bio.Alignment.Ace",
        "name": "writeACE",
        "normalized": "FilePath-\u003e[Assembly]-\u003eIO()",
        "package": "bioace",
        "partial": "ACE",
        "signature": "FilePath-\u003e[Assembly]-\u003eIO()"
      }
    }
  }
]