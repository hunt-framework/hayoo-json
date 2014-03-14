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
        "word": "sgd"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDataset abstraction.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.SGD.Dataset",
          "name": "Dataset",
          "package": "sgd",
          "source": "src/Numeric-SGD-Dataset.html",
          "type": "module"
        },
        "index": {
          "description": "Dataset abstraction",
          "hierarchy": "Numeric SGD Dataset",
          "module": "Numeric.SGD.Dataset",
          "name": "Dataset",
          "package": "sgd",
          "partial": "Dataset",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-Dataset.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA dataset with elements of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.SGD.Dataset",
          "name": "Dataset",
          "package": "sgd",
          "source": "src/Numeric-SGD-Dataset.html#Dataset",
          "type": "data"
        },
        "index": {
          "description": "dataset with elements of type",
          "hierarchy": "Numeric SGD Dataset",
          "module": "Numeric.SGD.Dataset",
          "name": "Dataset",
          "package": "sgd",
          "partial": "Dataset",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-Dataset.html#t:Dataset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.SGD.Dataset",
          "name": "Dataset",
          "package": "sgd",
          "signature": "Dataset",
          "source": "src/Numeric-SGD-Dataset.html#Dataset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric SGD Dataset",
          "module": "Numeric.SGD.Dataset",
          "name": "Dataset",
          "package": "sgd",
          "partial": "Dataset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-Dataset.html#v:Dataset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet dataset element with a given index.  The set of indices\n is of a {0, 1, .., size - 1} form.\n\u003c/p\u003e",
          "module": "Numeric.SGD.Dataset",
          "name": "elemAt",
          "package": "sgd",
          "signature": "Int -\u003e IO a",
          "source": "src/Numeric-SGD-Dataset.html#Dataset",
          "type": "function"
        },
        "index": {
          "description": "Get dataset element with given index The set of indices is of size form",
          "hierarchy": "Numeric SGD Dataset",
          "module": "Numeric.SGD.Dataset",
          "name": "elemAt",
          "normalized": "Int-\u003eIO a",
          "package": "sgd",
          "partial": "At",
          "signature": "Int-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-Dataset.html#v:elemAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazily load dataset from a disk.\n\u003c/p\u003e",
          "module": "Numeric.SGD.Dataset",
          "name": "loadData",
          "package": "sgd",
          "signature": "Dataset a -\u003e IO [a]",
          "source": "src/Numeric-SGD-Dataset.html#loadData",
          "type": "function"
        },
        "index": {
          "description": "Lazily load dataset from disk",
          "hierarchy": "Numeric SGD Dataset",
          "module": "Numeric.SGD.Dataset",
          "name": "loadData",
          "normalized": "Dataset a-\u003eIO[a]",
          "package": "sgd",
          "partial": "Data",
          "signature": "Dataset a-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-Dataset.html#v:loadData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA dataset sample of the given size.\n\u003c/p\u003e",
          "module": "Numeric.SGD.Dataset",
          "name": "sample",
          "package": "sgd",
          "signature": "g -\u003e Int -\u003e Dataset a -\u003e IO ([a], g)",
          "source": "src/Numeric-SGD-Dataset.html#sample",
          "type": "function"
        },
        "index": {
          "description": "dataset sample of the given size",
          "hierarchy": "Numeric SGD Dataset",
          "module": "Numeric.SGD.Dataset",
          "name": "sample",
          "normalized": "a-\u003eInt-\u003eDataset b-\u003eIO([b],a)",
          "package": "sgd",
          "signature": "g-\u003eInt-\u003eDataset a-\u003eIO([a],g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-Dataset.html#v:sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA size of the dataset.\n\u003c/p\u003e",
          "module": "Numeric.SGD.Dataset",
          "name": "size",
          "package": "sgd",
          "signature": "Int",
          "source": "src/Numeric-SGD-Dataset.html#Dataset",
          "type": "function"
        },
        "index": {
          "description": "size of the dataset",
          "hierarchy": "Numeric SGD Dataset",
          "module": "Numeric.SGD.Dataset",
          "name": "size",
          "package": "sgd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-Dataset.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse disk or vector dataset representation depending on\n the first argument: when \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, use \u003ccode\u003e\u003ca\u003ewithDisk\u003c/a\u003e\u003c/code\u003e, otherwise\n use \u003ccode\u003e\u003ca\u003ewithVect\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.SGD.Dataset",
          "name": "withData",
          "package": "sgd",
          "signature": "Bool -\u003e [a] -\u003e (Dataset a -\u003e IO b) -\u003e IO b",
          "source": "src/Numeric-SGD-Dataset.html#withData",
          "type": "function"
        },
        "index": {
          "description": "Use disk or vector dataset representation depending on the first argument when True use withDisk otherwise use withVect",
          "hierarchy": "Numeric SGD Dataset",
          "module": "Numeric.SGD.Dataset",
          "name": "withData",
          "normalized": "Bool-\u003e[a]-\u003e(Dataset a-\u003eIO b)-\u003eIO b",
          "package": "sgd",
          "partial": "Data",
          "signature": "Bool-\u003e[a]-\u003e(Dataset a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-Dataset.html#v:withData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct dataset from a list of elements, store it on a disk\n and run the given handler.\n\u003c/p\u003e",
          "module": "Numeric.SGD.Dataset",
          "name": "withDisk",
          "package": "sgd",
          "signature": "[a] -\u003e (Dataset a -\u003e IO b) -\u003e IO b",
          "source": "src/Numeric-SGD-Dataset.html#withDisk",
          "type": "function"
        },
        "index": {
          "description": "Construct dataset from list of elements store it on disk and run the given handler",
          "hierarchy": "Numeric SGD Dataset",
          "module": "Numeric.SGD.Dataset",
          "name": "withDisk",
          "normalized": "[a]-\u003e(Dataset a-\u003eIO b)-\u003eIO b",
          "package": "sgd",
          "partial": "Disk",
          "signature": "[a]-\u003e(Dataset a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-Dataset.html#v:withDisk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct dataset from a vector of elements and run the\n given handler.\n\u003c/p\u003e",
          "module": "Numeric.SGD.Dataset",
          "name": "withVect",
          "package": "sgd",
          "signature": "[a] -\u003e (Dataset a -\u003e IO b) -\u003e IO b",
          "source": "src/Numeric-SGD-Dataset.html#withVect",
          "type": "function"
        },
        "index": {
          "description": "Construct dataset from vector of elements and run the given handler",
          "hierarchy": "Numeric SGD Dataset",
          "module": "Numeric.SGD.Dataset",
          "name": "withVect",
          "normalized": "[a]-\u003e(Dataset a-\u003eIO b)-\u003eIO b",
          "package": "sgd",
          "partial": "Vect",
          "signature": "[a]-\u003e(Dataset a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-Dataset.html#v:withVect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA gradient is represented by an IntMap from gradient indices\n to values. Elements with no associated values in the gradient\n are assumed to have a 0 value assigned. Such elements are\n not interesting: when adding the gradient to the vector of\n parameters, only nonzero elements are taken into account.\n\u003c/p\u003e\u003cp\u003eEach value associated with a gradient position is a pair of\n positive and negative components. They are stored separately\n to ensure high accuracy of computation results.\n Besides, both positive and negative components are stored\n in a logarithmic domain.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.SGD.Grad",
          "name": "Grad",
          "package": "sgd",
          "source": "src/Numeric-SGD-Grad.html",
          "type": "module"
        },
        "index": {
          "description": "gradient is represented by an IntMap from gradient indices to values Elements with no associated values in the gradient are assumed to have value assigned Such elements are not interesting when adding the gradient to the vector of parameters only nonzero elements are taken into account Each value associated with gradient position is pair of positive and negative components They are stored separately to ensure high accuracy of computation results Besides both positive and negative components are stored in logarithmic domain",
          "hierarchy": "Numeric SGD Grad",
          "module": "Numeric.SGD.Grad",
          "name": "Grad",
          "package": "sgd",
          "partial": "Grad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-Grad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGradient with nonzero values stored in a logarithmic domain.\n Since values equal to zero have no impact on the update phase\n of the SGD method, it is more efficient to not to store those\n components in the gradient.\n\u003c/p\u003e",
          "module": "Numeric.SGD.Grad",
          "name": "Grad",
          "package": "sgd",
          "source": "src/Numeric-SGD-Grad.html#Grad",
          "type": "type"
        },
        "index": {
          "description": "Gradient with nonzero values stored in logarithmic domain Since values equal to zero have no impact on the update phase of the SGD method it is more efficient to not to store those components in the gradient",
          "hierarchy": "Numeric SGD Grad",
          "module": "Numeric.SGD.Grad",
          "name": "Grad",
          "package": "sgd",
          "partial": "Grad",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-Grad.html#t:Grad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd normal-domain double to the gradient at the given position.\n\u003c/p\u003e",
          "module": "Numeric.SGD.Grad",
          "name": "add",
          "package": "sgd",
          "signature": "Grad -\u003e Int -\u003e Double -\u003e Grad",
          "source": "src/Numeric-SGD-Grad.html#add",
          "type": "function"
        },
        "index": {
          "description": "Add normal-domain double to the gradient at the given position",
          "hierarchy": "Numeric SGD Grad",
          "module": "Numeric.SGD.Grad",
          "name": "add",
          "normalized": "Grad-\u003eInt-\u003eDouble-\u003eGrad",
          "package": "sgd",
          "signature": "Grad-\u003eInt-\u003eDouble-\u003eGrad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-Grad.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd log-domain, singed number to the gradient at the given position.\n\u003c/p\u003e",
          "module": "Numeric.SGD.Grad",
          "name": "addL",
          "package": "sgd",
          "signature": "Grad -\u003e Int -\u003e LogSigned -\u003e Grad",
          "source": "src/Numeric-SGD-Grad.html#addL",
          "type": "function"
        },
        "index": {
          "description": "Add log-domain singed number to the gradient at the given position",
          "hierarchy": "Numeric SGD Grad",
          "module": "Numeric.SGD.Grad",
          "name": "addL",
          "normalized": "Grad-\u003eInt-\u003eLogSigned-\u003eGrad",
          "package": "sgd",
          "signature": "Grad-\u003eInt-\u003eLogSigned-\u003eGrad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-Grad.html#v:addL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty gradient, i.e. with all elements set to 0.\n\u003c/p\u003e",
          "module": "Numeric.SGD.Grad",
          "name": "empty",
          "package": "sgd",
          "signature": "Grad",
          "source": "src/Numeric-SGD-Grad.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Empty gradient i.e with all elements set to",
          "hierarchy": "Numeric SGD Grad",
          "module": "Numeric.SGD.Grad",
          "name": "empty",
          "package": "sgd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-Grad.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct gradient from a list of (index, value) pairs.\n All values from the list are added at respective gradient\n positions.\n\u003c/p\u003e",
          "module": "Numeric.SGD.Grad",
          "name": "fromList",
          "package": "sgd",
          "signature": "[(Int, Double)] -\u003e Grad",
          "source": "src/Numeric-SGD-Grad.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Construct gradient from list of index value pairs All values from the list are added at respective gradient positions",
          "hierarchy": "Numeric SGD Grad",
          "module": "Numeric.SGD.Grad",
          "name": "fromList",
          "normalized": "[(Int,Double)]-\u003eGrad",
          "package": "sgd",
          "partial": "List",
          "signature": "[(Int,Double)]-\u003eGrad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-Grad.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct gradient from a list of (index, signed, log-domain number)\n pairs.  All values from the list are added at respective gradient\n positions.\n\u003c/p\u003e",
          "module": "Numeric.SGD.Grad",
          "name": "fromLogList",
          "package": "sgd",
          "signature": "[(Int, LogSigned)] -\u003e Grad",
          "source": "src/Numeric-SGD-Grad.html#fromLogList",
          "type": "function"
        },
        "index": {
          "description": "Construct gradient from list of index signed log-domain number pairs All values from the list are added at respective gradient positions",
          "hierarchy": "Numeric SGD Grad",
          "module": "Numeric.SGD.Grad",
          "name": "fromLogList",
          "normalized": "[(Int,LogSigned)]-\u003eGrad",
          "package": "sgd",
          "partial": "Log List",
          "signature": "[(Int,LogSigned)]-\u003eGrad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-Grad.html#v:fromLogList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform parallel unions operation on gradient list. \n Experimental version.\n\u003c/p\u003e",
          "module": "Numeric.SGD.Grad",
          "name": "parUnions",
          "package": "sgd",
          "signature": "[Grad] -\u003e Grad",
          "source": "src/Numeric-SGD-Grad.html#parUnions",
          "type": "function"
        },
        "index": {
          "description": "Perform parallel unions operation on gradient list Experimental version",
          "hierarchy": "Numeric SGD Grad",
          "module": "Numeric.SGD.Grad",
          "name": "parUnions",
          "normalized": "[Grad]-\u003eGrad",
          "package": "sgd",
          "partial": "Unions",
          "signature": "[Grad]-\u003eGrad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-Grad.html#v:parUnions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect gradient components with values in normal domain.\n\u003c/p\u003e",
          "module": "Numeric.SGD.Grad",
          "name": "toList",
          "package": "sgd",
          "signature": "Grad -\u003e [(Int, Double)]",
          "source": "src/Numeric-SGD-Grad.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Collect gradient components with values in normal domain",
          "hierarchy": "Numeric SGD Grad",
          "module": "Numeric.SGD.Grad",
          "name": "toList",
          "normalized": "Grad-\u003e[(Int,Double)]",
          "package": "sgd",
          "partial": "List",
          "signature": "Grad-\u003e[(Int,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-Grad.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule provides data type for signed log-domain calculations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.SGD.LogSigned",
          "name": "LogSigned",
          "package": "sgd",
          "source": "src/Numeric-SGD-LogSigned.html",
          "type": "module"
        },
        "index": {
          "description": "Module provides data type for signed log-domain calculations",
          "hierarchy": "Numeric SGD LogSigned",
          "module": "Numeric.SGD.LogSigned",
          "name": "LogSigned",
          "package": "sgd",
          "partial": "Log Signed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-LogSigned.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSigned real value in the logarithmic domain.\n\u003c/p\u003e",
          "module": "Numeric.SGD.LogSigned",
          "name": "LogSigned",
          "package": "sgd",
          "source": "src/Numeric-SGD-LogSigned.html#LogSigned",
          "type": "data"
        },
        "index": {
          "description": "Signed real value in the logarithmic domain",
          "hierarchy": "Numeric SGD LogSigned",
          "module": "Numeric.SGD.LogSigned",
          "name": "LogSigned",
          "package": "sgd",
          "partial": "Log Signed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-LogSigned.html#t:LogSigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.SGD.LogSigned",
          "name": "LogSigned",
          "package": "sgd",
          "signature": "LogSigned",
          "source": "src/Numeric-SGD-LogSigned.html#LogSigned",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric SGD LogSigned",
          "module": "Numeric.SGD.LogSigned",
          "name": "LogSigned",
          "package": "sgd",
          "partial": "Log Signed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-LogSigned.html#v:LogSigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake LogSigned from a negative, log-domain number.\n\u003c/p\u003e",
          "module": "Numeric.SGD.LogSigned",
          "name": "fromNeg",
          "package": "sgd",
          "signature": "LogFloat -\u003e LogSigned",
          "source": "src/Numeric-SGD-LogSigned.html#fromNeg",
          "type": "function"
        },
        "index": {
          "description": "Make LogSigned from negative log-domain number",
          "hierarchy": "Numeric SGD LogSigned",
          "module": "Numeric.SGD.LogSigned",
          "name": "fromNeg",
          "normalized": "LogFloat-\u003eLogSigned",
          "package": "sgd",
          "partial": "Neg",
          "signature": "LogFloat-\u003eLogSigned",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-LogSigned.html#v:fromNeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake LogSigned from a positive, log-domain number.\n\u003c/p\u003e",
          "module": "Numeric.SGD.LogSigned",
          "name": "fromPos",
          "package": "sgd",
          "signature": "LogFloat -\u003e LogSigned",
          "source": "src/Numeric-SGD-LogSigned.html#fromPos",
          "type": "function"
        },
        "index": {
          "description": "Make LogSigned from positive log-domain number",
          "hierarchy": "Numeric SGD LogSigned",
          "module": "Numeric.SGD.LogSigned",
          "name": "fromPos",
          "normalized": "LogFloat-\u003eLogSigned",
          "package": "sgd",
          "partial": "Pos",
          "signature": "LogFloat-\u003eLogSigned",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-LogSigned.html#v:fromPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart LogSigned constructor.\n\u003c/p\u003e",
          "module": "Numeric.SGD.LogSigned",
          "name": "logSigned",
          "package": "sgd",
          "signature": "Double -\u003e LogSigned",
          "source": "src/Numeric-SGD-LogSigned.html#logSigned",
          "type": "function"
        },
        "index": {
          "description": "Smart LogSigned constructor",
          "hierarchy": "Numeric SGD LogSigned",
          "module": "Numeric.SGD.LogSigned",
          "name": "logSigned",
          "normalized": "Double-\u003eLogSigned",
          "package": "sgd",
          "partial": "Signed",
          "signature": "Double-\u003eLogSigned",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-LogSigned.html#v:logSigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegative component\n\u003c/p\u003e",
          "module": "Numeric.SGD.LogSigned",
          "name": "neg",
          "package": "sgd",
          "signature": "LogFloat",
          "source": "src/Numeric-SGD-LogSigned.html#LogSigned",
          "type": "function"
        },
        "index": {
          "description": "Negative component",
          "hierarchy": "Numeric SGD LogSigned",
          "module": "Numeric.SGD.LogSigned",
          "name": "neg",
          "package": "sgd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-LogSigned.html#v:neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePositive component\n\u003c/p\u003e",
          "module": "Numeric.SGD.LogSigned",
          "name": "pos",
          "package": "sgd",
          "signature": "LogFloat",
          "source": "src/Numeric-SGD-LogSigned.html#LogSigned",
          "type": "function"
        },
        "index": {
          "description": "Positive component",
          "hierarchy": "Numeric SGD LogSigned",
          "module": "Numeric.SGD.LogSigned",
          "name": "pos",
          "package": "sgd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-LogSigned.html#v:pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the \u003ccode\u003e\u003ca\u003eLogSigned\u003c/a\u003e\u003c/code\u003e to either negative \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eLogFloat\u003c/a\u003e\u003c/code\u003e\n or positive \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eLogFloat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Numeric.SGD.LogSigned",
          "name": "toLogFloat",
          "package": "sgd",
          "signature": "LogSigned -\u003e Either LogFloat LogFloat",
          "source": "src/Numeric-SGD-LogSigned.html#toLogFloat",
          "type": "function"
        },
        "index": {
          "description": "Change the LogSigned to either negative Left LogFloat or positive Right LogFloat",
          "hierarchy": "Numeric SGD LogSigned",
          "module": "Numeric.SGD.LogSigned",
          "name": "toLogFloat",
          "normalized": "LogSigned-\u003eEither LogFloat LogFloat",
          "package": "sgd",
          "partial": "Log Float",
          "signature": "LogSigned-\u003eEither LogFloat LogFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-LogSigned.html#v:toLogFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShift LogSigned to a normal domain.\n\u003c/p\u003e",
          "module": "Numeric.SGD.LogSigned",
          "name": "toNorm",
          "package": "sgd",
          "signature": "LogSigned -\u003e Double",
          "source": "src/Numeric-SGD-LogSigned.html#toNorm",
          "type": "function"
        },
        "index": {
          "description": "Shift LogSigned to normal domain",
          "hierarchy": "Numeric SGD LogSigned",
          "module": "Numeric.SGD.LogSigned",
          "name": "toNorm",
          "normalized": "LogSigned-\u003eDouble",
          "package": "sgd",
          "partial": "Norm",
          "signature": "LogSigned-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD-LogSigned.html#v:toNorm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStochastic gradient descent implementation using mutable\n vectors for efficient update of the parameters vector.\n A user is provided with the immutable vector of parameters\n so he is able to compute the gradient outside of the IO monad.\n Currently only the Gaussian priors are implemented.\n\u003c/p\u003e\u003cp\u003eThis is a preliminary version of the SGD library and API may change\n in future versions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Numeric.SGD",
          "name": "SGD",
          "package": "sgd",
          "source": "src/Numeric-SGD.html",
          "type": "module"
        },
        "index": {
          "description": "Stochastic gradient descent implementation using mutable vectors for efficient update of the parameters vector user is provided with the immutable vector of parameters so he is able to compute the gradient outside of the IO monad Currently only the Gaussian priors are implemented This is preliminary version of the SGD library and API may change in future versions",
          "hierarchy": "Numeric SGD",
          "module": "Numeric.SGD",
          "name": "SGD",
          "package": "sgd",
          "partial": "SGD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVector of parameters.\n\u003c/p\u003e",
          "module": "Numeric.SGD",
          "name": "Para",
          "package": "sgd",
          "source": "src/Numeric-SGD.html#Para",
          "type": "type"
        },
        "index": {
          "description": "Vector of parameters",
          "hierarchy": "Numeric SGD",
          "module": "Numeric.SGD",
          "name": "Para",
          "package": "sgd",
          "partial": "Para",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD.html#t:Para"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSGD parameters controlling the learning process.\n\u003c/p\u003e",
          "module": "Numeric.SGD",
          "name": "SgdArgs",
          "package": "sgd",
          "source": "src/Numeric-SGD.html#SgdArgs",
          "type": "data"
        },
        "index": {
          "description": "SGD parameters controlling the learning process",
          "hierarchy": "Numeric SGD",
          "module": "Numeric.SGD",
          "name": "SgdArgs",
          "package": "sgd",
          "partial": "Sgd Args",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD.html#t:SgdArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Numeric.SGD",
          "name": "SgdArgs",
          "package": "sgd",
          "signature": "SgdArgs",
          "source": "src/Numeric-SGD.html#SgdArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Numeric SGD",
          "module": "Numeric.SGD",
          "name": "SgdArgs",
          "package": "sgd",
          "partial": "Sgd Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD.html#v:SgdArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of the batch\n\u003c/p\u003e",
          "module": "Numeric.SGD",
          "name": "batchSize",
          "package": "sgd",
          "signature": "Int",
          "source": "src/Numeric-SGD.html#SgdArgs",
          "type": "function"
        },
        "index": {
          "description": "Size of the batch",
          "hierarchy": "Numeric SGD",
          "module": "Numeric.SGD",
          "name": "batchSize",
          "package": "sgd",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD.html#v:batchSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitial gain parameter\n\u003c/p\u003e",
          "module": "Numeric.SGD",
          "name": "gain0",
          "package": "sgd",
          "signature": "Double",
          "source": "src/Numeric-SGD.html#SgdArgs",
          "type": "function"
        },
        "index": {
          "description": "Initial gain parameter",
          "hierarchy": "Numeric SGD",
          "module": "Numeric.SGD",
          "name": "gain0",
          "package": "sgd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD.html#v:gain0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of iterations\n\u003c/p\u003e",
          "module": "Numeric.SGD",
          "name": "iterNum",
          "package": "sgd",
          "signature": "Double",
          "source": "src/Numeric-SGD.html#SgdArgs",
          "type": "function"
        },
        "index": {
          "description": "Number of iterations",
          "hierarchy": "Numeric SGD",
          "module": "Numeric.SGD",
          "name": "iterNum",
          "package": "sgd",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD.html#v:iterNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegularization variance\n\u003c/p\u003e",
          "module": "Numeric.SGD",
          "name": "regVar",
          "package": "sgd",
          "signature": "Double",
          "source": "src/Numeric-SGD.html#SgdArgs",
          "type": "function"
        },
        "index": {
          "description": "Regularization variance",
          "hierarchy": "Numeric SGD",
          "module": "Numeric.SGD",
          "name": "regVar",
          "package": "sgd",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD.html#v:regVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stochastic gradient descent method.\n A notification function can be used to provide user with\n information about the progress of the learning.\n\u003c/p\u003e",
          "module": "Numeric.SGD",
          "name": "sgd",
          "package": "sgd",
          "signature": "SgdArgs-\u003e (Para -\u003e Int -\u003e IO ())-\u003e (Para -\u003e x -\u003e Grad)-\u003e Dataset x-\u003e Para-\u003e IO Para",
          "type": "function"
        },
        "index": {
          "description": "stochastic gradient descent method notification function can be used to provide user with information about the progress of the learning",
          "hierarchy": "Numeric SGD",
          "module": "Numeric.SGD",
          "name": "sgd",
          "normalized": "SgdArgs-\u003e(Para-\u003eInt-\u003eIO())-\u003e(Para-\u003ea-\u003eGrad)-\u003eDataset a-\u003ePara-\u003eIO Para",
          "package": "sgd",
          "signature": "SgdArgs-\u003e(Para-\u003eInt-\u003eIO())-\u003e(Para-\u003ex-\u003eGrad)-\u003eDataset x-\u003ePara-\u003eIO Para",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD.html#v:sgd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault SGD parameter values.\n\u003c/p\u003e",
          "module": "Numeric.SGD",
          "name": "sgdArgsDefault",
          "package": "sgd",
          "signature": "SgdArgs",
          "source": "src/Numeric-SGD.html#sgdArgsDefault",
          "type": "function"
        },
        "index": {
          "description": "Default SGD parameter values",
          "hierarchy": "Numeric SGD",
          "module": "Numeric.SGD",
          "name": "sgdArgsDefault",
          "package": "sgd",
          "partial": "Args Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD.html#v:sgdArgsDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAfter how many iterations over the entire dataset\n the gain parameter is halved\n\u003c/p\u003e",
          "module": "Numeric.SGD",
          "name": "tau",
          "package": "sgd",
          "signature": "Double",
          "source": "src/Numeric-SGD.html#SgdArgs",
          "type": "function"
        },
        "index": {
          "description": "After how many iterations over the entire dataset the gain parameter is halved",
          "hierarchy": "Numeric SGD",
          "module": "Numeric.SGD",
          "name": "tau",
          "package": "sgd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sgd/docs/Numeric-SGD.html#v:tau"
      }
    }
  ]
]