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
        "word": "BiobaseTrainingData"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProspective \u003ccode\u003e\u003ca\u003eTrainingData\u003c/a\u003e\u003c/code\u003e elements need to be filtered as there are a\n number of entries which do not provide good training.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Biobase.TrainingData.Filter",
          "name": "Filter",
          "package": "BiobaseTrainingData",
          "source": "src/Biobase-TrainingData-Filter.html",
          "type": "module"
        },
        "index": {
          "description": "Prospective TrainingData elements need to be filtered as there are number of entries which do not provide good training",
          "hierarchy": "Biobase TrainingData Filter",
          "module": "Biobase.TrainingData.Filter",
          "name": "Filter",
          "package": "BiobaseTrainingData",
          "partial": "Filter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTrainingData/docs/Biobase-TrainingData-Filter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError-checking filter.\n\u003c/p\u003e",
          "module": "Biobase.TrainingData.Filter",
          "name": "fErrorCheck",
          "package": "BiobaseTrainingData",
          "signature": "TDmanip -\u003e TDmanip",
          "source": "src/Biobase-TrainingData-Filter.html#fErrorCheck",
          "type": "function"
        },
        "index": {
          "description": "Error-checking filter",
          "hierarchy": "Biobase TrainingData Filter",
          "module": "Biobase.TrainingData.Filter",
          "name": "fErrorCheck",
          "normalized": "TDmanip-\u003eTDmanip",
          "package": "BiobaseTrainingData",
          "partial": "Error Check",
          "signature": "TDmanip-\u003eTDmanip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTrainingData/docs/Biobase-TrainingData-Filter.html#v:fErrorCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter out elements containing not enough base pairs (in relative terms)\n\u003c/p\u003e",
          "module": "Biobase.TrainingData.Filter",
          "name": "fMinRelPairs",
          "package": "BiobaseTrainingData",
          "signature": "Maybe Double -\u003e TDmanip -\u003e TDmanip",
          "source": "src/Biobase-TrainingData-Filter.html#fMinRelPairs",
          "type": "function"
        },
        "index": {
          "description": "Filter out elements containing not enough base pairs in relative terms",
          "hierarchy": "Biobase TrainingData Filter",
          "module": "Biobase.TrainingData.Filter",
          "name": "fMinRelPairs",
          "normalized": "Maybe Double-\u003eTDmanip-\u003eTDmanip",
          "package": "BiobaseTrainingData",
          "partial": "Min Rel Pairs",
          "signature": "Maybe Double-\u003eTDmanip-\u003eTDmanip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTrainingData/docs/Biobase-TrainingData-Filter.html#v:fMinRelPairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFancy importer for TrainingData.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Biobase.TrainingData.Import",
          "name": "Import",
          "package": "BiobaseTrainingData",
          "source": "src/Biobase-TrainingData-Import.html",
          "type": "module"
        },
        "index": {
          "description": "Fancy importer for TrainingData",
          "hierarchy": "Biobase TrainingData Import",
          "module": "Biobase.TrainingData.Import",
          "name": "Import",
          "package": "BiobaseTrainingData",
          "partial": "Import",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTrainingData/docs/Biobase-TrainingData-Import.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumeratee producing \u003ccode\u003e\u003ca\u003eTrainingData\u003c/a\u003e\u003c/code\u003e from a bytestring.\n\u003c/p\u003e",
          "module": "Biobase.TrainingData.Import",
          "name": "eneeTrainingData",
          "package": "BiobaseTrainingData",
          "signature": "Enumeratee ByteString [TrainingData] m a",
          "source": "src/Biobase-TrainingData-Import.html#eneeTrainingData",
          "type": "function"
        },
        "index": {
          "description": "Enumeratee producing TrainingData from bytestring",
          "hierarchy": "Biobase TrainingData Import",
          "module": "Biobase.TrainingData.Import",
          "name": "eneeTrainingData",
          "normalized": "Enumeratee ByteString[TrainingData]a b",
          "package": "BiobaseTrainingData",
          "partial": "Training Data",
          "signature": "Enumeratee ByteString[TrainingData]m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTrainingData/docs/Biobase-TrainingData-Import.html#v:eneeTrainingData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function\n\u003c/p\u003e",
          "module": "Biobase.TrainingData.Import",
          "name": "fromFile",
          "package": "BiobaseTrainingData",
          "signature": "FilePath -\u003e IO [TrainingData]",
          "source": "src/Biobase-TrainingData-Import.html#fromFile",
          "type": "function"
        },
        "index": {
          "description": "Convenience function",
          "hierarchy": "Biobase TrainingData Import",
          "module": "Biobase.TrainingData.Import",
          "name": "fromFile",
          "normalized": "FilePath-\u003eIO[TrainingData]",
          "package": "BiobaseTrainingData",
          "partial": "File",
          "signature": "FilePath-\u003eIO[TrainingData]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTrainingData/docs/Biobase-TrainingData-Import.html#v:fromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.TrainingData.Manip",
          "name": "Manip",
          "package": "BiobaseTrainingData",
          "source": "src/Biobase-TrainingData-Manip.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Biobase TrainingData Manip",
          "module": "Biobase.TrainingData.Manip",
          "name": "Manip",
          "package": "BiobaseTrainingData",
          "partial": "Manip",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTrainingData/docs/Biobase-TrainingData-Manip.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft elements are filtered out, Right elements are kept.\n\u003c/p\u003e",
          "module": "Biobase.TrainingData.Manip",
          "name": "TDmanip",
          "package": "BiobaseTrainingData",
          "source": "src/Biobase-TrainingData-Manip.html#TDmanip",
          "type": "type"
        },
        "index": {
          "description": "Left elements are filtered out Right elements are kept",
          "hierarchy": "Biobase TrainingData Manip",
          "module": "Biobase.TrainingData.Manip",
          "name": "TDmanip",
          "package": "BiobaseTrainingData",
          "partial": "TDmanip",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTrainingData/docs/Biobase-TrainingData-Manip.html#t:TDmanip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.TrainingData",
          "name": "TrainingData",
          "package": "BiobaseTrainingData",
          "source": "src/Biobase-TrainingData.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Biobase TrainingData",
          "module": "Biobase.TrainingData",
          "name": "TrainingData",
          "package": "BiobaseTrainingData",
          "partial": "Training Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTrainingData/docs/Biobase-TrainingData.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate \u003ccode\u003e\u003ca\u003eTrainingData\u003c/a\u003e\u003c/code\u003e from various sources.\n\u003c/p\u003e",
          "module": "Biobase.TrainingData",
          "name": "MkTrainingData",
          "package": "BiobaseTrainingData",
          "source": "src/Biobase-TrainingData.html#MkTrainingData",
          "type": "class"
        },
        "index": {
          "description": "Create TrainingData from various sources",
          "hierarchy": "Biobase TrainingData",
          "module": "Biobase.TrainingData",
          "name": "MkTrainingData",
          "package": "BiobaseTrainingData",
          "partial": "Mk Training Data",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTrainingData/docs/Biobase-TrainingData.html#t:MkTrainingData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne training data element. We can store sequence and known structure\n (primary, secondary) as well as a predicted structure (stored, if\n \u003ca\u003enot.null\u003c/a\u003e). The \u003ccode\u003e\u003ca\u003eweight\u003c/a\u003e\u003c/code\u003e is how strongly this element should influence a\n training system. \u003ccode\u003e\u003ca\u003eextendedKnowledge\u003c/a\u003e\u003c/code\u003e is True, if the data element comes from\n a source which knows about extended secondary structures, like the PDB.\n Otherwise it is False.\n\u003c/p\u003e\u003cp\u003eNOTE During training, one should not penalize non-canonical predictions in\n interior loops and multibranch loops, unless they hinder formation of true\n pairs.\n\u003c/p\u003e\u003cp\u003eTODO at some point we will move toward pseudoknots and other fun\n\u003c/p\u003e",
          "module": "Biobase.TrainingData",
          "name": "TrainingData",
          "package": "BiobaseTrainingData",
          "source": "src/Biobase-TrainingData.html#TrainingData",
          "type": "data"
        },
        "index": {
          "description": "One training data element We can store sequence and known structure primary secondary as well as predicted structure stored if not.null The weight is how strongly this element should influence training system extendedKnowledge is True if the data element comes from source which knows about extended secondary structures like the PDB Otherwise it is False NOTE During training one should not penalize non-canonical predictions in interior loops and multibranch loops unless they hinder formation of true pairs TODO at some point we will move toward pseudoknots and other fun",
          "hierarchy": "Biobase TrainingData",
          "module": "Biobase.TrainingData",
          "name": "TrainingData",
          "package": "BiobaseTrainingData",
          "partial": "Training Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTrainingData/docs/Biobase-TrainingData.html#t:TrainingData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.TrainingData",
          "name": "TrainingData",
          "package": "BiobaseTrainingData",
          "signature": "TrainingData",
          "source": "src/Biobase-TrainingData.html#TrainingData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase TrainingData",
          "module": "Biobase.TrainingData",
          "name": "TrainingData",
          "package": "BiobaseTrainingData",
          "partial": "Training Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTrainingData/docs/Biobase-TrainingData.html#v:TrainingData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.TrainingData",
          "name": "comments",
          "package": "BiobaseTrainingData",
          "signature": "[String]",
          "source": "src/Biobase-TrainingData.html#TrainingData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase TrainingData",
          "module": "Biobase.TrainingData",
          "name": "comments",
          "normalized": "[String]",
          "package": "BiobaseTrainingData",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTrainingData/docs/Biobase-TrainingData.html#v:comments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.TrainingData",
          "name": "extendedKnowledge",
          "package": "BiobaseTrainingData",
          "signature": "Bool",
          "source": "src/Biobase-TrainingData.html#TrainingData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase TrainingData",
          "module": "Biobase.TrainingData",
          "name": "extendedKnowledge",
          "package": "BiobaseTrainingData",
          "partial": "Knowledge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTrainingData/docs/Biobase-TrainingData.html#v:extendedKnowledge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.TrainingData",
          "name": "mkTrainingData",
          "package": "BiobaseTrainingData",
          "signature": "a -\u003e TrainingData",
          "source": "src/Biobase-TrainingData.html#mkTrainingData",
          "type": "method"
        },
        "index": {
          "hierarchy": "Biobase TrainingData",
          "module": "Biobase.TrainingData",
          "name": "mkTrainingData",
          "normalized": "a-\u003eTrainingData",
          "package": "BiobaseTrainingData",
          "partial": "Training Data",
          "signature": "a-\u003eTrainingData",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTrainingData/docs/Biobase-TrainingData.html#v:mkTrainingData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.TrainingData",
          "name": "predicted",
          "package": "BiobaseTrainingData",
          "signature": "[ExtPairIdx]",
          "source": "src/Biobase-TrainingData.html#TrainingData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase TrainingData",
          "module": "Biobase.TrainingData",
          "name": "predicted",
          "normalized": "[ExtPairIdx]",
          "package": "BiobaseTrainingData",
          "signature": "[ExtPairIdx]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTrainingData/docs/Biobase-TrainingData.html#v:predicted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.TrainingData",
          "name": "primary",
          "package": "BiobaseTrainingData",
          "signature": "String",
          "source": "src/Biobase-TrainingData.html#TrainingData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase TrainingData",
          "module": "Biobase.TrainingData",
          "name": "primary",
          "package": "BiobaseTrainingData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTrainingData/docs/Biobase-TrainingData.html#v:primary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.TrainingData",
          "name": "secondary",
          "package": "BiobaseTrainingData",
          "signature": "[ExtPairIdx]",
          "source": "src/Biobase-TrainingData.html#TrainingData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase TrainingData",
          "module": "Biobase.TrainingData",
          "name": "secondary",
          "normalized": "[ExtPairIdx]",
          "package": "BiobaseTrainingData",
          "signature": "[ExtPairIdx]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTrainingData/docs/Biobase-TrainingData.html#v:secondary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Biobase.TrainingData",
          "name": "weight",
          "package": "BiobaseTrainingData",
          "signature": "Double",
          "source": "src/Biobase-TrainingData.html#TrainingData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Biobase TrainingData",
          "module": "Biobase.TrainingData",
          "name": "weight",
          "package": "BiobaseTrainingData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BiobaseTrainingData/docs/Biobase-TrainingData.html#v:weight"
      }
    }
  ]
]