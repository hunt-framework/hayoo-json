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
        "word": "som"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTools for identifying patterns in data.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Datamining.Clustering.Classifier",
          "name": "Classifier",
          "package": "som",
          "source": "src/Data-Datamining-Clustering-Classifier.html",
          "type": "module"
        },
        "index": {
          "description": "Tools for identifying patterns in data",
          "hierarchy": "Data Datamining Clustering Classifier",
          "module": "Data.Datamining.Clustering.Classifier",
          "name": "Classifier",
          "package": "som",
          "partial": "Classifier",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-Classifier.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA machine which learns to classify input patterns. \n   Minimal complete definition: \u003ccode\u003etrainBatch\u003c/code\u003e, \u003ccode\u003ereportAndTrain\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Classifier",
          "name": "Classifier",
          "package": "som",
          "source": "src/Data-Datamining-Clustering-Classifier.html#Classifier",
          "type": "class"
        },
        "index": {
          "description": "machine which learns to classify input patterns Minimal complete definition trainBatch reportAndTrain",
          "hierarchy": "Data Datamining Clustering Classifier",
          "module": "Data.Datamining.Clustering.Classifier",
          "name": "Classifier",
          "package": "som",
          "partial": "Classifier",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-Classifier.html#t:Classifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eclassify c target\u003c/code\u003e returns the index of the node in \u003ccode\u003ec\u003c/code\u003e \n   whose model best matches the \u003ccode\u003etarget\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Classifier",
          "name": "classify",
          "package": "som",
          "signature": "c k p -\u003e p -\u003e k",
          "source": "src/Data-Datamining-Clustering-Classifier.html#classify",
          "type": "method"
        },
        "index": {
          "description": "classify target returns the index of the node in whose model best matches the target",
          "hierarchy": "Data Datamining Clustering Classifier",
          "module": "Data.Datamining.Clustering.Classifier",
          "name": "classify",
          "normalized": "a b c-\u003ec-\u003eb",
          "package": "som",
          "signature": "c k p-\u003ep-\u003ek",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-Classifier.html#v:classify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eclassifyAndTrain\u003c/a\u003e\u003c/code\u003e c target\u003c/code\u003e returns a tuple containing the\n   index of the node in \u003ccode\u003ec\u003c/code\u003e whose model best matches the input\n   \u003ccode\u003etarget\u003c/code\u003e, and a modified copy of the classifier \u003ccode\u003ec\u003c/code\u003e that has\n   partially learned the \u003ccode\u003etarget\u003c/code\u003e. Invoking \u003ccode\u003eclassifyAndTrain c p\u003c/code\u003e\n   may be faster than invoking \u003ccode\u003e(p \u003ccode\u003e\u003ca\u003eclassify\u003c/a\u003e\u003c/code\u003e c, train c p)\u003c/code\u003e, but \n   they\n   should give identical results.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Classifier",
          "name": "classifyAndTrain",
          "package": "som",
          "signature": "c k p -\u003e p -\u003e (k, c k p)",
          "source": "src/Data-Datamining-Clustering-Classifier.html#classifyAndTrain",
          "type": "method"
        },
        "index": {
          "description": "classifyAndTrain target returns tuple containing the index of the node in whose model best matches the input target and modified copy of the classifier that has partially learned the target Invoking classifyAndTrain may be faster than invoking classify train but they should give identical results",
          "hierarchy": "Data Datamining Clustering Classifier",
          "module": "Data.Datamining.Clustering.Classifier",
          "name": "classifyAndTrain",
          "normalized": "a b c-\u003ec-\u003e(b,a b c)",
          "package": "som",
          "partial": "And Train",
          "signature": "c k p-\u003ep-\u003e(k,c k p)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-Classifier.html#v:classifyAndTrain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ediffAndTrain\u003c/a\u003e\u003c/code\u003e c target\u003c/code\u003e returns a tuple containing:\n   1. The indices of all nodes in \u003ccode\u003ec\u003c/code\u003e, paired with the difference\n      between \u003ccode\u003etarget\u003c/code\u003e and the node's model\n   2. A modified copy of the classifier \u003ccode\u003ec\u003c/code\u003e that has partially\n      learned the \u003ccode\u003etarget\u003c/code\u003e.\n   Invoking \u003ccode\u003ediffAndTrain c p\u003c/code\u003e may be faster than invoking\n   \u003ccode\u003e(p \u003ccode\u003ediff\u003c/code\u003e c, train c p)\u003c/code\u003e, but they should give identical\n   results.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Classifier",
          "name": "diffAndTrain",
          "package": "som",
          "signature": "c k p -\u003e p -\u003e ([(k, v)], c k p)",
          "source": "src/Data-Datamining-Clustering-Classifier.html#diffAndTrain",
          "type": "method"
        },
        "index": {
          "description": "diffAndTrain target returns tuple containing The indices of all nodes in paired with the difference between target and the node model modified copy of the classifier that has partially learned the target Invoking diffAndTrain may be faster than invoking diff train but they should give identical results",
          "hierarchy": "Data Datamining Clustering Classifier",
          "module": "Data.Datamining.Clustering.Classifier",
          "name": "diffAndTrain",
          "normalized": "a b c-\u003ec-\u003e([(b,d)],a b c)",
          "package": "som",
          "partial": "And Train",
          "signature": "c k p-\u003ep-\u003e([(k,v)],c k p)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-Classifier.html#v:diffAndTrain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edifferences\u003c/a\u003e\u003c/code\u003e c target\u003c/code\u003e returns the indices of all nodes in \n   \u003ccode\u003ec\u003c/code\u003e, paired with the difference between \u003ccode\u003etarget\u003c/code\u003e and the \n   node's model.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Classifier",
          "name": "differences",
          "package": "som",
          "signature": "c k p -\u003e p -\u003e [(k, v)]",
          "source": "src/Data-Datamining-Clustering-Classifier.html#differences",
          "type": "method"
        },
        "index": {
          "description": "differences target returns the indices of all nodes in paired with the difference between target and the node model",
          "hierarchy": "Data Datamining Clustering Classifier",
          "module": "Data.Datamining.Clustering.Classifier",
          "name": "differences",
          "normalized": "a b c-\u003ec-\u003e[(b,d)]",
          "package": "som",
          "signature": "c k p-\u003ep-\u003e[(k,v)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-Classifier.html#v:differences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the current models of the classifier.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Classifier",
          "name": "models",
          "package": "som",
          "signature": "c k p -\u003e [p]",
          "source": "src/Data-Datamining-Clustering-Classifier.html#models",
          "type": "method"
        },
        "index": {
          "description": "Returns the current models of the classifier",
          "hierarchy": "Data Datamining Clustering Classifier",
          "module": "Data.Datamining.Clustering.Classifier",
          "name": "models",
          "normalized": "a b c-\u003e[c]",
          "package": "som",
          "signature": "c k p-\u003e[p]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-Classifier.html#v:models"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of models this classifier can learn.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Classifier",
          "name": "numModels",
          "package": "som",
          "signature": "c k p -\u003e Int",
          "source": "src/Data-Datamining-Clustering-Classifier.html#numModels",
          "type": "method"
        },
        "index": {
          "description": "Returns the number of models this classifier can learn",
          "hierarchy": "Data Datamining Clustering Classifier",
          "module": "Data.Datamining.Clustering.Classifier",
          "name": "numModels",
          "normalized": "a b c-\u003eInt",
          "package": "som",
          "partial": "Models",
          "signature": "c k p-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-Classifier.html#v:numModels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ereportAndTrain\u003c/a\u003e\u003c/code\u003e c f target\u003c/code\u003e returns a tuple containing:\n   1. The index of the node in \u003ccode\u003ec\u003c/code\u003e whose model best matches the\n      input \u003ccode\u003etarget\u003c/code\u003e\n   2. The indices of all nodes in \u003ccode\u003ec\u003c/code\u003e, paired with the difference\n      between \u003ccode\u003etarget\u003c/code\u003e and the node's model\n   3. A modified copy of the classifier \u003ccode\u003ec\u003c/code\u003e that has partially\n      learned the \u003ccode\u003etarget\u003c/code\u003e\n   Invoking \u003ccode\u003ediffAndTrain c p\u003c/code\u003e may be faster than invoking\n   \u003ccode\u003e(p \u003ccode\u003ediff\u003c/code\u003e c, train c p)\u003c/code\u003e, but they should give identical\n   results.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Classifier",
          "name": "reportAndTrain",
          "package": "som",
          "signature": "c k p -\u003e p -\u003e (k, [(k, v)], c k p)",
          "source": "src/Data-Datamining-Clustering-Classifier.html#reportAndTrain",
          "type": "method"
        },
        "index": {
          "description": "reportAndTrain target returns tuple containing The index of the node in whose model best matches the input target The indices of all nodes in paired with the difference between target and the node model modified copy of the classifier that has partially learned the target Invoking diffAndTrain may be faster than invoking diff train but they should give identical results",
          "hierarchy": "Data Datamining Clustering Classifier",
          "module": "Data.Datamining.Clustering.Classifier",
          "name": "reportAndTrain",
          "normalized": "a b c-\u003ec-\u003e(b,[(b,d)],a b c)",
          "package": "som",
          "partial": "And Train",
          "signature": "c k p-\u003ep-\u003e(k,[(k,v)],c k p)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-Classifier.html#v:reportAndTrain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of index/model pairs.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Classifier",
          "name": "toList",
          "package": "som",
          "signature": "c k p -\u003e [(k, p)]",
          "source": "src/Data-Datamining-Clustering-Classifier.html#toList",
          "type": "method"
        },
        "index": {
          "description": "Returns list of index model pairs",
          "hierarchy": "Data Datamining Clustering Classifier",
          "module": "Data.Datamining.Clustering.Classifier",
          "name": "toList",
          "normalized": "a b c-\u003e[(b,c)]",
          "package": "som",
          "partial": "List",
          "signature": "c k p-\u003e[(k,p)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-Classifier.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etrain\u003c/a\u003e\u003c/code\u003e c target\u003c/code\u003e returns a modified copy\n   of the classifier \u003ccode\u003ec\u003c/code\u003e that has partially learned the \u003ccode\u003etarget\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Classifier",
          "name": "train",
          "package": "som",
          "signature": "c k p -\u003e p -\u003e c k p",
          "source": "src/Data-Datamining-Clustering-Classifier.html#train",
          "type": "method"
        },
        "index": {
          "description": "train target returns modified copy of the classifier that has partially learned the target",
          "hierarchy": "Data Datamining Clustering Classifier",
          "module": "Data.Datamining.Clustering.Classifier",
          "name": "train",
          "normalized": "a b c-\u003ec-\u003ea b c",
          "package": "som",
          "signature": "c k p-\u003ep-\u003ec k p",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-Classifier.html#v:train"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etrainBatch\u003c/a\u003e\u003c/code\u003e c targets\u003c/code\u003e returns a modified copy\n   of the classifier \u003ccode\u003ec\u003c/code\u003e that has partially learned the \u003ccode\u003etargets\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.Classifier",
          "name": "trainBatch",
          "package": "som",
          "signature": "c k p -\u003e [p] -\u003e c k p",
          "source": "src/Data-Datamining-Clustering-Classifier.html#trainBatch",
          "type": "method"
        },
        "index": {
          "description": "trainBatch targets returns modified copy of the classifier that has partially learned the targets",
          "hierarchy": "Data Datamining Clustering Classifier",
          "module": "Data.Datamining.Clustering.Classifier",
          "name": "trainBatch",
          "normalized": "a b c-\u003e[c]-\u003ea b c",
          "package": "som",
          "partial": "Batch",
          "signature": "c k p-\u003e[p]-\u003ec k p",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-Classifier.html#v:trainBatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA modified Kohonen Self-organising Map (SOM) which supports a\n time-independent learning function. (See\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSOM\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e for a description of a SOM.)\n\u003c/p\u003e\u003cp\u003eReferences:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Rougier, N. & Boniface, Y. (2011). Dynamic self-organising map.\n   Neurocomputing, 74 (11), 1840-1847. \n\u003c/li\u003e\u003cli\u003e Kohonen, T. (1982). Self-organized formation of topologically \n   correct feature maps. Biological Cybernetics, 43 (1), 59&#8211;69.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Datamining.Clustering.DSOM",
          "name": "DSOM",
          "package": "som",
          "source": "src/Data-Datamining-Clustering-DSOM.html",
          "type": "module"
        },
        "index": {
          "description": "modified Kohonen Self-organising Map SOM which supports time-independent learning function See SOM for description of SOM References Rougier Boniface Dynamic self-organising map Neurocomputing Kohonen Self-organized formation of topologically correct feature maps Biological Cybernetics",
          "hierarchy": "Data Datamining Clustering DSOM",
          "module": "Data.Datamining.Clustering.DSOM",
          "name": "DSOM",
          "package": "som",
          "partial": "DSOM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-DSOM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Self-Organising Map (DSOM).\n\u003c/p\u003e\u003cp\u003eAlthough \u003ccode\u003eDSOM\u003c/code\u003e implements \u003ccode\u003eGridMap\u003c/code\u003e, most users will only need the\n   interface provided by \u003ccode\u003eData.Datamining.Clustering.Classifier\u003c/code\u003e. If\n   you chose to use the \u003ccode\u003eGridMap\u003c/code\u003e functions, please note:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The functions \u003ccode\u003eadjust\u003c/code\u003e, and \u003ccode\u003eadjustWithKey\u003c/code\u003e do not increment the\n      counter. You can do so manually with \u003ccode\u003eincrementCounter\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The functions \u003ccode\u003emap\u003c/code\u003e and \u003ccode\u003emapWithKey\u003c/code\u003e are not implemented (they\n      just return an \u003ccode\u003eerror\u003c/code\u003e). It would be problematic to implement\n      them because the input DSOM and the output DSOM would have to\n      have the same \u003ccode\u003eMetric\u003c/code\u003e type.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Data.Datamining.Clustering.DSOM",
          "name": "DSOM",
          "package": "som",
          "source": "src/Data-Datamining-Clustering-DSOMInternal.html#DSOM",
          "type": "data"
        },
        "index": {
          "description": "Self-Organising Map DSOM Although DSOM implements GridMap most users will only need the interface provided by Data.Datamining.Clustering.Classifier If you chose to use the GridMap functions please note The functions adjust and adjustWithKey do not increment the counter You can do so manually with incrementCounter The functions map and mapWithKey are not implemented they just return an error It would be problematic to implement them because the input DSOM and the output DSOM would have to have the same Metric type",
          "hierarchy": "Data Datamining Clustering DSOM",
          "module": "Data.Datamining.Clustering.DSOM",
          "name": "DSOM",
          "package": "som",
          "partial": "DSOM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-DSOM.html#t:DSOM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a classifier with a custom learning function.\n   Usage is \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecustomDSOM\u003c/a\u003e\u003c/code\u003e gm g\u003c/code\u003e, where:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003egm\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The geometry and initial models for this classifier.\n   A reasonable choice here is \u003ccode\u003e\u003ccode\u003elazyGridMap\u003c/code\u003e g ps\u003c/code\u003e, where \u003ccode\u003eg\u003c/code\u003e is a\n   \u003ccode\u003e\u003ccode\u003eHexHexGrid\u003c/code\u003e\u003c/code\u003e, and \u003ccode\u003eps\u003c/code\u003e is a set of random patterns.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003ef\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A function used to determine the learning rate (for\n   adjusting the models in the classifier).\n   This function will be invoked with three parameters.\n   The first parameter will indicate how different the BMU is from\n   the input pattern.\n   The second parameter indicates how different the pattern of the\n   node currently being trained is from the input pattern.\n   The third parameter is the grid distance from the BMU to the node\n   currently being trained, as a fraction of the maximum grid\n   distance.\n   The output is the learning rate for that node (the amount by\n   which the node's model should be updated to match the target).\n   The learning rate should be between zero and one.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "[\"Data.Datamining.Clustering.DSOM\",\"Data.Datamining.Clustering.DSOMInternal\"]",
          "name": "customDSOM",
          "package": "som",
          "signature": "gm p -\u003e (Metric p -\u003e Metric p -\u003e Metric p -\u003e Metric p) -\u003e DSOM gm k p",
          "source": "src/Data-Datamining-Clustering-DSOMInternal.html#customDSOM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-DSOM.html#v:customDSOM\",\"http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-DSOMInternal.html#v:customDSOM\"]"
        },
        "index": {
          "description": "Creates classifier with custom learning function Usage is customDSOM gm where gm The geometry and initial models for this classifier reasonable choice here is lazyGridMap ps where is HexHexGrid and ps is set of random patterns function used to determine the learning rate for adjusting the models in the classifier This function will be invoked with three parameters The first parameter will indicate how different the BMU is from the input pattern The second parameter indicates how different the pattern of the node currently being trained is from the input pattern The third parameter is the grid distance from the BMU to the node currently being trained as fraction of the maximum grid distance The output is the learning rate for that node the amount by which the node model should be updated to match the target The learning rate should be between zero and one",
          "hierarchy": "Data Datamining Clustering DSOM",
          "module": "Data.Datamining.Clustering.DSOM",
          "name": "customDSOM",
          "normalized": "a b-\u003e(Metric b-\u003eMetric b-\u003eMetric b-\u003eMetric b)-\u003eDSOM a c b",
          "package": "som",
          "partial": "DSOM",
          "signature": "gm p-\u003e(Metric p-\u003eMetric p-\u003eMetric p-\u003eMetric p)-\u003eDSOM gm k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-DSOM.html#v:customDSOM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a classifier with a default (bell-shaped) learning\n   function. Usage is \u003ccode\u003e\u003ccode\u003e\u003ca\u003edefaultDSOM\u003c/a\u003e\u003c/code\u003e gm r w t\u003c/code\u003e, where:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003egm\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The geometry and initial models for this classifier.\n   A reasonable choice here is \u003ccode\u003e\u003ccode\u003elazyGridMap\u003c/code\u003e g ps\u003c/code\u003e, where \u003ccode\u003eg\u003c/code\u003e is a\n   \u003ccode\u003e\u003ccode\u003eHexHexGrid\u003c/code\u003e\u003c/code\u003e, and \u003ccode\u003eps\u003c/code\u003e is a set of random patterns.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003er\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e and [\u003ccode\u003ep\u003c/code\u003e] are the first two parameters to the\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003erougierLearningFunction\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "[\"Data.Datamining.Clustering.DSOM\",\"Data.Datamining.Clustering.DSOMInternal\"]",
          "name": "defaultDSOM",
          "package": "som",
          "signature": "gm p -\u003e Metric p -\u003e Metric p -\u003e DSOM gm k p",
          "source": "src/Data-Datamining-Clustering-DSOMInternal.html#defaultDSOM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-DSOM.html#v:defaultDSOM\",\"http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-DSOMInternal.html#v:defaultDSOM\"]"
        },
        "index": {
          "description": "Creates classifier with default bell-shaped learning function Usage is defaultDSOM gm where gm The geometry and initial models for this classifier reasonable choice here is lazyGridMap ps where is HexHexGrid and ps is set of random patterns and are the first two parameters to the rougierLearningFunction",
          "hierarchy": "Data Datamining Clustering DSOM",
          "module": "Data.Datamining.Clustering.DSOM",
          "name": "defaultDSOM",
          "normalized": "a b-\u003eMetric b-\u003eMetric b-\u003eDSOM a c b",
          "package": "som",
          "partial": "DSOM",
          "signature": "gm p-\u003eMetric p-\u003eMetric p-\u003eDSOM gm k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-DSOM.html#v:defaultDSOM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfigures a learning function that depends not on the time, but\n   on how good a model we already have for the target. If the\n   BMU is an exact match for the target, no learning occurs.\n   Usage is \u003ccode\u003e\u003ccode\u003e\u003ca\u003erougierLearningFunction\u003c/a\u003e\u003c/code\u003e r p\u003c/code\u003e, where \u003ccode\u003er\u003c/code\u003e is the\n   maximal learning rate (0 \u003c= r \u003c= 1), and \u003ccode\u003ep\u003c/code\u003e is the elasticity.\n\u003c/p\u003e\u003cp\u003eNOTE: When using this learning function, ensure that\n   \u003ccode\u003eabs . difference\u003c/code\u003e is always between 0 and 1, inclusive. Otherwise\n   you may get invalid learning rates.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.DSOM\",\"Data.Datamining.Clustering.DSOMInternal\"]",
          "name": "rougierLearningFunction",
          "package": "som",
          "signature": "a -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a",
          "source": "src/Data-Datamining-Clustering-DSOMInternal.html#rougierLearningFunction",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-DSOM.html#v:rougierLearningFunction\",\"http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-DSOMInternal.html#v:rougierLearningFunction\"]"
        },
        "index": {
          "description": "Configures learning function that depends not on the time but on how good model we already have for the target If the BMU is an exact match for the target no learning occurs Usage is rougierLearningFunction where is the maximal learning rate and is the elasticity NOTE When using this learning function ensure that abs difference is always between and inclusive Otherwise you may get invalid learning rates",
          "hierarchy": "Data Datamining Clustering DSOM",
          "module": "Data.Datamining.Clustering.DSOM",
          "name": "rougierLearningFunction",
          "normalized": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea",
          "package": "som",
          "partial": "Learning Function",
          "signature": "a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-DSOM.html#v:rougierLearningFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the grid and current models from the DSOM.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.DSOM\",\"Data.Datamining.Clustering.DSOMInternal\"]",
          "name": "toGridMap",
          "package": "som",
          "signature": "DSOM gm k p -\u003e gm p",
          "source": "src/Data-Datamining-Clustering-DSOMInternal.html#toGridMap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-DSOM.html#v:toGridMap\",\"http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-DSOMInternal.html#v:toGridMap\"]"
        },
        "index": {
          "description": "Extracts the grid and current models from the DSOM",
          "hierarchy": "Data Datamining Clustering DSOM",
          "module": "Data.Datamining.Clustering.DSOM",
          "name": "toGridMap",
          "normalized": "DSOM a b c-\u003ea c",
          "package": "som",
          "partial": "Grid Map",
          "signature": "DSOM gm k p-\u003egm p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-DSOM.html#v:toGridMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrains the specified node and the neighbourood around it to better\n   match a target.\n   Most users should use \u003ccode\u003etrain\u003c/code\u003e, which automatically determines\n   the BMU and trains it and its neighbourhood.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.DSOM\",\"Data.Datamining.Clustering.DSOMInternal\"]",
          "name": "trainNeighbourhood",
          "package": "som",
          "signature": "DSOM gm t p -\u003e k -\u003e p -\u003e DSOM gm k p",
          "source": "src/Data-Datamining-Clustering-DSOMInternal.html#trainNeighbourhood",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-DSOM.html#v:trainNeighbourhood\",\"http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-DSOMInternal.html#v:trainNeighbourhood\"]"
        },
        "index": {
          "description": "Trains the specified node and the neighbourood around it to better match target Most users should use train which automatically determines the BMU and trains it and its neighbourhood",
          "hierarchy": "Data Datamining Clustering DSOM",
          "module": "Data.Datamining.Clustering.DSOM",
          "name": "trainNeighbourhood",
          "normalized": "DSOM a b c-\u003ed-\u003ec-\u003eDSOM a d c",
          "package": "som",
          "partial": "Neighbourhood",
          "signature": "DSOM gm t p-\u003ek-\u003ep-\u003eDSOM gm k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-DSOM.html#v:trainNeighbourhood"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing private \u003ccode\u003eDSOM\u003c/code\u003e internals. Most developers should\n use \u003ccode\u003eDSOM\u003c/code\u003e instead. This module is subject to change without notice.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Datamining.Clustering.DSOMInternal",
          "name": "DSOMInternal",
          "package": "som",
          "source": "src/Data-Datamining-Clustering-DSOMInternal.html",
          "type": "module"
        },
        "index": {
          "description": "module containing private DSOM internals Most developers should use DSOM instead This module is subject to change without notice",
          "hierarchy": "Data Datamining Clustering DSOMInternal",
          "module": "Data.Datamining.Clustering.DSOMInternal",
          "name": "DSOMInternal",
          "package": "som",
          "partial": "DSOMInternal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-DSOMInternal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Self-Organising Map (DSOM).\n\u003c/p\u003e\u003cp\u003eAlthough \u003ccode\u003eDSOM\u003c/code\u003e implements \u003ccode\u003eGridMap\u003c/code\u003e, most users will only need the\n   interface provided by \u003ccode\u003eData.Datamining.Clustering.Classifier\u003c/code\u003e. If\n   you chose to use the \u003ccode\u003eGridMap\u003c/code\u003e functions, please note:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The functions \u003ccode\u003eadjust\u003c/code\u003e, and \u003ccode\u003eadjustWithKey\u003c/code\u003e do not increment the\n      counter. You can do so manually with \u003ccode\u003eincrementCounter\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The functions \u003ccode\u003emap\u003c/code\u003e and \u003ccode\u003emapWithKey\u003c/code\u003e are not implemented (they\n      just return an \u003ccode\u003eerror\u003c/code\u003e). It would be problematic to implement\n      them because the input DSOM and the output DSOM would have to\n      have the same \u003ccode\u003eMetric\u003c/code\u003e type.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Data.Datamining.Clustering.DSOMInternal",
          "name": "DSOM",
          "package": "som",
          "source": "src/Data-Datamining-Clustering-DSOMInternal.html#DSOM",
          "type": "data"
        },
        "index": {
          "description": "Self-Organising Map DSOM Although DSOM implements GridMap most users will only need the interface provided by Data.Datamining.Clustering.Classifier If you chose to use the GridMap functions please note The functions adjust and adjustWithKey do not increment the counter You can do so manually with incrementCounter The functions map and mapWithKey are not implemented they just return an error It would be problematic to implement them because the input DSOM and the output DSOM would have to have the same Metric type",
          "hierarchy": "Data Datamining Clustering DSOMInternal",
          "module": "Data.Datamining.Clustering.DSOMInternal",
          "name": "DSOM",
          "package": "som",
          "partial": "DSOM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-DSOMInternal.html#t:DSOM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.DSOMInternal",
          "name": "DSOM",
          "package": "som",
          "signature": "DSOM",
          "source": "src/Data-Datamining-Clustering-DSOMInternal.html#DSOM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering DSOMInternal",
          "module": "Data.Datamining.Clustering.DSOMInternal",
          "name": "DSOM",
          "package": "som",
          "partial": "DSOM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-DSOMInternal.html#v:DSOM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.DSOMInternal",
          "name": "adjustNode",
          "package": "som",
          "signature": "gm p -\u003e (Metric p -\u003e Metric p -\u003e Metric p) -\u003e p -\u003e k -\u003e k -\u003e p -\u003e p",
          "source": "src/Data-Datamining-Clustering-DSOMInternal.html#adjustNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering DSOMInternal",
          "module": "Data.Datamining.Clustering.DSOMInternal",
          "name": "adjustNode",
          "normalized": "a b-\u003e(Metric b-\u003eMetric b-\u003eMetric b)-\u003eb-\u003ec-\u003ec-\u003eb-\u003eb",
          "package": "som",
          "partial": "Node",
          "signature": "gm p-\u003e(Metric p-\u003eMetric p-\u003eMetric p)-\u003ep-\u003ek-\u003ek-\u003ep-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-DSOMInternal.html#v:adjustNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.DSOMInternal",
          "name": "justTrain",
          "package": "som",
          "signature": "DSOM gm t p -\u003e p -\u003e DSOM gm (Index (gm p)) p",
          "source": "src/Data-Datamining-Clustering-DSOMInternal.html#justTrain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering DSOMInternal",
          "module": "Data.Datamining.Clustering.DSOMInternal",
          "name": "justTrain",
          "normalized": "DSOM a b c-\u003ec-\u003eDSOM a(Index(a c))c",
          "package": "som",
          "partial": "Train",
          "signature": "DSOM gm t p-\u003ep-\u003eDSOM gm(Index(gm p))p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-DSOMInternal.html#v:justTrain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.DSOMInternal",
          "name": "sGridMap",
          "package": "som",
          "signature": "gm p",
          "source": "src/Data-Datamining-Clustering-DSOMInternal.html#DSOM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering DSOMInternal",
          "module": "Data.Datamining.Clustering.DSOMInternal",
          "name": "sGridMap",
          "package": "som",
          "partial": "Grid Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-DSOMInternal.html#v:sGridMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.DSOMInternal",
          "name": "sLearningFunction",
          "package": "som",
          "signature": "Metric p -\u003e Metric p -\u003e Metric p -\u003e Metric p",
          "source": "src/Data-Datamining-Clustering-DSOMInternal.html#DSOM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering DSOMInternal",
          "module": "Data.Datamining.Clustering.DSOMInternal",
          "name": "sLearningFunction",
          "normalized": "Metric a-\u003eMetric a-\u003eMetric a-\u003eMetric a",
          "package": "som",
          "partial": "Learning Function",
          "signature": "Metric p-\u003eMetric p-\u003eMetric p-\u003eMetric p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-DSOMInternal.html#v:sLearningFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.DSOMInternal",
          "name": "scaleDistance",
          "package": "som",
          "signature": "Int -\u003e Int -\u003e a",
          "source": "src/Data-Datamining-Clustering-DSOMInternal.html#scaleDistance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering DSOMInternal",
          "module": "Data.Datamining.Clustering.DSOMInternal",
          "name": "scaleDistance",
          "normalized": "Int-\u003eInt-\u003ea",
          "package": "som",
          "partial": "Distance",
          "signature": "Int-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-DSOMInternal.html#v:scaleDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Kohonen Self-organising Map (SOM). A SOM maps input patterns onto\n a regular grid (usually two-dimensional) where each node in the grid\n is a model of the input data, and does so using a method which\n ensures that any topological relationships within the input data are\n also represented in the grid. This implementation supports the use\n of non-numeric patterns.\n\u003c/p\u003e\u003cp\u003eIn layman's terms, a SOM can be useful when you you want to discover\n the underlying structure of some data. A tutorial is available at\n \u003ca\u003ehttps://github.com/mhwombat/som/wiki\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eNOTES: \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Version 5.0 fixed a bug in the \u003ccode\u003e\u003ccode\u003edecayingGaussian\u003c/code\u003e\u003c/code\u003e function. If\n   you use \u003ccode\u003e\u003ccode\u003edefaultSOM\u003c/code\u003e\u003c/code\u003e (which uses this function), your SOM\n   should now learn more quickly.\n\u003c/li\u003e\u003cli\u003e The \u003ccode\u003egaussian\u003c/code\u003e function has been removed because it is not as\n   useful for SOMs as I originally thought. It was originally designed\n   to be used as a factor in a learning function. However, in most\n   cases the user will want to introduce a time decay into the\n   exponent, rather than simply multiply by a factor.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eReferences:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Kohonen, T. (1982). Self-organized formation of topologically \n   correct feature maps. Biological Cybernetics, 43 (1), 59&#8211;69.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.Datamining.Clustering.SOM",
          "name": "SOM",
          "package": "som",
          "source": "src/Data-Datamining-Clustering-SOM.html",
          "type": "module"
        },
        "index": {
          "description": "Kohonen Self-organising Map SOM SOM maps input patterns onto regular grid usually two-dimensional where each node in the grid is model of the input data and does so using method which ensures that any topological relationships within the input data are also represented in the grid This implementation supports the use of non-numeric patterns In layman terms SOM can be useful when you you want to discover the underlying structure of some data tutorial is available at https github.com mhwombat som wiki NOTES Version fixed bug in the decayingGaussian function If you use defaultSOM which uses this function your SOM should now learn more quickly The gaussian function has been removed because it is not as useful for SOMs as originally thought It was originally designed to be used as factor in learning function However in most cases the user will want to introduce time decay into the exponent rather than simply multiply by factor References Kohonen Self-organized formation of topologically correct feature maps Biological Cybernetics",
          "hierarchy": "Data Datamining Clustering SOM",
          "module": "Data.Datamining.Clustering.SOM",
          "name": "SOM",
          "package": "som",
          "partial": "SOM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typical learning function for classifiers.\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDecayingGaussian\u003c/a\u003e\u003c/code\u003e r0 rf w0 wf tf\u003c/code\u003e returns a bell curve-shaped\n   function. At time zero, the maximum learning rate (applied to the\n   BMU) is \u003ccode\u003er0\u003c/code\u003e, and the neighbourhood width is \u003ccode\u003ew0\u003c/code\u003e. Over time the\n   bell curve shrinks and the learning rate tapers off, until at time\n   \u003ccode\u003etf\u003c/code\u003e, the maximum learning rate (applied to the BMU) is \u003ccode\u003erf\u003c/code\u003e,\n   and the neighbourhood width is \u003ccode\u003ewf\u003c/code\u003e. Normally the parameters\n   should be chosen such that:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 0 \u003c rf \u003c\u003c r0 \u003c 1\n\u003c/li\u003e\u003cli\u003e 0 \u003c wf \u003c\u003c w0\n\u003c/li\u003e\u003cli\u003e 0 \u003c tf\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003ewhere \u003c\u003c means \u003ca\u003eis much smaller than\u003c/a\u003e (not the Haskell \u003ccode\u003e\u003c\u003c\u003c/code\u003e\n   operator!)\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.SOM",
          "name": "DecayingGaussian",
          "package": "som",
          "source": "src/Data-Datamining-Clustering-SOMInternal.html#DecayingGaussian",
          "type": "data"
        },
        "index": {
          "description": "typical learning function for classifiers DecayingGaussian r0 rf w0 wf tf returns bell curve-shaped function At time zero the maximum learning rate applied to the BMU is r0 and the neighbourhood width is w0 Over time the bell curve shrinks and the learning rate tapers off until at time tf the maximum learning rate applied to the BMU is rf and the neighbourhood width is wf Normally the parameters should be chosen such that rf r0 wf w0 tf where means is much smaller than not the Haskell operator",
          "hierarchy": "Data Datamining Clustering SOM",
          "module": "Data.Datamining.Clustering.SOM",
          "name": "DecayingGaussian",
          "package": "som",
          "partial": "Decaying Gaussian",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOM.html#t:DecayingGaussian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Self-Organising Map (SOM).\n\u003c/p\u003e\u003cp\u003eAlthough \u003ccode\u003eSOM\u003c/code\u003e implements \u003ccode\u003eGridMap\u003c/code\u003e, most users will only need the\n   interface provided by \u003ccode\u003eData.Datamining.Clustering.Classifier\u003c/code\u003e. If\n   you chose to use the \u003ccode\u003eGridMap\u003c/code\u003e functions, please note:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The functions \u003ccode\u003eadjust\u003c/code\u003e, and \u003ccode\u003eadjustWithKey\u003c/code\u003e do not increment the\n      counter. You can do so manually with \u003ccode\u003eincrementCounter\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The functions \u003ccode\u003emap\u003c/code\u003e and \u003ccode\u003emapWithKey\u003c/code\u003e are not implemented (they\n      just return an \u003ccode\u003eerror\u003c/code\u003e). It would be problematic to implement\n      them because the input SOM and the output SOM would have to have\n      the same \u003ccode\u003eMetric\u003c/code\u003e type.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Data.Datamining.Clustering.SOM",
          "name": "SOM",
          "package": "som",
          "source": "src/Data-Datamining-Clustering-SOMInternal.html#SOM",
          "type": "data"
        },
        "index": {
          "description": "Self-Organising Map SOM Although SOM implements GridMap most users will only need the interface provided by Data.Datamining.Clustering.Classifier If you chose to use the GridMap functions please note The functions adjust and adjustWithKey do not increment the counter You can do so manually with incrementCounter The functions map and mapWithKey are not implemented they just return an error It would be problematic to implement them because the input SOM and the output SOM would have to have the same Metric type",
          "hierarchy": "Data Datamining Clustering SOM",
          "module": "Data.Datamining.Clustering.SOM",
          "name": "SOM",
          "package": "som",
          "partial": "SOM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOM.html#t:SOM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Datamining.Clustering.SOM\",\"Data.Datamining.Clustering.SOMInternal\"]",
          "name": "DecayingGaussian",
          "package": "som",
          "signature": "DecayingGaussian a a a a a",
          "source": "src/Data-Datamining-Clustering-SOMInternal.html#DecayingGaussian",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOM.html#v:DecayingGaussian\",\"http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOMInternal.html#v:DecayingGaussian\"]"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering SOM",
          "module": "Data.Datamining.Clustering.SOM",
          "name": "DecayingGaussian",
          "package": "som",
          "partial": "Decaying Gaussian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOM.html#v:DecayingGaussian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Datamining.Clustering.SOM\",\"Data.Datamining.Clustering.SOMInternal\"]",
          "name": "SOM",
          "package": "som",
          "signature": "SOM",
          "source": "src/Data-Datamining-Clustering-SOMInternal.html#SOM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOM.html#v:SOM\",\"http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOMInternal.html#v:SOM\"]"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering SOM",
          "module": "Data.Datamining.Clustering.SOM",
          "name": "SOM",
          "package": "som",
          "partial": "SOM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOM.html#v:SOM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA counter used as a \u003ca\u003etime\u003c/a\u003e parameter.\n   If you create the SOM with a counter value \u003ccode\u003e0\u003c/code\u003e, and don't\n   directly modify it, then the counter will represent the number\n   of patterns that this SOM has classified.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.SOM\",\"Data.Datamining.Clustering.SOMInternal\"]",
          "name": "counter",
          "package": "som",
          "signature": "t",
          "source": "src/Data-Datamining-Clustering-SOMInternal.html#SOM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOM.html#v:counter\",\"http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOMInternal.html#v:counter\"]"
        },
        "index": {
          "description": "counter used as time parameter If you create the SOM with counter value and don directly modify it then the counter will represent the number of patterns that this SOM has classified",
          "hierarchy": "Data Datamining Clustering SOM",
          "module": "Data.Datamining.Clustering.SOM",
          "name": "counter",
          "package": "som",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOM.html#v:counter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaps patterns to tiles in a regular grid.\n   In the context of a SOM, the tiles are called \u003ca\u003enodes\u003c/a\u003e\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.SOM\",\"Data.Datamining.Clustering.SOMInternal\"]",
          "name": "gridMap",
          "package": "som",
          "signature": "gm p",
          "source": "src/Data-Datamining-Clustering-SOMInternal.html#SOM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOM.html#v:gridMap\",\"http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOMInternal.html#v:gridMap\"]"
        },
        "index": {
          "description": "Maps patterns to tiles in regular grid In the context of SOM the tiles are called nodes",
          "hierarchy": "Data Datamining Clustering SOM",
          "module": "Data.Datamining.Clustering.SOM",
          "name": "gridMap",
          "package": "som",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOM.html#v:gridMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function used to update the nodes.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.SOM\",\"Data.Datamining.Clustering.SOMInternal\"]",
          "name": "learningFunction",
          "package": "som",
          "signature": "f",
          "source": "src/Data-Datamining-Clustering-SOMInternal.html#SOM",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOM.html#v:learningFunction\",\"http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOMInternal.html#v:learningFunction\"]"
        },
        "index": {
          "description": "The function used to update the nodes",
          "hierarchy": "Data Datamining Clustering SOM",
          "module": "Data.Datamining.Clustering.SOM",
          "name": "learningFunction",
          "package": "som",
          "partial": "Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOM.html#v:learningFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the grid and current models from the SOM.\n   A synonym for \u003ccode\u003e\u003ccode\u003e\u003ca\u003egridMap\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.SOM\",\"Data.Datamining.Clustering.SOMInternal\"]",
          "name": "toGridMap",
          "package": "som",
          "signature": "SOM f t gm k p -\u003e gm p",
          "source": "src/Data-Datamining-Clustering-SOMInternal.html#toGridMap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOM.html#v:toGridMap\",\"http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOMInternal.html#v:toGridMap\"]"
        },
        "index": {
          "description": "Extracts the grid and current models from the SOM synonym for gridMap",
          "hierarchy": "Data Datamining Clustering SOM",
          "module": "Data.Datamining.Clustering.SOM",
          "name": "toGridMap",
          "normalized": "SOM a b c d e-\u003ec e",
          "package": "som",
          "partial": "Grid Map",
          "signature": "SOM f t gm k p-\u003egm p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOM.html#v:toGridMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrains the specified node and the neighbourood around it to better\n   match a target.\n   Most users should use \u003ccode\u003etrain\u003c/code\u003e, which automatically determines\n   the BMU and trains it and its neighbourhood.\n\u003c/p\u003e",
          "module": "[\"Data.Datamining.Clustering.SOM\",\"Data.Datamining.Clustering.SOMInternal\"]",
          "name": "trainNeighbourhood",
          "package": "som",
          "signature": "SOM f t gm k p -\u003e Index (gm p) -\u003e p -\u003e SOM f t gm k p",
          "source": "src/Data-Datamining-Clustering-SOMInternal.html#trainNeighbourhood",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOM.html#v:trainNeighbourhood\",\"http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOMInternal.html#v:trainNeighbourhood\"]"
        },
        "index": {
          "description": "Trains the specified node and the neighbourood around it to better match target Most users should use train which automatically determines the BMU and trains it and its neighbourhood",
          "hierarchy": "Data Datamining Clustering SOM",
          "module": "Data.Datamining.Clustering.SOM",
          "name": "trainNeighbourhood",
          "normalized": "SOM a b c d e-\u003eIndex(c e)-\u003ee-\u003eSOM a b c d e",
          "package": "som",
          "partial": "Neighbourhood",
          "signature": "SOM f t gm k p-\u003eIndex(gm p)-\u003ep-\u003eSOM f t gm k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOM.html#v:trainNeighbourhood"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing private \u003ccode\u003eSOM\u003c/code\u003e internals. Most developers should\n use \u003ccode\u003eSOM\u003c/code\u003e instead. This module is subject to change without notice.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Datamining.Clustering.SOMInternal",
          "name": "SOMInternal",
          "package": "som",
          "source": "src/Data-Datamining-Clustering-SOMInternal.html",
          "type": "module"
        },
        "index": {
          "description": "module containing private SOM internals Most developers should use SOM instead This module is subject to change without notice",
          "hierarchy": "Data Datamining Clustering SOMInternal",
          "module": "Data.Datamining.Clustering.SOMInternal",
          "name": "SOMInternal",
          "package": "som",
          "partial": "SOMInternal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOMInternal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA learning function that updates all nodes with the same, constant\n   learning rate. This can be useful for testing.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.SOMInternal",
          "name": "ConstantFunction",
          "package": "som",
          "source": "src/Data-Datamining-Clustering-SOMInternal.html#ConstantFunction",
          "type": "data"
        },
        "index": {
          "description": "learning function that updates all nodes with the same constant learning rate This can be useful for testing",
          "hierarchy": "Data Datamining Clustering SOMInternal",
          "module": "Data.Datamining.Clustering.SOMInternal",
          "name": "ConstantFunction",
          "package": "som",
          "partial": "Constant Function",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOMInternal.html#t:ConstantFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typical learning function for classifiers.\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003eDecayingGaussian\u003c/a\u003e\u003c/code\u003e r0 rf w0 wf tf\u003c/code\u003e returns a bell curve-shaped\n   function. At time zero, the maximum learning rate (applied to the\n   BMU) is \u003ccode\u003er0\u003c/code\u003e, and the neighbourhood width is \u003ccode\u003ew0\u003c/code\u003e. Over time the\n   bell curve shrinks and the learning rate tapers off, until at time\n   \u003ccode\u003etf\u003c/code\u003e, the maximum learning rate (applied to the BMU) is \u003ccode\u003erf\u003c/code\u003e,\n   and the neighbourhood width is \u003ccode\u003ewf\u003c/code\u003e. Normally the parameters\n   should be chosen such that:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 0 \u003c rf \u003c\u003c r0 \u003c 1\n\u003c/li\u003e\u003cli\u003e 0 \u003c wf \u003c\u003c w0\n\u003c/li\u003e\u003cli\u003e 0 \u003c tf\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003ewhere \u003c\u003c means \u003ca\u003eis much smaller than\u003c/a\u003e (not the Haskell \u003ccode\u003e\u003c\u003c\u003c/code\u003e\n   operator!)\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.SOMInternal",
          "name": "DecayingGaussian",
          "package": "som",
          "source": "src/Data-Datamining-Clustering-SOMInternal.html#DecayingGaussian",
          "type": "data"
        },
        "index": {
          "description": "typical learning function for classifiers DecayingGaussian r0 rf w0 wf tf returns bell curve-shaped function At time zero the maximum learning rate applied to the BMU is r0 and the neighbourhood width is w0 Over time the bell curve shrinks and the learning rate tapers off until at time tf the maximum learning rate applied to the BMU is rf and the neighbourhood width is wf Normally the parameters should be chosen such that rf r0 wf w0 tf where means is much smaller than not the Haskell operator",
          "hierarchy": "Data Datamining Clustering SOMInternal",
          "module": "Data.Datamining.Clustering.SOMInternal",
          "name": "DecayingGaussian",
          "package": "som",
          "partial": "Decaying Gaussian",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOMInternal.html#t:DecayingGaussian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function used to adjust the models in a classifier.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.SOMInternal",
          "name": "LearningFunction",
          "package": "som",
          "source": "src/Data-Datamining-Clustering-SOMInternal.html#LearningFunction",
          "type": "class"
        },
        "index": {
          "description": "function used to adjust the models in classifier",
          "hierarchy": "Data Datamining Clustering SOMInternal",
          "module": "Data.Datamining.Clustering.SOMInternal",
          "name": "LearningFunction",
          "package": "som",
          "partial": "Learning Function",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOMInternal.html#t:LearningFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Self-Organising Map (SOM).\n\u003c/p\u003e\u003cp\u003eAlthough \u003ccode\u003eSOM\u003c/code\u003e implements \u003ccode\u003eGridMap\u003c/code\u003e, most users will only need the\n   interface provided by \u003ccode\u003eData.Datamining.Clustering.Classifier\u003c/code\u003e. If\n   you chose to use the \u003ccode\u003eGridMap\u003c/code\u003e functions, please note:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The functions \u003ccode\u003eadjust\u003c/code\u003e, and \u003ccode\u003eadjustWithKey\u003c/code\u003e do not increment the\n      counter. You can do so manually with \u003ccode\u003eincrementCounter\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The functions \u003ccode\u003emap\u003c/code\u003e and \u003ccode\u003emapWithKey\u003c/code\u003e are not implemented (they\n      just return an \u003ccode\u003eerror\u003c/code\u003e). It would be problematic to implement\n      them because the input SOM and the output SOM would have to have\n      the same \u003ccode\u003eMetric\u003c/code\u003e type.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Data.Datamining.Clustering.SOMInternal",
          "name": "SOM",
          "package": "som",
          "source": "src/Data-Datamining-Clustering-SOMInternal.html#SOM",
          "type": "data"
        },
        "index": {
          "description": "Self-Organising Map SOM Although SOM implements GridMap most users will only need the interface provided by Data.Datamining.Clustering.Classifier If you chose to use the GridMap functions please note The functions adjust and adjustWithKey do not increment the counter You can do so manually with incrementCounter The functions map and mapWithKey are not implemented they just return an error It would be problematic to implement them because the input SOM and the output SOM would have to have the same Metric type",
          "hierarchy": "Data Datamining Clustering SOMInternal",
          "module": "Data.Datamining.Clustering.SOMInternal",
          "name": "SOM",
          "package": "som",
          "partial": "SOM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOMInternal.html#t:SOM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA learning function that only updates the BMU and has a constant\n   learning rate.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.SOMInternal",
          "name": "StepFunction",
          "package": "som",
          "source": "src/Data-Datamining-Clustering-SOMInternal.html#StepFunction",
          "type": "data"
        },
        "index": {
          "description": "learning function that only updates the BMU and has constant learning rate",
          "hierarchy": "Data Datamining Clustering SOMInternal",
          "module": "Data.Datamining.Clustering.SOMInternal",
          "name": "StepFunction",
          "package": "som",
          "partial": "Step Function",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOMInternal.html#t:StepFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.SOMInternal",
          "name": "ConstantFunction",
          "package": "som",
          "signature": "ConstantFunction a",
          "source": "src/Data-Datamining-Clustering-SOMInternal.html#ConstantFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering SOMInternal",
          "module": "Data.Datamining.Clustering.SOMInternal",
          "name": "ConstantFunction",
          "package": "som",
          "partial": "Constant Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOMInternal.html#v:ConstantFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.SOMInternal",
          "name": "StepFunction",
          "package": "som",
          "signature": "StepFunction a",
          "source": "src/Data-Datamining-Clustering-SOMInternal.html#StepFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering SOMInternal",
          "module": "Data.Datamining.Clustering.SOMInternal",
          "name": "StepFunction",
          "package": "som",
          "partial": "Step Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOMInternal.html#v:StepFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.SOMInternal",
          "name": "adjustNode",
          "package": "som",
          "signature": "g -\u003e (t -\u003e Metric p) -\u003e p -\u003e k -\u003e k -\u003e p -\u003e p",
          "source": "src/Data-Datamining-Clustering-SOMInternal.html#adjustNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering SOMInternal",
          "module": "Data.Datamining.Clustering.SOMInternal",
          "name": "adjustNode",
          "normalized": "a-\u003e(b-\u003eMetric c)-\u003ec-\u003ed-\u003ed-\u003ec-\u003ec",
          "package": "som",
          "partial": "Node",
          "signature": "g-\u003e(t-\u003eMetric p)-\u003ep-\u003ek-\u003ek-\u003ep-\u003ep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOMInternal.html#v:adjustNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.SOMInternal",
          "name": "currentLearningFunction",
          "package": "som",
          "signature": "SOM f t gm k p -\u003e LearningRate f -\u003e Metric p",
          "source": "src/Data-Datamining-Clustering-SOMInternal.html#currentLearningFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering SOMInternal",
          "module": "Data.Datamining.Clustering.SOMInternal",
          "name": "currentLearningFunction",
          "normalized": "SOM a b c d e-\u003eLearningRate a-\u003eMetric e",
          "package": "som",
          "partial": "Learning Function",
          "signature": "SOM f t gm k p-\u003eLearningRate f-\u003eMetric p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOMInternal.html#v:currentLearningFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.SOMInternal",
          "name": "incrementCounter",
          "package": "som",
          "signature": "SOM f t gm k p -\u003e SOM f t gm k p",
          "source": "src/Data-Datamining-Clustering-SOMInternal.html#incrementCounter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering SOMInternal",
          "module": "Data.Datamining.Clustering.SOMInternal",
          "name": "incrementCounter",
          "normalized": "SOM a b c d e-\u003eSOM a b c d e",
          "package": "som",
          "partial": "Counter",
          "signature": "SOM f t gm k p-\u003eSOM f t gm k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOMInternal.html#v:incrementCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Clustering.SOMInternal",
          "name": "justTrain",
          "package": "som",
          "signature": "SOM f t gm k p -\u003e p -\u003e SOM f t gm k p",
          "source": "src/Data-Datamining-Clustering-SOMInternal.html#justTrain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Datamining Clustering SOMInternal",
          "module": "Data.Datamining.Clustering.SOMInternal",
          "name": "justTrain",
          "normalized": "SOM a b c d e-\u003ee-\u003eSOM a b c d e",
          "package": "som",
          "partial": "Train",
          "signature": "SOM f t gm k p-\u003ep-\u003eSOM f t gm k p",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOMInternal.html#v:justTrain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erate\u003c/a\u003e\u003c/code\u003e f t d\u003c/code\u003e returns the learning rate for a node.\n   The parameter \u003ccode\u003ef\u003c/code\u003e is the learning function.\n   The parameter \u003ccode\u003et\u003c/code\u003e indicates how many patterns (or pattern\n   batches) have previously been presented to the classifier.\n   Typically this is used to make the learning rate decay over time.\n   The parameter \u003ccode\u003ed\u003c/code\u003e is the grid distance from the node being\n   updated to the BMU (Best Matching Unit).\n   The output is the learning rate for that node (the amount by\n   which the node's model should be updated to match the target).\n   The learning rate should be between zero and one.\n\u003c/p\u003e",
          "module": "Data.Datamining.Clustering.SOMInternal",
          "name": "rate",
          "package": "som",
          "signature": "f -\u003e LearningRate f -\u003e LearningRate f -\u003e LearningRate f",
          "source": "src/Data-Datamining-Clustering-SOMInternal.html#rate",
          "type": "method"
        },
        "index": {
          "description": "rate returns the learning rate for node The parameter is the learning function The parameter indicates how many patterns or pattern batches have previously been presented to the classifier Typically this is used to make the learning rate decay over time The parameter is the grid distance from the node being updated to the BMU Best Matching Unit The output is the learning rate for that node the amount by which the node model should be updated to match the target The learning rate should be between zero and one",
          "hierarchy": "Data Datamining Clustering SOMInternal",
          "module": "Data.Datamining.Clustering.SOMInternal",
          "name": "rate",
          "normalized": "a-\u003eLearningRate a-\u003eLearningRate a-\u003eLearningRate a",
          "package": "som",
          "signature": "f-\u003eLearningRate f-\u003eLearningRate f-\u003eLearningRate f",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Clustering-SOMInternal.html#v:rate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTools for identifying patterns in data.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Datamining.Pattern",
          "name": "Pattern",
          "package": "som",
          "source": "src/Data-Datamining-Pattern.html",
          "type": "module"
        },
        "index": {
          "description": "Tools for identifying patterns in data",
          "hierarchy": "Data Datamining Pattern",
          "module": "Data.Datamining.Pattern",
          "name": "Pattern",
          "package": "som",
          "partial": "Pattern",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Pattern.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA vector that has been normalised, i.e., the magnitude of the\n   vector = 1.\n\u003c/p\u003e",
          "module": "Data.Datamining.Pattern",
          "name": "NormalisedVector",
          "package": "som",
          "source": "src/Data-Datamining-Pattern.html#NormalisedVector",
          "type": "data"
        },
        "index": {
          "description": "vector that has been normalised i.e the magnitude of the vector",
          "hierarchy": "Data Datamining Pattern",
          "module": "Data.Datamining.Pattern",
          "name": "NormalisedVector",
          "package": "som",
          "partial": "Normalised Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Pattern.html#t:NormalisedVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pattern to be learned or classified.\n\u003c/p\u003e",
          "module": "Data.Datamining.Pattern",
          "name": "Pattern",
          "package": "som",
          "source": "src/Data-Datamining-Pattern.html#Pattern",
          "type": "class"
        },
        "index": {
          "description": "pattern to be learned or classified",
          "hierarchy": "Data Datamining Pattern",
          "module": "Data.Datamining.Pattern",
          "name": "Pattern",
          "package": "som",
          "partial": "Pattern",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Pattern.html#t:Pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA vector that has been scaled so that all elements in the vector\n   are between zero and one. To scale a set of vectors, use\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003escaleAll\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e. Alternatively, if you can identify a maximum and\n   minimum value for each element in a vector, you can scale\n   individual vectors using \u003ccode\u003e\u003ccode\u003e\u003ca\u003escale\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Datamining.Pattern",
          "name": "ScaledVector",
          "package": "som",
          "source": "src/Data-Datamining-Pattern.html#ScaledVector",
          "type": "data"
        },
        "index": {
          "description": "vector that has been scaled so that all elements in the vector are between zero and one To scale set of vectors use scaleAll Alternatively if you can identify maximum and minimum value for each element in vector you can scale individual vectors using scale",
          "hierarchy": "Data Datamining Pattern",
          "module": "Data.Datamining.Pattern",
          "name": "ScaledVector",
          "package": "som",
          "partial": "Scaled Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Pattern.html#t:ScaledVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Pattern",
          "name": "absDifference",
          "package": "som",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Data-Datamining-Pattern.html#absDifference",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Datamining Pattern",
          "module": "Data.Datamining.Pattern",
          "name": "absDifference",
          "normalized": "a-\u003ea-\u003ea",
          "package": "som",
          "partial": "Difference",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Pattern.html#v:absDifference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Pattern",
          "name": "adjustNum",
          "package": "som",
          "signature": "a -\u003e a -\u003e a -\u003e a",
          "source": "src/Data-Datamining-Pattern.html#adjustNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Datamining Pattern",
          "module": "Data.Datamining.Pattern",
          "name": "adjustNum",
          "normalized": "a-\u003ea-\u003ea-\u003ea",
          "package": "som",
          "partial": "Num",
          "signature": "a-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Pattern.html#v:adjustNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eadjustVector\u003c/a\u003e\u003c/code\u003e target amount vector\u003c/code\u003e adjusts \u003ccode\u003evector\u003c/code\u003e to move it\n   closer to \u003ccode\u003etarget\u003c/code\u003e. The amount of adjustment is controlled by the\n   learning rate \u003ccode\u003er\u003c/code\u003e, which is a number between 0 and 1. Larger values\n   of \u003ccode\u003er\u003c/code\u003e permit more adjustment. If \u003ccode\u003er\u003c/code\u003e=1, the result will be\n   identical to the \u003ccode\u003etarget\u003c/code\u003e. If \u003ccode\u003eamount\u003c/code\u003e=0, the result will be the\n   unmodified \u003ccode\u003epattern\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Datamining.Pattern",
          "name": "adjustVector",
          "package": "som",
          "signature": "[a] -\u003e a -\u003e [a] -\u003e [a]",
          "source": "src/Data-Datamining-Pattern.html#adjustVector",
          "type": "function"
        },
        "index": {
          "description": "adjustVector target amount vector adjusts vector to move it closer to target The amount of adjustment is controlled by the learning rate which is number between and Larger values of permit more adjustment If the result will be identical to the target If amount the result will be the unmodified pattern",
          "hierarchy": "Data Datamining Pattern",
          "module": "Data.Datamining.Pattern",
          "name": "adjustVector",
          "normalized": "[a]-\u003ea-\u003e[a]-\u003e[a]",
          "package": "som",
          "partial": "Vector",
          "signature": "[a]-\u003ea-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Pattern.html#v:adjustVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompares two patterns and returns a \u003cem\u003enon-negative\u003c/em\u003e number\n   representing how different the patterns are. A result of \u003ccode\u003e0\u003c/code\u003e\n   indicates that the patterns are identical.\n\u003c/p\u003e",
          "module": "Data.Datamining.Pattern",
          "name": "difference",
          "package": "som",
          "signature": "p -\u003e p -\u003e Metric p",
          "source": "src/Data-Datamining-Pattern.html#difference",
          "type": "method"
        },
        "index": {
          "description": "Compares two patterns and returns non-negative number representing how different the patterns are result of indicates that the patterns are identical",
          "hierarchy": "Data Datamining Pattern",
          "module": "Data.Datamining.Pattern",
          "name": "difference",
          "normalized": "a-\u003ea-\u003eMetric a",
          "package": "som",
          "signature": "p-\u003ep-\u003eMetric p",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Pattern.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculates the square of the Euclidean distance between two\n   vectors.\n\u003c/p\u003e",
          "module": "Data.Datamining.Pattern",
          "name": "euclideanDistanceSquared",
          "package": "som",
          "signature": "[a] -\u003e [a] -\u003e a",
          "source": "src/Data-Datamining-Pattern.html#euclideanDistanceSquared",
          "type": "function"
        },
        "index": {
          "description": "Calculates the square of the Euclidean distance between two vectors",
          "hierarchy": "Data Datamining Pattern",
          "module": "Data.Datamining.Pattern",
          "name": "euclideanDistanceSquared",
          "normalized": "[a]-\u003e[a]-\u003ea",
          "package": "som",
          "partial": "Distance Squared",
          "signature": "[a]-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Pattern.html#v:euclideanDistanceSquared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Datamining.Pattern",
          "name": "magnitudeSquared",
          "package": "som",
          "signature": "[a] -\u003e a",
          "source": "src/Data-Datamining-Pattern.html#magnitudeSquared",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Datamining Pattern",
          "module": "Data.Datamining.Pattern",
          "name": "magnitudeSquared",
          "normalized": "[a]-\u003ea",
          "package": "som",
          "partial": "Squared",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Pattern.html#v:magnitudeSquared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003emakeSimilar\u003c/a\u003e\u003c/code\u003e target amount pattern\u003c/code\u003e returns a modified copy of\n   \u003ccode\u003epattern\u003c/code\u003e that is more similar to \u003ccode\u003etarget\u003c/code\u003e than \u003ccode\u003epattern\u003c/code\u003e is. The\n   magnitude of the adjustment is controlled by the \u003ccode\u003eamount\u003c/code\u003e\n   parameter, which should be a number between 0 and 1. Larger\n   values for \u003ccode\u003eamount\u003c/code\u003e permit greater adjustments. If \u003ccode\u003eamount\u003c/code\u003e=1,\n   the result should be identical to the \u003ccode\u003etarget\u003c/code\u003e. If \u003ccode\u003eamount\u003c/code\u003e=0,\n   the result should be the unmodified \u003ccode\u003epattern\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Datamining.Pattern",
          "name": "makeSimilar",
          "package": "som",
          "signature": "p -\u003e Metric p -\u003e p -\u003e p",
          "source": "src/Data-Datamining-Pattern.html#makeSimilar",
          "type": "method"
        },
        "index": {
          "description": "makeSimilar target amount pattern returns modified copy of pattern that is more similar to target than pattern is The magnitude of the adjustment is controlled by the amount parameter which should be number between and Larger values for amount permit greater adjustments If amount the result should be identical to the target If amount the result should be the unmodified pattern",
          "hierarchy": "Data Datamining Pattern",
          "module": "Data.Datamining.Pattern",
          "name": "makeSimilar",
          "normalized": "a-\u003eMetric a-\u003ea-\u003ea",
          "package": "som",
          "partial": "Similar",
          "signature": "p-\u003eMetric p-\u003ep-\u003ep",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Pattern.html#v:makeSimilar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalises a vector\n\u003c/p\u003e",
          "module": "Data.Datamining.Pattern",
          "name": "normalise",
          "package": "som",
          "signature": "[a] -\u003e NormalisedVector a",
          "source": "src/Data-Datamining-Pattern.html#normalise",
          "type": "function"
        },
        "index": {
          "description": "Normalises vector",
          "hierarchy": "Data Datamining Pattern",
          "module": "Data.Datamining.Pattern",
          "name": "normalise",
          "normalized": "[a]-\u003eNormalisedVector a",
          "package": "som",
          "signature": "[a]-\u003eNormalisedVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Pattern.html#v:normalise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a vector \u003ccode\u003eqs\u003c/code\u003e of pairs of numbers, where each pair represents\n   the maximum and minimum value to be expected at each index in\n   \u003ccode\u003exs\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003escale\u003c/a\u003e\u003c/code\u003e qs xs\u003c/code\u003e scales the vector \u003ccode\u003exs\u003c/code\u003e element by element,\n   mapping the maximum value expected at that index to one, and the\n   minimum value to zero.\n\u003c/p\u003e",
          "module": "Data.Datamining.Pattern",
          "name": "scale",
          "package": "som",
          "signature": "[(a, a)] -\u003e [a] -\u003e ScaledVector a",
          "source": "src/Data-Datamining-Pattern.html#scale",
          "type": "function"
        },
        "index": {
          "description": "Given vector qs of pairs of numbers where each pair represents the maximum and minimum value to be expected at each index in xs scale qs xs scales the vector xs element by element mapping the maximum value expected at that index to one and the minimum value to zero",
          "hierarchy": "Data Datamining Pattern",
          "module": "Data.Datamining.Pattern",
          "name": "scale",
          "normalized": "[(a,a)]-\u003e[a]-\u003eScaledVector a",
          "package": "som",
          "signature": "[(a,a)]-\u003e[a]-\u003eScaledVector a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Pattern.html#v:scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScales a set of vectors by determining the maximum and minimum\n   values at each index in the vector, and mapping the maximum\n   value to one, and the minimum value to zero.\n\u003c/p\u003e",
          "module": "Data.Datamining.Pattern",
          "name": "scaleAll",
          "package": "som",
          "signature": "[[a]] -\u003e [ScaledVector a]",
          "source": "src/Data-Datamining-Pattern.html#scaleAll",
          "type": "function"
        },
        "index": {
          "description": "Scales set of vectors by determining the maximum and minimum values at each index in the vector and mapping the maximum value to one and the minimum value to zero",
          "hierarchy": "Data Datamining Pattern",
          "module": "Data.Datamining.Pattern",
          "name": "scaleAll",
          "normalized": "[[a]]-\u003e[ScaledVector a]",
          "package": "som",
          "partial": "All",
          "signature": "[[a]]-\u003e[ScaledVector a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/som/docs/Data-Datamining-Pattern.html#v:scaleAll"
      }
    }
  ]
]