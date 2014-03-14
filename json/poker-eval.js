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
        "word": "poker-eval"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImporting this module gives you access to the inner workings of Data.Poker.\n Use with care.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Poker.Internal",
          "name": "Internal",
          "package": "poker-eval",
          "source": "src/Data-Poker-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "Importing this module gives you access to the inner workings of Data.Poker Use with care",
          "hierarchy": "Data Poker Internal",
          "module": "Data.Poker.Internal",
          "name": "Internal",
          "package": "poker-eval",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract representation of a card consisting of a \u003ccode\u003e\u003ca\u003eRank\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eSuit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Poker.Internal",
          "name": "Card",
          "package": "poker-eval",
          "source": "src/Data-Poker-Deck.html#Card",
          "type": "newtype"
        },
        "index": {
          "description": "Abstract representation of card consisting of Rank and Suit",
          "hierarchy": "Data Poker Internal",
          "module": "Data.Poker.Internal",
          "name": "Card",
          "package": "poker-eval",
          "partial": "Card",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker-Internal.html#t:Card"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of cards.\n\u003c/p\u003e",
          "module": "Data.Poker.Internal",
          "name": "CardSet",
          "package": "poker-eval",
          "source": "src/Data-Poker-Deck.html#CardSet",
          "type": "newtype"
        },
        "index": {
          "description": "set of cards",
          "hierarchy": "Data Poker Internal",
          "module": "Data.Poker.Internal",
          "name": "CardSet",
          "package": "poker-eval",
          "partial": "Card Set",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker-Internal.html#t:CardSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIsomorphic to \u003ccode\u003e\u003ca\u003eHandValue\u003c/a\u003e\u003c/code\u003e but stored more efficiently.\n\u003c/p\u003e\u003cp\u003eThis structure has the special property of being bounded and an enum. It is\n   especially useful as an Array index.\n\u003c/p\u003e",
          "module": "Data.Poker.Internal",
          "name": "ConsecutiveHandValue",
          "package": "poker-eval",
          "source": "src/Data-Poker-Deck.html#ConsecutiveHandValue",
          "type": "newtype"
        },
        "index": {
          "description": "Isomorphic to HandValue but stored more efficiently This structure has the special property of being bounded and an enum It is especially useful as an Array index",
          "hierarchy": "Data Poker Internal",
          "module": "Data.Poker.Internal",
          "name": "ConsecutiveHandValue",
          "package": "poker-eval",
          "partial": "Consecutive Hand Value",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker-Internal.html#t:ConsecutiveHandValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIsomorphic to \u003ccode\u003e\u003ca\u003eHandValue\u003c/a\u003e\u003c/code\u003e but computed much more efficiently.\n\u003c/p\u003e\u003cp\u003eIf possible, this is the structure to use.\n\u003c/p\u003e",
          "module": "Data.Poker.Internal",
          "name": "NumericalHandValue",
          "package": "poker-eval",
          "source": "src/Data-Poker-Deck.html#NumericalHandValue",
          "type": "newtype"
        },
        "index": {
          "description": "Isomorphic to HandValue but computed much more efficiently If possible this is the structure to use",
          "hierarchy": "Data Poker Internal",
          "module": "Data.Poker.Internal",
          "name": "NumericalHandValue",
          "package": "poker-eval",
          "partial": "Numerical Hand Value",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker-Internal.html#t:NumericalHandValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker.Internal",
          "name": "StdDeck_CardMask",
          "package": "poker-eval",
          "source": "src/Data-Poker-Definitions.html#StdDeck_CardMask",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Poker Internal",
          "module": "Data.Poker.Internal",
          "name": "StdDeck_CardMask",
          "package": "poker-eval",
          "partial": "Std Deck Card Mask",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker-Internal.html#t:StdDeck_CardMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker.Internal",
          "name": "Card",
          "package": "poker-eval",
          "signature": "Card CInt",
          "source": "src/Data-Poker-Deck.html#Card",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker Internal",
          "module": "Data.Poker.Internal",
          "name": "Card",
          "package": "poker-eval",
          "partial": "Card",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker-Internal.html#v:Card"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker.Internal",
          "name": "CardSet",
          "package": "poker-eval",
          "signature": "CardSet",
          "source": "src/Data-Poker-Deck.html#CardSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker Internal",
          "module": "Data.Poker.Internal",
          "name": "CardSet",
          "package": "poker-eval",
          "partial": "Card Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker-Internal.html#v:CardSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker.Internal",
          "name": "ConsecutiveHandValue",
          "package": "poker-eval",
          "signature": "ConsecutiveHandValue",
          "source": "src/Data-Poker-Deck.html#ConsecutiveHandValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker Internal",
          "module": "Data.Poker.Internal",
          "name": "ConsecutiveHandValue",
          "package": "poker-eval",
          "partial": "Consecutive Hand Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker-Internal.html#v:ConsecutiveHandValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker.Internal",
          "name": "NumericalHandValue",
          "package": "poker-eval",
          "signature": "NumericalHandValue",
          "source": "src/Data-Poker-Deck.html#NumericalHandValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker Internal",
          "module": "Data.Poker.Internal",
          "name": "NumericalHandValue",
          "package": "poker-eval",
          "partial": "Numerical Hand Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker-Internal.html#v:NumericalHandValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker.Internal",
          "name": "allHandValues",
          "package": "poker-eval",
          "signature": "[HandValue]",
          "source": "src/Data-Poker-Brute.html#allHandValues",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker Internal",
          "module": "Data.Poker.Internal",
          "name": "allHandValues",
          "normalized": "[HandValue]",
          "package": "poker-eval",
          "partial": "Hand Values",
          "signature": "[HandValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker-Internal.html#v:allHandValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker.Internal",
          "name": "distHandValue",
          "package": "poker-eval",
          "signature": "CardSet -\u003e UArray ConsecutiveHandValue Int",
          "source": "src/Data-Poker-Evaluate.html#distHandValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker Internal",
          "module": "Data.Poker.Internal",
          "name": "distHandValue",
          "normalized": "CardSet-\u003eUArray ConsecutiveHandValue Int",
          "package": "poker-eval",
          "partial": "Hand Value",
          "signature": "CardSet-\u003eUArray ConsecutiveHandValue Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker-Internal.html#v:distHandValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker.Internal",
          "name": "unConsecutiveHandValue",
          "package": "poker-eval",
          "signature": "Int",
          "source": "src/Data-Poker-Deck.html#ConsecutiveHandValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker Internal",
          "module": "Data.Poker.Internal",
          "name": "unConsecutiveHandValue",
          "package": "poker-eval",
          "partial": "Consecutive Hand Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker-Internal.html#v:unConsecutiveHandValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker.Internal",
          "name": "unNumericalHandValue",
          "package": "poker-eval",
          "signature": "Word",
          "source": "src/Data-Poker-Deck.html#NumericalHandValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker Internal",
          "module": "Data.Poker.Internal",
          "name": "unNumericalHandValue",
          "package": "poker-eval",
          "partial": "Numerical Hand Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker-Internal.html#v:unNumericalHandValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker.Internal",
          "name": "unmask",
          "package": "poker-eval",
          "signature": "StdDeck_CardMask",
          "source": "src/Data-Poker-Deck.html#CardSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker Internal",
          "module": "Data.Poker.Internal",
          "name": "unmask",
          "package": "poker-eval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker-Internal.html#v:unmask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "Poker",
          "package": "poker-eval",
          "source": "src/Data-Poker.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "Poker",
          "package": "poker-eval",
          "partial": "Poker",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract representation of a card consisting of a \u003ccode\u003e\u003ca\u003eRank\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eSuit\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "Card",
          "package": "poker-eval",
          "source": "src/Data-Poker-Deck.html#Card",
          "type": "data"
        },
        "index": {
          "description": "Abstract representation of card consisting of Rank and Suit",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "Card",
          "package": "poker-eval",
          "partial": "Card",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#t:Card"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of cards.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "CardSet",
          "package": "poker-eval",
          "source": "src/Data-Poker-Deck.html#CardSet",
          "type": "data"
        },
        "index": {
          "description": "set of cards",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "CardSet",
          "package": "poker-eval",
          "partial": "Card Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#t:CardSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIsomorphic to \u003ccode\u003e\u003ca\u003eHandValue\u003c/a\u003e\u003c/code\u003e but stored more efficiently.\n\u003c/p\u003e\u003cp\u003eThis structure has the special property of being bounded and an enum. It is\n   especially useful as an Array index.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "ConsecutiveHandValue",
          "package": "poker-eval",
          "source": "src/Data-Poker-Deck.html#ConsecutiveHandValue",
          "type": "data"
        },
        "index": {
          "description": "Isomorphic to HandValue but stored more efficiently This structure has the special property of being bounded and an enum It is especially useful as an Array index",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "ConsecutiveHandValue",
          "package": "poker-eval",
          "partial": "Consecutive Hand Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#t:ConsecutiveHandValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis structure represents the value of a poker hand as a high-level ADT.\n\u003c/p\u003e\u003cp\u003eThe following must be true for a HandValue to be valid:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e All kickers must be in decending order.\n\u003c/li\u003e\u003cli\u003e No \u003ccode\u003e\u003ca\u003eRank\u003c/a\u003e\u003c/code\u003e may not occur twice.\n\u003c/li\u003e\u003cli\u003e The kickers may not construct higher-value hands.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example, \u003ccode\u003e\u003ccode\u003e\u003ca\u003eNoPair\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eSix\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFive\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFour\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eThree\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eTwo\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n       is not a valid HandValue.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "HandValue",
          "package": "poker-eval",
          "source": "src/Data-Poker-Deck.html#HandValue",
          "type": "data"
        },
        "index": {
          "description": "This structure represents the value of poker hand as high-level ADT The following must be true for HandValue to be valid All kickers must be in decending order No Rank may not occur twice The kickers may not construct higher-value hands For example NoPair Six Five Four Three Two is not valid HandValue",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "HandValue",
          "package": "poker-eval",
          "partial": "Hand Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#t:HandValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "Kicker",
          "package": "poker-eval",
          "source": "src/Data-Poker-Deck.html#Kicker",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "Kicker",
          "package": "poker-eval",
          "partial": "Kicker",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#t:Kicker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIsomorphic to \u003ccode\u003e\u003ca\u003eHandValue\u003c/a\u003e\u003c/code\u003e but computed much more efficiently.\n\u003c/p\u003e\u003cp\u003eIf possible, this is the structure to use.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "NumericalHandValue",
          "package": "poker-eval",
          "source": "src/Data-Poker-Deck.html#NumericalHandValue",
          "type": "data"
        },
        "index": {
          "description": "Isomorphic to HandValue but computed much more efficiently If possible this is the structure to use",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "NumericalHandValue",
          "package": "poker-eval",
          "partial": "Numerical Hand Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#t:NumericalHandValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "Rank",
          "package": "poker-eval",
          "source": "src/Data-Poker-Deck.html#Rank",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "Rank",
          "package": "poker-eval",
          "partial": "Rank",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#t:Rank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "Suit",
          "package": "poker-eval",
          "source": "src/Data-Poker-Deck.html#Suit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "Suit",
          "package": "poker-eval",
          "partial": "Suit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#t:Suit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "Ace",
          "package": "poker-eval",
          "signature": "Ace",
          "source": "src/Data-Poker-Deck.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "Ace",
          "package": "poker-eval",
          "partial": "Ace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:Ace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "Clubs",
          "package": "poker-eval",
          "signature": "Clubs",
          "source": "src/Data-Poker-Deck.html#Suit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "Clubs",
          "package": "poker-eval",
          "partial": "Clubs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:Clubs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "Diamonds",
          "package": "poker-eval",
          "signature": "Diamonds",
          "source": "src/Data-Poker-Deck.html#Suit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "Diamonds",
          "package": "poker-eval",
          "partial": "Diamonds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:Diamonds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "Eight",
          "package": "poker-eval",
          "signature": "Eight",
          "source": "src/Data-Poker-Deck.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "Eight",
          "package": "poker-eval",
          "partial": "Eight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:Eight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "Five",
          "package": "poker-eval",
          "signature": "Five",
          "source": "src/Data-Poker-Deck.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "Five",
          "package": "poker-eval",
          "partial": "Five",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:Five"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "Flush",
          "package": "poker-eval",
          "signature": "Flush Kicker Kicker Kicker Kicker Kicker",
          "source": "src/Data-Poker-Deck.html#HandValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "Flush",
          "package": "poker-eval",
          "partial": "Flush",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:Flush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "Four",
          "package": "poker-eval",
          "signature": "Four",
          "source": "src/Data-Poker-Deck.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "Four",
          "package": "poker-eval",
          "partial": "Four",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:Four"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "FourOfAKind",
          "package": "poker-eval",
          "signature": "FourOfAKind Rank Kicker",
          "source": "src/Data-Poker-Deck.html#HandValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "FourOfAKind",
          "package": "poker-eval",
          "partial": "Four Of AKind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:FourOfAKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "FullHouse",
          "package": "poker-eval",
          "signature": "FullHouse Rank Rank",
          "source": "src/Data-Poker-Deck.html#HandValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "FullHouse",
          "package": "poker-eval",
          "partial": "Full House",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:FullHouse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "Hearts",
          "package": "poker-eval",
          "signature": "Hearts",
          "source": "src/Data-Poker-Deck.html#Suit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "Hearts",
          "package": "poker-eval",
          "partial": "Hearts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:Hearts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "Jack",
          "package": "poker-eval",
          "signature": "Jack",
          "source": "src/Data-Poker-Deck.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "Jack",
          "package": "poker-eval",
          "partial": "Jack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:Jack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "King",
          "package": "poker-eval",
          "signature": "King",
          "source": "src/Data-Poker-Deck.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "King",
          "package": "poker-eval",
          "partial": "King",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:King"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "Nine",
          "package": "poker-eval",
          "signature": "Nine",
          "source": "src/Data-Poker-Deck.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "Nine",
          "package": "poker-eval",
          "partial": "Nine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:Nine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "NoPair",
          "package": "poker-eval",
          "signature": "NoPair Kicker Kicker Kicker Kicker Kicker",
          "source": "src/Data-Poker-Deck.html#HandValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "NoPair",
          "package": "poker-eval",
          "partial": "No Pair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:NoPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "OnePair",
          "package": "poker-eval",
          "signature": "OnePair Rank Kicker Kicker Kicker",
          "source": "src/Data-Poker-Deck.html#HandValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "OnePair",
          "package": "poker-eval",
          "partial": "One Pair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:OnePair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "Queen",
          "package": "poker-eval",
          "signature": "Queen",
          "source": "src/Data-Poker-Deck.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "Queen",
          "package": "poker-eval",
          "partial": "Queen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:Queen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "Seven",
          "package": "poker-eval",
          "signature": "Seven",
          "source": "src/Data-Poker-Deck.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "Seven",
          "package": "poker-eval",
          "partial": "Seven",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:Seven"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "Six",
          "package": "poker-eval",
          "signature": "Six",
          "source": "src/Data-Poker-Deck.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "Six",
          "package": "poker-eval",
          "partial": "Six",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:Six"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "Spades",
          "package": "poker-eval",
          "signature": "Spades",
          "source": "src/Data-Poker-Deck.html#Suit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "Spades",
          "package": "poker-eval",
          "partial": "Spades",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:Spades"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "Straight",
          "package": "poker-eval",
          "signature": "Straight Rank",
          "source": "src/Data-Poker-Deck.html#HandValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "Straight",
          "package": "poker-eval",
          "partial": "Straight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:Straight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "StraightFlush",
          "package": "poker-eval",
          "signature": "StraightFlush Rank",
          "source": "src/Data-Poker-Deck.html#HandValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "StraightFlush",
          "package": "poker-eval",
          "partial": "Straight Flush",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:StraightFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "Ten",
          "package": "poker-eval",
          "signature": "Ten",
          "source": "src/Data-Poker-Deck.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "Ten",
          "package": "poker-eval",
          "partial": "Ten",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:Ten"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "Three",
          "package": "poker-eval",
          "signature": "Three",
          "source": "src/Data-Poker-Deck.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "Three",
          "package": "poker-eval",
          "partial": "Three",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:Three"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "ThreeOfAKind",
          "package": "poker-eval",
          "signature": "ThreeOfAKind Rank Kicker Kicker",
          "source": "src/Data-Poker-Deck.html#HandValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "ThreeOfAKind",
          "package": "poker-eval",
          "partial": "Three Of AKind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:ThreeOfAKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "Two",
          "package": "poker-eval",
          "signature": "Two",
          "source": "src/Data-Poker-Deck.html#Rank",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "Two",
          "package": "poker-eval",
          "partial": "Two",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:Two"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Poker",
          "name": "TwoPair",
          "package": "poker-eval",
          "signature": "TwoPair Rank Rank Kicker",
          "source": "src/Data-Poker-Deck.html#HandValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "TwoPair",
          "package": "poker-eval",
          "partial": "Two Pair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:TwoPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInspect the rank of a card.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "cardRank",
          "package": "poker-eval",
          "signature": "Card -\u003e Rank",
          "source": "src/Data-Poker-Deck.html#cardRank",
          "type": "function"
        },
        "index": {
          "description": "Inspect the rank of card",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "cardRank",
          "normalized": "Card-\u003eRank",
          "package": "poker-eval",
          "partial": "Rank",
          "signature": "Card-\u003eRank",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:cardRank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInspect the suit of a card.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "cardSuit",
          "package": "poker-eval",
          "signature": "Card -\u003e Suit",
          "source": "src/Data-Poker-Deck.html#cardSuit",
          "type": "function"
        },
        "index": {
          "description": "Inspect the suit of card",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "cardSuit",
          "normalized": "Card-\u003eSuit",
          "package": "poker-eval",
          "partial": "Suit",
          "signature": "Card-\u003eSuit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:cardSuit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Count the number of cards with a specific \u003ccode\u003e\u003ca\u003eRank\u003c/a\u003e\u003c/code\u003e in a set.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "countRank",
          "package": "poker-eval",
          "signature": "CardSet -\u003e Rank -\u003e Int",
          "source": "src/Data-Poker-Deck.html#countRank",
          "type": "function"
        },
        "index": {
          "description": "Count the number of cards with specific Rank in set",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "countRank",
          "normalized": "CardSet-\u003eRank-\u003eInt",
          "package": "poker-eval",
          "partial": "Rank",
          "signature": "CardSet-\u003eRank-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:countRank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Count the number of cards with a specific \u003ccode\u003e\u003ca\u003eSuit\u003c/a\u003e\u003c/code\u003e in a set.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "countSuit",
          "package": "poker-eval",
          "signature": "CardSet -\u003e Suit -\u003e Int",
          "source": "src/Data-Poker-Deck.html#countSuit",
          "type": "function"
        },
        "index": {
          "description": "Count the number of cards with specific Suit in set",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "countSuit",
          "normalized": "CardSet-\u003eSuit-\u003eInt",
          "package": "poker-eval",
          "partial": "Suit",
          "signature": "CardSet-\u003eSuit-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:countSuit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). The empty set.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "empty",
          "package": "poker-eval",
          "signature": "CardSet",
          "source": "src/Data-Poker-Deck.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty set",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "empty",
          "package": "poker-eval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a set of dead cards, enumerate over all possible selections of five cards.\n   The generated card sets do not contain the dead cards.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "enumerateFiveCards",
          "package": "poker-eval",
          "signature": "CardSet -\u003e (CardSet -\u003e m ()) -\u003e m ()",
          "source": "src/Data-Poker-Enumerate.html#enumerateFiveCards",
          "type": "function"
        },
        "index": {
          "description": "Given set of dead cards enumerate over all possible selections of five cards The generated card sets do not contain the dead cards",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "enumerateFiveCards",
          "normalized": "CardSet-\u003e(CardSet-\u003ea())-\u003ea()",
          "package": "poker-eval",
          "partial": "Five Cards",
          "signature": "CardSet-\u003e(CardSet-\u003em())-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:enumerateFiveCards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict left-fold over all 5 card combinations excluding the dead cards.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "foldlFiveCards",
          "package": "poker-eval",
          "signature": "(CardSet -\u003e a -\u003e a)-\u003e a-\u003e CardSet-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Strict left-fold over all card combinations excluding the dead cards",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "foldlFiveCards",
          "normalized": "(CardSet-\u003ea-\u003ea)-\u003ea-\u003eCardSet-\u003ea",
          "package": "poker-eval",
          "partial": "Five Cards",
          "signature": "(CardSet-\u003ea-\u003ea)-\u003ea-\u003eCardSet-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:foldlFiveCards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict left-fold over all 4 card combinations excluding the dead cards.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "foldlFourCards",
          "package": "poker-eval",
          "signature": "(CardSet -\u003e a -\u003e a)-\u003e a-\u003e CardSet-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Strict left-fold over all card combinations excluding the dead cards",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "foldlFourCards",
          "normalized": "(CardSet-\u003ea-\u003ea)-\u003ea-\u003eCardSet-\u003ea",
          "package": "poker-eval",
          "partial": "Four Cards",
          "signature": "(CardSet-\u003ea-\u003ea)-\u003ea-\u003eCardSet-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:foldlFourCards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict left-fold over all 1 card combinations excluding the dead cards.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "foldlOneCard",
          "package": "poker-eval",
          "signature": "(CardSet -\u003e a -\u003e a)-\u003e a-\u003e CardSet-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Strict left-fold over all card combinations excluding the dead cards",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "foldlOneCard",
          "normalized": "(CardSet-\u003ea-\u003ea)-\u003ea-\u003eCardSet-\u003ea",
          "package": "poker-eval",
          "partial": "One Card",
          "signature": "(CardSet-\u003ea-\u003ea)-\u003ea-\u003eCardSet-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:foldlOneCard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict left-fold over all 7 card combinations excluding the dead cards.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "foldlSevenCards",
          "package": "poker-eval",
          "signature": "(CardSet -\u003e a -\u003e a)-\u003e a-\u003e CardSet-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Strict left-fold over all card combinations excluding the dead cards",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "foldlSevenCards",
          "normalized": "(CardSet-\u003ea-\u003ea)-\u003ea-\u003eCardSet-\u003ea",
          "package": "poker-eval",
          "partial": "Seven Cards",
          "signature": "(CardSet-\u003ea-\u003ea)-\u003ea-\u003eCardSet-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:foldlSevenCards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict left-fold over all 3 card combinations excluding the dead cards.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "foldlThreeCards",
          "package": "poker-eval",
          "signature": "(CardSet -\u003e a -\u003e a)-\u003e a-\u003e CardSet-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Strict left-fold over all card combinations excluding the dead cards",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "foldlThreeCards",
          "normalized": "(CardSet-\u003ea-\u003ea)-\u003ea-\u003eCardSet-\u003ea",
          "package": "poker-eval",
          "partial": "Three Cards",
          "signature": "(CardSet-\u003ea-\u003ea)-\u003ea-\u003eCardSet-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:foldlThreeCards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrict left-fold over all 2 card combinations excluding the dead cards.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "foldlTwoCards",
          "package": "poker-eval",
          "signature": "(CardSet -\u003e a -\u003e a)-\u003e a-\u003e CardSet-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Strict left-fold over all card combinations excluding the dead cards",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "foldlTwoCards",
          "normalized": "(CardSet-\u003ea-\u003ea)-\u003ea-\u003eCardSet-\u003ea",
          "package": "poker-eval",
          "partial": "Two Cards",
          "signature": "(CardSet-\u003ea-\u003ea)-\u003ea-\u003eCardSet-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:foldlTwoCards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Create a set from a list of cards.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "fromList",
          "package": "poker-eval",
          "signature": "[Card] -\u003e CardSet",
          "source": "src/Data-Poker-Deck.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Create set from list of cards",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "fromList",
          "normalized": "[Card]-\u003eCardSet",
          "package": "poker-eval",
          "partial": "List",
          "signature": "[Card]-\u003eCardSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the strongest possible hand using the given cards.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "handValue",
          "package": "poker-eval",
          "signature": "CardSet-\u003e HandValue",
          "type": "function"
        },
        "index": {
          "description": "Find the strongest possible hand using the given cards",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "handValue",
          "normalized": "CardSet-\u003eHandValue",
          "package": "poker-eval",
          "partial": "Value",
          "signature": "CardSet-\u003eHandValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:handValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the strongest possible hand using the given cards. This function is\n   significantly faster than \u003ccode\u003e\u003ca\u003ehandValue\u003c/a\u003e\u003c/code\u003e if the size of the card set\n   is constant.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "handValue_n",
          "package": "poker-eval",
          "signature": "Int-\u003e CardSet-\u003e HandValue",
          "type": "function"
        },
        "index": {
          "description": "Find the strongest possible hand using the given cards This function is significantly faster than handValue if the size of the card set is constant",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "handValue_n",
          "normalized": "Int-\u003eCardSet-\u003eHandValue",
          "package": "poker-eval",
          "partial": "Value",
          "signature": "Int-\u003eCardSet-\u003eHandValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:handValue_n"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). The intersection of two sets.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "intersection",
          "package": "poker-eval",
          "signature": "CardSet -\u003e CardSet -\u003e CardSet",
          "source": "src/Data-Poker-Deck.html#intersection",
          "type": "function"
        },
        "index": {
          "description": "The intersection of two sets",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "intersection",
          "normalized": "CardSet-\u003eCardSet-\u003eCardSet",
          "package": "poker-eval",
          "signature": "CardSet-\u003eCardSet-\u003eCardSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Find the inverse set such that \u003ccode\u003eset \u003ccode\u003e\u003ca\u003eintersection\u003c/a\u003e\u003c/code\u003e inverse = empty\u003c/code\u003e and\n   \u003ccode\u003eset \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e inverse set = fromList [minBound ..]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "inverse",
          "package": "poker-eval",
          "signature": "CardSet -\u003e CardSet",
          "source": "src/Data-Poker-Deck.html#inverse",
          "type": "function"
        },
        "index": {
          "description": "Find the inverse set such that set intersection inverse empty and set union inverse set fromList minBound",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "inverse",
          "normalized": "CardSet-\u003eCardSet",
          "package": "poker-eval",
          "signature": "CardSet-\u003eCardSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:inverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Is this the empty set?\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "isEmpty",
          "package": "poker-eval",
          "signature": "CardSet -\u003e Bool",
          "source": "src/Data-Poker-Deck.html#isEmpty",
          "type": "function"
        },
        "index": {
          "description": "Is this the empty set",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "isEmpty",
          "normalized": "CardSet-\u003eBool",
          "package": "poker-eval",
          "partial": "Empty",
          "signature": "CardSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue for all Flush hands.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "isFlush",
          "package": "poker-eval",
          "signature": "HandValue -\u003e Bool",
          "source": "src/Data-Poker-Deck.html#isFlush",
          "type": "function"
        },
        "index": {
          "description": "True for all Flush hands",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "isFlush",
          "normalized": "HandValue-\u003eBool",
          "package": "poker-eval",
          "partial": "Flush",
          "signature": "HandValue-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:isFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue for all FourOfAKind hands.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "isFourOfAKind",
          "package": "poker-eval",
          "signature": "HandValue -\u003e Bool",
          "source": "src/Data-Poker-Deck.html#isFourOfAKind",
          "type": "function"
        },
        "index": {
          "description": "True for all FourOfAKind hands",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "isFourOfAKind",
          "normalized": "HandValue-\u003eBool",
          "package": "poker-eval",
          "partial": "Four Of AKind",
          "signature": "HandValue-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:isFourOfAKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue for all FullHouse hands.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "isFullHouse",
          "package": "poker-eval",
          "signature": "HandValue -\u003e Bool",
          "source": "src/Data-Poker-Deck.html#isFullHouse",
          "type": "function"
        },
        "index": {
          "description": "True for all FullHouse hands",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "isFullHouse",
          "normalized": "HandValue-\u003eBool",
          "package": "poker-eval",
          "partial": "Full House",
          "signature": "HandValue-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:isFullHouse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue for all NoPair hands.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "isNoPair",
          "package": "poker-eval",
          "signature": "HandValue -\u003e Bool",
          "source": "src/Data-Poker-Deck.html#isNoPair",
          "type": "function"
        },
        "index": {
          "description": "True for all NoPair hands",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "isNoPair",
          "normalized": "HandValue-\u003eBool",
          "package": "poker-eval",
          "partial": "No Pair",
          "signature": "HandValue-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:isNoPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue for all OnePair hands.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "isOnePair",
          "package": "poker-eval",
          "signature": "HandValue -\u003e Bool",
          "source": "src/Data-Poker-Deck.html#isOnePair",
          "type": "function"
        },
        "index": {
          "description": "True for all OnePair hands",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "isOnePair",
          "normalized": "HandValue-\u003eBool",
          "package": "poker-eval",
          "partial": "One Pair",
          "signature": "HandValue-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:isOnePair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue for all Straight hands.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "isStraight",
          "package": "poker-eval",
          "signature": "HandValue -\u003e Bool",
          "source": "src/Data-Poker-Deck.html#isStraight",
          "type": "function"
        },
        "index": {
          "description": "True for all Straight hands",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "isStraight",
          "normalized": "HandValue-\u003eBool",
          "package": "poker-eval",
          "partial": "Straight",
          "signature": "HandValue-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:isStraight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue for all StraightFlush hands.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "isStraightFlush",
          "package": "poker-eval",
          "signature": "HandValue -\u003e Bool",
          "source": "src/Data-Poker-Deck.html#isStraightFlush",
          "type": "function"
        },
        "index": {
          "description": "True for all StraightFlush hands",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "isStraightFlush",
          "normalized": "HandValue-\u003eBool",
          "package": "poker-eval",
          "partial": "Straight Flush",
          "signature": "HandValue-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:isStraightFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue for all ThreeOfAKind hands.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "isThreeOfAKind",
          "package": "poker-eval",
          "signature": "HandValue -\u003e Bool",
          "source": "src/Data-Poker-Deck.html#isThreeOfAKind",
          "type": "function"
        },
        "index": {
          "description": "True for all ThreeOfAKind hands",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "isThreeOfAKind",
          "normalized": "HandValue-\u003eBool",
          "package": "poker-eval",
          "partial": "Three Of AKind",
          "signature": "HandValue-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:isThreeOfAKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue for all TwoPair hands.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "isTwoPair",
          "package": "poker-eval",
          "signature": "HandValue -\u003e Bool",
          "source": "src/Data-Poker-Deck.html#isTwoPair",
          "type": "function"
        },
        "index": {
          "description": "True for all TwoPair hands",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "isTwoPair",
          "normalized": "HandValue-\u003eBool",
          "package": "poker-eval",
          "partial": "Two Pair",
          "signature": "HandValue-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:isTwoPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Is the card in the set?\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "member",
          "package": "poker-eval",
          "signature": "CardSet -\u003e Card -\u003e Bool",
          "source": "src/Data-Poker-Deck.html#member",
          "type": "function"
        },
        "index": {
          "description": "Is the card in the set",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "member",
          "normalized": "CardSet-\u003eCard-\u003eBool",
          "package": "poker-eval",
          "signature": "CardSet-\u003eCard-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a card with the given rank and suit.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "mkCard",
          "package": "poker-eval",
          "signature": "Rank -\u003e Suit -\u003e Card",
          "source": "src/Data-Poker-Deck.html#mkCard",
          "type": "function"
        },
        "index": {
          "description": "Construct card with the given rank and suit",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "mkCard",
          "normalized": "Rank-\u003eSuit-\u003eCard",
          "package": "poker-eval",
          "partial": "Card",
          "signature": "Rank-\u003eSuit-\u003eCard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:mkCard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the strongest possible hand using the given cards.\n\u003c/p\u003e\u003cp\u003eIt is significantly faster to compute a \u003ccode\u003e\u003ca\u003eNumericalHandValue\u003c/a\u003e\u003c/code\u003e than a\n   \u003ccode\u003e\u003ca\u003eHandValue\u003c/a\u003e\u003c/code\u003e. Use this function instead of \u003ccode\u003e\u003ca\u003ehandValue\u003c/a\u003e\u003c/code\u003e when possible.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "numericalHandValue",
          "package": "poker-eval",
          "signature": "CardSet-\u003e NumericalHandValue",
          "type": "function"
        },
        "index": {
          "description": "Find the strongest possible hand using the given cards It is significantly faster to compute NumericalHandValue than HandValue Use this function instead of handValue when possible",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "numericalHandValue",
          "normalized": "CardSet-\u003eNumericalHandValue",
          "package": "poker-eval",
          "partial": "Hand Value",
          "signature": "CardSet-\u003eNumericalHandValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:numericalHandValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the strongest possible hand using the given cards. This function is\n   significantly faster than \u003ccode\u003e\u003ca\u003enumericalHandValue\u003c/a\u003e\u003c/code\u003e if the size of the card set\n   is constant.\n\u003c/p\u003e\u003cp\u003eIt is significantly faster to compute a \u003ccode\u003e\u003ca\u003eNumericalHandValue\u003c/a\u003e\u003c/code\u003e than a\n   \u003ccode\u003e\u003ca\u003eHandValue\u003c/a\u003e\u003c/code\u003e. Use this function instead of \u003ccode\u003e\u003ca\u003ehandValue_n\u003c/a\u003e\u003c/code\u003e when possible.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "numericalHandValue_n",
          "package": "poker-eval",
          "signature": "Int-\u003e CardSet-\u003e NumericalHandValue",
          "type": "function"
        },
        "index": {
          "description": "Find the strongest possible hand using the given cards This function is significantly faster than numericalHandValue if the size of the card set is constant It is significantly faster to compute NumericalHandValue than HandValue Use this function instead of handValue when possible",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "numericalHandValue_n",
          "normalized": "Int-\u003eCardSet-\u003eNumericalHandValue",
          "package": "poker-eval",
          "partial": "Hand Value",
          "signature": "Int-\u003eCardSet-\u003eNumericalHandValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:numericalHandValue_n"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). Create a singleton set.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "singleton",
          "package": "poker-eval",
          "signature": "Card -\u003e CardSet",
          "source": "src/Data-Poker-Deck.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Create singleton set",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "singleton",
          "normalized": "Card-\u003eCardSet",
          "package": "poker-eval",
          "signature": "Card-\u003eCardSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). The number of cards in the set.\n\u003c/p\u003e\u003cp\u003ePerformance note: Try to avoid using this function in an inner loop.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "size",
          "package": "poker-eval",
          "signature": "CardSet -\u003e Int",
          "source": "src/Data-Poker-Deck.html#size",
          "type": "function"
        },
        "index": {
          "description": "The number of cards in the set Performance note Try to avoid using this function in an inner loop",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "size",
          "normalized": "CardSet-\u003eInt",
          "package": "poker-eval",
          "signature": "CardSet-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(n). Convert the set to a list of cards.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "toList",
          "package": "poker-eval",
          "signature": "CardSet -\u003e [Card]",
          "source": "src/Data-Poker-Deck.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert the set to list of cards",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "toList",
          "normalized": "CardSet-\u003e[Card]",
          "package": "poker-eval",
          "partial": "List",
          "signature": "CardSet-\u003e[Card]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eO(1). The union of two sets.\n\u003c/p\u003e",
          "module": "Data.Poker",
          "name": "union",
          "package": "poker-eval",
          "signature": "CardSet -\u003e CardSet -\u003e CardSet",
          "source": "src/Data-Poker-Deck.html#union",
          "type": "function"
        },
        "index": {
          "description": "The union of two sets",
          "hierarchy": "Data Poker",
          "module": "Data.Poker",
          "name": "union",
          "normalized": "CardSet-\u003eCardSet-\u003eCardSet",
          "package": "poker-eval",
          "signature": "CardSet-\u003eCardSet-\u003eCardSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/poker-eval/docs/Data-Poker.html#v:union"
      }
    }
  ]
]