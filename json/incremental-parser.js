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
        "word": "incremental-parser"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the AlternativeMonoid class\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Applicative.Monoid",
          "name": "Monoid",
          "package": "incremental-parser",
          "source": "src/Control-Applicative-Monoid.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the AlternativeMonoid class",
          "hierarchy": "Control Applicative Monoid",
          "module": "Control.Applicative.Monoid",
          "name": "Monoid",
          "package": "incremental-parser",
          "partial": "Monoid",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Control-Applicative-Monoid.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Applicative.Monoid",
          "name": "MonoidAlternative",
          "package": "incremental-parser",
          "source": "src/Control-Applicative-Monoid.html#MonoidAlternative",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Applicative Monoid",
          "module": "Control.Applicative.Monoid",
          "name": "MonoidAlternative",
          "package": "incremental-parser",
          "partial": "Monoid Alternative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Control-Applicative-Monoid.html#t:MonoidAlternative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Applicative.Monoid",
          "name": "MonoidApplicative",
          "package": "incremental-parser",
          "source": "src/Control-Applicative-Monoid.html#MonoidApplicative",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Applicative Monoid",
          "module": "Control.Applicative.Monoid",
          "name": "MonoidApplicative",
          "package": "incremental-parser",
          "partial": "Monoid Applicative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Control-Applicative-Monoid.html#t:MonoidApplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted and potentially optimized monoid \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e operation from the parameter type.\n\u003c/p\u003e",
          "module": "Control.Applicative.Monoid",
          "name": "(\u003e\u003c)",
          "package": "incremental-parser",
          "signature": "f a -\u003e f a -\u003e f a",
          "source": "src/Control-Applicative-Monoid.html#%3E%3C",
          "type": "method"
        },
        "index": {
          "description": "Lifted and potentially optimized monoid mappend operation from the parameter type",
          "hierarchy": "Control Applicative Monoid",
          "module": "Control.Applicative.Monoid",
          "name": "(\u003e\u003c) \u003e\u003c",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "incremental-parser",
          "signature": "f a-\u003ef a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Control-Applicative-Monoid.html#v:-62--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZero or more argument occurrences like \u003ccode\u003e\u003ca\u003emany\u003c/a\u003e\u003c/code\u003e, but concatenated.\n\u003c/p\u003e",
          "module": "Control.Applicative.Monoid",
          "name": "concatMany",
          "package": "incremental-parser",
          "signature": "f a -\u003e f a",
          "source": "src/Control-Applicative-Monoid.html#concatMany",
          "type": "method"
        },
        "index": {
          "description": "Zero or more argument occurrences like many but concatenated",
          "hierarchy": "Control Applicative Monoid",
          "module": "Control.Applicative.Monoid",
          "name": "concatMany",
          "normalized": "a b-\u003ea b",
          "package": "incremental-parser",
          "partial": "Many",
          "signature": "f a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Control-Applicative-Monoid.html#v:concatMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne or more argument occurrences like \u003ccode\u003e\u003ca\u003esome\u003c/a\u003e\u003c/code\u003e, but concatenated.\n\u003c/p\u003e",
          "module": "Control.Applicative.Monoid",
          "name": "concatSome",
          "package": "incremental-parser",
          "signature": "f a -\u003e f a",
          "source": "src/Control-Applicative-Monoid.html#concatSome",
          "type": "method"
        },
        "index": {
          "description": "One or more argument occurrences like some but concatenated",
          "hierarchy": "Control Applicative Monoid",
          "module": "Control.Applicative.Monoid",
          "name": "concatSome",
          "normalized": "a b-\u003ea b",
          "package": "incremental-parser",
          "partial": "Some",
          "signature": "f a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Control-Applicative-Monoid.html#v:concatSome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003eoptional\u003c/code\u003e, but restricted to \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
          "module": "Control.Applicative.Monoid",
          "name": "moptional",
          "package": "incremental-parser",
          "signature": "f a -\u003e f a",
          "source": "src/Control-Applicative-Monoid.html#moptional",
          "type": "method"
        },
        "index": {
          "description": "Like optional but restricted to Monoid results",
          "hierarchy": "Control Applicative Monoid",
          "module": "Control.Applicative.Monoid",
          "name": "moptional",
          "normalized": "a b-\u003ea b",
          "package": "incremental-parser",
          "signature": "f a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Control-Applicative-Monoid.html#v:moptional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines incremental parsers. \n\u003c/p\u003e\u003cp\u003eThe exported \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e type can provide partial parsing results from partial input, as long as the output is a\n \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e. Construct a parser using the primitives and combinators, supply it with input using functions \u003ccode\u003e\u003ca\u003efeed\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efeedEof\u003c/a\u003e\u003c/code\u003e, and extract the parsed output using \u003ccode\u003e\u003ca\u003eresults\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eImplementation is based on Brzozowski derivatives.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Incremental.LeftBiasedLocal",
          "name": "LeftBiasedLocal",
          "package": "incremental-parser",
          "source": "src/Text-ParserCombinators-Incremental-LeftBiasedLocal.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines incremental parsers The exported Parser type can provide partial parsing results from partial input as long as the output is Monoid Construct parser using the primitives and combinators supply it with input using functions feed and feedEof and extract the parsed output using results Implementation is based on Brzozowski derivatives",
          "hierarchy": "Text ParserCombinators Incremental LeftBiasedLocal",
          "module": "Text.ParserCombinators.Incremental.LeftBiasedLocal",
          "name": "LeftBiasedLocal",
          "package": "incremental-parser",
          "partial": "Left Biased Local",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental-LeftBiasedLocal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty type to specialize \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e for the left-biased \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental.LeftBiasedLocal",
          "name": "LeftBiasedLocal",
          "package": "incremental-parser",
          "source": "src/Text-ParserCombinators-Incremental-LeftBiasedLocal.html#LeftBiasedLocal",
          "type": "data"
        },
        "index": {
          "description": "An empty type to specialize Parser for the left-biased Alternative instance",
          "hierarchy": "Text ParserCombinators Incremental LeftBiasedLocal",
          "module": "Text.ParserCombinators.Incremental.LeftBiasedLocal",
          "name": "LeftBiasedLocal",
          "package": "incremental-parser",
          "partial": "Left Biased Local",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental-LeftBiasedLocal.html#t:LeftBiasedLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Incremental.LeftBiasedLocal",
          "name": "Parser",
          "package": "incremental-parser",
          "source": "src/Text-ParserCombinators-Incremental-LeftBiasedLocal.html#Parser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Incremental LeftBiasedLocal",
          "module": "Text.ParserCombinators.Incremental.LeftBiasedLocal",
          "name": "Parser",
          "package": "incremental-parser",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental-LeftBiasedLocal.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Incremental.LeftBiasedLocal",
          "name": "leftmost",
          "package": "incremental-parser",
          "signature": "Parser s r -\u003e Parser a s r",
          "source": "src/Text-ParserCombinators-Incremental-LeftBiasedLocal.html#leftmost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Incremental LeftBiasedLocal",
          "module": "Text.ParserCombinators.Incremental.LeftBiasedLocal",
          "name": "leftmost",
          "normalized": "Parser a b-\u003eParser c a b",
          "package": "incremental-parser",
          "signature": "Parser s r-\u003eParser a s r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental-LeftBiasedLocal.html#v:leftmost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines incremental parsers. \n\u003c/p\u003e\u003cp\u003eThe exported \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e type can provide partial parsing results from partial input, as long as the output is a\n \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e. Construct a parser using the primitives and combinators, supply it with input using functions \u003ccode\u003e\u003ca\u003efeed\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efeedEof\u003c/a\u003e\u003c/code\u003e, and extract the parsed output using \u003ccode\u003e\u003ca\u003eresults\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eImplementation is based on Brzozowski derivatives.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Incremental.Symmetric",
          "name": "Symmetric",
          "package": "incremental-parser",
          "source": "src/Text-ParserCombinators-Incremental-Symmetric.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines incremental parsers The exported Parser type can provide partial parsing results from partial input as long as the output is Monoid Construct parser using the primitives and combinators supply it with input using functions feed and feedEof and extract the parsed output using results Implementation is based on Brzozowski derivatives",
          "hierarchy": "Text ParserCombinators Incremental Symmetric",
          "module": "Text.ParserCombinators.Incremental.Symmetric",
          "name": "Symmetric",
          "package": "incremental-parser",
          "partial": "Symmetric",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental-Symmetric.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Incremental.Symmetric",
          "name": "Parser",
          "package": "incremental-parser",
          "source": "src/Text-ParserCombinators-Incremental-Symmetric.html#Parser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Incremental Symmetric",
          "module": "Text.ParserCombinators.Incremental.Symmetric",
          "name": "Parser",
          "package": "incremental-parser",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental-Symmetric.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty type to specialize \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e for the symmetric \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental.Symmetric",
          "name": "Symmetric",
          "package": "incremental-parser",
          "source": "src/Text-ParserCombinators-Incremental-Symmetric.html#Symmetric",
          "type": "data"
        },
        "index": {
          "description": "An empty type to specialize Parser for the symmetric Alternative instance",
          "hierarchy": "Text ParserCombinators Incremental Symmetric",
          "module": "Text.ParserCombinators.Incremental.Symmetric",
          "name": "Symmetric",
          "package": "incremental-parser",
          "partial": "Symmetric",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental-Symmetric.html#t:Symmetric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Incremental.Symmetric",
          "name": "allOf",
          "package": "incremental-parser",
          "signature": "Parser s r -\u003e Parser a s r",
          "source": "src/Text-ParserCombinators-Incremental-Symmetric.html#allOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Incremental Symmetric",
          "module": "Text.ParserCombinators.Incremental.Symmetric",
          "name": "allOf",
          "normalized": "Parser a b-\u003eParser c a b",
          "package": "incremental-parser",
          "partial": "Of",
          "signature": "Parser s r-\u003eParser a s r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental-Symmetric.html#v:allOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines incremental parsers. \n\u003c/p\u003e\u003cp\u003eThe exported \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e type can provide partial parsing results from partial input, as long as the output is a\n \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e. Construct a parser using the primitives and combinators, supply it with input using functions \u003ccode\u003e\u003ca\u003efeed\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003efeedEof\u003c/a\u003e\u003c/code\u003e, and extract the parsed output using \u003ccode\u003e\u003ca\u003eresults\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eImplementation is based on Brzozowski derivatives.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "Incremental",
          "package": "incremental-parser",
          "source": "src/Text-ParserCombinators-Incremental.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines incremental parsers The exported Parser type can provide partial parsing results from partial input as long as the output is Monoid Construct parser using the primitives and combinators supply it with input using functions feed and feedEof and extract the parsed output using results Implementation is based on Brzozowski derivatives",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "Incremental",
          "package": "incremental-parser",
          "partial": "Incremental",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe central parser type. Its first parameter is the input monoid, the second the output.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "Parser",
          "package": "incremental-parser",
          "source": "src/Text-ParserCombinators-Incremental.html#Parser",
          "type": "data"
        },
        "index": {
          "description": "The central parser type Its first parameter is the input monoid the second the output",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "Parser",
          "package": "incremental-parser",
          "partial": "Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Incremental",
          "name": "(\u003c||\u003e)",
          "package": "incremental-parser",
          "signature": "Parser a s r -\u003e Parser a s r -\u003e Parser a s r",
          "source": "src/Text-ParserCombinators-Incremental.html#%3C%7C%7C%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "(\u003c||\u003e) \u003c||\u003e",
          "normalized": "Parser a b c-\u003eParser a b c-\u003eParser a b c",
          "package": "incremental-parser",
          "signature": "Parser a s r-\u003eParser a s r-\u003eParser a s r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:-60--124--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Incremental",
          "name": "(\u003c\u003c|\u003e)",
          "package": "incremental-parser",
          "signature": "Parser a s r -\u003e Parser a s r -\u003e Parser a s r",
          "source": "src/Text-ParserCombinators-Incremental.html#%3C%3C%7C%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "(\u003c\u003c|\u003e) \u003c\u003c|\u003e",
          "normalized": "Parser a b c-\u003eParser a b c-\u003eParser a b c",
          "package": "incremental-parser",
          "signature": "Parser a s r-\u003eParser a s r-\u003eParser a s r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:-60--60--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifted and potentially optimized monoid \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e operation from the parameter type.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "(\u003e\u003c)",
          "package": "incremental-parser",
          "signature": "f a -\u003e f a -\u003e f a",
          "source": "src/Control-Applicative-Monoid.html#%3E%3C",
          "type": "function"
        },
        "index": {
          "description": "Lifted and potentially optimized monoid mappend operation from the parameter type",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "(\u003e\u003c) \u003e\u003c",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "incremental-parser",
          "signature": "f a-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:-62--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser that accepts all input.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "acceptAll",
          "package": "incremental-parser",
          "signature": "Parser a s s",
          "source": "src/Text-ParserCombinators-Incremental.html#acceptAll",
          "type": "function"
        },
        "index": {
          "description": "parser that accepts all input",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "acceptAll",
          "package": "incremental-parser",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:acceptAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel parser conjunction: the combined parser keeps accepting input as long as both arguments do.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "and",
          "package": "incremental-parser",
          "signature": "Parser a s r1 -\u003e Parser a s r2 -\u003e Parser a s (r1, r2)",
          "source": "src/Text-ParserCombinators-Incremental.html#and",
          "type": "function"
        },
        "index": {
          "description": "Parallel parser conjunction the combined parser keeps accepting input as long as both arguments do",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "and",
          "normalized": "Parser a b c-\u003eParser a b c-\u003eParser a b(c,c)",
          "package": "incremental-parser",
          "signature": "Parser a s r-\u003eParser a s r-\u003eParser a s(r,r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sequence parser that preserves incremental results, otherwise equivalent to \u003ccode\u003e\u003ca\u003eliftA2\u003c/a\u003e\u003c/code\u003e (,)\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "andThen",
          "package": "incremental-parser",
          "signature": "Parser a s r1 -\u003e Parser a s r2 -\u003e Parser a s (r1, r2)",
          "source": "src/Text-ParserCombinators-Incremental.html#andThen",
          "type": "function"
        },
        "index": {
          "description": "sequence parser that preserves incremental results otherwise equivalent to liftA2",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "andThen",
          "normalized": "Parser a b c-\u003eParser a b c-\u003eParser a b(c,c)",
          "package": "incremental-parser",
          "partial": "Then",
          "signature": "Parser a s r-\u003eParser a s r-\u003eParser a s(r,r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:andThen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser that accepts any single input atom.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "anyToken",
          "package": "incremental-parser",
          "signature": "Parser a s s",
          "source": "src/Text-ParserCombinators-Incremental.html#anyToken",
          "type": "function"
        },
        "index": {
          "description": "parser that accepts any single input atom",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "anyToken",
          "package": "incremental-parser",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:anyToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eresults\u003c/a\u003e\u003c/code\u003e, but returns only the complete results with the corresponding unconsumed inputs.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "completeResults",
          "package": "incremental-parser",
          "signature": "Parser a s r -\u003e [(r, s)]",
          "source": "src/Text-ParserCombinators-Incremental.html#completeResults",
          "type": "function"
        },
        "index": {
          "description": "Like results but returns only the complete results with the corresponding unconsumed inputs",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "completeResults",
          "normalized": "Parser a b c-\u003e[(c,b)]",
          "package": "incremental-parser",
          "partial": "Results",
          "signature": "Parser a s r-\u003e[(r,s)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:completeResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZero or more argument occurrences like \u003ccode\u003e\u003ca\u003emany\u003c/a\u003e\u003c/code\u003e, but concatenated.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "concatMany",
          "package": "incremental-parser",
          "signature": "f a -\u003e f a",
          "source": "src/Control-Applicative-Monoid.html#concatMany",
          "type": "function"
        },
        "index": {
          "description": "Zero or more argument occurrences like many but concatenated",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "concatMany",
          "normalized": "a b-\u003ea b",
          "package": "incremental-parser",
          "partial": "Many",
          "signature": "f a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:concatMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne or more argument occurrences like \u003ccode\u003e\u003ca\u003esome\u003c/a\u003e\u003c/code\u003e, but concatenated.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "concatSome",
          "package": "incremental-parser",
          "signature": "f a -\u003e f a",
          "source": "src/Control-Applicative-Monoid.html#concatSome",
          "type": "function"
        },
        "index": {
          "description": "One or more argument occurrences like some but concatenated",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "concatSome",
          "normalized": "a b-\u003ea b",
          "package": "incremental-parser",
          "partial": "Some",
          "signature": "f a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:concatSome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccepts the given number of occurrences of the argument parser.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "count",
          "package": "incremental-parser",
          "signature": "Int -\u003e Parser a s r -\u003e Parser a s r",
          "source": "src/Text-ParserCombinators-Incremental.html#count",
          "type": "function"
        },
        "index": {
          "description": "Accepts the given number of occurrences of the argument parser",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "count",
          "normalized": "Int-\u003eParser a b c-\u003eParser a b c",
          "package": "incremental-parser",
          "signature": "Int-\u003eParser a s r-\u003eParser a s r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser that fails on any input and succeeds at its end.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "eof",
          "package": "incremental-parser",
          "signature": "Parser a s r",
          "source": "src/Text-ParserCombinators-Incremental.html#eof",
          "type": "function"
        },
        "index": {
          "description": "parser that fails on any input and succeeds at its end",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "eof",
          "package": "incremental-parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:eof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Incremental",
          "name": "failure",
          "package": "incremental-parser",
          "signature": "Parser a s r",
          "source": "src/Text-ParserCombinators-Incremental.html#failure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "failure",
          "package": "incremental-parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeeds a chunk of the input to the parser.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "feed",
          "package": "incremental-parser",
          "signature": "s -\u003e Parser a s r -\u003e Parser a s r",
          "source": "src/Text-ParserCombinators-Incremental.html#feed",
          "type": "function"
        },
        "index": {
          "description": "Feeds chunk of the input to the parser",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "feed",
          "normalized": "a-\u003eParser b a c-\u003eParser b a c",
          "package": "incremental-parser",
          "signature": "s-\u003eParser a s r-\u003eParser a s r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:feed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignals the end of the input.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "feedEof",
          "package": "incremental-parser",
          "signature": "Parser a s r -\u003e Parser a s r",
          "source": "src/Text-ParserCombinators-Incremental.html#feedEof",
          "type": "function"
        },
        "index": {
          "description": "Signals the end of the input",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "feedEof",
          "normalized": "Parser a b c-\u003eParser a b c",
          "package": "incremental-parser",
          "partial": "Eof",
          "signature": "Parser a s r-\u003eParser a s r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:feedEof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eresults\u003c/a\u003e\u003c/code\u003e, but more general: doesn't assume that the result type is a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "inspect",
          "package": "incremental-parser",
          "signature": "Parser a s r -\u003e ([(r, s)], Maybe (Maybe (r -\u003e r), Parser a s r))",
          "source": "src/Text-ParserCombinators-Incremental.html#inspect",
          "type": "function"
        },
        "index": {
          "description": "Like results but more general doesn assume that the result type is Monoid",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "inspect",
          "normalized": "Parser a b c-\u003e([(c,b)],Maybe(Maybe(c-\u003ec),Parser a b c))",
          "package": "incremental-parser",
          "signature": "Parser a s r-\u003e([(r,s)],Maybe(Maybe(r-\u003er),Parser a s r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:inspect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Incremental",
          "name": "isInfallible",
          "package": "incremental-parser",
          "signature": "Parser a s r -\u003e Bool",
          "source": "src/Text-ParserCombinators-Incremental.html#isInfallible",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "isInfallible",
          "normalized": "Parser a b c-\u003eBool",
          "package": "incremental-parser",
          "partial": "Infallible",
          "signature": "Parser a s r-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:isInfallible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBehaves like the argument parser, but without consuming any input.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "lookAhead",
          "package": "incremental-parser",
          "signature": "Parser a s r -\u003e Parser a s r",
          "source": "src/Text-ParserCombinators-Incremental.html#lookAhead",
          "type": "function"
        },
        "index": {
          "description": "Behaves like the argument parser but without consuming any input",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "lookAhead",
          "normalized": "Parser a b c-\u003eParser a b c",
          "package": "incremental-parser",
          "partial": "Ahead",
          "signature": "Parser a s r-\u003eParser a s r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:lookAhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeats matching the first argument until the second one succeeds.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "manyTill",
          "package": "incremental-parser",
          "signature": "Parser a s r -\u003e Parser a s r' -\u003e Parser a s r",
          "source": "src/Text-ParserCombinators-Incremental.html#manyTill",
          "type": "function"
        },
        "index": {
          "description": "Repeats matching the first argument until the second one succeeds",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "manyTill",
          "normalized": "Parser a b c-\u003eParser a b d-\u003eParser a b c",
          "package": "incremental-parser",
          "partial": "Till",
          "signature": "Parser a s r-\u003eParser a s r'-\u003eParser a s r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:manyTill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e, but capable of mapping partial results, being restricted to \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e types only.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "mapIncremental",
          "package": "incremental-parser",
          "signature": "(a -\u003e b) -\u003e Parser p s a -\u003e Parser p s b",
          "source": "src/Text-ParserCombinators-Incremental.html#mapIncremental",
          "type": "function"
        },
        "index": {
          "description": "Like fmap but capable of mapping partial results being restricted to Monoid types only",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "mapIncremental",
          "normalized": "(a-\u003eb)-\u003eParser c d a-\u003eParser c d b",
          "package": "incremental-parser",
          "partial": "Incremental",
          "signature": "(a-\u003eb)-\u003eParser p s a-\u003eParser p s b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:mapIncremental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Incremental",
          "name": "mapType",
          "package": "incremental-parser",
          "signature": "(Parser a s r -\u003e Parser b s r) -\u003e Parser a s r -\u003e Parser b s r",
          "source": "src/Text-ParserCombinators-Incremental.html#mapType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "mapType",
          "normalized": "(Parser a b c-\u003eParser d b c)-\u003eParser a b c-\u003eParser d b c",
          "package": "incremental-parser",
          "partial": "Type",
          "signature": "(Parser a s r-\u003eParser b s r)-\u003eParser a s r-\u003eParser b s r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:mapType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003eoptional\u003c/code\u003e, but restricted to \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "moptional",
          "package": "incremental-parser",
          "signature": "f a -\u003e f a",
          "source": "src/Control-Applicative-Monoid.html#moptional",
          "type": "function"
        },
        "index": {
          "description": "Like optional but restricted to Monoid results",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "moptional",
          "normalized": "a b-\u003ea b",
          "package": "incremental-parser",
          "signature": "f a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:moptional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Incremental",
          "name": "more",
          "package": "incremental-parser",
          "signature": "(s -\u003e Parser a s r) -\u003e Parser a s r",
          "source": "src/Text-ParserCombinators-Incremental.html#more",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "more",
          "normalized": "(a-\u003eParser b a c)-\u003eParser b a c",
          "package": "incremental-parser",
          "signature": "(s-\u003eParser a s r)-\u003eParser a s r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:more"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes not consume any input; succeeds (with \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e result) iff the argument parser fails.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "notFollowedBy",
          "package": "incremental-parser",
          "signature": "Parser a s r' -\u003e Parser a s r",
          "source": "src/Text-ParserCombinators-Incremental.html#notFollowedBy",
          "type": "function"
        },
        "index": {
          "description": "Does not consume any input succeeds with mempty result iff the argument parser fails",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "notFollowedBy",
          "normalized": "Parser a b c-\u003eParser a b d",
          "package": "incremental-parser",
          "partial": "Followed By",
          "signature": "Parser a s r'-\u003eParser a s r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:notFollowedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eresults\u003c/a\u003e\u003c/code\u003e, but returns only the partial result prefix.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "resultPrefix",
          "package": "incremental-parser",
          "signature": "Parser a s r -\u003e (r, Parser a s r)",
          "source": "src/Text-ParserCombinators-Incremental.html#resultPrefix",
          "type": "function"
        },
        "index": {
          "description": "Like results but returns only the partial result prefix",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "resultPrefix",
          "normalized": "Parser a b c-\u003e(c,Parser a b c)",
          "package": "incremental-parser",
          "partial": "Prefix",
          "signature": "Parser a s r-\u003e(r,Parser a s r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:resultPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts all available parsing results from a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e. The first component of the result pair is a list of\n complete results together with the unconsumed remainder of the input. If the parsing can continue further, the second\n component of the pair provides the partial result prefix together with the parser for the rest of the input.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "results",
          "package": "incremental-parser",
          "signature": "Parser a s r -\u003e ([(r, s)], Maybe (r, Parser a s r))",
          "source": "src/Text-ParserCombinators-Incremental.html#results",
          "type": "function"
        },
        "index": {
          "description": "Extracts all available parsing results from Parser The first component of the result pair is list of complete results together with the unconsumed remainder of the input If the parsing can continue further the second component of the pair provides the partial result prefix together with the parser for the rest of the input",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "results",
          "normalized": "Parser a b c-\u003e([(c,b)],Maybe(c,Parser a b c))",
          "package": "incremental-parser",
          "signature": "Parser a s r-\u003e([(r,s)],Maybe(r,Parser a s r))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:results"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser that accepts an input atom only if it satisfies the given predicate.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "satisfy",
          "package": "incremental-parser",
          "signature": "(s -\u003e Bool) -\u003e Parser a s s",
          "source": "src/Text-ParserCombinators-Incremental.html#satisfy",
          "type": "function"
        },
        "index": {
          "description": "parser that accepts an input atom only if it satisfies the given predicate",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "satisfy",
          "normalized": "(a-\u003eBool)-\u003eParser b a a",
          "package": "incremental-parser",
          "signature": "(s-\u003eBool)-\u003eParser a s s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialization of \u003ccode\u003e\u003ca\u003esatisfy\u003c/a\u003e\u003c/code\u003e on \u003ccode\u003e\u003ca\u003eTextualMonoid\u003c/a\u003e\u003c/code\u003e inputs, accepting an input character only if it satisfies the given\n predicate.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "satisfyChar",
          "package": "incremental-parser",
          "signature": "(Char -\u003e Bool) -\u003e Parser a s s",
          "source": "src/Text-ParserCombinators-Incremental.html#satisfyChar",
          "type": "function"
        },
        "index": {
          "description": "Specialization of satisfy on TextualMonoid inputs accepting an input character only if it satisfies the given predicate",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "satisfyChar",
          "normalized": "(Char-\u003eBool)-\u003eParser a b b",
          "package": "incremental-parser",
          "partial": "Char",
          "signature": "(Char-\u003eBool)-\u003eParser a s s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:satisfyChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Incremental",
          "name": "showWith",
          "package": "incremental-parser",
          "signature": "((s -\u003e Parser a s r) -\u003e String) -\u003e (r -\u003e String) -\u003e Parser a s r -\u003e String",
          "source": "src/Text-ParserCombinators-Incremental.html#showWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "showWith",
          "normalized": "((a-\u003eParser b a c)-\u003eString)-\u003e(c-\u003eString)-\u003eParser b a c-\u003eString",
          "package": "incremental-parser",
          "partial": "With",
          "signature": "((s-\u003eParser a s r)-\u003eString)-\u003e(r-\u003eString)-\u003eParser a s r-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:showWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscards the results of the argument parser.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "skip",
          "package": "incremental-parser",
          "signature": "Parser a s r' -\u003e Parser a s r",
          "source": "src/Text-ParserCombinators-Incremental.html#skip",
          "type": "function"
        },
        "index": {
          "description": "Discards the results of the argument parser",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "skip",
          "normalized": "Parser a b c-\u003eParser a b d",
          "package": "incremental-parser",
          "signature": "Parser a s r'-\u003eParser a s r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser that consumes and returns the given prefix of the input.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "string",
          "package": "incremental-parser",
          "signature": "s -\u003e Parser a s s",
          "source": "src/Text-ParserCombinators-Incremental.html#string",
          "type": "function"
        },
        "index": {
          "description": "parser that consumes and returns the given prefix of the input",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "string",
          "normalized": "a-\u003eParser b a a",
          "package": "incremental-parser",
          "signature": "s-\u003eParser a s s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialization of \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e on \u003ccode\u003e\u003ca\u003eTextualMonoid\u003c/a\u003e\u003c/code\u003e inputs, accepting the longest sequence of input characters that\n match the given predicate; an optimized version of 'concatMany . satisfyChar'.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "takeCharsWhile",
          "package": "incremental-parser",
          "signature": "(Char -\u003e Bool) -\u003e Parser a s s",
          "source": "src/Text-ParserCombinators-Incremental.html#takeCharsWhile",
          "type": "function"
        },
        "index": {
          "description": "Specialization of takeWhile on TextualMonoid inputs accepting the longest sequence of input characters that match the given predicate an optimized version of concatMany satisfyChar",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "takeCharsWhile",
          "normalized": "(Char-\u003eBool)-\u003eParser a b b",
          "package": "incremental-parser",
          "partial": "Chars While",
          "signature": "(Char-\u003eBool)-\u003eParser a s s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:takeCharsWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialization of \u003ccode\u003e\u003ca\u003etakeWhile1\u003c/a\u003e\u003c/code\u003e on \u003ccode\u003e\u003ca\u003eTextualMonoid\u003c/a\u003e\u003c/code\u003e inputs, accepting the longest non-empty sequence of input atoms\n that match the given predicate; an optimized version of 'concatSome . satisfyChar'.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "takeCharsWhile1",
          "package": "incremental-parser",
          "signature": "(Char -\u003e Bool) -\u003e Parser a s s",
          "source": "src/Text-ParserCombinators-Incremental.html#takeCharsWhile1",
          "type": "function"
        },
        "index": {
          "description": "Specialization of takeWhile1 on TextualMonoid inputs accepting the longest non-empty sequence of input atoms that match the given predicate an optimized version of concatSome satisfyChar",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "takeCharsWhile1",
          "normalized": "(Char-\u003eBool)-\u003eParser a b b",
          "package": "incremental-parser",
          "partial": "Chars While",
          "signature": "(Char-\u003eBool)-\u003eParser a s s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:takeCharsWhile1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser accepting the longest sequence of input atoms that match the given predicate; an optimized version of\n 'concatMany . satisfy'.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "takeWhile",
          "package": "incremental-parser",
          "signature": "(s -\u003e Bool) -\u003e Parser a s s",
          "source": "src/Text-ParserCombinators-Incremental.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "parser accepting the longest sequence of input atoms that match the given predicate an optimized version of concatMany satisfy",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "takeWhile",
          "normalized": "(a-\u003eBool)-\u003eParser b a a",
          "package": "incremental-parser",
          "partial": "While",
          "signature": "(s-\u003eBool)-\u003eParser a s s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser accepting the longest non-empty sequence of input atoms that match the given predicate; an optimized\n version of 'concatSome . satisfy'.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "takeWhile1",
          "package": "incremental-parser",
          "signature": "(s -\u003e Bool) -\u003e Parser a s s",
          "source": "src/Text-ParserCombinators-Incremental.html#takeWhile1",
          "type": "function"
        },
        "index": {
          "description": "parser accepting the longest non-empty sequence of input atoms that match the given predicate an optimized version of concatSome satisfy",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "takeWhile1",
          "normalized": "(a-\u003eBool)-\u003eParser b a a",
          "package": "incremental-parser",
          "partial": "While",
          "signature": "(s-\u003eBool)-\u003eParser a s s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:takeWhile1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser that accepts a specific input atom.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Incremental",
          "name": "token",
          "package": "incremental-parser",
          "signature": "s -\u003e Parser a s s",
          "source": "src/Text-ParserCombinators-Incremental.html#token",
          "type": "function"
        },
        "index": {
          "description": "parser that accepts specific input atom",
          "hierarchy": "Text ParserCombinators Incremental",
          "module": "Text.ParserCombinators.Incremental",
          "name": "token",
          "normalized": "a-\u003eParser b a a",
          "package": "incremental-parser",
          "signature": "s-\u003eParser a s s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/incremental-parser/docs/Text-ParserCombinators-Incremental.html#v:token"
      }
    }
  ]
]