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
        "word": "markov-chain"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMarkov chains can be used to recompose a list of elements\nrespecting the fact that the probability of a certain element\ndepends on preceding elements in the list.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.MarkovChain",
          "name": "MarkovChain",
          "package": "markov-chain",
          "source": "src/Data-MarkovChain.html",
          "type": "module"
        },
        "index": {
          "description": "Markov chains can be used to recompose list of elements respecting the fact that the probability of certain element depends on preceding elements in the list",
          "hierarchy": "Data MarkovChain",
          "module": "Data.MarkovChain",
          "name": "MarkovChain",
          "package": "markov-chain",
          "partial": "Markov Chain",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/markov-chain/docs/Data-MarkovChain.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a chain of elements\nrespecting to the probabilities of possible successors.\nThe list is considered being cyclic in order\nto have successors for the last elements.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e take 100 $ run 2 \"The sad cat sat on the mat. \" 0 (Random.mkStdGen 123)\n\u003c/pre\u003e",
          "module": "Data.MarkovChain",
          "name": "run",
          "package": "markov-chain",
          "signature": "Int-\u003e [a]-\u003e Int-\u003e g-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Creates chain of elements respecting to the probabilities of possible successors The list is considered being cyclic in order to have successors for the last elements Example take run The sad cat sat on the mat Random.mkStdGen",
          "hierarchy": "Data MarkovChain",
          "module": "Data.MarkovChain",
          "name": "run",
          "normalized": "Int-\u003e[a]-\u003eInt-\u003eb-\u003e[a]",
          "package": "markov-chain",
          "signature": "Int-\u003e[a]-\u003eInt-\u003eg-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/markov-chain/docs/Data-MarkovChain.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MarkovChain",
          "name": "runMulti",
          "package": "markov-chain",
          "signature": "Int-\u003e [[a]]-\u003e Int-\u003e g-\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MarkovChain",
          "module": "Data.MarkovChain",
          "name": "runMulti",
          "normalized": "Int-\u003e[[a]]-\u003eInt-\u003eb-\u003e[[a]]",
          "package": "markov-chain",
          "partial": "Multi",
          "signature": "Int-\u003e[[a]]-\u003eInt-\u003eg-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/markov-chain/docs/Data-MarkovChain.html#v:runMulti"
      }
    }
  ]
]