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
        "word": "perceptron"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of the perceptron learning algorithm for supervised binary\n linear classification.\n\u003c/p\u003e\u003cp\u003eA binary classifier maps so-called feature vectors to Boolean values.\n In the case of linear binary classification the decision on what Boolean a\n vector is mapped to is based on the value of a linear combination of the\n vector's components.\n The perceptron is an online algorithm for learning such a linear mapping from\n a set of training data.\n\u003c/p\u003e\u003cp\u003eTraining data are provided as samples consisting of a feature vector and the\n Boolean it should be mapped to.\n Hence, the perceptron implements a form of supervised learning.\n Only if the training vectors are linearly separable, the perceptron algorithm\n is guaranteed to terminate.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Learning.Perceptron",
          "name": "Perceptron",
          "package": "perceptron",
          "source": "src/Learning-Perceptron.html",
          "type": "module"
        },
        "index": {
          "description": "An implementation of the perceptron learning algorithm for supervised binary linear classification binary classifier maps so-called feature vectors to Boolean values In the case of linear binary classification the decision on what Boolean vector is mapped to is based on the value of linear combination of the vector components The perceptron is an online algorithm for learning such linear mapping from set of training data Training data are provided as samples consisting of feature vector and the Boolean it should be mapped to Hence the perceptron implements form of supervised learning Only if the training vectors are linearly separable the perceptron algorithm is guaranteed to terminate",
          "hierarchy": "Learning Perceptron",
          "module": "Learning.Perceptron",
          "name": "Perceptron",
          "package": "perceptron",
          "partial": "Perceptron",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/perceptron/docs/Learning-Perceptron.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a classifier that agrees with the given list of classifications.\n \u003cem\u003eOnly terminates if the given classifications are linearly separable!\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Learning.Perceptron",
          "name": "pla",
          "package": "perceptron",
          "signature": "[([a], Bool)] -\u003e [a] -\u003e Bool",
          "source": "src/Learning-Perceptron.html#pla",
          "type": "function"
        },
        "index": {
          "description": "Return classifier that agrees with the given list of classifications Only terminates if the given classifications are linearly separable",
          "hierarchy": "Learning Perceptron",
          "module": "Learning.Perceptron",
          "name": "pla",
          "normalized": "[([a],Bool)]-\u003e[a]-\u003eBool",
          "package": "perceptron",
          "signature": "[([a],Bool)]-\u003e[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/perceptron/docs/Learning-Perceptron.html#v:pla"
      }
    }
  ]
]