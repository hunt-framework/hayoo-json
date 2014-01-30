[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hinduce-classifier/docs/Data-HInduce-Classifier-Class.html#",
      "description": {
        "fct-module": "Data.HInduce.Classifier.Class",
        "fct-package": "hinduce-classifier",
        "fct-signature": "module",
        "fct-source": "src/Data-HInduce-Classifier-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HInduce Classifier Class",
        "module": "Data.HInduce.Classifier.Class",
        "name": "Class",
        "normalized": "",
        "package": "hinduce-classifier",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hinduce-classifier/docs/Data-HInduce-Classifier-Class.html#t:Classifier",
      "description": {
        "fct-module": "Data.HInduce.Classifier.Class",
        "fct-package": "hinduce-classifier",
        "fct-signature": "class",
        "fct-source": "src/Data-HInduce-Classifier-Class.html#Classifier",
        "fct-type": "class",
        "title": "Classifier"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HInduce Classifier Class",
        "module": "Data.HInduce.Classifier.Class",
        "name": "Classifier",
        "normalized": "",
        "package": "hinduce-classifier",
        "partial": "Classifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hinduce-classifier/docs/Data-HInduce-Classifier-Class.html#v:classify",
      "description": {
        "fct-module": "Data.HInduce.Classifier.Class",
        "fct-package": "hinduce-classifier",
        "fct-signature": "classifier -\u003e attributes -\u003e label",
        "fct-source": "src/Data-HInduce-Classifier-Class.html#classify",
        "fct-type": "method",
        "title": "classify"
      },
      "index": {
        "description": "",
        "hierarchy": "Data HInduce Classifier Class",
        "module": "Data.HInduce.Classifier.Class",
        "name": "classify",
        "normalized": "a-\u003eb-\u003ec",
        "package": "hinduce-classifier",
        "partial": "",
        "signature": "classifier-\u003eattributes-\u003elabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hinduce-classifier/docs/Data-HInduce-Classifier.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn machine learning and pattern recognition, classification\n refers to an algorithmic procedure for assigning a given piece of\n input data into one of a given number of categories. An example\n would be assigning a given email into spam or non-spam classes\n or assigning a diagnosis to a given patient as described by\n observed characteristics of the patient (gender, blood pressure,\n presence or absence of certain symptoms, etc.). An algorithm that\n implements classification, especially in a concrete implementation,\n is known as a classifier. The term classifier sometimes also\n refers to the mathematical function, implemented by a\n classification algorithm, that maps input data to a category.\n (\u003ca\u003ehttps://en.wikipedia.org/wiki/Classification_in_machine_learning\u003c/a\u003e,\n Nov 28 2011)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HInduce.Classifier",
        "fct-package": "hinduce-classifier",
        "fct-signature": "module",
        "fct-source": "src/Data-HInduce-Classifier.html",
        "fct-type": "module",
        "title": "Classifier"
      },
      "index": {
        "description": "In machine learning and pattern recognition classification refers to an algorithmic procedure for assigning given piece of input data into one of given number of categories An example would be assigning given email into spam or non-spam classes or assigning diagnosis to given patient as described by observed characteristics of the patient gender blood pressure presence or absence of certain symptoms etc An algorithm that implements classification especially in concrete implementation is known as classifier The term classifier sometimes also refers to the mathematical function implemented by classification algorithm that maps input data to category https en.wikipedia.org wiki Classification in machine learning Nov",
        "hierarchy": "Data HInduce Classifier",
        "module": "Data.HInduce.Classifier",
        "name": "Classifier",
        "normalized": "",
        "package": "hinduce-classifier",
        "partial": "Classifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hinduce-classifier/docs/Data-HInduce-Classifier.html#v:absConfusion",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the confusion matrix of a classifier, showing numbers of occurance instead of relative frequencies. Prefer \u003ccode\u003eabsConfusion'\u003c/code\u003e in ghci.\n\u003c/p\u003e",
        "fct-module": "Data.HInduce.Classifier",
        "fct-package": "hinduce-classifier",
        "fct-signature": "classifier -\u003e [(attributes, label)] -\u003e [((label, label), Int)]",
        "fct-source": "src/Data-HInduce-Classifier.html#absConfusion",
        "fct-type": "function",
        "title": "absConfusion"
      },
      "index": {
        "description": "Calculate the confusion matrix of classifier showing numbers of occurance instead of relative frequencies Prefer absConfusion in ghci",
        "hierarchy": "Data HInduce Classifier",
        "module": "Data.HInduce.Classifier",
        "name": "absConfusion",
        "normalized": "a-\u003e[(b,c)]-\u003e[((c,c),Int)]",
        "package": "hinduce-classifier",
        "partial": "Confusion",
        "signature": "classifier-\u003e[(attributes,label)]-\u003e[((label,label),Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hinduce-classifier/docs/Data-HInduce-Classifier.html#v:absConfusion-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003eabsConfusion\u003c/code\u003e, but puts it in a nice table.\n\u003c/p\u003e",
        "fct-module": "Data.HInduce.Classifier",
        "fct-package": "hinduce-classifier",
        "fct-signature": "classifier -\u003e [(attributes, label)] -\u003e Table label label Int",
        "fct-source": "src/Data-HInduce-Classifier.html#absConfusion%27",
        "fct-type": "function",
        "title": "absConfusion'"
      },
      "index": {
        "description": "Like absConfusion but puts it in nice table",
        "hierarchy": "Data HInduce Classifier",
        "module": "Data.HInduce.Classifier",
        "name": "absConfusion'",
        "normalized": "a-\u003e[(b,c)]-\u003eTable c c Int",
        "package": "hinduce-classifier",
        "partial": "Confusion'",
        "signature": "classifier-\u003e[(attributes,label)]-\u003eTable label label Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hinduce-classifier/docs/Data-HInduce-Classifier.html#v:confusion",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the confusion matrix of a classifier. Prefer \u003ccode\u003econfusion'\u003c/code\u003e in ghci.\n\u003c/p\u003e",
        "fct-module": "Data.HInduce.Classifier",
        "fct-package": "hinduce-classifier",
        "fct-signature": "classifier -\u003e [(attributes, label)] -\u003e [((label, label), f)]",
        "fct-source": "src/Data-HInduce-Classifier.html#confusion",
        "fct-type": "function",
        "title": "confusion"
      },
      "index": {
        "description": "Calculate the confusion matrix of classifier Prefer confusion in ghci",
        "hierarchy": "Data HInduce Classifier",
        "module": "Data.HInduce.Classifier",
        "name": "confusion",
        "normalized": "a-\u003e[(b,c)]-\u003e[((c,c),d)]",
        "package": "hinduce-classifier",
        "partial": "",
        "signature": "classifier-\u003e[(attributes,label)]-\u003e[((label,label),f)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hinduce-classifier/docs/Data-HInduce-Classifier.html#v:confusion-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003econfusion\u003c/code\u003e, but puts it in a nice table.\n\u003c/p\u003e",
        "fct-module": "Data.HInduce.Classifier",
        "fct-package": "hinduce-classifier",
        "fct-signature": "classifier -\u003e [(attributes, label)] -\u003e Table label label Double",
        "fct-source": "src/Data-HInduce-Classifier.html#confusion%27",
        "fct-type": "function",
        "title": "confusion'"
      },
      "index": {
        "description": "Like confusion but puts it in nice table",
        "hierarchy": "Data HInduce Classifier",
        "module": "Data.HInduce.Classifier",
        "name": "confusion'",
        "normalized": "a-\u003e[(b,c)]-\u003eTable c c Double",
        "package": "hinduce-classifier",
        "partial": "",
        "signature": "classifier-\u003e[(attributes,label)]-\u003eTable label label Double"
      }
    }
  }
]