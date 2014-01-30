[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport the FastQ format that combines sequence and quality. See:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://www.bioperl.org/wiki/FASTQ_sequence_format\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eOf course, this is yet another vaguely defined pseudo-standard with\n   conflicting definitions.  Of course Solexa had to go and invent not one, but two \n   different, and indistinguishably so, ways to do it:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://www.bcgsc.ca/pipermail/ssrformat/2007-March/000137.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://maq.sourceforge.net/fastq.shtml\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/FASTQ_format\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSanger-style FastQ-format is supported with the (h)read/writeSangerQ functions,\n   and the new Illumina\u003cem\u003eSolexa-style with (h)read\u003c/em\u003ewriteIllumina.\n\u003c/p\u003e\u003cp\u003eAs far as I know, FastQ is only used for nucleotide sequences, never amino acid.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Bio.Sequence.FastQ",
        "fct-package": "biofastq",
        "fct-signature": "module",
        "fct-source": "src/Bio-Sequence-FastQ.html",
        "fct-type": "module",
        "title": "FastQ"
      },
      "index": {
        "description": "Support the FastQ format that combines sequence and quality See http www.bioperl.org wiki FASTQ sequence format Of course this is yet another vaguely defined pseudo-standard with conflicting definitions Of course Solexa had to go and invent not one but two different and indistinguishably so ways to do it http www.bcgsc.ca pipermail ssrformat March html http maq.sourceforge.net fastq.shtml http en.wikipedia.org wiki FASTQ format Sanger-style FastQ-format is supported with the read writeSangerQ functions and the new Illumina Solexa-style with read writeIllumina As far as know FastQ is only used for nucleotide sequences never amino acid",
        "hierarchy": "Bio Sequence FastQ",
        "module": "Bio.Sequence.FastQ",
        "name": "FastQ",
        "normalized": "",
        "package": "biofastq",
        "partial": "Fast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#v:hReadFastQ",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: FastQ assumes Sanger-style quality info use {read,write}SangerQ or -Illumina instead\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Bio.Sequence.FastQ",
        "fct-package": "biofastq",
        "fct-signature": "Handle -\u003e IO [Sequence]",
        "fct-source": "src/Bio-Sequence-FastQ.html#hReadFastQ",
        "fct-type": "function",
        "title": "hReadFastQ"
      },
      "index": {
        "description": "Deprecated FastQ assumes Sanger-style quality info use read write SangerQ or Illumina instead",
        "hierarchy": "Bio Sequence FastQ",
        "module": "Bio.Sequence.FastQ",
        "name": "hReadFastQ",
        "normalized": "Handle-\u003eIO[Sequence]",
        "package": "biofastq",
        "partial": "Read Fast",
        "signature": "Handle-\u003eIO[Sequence]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#v:hReadIllumina",
      "description": {
        "fct-module": "Bio.Sequence.FastQ",
        "fct-package": "biofastq",
        "fct-signature": "Handle -\u003e IO [Sequence]",
        "fct-source": "src/Bio-Sequence-FastQ.html#hReadIllumina",
        "fct-type": "function",
        "title": "hReadIllumina"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence FastQ",
        "module": "Bio.Sequence.FastQ",
        "name": "hReadIllumina",
        "normalized": "Handle-\u003eIO[Sequence]",
        "package": "biofastq",
        "partial": "Read Illumina",
        "signature": "Handle-\u003eIO[Sequence]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#v:hReadSangerQ",
      "description": {
        "fct-module": "Bio.Sequence.FastQ",
        "fct-package": "biofastq",
        "fct-signature": "Handle -\u003e IO [Sequence]",
        "fct-source": "src/Bio-Sequence-FastQ.html#hReadSangerQ",
        "fct-type": "function",
        "title": "hReadSangerQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence FastQ",
        "module": "Bio.Sequence.FastQ",
        "name": "hReadSangerQ",
        "normalized": "Handle-\u003eIO[Sequence]",
        "package": "biofastq",
        "partial": "Read Sanger",
        "signature": "Handle-\u003eIO[Sequence]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#v:hWriteFastQ",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: FastQ assumes Sanger-style quality info use {read,write}SangerQ or -Illumina instead\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Bio.Sequence.FastQ",
        "fct-package": "biofastq",
        "fct-signature": "Handle -\u003e [Sequence] -\u003e IO ()",
        "fct-source": "src/Bio-Sequence-FastQ.html#hWriteFastQ",
        "fct-type": "function",
        "title": "hWriteFastQ"
      },
      "index": {
        "description": "Deprecated FastQ assumes Sanger-style quality info use read write SangerQ or Illumina instead",
        "hierarchy": "Bio Sequence FastQ",
        "module": "Bio.Sequence.FastQ",
        "name": "hWriteFastQ",
        "normalized": "Handle-\u003e[Sequence]-\u003eIO()",
        "package": "biofastq",
        "partial": "Write Fast",
        "signature": "Handle-\u003e[Sequence]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#v:hWriteIllumina",
      "description": {
        "fct-module": "Bio.Sequence.FastQ",
        "fct-package": "biofastq",
        "fct-signature": "Handle -\u003e [Sequence] -\u003e IO ()",
        "fct-source": "src/Bio-Sequence-FastQ.html#hWriteIllumina",
        "fct-type": "function",
        "title": "hWriteIllumina"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence FastQ",
        "module": "Bio.Sequence.FastQ",
        "name": "hWriteIllumina",
        "normalized": "Handle-\u003e[Sequence]-\u003eIO()",
        "package": "biofastq",
        "partial": "Write Illumina",
        "signature": "Handle-\u003e[Sequence]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#v:hWriteSangerQ",
      "description": {
        "fct-module": "Bio.Sequence.FastQ",
        "fct-package": "biofastq",
        "fct-signature": "Handle -\u003e [Sequence] -\u003e IO ()",
        "fct-source": "src/Bio-Sequence-FastQ.html#hWriteSangerQ",
        "fct-type": "function",
        "title": "hWriteSangerQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence FastQ",
        "module": "Bio.Sequence.FastQ",
        "name": "hWriteSangerQ",
        "normalized": "Handle-\u003e[Sequence]-\u003eIO()",
        "package": "biofastq",
        "partial": "Write Sanger",
        "signature": "Handle-\u003e[Sequence]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#v:parse",
      "description": {
        "fct-descr": "\u003cp\u003eParse one FastQ entry, suitable for using in \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e over\n   \u003ccode\u003e\u003ca\u003elines\u003c/a\u003e\u003c/code\u003e from a file\n\u003c/p\u003e",
        "fct-module": "Bio.Sequence.FastQ",
        "fct-package": "biofastq",
        "fct-signature": "[ByteString] -\u003e Maybe (Either String Sequence, [ByteString])",
        "fct-source": "src/Bio-Sequence-FastQ.html#parse",
        "fct-type": "function",
        "title": "parse"
      },
      "index": {
        "description": "Parse one FastQ entry suitable for using in unfoldr over lines from file",
        "hierarchy": "Bio Sequence FastQ",
        "module": "Bio.Sequence.FastQ",
        "name": "parse",
        "normalized": "[ByteString]-\u003eMaybe(Either String Sequence,[ByteString])",
        "package": "biofastq",
        "partial": "",
        "signature": "[ByteString]-\u003eMaybe(Either String Sequence,[ByteString])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#v:readFastQ",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: FastQ assumes Sanger-style quality info use {read,write}SangerQ or -Illumina instead\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Bio.Sequence.FastQ",
        "fct-package": "biofastq",
        "fct-signature": "FilePath -\u003e IO [Sequence]",
        "fct-source": "src/Bio-Sequence-FastQ.html#readFastQ",
        "fct-type": "function",
        "title": "readFastQ"
      },
      "index": {
        "description": "Deprecated FastQ assumes Sanger-style quality info use read write SangerQ or Illumina instead",
        "hierarchy": "Bio Sequence FastQ",
        "module": "Bio.Sequence.FastQ",
        "name": "readFastQ",
        "normalized": "FilePath-\u003eIO[Sequence]",
        "package": "biofastq",
        "partial": "Fast",
        "signature": "FilePath-\u003eIO[Sequence]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#v:readIllumina",
      "description": {
        "fct-module": "Bio.Sequence.FastQ",
        "fct-package": "biofastq",
        "fct-signature": "FilePath -\u003e IO [Sequence]",
        "fct-source": "src/Bio-Sequence-FastQ.html#readIllumina",
        "fct-type": "function",
        "title": "readIllumina"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence FastQ",
        "module": "Bio.Sequence.FastQ",
        "name": "readIllumina",
        "normalized": "FilePath-\u003eIO[Sequence]",
        "package": "biofastq",
        "partial": "Illumina",
        "signature": "FilePath-\u003eIO[Sequence]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#v:readSangerQ",
      "description": {
        "fct-module": "Bio.Sequence.FastQ",
        "fct-package": "biofastq",
        "fct-signature": "FilePath -\u003e IO [Sequence]",
        "fct-source": "src/Bio-Sequence-FastQ.html#readSangerQ",
        "fct-type": "function",
        "title": "readSangerQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence FastQ",
        "module": "Bio.Sequence.FastQ",
        "name": "readSangerQ",
        "normalized": "FilePath-\u003eIO[Sequence]",
        "package": "biofastq",
        "partial": "Sanger",
        "signature": "FilePath-\u003eIO[Sequence]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#v:writeFastQ",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: FastQ assumes Sanger-style quality info use {read,write}SangerQ or -Illumina instead\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Bio.Sequence.FastQ",
        "fct-package": "biofastq",
        "fct-signature": "FilePath -\u003e [Sequence] -\u003e IO ()",
        "fct-source": "src/Bio-Sequence-FastQ.html#writeFastQ",
        "fct-type": "function",
        "title": "writeFastQ"
      },
      "index": {
        "description": "Deprecated FastQ assumes Sanger-style quality info use read write SangerQ or Illumina instead",
        "hierarchy": "Bio Sequence FastQ",
        "module": "Bio.Sequence.FastQ",
        "name": "writeFastQ",
        "normalized": "FilePath-\u003e[Sequence]-\u003eIO()",
        "package": "biofastq",
        "partial": "Fast",
        "signature": "FilePath-\u003e[Sequence]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#v:writeIllumina",
      "description": {
        "fct-module": "Bio.Sequence.FastQ",
        "fct-package": "biofastq",
        "fct-signature": "FilePath -\u003e [Sequence] -\u003e IO ()",
        "fct-source": "src/Bio-Sequence-FastQ.html#writeIllumina",
        "fct-type": "function",
        "title": "writeIllumina"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence FastQ",
        "module": "Bio.Sequence.FastQ",
        "name": "writeIllumina",
        "normalized": "FilePath-\u003e[Sequence]-\u003eIO()",
        "package": "biofastq",
        "partial": "Illumina",
        "signature": "FilePath-\u003e[Sequence]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/biofastq/docs/Bio-Sequence-FastQ.html#v:writeSangerQ",
      "description": {
        "fct-module": "Bio.Sequence.FastQ",
        "fct-package": "biofastq",
        "fct-signature": "FilePath -\u003e [Sequence] -\u003e IO ()",
        "fct-source": "src/Bio-Sequence-FastQ.html#writeSangerQ",
        "fct-type": "function",
        "title": "writeSangerQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Bio Sequence FastQ",
        "module": "Bio.Sequence.FastQ",
        "name": "writeSangerQ",
        "normalized": "FilePath-\u003e[Sequence]-\u003eIO()",
        "package": "biofastq",
        "partial": "Sanger",
        "signature": "FilePath-\u003e[Sequence]-\u003eIO()"
      }
    }
  }
]