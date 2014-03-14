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
        "word": "lda"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.LDA.UnboxedMaybeVector",
          "name": "UnboxedMaybeVector",
          "package": "lda",
          "source": "src/NLP-LDA-UnboxedMaybeVector.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "NLP LDA UnboxedMaybeVector",
          "module": "NLP.LDA.UnboxedMaybeVector",
          "name": "UnboxedMaybeVector",
          "package": "lda",
          "partial": "Unboxed Maybe Vector",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA-UnboxedMaybeVector.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.LDA.Utils",
          "name": "Utils",
          "package": "lda",
          "source": "src/NLP-LDA-Utils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "NLP LDA Utils",
          "module": "NLP.LDA.Utils",
          "name": "Utils",
          "package": "lda",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.LDA.Utils",
          "name": "count",
          "package": "lda",
          "signature": "Int -\u003e IntMap Double -\u003e Double",
          "source": "src/NLP-LDA-Utils.html#count",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP LDA Utils",
          "module": "NLP.LDA.Utils",
          "name": "count",
          "normalized": "Int-\u003eIntMap Double-\u003eDouble",
          "package": "lda",
          "signature": "Int-\u003eIntMap Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA-Utils.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLatent Dirichlet Allocation\n\u003c/p\u003e\u003cp\u003eSimple implementation of a collapsed Gibbs sampler for LDA. This\n library uses the topic modeling terminology (documents, words,\n topics), even though it is generic. For example if used for word\n class induction, replace documents with word types, words with\n features and topics with word classes.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NLP.LDA",
          "name": "LDA",
          "package": "lda",
          "source": "src/NLP-LDA.html",
          "type": "module"
        },
        "index": {
          "description": "Latent Dirichlet Allocation Simple implementation of collapsed Gibbs sampler for LDA This library uses the topic modeling terminology documents words topics even though it is generic For example if used for word class induction replace documents with word types words with features and topics with word classes",
          "hierarchy": "NLP LDA",
          "module": "NLP.LDA",
          "name": "LDA",
          "package": "lda",
          "partial": "LDA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.LDA",
          "name": "D",
          "package": "lda",
          "source": "src/NLP-LDA.html#D",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP LDA",
          "module": "NLP.LDA",
          "name": "D",
          "package": "lda",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA.html#t:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.LDA",
          "name": "Doc",
          "package": "lda",
          "source": "src/NLP-LDA.html#Doc",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP LDA",
          "module": "NLP.LDA",
          "name": "Doc",
          "package": "lda",
          "partial": "Doc",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA.html#t:Doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract type holding the LDA model, and the inverse count tables\n\u003c/p\u003e",
          "module": "NLP.LDA",
          "name": "Finalized",
          "package": "lda",
          "source": "src/NLP-LDA.html#Finalized",
          "type": "data"
        },
        "index": {
          "description": "Abstract type holding the LDA model and the inverse count tables",
          "hierarchy": "NLP LDA",
          "module": "NLP.LDA",
          "name": "Finalized",
          "package": "lda",
          "partial": "Finalized",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA.html#t:Finalized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract type holding the settings and the state of the sampler\n\u003c/p\u003e",
          "module": "NLP.LDA",
          "name": "LDA",
          "package": "lda",
          "source": "src/NLP-LDA.html#LDA",
          "type": "data"
        },
        "index": {
          "description": "Abstract type holding the settings and the state of the sampler",
          "hierarchy": "NLP LDA",
          "module": "NLP.LDA",
          "name": "LDA",
          "package": "lda",
          "partial": "LDA",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA.html#t:LDA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCustom random variable representing the LDA Gibbs sampler\n\u003c/p\u003e",
          "module": "NLP.LDA",
          "name": "Sampler",
          "package": "lda",
          "source": "src/NLP-LDA.html#Sampler",
          "type": "type"
        },
        "index": {
          "description": "Custom random variable representing the LDA Gibbs sampler",
          "hierarchy": "NLP LDA",
          "module": "NLP.LDA",
          "name": "Sampler",
          "package": "lda",
          "partial": "Sampler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA.html#t:Sampler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.LDA",
          "name": "Table1D",
          "package": "lda",
          "source": "src/NLP-LDA.html#Table1D",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP LDA",
          "module": "NLP.LDA",
          "name": "Table1D",
          "package": "lda",
          "partial": "Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA.html#t:Table1D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.LDA",
          "name": "Table2D",
          "package": "lda",
          "source": "src/NLP-LDA.html#Table2D",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP LDA",
          "module": "NLP.LDA",
          "name": "Table2D",
          "package": "lda",
          "partial": "Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA.html#t:Table2D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.LDA",
          "name": "W",
          "package": "lda",
          "source": "src/NLP-LDA.html#W",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP LDA",
          "module": "NLP.LDA",
          "name": "W",
          "package": "lda",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA.html#t:W"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.LDA",
          "name": "Z",
          "package": "lda",
          "source": "src/NLP-LDA.html#Z",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP LDA",
          "module": "NLP.LDA",
          "name": "Z",
          "package": "lda",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA.html#t:Z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ealpha * K Dirichlet parameter (topic sparseness)\n\u003c/p\u003e",
          "module": "NLP.LDA",
          "name": "alphasum",
          "package": "lda",
          "signature": "LDA -\u003e Double",
          "source": "src/NLP-LDA.html#alphasum",
          "type": "function"
        },
        "index": {
          "description": "alpha Dirichlet parameter topic sparseness",
          "hierarchy": "NLP LDA",
          "module": "NLP.LDA",
          "name": "alphasum",
          "normalized": "LDA-\u003eDouble",
          "package": "lda",
          "signature": "LDA-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA.html#v:alphasum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebeta Dirichlet parameter (word sparseness)\n\u003c/p\u003e",
          "module": "NLP.LDA",
          "name": "beta",
          "package": "lda",
          "signature": "LDA -\u003e Double",
          "source": "src/NLP-LDA.html#beta",
          "type": "function"
        },
        "index": {
          "description": "beta Dirichlet parameter word sparseness",
          "hierarchy": "NLP LDA",
          "module": "NLP.LDA",
          "name": "beta",
          "normalized": "LDA-\u003eDouble",
          "package": "lda",
          "signature": "LDA-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA.html#v:beta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove zero counts from the doc/topic table\n\u003c/p\u003e",
          "module": "NLP.LDA",
          "name": "compress",
          "package": "lda",
          "signature": "IntMap (IntMap Double) -\u003e IntMap (IntMap Double)",
          "source": "src/NLP-LDA.html#compress",
          "type": "function"
        },
        "index": {
          "description": "Remove zero counts from the doc topic table",
          "hierarchy": "NLP LDA",
          "module": "NLP.LDA",
          "name": "compress",
          "normalized": "IntMap(IntMap Double)-\u003eIntMap(IntMap Double)",
          "package": "lda",
          "signature": "IntMap(IntMap Double)-\u003eIntMap(IntMap Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA.html#v:compress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edocTopicWeights m doc\u003c/code\u003e returns unnormalized topic probabilities\n for document doc given LDA model \u003ccode\u003em\u003c/code\u003e\n\u003c/p\u003e",
          "module": "NLP.LDA",
          "name": "docTopicWeights",
          "package": "lda",
          "signature": "LDA -\u003e Doc -\u003e Vector Double",
          "source": "src/NLP-LDA.html#docTopicWeights",
          "type": "function"
        },
        "index": {
          "description": "docTopicWeights doc returns unnormalized topic probabilities for document doc given LDA model",
          "hierarchy": "NLP LDA",
          "module": "NLP.LDA",
          "name": "docTopicWeights",
          "normalized": "LDA-\u003eDoc-\u003eVector Double",
          "package": "lda",
          "partial": "Topic Weights",
          "signature": "LDA-\u003eDoc-\u003eVector Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA.html#v:docTopicWeights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDocument-topic counts\n\u003c/p\u003e",
          "module": "NLP.LDA",
          "name": "docTopics",
          "package": "lda",
          "signature": "LDA -\u003e Table2D",
          "source": "src/NLP-LDA.html#docTopics",
          "type": "function"
        },
        "index": {
          "description": "Document-topic counts",
          "hierarchy": "NLP LDA",
          "module": "NLP.LDA",
          "name": "docTopics",
          "normalized": "LDA-\u003eTable D",
          "package": "lda",
          "partial": "Topics",
          "signature": "LDA-\u003eTable D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA.html#v:docTopics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efinalize m\u003c/code\u003e creates a finalized model from LDA model \u003ccode\u003em\u003c/code\u003e\n\u003c/p\u003e",
          "module": "NLP.LDA",
          "name": "finalize",
          "package": "lda",
          "signature": "LDA -\u003e Finalized",
          "source": "src/NLP-LDA.html#finalize",
          "type": "function"
        },
        "index": {
          "description": "finalize creates finalized model from LDA model",
          "hierarchy": "NLP LDA",
          "module": "NLP.LDA",
          "name": "finalize",
          "normalized": "LDA-\u003eFinalized",
          "package": "lda",
          "signature": "LDA-\u003eFinalized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA.html#v:finalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003einitial k a b\u003c/code\u003e initializes model with \u003ccode\u003ek\u003c/code\u003e topics, \u003ccode\u003ea/k\u003c/code\u003e alpha\n hyperparameter and \u003ccode\u003eb\u003c/code\u003e beta hyperparameter.\n\u003c/p\u003e",
          "module": "NLP.LDA",
          "name": "initial",
          "package": "lda",
          "signature": "Int -\u003e Double -\u003e Double -\u003e LDA",
          "source": "src/NLP-LDA.html#initial",
          "type": "function"
        },
        "index": {
          "description": "initial initializes model with topics alpha hyperparameter and beta hyperparameter",
          "hierarchy": "NLP LDA",
          "module": "NLP.LDA",
          "name": "initial",
          "normalized": "Int-\u003eDouble-\u003eDouble-\u003eLDA",
          "package": "lda",
          "signature": "Int-\u003eDouble-\u003eDouble-\u003eLDA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA.html#v:initial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLDA model\n\u003c/p\u003e",
          "module": "NLP.LDA",
          "name": "model",
          "package": "lda",
          "signature": "Finalized -\u003e LDA",
          "source": "src/NLP-LDA.html#model",
          "type": "function"
        },
        "index": {
          "description": "LDA model",
          "hierarchy": "NLP LDA",
          "module": "NLP.LDA",
          "name": "model",
          "normalized": "Finalized-\u003eLDA",
          "package": "lda",
          "signature": "Finalized-\u003eLDA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA.html#v:model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epass batch\u003c/code\u003e runs one pass of Gibbs sampling on documents in \u003ccode\u003ebatch\u003c/code\u003e  \n\u003c/p\u003e",
          "module": "NLP.LDA",
          "name": "pass",
          "package": "lda",
          "signature": "Vector Doc -\u003e Sampler (Vector Doc)",
          "source": "src/NLP-LDA.html#pass",
          "type": "function"
        },
        "index": {
          "description": "pass batch runs one pass of Gibbs sampling on documents in batch",
          "hierarchy": "NLP LDA",
          "module": "NLP.LDA",
          "name": "pass",
          "normalized": "Vector Doc-\u003eSampler(Vector Doc)",
          "package": "lda",
          "signature": "Vector Doc-\u003eSampler(Vector Doc)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA.html#v:pass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erunLDA seed n m ds\u003c/code\u003e creates and runs an LDA sampler with \u003ccode\u003eseed\u003c/code\u003e\n for \u003ccode\u003en\u003c/code\u003e passes with initial model \u003ccode\u003em\u003c/code\u003e on the batch of documents\n \u003ccode\u003eds\u003c/code\u003e. The random number generator used is\n System.Random.Mersenne.Pure64.\n\u003c/p\u003e",
          "module": "NLP.LDA",
          "name": "runLDA",
          "package": "lda",
          "signature": "Word64 -\u003e Int -\u003e LDA -\u003e Vector Doc -\u003e (Vector Doc, LDA)",
          "source": "src/NLP-LDA.html#runLDA",
          "type": "function"
        },
        "index": {
          "description": "runLDA seed ds creates and runs an LDA sampler with seed for passes with initial model on the batch of documents ds The random number generator used is System.Random.Mersenne.Pure64",
          "hierarchy": "NLP LDA",
          "module": "NLP.LDA",
          "name": "runLDA",
          "normalized": "Word-\u003eInt-\u003eLDA-\u003eVector Doc-\u003e(Vector Doc,LDA)",
          "package": "lda",
          "partial": "LDA",
          "signature": "Word-\u003eInt-\u003eLDA-\u003eVector Doc-\u003e(Vector Doc,LDA)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA.html#v:runLDA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erunSampler seed m s\u003c/code\u003e runs sampler \u003ccode\u003es\u003c/code\u003e with \u003ccode\u003eseed\u003c/code\u003e and initial\n model \u003ccode\u003em\u003c/code\u003e. The random number generator used is\n System.Random.Mersenne.Pure64.\n\u003c/p\u003e",
          "module": "NLP.LDA",
          "name": "runSampler",
          "package": "lda",
          "signature": "Word64 -\u003e LDA -\u003e Sampler a -\u003e (a, LDA)",
          "source": "src/NLP-LDA.html#runSampler",
          "type": "function"
        },
        "index": {
          "description": "runSampler seed runs sampler with seed and initial model The random number generator used is System.Random.Mersenne.Pure64",
          "hierarchy": "NLP LDA",
          "module": "NLP.LDA",
          "name": "runSampler",
          "normalized": "Word-\u003eLDA-\u003eSampler a-\u003e(a,LDA)",
          "package": "lda",
          "partial": "Sampler",
          "signature": "Word-\u003eLDA-\u003eSampler a-\u003e(a,LDA)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA.html#v:runSampler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse document-topic counts\n\u003c/p\u003e",
          "module": "NLP.LDA",
          "name": "topicDocs",
          "package": "lda",
          "signature": "Finalized -\u003e Table2D",
          "source": "src/NLP-LDA.html#topicDocs",
          "type": "function"
        },
        "index": {
          "description": "Inverse document-topic counts",
          "hierarchy": "NLP LDA",
          "module": "NLP.LDA",
          "name": "topicDocs",
          "normalized": "Finalized-\u003eTable D",
          "package": "lda",
          "partial": "Docs",
          "signature": "Finalized-\u003eTable D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA.html#v:topicDocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of topics K\n\u003c/p\u003e",
          "module": "NLP.LDA",
          "name": "topicNum",
          "package": "lda",
          "signature": "LDA -\u003e Int",
          "source": "src/NLP-LDA.html#topicNum",
          "type": "function"
        },
        "index": {
          "description": "Number of topics",
          "hierarchy": "NLP LDA",
          "module": "NLP.LDA",
          "name": "topicNum",
          "normalized": "LDA-\u003eInt",
          "package": "lda",
          "partial": "Num",
          "signature": "LDA-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA.html#v:topicNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverse word-topic counts\n\u003c/p\u003e",
          "module": "NLP.LDA",
          "name": "topicWords",
          "package": "lda",
          "signature": "Finalized -\u003e Table2D",
          "source": "src/NLP-LDA.html#topicWords",
          "type": "function"
        },
        "index": {
          "description": "Inverse word-topic counts",
          "hierarchy": "NLP LDA",
          "module": "NLP.LDA",
          "name": "topicWords",
          "normalized": "Finalized-\u003eTable D",
          "package": "lda",
          "partial": "Words",
          "signature": "Finalized-\u003eTable D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA.html#v:topicWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTopic counts\n\u003c/p\u003e",
          "module": "NLP.LDA",
          "name": "topics",
          "package": "lda",
          "signature": "LDA -\u003e Table1D",
          "source": "src/NLP-LDA.html#topics",
          "type": "function"
        },
        "index": {
          "description": "Topic counts",
          "hierarchy": "NLP LDA",
          "module": "NLP.LDA",
          "name": "topics",
          "normalized": "LDA-\u003eTable D",
          "package": "lda",
          "signature": "LDA-\u003eTable D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA.html#v:topics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of unique words\n\u003c/p\u003e",
          "module": "NLP.LDA",
          "name": "vSize",
          "package": "lda",
          "signature": "LDA -\u003e Int",
          "source": "src/NLP-LDA.html#vSize",
          "type": "function"
        },
        "index": {
          "description": "Number of unique words",
          "hierarchy": "NLP LDA",
          "module": "NLP.LDA",
          "name": "vSize",
          "normalized": "LDA-\u003eInt",
          "package": "lda",
          "partial": "Size",
          "signature": "LDA-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA.html#v:vSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWord-topic counts\n\u003c/p\u003e",
          "module": "NLP.LDA",
          "name": "wordTopics",
          "package": "lda",
          "signature": "LDA -\u003e Table2D",
          "source": "src/NLP-LDA.html#wordTopics",
          "type": "function"
        },
        "index": {
          "description": "Word-topic counts",
          "hierarchy": "NLP LDA",
          "module": "NLP.LDA",
          "name": "wordTopics",
          "normalized": "LDA-\u003eTable D",
          "package": "lda",
          "partial": "Topics",
          "signature": "LDA-\u003eTable D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lda/docs/NLP-LDA.html#v:wordTopics"
      }
    }
  ]
]