[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Base.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Fast Artificial Neural Network Library (FANN) is a free open source\n neural network library written in C with support for both fully connected\n and sparsely connected networks (\u003ca\u003ehttp://leenissen.dk/fann/\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eHFANN is a Haskell interface to this library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HFANN.Base",
        "fct-package": "hfann",
        "fct-signature": "module",
        "fct-source": "src/HFANN-Base.html",
        "fct-type": "module",
        "title": "Base"
      },
      "index": {
        "description": "The Fast Artificial Neural Network Library FANN is free open source neural network library written in with support for both fully connected and sparsely connected networks http leenissen.dk fann HFANN is Haskell interface to this library",
        "hierarchy": "HFANN Base",
        "module": "HFANN.Base",
        "name": "Base",
        "normalized": "",
        "package": "hfann",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Base.html#v:getConnectionsCount",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the total number of connections of the Neural Network\n\u003c/p\u003e",
        "fct-module": "HFANN.Base",
        "fct-package": "hfann",
        "fct-signature": "FannPtr-\u003e IO Int",
        "fct-type": "function",
        "title": "getConnectionsCount"
      },
      "index": {
        "description": "Return the total number of connections of the Neural Network",
        "hierarchy": "HFANN Base",
        "module": "HFANN.Base",
        "name": "getConnectionsCount",
        "normalized": "FannPtr-\u003eIO Int",
        "package": "hfann",
        "partial": "Connections Count",
        "signature": "FannPtr-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Base.html#v:getInputNodesCount",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the number of input nodes of the Neural Network\n\u003c/p\u003e",
        "fct-module": "HFANN.Base",
        "fct-package": "hfann",
        "fct-signature": "FannPtr-\u003e IO Int",
        "fct-type": "function",
        "title": "getInputNodesCount"
      },
      "index": {
        "description": "Return the number of input nodes of the Neural Network",
        "hierarchy": "HFANN Base",
        "module": "HFANN.Base",
        "name": "getInputNodesCount",
        "normalized": "FannPtr-\u003eIO Int",
        "package": "hfann",
        "partial": "Input Nodes Count",
        "signature": "FannPtr-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Base.html#v:getOutputNodesCount",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the number of output nodes of the Neural Network\n\u003c/p\u003e",
        "fct-module": "HFANN.Base",
        "fct-package": "hfann",
        "fct-signature": "FannPtr-\u003e IO Int",
        "fct-type": "function",
        "title": "getOutputNodesCount"
      },
      "index": {
        "description": "Return the number of output nodes of the Neural Network",
        "hierarchy": "HFANN Base",
        "module": "HFANN.Base",
        "name": "getOutputNodesCount",
        "normalized": "FannPtr-\u003eIO Int",
        "package": "hfann",
        "partial": "Output Nodes Count",
        "signature": "FannPtr-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Base.html#v:getTotalNodesCount",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the total number of nodes of the Neural Network\n\u003c/p\u003e",
        "fct-module": "HFANN.Base",
        "fct-package": "hfann",
        "fct-signature": "FannPtr-\u003e IO Int",
        "fct-type": "function",
        "title": "getTotalNodesCount"
      },
      "index": {
        "description": "Return the total number of nodes of the Neural Network",
        "hierarchy": "HFANN Base",
        "module": "HFANN.Base",
        "name": "getTotalNodesCount",
        "normalized": "FannPtr-\u003eIO Int",
        "package": "hfann",
        "partial": "Total Nodes Count",
        "signature": "FannPtr-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Base.html#v:initWeights",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize the weights using Widrow + Nguyen&#8217;s algorithm.\n\u003c/p\u003e\u003cp\u003eThis function behaves similarly to fann_randomize_weights.  It will use the\n algorithm developed by Derrick Nguyen and Bernard Widrow to set the weights\n in such a way as to speed up training.  This technique is not always\n successful, and in some cases can be less efficient than a purely random\n initialization.\n\u003c/p\u003e\u003cp\u003eThe algorithm requires access to the range of the input data (ie, largest\n and smallest input), and therefore accepts a second argument, data, which\n is the training data that will be used to train the network.\n\u003c/p\u003e",
        "fct-module": "HFANN.Base",
        "fct-package": "hfann",
        "fct-signature": "FannPtr-\u003e TrainDataPtr-\u003e IO ()",
        "fct-type": "function",
        "title": "initWeights"
      },
      "index": {
        "description": "Initialize the weights using Widrow Nguyen algorithm This function behaves similarly to fann randomize weights It will use the algorithm developed by Derrick Nguyen and Bernard Widrow to set the weights in such way as to speed up training This technique is not always successful and in some cases can be less efficient than purely random initialization The algorithm requires access to the range of the input data ie largest and smallest input and therefore accepts second argument data which is the training data that will be used to train the network",
        "hierarchy": "HFANN Base",
        "module": "HFANN.Base",
        "name": "initWeights",
        "normalized": "FannPtr-\u003eTrainDataPtr-\u003eIO()",
        "package": "hfann",
        "partial": "Weights",
        "signature": "FannPtr-\u003eTrainDataPtr-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Base.html#v:printConnections",
      "description": {
        "fct-descr": "\u003cp\u003ePrint the ANN connections\n\u003c/p\u003e",
        "fct-module": "HFANN.Base",
        "fct-package": "hfann",
        "fct-signature": "FannPtr -\u003e IO ()",
        "fct-source": "src/HFANN-Base.html#printConnections",
        "fct-type": "function",
        "title": "printConnections"
      },
      "index": {
        "description": "Print the ANN connections",
        "hierarchy": "HFANN Base",
        "module": "HFANN.Base",
        "name": "printConnections",
        "normalized": "FannPtr-\u003eIO()",
        "package": "hfann",
        "partial": "Connections",
        "signature": "FannPtr-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Base.html#v:printParameters",
      "description": {
        "fct-descr": "\u003cp\u003ePrint the ANN parameters\n\u003c/p\u003e",
        "fct-module": "HFANN.Base",
        "fct-package": "hfann",
        "fct-signature": "FannPtr -\u003e IO ()",
        "fct-source": "src/HFANN-Base.html#printParameters",
        "fct-type": "function",
        "title": "printParameters"
      },
      "index": {
        "description": "Print the ANN parameters",
        "hierarchy": "HFANN Base",
        "module": "HFANN.Base",
        "name": "printParameters",
        "normalized": "FannPtr-\u003eIO()",
        "package": "hfann",
        "partial": "Parameters",
        "signature": "FannPtr-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Base.html#v:randomizeWeights",
      "description": {
        "fct-descr": "\u003cp\u003eRandomize weights to values in the given range\n\u003c/p\u003e\u003cp\u003eWeights in a newly created ANN are already initialized to random values.\n You can use this function if you want to customize the random weights\n upper and lower bounds.\n\u003c/p\u003e",
        "fct-module": "HFANN.Base",
        "fct-package": "hfann",
        "fct-signature": "FannPtr-\u003e (FannType, FannType)-\u003e IO ()",
        "fct-type": "function",
        "title": "randomizeWeights"
      },
      "index": {
        "description": "Randomize weights to values in the given range Weights in newly created ANN are already initialized to random values You can use this function if you want to customize the random weights upper and lower bounds",
        "hierarchy": "HFANN Base",
        "module": "HFANN.Base",
        "name": "randomizeWeights",
        "normalized": "FannPtr-\u003e(FannType,FannType)-\u003eIO()",
        "package": "hfann",
        "partial": "Weights",
        "signature": "FannPtr-\u003e(FannType,FannType)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Base.html#v:runFann",
      "description": {
        "fct-descr": "\u003cp\u003eRun the trained Neural Network on provided input\n\u003c/p\u003e",
        "fct-module": "HFANN.Base",
        "fct-package": "hfann",
        "fct-signature": "FannPtr-\u003e [FannType]-\u003e IO [FannType]",
        "fct-type": "function",
        "title": "runFann"
      },
      "index": {
        "description": "Run the trained Neural Network on provided input",
        "hierarchy": "HFANN Base",
        "module": "HFANN.Base",
        "name": "runFann",
        "normalized": "FannPtr-\u003e[FannType]-\u003eIO[FannType]",
        "package": "hfann",
        "partial": "Fann",
        "signature": "FannPtr-\u003e[FannType]-\u003eIO[FannType]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Base.html#v:withShortcutFann",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new sparse not fully connected Neural Network with shortcut\n   connections between layers and call the given function with the ANN\n   as argument. When finished destroy the Neural Network\n\u003c/p\u003e",
        "fct-module": "HFANN.Base",
        "fct-package": "hfann",
        "fct-signature": "[Int]-\u003e (FannPtr -\u003e IO a)-\u003e IO a",
        "fct-type": "function",
        "title": "withShortcutFann"
      },
      "index": {
        "description": "Create new sparse not fully connected Neural Network with shortcut connections between layers and call the given function with the ANN as argument When finished destroy the Neural Network",
        "hierarchy": "HFANN Base",
        "module": "HFANN.Base",
        "name": "withShortcutFann",
        "normalized": "[Int]-\u003e(FannPtr-\u003eIO a)-\u003eIO a",
        "package": "hfann",
        "partial": "Shortcut Fann",
        "signature": "[Int]-\u003e(FannPtr-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Base.html#v:withSparseFann",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new sparse not fully connected Neural Network and call the\n   given function with the ANN as argument. When finished destroy the ANN.\n\u003c/p\u003e",
        "fct-module": "HFANN.Base",
        "fct-package": "hfann",
        "fct-signature": "Float-\u003e [Int]-\u003e (FannPtr -\u003e IO a)-\u003e IO a",
        "fct-type": "function",
        "title": "withSparseFann"
      },
      "index": {
        "description": "Create new sparse not fully connected Neural Network and call the given function with the ANN as argument When finished destroy the ANN",
        "hierarchy": "HFANN Base",
        "module": "HFANN.Base",
        "name": "withSparseFann",
        "normalized": "Float-\u003e[Int]-\u003e(FannPtr-\u003eIO a)-\u003eIO a",
        "package": "hfann",
        "partial": "Sparse Fann",
        "signature": "Float-\u003e[Int]-\u003e(FannPtr-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Base.html#v:withStandardFann",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new standard fully connected Neural Network and call the\n   given function with the ANN as argument.\n   When finished destroy the Neural Network.\n\u003c/p\u003e\u003cp\u003eThe structure of the ANN is given by the first parameter. It's an\n   Int list giving the number of nodes per layer from input layer to\n   output layer.\n\u003c/p\u003e\u003cp\u003eExample: \u003ccode\u003e[2,3,1]\u003c/code\u003e would describe an ANN with 2 nodes in the input layer,\n   one hidden layer of 3 nodes and 1 node in the output layer.\n\u003c/p\u003e\u003cp\u003eThe function provided as second argument will be called with the created\n   ANN as parameter.\n\u003c/p\u003e",
        "fct-module": "HFANN.Base",
        "fct-package": "hfann",
        "fct-signature": "[Int]-\u003e (FannPtr -\u003e IO a)-\u003e IO a",
        "fct-type": "function",
        "title": "withStandardFann"
      },
      "index": {
        "description": "Create new standard fully connected Neural Network and call the given function with the ANN as argument When finished destroy the Neural Network The structure of the ANN is given by the first parameter It an Int list giving the number of nodes per layer from input layer to output layer Example would describe an ANN with nodes in the input layer one hidden layer of nodes and node in the output layer The function provided as second argument will be called with the created ANN as parameter",
        "hierarchy": "HFANN Base",
        "module": "HFANN.Base",
        "name": "withStandardFann",
        "normalized": "[Int]-\u003e(FannPtr-\u003eIO a)-\u003eIO a",
        "package": "hfann",
        "partial": "Standard Fann",
        "signature": "[Int]-\u003e(FannPtr-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Fast Artificial Neural Network Library (FANN) is a free open source\n neural network library written in C with support for both fully connected\n and sparsely connected networks (\u003ca\u003ehttp://leenissen.dk/fann/\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eHFANN is a Haskell interface to this library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "module",
        "fct-source": "src/HFANN-Data.html",
        "fct-type": "module",
        "title": "Data"
      },
      "index": {
        "description": "The Fast Artificial Neural Network Library FANN is free open source neural network library written in with support for both fully connected and sparsely connected networks http leenissen.dk fann HFANN is Haskell interface to this library",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "Data",
        "normalized": "",
        "package": "hfann",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#t:ActivationFunction",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of the \u003ccode\u003eActivation Function\u003c/code\u003e enumeration\n\u003c/p\u003e",
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "type",
        "fct-source": "src/HFANN-Data.html#ActivationFunction",
        "fct-type": "type",
        "title": "ActivationFunction"
      },
      "index": {
        "description": "The type of the Activation Function enumeration",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "ActivationFunction",
        "normalized": "",
        "package": "hfann",
        "partial": "Activation Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#t:CCallbackType",
      "description": {
        "fct-descr": "\u003cp\u003eThe C callback function type\n\u003c/p\u003e",
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "type",
        "fct-source": "src/HFANN-Data.html#CCallbackType",
        "fct-type": "type",
        "title": "CCallbackType"
      },
      "index": {
        "description": "The callback function type",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "CCallbackType",
        "normalized": "",
        "package": "hfann",
        "partial": "CCallback Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#t:CFannType",
      "description": {
        "fct-descr": "\u003cp\u003eThe C input/output type\n\u003c/p\u003e\u003cp\u003eThis is the data type used in the C library to represent the input/output\n data.\n\u003c/p\u003e",
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "type",
        "fct-source": "src/HFANN-Data.html#CFannType",
        "fct-type": "type",
        "title": "CFannType"
      },
      "index": {
        "description": "The input output type This is the data type used in the library to represent the input output data",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "CFannType",
        "normalized": "",
        "package": "hfann",
        "partial": "CFann Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#t:CFannTypePtr",
      "description": {
        "fct-descr": "\u003cp\u003eA pointer to the C input/output type\n\u003c/p\u003e",
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "type",
        "fct-source": "src/HFANN-Data.html#CFannTypePtr",
        "fct-type": "type",
        "title": "CFannTypePtr"
      },
      "index": {
        "description": "pointer to the input output type",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "CFannTypePtr",
        "normalized": "",
        "package": "hfann",
        "partial": "CFann Type Ptr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#t:CallbackType",
      "description": {
        "fct-descr": "\u003cp\u003eThe Haskell Callback function type\n\u003c/p\u003e",
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "type",
        "fct-source": "src/HFANN-Data.html#CallbackType",
        "fct-type": "type",
        "title": "CallbackType"
      },
      "index": {
        "description": "The Haskell Callback function type",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "CallbackType",
        "normalized": "",
        "package": "hfann",
        "partial": "Callback Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#t:ErrorFunction",
      "description": {
        "fct-descr": "\u003cp\u003eError function used during training.\n\u003c/p\u003e\u003cp\u003eerrorFunctionLinear - Standard linear error function.\n errorFunctionTanH - Tanh error function, usually better but can require a\n lower learning rate. This error function agressively target outputs that\n differ much from the desired, while not targetting output that only differ\n a little that much.\n\u003c/p\u003e\u003cp\u003eThe tanh function is not recommended for cascade training and incremental\n training.\n\u003c/p\u003e",
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "type",
        "fct-source": "src/HFANN-Data.html#ErrorFunction",
        "fct-type": "type",
        "title": "ErrorFunction"
      },
      "index": {
        "description": "Error function used during training errorFunctionLinear Standard linear error function errorFunctionTanH Tanh error function usually better but can require lower learning rate This error function agressively target outputs that differ much from the desired while not targetting output that only differ little that much The tanh function is not recommended for cascade training and incremental training",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "ErrorFunction",
        "normalized": "",
        "package": "hfann",
        "partial": "Error Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#t:Fann",
      "description": {
        "fct-descr": "\u003cp\u003eThe ANN structure\n\u003c/p\u003e",
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "data",
        "fct-source": "src/HFANN-Data.html#Fann",
        "fct-type": "data",
        "title": "Fann"
      },
      "index": {
        "description": "The ANN structure",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "Fann",
        "normalized": "",
        "package": "hfann",
        "partial": "Fann",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#t:FannPtr",
      "description": {
        "fct-descr": "\u003cp\u003eA pointer to an ANN structure\n\u003c/p\u003e",
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "type",
        "fct-source": "src/HFANN-Data.html#FannPtr",
        "fct-type": "type",
        "title": "FannPtr"
      },
      "index": {
        "description": "pointer to an ANN structure",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "FannPtr",
        "normalized": "",
        "package": "hfann",
        "partial": "Fann Ptr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#t:FannType",
      "description": {
        "fct-descr": "\u003cp\u003eThe Haskell input/output type\n\u003c/p\u003e\u003cp\u003eThis is the data type used in Haskell to represent the input/output data.\n\u003c/p\u003e",
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "type",
        "fct-source": "src/HFANN-Data.html#FannType",
        "fct-type": "type",
        "title": "FannType"
      },
      "index": {
        "description": "The Haskell input output type This is the data type used in Haskell to represent the input output data",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "FannType",
        "normalized": "",
        "package": "hfann",
        "partial": "Fann Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#t:StopFunction",
      "description": {
        "fct-descr": "\u003cp\u003eStop function used during training\n\u003c/p\u003e\u003cp\u003estopFunctionMSE - stop criteria is Mean Square Error value.\n stopFunctionBit - stop criteria is number of bits that fail\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003egetBitFailLimit\u003c/code\u003e, \u003ccode\u003esetBitFailLimit\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe bits are counted in all of the training data, so this number can be\n higher than the number of training data.\n\u003c/p\u003e",
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "type",
        "fct-source": "src/HFANN-Data.html#StopFunction",
        "fct-type": "type",
        "title": "StopFunction"
      },
      "index": {
        "description": "Stop function used during training stopFunctionMSE stop criteria is Mean Square Error value stopFunctionBit stop criteria is number of bits that fail See getBitFailLimit setBitFailLimit The bits are counted in all of the training data so this number can be higher than the number of training data",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "StopFunction",
        "normalized": "",
        "package": "hfann",
        "partial": "Stop Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#t:TrainAlgorithm",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of the \u003ccode\u003eTraining Algorithm\u003c/code\u003e enumeration\n\u003c/p\u003e",
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "type",
        "fct-source": "src/HFANN-Data.html#TrainAlgorithm",
        "fct-type": "type",
        "title": "TrainAlgorithm"
      },
      "index": {
        "description": "The type of the Training Algorithm enumeration",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "TrainAlgorithm",
        "normalized": "",
        "package": "hfann",
        "partial": "Train Algorithm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#t:TrainData",
      "description": {
        "fct-descr": "\u003cp\u003eData type of the training data structure\n\u003c/p\u003e",
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "data",
        "fct-source": "src/HFANN-Data.html#TrainData",
        "fct-type": "data",
        "title": "TrainData"
      },
      "index": {
        "description": "Data type of the training data structure",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "TrainData",
        "normalized": "",
        "package": "hfann",
        "partial": "Train Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#t:TrainDataPtr",
      "description": {
        "fct-descr": "\u003cp\u003eA pointer to the training data structure type\n\u003c/p\u003e",
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "type",
        "fct-source": "src/HFANN-Data.html#TrainDataPtr",
        "fct-type": "type",
        "title": "TrainDataPtr"
      },
      "index": {
        "description": "pointer to the training data structure type",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "TrainDataPtr",
        "normalized": "",
        "package": "hfann",
        "partial": "Train Data Ptr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:Fann",
      "description": {
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "Fann",
        "fct-source": "src/HFANN-Data.html#Fann",
        "fct-type": "function",
        "title": "Fann"
      },
      "index": {
        "description": "",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "Fann",
        "normalized": "",
        "package": "hfann",
        "partial": "Fann",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:TrainData",
      "description": {
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "TrainData",
        "fct-source": "src/HFANN-Data.html#TrainData",
        "fct-type": "function",
        "title": "TrainData"
      },
      "index": {
        "description": "",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "TrainData",
        "normalized": "",
        "package": "hfann",
        "partial": "Train Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationElliot",
      "description": {
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "ActivationFunction",
        "fct-source": "src/HFANN-Data.html#activationElliot",
        "fct-type": "function",
        "title": "activationElliot"
      },
      "index": {
        "description": "",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "activationElliot",
        "normalized": "",
        "package": "hfann",
        "partial": "Elliot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationElliotSymmetric",
      "description": {
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "ActivationFunction",
        "fct-source": "src/HFANN-Data.html#activationElliotSymmetric",
        "fct-type": "function",
        "title": "activationElliotSymmetric"
      },
      "index": {
        "description": "",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "activationElliotSymmetric",
        "normalized": "",
        "package": "hfann",
        "partial": "Elliot Symmetric",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationGaussian",
      "description": {
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "ActivationFunction",
        "fct-source": "src/HFANN-Data.html#activationGaussian",
        "fct-type": "function",
        "title": "activationGaussian"
      },
      "index": {
        "description": "",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "activationGaussian",
        "normalized": "",
        "package": "hfann",
        "partial": "Gaussian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationGaussianStepwise",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a callback function to be used during training for reporting and\n to stop the training\n\u003c/p\u003e",
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "ActivationFunction",
        "fct-source": "src/HFANN-Data.html#activationGaussianStepwise",
        "fct-type": "function",
        "title": "activationGaussianStepwise"
      },
      "index": {
        "description": "Create callback function to be used during training for reporting and to stop the training",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "activationGaussianStepwise",
        "normalized": "",
        "package": "hfann",
        "partial": "Gaussian Stepwise",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationGaussianSymmetric",
      "description": {
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "ActivationFunction",
        "fct-source": "src/HFANN-Data.html#activationGaussianSymmetric",
        "fct-type": "function",
        "title": "activationGaussianSymmetric"
      },
      "index": {
        "description": "",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "activationGaussianSymmetric",
        "normalized": "",
        "package": "hfann",
        "partial": "Gaussian Symmetric",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationLinear",
      "description": {
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "ActivationFunction",
        "fct-source": "src/HFANN-Data.html#activationLinear",
        "fct-type": "function",
        "title": "activationLinear"
      },
      "index": {
        "description": "",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "activationLinear",
        "normalized": "",
        "package": "hfann",
        "partial": "Linear",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationLinearPiece",
      "description": {
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "ActivationFunction",
        "fct-source": "src/HFANN-Data.html#activationLinearPiece",
        "fct-type": "function",
        "title": "activationLinearPiece"
      },
      "index": {
        "description": "",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "activationLinearPiece",
        "normalized": "",
        "package": "hfann",
        "partial": "Linear Piece",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationLinearPieceSymmetric",
      "description": {
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "ActivationFunction",
        "fct-source": "src/HFANN-Data.html#activationLinearPieceSymmetric",
        "fct-type": "function",
        "title": "activationLinearPieceSymmetric"
      },
      "index": {
        "description": "",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "activationLinearPieceSymmetric",
        "normalized": "",
        "package": "hfann",
        "partial": "Linear Piece Symmetric",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationSigmoid",
      "description": {
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "ActivationFunction",
        "fct-source": "src/HFANN-Data.html#activationSigmoid",
        "fct-type": "function",
        "title": "activationSigmoid"
      },
      "index": {
        "description": "",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "activationSigmoid",
        "normalized": "",
        "package": "hfann",
        "partial": "Sigmoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationSigmoidStepwise",
      "description": {
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "ActivationFunction",
        "fct-source": "src/HFANN-Data.html#activationSigmoidStepwise",
        "fct-type": "function",
        "title": "activationSigmoidStepwise"
      },
      "index": {
        "description": "",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "activationSigmoidStepwise",
        "normalized": "",
        "package": "hfann",
        "partial": "Sigmoid Stepwise",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationSigmoidSymmetric",
      "description": {
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "ActivationFunction",
        "fct-source": "src/HFANN-Data.html#activationSigmoidSymmetric",
        "fct-type": "function",
        "title": "activationSigmoidSymmetric"
      },
      "index": {
        "description": "",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "activationSigmoidSymmetric",
        "normalized": "",
        "package": "hfann",
        "partial": "Sigmoid Symmetric",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationSigmoidSymmetricStepwise",
      "description": {
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "ActivationFunction",
        "fct-source": "src/HFANN-Data.html#activationSigmoidSymmetricStepwise",
        "fct-type": "function",
        "title": "activationSigmoidSymmetricStepwise"
      },
      "index": {
        "description": "",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "activationSigmoidSymmetricStepwise",
        "normalized": "",
        "package": "hfann",
        "partial": "Sigmoid Symmetric Stepwise",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationThreshold",
      "description": {
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "ActivationFunction",
        "fct-source": "src/HFANN-Data.html#activationThreshold",
        "fct-type": "function",
        "title": "activationThreshold"
      },
      "index": {
        "description": "",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "activationThreshold",
        "normalized": "",
        "package": "hfann",
        "partial": "Threshold",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationThresholdSymmetric",
      "description": {
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "ActivationFunction",
        "fct-source": "src/HFANN-Data.html#activationThresholdSymmetric",
        "fct-type": "function",
        "title": "activationThresholdSymmetric"
      },
      "index": {
        "description": "",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "activationThresholdSymmetric",
        "normalized": "",
        "package": "hfann",
        "partial": "Threshold Symmetric",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:errorFunctionLinear",
      "description": {
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "ErrorFunction",
        "fct-source": "src/HFANN-Data.html#errorFunctionLinear",
        "fct-type": "function",
        "title": "errorFunctionLinear"
      },
      "index": {
        "description": "",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "errorFunctionLinear",
        "normalized": "",
        "package": "hfann",
        "partial": "Function Linear",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:errorFunctionTanH",
      "description": {
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "ErrorFunction",
        "fct-source": "src/HFANN-Data.html#errorFunctionTanH",
        "fct-type": "function",
        "title": "errorFunctionTanH"
      },
      "index": {
        "description": "",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "errorFunctionTanH",
        "normalized": "",
        "package": "hfann",
        "partial": "Function Tan",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:fannCallback",
      "description": {
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "CallbackType -\u003e IO (FunPtr CCallbackType)",
        "fct-source": "src/HFANN-Data.html#fannCallback",
        "fct-type": "function",
        "title": "fannCallback"
      },
      "index": {
        "description": "",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "fannCallback",
        "normalized": "CallbackType-\u003eIO(FunPtr CCallbackType)",
        "package": "hfann",
        "partial": "Callback",
        "signature": "CallbackType-\u003eIO(FunPtr CCallbackType)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:stopFunctionBit",
      "description": {
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "StopFunction",
        "fct-source": "src/HFANN-Data.html#stopFunctionBit",
        "fct-type": "function",
        "title": "stopFunctionBit"
      },
      "index": {
        "description": "",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "stopFunctionBit",
        "normalized": "",
        "package": "hfann",
        "partial": "Function Bit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:stopFunctionMSE",
      "description": {
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "StopFunction",
        "fct-source": "src/HFANN-Data.html#stopFunctionMSE",
        "fct-type": "function",
        "title": "stopFunctionMSE"
      },
      "index": {
        "description": "",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "stopFunctionMSE",
        "normalized": "",
        "package": "hfann",
        "partial": "Function MSE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:trainBatch",
      "description": {
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "TrainAlgorithm",
        "fct-source": "src/HFANN-Data.html#trainBatch",
        "fct-type": "function",
        "title": "trainBatch"
      },
      "index": {
        "description": "",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "trainBatch",
        "normalized": "",
        "package": "hfann",
        "partial": "Batch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:trainIncremental",
      "description": {
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "TrainAlgorithm",
        "fct-source": "src/HFANN-Data.html#trainIncremental",
        "fct-type": "function",
        "title": "trainIncremental"
      },
      "index": {
        "description": "",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "trainIncremental",
        "normalized": "",
        "package": "hfann",
        "partial": "Incremental",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:trainQuickProp",
      "description": {
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "TrainAlgorithm",
        "fct-source": "src/HFANN-Data.html#trainQuickProp",
        "fct-type": "function",
        "title": "trainQuickProp"
      },
      "index": {
        "description": "",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "trainQuickProp",
        "normalized": "",
        "package": "hfann",
        "partial": "Quick Prop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:trainRPROP",
      "description": {
        "fct-module": "HFANN.Data",
        "fct-package": "hfann",
        "fct-signature": "TrainAlgorithm",
        "fct-source": "src/HFANN-Data.html#trainRPROP",
        "fct-type": "function",
        "title": "trainRPROP"
      },
      "index": {
        "description": "",
        "hierarchy": "HFANN Data",
        "module": "HFANN.Data",
        "name": "trainRPROP",
        "normalized": "",
        "package": "hfann",
        "partial": "RPROP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-IO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Fast Artificial Neural Network Library (FANN) is a free open source\n neural network library written in C with support for both fully connected\n and sparsely connected networks (\u003ca\u003ehttp://leenissen.dk/fann/\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eHFANN is a Haskell interface to this library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HFANN.IO",
        "fct-package": "hfann",
        "fct-signature": "module",
        "fct-source": "src/HFANN-IO.html",
        "fct-type": "module",
        "title": "IO"
      },
      "index": {
        "description": "The Fast Artificial Neural Network Library FANN is free open source neural network library written in with support for both fully connected and sparsely connected networks http leenissen.dk fann HFANN is Haskell interface to this library",
        "hierarchy": "HFANN IO",
        "module": "HFANN.IO",
        "name": "IO",
        "normalized": "",
        "package": "hfann",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-IO.html#v:saveFann",
      "description": {
        "fct-descr": "\u003cp\u003eSave an Artificial Neural Network (ANN) to a file\n\u003c/p\u003e",
        "fct-module": "HFANN.IO",
        "fct-package": "hfann",
        "fct-signature": "FannPtr-\u003e String-\u003e IO ()",
        "fct-type": "function",
        "title": "saveFann"
      },
      "index": {
        "description": "Save an Artificial Neural Network ANN to file",
        "hierarchy": "HFANN IO",
        "module": "HFANN.IO",
        "name": "saveFann",
        "normalized": "FannPtr-\u003eString-\u003eIO()",
        "package": "hfann",
        "partial": "Fann",
        "signature": "FannPtr-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-IO.html#v:withSavedFann",
      "description": {
        "fct-descr": "\u003cp\u003eLoad an ANN and call the given function with the ANN as argument. Once\n   finished, destroy the ANN.\n\u003c/p\u003e",
        "fct-module": "HFANN.IO",
        "fct-package": "hfann",
        "fct-signature": "String-\u003e (FannPtr -\u003e IO a)-\u003e IO a",
        "fct-type": "function",
        "title": "withSavedFann"
      },
      "index": {
        "description": "Load an ANN and call the given function with the ANN as argument Once finished destroy the ANN",
        "hierarchy": "HFANN IO",
        "module": "HFANN.IO",
        "name": "withSavedFann",
        "normalized": "String-\u003e(FannPtr-\u003eIO a)-\u003eIO a",
        "package": "hfann",
        "partial": "Saved Fann",
        "signature": "String-\u003e(FannPtr-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Fast Artificial Neural Network Library (FANN) is a free open source\n neural network library written in C with support for both fully connected\n and sparsely connected networks (\u003ca\u003ehttp://leenissen.dk/fann/\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eHFANN is a Haskell interface to this library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "module",
        "fct-source": "src/HFANN-Train.html",
        "fct-type": "module",
        "title": "Train"
      },
      "index": {
        "description": "The Fast Artificial Neural Network Library FANN is free open source neural network library written in with support for both fully connected and sparsely connected networks http leenissen.dk fann HFANN is Haskell interface to this library",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "Train",
        "normalized": "",
        "package": "hfann",
        "partial": "Train",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:destroyTrainData",
      "description": {
        "fct-descr": "\u003cp\u003eDestroy training data\n\u003c/p\u003e\u003cp\u003eDestroy training data and properly deallocates the memory.\n\u003c/p\u003e\u003cp\u003eBe sure to use this function after finished using the training data unless\n the training data is part of a \u003ccode\u003e\u003ca\u003ewithTrainData\u003c/a\u003e\u003c/code\u003e call.\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "TrainDataPtr-\u003e IO ()",
        "fct-type": "function",
        "title": "destroyTrainData"
      },
      "index": {
        "description": "Destroy training data Destroy training data and properly deallocates the memory Be sure to use this function after finished using the training data unless the training data is part of withTrainData call",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "destroyTrainData",
        "normalized": "TrainDataPtr-\u003eIO()",
        "package": "hfann",
        "partial": "Train Data",
        "signature": "TrainDataPtr-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:duplicateTrainData",
      "description": {
        "fct-descr": "\u003cp\u003eReturns an exact copy of a training data set.\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "TrainDataPtr-\u003e IO TrainDataPtr",
        "fct-type": "function",
        "title": "duplicateTrainData"
      },
      "index": {
        "description": "Returns an exact copy of training data set",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "duplicateTrainData",
        "normalized": "TrainDataPtr-\u003eIO TrainDataPtr",
        "package": "hfann",
        "partial": "Train Data",
        "signature": "TrainDataPtr-\u003eIO TrainDataPtr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getBitFail",
      "description": {
        "fct-descr": "\u003cp\u003eGet the number of fail bits\n\u003c/p\u003e\u003cp\u003eThe number of fail bits means the number of output neurons which differ more\n than the bit fail limit (see \u003ccode\u003e\u003ca\u003egetBitFailLimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetBitFailLimit\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThis value is reset by \u003ccode\u003e\u003ca\u003eresetMSE\u003c/a\u003e\u003c/code\u003e and updated by the same functions which\n also updates the MSE value \u003ccode\u003e\u003ca\u003etestData\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etrainEpoch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr-\u003e IO Int",
        "fct-type": "function",
        "title": "getBitFail"
      },
      "index": {
        "description": "Get the number of fail bits The number of fail bits means the number of output neurons which differ more than the bit fail limit see getBitFailLimit setBitFailLimit This value is reset by resetMSE and updated by the same functions which also updates the MSE value testData trainEpoch",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "getBitFail",
        "normalized": "FannPtr-\u003eIO Int",
        "package": "hfann",
        "partial": "Bit Fail",
        "signature": "FannPtr-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getBitFailLimit",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the bit fail limit used during training.\n\u003c/p\u003e\u003cp\u003eThe bit fail limit is used during training where the \u003ccode\u003e\u003ca\u003eStopFunction\u003c/a\u003e\u003c/code\u003e is set\n \u003ccode\u003estopFunctionBit\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe limit is the maximum accepted difference between the desired output\n and the actual output during training. Each output that diverges more than\n this is counted as an error bit.\n\u003c/p\u003e\u003cp\u003eThis difference is divided by two when dealing with symmetric activation\n functions, so that symmetric and not symmetric activation functions can use\n the same limit.\n\u003c/p\u003e\u003cp\u003eThe default bit fail limit is 0.35.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetBitFailLimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr -\u003e IO FannType",
        "fct-source": "src/HFANN-Train.html#getBitFailLimit",
        "fct-type": "function",
        "title": "getBitFailLimit"
      },
      "index": {
        "description": "Returns the bit fail limit used during training The bit fail limit is used during training where the StopFunction is set stopFunctionBit The limit is the maximum accepted difference between the desired output and the actual output during training Each output that diverges more than this is counted as an error bit This difference is divided by two when dealing with symmetric activation functions so that symmetric and not symmetric activation functions can use the same limit The default bit fail limit is See also setBitFailLimit",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "getBitFailLimit",
        "normalized": "FannPtr-\u003eIO FannType",
        "package": "hfann",
        "partial": "Bit Fail Limit",
        "signature": "FannPtr-\u003eIO FannType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getLearningMomentum",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the learning momentum.\n\u003c/p\u003e\u003cp\u003eThe learning momentum can be used to speed up the \u003ccode\u003efannTrainIncremental\u003c/code\u003e\n training algorithm.\n\u003c/p\u003e\u003cp\u003eA too high momentum will however not benefit training. Setting momentum to\n 0 will be the same as not using the momentum parameter. The recommended\n value for this parameter is between 0.0 and 1.0.\n\u003c/p\u003e\u003cp\u003eThe default momentum is 0.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetLearningMomentum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetTrainingAlgorithm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr -\u003e IO Float",
        "fct-source": "src/HFANN-Train.html#getLearningMomentum",
        "fct-type": "function",
        "title": "getLearningMomentum"
      },
      "index": {
        "description": "Return the learning momentum The learning momentum can be used to speed up the fannTrainIncremental training algorithm too high momentum will however not benefit training Setting momentum to will be the same as not using the momentum parameter The recommended value for this parameter is between and The default momentum is See also setLearningMomentum setTrainingAlgorithm",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "getLearningMomentum",
        "normalized": "FannPtr-\u003eIO Float",
        "package": "hfann",
        "partial": "Learning Momentum",
        "signature": "FannPtr-\u003eIO Float"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getLearningRate",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the learning rate.\n\u003c/p\u003e\u003cp\u003eThe learning rate is used to determine how aggressive the training should be\n for some of the training algorithms (\u003ccode\u003efannTrainIncremental\u003c/code\u003e,\n \u003ccode\u003efannTrainBatch\u003c/code\u003e, \u003ccode\u003efannTrainQuickProp\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eNote that it is not used in \u003ccode\u003efannTrainRPROP\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe default learning rate is 0.7.\n\u003c/p\u003e\u003cp\u003eSee also:\n  \u003ccode\u003e\u003ca\u003esetLearningRate\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetTrainingAlgorithm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr -\u003e IO Float",
        "fct-source": "src/HFANN-Train.html#getLearningRate",
        "fct-type": "function",
        "title": "getLearningRate"
      },
      "index": {
        "description": "Return the learning rate The learning rate is used to determine how aggressive the training should be for some of the training algorithms fannTrainIncremental fannTrainBatch fannTrainQuickProp Note that it is not used in fannTrainRPROP The default learning rate is See also setLearningRate setTrainingAlgorithm",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "getLearningRate",
        "normalized": "FannPtr-\u003eIO Float",
        "package": "hfann",
        "partial": "Learning Rate",
        "signature": "FannPtr-\u003eIO Float"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getMSE",
      "description": {
        "fct-descr": "\u003cp\u003eGet the mean square error from the ANN\n\u003c/p\u003e\u003cp\u003eThis value is calculated during training or testing, and can therefore\n sometimes be a bit off if the weights have been changed since the last\n calculation of the value.\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr-\u003e IO Float",
        "fct-type": "function",
        "title": "getMSE"
      },
      "index": {
        "description": "Get the mean square error from the ANN This value is calculated during training or testing and can therefore sometimes be bit off if the weights have been changed since the last calculation of the value",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "getMSE",
        "normalized": "FannPtr-\u003eIO Float",
        "package": "hfann",
        "partial": "MSE",
        "signature": "FannPtr-\u003eIO Float"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getQuickPropDecay",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the quickprop decay\n\u003c/p\u003e\u003cp\u003eThe decay is a small negative valued number which is the factor that the\n weights should become smaller in each iteration during quickprop training.\n\u003c/p\u003e\u003cp\u003eThis is used to make sure that the weights do not become too high during\n training.\n\u003c/p\u003e\u003cp\u003eThe default decay is -0.0001\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetQuickPropDecay\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr -\u003e IO Float",
        "fct-source": "src/HFANN-Train.html#getQuickPropDecay",
        "fct-type": "function",
        "title": "getQuickPropDecay"
      },
      "index": {
        "description": "Returns the quickprop decay The decay is small negative valued number which is the factor that the weights should become smaller in each iteration during quickprop training This is used to make sure that the weights do not become too high during training The default decay is See also setQuickPropDecay",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "getQuickPropDecay",
        "normalized": "FannPtr-\u003eIO Float",
        "package": "hfann",
        "partial": "Quick Prop Decay",
        "signature": "FannPtr-\u003eIO Float"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getQuickPropMu",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the quickprop mu factor\n\u003c/p\u003e\u003cp\u003eThe mu factor is used to increase and decrease the step-size during quickprop\n training.\n The mu factor should always be above 1, since it would otherwise decrease the\n step-size when it was supposed to increase it.\n\u003c/p\u003e\u003cp\u003eThe default mu factor is 1.75\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetQuickPropMu\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr -\u003e IO Float",
        "fct-source": "src/HFANN-Train.html#getQuickPropMu",
        "fct-type": "function",
        "title": "getQuickPropMu"
      },
      "index": {
        "description": "Returns the quickprop mu factor The mu factor is used to increase and decrease the step-size during quickprop training The mu factor should always be above since it would otherwise decrease the step-size when it was supposed to increase it The default mu factor is See also setQuickPropMu",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "getQuickPropMu",
        "normalized": "FannPtr-\u003eIO Float",
        "package": "hfann",
        "partial": "Quick Prop Mu",
        "signature": "FannPtr-\u003eIO Float"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getRPROPDecreaseFactor",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the RPROP decrease factor\n\u003c/p\u003e\u003cp\u003eThe RPROP decrease factor is a value larger than 1, which is used to\n decrease the step-size during RPROP training.\n\u003c/p\u003e\u003cp\u003eThe default decrease factor is 0.5\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetRPROPDecreaseFactor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr -\u003e IO Float",
        "fct-source": "src/HFANN-Train.html#getRPROPDecreaseFactor",
        "fct-type": "function",
        "title": "getRPROPDecreaseFactor"
      },
      "index": {
        "description": "Returns the RPROP decrease factor The RPROP decrease factor is value larger than which is used to decrease the step-size during RPROP training The default decrease factor is See also setRPROPDecreaseFactor",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "getRPROPDecreaseFactor",
        "normalized": "FannPtr-\u003eIO Float",
        "package": "hfann",
        "partial": "RPROPDecrease Factor",
        "signature": "FannPtr-\u003eIO Float"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getRPROPDeltaMax",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the RPROP delta max factor\n\u003c/p\u003e\u003cp\u003eThe delta max factor is a positive number determining how large the\n maximum step-size may be.\n\u003c/p\u003e\u003cp\u003eThe default value delta max is 50.0\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetRPROPDeltaMax\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr -\u003e IO Float",
        "fct-source": "src/HFANN-Train.html#getRPROPDeltaMax",
        "fct-type": "function",
        "title": "getRPROPDeltaMax"
      },
      "index": {
        "description": "Returns the RPROP delta max factor The delta max factor is positive number determining how large the maximum step-size may be The default value delta max is See also setRPROPDeltaMax",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "getRPROPDeltaMax",
        "normalized": "FannPtr-\u003eIO Float",
        "package": "hfann",
        "partial": "RPROPDelta Max",
        "signature": "FannPtr-\u003eIO Float"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getRPROPDeltaMin",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the RPROP delta min factor\n\u003c/p\u003e\u003cp\u003eThe delta min factor is a small positive number determining how small the\n minimum step-size may be.\n\u003c/p\u003e\u003cp\u003eThe default value delta min is 0.0\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetRPROPDeltaMin\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr -\u003e IO Float",
        "fct-source": "src/HFANN-Train.html#getRPROPDeltaMin",
        "fct-type": "function",
        "title": "getRPROPDeltaMin"
      },
      "index": {
        "description": "Returns the RPROP delta min factor The delta min factor is small positive number determining how small the minimum step-size may be The default value delta min is See also setRPROPDeltaMin",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "getRPROPDeltaMin",
        "normalized": "FannPtr-\u003eIO Float",
        "package": "hfann",
        "partial": "RPROPDelta Min",
        "signature": "FannPtr-\u003eIO Float"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getRPROPIncreaseFactor",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the RPROP increase factor\n\u003c/p\u003e\u003cp\u003eThe RPROP increase factor is a value larger than 1, which is used to\n increase the step-size during RPROP training.\n\u003c/p\u003e\u003cp\u003eThe default increase factor is 1.2\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetRPROPIncreaseFactor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr -\u003e IO Float",
        "fct-source": "src/HFANN-Train.html#getRPROPIncreaseFactor",
        "fct-type": "function",
        "title": "getRPROPIncreaseFactor"
      },
      "index": {
        "description": "Returns the RPROP increase factor The RPROP increase factor is value larger than which is used to increase the step-size during RPROP training The default increase factor is See also setRPROPIncreaseFactor",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "getRPROPIncreaseFactor",
        "normalized": "FannPtr-\u003eIO Float",
        "package": "hfann",
        "partial": "RPROPIncrease Factor",
        "signature": "FannPtr-\u003eIO Float"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getTrainDataInputNodesCount",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of input nodes in the training data\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "TrainDataPtr -\u003e IO Int",
        "fct-source": "src/HFANN-Train.html#getTrainDataInputNodesCount",
        "fct-type": "function",
        "title": "getTrainDataInputNodesCount"
      },
      "index": {
        "description": "Returns the number of input nodes in the training data",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "getTrainDataInputNodesCount",
        "normalized": "TrainDataPtr-\u003eIO Int",
        "package": "hfann",
        "partial": "Train Data Input Nodes Count",
        "signature": "TrainDataPtr-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getTrainDataOutputNodesCount",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of output nodes in the training data\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "TrainDataPtr -\u003e IO Int",
        "fct-source": "src/HFANN-Train.html#getTrainDataOutputNodesCount",
        "fct-type": "function",
        "title": "getTrainDataOutputNodesCount"
      },
      "index": {
        "description": "Returns the number of output nodes in the training data",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "getTrainDataOutputNodesCount",
        "normalized": "TrainDataPtr-\u003eIO Int",
        "package": "hfann",
        "partial": "Train Data Output Nodes Count",
        "signature": "TrainDataPtr-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getTrainErrorFunction",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the error function used during training.\n\u003c/p\u003e\u003cp\u003eThe error function is described in \u003ccode\u003e\u003ca\u003eErrorFunction\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe default error function is \u003ccode\u003eerrorFunctionTanH\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetTrainErrorFunction\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr-\u003e IO ErrorFunction",
        "fct-type": "function",
        "title": "getTrainErrorFunction"
      },
      "index": {
        "description": "Return the error function used during training The error function is described in ErrorFunction The default error function is errorFunctionTanH See also setTrainErrorFunction",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "getTrainErrorFunction",
        "normalized": "FannPtr-\u003eIO ErrorFunction",
        "package": "hfann",
        "partial": "Train Error Function",
        "signature": "FannPtr-\u003eIO ErrorFunction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getTrainStopFunction",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the stop function used during training.\n\u003c/p\u003e\u003cp\u003eThe stop function is described in \u003ccode\u003e\u003ca\u003eStopFunction\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe default stop function is \u003ccode\u003estopFunctionMSE\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetTrainStopFunction\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetBitFailLimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr -\u003e IO StopFunction",
        "fct-source": "src/HFANN-Train.html#getTrainStopFunction",
        "fct-type": "function",
        "title": "getTrainStopFunction"
      },
      "index": {
        "description": "Returns the stop function used during training The stop function is described in StopFunction The default stop function is stopFunctionMSE See also setTrainStopFunction setBitFailLimit",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "getTrainStopFunction",
        "normalized": "FannPtr-\u003eIO StopFunction",
        "package": "hfann",
        "partial": "Train Stop Function",
        "signature": "FannPtr-\u003eIO StopFunction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getTrainingAlgorithm",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the training algorithm. This training algorithm is used by\n \u003ccode\u003e\u003ca\u003etrainOnData\u003c/a\u003e\u003c/code\u003e and associated functions.\n\u003c/p\u003e\u003cp\u003eNote that this algorithm is also used during \u003ccode\u003ecascadeTrainOnData\u003c/code\u003e although\n only fannTrainRPROP and fannTrainQuickProp is allowed during cascade\n training.\n\u003c/p\u003e\u003cp\u003eSee also:\n  \u003ccode\u003e\u003ca\u003esetTrainingAlgorithm\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTrainAlgorithm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr-\u003e IO TrainAlgorithm",
        "fct-type": "function",
        "title": "getTrainingAlgorithm"
      },
      "index": {
        "description": "Return the training algorithm This training algorithm is used by trainOnData and associated functions Note that this algorithm is also used during cascadeTrainOnData although only fannTrainRPROP and fannTrainQuickProp is allowed during cascade training See also setTrainingAlgorithm TrainAlgorithm",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "getTrainingAlgorithm",
        "normalized": "FannPtr-\u003eIO TrainAlgorithm",
        "package": "hfann",
        "partial": "Training Algorithm",
        "signature": "FannPtr-\u003eIO TrainAlgorithm"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:loadTrainData",
      "description": {
        "fct-descr": "\u003cp\u003eReads training data from a file.\n\u003c/p\u003e\u003cp\u003eThe file must be formatted like:\n\u003c/p\u003e\u003cpre\u003e num_records num_input num_output\n inputdata separated by space\n outputdata separated by space\n\n ...\n ...\n\n inputdata separated by space\n outputdata separated by space\n\u003c/pre\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003etrainOnData\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003edestroyTrain\u003c/code\u003e, \u003ccode\u003esaveTrain\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "String-\u003e IO TrainDataPtr",
        "fct-type": "function",
        "title": "loadTrainData"
      },
      "index": {
        "description": "Reads training data from file The file must be formatted like num records num input num output inputdata separated by space outputdata separated by space inputdata separated by space outputdata separated by space See also trainOnData destroyTrain saveTrain",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "loadTrainData",
        "normalized": "String-\u003eIO TrainDataPtr",
        "package": "hfann",
        "partial": "Train Data",
        "signature": "String-\u003eIO TrainDataPtr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:mergeTrainData",
      "description": {
        "fct-descr": "\u003cp\u003eMerges two training data sets into a new one.\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "TrainDataPtr-\u003e TrainDataPtr-\u003e IO TrainDataPtr",
        "fct-type": "function",
        "title": "mergeTrainData"
      },
      "index": {
        "description": "Merges two training data sets into new one",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "mergeTrainData",
        "normalized": "TrainDataPtr-\u003eTrainDataPtr-\u003eIO TrainDataPtr",
        "package": "hfann",
        "partial": "Train Data",
        "signature": "TrainDataPtr-\u003eTrainDataPtr-\u003eIO TrainDataPtr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:resetMSE",
      "description": {
        "fct-descr": "\u003cp\u003eReset the mean square error from the network.\n\u003c/p\u003e\u003cp\u003eThis function also resets the number of bits that fail.\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr -\u003e IO ()",
        "fct-source": "src/HFANN-Train.html#resetMSE",
        "fct-type": "function",
        "title": "resetMSE"
      },
      "index": {
        "description": "Reset the mean square error from the network This function also resets the number of bits that fail",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "resetMSE",
        "normalized": "FannPtr-\u003eIO()",
        "package": "hfann",
        "partial": "MSE",
        "signature": "FannPtr-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:saveTrainData",
      "description": {
        "fct-descr": "\u003cp\u003eSave the training structure to a file with the format as specified in\n \u003ccode\u003e\u003ca\u003eloadTrainData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSee also\n   \u003ccode\u003e\u003ca\u003eloadTrainData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "TrainDataPtr -\u003e String -\u003e IO ()",
        "fct-source": "src/HFANN-Train.html#saveTrainData",
        "fct-type": "function",
        "title": "saveTrainData"
      },
      "index": {
        "description": "Save the training structure to file with the format as specified in loadTrainData See also loadTrainData",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "saveTrainData",
        "normalized": "TrainDataPtr-\u003eString-\u003eIO()",
        "package": "hfann",
        "partial": "Train Data",
        "signature": "TrainDataPtr-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:scaleInputTrainData",
      "description": {
        "fct-descr": "\u003cp\u003eScales the inputs in the training data to the specified range.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003escaleOutputData\u003c/code\u003e, \u003ccode\u003e\u003ca\u003escaleTrainData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "TrainDataPtr-\u003e FannType-\u003e FannType-\u003e IO ()",
        "fct-type": "function",
        "title": "scaleInputTrainData"
      },
      "index": {
        "description": "Scales the inputs in the training data to the specified range See also scaleOutputData scaleTrainData",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "scaleInputTrainData",
        "normalized": "TrainDataPtr-\u003eFannType-\u003eFannType-\u003eIO()",
        "package": "hfann",
        "partial": "Input Train Data",
        "signature": "TrainDataPtr-\u003eFannType-\u003eFannType-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:scaleOutputTrainData",
      "description": {
        "fct-descr": "\u003cp\u003eScales the output in the training data to the specified range.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003escaleInputData\u003c/code\u003e, \u003ccode\u003e\u003ca\u003escaleTrainData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "TrainDataPtr-\u003e FannType-\u003e FannType-\u003e IO ()",
        "fct-type": "function",
        "title": "scaleOutputTrainData"
      },
      "index": {
        "description": "Scales the output in the training data to the specified range See also scaleInputData scaleTrainData",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "scaleOutputTrainData",
        "normalized": "TrainDataPtr-\u003eFannType-\u003eFannType-\u003eIO()",
        "package": "hfann",
        "partial": "Output Train Data",
        "signature": "TrainDataPtr-\u003eFannType-\u003eFannType-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:scaleTrainData",
      "description": {
        "fct-descr": "\u003cp\u003eScales the inputs and outputs in the training data to the specified range.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003escaleOutputData\u003c/code\u003e, \u003ccode\u003escaleInputData\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "TrainDataPtr-\u003e FannType-\u003e FannType-\u003e IO ()",
        "fct-type": "function",
        "title": "scaleTrainData"
      },
      "index": {
        "description": "Scales the inputs and outputs in the training data to the specified range See also scaleOutputData scaleInputData",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "scaleTrainData",
        "normalized": "TrainDataPtr-\u003eFannType-\u003eFannType-\u003eIO()",
        "package": "hfann",
        "partial": "Train Data",
        "signature": "TrainDataPtr-\u003eFannType-\u003eFannType-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setActivationFunction",
      "description": {
        "fct-descr": "\u003cp\u003eSet the activation function for the neuron specified in layer specified,\n counting the input layer as layer 0.\n\u003c/p\u003e\u003cp\u003eIt is not possible to set activation functions for the neurons in the input\n layer.\n\u003c/p\u003e\u003cp\u003eWhen choosing an activation function it is important to note that the\n activation function have different range. In \u003ccode\u003efannSigmoid\u003c/code\u003e is in the 0 .. 1\n range while fannSigmoidSymmetric is in the -1 .. 1 range and fannLinear is\n unbound.\n\u003c/p\u003e\u003cp\u003eThe default activation function is fannSigmoidStepwise.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetActivationFunctionLayer\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationFunctionHidden\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003esetActivationFunctionOutput\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationSteepness\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr-\u003e ActivationFunction-\u003e Int-\u003e Int-\u003e IO ()",
        "fct-type": "function",
        "title": "setActivationFunction"
      },
      "index": {
        "description": "Set the activation function for the neuron specified in layer specified counting the input layer as layer It is not possible to set activation functions for the neurons in the input layer When choosing an activation function it is important to note that the activation function have different range In fannSigmoid is in the range while fannSigmoidSymmetric is in the range and fannLinear is unbound The default activation function is fannSigmoidStepwise See also setActivationFunctionLayer setActivationFunctionHidden setActivationFunctionOutput setActivationSteepness",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "setActivationFunction",
        "normalized": "FannPtr-\u003eActivationFunction-\u003eInt-\u003eInt-\u003eIO()",
        "package": "hfann",
        "partial": "Activation Function",
        "signature": "FannPtr-\u003eActivationFunction-\u003eInt-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setActivationFunctionHidden",
      "description": {
        "fct-descr": "\u003cp\u003eSet the activation function for all the hidden layers.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetActivationFunction\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationFunctionLayer\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003esetActivationFunctionOutput\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr-\u003e ActivationFunction-\u003e IO ()",
        "fct-type": "function",
        "title": "setActivationFunctionHidden"
      },
      "index": {
        "description": "Set the activation function for all the hidden layers See also setActivationFunction setActivationFunctionLayer setActivationFunctionOutput",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "setActivationFunctionHidden",
        "normalized": "FannPtr-\u003eActivationFunction-\u003eIO()",
        "package": "hfann",
        "partial": "Activation Function Hidden",
        "signature": "FannPtr-\u003eActivationFunction-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setActivationFunctionLayer",
      "description": {
        "fct-descr": "\u003cp\u003eSet the activation function for all neurons of a given layer, counting\n the input layer as layer 0.\n\u003c/p\u003e\u003cp\u003eIt is not possible to set an activation function for the neurons in the\n input layer.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetActivationFunction\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationFunctionHidden\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003esetActivationFunctionOutput\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationSteepnessLayer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr-\u003e ActivationFunction-\u003e Int-\u003e IO ()",
        "fct-type": "function",
        "title": "setActivationFunctionLayer"
      },
      "index": {
        "description": "Set the activation function for all neurons of given layer counting the input layer as layer It is not possible to set an activation function for the neurons in the input layer See also setActivationFunction setActivationFunctionHidden setActivationFunctionOutput setActivationSteepnessLayer",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "setActivationFunctionLayer",
        "normalized": "FannPtr-\u003eActivationFunction-\u003eInt-\u003eIO()",
        "package": "hfann",
        "partial": "Activation Function Layer",
        "signature": "FannPtr-\u003eActivationFunction-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setActivationFunctionOutput",
      "description": {
        "fct-descr": "\u003cp\u003eSet the activation function for the output layer.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetActivationFunction\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationFunctionLayer\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003esetActivationFunctionHidden\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr-\u003e ActivationFunction-\u003e IO ()",
        "fct-type": "function",
        "title": "setActivationFunctionOutput"
      },
      "index": {
        "description": "Set the activation function for the output layer See also setActivationFunction setActivationFunctionLayer setActivationFunctionHidden",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "setActivationFunctionOutput",
        "normalized": "FannPtr-\u003eActivationFunction-\u003eIO()",
        "package": "hfann",
        "partial": "Activation Function Output",
        "signature": "FannPtr-\u003eActivationFunction-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setActivationSteepness",
      "description": {
        "fct-descr": "\u003cp\u003eSet the activation steepness of the specified neuron in the specified\n layer, counting the input layer as 0.\n\u003c/p\u003e\u003cp\u003eIt is not possible to set activation steepness for the neurons in the input\n layer.\n\u003c/p\u003e\u003cp\u003eThe steepness of an activation function says something about how fast the\n activation function goes from the minimum to the maximum. A high value\n for the activation function will also give a more agressive training.\n\u003c/p\u003e\u003cp\u003eWhen training networks where the output values should be at the extremes\n (usually 0 and 1, depending on the activation function), a steep activation\n can be used (e.g. 1.0).\n\u003c/p\u003e\u003cp\u003eThe default activation steepness is 0.5\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetActivationSteepnessLayer\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationSteepnessHidden\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003esetActivationSteepnessOutput\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationFunction\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr-\u003e FannType-\u003e Int-\u003e Int-\u003e IO ()",
        "fct-type": "function",
        "title": "setActivationSteepness"
      },
      "index": {
        "description": "Set the activation steepness of the specified neuron in the specified layer counting the input layer as It is not possible to set activation steepness for the neurons in the input layer The steepness of an activation function says something about how fast the activation function goes from the minimum to the maximum high value for the activation function will also give more agressive training When training networks where the output values should be at the extremes usually and depending on the activation function steep activation can be used e.g The default activation steepness is See also setActivationSteepnessLayer setActivationSteepnessHidden setActivationSteepnessOutput setActivationFunction",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "setActivationSteepness",
        "normalized": "FannPtr-\u003eFannType-\u003eInt-\u003eInt-\u003eIO()",
        "package": "hfann",
        "partial": "Activation Steepness",
        "signature": "FannPtr-\u003eFannType-\u003eInt-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setActivationSteepnessHidden",
      "description": {
        "fct-descr": "\u003cp\u003eSet the activation steepness of all the nodes in all hidden layers.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetActivationSteepness\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationSteepnessLayer\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003esetActivationSteepnessOutput\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationFunction\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr-\u003e FannType-\u003e IO ()",
        "fct-type": "function",
        "title": "setActivationSteepnessHidden"
      },
      "index": {
        "description": "Set the activation steepness of all the nodes in all hidden layers See also setActivationSteepness setActivationSteepnessLayer setActivationSteepnessOutput setActivationFunction",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "setActivationSteepnessHidden",
        "normalized": "FannPtr-\u003eFannType-\u003eIO()",
        "package": "hfann",
        "partial": "Activation Steepness Hidden",
        "signature": "FannPtr-\u003eFannType-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setActivationSteepnessLayer",
      "description": {
        "fct-descr": "\u003cp\u003eSet the activation steepness for all of the neurons in the given layer,\n counting the input layer as layer 0.\n\u003c/p\u003e\u003cp\u003eIt is not possible to set the activation steepness for the neurons in the\n input layer.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetActivationSteepness\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationSteepnessHidden\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003esetActivationSteepnessOutput\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationFunction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr-\u003e FannType-\u003e Int-\u003e IO ()",
        "fct-type": "function",
        "title": "setActivationSteepnessLayer"
      },
      "index": {
        "description": "Set the activation steepness for all of the neurons in the given layer counting the input layer as layer It is not possible to set the activation steepness for the neurons in the input layer See also setActivationSteepness setActivationSteepnessHidden setActivationSteepnessOutput setActivationFunction",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "setActivationSteepnessLayer",
        "normalized": "FannPtr-\u003eFannType-\u003eInt-\u003eIO()",
        "package": "hfann",
        "partial": "Activation Steepness Layer",
        "signature": "FannPtr-\u003eFannType-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setActivationSteepnessOutput",
      "description": {
        "fct-descr": "\u003cp\u003eSet the activation steepness of all the nodes in all output layer.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetActivationSteepness\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationSteepnessLayer\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003esetActivationSteepnessHidden\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationFunction\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr-\u003e FannType-\u003e IO ()",
        "fct-type": "function",
        "title": "setActivationSteepnessOutput"
      },
      "index": {
        "description": "Set the activation steepness of all the nodes in all output layer See also setActivationSteepness setActivationSteepnessLayer setActivationSteepnessHidden setActivationFunction",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "setActivationSteepnessOutput",
        "normalized": "FannPtr-\u003eFannType-\u003eIO()",
        "package": "hfann",
        "partial": "Activation Steepness Output",
        "signature": "FannPtr-\u003eFannType-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setBitFailLimit",
      "description": {
        "fct-descr": "\u003cp\u003eSet the bit fail limit used during training.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003egetBitFailLimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr -\u003e FannType -\u003e IO ()",
        "fct-source": "src/HFANN-Train.html#setBitFailLimit",
        "fct-type": "function",
        "title": "setBitFailLimit"
      },
      "index": {
        "description": "Set the bit fail limit used during training See also getBitFailLimit",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "setBitFailLimit",
        "normalized": "FannPtr-\u003eFannType-\u003eIO()",
        "package": "hfann",
        "partial": "Bit Fail Limit",
        "signature": "FannPtr-\u003eFannType-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setCallback",
      "description": {
        "fct-descr": "\u003cp\u003eSet the callback function to be used for reporting and to stop training\n\u003c/p\u003e\u003cp\u003eThe callback function will be called based on the \"Epoch between reports\"\n defined frequency.\n\u003c/p\u003e\u003cp\u003eThe type of the callback function is:\n\u003c/p\u003e\u003cpre\u003e callback :: FannPtr      -- The ANN being trained\n          -\u003e TrainDataPtr -- The training data in use\n          -\u003e Int          -- Max number of epochs\n          -\u003e Int          -- Number of epochs between reports\n          -\u003e Float        -- Desired error\n          -\u003e Int          -- Current epoch\n          -\u003e Bool         -- True to terminate training, False to continue\n\u003c/pre\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr -\u003e CallbackType -\u003e IO ()",
        "fct-source": "src/HFANN-Train.html#setCallback",
        "fct-type": "function",
        "title": "setCallback"
      },
      "index": {
        "description": "Set the callback function to be used for reporting and to stop training The callback function will be called based on the Epoch between reports defined frequency The type of the callback function is callback FannPtr The ANN being trained TrainDataPtr The training data in use Int Max number of epochs Int Number of epochs between reports Float Desired error Int Current epoch Bool True to terminate training False to continue",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "setCallback",
        "normalized": "FannPtr-\u003eCallbackType-\u003eIO()",
        "package": "hfann",
        "partial": "Callback",
        "signature": "FannPtr-\u003eCallbackType-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setLearningMomentum",
      "description": {
        "fct-descr": "\u003cp\u003eSet the learning momentum.\n\u003c/p\u003e\u003cp\u003eMore info available in \u003ccode\u003e\u003ca\u003egetLearningMomentum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr -\u003e Float -\u003e IO ()",
        "fct-source": "src/HFANN-Train.html#setLearningMomentum",
        "fct-type": "function",
        "title": "setLearningMomentum"
      },
      "index": {
        "description": "Set the learning momentum More info available in getLearningMomentum",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "setLearningMomentum",
        "normalized": "FannPtr-\u003eFloat-\u003eIO()",
        "package": "hfann",
        "partial": "Learning Momentum",
        "signature": "FannPtr-\u003eFloat-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setLearningRate",
      "description": {
        "fct-descr": "\u003cp\u003eSet the learning rate.\n\u003c/p\u003e\u003cp\u003eSee getLearningRate for more information about the learning rate.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003egetLearingRate\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr -\u003e Float -\u003e IO ()",
        "fct-source": "src/HFANN-Train.html#setLearningRate",
        "fct-type": "function",
        "title": "setLearningRate"
      },
      "index": {
        "description": "Set the learning rate See getLearningRate for more information about the learning rate See also getLearingRate",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "setLearningRate",
        "normalized": "FannPtr-\u003eFloat-\u003eIO()",
        "package": "hfann",
        "partial": "Learning Rate",
        "signature": "FannPtr-\u003eFloat-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setQuickPropDecay",
      "description": {
        "fct-descr": "\u003cp\u003eSets the quickprop decay factor\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003egetQuickPropDecay\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr -\u003e Float -\u003e IO ()",
        "fct-source": "src/HFANN-Train.html#setQuickPropDecay",
        "fct-type": "function",
        "title": "setQuickPropDecay"
      },
      "index": {
        "description": "Sets the quickprop decay factor See also getQuickPropDecay",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "setQuickPropDecay",
        "normalized": "FannPtr-\u003eFloat-\u003eIO()",
        "package": "hfann",
        "partial": "Quick Prop Decay",
        "signature": "FannPtr-\u003eFloat-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setQuickPropMu",
      "description": {
        "fct-descr": "\u003cp\u003eSets the quickprop mu factor\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003egetQuickPropMu\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr -\u003e Float -\u003e IO ()",
        "fct-source": "src/HFANN-Train.html#setQuickPropMu",
        "fct-type": "function",
        "title": "setQuickPropMu"
      },
      "index": {
        "description": "Sets the quickprop mu factor See also getQuickPropMu",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "setQuickPropMu",
        "normalized": "FannPtr-\u003eFloat-\u003eIO()",
        "package": "hfann",
        "partial": "Quick Prop Mu",
        "signature": "FannPtr-\u003eFloat-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setRPROPDecreaseFactor",
      "description": {
        "fct-descr": "\u003cp\u003eSets the RPROP decrease factor\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003egetRPROPDecreaseFactor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr -\u003e Float -\u003e IO ()",
        "fct-source": "src/HFANN-Train.html#setRPROPDecreaseFactor",
        "fct-type": "function",
        "title": "setRPROPDecreaseFactor"
      },
      "index": {
        "description": "Sets the RPROP decrease factor See also getRPROPDecreaseFactor",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "setRPROPDecreaseFactor",
        "normalized": "FannPtr-\u003eFloat-\u003eIO()",
        "package": "hfann",
        "partial": "RPROPDecrease Factor",
        "signature": "FannPtr-\u003eFloat-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setRPROPDeltaMax",
      "description": {
        "fct-descr": "\u003cp\u003eSets the RPROP delta max\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003egetRPROPDeltaMax\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr -\u003e Float -\u003e IO ()",
        "fct-source": "src/HFANN-Train.html#setRPROPDeltaMax",
        "fct-type": "function",
        "title": "setRPROPDeltaMax"
      },
      "index": {
        "description": "Sets the RPROP delta max See also getRPROPDeltaMax",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "setRPROPDeltaMax",
        "normalized": "FannPtr-\u003eFloat-\u003eIO()",
        "package": "hfann",
        "partial": "RPROPDelta Max",
        "signature": "FannPtr-\u003eFloat-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setRPROPDeltaMin",
      "description": {
        "fct-descr": "\u003cp\u003eSets the RPROP delta min\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003egetRPROPDeltaMin\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr -\u003e Float -\u003e IO ()",
        "fct-source": "src/HFANN-Train.html#setRPROPDeltaMin",
        "fct-type": "function",
        "title": "setRPROPDeltaMin"
      },
      "index": {
        "description": "Sets the RPROP delta min See also getRPROPDeltaMin",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "setRPROPDeltaMin",
        "normalized": "FannPtr-\u003eFloat-\u003eIO()",
        "package": "hfann",
        "partial": "RPROPDelta Min",
        "signature": "FannPtr-\u003eFloat-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setRPROPIncreaseFactor",
      "description": {
        "fct-descr": "\u003cp\u003eSets the RPROP increase factor\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003egetRPROPIncreaseFactor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr -\u003e Float -\u003e IO ()",
        "fct-source": "src/HFANN-Train.html#setRPROPIncreaseFactor",
        "fct-type": "function",
        "title": "setRPROPIncreaseFactor"
      },
      "index": {
        "description": "Sets the RPROP increase factor See also getRPROPIncreaseFactor",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "setRPROPIncreaseFactor",
        "normalized": "FannPtr-\u003eFloat-\u003eIO()",
        "package": "hfann",
        "partial": "RPROPIncrease Factor",
        "signature": "FannPtr-\u003eFloat-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setTrainErrorFunction",
      "description": {
        "fct-descr": "\u003cp\u003eSet the error function used during training.\n\u003c/p\u003e\u003cp\u003eThe error function is described in \u003ccode\u003e\u003ca\u003eErrorFunction\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003egetTrainErrorFunction\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr-\u003e ErrorFunction-\u003e IO ()",
        "fct-type": "function",
        "title": "setTrainErrorFunction"
      },
      "index": {
        "description": "Set the error function used during training The error function is described in ErrorFunction See also getTrainErrorFunction",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "setTrainErrorFunction",
        "normalized": "FannPtr-\u003eErrorFunction-\u003eIO()",
        "package": "hfann",
        "partial": "Train Error Function",
        "signature": "FannPtr-\u003eErrorFunction-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setTrainStopFunction",
      "description": {
        "fct-descr": "\u003cp\u003eSet the stop function used during training.\n\u003c/p\u003e\u003cp\u003eThe stop function is described in \u003ccode\u003e\u003ca\u003eStopFunction\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe default stop function is \u003ccode\u003estopFunctionMSE\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003egetTrainStopFunction\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetBitFailLimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr -\u003e StopFunction -\u003e IO ()",
        "fct-source": "src/HFANN-Train.html#setTrainStopFunction",
        "fct-type": "function",
        "title": "setTrainStopFunction"
      },
      "index": {
        "description": "Set the stop function used during training The stop function is described in StopFunction The default stop function is stopFunctionMSE See also getTrainStopFunction getBitFailLimit",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "setTrainStopFunction",
        "normalized": "FannPtr-\u003eStopFunction-\u003eIO()",
        "package": "hfann",
        "partial": "Train Stop Function",
        "signature": "FannPtr-\u003eStopFunction-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setTrainingAlgorithm",
      "description": {
        "fct-descr": "\u003cp\u003eSet the training algorithm.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003egetTrainingAlgorithm\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eTrainingAlgorithm\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr-\u003e TrainAlgorithm-\u003e IO ()",
        "fct-type": "function",
        "title": "setTrainingAlgorithm"
      },
      "index": {
        "description": "Set the training algorithm See also getTrainingAlgorithm TrainingAlgorithm",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "setTrainingAlgorithm",
        "normalized": "FannPtr-\u003eTrainAlgorithm-\u003eIO()",
        "package": "hfann",
        "partial": "Training Algorithm",
        "signature": "FannPtr-\u003eTrainAlgorithm-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:shuffleTrainData",
      "description": {
        "fct-descr": "\u003cp\u003eShuffles training data, randomizing the order.\n\u003c/p\u003e\u003cp\u003eThis is recomended for incremental training, while it has no influence\n during batch training\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "TrainDataPtr-\u003e IO ()",
        "fct-type": "function",
        "title": "shuffleTrainData"
      },
      "index": {
        "description": "Shuffles training data randomizing the order This is recomended for incremental training while it has no influence during batch training",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "shuffleTrainData",
        "normalized": "TrainDataPtr-\u003eIO()",
        "package": "hfann",
        "partial": "Train Data",
        "signature": "TrainDataPtr-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:subsetTrainData",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a copy of a subset of the training data, starting at the given\n offset and taking the given count of elements.\n\u003c/p\u003e\u003cpre\u003e len \u003c- trainDataLength tdata\n newtdata \u003c- subsetTrainData tdata 0 len\n\u003c/pre\u003e\u003cp\u003eWill do the same as \u003ccode\u003e\u003ca\u003eduplicateTrainData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003etrainDataLength\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "TrainDataPtr -\u003e Int -\u003e Int -\u003e IO TrainDataPtr",
        "fct-source": "src/HFANN-Train.html#subsetTrainData",
        "fct-type": "function",
        "title": "subsetTrainData"
      },
      "index": {
        "description": "Returns copy of subset of the training data starting at the given offset and taking the given count of elements len trainDataLength tdata newtdata subsetTrainData tdata len Will do the same as duplicateTrainData See also trainDataLength",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "subsetTrainData",
        "normalized": "TrainDataPtr-\u003eInt-\u003eInt-\u003eIO TrainDataPtr",
        "package": "hfann",
        "partial": "Train Data",
        "signature": "TrainDataPtr-\u003eInt-\u003eInt-\u003eIO TrainDataPtr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:test",
      "description": {
        "fct-descr": "\u003cp\u003eTest the Neural Network on the given input and output values\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr-\u003e [FannType]-\u003e [FannType]-\u003e IO [FannType]",
        "fct-type": "function",
        "title": "test"
      },
      "index": {
        "description": "Test the Neural Network on the given input and output values",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "test",
        "normalized": "FannPtr-\u003e[FannType]-\u003e[FannType]-\u003eIO[FannType]",
        "package": "hfann",
        "partial": "",
        "signature": "FannPtr-\u003e[FannType]-\u003e[FannType]-\u003eIO[FannType]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:testData",
      "description": {
        "fct-descr": "\u003cp\u003eTest ANN on training data\n\u003c/p\u003e\u003cp\u003eThis function will run the ANN on the training data and return the error\n value. It can be used to validate the check the quality of the ANN on some\n test data.\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr-\u003e TrainDataPtr-\u003e IO CFloat",
        "fct-type": "function",
        "title": "testData"
      },
      "index": {
        "description": "Test ANN on training data This function will run the ANN on the training data and return the error value It can be used to validate the check the quality of the ANN on some test data",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "testData",
        "normalized": "FannPtr-\u003eTrainDataPtr-\u003eIO CFloat",
        "package": "hfann",
        "partial": "Data",
        "signature": "FannPtr-\u003eTrainDataPtr-\u003eIO CFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:train",
      "description": {
        "fct-descr": "\u003cp\u003eTrain the Neural Network on the given input and output values\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr-\u003e [FannType]-\u003e [FannType]-\u003e IO ()",
        "fct-type": "function",
        "title": "train"
      },
      "index": {
        "description": "Train the Neural Network on the given input and output values",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "train",
        "normalized": "FannPtr-\u003e[FannType]-\u003e[FannType]-\u003eIO()",
        "package": "hfann",
        "partial": "",
        "signature": "FannPtr-\u003e[FannType]-\u003e[FannType]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:trainDataLength",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of training patterns in the training data.\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "TrainDataPtr -\u003e IO Int",
        "fct-source": "src/HFANN-Train.html#trainDataLength",
        "fct-type": "function",
        "title": "trainDataLength"
      },
      "index": {
        "description": "Returns the number of training patterns in the training data",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "trainDataLength",
        "normalized": "TrainDataPtr-\u003eIO Int",
        "package": "hfann",
        "partial": "Data Length",
        "signature": "TrainDataPtr-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:trainEpoch",
      "description": {
        "fct-descr": "\u003cp\u003eTrain one epoch with a set of training data\n\u003c/p\u003e\u003cp\u003eTrain one epoch with the given training data. One epoch is where all the\n training data is considered exactly once.\n\u003c/p\u003e\u003cp\u003eThe function returns the MSE error as it is calculated either before or\n during the actual training. This is not the actual MSE after the training\n epoch but since calculating this will require to go through the entire\n training set once more it is more adequate to use this value during\n training.\n\u003c/p\u003e\u003cp\u003eThe training algorithm used by this function is chosen by the\n \u003ccode\u003e\u003ca\u003esetTrainingAlgorithm\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003etrainOnData\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etestData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr -\u003e TrainDataPtr -\u003e IO Float",
        "fct-source": "src/HFANN-Train.html#trainEpoch",
        "fct-type": "function",
        "title": "trainEpoch"
      },
      "index": {
        "description": "Train one epoch with set of training data Train one epoch with the given training data One epoch is where all the training data is considered exactly once The function returns the MSE error as it is calculated either before or during the actual training This is not the actual MSE after the training epoch but since calculating this will require to go through the entire training set once more it is more adequate to use this value during training The training algorithm used by this function is chosen by the setTrainingAlgorithm function See also trainOnData testData",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "trainEpoch",
        "normalized": "FannPtr-\u003eTrainDataPtr-\u003eIO Float",
        "package": "hfann",
        "partial": "Epoch",
        "signature": "FannPtr-\u003eTrainDataPtr-\u003eIO Float"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:trainOnData",
      "description": {
        "fct-descr": "\u003cp\u003eTrain the Neural Network on a training dataset.\n\u003c/p\u003e\u003cp\u003eInstead of printing out reports every \"epochs between reports\", a callback\n function can be called (see \u003ccode\u003e\u003ca\u003esetCallback\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eA value of zero in the \u003ca\u003eepochs between reports\u003c/a\u003e means no reports should be\n printed.\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr-\u003e TrainDataPtr-\u003e Int-\u003e Int-\u003e Double-\u003e IO ()",
        "fct-type": "function",
        "title": "trainOnData"
      },
      "index": {
        "description": "Train the Neural Network on training dataset Instead of printing out reports every epochs between reports callback function can be called see setCallback value of zero in the epochs between reports means no reports should be printed",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "trainOnData",
        "normalized": "FannPtr-\u003eTrainDataPtr-\u003eInt-\u003eInt-\u003eDouble-\u003eIO()",
        "package": "hfann",
        "partial": "On Data",
        "signature": "FannPtr-\u003eTrainDataPtr-\u003eInt-\u003eInt-\u003eDouble-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:trainOnFile",
      "description": {
        "fct-descr": "\u003cp\u003eTrain the Neural Network on the given data file\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "FannPtr-\u003e String-\u003e Int-\u003e Int-\u003e Double-\u003e IO ()",
        "fct-type": "function",
        "title": "trainOnFile"
      },
      "index": {
        "description": "Train the Neural Network on the given data file",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "trainOnFile",
        "normalized": "FannPtr-\u003eString-\u003eInt-\u003eInt-\u003eDouble-\u003eIO()",
        "package": "hfann",
        "partial": "On File",
        "signature": "FannPtr-\u003eString-\u003eInt-\u003eInt-\u003eDouble-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:withTrainData",
      "description": {
        "fct-descr": "\u003cp\u003eRead training data from file and run the given function on that data.\n\u003c/p\u003e",
        "fct-module": "HFANN.Train",
        "fct-package": "hfann",
        "fct-signature": "String-\u003e (TrainDataPtr -\u003e IO a)-\u003e IO a",
        "fct-type": "function",
        "title": "withTrainData"
      },
      "index": {
        "description": "Read training data from file and run the given function on that data",
        "hierarchy": "HFANN Train",
        "module": "HFANN.Train",
        "name": "withTrainData",
        "normalized": "String-\u003e(TrainDataPtr-\u003eIO a)-\u003eIO a",
        "package": "hfann",
        "partial": "Train Data",
        "signature": "String-\u003e(TrainDataPtr-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Fast Artificial Neural Network Library (FANN) is a free open source\n neural network library written in C with support for both fully connected\n and sparsely connected networks (\u003ca\u003ehttp://leenissen.dk/fann/\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eHFANN is a Haskell interface to this library.\n\u003c/p\u003e\u003cp\u003eSee below for examples.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "HFANN",
        "fct-package": "hfann",
        "fct-signature": "module",
        "fct-source": "src/HFANN.html",
        "fct-type": "module",
        "title": "HFANN"
      },
      "index": {
        "description": "The Fast Artificial Neural Network Library FANN is free open source neural network library written in with support for both fully connected and sparsely connected networks http leenissen.dk fann HFANN is Haskell interface to this library See below for examples",
        "hierarchy": "HFANN",
        "module": "HFANN",
        "name": "HFANN",
        "normalized": "",
        "package": "hfann",
        "partial": "HFANN",
        "signature": ""
      }
    }
  }
]