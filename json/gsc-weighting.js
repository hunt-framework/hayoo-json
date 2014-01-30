[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gsc-weighting/docs/Data-Weighting-GSC.html#",
      "description": {
        "fct-module": "Data.Weighting.GSC",
        "fct-package": "gsc-weighting",
        "fct-signature": "module",
        "fct-source": "src/Data-Weighting-GSC.html",
        "fct-type": "module",
        "title": "GSC"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Weighting GSC",
        "module": "Data.Weighting.GSC",
        "name": "GSC",
        "normalized": "",
        "package": "gsc-weighting",
        "partial": "GSC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/gsc-weighting/docs/Data-Weighting-GSC.html#v:gsc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n^2)\u003c/em\u003e Calculates the Gerstein/Sonnhammer/Chothia\n weights for all elements of a dendrogram.  Weights are\n annotated to the leafs of the dendrogram while distances in\n branches are kept unchanged.\n\u003c/p\u003e\u003cp\u003eDistances \u003ccode\u003ed\u003c/code\u003e in branches should be non-increasing and between\n \u003ccode\u003e0\u003c/code\u003e (in the leafs) and \u003ccode\u003e1\u003c/code\u003e.  The final weights are normalized\n to average to \u003ccode\u003e1\u003c/code\u003e (i.e. sum to the number of sequences, the\n same they would sum if all weights were \u003ccode\u003e1\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eFor example, suppose we have\n\u003c/p\u003e\u003cpre\u003e\n dendro = Branch 0.8\n            (Branch 0.5\n              (Branch 0.2\n                (Leaf \u003ccode\u003eA\u003c/code\u003e)\n                (Leaf \u003ccode\u003eB\u003c/code\u003e))\n              (Leaf \u003ccode\u003eC\u003c/code\u003e))\n            (Leaf \u003ccode\u003eD\u003c/code\u003e)\n\u003c/pre\u003e\u003cp\u003eThis is the same as GSC paper's example, however they used\n similarities while we are using distances (i.e. applying\n \u003ccode\u003e(1-)\u003c/code\u003e to the distances would give exactly their example).\n Then \u003ccode\u003egsc dendro\u003c/code\u003e is\n\u003c/p\u003e\u003cpre\u003e\n gsc dendro == Branch 0.8\n                 (Branch 0.5\n                   (Branch 0.2\n                     (Leaf (\u003ccode\u003eA\u003c/code\u003e,0.7608695652173914))\n                     (Leaf (\u003ccode\u003eB\u003c/code\u003e,0.7608695652173914)))\n                   (Leaf (\u003ccode\u003eC\u003c/code\u003e,1.0869565217391306)))\n                 (Leaf (\u003ccode\u003eD\u003c/code\u003e,1.3913043478260871))\n\u003c/pre\u003e\u003cp\u003ewhich is exactly what they calculated.\n\u003c/p\u003e",
        "fct-module": "Data.Weighting.GSC",
        "fct-package": "gsc-weighting",
        "fct-signature": "Dendrogram a -\u003e Dendrogram (a, Distance)",
        "fct-source": "src/Data-Weighting-GSC.html#gsc",
        "fct-type": "function",
        "title": "gsc"
      },
      "index": {
        "description": "Calculates the Gerstein Sonnhammer Chothia weights for all elements of dendrogram Weights are annotated to the leafs of the dendrogram while distances in branches are kept unchanged Distances in branches should be non-increasing and between in the leafs and The final weights are normalized to average to i.e sum to the number of sequences the same they would sum if all weights were For example suppose we have dendro Branch Branch Branch Leaf Leaf Leaf Leaf This is the same as GSC paper example however they used similarities while we are using distances i.e applying to the distances would give exactly their example Then gsc dendro is gsc dendro Branch Branch Branch Leaf Leaf Leaf Leaf which is exactly what they calculated",
        "hierarchy": "Data Weighting GSC",
        "module": "Data.Weighting.GSC",
        "name": "gsc",
        "normalized": "Dendrogram a-\u003eDendrogram(a,Distance)",
        "package": "gsc-weighting",
        "partial": "",
        "signature": "Dendrogram a-\u003eDendrogram(a,Distance)"
      }
    }
  }
]