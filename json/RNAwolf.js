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
        "word": "RNAwolf"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTransformation of predictions and known structures into keys. Keys are\n used for linearization.\n\u003c/p\u003e\u003cp\u003eNOTE READ THE BIG FAT KEYS WARNING\n\u003c/p\u003e\u003cp\u003eTODO Generalize and move into its own library\n\u003c/p\u003e\u003c/div\u003e",
          "module": "BioInf.Keys",
          "name": "Keys",
          "package": "RNAwolf",
          "source": "src/BioInf-Keys.html",
          "type": "module"
        },
        "index": {
          "description": "Transformation of predictions and known structures into keys Keys are used for linearization NOTE READ THE BIG FAT KEYS WARNING TODO Generalize and move into its own library",
          "hierarchy": "BioInf Keys",
          "module": "BioInf.Keys",
          "name": "Keys",
          "package": "RNAwolf",
          "partial": "Keys",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Keys.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of \u003ca\u003enamed\u003c/a\u003e parameters.\n\u003c/p\u003e\u003cp\u003eUniquely tag each key\n\u003c/p\u003e\u003cp\u003eNOTE BIG FAT WARNING: BE ABSOLUTELY SURE THAT ALL IMPORTS AND EXPORTS FOLLOW\n THIS ORDERING EXACTLY, OTHERWISE KEYS WILL BE MAPPED TO WRONG POSITIONS\n DURING LOOKUP AND VALUES END UP SOMEWHERE ELSE.\n\u003c/p\u003e",
          "module": "BioInf.Keys",
          "name": "Keys",
          "package": "RNAwolf",
          "source": "src/BioInf-Keys.html#Keys",
          "type": "data"
        },
        "index": {
          "description": "list of named parameters Uniquely tag each key NOTE BIG FAT WARNING BE ABSOLUTELY SURE THAT ALL IMPORTS AND EXPORTS FOLLOW THIS ORDERING EXACTLY OTHERWISE KEYS WILL BE MAPPED TO WRONG POSITIONS DURING LOOKUP AND VALUES END UP SOMEWHERE ELSE",
          "hierarchy": "BioInf Keys",
          "module": "BioInf.Keys",
          "name": "Keys",
          "package": "RNAwolf",
          "partial": "Keys",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Keys.html#t:Keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Keys",
          "name": "BulgeClose",
          "package": "RNAwolf",
          "signature": "BulgeClose ExtPair",
          "source": "src/BioInf-Keys.html#Keys",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Keys",
          "module": "BioInf.Keys",
          "name": "BulgeClose",
          "package": "RNAwolf",
          "partial": "Bulge Close",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Keys.html#v:BulgeClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Keys",
          "name": "BulgeLength",
          "package": "RNAwolf",
          "signature": "BulgeLength Int",
          "source": "src/BioInf-Keys.html#Keys",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Keys",
          "module": "BioInf.Keys",
          "name": "BulgeLength",
          "package": "RNAwolf",
          "partial": "Bulge Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Keys.html#v:BulgeLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Keys",
          "name": "BulgeTriplet",
          "package": "RNAwolf",
          "signature": "BulgeTriplet (ExtPair, ExtPair)",
          "source": "src/BioInf-Keys.html#Keys",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Keys",
          "module": "BioInf.Keys",
          "name": "BulgeTriplet",
          "normalized": "BulgeTriplet(ExtPair,ExtPair)",
          "package": "RNAwolf",
          "partial": "Bulge Triplet",
          "signature": "BulgeTriplet(ExtPair,ExtPair)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Keys.html#v:BulgeTriplet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Keys",
          "name": "HairpinClose",
          "package": "RNAwolf",
          "signature": "HairpinClose (ExtPair, Nuc, Nuc)",
          "source": "src/BioInf-Keys.html#Keys",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Keys",
          "module": "BioInf.Keys",
          "name": "HairpinClose",
          "normalized": "HairpinClose(ExtPair,Nuc,Nuc)",
          "package": "RNAwolf",
          "partial": "Hairpin Close",
          "signature": "HairpinClose(ExtPair,Nuc,Nuc)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Keys.html#v:HairpinClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Keys",
          "name": "HairpinLength",
          "package": "RNAwolf",
          "signature": "HairpinLength Int",
          "source": "src/BioInf-Keys.html#Keys",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Keys",
          "module": "BioInf.Keys",
          "name": "HairpinLength",
          "package": "RNAwolf",
          "partial": "Hairpin Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Keys.html#v:HairpinLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Keys",
          "name": "InterMolInit",
          "package": "RNAwolf",
          "signature": "InterMolInit",
          "source": "src/BioInf-Keys.html#Keys",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Keys",
          "module": "BioInf.Keys",
          "name": "InterMolInit",
          "package": "RNAwolf",
          "partial": "Inter Mol Init",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Keys.html#v:InterMolInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Keys",
          "name": "InteriorAsym",
          "package": "RNAwolf",
          "signature": "InteriorAsym Int",
          "source": "src/BioInf-Keys.html#Keys",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Keys",
          "module": "BioInf.Keys",
          "name": "InteriorAsym",
          "package": "RNAwolf",
          "partial": "Interior Asym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Keys.html#v:InteriorAsym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Keys",
          "name": "InteriorClose",
          "package": "RNAwolf",
          "signature": "InteriorClose (ExtPair, Nuc, Nuc)",
          "source": "src/BioInf-Keys.html#Keys",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Keys",
          "module": "BioInf.Keys",
          "name": "InteriorClose",
          "normalized": "InteriorClose(ExtPair,Nuc,Nuc)",
          "package": "RNAwolf",
          "partial": "Interior Close",
          "signature": "InteriorClose(ExtPair,Nuc,Nuc)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Keys.html#v:InteriorClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Keys",
          "name": "InteriorLength",
          "package": "RNAwolf",
          "signature": "InteriorLength Int",
          "source": "src/BioInf-Keys.html#Keys",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Keys",
          "module": "BioInf.Keys",
          "name": "InteriorLength",
          "package": "RNAwolf",
          "partial": "Interior Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Keys.html#v:InteriorLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Keys",
          "name": "MbClose",
          "package": "RNAwolf",
          "signature": "MbClose (ExtPair, Nuc, Nuc)",
          "source": "src/BioInf-Keys.html#Keys",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Keys",
          "module": "BioInf.Keys",
          "name": "MbClose",
          "normalized": "MbClose(ExtPair,Nuc,Nuc)",
          "package": "RNAwolf",
          "partial": "Mb Close",
          "signature": "MbClose(ExtPair,Nuc,Nuc)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Keys.html#v:MbClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Keys",
          "name": "MultiBranched",
          "package": "RNAwolf",
          "signature": "MultiBranched",
          "source": "src/BioInf-Keys.html#Keys",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Keys",
          "module": "BioInf.Keys",
          "name": "MultiBranched",
          "package": "RNAwolf",
          "partial": "Multi Branched",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Keys.html#v:MultiBranched"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Keys",
          "name": "MultiHelix",
          "package": "RNAwolf",
          "signature": "MultiHelix",
          "source": "src/BioInf-Keys.html#Keys",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Keys",
          "module": "BioInf.Keys",
          "name": "MultiHelix",
          "package": "RNAwolf",
          "partial": "Multi Helix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Keys.html#v:MultiHelix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Keys",
          "name": "MultiUnpaired",
          "package": "RNAwolf",
          "signature": "MultiUnpaired",
          "source": "src/BioInf-Keys.html#Keys",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Keys",
          "module": "BioInf.Keys",
          "name": "MultiUnpaired",
          "package": "RNAwolf",
          "partial": "Multi Unpaired",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Keys.html#v:MultiUnpaired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Keys",
          "name": "PairDistance",
          "package": "RNAwolf",
          "signature": "PairDistance Int",
          "source": "src/BioInf-Keys.html#Keys",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Keys",
          "module": "BioInf.Keys",
          "name": "PairDistance",
          "package": "RNAwolf",
          "partial": "Pair Distance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Keys.html#v:PairDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Keys",
          "name": "Stem",
          "package": "RNAwolf",
          "signature": "Stem (ExtPair, ExtPair)",
          "source": "src/BioInf-Keys.html#Keys",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Keys",
          "module": "BioInf.Keys",
          "name": "Stem",
          "normalized": "Stem(ExtPair,ExtPair)",
          "package": "RNAwolf",
          "partial": "Stem",
          "signature": "Stem(ExtPair,ExtPair)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Keys.html#v:Stem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Keys",
          "name": "StemTriplet",
          "package": "RNAwolf",
          "signature": "StemTriplet (ExtPair, ExtPair)",
          "source": "src/BioInf-Keys.html#Keys",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Keys",
          "module": "BioInf.Keys",
          "name": "StemTriplet",
          "normalized": "StemTriplet(ExtPair,ExtPair)",
          "package": "RNAwolf",
          "partial": "Stem Triplet",
          "signature": "StemTriplet(ExtPair,ExtPair)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Keys.html#v:StemTriplet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraining data to feature vector\n\u003c/p\u003e",
          "module": "BioInf.Keys",
          "name": "featureVector",
          "package": "RNAwolf",
          "signature": "String -\u003e [ExtPairIdx] -\u003e [Int]",
          "source": "src/BioInf-Keys.html#featureVector",
          "type": "function"
        },
        "index": {
          "description": "Training data to feature vector",
          "hierarchy": "BioInf Keys",
          "module": "BioInf.Keys",
          "name": "featureVector",
          "normalized": "String-\u003e[ExtPairIdx]-\u003e[Int]",
          "package": "RNAwolf",
          "partial": "Vector",
          "signature": "String-\u003e[ExtPairIdx]-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Keys.html#v:featureVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etransform feature to 0-based index\n\u003c/p\u003e",
          "module": "BioInf.Keys",
          "name": "lookupFeatureIndex",
          "package": "RNAwolf",
          "signature": "Keys -\u003e Int",
          "source": "src/BioInf-Keys.html#lookupFeatureIndex",
          "type": "function"
        },
        "index": {
          "description": "transform feature to based index",
          "hierarchy": "BioInf Keys",
          "module": "BioInf.Keys",
          "name": "lookupFeatureIndex",
          "normalized": "Keys-\u003eInt",
          "package": "RNAwolf",
          "partial": "Feature Index",
          "signature": "Keys-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Keys.html#v:lookupFeatureIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate the secondary structure tree\n\u003c/p\u003e\u003cp\u003eFIXME okPairs is ad-hoc, we should allow for other kinds of pairs!\n\u003c/p\u003e",
          "module": "BioInf.Keys",
          "name": "ssTree",
          "package": "RNAwolf",
          "signature": "Int -\u003e [ExtPairIdx] -\u003e SSTree ExtPairIdx ()",
          "source": "src/BioInf-Keys.html#ssTree",
          "type": "function"
        },
        "index": {
          "description": "Create the secondary structure tree FIXME okPairs is ad-hoc we should allow for other kinds of pairs",
          "hierarchy": "BioInf Keys",
          "module": "BioInf.Keys",
          "name": "ssTree",
          "normalized": "Int-\u003e[ExtPairIdx]-\u003eSSTree ExtPairIdx()",
          "package": "RNAwolf",
          "partial": "Tree",
          "signature": "Int-\u003e[ExtPairIdx]-\u003eSSTree ExtPairIdx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Keys.html#v:ssTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap param keys to thei Int-indices.\n\u003c/p\u003e\u003cp\u003eAnd back from Int-indices to the keys.\n\u003c/p\u003e\u003cp\u003eTakes a primary structure and secondary structure tree and produces a list\n of keys.\n\u003c/p\u003e\u003cp\u003eTODO Data.Traversable ?!\n\u003c/p\u003e\u003cp\u003eTODO better handling of unknown features: we can have genuine errors\n (pseudoknots) and uncoded features (e.g. hairpins of size \u003e 30)\n\u003c/p\u003e",
          "module": "BioInf.Keys",
          "name": "treeToFeatures",
          "package": "RNAwolf",
          "signature": "a -\u003e SSTree ExtPairIdx t -\u003e [Keys]",
          "source": "src/BioInf-Keys.html#treeToFeatures",
          "type": "function"
        },
        "index": {
          "description": "Map param keys to thei Int-indices And back from Int-indices to the keys Takes primary structure and secondary structure tree and produces list of keys TODO Data.Traversable TODO better handling of unknown features we can have genuine errors pseudoknots and uncoded features e.g hairpins of size",
          "hierarchy": "BioInf Keys",
          "module": "BioInf.Keys",
          "name": "treeToFeatures",
          "normalized": "a-\u003eSSTree ExtPairIdx b-\u003e[Keys]",
          "package": "RNAwolf",
          "partial": "To Features",
          "signature": "a-\u003eSSTree ExtPairIdx t-\u003e[Keys]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Keys.html#v:treeToFeatures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExporting parameters is a bit more involved as we need the ability to\n export into a database format as well as linearize to list form.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "BioInf.Params.Export",
          "name": "Export",
          "package": "RNAwolf",
          "source": "src/BioInf-Params-Export.html",
          "type": "module"
        },
        "index": {
          "description": "Exporting parameters is bit more involved as we need the ability to export into database format as well as linearize to list form",
          "hierarchy": "BioInf Params Export",
          "module": "BioInf.Params.Export",
          "name": "Export",
          "package": "RNAwolf",
          "partial": "Export",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params-Export.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust a long list of doubles.\n\u003c/p\u003e",
          "module": "BioInf.Params.Export",
          "name": "toList",
          "package": "RNAwolf",
          "signature": "Params -\u003e [Double]",
          "source": "src/BioInf-Params-Export.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Just long list of doubles",
          "hierarchy": "BioInf Params Export",
          "module": "BioInf.Params.Export",
          "name": "toList",
          "normalized": "Params-\u003e[Double]",
          "package": "RNAwolf",
          "partial": "List",
          "signature": "Params-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params-Export.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGiven a list of doubles with the \u003cem\u003eexact required length\u003c/em\u003e import into a\n \u003ccode\u003e\u003ca\u003eParams\u003c/a\u003e\u003c/code\u003e structure.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "BioInf.Params.Import",
          "name": "Import",
          "package": "RNAwolf",
          "source": "src/BioInf-Params-Import.html",
          "type": "module"
        },
        "index": {
          "description": "Given list of doubles with the exact required length import into Params structure",
          "hierarchy": "BioInf Params Import",
          "module": "BioInf.Params.Import",
          "name": "Import",
          "package": "RNAwolf",
          "partial": "Import",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params-Import.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast a list of values to parameters.\n\u003c/p\u003e\u003cp\u003eNOTE This operation is rather fragile if there are layout changes. Consider\n Repr for this.\n\u003c/p\u003e\u003cp\u003eNOTE BIG FAT WARNING: BE ABSOLUTELY SURE THAT ALL IMPORTS AND EXPORTS FOLLOW\n THIS ORDERING EXACTLY, OTHERWISE KEYS WILL BE MAPPED TO WRONG POSITIONS\n DURING LOOKUP AND VALUES END UP SOMEWHERE ELSE.\n\u003c/p\u003e",
          "module": "BioInf.Params.Import",
          "name": "fromList",
          "package": "RNAwolf",
          "signature": "[Double] -\u003e Params",
          "source": "src/BioInf-Params-Import.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Cast list of values to parameters NOTE This operation is rather fragile if there are layout changes Consider Repr for this NOTE BIG FAT WARNING BE ABSOLUTELY SURE THAT ALL IMPORTS AND EXPORTS FOLLOW THIS ORDERING EXACTLY OTHERWISE KEYS WILL BE MAPPED TO WRONG POSITIONS DURING LOOKUP AND VALUES END UP SOMEWHERE ELSE",
          "hierarchy": "BioInf Params Import",
          "module": "BioInf.Params.Import",
          "name": "fromList",
          "normalized": "[Double]-\u003eParams",
          "package": "RNAwolf",
          "partial": "List",
          "signature": "[Double]-\u003eParams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params-Import.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esplit up a list accordings to given lengths\n\u003c/p\u003e",
          "module": "BioInf.Params.Import",
          "name": "splitXs",
          "package": "RNAwolf",
          "signature": "[Int] -\u003e [Double] -\u003e [[Double]]",
          "source": "src/BioInf-Params-Import.html#splitXs",
          "type": "function"
        },
        "index": {
          "description": "split up list accordings to given lengths",
          "hierarchy": "BioInf Params Import",
          "module": "BioInf.Params.Import",
          "name": "splitXs",
          "normalized": "[Int]-\u003e[Double]-\u003e[[Double]]",
          "package": "RNAwolf",
          "partial": "Xs",
          "signature": "[Int]-\u003e[Double]-\u003e[[Double]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params-Import.html#v:splitXs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRNA-folding parameter space.\n\u003c/p\u003e\u003cp\u003eTODO find better names for types, functions, and minima/maxima.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "BioInf.Params",
          "name": "Params",
          "package": "RNAwolf",
          "source": "src/BioInf-Params.html",
          "type": "module"
        },
        "index": {
          "description": "RNA-folding parameter space TODO find better names for types functions and minima maxima",
          "hierarchy": "BioInf Params",
          "module": "BioInf.Params",
          "name": "Params",
          "package": "RNAwolf",
          "partial": "Params",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn array holding information for two extended pairs, e.g. stems.\n\u003c/p\u003e",
          "module": "BioInf.Params",
          "name": "Pa2ExtPairs",
          "package": "RNAwolf",
          "source": "src/BioInf-Params.html#Pa2ExtPairs",
          "type": "type"
        },
        "index": {
          "description": "An array holding information for two extended pairs e.g stems",
          "hierarchy": "BioInf Params",
          "module": "BioInf.Params",
          "name": "Pa2ExtPairs",
          "package": "RNAwolf",
          "partial": "Pa Ext Pairs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params.html#t:Pa2ExtPairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is an experimental annotation for long-distance interactions\n\u003c/p\u003e",
          "module": "BioInf.Params",
          "name": "PaDistance",
          "package": "RNAwolf",
          "source": "src/BioInf-Params.html#PaDistance",
          "type": "type"
        },
        "index": {
          "description": "This is an experimental annotation for long-distance interactions",
          "hierarchy": "BioInf Params",
          "module": "BioInf.Params",
          "name": "PaDistance",
          "package": "RNAwolf",
          "partial": "Pa Distance",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params.html#t:PaDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn array holding information for one extended pair.\n\u003c/p\u003e",
          "module": "BioInf.Params",
          "name": "PaExtPair",
          "package": "RNAwolf",
          "source": "src/BioInf-Params.html#PaExtPair",
          "type": "type"
        },
        "index": {
          "description": "An array holding information for one extended pair",
          "hierarchy": "BioInf Params",
          "module": "BioInf.Params",
          "name": "PaExtPair",
          "package": "RNAwolf",
          "partial": "Pa Ext Pair",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params.html#t:PaExtPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn array holding information for one extended pair and two unpaired\n nucleotides, closes a loop.\n\u003c/p\u003e",
          "module": "BioInf.Params",
          "name": "PaExtPairNN",
          "package": "RNAwolf",
          "source": "src/BioInf-Params.html#PaExtPairNN",
          "type": "type"
        },
        "index": {
          "description": "An array holding information for one extended pair and two unpaired nucleotides closes loop",
          "hierarchy": "BioInf Params",
          "module": "BioInf.Params",
          "name": "PaExtPairNN",
          "package": "RNAwolf",
          "partial": "Pa Ext Pair NN",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params.html#t:PaExtPairNN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn array which encodes \u003ca\u003elength\u003c/a\u003e information\n\u003c/p\u003e",
          "module": "BioInf.Params",
          "name": "PaLength",
          "package": "RNAwolf",
          "source": "src/BioInf-Params.html#PaLength",
          "type": "type"
        },
        "index": {
          "description": "An array which encodes length information",
          "hierarchy": "BioInf Params",
          "module": "BioInf.Params",
          "name": "PaLength",
          "package": "RNAwolf",
          "partial": "Pa Length",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params.html#t:PaLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA (very) rich set of paramters.\n\u003c/p\u003e\u003cp\u003eTODO 1xn interior loops should be tested (how often do they occur?)\n\u003c/p\u003e\u003cp\u003eTODO external loop\n\u003c/p\u003e",
          "module": "BioInf.Params",
          "name": "Params",
          "package": "RNAwolf",
          "source": "src/BioInf-Params.html#Params",
          "type": "data"
        },
        "index": {
          "description": "very rich set of paramters TODO xn interior loops should be tested how often do they occur TODO external loop",
          "hierarchy": "BioInf Params",
          "module": "BioInf.Params",
          "name": "Params",
          "package": "RNAwolf",
          "partial": "Params",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params.html#t:Params"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Params",
          "name": "Params",
          "package": "RNAwolf",
          "signature": "Params",
          "source": "src/BioInf-Params.html#Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Params",
          "module": "BioInf.Params",
          "name": "Params",
          "package": "RNAwolf",
          "partial": "Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params.html#v:Params"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Params",
          "name": "bulgeClose",
          "package": "RNAwolf",
          "signature": "PaExtPair",
          "source": "src/BioInf-Params.html#Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Params",
          "module": "BioInf.Params",
          "name": "bulgeClose",
          "package": "RNAwolf",
          "partial": "Close",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params.html#v:bulgeClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Params",
          "name": "bulgeLength",
          "package": "RNAwolf",
          "signature": "PaLength",
          "source": "src/BioInf-Params.html#Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Params",
          "module": "BioInf.Params",
          "name": "bulgeLength",
          "package": "RNAwolf",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params.html#v:bulgeLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Params",
          "name": "bulgeTriplet",
          "package": "RNAwolf",
          "signature": "Pa2ExtPairs",
          "source": "src/BioInf-Params.html#Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Params",
          "module": "BioInf.Params",
          "name": "bulgeTriplet",
          "package": "RNAwolf",
          "partial": "Triplet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params.html#v:bulgeTriplet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Params",
          "name": "hairpinClose",
          "package": "RNAwolf",
          "signature": "PaExtPairNN",
          "source": "src/BioInf-Params.html#Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Params",
          "module": "BioInf.Params",
          "name": "hairpinClose",
          "package": "RNAwolf",
          "partial": "Close",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params.html#v:hairpinClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Params",
          "name": "hairpinLength",
          "package": "RNAwolf",
          "signature": "PaLength",
          "source": "src/BioInf-Params.html#Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Params",
          "module": "BioInf.Params",
          "name": "hairpinLength",
          "package": "RNAwolf",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params.html#v:hairpinLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Params",
          "name": "interMolInit",
          "package": "RNAwolf",
          "signature": "Double",
          "source": "src/BioInf-Params.html#Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Params",
          "module": "BioInf.Params",
          "name": "interMolInit",
          "package": "RNAwolf",
          "partial": "Mol Init",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params.html#v:interMolInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Params",
          "name": "interiorAsym",
          "package": "RNAwolf",
          "signature": "PaLength",
          "source": "src/BioInf-Params.html#Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Params",
          "module": "BioInf.Params",
          "name": "interiorAsym",
          "package": "RNAwolf",
          "partial": "Asym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params.html#v:interiorAsym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Params",
          "name": "interiorClose",
          "package": "RNAwolf",
          "signature": "PaExtPairNN",
          "source": "src/BioInf-Params.html#Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Params",
          "module": "BioInf.Params",
          "name": "interiorClose",
          "package": "RNAwolf",
          "partial": "Close",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params.html#v:interiorClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Params",
          "name": "interiorLength",
          "package": "RNAwolf",
          "signature": "PaLength",
          "source": "src/BioInf-Params.html#Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Params",
          "module": "BioInf.Params",
          "name": "interiorLength",
          "package": "RNAwolf",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params.html#v:interiorLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Params",
          "name": "mbClose",
          "package": "RNAwolf",
          "signature": "PaExtPairNN",
          "source": "src/BioInf-Params.html#Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Params",
          "module": "BioInf.Params",
          "name": "mbClose",
          "package": "RNAwolf",
          "partial": "Close",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params.html#v:mbClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Params",
          "name": "multiBranched",
          "package": "RNAwolf",
          "signature": "Double",
          "source": "src/BioInf-Params.html#Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Params",
          "module": "BioInf.Params",
          "name": "multiBranched",
          "package": "RNAwolf",
          "partial": "Branched",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params.html#v:multiBranched"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Params",
          "name": "multiHelix",
          "package": "RNAwolf",
          "signature": "Double",
          "source": "src/BioInf-Params.html#Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Params",
          "module": "BioInf.Params",
          "name": "multiHelix",
          "package": "RNAwolf",
          "partial": "Helix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params.html#v:multiHelix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Params",
          "name": "multiUnpaired",
          "package": "RNAwolf",
          "signature": "Double",
          "source": "src/BioInf-Params.html#Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Params",
          "module": "BioInf.Params",
          "name": "multiUnpaired",
          "package": "RNAwolf",
          "partial": "Unpaired",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params.html#v:multiUnpaired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Params",
          "name": "pairDistance",
          "package": "RNAwolf",
          "signature": "PaDistance",
          "source": "src/BioInf-Params.html#Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Params",
          "module": "BioInf.Params",
          "name": "pairDistance",
          "package": "RNAwolf",
          "partial": "Distance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params.html#v:pairDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Params",
          "name": "stem",
          "package": "RNAwolf",
          "signature": "Pa2ExtPairs",
          "source": "src/BioInf-Params.html#Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Params",
          "module": "BioInf.Params",
          "name": "stem",
          "package": "RNAwolf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params.html#v:stem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.Params",
          "name": "stemTriplet",
          "package": "RNAwolf",
          "signature": "Pa2ExtPairs",
          "source": "src/BioInf-Params.html#Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf Params",
          "module": "BioInf.Params",
          "name": "stemTriplet",
          "package": "RNAwolf",
          "partial": "Triplet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-Params.html#v:stemTriplet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePassive-aggressive optimization. Mainly based on:\n\u003c/p\u003e\u003cp\u003eZakov, Shay and Goldberg, Yoav and Elhaded, Michael and Ziv-Ukelson, Michal\n \u003ca\u003eRich Parameterization Improves RNA Structure Prediction\u003c/a\u003e\n RECOMB 2011\n\u003c/p\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cp\u003eCrammer, Koby and (et al)\n \u003ca\u003eOnline Passive-Aggressive Algorithms\u003c/a\u003e\n Journal of Machine Learning Research (2006)\n\u003c/p\u003e\u003cp\u003eTODO as always: move out of here and put in its own library\n\u003c/p\u003e\u003c/div\u003e",
          "module": "BioInf.PassiveAggressive",
          "name": "PassiveAggressive",
          "package": "RNAwolf",
          "source": "src/BioInf-PassiveAggressive.html",
          "type": "module"
        },
        "index": {
          "description": "Passive-aggressive optimization Mainly based on Zakov Shay and Goldberg Yoav and Elhaded Michael and Ziv-Ukelson Michal Rich Parameterization Improves RNA Structure Prediction RECOMB and Crammer Koby and et al Online Passive-Aggressive Algorithms Journal of Machine Learning Research TODO as always move out of here and put in its own library",
          "hierarchy": "BioInf PassiveAggressive",
          "module": "BioInf.PassiveAggressive",
          "name": "PassiveAggressive",
          "package": "RNAwolf",
          "partial": "Passive Aggressive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-PassiveAggressive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn case that the known structure has a score \u003ccode\u003eepsilon\u003c/code\u003e better than the\n predicted, we have an error condition, as this should never be the case.\n\u003c/p\u003e\u003cp\u003eReturn a lot of information from each P/A call. We do not return the new\n \u003ccode\u003eParams\u003c/code\u003e anymore, only a list of changes. This allows us to do some things.\n If the implementation of \u003ccode\u003eParams\u003c/code\u003e is switched, we can update in place; or we\n can perform calculations in parallel.\n\u003c/p\u003e",
          "module": "BioInf.PassiveAggressive",
          "name": "PA",
          "package": "RNAwolf",
          "source": "src/BioInf-PassiveAggressive.html#PA",
          "type": "data"
        },
        "index": {
          "description": "In case that the known structure has score epsilon better than the predicted we have an error condition as this should never be the case Return lot of information from each call We do not return the new Params anymore only list of changes This allows us to do some things If the implementation of Params is switched we can update in place or we can perform calculations in parallel",
          "hierarchy": "BioInf PassiveAggressive",
          "module": "BioInf.PassiveAggressive",
          "name": "PA",
          "package": "RNAwolf",
          "partial": "PA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-PassiveAggressive.html#t:PA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.PassiveAggressive",
          "name": "PA",
          "package": "RNAwolf",
          "signature": "PA",
          "source": "src/BioInf-PassiveAggressive.html#PA",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf PassiveAggressive",
          "module": "BioInf.PassiveAggressive",
          "name": "PA",
          "package": "RNAwolf",
          "partial": "PA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-PassiveAggressive.html#v:PA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.PassiveAggressive",
          "name": "accMeas",
          "package": "RNAwolf",
          "signature": "Double",
          "source": "src/BioInf-PassiveAggressive.html#PA",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf PassiveAggressive",
          "module": "BioInf.PassiveAggressive",
          "name": "accMeas",
          "package": "RNAwolf",
          "partial": "Meas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-PassiveAggressive.html#v:accMeas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.PassiveAggressive",
          "name": "changes",
          "package": "RNAwolf",
          "signature": "[(Int, Double)]",
          "source": "src/BioInf-PassiveAggressive.html#PA",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf PassiveAggressive",
          "module": "BioInf.PassiveAggressive",
          "name": "changes",
          "normalized": "[(Int,Double)]",
          "package": "RNAwolf",
          "signature": "[(Int,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-PassiveAggressive.html#v:changes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault implementation of P/A. We return a data structure that contains\n all \u003ccode\u003e\u003ca\u003echanges\u003c/a\u003e\u003c/code\u003e required from this run, the \u003ccode\u003e\u003ca\u003eenerDif\u003c/a\u003e\u003c/code\u003e or energy difference\n between the known and the predicted structure, and a structural difference\n score. Furthermore, some errors are being reported in \u003ccode\u003e\u003ca\u003eerrors\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe energy difference can be (i) in that case, a wrongly predicted structure\n has better (lower) energy than the known one. (ii) It can be zero, then we\n have either found a co-optimal structural or the correct structure. (iii) In\n some cases, it can be positive, this is a formal error, but will not abort\n the program. (The calling program may opt to abort on (not . null $ errors).\n\u003c/p\u003e\u003cp\u003eThe structural difference is [0..1] with \u003ca\u003e0\u003c/a\u003e for structurally identical\n predictions and known structures and otherwise growing toward \u003ca\u003e1\u003c/a\u003e for bad\n predictions where nothing is correct.\n\u003c/p\u003e",
          "module": "BioInf.PassiveAggressive",
          "name": "defaultPA",
          "package": "RNAwolf",
          "signature": "Double -\u003e Params -\u003e TrainingData -\u003e PA",
          "source": "src/BioInf-PassiveAggressive.html#defaultPA",
          "type": "function"
        },
        "index": {
          "description": "Default implementation of We return data structure that contains all changes required from this run the enerDif or energy difference between the known and the predicted structure and structural difference score Furthermore some errors are being reported in errors The energy difference can be in that case wrongly predicted structure has better lower energy than the known one ii It can be zero then we have either found co-optimal structural or the correct structure iii In some cases it can be positive this is formal error but will not abort the program The calling program may opt to abort on not null errors The structural difference is with for structurally identical predictions and known structures and otherwise growing toward for bad predictions where nothing is correct",
          "hierarchy": "BioInf PassiveAggressive",
          "module": "BioInf.PassiveAggressive",
          "name": "defaultPA",
          "normalized": "Double-\u003eParams-\u003eTrainingData-\u003ePA",
          "package": "RNAwolf",
          "partial": "PA",
          "signature": "Double-\u003eParams-\u003eTrainingData-\u003ePA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-PassiveAggressive.html#v:defaultPA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.PassiveAggressive",
          "name": "enerDif",
          "package": "RNAwolf",
          "signature": "Double",
          "source": "src/BioInf-PassiveAggressive.html#PA",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf PassiveAggressive",
          "module": "BioInf.PassiveAggressive",
          "name": "enerDif",
          "package": "RNAwolf",
          "partial": "Dif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-PassiveAggressive.html#v:enerDif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.PassiveAggressive",
          "name": "errors",
          "package": "RNAwolf",
          "signature": "[String]",
          "source": "src/BioInf-PassiveAggressive.html#PA",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf PassiveAggressive",
          "module": "BioInf.PassiveAggressive",
          "name": "errors",
          "normalized": "[String]",
          "package": "RNAwolf",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-PassiveAggressive.html#v:errors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Bulge",
          "name": "Bulge",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Bulge.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Bulge",
          "module": "BioInf.RNAwolf.Bulge",
          "name": "Bulge",
          "package": "RNAwolf",
          "partial": "Bulge",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Bulge.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBacktrack the inner part of a bulge\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Bulge",
          "name": "btBulgeInner",
          "package": "RNAwolf",
          "signature": "Params -\u003e Primary -\u003e NBulg -\u003e EStem -\u003e ExtBT -\u003e NBT",
          "source": "src/BioInf-RNAwolf-Bulge.html#btBulgeInner",
          "type": "function"
        },
        "index": {
          "description": "Backtrack the inner part of bulge",
          "hierarchy": "BioInf RNAwolf Bulge",
          "module": "BioInf.RNAwolf.Bulge",
          "name": "btBulgeInner",
          "normalized": "Params-\u003ePrimary-\u003eNBulg-\u003eEStem-\u003eExtBT-\u003eNBT",
          "package": "RNAwolf",
          "partial": "Bulge Inner",
          "signature": "Params-\u003ePrimary-\u003eNBulg-\u003eEStem-\u003eExtBT-\u003eNBT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Bulge.html#v:btBulgeInner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndex generator for bulged loops\n\u003c/p\u003e\u003cp\u003eBacktrack the bulge loop part.\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Bulge",
          "name": "btBulgeLoop",
          "package": "RNAwolf",
          "signature": "Params -\u003e Primary -\u003e NBulgLoop -\u003e NBulg -\u003e NBT -\u003e NBT",
          "source": "src/BioInf-RNAwolf-Bulge.html#btBulgeLoop",
          "type": "function"
        },
        "index": {
          "description": "Index generator for bulged loops Backtrack the bulge loop part",
          "hierarchy": "BioInf RNAwolf Bulge",
          "module": "BioInf.RNAwolf.Bulge",
          "name": "btBulgeLoop",
          "normalized": "Params-\u003ePrimary-\u003eNBulgLoop-\u003eNBulg-\u003eNBT-\u003eNBT",
          "package": "RNAwolf",
          "partial": "Bulge Loop",
          "signature": "Params-\u003ePrimary-\u003eNBulgLoop-\u003eNBulg-\u003eNBT-\u003eNBT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Bulge.html#v:btBulgeLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOuter part of a normal bulge\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Bulge",
          "name": "btBulgeOuter",
          "package": "RNAwolf",
          "signature": "Params -\u003e Primary -\u003e EStem -\u003e NBulgLoop -\u003e NBT -\u003e ExtBT",
          "source": "src/BioInf-RNAwolf-Bulge.html#btBulgeOuter",
          "type": "function"
        },
        "index": {
          "description": "Outer part of normal bulge",
          "hierarchy": "BioInf RNAwolf Bulge",
          "module": "BioInf.RNAwolf.Bulge",
          "name": "btBulgeOuter",
          "normalized": "Params-\u003ePrimary-\u003eEStem-\u003eNBulgLoop-\u003eNBT-\u003eExtBT",
          "package": "RNAwolf",
          "partial": "Bulge Outer",
          "signature": "Params-\u003ePrimary-\u003eEStem-\u003eNBulgLoop-\u003eNBT-\u003eExtBT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Bulge.html#v:btBulgeOuter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInner part of a bulge to speed up bulge calculations\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Bulge",
          "name": "fBulgeInner",
          "package": "RNAwolf",
          "signature": "BaseF (EStem -\u003e Features (Vector (ExtPairIdx, Double)))",
          "source": "src/BioInf-RNAwolf-Bulge.html#fBulgeInner",
          "type": "function"
        },
        "index": {
          "description": "Inner part of bulge to speed up bulge calculations",
          "hierarchy": "BioInf RNAwolf Bulge",
          "module": "BioInf.RNAwolf.Bulge",
          "name": "fBulgeInner",
          "normalized": "BaseF(EStem-\u003eFeatures(Vector(ExtPairIdx,Double)))",
          "package": "RNAwolf",
          "partial": "Bulge Inner",
          "signature": "BaseF(EStem-\u003eFeatures(Vector(ExtPairIdx,Double)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Bulge.html#v:fBulgeInner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe loop-part of bulges. Increases speed by 2x\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Bulge",
          "name": "fBulgeLoop",
          "package": "RNAwolf",
          "signature": "BaseF (NBulg -\u003e Features (Vector (PairIdx, Double)))",
          "source": "src/BioInf-RNAwolf-Bulge.html#fBulgeLoop",
          "type": "function"
        },
        "index": {
          "description": "The loop-part of bulges Increases speed by",
          "hierarchy": "BioInf RNAwolf Bulge",
          "module": "BioInf.RNAwolf.Bulge",
          "name": "fBulgeLoop",
          "normalized": "BaseF(NBulg-\u003eFeatures(Vector(PairIdx,Double)))",
          "package": "RNAwolf",
          "partial": "Bulge Loop",
          "signature": "BaseF(NBulg-\u003eFeatures(Vector(PairIdx,Double)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Bulge.html#v:fBulgeLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe outer closing pair of a bulge loop (one unpaired region).\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Bulge",
          "name": "fBulgeOuter",
          "package": "RNAwolf",
          "signature": "BaseF (NBulgLoop -\u003e ExtFeatures (Vector (PairIdx, Double)))",
          "source": "src/BioInf-RNAwolf-Bulge.html#fBulgeOuter",
          "type": "function"
        },
        "index": {
          "description": "The outer closing pair of bulge loop one unpaired region",
          "hierarchy": "BioInf RNAwolf Bulge",
          "module": "BioInf.RNAwolf.Bulge",
          "name": "fBulgeOuter",
          "normalized": "BaseF(NBulgLoop-\u003eExtFeatures(Vector(PairIdx,Double)))",
          "package": "RNAwolf",
          "partial": "Bulge Outer",
          "signature": "BaseF(NBulgLoop-\u003eExtFeatures(Vector(PairIdx,Double)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Bulge.html#v:fBulgeOuter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eApplies folding constraints to extended stem calculations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "BioInf.RNAwolf.Constraint",
          "name": "Constraint",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Constraint.html",
          "type": "module"
        },
        "index": {
          "description": "Applies folding constraints to extended stem calculations",
          "hierarchy": "BioInf RNAwolf Constraint",
          "module": "BioInf.RNAwolf.Constraint",
          "name": "Constraint",
          "package": "RNAwolf",
          "partial": "Constraint",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Constraint.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a constraint bonus/malus in the backtracking phase\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Constraint",
          "name": "applyConstraint",
          "package": "RNAwolf",
          "signature": "PairIdx -\u003e PrimArray (Int, Int) Double -\u003e Double -\u003e Double",
          "source": "src/BioInf-RNAwolf-Constraint.html#applyConstraint",
          "type": "function"
        },
        "index": {
          "description": "Applies constraint bonus malus in the backtracking phase",
          "hierarchy": "BioInf RNAwolf Constraint",
          "module": "BioInf.RNAwolf.Constraint",
          "name": "applyConstraint",
          "normalized": "PairIdx-\u003ePrimArray(Int,Int)Double-\u003eDouble-\u003eDouble",
          "package": "RNAwolf",
          "partial": "Constraint",
          "signature": "PairIdx-\u003ePrimArray(Int,Int)Double-\u003eDouble-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Constraint.html#v:applyConstraint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExternal loops are complete substructures, of which zero to many sit on\n the chain of nucleotides.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "BioInf.RNAwolf.Extern",
          "name": "Extern",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Extern.html",
          "type": "module"
        },
        "index": {
          "description": "External loops are complete substructures of which zero to many sit on the chain of nucleotides",
          "hierarchy": "BioInf RNAwolf Extern",
          "module": "BioInf.RNAwolf.Extern",
          "name": "Extern",
          "package": "RNAwolf",
          "partial": "Extern",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Extern.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBacktracking a structure with an unpaired nucleotide to the left.\n\u003c/p\u003e\u003cp\u003eFIXME In btLeftUnpaired, allow only non-empty structures on the right. It\n would be nice to make the recursion scheme take care of that.\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Extern",
          "name": "btLeftUnpaired",
          "package": "RNAwolf",
          "signature": "Params -\u003e Primary -\u003e NExtn -\u003e NBT -\u003e NBT",
          "source": "src/BioInf-RNAwolf-Extern.html#btLeftUnpaired",
          "type": "function"
        },
        "index": {
          "description": "Backtracking structure with an unpaired nucleotide to the left FIXME In btLeftUnpaired allow only non-empty structures on the right It would be nice to make the recursion scheme take care of that",
          "hierarchy": "BioInf RNAwolf Extern",
          "module": "BioInf.RNAwolf.Extern",
          "name": "btLeftUnpaired",
          "normalized": "Params-\u003ePrimary-\u003eNExtn-\u003eNBT-\u003eNBT",
          "package": "RNAwolf",
          "partial": "Left Unpaired",
          "signature": "Params-\u003ePrimary-\u003eNExtn-\u003eNBT-\u003eNBT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Extern.html#v:btLeftUnpaired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Extern",
          "name": "btOne",
          "package": "RNAwolf",
          "signature": "Params -\u003e Primary -\u003e NExtn -\u003e NBT",
          "source": "src/BioInf-RNAwolf-Extern.html#btOne",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Extern",
          "module": "BioInf.RNAwolf.Extern",
          "name": "btOne",
          "normalized": "Params-\u003ePrimary-\u003eNExtn-\u003eNBT",
          "package": "RNAwolf",
          "partial": "One",
          "signature": "Params-\u003ePrimary-\u003eNExtn-\u003eNBT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Extern.html#v:btOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBacktrack one stem with right index k.\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Extern",
          "name": "btStem",
          "package": "RNAwolf",
          "signature": "Params -\u003e Primary -\u003e NExtn -\u003e NStem -\u003e NBT -\u003e NBT",
          "source": "src/BioInf-RNAwolf-Extern.html#btStem",
          "type": "function"
        },
        "index": {
          "description": "Backtrack one stem with right index",
          "hierarchy": "BioInf RNAwolf Extern",
          "module": "BioInf.RNAwolf.Extern",
          "name": "btStem",
          "normalized": "Params-\u003ePrimary-\u003eNExtn-\u003eNStem-\u003eNBT-\u003eNBT",
          "package": "RNAwolf",
          "partial": "Stem",
          "signature": "Params-\u003ePrimary-\u003eNExtn-\u003eNStem-\u003eNBT-\u003eNBT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Extern.html#v:btStem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBacktracking of an external structure with more than one stem\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Extern",
          "name": "btStems",
          "package": "RNAwolf",
          "signature": "Params -\u003e Primary -\u003e NStem -\u003e NExtn -\u003e NBT -\u003e NBT -\u003e NBT",
          "source": "src/BioInf-RNAwolf-Extern.html#btStems",
          "type": "function"
        },
        "index": {
          "description": "Backtracking of an external structure with more than one stem",
          "hierarchy": "BioInf RNAwolf Extern",
          "module": "BioInf.RNAwolf.Extern",
          "name": "btStems",
          "normalized": "Params-\u003ePrimary-\u003eNStem-\u003eNExtn-\u003eNBT-\u003eNBT-\u003eNBT",
          "package": "RNAwolf",
          "partial": "Stems",
          "signature": "Params-\u003ePrimary-\u003eNStem-\u003eNExtn-\u003eNBT-\u003eNBT-\u003eNBT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Extern.html#v:btStems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn external loop with an unpaired nucleotide to the left\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Extern",
          "name": "fLeftUnpaired",
          "package": "RNAwolf",
          "signature": "BaseF (NExtn -\u003e Features (Vector (PairIdx, Double)))",
          "source": "src/BioInf-RNAwolf-Extern.html#fLeftUnpaired",
          "type": "function"
        },
        "index": {
          "description": "An external loop with an unpaired nucleotide to the left",
          "hierarchy": "BioInf RNAwolf Extern",
          "module": "BioInf.RNAwolf.Extern",
          "name": "fLeftUnpaired",
          "normalized": "BaseF(NExtn-\u003eFeatures(Vector(PairIdx,Double)))",
          "package": "RNAwolf",
          "partial": "Left Unpaired",
          "signature": "BaseF(NExtn-\u003eFeatures(Vector(PairIdx,Double)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Extern.html#v:fLeftUnpaired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis one is important as otherwise, some stretches of nucleotides will\n always have to be paired. (Obviously, I forgot to add this one for a\n time...)\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Extern",
          "name": "fOne",
          "package": "RNAwolf",
          "signature": "BaseF (Features (Vector (PairIdx, Double)))",
          "source": "src/BioInf-RNAwolf-Extern.html#fOne",
          "type": "function"
        },
        "index": {
          "description": "This one is important as otherwise some stretches of nucleotides will always have to be paired Obviously forgot to add this one for time",
          "hierarchy": "BioInf RNAwolf Extern",
          "module": "BioInf.RNAwolf.Extern",
          "name": "fOne",
          "normalized": "BaseF(Features(Vector(PairIdx,Double)))",
          "package": "RNAwolf",
          "partial": "One",
          "signature": "BaseF(Features(Vector(PairIdx,Double)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Extern.html#v:fOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnergy for exactly one stem at (i,k)\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Extern",
          "name": "fStem",
          "package": "RNAwolf",
          "signature": "BaseF (NStem -\u003e Features (Vector (PairIdx, Double)))",
          "source": "src/BioInf-RNAwolf-Extern.html#fStem",
          "type": "function"
        },
        "index": {
          "description": "Energy for exactly one stem at",
          "hierarchy": "BioInf RNAwolf Extern",
          "module": "BioInf.RNAwolf.Extern",
          "name": "fStem",
          "normalized": "BaseF(NStem-\u003eFeatures(Vector(PairIdx,Double)))",
          "package": "RNAwolf",
          "partial": "Stem",
          "signature": "BaseF(NStem-\u003eFeatures(Vector(PairIdx,Double)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Extern.html#v:fStem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExternal structures with more than one stem have a NStem on the left and\n an external NExtn structure on the right.\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Extern",
          "name": "fStems",
          "package": "RNAwolf",
          "signature": "BaseF (NStem -\u003e NExtn -\u003e Features (Vector (Int, Double)))",
          "source": "src/BioInf-RNAwolf-Extern.html#fStems",
          "type": "function"
        },
        "index": {
          "description": "External structures with more than one stem have NStem on the left and an external NExtn structure on the right",
          "hierarchy": "BioInf RNAwolf Extern",
          "module": "BioInf.RNAwolf.Extern",
          "name": "fStems",
          "normalized": "BaseF(NStem-\u003eNExtn-\u003eFeatures(Vector(Int,Double)))",
          "package": "RNAwolf",
          "partial": "Stems",
          "signature": "BaseF(NStem-\u003eNExtn-\u003eFeatures(Vector(Int,Double)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Extern.html#v:fStems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Hairpin",
          "name": "Hairpin",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Hairpin.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Hairpin",
          "module": "BioInf.RNAwolf.Hairpin",
          "name": "Hairpin",
          "package": "RNAwolf",
          "partial": "Hairpin",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Hairpin.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBacktracking hairpins.\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Hairpin",
          "name": "btHairpin",
          "package": "RNAwolf",
          "signature": "Params -\u003e Primary -\u003e EStem -\u003e ExtBT",
          "source": "src/BioInf-RNAwolf-Hairpin.html#btHairpin",
          "type": "function"
        },
        "index": {
          "description": "Backtracking hairpins",
          "hierarchy": "BioInf RNAwolf Hairpin",
          "module": "BioInf.RNAwolf.Hairpin",
          "name": "btHairpin",
          "normalized": "Params-\u003ePrimary-\u003eEStem-\u003eExtBT",
          "package": "RNAwolf",
          "partial": "Hairpin",
          "signature": "Params-\u003ePrimary-\u003eEStem-\u003eExtBT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Hairpin.html#v:btHairpin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hairpin is a number of 0 or more unpaired nucleotides, enclosed by the\n nucleotides (i,j) which pair.\n\u003c/p\u003e\u003cp\u003eTODO should we allow hairpins with no unpaired nucleotides in the pin? They\n do occur, but only under special circumstances which we should model\n differently...\n\u003c/p\u003e\u003cp\u003eTODO re-allow IMI\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Hairpin",
          "name": "fHairpin",
          "package": "RNAwolf",
          "signature": "[Int] -\u003e BaseF (ExtFeatures (Vector (ExtPairIdx, Double)))",
          "source": "src/BioInf-RNAwolf-Hairpin.html#fHairpin",
          "type": "function"
        },
        "index": {
          "description": "hairpin is number of or more unpaired nucleotides enclosed by the nucleotides which pair TODO should we allow hairpins with no unpaired nucleotides in the pin They do occur but only under special circumstances which we should model differently TODO re-allow IMI",
          "hierarchy": "BioInf RNAwolf Hairpin",
          "module": "BioInf.RNAwolf.Hairpin",
          "name": "fHairpin",
          "normalized": "[Int]-\u003eBaseF(ExtFeatures(Vector(ExtPairIdx,Double)))",
          "package": "RNAwolf",
          "partial": "Hairpin",
          "signature": "[Int]-\u003eBaseF(ExtFeatures(Vector(ExtPairIdx,Double)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Hairpin.html#v:fHairpin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Interior",
          "name": "Interior",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Interior.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Interior",
          "module": "BioInf.RNAwolf.Interior",
          "name": "Interior",
          "package": "RNAwolf",
          "partial": "Interior",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Interior.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBacktrack from an NInte result to the corresponding EStem parts\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Interior",
          "name": "btInteriorInner",
          "package": "RNAwolf",
          "signature": "Params -\u003e Primary -\u003e NInte -\u003e EStem -\u003e ExtBT -\u003e NBT",
          "source": "src/BioInf-RNAwolf-Interior.html#btInteriorInner",
          "type": "function"
        },
        "index": {
          "description": "Backtrack from an NInte result to the corresponding EStem parts",
          "hierarchy": "BioInf RNAwolf Interior",
          "module": "BioInf.RNAwolf.Interior",
          "name": "btInteriorInner",
          "normalized": "Params-\u003ePrimary-\u003eNInte-\u003eEStem-\u003eExtBT-\u003eNBT",
          "package": "RNAwolf",
          "partial": "Interior Inner",
          "signature": "Params-\u003ePrimary-\u003eNInte-\u003eEStem-\u003eExtBT-\u003eNBT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Interior.html#v:btInteriorInner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBacktrack the unpaired loop region\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Interior",
          "name": "btInteriorLoop",
          "package": "RNAwolf",
          "signature": "Params -\u003e Primary -\u003e NInteLoop -\u003e NInte -\u003e NBT -\u003e NBT",
          "source": "src/BioInf-RNAwolf-Interior.html#btInteriorLoop",
          "type": "function"
        },
        "index": {
          "description": "Backtrack the unpaired loop region",
          "hierarchy": "BioInf RNAwolf Interior",
          "module": "BioInf.RNAwolf.Interior",
          "name": "btInteriorLoop",
          "normalized": "Params-\u003ePrimary-\u003eNInteLoop-\u003eNInte-\u003eNBT-\u003eNBT",
          "package": "RNAwolf",
          "partial": "Interior Loop",
          "signature": "Params-\u003ePrimary-\u003eNInteLoop-\u003eNInte-\u003eNBT-\u003eNBT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Interior.html#v:btInteriorLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Interior",
          "name": "btInteriorOuter",
          "package": "RNAwolf",
          "signature": "Params -\u003e Primary -\u003e EStem -\u003e NInteLoop -\u003e NBT -\u003e ExtBT",
          "source": "src/BioInf-RNAwolf-Interior.html#btInteriorOuter",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Interior",
          "module": "BioInf.RNAwolf.Interior",
          "name": "btInteriorOuter",
          "normalized": "Params-\u003ePrimary-\u003eEStem-\u003eNInteLoop-\u003eNBT-\u003eExtBT",
          "package": "RNAwolf",
          "partial": "Interior Outer",
          "signature": "Params-\u003ePrimary-\u003eEStem-\u003eNInteLoop-\u003eNBT-\u003eExtBT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Interior.html#v:btInteriorOuter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis opens up an interior loop. For each index (i,j) we minimize over all\n possible basepair types.\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Interior",
          "name": "fInteriorInner",
          "package": "RNAwolf",
          "signature": "BaseF (EStem -\u003e Features (Vector (ExtPairIdx, Double)))",
          "source": "src/BioInf-RNAwolf-Interior.html#fInteriorInner",
          "type": "function"
        },
        "index": {
          "description": "This opens up an interior loop For each index we minimize over all possible basepair types",
          "hierarchy": "BioInf RNAwolf Interior",
          "module": "BioInf.RNAwolf.Interior",
          "name": "fInteriorInner",
          "normalized": "BaseF(EStem-\u003eFeatures(Vector(ExtPairIdx,Double)))",
          "package": "RNAwolf",
          "partial": "Interior Inner",
          "signature": "BaseF(EStem-\u003eFeatures(Vector(ExtPairIdx,Double)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Interior.html#v:fInteriorInner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSince backtracking interior loops is mostly selfcontained, we encapsulate\n the above three functions -- which we can't do easily with the forward\n calculations as they actually have to save on runtime.\n\u003c/p\u003e\u003cp\u003eGiven the outer indices (i,j), produces delta_i and delta_j so that\n i+delta_i and j-delta_j are the inner indices. \u003ccode\u003e\u003ca\u003efInteriorKLs\u003c/a\u003e\u003c/code\u003e should fuse\n and should make sure that l-k\u003e=4 is always true (maxd). Furthermore the\n maximal unpaired length of both sides combined is determined by \u003ccode\u003emaxLength\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eTODO better name than \u003ccode\u003emaxLength\u003c/code\u003e\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Interior",
          "name": "fInteriorKLs",
          "package": "RNAwolf",
          "signature": "Int -\u003e Int -\u003e Vector (Int, Int)",
          "source": "src/BioInf-RNAwolf-Interior.html#fInteriorKLs",
          "type": "function"
        },
        "index": {
          "description": "Since backtracking interior loops is mostly selfcontained we encapsulate the above three functions which we can do easily with the forward calculations as they actually have to save on runtime Given the outer indices produces delta and delta so that delta and j-delta are the inner indices fInteriorKLs should fuse and should make sure that l-k is always true maxd Furthermore the maximal unpaired length of both sides combined is determined by maxLength TODO better name than maxLength",
          "hierarchy": "BioInf RNAwolf Interior",
          "module": "BioInf.RNAwolf.Interior",
          "name": "fInteriorKLs",
          "normalized": "Int-\u003eInt-\u003eVector(Int,Int)",
          "package": "RNAwolf",
          "partial": "Interior KLs",
          "signature": "Int-\u003eInt-\u003eVector(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Interior.html#v:fInteriorKLs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms the interior loop calculations between (i,j) \u003ca\u003eouter\u003c/a\u003e and (k,l)\n \u003ca\u003einner\u003c/a\u003e part. The score based on the unpaired nucleotides is independent of\n both, the outer and the inner basepair type.\n\u003c/p\u003e\u003cp\u003eNOTE / TODO -- fusion enabled for this function (due to it taking 50% of the\n time), full fusion is still dependent on other factors and needs to be\n checked (in particular, we still have allocation events)\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Interior",
          "name": "fInteriorLoop",
          "package": "RNAwolf",
          "signature": "BaseF (NInte -\u003e Features (Vector (PairIdx, Double)))",
          "source": "src/BioInf-RNAwolf-Interior.html#fInteriorLoop",
          "type": "function"
        },
        "index": {
          "description": "Performs the interior loop calculations between outer and inner part The score based on the unpaired nucleotides is independent of both the outer and the inner basepair type NOTE TODO fusion enabled for this function due to it taking of the time full fusion is still dependent on other factors and needs to be checked in particular we still have allocation events",
          "hierarchy": "BioInf RNAwolf Interior",
          "module": "BioInf.RNAwolf.Interior",
          "name": "fInteriorLoop",
          "normalized": "BaseF(NInte-\u003eFeatures(Vector(PairIdx,Double)))",
          "package": "RNAwolf",
          "partial": "Interior Loop",
          "signature": "BaseF(NInte-\u003eFeatures(Vector(PairIdx,Double)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Interior.html#v:fInteriorLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe outer part of an interior loop. Given a certain basepair type, add the\n cost from the unpaired part.\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Interior",
          "name": "fInteriorOuter",
          "package": "RNAwolf",
          "signature": "BaseF (NInteLoop -\u003e ExtFeatures (Vector (PairIdx, Double)))",
          "source": "src/BioInf-RNAwolf-Interior.html#fInteriorOuter",
          "type": "function"
        },
        "index": {
          "description": "The outer part of an interior loop Given certain basepair type add the cost from the unpaired part",
          "hierarchy": "BioInf RNAwolf Interior",
          "module": "BioInf.RNAwolf.Interior",
          "name": "fInteriorOuter",
          "normalized": "BaseF(NInteLoop-\u003eExtFeatures(Vector(PairIdx,Double)))",
          "package": "RNAwolf",
          "partial": "Interior Outer",
          "signature": "BaseF(NInteLoop-\u003eExtFeatures(Vector(PairIdx,Double)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Interior.html#v:fInteriorOuter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for handling non-triplet multibranched loops.\n\u003c/p\u003e\u003cp\u003eTODO We can do the loop-splitting thing again to speed up multibranched\n closing by x10.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "Multibranched",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Multibranched.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for handling non-triplet multibranched loops TODO We can do the loop-splitting thing again to speed up multibranched closing by x10",
          "hierarchy": "BioInf RNAwolf Multibranched",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "Multibranched",
          "package": "RNAwolf",
          "partial": "Multibranched",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Multibranched.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBacktrack a single stem closed at (i,j) for NMbr1. Takes the route through\n NMult which solves for the exact pairtype.\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "btMl1Stem",
          "package": "RNAwolf",
          "signature": "Params -\u003e Primary -\u003e NMbr1 -\u003e NMult -\u003e NBT -\u003e NBT",
          "source": "src/BioInf-RNAwolf-Multibranched.html#btMl1Stem",
          "type": "function"
        },
        "index": {
          "description": "Backtrack single stem closed at for NMbr1 Takes the route through NMult which solves for the exact pairtype",
          "hierarchy": "BioInf RNAwolf Multibranched",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "btMl1Stem",
          "normalized": "Params-\u003ePrimary-\u003eNMbr-\u003eNMult-\u003eNBT-\u003eNBT",
          "package": "RNAwolf",
          "partial": "Ml Stem",
          "signature": "Params-\u003ePrimary-\u003eNMbr-\u003eNMult-\u003eNBT-\u003eNBT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Multibranched.html#v:btMl1Stem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBacktrack from and extended annotation (ij,ext) into the helper table\n NMultLoop.\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "btMlClose",
          "package": "RNAwolf",
          "signature": "Params -\u003e Primary -\u003e EStem -\u003e NMultLoop -\u003e NBT -\u003e ExtBT",
          "source": "src/BioInf-RNAwolf-Multibranched.html#btMlClose",
          "type": "function"
        },
        "index": {
          "description": "Backtrack from and extended annotation ij ext into the helper table NMultLoop",
          "hierarchy": "BioInf RNAwolf Multibranched",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "btMlClose",
          "normalized": "Params-\u003ePrimary-\u003eEStem-\u003eNMultLoop-\u003eNBT-\u003eExtBT",
          "package": "RNAwolf",
          "partial": "Ml Close",
          "signature": "Params-\u003ePrimary-\u003eEStem-\u003eNMultLoop-\u003eNBT-\u003eExtBT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Multibranched.html#v:btMlClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBacktracks from (i,j) in NMult into the extended-pairing EStem.\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "btMlHelix",
          "package": "RNAwolf",
          "signature": "Params -\u003e Primary -\u003e NMult -\u003e EStem -\u003e ExtBT -\u003e NBT",
          "source": "src/BioInf-RNAwolf-Multibranched.html#btMlHelix",
          "type": "function"
        },
        "index": {
          "description": "Backtracks from in NMult into the extended-pairing EStem",
          "hierarchy": "BioInf RNAwolf Multibranched",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "btMlHelix",
          "normalized": "Params-\u003ePrimary-\u003eNMult-\u003eEStem-\u003eExtBT-\u003eNBT",
          "package": "RNAwolf",
          "partial": "Ml Helix",
          "signature": "Params-\u003ePrimary-\u003eNMult-\u003eEStem-\u003eExtBT-\u003eNBT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Multibranched.html#v:btMlHelix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBacktracking the multibranched loop.\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "btMlLoop",
          "package": "RNAwolf",
          "signature": "Params -\u003e Primary -\u003e NMultLoop -\u003e NMbr -\u003e NMbr1 -\u003e NBT -\u003e NBT -\u003e NBT",
          "source": "src/BioInf-RNAwolf-Multibranched.html#btMlLoop",
          "type": "function"
        },
        "index": {
          "description": "Backtracking the multibranched loop",
          "hierarchy": "BioInf RNAwolf Multibranched",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "btMlLoop",
          "normalized": "Params-\u003ePrimary-\u003eNMultLoop-\u003eNMbr-\u003eNMbr-\u003eNBT-\u003eNBT-\u003eNBT",
          "package": "RNAwolf",
          "partial": "Ml Loop",
          "signature": "Params-\u003ePrimary-\u003eNMultLoop-\u003eNMbr-\u003eNMbr-\u003eNBT-\u003eNBT-\u003eNBT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Multibranched.html#v:btMlLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBacktrack by trying to find a multilooped helix.\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "btMlStem",
          "package": "RNAwolf",
          "signature": "Params -\u003e Primary -\u003e NMbr -\u003e NMult -\u003e NBT -\u003e NBT",
          "source": "src/BioInf-RNAwolf-Multibranched.html#btMlStem",
          "type": "function"
        },
        "index": {
          "description": "Backtrack by trying to find multilooped helix",
          "hierarchy": "BioInf RNAwolf Multibranched",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "btMlStem",
          "normalized": "Params-\u003ePrimary-\u003eNMbr-\u003eNMult-\u003eNBT-\u003eNBT",
          "package": "RNAwolf",
          "partial": "Ml Stem",
          "signature": "Params-\u003ePrimary-\u003eNMbr-\u003eNMult-\u003eNBT-\u003eNBT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Multibranched.html#v:btMlStem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBacktrack by finding the splitting index between an NMbr composite\n structure and a single multibranched stem NMult (which can contain unpaired\n nucleotides to the left).\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "btMlStems",
          "package": "RNAwolf",
          "signature": "Params -\u003e Primary -\u003e NMbr -\u003e NMult -\u003e NBT -\u003e NBT -\u003e NBT",
          "source": "src/BioInf-RNAwolf-Multibranched.html#btMlStems",
          "type": "function"
        },
        "index": {
          "description": "Backtrack by finding the splitting index between an NMbr composite structure and single multibranched stem NMult which can contain unpaired nucleotides to the left",
          "hierarchy": "BioInf RNAwolf Multibranched",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "btMlStems",
          "normalized": "Params-\u003ePrimary-\u003eNMbr-\u003eNMult-\u003eNBT-\u003eNBT-\u003eNBT",
          "package": "RNAwolf",
          "partial": "Ml Stems",
          "signature": "Params-\u003ePrimary-\u003eNMbr-\u003eNMult-\u003eNBT-\u003eNBT-\u003eNBT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Multibranched.html#v:btMlStems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBacktrack in NMbr if the nucleotide at j is unpaired.\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "btUnpairedRight",
          "package": "RNAwolf",
          "signature": "Params -\u003e Primary -\u003e NMbr -\u003e NBT -\u003e NBT",
          "source": "src/BioInf-RNAwolf-Multibranched.html#btUnpairedRight",
          "type": "function"
        },
        "index": {
          "description": "Backtrack in NMbr if the nucleotide at is unpaired",
          "hierarchy": "BioInf RNAwolf Multibranched",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "btUnpairedRight",
          "normalized": "Params-\u003ePrimary-\u003eNMbr-\u003eNBT-\u003eNBT",
          "package": "RNAwolf",
          "partial": "Unpaired Right",
          "signature": "Params-\u003ePrimary-\u003eNMbr-\u003eNBT-\u003eNBT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Multibranched.html#v:btUnpairedRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBacktrack NMbr1 if the nucleotide at j is unpaired.\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "btUnpairedRight1",
          "package": "RNAwolf",
          "signature": "Params -\u003e Primary -\u003e NMbr1 -\u003e NBT -\u003e NBT",
          "source": "src/BioInf-RNAwolf-Multibranched.html#btUnpairedRight1",
          "type": "function"
        },
        "index": {
          "description": "Backtrack NMbr1 if the nucleotide at is unpaired",
          "hierarchy": "BioInf RNAwolf Multibranched",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "btUnpairedRight1",
          "normalized": "Params-\u003ePrimary-\u003eNMbr-\u003eNBT-\u003eNBT",
          "package": "RNAwolf",
          "partial": "Unpaired Right",
          "signature": "Params-\u003ePrimary-\u003eNMbr-\u003eNBT-\u003eNBT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Multibranched.html#v:btUnpairedRight1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a single stem to a multibranch table containing zero stems already.\n\u003c/p\u003e\u003cp\u003eTODO this would be equal to mlHelix, unify!\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "fMl1Stem",
          "package": "RNAwolf",
          "signature": "BaseF (NMult -\u003e Features (Vector ((Int, Int), Double)))",
          "source": "src/BioInf-RNAwolf-Multibranched.html#fMl1Stem",
          "type": "function"
        },
        "index": {
          "description": "Add single stem to multibranch table containing zero stems already TODO this would be equal to mlHelix unify",
          "hierarchy": "BioInf RNAwolf Multibranched",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "fMl1Stem",
          "normalized": "BaseF(NMult-\u003eFeatures(Vector((Int,Int),Double)))",
          "package": "RNAwolf",
          "partial": "Ml Stem",
          "signature": "BaseF(NMult-\u003eFeatures(Vector((Int,Int),Double)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Multibranched.html#v:fMl1Stem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses a multibranch loop.\n\u003c/p\u003e\u003cp\u003eTODO make completely triplet compliant\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "fMlClose",
          "package": "RNAwolf",
          "signature": "BaseF (NMultLoop -\u003e ExtFeatures (Vector (PairIdx, Double)))",
          "source": "src/BioInf-RNAwolf-Multibranched.html#fMlClose",
          "type": "function"
        },
        "index": {
          "description": "Closes multibranch loop TODO make completely triplet compliant",
          "hierarchy": "BioInf RNAwolf Multibranched",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "fMlClose",
          "normalized": "BaseF(NMultLoop-\u003eExtFeatures(Vector(PairIdx,Double)))",
          "package": "RNAwolf",
          "partial": "Ml Close",
          "signature": "BaseF(NMultLoop-\u003eExtFeatures(Vector(PairIdx,Double)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Multibranched.html#v:fMlClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA multibranched helix (except the closing one). (i,j) are closed by a\n basepair. Backtracking into the EStem reveals the type of pairing.\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "fMlHelix",
          "package": "RNAwolf",
          "signature": "BaseF (EStem -\u003e Features (Vector (ExtPairIdx, Double)))",
          "source": "src/BioInf-RNAwolf-Multibranched.html#fMlHelix",
          "type": "function"
        },
        "index": {
          "description": "multibranched helix except the closing one are closed by basepair Backtracking into the EStem reveals the type of pairing",
          "hierarchy": "BioInf RNAwolf Multibranched",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "fMlHelix",
          "normalized": "BaseF(EStem-\u003eFeatures(Vector(ExtPairIdx,Double)))",
          "package": "RNAwolf",
          "partial": "Ml Helix",
          "signature": "BaseF(EStem-\u003eFeatures(Vector(ExtPairIdx,Double)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Multibranched.html#v:fMlHelix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultibranched loop helper function that combines \u003ca\u003eat least one stem\u003c/a\u003e with\n \u003ca\u003eexactly one stem\u003c/a\u003e but does not add the closing energy from (i,j).\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "fMlLoop",
          "package": "RNAwolf",
          "signature": "BaseF (NMbr -\u003e NMbr1 -\u003e Features (Vector (Int, Double)))",
          "source": "src/BioInf-RNAwolf-Multibranched.html#fMlLoop",
          "type": "function"
        },
        "index": {
          "description": "Multibranched loop helper function that combines at least one stem with exactly one stem but does not add the closing energy from",
          "hierarchy": "BioInf RNAwolf Multibranched",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "fMlLoop",
          "normalized": "BaseF(NMbr-\u003eNMbr-\u003eFeatures(Vector(Int,Double)))",
          "package": "RNAwolf",
          "partial": "Ml Loop",
          "signature": "BaseF(NMbr-\u003eNMbr-\u003eFeatures(Vector(Int,Double)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Multibranched.html#v:fMlLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBacktrack a single stem in NMbr, where the stem has zero or more unpaired\n nucleotides to the left.\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "fMlStem",
          "package": "RNAwolf",
          "signature": "BaseF (NMult -\u003e Features (Vector (Int, Double)))",
          "source": "src/BioInf-RNAwolf-Multibranched.html#fMlStem",
          "type": "function"
        },
        "index": {
          "description": "Backtrack single stem in NMbr where the stem has zero or more unpaired nucleotides to the left",
          "hierarchy": "BioInf RNAwolf Multibranched",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "fMlStem",
          "normalized": "BaseF(NMult-\u003eFeatures(Vector(Int,Double)))",
          "package": "RNAwolf",
          "partial": "Ml Stem",
          "signature": "BaseF(NMult-\u003eFeatures(Vector(Int,Double)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Multibranched.html#v:fMlStem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a stem to a multibranch table containing already at least one stem.\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "fMlStems",
          "package": "RNAwolf",
          "signature": "BaseF (NMbr -\u003e NMult -\u003e Features (Vector (Int, Double)))",
          "source": "src/BioInf-RNAwolf-Multibranched.html#fMlStems",
          "type": "function"
        },
        "index": {
          "description": "Add stem to multibranch table containing already at least one stem",
          "hierarchy": "BioInf RNAwolf Multibranched",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "fMlStems",
          "normalized": "BaseF(NMbr-\u003eNMult-\u003eFeatures(Vector(Int,Double)))",
          "package": "RNAwolf",
          "partial": "Ml Stems",
          "signature": "BaseF(NMbr-\u003eNMult-\u003eFeatures(Vector(Int,Double)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Multibranched.html#v:fMlStems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnergy for having the rightmost nucleotide (at j) unpaired in NMBr.\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "fUnpairedRight",
          "package": "RNAwolf",
          "signature": "BaseF (NMbr -\u003e Features (Vector (PairIdx, Double)))",
          "source": "src/BioInf-RNAwolf-Multibranched.html#fUnpairedRight",
          "type": "function"
        },
        "index": {
          "description": "Energy for having the rightmost nucleotide at unpaired in NMBr",
          "hierarchy": "BioInf RNAwolf Multibranched",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "fUnpairedRight",
          "normalized": "BaseF(NMbr-\u003eFeatures(Vector(PairIdx,Double)))",
          "package": "RNAwolf",
          "partial": "Unpaired Right",
          "signature": "BaseF(NMbr-\u003eFeatures(Vector(PairIdx,Double)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Multibranched.html#v:fUnpairedRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnergy for having the rightmost nucleotide (at j) unpaired in NMBr1.\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "fUnpairedRight1",
          "package": "RNAwolf",
          "signature": "BaseF (NMbr1 -\u003e Features (Vector (PairIdx, Double)))",
          "source": "src/BioInf-RNAwolf-Multibranched.html#fUnpairedRight1",
          "type": "function"
        },
        "index": {
          "description": "Energy for having the rightmost nucleotide at unpaired in NMBr1",
          "hierarchy": "BioInf RNAwolf Multibranched",
          "module": "BioInf.RNAwolf.Multibranched",
          "name": "fUnpairedRight1",
          "normalized": "BaseF(NMbr-\u003eFeatures(Vector(PairIdx,Double)))",
          "package": "RNAwolf",
          "partial": "Unpaired Right",
          "signature": "BaseF(NMbr-\u003eFeatures(Vector(PairIdx,Double)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Multibranched.html#v:fUnpairedRight1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Stem",
          "name": "Stem",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Stem.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Stem",
          "module": "BioInf.RNAwolf.Stem",
          "name": "Stem",
          "package": "RNAwolf",
          "partial": "Stem",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Stem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBacktrack from a normal stem back into the extended stem.\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Stem",
          "name": "btNstem",
          "package": "RNAwolf",
          "signature": "Params -\u003e Primary -\u003e NStem -\u003e EStem -\u003e ExtBT -\u003e NBT",
          "source": "src/BioInf-RNAwolf-Stem.html#btNstem",
          "type": "function"
        },
        "index": {
          "description": "Backtrack from normal stem back into the extended stem",
          "hierarchy": "BioInf RNAwolf Stem",
          "module": "BioInf.RNAwolf.Stem",
          "name": "btNstem",
          "normalized": "Params-\u003ePrimary-\u003eNStem-\u003eEStem-\u003eExtBT-\u003eNBT",
          "package": "RNAwolf",
          "partial": "Nstem",
          "signature": "Params-\u003ePrimary-\u003eNStem-\u003eEStem-\u003eExtBT-\u003eNBT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Stem.html#v:btNstem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStem backtracking.\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Stem",
          "name": "btStem",
          "package": "RNAwolf",
          "signature": "Params -\u003e Primary -\u003e EStem -\u003e ExtBT -\u003e ExtBT",
          "source": "src/BioInf-RNAwolf-Stem.html#btStem",
          "type": "function"
        },
        "index": {
          "description": "Stem backtracking",
          "hierarchy": "BioInf RNAwolf Stem",
          "module": "BioInf.RNAwolf.Stem",
          "name": "btStem",
          "normalized": "Params-\u003ePrimary-\u003eEStem-\u003eExtBT-\u003eExtBT",
          "package": "RNAwolf",
          "partial": "Stem",
          "signature": "Params-\u003ePrimary-\u003eEStem-\u003eExtBT-\u003eExtBT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Stem.html#v:btStem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA normal stem is created by taking the minimum over all possible basepairs\n of the extended stem.\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Stem",
          "name": "fNstem",
          "package": "RNAwolf",
          "signature": "BaseF (EStem -\u003e Features (Vector (ExtPairIdx, Double)))",
          "source": "src/BioInf-RNAwolf-Stem.html#fNstem",
          "type": "function"
        },
        "index": {
          "description": "normal stem is created by taking the minimum over all possible basepairs of the extended stem",
          "hierarchy": "BioInf RNAwolf Stem",
          "module": "BioInf.RNAwolf.Stem",
          "name": "fNstem",
          "normalized": "BaseF(EStem-\u003eFeatures(Vector(ExtPairIdx,Double)))",
          "package": "RNAwolf",
          "partial": "Nstem",
          "signature": "BaseF(EStem-\u003eFeatures(Vector(ExtPairIdx,Double)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Stem.html#v:fNstem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stem is extended by another pair. The score contribution is dependent on\n the previous pair. Note that for score lookup purposes, the inner pair is\n switched.\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Stem",
          "name": "fStem",
          "package": "RNAwolf",
          "signature": "BaseF (EStem -\u003e ExtFeatures (Vector (ExtPairIdx, Double)))",
          "source": "src/BioInf-RNAwolf-Stem.html#fStem",
          "type": "function"
        },
        "index": {
          "description": "stem is extended by another pair The score contribution is dependent on the previous pair Note that for score lookup purposes the inner pair is switched",
          "hierarchy": "BioInf RNAwolf Stem",
          "module": "BioInf.RNAwolf.Stem",
          "name": "fStem",
          "normalized": "BaseF(EStem-\u003eExtFeatures(Vector(ExtPairIdx,Double)))",
          "package": "RNAwolf",
          "partial": "Stem",
          "signature": "BaseF(EStem-\u003eExtFeatures(Vector(ExtPairIdx,Double)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Stem.html#v:fStem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.TripletBulge",
          "name": "TripletBulge",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-TripletBulge.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf TripletBulge",
          "module": "BioInf.RNAwolf.TripletBulge",
          "name": "TripletBulge",
          "package": "RNAwolf",
          "partial": "Triplet Bulge",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-TripletBulge.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.TripletStem",
          "name": "TripletStem",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-TripletStem.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf TripletStem",
          "module": "BioInf.RNAwolf.TripletStem",
          "name": "TripletStem",
          "package": "RNAwolf",
          "partial": "Triplet Stem",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-TripletStem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "Types",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "Types",
          "package": "RNAwolf",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "BTAnswer",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Types.html#BTAnswer",
          "type": "type"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "BTAnswer",
          "package": "RNAwolf",
          "partial": "BTAnswer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#t:BTAnswer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "BaseF",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Types.html#BaseF",
          "type": "type"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "BaseF",
          "package": "RNAwolf",
          "partial": "Base",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#t:BaseF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "EStem",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Types.html#EStem",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "EStem",
          "package": "RNAwolf",
          "partial": "EStem",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#t:EStem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould really go into BiobaseXNA\n\u003c/p\u003e\u003cp\u003eShould really go into BiobaseXNA\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf.Types",
          "name": "ExtBT",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Types.html#ExtBT",
          "type": "type"
        },
        "index": {
          "description": "Should really go into BiobaseXNA Should really go into BiobaseXNA",
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "ExtBT",
          "package": "RNAwolf",
          "partial": "Ext BT",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#t:ExtBT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "ExtFeatures",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Types.html#ExtFeatures",
          "type": "type"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "ExtFeatures",
          "package": "RNAwolf",
          "partial": "Ext Features",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#t:ExtFeatures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "ExtTable",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Types.html#ExtTable",
          "type": "type"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "ExtTable",
          "package": "RNAwolf",
          "partial": "Ext Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#t:ExtTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "Features",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Types.html#Features",
          "type": "type"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "Features",
          "package": "RNAwolf",
          "partial": "Features",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#t:Features"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "NBT",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Types.html#NBT",
          "type": "type"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "NBT",
          "package": "RNAwolf",
          "partial": "NBT",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#t:NBT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "NBulg",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Types.html#NBulg",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "NBulg",
          "package": "RNAwolf",
          "partial": "NBulg",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#t:NBulg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "NBulgLoop",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Types.html#NBulgLoop",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "NBulgLoop",
          "package": "RNAwolf",
          "partial": "NBulg Loop",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#t:NBulgLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "NExtn",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Types.html#NExtn",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "NExtn",
          "package": "RNAwolf",
          "partial": "NExtn",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#t:NExtn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "NInte",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Types.html#NInte",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "NInte",
          "package": "RNAwolf",
          "partial": "NInte",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#t:NInte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "NInteLoop",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Types.html#NInteLoop",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "NInteLoop",
          "package": "RNAwolf",
          "partial": "NInte Loop",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#t:NInteLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "NMbr",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Types.html#NMbr",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "NMbr",
          "package": "RNAwolf",
          "partial": "NMbr",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#t:NMbr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "NMbr1",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Types.html#NMbr1",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "NMbr1",
          "package": "RNAwolf",
          "partial": "NMbr",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#t:NMbr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "NMult",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Types.html#NMult",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "NMult",
          "package": "RNAwolf",
          "partial": "NMult",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#t:NMult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "NMultLoop",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Types.html#NMultLoop",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "NMultLoop",
          "package": "RNAwolf",
          "partial": "NMult Loop",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#t:NMultLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "NStem",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Types.html#NStem",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "NStem",
          "package": "RNAwolf",
          "partial": "NStem",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#t:NStem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "Table",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Types.html#Table",
          "type": "type"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "Table",
          "package": "RNAwolf",
          "partial": "Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#t:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "Tables",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf-Types.html#Tables",
          "type": "type"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "Tables",
          "package": "RNAwolf",
          "partial": "Tables",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#t:Tables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "EStem",
          "package": "RNAwolf",
          "signature": "EStem",
          "source": "src/BioInf-RNAwolf-Types.html#EStem",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "EStem",
          "package": "RNAwolf",
          "partial": "EStem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#v:EStem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "NBulg",
          "package": "RNAwolf",
          "signature": "NBulg",
          "source": "src/BioInf-RNAwolf-Types.html#NBulg",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "NBulg",
          "package": "RNAwolf",
          "partial": "NBulg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#v:NBulg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "NBulgLoop",
          "package": "RNAwolf",
          "signature": "NBulgLoop",
          "source": "src/BioInf-RNAwolf-Types.html#NBulgLoop",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "NBulgLoop",
          "package": "RNAwolf",
          "partial": "NBulg Loop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#v:NBulgLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "NExtn",
          "package": "RNAwolf",
          "signature": "NExtn",
          "source": "src/BioInf-RNAwolf-Types.html#NExtn",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "NExtn",
          "package": "RNAwolf",
          "partial": "NExtn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#v:NExtn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "NInte",
          "package": "RNAwolf",
          "signature": "NInte",
          "source": "src/BioInf-RNAwolf-Types.html#NInte",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "NInte",
          "package": "RNAwolf",
          "partial": "NInte",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#v:NInte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "NInteLoop",
          "package": "RNAwolf",
          "signature": "NInteLoop",
          "source": "src/BioInf-RNAwolf-Types.html#NInteLoop",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "NInteLoop",
          "package": "RNAwolf",
          "partial": "NInte Loop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#v:NInteLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "NMbr",
          "package": "RNAwolf",
          "signature": "NMbr",
          "source": "src/BioInf-RNAwolf-Types.html#NMbr",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "NMbr",
          "package": "RNAwolf",
          "partial": "NMbr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#v:NMbr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "NMbr1",
          "package": "RNAwolf",
          "signature": "NMbr1",
          "source": "src/BioInf-RNAwolf-Types.html#NMbr1",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "NMbr1",
          "package": "RNAwolf",
          "partial": "NMbr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#v:NMbr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "NMult",
          "package": "RNAwolf",
          "signature": "NMult",
          "source": "src/BioInf-RNAwolf-Types.html#NMult",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "NMult",
          "package": "RNAwolf",
          "partial": "NMult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#v:NMult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "NMultLoop",
          "package": "RNAwolf",
          "signature": "NMultLoop",
          "source": "src/BioInf-RNAwolf-Types.html#NMultLoop",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "NMultLoop",
          "package": "RNAwolf",
          "partial": "NMult Loop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#v:NMultLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "NStem",
          "package": "RNAwolf",
          "signature": "NStem",
          "source": "src/BioInf-RNAwolf-Types.html#NStem",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "NStem",
          "package": "RNAwolf",
          "partial": "NStem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#v:NStem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "unBulgLoop",
          "package": "RNAwolf",
          "signature": "Table",
          "source": "src/BioInf-RNAwolf-Types.html#NBulgLoop",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "unBulgLoop",
          "package": "RNAwolf",
          "partial": "Bulg Loop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#v:unBulgLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "unEStem",
          "package": "RNAwolf",
          "signature": "ExtTable",
          "source": "src/BioInf-RNAwolf-Types.html#EStem",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "unEStem",
          "package": "RNAwolf",
          "partial": "EStem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#v:unEStem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "unMultLoop",
          "package": "RNAwolf",
          "signature": "Table",
          "source": "src/BioInf-RNAwolf-Types.html#NMultLoop",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "unMultLoop",
          "package": "RNAwolf",
          "partial": "Mult Loop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#v:unMultLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "unNBulg",
          "package": "RNAwolf",
          "signature": "Table",
          "source": "src/BioInf-RNAwolf-Types.html#NBulg",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "unNBulg",
          "package": "RNAwolf",
          "partial": "NBulg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#v:unNBulg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "unNExtn",
          "package": "RNAwolf",
          "signature": "Table",
          "source": "src/BioInf-RNAwolf-Types.html#NExtn",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "unNExtn",
          "package": "RNAwolf",
          "partial": "NExtn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#v:unNExtn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "unNInte",
          "package": "RNAwolf",
          "signature": "Table",
          "source": "src/BioInf-RNAwolf-Types.html#NInte",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "unNInte",
          "package": "RNAwolf",
          "partial": "NInte",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#v:unNInte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "unNInteLoop",
          "package": "RNAwolf",
          "signature": "Table",
          "source": "src/BioInf-RNAwolf-Types.html#NInteLoop",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "unNInteLoop",
          "package": "RNAwolf",
          "partial": "NInte Loop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#v:unNInteLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "unNMbr",
          "package": "RNAwolf",
          "signature": "Table",
          "source": "src/BioInf-RNAwolf-Types.html#NMbr",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "unNMbr",
          "package": "RNAwolf",
          "partial": "NMbr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#v:unNMbr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "unNMbr1",
          "package": "RNAwolf",
          "signature": "Table",
          "source": "src/BioInf-RNAwolf-Types.html#NMbr1",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "unNMbr1",
          "package": "RNAwolf",
          "partial": "NMbr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#v:unNMbr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "unNMult",
          "package": "RNAwolf",
          "signature": "Table",
          "source": "src/BioInf-RNAwolf-Types.html#NMult",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "unNMult",
          "package": "RNAwolf",
          "partial": "NMult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#v:unNMult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.RNAwolf.Types",
          "name": "unNStem",
          "package": "RNAwolf",
          "signature": "Table",
          "source": "src/BioInf-RNAwolf-Types.html#NStem",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf RNAwolf Types",
          "module": "BioInf.RNAwolf.Types",
          "name": "unNStem",
          "package": "RNAwolf",
          "partial": "NStem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf-Types.html#v:unNStem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe RNAwolf folding algorithm, version 1.9. We now have full stacking and\n rich parameters everywhere. In general, most parameters closely follow what\n we have for ViennaRNA 1.8 but with extended RNA secondary structures,\n instead of canonicals only. Further refinements of the parameter system will\n follow.\n\u003c/p\u003e\u003cp\u003eTODO right now, 1-diagrams only, 2-diagrams come back in a few days. I want\n to be sure that the full stacking approach does not introduce subtle bugs.\n\u003c/p\u003e\u003cp\u003eTODO recast all fZZZ functions for folding to actually fuse on minimum/fZZZ.\n\u003c/p\u003e\u003cp\u003eTODO VU.! -\u003e VU.unsafeIndex\n\u003c/p\u003e\u003cp\u003eTODO possibly very big TODO: is this being optimized? : fold $ g z where g z\n = if z==True then [1..10] else []. If this is not optimized, we should\n change all functions below in a way that allows optimization. (I dont think\n fusion can fire on these objects...)\n\u003c/p\u003e\u003cp\u003eTODO rewrite minimumVU to accept \u003ca\u003eEither\u003c/a\u003e ctors and specialize on them.\n   \u003ca\u003eLeft\u003c/a\u003e to be used for strange errors, \u003ca\u003eRight\u003c/a\u003e for correct streams\n\u003c/p\u003e\u003c/div\u003e",
          "module": "BioInf.RNAwolf",
          "name": "RNAwolf",
          "package": "RNAwolf",
          "source": "src/BioInf-RNAwolf.html",
          "type": "module"
        },
        "index": {
          "description": "The RNAwolf folding algorithm version We now have full stacking and rich parameters everywhere In general most parameters closely follow what we have for ViennaRNA but with extended RNA secondary structures instead of canonicals only Further refinements of the parameter system will follow TODO right now diagrams only diagrams come back in few days want to be sure that the full stacking approach does not introduce subtle bugs TODO recast all fZZZ functions for folding to actually fuse on minimum fZZZ TODO VU VU.unsafeIndex TODO possibly very big TODO is this being optimized fold where if True then else If this is not optimized we should change all functions below in way that allows optimization dont think fusion can fire on these objects TODO rewrite minimumVU to accept Either ctors and specialize on them Left to be used for strange errors Right for correct streams",
          "hierarchy": "BioInf RNAwolf",
          "module": "BioInf.RNAwolf",
          "name": "RNAwolf",
          "package": "RNAwolf",
          "partial": "RNAwolf",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around the state monad.\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf",
          "name": "rnaWolf",
          "package": "RNAwolf",
          "signature": "Params -\u003e Constraint -\u003e Primary -\u003e Tables",
          "source": "src/BioInf-RNAwolf.html#rnaWolf",
          "type": "function"
        },
        "index": {
          "description": "Wrapper around the state monad",
          "hierarchy": "BioInf RNAwolf",
          "module": "BioInf.RNAwolf",
          "name": "rnaWolf",
          "normalized": "Params-\u003eConstraint-\u003ePrimary-\u003eTables",
          "package": "RNAwolf",
          "partial": "Wolf",
          "signature": "Params-\u003eConstraint-\u003ePrimary-\u003eTables",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf.html#v:rnaWolf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven parameters, input, score band, and filled tables we can backtrack.\n\u003c/p\u003e\u003cp\u003eNOTE the order in which backtracking for individual functions is performed,\n is important. In case of ties in energy, the first result is taken. This\n should be considered!\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e1\u003c/dt\u003e\u003cdd\u003e We consider unpaired stretches always first. This is kind of arbitrary.\n\u003c/dd\u003e\u003cdt\u003e2\u003c/dt\u003e\u003cdd\u003e extended stems always come last. This is because they can potentially\n introduce many co-optimal structures before they are all discarded.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eTODO all the crap in comments are bug-fix backtracking options.\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf",
          "name": "rnaWolfBacktrack",
          "package": "RNAwolf",
          "signature": "Params -\u003e Constraint -\u003e Primary -\u003e Double -\u003e Tables -\u003e [([ExtPairIdx], Double)]",
          "source": "src/BioInf-RNAwolf.html#rnaWolfBacktrack",
          "type": "function"
        },
        "index": {
          "description": "Given parameters input score band and filled tables we can backtrack NOTE the order in which backtracking for individual functions is performed is important In case of ties in energy the first result is taken This should be considered We consider unpaired stretches always first This is kind of arbitrary extended stems always come last This is because they can potentially introduce many co-optimal structures before they are all discarded TODO all the crap in comments are bug-fix backtracking options",
          "hierarchy": "BioInf RNAwolf",
          "module": "BioInf.RNAwolf",
          "name": "rnaWolfBacktrack",
          "normalized": "Params-\u003eConstraint-\u003ePrimary-\u003eDouble-\u003eTables-\u003e[([ExtPairIdx],Double)]",
          "package": "RNAwolf",
          "partial": "Wolf Backtrack",
          "signature": "Params-\u003eConstraint-\u003ePrimary-\u003eDouble-\u003eTables-\u003e[([ExtPairIdx],Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf.html#v:rnaWolfBacktrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the optimal energy.\n\u003c/p\u003e",
          "module": "BioInf.RNAwolf",
          "name": "rnaWolfOptimal",
          "package": "RNAwolf",
          "signature": "Tables -\u003e Double",
          "source": "src/BioInf-RNAwolf.html#rnaWolfOptimal",
          "type": "function"
        },
        "index": {
          "description": "Return the optimal energy",
          "hierarchy": "BioInf RNAwolf",
          "module": "BioInf.RNAwolf",
          "name": "rnaWolfOptimal",
          "normalized": "Tables-\u003eDouble",
          "package": "RNAwolf",
          "partial": "Wolf Optimal",
          "signature": "Tables-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/RNAwolf/docs/BioInf-RNAwolf.html#v:rnaWolfOptimal"
      }
    }
  ]
]