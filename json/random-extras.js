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
        "word": "random-extras"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn uniform distribution that excludes the first parameter.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Random.Distribution.Uniform.Exclusive",
          "name": "Exclusive",
          "package": "random-extras",
          "source": "src/Data-Random-Distribution-Uniform-Exclusive.html",
          "type": "module"
        },
        "index": {
          "description": "An uniform distribution that excludes the first parameter",
          "hierarchy": "Data Random Distribution Uniform Exclusive",
          "module": "Data.Random.Distribution.Uniform.Exclusive",
          "name": "Exclusive",
          "package": "random-extras",
          "partial": "Exclusive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Distribution-Uniform-Exclusive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for excluding discrete values. No change for floating point\n values.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e \u003ccode\u003e\u003ca\u003eUniform\u003c/a\u003e\u003c/code\u003e is exclusive on the second argument for floating point\n         values, so \u003ccode\u003e\u003ca\u003eExcludable\u003c/a\u003e\u003c/code\u003e does not need to exclude anything for them.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Uniform.Exclusive",
          "name": "Excludable",
          "package": "random-extras",
          "source": "src/Data-Random-Distribution-Uniform-Exclusive.html#Excludable",
          "type": "class"
        },
        "index": {
          "description": "class for excluding discrete values No change for floating point values Note Uniform is exclusive on the second argument for floating point values so Excludable does not need to exclude anything for them",
          "hierarchy": "Data Random Distribution Uniform Exclusive",
          "module": "Data.Random.Distribution.Uniform.Exclusive",
          "name": "Excludable",
          "package": "random-extras",
          "partial": "Excludable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Distribution-Uniform-Exclusive.html#t:Excludable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Uniform.Exclusive",
          "name": "bigger",
          "package": "random-extras",
          "signature": "a -\u003e a",
          "source": "src/Data-Random-Distribution-Uniform-Exclusive.html#bigger",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Random Distribution Uniform Exclusive",
          "module": "Data.Random.Distribution.Uniform.Exclusive",
          "name": "bigger",
          "normalized": "a-\u003ea",
          "package": "random-extras",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Distribution-Uniform-Exclusive.html#v:bigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Distribution.Uniform.Exclusive",
          "name": "smaller",
          "package": "random-extras",
          "signature": "a -\u003e a",
          "source": "src/Data-Random-Distribution-Uniform-Exclusive.html#smaller",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Random Distribution Uniform Exclusive",
          "module": "Data.Random.Distribution.Uniform.Exclusive",
          "name": "smaller",
          "normalized": "a-\u003ea",
          "package": "random-extras",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Distribution-Uniform-Exclusive.html#v:smaller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA uniformly distributed random value that excludes the first parameter.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Uniform.Exclusive",
          "name": "uniformExclusive",
          "package": "random-extras",
          "signature": "a -\u003e a -\u003e RVar a",
          "source": "src/Data-Random-Distribution-Uniform-Exclusive.html#uniformExclusive",
          "type": "function"
        },
        "index": {
          "description": "uniformly distributed random value that excludes the first parameter",
          "hierarchy": "Data Random Distribution Uniform Exclusive",
          "module": "Data.Random.Distribution.Uniform.Exclusive",
          "name": "uniformExclusive",
          "normalized": "a-\u003ea-\u003eRVar a",
          "package": "random-extras",
          "partial": "Exclusive",
          "signature": "a-\u003ea-\u003eRVar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Distribution-Uniform-Exclusive.html#v:uniformExclusive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA uniform distribution that excludes the first parameter\n , but includes the second.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e \u003ccode\u003e\u003ca\u003eUniform\u003c/a\u003e\u003c/code\u003e behaves the opposite way for floating point values.\n\u003c/p\u003e",
          "module": "Data.Random.Distribution.Uniform.Exclusive",
          "name": "uniformExclusiveDist",
          "package": "random-extras",
          "signature": "a -\u003e a -\u003e Uniform a",
          "source": "src/Data-Random-Distribution-Uniform-Exclusive.html#uniformExclusiveDist",
          "type": "function"
        },
        "index": {
          "description": "uniform distribution that excludes the first parameter but includes the second Note Uniform behaves the opposite way for floating point values",
          "hierarchy": "Data Random Distribution Uniform Exclusive",
          "module": "Data.Random.Distribution.Uniform.Exclusive",
          "name": "uniformExclusiveDist",
          "normalized": "a-\u003ea-\u003eUniform a",
          "package": "random-extras",
          "partial": "Exclusive Dist",
          "signature": "a-\u003ea-\u003eUniform a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Distribution-Uniform-Exclusive.html#v:uniformExclusiveDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for splitting a deck of cards like game players.\n\u003c/p\u003e\u003cp\u003eDecks are represented by \u003ccode\u003e\u003ca\u003eSeq\u003c/a\u003e\u003c/code\u003es, because these efficiently support the required operations.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eSee:\u003c/dt\u003e\u003cdd\u003e Bayer, Diaconis \u003cem\u003eTrailing the Dovetail Shuffle to its Lair\u003c/em\u003e \u003ca\u003ehttp://projecteuclid.org/euclid.aoap/1177005705\u003c/a\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Data.Random.Dovetail",
          "name": "Dovetail",
          "package": "random-extras",
          "source": "src/Data-Random-Dovetail.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for splitting deck of cards like game players Decks are represented by Seq because these efficiently support the required operations See Bayer Diaconis Trailing the Dovetail Shuffle to its Lair http projecteuclid.org euclid.aoap",
          "hierarchy": "Data Random Dovetail",
          "module": "Data.Random.Dovetail",
          "name": "Dovetail",
          "package": "random-extras",
          "partial": "Dovetail",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Dovetail.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDovetail shuffle a deck, i.e. split the deck with splitDeck and riffle \n the resulting halves with \u003ccode\u003e\u003ca\u003eriffleDecks\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Random.Dovetail",
          "name": "dovetail",
          "package": "random-extras",
          "signature": "Seq a -\u003e RVar (Seq a)",
          "source": "src/Data-Random-Dovetail.html#dovetail",
          "type": "function"
        },
        "index": {
          "description": "Dovetail shuffle deck i.e split the deck with splitDeck and riffle the resulting halves with riffleDecks",
          "hierarchy": "Data Random Dovetail",
          "module": "Data.Random.Dovetail",
          "name": "dovetail",
          "normalized": "Seq a-\u003eRVar(Seq a)",
          "package": "random-extras",
          "signature": "Seq a-\u003eRVar(Seq a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Dovetail.html#v:dovetail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDovetail shuffle a deck repeatedly for \u003cem\u003en\u003c/em\u003e times.\n\u003c/p\u003e",
          "module": "Data.Random.Dovetail",
          "name": "dovetails",
          "package": "random-extras",
          "signature": "Int -\u003e Seq a -\u003e RVar (Seq a)",
          "source": "src/Data-Random-Dovetail.html#dovetails",
          "type": "function"
        },
        "index": {
          "description": "Dovetail shuffle deck repeatedly for times",
          "hierarchy": "Data Random Dovetail",
          "module": "Data.Random.Dovetail",
          "name": "dovetails",
          "normalized": "Int-\u003eSeq a-\u003eRVar(Seq a)",
          "package": "random-extras",
          "signature": "Int-\u003eSeq a-\u003eRVar(Seq a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Dovetail.html#v:dovetails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a \u003cem\u003eface up, face down\u003c/em\u003e shuffle, which is like a dovetail shuffle\n where the lower of the two halves is reversed.\n\u003c/p\u003e",
          "module": "Data.Random.Dovetail",
          "name": "faceUpFaceDown",
          "package": "random-extras",
          "signature": "Seq a -\u003e RVar (Seq a)",
          "source": "src/Data-Random-Dovetail.html#faceUpFaceDown",
          "type": "function"
        },
        "index": {
          "description": "Perform face up face down shuffle which is like dovetail shuffle where the lower of the two halves is reversed",
          "hierarchy": "Data Random Dovetail",
          "module": "Data.Random.Dovetail",
          "name": "faceUpFaceDown",
          "normalized": "Seq a-\u003eRVar(Seq a)",
          "package": "random-extras",
          "partial": "Up Face Down",
          "signature": "Seq a-\u003eRVar(Seq a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Dovetail.html#v:faceUpFaceDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDovetail shuffle a deck (generalized), i.e. split the deck into \u003cem\u003en\u003c/em\u003e parts\n and riffle them back together.\n\u003c/p\u003e",
          "module": "Data.Random.Dovetail",
          "name": "generalizedDovetail",
          "package": "random-extras",
          "signature": "Int -\u003e Seq a -\u003e RVar (Seq a)",
          "source": "src/Data-Random-Dovetail.html#generalizedDovetail",
          "type": "function"
        },
        "index": {
          "description": "Dovetail shuffle deck generalized i.e split the deck into parts and riffle them back together",
          "hierarchy": "Data Random Dovetail",
          "module": "Data.Random.Dovetail",
          "name": "generalizedDovetail",
          "normalized": "Int-\u003eSeq a-\u003eRVar(Seq a)",
          "package": "random-extras",
          "partial": "Dovetail",
          "signature": "Int-\u003eSeq a-\u003eRVar(Seq a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Dovetail.html#v:generalizedDovetail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDovetail shuffle a deck repeatedly for \u003cem\u003eshuffles\u003c/em\u003e times, \n using \u003cem\u003eparts\u003c/em\u003e parts.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eInvocation:\u003c/em\u003e \u003ccode\u003egeneralizedDovetails shuffles parts deck\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Random.Dovetail",
          "name": "generalizedDovetails",
          "package": "random-extras",
          "signature": "Int -\u003e Int -\u003e Seq a -\u003e RVar (Seq a)",
          "source": "src/Data-Random-Dovetail.html#generalizedDovetails",
          "type": "function"
        },
        "index": {
          "description": "Dovetail shuffle deck repeatedly for shuffles times using parts parts Invocation generalizedDovetails shuffles parts deck",
          "hierarchy": "Data Random Dovetail",
          "module": "Data.Random.Dovetail",
          "name": "generalizedDovetails",
          "normalized": "Int-\u003eInt-\u003eSeq a-\u003eRVar(Seq a)",
          "package": "random-extras",
          "partial": "Dovetails",
          "signature": "Int-\u003eInt-\u003eSeq a-\u003eRVar(Seq a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Dovetail.html#v:generalizedDovetails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a generalized inverse dovetail shuffle, i.e. letting the cards\n from a deck drop randomly into \u003cem\u003en\u003c/em\u003e heaps and then stack them back together.\n\u003c/p\u003e",
          "module": "Data.Random.Dovetail",
          "name": "generalizedInverseDovetail",
          "package": "random-extras",
          "signature": "Int -\u003e Seq a -\u003e RVar (Seq a)",
          "source": "src/Data-Random-Dovetail.html#generalizedInverseDovetail",
          "type": "function"
        },
        "index": {
          "description": "Perform generalized inverse dovetail shuffle i.e letting the cards from deck drop randomly into heaps and then stack them back together",
          "hierarchy": "Data Random Dovetail",
          "module": "Data.Random.Dovetail",
          "name": "generalizedInverseDovetail",
          "normalized": "Int-\u003eSeq a-\u003eRVar(Seq a)",
          "package": "random-extras",
          "partial": "Inverse Dovetail",
          "signature": "Int-\u003eSeq a-\u003eRVar(Seq a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Dovetail.html#v:generalizedInverseDovetail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an inverse riffle, i.e. letting the cards from a deck drop\n randomly into \u003cem\u003en\u003c/em\u003e heaps.\n\u003c/p\u003e",
          "module": "Data.Random.Dovetail",
          "name": "generalizedInverseRiffleDecks",
          "package": "random-extras",
          "signature": "Int -\u003e Seq a -\u003e RVar (Seq (Seq a))",
          "source": "src/Data-Random-Dovetail.html#generalizedInverseRiffleDecks",
          "type": "function"
        },
        "index": {
          "description": "Perform an inverse riffle i.e letting the cards from deck drop randomly into heaps",
          "hierarchy": "Data Random Dovetail",
          "module": "Data.Random.Dovetail",
          "name": "generalizedInverseRiffleDecks",
          "normalized": "Int-\u003eSeq a-\u003eRVar(Seq(Seq a))",
          "package": "random-extras",
          "partial": "Inverse Riffle Decks",
          "signature": "Int-\u003eSeq a-\u003eRVar(Seq(Seq a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Dovetail.html#v:generalizedInverseRiffleDecks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRiffle \u003cem\u003en\u003c/em\u003e parts into one deck.\n\u003c/p\u003e",
          "module": "Data.Random.Dovetail",
          "name": "generalizedRiffleDecks",
          "package": "random-extras",
          "signature": "[Seq a] -\u003e RVar (Seq a)",
          "source": "src/Data-Random-Dovetail.html#generalizedRiffleDecks",
          "type": "function"
        },
        "index": {
          "description": "Riffle parts into one deck",
          "hierarchy": "Data Random Dovetail",
          "module": "Data.Random.Dovetail",
          "name": "generalizedRiffleDecks",
          "normalized": "[Seq a]-\u003eRVar(Seq a)",
          "package": "random-extras",
          "partial": "Riffle Decks",
          "signature": "[Seq a]-\u003eRVar(Seq a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Dovetail.html#v:generalizedRiffleDecks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a deck into \u003cem\u003en\u003c/em\u003e \u003cem\u003eroughly equal\u003c/em\u003e parts.\n\u003c/p\u003e",
          "module": "Data.Random.Dovetail",
          "name": "generalizedSplitDeck",
          "package": "random-extras",
          "signature": "Int -\u003e Seq a -\u003e RVar [Seq a]",
          "source": "src/Data-Random-Dovetail.html#generalizedSplitDeck",
          "type": "function"
        },
        "index": {
          "description": "Split deck into roughly equal parts",
          "hierarchy": "Data Random Dovetail",
          "module": "Data.Random.Dovetail",
          "name": "generalizedSplitDeck",
          "normalized": "Int-\u003eSeq a-\u003eRVar[Seq a]",
          "package": "random-extras",
          "partial": "Split Deck",
          "signature": "Int-\u003eSeq a-\u003eRVar[Seq a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Dovetail.html#v:generalizedSplitDeck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an inverse dovetail shuffle, i.e. letting the cards from \n a deck drop randomly into two heaps and then stack these heaps.\n\u003c/p\u003e",
          "module": "Data.Random.Dovetail",
          "name": "inverseDovetail",
          "package": "random-extras",
          "signature": "Seq a -\u003e RVar (Seq a)",
          "source": "src/Data-Random-Dovetail.html#inverseDovetail",
          "type": "function"
        },
        "index": {
          "description": "Perform an inverse dovetail shuffle i.e letting the cards from deck drop randomly into two heaps and then stack these heaps",
          "hierarchy": "Data Random Dovetail",
          "module": "Data.Random.Dovetail",
          "name": "inverseDovetail",
          "normalized": "Seq a-\u003eRVar(Seq a)",
          "package": "random-extras",
          "partial": "Dovetail",
          "signature": "Seq a-\u003eRVar(Seq a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Dovetail.html#v:inverseDovetail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an inverse riffle, i.e. letting the cards from a deck drop \n randomly into two heaps.\n\u003c/p\u003e",
          "module": "Data.Random.Dovetail",
          "name": "inverseRiffleDecks",
          "package": "random-extras",
          "signature": "Seq a -\u003e RVar (Seq a, Seq a)",
          "source": "src/Data-Random-Dovetail.html#inverseRiffleDecks",
          "type": "function"
        },
        "index": {
          "description": "Perform an inverse riffle i.e letting the cards from deck drop randomly into two heaps",
          "hierarchy": "Data Random Dovetail",
          "module": "Data.Random.Dovetail",
          "name": "inverseRiffleDecks",
          "normalized": "Seq a-\u003eRVar(Seq a,Seq a)",
          "package": "random-extras",
          "partial": "Riffle Decks",
          "signature": "Seq a-\u003eRVar(Seq a,Seq a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Dovetail.html#v:inverseRiffleDecks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRiffle two halves of a deck into one deck.\n\u003c/p\u003e",
          "module": "Data.Random.Dovetail",
          "name": "riffleDecks",
          "package": "random-extras",
          "signature": "Seq a -\u003e Seq a -\u003e RVar (Seq a)",
          "source": "src/Data-Random-Dovetail.html#riffleDecks",
          "type": "function"
        },
        "index": {
          "description": "Riffle two halves of deck into one deck",
          "hierarchy": "Data Random Dovetail",
          "module": "Data.Random.Dovetail",
          "name": "riffleDecks",
          "normalized": "Seq a-\u003eSeq a-\u003eRVar(Seq a)",
          "package": "random-extras",
          "partial": "Decks",
          "signature": "Seq a-\u003eSeq a-\u003eRVar(Seq a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Dovetail.html#v:riffleDecks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a deck into two \u003cem\u003eroughly equal\u003c/em\u003e halves.\n\u003c/p\u003e",
          "module": "Data.Random.Dovetail",
          "name": "splitDeck",
          "package": "random-extras",
          "signature": "Seq a -\u003e RVar (Seq a, Seq a)",
          "source": "src/Data-Random-Dovetail.html#splitDeck",
          "type": "function"
        },
        "index": {
          "description": "Split deck into two roughly equal halves",
          "hierarchy": "Data Random Dovetail",
          "module": "Data.Random.Dovetail",
          "name": "splitDeck",
          "normalized": "Seq a-\u003eRVar(Seq a,Seq a)",
          "package": "random-extras",
          "partial": "Deck",
          "signature": "Seq a-\u003eRVar(Seq a,Seq a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Dovetail.html#v:splitDeck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAdditional monadic random functions, based on random-fu.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Random.Extras",
          "name": "Extras",
          "package": "random-extras",
          "source": "src/Data-Random-Extras.html",
          "type": "module"
        },
        "index": {
          "description": "Additional monadic random functions based on random-fu",
          "hierarchy": "Data Random Extras",
          "module": "Data.Random.Extras",
          "name": "Extras",
          "package": "random-extras",
          "partial": "Extras",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Extras.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect a random element from a list.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ePartial function:\u003c/em\u003e This function is only defined on non-empty lists.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eComplexity:\u003c/em\u003e O(n), where \u003cem\u003en\u003c/em\u003e is the length of the input list.\n\u003c/p\u003e",
          "module": "Data.Random.Extras",
          "name": "choice",
          "package": "random-extras",
          "signature": "[a] -\u003e RVar a",
          "source": "src/Data-Random-Extras.html#choice",
          "type": "function"
        },
        "index": {
          "description": "Select random element from list Partial function This function is only defined on non-empty lists Complexity where is the length of the input list",
          "hierarchy": "Data Random Extras",
          "module": "Data.Random.Extras",
          "name": "choice",
          "normalized": "[a]-\u003eRVar a",
          "package": "random-extras",
          "signature": "[a]-\u003eRVar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Extras.html#v:choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect a random element from an array.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eComplexity:\u003c/em\u003e O(1).\n\u003c/p\u003e",
          "module": "Data.Random.Extras",
          "name": "choiceArray",
          "package": "random-extras",
          "signature": "arr i a -\u003e RVar a",
          "source": "src/Data-Random-Extras.html#choiceArray",
          "type": "function"
        },
        "index": {
          "description": "Select random element from an array Complexity",
          "hierarchy": "Data Random Extras",
          "module": "Data.Random.Extras",
          "name": "choiceArray",
          "normalized": "a b c-\u003eRVar c",
          "package": "random-extras",
          "partial": "Array",
          "signature": "arr i a-\u003eRVar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Extras.html#v:choiceArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandomly choose and extract an element from a list.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eComplexity:\u003c/em\u003e O(n), where \u003cem\u003en\u003c/em\u003e is the length of the input list.\n\u003c/p\u003e",
          "module": "Data.Random.Extras",
          "name": "choiceExtract",
          "package": "random-extras",
          "signature": "[a] -\u003e Maybe (RVar ([a], a))",
          "source": "src/Data-Random-Extras.html#choiceExtract",
          "type": "function"
        },
        "index": {
          "description": "Randomly choose and extract an element from list Complexity where is the length of the input list",
          "hierarchy": "Data Random Extras",
          "module": "Data.Random.Extras",
          "name": "choiceExtract",
          "normalized": "[a]-\u003eMaybe(RVar([a],a))",
          "package": "random-extras",
          "partial": "Extract",
          "signature": "[a]-\u003eMaybe(RVar([a],a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Extras.html#v:choiceExtract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandomly choose and extract an element from a sequence.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eComplexity:\u003c/em\u003e O(log n), where \u003cem\u003en\u003c/em\u003e is the length of the input sequence.\n\u003c/p\u003e",
          "module": "Data.Random.Extras",
          "name": "choiceExtractSeq",
          "package": "random-extras",
          "signature": "Seq a -\u003e Maybe (RVar (Seq a, a))",
          "source": "src/Data-Random-Extras.html#choiceExtractSeq",
          "type": "function"
        },
        "index": {
          "description": "Randomly choose and extract an element from sequence Complexity log where is the length of the input sequence",
          "hierarchy": "Data Random Extras",
          "module": "Data.Random.Extras",
          "name": "choiceExtractSeq",
          "normalized": "Seq a-\u003eMaybe(RVar(Seq a,a))",
          "package": "random-extras",
          "partial": "Extract Seq",
          "signature": "Seq a-\u003eMaybe(RVar(Seq a,a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Extras.html#v:choiceExtractSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect a random element from a sequence.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ePartial function:\u003c/em\u003e This function is only defined on non-empty sequences.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eComplexity:\u003c/em\u003e O(log n), where \u003cem\u003en\u003c/em\u003e is the length of the input sequence.\n\u003c/p\u003e",
          "module": "Data.Random.Extras",
          "name": "choiceSeq",
          "package": "random-extras",
          "signature": "Seq a -\u003e RVar a",
          "source": "src/Data-Random-Extras.html#choiceSeq",
          "type": "function"
        },
        "index": {
          "description": "Select random element from sequence Partial function This function is only defined on non-empty sequences Complexity log where is the length of the input sequence",
          "hierarchy": "Data Random Extras",
          "module": "Data.Random.Extras",
          "name": "choiceSeq",
          "normalized": "Seq a-\u003eRVar a",
          "package": "random-extras",
          "partial": "Seq",
          "signature": "Seq a-\u003eRVar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Extras.html#v:choiceSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stream of random elements from a list.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ePartial function:\u003c/em\u003e This function is only defined on non-empty lists.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eComplexity:\u003c/em\u003e O(n) base and O(1) per element.\n\u003c/p\u003e",
          "module": "Data.Random.Extras",
          "name": "choices",
          "package": "random-extras",
          "signature": "Int -\u003e [a] -\u003e RVar [a]",
          "source": "src/Data-Random-Extras.html#choices",
          "type": "function"
        },
        "index": {
          "description": "stream of random elements from list Partial function This function is only defined on non-empty lists Complexity base and per element",
          "hierarchy": "Data Random Extras",
          "module": "Data.Random.Extras",
          "name": "choices",
          "normalized": "Int-\u003e[a]-\u003eRVar[a]",
          "package": "random-extras",
          "signature": "Int-\u003e[a]-\u003eRVar[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Extras.html#v:choices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stream of random elements from an array.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eComplexity:\u003c/em\u003e O(1) per element.\n\u003c/p\u003e",
          "module": "Data.Random.Extras",
          "name": "choicesArray",
          "package": "random-extras",
          "signature": "Int -\u003e arr i a -\u003e RVar [a]",
          "source": "src/Data-Random-Extras.html#choicesArray",
          "type": "function"
        },
        "index": {
          "description": "stream of random elements from an array Complexity per element",
          "hierarchy": "Data Random Extras",
          "module": "Data.Random.Extras",
          "name": "choicesArray",
          "normalized": "Int-\u003ea b c-\u003eRVar[c]",
          "package": "random-extras",
          "partial": "Array",
          "signature": "Int-\u003earr i a-\u003eRVar[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Extras.html#v:choicesArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect a random element from a list, traversing the list only once.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ePartial function:\u003c/em\u003e This function is only defined on non-empty lists\n                     with a length below (\u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e + 1 :: Int).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eComplexity:\u003c/em\u003e O(n), where \u003cem\u003en\u003c/em\u003e is the length of the input list.\n\u003c/p\u003e",
          "module": "Data.Random.Extras",
          "name": "iterativeChoice",
          "package": "random-extras",
          "signature": "[a] -\u003e RVar a",
          "source": "src/Data-Random-Extras.html#iterativeChoice",
          "type": "function"
        },
        "index": {
          "description": "Select random element from list traversing the list only once Partial function This function is only defined on non-empty lists with length below maxBound Int Complexity where is the length of the input list",
          "hierarchy": "Data Random Extras",
          "module": "Data.Random.Extras",
          "name": "iterativeChoice",
          "normalized": "[a]-\u003eRVar a",
          "package": "random-extras",
          "partial": "Choice",
          "signature": "[a]-\u003eRVar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Extras.html#v:iterativeChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely select a random element from a list.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eComplexity:\u003c/em\u003e O(n), where \u003cem\u003en\u003c/em\u003e is the length of the input list.\n\u003c/p\u003e",
          "module": "Data.Random.Extras",
          "name": "safeChoice",
          "package": "random-extras",
          "signature": "[a] -\u003e Maybe (RVar a)",
          "source": "src/Data-Random-Extras.html#safeChoice",
          "type": "function"
        },
        "index": {
          "description": "Safely select random element from list Complexity where is the length of the input list",
          "hierarchy": "Data Random Extras",
          "module": "Data.Random.Extras",
          "name": "safeChoice",
          "normalized": "[a]-\u003eMaybe(RVar a)",
          "package": "random-extras",
          "partial": "Choice",
          "signature": "[a]-\u003eMaybe(RVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Extras.html#v:safeChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely select a random element from a sequence.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eComplexity:\u003c/em\u003e O(log n), where \u003cem\u003en\u003c/em\u003e is the length of the input sequence.\n\u003c/p\u003e",
          "module": "Data.Random.Extras",
          "name": "safeChoiceSeq",
          "package": "random-extras",
          "signature": "Seq a -\u003e Maybe (RVar a)",
          "source": "src/Data-Random-Extras.html#safeChoiceSeq",
          "type": "function"
        },
        "index": {
          "description": "Safely select random element from sequence Complexity log where is the length of the input sequence",
          "hierarchy": "Data Random Extras",
          "module": "Data.Random.Extras",
          "name": "safeChoiceSeq",
          "normalized": "Seq a-\u003eMaybe(RVar a)",
          "package": "random-extras",
          "partial": "Choice Seq",
          "signature": "Seq a-\u003eMaybe(RVar a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Extras.html#v:safeChoiceSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafely get a stream of random elements from a list.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eComplexity:\u003c/em\u003e O(n) base and O(1) per element, where \u003cem\u003en\u003c/em\u003e is the length of \n the input list.\n\u003c/p\u003e",
          "module": "Data.Random.Extras",
          "name": "safeChoices",
          "package": "random-extras",
          "signature": "Int -\u003e [a] -\u003e Maybe (RVar [a])",
          "source": "src/Data-Random-Extras.html#safeChoices",
          "type": "function"
        },
        "index": {
          "description": "Safely get stream of random elements from list Complexity base and per element where is the length of the input list",
          "hierarchy": "Data Random Extras",
          "module": "Data.Random.Extras",
          "name": "safeChoices",
          "normalized": "Int-\u003e[a]-\u003eMaybe(RVar[a])",
          "package": "random-extras",
          "partial": "Choices",
          "signature": "Int-\u003e[a]-\u003eMaybe(RVar[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Extras.html#v:safeChoices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a random sample from a list.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eComplexity:\u003c/em\u003e O(n + m * log n), where \u003cem\u003en\u003c/em\u003e is the length of the input list \n and \u003cem\u003em\u003c/em\u003e is the sample size.\n\u003c/p\u003e",
          "module": "Data.Random.Extras",
          "name": "sample",
          "package": "random-extras",
          "signature": "Int -\u003e [a] -\u003e RVar [a]",
          "source": "src/Data-Random-Extras.html#sample",
          "type": "function"
        },
        "index": {
          "description": "Take random sample from list Complexity log where is the length of the input list and is the sample size",
          "hierarchy": "Data Random Extras",
          "module": "Data.Random.Extras",
          "name": "sample",
          "normalized": "Int-\u003e[a]-\u003eRVar[a]",
          "package": "random-extras",
          "signature": "Int-\u003e[a]-\u003eRVar[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Extras.html#v:sample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a random sample from a sequence.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eComplexity:\u003c/em\u003e O(m * log n), where \u003cem\u003en\u003c/em\u003e is the length of the input sequence \n and \u003cem\u003em\u003c/em\u003e is the sample size.\n\u003c/p\u003e",
          "module": "Data.Random.Extras",
          "name": "sampleSeq",
          "package": "random-extras",
          "signature": "Int -\u003e Seq a -\u003e RVar [a]",
          "source": "src/Data-Random-Extras.html#sampleSeq",
          "type": "function"
        },
        "index": {
          "description": "Take random sample from sequence Complexity log where is the length of the input sequence and is the sample size",
          "hierarchy": "Data Random Extras",
          "module": "Data.Random.Extras",
          "name": "sampleSeq",
          "normalized": "Int-\u003eSeq a-\u003eRVar[a]",
          "package": "random-extras",
          "partial": "Seq",
          "signature": "Int-\u003eSeq a-\u003eRVar[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Extras.html#v:sampleSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShuffle a list randomly. The method is based on Oleg Kiselyov's \n \u003cem\u003eperfect shuffle\u003c/em\u003e \u003ca\u003ehttp://okmij.org/ftp/Haskell/perfect-shuffle.txt\u003c/a\u003e,\n but much simpler because it uses existing data structures. The efficiency\n of both methods should be comparable.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eComplexity:\u003c/em\u003e O(n * log n), where \u003cem\u003en\u003c/em\u003e is the length of the input list.\n\u003c/p\u003e",
          "module": "Data.Random.Extras",
          "name": "shuffle",
          "package": "random-extras",
          "signature": "[a] -\u003e RVar [a]",
          "source": "src/Data-Random-Extras.html#shuffle",
          "type": "function"
        },
        "index": {
          "description": "Shuffle list randomly The method is based on Oleg Kiselyov perfect shuffle http okmij.org ftp Haskell perfect-shuffle.txt but much simpler because it uses existing data structures The efficiency of both methods should be comparable Complexity log where is the length of the input list",
          "hierarchy": "Data Random Extras",
          "module": "Data.Random.Extras",
          "name": "shuffle",
          "normalized": "[a]-\u003eRVar[a]",
          "package": "random-extras",
          "signature": "[a]-\u003eRVar[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Extras.html#v:shuffle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShuffle a sequence randomly. This is being used by \u003ccode\u003e\u003ca\u003eshuffle\u003c/a\u003e\u003c/code\u003e,\n so it logically uses the same method.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eComplexity:\u003c/em\u003e O(n * log n), where \u003cem\u003en\u003c/em\u003e is the length of the input sequence.\n\u003c/p\u003e",
          "module": "Data.Random.Extras",
          "name": "shuffleSeq",
          "package": "random-extras",
          "signature": "Seq a -\u003e RVar [a]",
          "source": "src/Data-Random-Extras.html#shuffleSeq",
          "type": "function"
        },
        "index": {
          "description": "Shuffle sequence randomly This is being used by shuffle so it logically uses the same method Complexity log where is the length of the input sequence",
          "hierarchy": "Data Random Extras",
          "module": "Data.Random.Extras",
          "name": "shuffleSeq",
          "normalized": "Seq a-\u003eRVar[a]",
          "package": "random-extras",
          "partial": "Seq",
          "signature": "Seq a-\u003eRVar[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Extras.html#v:shuffleSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnsafely \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e a \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003e by taking a random sample. Uses \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eContains an instance of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eRVar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Random.Show.Unsafe",
          "name": "Unsafe",
          "package": "random-extras",
          "source": "src/Data-Random-Show-Unsafe.html",
          "type": "module"
        },
        "index": {
          "description": "Unsafely show RVar by taking random sample Uses unsafePerformIO Contains an instance of Show for RVar",
          "hierarchy": "Data Random Show Unsafe",
          "module": "Data.Random.Show.Unsafe",
          "name": "Unsafe",
          "package": "random-extras",
          "partial": "Unsafe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Show-Unsafe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for shuffling elements according to weights.\n\u003c/p\u003e\u003cp\u003eDefinitions:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eWeight\u003c/dt\u003e\u003cdd\u003e        A number above \u003cem\u003e0\u003c/em\u003e denoting how likely it is for an element to \n                  end up in the first position.\n\u003c/dd\u003e\u003cdt\u003eProbability\u003c/dt\u003e\u003cdd\u003e   A weight normalised into the \u003cem\u003e(0,1]\u003c/em\u003e range.\n\u003c/dd\u003e\u003cdt\u003eWeighted list\u003c/dt\u003e\u003cdd\u003e A list of pairs \u003ccode\u003e(w, a)\u003c/code\u003e, where \u003ccode\u003ew\u003c/code\u003e is the weight of \n                  element \u003ccode\u003ea\u003c/code\u003e.\n                  The probability of an element getting into the first position\n                  is equal by its weight divided by the sum of all weights, and\n                  the probability of getting into a position other than the \n                  first is equal to the probability of getting in the first \n                  position when all elements in prior positions have been\n                  removed from the weighted list.\n\u003c/dd\u003e\u003cdt\u003eCDF Map\u003c/dt\u003e\u003cdd\u003e       A map of \u003cem\u003esummed weights\u003c/em\u003e to elements. For example, a weighted\n                  list \u003ccode\u003e[(0.2, \u003ccode\u003ea\u003c/code\u003e), (0.6, \u003ccode\u003eb\u003c/code\u003e), (0.2, \u003ccode\u003ec\u003c/code\u003e)]\u003c/code\u003e corresponds to a\n                  CDF map of \u003ccode\u003e[(0.2, \u003ccode\u003ea\u003c/code\u003e), (0.8, \u003ccode\u003eb\u003c/code\u003e), (1.0, \u003ccode\u003ec\u003c/code\u003e)]\u003c/code\u003e \n                  (as a \u003ccode\u003eMap\u003c/code\u003e). The weights are summed from left to right.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "Data.Random.Shuffle.Weighted",
          "name": "Weighted",
          "package": "random-extras",
          "source": "src/Data-Random-Shuffle-Weighted.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for shuffling elements according to weights Definitions Weight number above denoting how likely it is for an element to end up in the first position Probability weight normalised into the range Weighted list list of pairs where is the weight of element The probability of an element getting into the first position is equal by its weight divided by the sum of all weights and the probability of getting into position other than the first is equal to the probability of getting in the first position when all elements in prior positions have been removed from the weighted list CDF Map map of summed weights to elements For example weighted list corresponds to CDF map of as Map The weights are summed from left to right",
          "hierarchy": "Data Random Shuffle Weighted",
          "module": "Data.Random.Shuffle.Weighted",
          "name": "Weighted",
          "package": "random-extras",
          "partial": "Weighted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Shuffle-Weighted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a CDF map from a weighted list.\n\u003c/p\u003e",
          "module": "Data.Random.Shuffle.Weighted",
          "name": "cdfMapFromList",
          "package": "random-extras",
          "signature": "[(w, a)] -\u003e Map w a",
          "source": "src/Data-Random-Shuffle-Weighted.html#cdfMapFromList",
          "type": "function"
        },
        "index": {
          "description": "Generate CDF map from weighted list",
          "hierarchy": "Data Random Shuffle Weighted",
          "module": "Data.Random.Shuffle.Weighted",
          "name": "cdfMapFromList",
          "normalized": "[(a,b)]-\u003eMap a b",
          "package": "random-extras",
          "partial": "Map From List",
          "signature": "[(w,a)]-\u003eMap w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Shuffle-Weighted.html#v:cdfMapFromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandomly extract an element from a CDF map according to its weights. The\n element is removed and the resulting \u003ca\u003eweight gap\u003c/a\u003e closed.\n\u003c/p\u003e",
          "module": "Data.Random.Shuffle.Weighted",
          "name": "weightedChoiceExtractCDF",
          "package": "random-extras",
          "signature": "Map w a -\u003e RVar (Map w a, a)",
          "source": "src/Data-Random-Shuffle-Weighted.html#weightedChoiceExtractCDF",
          "type": "function"
        },
        "index": {
          "description": "Randomly extract an element from CDF map according to its weights The element is removed and the resulting weight gap closed",
          "hierarchy": "Data Random Shuffle Weighted",
          "module": "Data.Random.Shuffle.Weighted",
          "name": "weightedChoiceExtractCDF",
          "normalized": "Map a b-\u003eRVar(Map a b,b)",
          "package": "random-extras",
          "partial": "Choice Extract CDF",
          "signature": "Map w a-\u003eRVar(Map w a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Shuffle-Weighted.html#v:weightedChoiceExtractCDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandomly draw \u003cem\u003en\u003c/em\u003e elements from a weighted list according to its weights.\n\u003c/p\u003e",
          "module": "Data.Random.Shuffle.Weighted",
          "name": "weightedSample",
          "package": "random-extras",
          "signature": "Int -\u003e [(w, a)] -\u003e RVar [a]",
          "source": "src/Data-Random-Shuffle-Weighted.html#weightedSample",
          "type": "function"
        },
        "index": {
          "description": "Randomly draw elements from weighted list according to its weights",
          "hierarchy": "Data Random Shuffle Weighted",
          "module": "Data.Random.Shuffle.Weighted",
          "name": "weightedSample",
          "normalized": "Int-\u003e[(a,b)]-\u003eRVar[b]",
          "package": "random-extras",
          "partial": "Sample",
          "signature": "Int-\u003e[(w,a)]-\u003eRVar[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Shuffle-Weighted.html#v:weightedSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandomly draw \u003cem\u003en\u003c/em\u003e elements from a CDF map according to its weights.\n\u003c/p\u003e",
          "module": "Data.Random.Shuffle.Weighted",
          "name": "weightedSampleCDF",
          "package": "random-extras",
          "signature": "Int -\u003e Map w a -\u003e RVar [a]",
          "source": "src/Data-Random-Shuffle-Weighted.html#weightedSampleCDF",
          "type": "function"
        },
        "index": {
          "description": "Randomly draw elements from CDF map according to its weights",
          "hierarchy": "Data Random Shuffle Weighted",
          "module": "Data.Random.Shuffle.Weighted",
          "name": "weightedSampleCDF",
          "normalized": "Int-\u003eMap a b-\u003eRVar[b]",
          "package": "random-extras",
          "partial": "Sample CDF",
          "signature": "Int-\u003eMap w a-\u003eRVar[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Shuffle-Weighted.html#v:weightedSampleCDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandomly shuffle a weighted list according to its weights.\n\u003c/p\u003e",
          "module": "Data.Random.Shuffle.Weighted",
          "name": "weightedShuffle",
          "package": "random-extras",
          "signature": "[(w, a)] -\u003e RVar [a]",
          "source": "src/Data-Random-Shuffle-Weighted.html#weightedShuffle",
          "type": "function"
        },
        "index": {
          "description": "Randomly shuffle weighted list according to its weights",
          "hierarchy": "Data Random Shuffle Weighted",
          "module": "Data.Random.Shuffle.Weighted",
          "name": "weightedShuffle",
          "normalized": "[(a,b)]-\u003eRVar[b]",
          "package": "random-extras",
          "partial": "Shuffle",
          "signature": "[(w,a)]-\u003eRVar[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Shuffle-Weighted.html#v:weightedShuffle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandomly shuffle a CDF map according to its weights.\n\u003c/p\u003e",
          "module": "Data.Random.Shuffle.Weighted",
          "name": "weightedShuffleCDF",
          "package": "random-extras",
          "signature": "Map w a -\u003e RVar [a]",
          "source": "src/Data-Random-Shuffle-Weighted.html#weightedShuffleCDF",
          "type": "function"
        },
        "index": {
          "description": "Randomly shuffle CDF map according to its weights",
          "hierarchy": "Data Random Shuffle Weighted",
          "module": "Data.Random.Shuffle.Weighted",
          "name": "weightedShuffleCDF",
          "normalized": "Map a b-\u003eRVar[b]",
          "package": "random-extras",
          "partial": "Shuffle CDF",
          "signature": "Map w a-\u003eRVar[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-extras/docs/Data-Random-Shuffle-Weighted.html#v:weightedShuffleCDF"
      }
    }
  ]
]