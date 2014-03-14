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
        "word": "hfann"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Fast Artificial Neural Network Library (FANN) is a free open source\n neural network library written in C with support for both fully connected\n and sparsely connected networks (\u003ca\u003ehttp://leenissen.dk/fann/\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eHFANN is a Haskell interface to this library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HFANN.Base",
          "name": "Base",
          "package": "hfann",
          "source": "src/HFANN-Base.html",
          "type": "module"
        },
        "index": {
          "description": "The Fast Artificial Neural Network Library FANN is free open source neural network library written in with support for both fully connected and sparsely connected networks http leenissen.dk fann HFANN is Haskell interface to this library",
          "hierarchy": "HFANN Base",
          "module": "HFANN.Base",
          "name": "Base",
          "package": "hfann",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the total number of connections of the Neural Network\n\u003c/p\u003e",
          "module": "HFANN.Base",
          "name": "getConnectionsCount",
          "package": "hfann",
          "signature": "FannPtr-\u003e IO Int",
          "type": "function"
        },
        "index": {
          "description": "Return the total number of connections of the Neural Network",
          "hierarchy": "HFANN Base",
          "module": "HFANN.Base",
          "name": "getConnectionsCount",
          "normalized": "FannPtr-\u003eIO Int",
          "package": "hfann",
          "partial": "Connections Count",
          "signature": "FannPtr-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Base.html#v:getConnectionsCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of input nodes of the Neural Network\n\u003c/p\u003e",
          "module": "HFANN.Base",
          "name": "getInputNodesCount",
          "package": "hfann",
          "signature": "FannPtr-\u003e IO Int",
          "type": "function"
        },
        "index": {
          "description": "Return the number of input nodes of the Neural Network",
          "hierarchy": "HFANN Base",
          "module": "HFANN.Base",
          "name": "getInputNodesCount",
          "normalized": "FannPtr-\u003eIO Int",
          "package": "hfann",
          "partial": "Input Nodes Count",
          "signature": "FannPtr-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Base.html#v:getInputNodesCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of output nodes of the Neural Network\n\u003c/p\u003e",
          "module": "HFANN.Base",
          "name": "getOutputNodesCount",
          "package": "hfann",
          "signature": "FannPtr-\u003e IO Int",
          "type": "function"
        },
        "index": {
          "description": "Return the number of output nodes of the Neural Network",
          "hierarchy": "HFANN Base",
          "module": "HFANN.Base",
          "name": "getOutputNodesCount",
          "normalized": "FannPtr-\u003eIO Int",
          "package": "hfann",
          "partial": "Output Nodes Count",
          "signature": "FannPtr-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Base.html#v:getOutputNodesCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the total number of nodes of the Neural Network\n\u003c/p\u003e",
          "module": "HFANN.Base",
          "name": "getTotalNodesCount",
          "package": "hfann",
          "signature": "FannPtr-\u003e IO Int",
          "type": "function"
        },
        "index": {
          "description": "Return the total number of nodes of the Neural Network",
          "hierarchy": "HFANN Base",
          "module": "HFANN.Base",
          "name": "getTotalNodesCount",
          "normalized": "FannPtr-\u003eIO Int",
          "package": "hfann",
          "partial": "Total Nodes Count",
          "signature": "FannPtr-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Base.html#v:getTotalNodesCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize the weights using Widrow + Nguyen&#8217;s algorithm.\n\u003c/p\u003e\u003cp\u003eThis function behaves similarly to fann_randomize_weights.  It will use the\n algorithm developed by Derrick Nguyen and Bernard Widrow to set the weights\n in such a way as to speed up training.  This technique is not always\n successful, and in some cases can be less efficient than a purely random\n initialization.\n\u003c/p\u003e\u003cp\u003eThe algorithm requires access to the range of the input data (ie, largest\n and smallest input), and therefore accepts a second argument, data, which\n is the training data that will be used to train the network.\n\u003c/p\u003e",
          "module": "HFANN.Base",
          "name": "initWeights",
          "package": "hfann",
          "signature": "FannPtr-\u003e TrainDataPtr-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Initialize the weights using Widrow Nguyen algorithm This function behaves similarly to fann randomize weights It will use the algorithm developed by Derrick Nguyen and Bernard Widrow to set the weights in such way as to speed up training This technique is not always successful and in some cases can be less efficient than purely random initialization The algorithm requires access to the range of the input data ie largest and smallest input and therefore accepts second argument data which is the training data that will be used to train the network",
          "hierarchy": "HFANN Base",
          "module": "HFANN.Base",
          "name": "initWeights",
          "normalized": "FannPtr-\u003eTrainDataPtr-\u003eIO()",
          "package": "hfann",
          "partial": "Weights",
          "signature": "FannPtr-\u003eTrainDataPtr-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Base.html#v:initWeights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint the ANN connections\n\u003c/p\u003e",
          "module": "HFANN.Base",
          "name": "printConnections",
          "package": "hfann",
          "signature": "FannPtr -\u003e IO ()",
          "source": "src/HFANN-Base.html#printConnections",
          "type": "function"
        },
        "index": {
          "description": "Print the ANN connections",
          "hierarchy": "HFANN Base",
          "module": "HFANN.Base",
          "name": "printConnections",
          "normalized": "FannPtr-\u003eIO()",
          "package": "hfann",
          "partial": "Connections",
          "signature": "FannPtr-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Base.html#v:printConnections"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint the ANN parameters\n\u003c/p\u003e",
          "module": "HFANN.Base",
          "name": "printParameters",
          "package": "hfann",
          "signature": "FannPtr -\u003e IO ()",
          "source": "src/HFANN-Base.html#printParameters",
          "type": "function"
        },
        "index": {
          "description": "Print the ANN parameters",
          "hierarchy": "HFANN Base",
          "module": "HFANN.Base",
          "name": "printParameters",
          "normalized": "FannPtr-\u003eIO()",
          "package": "hfann",
          "partial": "Parameters",
          "signature": "FannPtr-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Base.html#v:printParameters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandomize weights to values in the given range\n\u003c/p\u003e\u003cp\u003eWeights in a newly created ANN are already initialized to random values.\n You can use this function if you want to customize the random weights\n upper and lower bounds.\n\u003c/p\u003e",
          "module": "HFANN.Base",
          "name": "randomizeWeights",
          "package": "hfann",
          "signature": "FannPtr-\u003e (FannType, FannType)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Randomize weights to values in the given range Weights in newly created ANN are already initialized to random values You can use this function if you want to customize the random weights upper and lower bounds",
          "hierarchy": "HFANN Base",
          "module": "HFANN.Base",
          "name": "randomizeWeights",
          "normalized": "FannPtr-\u003e(FannType,FannType)-\u003eIO()",
          "package": "hfann",
          "partial": "Weights",
          "signature": "FannPtr-\u003e(FannType,FannType)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Base.html#v:randomizeWeights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the trained Neural Network on provided input\n\u003c/p\u003e",
          "module": "HFANN.Base",
          "name": "runFann",
          "package": "hfann",
          "signature": "FannPtr-\u003e [FannType]-\u003e IO [FannType]",
          "type": "function"
        },
        "index": {
          "description": "Run the trained Neural Network on provided input",
          "hierarchy": "HFANN Base",
          "module": "HFANN.Base",
          "name": "runFann",
          "normalized": "FannPtr-\u003e[FannType]-\u003eIO[FannType]",
          "package": "hfann",
          "partial": "Fann",
          "signature": "FannPtr-\u003e[FannType]-\u003eIO[FannType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Base.html#v:runFann"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new sparse not fully connected Neural Network with shortcut\n   connections between layers and call the given function with the ANN\n   as argument. When finished destroy the Neural Network\n\u003c/p\u003e",
          "module": "HFANN.Base",
          "name": "withShortcutFann",
          "package": "hfann",
          "signature": "[Int]-\u003e (FannPtr -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Create new sparse not fully connected Neural Network with shortcut connections between layers and call the given function with the ANN as argument When finished destroy the Neural Network",
          "hierarchy": "HFANN Base",
          "module": "HFANN.Base",
          "name": "withShortcutFann",
          "normalized": "[Int]-\u003e(FannPtr-\u003eIO a)-\u003eIO a",
          "package": "hfann",
          "partial": "Shortcut Fann",
          "signature": "[Int]-\u003e(FannPtr-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Base.html#v:withShortcutFann"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new sparse not fully connected Neural Network and call the\n   given function with the ANN as argument. When finished destroy the ANN.\n\u003c/p\u003e",
          "module": "HFANN.Base",
          "name": "withSparseFann",
          "package": "hfann",
          "signature": "Float-\u003e [Int]-\u003e (FannPtr -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Create new sparse not fully connected Neural Network and call the given function with the ANN as argument When finished destroy the ANN",
          "hierarchy": "HFANN Base",
          "module": "HFANN.Base",
          "name": "withSparseFann",
          "normalized": "Float-\u003e[Int]-\u003e(FannPtr-\u003eIO a)-\u003eIO a",
          "package": "hfann",
          "partial": "Sparse Fann",
          "signature": "Float-\u003e[Int]-\u003e(FannPtr-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Base.html#v:withSparseFann"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new standard fully connected Neural Network and call the\n   given function with the ANN as argument.\n   When finished destroy the Neural Network.\n\u003c/p\u003e\u003cp\u003eThe structure of the ANN is given by the first parameter. It's an\n   Int list giving the number of nodes per layer from input layer to\n   output layer.\n\u003c/p\u003e\u003cp\u003eExample: \u003ccode\u003e[2,3,1]\u003c/code\u003e would describe an ANN with 2 nodes in the input layer,\n   one hidden layer of 3 nodes and 1 node in the output layer.\n\u003c/p\u003e\u003cp\u003eThe function provided as second argument will be called with the created\n   ANN as parameter.\n\u003c/p\u003e",
          "module": "HFANN.Base",
          "name": "withStandardFann",
          "package": "hfann",
          "signature": "[Int]-\u003e (FannPtr -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Create new standard fully connected Neural Network and call the given function with the ANN as argument When finished destroy the Neural Network The structure of the ANN is given by the first parameter It an Int list giving the number of nodes per layer from input layer to output layer Example would describe an ANN with nodes in the input layer one hidden layer of nodes and node in the output layer The function provided as second argument will be called with the created ANN as parameter",
          "hierarchy": "HFANN Base",
          "module": "HFANN.Base",
          "name": "withStandardFann",
          "normalized": "[Int]-\u003e(FannPtr-\u003eIO a)-\u003eIO a",
          "package": "hfann",
          "partial": "Standard Fann",
          "signature": "[Int]-\u003e(FannPtr-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Base.html#v:withStandardFann"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Fast Artificial Neural Network Library (FANN) is a free open source\n neural network library written in C with support for both fully connected\n and sparsely connected networks (\u003ca\u003ehttp://leenissen.dk/fann/\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eHFANN is a Haskell interface to this library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HFANN.Data",
          "name": "Data",
          "package": "hfann",
          "source": "src/HFANN-Data.html",
          "type": "module"
        },
        "index": {
          "description": "The Fast Artificial Neural Network Library FANN is free open source neural network library written in with support for both fully connected and sparsely connected networks http leenissen.dk fann HFANN is Haskell interface to this library",
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "Data",
          "package": "hfann",
          "partial": "Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the \u003ccode\u003eActivation Function\u003c/code\u003e enumeration\n\u003c/p\u003e",
          "module": "HFANN.Data",
          "name": "ActivationFunction",
          "package": "hfann",
          "source": "src/HFANN-Data.html#ActivationFunction",
          "type": "type"
        },
        "index": {
          "description": "The type of the Activation Function enumeration",
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "ActivationFunction",
          "package": "hfann",
          "partial": "Activation Function",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#t:ActivationFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe C callback function type\n\u003c/p\u003e",
          "module": "HFANN.Data",
          "name": "CCallbackType",
          "package": "hfann",
          "source": "src/HFANN-Data.html#CCallbackType",
          "type": "type"
        },
        "index": {
          "description": "The callback function type",
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "CCallbackType",
          "package": "hfann",
          "partial": "CCallback Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#t:CCallbackType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe C input/output type\n\u003c/p\u003e\u003cp\u003eThis is the data type used in the C library to represent the input/output\n data.\n\u003c/p\u003e",
          "module": "HFANN.Data",
          "name": "CFannType",
          "package": "hfann",
          "source": "src/HFANN-Data.html#CFannType",
          "type": "type"
        },
        "index": {
          "description": "The input output type This is the data type used in the library to represent the input output data",
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "CFannType",
          "package": "hfann",
          "partial": "CFann Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#t:CFannType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pointer to the C input/output type\n\u003c/p\u003e",
          "module": "HFANN.Data",
          "name": "CFannTypePtr",
          "package": "hfann",
          "source": "src/HFANN-Data.html#CFannTypePtr",
          "type": "type"
        },
        "index": {
          "description": "pointer to the input output type",
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "CFannTypePtr",
          "package": "hfann",
          "partial": "CFann Type Ptr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#t:CFannTypePtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Haskell Callback function type\n\u003c/p\u003e",
          "module": "HFANN.Data",
          "name": "CallbackType",
          "package": "hfann",
          "source": "src/HFANN-Data.html#CallbackType",
          "type": "type"
        },
        "index": {
          "description": "The Haskell Callback function type",
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "CallbackType",
          "package": "hfann",
          "partial": "Callback Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#t:CallbackType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError function used during training.\n\u003c/p\u003e\u003cp\u003eerrorFunctionLinear - Standard linear error function.\n errorFunctionTanH - Tanh error function, usually better but can require a\n lower learning rate. This error function agressively target outputs that\n differ much from the desired, while not targetting output that only differ\n a little that much.\n\u003c/p\u003e\u003cp\u003eThe tanh function is not recommended for cascade training and incremental\n training.\n\u003c/p\u003e",
          "module": "HFANN.Data",
          "name": "ErrorFunction",
          "package": "hfann",
          "source": "src/HFANN-Data.html#ErrorFunction",
          "type": "type"
        },
        "index": {
          "description": "Error function used during training errorFunctionLinear Standard linear error function errorFunctionTanH Tanh error function usually better but can require lower learning rate This error function agressively target outputs that differ much from the desired while not targetting output that only differ little that much The tanh function is not recommended for cascade training and incremental training",
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "ErrorFunction",
          "package": "hfann",
          "partial": "Error Function",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#t:ErrorFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ANN structure\n\u003c/p\u003e",
          "module": "HFANN.Data",
          "name": "Fann",
          "package": "hfann",
          "source": "src/HFANN-Data.html#Fann",
          "type": "data"
        },
        "index": {
          "description": "The ANN structure",
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "Fann",
          "package": "hfann",
          "partial": "Fann",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#t:Fann"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pointer to an ANN structure\n\u003c/p\u003e",
          "module": "HFANN.Data",
          "name": "FannPtr",
          "package": "hfann",
          "source": "src/HFANN-Data.html#FannPtr",
          "type": "type"
        },
        "index": {
          "description": "pointer to an ANN structure",
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "FannPtr",
          "package": "hfann",
          "partial": "Fann Ptr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#t:FannPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Haskell input/output type\n\u003c/p\u003e\u003cp\u003eThis is the data type used in Haskell to represent the input/output data.\n\u003c/p\u003e",
          "module": "HFANN.Data",
          "name": "FannType",
          "package": "hfann",
          "source": "src/HFANN-Data.html#FannType",
          "type": "type"
        },
        "index": {
          "description": "The Haskell input output type This is the data type used in Haskell to represent the input output data",
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "FannType",
          "package": "hfann",
          "partial": "Fann Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#t:FannType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop function used during training\n\u003c/p\u003e\u003cp\u003estopFunctionMSE - stop criteria is Mean Square Error value.\n stopFunctionBit - stop criteria is number of bits that fail\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003egetBitFailLimit\u003c/code\u003e, \u003ccode\u003esetBitFailLimit\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe bits are counted in all of the training data, so this number can be\n higher than the number of training data.\n\u003c/p\u003e",
          "module": "HFANN.Data",
          "name": "StopFunction",
          "package": "hfann",
          "source": "src/HFANN-Data.html#StopFunction",
          "type": "type"
        },
        "index": {
          "description": "Stop function used during training stopFunctionMSE stop criteria is Mean Square Error value stopFunctionBit stop criteria is number of bits that fail See getBitFailLimit setBitFailLimit The bits are counted in all of the training data so this number can be higher than the number of training data",
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "StopFunction",
          "package": "hfann",
          "partial": "Stop Function",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#t:StopFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the \u003ccode\u003eTraining Algorithm\u003c/code\u003e enumeration\n\u003c/p\u003e",
          "module": "HFANN.Data",
          "name": "TrainAlgorithm",
          "package": "hfann",
          "source": "src/HFANN-Data.html#TrainAlgorithm",
          "type": "type"
        },
        "index": {
          "description": "The type of the Training Algorithm enumeration",
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "TrainAlgorithm",
          "package": "hfann",
          "partial": "Train Algorithm",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#t:TrainAlgorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type of the training data structure\n\u003c/p\u003e",
          "module": "HFANN.Data",
          "name": "TrainData",
          "package": "hfann",
          "source": "src/HFANN-Data.html#TrainData",
          "type": "data"
        },
        "index": {
          "description": "Data type of the training data structure",
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "TrainData",
          "package": "hfann",
          "partial": "Train Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#t:TrainData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pointer to the training data structure type\n\u003c/p\u003e",
          "module": "HFANN.Data",
          "name": "TrainDataPtr",
          "package": "hfann",
          "source": "src/HFANN-Data.html#TrainDataPtr",
          "type": "type"
        },
        "index": {
          "description": "pointer to the training data structure type",
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "TrainDataPtr",
          "package": "hfann",
          "partial": "Train Data Ptr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#t:TrainDataPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HFANN.Data",
          "name": "Fann",
          "package": "hfann",
          "signature": "Fann",
          "source": "src/HFANN-Data.html#Fann",
          "type": "function"
        },
        "index": {
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "Fann",
          "package": "hfann",
          "partial": "Fann",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:Fann"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HFANN.Data",
          "name": "TrainData",
          "package": "hfann",
          "signature": "TrainData",
          "source": "src/HFANN-Data.html#TrainData",
          "type": "function"
        },
        "index": {
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "TrainData",
          "package": "hfann",
          "partial": "Train Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:TrainData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HFANN.Data",
          "name": "activationElliot",
          "package": "hfann",
          "signature": "ActivationFunction",
          "source": "src/HFANN-Data.html#activationElliot",
          "type": "function"
        },
        "index": {
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "activationElliot",
          "package": "hfann",
          "partial": "Elliot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationElliot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HFANN.Data",
          "name": "activationElliotSymmetric",
          "package": "hfann",
          "signature": "ActivationFunction",
          "source": "src/HFANN-Data.html#activationElliotSymmetric",
          "type": "function"
        },
        "index": {
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "activationElliotSymmetric",
          "package": "hfann",
          "partial": "Elliot Symmetric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationElliotSymmetric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HFANN.Data",
          "name": "activationGaussian",
          "package": "hfann",
          "signature": "ActivationFunction",
          "source": "src/HFANN-Data.html#activationGaussian",
          "type": "function"
        },
        "index": {
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "activationGaussian",
          "package": "hfann",
          "partial": "Gaussian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationGaussian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a callback function to be used during training for reporting and\n to stop the training\n\u003c/p\u003e",
          "module": "HFANN.Data",
          "name": "activationGaussianStepwise",
          "package": "hfann",
          "signature": "ActivationFunction",
          "source": "src/HFANN-Data.html#activationGaussianStepwise",
          "type": "function"
        },
        "index": {
          "description": "Create callback function to be used during training for reporting and to stop the training",
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "activationGaussianStepwise",
          "package": "hfann",
          "partial": "Gaussian Stepwise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationGaussianStepwise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HFANN.Data",
          "name": "activationGaussianSymmetric",
          "package": "hfann",
          "signature": "ActivationFunction",
          "source": "src/HFANN-Data.html#activationGaussianSymmetric",
          "type": "function"
        },
        "index": {
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "activationGaussianSymmetric",
          "package": "hfann",
          "partial": "Gaussian Symmetric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationGaussianSymmetric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HFANN.Data",
          "name": "activationLinear",
          "package": "hfann",
          "signature": "ActivationFunction",
          "source": "src/HFANN-Data.html#activationLinear",
          "type": "function"
        },
        "index": {
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "activationLinear",
          "package": "hfann",
          "partial": "Linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HFANN.Data",
          "name": "activationLinearPiece",
          "package": "hfann",
          "signature": "ActivationFunction",
          "source": "src/HFANN-Data.html#activationLinearPiece",
          "type": "function"
        },
        "index": {
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "activationLinearPiece",
          "package": "hfann",
          "partial": "Linear Piece",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationLinearPiece"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HFANN.Data",
          "name": "activationLinearPieceSymmetric",
          "package": "hfann",
          "signature": "ActivationFunction",
          "source": "src/HFANN-Data.html#activationLinearPieceSymmetric",
          "type": "function"
        },
        "index": {
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "activationLinearPieceSymmetric",
          "package": "hfann",
          "partial": "Linear Piece Symmetric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationLinearPieceSymmetric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HFANN.Data",
          "name": "activationSigmoid",
          "package": "hfann",
          "signature": "ActivationFunction",
          "source": "src/HFANN-Data.html#activationSigmoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "activationSigmoid",
          "package": "hfann",
          "partial": "Sigmoid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationSigmoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HFANN.Data",
          "name": "activationSigmoidStepwise",
          "package": "hfann",
          "signature": "ActivationFunction",
          "source": "src/HFANN-Data.html#activationSigmoidStepwise",
          "type": "function"
        },
        "index": {
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "activationSigmoidStepwise",
          "package": "hfann",
          "partial": "Sigmoid Stepwise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationSigmoidStepwise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HFANN.Data",
          "name": "activationSigmoidSymmetric",
          "package": "hfann",
          "signature": "ActivationFunction",
          "source": "src/HFANN-Data.html#activationSigmoidSymmetric",
          "type": "function"
        },
        "index": {
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "activationSigmoidSymmetric",
          "package": "hfann",
          "partial": "Sigmoid Symmetric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationSigmoidSymmetric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HFANN.Data",
          "name": "activationSigmoidSymmetricStepwise",
          "package": "hfann",
          "signature": "ActivationFunction",
          "source": "src/HFANN-Data.html#activationSigmoidSymmetricStepwise",
          "type": "function"
        },
        "index": {
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "activationSigmoidSymmetricStepwise",
          "package": "hfann",
          "partial": "Sigmoid Symmetric Stepwise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationSigmoidSymmetricStepwise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HFANN.Data",
          "name": "activationThreshold",
          "package": "hfann",
          "signature": "ActivationFunction",
          "source": "src/HFANN-Data.html#activationThreshold",
          "type": "function"
        },
        "index": {
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "activationThreshold",
          "package": "hfann",
          "partial": "Threshold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationThreshold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HFANN.Data",
          "name": "activationThresholdSymmetric",
          "package": "hfann",
          "signature": "ActivationFunction",
          "source": "src/HFANN-Data.html#activationThresholdSymmetric",
          "type": "function"
        },
        "index": {
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "activationThresholdSymmetric",
          "package": "hfann",
          "partial": "Threshold Symmetric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:activationThresholdSymmetric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HFANN.Data",
          "name": "errorFunctionLinear",
          "package": "hfann",
          "signature": "ErrorFunction",
          "source": "src/HFANN-Data.html#errorFunctionLinear",
          "type": "function"
        },
        "index": {
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "errorFunctionLinear",
          "package": "hfann",
          "partial": "Function Linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:errorFunctionLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HFANN.Data",
          "name": "errorFunctionTanH",
          "package": "hfann",
          "signature": "ErrorFunction",
          "source": "src/HFANN-Data.html#errorFunctionTanH",
          "type": "function"
        },
        "index": {
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "errorFunctionTanH",
          "package": "hfann",
          "partial": "Function Tan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:errorFunctionTanH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HFANN.Data",
          "name": "fannCallback",
          "package": "hfann",
          "signature": "CallbackType -\u003e IO (FunPtr CCallbackType)",
          "source": "src/HFANN-Data.html#fannCallback",
          "type": "function"
        },
        "index": {
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "fannCallback",
          "normalized": "CallbackType-\u003eIO(FunPtr CCallbackType)",
          "package": "hfann",
          "partial": "Callback",
          "signature": "CallbackType-\u003eIO(FunPtr CCallbackType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:fannCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HFANN.Data",
          "name": "stopFunctionBit",
          "package": "hfann",
          "signature": "StopFunction",
          "source": "src/HFANN-Data.html#stopFunctionBit",
          "type": "function"
        },
        "index": {
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "stopFunctionBit",
          "package": "hfann",
          "partial": "Function Bit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:stopFunctionBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HFANN.Data",
          "name": "stopFunctionMSE",
          "package": "hfann",
          "signature": "StopFunction",
          "source": "src/HFANN-Data.html#stopFunctionMSE",
          "type": "function"
        },
        "index": {
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "stopFunctionMSE",
          "package": "hfann",
          "partial": "Function MSE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:stopFunctionMSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HFANN.Data",
          "name": "trainBatch",
          "package": "hfann",
          "signature": "TrainAlgorithm",
          "source": "src/HFANN-Data.html#trainBatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "trainBatch",
          "package": "hfann",
          "partial": "Batch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:trainBatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HFANN.Data",
          "name": "trainIncremental",
          "package": "hfann",
          "signature": "TrainAlgorithm",
          "source": "src/HFANN-Data.html#trainIncremental",
          "type": "function"
        },
        "index": {
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "trainIncremental",
          "package": "hfann",
          "partial": "Incremental",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:trainIncremental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HFANN.Data",
          "name": "trainQuickProp",
          "package": "hfann",
          "signature": "TrainAlgorithm",
          "source": "src/HFANN-Data.html#trainQuickProp",
          "type": "function"
        },
        "index": {
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "trainQuickProp",
          "package": "hfann",
          "partial": "Quick Prop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:trainQuickProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "HFANN.Data",
          "name": "trainRPROP",
          "package": "hfann",
          "signature": "TrainAlgorithm",
          "source": "src/HFANN-Data.html#trainRPROP",
          "type": "function"
        },
        "index": {
          "hierarchy": "HFANN Data",
          "module": "HFANN.Data",
          "name": "trainRPROP",
          "package": "hfann",
          "partial": "RPROP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Data.html#v:trainRPROP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Fast Artificial Neural Network Library (FANN) is a free open source\n neural network library written in C with support for both fully connected\n and sparsely connected networks (\u003ca\u003ehttp://leenissen.dk/fann/\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eHFANN is a Haskell interface to this library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HFANN.IO",
          "name": "IO",
          "package": "hfann",
          "source": "src/HFANN-IO.html",
          "type": "module"
        },
        "index": {
          "description": "The Fast Artificial Neural Network Library FANN is free open source neural network library written in with support for both fully connected and sparsely connected networks http leenissen.dk fann HFANN is Haskell interface to this library",
          "hierarchy": "HFANN IO",
          "module": "HFANN.IO",
          "name": "IO",
          "package": "hfann",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave an Artificial Neural Network (ANN) to a file\n\u003c/p\u003e",
          "module": "HFANN.IO",
          "name": "saveFann",
          "package": "hfann",
          "signature": "FannPtr-\u003e String-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Save an Artificial Neural Network ANN to file",
          "hierarchy": "HFANN IO",
          "module": "HFANN.IO",
          "name": "saveFann",
          "normalized": "FannPtr-\u003eString-\u003eIO()",
          "package": "hfann",
          "partial": "Fann",
          "signature": "FannPtr-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-IO.html#v:saveFann"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad an ANN and call the given function with the ANN as argument. Once\n   finished, destroy the ANN.\n\u003c/p\u003e",
          "module": "HFANN.IO",
          "name": "withSavedFann",
          "package": "hfann",
          "signature": "String-\u003e (FannPtr -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Load an ANN and call the given function with the ANN as argument Once finished destroy the ANN",
          "hierarchy": "HFANN IO",
          "module": "HFANN.IO",
          "name": "withSavedFann",
          "normalized": "String-\u003e(FannPtr-\u003eIO a)-\u003eIO a",
          "package": "hfann",
          "partial": "Saved Fann",
          "signature": "String-\u003e(FannPtr-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-IO.html#v:withSavedFann"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Fast Artificial Neural Network Library (FANN) is a free open source\n neural network library written in C with support for both fully connected\n and sparsely connected networks (\u003ca\u003ehttp://leenissen.dk/fann/\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eHFANN is a Haskell interface to this library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HFANN.Train",
          "name": "Train",
          "package": "hfann",
          "source": "src/HFANN-Train.html",
          "type": "module"
        },
        "index": {
          "description": "The Fast Artificial Neural Network Library FANN is free open source neural network library written in with support for both fully connected and sparsely connected networks http leenissen.dk fann HFANN is Haskell interface to this library",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "Train",
          "package": "hfann",
          "partial": "Train",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestroy training data\n\u003c/p\u003e\u003cp\u003eDestroy training data and properly deallocates the memory.\n\u003c/p\u003e\u003cp\u003eBe sure to use this function after finished using the training data unless\n the training data is part of a \u003ccode\u003e\u003ca\u003ewithTrainData\u003c/a\u003e\u003c/code\u003e call.\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "destroyTrainData",
          "package": "hfann",
          "signature": "TrainDataPtr-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Destroy training data Destroy training data and properly deallocates the memory Be sure to use this function after finished using the training data unless the training data is part of withTrainData call",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "destroyTrainData",
          "normalized": "TrainDataPtr-\u003eIO()",
          "package": "hfann",
          "partial": "Train Data",
          "signature": "TrainDataPtr-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:destroyTrainData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an exact copy of a training data set.\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "duplicateTrainData",
          "package": "hfann",
          "signature": "TrainDataPtr-\u003e IO TrainDataPtr",
          "type": "function"
        },
        "index": {
          "description": "Returns an exact copy of training data set",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "duplicateTrainData",
          "normalized": "TrainDataPtr-\u003eIO TrainDataPtr",
          "package": "hfann",
          "partial": "Train Data",
          "signature": "TrainDataPtr-\u003eIO TrainDataPtr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:duplicateTrainData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of fail bits\n\u003c/p\u003e\u003cp\u003eThe number of fail bits means the number of output neurons which differ more\n than the bit fail limit (see \u003ccode\u003e\u003ca\u003egetBitFailLimit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetBitFailLimit\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThis value is reset by \u003ccode\u003e\u003ca\u003eresetMSE\u003c/a\u003e\u003c/code\u003e and updated by the same functions which\n also updates the MSE value \u003ccode\u003e\u003ca\u003etestData\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etrainEpoch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "getBitFail",
          "package": "hfann",
          "signature": "FannPtr-\u003e IO Int",
          "type": "function"
        },
        "index": {
          "description": "Get the number of fail bits The number of fail bits means the number of output neurons which differ more than the bit fail limit see getBitFailLimit setBitFailLimit This value is reset by resetMSE and updated by the same functions which also updates the MSE value testData trainEpoch",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "getBitFail",
          "normalized": "FannPtr-\u003eIO Int",
          "package": "hfann",
          "partial": "Bit Fail",
          "signature": "FannPtr-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getBitFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the bit fail limit used during training.\n\u003c/p\u003e\u003cp\u003eThe bit fail limit is used during training where the \u003ccode\u003e\u003ca\u003eStopFunction\u003c/a\u003e\u003c/code\u003e is set\n \u003ccode\u003estopFunctionBit\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe limit is the maximum accepted difference between the desired output\n and the actual output during training. Each output that diverges more than\n this is counted as an error bit.\n\u003c/p\u003e\u003cp\u003eThis difference is divided by two when dealing with symmetric activation\n functions, so that symmetric and not symmetric activation functions can use\n the same limit.\n\u003c/p\u003e\u003cp\u003eThe default bit fail limit is 0.35.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetBitFailLimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "getBitFailLimit",
          "package": "hfann",
          "signature": "FannPtr -\u003e IO FannType",
          "source": "src/HFANN-Train.html#getBitFailLimit",
          "type": "function"
        },
        "index": {
          "description": "Returns the bit fail limit used during training The bit fail limit is used during training where the StopFunction is set stopFunctionBit The limit is the maximum accepted difference between the desired output and the actual output during training Each output that diverges more than this is counted as an error bit This difference is divided by two when dealing with symmetric activation functions so that symmetric and not symmetric activation functions can use the same limit The default bit fail limit is See also setBitFailLimit",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "getBitFailLimit",
          "normalized": "FannPtr-\u003eIO FannType",
          "package": "hfann",
          "partial": "Bit Fail Limit",
          "signature": "FannPtr-\u003eIO FannType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getBitFailLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the learning momentum.\n\u003c/p\u003e\u003cp\u003eThe learning momentum can be used to speed up the \u003ccode\u003efannTrainIncremental\u003c/code\u003e\n training algorithm.\n\u003c/p\u003e\u003cp\u003eA too high momentum will however not benefit training. Setting momentum to\n 0 will be the same as not using the momentum parameter. The recommended\n value for this parameter is between 0.0 and 1.0.\n\u003c/p\u003e\u003cp\u003eThe default momentum is 0.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetLearningMomentum\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetTrainingAlgorithm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "getLearningMomentum",
          "package": "hfann",
          "signature": "FannPtr -\u003e IO Float",
          "source": "src/HFANN-Train.html#getLearningMomentum",
          "type": "function"
        },
        "index": {
          "description": "Return the learning momentum The learning momentum can be used to speed up the fannTrainIncremental training algorithm too high momentum will however not benefit training Setting momentum to will be the same as not using the momentum parameter The recommended value for this parameter is between and The default momentum is See also setLearningMomentum setTrainingAlgorithm",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "getLearningMomentum",
          "normalized": "FannPtr-\u003eIO Float",
          "package": "hfann",
          "partial": "Learning Momentum",
          "signature": "FannPtr-\u003eIO Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getLearningMomentum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the learning rate.\n\u003c/p\u003e\u003cp\u003eThe learning rate is used to determine how aggressive the training should be\n for some of the training algorithms (\u003ccode\u003efannTrainIncremental\u003c/code\u003e,\n \u003ccode\u003efannTrainBatch\u003c/code\u003e, \u003ccode\u003efannTrainQuickProp\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eNote that it is not used in \u003ccode\u003efannTrainRPROP\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe default learning rate is 0.7.\n\u003c/p\u003e\u003cp\u003eSee also:\n  \u003ccode\u003e\u003ca\u003esetLearningRate\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetTrainingAlgorithm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "getLearningRate",
          "package": "hfann",
          "signature": "FannPtr -\u003e IO Float",
          "source": "src/HFANN-Train.html#getLearningRate",
          "type": "function"
        },
        "index": {
          "description": "Return the learning rate The learning rate is used to determine how aggressive the training should be for some of the training algorithms fannTrainIncremental fannTrainBatch fannTrainQuickProp Note that it is not used in fannTrainRPROP The default learning rate is See also setLearningRate setTrainingAlgorithm",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "getLearningRate",
          "normalized": "FannPtr-\u003eIO Float",
          "package": "hfann",
          "partial": "Learning Rate",
          "signature": "FannPtr-\u003eIO Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getLearningRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the mean square error from the ANN\n\u003c/p\u003e\u003cp\u003eThis value is calculated during training or testing, and can therefore\n sometimes be a bit off if the weights have been changed since the last\n calculation of the value.\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "getMSE",
          "package": "hfann",
          "signature": "FannPtr-\u003e IO Float",
          "type": "function"
        },
        "index": {
          "description": "Get the mean square error from the ANN This value is calculated during training or testing and can therefore sometimes be bit off if the weights have been changed since the last calculation of the value",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "getMSE",
          "normalized": "FannPtr-\u003eIO Float",
          "package": "hfann",
          "partial": "MSE",
          "signature": "FannPtr-\u003eIO Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getMSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the quickprop decay\n\u003c/p\u003e\u003cp\u003eThe decay is a small negative valued number which is the factor that the\n weights should become smaller in each iteration during quickprop training.\n\u003c/p\u003e\u003cp\u003eThis is used to make sure that the weights do not become too high during\n training.\n\u003c/p\u003e\u003cp\u003eThe default decay is -0.0001\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetQuickPropDecay\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "getQuickPropDecay",
          "package": "hfann",
          "signature": "FannPtr -\u003e IO Float",
          "source": "src/HFANN-Train.html#getQuickPropDecay",
          "type": "function"
        },
        "index": {
          "description": "Returns the quickprop decay The decay is small negative valued number which is the factor that the weights should become smaller in each iteration during quickprop training This is used to make sure that the weights do not become too high during training The default decay is See also setQuickPropDecay",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "getQuickPropDecay",
          "normalized": "FannPtr-\u003eIO Float",
          "package": "hfann",
          "partial": "Quick Prop Decay",
          "signature": "FannPtr-\u003eIO Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getQuickPropDecay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the quickprop mu factor\n\u003c/p\u003e\u003cp\u003eThe mu factor is used to increase and decrease the step-size during quickprop\n training.\n The mu factor should always be above 1, since it would otherwise decrease the\n step-size when it was supposed to increase it.\n\u003c/p\u003e\u003cp\u003eThe default mu factor is 1.75\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetQuickPropMu\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "getQuickPropMu",
          "package": "hfann",
          "signature": "FannPtr -\u003e IO Float",
          "source": "src/HFANN-Train.html#getQuickPropMu",
          "type": "function"
        },
        "index": {
          "description": "Returns the quickprop mu factor The mu factor is used to increase and decrease the step-size during quickprop training The mu factor should always be above since it would otherwise decrease the step-size when it was supposed to increase it The default mu factor is See also setQuickPropMu",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "getQuickPropMu",
          "normalized": "FannPtr-\u003eIO Float",
          "package": "hfann",
          "partial": "Quick Prop Mu",
          "signature": "FannPtr-\u003eIO Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getQuickPropMu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the RPROP decrease factor\n\u003c/p\u003e\u003cp\u003eThe RPROP decrease factor is a value larger than 1, which is used to\n decrease the step-size during RPROP training.\n\u003c/p\u003e\u003cp\u003eThe default decrease factor is 0.5\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetRPROPDecreaseFactor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "getRPROPDecreaseFactor",
          "package": "hfann",
          "signature": "FannPtr -\u003e IO Float",
          "source": "src/HFANN-Train.html#getRPROPDecreaseFactor",
          "type": "function"
        },
        "index": {
          "description": "Returns the RPROP decrease factor The RPROP decrease factor is value larger than which is used to decrease the step-size during RPROP training The default decrease factor is See also setRPROPDecreaseFactor",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "getRPROPDecreaseFactor",
          "normalized": "FannPtr-\u003eIO Float",
          "package": "hfann",
          "partial": "RPROPDecrease Factor",
          "signature": "FannPtr-\u003eIO Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getRPROPDecreaseFactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the RPROP delta max factor\n\u003c/p\u003e\u003cp\u003eThe delta max factor is a positive number determining how large the\n maximum step-size may be.\n\u003c/p\u003e\u003cp\u003eThe default value delta max is 50.0\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetRPROPDeltaMax\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "getRPROPDeltaMax",
          "package": "hfann",
          "signature": "FannPtr -\u003e IO Float",
          "source": "src/HFANN-Train.html#getRPROPDeltaMax",
          "type": "function"
        },
        "index": {
          "description": "Returns the RPROP delta max factor The delta max factor is positive number determining how large the maximum step-size may be The default value delta max is See also setRPROPDeltaMax",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "getRPROPDeltaMax",
          "normalized": "FannPtr-\u003eIO Float",
          "package": "hfann",
          "partial": "RPROPDelta Max",
          "signature": "FannPtr-\u003eIO Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getRPROPDeltaMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the RPROP delta min factor\n\u003c/p\u003e\u003cp\u003eThe delta min factor is a small positive number determining how small the\n minimum step-size may be.\n\u003c/p\u003e\u003cp\u003eThe default value delta min is 0.0\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetRPROPDeltaMin\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "getRPROPDeltaMin",
          "package": "hfann",
          "signature": "FannPtr -\u003e IO Float",
          "source": "src/HFANN-Train.html#getRPROPDeltaMin",
          "type": "function"
        },
        "index": {
          "description": "Returns the RPROP delta min factor The delta min factor is small positive number determining how small the minimum step-size may be The default value delta min is See also setRPROPDeltaMin",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "getRPROPDeltaMin",
          "normalized": "FannPtr-\u003eIO Float",
          "package": "hfann",
          "partial": "RPROPDelta Min",
          "signature": "FannPtr-\u003eIO Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getRPROPDeltaMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the RPROP increase factor\n\u003c/p\u003e\u003cp\u003eThe RPROP increase factor is a value larger than 1, which is used to\n increase the step-size during RPROP training.\n\u003c/p\u003e\u003cp\u003eThe default increase factor is 1.2\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetRPROPIncreaseFactor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "getRPROPIncreaseFactor",
          "package": "hfann",
          "signature": "FannPtr -\u003e IO Float",
          "source": "src/HFANN-Train.html#getRPROPIncreaseFactor",
          "type": "function"
        },
        "index": {
          "description": "Returns the RPROP increase factor The RPROP increase factor is value larger than which is used to increase the step-size during RPROP training The default increase factor is See also setRPROPIncreaseFactor",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "getRPROPIncreaseFactor",
          "normalized": "FannPtr-\u003eIO Float",
          "package": "hfann",
          "partial": "RPROPIncrease Factor",
          "signature": "FannPtr-\u003eIO Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getRPROPIncreaseFactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of input nodes in the training data\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "getTrainDataInputNodesCount",
          "package": "hfann",
          "signature": "TrainDataPtr -\u003e IO Int",
          "source": "src/HFANN-Train.html#getTrainDataInputNodesCount",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of input nodes in the training data",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "getTrainDataInputNodesCount",
          "normalized": "TrainDataPtr-\u003eIO Int",
          "package": "hfann",
          "partial": "Train Data Input Nodes Count",
          "signature": "TrainDataPtr-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getTrainDataInputNodesCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of output nodes in the training data\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "getTrainDataOutputNodesCount",
          "package": "hfann",
          "signature": "TrainDataPtr -\u003e IO Int",
          "source": "src/HFANN-Train.html#getTrainDataOutputNodesCount",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of output nodes in the training data",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "getTrainDataOutputNodesCount",
          "normalized": "TrainDataPtr-\u003eIO Int",
          "package": "hfann",
          "partial": "Train Data Output Nodes Count",
          "signature": "TrainDataPtr-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getTrainDataOutputNodesCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the error function used during training.\n\u003c/p\u003e\u003cp\u003eThe error function is described in \u003ccode\u003e\u003ca\u003eErrorFunction\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe default error function is \u003ccode\u003eerrorFunctionTanH\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetTrainErrorFunction\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "getTrainErrorFunction",
          "package": "hfann",
          "signature": "FannPtr-\u003e IO ErrorFunction",
          "type": "function"
        },
        "index": {
          "description": "Return the error function used during training The error function is described in ErrorFunction The default error function is errorFunctionTanH See also setTrainErrorFunction",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "getTrainErrorFunction",
          "normalized": "FannPtr-\u003eIO ErrorFunction",
          "package": "hfann",
          "partial": "Train Error Function",
          "signature": "FannPtr-\u003eIO ErrorFunction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getTrainErrorFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the stop function used during training.\n\u003c/p\u003e\u003cp\u003eThe stop function is described in \u003ccode\u003e\u003ca\u003eStopFunction\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe default stop function is \u003ccode\u003estopFunctionMSE\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetTrainStopFunction\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetBitFailLimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "getTrainStopFunction",
          "package": "hfann",
          "signature": "FannPtr -\u003e IO StopFunction",
          "source": "src/HFANN-Train.html#getTrainStopFunction",
          "type": "function"
        },
        "index": {
          "description": "Returns the stop function used during training The stop function is described in StopFunction The default stop function is stopFunctionMSE See also setTrainStopFunction setBitFailLimit",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "getTrainStopFunction",
          "normalized": "FannPtr-\u003eIO StopFunction",
          "package": "hfann",
          "partial": "Train Stop Function",
          "signature": "FannPtr-\u003eIO StopFunction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getTrainStopFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the training algorithm. This training algorithm is used by\n \u003ccode\u003e\u003ca\u003etrainOnData\u003c/a\u003e\u003c/code\u003e and associated functions.\n\u003c/p\u003e\u003cp\u003eNote that this algorithm is also used during \u003ccode\u003ecascadeTrainOnData\u003c/code\u003e although\n only fannTrainRPROP and fannTrainQuickProp is allowed during cascade\n training.\n\u003c/p\u003e\u003cp\u003eSee also:\n  \u003ccode\u003e\u003ca\u003esetTrainingAlgorithm\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTrainAlgorithm\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "getTrainingAlgorithm",
          "package": "hfann",
          "signature": "FannPtr-\u003e IO TrainAlgorithm",
          "type": "function"
        },
        "index": {
          "description": "Return the training algorithm This training algorithm is used by trainOnData and associated functions Note that this algorithm is also used during cascadeTrainOnData although only fannTrainRPROP and fannTrainQuickProp is allowed during cascade training See also setTrainingAlgorithm TrainAlgorithm",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "getTrainingAlgorithm",
          "normalized": "FannPtr-\u003eIO TrainAlgorithm",
          "package": "hfann",
          "partial": "Training Algorithm",
          "signature": "FannPtr-\u003eIO TrainAlgorithm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:getTrainingAlgorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads training data from a file.\n\u003c/p\u003e\u003cp\u003eThe file must be formatted like:\n\u003c/p\u003e\u003cpre\u003e num_records num_input num_output\n inputdata separated by space\n outputdata separated by space\n\n ...\n ...\n\n inputdata separated by space\n outputdata separated by space\n\u003c/pre\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003etrainOnData\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003edestroyTrain\u003c/code\u003e, \u003ccode\u003esaveTrain\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "loadTrainData",
          "package": "hfann",
          "signature": "String-\u003e IO TrainDataPtr",
          "type": "function"
        },
        "index": {
          "description": "Reads training data from file The file must be formatted like num records num input num output inputdata separated by space outputdata separated by space inputdata separated by space outputdata separated by space See also trainOnData destroyTrain saveTrain",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "loadTrainData",
          "normalized": "String-\u003eIO TrainDataPtr",
          "package": "hfann",
          "partial": "Train Data",
          "signature": "String-\u003eIO TrainDataPtr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:loadTrainData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges two training data sets into a new one.\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "mergeTrainData",
          "package": "hfann",
          "signature": "TrainDataPtr-\u003e TrainDataPtr-\u003e IO TrainDataPtr",
          "type": "function"
        },
        "index": {
          "description": "Merges two training data sets into new one",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "mergeTrainData",
          "normalized": "TrainDataPtr-\u003eTrainDataPtr-\u003eIO TrainDataPtr",
          "package": "hfann",
          "partial": "Train Data",
          "signature": "TrainDataPtr-\u003eTrainDataPtr-\u003eIO TrainDataPtr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:mergeTrainData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReset the mean square error from the network.\n\u003c/p\u003e\u003cp\u003eThis function also resets the number of bits that fail.\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "resetMSE",
          "package": "hfann",
          "signature": "FannPtr -\u003e IO ()",
          "source": "src/HFANN-Train.html#resetMSE",
          "type": "function"
        },
        "index": {
          "description": "Reset the mean square error from the network This function also resets the number of bits that fail",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "resetMSE",
          "normalized": "FannPtr-\u003eIO()",
          "package": "hfann",
          "partial": "MSE",
          "signature": "FannPtr-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:resetMSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave the training structure to a file with the format as specified in\n \u003ccode\u003e\u003ca\u003eloadTrainData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSee also\n   \u003ccode\u003e\u003ca\u003eloadTrainData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "saveTrainData",
          "package": "hfann",
          "signature": "TrainDataPtr -\u003e String -\u003e IO ()",
          "source": "src/HFANN-Train.html#saveTrainData",
          "type": "function"
        },
        "index": {
          "description": "Save the training structure to file with the format as specified in loadTrainData See also loadTrainData",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "saveTrainData",
          "normalized": "TrainDataPtr-\u003eString-\u003eIO()",
          "package": "hfann",
          "partial": "Train Data",
          "signature": "TrainDataPtr-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:saveTrainData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScales the inputs in the training data to the specified range.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003escaleOutputData\u003c/code\u003e, \u003ccode\u003e\u003ca\u003escaleTrainData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "scaleInputTrainData",
          "package": "hfann",
          "signature": "TrainDataPtr-\u003e FannType-\u003e FannType-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Scales the inputs in the training data to the specified range See also scaleOutputData scaleTrainData",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "scaleInputTrainData",
          "normalized": "TrainDataPtr-\u003eFannType-\u003eFannType-\u003eIO()",
          "package": "hfann",
          "partial": "Input Train Data",
          "signature": "TrainDataPtr-\u003eFannType-\u003eFannType-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:scaleInputTrainData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScales the output in the training data to the specified range.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003escaleInputData\u003c/code\u003e, \u003ccode\u003e\u003ca\u003escaleTrainData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "scaleOutputTrainData",
          "package": "hfann",
          "signature": "TrainDataPtr-\u003e FannType-\u003e FannType-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Scales the output in the training data to the specified range See also scaleInputData scaleTrainData",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "scaleOutputTrainData",
          "normalized": "TrainDataPtr-\u003eFannType-\u003eFannType-\u003eIO()",
          "package": "hfann",
          "partial": "Output Train Data",
          "signature": "TrainDataPtr-\u003eFannType-\u003eFannType-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:scaleOutputTrainData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScales the inputs and outputs in the training data to the specified range.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003escaleOutputData\u003c/code\u003e, \u003ccode\u003escaleInputData\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "scaleTrainData",
          "package": "hfann",
          "signature": "TrainDataPtr-\u003e FannType-\u003e FannType-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Scales the inputs and outputs in the training data to the specified range See also scaleOutputData scaleInputData",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "scaleTrainData",
          "normalized": "TrainDataPtr-\u003eFannType-\u003eFannType-\u003eIO()",
          "package": "hfann",
          "partial": "Train Data",
          "signature": "TrainDataPtr-\u003eFannType-\u003eFannType-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:scaleTrainData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the activation function for the neuron specified in layer specified,\n counting the input layer as layer 0.\n\u003c/p\u003e\u003cp\u003eIt is not possible to set activation functions for the neurons in the input\n layer.\n\u003c/p\u003e\u003cp\u003eWhen choosing an activation function it is important to note that the\n activation function have different range. In \u003ccode\u003efannSigmoid\u003c/code\u003e is in the 0 .. 1\n range while fannSigmoidSymmetric is in the -1 .. 1 range and fannLinear is\n unbound.\n\u003c/p\u003e\u003cp\u003eThe default activation function is fannSigmoidStepwise.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetActivationFunctionLayer\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationFunctionHidden\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003esetActivationFunctionOutput\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationSteepness\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "setActivationFunction",
          "package": "hfann",
          "signature": "FannPtr-\u003e ActivationFunction-\u003e Int-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Set the activation function for the neuron specified in layer specified counting the input layer as layer It is not possible to set activation functions for the neurons in the input layer When choosing an activation function it is important to note that the activation function have different range In fannSigmoid is in the range while fannSigmoidSymmetric is in the range and fannLinear is unbound The default activation function is fannSigmoidStepwise See also setActivationFunctionLayer setActivationFunctionHidden setActivationFunctionOutput setActivationSteepness",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "setActivationFunction",
          "normalized": "FannPtr-\u003eActivationFunction-\u003eInt-\u003eInt-\u003eIO()",
          "package": "hfann",
          "partial": "Activation Function",
          "signature": "FannPtr-\u003eActivationFunction-\u003eInt-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setActivationFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the activation function for all the hidden layers.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetActivationFunction\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationFunctionLayer\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003esetActivationFunctionOutput\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "setActivationFunctionHidden",
          "package": "hfann",
          "signature": "FannPtr-\u003e ActivationFunction-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Set the activation function for all the hidden layers See also setActivationFunction setActivationFunctionLayer setActivationFunctionOutput",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "setActivationFunctionHidden",
          "normalized": "FannPtr-\u003eActivationFunction-\u003eIO()",
          "package": "hfann",
          "partial": "Activation Function Hidden",
          "signature": "FannPtr-\u003eActivationFunction-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setActivationFunctionHidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the activation function for all neurons of a given layer, counting\n the input layer as layer 0.\n\u003c/p\u003e\u003cp\u003eIt is not possible to set an activation function for the neurons in the\n input layer.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetActivationFunction\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationFunctionHidden\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003esetActivationFunctionOutput\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationSteepnessLayer\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "setActivationFunctionLayer",
          "package": "hfann",
          "signature": "FannPtr-\u003e ActivationFunction-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Set the activation function for all neurons of given layer counting the input layer as layer It is not possible to set an activation function for the neurons in the input layer See also setActivationFunction setActivationFunctionHidden setActivationFunctionOutput setActivationSteepnessLayer",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "setActivationFunctionLayer",
          "normalized": "FannPtr-\u003eActivationFunction-\u003eInt-\u003eIO()",
          "package": "hfann",
          "partial": "Activation Function Layer",
          "signature": "FannPtr-\u003eActivationFunction-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setActivationFunctionLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the activation function for the output layer.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetActivationFunction\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationFunctionLayer\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003esetActivationFunctionHidden\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "setActivationFunctionOutput",
          "package": "hfann",
          "signature": "FannPtr-\u003e ActivationFunction-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Set the activation function for the output layer See also setActivationFunction setActivationFunctionLayer setActivationFunctionHidden",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "setActivationFunctionOutput",
          "normalized": "FannPtr-\u003eActivationFunction-\u003eIO()",
          "package": "hfann",
          "partial": "Activation Function Output",
          "signature": "FannPtr-\u003eActivationFunction-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setActivationFunctionOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the activation steepness of the specified neuron in the specified\n layer, counting the input layer as 0.\n\u003c/p\u003e\u003cp\u003eIt is not possible to set activation steepness for the neurons in the input\n layer.\n\u003c/p\u003e\u003cp\u003eThe steepness of an activation function says something about how fast the\n activation function goes from the minimum to the maximum. A high value\n for the activation function will also give a more agressive training.\n\u003c/p\u003e\u003cp\u003eWhen training networks where the output values should be at the extremes\n (usually 0 and 1, depending on the activation function), a steep activation\n can be used (e.g. 1.0).\n\u003c/p\u003e\u003cp\u003eThe default activation steepness is 0.5\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetActivationSteepnessLayer\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationSteepnessHidden\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003esetActivationSteepnessOutput\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationFunction\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "setActivationSteepness",
          "package": "hfann",
          "signature": "FannPtr-\u003e FannType-\u003e Int-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Set the activation steepness of the specified neuron in the specified layer counting the input layer as It is not possible to set activation steepness for the neurons in the input layer The steepness of an activation function says something about how fast the activation function goes from the minimum to the maximum high value for the activation function will also give more agressive training When training networks where the output values should be at the extremes usually and depending on the activation function steep activation can be used e.g The default activation steepness is See also setActivationSteepnessLayer setActivationSteepnessHidden setActivationSteepnessOutput setActivationFunction",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "setActivationSteepness",
          "normalized": "FannPtr-\u003eFannType-\u003eInt-\u003eInt-\u003eIO()",
          "package": "hfann",
          "partial": "Activation Steepness",
          "signature": "FannPtr-\u003eFannType-\u003eInt-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setActivationSteepness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the activation steepness of all the nodes in all hidden layers.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetActivationSteepness\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationSteepnessLayer\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003esetActivationSteepnessOutput\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationFunction\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "setActivationSteepnessHidden",
          "package": "hfann",
          "signature": "FannPtr-\u003e FannType-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Set the activation steepness of all the nodes in all hidden layers See also setActivationSteepness setActivationSteepnessLayer setActivationSteepnessOutput setActivationFunction",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "setActivationSteepnessHidden",
          "normalized": "FannPtr-\u003eFannType-\u003eIO()",
          "package": "hfann",
          "partial": "Activation Steepness Hidden",
          "signature": "FannPtr-\u003eFannType-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setActivationSteepnessHidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the activation steepness for all of the neurons in the given layer,\n counting the input layer as layer 0.\n\u003c/p\u003e\u003cp\u003eIt is not possible to set the activation steepness for the neurons in the\n input layer.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetActivationSteepness\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationSteepnessHidden\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003esetActivationSteepnessOutput\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationFunction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "setActivationSteepnessLayer",
          "package": "hfann",
          "signature": "FannPtr-\u003e FannType-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Set the activation steepness for all of the neurons in the given layer counting the input layer as layer It is not possible to set the activation steepness for the neurons in the input layer See also setActivationSteepness setActivationSteepnessHidden setActivationSteepnessOutput setActivationFunction",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "setActivationSteepnessLayer",
          "normalized": "FannPtr-\u003eFannType-\u003eInt-\u003eIO()",
          "package": "hfann",
          "partial": "Activation Steepness Layer",
          "signature": "FannPtr-\u003eFannType-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setActivationSteepnessLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the activation steepness of all the nodes in all output layer.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003esetActivationSteepness\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationSteepnessLayer\u003c/a\u003e\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003esetActivationSteepnessHidden\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esetActivationFunction\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "setActivationSteepnessOutput",
          "package": "hfann",
          "signature": "FannPtr-\u003e FannType-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Set the activation steepness of all the nodes in all output layer See also setActivationSteepness setActivationSteepnessLayer setActivationSteepnessHidden setActivationFunction",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "setActivationSteepnessOutput",
          "normalized": "FannPtr-\u003eFannType-\u003eIO()",
          "package": "hfann",
          "partial": "Activation Steepness Output",
          "signature": "FannPtr-\u003eFannType-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setActivationSteepnessOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the bit fail limit used during training.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003egetBitFailLimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "setBitFailLimit",
          "package": "hfann",
          "signature": "FannPtr -\u003e FannType -\u003e IO ()",
          "source": "src/HFANN-Train.html#setBitFailLimit",
          "type": "function"
        },
        "index": {
          "description": "Set the bit fail limit used during training See also getBitFailLimit",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "setBitFailLimit",
          "normalized": "FannPtr-\u003eFannType-\u003eIO()",
          "package": "hfann",
          "partial": "Bit Fail Limit",
          "signature": "FannPtr-\u003eFannType-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setBitFailLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the callback function to be used for reporting and to stop training\n\u003c/p\u003e\u003cp\u003eThe callback function will be called based on the \"Epoch between reports\"\n defined frequency.\n\u003c/p\u003e\u003cp\u003eThe type of the callback function is:\n\u003c/p\u003e\u003cpre\u003e callback :: FannPtr      -- The ANN being trained\n          -\u003e TrainDataPtr -- The training data in use\n          -\u003e Int          -- Max number of epochs\n          -\u003e Int          -- Number of epochs between reports\n          -\u003e Float        -- Desired error\n          -\u003e Int          -- Current epoch\n          -\u003e Bool         -- True to terminate training, False to continue\n\u003c/pre\u003e",
          "module": "HFANN.Train",
          "name": "setCallback",
          "package": "hfann",
          "signature": "FannPtr -\u003e CallbackType -\u003e IO ()",
          "source": "src/HFANN-Train.html#setCallback",
          "type": "function"
        },
        "index": {
          "description": "Set the callback function to be used for reporting and to stop training The callback function will be called based on the Epoch between reports defined frequency The type of the callback function is callback FannPtr The ANN being trained TrainDataPtr The training data in use Int Max number of epochs Int Number of epochs between reports Float Desired error Int Current epoch Bool True to terminate training False to continue",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "setCallback",
          "normalized": "FannPtr-\u003eCallbackType-\u003eIO()",
          "package": "hfann",
          "partial": "Callback",
          "signature": "FannPtr-\u003eCallbackType-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the learning momentum.\n\u003c/p\u003e\u003cp\u003eMore info available in \u003ccode\u003e\u003ca\u003egetLearningMomentum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "setLearningMomentum",
          "package": "hfann",
          "signature": "FannPtr -\u003e Float -\u003e IO ()",
          "source": "src/HFANN-Train.html#setLearningMomentum",
          "type": "function"
        },
        "index": {
          "description": "Set the learning momentum More info available in getLearningMomentum",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "setLearningMomentum",
          "normalized": "FannPtr-\u003eFloat-\u003eIO()",
          "package": "hfann",
          "partial": "Learning Momentum",
          "signature": "FannPtr-\u003eFloat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setLearningMomentum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the learning rate.\n\u003c/p\u003e\u003cp\u003eSee getLearningRate for more information about the learning rate.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003egetLearingRate\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "setLearningRate",
          "package": "hfann",
          "signature": "FannPtr -\u003e Float -\u003e IO ()",
          "source": "src/HFANN-Train.html#setLearningRate",
          "type": "function"
        },
        "index": {
          "description": "Set the learning rate See getLearningRate for more information about the learning rate See also getLearingRate",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "setLearningRate",
          "normalized": "FannPtr-\u003eFloat-\u003eIO()",
          "package": "hfann",
          "partial": "Learning Rate",
          "signature": "FannPtr-\u003eFloat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setLearningRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the quickprop decay factor\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003egetQuickPropDecay\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "setQuickPropDecay",
          "package": "hfann",
          "signature": "FannPtr -\u003e Float -\u003e IO ()",
          "source": "src/HFANN-Train.html#setQuickPropDecay",
          "type": "function"
        },
        "index": {
          "description": "Sets the quickprop decay factor See also getQuickPropDecay",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "setQuickPropDecay",
          "normalized": "FannPtr-\u003eFloat-\u003eIO()",
          "package": "hfann",
          "partial": "Quick Prop Decay",
          "signature": "FannPtr-\u003eFloat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setQuickPropDecay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the quickprop mu factor\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003egetQuickPropMu\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "setQuickPropMu",
          "package": "hfann",
          "signature": "FannPtr -\u003e Float -\u003e IO ()",
          "source": "src/HFANN-Train.html#setQuickPropMu",
          "type": "function"
        },
        "index": {
          "description": "Sets the quickprop mu factor See also getQuickPropMu",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "setQuickPropMu",
          "normalized": "FannPtr-\u003eFloat-\u003eIO()",
          "package": "hfann",
          "partial": "Quick Prop Mu",
          "signature": "FannPtr-\u003eFloat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setQuickPropMu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the RPROP decrease factor\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003egetRPROPDecreaseFactor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "setRPROPDecreaseFactor",
          "package": "hfann",
          "signature": "FannPtr -\u003e Float -\u003e IO ()",
          "source": "src/HFANN-Train.html#setRPROPDecreaseFactor",
          "type": "function"
        },
        "index": {
          "description": "Sets the RPROP decrease factor See also getRPROPDecreaseFactor",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "setRPROPDecreaseFactor",
          "normalized": "FannPtr-\u003eFloat-\u003eIO()",
          "package": "hfann",
          "partial": "RPROPDecrease Factor",
          "signature": "FannPtr-\u003eFloat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setRPROPDecreaseFactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the RPROP delta max\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003egetRPROPDeltaMax\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "setRPROPDeltaMax",
          "package": "hfann",
          "signature": "FannPtr -\u003e Float -\u003e IO ()",
          "source": "src/HFANN-Train.html#setRPROPDeltaMax",
          "type": "function"
        },
        "index": {
          "description": "Sets the RPROP delta max See also getRPROPDeltaMax",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "setRPROPDeltaMax",
          "normalized": "FannPtr-\u003eFloat-\u003eIO()",
          "package": "hfann",
          "partial": "RPROPDelta Max",
          "signature": "FannPtr-\u003eFloat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setRPROPDeltaMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the RPROP delta min\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003egetRPROPDeltaMin\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "setRPROPDeltaMin",
          "package": "hfann",
          "signature": "FannPtr -\u003e Float -\u003e IO ()",
          "source": "src/HFANN-Train.html#setRPROPDeltaMin",
          "type": "function"
        },
        "index": {
          "description": "Sets the RPROP delta min See also getRPROPDeltaMin",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "setRPROPDeltaMin",
          "normalized": "FannPtr-\u003eFloat-\u003eIO()",
          "package": "hfann",
          "partial": "RPROPDelta Min",
          "signature": "FannPtr-\u003eFloat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setRPROPDeltaMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the RPROP increase factor\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003egetRPROPIncreaseFactor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "setRPROPIncreaseFactor",
          "package": "hfann",
          "signature": "FannPtr -\u003e Float -\u003e IO ()",
          "source": "src/HFANN-Train.html#setRPROPIncreaseFactor",
          "type": "function"
        },
        "index": {
          "description": "Sets the RPROP increase factor See also getRPROPIncreaseFactor",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "setRPROPIncreaseFactor",
          "normalized": "FannPtr-\u003eFloat-\u003eIO()",
          "package": "hfann",
          "partial": "RPROPIncrease Factor",
          "signature": "FannPtr-\u003eFloat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setRPROPIncreaseFactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the error function used during training.\n\u003c/p\u003e\u003cp\u003eThe error function is described in \u003ccode\u003e\u003ca\u003eErrorFunction\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003egetTrainErrorFunction\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "setTrainErrorFunction",
          "package": "hfann",
          "signature": "FannPtr-\u003e ErrorFunction-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Set the error function used during training The error function is described in ErrorFunction See also getTrainErrorFunction",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "setTrainErrorFunction",
          "normalized": "FannPtr-\u003eErrorFunction-\u003eIO()",
          "package": "hfann",
          "partial": "Train Error Function",
          "signature": "FannPtr-\u003eErrorFunction-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setTrainErrorFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the stop function used during training.\n\u003c/p\u003e\u003cp\u003eThe stop function is described in \u003ccode\u003e\u003ca\u003eStopFunction\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe default stop function is \u003ccode\u003estopFunctionMSE\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003egetTrainStopFunction\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egetBitFailLimit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "setTrainStopFunction",
          "package": "hfann",
          "signature": "FannPtr -\u003e StopFunction -\u003e IO ()",
          "source": "src/HFANN-Train.html#setTrainStopFunction",
          "type": "function"
        },
        "index": {
          "description": "Set the stop function used during training The stop function is described in StopFunction The default stop function is stopFunctionMSE See also getTrainStopFunction getBitFailLimit",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "setTrainStopFunction",
          "normalized": "FannPtr-\u003eStopFunction-\u003eIO()",
          "package": "hfann",
          "partial": "Train Stop Function",
          "signature": "FannPtr-\u003eStopFunction-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setTrainStopFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the training algorithm.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003egetTrainingAlgorithm\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003eTrainingAlgorithm\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "setTrainingAlgorithm",
          "package": "hfann",
          "signature": "FannPtr-\u003e TrainAlgorithm-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Set the training algorithm See also getTrainingAlgorithm TrainingAlgorithm",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "setTrainingAlgorithm",
          "normalized": "FannPtr-\u003eTrainAlgorithm-\u003eIO()",
          "package": "hfann",
          "partial": "Training Algorithm",
          "signature": "FannPtr-\u003eTrainAlgorithm-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:setTrainingAlgorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShuffles training data, randomizing the order.\n\u003c/p\u003e\u003cp\u003eThis is recomended for incremental training, while it has no influence\n during batch training\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "shuffleTrainData",
          "package": "hfann",
          "signature": "TrainDataPtr-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Shuffles training data randomizing the order This is recomended for incremental training while it has no influence during batch training",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "shuffleTrainData",
          "normalized": "TrainDataPtr-\u003eIO()",
          "package": "hfann",
          "partial": "Train Data",
          "signature": "TrainDataPtr-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:shuffleTrainData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a copy of a subset of the training data, starting at the given\n offset and taking the given count of elements.\n\u003c/p\u003e\u003cpre\u003e len \u003c- trainDataLength tdata\n newtdata \u003c- subsetTrainData tdata 0 len\n\u003c/pre\u003e\u003cp\u003eWill do the same as \u003ccode\u003e\u003ca\u003eduplicateTrainData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003etrainDataLength\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "subsetTrainData",
          "package": "hfann",
          "signature": "TrainDataPtr -\u003e Int -\u003e Int -\u003e IO TrainDataPtr",
          "source": "src/HFANN-Train.html#subsetTrainData",
          "type": "function"
        },
        "index": {
          "description": "Returns copy of subset of the training data starting at the given offset and taking the given count of elements len trainDataLength tdata newtdata subsetTrainData tdata len Will do the same as duplicateTrainData See also trainDataLength",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "subsetTrainData",
          "normalized": "TrainDataPtr-\u003eInt-\u003eInt-\u003eIO TrainDataPtr",
          "package": "hfann",
          "partial": "Train Data",
          "signature": "TrainDataPtr-\u003eInt-\u003eInt-\u003eIO TrainDataPtr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:subsetTrainData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest the Neural Network on the given input and output values\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "test",
          "package": "hfann",
          "signature": "FannPtr-\u003e [FannType]-\u003e [FannType]-\u003e IO [FannType]",
          "type": "function"
        },
        "index": {
          "description": "Test the Neural Network on the given input and output values",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "test",
          "normalized": "FannPtr-\u003e[FannType]-\u003e[FannType]-\u003eIO[FannType]",
          "package": "hfann",
          "signature": "FannPtr-\u003e[FannType]-\u003e[FannType]-\u003eIO[FannType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest ANN on training data\n\u003c/p\u003e\u003cp\u003eThis function will run the ANN on the training data and return the error\n value. It can be used to validate the check the quality of the ANN on some\n test data.\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "testData",
          "package": "hfann",
          "signature": "FannPtr-\u003e TrainDataPtr-\u003e IO CFloat",
          "type": "function"
        },
        "index": {
          "description": "Test ANN on training data This function will run the ANN on the training data and return the error value It can be used to validate the check the quality of the ANN on some test data",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "testData",
          "normalized": "FannPtr-\u003eTrainDataPtr-\u003eIO CFloat",
          "package": "hfann",
          "partial": "Data",
          "signature": "FannPtr-\u003eTrainDataPtr-\u003eIO CFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:testData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrain the Neural Network on the given input and output values\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "train",
          "package": "hfann",
          "signature": "FannPtr-\u003e [FannType]-\u003e [FannType]-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Train the Neural Network on the given input and output values",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "train",
          "normalized": "FannPtr-\u003e[FannType]-\u003e[FannType]-\u003eIO()",
          "package": "hfann",
          "signature": "FannPtr-\u003e[FannType]-\u003e[FannType]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:train"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of training patterns in the training data.\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "trainDataLength",
          "package": "hfann",
          "signature": "TrainDataPtr -\u003e IO Int",
          "source": "src/HFANN-Train.html#trainDataLength",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of training patterns in the training data",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "trainDataLength",
          "normalized": "TrainDataPtr-\u003eIO Int",
          "package": "hfann",
          "partial": "Data Length",
          "signature": "TrainDataPtr-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:trainDataLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrain one epoch with a set of training data\n\u003c/p\u003e\u003cp\u003eTrain one epoch with the given training data. One epoch is where all the\n training data is considered exactly once.\n\u003c/p\u003e\u003cp\u003eThe function returns the MSE error as it is calculated either before or\n during the actual training. This is not the actual MSE after the training\n epoch but since calculating this will require to go through the entire\n training set once more it is more adequate to use this value during\n training.\n\u003c/p\u003e\u003cp\u003eThe training algorithm used by this function is chosen by the\n \u003ccode\u003e\u003ca\u003esetTrainingAlgorithm\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eSee also:\n   \u003ccode\u003e\u003ca\u003etrainOnData\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etestData\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "trainEpoch",
          "package": "hfann",
          "signature": "FannPtr -\u003e TrainDataPtr -\u003e IO Float",
          "source": "src/HFANN-Train.html#trainEpoch",
          "type": "function"
        },
        "index": {
          "description": "Train one epoch with set of training data Train one epoch with the given training data One epoch is where all the training data is considered exactly once The function returns the MSE error as it is calculated either before or during the actual training This is not the actual MSE after the training epoch but since calculating this will require to go through the entire training set once more it is more adequate to use this value during training The training algorithm used by this function is chosen by the setTrainingAlgorithm function See also trainOnData testData",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "trainEpoch",
          "normalized": "FannPtr-\u003eTrainDataPtr-\u003eIO Float",
          "package": "hfann",
          "partial": "Epoch",
          "signature": "FannPtr-\u003eTrainDataPtr-\u003eIO Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:trainEpoch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrain the Neural Network on a training dataset.\n\u003c/p\u003e\u003cp\u003eInstead of printing out reports every \"epochs between reports\", a callback\n function can be called (see \u003ccode\u003e\u003ca\u003esetCallback\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e\u003cp\u003eA value of zero in the \u003ca\u003eepochs between reports\u003c/a\u003e means no reports should be\n printed.\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "trainOnData",
          "package": "hfann",
          "signature": "FannPtr-\u003e TrainDataPtr-\u003e Int-\u003e Int-\u003e Double-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Train the Neural Network on training dataset Instead of printing out reports every epochs between reports callback function can be called see setCallback value of zero in the epochs between reports means no reports should be printed",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "trainOnData",
          "normalized": "FannPtr-\u003eTrainDataPtr-\u003eInt-\u003eInt-\u003eDouble-\u003eIO()",
          "package": "hfann",
          "partial": "On Data",
          "signature": "FannPtr-\u003eTrainDataPtr-\u003eInt-\u003eInt-\u003eDouble-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:trainOnData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrain the Neural Network on the given data file\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "trainOnFile",
          "package": "hfann",
          "signature": "FannPtr-\u003e String-\u003e Int-\u003e Int-\u003e Double-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Train the Neural Network on the given data file",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "trainOnFile",
          "normalized": "FannPtr-\u003eString-\u003eInt-\u003eInt-\u003eDouble-\u003eIO()",
          "package": "hfann",
          "partial": "On File",
          "signature": "FannPtr-\u003eString-\u003eInt-\u003eInt-\u003eDouble-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:trainOnFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead training data from file and run the given function on that data.\n\u003c/p\u003e",
          "module": "HFANN.Train",
          "name": "withTrainData",
          "package": "hfann",
          "signature": "String-\u003e (TrainDataPtr -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Read training data from file and run the given function on that data",
          "hierarchy": "HFANN Train",
          "module": "HFANN.Train",
          "name": "withTrainData",
          "normalized": "String-\u003e(TrainDataPtr-\u003eIO a)-\u003eIO a",
          "package": "hfann",
          "partial": "Train Data",
          "signature": "String-\u003e(TrainDataPtr-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN-Train.html#v:withTrainData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Fast Artificial Neural Network Library (FANN) is a free open source\n neural network library written in C with support for both fully connected\n and sparsely connected networks (\u003ca\u003ehttp://leenissen.dk/fann/\u003c/a\u003e).\n\u003c/p\u003e\u003cp\u003eHFANN is a Haskell interface to this library.\n\u003c/p\u003e\u003cp\u003eSee below for examples.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "HFANN",
          "name": "HFANN",
          "package": "hfann",
          "source": "src/HFANN.html",
          "type": "module"
        },
        "index": {
          "description": "The Fast Artificial Neural Network Library FANN is free open source neural network library written in with support for both fully connected and sparsely connected networks http leenissen.dk fann HFANN is Haskell interface to this library See below for examples",
          "hierarchy": "HFANN",
          "module": "HFANN",
          "name": "HFANN",
          "package": "hfann",
          "partial": "HFANN",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hfann/docs/HFANN.html#"
      }
    }
  ]
]