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
        "word": "xml-enumerator-combinators"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Enumerator.Combinators.General",
          "name": "General",
          "package": "xml-enumerator-combinators",
          "source": "src/Text-XML-Enumerator-Combinators-General.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML Enumerator Combinators General",
          "module": "Text.XML.Enumerator.Combinators.General",
          "name": "General",
          "package": "xml-enumerator-combinators",
          "partial": "General",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-enumerator-combinators/docs/Text-XML-Enumerator-Combinators-General.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003echoose\u003c/code\u003e, but also returns the list of elements that were \u003cem\u003enot\u003c/em\u003e chosen.\n\u003c/p\u003e",
          "module": "Text.XML.Enumerator.Combinators.General",
          "name": "chooseSplit",
          "package": "xml-enumerator-combinators",
          "signature": "(a -\u003e m (Maybe b)) -\u003e [a] -\u003e m (Maybe (b, [a]))",
          "source": "src/Text-XML-Enumerator-Combinators-General.html#chooseSplit",
          "type": "function"
        },
        "index": {
          "description": "Like choose but also returns the list of elements that were not chosen",
          "hierarchy": "Text XML Enumerator Combinators General",
          "module": "Text.XML.Enumerator.Combinators.General",
          "name": "chooseSplit",
          "normalized": "(a-\u003eb(Maybe c))-\u003e[a]-\u003eb(Maybe(c,[a]))",
          "package": "xml-enumerator-combinators",
          "partial": "Split",
          "signature": "(a-\u003em(Maybe b))-\u003e[a]-\u003em(Maybe(b,[a]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-enumerator-combinators/docs/Text-XML-Enumerator-Combinators-General.html#v:chooseSplit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePermute all parsers until none return \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.XML.Enumerator.Combinators.General",
          "name": "permute",
          "package": "xml-enumerator-combinators",
          "signature": "(a -\u003e m (Maybe b)) -\u003e [a] -\u003e m (Maybe [b])",
          "source": "src/Text-XML-Enumerator-Combinators-General.html#permute",
          "type": "function"
        },
        "index": {
          "description": "Permute all parsers until none return Just",
          "hierarchy": "Text XML Enumerator Combinators General",
          "module": "Text.XML.Enumerator.Combinators.General",
          "name": "permute",
          "normalized": "(a-\u003eb(Maybe c))-\u003e[a]-\u003eb(Maybe[c])",
          "package": "xml-enumerator-combinators",
          "signature": "(a-\u003em(Maybe b))-\u003e[a]-\u003em(Maybe[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-enumerator-combinators/docs/Text-XML-Enumerator-Combinators-General.html#v:permute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePermute all parsers until none return \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, but always test some fallback parsers.\n\u003c/p\u003e",
          "module": "Text.XML.Enumerator.Combinators.General",
          "name": "permuteFallback",
          "package": "xml-enumerator-combinators",
          "signature": "m (Maybe [b]) -\u003e (a -\u003e m (Maybe b)) -\u003e [a] -\u003e m (Maybe [b])",
          "source": "src/Text-XML-Enumerator-Combinators-General.html#permuteFallback",
          "type": "function"
        },
        "index": {
          "description": "Permute all parsers until none return Just but always test some fallback parsers",
          "hierarchy": "Text XML Enumerator Combinators General",
          "module": "Text.XML.Enumerator.Combinators.General",
          "name": "permuteFallback",
          "normalized": "a(Maybe[b])-\u003e(c-\u003ea(Maybe b))-\u003e[c]-\u003ea(Maybe[b])",
          "package": "xml-enumerator-combinators",
          "partial": "Fallback",
          "signature": "m(Maybe[b])-\u003e(a-\u003em(Maybe b))-\u003e[a]-\u003em(Maybe[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-enumerator-combinators/docs/Text-XML-Enumerator-Combinators-General.html#v:permuteFallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "Tags",
          "package": "xml-enumerator-combinators",
          "source": "src/Text-XML-Enumerator-Combinators-Tags.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text XML Enumerator Combinators Tags",
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "Tags",
          "package": "xml-enumerator-combinators",
          "partial": "Tags",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xml-enumerator-combinators/docs/Text-XML-Enumerator-Combinators-Tags.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies how often an element may repeat.\n\u003c/p\u003e",
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "Repetition",
          "package": "xml-enumerator-combinators",
          "source": "src/Text-XML-Enumerator-Combinators-Tags.html#Repetition",
          "type": "data"
        },
        "index": {
          "description": "Specifies how often an element may repeat",
          "hierarchy": "Text XML Enumerator Combinators Tags",
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "Repetition",
          "package": "xml-enumerator-combinators",
          "partial": "Repetition",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/xml-enumerator-combinators/docs/Text-XML-Enumerator-Combinators-Tags.html#t:Repetition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "Repeat",
          "package": "xml-enumerator-combinators",
          "signature": "Repeat",
          "source": "src/Text-XML-Enumerator-Combinators-Tags.html#Repetition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Enumerator Combinators Tags",
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "Repeat",
          "package": "xml-enumerator-combinators",
          "partial": "Repeat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-enumerator-combinators/docs/Text-XML-Enumerator-Combinators-Tags.html#v:Repeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement may occur any number of times.\n\u003c/p\u003e",
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "repeatMany",
          "package": "xml-enumerator-combinators",
          "signature": "Repetition",
          "source": "src/Text-XML-Enumerator-Combinators-Tags.html#repeatMany",
          "type": "function"
        },
        "index": {
          "description": "Element may occur any number of times",
          "hierarchy": "Text XML Enumerator Combinators Tags",
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "repeatMany",
          "package": "xml-enumerator-combinators",
          "partial": "Many",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-enumerator-combinators/docs/Text-XML-Enumerator-Combinators-Tags.html#v:repeatMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement may never occur.\n\u003c/p\u003e",
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "repeatNever",
          "package": "xml-enumerator-combinators",
          "signature": "Repetition",
          "source": "src/Text-XML-Enumerator-Combinators-Tags.html#repeatNever",
          "type": "function"
        },
        "index": {
          "description": "Element may never occur",
          "hierarchy": "Text XML Enumerator Combinators Tags",
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "repeatNever",
          "package": "xml-enumerator-combinators",
          "partial": "Never",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-enumerator-combinators/docs/Text-XML-Enumerator-Combinators-Tags.html#v:repeatNever"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement may occur exactly once.\n\u003c/p\u003e",
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "repeatOnce",
          "package": "xml-enumerator-combinators",
          "signature": "Repetition",
          "source": "src/Text-XML-Enumerator-Combinators-Tags.html#repeatOnce",
          "type": "function"
        },
        "index": {
          "description": "Element may occur exactly once",
          "hierarchy": "Text XML Enumerator Combinators Tags",
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "repeatOnce",
          "package": "xml-enumerator-combinators",
          "partial": "Once",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-enumerator-combinators/docs/Text-XML-Enumerator-Combinators-Tags.html#v:repeatOnce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement may occur up to once.\n\u003c/p\u003e",
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "repeatOptional",
          "package": "xml-enumerator-combinators",
          "signature": "Repetition",
          "source": "src/Text-XML-Enumerator-Combinators-Tags.html#repeatOptional",
          "type": "function"
        },
        "index": {
          "description": "Element may occur up to once",
          "hierarchy": "Text XML Enumerator Combinators Tags",
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "repeatOptional",
          "package": "xml-enumerator-combinators",
          "partial": "Optional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-enumerator-combinators/docs/Text-XML-Enumerator-Combinators-Tags.html#v:repeatOptional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement may occur at least once.\n\u003c/p\u003e",
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "repeatSome",
          "package": "xml-enumerator-combinators",
          "signature": "Repetition",
          "source": "src/Text-XML-Enumerator-Combinators-Tags.html#repeatSome",
          "type": "function"
        },
        "index": {
          "description": "Element may occur at least once",
          "hierarchy": "Text XML Enumerator Combinators Tags",
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "repeatSome",
          "package": "xml-enumerator-combinators",
          "partial": "Some",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-enumerator-combinators/docs/Text-XML-Enumerator-Combinators-Tags.html#v:repeatSome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "repetitionAllowsMore",
          "package": "xml-enumerator-combinators",
          "signature": "Bool",
          "source": "src/Text-XML-Enumerator-Combinators-Tags.html#Repetition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Enumerator Combinators Tags",
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "repetitionAllowsMore",
          "package": "xml-enumerator-combinators",
          "partial": "Allows More",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-enumerator-combinators/docs/Text-XML-Enumerator-Combinators-Tags.html#v:repetitionAllowsMore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "repetitionConsume",
          "package": "xml-enumerator-combinators",
          "signature": "Repetition",
          "source": "src/Text-XML-Enumerator-Combinators-Tags.html#Repetition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Enumerator Combinators Tags",
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "repetitionConsume",
          "package": "xml-enumerator-combinators",
          "partial": "Consume",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-enumerator-combinators/docs/Text-XML-Enumerator-Combinators-Tags.html#v:repetitionConsume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "repetitionNeedsMore",
          "package": "xml-enumerator-combinators",
          "signature": "Bool",
          "source": "src/Text-XML-Enumerator-Combinators-Tags.html#Repetition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML Enumerator Combinators Tags",
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "repetitionNeedsMore",
          "package": "xml-enumerator-combinators",
          "partial": "Needs More",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-enumerator-combinators/docs/Text-XML-Enumerator-Combinators-Tags.html#v:repetitionNeedsMore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatefully and efficiently parse a list of tags.\n\u003c/p\u003e\u003cp\u003eThe first parameter is a function that, given state and an element name, returns\n either \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, to indicate that the element is invalid, or a pair of attribute\n and element content parsers in \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003eThe second parameter is a function that, given the current state, returns a\n \u003ca\u003efallback\u003c/a\u003e parser to be executed when no valid element has been found.\n\u003c/p\u003e\u003cp\u003eThe third parameter is the initial state.\n\u003c/p\u003e\u003cp\u003eThis function updates the state as it goes along, but it also accumulates a list of\n elements as they occur.\n\u003c/p\u003e",
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "tags",
          "package": "xml-enumerator-combinators",
          "signature": "(a -\u003e Name -\u003e Maybe (AttrParser b, b -\u003e Iteratee Event m (Maybe (a, Maybe c)))) -\u003e (a -\u003e Iteratee Event m (Maybe (a, Maybe c))) -\u003e a -\u003e Iteratee Event m (a, [c])",
          "source": "src/Text-XML-Enumerator-Combinators-Tags.html#tags",
          "type": "function"
        },
        "index": {
          "description": "Statefully and efficiently parse list of tags The first parameter is function that given state and an element name returns either Nothing to indicate that the element is invalid or pair of attribute and element content parsers in Just The second parameter is function that given the current state returns fallback parser to be executed when no valid element has been found The third parameter is the initial state This function updates the state as it goes along but it also accumulates list of elements as they occur",
          "hierarchy": "Text XML Enumerator Combinators Tags",
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "tags",
          "normalized": "(a-\u003eName-\u003eMaybe(AttrParser b,b-\u003eIteratee Event c(Maybe(a,Maybe d))))-\u003e(a-\u003eIteratee Event c(Maybe(a,Maybe d)))-\u003ea-\u003eIteratee Event c(a,[d])",
          "package": "xml-enumerator-combinators",
          "signature": "(a-\u003eName-\u003eMaybe(AttrParser b,b-\u003eIteratee Event m(Maybe(a,Maybe c))))-\u003e(a-\u003eIteratee Event m(Maybe(a,Maybe c)))-\u003ea-\u003eIteratee Event m(a,[c])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-enumerator-combinators/docs/Text-XML-Enumerator-Combinators-Tags.html#v:tags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a permutation of tags.\n\u003c/p\u003e\u003cp\u003eThe first parameter is a function to preprocess Names for equality testing, because\n sometimes XML documents contain inconsistent naming. This allows the user to deal\n with it.\n\u003c/p\u003e\u003cp\u003eThe second parameter is a map of tags to attribute and element content parsers.\n\u003c/p\u003e\u003cp\u003eThe third parameter is a fallback parser. The outer Maybe indicates whether it succeeds,\n and the inner Maybe whether an element should be added to the output list.\n\u003c/p\u003e\u003cp\u003eThis function accumulates a list of elements for each step that produces one.\n\u003c/p\u003e",
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "tagsPermute",
          "package": "xml-enumerator-combinators",
          "signature": "(Name -\u003e k) -\u003e Map k (AttrParser a, a -\u003e Iteratee Event m (Maybe b)) -\u003e Iteratee Event m (Maybe (Maybe b)) -\u003e Iteratee Event m (Maybe [b])",
          "source": "src/Text-XML-Enumerator-Combinators-Tags.html#tagsPermute",
          "type": "function"
        },
        "index": {
          "description": "Parse permutation of tags The first parameter is function to preprocess Names for equality testing because sometimes XML documents contain inconsistent naming This allows the user to deal with it The second parameter is map of tags to attribute and element content parsers The third parameter is fallback parser The outer Maybe indicates whether it succeeds and the inner Maybe whether an element should be added to the output list This function accumulates list of elements for each step that produces one",
          "hierarchy": "Text XML Enumerator Combinators Tags",
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "tagsPermute",
          "normalized": "(Name-\u003ea)-\u003eMap a(AttrParser b,b-\u003eIteratee Event c(Maybe d))-\u003eIteratee Event c(Maybe(Maybe d))-\u003eIteratee Event c(Maybe[d])",
          "package": "xml-enumerator-combinators",
          "partial": "Permute",
          "signature": "(Name-\u003ek)-\u003eMap k(AttrParser a,a-\u003eIteratee Event m(Maybe b))-\u003eIteratee Event m(Maybe(Maybe b))-\u003eIteratee Event m(Maybe[b])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-enumerator-combinators/docs/Text-XML-Enumerator-Combinators-Tags.html#v:tagsPermute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a permutation of tags, with some repeating elements.\n\u003c/p\u003e\u003cp\u003eThe first parameter is a function to preprocess Names for equality testing, because\n sometimes XML documents contain inconsistent naming. This allows the user to deal\n with it.\n\u003c/p\u003e\u003cp\u003eThe second parameter is a map of tags to attribute and element content parsers.\n It also specifies how often elements may repeat.\n\u003c/p\u003e\u003cp\u003eThe third parameter is a fallback parser. The outer Maybe indicates whether it succeeds,\n and the inner Maybe whether an element should be added to the output list.\n\u003c/p\u003e\u003cp\u003eThis function accumulates a list of elements for each step that produces one.\n\u003c/p\u003e",
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "tagsPermuteRepetition",
          "package": "xml-enumerator-combinators",
          "signature": "(Name -\u003e k) -\u003e Map k (Repetition, AttrParser b, b -\u003e Iteratee Event m (Maybe t)) -\u003e Iteratee Event m (Maybe (Maybe (k, t))) -\u003e Iteratee Event m (Maybe [(k, t)])",
          "source": "src/Text-XML-Enumerator-Combinators-Tags.html#tagsPermuteRepetition",
          "type": "function"
        },
        "index": {
          "description": "Parse permutation of tags with some repeating elements The first parameter is function to preprocess Names for equality testing because sometimes XML documents contain inconsistent naming This allows the user to deal with it The second parameter is map of tags to attribute and element content parsers It also specifies how often elements may repeat The third parameter is fallback parser The outer Maybe indicates whether it succeeds and the inner Maybe whether an element should be added to the output list This function accumulates list of elements for each step that produces one",
          "hierarchy": "Text XML Enumerator Combinators Tags",
          "module": "Text.XML.Enumerator.Combinators.Tags",
          "name": "tagsPermuteRepetition",
          "normalized": "(Name-\u003ea)-\u003eMap a(Repetition,AttrParser b,b-\u003eIteratee Event c(Maybe d))-\u003eIteratee Event c(Maybe(Maybe(a,d)))-\u003eIteratee Event c(Maybe[(a,d)])",
          "package": "xml-enumerator-combinators",
          "partial": "Permute Repetition",
          "signature": "(Name-\u003ek)-\u003eMap k(Repetition,AttrParser b,b-\u003eIteratee Event m(Maybe t))-\u003eIteratee Event m(Maybe(Maybe(k,t)))-\u003eIteratee Event m(Maybe[(k,t)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xml-enumerator-combinators/docs/Text-XML-Enumerator-Combinators-Tags.html#v:tagsPermuteRepetition"
      }
    }
  ]
]