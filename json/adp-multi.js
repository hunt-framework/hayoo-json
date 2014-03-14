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
        "word": "adp-multi"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDebugging is enabled via the cabal flag \u003cem\u003eDEBUG\u003c/em\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ADP.Debug",
          "name": "Debug",
          "package": "adp-multi",
          "source": "src/ADP-Debug.html",
          "type": "module"
        },
        "index": {
          "description": "Debugging is enabled via the cabal flag DEBUG",
          "hierarchy": "ADP Debug",
          "module": "ADP.Debug",
          "name": "Debug",
          "package": "adp-multi",
          "partial": "Debug",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Debug.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Debug",
          "name": "trace",
          "package": "adp-multi",
          "signature": "String -\u003e a -\u003e a",
          "source": "src/ADP-Debug.html#trace",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Debug",
          "module": "ADP.Debug",
          "name": "trace",
          "normalized": "String-\u003ea-\u003ea",
          "package": "adp-multi",
          "signature": "String-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Debug.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenience module to import everything except a specific\n   rewriting combinator implementation. See \u003ca\u003eADP.Multi.Rewriting.All\u003c/a\u003e\n   for that.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ADP.Multi.All",
          "name": "All",
          "package": "adp-multi",
          "source": "src/ADP-Multi-All.html",
          "type": "module"
        },
        "index": {
          "description": "Convenience module to import everything except specific rewriting combinator implementation See ADP.Multi.Rewriting.All for that",
          "hierarchy": "ADP Multi All",
          "module": "ADP.Multi.All",
          "name": "All",
          "package": "adp-multi",
          "partial": "All",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-All.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParser combinators for use in grammars\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ADP.Multi.Combinators",
          "name": "Combinators",
          "package": "adp-multi",
          "source": "src/ADP-Multi-Combinators.html",
          "type": "module"
        },
        "index": {
          "description": "Parser combinators for use in grammars",
          "hierarchy": "ADP Multi Combinators",
          "module": "ADP.Multi.Combinators",
          "name": "Combinators",
          "package": "adp-multi",
          "partial": "Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Combinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilters are not part of ADP-MCFL, but are sometimes used in RNA folding\nto skip parses where subwords are too long, e.g. restricting loop size\nto 30. It is included here for convenience.\n\u003c/p\u003e",
          "module": "ADP.Multi.Combinators",
          "name": "Filter",
          "package": "adp-multi",
          "source": "src/ADP-Multi-Combinators.html#Filter",
          "type": "type"
        },
        "index": {
          "description": "Filters are not part of ADP-MCFL but are sometimes used in RNA folding to skip parses where subwords are too long e.g restricting loop size to It is included here for convenience",
          "hierarchy": "ADP Multi Combinators",
          "module": "ADP.Multi.Combinators",
          "name": "Filter",
          "package": "adp-multi",
          "partial": "Filter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Combinators.html#t:Filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Combinators",
          "name": "Rewritable",
          "package": "adp-multi",
          "source": "src/ADP-Multi-Combinators.html#Rewritable",
          "type": "class"
        },
        "index": {
          "hierarchy": "ADP Multi Combinators",
          "module": "ADP.Multi.Combinators",
          "name": "Rewritable",
          "package": "adp-multi",
          "partial": "Rewritable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Combinators.html#t:Rewritable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Combinators",
          "name": "(|||)",
          "package": "adp-multi",
          "signature": "RichParser a b -\u003e RichParser a b -\u003e RichParser a b",
          "source": "src/ADP-Multi-Combinators.html#%7C%7C%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi Combinators",
          "module": "ADP.Multi.Combinators",
          "name": "(|||) |||",
          "normalized": "RichParser a b-\u003eRichParser a b-\u003eRichParser a b",
          "package": "adp-multi",
          "signature": "RichParser a b-\u003eRichParser a b-\u003eRichParser a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Combinators.html#v:-124--124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Combinators",
          "name": "(~~~)",
          "package": "adp-multi",
          "signature": "([ParserInfo], [SubwordTree] -\u003e Parser a (b -\u003e c)) -\u003e p -\u003e ([ParserInfo], [SubwordTree] -\u003e Parser a c)",
          "source": "src/ADP-Multi-Combinators.html#~~~",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi Combinators",
          "module": "ADP.Multi.Combinators",
          "name": "(~~~) ~~~",
          "normalized": "([ParserInfo],[SubwordTree]-\u003eParser a(b-\u003ec))-\u003ed-\u003e([ParserInfo],[SubwordTree]-\u003eParser a c)",
          "package": "adp-multi",
          "signature": "([ParserInfo],[SubwordTree]-\u003eParser a(b-\u003ec))-\u003ep-\u003e([ParserInfo],[SubwordTree]-\u003eParser a c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Combinators.html#v:-126--126--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Combinators",
          "name": "(\u003c\u003c\u003c)",
          "package": "adp-multi",
          "signature": "(b -\u003e c) -\u003e p -\u003e ([ParserInfo], [SubwordTree] -\u003e Parser a c)",
          "source": "src/ADP-Multi-Combinators.html#%3C%3C%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi Combinators",
          "module": "ADP.Multi.Combinators",
          "name": "(\u003c\u003c\u003c) \u003c\u003c\u003c",
          "normalized": "(a-\u003eb)-\u003ec-\u003e([ParserInfo],[SubwordTree]-\u003eParser d b)",
          "package": "adp-multi",
          "signature": "(b-\u003ec)-\u003ep-\u003e([ParserInfo],[SubwordTree]-\u003eParser a c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Combinators.html#v:-60--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Combinators",
          "name": "(\u003e\u003e\u003e)",
          "package": "adp-multi",
          "signature": "([ParserInfo], [SubwordTree] -\u003e Parser a b) -\u003e r -\u003e RichParser a b",
          "source": "src/ADP-Multi-Combinators.html#%3E%3E%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "ADP Multi Combinators",
          "module": "ADP.Multi.Combinators",
          "name": "(\u003e\u003e\u003e) \u003e\u003e\u003e",
          "normalized": "([ParserInfo],[SubwordTree]-\u003eParser a b)-\u003ec-\u003eRichParser a b",
          "package": "adp-multi",
          "signature": "([ParserInfo],[SubwordTree]-\u003eParser a b)-\u003er-\u003eRichParser a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Combinators.html#v:-62--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Combinators",
          "name": "(...)",
          "package": "adp-multi",
          "signature": "RichParser a b -\u003e ([b] -\u003e [b]) -\u003e RichParser a b",
          "source": "src/ADP-Multi-Combinators.html#...",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi Combinators",
          "module": "ADP.Multi.Combinators",
          "name": "(...) ...",
          "normalized": "RichParser a b-\u003e([b]-\u003e[b])-\u003eRichParser a b",
          "package": "adp-multi",
          "signature": "RichParser a b-\u003e([b]-\u003e[b])-\u003eRichParser a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Combinators.html#v:..."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Combinators",
          "name": "rewrite",
          "package": "adp-multi",
          "signature": "SubwordConstructionAlgorithm a-\u003e ([ParserInfo], [SubwordTree] -\u003e Parser b c)-\u003e a-\u003e Parser b c",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi Combinators",
          "module": "ADP.Multi.Combinators",
          "name": "rewrite",
          "normalized": "SubwordConstructionAlgorithm a-\u003e([ParserInfo],[SubwordTree]-\u003eParser b c)-\u003ea-\u003eParser b c",
          "package": "adp-multi",
          "signature": "SubwordConstructionAlgorithm a-\u003e([ParserInfo],[SubwordTree]-\u003eParser b c)-\u003ea-\u003eParser b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Combinators.html#v:rewrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Combinators",
          "name": "with",
          "package": "adp-multi",
          "signature": "RichParser a b -\u003e Filter a -\u003e RichParser a b",
          "source": "src/ADP-Multi-Combinators.html#with",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi Combinators",
          "module": "ADP.Multi.Combinators",
          "name": "with",
          "normalized": "RichParser a b-\u003eFilter a-\u003eRichParser a b",
          "package": "adp-multi",
          "signature": "RichParser a b-\u003eFilter a-\u003eRichParser a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Combinators.html#v:with"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplicitly specify yield size of a 1-dim parser.\n\u003c/p\u003e",
          "module": "ADP.Multi.Combinators",
          "name": "yieldSize1",
          "package": "adp-multi",
          "signature": "(Int, Maybe Int) -\u003e RichParser a b -\u003e RichParser a b",
          "source": "src/ADP-Multi-Combinators.html#yieldSize1",
          "type": "function"
        },
        "index": {
          "description": "Explicitly specify yield size of dim parser",
          "hierarchy": "ADP Multi Combinators",
          "module": "ADP.Multi.Combinators",
          "name": "yieldSize1",
          "normalized": "(Int,Maybe Int)-\u003eRichParser a b-\u003eRichParser a b",
          "package": "adp-multi",
          "partial": "Size",
          "signature": "(Int,Maybe Int)-\u003eRichParser a b-\u003eRichParser a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Combinators.html#v:yieldSize1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplicitly specify yield size of a 2-dim parser.\n\u003c/p\u003e",
          "module": "ADP.Multi.Combinators",
          "name": "yieldSize2",
          "package": "adp-multi",
          "signature": "(Int, Maybe Int) -\u003e (Int, Maybe Int) -\u003e RichParser a b -\u003e RichParser a b",
          "source": "src/ADP-Multi-Combinators.html#yieldSize2",
          "type": "function"
        },
        "index": {
          "description": "Explicitly specify yield size of dim parser",
          "hierarchy": "ADP Multi Combinators",
          "module": "ADP.Multi.Combinators",
          "name": "yieldSize2",
          "normalized": "(Int,Maybe Int)-\u003e(Int,Maybe Int)-\u003eRichParser a b-\u003eRichParser a b",
          "package": "adp-multi",
          "partial": "Size",
          "signature": "(Int,Maybe Int)-\u003e(Int,Maybe Int)-\u003eRichParser a b-\u003eRichParser a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Combinators.html#v:yieldSize2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eElementary parsers for dimensions 1 and 2\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ADP.Multi.ElementaryParsers",
          "name": "ElementaryParsers",
          "package": "adp-multi",
          "source": "src/ADP-Multi-ElementaryParsers.html",
          "type": "module"
        },
        "index": {
          "description": "Elementary parsers for dimensions and",
          "hierarchy": "ADP Multi ElementaryParsers",
          "module": "ADP.Multi.ElementaryParsers",
          "name": "ElementaryParsers",
          "package": "adp-multi",
          "partial": "Elementary Parsers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-ElementaryParsers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.ElementaryParsers",
          "name": "EPS",
          "package": "adp-multi",
          "source": "src/ADP-Multi-ElementaryParsers.html#EPS",
          "type": "data"
        },
        "index": {
          "hierarchy": "ADP Multi ElementaryParsers",
          "module": "ADP.Multi.ElementaryParsers",
          "name": "EPS",
          "package": "adp-multi",
          "partial": "EPS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-ElementaryParsers.html#t:EPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.ElementaryParsers",
          "name": "EPS",
          "package": "adp-multi",
          "signature": "EPS",
          "source": "src/ADP-Multi-ElementaryParsers.html#EPS",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi ElementaryParsers",
          "module": "ADP.Multi.ElementaryParsers",
          "name": "EPS",
          "package": "adp-multi",
          "partial": "EPS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-ElementaryParsers.html#v:EPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.ElementaryParsers",
          "name": "anychar",
          "package": "adp-multi",
          "signature": "RichParser a a",
          "source": "src/ADP-Multi-ElementaryParsers.html#anychar",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi ElementaryParsers",
          "module": "ADP.Multi.ElementaryParsers",
          "name": "anychar",
          "package": "adp-multi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-ElementaryParsers.html#v:anychar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.ElementaryParsers",
          "name": "anychar2",
          "package": "adp-multi",
          "signature": "RichParser a (a, a)",
          "source": "src/ADP-Multi-ElementaryParsers.html#anychar2",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi ElementaryParsers",
          "module": "ADP.Multi.ElementaryParsers",
          "name": "anychar2",
          "normalized": "RichParser a(a,a)",
          "package": "adp-multi",
          "signature": "RichParser a(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-ElementaryParsers.html#v:anychar2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.ElementaryParsers",
          "name": "anycharExcept",
          "package": "adp-multi",
          "signature": "[a] -\u003e RichParser a a",
          "source": "src/ADP-Multi-ElementaryParsers.html#anycharExcept",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi ElementaryParsers",
          "module": "ADP.Multi.ElementaryParsers",
          "name": "anycharExcept",
          "normalized": "[a]-\u003eRichParser a a",
          "package": "adp-multi",
          "partial": "Except",
          "signature": "[a]-\u003eRichParser a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-ElementaryParsers.html#v:anycharExcept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.ElementaryParsers",
          "name": "char",
          "package": "adp-multi",
          "signature": "a -\u003e RichParser a a",
          "source": "src/ADP-Multi-ElementaryParsers.html#char",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi ElementaryParsers",
          "module": "ADP.Multi.ElementaryParsers",
          "name": "char",
          "normalized": "a-\u003eRichParser a a",
          "package": "adp-multi",
          "signature": "a-\u003eRichParser a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-ElementaryParsers.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.ElementaryParsers",
          "name": "char2",
          "package": "adp-multi",
          "signature": "a -\u003e a -\u003e RichParser a (a, a)",
          "source": "src/ADP-Multi-ElementaryParsers.html#char2",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi ElementaryParsers",
          "module": "ADP.Multi.ElementaryParsers",
          "name": "char2",
          "normalized": "a-\u003ea-\u003eRichParser a(a,a)",
          "package": "adp-multi",
          "signature": "a-\u003ea-\u003eRichParser a(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-ElementaryParsers.html#v:char2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.ElementaryParsers",
          "name": "charLeftOnly",
          "package": "adp-multi",
          "signature": "a -\u003e RichParser a (a, EPS)",
          "source": "src/ADP-Multi-ElementaryParsers.html#charLeftOnly",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi ElementaryParsers",
          "module": "ADP.Multi.ElementaryParsers",
          "name": "charLeftOnly",
          "normalized": "a-\u003eRichParser a(a,EPS)",
          "package": "adp-multi",
          "partial": "Left Only",
          "signature": "a-\u003eRichParser a(a,EPS)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-ElementaryParsers.html#v:charLeftOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.ElementaryParsers",
          "name": "charRightOnly",
          "package": "adp-multi",
          "signature": "a -\u003e RichParser a (EPS, a)",
          "source": "src/ADP-Multi-ElementaryParsers.html#charRightOnly",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi ElementaryParsers",
          "module": "ADP.Multi.ElementaryParsers",
          "name": "charRightOnly",
          "normalized": "a-\u003eRichParser a(EPS,a)",
          "package": "adp-multi",
          "partial": "Right Only",
          "signature": "a-\u003eRichParser a(EPS,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-ElementaryParsers.html#v:charRightOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.ElementaryParsers",
          "name": "empty1",
          "package": "adp-multi",
          "signature": "RichParser a EPS",
          "source": "src/ADP-Multi-ElementaryParsers.html#empty1",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi ElementaryParsers",
          "module": "ADP.Multi.ElementaryParsers",
          "name": "empty1",
          "package": "adp-multi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-ElementaryParsers.html#v:empty1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.ElementaryParsers",
          "name": "empty2",
          "package": "adp-multi",
          "signature": "RichParser a (EPS, EPS)",
          "source": "src/ADP-Multi-ElementaryParsers.html#empty2",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi ElementaryParsers",
          "module": "ADP.Multi.ElementaryParsers",
          "name": "empty2",
          "normalized": "RichParser a(EPS,EPS)",
          "package": "adp-multi",
          "signature": "RichParser a(EPS,EPS)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-ElementaryParsers.html#v:empty2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.ElementaryParsers",
          "name": "string",
          "package": "adp-multi",
          "signature": "[a] -\u003e RichParser a [a]",
          "source": "src/ADP-Multi-ElementaryParsers.html#string",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi ElementaryParsers",
          "module": "ADP.Multi.ElementaryParsers",
          "name": "string",
          "normalized": "[a]-\u003eRichParser a[a]",
          "package": "adp-multi",
          "signature": "[a]-\u003eRichParser a[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-ElementaryParsers.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.ElementaryParsers",
          "name": "string2",
          "package": "adp-multi",
          "signature": "[a] -\u003e [a] -\u003e RichParser a ([a], [a])",
          "source": "src/ADP-Multi-ElementaryParsers.html#string2",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi ElementaryParsers",
          "module": "ADP.Multi.ElementaryParsers",
          "name": "string2",
          "normalized": "[a]-\u003e[a]-\u003eRichParser a([a],[a])",
          "package": "adp-multi",
          "signature": "[a]-\u003e[a]-\u003eRichParser a([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-ElementaryParsers.html#v:string2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides several convenience functions to ease parsing setup.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ADP.Multi.Helpers",
          "name": "Helpers",
          "package": "adp-multi",
          "source": "src/ADP-Multi-Helpers.html",
          "type": "module"
        },
        "index": {
          "description": "Provides several convenience functions to ease parsing setup",
          "hierarchy": "ADP Multi Helpers",
          "module": "ADP.Multi.Helpers",
          "name": "Helpers",
          "package": "adp-multi",
          "partial": "Helpers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Helpers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function for parsing a given input\n   using a 1-dim parser, usually the start nonterminal.\n\u003c/p\u003e",
          "module": "ADP.Multi.Helpers",
          "name": "axiom",
          "package": "adp-multi",
          "signature": "Array Int a -\u003e RichParser a b -\u003e [b]",
          "source": "src/ADP-Multi-Helpers.html#axiom",
          "type": "function"
        },
        "index": {
          "description": "Convenience function for parsing given input using dim parser usually the start nonterminal",
          "hierarchy": "ADP Multi Helpers",
          "module": "ADP.Multi.Helpers",
          "name": "axiom",
          "normalized": "Array Int a-\u003eRichParser a b-\u003e[b]",
          "package": "adp-multi",
          "signature": "Array Int a-\u003eRichParser a b-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Helpers.html#v:axiom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function for parsing a given input pair\n   using a 2-dim parser, usually the start nonterminal.\n\u003c/p\u003e",
          "module": "ADP.Multi.Helpers",
          "name": "axiomTwoTrack",
          "package": "adp-multi",
          "signature": "Array Int a -\u003e [a] -\u003e [a] -\u003e RichParser a b -\u003e [b]",
          "source": "src/ADP-Multi-Helpers.html#axiomTwoTrack",
          "type": "function"
        },
        "index": {
          "description": "Convenience function for parsing given input pair using dim parser usually the start nonterminal",
          "hierarchy": "ADP Multi Helpers",
          "module": "ADP.Multi.Helpers",
          "name": "axiomTwoTrack",
          "normalized": "Array Int a-\u003e[a]-\u003e[a]-\u003eRichParser a b-\u003e[b]",
          "package": "adp-multi",
          "partial": "Two Track",
          "signature": "Array Int a-\u003e[a]-\u003e[a]-\u003eRichParser a b-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Helpers.html#v:axiomTwoTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns an input sequence into an array for use with a 1-dim parser.\n   Typically, this prepares the input for the \u003ccode\u003e\u003ca\u003eaxiom\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "ADP.Multi.Helpers",
          "name": "mk",
          "package": "adp-multi",
          "signature": "[a] -\u003e Array Int a",
          "source": "src/ADP-Multi-Helpers.html#mk",
          "type": "function"
        },
        "index": {
          "description": "Turns an input sequence into an array for use with dim parser Typically this prepares the input for the axiom function",
          "hierarchy": "ADP Multi Helpers",
          "module": "ADP.Multi.Helpers",
          "name": "mk",
          "normalized": "[a]-\u003eArray Int a",
          "package": "adp-multi",
          "signature": "[a]-\u003eArray Int a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Helpers.html#v:mk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns two input sequences into an array for use with a 2-dim parser.\n   Typically, this prepares the input for the \u003ccode\u003e\u003ca\u003eaxiomTwoTrack\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "ADP.Multi.Helpers",
          "name": "mkTwoTrack",
          "package": "adp-multi",
          "signature": "[a] -\u003e [a] -\u003e Array Int a",
          "source": "src/ADP-Multi-Helpers.html#mkTwoTrack",
          "type": "function"
        },
        "index": {
          "description": "Turns two input sequences into an array for use with dim parser Typically this prepares the input for the axiomTwoTrack function",
          "hierarchy": "ADP Multi Helpers",
          "module": "ADP.Multi.Helpers",
          "name": "mkTwoTrack",
          "normalized": "[a]-\u003e[a]-\u003eArray Int a",
          "package": "adp-multi",
          "partial": "Two Track",
          "signature": "[a]-\u003e[a]-\u003eArray Int a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Helpers.html#v:mkTwoTrack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome common types for parsers. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "ADP.Multi.Parser",
          "name": "Parser",
          "package": "adp-multi",
          "source": "src/ADP-Multi-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Some common types for parsers",
          "hierarchy": "ADP Multi Parser",
          "module": "ADP.Multi.Parser",
          "name": "Parser",
          "package": "adp-multi",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Parser",
          "name": "Parseable",
          "package": "adp-multi",
          "source": "src/ADP-Multi-Parser.html#Parseable",
          "type": "class"
        },
        "index": {
          "hierarchy": "ADP Multi Parser",
          "module": "ADP.Multi.Parser",
          "name": "Parseable",
          "package": "adp-multi",
          "partial": "Parseable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Parser.html#t:Parseable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Parser",
          "name": "Parser",
          "package": "adp-multi",
          "source": "src/ADP-Multi-Parser.html#Parser",
          "type": "type"
        },
        "index": {
          "hierarchy": "ADP Multi Parser",
          "module": "ADP.Multi.Parser",
          "name": "Parser",
          "package": "adp-multi",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Parser.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatic information about yield sizes of a parser.\n   For supporting dimensions \u003e 2, this type has to be\n   expanded with more constructors, or redesigned to be generic.\n\u003c/p\u003e",
          "module": "ADP.Multi.Parser",
          "name": "ParserInfo",
          "package": "adp-multi",
          "source": "src/ADP-Multi-Parser.html#ParserInfo",
          "type": "data"
        },
        "index": {
          "description": "Static information about yield sizes of parser For supporting dimensions this type has to be expanded with more constructors or redesigned to be generic",
          "hierarchy": "ADP Multi Parser",
          "module": "ADP.Multi.Parser",
          "name": "ParserInfo",
          "package": "adp-multi",
          "partial": "Parser Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Parser.html#t:ParserInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Parser",
          "name": "RichParser",
          "package": "adp-multi",
          "source": "src/ADP-Multi-Parser.html#RichParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "ADP Multi Parser",
          "module": "ADP.Multi.Parser",
          "name": "RichParser",
          "package": "adp-multi",
          "partial": "Rich Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Parser.html#t:RichParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo support higher dimensions, a subword is a list\n   of indices. Valid list lengths are 2n with n\u003e0.\n\u003c/p\u003e",
          "module": "ADP.Multi.Parser",
          "name": "Subword",
          "package": "adp-multi",
          "source": "src/ADP-Multi-Parser.html#Subword",
          "type": "type"
        },
        "index": {
          "description": "To support higher dimensions subword is list of indices Valid list lengths are with",
          "hierarchy": "ADP Multi Parser",
          "module": "ADP.Multi.Parser",
          "name": "Subword",
          "package": "adp-multi",
          "partial": "Subword",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Parser.html#t:Subword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Parser",
          "name": "ParserInfo1",
          "package": "adp-multi",
          "signature": "ParserInfo1",
          "source": "src/ADP-Multi-Parser.html#ParserInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi Parser",
          "module": "ADP.Multi.Parser",
          "name": "ParserInfo1",
          "package": "adp-multi",
          "partial": "Parser Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Parser.html#v:ParserInfo1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Parser",
          "name": "ParserInfo2",
          "package": "adp-multi",
          "signature": "ParserInfo2",
          "source": "src/ADP-Multi-Parser.html#ParserInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi Parser",
          "module": "ADP.Multi.Parser",
          "name": "ParserInfo2",
          "package": "adp-multi",
          "partial": "Parser Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Parser.html#v:ParserInfo2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Parser",
          "name": "maxYield",
          "package": "adp-multi",
          "signature": "Maybe Int",
          "source": "src/ADP-Multi-Parser.html#ParserInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi Parser",
          "module": "ADP.Multi.Parser",
          "name": "maxYield",
          "package": "adp-multi",
          "partial": "Yield",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Parser.html#v:maxYield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Parser",
          "name": "maxYield2",
          "package": "adp-multi",
          "signature": "(Maybe Int, Maybe Int)",
          "source": "src/ADP-Multi-Parser.html#ParserInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi Parser",
          "module": "ADP.Multi.Parser",
          "name": "maxYield2",
          "normalized": "(Maybe Int,Maybe Int)",
          "package": "adp-multi",
          "partial": "Yield",
          "signature": "(Maybe Int,Maybe Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Parser.html#v:maxYield2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Parser",
          "name": "minYield",
          "package": "adp-multi",
          "signature": "Int",
          "source": "src/ADP-Multi-Parser.html#ParserInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi Parser",
          "module": "ADP.Multi.Parser",
          "name": "minYield",
          "package": "adp-multi",
          "partial": "Yield",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Parser.html#v:minYield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Parser",
          "name": "minYield2",
          "package": "adp-multi",
          "signature": "(Int, Int)",
          "source": "src/ADP-Multi-Parser.html#ParserInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi Parser",
          "module": "ADP.Multi.Parser",
          "name": "minYield2",
          "normalized": "(Int,Int)",
          "package": "adp-multi",
          "partial": "Yield",
          "signature": "(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Parser.html#v:minYield2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Parser",
          "name": "toParser",
          "package": "adp-multi",
          "signature": "p -\u003e RichParser a b",
          "source": "src/ADP-Multi-Parser.html#toParser",
          "type": "method"
        },
        "index": {
          "hierarchy": "ADP Multi Parser",
          "module": "ADP.Multi.Parser",
          "name": "toParser",
          "normalized": "a-\u003eRichParser b c",
          "package": "adp-multi",
          "partial": "Parser",
          "signature": "p-\u003eRichParser a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Parser.html#v:toParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenience module to import the specific rewriting function model\n   and combinator implementation known as \u003cem\u003eexplicit\u003c/em\u003e.\n   In package adp-multi-monadiccp, there is another\n   combinator implementation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ADP.Multi.Rewriting.All",
          "name": "All",
          "package": "adp-multi",
          "source": "src/ADP-Multi-Rewriting-All.html",
          "type": "module"
        },
        "index": {
          "description": "Convenience module to import the specific rewriting function model and combinator implementation known as explicit In package adp-multi-monadiccp there is another combinator implementation",
          "hierarchy": "ADP Multi Rewriting All",
          "module": "ADP.Multi.Rewriting.All",
          "name": "All",
          "package": "adp-multi",
          "partial": "All",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Rewriting-All.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides instance implementations for the \u003e\u003e\u003e combinator\n   using the \u003cem\u003eexplicit\u003c/em\u003e subword construction algorithm.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ADP.Multi.Rewriting.Combinators",
          "name": "Combinators",
          "package": "adp-multi",
          "source": "src/ADP-Multi-Rewriting-Combinators.html",
          "type": "module"
        },
        "index": {
          "description": "Provides instance implementations for the combinator using the explicit subword construction algorithm",
          "hierarchy": "ADP Multi Rewriting Combinators",
          "module": "ADP.Multi.Rewriting.Combinators",
          "name": "Combinators",
          "package": "adp-multi",
          "partial": "Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Rewriting-Combinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Rewriting.Explicit",
          "name": "Explicit",
          "package": "adp-multi",
          "source": "src/ADP-Multi-Rewriting-Explicit.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "ADP Multi Rewriting Explicit",
          "module": "ADP.Multi.Rewriting.Explicit",
          "name": "Explicit",
          "package": "adp-multi",
          "partial": "Explicit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Rewriting-Explicit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Rewriting.Explicit",
          "name": "constructSubwords1",
          "package": "adp-multi",
          "signature": "SubwordConstructionAlgorithm Dim1",
          "source": "src/ADP-Multi-Rewriting-Explicit.html#constructSubwords1",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi Rewriting Explicit",
          "module": "ADP.Multi.Rewriting.Explicit",
          "name": "constructSubwords1",
          "package": "adp-multi",
          "partial": "Subwords",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Rewriting-Explicit.html#v:constructSubwords1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Rewriting.Explicit",
          "name": "constructSubwords2",
          "package": "adp-multi",
          "signature": "SubwordConstructionAlgorithm Dim2",
          "source": "src/ADP-Multi-Rewriting-Explicit.html#constructSubwords2",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi Rewriting Explicit",
          "module": "ADP.Multi.Rewriting.Explicit",
          "name": "constructSubwords2",
          "package": "adp-multi",
          "partial": "Subwords",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Rewriting-Explicit.html#v:constructSubwords2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefault model of rewriting functions used in adp-multi.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ADP.Multi.Rewriting.Model",
          "name": "Model",
          "package": "adp-multi",
          "source": "src/ADP-Multi-Rewriting-Model.html",
          "type": "module"
        },
        "index": {
          "description": "Default model of rewriting functions used in adp-multi",
          "hierarchy": "ADP Multi Rewriting Model",
          "module": "ADP.Multi.Rewriting.Model",
          "name": "Model",
          "package": "adp-multi",
          "partial": "Model",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Rewriting-Model.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e1-dimensional rewriting function\n\u003c/p\u003e",
          "module": "ADP.Multi.Rewriting.Model",
          "name": "Dim1",
          "package": "adp-multi",
          "source": "src/ADP-Multi-Rewriting-Model.html#Dim1",
          "type": "type"
        },
        "index": {
          "description": "dimensional rewriting function",
          "hierarchy": "ADP Multi Rewriting Model",
          "module": "ADP.Multi.Rewriting.Model",
          "name": "Dim1",
          "package": "adp-multi",
          "partial": "Dim",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Rewriting-Model.html#t:Dim1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e2-dimensional rewriting function\n   Note: every dimension must contain at least one element\n\u003c/p\u003e",
          "module": "ADP.Multi.Rewriting.Model",
          "name": "Dim2",
          "package": "adp-multi",
          "source": "src/ADP-Multi-Rewriting-Model.html#Dim2",
          "type": "type"
        },
        "index": {
          "description": "dimensional rewriting function Note every dimension must contain at least one element",
          "hierarchy": "ADP Multi Rewriting Model",
          "module": "ADP.Multi.Rewriting.Model",
          "name": "Dim2",
          "package": "adp-multi",
          "partial": "Dim",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Rewriting-Model.html#t:Dim2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery 1-dim parser has one symbol, every 2-dim parser two symbols.\nIn a production with parsers p1 to pn, each parser has a number,\n1 to n. Each symbol of a parser also has a number, 1 or 2, as only\ntwo dimensions are supported now. Both numbers form a unique identifier\nfor each symbol in a production.\n\u003c/p\u003e\u003cp\u003eExample:\nf \u003cimg src=\"\u003c a ~~~ b ~~~ c \"/\u003e\u003e r\n\u003c/p\u003e\u003cp\u003ea and c shall have dimension 1, b dimension 2.\nThen a has id (1,1), b has ids (2,1) and (2,2), and\nc has (3,1). Applying a rewriting function of type \u003ccode\u003e\u003ca\u003eDim1\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eDim2\u003c/a\u003e\u003c/code\u003e\nto the list of ids produces a permutation of those, possibly\nsplit up in two dimensions.\n\u003c/p\u003e\u003cp\u003eE.g., [(1,1),(2,1),(2,2),(3,1)] gets ([(2,1),(3,1)],[(2,2),(1,1)])\nif the rewriting function is: r [a,b1,b2,c] = ([b1,c],[b2,a]).\n\u003c/p\u003e",
          "module": "ADP.Multi.Rewriting.Model",
          "name": "SymbolID",
          "package": "adp-multi",
          "source": "src/ADP-Multi-Rewriting-Model.html#SymbolID",
          "type": "type"
        },
        "index": {
          "description": "Every dim parser has one symbol every dim parser two symbols In production with parsers p1 to pn each parser has number to Each symbol of parser also has number or as only two dimensions are supported now Both numbers form unique identifier for each symbol in production Example and shall have dimension dimension Then has id has ids and and has Applying rewriting function of type Dim1 or Dim2 to the list of ids produces permutation of those possibly split up in two dimensions E.g gets if the rewriting function is b1 b2 b1 b2",
          "hierarchy": "ADP Multi Rewriting Model",
          "module": "ADP.Multi.Rewriting.Model",
          "name": "SymbolID",
          "package": "adp-multi",
          "partial": "Symbol ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Rewriting-Model.html#t:SymbolID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience rewriting function for one or more dim1 parsers\n\u003c/p\u003e",
          "module": "ADP.Multi.Rewriting.Model",
          "name": "id1",
          "package": "adp-multi",
          "signature": "Dim1",
          "source": "src/ADP-Multi-Rewriting-Model.html#id1",
          "type": "function"
        },
        "index": {
          "description": "Convenience rewriting function for one or more dim1 parsers",
          "hierarchy": "ADP Multi Rewriting Model",
          "module": "ADP.Multi.Rewriting.Model",
          "name": "id1",
          "package": "adp-multi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Rewriting-Model.html#v:id1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience rewriting function for one dim2 parser\n\u003c/p\u003e",
          "module": "ADP.Multi.Rewriting.Model",
          "name": "id2",
          "package": "adp-multi",
          "signature": "Dim2",
          "source": "src/ADP-Multi-Rewriting-Model.html#id2",
          "type": "function"
        },
        "index": {
          "description": "Convenience rewriting function for one dim2 parser",
          "hierarchy": "ADP Multi Rewriting Model",
          "module": "ADP.Multi.Rewriting.Model",
          "name": "id2",
          "package": "adp-multi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Rewriting-Model.html#v:id2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCalculates yield sizes using rewriting functions. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "ADP.Multi.Rewriting.YieldSize",
          "name": "YieldSize",
          "package": "adp-multi",
          "source": "src/ADP-Multi-Rewriting-YieldSize.html",
          "type": "module"
        },
        "index": {
          "description": "Calculates yield sizes using rewriting functions",
          "hierarchy": "ADP Multi Rewriting YieldSize",
          "module": "ADP.Multi.Rewriting.YieldSize",
          "name": "YieldSize",
          "package": "adp-multi",
          "partial": "Yield Size",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Rewriting-YieldSize.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Rewriting.YieldSize",
          "name": "YieldAnalysisAlgorithm",
          "package": "adp-multi",
          "source": "src/ADP-Multi-Rewriting-YieldSize.html#YieldAnalysisAlgorithm",
          "type": "type"
        },
        "index": {
          "hierarchy": "ADP Multi Rewriting YieldSize",
          "module": "ADP.Multi.Rewriting.YieldSize",
          "name": "YieldAnalysisAlgorithm",
          "package": "adp-multi",
          "partial": "Yield Analysis Algorithm",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Rewriting-YieldSize.html#t:YieldAnalysisAlgorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emin and max yield size\n\u003c/p\u003e",
          "module": "ADP.Multi.Rewriting.YieldSize",
          "name": "YieldSize",
          "package": "adp-multi",
          "source": "src/ADP-Multi-Rewriting-YieldSize.html#YieldSize",
          "type": "type"
        },
        "index": {
          "description": "min and max yield size",
          "hierarchy": "ADP Multi Rewriting YieldSize",
          "module": "ADP.Multi.Rewriting.YieldSize",
          "name": "YieldSize",
          "package": "adp-multi",
          "partial": "Yield Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Rewriting-YieldSize.html#t:YieldSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaps each parser symbol to its yield size\n   (remember: a 2-dim parser has 2 symbols in a rewriting function)\n\u003c/p\u003e",
          "module": "ADP.Multi.Rewriting.YieldSize",
          "name": "YieldSizeMap",
          "package": "adp-multi",
          "source": "src/ADP-Multi-Rewriting-YieldSize.html#YieldSizeMap",
          "type": "type"
        },
        "index": {
          "description": "Maps each parser symbol to its yield size remember dim parser has symbols in rewriting function",
          "hierarchy": "ADP Multi Rewriting YieldSize",
          "module": "ADP.Multi.Rewriting.YieldSize",
          "name": "YieldSizeMap",
          "package": "adp-multi",
          "partial": "Yield Size Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Rewriting-YieldSize.html#t:YieldSizeMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Rewriting.YieldSize",
          "name": "buildYieldSizeMap",
          "package": "adp-multi",
          "signature": "[ParserInfo] -\u003e YieldSizeMap",
          "source": "src/ADP-Multi-Rewriting-YieldSize.html#buildYieldSizeMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi Rewriting YieldSize",
          "module": "ADP.Multi.Rewriting.YieldSize",
          "name": "buildYieldSizeMap",
          "normalized": "[ParserInfo]-\u003eYieldSizeMap",
          "package": "adp-multi",
          "partial": "Yield Size Map",
          "signature": "[ParserInfo]-\u003eYieldSizeMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Rewriting-YieldSize.html#v:buildYieldSizeMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Rewriting.YieldSize",
          "name": "combineYields",
          "package": "adp-multi",
          "signature": "[YieldSize] -\u003e YieldSize",
          "source": "src/ADP-Multi-Rewriting-YieldSize.html#combineYields",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi Rewriting YieldSize",
          "module": "ADP.Multi.Rewriting.YieldSize",
          "name": "combineYields",
          "normalized": "[YieldSize]-\u003eYieldSize",
          "package": "adp-multi",
          "partial": "Yields",
          "signature": "[YieldSize]-\u003eYieldSize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Rewriting-YieldSize.html#v:combineYields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Rewriting.YieldSize",
          "name": "determineYieldSize1",
          "package": "adp-multi",
          "signature": "YieldAnalysisAlgorithm Dim1",
          "source": "src/ADP-Multi-Rewriting-YieldSize.html#determineYieldSize1",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi Rewriting YieldSize",
          "module": "ADP.Multi.Rewriting.YieldSize",
          "name": "determineYieldSize1",
          "package": "adp-multi",
          "partial": "Yield Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Rewriting-YieldSize.html#v:determineYieldSize1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Rewriting.YieldSize",
          "name": "determineYieldSize2",
          "package": "adp-multi",
          "signature": "YieldAnalysisAlgorithm Dim2",
          "source": "src/ADP-Multi-Rewriting-YieldSize.html#determineYieldSize2",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi Rewriting YieldSize",
          "module": "ADP.Multi.Rewriting.YieldSize",
          "name": "determineYieldSize2",
          "package": "adp-multi",
          "partial": "Yield Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Rewriting-YieldSize.html#v:determineYieldSize2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes for the rewriting combinator\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ADP.Multi.Rewriting",
          "name": "Rewriting",
          "package": "adp-multi",
          "source": "src/ADP-Multi-Rewriting.html",
          "type": "module"
        },
        "index": {
          "description": "Types for the rewriting combinator",
          "hierarchy": "ADP Multi Rewriting",
          "module": "ADP.Multi.Rewriting",
          "name": "Rewriting",
          "package": "adp-multi",
          "partial": "Rewriting",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Rewriting.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Rewriting",
          "name": "SubwordConstructionAlgorithm",
          "package": "adp-multi",
          "source": "src/ADP-Multi-Rewriting.html#SubwordConstructionAlgorithm",
          "type": "type"
        },
        "index": {
          "hierarchy": "ADP Multi Rewriting",
          "module": "ADP.Multi.Rewriting",
          "name": "SubwordConstructionAlgorithm",
          "package": "adp-multi",
          "partial": "Subword Construction Algorithm",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Rewriting.html#t:SubwordConstructionAlgorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTree of subwords. Every path in a tree represents\n   a sequence of subwords for a corresponding sequence of parsers\n   in a production. \n\u003c/p\u003e",
          "module": "ADP.Multi.Rewriting",
          "name": "SubwordTree",
          "package": "adp-multi",
          "source": "src/ADP-Multi-Rewriting.html#SubwordTree",
          "type": "data"
        },
        "index": {
          "description": "Tree of subwords Every path in tree represents sequence of subwords for corresponding sequence of parsers in production",
          "hierarchy": "ADP Multi Rewriting",
          "module": "ADP.Multi.Rewriting",
          "name": "SubwordTree",
          "package": "adp-multi",
          "partial": "Subword Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Rewriting.html#t:SubwordTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ADP.Multi.Rewriting",
          "name": "SubwordTree",
          "package": "adp-multi",
          "signature": "SubwordTree Subword [SubwordTree]",
          "source": "src/ADP-Multi-Rewriting.html#SubwordTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "ADP Multi Rewriting",
          "module": "ADP.Multi.Rewriting",
          "name": "SubwordTree",
          "normalized": "SubwordTree Subword[SubwordTree]",
          "package": "adp-multi",
          "partial": "Subword Tree",
          "signature": "SubwordTree Subword[SubwordTree]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Rewriting.html#v:SubwordTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCombinators for two- and four-dimensional tabulation\n\u003c/p\u003e\u003c/div\u003e",
          "module": "ADP.Multi.Tabulation",
          "name": "Tabulation",
          "package": "adp-multi",
          "source": "src/ADP-Multi-Tabulation.html",
          "type": "module"
        },
        "index": {
          "description": "Combinators for two and four-dimensional tabulation",
          "hierarchy": "ADP Multi Tabulation",
          "module": "ADP.Multi.Tabulation",
          "name": "Tabulation",
          "package": "adp-multi",
          "partial": "Tabulation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Tabulation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo-dimensional tabulation for one-dim. parsers\n\u003c/p\u003e",
          "module": "ADP.Multi.Tabulation",
          "name": "table1",
          "package": "adp-multi",
          "signature": "Array Int a -\u003e RichParser a b -\u003e RichParser a b",
          "source": "src/ADP-Multi-Tabulation.html#table1",
          "type": "function"
        },
        "index": {
          "description": "Two-dimensional tabulation for one-dim parsers",
          "hierarchy": "ADP Multi Tabulation",
          "module": "ADP.Multi.Tabulation",
          "name": "table1",
          "normalized": "Array Int a-\u003eRichParser a b-\u003eRichParser a b",
          "package": "adp-multi",
          "signature": "Array Int a-\u003eRichParser a b-\u003eRichParser a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Tabulation.html#v:table1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo-dimensional tabulation for one-dim. parsers\n\u003c/p\u003e",
          "module": "ADP.Multi.Tabulation",
          "name": "table1'",
          "package": "adp-multi",
          "signature": "Array Int a -\u003e Parser a b -\u003e Parser a b",
          "source": "src/ADP-Multi-Tabulation.html#table1%27",
          "type": "function"
        },
        "index": {
          "description": "Two-dimensional tabulation for one-dim parsers",
          "hierarchy": "ADP Multi Tabulation",
          "module": "ADP.Multi.Tabulation",
          "name": "table1'",
          "normalized": "Array Int a-\u003eParser a b-\u003eParser a b",
          "package": "adp-multi",
          "signature": "Array Int a-\u003eParser a b-\u003eParser a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Tabulation.html#v:table1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFour-dimensional tabulation for two-dim. parsers\n\u003c/p\u003e",
          "module": "ADP.Multi.Tabulation",
          "name": "table2",
          "package": "adp-multi",
          "signature": "Array Int a -\u003e RichParser a b -\u003e RichParser a b",
          "source": "src/ADP-Multi-Tabulation.html#table2",
          "type": "function"
        },
        "index": {
          "description": "Four-dimensional tabulation for two-dim parsers",
          "hierarchy": "ADP Multi Tabulation",
          "module": "ADP.Multi.Tabulation",
          "name": "table2",
          "normalized": "Array Int a-\u003eRichParser a b-\u003eRichParser a b",
          "package": "adp-multi",
          "signature": "Array Int a-\u003eRichParser a b-\u003eRichParser a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Tabulation.html#v:table2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFour-dimensional tabulation for two-dim. parsers\n\u003c/p\u003e",
          "module": "ADP.Multi.Tabulation",
          "name": "table2'",
          "package": "adp-multi",
          "signature": "Array Int a -\u003e Parser a b -\u003e Parser a b",
          "source": "src/ADP-Multi-Tabulation.html#table2%27",
          "type": "function"
        },
        "index": {
          "description": "Four-dimensional tabulation for two-dim parsers",
          "hierarchy": "ADP Multi Tabulation",
          "module": "ADP.Multi.Tabulation",
          "name": "table2'",
          "normalized": "Array Int a-\u003eParser a b-\u003eParser a b",
          "package": "adp-multi",
          "signature": "Array Int a-\u003eParser a b-\u003eParser a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/adp-multi/docs/ADP-Multi-Tabulation.html#v:table2-39-"
      }
    }
  ]
]