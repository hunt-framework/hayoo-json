[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/perceptron/docs/Learning-Perceptron.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of the perceptron learning algorithm for supervised binary\n linear classification.\n\u003c/p\u003e\u003cp\u003eA binary classifier maps so-called feature vectors to Boolean values.\n In the case of linear binary classification the decision on what Boolean a\n vector is mapped to is based on the value of a linear combination of the\n vector's components.\n The perceptron is an online algorithm for learning such a linear mapping from\n a set of training data.\n\u003c/p\u003e\u003cp\u003eTraining data are provided as samples consisting of a feature vector and the\n Boolean it should be mapped to.\n Hence, the perceptron implements a form of supervised learning.\n Only if the training vectors are linearly separable, the perceptron algorithm\n is guaranteed to terminate.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Learning.Perceptron",
        "fct-package": "perceptron",
        "fct-signature": "module",
        "fct-source": "src/Learning-Perceptron.html",
        "fct-type": "module",
        "title": "Perceptron"
      },
      "index": {
        "description": "An implementation of the perceptron learning algorithm for supervised binary linear classification binary classifier maps so-called feature vectors to Boolean values In the case of linear binary classification the decision on what Boolean vector is mapped to is based on the value of linear combination of the vector components The perceptron is an online algorithm for learning such linear mapping from set of training data Training data are provided as samples consisting of feature vector and the Boolean it should be mapped to Hence the perceptron implements form of supervised learning Only if the training vectors are linearly separable the perceptron algorithm is guaranteed to terminate",
        "hierarchy": "Learning Perceptron",
        "module": "Learning.Perceptron",
        "name": "Perceptron",
        "normalized": "",
        "package": "perceptron",
        "partial": "Perceptron",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/perceptron/docs/Learning-Perceptron.html#v:pla",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a classifier that agrees with the given list of classifications.\n \u003cem\u003eOnly terminates if the given classifications are linearly separable!\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Learning.Perceptron",
        "fct-package": "perceptron",
        "fct-signature": "[([a], Bool)] -\u003e [a] -\u003e Bool",
        "fct-source": "src/Learning-Perceptron.html#pla",
        "fct-type": "function",
        "title": "pla"
      },
      "index": {
        "description": "Return classifier that agrees with the given list of classifications Only terminates if the given classifications are linearly separable",
        "hierarchy": "Learning Perceptron",
        "module": "Learning.Perceptron",
        "name": "pla",
        "normalized": "[([a],Bool)]-\u003e[a]-\u003eBool",
        "package": "perceptron",
        "partial": "",
        "signature": "[([a],Bool)]-\u003e[a]-\u003eBool"
      }
    }
  }
]