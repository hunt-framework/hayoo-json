[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D-Import.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImporting of FR3D data. Both \u003ca\u003ebasepairs\u003c/a\u003e and \u003ca\u003enear interactions\u003c/a\u003e are\n currently supported. More parsers will come if required.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Biobase.FR3D.Import",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "module",
        "fct-source": "src/Biobase-FR3D-Import.html",
        "fct-type": "module",
        "title": "Import"
      },
      "index": {
        "description": "Importing of FR3D data Both basepairs and near interactions are currently supported More parsers will come if required",
        "hierarchy": "Biobase FR3D Import",
        "module": "Biobase.FR3D.Import",
        "name": "Import",
        "normalized": "",
        "package": "BiobaseFR3D",
        "partial": "Import",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D-Import.html#v:bs2basepair",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function turning a bytestring line into a basepair entry\n\u003c/p\u003e",
        "fct-module": "Biobase.FR3D.Import",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "ByteString -\u003e Basepair",
        "fct-source": "src/Biobase-FR3D-Import.html#bs2basepair",
        "fct-type": "function",
        "title": "bs2basepair"
      },
      "index": {
        "description": "Helper function turning bytestring line into basepair entry",
        "hierarchy": "Biobase FR3D Import",
        "module": "Biobase.FR3D.Import",
        "name": "bs2basepair",
        "normalized": "ByteString-\u003eBasepair",
        "package": "BiobaseFR3D",
        "partial": "",
        "signature": "ByteString-\u003eBasepair"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D-Import.html#v:fromDir",
      "description": {
        "fct-descr": "\u003cp\u003eAnd this one the \u003ca\u003ebasepairs\u003c/a\u003e (this one you normally want).\n\u003c/p\u003e",
        "fct-module": "Biobase.FR3D.Import",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "FilePath -\u003e IO [FR3D]",
        "fct-source": "src/Biobase-FR3D-Import.html#fromDir",
        "fct-type": "function",
        "title": "fromDir"
      },
      "index": {
        "description": "And this one the basepairs this one you normally want",
        "hierarchy": "Biobase FR3D Import",
        "module": "Biobase.FR3D.Import",
        "name": "fromDir",
        "normalized": "FilePath-\u003eIO[FR D]",
        "package": "BiobaseFR3D",
        "partial": "Dir",
        "signature": "FilePath-\u003eIO[FR D]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D-Import.html#v:fromDirNear",
      "description": {
        "fct-descr": "\u003cp\u003eThis one select the \u003ca\u003enear interactions\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Biobase.FR3D.Import",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "FilePath -\u003e IO [FR3D]",
        "fct-source": "src/Biobase-FR3D-Import.html#fromDirNear",
        "fct-type": "function",
        "title": "fromDirNear"
      },
      "index": {
        "description": "This one select the near interactions",
        "hierarchy": "Biobase FR3D Import",
        "module": "Biobase.FR3D.Import",
        "name": "fromDirNear",
        "normalized": "FilePath-\u003eIO[FR D]",
        "package": "BiobaseFR3D",
        "partial": "Dir Near",
        "signature": "FilePath-\u003eIO[FR D]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D-Import.html#v:fromDirSelect",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function: given a directory name, extracts a list of all FR3D\n entries.\n\u003c/p\u003e",
        "fct-module": "Biobase.FR3D.Import",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "String -\u003e FilePath -\u003e IO [FR3D]",
        "fct-source": "src/Biobase-FR3D-Import.html#fromDirSelect",
        "fct-type": "function",
        "title": "fromDirSelect"
      },
      "index": {
        "description": "Convenience function given directory name extracts list of all FR3D entries",
        "hierarchy": "Biobase FR3D Import",
        "module": "Biobase.FR3D.Import",
        "name": "fromDirSelect",
        "normalized": "String-\u003eFilePath-\u003eIO[FR D]",
        "package": "BiobaseFR3D",
        "partial": "Dir Select",
        "signature": "String-\u003eFilePath-\u003eIO[FR D]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D-Import.html#v:iFR3D",
      "description": {
        "fct-descr": "\u003cp\u003eAn Iteratee from a bytestring to one FR3D entry. Since each file contains\n exactly one entry, this is no problem.\n\u003c/p\u003e",
        "fct-module": "Biobase.FR3D.Import",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "Iteratee ByteString m FR3D",
        "fct-source": "src/Biobase-FR3D-Import.html#iFR3D",
        "fct-type": "function",
        "title": "iFR3D"
      },
      "index": {
        "description": "An Iteratee from bytestring to one FR3D entry Since each file contains exactly one entry this is no problem",
        "hierarchy": "Biobase FR3D Import",
        "module": "Biobase.FR3D.Import",
        "name": "iFR3D",
        "normalized": "",
        "package": "BiobaseFR3D",
        "partial": "FR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFR3D provides a very convenient library of explored RNA structures. We are\n mostly interested in the \u003ca\u003ebasepairs\u003c/a\u003e files. In contrast to the RNAstrand\n library or melting experiments, these data sets provide non-canonical RNA\n pairing.\n\u003c/p\u003e\u003cp\u003eNOTE that FR3D entries contain basepairs both in (i,j) as well as (j,i)\n orientation (with i\u003cj).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "module",
        "fct-source": "src/Biobase-FR3D.html",
        "fct-type": "module",
        "title": "FR3D"
      },
      "index": {
        "description": "FR3D provides very convenient library of explored RNA structures We are mostly interested in the basepairs files In contrast to the RNAstrand library or melting experiments these data sets provide non-canonical RNA pairing NOTE that FR3D entries contain basepairs both in as well as orientation with",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "FR3D",
        "normalized": "",
        "package": "BiobaseFR3D",
        "partial": "FR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#t:Basepair",
      "description": {
        "fct-descr": "\u003cp\u003eA single basepair in a basepair system.\n\u003c/p\u003e",
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "data",
        "fct-source": "src/Biobase-FR3D.html#Basepair",
        "fct-type": "data",
        "title": "Basepair"
      },
      "index": {
        "description": "single basepair in basepair system",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "Basepair",
        "normalized": "",
        "package": "BiobaseFR3D",
        "partial": "Basepair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#t:FR3D",
      "description": {
        "fct-descr": "\u003cp\u003eEncapsulates all the \u003ca\u003ebasepairs\u003c/a\u003e information.\n\u003c/p\u003e",
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "data",
        "fct-source": "src/Biobase-FR3D.html#FR3D",
        "fct-type": "data",
        "title": "FR3D"
      },
      "index": {
        "description": "Encapsulates all the basepairs information",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "FR3D",
        "normalized": "",
        "package": "BiobaseFR3D",
        "partial": "FR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#t:LinFR3D",
      "description": {
        "fct-descr": "\u003cp\u003eLinearized FR3D format.\n\u003c/p\u003e",
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "data",
        "fct-source": "src/Biobase-FR3D.html#LinFR3D",
        "fct-type": "data",
        "title": "LinFR3D"
      },
      "index": {
        "description": "Linearized FR3D format",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "LinFR3D",
        "normalized": "",
        "package": "BiobaseFR3D",
        "partial": "Lin FR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#t:RemoveDuplicatePairs",
      "description": {
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "class",
        "fct-source": "src/Biobase-FR3D.html#RemoveDuplicatePairs",
        "fct-type": "class",
        "title": "RemoveDuplicatePairs"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "RemoveDuplicatePairs",
        "normalized": "",
        "package": "BiobaseFR3D",
        "partial": "Remove Duplicate Pairs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#t:TriPair",
      "description": {
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "type",
        "fct-source": "src/Biobase-FR3D.html#TriPair",
        "fct-type": "type",
        "title": "TriPair"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "TriPair",
        "normalized": "",
        "package": "BiobaseFR3D",
        "partial": "Tri Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:Basepair",
      "description": {
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "Basepair",
        "fct-source": "src/Biobase-FR3D.html#Basepair",
        "fct-type": "function",
        "title": "Basepair"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "Basepair",
        "normalized": "",
        "package": "BiobaseFR3D",
        "partial": "Basepair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:FR3D",
      "description": {
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "FR3D",
        "fct-source": "src/Biobase-FR3D.html#FR3D",
        "fct-type": "function",
        "title": "FR3D"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "FR3D",
        "normalized": "",
        "package": "BiobaseFR3D",
        "partial": "FR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:LinFR3D",
      "description": {
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "LinFR3D",
        "fct-source": "src/Biobase-FR3D.html#LinFR3D",
        "fct-type": "function",
        "title": "LinFR3D"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "LinFR3D",
        "normalized": "",
        "package": "BiobaseFR3D",
        "partial": "Lin FR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:basepairs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "[Basepair]",
        "fct-source": "src/Biobase-FR3D.html#FR3D",
        "fct-type": "function",
        "title": "basepairs"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "basepairs",
        "normalized": "[Basepair]",
        "package": "BiobaseFR3D",
        "partial": "",
        "signature": "[Basepair]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:chain1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "ByteString",
        "fct-source": "src/Biobase-FR3D.html#Basepair",
        "fct-type": "function",
        "title": "chain1"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "chain1",
        "normalized": "",
        "package": "BiobaseFR3D",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:chain2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "ByteString",
        "fct-source": "src/Biobase-FR3D.html#Basepair",
        "fct-type": "function",
        "title": "chain2"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "chain2",
        "normalized": "",
        "package": "BiobaseFR3D",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:chains",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "[(ByteString, ByteString)]",
        "fct-source": "src/Biobase-FR3D.html#FR3D",
        "fct-type": "function",
        "title": "chains"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "chains",
        "normalized": "[(ByteString,ByteString)]",
        "package": "BiobaseFR3D",
        "partial": "",
        "signature": "[(ByteString,ByteString)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:checkFR3D",
      "description": {
        "fct-descr": "\u003cp\u003eChecks an FR3D file for correctness. Returns either a Left on errors or\n Right FR3D if correct.\n\u003c/p\u003e\u003cp\u003eTODO chain existence check\n\u003c/p\u003e",
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "FR3D -\u003e Either (FR3D, [Basepair]) FR3D",
        "fct-source": "src/Biobase-FR3D.html#checkFR3D",
        "fct-type": "function",
        "title": "checkFR3D"
      },
      "index": {
        "description": "Checks an FR3D file for correctness Returns either Left on errors or Right FR3D if correct TODO chain existence check",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "checkFR3D",
        "normalized": "FR D-\u003eEither(FR D,[Basepair])FR D",
        "package": "BiobaseFR3D",
        "partial": "FR",
        "signature": "FR D-\u003eEither(FR D,[Basepair])FR D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:checkLinFR3D",
      "description": {
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "LinFR3D -\u003e Either (LinFR3D, [TriPair]) LinFR3D",
        "fct-source": "src/Biobase-FR3D.html#checkLinFR3D",
        "fct-type": "function",
        "title": "checkLinFR3D"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "checkLinFR3D",
        "normalized": "LinFR D-\u003eEither(LinFR D,[TriPair])LinFR D",
        "package": "BiobaseFR3D",
        "partial": "Lin FR",
        "signature": "LinFR D-\u003eEither(LinFR D,[TriPair])LinFR D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:interaction",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "ExtPairAnnotation",
        "fct-source": "src/Biobase-FR3D.html#Basepair",
        "fct-type": "function",
        "title": "interaction"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "interaction",
        "normalized": "",
        "package": "BiobaseFR3D",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:linearizeFR3D",
      "description": {
        "fct-descr": "\u003cp\u003eThe default format is a bit unwieldy; Linearization assumes that all\n sequences are in 5'-\u003e3' order; then produces one sequence with \u003ca\u003e&\u003c/a\u003e\n separating the sequences and pairs reduced to (Int,Int,cWW).\n\u003c/p\u003e",
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "FR3D -\u003e LinFR3D",
        "fct-source": "src/Biobase-FR3D.html#linearizeFR3D",
        "fct-type": "function",
        "title": "linearizeFR3D"
      },
      "index": {
        "description": "The default format is bit unwieldy Linearization assumes that all sequences are in order then produces one sequence with separating the sequences and pairs reduced to Int Int cWW",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "linearizeFR3D",
        "normalized": "FR D-\u003eLinFR D",
        "package": "BiobaseFR3D",
        "partial": "FR",
        "signature": "FR D-\u003eLinFR D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:nucleotide1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "Char",
        "fct-source": "src/Biobase-FR3D.html#Basepair",
        "fct-type": "function",
        "title": "nucleotide1"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "nucleotide1",
        "normalized": "",
        "package": "BiobaseFR3D",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:nucleotide2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "Char",
        "fct-source": "src/Biobase-FR3D.html#Basepair",
        "fct-type": "function",
        "title": "nucleotide2"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "nucleotide2",
        "normalized": "",
        "package": "BiobaseFR3D",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:pairs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "[TriPair]",
        "fct-source": "src/Biobase-FR3D.html#LinFR3D",
        "fct-type": "function",
        "title": "pairs"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "pairs",
        "normalized": "[TriPair]",
        "package": "BiobaseFR3D",
        "partial": "",
        "signature": "[TriPair]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:pdbID",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "ByteString",
        "fct-source": "src/Biobase-FR3D.html#LinFR3D",
        "fct-type": "function",
        "title": "pdbID"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "pdbID",
        "normalized": "",
        "package": "BiobaseFR3D",
        "partial": "ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:pdbid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "ByteString",
        "fct-source": "src/Biobase-FR3D.html#FR3D",
        "fct-type": "function",
        "title": "pdbid"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "pdbid",
        "normalized": "",
        "package": "BiobaseFR3D",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:pdbnumber1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "Int",
        "fct-source": "src/Biobase-FR3D.html#Basepair",
        "fct-type": "function",
        "title": "pdbnumber1"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "pdbnumber1",
        "normalized": "",
        "package": "BiobaseFR3D",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:pdbnumber2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "Int",
        "fct-source": "src/Biobase-FR3D.html#Basepair",
        "fct-type": "function",
        "title": "pdbnumber2"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "pdbnumber2",
        "normalized": "",
        "package": "BiobaseFR3D",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:removeDuplicatePairs",
      "description": {
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Biobase-FR3D.html#removeDuplicatePairs",
        "fct-type": "method",
        "title": "removeDuplicatePairs"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "removeDuplicatePairs",
        "normalized": "a-\u003ea",
        "package": "BiobaseFR3D",
        "partial": "Duplicate Pairs",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:seqpos1",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "Int",
        "fct-source": "src/Biobase-FR3D.html#Basepair",
        "fct-type": "function",
        "title": "seqpos1"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "seqpos1",
        "normalized": "",
        "package": "BiobaseFR3D",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:seqpos2",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "Int",
        "fct-source": "src/Biobase-FR3D.html#Basepair",
        "fct-type": "function",
        "title": "seqpos2"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "seqpos2",
        "normalized": "",
        "package": "BiobaseFR3D",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:sequence",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Biobase.FR3D",
        "fct-package": "BiobaseFR3D",
        "fct-signature": "ByteString",
        "fct-source": "src/Biobase-FR3D.html#LinFR3D",
        "fct-type": "function",
        "title": "sequence"
      },
      "index": {
        "description": "",
        "hierarchy": "Biobase FR3D",
        "module": "Biobase.FR3D",
        "name": "sequence",
        "normalized": "",
        "package": "BiobaseFR3D",
        "partial": "",
        "signature": ""
      }
    }
  }
]