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
        "word": "biofasta"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module incorporates functionality for reading and writing\n   sequence data in the Fasta format.\n   Each sequence consists of a header (with a \u003ccode\u003e\u003ca\u003e\u003e\u003c/a\u003e\u003c/code\u003e prefix)\n   and a set of lines containing the sequence data..\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Sequence.Fasta",
          "name": "Fasta",
          "package": "biofasta",
          "source": "src/Bio-Sequence-Fasta.html",
          "type": "module"
        },
        "index": {
          "description": "This module incorporates functionality for reading and writing sequence data in the Fasta format Each sequence consists of header with prefix and set of lines containing the sequence data",
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "Fasta",
          "package": "biofasta",
          "partial": "Fasta",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.Fasta",
          "name": "Sequence",
          "package": "biofasta",
          "source": "src/Bio-Sequence-Fasta.html#Sequence",
          "type": "data"
        },
        "index": {
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "Sequence",
          "package": "biofasta",
          "partial": "Sequence",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#t:Sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.Fasta",
          "name": "Seq",
          "package": "biofasta",
          "signature": "Seq SeqLabel SeqData (Maybe QualData)",
          "source": "src/Bio-Sequence-Fasta.html#Sequence",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "Seq",
          "package": "biofasta",
          "partial": "Seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#v:Seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.Fasta",
          "name": "countSeqs",
          "package": "biofasta",
          "signature": "FilePath -\u003e IO Int",
          "source": "src/Bio-Sequence-Fasta.html#countSeqs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "countSeqs",
          "normalized": "FilePath-\u003eIO Int",
          "package": "biofasta",
          "partial": "Seqs",
          "signature": "FilePath-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#v:countSeqs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazily read sequence from handle\n\u003c/p\u003e",
          "module": "Bio.Sequence.Fasta",
          "name": "hReadFasta",
          "package": "biofasta",
          "signature": "Handle -\u003e IO [Sequence]",
          "source": "src/Bio-Sequence-Fasta.html#hReadFasta",
          "type": "function"
        },
        "index": {
          "description": "Lazily read sequence from handle",
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "hReadFasta",
          "normalized": "Handle-\u003eIO[Sequence]",
          "package": "biofasta",
          "partial": "Read Fasta",
          "signature": "Handle-\u003eIO[Sequence]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#v:hReadFasta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite sequences in FASTA format to a handle.\n\u003c/p\u003e",
          "module": "Bio.Sequence.Fasta",
          "name": "hWriteFasta",
          "package": "biofasta",
          "signature": "Handle -\u003e [Sequence] -\u003e IO ()",
          "source": "src/Bio-Sequence-Fasta.html#hWriteFasta",
          "type": "function"
        },
        "index": {
          "description": "Write sequences in FASTA format to handle",
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "hWriteFasta",
          "normalized": "Handle-\u003e[Sequence]-\u003eIO()",
          "package": "biofasta",
          "partial": "Write Fasta",
          "signature": "Handle-\u003e[Sequence]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#v:hWriteFasta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list of FASTA-formatted lines into a list of sequences.\n   Blank lines are ignored.\n   Comment lines start with \u003ca/\u003e are allowed between sequences (and ignored).\n   Lines starting with \u003ca\u003e\u003e\u003c/a\u003e initiate a new sequence.\n\u003c/p\u003e",
          "module": "Bio.Sequence.Fasta",
          "name": "mkSeqs",
          "package": "biofasta",
          "signature": "[ByteString] -\u003e [Sequence]",
          "source": "src/Bio-Sequence-Fasta.html#mkSeqs",
          "type": "function"
        },
        "index": {
          "description": "Convert list of FASTA-formatted lines into list of sequences Blank lines are ignored Comment lines start with are allowed between sequences and ignored Lines starting with initiate new sequence",
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "mkSeqs",
          "normalized": "[ByteString]-\u003e[Sequence]",
          "package": "biofasta",
          "partial": "Seqs",
          "signature": "[ByteString]-\u003e[Sequence]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#v:mkSeqs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazily read sequences from a FASTA-formatted file\n\u003c/p\u003e",
          "module": "Bio.Sequence.Fasta",
          "name": "readFasta",
          "package": "biofasta",
          "signature": "FilePath -\u003e IO [Sequence]",
          "source": "src/Bio-Sequence-Fasta.html#readFasta",
          "type": "function"
        },
        "index": {
          "description": "Lazily read sequences from FASTA-formatted file",
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "readFasta",
          "normalized": "FilePath-\u003eIO[Sequence]",
          "package": "biofasta",
          "partial": "Fasta",
          "signature": "FilePath-\u003eIO[Sequence]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#v:readFasta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.Fasta",
          "name": "seqdata",
          "package": "biofasta",
          "signature": "s-\u003e SeqData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "seqdata",
          "normalized": "a-\u003eSeqData",
          "package": "biofasta",
          "signature": "s-\u003eSeqData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#v:seqdata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.Fasta",
          "name": "seqheader",
          "package": "biofasta",
          "signature": "s-\u003e SeqLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "seqheader",
          "normalized": "a-\u003eSeqLabel",
          "package": "biofasta",
          "signature": "s-\u003eSeqLabel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#v:seqheader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.Fasta",
          "name": "seqid",
          "package": "biofasta",
          "signature": "s-\u003e SeqLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "seqid",
          "normalized": "a-\u003eSeqLabel",
          "package": "biofasta",
          "signature": "s-\u003eSeqLabel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#v:seqid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.Fasta",
          "name": "seqlength",
          "package": "biofasta",
          "signature": "s-\u003e Offset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "seqlength",
          "normalized": "a-\u003eOffset",
          "package": "biofasta",
          "signature": "s-\u003eOffset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#v:seqlength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.Fasta",
          "name": "toStr",
          "package": "biofasta",
          "signature": "SeqData -\u003e String",
          "source": "src/Bio-Sequence-Fasta.html#toStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "toStr",
          "normalized": "SeqData-\u003eString",
          "package": "biofasta",
          "partial": "Str",
          "signature": "SeqData-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#v:toStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite sequences to a FASTA-formatted file.\n   Line length is 60.\n\u003c/p\u003e",
          "module": "Bio.Sequence.Fasta",
          "name": "writeFasta",
          "package": "biofasta",
          "signature": "FilePath -\u003e [Sequence] -\u003e IO ()",
          "source": "src/Bio-Sequence-Fasta.html#writeFasta",
          "type": "function"
        },
        "index": {
          "description": "Write sequences to FASTA-formatted file Line length is",
          "hierarchy": "Bio Sequence Fasta",
          "module": "Bio.Sequence.Fasta",
          "name": "writeFasta",
          "normalized": "FilePath-\u003e[Sequence]-\u003eIO()",
          "package": "biofasta",
          "partial": "Fasta",
          "signature": "FilePath-\u003e[Sequence]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#v:writeFasta"
      }
    }
  ]
]