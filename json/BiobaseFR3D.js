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
        "word": "BiobaseFR3D"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImporting of FR3D data. Both \u003ca\u003ebasepairs\u003c/a\u003e and \u003ca\u003enear interactions\u003c/a\u003e are\n currently supported. More parsers will come if required.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Biobase.FR3D.Import",
          "name": "Import",
          "package": "BiobaseFR3D",
          "source": "src/Biobase-FR3D-Import.html",
          "type": "module"
        },
        "index": {
          "description": "Importing of FR3D data Both basepairs and near interactions are currently supported More parsers will come if required",
          "hierarchy": "Biobase FR3D Import",
          "module": "Biobase.FR3D.Import",
          "name": "Import",
          "package": "BiobaseFR3D",
          "partial": "Import",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D-Import.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function turning a bytestring line into a basepair entry\n\u003c/p\u003e",
          "module": "Biobase.FR3D.Import",
          "name": "bs2basepair",
          "package": "BiobaseFR3D",
          "signature": "ByteString -\u003e Basepair",
          "source": "src/Biobase-FR3D-Import.html#bs2basepair",
          "type": "function"
        },
        "index": {
          "description": "Helper function turning bytestring line into basepair entry",
          "hierarchy": "Biobase FR3D Import",
          "module": "Biobase.FR3D.Import",
          "name": "bs2basepair",
          "normalized": "ByteString-\u003eBasepair",
          "package": "BiobaseFR3D",
          "signature": "ByteString-\u003eBasepair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D-Import.html#v:bs2basepair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnd this one the \u003ca\u003ebasepairs\u003c/a\u003e (this one you normally want).\n\u003c/p\u003e",
          "module": "Biobase.FR3D.Import",
          "name": "fromDir",
          "package": "BiobaseFR3D",
          "signature": "FilePath -\u003e IO [FR3D]",
          "source": "src/Biobase-FR3D-Import.html#fromDir",
          "type": "function"
        },
        "index": {
          "description": "And this one the basepairs this one you normally want",
          "hierarchy": "Biobase FR3D Import",
          "module": "Biobase.FR3D.Import",
          "name": "fromDir",
          "normalized": "FilePath-\u003eIO[FR D]",
          "package": "BiobaseFR3D",
          "partial": "Dir",
          "signature": "FilePath-\u003eIO[FR D]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D-Import.html#v:fromDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis one select the \u003ca\u003enear interactions\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Biobase.FR3D.Import",
          "name": "fromDirNear",
          "package": "BiobaseFR3D",
          "signature": "FilePath -\u003e IO [FR3D]",
          "source": "src/Biobase-FR3D-Import.html#fromDirNear",
          "type": "function"
        },
        "index": {
          "description": "This one select the near interactions",
          "hierarchy": "Biobase FR3D Import",
          "module": "Biobase.FR3D.Import",
          "name": "fromDirNear",
          "normalized": "FilePath-\u003eIO[FR D]",
          "package": "BiobaseFR3D",
          "partial": "Dir Near",
          "signature": "FilePath-\u003eIO[FR D]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D-Import.html#v:fromDirNear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function: given a directory name, extracts a list of all FR3D\n entries.\n\u003c/p\u003e",
          "module": "Biobase.FR3D.Import",
          "name": "fromDirSelect",
          "package": "BiobaseFR3D",
          "signature": "String -\u003e FilePath -\u003e IO [FR3D]",
          "source": "src/Biobase-FR3D-Import.html#fromDirSelect",
          "type": "function"
        },
        "index": {
          "description": "Convenience function given directory name extracts list of all FR3D entries",
          "hierarchy": "Biobase FR3D Import",
          "module": "Biobase.FR3D.Import",
          "name": "fromDirSelect",
          "normalized": "String-\u003eFilePath-\u003eIO[FR D]",
          "package": "BiobaseFR3D",
          "partial": "Dir Select",
          "signature": "String-\u003eFilePath-\u003eIO[FR D]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D-Import.html#v:fromDirSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn Iteratee from a bytestring to one FR3D entry. Since each file contains\n exactly one entry, this is no problem.\n\u003c/p\u003e",
          "module": "Biobase.FR3D.Import",
          "name": "iFR3D",
          "package": "BiobaseFR3D",
          "signature": "Iteratee ByteString m FR3D",
          "source": "src/Biobase-FR3D-Import.html#iFR3D",
          "type": "function"
        },
        "index": {
          "description": "An Iteratee from bytestring to one FR3D entry Since each file contains exactly one entry this is no problem",
          "hierarchy": "Biobase FR3D Import",
          "module": "Biobase.FR3D.Import",
          "name": "iFR3D",
          "package": "BiobaseFR3D",
          "partial": "FR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D-Import.html#v:iFR3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFR3D provides a very convenient library of explored RNA structures. We are\n mostly interested in the \u003ca\u003ebasepairs\u003c/a\u003e files. In contrast to the RNAstrand\n library or melting experiments, these data sets provide non-canonical RNA\n pairing.\n\u003c/p\u003e\u003cp\u003eNOTE that FR3D entries contain basepairs both in (i,j) as well as (j,i)\n orientation (with i\u003cj).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Biobase.FR3D",
          "name": "FR3D",
          "package": "BiobaseFR3D",
          "source": "src/Biobase-FR3D.html",
          "type": "module"
        },
        "index": {
          "description": "FR3D provides very convenient library of explored RNA structures We are mostly interested in the basepairs files In contrast to the RNAstrand library or melting experiments these data sets provide non-canonical RNA pairing NOTE that FR3D entries contain basepairs both in as well as orientation with",
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "FR3D",
          "package": "BiobaseFR3D",
          "partial": "FR",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single basepair in a basepair system.\n\u003c/p\u003e",
          "module": "Biobase.FR3D",
          "name": "Basepair",
          "package": "BiobaseFR3D",
          "source": "src/Biobase-FR3D.html#Basepair",
          "type": "data"
        },
        "index": {
          "description": "single basepair in basepair system",
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "Basepair",
          "package": "BiobaseFR3D",
          "partial": "Basepair",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#t:Basepair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncapsulates all the \u003ca\u003ebasepairs\u003c/a\u003e information.\n\u003c/p\u003e",
          "module": "Biobase.FR3D",
          "name": "FR3D",
          "package": "BiobaseFR3D",
          "source": "src/Biobase-FR3D.html#FR3D",
          "type": "data"
        },
        "index": {
          "description": "Encapsulates all the basepairs information",
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "FR3D",
          "package": "BiobaseFR3D",
          "partial": "FR",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#t:FR3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinearized FR3D format.\n\u003c/p\u003e",
          "module": "Biobase.FR3D",
          "name": "LinFR3D",
          "package": "BiobaseFR3D",
          "source": "src/Biobase-FR3D.html#LinFR3D",
          "type": "data"
        },
        "index": {
          "description": "Linearized FR3D format",
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "LinFR3D",
          "package": "BiobaseFR3D",
          "partial": "Lin FR",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#t:LinFR3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.FR3D",
          "name": "RemoveDuplicatePairs",
          "package": "BiobaseFR3D",
          "source": "src/Biobase-FR3D.html#RemoveDuplicatePairs",
          "type": "class"
        },
        "index": {
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "RemoveDuplicatePairs",
          "package": "BiobaseFR3D",
          "partial": "Remove Duplicate Pairs",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#t:RemoveDuplicatePairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.FR3D",
          "name": "TriPair",
          "package": "BiobaseFR3D",
          "source": "src/Biobase-FR3D.html#TriPair",
          "type": "type"
        },
        "index": {
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "TriPair",
          "package": "BiobaseFR3D",
          "partial": "Tri Pair",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#t:TriPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.FR3D",
          "name": "Basepair",
          "package": "BiobaseFR3D",
          "signature": "Basepair",
          "source": "src/Biobase-FR3D.html#Basepair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "Basepair",
          "package": "BiobaseFR3D",
          "partial": "Basepair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:Basepair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.FR3D",
          "name": "FR3D",
          "package": "BiobaseFR3D",
          "signature": "FR3D",
          "source": "src/Biobase-FR3D.html#FR3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "FR3D",
          "package": "BiobaseFR3D",
          "partial": "FR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:FR3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.FR3D",
          "name": "LinFR3D",
          "package": "BiobaseFR3D",
          "signature": "LinFR3D",
          "source": "src/Biobase-FR3D.html#LinFR3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "LinFR3D",
          "package": "BiobaseFR3D",
          "partial": "Lin FR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:LinFR3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.FR3D",
          "name": "basepairs",
          "package": "BiobaseFR3D",
          "signature": "[Basepair]",
          "source": "src/Biobase-FR3D.html#FR3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "basepairs",
          "normalized": "[Basepair]",
          "package": "BiobaseFR3D",
          "signature": "[Basepair]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:basepairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.FR3D",
          "name": "chain1",
          "package": "BiobaseFR3D",
          "signature": "ByteString",
          "source": "src/Biobase-FR3D.html#Basepair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "chain1",
          "package": "BiobaseFR3D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:chain1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.FR3D",
          "name": "chain2",
          "package": "BiobaseFR3D",
          "signature": "ByteString",
          "source": "src/Biobase-FR3D.html#Basepair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "chain2",
          "package": "BiobaseFR3D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:chain2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.FR3D",
          "name": "chains",
          "package": "BiobaseFR3D",
          "signature": "[(ByteString, ByteString)]",
          "source": "src/Biobase-FR3D.html#FR3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "chains",
          "normalized": "[(ByteString,ByteString)]",
          "package": "BiobaseFR3D",
          "signature": "[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:chains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks an FR3D file for correctness. Returns either a Left on errors or\n Right FR3D if correct.\n\u003c/p\u003e\u003cp\u003eTODO chain existence check\n\u003c/p\u003e",
          "module": "Biobase.FR3D",
          "name": "checkFR3D",
          "package": "BiobaseFR3D",
          "signature": "FR3D -\u003e Either (FR3D, [Basepair]) FR3D",
          "source": "src/Biobase-FR3D.html#checkFR3D",
          "type": "function"
        },
        "index": {
          "description": "Checks an FR3D file for correctness Returns either Left on errors or Right FR3D if correct TODO chain existence check",
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "checkFR3D",
          "normalized": "FR D-\u003eEither(FR D,[Basepair])FR D",
          "package": "BiobaseFR3D",
          "partial": "FR",
          "signature": "FR D-\u003eEither(FR D,[Basepair])FR D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:checkFR3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.FR3D",
          "name": "checkLinFR3D",
          "package": "BiobaseFR3D",
          "signature": "LinFR3D -\u003e Either (LinFR3D, [TriPair]) LinFR3D",
          "source": "src/Biobase-FR3D.html#checkLinFR3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "checkLinFR3D",
          "normalized": "LinFR D-\u003eEither(LinFR D,[TriPair])LinFR D",
          "package": "BiobaseFR3D",
          "partial": "Lin FR",
          "signature": "LinFR D-\u003eEither(LinFR D,[TriPair])LinFR D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:checkLinFR3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.FR3D",
          "name": "interaction",
          "package": "BiobaseFR3D",
          "signature": "ExtPairAnnotation",
          "source": "src/Biobase-FR3D.html#Basepair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "interaction",
          "package": "BiobaseFR3D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:interaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default format is a bit unwieldy; Linearization assumes that all\n sequences are in 5'-\u003e3' order; then produces one sequence with \u003ca\u003e&\u003c/a\u003e\n separating the sequences and pairs reduced to (Int,Int,cWW).\n\u003c/p\u003e",
          "module": "Biobase.FR3D",
          "name": "linearizeFR3D",
          "package": "BiobaseFR3D",
          "signature": "FR3D -\u003e LinFR3D",
          "source": "src/Biobase-FR3D.html#linearizeFR3D",
          "type": "function"
        },
        "index": {
          "description": "The default format is bit unwieldy Linearization assumes that all sequences are in order then produces one sequence with separating the sequences and pairs reduced to Int Int cWW",
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "linearizeFR3D",
          "normalized": "FR D-\u003eLinFR D",
          "package": "BiobaseFR3D",
          "partial": "FR",
          "signature": "FR D-\u003eLinFR D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:linearizeFR3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.FR3D",
          "name": "nucleotide1",
          "package": "BiobaseFR3D",
          "signature": "Char",
          "source": "src/Biobase-FR3D.html#Basepair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "nucleotide1",
          "package": "BiobaseFR3D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:nucleotide1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.FR3D",
          "name": "nucleotide2",
          "package": "BiobaseFR3D",
          "signature": "Char",
          "source": "src/Biobase-FR3D.html#Basepair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "nucleotide2",
          "package": "BiobaseFR3D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:nucleotide2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.FR3D",
          "name": "pairs",
          "package": "BiobaseFR3D",
          "signature": "[TriPair]",
          "source": "src/Biobase-FR3D.html#LinFR3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "pairs",
          "normalized": "[TriPair]",
          "package": "BiobaseFR3D",
          "signature": "[TriPair]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:pairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.FR3D",
          "name": "pdbID",
          "package": "BiobaseFR3D",
          "signature": "ByteString",
          "source": "src/Biobase-FR3D.html#LinFR3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "pdbID",
          "package": "BiobaseFR3D",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:pdbID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.FR3D",
          "name": "pdbid",
          "package": "BiobaseFR3D",
          "signature": "ByteString",
          "source": "src/Biobase-FR3D.html#FR3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "pdbid",
          "package": "BiobaseFR3D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:pdbid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.FR3D",
          "name": "pdbnumber1",
          "package": "BiobaseFR3D",
          "signature": "Int",
          "source": "src/Biobase-FR3D.html#Basepair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "pdbnumber1",
          "package": "BiobaseFR3D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:pdbnumber1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.FR3D",
          "name": "pdbnumber2",
          "package": "BiobaseFR3D",
          "signature": "Int",
          "source": "src/Biobase-FR3D.html#Basepair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "pdbnumber2",
          "package": "BiobaseFR3D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:pdbnumber2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.FR3D",
          "name": "removeDuplicatePairs",
          "package": "BiobaseFR3D",
          "signature": "a -\u003e a",
          "source": "src/Biobase-FR3D.html#removeDuplicatePairs",
          "type": "method"
        },
        "index": {
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "removeDuplicatePairs",
          "normalized": "a-\u003ea",
          "package": "BiobaseFR3D",
          "partial": "Duplicate Pairs",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:removeDuplicatePairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.FR3D",
          "name": "seqpos1",
          "package": "BiobaseFR3D",
          "signature": "Int",
          "source": "src/Biobase-FR3D.html#Basepair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "seqpos1",
          "package": "BiobaseFR3D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:seqpos1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.FR3D",
          "name": "seqpos2",
          "package": "BiobaseFR3D",
          "signature": "Int",
          "source": "src/Biobase-FR3D.html#Basepair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "seqpos2",
          "package": "BiobaseFR3D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:seqpos2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.FR3D",
          "name": "sequence",
          "package": "BiobaseFR3D",
          "signature": "ByteString",
          "source": "src/Biobase-FR3D.html#LinFR3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase FR3D",
          "module": "Biobase.FR3D",
          "name": "sequence",
          "package": "BiobaseFR3D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseFR3D/docs/Biobase-FR3D.html#v:sequence"
      }
    }
  ]
]