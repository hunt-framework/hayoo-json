[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module incorporates functionality for reading and writing\n   sequence data in the Fasta format.\n   Each sequence consists of a header (with a \u003ccode\u003e\u003ca\u003e\u003e\u003c/a\u003e\u003c/code\u003e prefix)\n   and a set of lines containing the sequence data..\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Bio.Sequence.Fasta",
        "fct-package": "biofasta",
        "fct-signature": "module",
        "fct-source": "src/Bio-Sequence-Fasta.html",
        "fct-type": "module",
        "title": "Fasta"
      },
      "index": {
        "description": "This module incorporates functionality for reading and writing sequence data in the Fasta format Each sequence consists of header with prefix and set of lines containing the sequence data",
        "hierarchy": "Bio Sequence Fasta",
        "module": "Bio.Sequence.Fasta",
        "name": "Fasta",
        "normalized": "",
        "package": "biofasta",
        "partial": "Fasta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#t:Sequence",
      "description": {
        "fct-module": "Bio.Sequence.Fasta",
        "fct-package": "biofasta",
        "fct-signature": "data",
        "fct-source": "src/Bio-Sequence-Fasta.html#Sequence",
        "fct-type": "data",
        "title": "Sequence"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence Fasta",
        "module": "Bio.Sequence.Fasta",
        "name": "Sequence",
        "normalized": "",
        "package": "biofasta",
        "partial": "Sequence",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#v:Seq",
      "description": {
        "fct-module": "Bio.Sequence.Fasta",
        "fct-package": "biofasta",
        "fct-signature": "Seq SeqLabel SeqData (Maybe QualData)",
        "fct-source": "src/Bio-Sequence-Fasta.html#Sequence",
        "fct-type": "function",
        "title": "Seq"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence Fasta",
        "module": "Bio.Sequence.Fasta",
        "name": "Seq",
        "normalized": "",
        "package": "biofasta",
        "partial": "Seq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#v:countSeqs",
      "description": {
        "fct-module": "Bio.Sequence.Fasta",
        "fct-package": "biofasta",
        "fct-signature": "FilePath -\u003e IO Int",
        "fct-source": "src/Bio-Sequence-Fasta.html#countSeqs",
        "fct-type": "function",
        "title": "countSeqs"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence Fasta",
        "module": "Bio.Sequence.Fasta",
        "name": "countSeqs",
        "normalized": "FilePath-\u003eIO Int",
        "package": "biofasta",
        "partial": "Seqs",
        "signature": "FilePath-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#v:hReadFasta",
      "description": {
        "fct-descr": "\u003cp\u003eLazily read sequence from handle\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.Fasta",
        "fct-package": "biofasta",
        "fct-signature": "Handle -\u003e IO [Sequence]",
        "fct-source": "src/Bio-Sequence-Fasta.html#hReadFasta",
        "fct-type": "function",
        "title": "hReadFasta"
      },
      "index": {
        "description": "Lazily read sequence from handle",
        "hierarchy": "Bio Sequence Fasta",
        "module": "Bio.Sequence.Fasta",
        "name": "hReadFasta",
        "normalized": "Handle-\u003eIO[Sequence]",
        "package": "biofasta",
        "partial": "Read Fasta",
        "signature": "Handle-\u003eIO[Sequence]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#v:hWriteFasta",
      "description": {
        "fct-descr": "\u003cp\u003eWrite sequences in FASTA format to a handle.\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.Fasta",
        "fct-package": "biofasta",
        "fct-signature": "Handle -\u003e [Sequence] -\u003e IO ()",
        "fct-source": "src/Bio-Sequence-Fasta.html#hWriteFasta",
        "fct-type": "function",
        "title": "hWriteFasta"
      },
      "index": {
        "description": "Write sequences in FASTA format to handle",
        "hierarchy": "Bio Sequence Fasta",
        "module": "Bio.Sequence.Fasta",
        "name": "hWriteFasta",
        "normalized": "Handle-\u003e[Sequence]-\u003eIO()",
        "package": "biofasta",
        "partial": "Write Fasta",
        "signature": "Handle-\u003e[Sequence]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#v:mkSeqs",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a list of FASTA-formatted lines into a list of sequences.\n   Blank lines are ignored.\n   Comment lines start with \u003ca/\u003e are allowed between sequences (and ignored).\n   Lines starting with \u003ca\u003e\u003e\u003c/a\u003e initiate a new sequence.\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.Fasta",
        "fct-package": "biofasta",
        "fct-signature": "[ByteString] -\u003e [Sequence]",
        "fct-source": "src/Bio-Sequence-Fasta.html#mkSeqs",
        "fct-type": "function",
        "title": "mkSeqs"
      },
      "index": {
        "description": "Convert list of FASTA-formatted lines into list of sequences Blank lines are ignored Comment lines start with are allowed between sequences and ignored Lines starting with initiate new sequence",
        "hierarchy": "Bio Sequence Fasta",
        "module": "Bio.Sequence.Fasta",
        "name": "mkSeqs",
        "normalized": "[ByteString]-\u003e[Sequence]",
        "package": "biofasta",
        "partial": "Seqs",
        "signature": "[ByteString]-\u003e[Sequence]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#v:readFasta",
      "description": {
        "fct-descr": "\u003cp\u003eLazily read sequences from a FASTA-formatted file\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.Fasta",
        "fct-package": "biofasta",
        "fct-signature": "FilePath -\u003e IO [Sequence]",
        "fct-source": "src/Bio-Sequence-Fasta.html#readFasta",
        "fct-type": "function",
        "title": "readFasta"
      },
      "index": {
        "description": "Lazily read sequences from FASTA-formatted file",
        "hierarchy": "Bio Sequence Fasta",
        "module": "Bio.Sequence.Fasta",
        "name": "readFasta",
        "normalized": "FilePath-\u003eIO[Sequence]",
        "package": "biofasta",
        "partial": "Fasta",
        "signature": "FilePath-\u003eIO[Sequence]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#v:seqdata",
      "description": {
        "fct-module": "Bio.Sequence.Fasta",
        "fct-package": "biofasta",
        "fct-signature": "s-\u003e SeqData",
        "fct-type": "function",
        "title": "seqdata"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence Fasta",
        "module": "Bio.Sequence.Fasta",
        "name": "seqdata",
        "normalized": "a-\u003eSeqData",
        "package": "biofasta",
        "partial": "",
        "signature": "s-\u003eSeqData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#v:seqheader",
      "description": {
        "fct-module": "Bio.Sequence.Fasta",
        "fct-package": "biofasta",
        "fct-signature": "s-\u003e SeqLabel",
        "fct-type": "function",
        "title": "seqheader"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence Fasta",
        "module": "Bio.Sequence.Fasta",
        "name": "seqheader",
        "normalized": "a-\u003eSeqLabel",
        "package": "biofasta",
        "partial": "",
        "signature": "s-\u003eSeqLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#v:seqid",
      "description": {
        "fct-module": "Bio.Sequence.Fasta",
        "fct-package": "biofasta",
        "fct-signature": "s-\u003e SeqLabel",
        "fct-type": "function",
        "title": "seqid"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence Fasta",
        "module": "Bio.Sequence.Fasta",
        "name": "seqid",
        "normalized": "a-\u003eSeqLabel",
        "package": "biofasta",
        "partial": "",
        "signature": "s-\u003eSeqLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#v:seqlength",
      "description": {
        "fct-module": "Bio.Sequence.Fasta",
        "fct-package": "biofasta",
        "fct-signature": "s-\u003e Offset",
        "fct-type": "function",
        "title": "seqlength"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence Fasta",
        "module": "Bio.Sequence.Fasta",
        "name": "seqlength",
        "normalized": "a-\u003eOffset",
        "package": "biofasta",
        "partial": "",
        "signature": "s-\u003eOffset"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#v:toStr",
      "description": {
        "fct-module": "Bio.Sequence.Fasta",
        "fct-package": "biofasta",
        "fct-signature": "SeqData -\u003e String",
        "fct-source": "src/Bio-Sequence-Fasta.html#toStr",
        "fct-type": "function",
        "title": "toStr"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence Fasta",
        "module": "Bio.Sequence.Fasta",
        "name": "toStr",
        "normalized": "SeqData-\u003eString",
        "package": "biofasta",
        "partial": "Str",
        "signature": "SeqData-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofasta/docs/Bio-Sequence-Fasta.html#v:writeFasta",
      "description": {
        "fct-descr": "\u003cp\u003eWrite sequences to a FASTA-formatted file.\n   Line length is 60.\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.Fasta",
        "fct-package": "biofasta",
        "fct-signature": "FilePath -\u003e [Sequence] -\u003e IO ()",
        "fct-source": "src/Bio-Sequence-Fasta.html#writeFasta",
        "fct-type": "function",
        "title": "writeFasta"
      },
      "index": {
        "description": "Write sequences to FASTA-formatted file Line length is",
        "hierarchy": "Bio Sequence Fasta",
        "module": "Bio.Sequence.Fasta",
        "name": "writeFasta",
        "normalized": "FilePath-\u003e[Sequence]-\u003eIO()",
        "package": "biofasta",
        "partial": "Fasta",
        "signature": "FilePath-\u003e[Sequence]-\u003eIO()"
      }
    }
  }
]