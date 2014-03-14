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
        "word": "hnn"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLayer module, defining functions to work on a neural network layer, which is a list of neurons\n\u003c/p\u003e\u003c/div\u003e",
          "module": "AI.HNN.Layer",
          "name": "Layer",
          "package": "hnn",
          "source": "src/AI-HNN-Layer.html",
          "type": "module"
        },
        "index": {
          "description": "Layer module defining functions to work on neural network layer which is list of neurons",
          "hierarchy": "AI HNN Layer",
          "module": "AI.HNN.Layer",
          "name": "Layer",
          "package": "hnn",
          "partial": "Layer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Layer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the outputs of each Neuron of the layer\n\u003c/p\u003e",
          "module": "AI.HNN.Layer",
          "name": "computeLayer",
          "package": "hnn",
          "signature": "[Neuron] -\u003e [Double] -\u003e [Double]",
          "source": "src/AI-HNN-Layer.html#computeLayer",
          "type": "function"
        },
        "index": {
          "description": "Computes the outputs of each Neuron of the layer",
          "hierarchy": "AI HNN Layer",
          "module": "AI.HNN.Layer",
          "name": "computeLayer",
          "normalized": "[Neuron]-\u003e[Double]-\u003e[Double]",
          "package": "hnn",
          "partial": "Layer",
          "signature": "[Neuron]-\u003e[Double]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Layer.html#v:computeLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the outputs of each Neuron of the layer\n\u003c/p\u003e",
          "module": "AI.HNN.Layer",
          "name": "computeLayerU",
          "package": "hnn",
          "signature": "[Neuron] -\u003e UArr Double -\u003e UArr Double",
          "source": "src/AI-HNN-Layer.html#computeLayerU",
          "type": "function"
        },
        "index": {
          "description": "Computes the outputs of each Neuron of the layer",
          "hierarchy": "AI HNN Layer",
          "module": "AI.HNN.Layer",
          "name": "computeLayerU",
          "normalized": "[Neuron]-\u003eUArr Double-\u003eUArr Double",
          "package": "hnn",
          "partial": "Layer",
          "signature": "[Neuron]-\u003eUArr Double-\u003eUArr Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Layer.html#v:computeLayerU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a layer compound of n neurons with the sigmoid transfer function, all having the given threshold and weights.\n\u003c/p\u003e",
          "module": "AI.HNN.Layer",
          "name": "createHeavysideLayer",
          "package": "hnn",
          "signature": "Int -\u003e Double -\u003e [Double] -\u003e [Neuron]",
          "source": "src/AI-HNN-Layer.html#createHeavysideLayer",
          "type": "function"
        },
        "index": {
          "description": "Creates layer compound of neurons with the sigmoid transfer function all having the given threshold and weights",
          "hierarchy": "AI HNN Layer",
          "module": "AI.HNN.Layer",
          "name": "createHeavysideLayer",
          "normalized": "Int-\u003eDouble-\u003e[Double]-\u003e[Neuron]",
          "package": "hnn",
          "partial": "Heavyside Layer",
          "signature": "Int-\u003eDouble-\u003e[Double]-\u003e[Neuron]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Layer.html#v:createHeavysideLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a layer compound of n neurons with the Heavyside transfer function, all having the given threshold and weights.\n\u003c/p\u003e",
          "module": "AI.HNN.Layer",
          "name": "createHeavysideLayerU",
          "package": "hnn",
          "signature": "Int -\u003e Double -\u003e UArr Double -\u003e [Neuron]",
          "source": "src/AI-HNN-Layer.html#createHeavysideLayerU",
          "type": "function"
        },
        "index": {
          "description": "Creates layer compound of neurons with the Heavyside transfer function all having the given threshold and weights",
          "hierarchy": "AI HNN Layer",
          "module": "AI.HNN.Layer",
          "name": "createHeavysideLayerU",
          "normalized": "Int-\u003eDouble-\u003eUArr Double-\u003e[Neuron]",
          "package": "hnn",
          "partial": "Heavyside Layer",
          "signature": "Int-\u003eDouble-\u003eUArr Double-\u003e[Neuron]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Layer.html#v:createHeavysideLayerU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a layer compound of n neurons with the sigmoid transfer function, all having the given threshold and weights.\n\u003c/p\u003e",
          "module": "AI.HNN.Layer",
          "name": "createSigmoidLayer",
          "package": "hnn",
          "signature": "Int -\u003e Double -\u003e [Double] -\u003e [Neuron]",
          "source": "src/AI-HNN-Layer.html#createSigmoidLayer",
          "type": "function"
        },
        "index": {
          "description": "Creates layer compound of neurons with the sigmoid transfer function all having the given threshold and weights",
          "hierarchy": "AI HNN Layer",
          "module": "AI.HNN.Layer",
          "name": "createSigmoidLayer",
          "normalized": "Int-\u003eDouble-\u003e[Double]-\u003e[Neuron]",
          "package": "hnn",
          "partial": "Sigmoid Layer",
          "signature": "Int-\u003eDouble-\u003e[Double]-\u003e[Neuron]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Layer.html#v:createSigmoidLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a layer compound of n neurons with the Sigmoid transfer function, all having the given threshold and weights.\n\u003c/p\u003e",
          "module": "AI.HNN.Layer",
          "name": "createSigmoidLayerU",
          "package": "hnn",
          "signature": "Int -\u003e Double -\u003e UArr Double -\u003e [Neuron]",
          "source": "src/AI-HNN-Layer.html#createSigmoidLayerU",
          "type": "function"
        },
        "index": {
          "description": "Creates layer compound of neurons with the Sigmoid transfer function all having the given threshold and weights",
          "hierarchy": "AI HNN Layer",
          "module": "AI.HNN.Layer",
          "name": "createSigmoidLayerU",
          "normalized": "Int-\u003eDouble-\u003eUArr Double-\u003e[Neuron]",
          "package": "hnn",
          "partial": "Sigmoid Layer",
          "signature": "Int-\u003eDouble-\u003eUArr Double-\u003e[Neuron]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Layer.html#v:createSigmoidLayerU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrains each neuron with the given sample and the given learning ratio\n\u003c/p\u003e",
          "module": "AI.HNN.Layer",
          "name": "learnSampleLayer",
          "package": "hnn",
          "signature": "Double -\u003e [Neuron] -\u003e ([Double], [Double]) -\u003e [Neuron]",
          "source": "src/AI-HNN-Layer.html#learnSampleLayer",
          "type": "function"
        },
        "index": {
          "description": "Trains each neuron with the given sample and the given learning ratio",
          "hierarchy": "AI HNN Layer",
          "module": "AI.HNN.Layer",
          "name": "learnSampleLayer",
          "normalized": "Double-\u003e[Neuron]-\u003e([Double],[Double])-\u003e[Neuron]",
          "package": "hnn",
          "partial": "Sample Layer",
          "signature": "Double-\u003e[Neuron]-\u003e([Double],[Double])-\u003e[Neuron]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Layer.html#v:learnSampleLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrains each neuron with the given sample and the given learning ratio\n\u003c/p\u003e",
          "module": "AI.HNN.Layer",
          "name": "learnSampleLayerU",
          "package": "hnn",
          "signature": "Double -\u003e [Neuron] -\u003e (UArr Double, UArr Double) -\u003e [Neuron]",
          "source": "src/AI-HNN-Layer.html#learnSampleLayerU",
          "type": "function"
        },
        "index": {
          "description": "Trains each neuron with the given sample and the given learning ratio",
          "hierarchy": "AI HNN Layer",
          "module": "AI.HNN.Layer",
          "name": "learnSampleLayerU",
          "normalized": "Double-\u003e[Neuron]-\u003e(UArr Double,UArr Double)-\u003e[Neuron]",
          "package": "hnn",
          "partial": "Sample Layer",
          "signature": "Double-\u003e[Neuron]-\u003e(UArr Double,UArr Double)-\u003e[Neuron]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Layer.html#v:learnSampleLayerU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrains each neuron with the given samples and the given learning ratio\n\u003c/p\u003e",
          "module": "AI.HNN.Layer",
          "name": "learnSamplesLayer",
          "package": "hnn",
          "signature": "Double -\u003e [Neuron] -\u003e [([Double], [Double])] -\u003e [Neuron]",
          "source": "src/AI-HNN-Layer.html#learnSamplesLayer",
          "type": "function"
        },
        "index": {
          "description": "Trains each neuron with the given samples and the given learning ratio",
          "hierarchy": "AI HNN Layer",
          "module": "AI.HNN.Layer",
          "name": "learnSamplesLayer",
          "normalized": "Double-\u003e[Neuron]-\u003e[([Double],[Double])]-\u003e[Neuron]",
          "package": "hnn",
          "partial": "Samples Layer",
          "signature": "Double-\u003e[Neuron]-\u003e[([Double],[Double])]-\u003e[Neuron]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Layer.html#v:learnSamplesLayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrains each neuron with the given samples and the given learning ratio\n\u003c/p\u003e",
          "module": "AI.HNN.Layer",
          "name": "learnSamplesLayerU",
          "package": "hnn",
          "signature": "Double -\u003e [Neuron] -\u003e [(UArr Double, UArr Double)] -\u003e [Neuron]",
          "source": "src/AI-HNN-Layer.html#learnSamplesLayerU",
          "type": "function"
        },
        "index": {
          "description": "Trains each neuron with the given samples and the given learning ratio",
          "hierarchy": "AI HNN Layer",
          "module": "AI.HNN.Layer",
          "name": "learnSamplesLayerU",
          "normalized": "Double-\u003e[Neuron]-\u003e[(UArr Double,UArr Double)]-\u003e[Neuron]",
          "package": "hnn",
          "partial": "Samples Layer",
          "signature": "Double-\u003e[Neuron]-\u003e[(UArr Double,UArr Double)]-\u003e[Neuron]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Layer.html#v:learnSamplesLayerU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the quadratic error of a layer for a given sample\n\u003c/p\u003e",
          "module": "AI.HNN.Layer",
          "name": "quadError",
          "package": "hnn",
          "signature": "[Neuron] -\u003e ([Double], [Double]) -\u003e Double",
          "source": "src/AI-HNN-Layer.html#quadError",
          "type": "function"
        },
        "index": {
          "description": "Returns the quadratic error of layer for given sample",
          "hierarchy": "AI HNN Layer",
          "module": "AI.HNN.Layer",
          "name": "quadError",
          "normalized": "[Neuron]-\u003e([Double],[Double])-\u003eDouble",
          "package": "hnn",
          "partial": "Error",
          "signature": "[Neuron]-\u003e([Double],[Double])-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Layer.html#v:quadError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the quadratic error of a layer for a given sample\n\u003c/p\u003e",
          "module": "AI.HNN.Layer",
          "name": "quadErrorU",
          "package": "hnn",
          "signature": "[Neuron] -\u003e (UArr Double, UArr Double) -\u003e Double",
          "source": "src/AI-HNN-Layer.html#quadErrorU",
          "type": "function"
        },
        "index": {
          "description": "Returns the quadratic error of layer for given sample",
          "hierarchy": "AI HNN Layer",
          "module": "AI.HNN.Layer",
          "name": "quadErrorU",
          "normalized": "[Neuron]-\u003e(UArr Double,UArr Double)-\u003eDouble",
          "package": "hnn",
          "partial": "Error",
          "signature": "[Neuron]-\u003e(UArr Double,UArr Double)-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Layer.html#v:quadErrorU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNet module, defining functions to work on a neural network, which is a list of list of neurons \n\u003c/p\u003e\u003c/div\u003e",
          "module": "AI.HNN.Net",
          "name": "Net",
          "package": "hnn",
          "source": "src/AI-HNN-Net.html",
          "type": "module"
        },
        "index": {
          "description": "Net module defining functions to work on neural network which is list of list of neurons",
          "hierarchy": "AI HNN Net",
          "module": "AI.HNN.Net",
          "name": "Net",
          "package": "hnn",
          "partial": "Net",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Net.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrain the given neural network using the backpropagation algorithm on the given sample with the given learning ratio (alpha)\n\u003c/p\u003e",
          "module": "AI.HNN.Net",
          "name": "backProp",
          "package": "hnn",
          "signature": "Double -\u003e [[Neuron]] -\u003e ([Double], [Double]) -\u003e [[Neuron]]",
          "source": "src/AI-HNN-Net.html#backProp",
          "type": "function"
        },
        "index": {
          "description": "Train the given neural network using the backpropagation algorithm on the given sample with the given learning ratio alpha",
          "hierarchy": "AI HNN Net",
          "module": "AI.HNN.Net",
          "name": "backProp",
          "normalized": "Double-\u003e[[Neuron]]-\u003e([Double],[Double])-\u003e[[Neuron]]",
          "package": "hnn",
          "partial": "Prop",
          "signature": "Double-\u003e[[Neuron]]-\u003e([Double],[Double])-\u003e[[Neuron]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Net.html#v:backProp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrain the given neural network using the backpropagation algorithm on the given sample with the given learning ratio (alpha)\n\u003c/p\u003e",
          "module": "AI.HNN.Net",
          "name": "backPropU",
          "package": "hnn",
          "signature": "Double -\u003e [[Neuron]] -\u003e (UArr Double, UArr Double) -\u003e [[Neuron]]",
          "source": "src/AI-HNN-Net.html#backPropU",
          "type": "function"
        },
        "index": {
          "description": "Train the given neural network using the backpropagation algorithm on the given sample with the given learning ratio alpha",
          "hierarchy": "AI HNN Net",
          "module": "AI.HNN.Net",
          "name": "backPropU",
          "normalized": "Double-\u003e[[Neuron]]-\u003e(UArr Double,UArr Double)-\u003e[[Neuron]]",
          "package": "hnn",
          "partial": "Prop",
          "signature": "Double-\u003e[[Neuron]]-\u003e(UArr Double,UArr Double)-\u003e[[Neuron]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Net.html#v:backPropU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AI.HNN.Net",
          "name": "check",
          "package": "hnn",
          "signature": "[[Neuron]] -\u003e Bool",
          "source": "src/AI-HNN-Net.html#check",
          "type": "function"
        },
        "index": {
          "hierarchy": "AI HNN Net",
          "module": "AI.HNN.Net",
          "name": "check",
          "normalized": "[[Neuron]]-\u003eBool",
          "package": "hnn",
          "signature": "[[Neuron]]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Net.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the output of the given neural net on the given inputs\n\u003c/p\u003e",
          "module": "AI.HNN.Net",
          "name": "computeNet",
          "package": "hnn",
          "signature": "[[Neuron]] -\u003e [Double] -\u003e [Double]",
          "source": "src/AI-HNN-Net.html#computeNet",
          "type": "function"
        },
        "index": {
          "description": "Computes the output of the given neural net on the given inputs",
          "hierarchy": "AI HNN Net",
          "module": "AI.HNN.Net",
          "name": "computeNet",
          "normalized": "[[Neuron]]-\u003e[Double]-\u003e[Double]",
          "package": "hnn",
          "partial": "Net",
          "signature": "[[Neuron]]-\u003e[Double]-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Net.html#v:computeNet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the output of the given neural net on the given inputs\n\u003c/p\u003e",
          "module": "AI.HNN.Net",
          "name": "computeNetU",
          "package": "hnn",
          "signature": "[[Neuron]] -\u003e UArr Double -\u003e UArr Double",
          "source": "src/AI-HNN-Net.html#computeNetU",
          "type": "function"
        },
        "index": {
          "description": "Computes the output of the given neural net on the given inputs",
          "hierarchy": "AI HNN Net",
          "module": "AI.HNN.Net",
          "name": "computeNetU",
          "normalized": "[[Neuron]]-\u003eUArr Double-\u003eUArr Double",
          "package": "hnn",
          "partial": "Net",
          "signature": "[[Neuron]]-\u003eUArr Double-\u003eUArr Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Net.html#v:computeNetU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the quadratic error of the neural network on the given samples\n\u003c/p\u003e",
          "module": "AI.HNN.Net",
          "name": "globalQuadErrorNet",
          "package": "hnn",
          "signature": "[[Neuron]] -\u003e [([Double], [Double])] -\u003e Double",
          "source": "src/AI-HNN-Net.html#globalQuadErrorNet",
          "type": "function"
        },
        "index": {
          "description": "Returns the quadratic error of the neural network on the given samples",
          "hierarchy": "AI HNN Net",
          "module": "AI.HNN.Net",
          "name": "globalQuadErrorNet",
          "normalized": "[[Neuron]]-\u003e[([Double],[Double])]-\u003eDouble",
          "package": "hnn",
          "partial": "Quad Error Net",
          "signature": "[[Neuron]]-\u003e[([Double],[Double])]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Net.html#v:globalQuadErrorNet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the quadratic error of the neural network on the given samples\n\u003c/p\u003e",
          "module": "AI.HNN.Net",
          "name": "globalQuadErrorNetU",
          "package": "hnn",
          "signature": "[[Neuron]] -\u003e [(UArr Double, UArr Double)] -\u003e Double",
          "source": "src/AI-HNN-Net.html#globalQuadErrorNetU",
          "type": "function"
        },
        "index": {
          "description": "Returns the quadratic error of the neural network on the given samples",
          "hierarchy": "AI HNN Net",
          "module": "AI.HNN.Net",
          "name": "globalQuadErrorNetU",
          "normalized": "[[Neuron]]-\u003e[(UArr Double,UArr Double)]-\u003eDouble",
          "package": "hnn",
          "partial": "Quad Error Net",
          "signature": "[[Neuron]]-\u003e[(UArr Double,UArr Double)]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Net.html#v:globalQuadErrorNetU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AI.HNN.Net",
          "name": "nn",
          "package": "hnn",
          "signature": "[[Neuron]] -\u003e [[Neuron]]",
          "source": "src/AI-HNN-Net.html#nn",
          "type": "function"
        },
        "index": {
          "hierarchy": "AI HNN Net",
          "module": "AI.HNN.Net",
          "name": "nn",
          "normalized": "[[Neuron]]-\u003e[[Neuron]]",
          "package": "hnn",
          "signature": "[[Neuron]]-\u003e[[Neuron]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Net.html#v:nn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the quadratic error of the neural network on the given sample\n\u003c/p\u003e",
          "module": "AI.HNN.Net",
          "name": "quadErrorNet",
          "package": "hnn",
          "signature": "[[Neuron]] -\u003e ([Double], [Double]) -\u003e Double",
          "source": "src/AI-HNN-Net.html#quadErrorNet",
          "type": "function"
        },
        "index": {
          "description": "Returns the quadratic error of the neural network on the given sample",
          "hierarchy": "AI HNN Net",
          "module": "AI.HNN.Net",
          "name": "quadErrorNet",
          "normalized": "[[Neuron]]-\u003e([Double],[Double])-\u003eDouble",
          "package": "hnn",
          "partial": "Error Net",
          "signature": "[[Neuron]]-\u003e([Double],[Double])-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Net.html#v:quadErrorNet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the quadratic error of the neural network on the given sample\n\u003c/p\u003e",
          "module": "AI.HNN.Net",
          "name": "quadErrorNetU",
          "package": "hnn",
          "signature": "[[Neuron]] -\u003e (UArr Double, UArr Double) -\u003e Double",
          "source": "src/AI-HNN-Net.html#quadErrorNetU",
          "type": "function"
        },
        "index": {
          "description": "Returns the quadratic error of the neural network on the given sample",
          "hierarchy": "AI HNN Net",
          "module": "AI.HNN.Net",
          "name": "quadErrorNetU",
          "normalized": "[[Neuron]]-\u003e(UArr Double,UArr Double)-\u003eDouble",
          "package": "hnn",
          "partial": "Error Net",
          "signature": "[[Neuron]]-\u003e(UArr Double,UArr Double)-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Net.html#v:quadErrorNetU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrain the given neural network on the given samples using the backpropagation algorithm using the given learning ratio (alpha) and the given desired maximal bound for the global quadratic error on the samples (epsilon)\n\u003c/p\u003e",
          "module": "AI.HNN.Net",
          "name": "train",
          "package": "hnn",
          "signature": "Double -\u003e Double -\u003e [[Neuron]] -\u003e [([Double], [Double])] -\u003e [[Neuron]]",
          "source": "src/AI-HNN-Net.html#train",
          "type": "function"
        },
        "index": {
          "description": "Train the given neural network on the given samples using the backpropagation algorithm using the given learning ratio alpha and the given desired maximal bound for the global quadratic error on the samples epsilon",
          "hierarchy": "AI HNN Net",
          "module": "AI.HNN.Net",
          "name": "train",
          "normalized": "Double-\u003eDouble-\u003e[[Neuron]]-\u003e[([Double],[Double])]-\u003e[[Neuron]]",
          "package": "hnn",
          "signature": "Double-\u003eDouble-\u003e[[Neuron]]-\u003e[([Double],[Double])]-\u003e[[Neuron]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Net.html#v:train"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AI.HNN.Net",
          "name": "trainAux",
          "package": "hnn",
          "signature": "Double -\u003e [[Neuron]] -\u003e [(UArr Double, UArr Double)] -\u003e [[Neuron]]",
          "source": "src/AI-HNN-Net.html#trainAux",
          "type": "function"
        },
        "index": {
          "hierarchy": "AI HNN Net",
          "module": "AI.HNN.Net",
          "name": "trainAux",
          "normalized": "Double-\u003e[[Neuron]]-\u003e[(UArr Double,UArr Double)]-\u003e[[Neuron]]",
          "package": "hnn",
          "partial": "Aux",
          "signature": "Double-\u003e[[Neuron]]-\u003e[(UArr Double,UArr Double)]-\u003e[[Neuron]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Net.html#v:trainAux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrain the given neural network on the given samples using the backpropagation algorithm using the given learning ratio (alpha) and the given desired maximal bound for the global quadratic error on the samples (epsilon)\n\u003c/p\u003e",
          "module": "AI.HNN.Net",
          "name": "trainU",
          "package": "hnn",
          "signature": "Double -\u003e Double -\u003e [[Neuron]] -\u003e [(UArr Double, UArr Double)] -\u003e [[Neuron]]",
          "source": "src/AI-HNN-Net.html#trainU",
          "type": "function"
        },
        "index": {
          "description": "Train the given neural network on the given samples using the backpropagation algorithm using the given learning ratio alpha and the given desired maximal bound for the global quadratic error on the samples epsilon",
          "hierarchy": "AI HNN Net",
          "module": "AI.HNN.Net",
          "name": "trainU",
          "normalized": "Double-\u003eDouble-\u003e[[Neuron]]-\u003e[(UArr Double,UArr Double)]-\u003e[[Neuron]]",
          "package": "hnn",
          "signature": "Double-\u003eDouble-\u003e[[Neuron]]-\u003e[(UArr Double,UArr Double)]-\u003e[[Neuron]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Net.html#v:trainU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNeuron module, defining an artificial neuron type and the basical operations we can do on it\n\u003c/p\u003e\u003c/div\u003e",
          "module": "AI.HNN.Neuron",
          "name": "Neuron",
          "package": "hnn",
          "source": "src/AI-HNN-Neuron.html",
          "type": "module"
        },
        "index": {
          "description": "Neuron module defining an artificial neuron type and the basical operations we can do on it",
          "hierarchy": "AI HNN Neuron",
          "module": "AI.HNN.Neuron",
          "name": "Neuron",
          "package": "hnn",
          "partial": "Neuron",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Neuron.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOur Artificial Neuron type\n\u003c/p\u003e",
          "module": "AI.HNN.Neuron",
          "name": "Neuron",
          "package": "hnn",
          "source": "src/AI-HNN-Neuron.html#Neuron",
          "type": "data"
        },
        "index": {
          "description": "Our Artificial Neuron type",
          "hierarchy": "AI HNN Neuron",
          "module": "AI.HNN.Neuron",
          "name": "Neuron",
          "package": "hnn",
          "partial": "Neuron",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Neuron.html#t:Neuron"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AI.HNN.Neuron",
          "name": "Neuron",
          "package": "hnn",
          "signature": "Neuron",
          "source": "src/AI-HNN-Neuron.html#Neuron",
          "type": "function"
        },
        "index": {
          "hierarchy": "AI HNN Neuron",
          "module": "AI.HNN.Neuron",
          "name": "Neuron",
          "package": "hnn",
          "partial": "Neuron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Neuron.html#v:Neuron"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the output of a given Neuron for given inputs\n\u003c/p\u003e",
          "module": "AI.HNN.Neuron",
          "name": "compute",
          "package": "hnn",
          "signature": "Neuron -\u003e [Double] -\u003e Double",
          "source": "src/AI-HNN-Neuron.html#compute",
          "type": "function"
        },
        "index": {
          "description": "Computes the output of given Neuron for given inputs",
          "hierarchy": "AI HNN Neuron",
          "module": "AI.HNN.Neuron",
          "name": "compute",
          "normalized": "Neuron-\u003e[Double]-\u003eDouble",
          "package": "hnn",
          "signature": "Neuron-\u003e[Double]-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Neuron.html#v:compute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the output of a given Neuron for given inputs\n\u003c/p\u003e",
          "module": "AI.HNN.Neuron",
          "name": "computeU",
          "package": "hnn",
          "signature": "Neuron -\u003e UArr Double -\u003e Double",
          "source": "src/AI-HNN-Neuron.html#computeU",
          "type": "function"
        },
        "index": {
          "description": "Computes the output of given Neuron for given inputs",
          "hierarchy": "AI HNN Neuron",
          "module": "AI.HNN.Neuron",
          "name": "computeU",
          "normalized": "Neuron-\u003eUArr Double-\u003eDouble",
          "package": "hnn",
          "signature": "Neuron-\u003eUArr Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Neuron.html#v:computeU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as createNeuronU, with a list instead of an UArr for the weights (converted to UArr anyway)\n\u003c/p\u003e",
          "module": "AI.HNN.Neuron",
          "name": "createNeuron",
          "package": "hnn",
          "signature": "Double -\u003e [Double] -\u003e (Double -\u003e Double) -\u003e Neuron",
          "source": "src/AI-HNN-Neuron.html#createNeuron",
          "type": "function"
        },
        "index": {
          "description": "Same as createNeuronU with list instead of an UArr for the weights converted to UArr anyway",
          "hierarchy": "AI HNN Neuron",
          "module": "AI.HNN.Neuron",
          "name": "createNeuron",
          "normalized": "Double-\u003e[Double]-\u003e(Double-\u003eDouble)-\u003eNeuron",
          "package": "hnn",
          "partial": "Neuron",
          "signature": "Double-\u003e[Double]-\u003e(Double-\u003eDouble)-\u003eNeuron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Neuron.html#v:createNeuron"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as createNeuronHeavysideU, with a list instead of an UArr for the weights (converted to UArr anyway)\n\u003c/p\u003e",
          "module": "AI.HNN.Neuron",
          "name": "createNeuronHeavyside",
          "package": "hnn",
          "signature": "Double -\u003e [Double] -\u003e Neuron",
          "source": "src/AI-HNN-Neuron.html#createNeuronHeavyside",
          "type": "function"
        },
        "index": {
          "description": "Same as createNeuronHeavysideU with list instead of an UArr for the weights converted to UArr anyway",
          "hierarchy": "AI HNN Neuron",
          "module": "AI.HNN.Neuron",
          "name": "createNeuronHeavyside",
          "normalized": "Double-\u003e[Double]-\u003eNeuron",
          "package": "hnn",
          "partial": "Neuron Heavyside",
          "signature": "Double-\u003e[Double]-\u003eNeuron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Neuron.html#v:createNeuronHeavyside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to `createNeuronU t ws heavyside'\n\u003c/p\u003e",
          "module": "AI.HNN.Neuron",
          "name": "createNeuronHeavysideU",
          "package": "hnn",
          "signature": "Double -\u003e UArr Double -\u003e Neuron",
          "source": "src/AI-HNN-Neuron.html#createNeuronHeavysideU",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to createNeuronU ws heavyside",
          "hierarchy": "AI HNN Neuron",
          "module": "AI.HNN.Neuron",
          "name": "createNeuronHeavysideU",
          "normalized": "Double-\u003eUArr Double-\u003eNeuron",
          "package": "hnn",
          "partial": "Neuron Heavyside",
          "signature": "Double-\u003eUArr Double-\u003eNeuron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Neuron.html#v:createNeuronHeavysideU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as createNeuronSigmoidU, with a list instead of an UArr for the weights (converted to UArr anyway)\n\u003c/p\u003e",
          "module": "AI.HNN.Neuron",
          "name": "createNeuronSigmoid",
          "package": "hnn",
          "signature": "Double -\u003e [Double] -\u003e Neuron",
          "source": "src/AI-HNN-Neuron.html#createNeuronSigmoid",
          "type": "function"
        },
        "index": {
          "description": "Same as createNeuronSigmoidU with list instead of an UArr for the weights converted to UArr anyway",
          "hierarchy": "AI HNN Neuron",
          "module": "AI.HNN.Neuron",
          "name": "createNeuronSigmoid",
          "normalized": "Double-\u003e[Double]-\u003eNeuron",
          "package": "hnn",
          "partial": "Neuron Sigmoid",
          "signature": "Double-\u003e[Double]-\u003eNeuron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Neuron.html#v:createNeuronSigmoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to `createNeuronU t ws sigmoid'\n\u003c/p\u003e",
          "module": "AI.HNN.Neuron",
          "name": "createNeuronSigmoidU",
          "package": "hnn",
          "signature": "Double -\u003e UArr Double -\u003e Neuron",
          "source": "src/AI-HNN-Neuron.html#createNeuronSigmoidU",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to createNeuronU ws sigmoid",
          "hierarchy": "AI HNN Neuron",
          "module": "AI.HNN.Neuron",
          "name": "createNeuronSigmoidU",
          "normalized": "Double-\u003eUArr Double-\u003eNeuron",
          "package": "hnn",
          "partial": "Neuron Sigmoid",
          "signature": "Double-\u003eUArr Double-\u003eNeuron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Neuron.html#v:createNeuronSigmoidU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a Neuron with the given threshold, weights and transfer function\n\u003c/p\u003e",
          "module": "AI.HNN.Neuron",
          "name": "createNeuronU",
          "package": "hnn",
          "signature": "Double -\u003e UArr Double -\u003e (Double -\u003e Double) -\u003e Neuron",
          "source": "src/AI-HNN-Neuron.html#createNeuronU",
          "type": "function"
        },
        "index": {
          "description": "Creates Neuron with the given threshold weights and transfer function",
          "hierarchy": "AI HNN Neuron",
          "module": "AI.HNN.Neuron",
          "name": "createNeuronU",
          "normalized": "Double-\u003eUArr Double-\u003e(Double-\u003eDouble)-\u003eNeuron",
          "package": "hnn",
          "partial": "Neuron",
          "signature": "Double-\u003eUArr Double-\u003e(Double-\u003eDouble)-\u003eNeuron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Neuron.html#v:createNeuronU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AI.HNN.Neuron",
          "name": "func",
          "package": "hnn",
          "signature": "Double -\u003e Double",
          "source": "src/AI-HNN-Neuron.html#Neuron",
          "type": "function"
        },
        "index": {
          "hierarchy": "AI HNN Neuron",
          "module": "AI.HNN.Neuron",
          "name": "func",
          "normalized": "Double-\u003eDouble",
          "package": "hnn",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Neuron.html#v:func"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Heavyside function\n\u003c/p\u003e",
          "module": "AI.HNN.Neuron",
          "name": "heavyside",
          "package": "hnn",
          "signature": "Double -\u003e Double",
          "source": "src/AI-HNN-Neuron.html#heavyside",
          "type": "function"
        },
        "index": {
          "description": "The Heavyside function",
          "hierarchy": "AI HNN Neuron",
          "module": "AI.HNN.Neuron",
          "name": "heavyside",
          "normalized": "Double-\u003eDouble",
          "package": "hnn",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Neuron.html#v:heavyside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AI.HNN.Neuron",
          "name": "learnSample",
          "package": "hnn",
          "signature": "Double -\u003e Neuron -\u003e ([Double], Double) -\u003e Neuron",
          "source": "src/AI-HNN-Neuron.html#learnSample",
          "type": "function"
        },
        "index": {
          "hierarchy": "AI HNN Neuron",
          "module": "AI.HNN.Neuron",
          "name": "learnSample",
          "normalized": "Double-\u003eNeuron-\u003e([Double],Double)-\u003eNeuron",
          "package": "hnn",
          "partial": "Sample",
          "signature": "Double-\u003eNeuron-\u003e([Double],Double)-\u003eNeuron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Neuron.html#v:learnSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrains a neuron with the given sample, of the form (inputs, wanted_result) and the given learning ratio (alpha)\n\u003c/p\u003e",
          "module": "AI.HNN.Neuron",
          "name": "learnSampleU",
          "package": "hnn",
          "signature": "Double -\u003e Neuron -\u003e (UArr Double, Double) -\u003e Neuron",
          "source": "src/AI-HNN-Neuron.html#learnSampleU",
          "type": "function"
        },
        "index": {
          "description": "Trains neuron with the given sample of the form inputs wanted result and the given learning ratio alpha",
          "hierarchy": "AI HNN Neuron",
          "module": "AI.HNN.Neuron",
          "name": "learnSampleU",
          "normalized": "Double-\u003eNeuron-\u003e(UArr Double,Double)-\u003eNeuron",
          "package": "hnn",
          "partial": "Sample",
          "signature": "Double-\u003eNeuron-\u003e(UArr Double,Double)-\u003eNeuron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Neuron.html#v:learnSampleU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrains a neuron with the given samples and the given learning ratio (alpha)\n\u003c/p\u003e",
          "module": "AI.HNN.Neuron",
          "name": "learnSamples",
          "package": "hnn",
          "signature": "Double -\u003e Neuron -\u003e [([Double], Double)] -\u003e Neuron",
          "source": "src/AI-HNN-Neuron.html#learnSamples",
          "type": "function"
        },
        "index": {
          "description": "Trains neuron with the given samples and the given learning ratio alpha",
          "hierarchy": "AI HNN Neuron",
          "module": "AI.HNN.Neuron",
          "name": "learnSamples",
          "normalized": "Double-\u003eNeuron-\u003e[([Double],Double)]-\u003eNeuron",
          "package": "hnn",
          "partial": "Samples",
          "signature": "Double-\u003eNeuron-\u003e[([Double],Double)]-\u003eNeuron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Neuron.html#v:learnSamples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrains a neuron with the given samples and the given learning ratio (alpha)\n\u003c/p\u003e",
          "module": "AI.HNN.Neuron",
          "name": "learnSamplesU",
          "package": "hnn",
          "signature": "Double -\u003e Neuron -\u003e [(UArr Double, Double)] -\u003e Neuron",
          "source": "src/AI-HNN-Neuron.html#learnSamplesU",
          "type": "function"
        },
        "index": {
          "description": "Trains neuron with the given samples and the given learning ratio alpha",
          "hierarchy": "AI HNN Neuron",
          "module": "AI.HNN.Neuron",
          "name": "learnSamplesU",
          "normalized": "Double-\u003eNeuron-\u003e[(UArr Double,Double)]-\u003eNeuron",
          "package": "hnn",
          "partial": "Samples",
          "signature": "Double-\u003eNeuron-\u003e[(UArr Double,Double)]-\u003eNeuron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Neuron.html#v:learnSamplesU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Sigmoid function\n\u003c/p\u003e",
          "module": "AI.HNN.Neuron",
          "name": "sigmoid",
          "package": "hnn",
          "signature": "Double -\u003e Double",
          "source": "src/AI-HNN-Neuron.html#sigmoid",
          "type": "function"
        },
        "index": {
          "description": "The Sigmoid function",
          "hierarchy": "AI HNN Neuron",
          "module": "AI.HNN.Neuron",
          "name": "sigmoid",
          "normalized": "Double-\u003eDouble",
          "package": "hnn",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Neuron.html#v:sigmoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AI.HNN.Neuron",
          "name": "threshold",
          "package": "hnn",
          "signature": "Double",
          "source": "src/AI-HNN-Neuron.html#Neuron",
          "type": "function"
        },
        "index": {
          "hierarchy": "AI HNN Neuron",
          "module": "AI.HNN.Neuron",
          "name": "threshold",
          "package": "hnn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Neuron.html#v:threshold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AI.HNN.Neuron",
          "name": "weights",
          "package": "hnn",
          "signature": "UArr Double",
          "source": "src/AI-HNN-Neuron.html#Neuron",
          "type": "function"
        },
        "index": {
          "hierarchy": "AI HNN Neuron",
          "module": "AI.HNN.Neuron",
          "name": "weights",
          "package": "hnn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hnn/docs/AI-HNN-Neuron.html#v:weights"
      }
    }
  ]
]