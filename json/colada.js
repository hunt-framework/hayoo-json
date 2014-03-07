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
        "word": "colada"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWord Class induction with LDA\n\u003c/p\u003e\u003cp\u003eThis module provides function which implement word class induction\n using the generic algorithm implemented in Colada.LDA. \n\u003c/p\u003e\u003cp\u003eYou can access and set options in the \u003ccode\u003eOptions\u003c/code\u003e record using lenses.\n Example:\n\u003c/p\u003e\u003cpre\u003e  import Data.Label\n  let options =   set passes 5 \n                . set beta 0.01 \n                . set topicNum 100 \n                $ defaultOptions\n  in run options sentences\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Colada.WordClass",
          "name": "WordClass",
          "package": "colada",
          "source": "src/Colada-WordClass.html",
          "type": "module"
        },
        "index": {
          "description": "Word Class induction with LDA This module provides function which implement word class induction using the generic algorithm implemented in Colada.LDA You can access and set options in the Options record using lenses Example import Data.Label let options set passes set beta set topicNum defaultOptions in run options sentences",
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "WordClass",
          "package": "colada",
          "partial": "Word Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Colada.WordClass",
          "name": "Finalized",
          "package": "colada",
          "type": "data"
        },
        "index": {
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "Finalized",
          "package": "colada",
          "partial": "Finalized",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#t:Finalized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Colada.WordClass",
          "name": "Options",
          "package": "colada",
          "source": "src/Colada-WordClass.html#Options",
          "type": "data"
        },
        "index": {
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "Options",
          "package": "colada",
          "partial": "Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#t:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContainer for the Word Class model\n\u003c/p\u003e",
          "module": "Colada.WordClass",
          "name": "WordClass",
          "package": "colada",
          "source": "src/Colada-WordClass.html#WordClass",
          "type": "data"
        },
        "index": {
          "description": "Container for the Word Class model",
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "WordClass",
          "package": "colada",
          "partial": "Word Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#t:WordClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Colada.WordClass",
          "name": "alphasum",
          "package": "colada",
          "signature": "Lens arr Options Double",
          "source": "src/Colada-WordClass.html#alphasum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "alphasum",
          "package": "colada",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:alphasum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Colada.WordClass",
          "name": "batchSize",
          "package": "colada",
          "signature": "Lens arr Options Int",
          "source": "src/Colada-WordClass.html#batchSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "batchSize",
          "package": "colada",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:batchSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Colada.WordClass",
          "name": "beta",
          "package": "colada",
          "signature": "Lens arr Options Double",
          "source": "src/Colada-WordClass.html#beta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "beta",
          "package": "colada",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:beta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Colada.WordClass",
          "name": "defaultOptions",
          "package": "colada",
          "signature": "Options",
          "source": "src/Colada-WordClass.html#defaultOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "defaultOptions",
          "package": "colada",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:defaultOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument topic counts\n\u003c/p\u003e",
          "module": "Colada.WordClass",
          "name": "docTopics",
          "package": "colada",
          "signature": "Finalized -\u003e Table2D",
          "type": "function"
        },
        "index": {
          "description": "Document topic counts",
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "docTopics",
          "normalized": "Finalized-\u003eTable D",
          "package": "colada",
          "partial": "Topics",
          "signature": "Finalized-\u003eTable D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:docTopics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Colada.WordClass",
          "name": "exponent",
          "package": "colada",
          "signature": "Lens arr Options (Maybe Double)",
          "source": "src/Colada-WordClass.html#exponent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "exponent",
          "package": "colada",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:exponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Colada.WordClass",
          "name": "featIds",
          "package": "colada",
          "signature": "Lens arr Options [Int]",
          "source": "src/Colada-WordClass.html#featIds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "featIds",
          "normalized": "Lens a Options[Int]",
          "package": "colada",
          "partial": "Ids",
          "signature": "Lens arr Options[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:featIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Colada.WordClass",
          "name": "featureTable",
          "package": "colada",
          "signature": "Lens arr WordClass (AtomTable (Vector Char))",
          "source": "src/Colada-WordClass.html#featureTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "featureTable",
          "package": "colada",
          "partial": "Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:featureTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Colada.WordClass",
          "name": "initPasses",
          "package": "colada",
          "signature": "Lens arr Options Int",
          "source": "src/Colada-WordClass.html#initPasses",
          "type": "function"
        },
        "index": {
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "initPasses",
          "package": "colada",
          "partial": "Passes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:initPasses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Colada.WordClass",
          "name": "initSize",
          "package": "colada",
          "signature": "Lens arr Options Int",
          "source": "src/Colada-WordClass.html#initSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "initSize",
          "package": "colada",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:initSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elabel m s\u003c/code\u003e returns for each word in sentences s,\n unnormalized probabilities of word classes.\n\u003c/p\u003e",
          "module": "Colada.WordClass",
          "name": "label",
          "package": "colada",
          "signature": "Bool -\u003e WordClass -\u003e Sentence -\u003e Vector (Vector Double)",
          "source": "src/Colada-WordClass.html#label",
          "type": "function"
        },
        "index": {
          "description": "label returns for each word in sentences unnormalized probabilities of word classes",
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "label",
          "normalized": "Bool-\u003eWordClass-\u003eSentence-\u003eVector(Vector Double)",
          "package": "colada",
          "signature": "Bool-\u003eWordClass-\u003eSentence-\u003eVector(Vector Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Colada.WordClass",
          "name": "lambda",
          "package": "colada",
          "signature": "Lens arr Options Double",
          "source": "src/Colada-WordClass.html#lambda",
          "type": "function"
        },
        "index": {
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "lambda",
          "package": "colada",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:lambda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Colada.WordClass",
          "name": "ldaModel",
          "package": "colada",
          "signature": "Lens arr WordClass Finalized",
          "source": "src/Colada-WordClass.html#ldaModel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "ldaModel",
          "package": "colada",
          "partial": "Model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:ldaModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elearn options xs\u003c/code\u003e runs the LDA Gibbs sampler for word classes\n with \u003ccode\u003eoptions\u003c/code\u003e on sentences \u003ccode\u003exs\u003c/code\u003e, and returns the resulting model\n together with progressive class assignments\n\u003c/p\u003e",
          "module": "Colada.WordClass",
          "name": "learn",
          "package": "colada",
          "signature": "Options -\u003e [Sentence] -\u003e (WordClass, [Vector (Vector Double)])",
          "source": "src/Colada-WordClass.html#learn",
          "type": "function"
        },
        "index": {
          "description": "learn options xs runs the LDA Gibbs sampler for word classes with options on sentences xs and returns the resulting model together with progressive class assignments",
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "learn",
          "normalized": "Options-\u003e[Sentence]-\u003e(WordClass,[Vector(Vector Double)])",
          "package": "colada",
          "signature": "Options-\u003e[Sentence]-\u003e(WordClass,[Vector(Vector Double)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:learn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Colada.WordClass",
          "name": "options",
          "package": "colada",
          "signature": "Lens arr WordClass Options",
          "source": "src/Colada-WordClass.html#options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "options",
          "package": "colada",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Colada.WordClass",
          "name": "passes",
          "package": "colada",
          "signature": "Lens arr Options Int",
          "source": "src/Colada-WordClass.html#passes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "passes",
          "package": "colada",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:passes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Colada.WordClass",
          "name": "pre",
          "package": "colada",
          "signature": "Lens arr Options Bool",
          "source": "src/Colada-WordClass.html#pre",
          "type": "function"
        },
        "index": {
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "pre",
          "package": "colada",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:pre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epredict m s\u003c/code\u003e returns for each word in sentence s, unnormalized\n probabilities of words given predicted word class.\n\u003c/p\u003e",
          "module": "Colada.WordClass",
          "name": "predict",
          "package": "colada",
          "signature": "WordClass -\u003e Sentence -\u003e [Vector (Double, Text)]",
          "source": "src/Colada-WordClass.html#predict",
          "type": "function"
        },
        "index": {
          "description": "predict returns for each word in sentence unnormalized probabilities of words given predicted word class",
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "predict",
          "normalized": "WordClass-\u003eSentence-\u003e[Vector(Double,Text)]",
          "package": "colada",
          "signature": "WordClass-\u003eSentence-\u003e[Vector(Double,Text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:predict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Colada.WordClass",
          "name": "progressive",
          "package": "colada",
          "signature": "Lens arr Options Bool",
          "source": "src/Colada-WordClass.html#progressive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "progressive",
          "package": "colada",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:progressive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Colada.WordClass",
          "name": "repeats",
          "package": "colada",
          "signature": "Lens arr Options Int",
          "source": "src/Colada-WordClass.html#repeats",
          "type": "function"
        },
        "index": {
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "repeats",
          "package": "colada",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:repeats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Colada.WordClass",
          "name": "seed",
          "package": "colada",
          "signature": "Lens arr Options Word32",
          "source": "src/Colada-WordClass.html#seed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "seed",
          "package": "colada",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:seed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Colada.WordClass",
          "name": "summarize",
          "package": "colada",
          "signature": "Bool -\u003e WordClass -\u003e Text",
          "source": "src/Colada-WordClass.html#summarize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "summarize",
          "normalized": "Bool-\u003eWordClass-\u003eText",
          "package": "colada",
          "signature": "Bool-\u003eWordClass-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:summarize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esummary m\u003c/code\u003e returns a textual summary of word classes found in\n model \u003ccode\u003em\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Colada.WordClass",
          "name": "summary",
          "package": "colada",
          "signature": "WordClass -\u003e Text",
          "source": "src/Colada-WordClass.html#summary",
          "type": "function"
        },
        "index": {
          "description": "summary returns textual summary of word classes found in model",
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "summary",
          "normalized": "WordClass-\u003eText",
          "package": "colada",
          "signature": "WordClass-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:summary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse document-topic counts\n\u003c/p\u003e",
          "module": "Colada.WordClass",
          "name": "topicDocs",
          "package": "colada",
          "signature": "Finalized -\u003e Table2D",
          "type": "function"
        },
        "index": {
          "description": "Inverse document-topic counts",
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "topicDocs",
          "normalized": "Finalized-\u003eTable D",
          "package": "colada",
          "partial": "Docs",
          "signature": "Finalized-\u003eTable D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:topicDocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Colada.WordClass",
          "name": "topicNum",
          "package": "colada",
          "signature": "Lens arr Options Int",
          "source": "src/Colada-WordClass.html#topicNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "topicNum",
          "package": "colada",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:topicNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse word-topic counts\n\u003c/p\u003e",
          "module": "Colada.WordClass",
          "name": "topicWords",
          "package": "colada",
          "signature": "Finalized -\u003e Table2D",
          "type": "function"
        },
        "index": {
          "description": "Inverse word-topic counts",
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "topicWords",
          "normalized": "Finalized-\u003eTable D",
          "package": "colada",
          "partial": "Words",
          "signature": "Finalized-\u003eTable D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:topicWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTopics counts\n\u003c/p\u003e",
          "module": "Colada.WordClass",
          "name": "topics",
          "package": "colada",
          "signature": "Finalized -\u003e Table1D",
          "type": "function"
        },
        "index": {
          "description": "Topics counts",
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "topics",
          "normalized": "Finalized-\u003eTable D",
          "package": "colada",
          "signature": "Finalized-\u003eTable D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:topics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Colada.WordClass",
          "name": "topn",
          "package": "colada",
          "signature": "Lens arr Options Int",
          "source": "src/Colada-WordClass.html#topn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "topn",
          "package": "colada",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:topn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWord topic counts\n\u003c/p\u003e",
          "module": "Colada.WordClass",
          "name": "wordTopics",
          "package": "colada",
          "signature": "Finalized -\u003e Table2D",
          "type": "function"
        },
        "index": {
          "description": "Word topic counts",
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "wordTopics",
          "normalized": "Finalized-\u003eTable D",
          "package": "colada",
          "partial": "Topics",
          "signature": "Finalized-\u003eTable D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:wordTopics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ewordTypeClasses m\u003c/code\u003e returns a Map from word types to unnormalized\n distributions over word classes\n\u003c/p\u003e",
          "module": "Colada.WordClass",
          "name": "wordTypeClasses",
          "package": "colada",
          "signature": "WordClass -\u003e Map Text (IntMap Double)",
          "source": "src/Colada-WordClass.html#wordTypeClasses",
          "type": "function"
        },
        "index": {
          "description": "wordTypeClasses returns Map from word types to unnormalized distributions over word classes",
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "wordTypeClasses",
          "normalized": "WordClass-\u003eMap Text(IntMap Double)",
          "package": "colada",
          "partial": "Type Classes",
          "signature": "WordClass-\u003eMap Text(IntMap Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:wordTypeClasses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Colada.WordClass",
          "name": "wordTypeTable",
          "package": "colada",
          "signature": "Lens arr WordClass (AtomTable (Vector Char))",
          "source": "src/Colada-WordClass.html#wordTypeTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Colada WordClass",
          "module": "Colada.WordClass",
          "name": "wordTypeTable",
          "package": "colada",
          "partial": "Type Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/Colada-WordClass.html#v:wordTypeTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.CoNLL",
          "name": "CoNLL",
          "package": "colada",
          "source": "src/NLP-CoNLL.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "NLP CoNLL",
          "module": "NLP.CoNLL",
          "name": "CoNLL",
          "package": "colada",
          "partial": "Co NLL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/NLP-CoNLL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eField\u003c/code\u003e is a part of a word token, such as word form, lemma or POS tag \n\u003c/p\u003e",
          "module": "NLP.CoNLL",
          "name": "Field",
          "package": "colada",
          "source": "src/NLP-CoNLL.html#Field",
          "type": "type"
        },
        "index": {
          "description": "Field is part of word token such as word form lemma or POS tag",
          "hierarchy": "NLP CoNLL",
          "module": "NLP.CoNLL",
          "name": "Field",
          "package": "colada",
          "partial": "Field",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/NLP-CoNLL.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eSentence\u003c/code\u003e is a vector of tokens.\n\u003c/p\u003e",
          "module": "NLP.CoNLL",
          "name": "Sentence",
          "package": "colada",
          "source": "src/NLP-CoNLL.html#Sentence",
          "type": "type"
        },
        "index": {
          "description": "Sentence is vector of tokens",
          "hierarchy": "NLP CoNLL",
          "module": "NLP.CoNLL",
          "name": "Sentence",
          "package": "colada",
          "partial": "Sentence",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/NLP-CoNLL.html#t:Sentence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eToken\u003c/code\u003e is a representation of a word, which consists of a number of fields.\n\u003c/p\u003e",
          "module": "NLP.CoNLL",
          "name": "Token",
          "package": "colada",
          "source": "src/NLP-CoNLL.html#Token",
          "type": "type"
        },
        "index": {
          "description": "Token is representation of word which consists of number of fields",
          "hierarchy": "NLP CoNLL",
          "module": "NLP.CoNLL",
          "name": "Token",
          "package": "colada",
          "partial": "Token",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/NLP-CoNLL.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eparse text\u003c/code\u003e returns a lazy list of sentences.\n\u003c/p\u003e",
          "module": "NLP.CoNLL",
          "name": "parse",
          "package": "colada",
          "signature": "Text -\u003e [Sentence]",
          "source": "src/NLP-CoNLL.html#parse",
          "type": "function"
        },
        "index": {
          "description": "parse text returns lazy list of sentences",
          "hierarchy": "NLP CoNLL",
          "module": "NLP.CoNLL",
          "name": "parse",
          "normalized": "Text-\u003e[Sentence]",
          "package": "colada",
          "signature": "Text-\u003e[Sentence]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/colada/docs/NLP-CoNLL.html#v:parse"
      }
    }
  ]
]