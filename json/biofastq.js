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
        "word": "biofastq"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport the FastQ format that combines sequence and quality. See:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://www.bioperl.org/wiki/FASTQ_sequence_format\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eOf course, this is yet another vaguely defined pseudo-standard with\n   conflicting definitions.  Of course Solexa had to go and invent not one, but two \n   different, and indistinguishably so, ways to do it:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://www.bcgsc.ca/pipermail/ssrformat/2007-March/000137.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://maq.sourceforge.net/fastq.shtml\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/FASTQ_format\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSanger-style FastQ-format is supported with the (h)read/writeSangerQ functions,\n   and the new Illumina\u003cem\u003eSolexa-style with (h)read\u003c/em\u003ewriteIllumina.\n\u003c/p\u003e\u003cp\u003eAs far as I know, FastQ is only used for nucleotide sequences, never amino acid.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Sequence.FastQ",
          "name": "FastQ",
          "package": "biofastq",
          "source": "src/Bio-Sequence-FastQ.html",
          "type": "module"
        },
        "index": {
          "description": "Support the FastQ format that combines sequence and quality See http www.bioperl.org wiki FASTQ sequence format Of course this is yet another vaguely defined pseudo-standard with conflicting definitions Of course Solexa had to go and invent not one but two different and indistinguishably so ways to do it http www.bcgsc.ca pipermail ssrformat March html http maq.sourceforge.net fastq.shtml http en.wikipedia.org wiki FASTQ format Sanger-style FastQ-format is supported with the read writeSangerQ functions and the new Illumina Solexa-style with read writeIllumina As far as know FastQ is only used for nucleotide sequences never amino acid",
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "FastQ",
          "package": "biofastq",
          "partial": "Fast",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: FastQ assumes Sanger-style quality info use {read,write}SangerQ or -Illumina instead\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Sequence.FastQ",
          "name": "hReadFastQ",
          "package": "biofastq",
          "signature": "Handle -\u003e IO [Sequence]",
          "source": "src/Bio-Sequence-FastQ.html#hReadFastQ",
          "type": "function"
        },
        "index": {
          "description": "Deprecated FastQ assumes Sanger-style quality info use read write SangerQ or Illumina instead",
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "hReadFastQ",
          "normalized": "Handle-\u003eIO[Sequence]",
          "package": "biofastq",
          "partial": "Read Fast",
          "signature": "Handle-\u003eIO[Sequence]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#v:hReadFastQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.FastQ",
          "name": "hReadIllumina",
          "package": "biofastq",
          "signature": "Handle -\u003e IO [Sequence]",
          "source": "src/Bio-Sequence-FastQ.html#hReadIllumina",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "hReadIllumina",
          "normalized": "Handle-\u003eIO[Sequence]",
          "package": "biofastq",
          "partial": "Read Illumina",
          "signature": "Handle-\u003eIO[Sequence]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#v:hReadIllumina"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.FastQ",
          "name": "hReadSangerQ",
          "package": "biofastq",
          "signature": "Handle -\u003e IO [Sequence]",
          "source": "src/Bio-Sequence-FastQ.html#hReadSangerQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "hReadSangerQ",
          "normalized": "Handle-\u003eIO[Sequence]",
          "package": "biofastq",
          "partial": "Read Sanger",
          "signature": "Handle-\u003eIO[Sequence]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#v:hReadSangerQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: FastQ assumes Sanger-style quality info use {read,write}SangerQ or -Illumina instead\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Sequence.FastQ",
          "name": "hWriteFastQ",
          "package": "biofastq",
          "signature": "Handle -\u003e [Sequence] -\u003e IO ()",
          "source": "src/Bio-Sequence-FastQ.html#hWriteFastQ",
          "type": "function"
        },
        "index": {
          "description": "Deprecated FastQ assumes Sanger-style quality info use read write SangerQ or Illumina instead",
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "hWriteFastQ",
          "normalized": "Handle-\u003e[Sequence]-\u003eIO()",
          "package": "biofastq",
          "partial": "Write Fast",
          "signature": "Handle-\u003e[Sequence]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#v:hWriteFastQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.FastQ",
          "name": "hWriteIllumina",
          "package": "biofastq",
          "signature": "Handle -\u003e [Sequence] -\u003e IO ()",
          "source": "src/Bio-Sequence-FastQ.html#hWriteIllumina",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "hWriteIllumina",
          "normalized": "Handle-\u003e[Sequence]-\u003eIO()",
          "package": "biofastq",
          "partial": "Write Illumina",
          "signature": "Handle-\u003e[Sequence]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#v:hWriteIllumina"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.FastQ",
          "name": "hWriteSangerQ",
          "package": "biofastq",
          "signature": "Handle -\u003e [Sequence] -\u003e IO ()",
          "source": "src/Bio-Sequence-FastQ.html#hWriteSangerQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "hWriteSangerQ",
          "normalized": "Handle-\u003e[Sequence]-\u003eIO()",
          "package": "biofastq",
          "partial": "Write Sanger",
          "signature": "Handle-\u003e[Sequence]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#v:hWriteSangerQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse one FastQ entry, suitable for using in \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e over\n   \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e from a file\n\u003c/p\u003e",
          "module": "Bio.Sequence.FastQ",
          "name": "parse",
          "package": "biofastq",
          "signature": "[ByteString] -\u003e Maybe (Either String Sequence, [ByteString])",
          "source": "src/Bio-Sequence-FastQ.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Parse one FastQ entry suitable for using in unfoldr over lines from file",
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "parse",
          "normalized": "[ByteString]-\u003eMaybe(Either String Sequence,[ByteString])",
          "package": "biofastq",
          "signature": "[ByteString]-\u003eMaybe(Either String Sequence,[ByteString])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: FastQ assumes Sanger-style quality info use {read,write}SangerQ or -Illumina instead\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Sequence.FastQ",
          "name": "readFastQ",
          "package": "biofastq",
          "signature": "FilePath -\u003e IO [Sequence]",
          "source": "src/Bio-Sequence-FastQ.html#readFastQ",
          "type": "function"
        },
        "index": {
          "description": "Deprecated FastQ assumes Sanger-style quality info use read write SangerQ or Illumina instead",
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "readFastQ",
          "normalized": "FilePath-\u003eIO[Sequence]",
          "package": "biofastq",
          "partial": "Fast",
          "signature": "FilePath-\u003eIO[Sequence]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#v:readFastQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.FastQ",
          "name": "readIllumina",
          "package": "biofastq",
          "signature": "FilePath -\u003e IO [Sequence]",
          "source": "src/Bio-Sequence-FastQ.html#readIllumina",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "readIllumina",
          "normalized": "FilePath-\u003eIO[Sequence]",
          "package": "biofastq",
          "partial": "Illumina",
          "signature": "FilePath-\u003eIO[Sequence]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#v:readIllumina"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.FastQ",
          "name": "readSangerQ",
          "package": "biofastq",
          "signature": "FilePath -\u003e IO [Sequence]",
          "source": "src/Bio-Sequence-FastQ.html#readSangerQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "readSangerQ",
          "normalized": "FilePath-\u003eIO[Sequence]",
          "package": "biofastq",
          "partial": "Sanger",
          "signature": "FilePath-\u003eIO[Sequence]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#v:readSangerQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: FastQ assumes Sanger-style quality info use {read,write}SangerQ or -Illumina instead\u003c/p\u003e\u003c/div\u003e",
          "module": "Bio.Sequence.FastQ",
          "name": "writeFastQ",
          "package": "biofastq",
          "signature": "FilePath -\u003e [Sequence] -\u003e IO ()",
          "source": "src/Bio-Sequence-FastQ.html#writeFastQ",
          "type": "function"
        },
        "index": {
          "description": "Deprecated FastQ assumes Sanger-style quality info use read write SangerQ or Illumina instead",
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "writeFastQ",
          "normalized": "FilePath-\u003e[Sequence]-\u003eIO()",
          "package": "biofastq",
          "partial": "Fast",
          "signature": "FilePath-\u003e[Sequence]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#v:writeFastQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.FastQ",
          "name": "writeIllumina",
          "package": "biofastq",
          "signature": "FilePath -\u003e [Sequence] -\u003e IO ()",
          "source": "src/Bio-Sequence-FastQ.html#writeIllumina",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "writeIllumina",
          "normalized": "FilePath-\u003e[Sequence]-\u003eIO()",
          "package": "biofastq",
          "partial": "Illumina",
          "signature": "FilePath-\u003e[Sequence]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#v:writeIllumina"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Bio.Sequence.FastQ",
          "name": "writeSangerQ",
          "package": "biofastq",
          "signature": "FilePath -\u003e [Sequence] -\u003e IO ()",
          "source": "src/Bio-Sequence-FastQ.html#writeSangerQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Bio Sequence FastQ",
          "module": "Bio.Sequence.FastQ",
          "name": "writeSangerQ",
          "normalized": "FilePath-\u003e[Sequence]-\u003eIO()",
          "package": "biofastq",
          "partial": "Sanger",
          "signature": "FilePath-\u003e[Sequence]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#v:writeSangerQ"
      }
    }
  ]
]