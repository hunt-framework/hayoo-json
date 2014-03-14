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
        "word": "MC-Fold-DP"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTODO bonus system for matching \u003ca\u003e()\u003c/a\u003e bracking still broken?!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "BioInf.MCFoldDP",
          "name": "MCFoldDP",
          "package": "MC-Fold-DP",
          "source": "src/BioInf-MCFoldDP.html",
          "type": "module"
        },
        "index": {
          "description": "TODO bonus system for matching bracking still broken",
          "hierarchy": "BioInf MCFoldDP",
          "module": "BioInf.MCFoldDP",
          "name": "MCFoldDP",
          "package": "MC-Fold-DP",
          "partial": "MCFold DP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MC-Fold-DP/docs/BioInf-MCFoldDP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.MCFoldDP",
          "name": "Table2",
          "package": "MC-Fold-DP",
          "source": "src/BioInf-MCFoldDP.html#Table2",
          "type": "type"
        },
        "index": {
          "hierarchy": "BioInf MCFoldDP",
          "module": "BioInf.MCFoldDP",
          "name": "Table2",
          "package": "MC-Fold-DP",
          "partial": "Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MC-Fold-DP/docs/BioInf-MCFoldDP.html#t:Table2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.MCFoldDP",
          "name": "Table4",
          "package": "MC-Fold-DP",
          "source": "src/BioInf-MCFoldDP.html#Table4",
          "type": "type"
        },
        "index": {
          "hierarchy": "BioInf MCFoldDP",
          "module": "BioInf.MCFoldDP",
          "name": "Table4",
          "package": "MC-Fold-DP",
          "partial": "Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MC-Fold-DP/docs/BioInf-MCFoldDP.html#t:Table4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.MCFoldDP",
          "name": "Tables",
          "package": "MC-Fold-DP",
          "source": "src/BioInf-MCFoldDP.html#Tables",
          "type": "type"
        },
        "index": {
          "hierarchy": "BioInf MCFoldDP",
          "module": "BioInf.MCFoldDP",
          "name": "Tables",
          "package": "MC-Fold-DP",
          "partial": "Tables",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MC-Fold-DP/docs/BioInf-MCFoldDP.html#t:Tables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBacktracking suboptimal results\n\u003c/p\u003e",
          "module": "BioInf.MCFoldDP",
          "name": "backtrack",
          "package": "MC-Fold-DP",
          "signature": "MotifDB -\u003e Double -\u003e Primary -\u003e Constraint -\u003e Tables -\u003e [(Double, D1Secondary)]",
          "source": "src/BioInf-MCFoldDP.html#backtrack",
          "type": "function"
        },
        "index": {
          "description": "Backtracking suboptimal results",
          "hierarchy": "BioInf MCFoldDP",
          "module": "BioInf.MCFoldDP",
          "name": "backtrack",
          "normalized": "MotifDB-\u003eDouble-\u003ePrimary-\u003eConstraint-\u003eTables-\u003e[(Double,D Secondary)]",
          "package": "MC-Fold-DP",
          "signature": "MotifDB-\u003eDouble-\u003ePrimary-\u003eConstraint-\u003eTables-\u003e[(Double,D Secondary)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MC-Fold-DP/docs/BioInf-MCFoldDP.html#v:backtrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.MCFoldDP",
          "name": "bonusScore",
          "package": "MC-Fold-DP",
          "signature": "Double",
          "source": "src/BioInf-MCFoldDP.html#bonusScore",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf MCFoldDP",
          "module": "BioInf.MCFoldDP",
          "name": "bonusScore",
          "package": "MC-Fold-DP",
          "partial": "Score",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MC-Fold-DP/docs/BioInf-MCFoldDP.html#v:bonusScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterior loops of some size\n\u003c/p\u003e\u003cp\u003eTODO this could profit from a log-based scoring function\n\u003c/p\u003e",
          "module": "BioInf.MCFoldDP",
          "name": "fInterior",
          "package": "MC-Fold-DP",
          "signature": "MotifDB -\u003e Primary -\u003e Constraint -\u003e Int -\u003e Int -\u003e Table2 -\u003e Vector ((Int, Int), Double)",
          "source": "src/BioInf-MCFoldDP.html#fInterior",
          "type": "function"
        },
        "index": {
          "description": "Interior loops of some size TODO this could profit from log-based scoring function",
          "hierarchy": "BioInf MCFoldDP",
          "module": "BioInf.MCFoldDP",
          "name": "fInterior",
          "normalized": "MotifDB-\u003ePrimary-\u003eConstraint-\u003eInt-\u003eInt-\u003eTable-\u003eVector((Int,Int),Double)",
          "package": "MC-Fold-DP",
          "partial": "Interior",
          "signature": "MotifDB-\u003ePrimary-\u003eConstraint-\u003eInt-\u003eInt-\u003eTable-\u003eVector((Int,Int),Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MC-Fold-DP/docs/BioInf-MCFoldDP.html#v:fInterior"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect a partial multibranched structure with a hairpin. Note that the\n \u003ca\u003edncm\u003c/a\u003e hairpin part wants one table, not the list of all tables.\n\u003c/p\u003e",
          "module": "BioInf.MCFoldDP",
          "name": "fMMbrStem",
          "package": "MC-Fold-DP",
          "signature": "Int -\u003e Int -\u003e Table2 -\u003e Table2 -\u003e Vector (Int, Double)",
          "source": "src/BioInf-MCFoldDP.html#fMMbrStem",
          "type": "function"
        },
        "index": {
          "description": "Connect partial multibranched structure with hairpin Note that the dncm hairpin part wants one table not the list of all tables",
          "hierarchy": "BioInf MCFoldDP",
          "module": "BioInf.MCFoldDP",
          "name": "fMMbrStem",
          "normalized": "Int-\u003eInt-\u003eTable-\u003eTable-\u003eVector(Int,Double)",
          "package": "MC-Fold-DP",
          "partial": "MMbr Stem",
          "signature": "Int-\u003eInt-\u003eTable-\u003eTable-\u003eVector(Int,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MC-Fold-DP/docs/BioInf-MCFoldDP.html#v:fMMbrStem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd the first stem\n\u003c/p\u003e",
          "module": "BioInf.MCFoldDP",
          "name": "fMStem",
          "package": "MC-Fold-DP",
          "signature": "Int -\u003e Int -\u003e Table2 -\u003e Vector (Int, Double)",
          "source": "src/BioInf-MCFoldDP.html#fMStem",
          "type": "function"
        },
        "index": {
          "description": "Add the first stem",
          "hierarchy": "BioInf MCFoldDP",
          "module": "BioInf.MCFoldDP",
          "name": "fMStem",
          "normalized": "Int-\u003eInt-\u003eTable-\u003eVector(Int,Double)",
          "package": "MC-Fold-DP",
          "partial": "MStem",
          "signature": "Int-\u003eInt-\u003eTable-\u003eVector(Int,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MC-Fold-DP/docs/BioInf-MCFoldDP.html#v:fMStem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose a multibranched loop with a singleNCM\n\u003c/p\u003e\u003cp\u003eTODO close with singleNCM\n\u003c/p\u003e",
          "module": "BioInf.MCFoldDP",
          "name": "fMulti",
          "package": "MC-Fold-DP",
          "signature": "MotifDB -\u003e Primary -\u003e Constraint -\u003e Int -\u003e Int -\u003e Table2 -\u003e Table2 -\u003e Vector (Int, Double)",
          "source": "src/BioInf-MCFoldDP.html#fMulti",
          "type": "function"
        },
        "index": {
          "description": "Close multibranched loop with singleNCM TODO close with singleNCM",
          "hierarchy": "BioInf MCFoldDP",
          "module": "BioInf.MCFoldDP",
          "name": "fMulti",
          "normalized": "MotifDB-\u003ePrimary-\u003eConstraint-\u003eInt-\u003eInt-\u003eTable-\u003eTable-\u003eVector(Int,Double)",
          "package": "MC-Fold-DP",
          "partial": "Multi",
          "signature": "MotifDB-\u003ePrimary-\u003eConstraint-\u003eInt-\u003eInt-\u003eTable-\u003eTable-\u003eVector(Int,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MC-Fold-DP/docs/BioInf-MCFoldDP.html#v:fMulti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd one stem for \u003ca\u003eexternal\u003c/a\u003e calculations\n\u003c/p\u003e\u003cp\u003eTODO make efficient\n\u003c/p\u003e",
          "module": "BioInf.MCFoldDP",
          "name": "fStemExt",
          "package": "MC-Fold-DP",
          "signature": "[Table2] -\u003e Int -\u003e Int -\u003e Vector (Int, Int, Double)",
          "source": "src/BioInf-MCFoldDP.html#fStemExt",
          "type": "function"
        },
        "index": {
          "description": "Add one stem for external calculations TODO make efficient",
          "hierarchy": "BioInf MCFoldDP",
          "module": "BioInf.MCFoldDP",
          "name": "fStemExt",
          "normalized": "[Table]-\u003eInt-\u003eInt-\u003eVector(Int,Int,Double)",
          "package": "MC-Fold-DP",
          "partial": "Stem Ext",
          "signature": "[Table]-\u003eInt-\u003eInt-\u003eVector(Int,Int,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MC-Fold-DP/docs/BioInf-MCFoldDP.html#v:fStemExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine stems for \u003ca\u003eexternal\u003c/a\u003e calculations\n\u003c/p\u003e",
          "module": "BioInf.MCFoldDP",
          "name": "fStemExtExt",
          "package": "MC-Fold-DP",
          "signature": "[Table2] -\u003e Table2 -\u003e Int -\u003e Int -\u003e Vector (Int, Int, Double)",
          "source": "src/BioInf-MCFoldDP.html#fStemExtExt",
          "type": "function"
        },
        "index": {
          "description": "Combine stems for external calculations",
          "hierarchy": "BioInf MCFoldDP",
          "module": "BioInf.MCFoldDP",
          "name": "fStemExtExt",
          "normalized": "[Table]-\u003eTable-\u003eInt-\u003eInt-\u003eVector(Int,Int,Double)",
          "package": "MC-Fold-DP",
          "partial": "Stem Ext Ext",
          "signature": "[Table]-\u003eTable-\u003eInt-\u003eInt-\u003eVector(Int,Int,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MC-Fold-DP/docs/BioInf-MCFoldDP.html#v:fStemExtExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edouble NCM extending another double NCM.\n\u003c/p\u003e\u003cp\u003eTODO this one could profit from performance improvements. But check first vs. multibranch timings\n TODO remove otherwise case\n TODO improve performance, eats ~66% of total time\n TODO improve: return empty vector on error, write special minimum function that has eInf on empty\n\u003c/p\u003e",
          "module": "BioInf.MCFoldDP",
          "name": "fncmDD",
          "package": "MC-Fold-DP",
          "signature": "MotifDB -\u003e Primary -\u003e Constraint -\u003e Int -\u003e Int -\u003e Int -\u003e Int -\u003e [Table2] -\u003e Vector (Int, Double)",
          "source": "src/BioInf-MCFoldDP.html#fncmDD",
          "type": "function"
        },
        "index": {
          "description": "double NCM extending another double NCM TODO this one could profit from performance improvements But check first vs multibranch timings TODO remove otherwise case TODO improve performance eats of total time TODO improve return empty vector on error write special minimum function that has eInf on empty",
          "hierarchy": "BioInf MCFoldDP",
          "module": "BioInf.MCFoldDP",
          "name": "fncmDD",
          "normalized": "MotifDB-\u003ePrimary-\u003eConstraint-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003e[Table]-\u003eVector(Int,Double)",
          "package": "MC-Fold-DP",
          "partial": "DD",
          "signature": "MotifDB-\u003ePrimary-\u003eConstraint-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003e[Table]-\u003eVector(Int,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MC-Fold-DP/docs/BioInf-MCFoldDP.html#v:fncmDD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edouble NCM extend single NCM. We do not care that this is comparatively\n slow as it is called only a few times, anyway.\n\u003c/p\u003e\u003cp\u003eTODO make faster (better lookup system)\n TODO otherwise case\n TODO eats another ~10% performance\n\u003c/p\u003e",
          "module": "BioInf.MCFoldDP",
          "name": "fncmDS",
          "package": "MC-Fold-DP",
          "signature": "MotifDB -\u003e Primary -\u003e Constraint -\u003e Int -\u003e Int -\u003e Int -\u003e Int -\u003e Table2 -\u003e Double",
          "source": "src/BioInf-MCFoldDP.html#fncmDS",
          "type": "function"
        },
        "index": {
          "description": "double NCM extend single NCM We do not care that this is comparatively slow as it is called only few times anyway TODO make faster better lookup system TODO otherwise case TODO eats another performance",
          "hierarchy": "BioInf MCFoldDP",
          "module": "BioInf.MCFoldDP",
          "name": "fncmDS",
          "normalized": "MotifDB-\u003ePrimary-\u003eConstraint-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eTable-\u003eDouble",
          "package": "MC-Fold-DP",
          "partial": "DS",
          "signature": "MotifDB-\u003ePrimary-\u003eConstraint-\u003eInt-\u003eInt-\u003eInt-\u003eInt-\u003eTable-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MC-Fold-DP/docs/BioInf-MCFoldDP.html#v:fncmDS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esingleNCM insertion\n\u003c/p\u003e",
          "module": "BioInf.MCFoldDP",
          "name": "fncmSingle",
          "package": "MC-Fold-DP",
          "signature": "MotifDB -\u003e Primary -\u003e Constraint -\u003e Int -\u003e Int -\u003e Double",
          "source": "src/BioInf-MCFoldDP.html#fncmSingle",
          "type": "function"
        },
        "index": {
          "description": "singleNCM insertion",
          "hierarchy": "BioInf MCFoldDP",
          "module": "BioInf.MCFoldDP",
          "name": "fncmSingle",
          "normalized": "MotifDB-\u003ePrimary-\u003eConstraint-\u003eInt-\u003eInt-\u003eDouble",
          "package": "MC-Fold-DP",
          "partial": "Single",
          "signature": "MotifDB-\u003ePrimary-\u003eConstraint-\u003eInt-\u003eInt-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MC-Fold-DP/docs/BioInf-MCFoldDP.html#v:fncmSingle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFolding wrapper\n\u003c/p\u003e",
          "module": "BioInf.MCFoldDP",
          "name": "fold",
          "package": "MC-Fold-DP",
          "signature": "MotifDB -\u003e Primary -\u003e Constraint -\u003e Tables",
          "source": "src/BioInf-MCFoldDP.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Folding wrapper",
          "hierarchy": "BioInf MCFoldDP",
          "module": "BioInf.MCFoldDP",
          "name": "fold",
          "normalized": "MotifDB-\u003ePrimary-\u003eConstraint-\u003eTables",
          "package": "MC-Fold-DP",
          "signature": "MotifDB-\u003ePrimary-\u003eConstraint-\u003eTables",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MC-Fold-DP/docs/BioInf-MCFoldDP.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFolding in the ST monad. the number of dncm tables is the same as the\n number of known double NCMs.\n\u003c/p\u003e",
          "module": "BioInf.MCFoldDP",
          "name": "foldST",
          "package": "MC-Fold-DP",
          "signature": "MotifDB -\u003e Primary -\u003e Constraint -\u003e ST s Tables",
          "source": "src/BioInf-MCFoldDP.html#foldST",
          "type": "function"
        },
        "index": {
          "description": "Folding in the ST monad the number of dncm tables is the same as the number of known double NCMs",
          "hierarchy": "BioInf MCFoldDP",
          "module": "BioInf.MCFoldDP",
          "name": "foldST",
          "normalized": "MotifDB-\u003ePrimary-\u003eConstraint-\u003eST a Tables",
          "package": "MC-Fold-DP",
          "partial": "ST",
          "signature": "MotifDB-\u003ePrimary-\u003eConstraint-\u003eST s Tables",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MC-Fold-DP/docs/BioInf-MCFoldDP.html#v:foldST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGive a certain \u003ccode\u003e\u003ca\u003ebonusScore\u003c/a\u003e\u003c/code\u003e for the constraints that have been fulfilled.\n\u003c/p\u003e\u003cp\u003eTODO should we be more lenient with constraints that would increase the\n total energy?\n\u003c/p\u003e",
          "module": "BioInf.MCFoldDP",
          "name": "giveBonus",
          "package": "MC-Fold-DP",
          "signature": "Constraint -\u003e Int -\u003e Int -\u003e Double",
          "source": "src/BioInf-MCFoldDP.html#giveBonus",
          "type": "function"
        },
        "index": {
          "description": "Give certain bonusScore for the constraints that have been fulfilled TODO should we be more lenient with constraints that would increase the total energy",
          "hierarchy": "BioInf MCFoldDP",
          "module": "BioInf.MCFoldDP",
          "name": "giveBonus",
          "normalized": "Constraint-\u003eInt-\u003eInt-\u003eDouble",
          "package": "MC-Fold-DP",
          "partial": "Bonus",
          "signature": "Constraint-\u003eInt-\u003eInt-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MC-Fold-DP/docs/BioInf-MCFoldDP.html#v:giveBonus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default two-dim table\n\u003c/p\u003e",
          "module": "BioInf.MCFoldDP",
          "name": "mkTable2",
          "package": "MC-Fold-DP",
          "signature": "t -\u003e m (PrimArray (t, t) b, PrimArrayM (t, t) b m)",
          "source": "src/BioInf-MCFoldDP.html#mkTable2",
          "type": "function"
        },
        "index": {
          "description": "The default two-dim table",
          "hierarchy": "BioInf MCFoldDP",
          "module": "BioInf.MCFoldDP",
          "name": "mkTable2",
          "normalized": "a-\u003eb(PrimArray(a,a)c,PrimArrayM(a,a)c b)",
          "package": "MC-Fold-DP",
          "partial": "Table",
          "signature": "t-\u003em(PrimArray(t,t)b,PrimArrayM(t,t)b m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MC-Fold-DP/docs/BioInf-MCFoldDP.html#v:mkTable2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a 2-dim table\n\u003c/p\u003e",
          "module": "BioInf.MCFoldDP",
          "name": "mkTable2With",
          "package": "MC-Fold-DP",
          "signature": "b -\u003e t -\u003e m (PrimArray (t, t) b, PrimArrayM (t, t) b m)",
          "source": "src/BioInf-MCFoldDP.html#mkTable2With",
          "type": "function"
        },
        "index": {
          "description": "Create dim table",
          "hierarchy": "BioInf MCFoldDP",
          "module": "BioInf.MCFoldDP",
          "name": "mkTable2With",
          "normalized": "a-\u003eb-\u003ec(PrimArray(b,b)a,PrimArrayM(b,b)a c)",
          "package": "MC-Fold-DP",
          "partial": "Table With",
          "signature": "b-\u003et-\u003em(PrimArray(t,t)b,PrimArrayM(t,t)b m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MC-Fold-DP/docs/BioInf-MCFoldDP.html#v:mkTable2With"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BioInf.MCFoldDP",
          "name": "vuminimum",
          "package": "MC-Fold-DP",
          "signature": "Vector a -\u003e a",
          "source": "src/BioInf-MCFoldDP.html#vuminimum",
          "type": "function"
        },
        "index": {
          "hierarchy": "BioInf MCFoldDP",
          "module": "BioInf.MCFoldDP",
          "name": "vuminimum",
          "normalized": "Vector a-\u003ea",
          "package": "MC-Fold-DP",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MC-Fold-DP/docs/BioInf-MCFoldDP.html#v:vuminimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eminimum for unboxed vectors, capturing possible 0-length. Vectors in this\n algorithm always carry positional information.\n\u003c/p\u003e\u003cp\u003eTODO the next version of the vector library should handle \u003ca\u003eVU.map snd\u003c/a\u003e\n better\n\u003c/p\u003e",
          "module": "BioInf.MCFoldDP",
          "name": "vuminimumP",
          "package": "MC-Fold-DP",
          "signature": "Vector (t, a) -\u003e a",
          "source": "src/BioInf-MCFoldDP.html#vuminimumP",
          "type": "function"
        },
        "index": {
          "description": "minimum for unboxed vectors capturing possible length Vectors in this algorithm always carry positional information TODO the next version of the vector library should handle VU.map snd better",
          "hierarchy": "BioInf MCFoldDP",
          "module": "BioInf.MCFoldDP",
          "name": "vuminimumP",
          "normalized": "Vector(a,b)-\u003eb",
          "package": "MC-Fold-DP",
          "signature": "Vector(t,a)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MC-Fold-DP/docs/BioInf-MCFoldDP.html#v:vuminimumP"
      }
    }
  ]
]