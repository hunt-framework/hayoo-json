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
        "word": "bioace"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead ACE format assembly files\n\u003c/p\u003e\u003cp\u003eThese are typically output by sequence assembly tools,\n   like CAP3 or Phrap.\n\u003c/p\u003e\u003cp\u003eDocumented in the section labelled \"ACE FILE FORMAT\" at\n   \u003ca\u003ehttp://bozeman.mbt.washington.edu/consed/distributions/README.14.0.txt\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eBriefly: each field is a line starting with a two letter code,\n            in some cases followed by data lines termintated by a blank line.\n   Here's an brief example how an ACE file looks like:\n\u003c/p\u003e\u003cpre\u003e\n          AS contigs reads\n          CO contig_name bases reads segments compl (CAP3: segments=0)\n          sequence\n          BQ base_qualities\n          AF read1 compl padded_start_consensus (negatives meaning?)\n          AF read2 ..\n          BS segments\n          RD read1 bases info_items info_tags (latter two set to 0 by CAP3)\n          sequence\n          QA read1 qual_start qual_end align_start align_end\n          DS (phred header? left empty by CAP3)\n          RD read2 ...\n\u003c/pre\u003e\u003cp\u003eAs far as I know, this is only used for nucleotide sequences.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Alignment.Ace",
          "name": "Ace",
          "package": "bioace",
          "source": "src/Bio-Alignment-Ace.html",
          "type": "module"
        },
        "index": {
          "description": "Read ACE format assembly files These are typically output by sequence assembly tools like CAP3 or Phrap Documented in the section labelled ACE FILE FORMAT at http bozeman.mbt.washington.edu consed distributions README.14.0.txt Briefly each field is line starting with two letter code in some cases followed by data lines termintated by blank line Here an brief example how an ACE file looks like AS contigs reads CO contig name bases reads segments compl CAP3 segments sequence BQ base qualities AF read1 compl padded start consensus negatives meaning AF read2 BS segments RD read1 bases info items info tags latter two set to by CAP3 sequence QA read1 qual start qual end align start align end DS phred header left empty by CAP3 RD read2 As far as know this is only used for nucleotide sequences",
          "hierarchy": "Bio Alignment Ace",
          "module": "Bio.Alignment.Ace",
          "name": "Ace",
          "package": "bioace",
          "partial": "Ace",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bioace/docs/Bio-Alignment-Ace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Ace",
          "name": "Assembly",
          "package": "bioace",
          "source": "src/Bio-Alignment-Ace.html#Assembly",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bio Alignment Ace",
          "module": "Bio.Alignment.Ace",
          "name": "Assembly",
          "package": "bioace",
          "partial": "Assembly",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bioace/docs/Bio-Alignment-Ace.html#t:Assembly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Ace",
          "name": "Asm",
          "package": "bioace",
          "signature": "Asm",
          "source": "src/Bio-Alignment-Ace.html#Assembly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment Ace",
          "module": "Bio.Alignment.Ace",
          "name": "Asm",
          "package": "bioace",
          "partial": "Asm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bioace/docs/Bio-Alignment-Ace.html#v:Asm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Ace",
          "name": "contig",
          "package": "bioace",
          "signature": "(Sequence, Gaps)",
          "source": "src/Bio-Alignment-Ace.html#Assembly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment Ace",
          "module": "Bio.Alignment.Ace",
          "name": "contig",
          "normalized": "(Sequence,Gaps)",
          "package": "bioace",
          "signature": "(Sequence,Gaps)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bioace/docs/Bio-Alignment-Ace.html#v:contig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Ace",
          "name": "fragments",
          "package": "bioace",
          "signature": "Alignment",
          "source": "src/Bio-Alignment-Ace.html#Assembly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment Ace",
          "module": "Bio.Alignment.Ace",
          "name": "fragments",
          "package": "bioace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bioace/docs/Bio-Alignment-Ace.html#v:fragments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest parser p on a list of ACE elements\n\u003c/p\u003e",
          "module": "Bio.Alignment.Ace",
          "name": "ptest",
          "package": "bioace",
          "signature": "String -\u003e AceParser a -\u003e [ACE] -\u003e IO ()",
          "source": "src/Bio-Alignment-Ace.html#ptest",
          "type": "function"
        },
        "index": {
          "description": "Test parser on list of ACE elements",
          "hierarchy": "Bio Alignment Ace",
          "module": "Bio.Alignment.Ace",
          "name": "ptest",
          "normalized": "String-\u003eAceParser a-\u003e[ACE]-\u003eIO()",
          "package": "bioace",
          "signature": "String-\u003eAceParser a-\u003e[ACE]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bioace/docs/Bio-Alignment-Ace.html#v:ptest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReading an ACE file.\n\u003c/p\u003e",
          "module": "Bio.Alignment.Ace",
          "name": "readACE",
          "package": "bioace",
          "signature": "FilePath -\u003e IO [[Assembly]]",
          "source": "src/Bio-Alignment-Ace.html#readACE",
          "type": "function"
        },
        "index": {
          "description": "Reading an ACE file",
          "hierarchy": "Bio Alignment Ace",
          "module": "Bio.Alignment.Ace",
          "name": "readACE",
          "normalized": "FilePath-\u003eIO[[Assembly]]",
          "package": "bioace",
          "partial": "ACE",
          "signature": "FilePath-\u003eIO[[Assembly]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bioace/docs/Bio-Alignment-Ace.html#v:readACE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Ace",
          "name": "reads",
          "package": "bioace",
          "signature": "Assembly -\u003e Alignment",
          "source": "src/Bio-Alignment-Ace.html#reads",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment Ace",
          "module": "Bio.Alignment.Ace",
          "name": "reads",
          "normalized": "Assembly-\u003eAlignment",
          "package": "bioace",
          "signature": "Assembly-\u003eAlignment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bioace/docs/Bio-Alignment-Ace.html#v:reads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Alignment.Ace",
          "name": "writeACE",
          "package": "bioace",
          "signature": "FilePath -\u003e [Assembly] -\u003e IO ()",
          "source": "src/Bio-Alignment-Ace.html#writeACE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Alignment Ace",
          "module": "Bio.Alignment.Ace",
          "name": "writeACE",
          "normalized": "FilePath-\u003e[Assembly]-\u003eIO()",
          "package": "bioace",
          "partial": "ACE",
          "signature": "FilePath-\u003e[Assembly]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bioace/docs/Bio-Alignment-Ace.html#v:writeACE"
      }
    }
  ]
]