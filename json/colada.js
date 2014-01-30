[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWord Class induction with LDA\n\u003c/p\u003e\u003cp\u003eThis module provides function which implement word class induction\n using the generic algorithm implemented in Colada.LDA. \n\u003c/p\u003e\u003cp\u003eYou can access and set options in the \u003ccode\u003eOptions\u003c/code\u003e record using lenses.\n Example:\n\u003c/p\u003e\u003cpre\u003e  import Data.Label\n  let options =   set passes 5 \n                . set beta 0.01 \n                . set topicNum 100 \n                $ defaultOptions\n  in run options sentences\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "module",
        "fct-source": "src/Colada-WordClass.html",
        "fct-type": "module",
        "title": "WordClass"
      },
      "index": {
        "description": "Word Class induction with LDA This module provides function which implement word class induction using the generic algorithm implemented in Colada.LDA You can access and set options in the Options record using lenses Example import Data.Label let options set passes set beta set topicNum defaultOptions in run options sentences",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "WordClass",
        "normalized": "",
        "package": "colada",
        "partial": "Word Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#t:Finalized",
      "description": {
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Finalized"
      },
      "index": {
        "description": "",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "Finalized",
        "normalized": "",
        "package": "colada",
        "partial": "Finalized",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#t:Options",
      "description": {
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "data",
        "fct-source": "src/Colada-WordClass.html#Options",
        "fct-type": "data",
        "title": "Options"
      },
      "index": {
        "description": "",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "Options",
        "normalized": "",
        "package": "colada",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#t:WordClass",
      "description": {
        "fct-descr": "\u003cp\u003eContainer for the Word Class model\n\u003c/p\u003e",
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "data",
        "fct-source": "src/Colada-WordClass.html#WordClass",
        "fct-type": "data",
        "title": "WordClass"
      },
      "index": {
        "description": "Container for the Word Class model",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "WordClass",
        "normalized": "",
        "package": "colada",
        "partial": "Word Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:alphasum",
      "description": {
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Lens arr Options Double",
        "fct-source": "src/Colada-WordClass.html#alphasum",
        "fct-type": "function",
        "title": "alphasum"
      },
      "index": {
        "description": "",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "alphasum",
        "normalized": "",
        "package": "colada",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:batchSize",
      "description": {
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Lens arr Options Int",
        "fct-source": "src/Colada-WordClass.html#batchSize",
        "fct-type": "function",
        "title": "batchSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "batchSize",
        "normalized": "",
        "package": "colada",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:beta",
      "description": {
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Lens arr Options Double",
        "fct-source": "src/Colada-WordClass.html#beta",
        "fct-type": "function",
        "title": "beta"
      },
      "index": {
        "description": "",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "beta",
        "normalized": "",
        "package": "colada",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:defaultOptions",
      "description": {
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Options",
        "fct-source": "src/Colada-WordClass.html#defaultOptions",
        "fct-type": "function",
        "title": "defaultOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "defaultOptions",
        "normalized": "",
        "package": "colada",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:docTopics",
      "description": {
        "fct-descr": "\u003cp\u003eDocument topic counts\n\u003c/p\u003e",
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Finalized -\u003e Table2D",
        "fct-type": "function",
        "title": "docTopics"
      },
      "index": {
        "description": "Document topic counts",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "docTopics",
        "normalized": "Finalized-\u003eTable D",
        "package": "colada",
        "partial": "Topics",
        "signature": "Finalized-\u003eTable D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:exponent",
      "description": {
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Lens arr Options (Maybe Double)",
        "fct-source": "src/Colada-WordClass.html#exponent",
        "fct-type": "function",
        "title": "exponent"
      },
      "index": {
        "description": "",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "exponent",
        "normalized": "",
        "package": "colada",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:featIds",
      "description": {
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Lens arr Options [Int]",
        "fct-source": "src/Colada-WordClass.html#featIds",
        "fct-type": "function",
        "title": "featIds"
      },
      "index": {
        "description": "",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "featIds",
        "normalized": "Lens a Options[Int]",
        "package": "colada",
        "partial": "Ids",
        "signature": "Lens arr Options[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:featureTable",
      "description": {
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Lens arr WordClass (AtomTable (Vector Char))",
        "fct-source": "src/Colada-WordClass.html#featureTable",
        "fct-type": "function",
        "title": "featureTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "featureTable",
        "normalized": "",
        "package": "colada",
        "partial": "Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:initPasses",
      "description": {
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Lens arr Options Int",
        "fct-source": "src/Colada-WordClass.html#initPasses",
        "fct-type": "function",
        "title": "initPasses"
      },
      "index": {
        "description": "",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "initPasses",
        "normalized": "",
        "package": "colada",
        "partial": "Passes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:initSize",
      "description": {
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Lens arr Options Int",
        "fct-source": "src/Colada-WordClass.html#initSize",
        "fct-type": "function",
        "title": "initSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "initSize",
        "normalized": "",
        "package": "colada",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:label",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003elabel m s\u003c/code\u003e returns for each word in sentences s,\n unnormalized probabilities of word classes.\n\u003c/p\u003e",
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Bool -\u003e WordClass -\u003e Sentence -\u003e Vector (Vector Double)",
        "fct-source": "src/Colada-WordClass.html#label",
        "fct-type": "function",
        "title": "label"
      },
      "index": {
        "description": "label returns for each word in sentences unnormalized probabilities of word classes",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "label",
        "normalized": "Bool-\u003eWordClass-\u003eSentence-\u003eVector(Vector Double)",
        "package": "colada",
        "partial": "",
        "signature": "Bool-\u003eWordClass-\u003eSentence-\u003eVector(Vector Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:lambda",
      "description": {
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Lens arr Options Double",
        "fct-source": "src/Colada-WordClass.html#lambda",
        "fct-type": "function",
        "title": "lambda"
      },
      "index": {
        "description": "",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "lambda",
        "normalized": "",
        "package": "colada",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:ldaModel",
      "description": {
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Lens arr WordClass Finalized",
        "fct-source": "src/Colada-WordClass.html#ldaModel",
        "fct-type": "function",
        "title": "ldaModel"
      },
      "index": {
        "description": "",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "ldaModel",
        "normalized": "",
        "package": "colada",
        "partial": "Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:learn",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003elearn options xs\u003c/code\u003e runs the LDA Gibbs sampler for word classes\n with \u003ccode\u003eoptions\u003c/code\u003e on sentences \u003ccode\u003exs\u003c/code\u003e, and returns the resulting model\n together with progressive class assignments\n\u003c/p\u003e",
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Options -\u003e [Sentence] -\u003e (WordClass, [Vector (Vector Double)])",
        "fct-source": "src/Colada-WordClass.html#learn",
        "fct-type": "function",
        "title": "learn"
      },
      "index": {
        "description": "learn options xs runs the LDA Gibbs sampler for word classes with options on sentences xs and returns the resulting model together with progressive class assignments",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "learn",
        "normalized": "Options-\u003e[Sentence]-\u003e(WordClass,[Vector(Vector Double)])",
        "package": "colada",
        "partial": "",
        "signature": "Options-\u003e[Sentence]-\u003e(WordClass,[Vector(Vector Double)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:options",
      "description": {
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Lens arr WordClass Options",
        "fct-source": "src/Colada-WordClass.html#options",
        "fct-type": "function",
        "title": "options"
      },
      "index": {
        "description": "",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "options",
        "normalized": "",
        "package": "colada",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:passes",
      "description": {
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Lens arr Options Int",
        "fct-source": "src/Colada-WordClass.html#passes",
        "fct-type": "function",
        "title": "passes"
      },
      "index": {
        "description": "",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "passes",
        "normalized": "",
        "package": "colada",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:pre",
      "description": {
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Lens arr Options Bool",
        "fct-source": "src/Colada-WordClass.html#pre",
        "fct-type": "function",
        "title": "pre"
      },
      "index": {
        "description": "",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "pre",
        "normalized": "",
        "package": "colada",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:predict",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003epredict m s\u003c/code\u003e returns for each word in sentence s, unnormalized\n probabilities of words given predicted word class.\n\u003c/p\u003e",
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "WordClass -\u003e Sentence -\u003e [Vector (Double, Text)]",
        "fct-source": "src/Colada-WordClass.html#predict",
        "fct-type": "function",
        "title": "predict"
      },
      "index": {
        "description": "predict returns for each word in sentence unnormalized probabilities of words given predicted word class",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "predict",
        "normalized": "WordClass-\u003eSentence-\u003e[Vector(Double,Text)]",
        "package": "colada",
        "partial": "",
        "signature": "WordClass-\u003eSentence-\u003e[Vector(Double,Text)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:progressive",
      "description": {
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Lens arr Options Bool",
        "fct-source": "src/Colada-WordClass.html#progressive",
        "fct-type": "function",
        "title": "progressive"
      },
      "index": {
        "description": "",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "progressive",
        "normalized": "",
        "package": "colada",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:repeats",
      "description": {
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Lens arr Options Int",
        "fct-source": "src/Colada-WordClass.html#repeats",
        "fct-type": "function",
        "title": "repeats"
      },
      "index": {
        "description": "",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "repeats",
        "normalized": "",
        "package": "colada",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:seed",
      "description": {
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Lens arr Options Word32",
        "fct-source": "src/Colada-WordClass.html#seed",
        "fct-type": "function",
        "title": "seed"
      },
      "index": {
        "description": "",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "seed",
        "normalized": "",
        "package": "colada",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:summarize",
      "description": {
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Bool -\u003e WordClass -\u003e Text",
        "fct-source": "src/Colada-WordClass.html#summarize",
        "fct-type": "function",
        "title": "summarize"
      },
      "index": {
        "description": "",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "summarize",
        "normalized": "Bool-\u003eWordClass-\u003eText",
        "package": "colada",
        "partial": "",
        "signature": "Bool-\u003eWordClass-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:summary",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003esummary m\u003c/code\u003e returns a textual summary of word classes found in\n model \u003ccode\u003em\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "WordClass -\u003e Text",
        "fct-source": "src/Colada-WordClass.html#summary",
        "fct-type": "function",
        "title": "summary"
      },
      "index": {
        "description": "summary returns textual summary of word classes found in model",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "summary",
        "normalized": "WordClass-\u003eText",
        "package": "colada",
        "partial": "",
        "signature": "WordClass-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:topicDocs",
      "description": {
        "fct-descr": "\u003cp\u003eInverse document-topic counts\n\u003c/p\u003e",
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Finalized -\u003e Table2D",
        "fct-type": "function",
        "title": "topicDocs"
      },
      "index": {
        "description": "Inverse document-topic counts",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "topicDocs",
        "normalized": "Finalized-\u003eTable D",
        "package": "colada",
        "partial": "Docs",
        "signature": "Finalized-\u003eTable D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:topicNum",
      "description": {
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Lens arr Options Int",
        "fct-source": "src/Colada-WordClass.html#topicNum",
        "fct-type": "function",
        "title": "topicNum"
      },
      "index": {
        "description": "",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "topicNum",
        "normalized": "",
        "package": "colada",
        "partial": "Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:topicWords",
      "description": {
        "fct-descr": "\u003cp\u003eInverse word-topic counts\n\u003c/p\u003e",
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Finalized -\u003e Table2D",
        "fct-type": "function",
        "title": "topicWords"
      },
      "index": {
        "description": "Inverse word-topic counts",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "topicWords",
        "normalized": "Finalized-\u003eTable D",
        "package": "colada",
        "partial": "Words",
        "signature": "Finalized-\u003eTable D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:topics",
      "description": {
        "fct-descr": "\u003cp\u003eTopics counts\n\u003c/p\u003e",
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Finalized -\u003e Table1D",
        "fct-type": "function",
        "title": "topics"
      },
      "index": {
        "description": "Topics counts",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "topics",
        "normalized": "Finalized-\u003eTable D",
        "package": "colada",
        "partial": "",
        "signature": "Finalized-\u003eTable D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:topn",
      "description": {
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Lens arr Options Int",
        "fct-source": "src/Colada-WordClass.html#topn",
        "fct-type": "function",
        "title": "topn"
      },
      "index": {
        "description": "",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "topn",
        "normalized": "",
        "package": "colada",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:wordTopics",
      "description": {
        "fct-descr": "\u003cp\u003eWord topic counts\n\u003c/p\u003e",
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Finalized -\u003e Table2D",
        "fct-type": "function",
        "title": "wordTopics"
      },
      "index": {
        "description": "Word topic counts",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "wordTopics",
        "normalized": "Finalized-\u003eTable D",
        "package": "colada",
        "partial": "Topics",
        "signature": "Finalized-\u003eTable D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:wordTypeClasses",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ewordTypeClasses m\u003c/code\u003e returns a Map from word types to unnormalized\n distributions over word classes\n\u003c/p\u003e",
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "WordClass -\u003e Map Text (IntMap Double)",
        "fct-source": "src/Colada-WordClass.html#wordTypeClasses",
        "fct-type": "function",
        "title": "wordTypeClasses"
      },
      "index": {
        "description": "wordTypeClasses returns Map from word types to unnormalized distributions over word classes",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "wordTypeClasses",
        "normalized": "WordClass-\u003eMap Text(IntMap Double)",
        "package": "colada",
        "partial": "Type Classes",
        "signature": "WordClass-\u003eMap Text(IntMap Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:wordTypeTable",
      "description": {
        "fct-module": "Colada.WordClass",
        "fct-package": "colada",
        "fct-signature": "Lens arr WordClass (AtomTable (Vector Char))",
        "fct-source": "src/Colada-WordClass.html#wordTypeTable",
        "fct-type": "function",
        "title": "wordTypeTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Colada WordClass",
        "module": "Colada.WordClass",
        "name": "wordTypeTable",
        "normalized": "",
        "package": "colada",
        "partial": "Type Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/NLP-CoNLL.html#",
      "description": {
        "fct-module": "NLP.CoNLL",
        "fct-package": "colada",
        "fct-signature": "module",
        "fct-source": "src/NLP-CoNLL.html",
        "fct-type": "module",
        "title": "CoNLL"
      },
      "index": {
        "description": "",
        "hierarchy": "NLP CoNLL",
        "module": "NLP.CoNLL",
        "name": "CoNLL",
        "normalized": "",
        "package": "colada",
        "partial": "Co NLL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/NLP-CoNLL.html#t:Field",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eField\u003c/code\u003e is a part of a word token, such as word form, lemma or POS tag \n\u003c/p\u003e",
        "fct-module": "NLP.CoNLL",
        "fct-package": "colada",
        "fct-signature": "type",
        "fct-source": "src/NLP-CoNLL.html#Field",
        "fct-type": "type",
        "title": "Field"
      },
      "index": {
        "description": "Field is part of word token such as word form lemma or POS tag",
        "hierarchy": "NLP CoNLL",
        "module": "NLP.CoNLL",
        "name": "Field",
        "normalized": "",
        "package": "colada",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/NLP-CoNLL.html#t:Sentence",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eSentence\u003c/code\u003e is a vector of tokens.\n\u003c/p\u003e",
        "fct-module": "NLP.CoNLL",
        "fct-package": "colada",
        "fct-signature": "type",
        "fct-source": "src/NLP-CoNLL.html#Sentence",
        "fct-type": "type",
        "title": "Sentence"
      },
      "index": {
        "description": "Sentence is vector of tokens",
        "hierarchy": "NLP CoNLL",
        "module": "NLP.CoNLL",
        "name": "Sentence",
        "normalized": "",
        "package": "colada",
        "partial": "Sentence",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/NLP-CoNLL.html#t:Token",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eToken\u003c/code\u003e is a representation of a word, which consists of a number of fields.\n\u003c/p\u003e",
        "fct-module": "NLP.CoNLL",
        "fct-package": "colada",
        "fct-signature": "type",
        "fct-source": "src/NLP-CoNLL.html#Token",
        "fct-type": "type",
        "title": "Token"
      },
      "index": {
        "description": "Token is representation of word which consists of number of fields",
        "hierarchy": "NLP CoNLL",
        "module": "NLP.CoNLL",
        "name": "Token",
        "normalized": "",
        "package": "colada",
        "partial": "Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/colada/docs/NLP-CoNLL.html#v:parse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eparse text\u003c/code\u003e returns a lazy list of sentences.\n\u003c/p\u003e",
        "fct-module": "NLP.CoNLL",
        "fct-package": "colada",
        "fct-signature": "Text -\u003e [Sentence]",
        "fct-source": "src/NLP-CoNLL.html#parse",
        "fct-type": "function",
        "title": "parse"
      },
      "index": {
        "description": "parse text returns lazy list of sentences",
        "hierarchy": "NLP CoNLL",
        "module": "NLP.CoNLL",
        "name": "parse",
        "normalized": "Text-\u003e[Sentence]",
        "package": "colada",
        "partial": "",
        "signature": "Text-\u003e[Sentence]"
      }
    }
  }
]