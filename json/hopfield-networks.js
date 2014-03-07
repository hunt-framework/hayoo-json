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
        "word": "hopfield-networks"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of Hopfield Network training and asssociating\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MachineLearning.Hopfield",
          "name": "Hopfield",
          "package": "hopfield-networks",
          "source": "src/MachineLearning-Hopfield.html",
          "type": "module"
        },
        "index": {
          "description": "Implementation of Hopfield Network training and asssociating",
          "hierarchy": "MachineLearning Hopfield",
          "module": "MachineLearning.Hopfield",
          "name": "Hopfield",
          "package": "hopfield-networks",
          "partial": "Hopfield",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hopfield-networks/docs/MachineLearning-Hopfield.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHopfieldNet maintains the state and weights of the Hopfield\n Network, and is the major datastructure used in this code.\n\u003c/p\u003e",
          "module": "MachineLearning.Hopfield",
          "name": "HopfieldNet",
          "package": "hopfield-networks",
          "source": "src/MachineLearning-Hopfield.html#HopfieldNet",
          "type": "data"
        },
        "index": {
          "description": "HopfieldNet maintains the state and weights of the Hopfield Network and is the major datastructure used in this code",
          "hierarchy": "MachineLearning Hopfield",
          "module": "MachineLearning.Hopfield",
          "name": "HopfieldNet",
          "package": "hopfield-networks",
          "partial": "Hopfield Net",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hopfield-networks/docs/MachineLearning-Hopfield.html#t:HopfieldNet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MachineLearning.Hopfield",
          "name": "HopfieldNet",
          "package": "hopfield-networks",
          "signature": "HopfieldNet",
          "source": "src/MachineLearning-Hopfield.html#HopfieldNet",
          "type": "function"
        },
        "index": {
          "hierarchy": "MachineLearning Hopfield",
          "module": "MachineLearning.Hopfield",
          "name": "HopfieldNet",
          "package": "hopfield-networks",
          "partial": "Hopfield Net",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield-networks/docs/MachineLearning-Hopfield.html#v:HopfieldNet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MachineLearning.Hopfield",
          "name": "_state",
          "package": "hopfield-networks",
          "signature": "Vector Float",
          "source": "src/MachineLearning-Hopfield.html#HopfieldNet",
          "type": "function"
        },
        "index": {
          "hierarchy": "MachineLearning Hopfield",
          "module": "MachineLearning.Hopfield",
          "name": "_state",
          "package": "hopfield-networks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield-networks/docs/MachineLearning-Hopfield.html#v:_state"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MachineLearning.Hopfield",
          "name": "_weights",
          "package": "hopfield-networks",
          "signature": "Matrix Float",
          "source": "src/MachineLearning-Hopfield.html#HopfieldNet",
          "type": "function"
        },
        "index": {
          "hierarchy": "MachineLearning Hopfield",
          "module": "MachineLearning.Hopfield",
          "name": "_weights",
          "package": "hopfield-networks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield-networks/docs/MachineLearning-Hopfield.html#v:_weights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaps the activation of a neuron to the output.\n\u003c/p\u003e",
          "module": "MachineLearning.Hopfield",
          "name": "activity",
          "package": "hopfield-networks",
          "signature": "Float -\u003e Float",
          "source": "src/MachineLearning-Hopfield.html#activity",
          "type": "function"
        },
        "index": {
          "description": "Maps the activation of neuron to the output",
          "hierarchy": "MachineLearning Hopfield",
          "module": "MachineLearning.Hopfield",
          "name": "activity",
          "normalized": "Float-\u003eFloat",
          "package": "hopfield-networks",
          "signature": "Float-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield-networks/docs/MachineLearning-Hopfield.html#v:activity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeatedly adjusts the Hopfield network's state to minimize the\n energy of the current configuration.\n\u003c/p\u003e",
          "module": "MachineLearning.Hopfield",
          "name": "associate",
          "package": "hopfield-networks",
          "signature": "HopfieldNet -\u003e Int -\u003e Vector Float -\u003e m (Vector Float)",
          "source": "src/MachineLearning-Hopfield.html#associate",
          "type": "function"
        },
        "index": {
          "description": "Repeatedly adjusts the Hopfield network state to minimize the energy of the current configuration",
          "hierarchy": "MachineLearning Hopfield",
          "module": "MachineLearning.Hopfield",
          "name": "associate",
          "normalized": "HopfieldNet-\u003eInt-\u003eVector Float-\u003ea(Vector Float)",
          "package": "hopfield-networks",
          "signature": "HopfieldNet-\u003eInt-\u003eVector Float-\u003em(Vector Float)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield-networks/docs/MachineLearning-Hopfield.html#v:associate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe energy of the current configuration of the Hopfield network.\n\u003c/p\u003e",
          "module": "MachineLearning.Hopfield",
          "name": "energy",
          "package": "hopfield-networks",
          "signature": "HopfieldNet -\u003e Float",
          "source": "src/MachineLearning-Hopfield.html#energy",
          "type": "function"
        },
        "index": {
          "description": "The energy of the current configuration of the Hopfield network",
          "hierarchy": "MachineLearning Hopfield",
          "module": "MachineLearning.Hopfield",
          "name": "energy",
          "normalized": "HopfieldNet-\u003eFloat",
          "package": "hopfield-networks",
          "signature": "HopfieldNet-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield-networks/docs/MachineLearning-Hopfield.html#v:energy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitializes the HopfieldNet with the given training patterns.\n\u003c/p\u003e",
          "module": "MachineLearning.Hopfield",
          "name": "initializeWith",
          "package": "hopfield-networks",
          "signature": "Matrix Float -\u003e HopfieldNet",
          "source": "src/MachineLearning-Hopfield.html#initializeWith",
          "type": "function"
        },
        "index": {
          "description": "Initializes the HopfieldNet with the given training patterns",
          "hierarchy": "MachineLearning Hopfield",
          "module": "MachineLearning.Hopfield",
          "name": "initializeWith",
          "normalized": "Matrix Float-\u003eHopfieldNet",
          "package": "hopfield-networks",
          "partial": "With",
          "signature": "Matrix Float-\u003eHopfieldNet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield-networks/docs/MachineLearning-Hopfield.html#v:initializeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdates the weights of the Hopfield network with the given\n training patterns.\n\u003c/p\u003e",
          "module": "MachineLearning.Hopfield",
          "name": "train",
          "package": "hopfield-networks",
          "signature": "HopfieldNet -\u003e Matrix Float -\u003e HopfieldNet",
          "source": "src/MachineLearning-Hopfield.html#train",
          "type": "function"
        },
        "index": {
          "description": "Updates the weights of the Hopfield network with the given training patterns",
          "hierarchy": "MachineLearning Hopfield",
          "module": "MachineLearning.Hopfield",
          "name": "train",
          "normalized": "HopfieldNet-\u003eMatrix Float-\u003eHopfieldNet",
          "package": "hopfield-networks",
          "signature": "HopfieldNet-\u003eMatrix Float-\u003eHopfieldNet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield-networks/docs/MachineLearning-Hopfield.html#v:train"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility code used for matrix/vector manipulation\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MachineLearning.Util",
          "name": "Util",
          "package": "hopfield-networks",
          "source": "src/MachineLearning-Util.html",
          "type": "module"
        },
        "index": {
          "description": "Utility code used for matrix vector manipulation",
          "hierarchy": "MachineLearning Util",
          "module": "MachineLearning.Util",
          "name": "Util",
          "package": "hopfield-networks",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hopfield-networks/docs/MachineLearning-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistance between vectors in the Hilbert space induced by the L^2\n norm on R^n.\n\u003c/p\u003e",
          "module": "MachineLearning.Util",
          "name": "difference",
          "package": "hopfield-networks",
          "signature": "Vector a -\u003e Vector a -\u003e a",
          "source": "src/MachineLearning-Util.html#difference",
          "type": "function"
        },
        "index": {
          "description": "Distance between vectors in the Hilbert space induced by the norm on",
          "hierarchy": "MachineLearning Util",
          "module": "MachineLearning.Util",
          "name": "difference",
          "normalized": "Vector a-\u003eVector a-\u003ea",
          "package": "hopfield-networks",
          "signature": "Vector a-\u003eVector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield-networks/docs/MachineLearning-Util.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inner product in R^n.\n\u003c/p\u003e",
          "module": "MachineLearning.Util",
          "name": "dotProduct",
          "package": "hopfield-networks",
          "signature": "Vector b -\u003e Vector b -\u003e b",
          "source": "src/MachineLearning-Util.html#dotProduct",
          "type": "function"
        },
        "index": {
          "description": "The inner product in",
          "hierarchy": "MachineLearning Util",
          "module": "MachineLearning.Util",
          "name": "dotProduct",
          "normalized": "Vector a-\u003eVector a-\u003ea",
          "package": "hopfield-networks",
          "partial": "Product",
          "signature": "Vector b-\u003eVector b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield-networks/docs/MachineLearning-Util.html#v:dotProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inner product on R^n induced by a PSD matrix M. Computes the\n mapping x |-\u003e x^T M x with x in R^n, M in R^{n x n}.\n\u003c/p\u003e",
          "module": "MachineLearning.Util",
          "name": "innerProduct",
          "package": "hopfield-networks",
          "signature": "Matrix a -\u003e Vector a -\u003e a",
          "source": "src/MachineLearning-Util.html#innerProduct",
          "type": "function"
        },
        "index": {
          "description": "The inner product on induced by PSD matrix Computes the mapping with in in",
          "hierarchy": "MachineLearning Util",
          "module": "MachineLearning.Util",
          "name": "innerProduct",
          "normalized": "Matrix a-\u003eVector a-\u003ea",
          "package": "hopfield-networks",
          "partial": "Product",
          "signature": "Matrix a-\u003eVector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield-networks/docs/MachineLearning-Util.html#v:innerProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe L^2 norm of a vector in R^n.\n\u003c/p\u003e",
          "module": "MachineLearning.Util",
          "name": "norm",
          "package": "hopfield-networks",
          "signature": "Vector a -\u003e a",
          "source": "src/MachineLearning-Util.html#norm",
          "type": "function"
        },
        "index": {
          "description": "The norm of vector in",
          "hierarchy": "MachineLearning Util",
          "module": "MachineLearning.Util",
          "name": "norm",
          "normalized": "Vector a-\u003ea",
          "package": "hopfield-networks",
          "signature": "Vector a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hopfield-networks/docs/MachineLearning-Util.html#v:norm"
      }
    }
  ]
]