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
        "word": "parcom-lib"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parcom.ByteString.Lazy",
          "name": "Lazy",
          "package": "parcom-lib",
          "source": "src/Text-Parcom-ByteString-Lazy.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Parcom ByteString Lazy",
          "module": "Text.Parcom.ByteString.Lazy",
          "name": "Lazy",
          "package": "parcom-lib",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-ByteString-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parcom.ByteString.Strict",
          "name": "Strict",
          "package": "parcom-lib",
          "source": "src/Text-Parcom-ByteString-Strict.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Parcom ByteString Strict",
          "module": "Text.Parcom.ByteString.Strict",
          "name": "Strict",
          "package": "parcom-lib",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-ByteString-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parcom.ByteString",
          "name": "ByteString",
          "package": "parcom-lib",
          "source": "src/Text-Parcom-ByteString.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Parcom ByteString",
          "module": "Text.Parcom.ByteString",
          "name": "ByteString",
          "package": "parcom-lib",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA collection of predefined combinators. Use these to combine other parsers\n into more complex ones.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parcom.Combinators",
          "name": "Combinators",
          "package": "parcom-lib",
          "source": "src/Text-Parcom-Combinators.html",
          "type": "module"
        },
        "index": {
          "description": "collection of predefined combinators Use these to combine other parsers into more complex ones",
          "hierarchy": "Text Parcom Combinators",
          "module": "Text.Parcom.Combinators",
          "name": "Combinators",
          "package": "parcom-lib",
          "partial": "Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Combinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch two consecutive parser, return the first parser's result iff both\n succeed.\n\u003c/p\u003e",
          "module": "Text.Parcom.Combinators",
          "name": "before",
          "package": "parcom-lib",
          "signature": "ParcomT s t m a -\u003e ParcomT s t m b -\u003e ParcomT s t m a",
          "source": "src/Text-Parcom-Combinators.html#before",
          "type": "function"
        },
        "index": {
          "description": "Match two consecutive parser return the first parser result iff both succeed",
          "hierarchy": "Text Parcom Combinators",
          "module": "Text.Parcom.Combinators",
          "name": "before",
          "normalized": "ParcomT a b c d-\u003eParcomT a b c e-\u003eParcomT a b c d",
          "package": "parcom-lib",
          "signature": "ParcomT s t m a-\u003eParcomT s t m b-\u003eParcomT s t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Combinators.html#v:before"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch three consecutive parsers, return the middle parser's result iff\n all three match. Parsers are given in the order inner, left, right.\n\u003c/p\u003e",
          "module": "Text.Parcom.Combinators",
          "name": "between",
          "package": "parcom-lib",
          "signature": "ParcomT s t m a -\u003e ParcomT s t m l -\u003e ParcomT s t m r -\u003e ParcomT s t m a",
          "source": "src/Text-Parcom-Combinators.html#between",
          "type": "function"
        },
        "index": {
          "description": "Match three consecutive parsers return the middle parser result iff all three match Parsers are given in the order inner left right",
          "hierarchy": "Text Parcom Combinators",
          "module": "Text.Parcom.Combinators",
          "name": "between",
          "normalized": "ParcomT a b c d-\u003eParcomT a b c e-\u003eParcomT a b c f-\u003eParcomT a b c d",
          "package": "parcom-lib",
          "signature": "ParcomT s t m a-\u003eParcomT s t m l-\u003eParcomT s t m r-\u003eParcomT s t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Combinators.html#v:between"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWalk a list of options, return the first one that succeeds.\n\u003c/p\u003e",
          "module": "Text.Parcom.Combinators",
          "name": "choice",
          "package": "parcom-lib",
          "signature": "[ParcomT s t m a] -\u003e ParcomT s t m a",
          "source": "src/Text-Parcom-Combinators.html#choice",
          "type": "function"
        },
        "index": {
          "description": "Walk list of options return the first one that succeeds",
          "hierarchy": "Text Parcom Combinators",
          "module": "Text.Parcom.Combinators",
          "name": "choice",
          "normalized": "[ParcomT a b c d]-\u003eParcomT a b c d",
          "package": "parcom-lib",
          "signature": "[ParcomT s t m a]-\u003eParcomT s t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Combinators.html#v:choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch zero or more occurrences of a parser\n\u003c/p\u003e",
          "module": "Text.Parcom.Combinators",
          "name": "many",
          "package": "parcom-lib",
          "signature": "ParcomT s t m a -\u003e ParcomT s t m [a]",
          "source": "src/Text-Parcom-Combinators.html#many",
          "type": "function"
        },
        "index": {
          "description": "Match zero or more occurrences of parser",
          "hierarchy": "Text Parcom Combinators",
          "module": "Text.Parcom.Combinators",
          "name": "many",
          "normalized": "ParcomT a b c d-\u003eParcomT a b c[d]",
          "package": "parcom-lib",
          "signature": "ParcomT s t m a-\u003eParcomT s t m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Combinators.html#v:many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch one or more occurrences of a parser\n\u003c/p\u003e",
          "module": "Text.Parcom.Combinators",
          "name": "many1",
          "package": "parcom-lib",
          "signature": "ParcomT s t m a -\u003e ParcomT s t m [a]",
          "source": "src/Text-Parcom-Combinators.html#many1",
          "type": "function"
        },
        "index": {
          "description": "Match one or more occurrences of parser",
          "hierarchy": "Text Parcom Combinators",
          "module": "Text.Parcom.Combinators",
          "name": "many1",
          "normalized": "ParcomT a b c d-\u003eParcomT a b c[d]",
          "package": "parcom-lib",
          "signature": "ParcomT s t m a-\u003eParcomT s t m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Combinators.html#v:many1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an item parser and a separator parser, keep parsing until the\n separator or the item fails.\n\u003c/p\u003e",
          "module": "Text.Parcom.Combinators",
          "name": "manySepBy",
          "package": "parcom-lib",
          "signature": "ParcomT s t m a -\u003e ParcomT s t m b -\u003e ParcomT s t m [a]",
          "source": "src/Text-Parcom-Combinators.html#manySepBy",
          "type": "function"
        },
        "index": {
          "description": "Given an item parser and separator parser keep parsing until the separator or the item fails",
          "hierarchy": "Text Parcom Combinators",
          "module": "Text.Parcom.Combinators",
          "name": "manySepBy",
          "normalized": "ParcomT a b c d-\u003eParcomT a b c e-\u003eParcomT a b c[d]",
          "package": "parcom-lib",
          "partial": "Sep By",
          "signature": "ParcomT s t m a-\u003eParcomT s t m b-\u003eParcomT s t m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Combinators.html#v:manySepBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003echoice\u003c/a\u003e\u003c/code\u003e, but each choice tagged with a human-readable name for\n better error reporting.\n\u003c/p\u003e",
          "module": "Text.Parcom.Combinators",
          "name": "namedChoice",
          "package": "parcom-lib",
          "signature": "[(String, ParcomT s t m a)] -\u003e ParcomT s t m a",
          "source": "src/Text-Parcom-Combinators.html#namedChoice",
          "type": "function"
        },
        "index": {
          "description": "Like choice but each choice tagged with human-readable name for better error reporting",
          "hierarchy": "Text Parcom Combinators",
          "module": "Text.Parcom.Combinators",
          "name": "namedChoice",
          "normalized": "[(String,ParcomT a b c d)]-\u003eParcomT a b c d",
          "package": "parcom-lib",
          "partial": "Choice",
          "signature": "[(String,ParcomT s t m a)]-\u003eParcomT s t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Combinators.html#v:namedChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional parsing, ignoring (but consuming) result\n\u003c/p\u003e",
          "module": "Text.Parcom.Combinators",
          "name": "option",
          "package": "parcom-lib",
          "signature": "ParcomT s t m a -\u003e ParcomT s t m ()",
          "source": "src/Text-Parcom-Combinators.html#option",
          "type": "function"
        },
        "index": {
          "description": "Optional parsing ignoring but consuming result",
          "hierarchy": "Text Parcom Combinators",
          "module": "Text.Parcom.Combinators",
          "name": "option",
          "normalized": "ParcomT a b c d-\u003eParcomT a b c()",
          "package": "parcom-lib",
          "signature": "ParcomT s t m a-\u003eParcomT s t m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Combinators.html#v:option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional parsing with default\n\u003c/p\u003e",
          "module": "Text.Parcom.Combinators",
          "name": "optional",
          "package": "parcom-lib",
          "signature": "a -\u003e ParcomT s t m a -\u003e ParcomT s t m a",
          "source": "src/Text-Parcom-Combinators.html#optional",
          "type": "function"
        },
        "index": {
          "description": "Optional parsing with default",
          "hierarchy": "Text Parcom Combinators",
          "module": "Text.Parcom.Combinators",
          "name": "optional",
          "normalized": "a-\u003eParcomT b c d a-\u003eParcomT b c d a",
          "package": "parcom-lib",
          "signature": "a-\u003eParcomT s t m a-\u003eParcomT s t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Combinators.html#v:optional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional parsing to Maybe\n\u003c/p\u003e",
          "module": "Text.Parcom.Combinators",
          "name": "possibly",
          "package": "parcom-lib",
          "signature": "ParcomT s t m a -\u003e ParcomT s t m (Maybe a)",
          "source": "src/Text-Parcom-Combinators.html#possibly",
          "type": "function"
        },
        "index": {
          "description": "Optional parsing to Maybe",
          "hierarchy": "Text Parcom Combinators",
          "module": "Text.Parcom.Combinators",
          "name": "possibly",
          "normalized": "ParcomT a b c d-\u003eParcomT a b c(Maybe d)",
          "package": "parcom-lib",
          "signature": "ParcomT s t m a-\u003eParcomT s t m(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Combinators.html#v:possibly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIgnore the result of a parser.\n\u003c/p\u003e",
          "module": "Text.Parcom.Combinators",
          "name": "skip",
          "package": "parcom-lib",
          "signature": "ParcomT s t m a -\u003e ParcomT s t m ()",
          "source": "src/Text-Parcom-Combinators.html#skip",
          "type": "function"
        },
        "index": {
          "description": "Ignore the result of parser",
          "hierarchy": "Text Parcom Combinators",
          "module": "Text.Parcom.Combinators",
          "name": "skip",
          "normalized": "ParcomT a b c d-\u003eParcomT a b c()",
          "package": "parcom-lib",
          "signature": "ParcomT s t m a-\u003eParcomT s t m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Combinators.html#v:skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the given parser n times, returning all the results as a list.\n\u003c/p\u003e",
          "module": "Text.Parcom.Combinators",
          "name": "times",
          "package": "parcom-lib",
          "signature": "Int -\u003e ParcomT s t m a -\u003e ParcomT s t m [a]",
          "source": "src/Text-Parcom-Combinators.html#times",
          "type": "function"
        },
        "index": {
          "description": "Run the given parser times returning all the results as list",
          "hierarchy": "Text Parcom Combinators",
          "module": "Text.Parcom.Combinators",
          "name": "times",
          "normalized": "Int-\u003eParcomT a b c d-\u003eParcomT a b c[d]",
          "package": "parcom-lib",
          "signature": "Int-\u003eParcomT s t m a-\u003eParcomT s t m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Combinators.html#v:times"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe core functionality of a Parcom parser: defining and running parsers,\n lifting, getting tokens and characters from a stream, and the most basic\n primitive parsers and combinators that cannot easily be expressed in terms\n of other parsers and combinators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parcom.Core",
          "name": "Core",
          "package": "parcom-lib",
          "source": "src/Text-Parcom-Core.html",
          "type": "module"
        },
        "index": {
          "description": "The core functionality of Parcom parser defining and running parsers lifting getting tokens and characters from stream and the most basic primitive parsers and combinators that cannot easily be expressed in terms of other parsers and combinators",
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "Core",
          "package": "parcom-lib",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList-like types.\n\u003c/p\u003e",
          "module": "Text.Parcom.Core",
          "name": "Listish",
          "package": "parcom-lib",
          "source": "src/Text-Parcom-Stream.html#Listish",
          "type": "class"
        },
        "index": {
          "description": "List-like types",
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "Listish",
          "package": "parcom-lib",
          "partial": "Listish",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#t:Listish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParcom as a pure parser\n\u003c/p\u003e",
          "module": "Text.Parcom.Core",
          "name": "Parcom",
          "package": "parcom-lib",
          "source": "src/Text-Parcom-Core.html#Parcom",
          "type": "type"
        },
        "index": {
          "description": "Parcom as pure parser",
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "Parcom",
          "package": "parcom-lib",
          "partial": "Parcom",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#t:Parcom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser error.\n\u003c/p\u003e",
          "module": "Text.Parcom.Core",
          "name": "ParcomError",
          "package": "parcom-lib",
          "source": "src/Text-Parcom-Core.html#ParcomError",
          "type": "data"
        },
        "index": {
          "description": "parser error",
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "ParcomError",
          "package": "parcom-lib",
          "partial": "Parcom Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#t:ParcomError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParcom as a monad transformer. You can access the underlying monad stack\n using the usual lifting techniques.\n\u003c/p\u003e",
          "module": "Text.Parcom.Core",
          "name": "ParcomT",
          "package": "parcom-lib",
          "source": "src/Text-Parcom-Core.html#ParcomT",
          "type": "data"
        },
        "index": {
          "description": "Parcom as monad transformer You can access the underlying monad stack using the usual lifting techniques",
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "ParcomT",
          "package": "parcom-lib",
          "partial": "Parcom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#t:ParcomT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a position in a source file. Both lines and columns are\n 1-based.\n\u003c/p\u003e",
          "module": "Text.Parcom.Core",
          "name": "SourcePosition",
          "package": "parcom-lib",
          "source": "src/Text-Parcom-Core.html#SourcePosition",
          "type": "data"
        },
        "index": {
          "description": "Represents position in source file Both lines and columns are based",
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "SourcePosition",
          "package": "parcom-lib",
          "partial": "Source Position",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#t:SourcePosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypeclass for types that are suitable as source streams. Note that\n implementing just \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e gives you only a small subset of Parcom's\n features; if you want to implement your own \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e instances, you will\n most likely also want to implement \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e for the corresponding token type,\n \u003ccode\u003e\u003ca\u003eListish\u003c/a\u003e\u003c/code\u003e to enable parsers that need to convert to or from lists of tokens,\n and \u003ccode\u003e\u003ca\u003eTextish\u003c/a\u003e\u003c/code\u003e to enable parsers that work on Unicode text.\n\u003c/p\u003e",
          "module": "Text.Parcom.Core",
          "name": "Stream",
          "package": "parcom-lib",
          "source": "src/Text-Parcom-Stream.html#Stream",
          "type": "class"
        },
        "index": {
          "description": "Typeclass for types that are suitable as source streams Note that implementing just Stream gives you only small subset of Parcom features if you want to implement your own Stream instances you will most likely also want to implement Token for the corresponding token type Listish to enable parsers that need to convert to or from lists of tokens and Textish to enable parsers that work on Unicode text",
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "Stream",
          "package": "parcom-lib",
          "partial": "Stream",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#t:Stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnables parsing on a per-character basis rather than per-token. For stream\n types where the token type is \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e already, this is trivial, but for other\n streams (e.g., bytestrings), some extra processing is required to perform a\n conversion to Unicode.\n\u003c/p\u003e",
          "module": "Text.Parcom.Core",
          "name": "Textish",
          "package": "parcom-lib",
          "source": "src/Text-Parcom-Stream.html#Textish",
          "type": "class"
        },
        "index": {
          "description": "Enables parsing on per-character basis rather than per-token For stream types where the token type is Char already this is trivial but for other streams e.g bytestrings some extra processing is required to perform conversion to Unicode",
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "Textish",
          "package": "parcom-lib",
          "partial": "Textish",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#t:Textish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis typeclass is pretty much required to do anything useful with Parcom;\n it is needed for Parcom to detect line endings so that parser errors will\n report the correct source positions. If you need to parse streams that do\n not support any meaningful concept of lines, consider implementing a dummy\n instance, like so:\n \u003ccode\u003e\n instance Token Foobar where\n     isLineDelimiter _ = False\n \u003c/code\u003e\n This will treat the entire input as a single line.\n\u003c/p\u003e",
          "module": "Text.Parcom.Core",
          "name": "Token",
          "package": "parcom-lib",
          "source": "src/Text-Parcom-Stream.html#Token",
          "type": "class"
        },
        "index": {
          "description": "This typeclass is pretty much required to do anything useful with Parcom it is needed for Parcom to detect line endings so that parser errors will report the correct source positions If you need to parse streams that do not support any meaningful concept of lines consider implementing dummy instance like so instance Token Foobar where isLineDelimiter False This will treat the entire input as single line",
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "Token",
          "package": "parcom-lib",
          "partial": "Token",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative binary operation\n\u003c/p\u003e",
          "module": "Text.Parcom.Core",
          "name": "(\u003c|\u003e)",
          "package": "parcom-lib",
          "signature": "forall a.  f a -\u003e f a -\u003e f a",
          "type": "function"
        },
        "index": {
          "description": "An associative binary operation",
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "(\u003c|\u003e) \u003c|\u003e",
          "normalized": "a b c d-\u003ec d-\u003ec d",
          "package": "parcom-lib",
          "signature": "forall a. f a-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#v:-60--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTags a parser with a human-readable description of the expected entity,\n generating an \u003ca\u003eExpected {entity}\u003c/a\u003e type error message on failure.\n\u003c/p\u003e",
          "module": "Text.Parcom.Core",
          "name": "(\u003c?\u003e)",
          "package": "parcom-lib",
          "signature": "ParcomT s t m a -\u003e String -\u003e ParcomT s t m a",
          "source": "src/Text-Parcom-Core.html#%3C%3F%3E",
          "type": "function"
        },
        "index": {
          "description": "Tags parser with human-readable description of the expected entity generating an Expected entity type error message on failure",
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "(\u003c?\u003e) \u003c?\u003e",
          "normalized": "ParcomT a b c d-\u003eString-\u003eParcomT a b c d",
          "package": "parcom-lib",
          "signature": "ParcomT s t m a-\u003eString-\u003eParcomT s t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#v:-60--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parcom.Core",
          "name": "ParcomError",
          "package": "parcom-lib",
          "signature": "ParcomError",
          "source": "src/Text-Parcom-Core.html#ParcomError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "ParcomError",
          "package": "parcom-lib",
          "partial": "Parcom Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#v:ParcomError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parcom.Core",
          "name": "SourcePosition",
          "package": "parcom-lib",
          "signature": "SourcePosition",
          "source": "src/Text-Parcom-Core.html#SourcePosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "SourcePosition",
          "package": "parcom-lib",
          "partial": "Source Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#v:SourcePosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks whether end-of-input has been reached.\n\u003c/p\u003e",
          "module": "Text.Parcom.Core",
          "name": "atEnd",
          "package": "parcom-lib",
          "signature": "ParcomT s t m Bool",
          "source": "src/Text-Parcom-Core.html#atEnd",
          "type": "function"
        },
        "index": {
          "description": "Checks whether end-of-input has been reached",
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "atEnd",
          "package": "parcom-lib",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#v:atEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identity of \u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Parcom.Core",
          "name": "empty",
          "package": "parcom-lib",
          "signature": "forall a.  f a",
          "type": "function"
        },
        "index": {
          "description": "The identity of",
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "empty",
          "package": "parcom-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a raw parser to allow handling success and failure. The error and\n success handlers take the error or parsed value, respectively, and return\n a parser that should be applied in the error or success case, respectively.\n No backtracking is performed.\n\u003c/p\u003e",
          "module": "Text.Parcom.Core",
          "name": "handle",
          "package": "parcom-lib",
          "signature": "ParcomT s t m a -\u003e (ParcomError -\u003e ParcomT s t m b) -\u003e (a -\u003e ParcomT s t m b) -\u003e ParcomT s t m b",
          "source": "src/Text-Parcom-Core.html#handle",
          "type": "function"
        },
        "index": {
          "description": "Wrap raw parser to allow handling success and failure The error and success handlers take the error or parsed value respectively and return parser that should be applied in the error or success case respectively No backtracking is performed",
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "handle",
          "normalized": "ParcomT a b c d-\u003e(ParcomError-\u003eParcomT a b c e)-\u003e(d-\u003eParcomT a b c e)-\u003eParcomT a b c e",
          "package": "parcom-lib",
          "signature": "ParcomT s t m a-\u003e(ParcomError-\u003eParcomT s t m b)-\u003e(a-\u003eParcomT s t m b)-\u003eParcomT s t m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#v:handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ehandle\u003c/a\u003e\u003c/code\u003e, but backtrack on error (that is, if the raw parser\n fails, any input it has consumed is restored.\n\u003c/p\u003e",
          "module": "Text.Parcom.Core",
          "name": "handleB",
          "package": "parcom-lib",
          "signature": "ParcomT s t m a -\u003e (ParcomError -\u003e ParcomT s t m b) -\u003e (a -\u003e ParcomT s t m b) -\u003e ParcomT s t m b",
          "source": "src/Text-Parcom-Core.html#handleB",
          "type": "function"
        },
        "index": {
          "description": "Same as handle but backtrack on error that is if the raw parser fails any input it has consumed is restored",
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "handleB",
          "normalized": "ParcomT a b c d-\u003e(ParcomError-\u003eParcomT a b c e)-\u003e(d-\u003eParcomT a b c e)-\u003eParcomT a b c e",
          "package": "parcom-lib",
          "signature": "ParcomT s t m a-\u003e(ParcomError-\u003eParcomT s t m b)-\u003e(a-\u003eParcomT s t m b)-\u003eParcomT s t m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#v:handleB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the next token from the stream and consumes it.\n Fails at end-of-input.\n\u003c/p\u003e",
          "module": "Text.Parcom.Core",
          "name": "next",
          "package": "parcom-lib",
          "signature": "ParcomT s t m t",
          "source": "src/Text-Parcom-Core.html#next",
          "type": "function"
        },
        "index": {
          "description": "Gets the next token from the stream and consumes it Fails at end-of-input",
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "next",
          "package": "parcom-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet one character from the stream, and consume it. Fails when the input\n stream contains a sequence that does not represent a valid character, or\n when the end of the input stream has been reached.\n\u003c/p\u003e",
          "module": "Text.Parcom.Core",
          "name": "nextChar",
          "package": "parcom-lib",
          "signature": "ParcomT s t m Char",
          "source": "src/Text-Parcom-Core.html#nextChar",
          "type": "function"
        },
        "index": {
          "description": "Get one character from the stream and consume it Fails when the input stream contains sequence that does not represent valid character or when the end of the input stream has been reached",
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "nextChar",
          "package": "parcom-lib",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#v:nextChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSucceeds iff the given parser fails\n\u003c/p\u003e",
          "module": "Text.Parcom.Core",
          "name": "notFollowedBy",
          "package": "parcom-lib",
          "signature": "ParcomT s t m a -\u003e ParcomT s t m ()",
          "source": "src/Text-Parcom-Core.html#notFollowedBy",
          "type": "function"
        },
        "index": {
          "description": "Succeeds iff the given parser fails",
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "notFollowedBy",
          "normalized": "ParcomT a b c d-\u003eParcomT a b c()",
          "package": "parcom-lib",
          "partial": "Followed By",
          "signature": "ParcomT s t m a-\u003eParcomT s t m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#v:notFollowedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a pure parcom parser and return the result\n\u003c/p\u003e",
          "module": "Text.Parcom.Core",
          "name": "parse",
          "package": "parcom-lib",
          "signature": "Parcom s t a -\u003e String -\u003e s -\u003e Either ParcomError a",
          "source": "src/Text-Parcom-Core.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Run pure parcom parser and return the result",
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "parse",
          "normalized": "Parcom a b c-\u003eString-\u003ea-\u003eEither ParcomError c",
          "package": "parcom-lib",
          "signature": "Parcom s t a-\u003eString-\u003es-\u003eEither ParcomError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parcom transformer and return the result\n\u003c/p\u003e",
          "module": "Text.Parcom.Core",
          "name": "parseT",
          "package": "parcom-lib",
          "signature": "ParcomT s t m a -\u003e String -\u003e s -\u003e m (Either ParcomError a)",
          "source": "src/Text-Parcom-Core.html#parseT",
          "type": "function"
        },
        "index": {
          "description": "Run parcom transformer and return the result",
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "parseT",
          "normalized": "ParcomT a b c d-\u003eString-\u003ea-\u003ec(Either ParcomError d)",
          "package": "parcom-lib",
          "signature": "ParcomT s t m a-\u003eString-\u003es-\u003em(Either ParcomError a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#v:parseT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHuman-readable description of the error\n\u003c/p\u003e",
          "module": "Text.Parcom.Core",
          "name": "peErrorDescription",
          "package": "parcom-lib",
          "signature": "String",
          "source": "src/Text-Parcom-Core.html#ParcomError",
          "type": "function"
        },
        "index": {
          "description": "Human-readable description of the error",
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "peErrorDescription",
          "package": "parcom-lib",
          "partial": "Error Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#v:peErrorDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePosition in the source where the error was found.\n\u003c/p\u003e",
          "module": "Text.Parcom.Core",
          "name": "peSourcePosition",
          "package": "parcom-lib",
          "signature": "SourcePosition",
          "source": "src/Text-Parcom-Core.html#ParcomError",
          "type": "function"
        },
        "index": {
          "description": "Position in the source where the error was found",
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "peSourcePosition",
          "package": "parcom-lib",
          "partial": "Source Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#v:peSourcePosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the next token from the stream without consuming it.\n Fails at end-of-input.\n\u003c/p\u003e",
          "module": "Text.Parcom.Core",
          "name": "peek",
          "package": "parcom-lib",
          "signature": "ParcomT s t m t",
          "source": "src/Text-Parcom-Core.html#peek",
          "type": "function"
        },
        "index": {
          "description": "Gets the next token from the stream without consuming it Fails at end-of-input",
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "peek",
          "package": "parcom-lib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet one character from the stream, but do not consume it. Fails when the\n input stream contains a sequence that does not represent a valid character,\n or when the end of the input stream has been reached.\n\u003c/p\u003e",
          "module": "Text.Parcom.Core",
          "name": "peekChar",
          "package": "parcom-lib",
          "signature": "ParcomT s t m Char",
          "source": "src/Text-Parcom-Core.html#peekChar",
          "type": "function"
        },
        "index": {
          "description": "Get one character from the stream but do not consume it Fails when the input stream contains sequence that does not represent valid character or when the end of the input stream has been reached",
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "peekChar",
          "package": "parcom-lib",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#v:peekChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parcom.Core",
          "name": "posColumn",
          "package": "parcom-lib",
          "signature": "Int",
          "source": "src/Text-Parcom-Core.html#SourcePosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "posColumn",
          "package": "parcom-lib",
          "partial": "Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#v:posColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parcom.Core",
          "name": "posFileName",
          "package": "parcom-lib",
          "signature": "String",
          "source": "src/Text-Parcom-Core.html#SourcePosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "posFileName",
          "package": "parcom-lib",
          "partial": "File Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#v:posFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parcom.Core",
          "name": "posLine",
          "package": "parcom-lib",
          "signature": "Int",
          "source": "src/Text-Parcom-Core.html#SourcePosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "posLine",
          "package": "parcom-lib",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#v:posLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBacktracking modifier; restores the parser state to the previous situation\n if the wrapped parser fails.\n\u003c/p\u003e",
          "module": "Text.Parcom.Core",
          "name": "try",
          "package": "parcom-lib",
          "signature": "ParcomT s t m a -\u003e ParcomT s t m a",
          "source": "src/Text-Parcom-Core.html#try",
          "type": "function"
        },
        "index": {
          "description": "Backtracking modifier restores the parser state to the previous situation if the wrapped parser fails",
          "hierarchy": "Text Parcom Core",
          "module": "Text.Parcom.Core",
          "name": "try",
          "normalized": "ParcomT a b c d-\u003eParcomT a b c d",
          "package": "parcom-lib",
          "signature": "ParcomT s t m a-\u003eParcomT s t m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Core.html#v:try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parcom.Internal",
          "name": "Internal",
          "package": "parcom-lib",
          "source": "src/Text-Parcom-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Parcom Internal",
          "module": "Text.Parcom.Internal",
          "name": "Internal",
          "package": "parcom-lib",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parcom.Internal",
          "name": "formatOptionList",
          "package": "parcom-lib",
          "signature": "[String] -\u003e String",
          "source": "src/Text-Parcom-Internal.html#formatOptionList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parcom Internal",
          "module": "Text.Parcom.Internal",
          "name": "formatOptionList",
          "normalized": "[String]-\u003eString",
          "package": "parcom-lib",
          "partial": "Option List",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Internal.html#v:formatOptionList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrimitive parsers.\n\u003c/p\u003e\u003cp\u003eRegarding consuming input, unless states otherwise, all of these behave as\n follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If a parser succeeds, it consumes the input it matches\n\u003c/li\u003e\u003cli\u003e If a parser fails, it does not consume any input at all\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Text.Parcom.Prim",
          "name": "Prim",
          "package": "parcom-lib",
          "source": "src/Text-Parcom-Prim.html",
          "type": "module"
        },
        "index": {
          "description": "Primitive parsers Regarding consuming input unless states otherwise all of these behave as follows If parser succeeds it consumes the input it matches If parser fails it does not consume any input at all",
          "hierarchy": "Text Parcom Prim",
          "module": "Text.Parcom.Prim",
          "name": "Prim",
          "package": "parcom-lib",
          "partial": "Prim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Prim.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the next token from the stream\n\u003c/p\u003e",
          "module": "Text.Parcom.Prim",
          "name": "anyToken",
          "package": "parcom-lib",
          "signature": "ParcomT s t m t",
          "source": "src/Text-Parcom-Prim.html#anyToken",
          "type": "function"
        },
        "index": {
          "description": "Gets the next token from the stream",
          "hierarchy": "Text Parcom Prim",
          "module": "Text.Parcom.Prim",
          "name": "anyToken",
          "package": "parcom-lib",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Prim.html#v:anyToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSucceeds iff end-of-input has been reached\n\u003c/p\u003e",
          "module": "Text.Parcom.Prim",
          "name": "eof",
          "package": "parcom-lib",
          "signature": "ParcomT s t m ()",
          "source": "src/Text-Parcom-Prim.html#eof",
          "type": "function"
        },
        "index": {
          "description": "Succeeds iff end-of-input has been reached",
          "hierarchy": "Text Parcom Prim",
          "module": "Text.Parcom.Prim",
          "name": "eof",
          "normalized": "ParcomT a b c()",
          "package": "parcom-lib",
          "signature": "ParcomT s t m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Prim.html#v:eof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches one token against a list of prohibited tokens; returns the\n non-matching token or fails.\n\u003c/p\u003e",
          "module": "Text.Parcom.Prim",
          "name": "noneOf",
          "package": "parcom-lib",
          "signature": "[t] -\u003e ParcomT s t m t",
          "source": "src/Text-Parcom-Prim.html#noneOf",
          "type": "function"
        },
        "index": {
          "description": "Matches one token against list of prohibited tokens returns the non-matching token or fails",
          "hierarchy": "Text Parcom Prim",
          "module": "Text.Parcom.Prim",
          "name": "noneOf",
          "normalized": "[a]-\u003eParcomT b a c a",
          "package": "parcom-lib",
          "partial": "Of",
          "signature": "[t]-\u003eParcomT s t m t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Prim.html#v:noneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches one token against a list of possible tokens; returns the\n matching token or fails.\n\u003c/p\u003e",
          "module": "Text.Parcom.Prim",
          "name": "oneOf",
          "package": "parcom-lib",
          "signature": "[t] -\u003e ParcomT s t m t",
          "source": "src/Text-Parcom-Prim.html#oneOf",
          "type": "function"
        },
        "index": {
          "description": "Matches one token against list of possible tokens returns the matching token or fails",
          "hierarchy": "Text Parcom Prim",
          "module": "Text.Parcom.Prim",
          "name": "oneOf",
          "normalized": "[a]-\u003eParcomT b a c a",
          "package": "parcom-lib",
          "partial": "Of",
          "signature": "[t]-\u003eParcomT s t m t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Prim.html#v:oneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a series of tokens exactly. Unlike \u003ccode\u003e\u003ca\u003etokens\u003c/a\u003e\u003c/code\u003e, this parser accepts\n the target sequence by the stream's type instead of list-of-tokens.\n Depending on the stream's \u003ccode\u003e\u003ca\u003eListish\u003c/a\u003e\u003c/code\u003e implementation, this may be more\n efficient than matching and consuming the tokens one-by-one, as \u003ccode\u003e\u003ca\u003etokens\u003c/a\u003e\u003c/code\u003e\n does.\n\u003c/p\u003e",
          "module": "Text.Parcom.Prim",
          "name": "prefix",
          "package": "parcom-lib",
          "signature": "s -\u003e ParcomT s t m s",
          "source": "src/Text-Parcom-Prim.html#prefix",
          "type": "function"
        },
        "index": {
          "description": "Match series of tokens exactly Unlike tokens this parser accepts the target sequence by the stream type instead of list-of-tokens Depending on the stream Listish implementation this may be more efficient than matching and consuming the tokens one-by-one as tokens does",
          "hierarchy": "Text Parcom Prim",
          "module": "Text.Parcom.Prim",
          "name": "prefix",
          "normalized": "a-\u003eParcomT a b c a",
          "package": "parcom-lib",
          "signature": "s-\u003eParcomT s t m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Prim.html#v:prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSucceeds if the given predicate is met for the next token.\n\u003c/p\u003e",
          "module": "Text.Parcom.Prim",
          "name": "satisfy",
          "package": "parcom-lib",
          "signature": "(t -\u003e Bool) -\u003e ParcomT s t m t",
          "source": "src/Text-Parcom-Prim.html#satisfy",
          "type": "function"
        },
        "index": {
          "description": "Succeeds if the given predicate is met for the next token",
          "hierarchy": "Text Parcom Prim",
          "module": "Text.Parcom.Prim",
          "name": "satisfy",
          "normalized": "(a-\u003eBool)-\u003eParcomT b a c a",
          "package": "parcom-lib",
          "signature": "(t-\u003eBool)-\u003eParcomT s t m t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Prim.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExactly match one particular token\n\u003c/p\u003e",
          "module": "Text.Parcom.Prim",
          "name": "token",
          "package": "parcom-lib",
          "signature": "t -\u003e ParcomT s t m t",
          "source": "src/Text-Parcom-Prim.html#token",
          "type": "function"
        },
        "index": {
          "description": "Exactly match one particular token",
          "hierarchy": "Text Parcom Prim",
          "module": "Text.Parcom.Prim",
          "name": "token",
          "normalized": "a-\u003eParcomT b a c a",
          "package": "parcom-lib",
          "signature": "t-\u003eParcomT s t m t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Prim.html#v:token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a series of tokens exactly\n\u003c/p\u003e",
          "module": "Text.Parcom.Prim",
          "name": "tokens",
          "package": "parcom-lib",
          "signature": "[t] -\u003e ParcomT s t m [t]",
          "source": "src/Text-Parcom-Prim.html#tokens",
          "type": "function"
        },
        "index": {
          "description": "Match series of tokens exactly",
          "hierarchy": "Text Parcom Prim",
          "module": "Text.Parcom.Prim",
          "name": "tokens",
          "normalized": "[a]-\u003eParcomT b a c[a]",
          "package": "parcom-lib",
          "signature": "[t]-\u003eParcomT s t m[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Prim.html#v:tokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypeclasses to describe various aspects of parsable streams and tokens.\n The standard range of Haskell string-like types (\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, and both the lazy\n and strict flavors of \u003ccode\u003eByteString\u003c/code\u003e and \u003ccode\u003eText\u003c/code\u003e) is supported already, as well\n as any \u003ccode\u003eList\u003c/code\u003e, so under normal circumstances, you should not need to touch\n this module directly.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parcom.Stream",
          "name": "Stream",
          "package": "parcom-lib",
          "source": "src/Text-Parcom-Stream.html",
          "type": "module"
        },
        "index": {
          "description": "Typeclasses to describe various aspects of parsable streams and tokens The standard range of Haskell string-like types String and both the lazy and strict flavors of ByteString and Text is supported already as well as any List so under normal circumstances you should not need to touch this module directly",
          "hierarchy": "Text Parcom Stream",
          "module": "Text.Parcom.Stream",
          "name": "Stream",
          "package": "parcom-lib",
          "partial": "Stream",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Stream.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList-like types.\n\u003c/p\u003e",
          "module": "Text.Parcom.Stream",
          "name": "Listish",
          "package": "parcom-lib",
          "source": "src/Text-Parcom-Stream.html#Listish",
          "type": "class"
        },
        "index": {
          "description": "List-like types",
          "hierarchy": "Text Parcom Stream",
          "module": "Text.Parcom.Stream",
          "name": "Listish",
          "package": "parcom-lib",
          "partial": "Listish",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Stream.html#t:Listish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypeclass for types that are suitable as source streams. Note that\n implementing just \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e gives you only a small subset of Parcom's\n features; if you want to implement your own \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e instances, you will\n most likely also want to implement \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e for the corresponding token type,\n \u003ccode\u003e\u003ca\u003eListish\u003c/a\u003e\u003c/code\u003e to enable parsers that need to convert to or from lists of tokens,\n and \u003ccode\u003e\u003ca\u003eTextish\u003c/a\u003e\u003c/code\u003e to enable parsers that work on Unicode text.\n\u003c/p\u003e",
          "module": "Text.Parcom.Stream",
          "name": "Stream",
          "package": "parcom-lib",
          "source": "src/Text-Parcom-Stream.html#Stream",
          "type": "class"
        },
        "index": {
          "description": "Typeclass for types that are suitable as source streams Note that implementing just Stream gives you only small subset of Parcom features if you want to implement your own Stream instances you will most likely also want to implement Token for the corresponding token type Listish to enable parsers that need to convert to or from lists of tokens and Textish to enable parsers that work on Unicode text",
          "hierarchy": "Text Parcom Stream",
          "module": "Text.Parcom.Stream",
          "name": "Stream",
          "package": "parcom-lib",
          "partial": "Stream",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Stream.html#t:Stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnables parsing on a per-character basis rather than per-token. For stream\n types where the token type is \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e already, this is trivial, but for other\n streams (e.g., bytestrings), some extra processing is required to perform a\n conversion to Unicode.\n\u003c/p\u003e",
          "module": "Text.Parcom.Stream",
          "name": "Textish",
          "package": "parcom-lib",
          "source": "src/Text-Parcom-Stream.html#Textish",
          "type": "class"
        },
        "index": {
          "description": "Enables parsing on per-character basis rather than per-token For stream types where the token type is Char already this is trivial but for other streams e.g bytestrings some extra processing is required to perform conversion to Unicode",
          "hierarchy": "Text Parcom Stream",
          "module": "Text.Parcom.Stream",
          "name": "Textish",
          "package": "parcom-lib",
          "partial": "Textish",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Stream.html#t:Textish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis typeclass is pretty much required to do anything useful with Parcom;\n it is needed for Parcom to detect line endings so that parser errors will\n report the correct source positions. If you need to parse streams that do\n not support any meaningful concept of lines, consider implementing a dummy\n instance, like so:\n \u003ccode\u003e\n instance Token Foobar where\n     isLineDelimiter _ = False\n \u003c/code\u003e\n This will treat the entire input as a single line.\n\u003c/p\u003e",
          "module": "Text.Parcom.Stream",
          "name": "Token",
          "package": "parcom-lib",
          "source": "src/Text-Parcom-Stream.html#Token",
          "type": "class"
        },
        "index": {
          "description": "This typeclass is pretty much required to do anything useful with Parcom it is needed for Parcom to detect line endings so that parser errors will report the correct source positions If you need to parse streams that do not support any meaningful concept of lines consider implementing dummy instance like so instance Token Foobar where isLineDelimiter False This will treat the entire input as single line",
          "hierarchy": "Text Parcom Stream",
          "module": "Text.Parcom.Stream",
          "name": "Token",
          "package": "parcom-lib",
          "partial": "Token",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Stream.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parcom.Stream",
          "name": "atEnd",
          "package": "parcom-lib",
          "signature": "s -\u003e Bool",
          "source": "src/Text-Parcom-Stream.html#atEnd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Parcom Stream",
          "module": "Text.Parcom.Stream",
          "name": "atEnd",
          "normalized": "a-\u003eBool",
          "package": "parcom-lib",
          "partial": "End",
          "signature": "s-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Stream.html#v:atEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parcom.Stream",
          "name": "consume",
          "package": "parcom-lib",
          "signature": "s -\u003e s",
          "source": "src/Text-Parcom-Stream.html#consume",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Parcom Stream",
          "module": "Text.Parcom.Stream",
          "name": "consume",
          "normalized": "a-\u003ea",
          "package": "parcom-lib",
          "signature": "s-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Stream.html#v:consume"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parcom.Stream",
          "name": "fromList",
          "package": "parcom-lib",
          "signature": "[t] -\u003e s",
          "source": "src/Text-Parcom-Stream.html#fromList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Parcom Stream",
          "module": "Text.Parcom.Stream",
          "name": "fromList",
          "normalized": "[a]-\u003eb",
          "package": "parcom-lib",
          "partial": "List",
          "signature": "[t]-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Stream.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parcom.Stream",
          "name": "isLineDelimiter",
          "package": "parcom-lib",
          "signature": "t -\u003e Bool",
          "source": "src/Text-Parcom-Stream.html#isLineDelimiter",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Parcom Stream",
          "module": "Text.Parcom.Stream",
          "name": "isLineDelimiter",
          "normalized": "a-\u003eBool",
          "package": "parcom-lib",
          "partial": "Line Delimiter",
          "signature": "t-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Stream.html#v:isLineDelimiter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parcom.Stream",
          "name": "peek",
          "package": "parcom-lib",
          "signature": "s -\u003e t",
          "source": "src/Text-Parcom-Stream.html#peek",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Parcom Stream",
          "module": "Text.Parcom.Stream",
          "name": "peek",
          "normalized": "a-\u003eb",
          "package": "parcom-lib",
          "signature": "s-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Stream.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter-wise equivalent of \u003ccode\u003e\u003ca\u003epeek\u003c/a\u003e\u003c/code\u003e. Returns a pair, where the first\n element is \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the parsed Unicode character, or Nothing on failure,\n and the second element is the number of tokens that the character has\n consumed. Generally, there are two reasons why parsing may fail:\n end-of-input, and a token sequence that does not represent a valid\n Unicode character according to the underlying stream's semantics.\n\u003c/p\u003e",
          "module": "Text.Parcom.Stream",
          "name": "peekChar",
          "package": "parcom-lib",
          "signature": "s -\u003e (Maybe Char, Int)",
          "source": "src/Text-Parcom-Stream.html#peekChar",
          "type": "method"
        },
        "index": {
          "description": "Character-wise equivalent of peek Returns pair where the first element is Just the parsed Unicode character or Nothing on failure and the second element is the number of tokens that the character has consumed Generally there are two reasons why parsing may fail end-of-input and token sequence that does not represent valid Unicode character according to the underlying stream semantics",
          "hierarchy": "Text Parcom Stream",
          "module": "Text.Parcom.Stream",
          "name": "peekChar",
          "normalized": "a-\u003e(Maybe Char,Int)",
          "package": "parcom-lib",
          "partial": "Char",
          "signature": "s-\u003e(Maybe Char,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Stream.html#v:peekChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parcom.Stream",
          "name": "pop",
          "package": "parcom-lib",
          "signature": "s -\u003e (t, s)",
          "source": "src/Text-Parcom-Stream.html#pop",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Parcom Stream",
          "module": "Text.Parcom.Stream",
          "name": "pop",
          "normalized": "a-\u003e(b,a)",
          "package": "parcom-lib",
          "signature": "s-\u003e(t,s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Stream.html#v:pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parcom.Stream",
          "name": "toList",
          "package": "parcom-lib",
          "signature": "s -\u003e [t]",
          "source": "src/Text-Parcom-Stream.html#toList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Parcom Stream",
          "module": "Text.Parcom.Stream",
          "name": "toList",
          "normalized": "a-\u003e[b]",
          "package": "parcom-lib",
          "partial": "List",
          "signature": "s-\u003e[t]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Stream.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parcom.Text.Lazy",
          "name": "Lazy",
          "package": "parcom-lib",
          "source": "src/Text-Parcom-Text-Lazy.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Parcom Text Lazy",
          "module": "Text.Parcom.Text.Lazy",
          "name": "Lazy",
          "package": "parcom-lib",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Text-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parcom.Text.Strict",
          "name": "Strict",
          "package": "parcom-lib",
          "source": "src/Text-Parcom-Text-Strict.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Parcom Text Strict",
          "module": "Text.Parcom.Text.Strict",
          "name": "Strict",
          "package": "parcom-lib",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Text-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parcom.Text",
          "name": "Text",
          "package": "parcom-lib",
          "source": "src/Text-Parcom-Text.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Parcom Text",
          "module": "Text.Parcom.Text",
          "name": "Text",
          "package": "parcom-lib",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parcom.Textual",
          "name": "Textual",
          "package": "parcom-lib",
          "source": "src/Text-Parcom-Textual.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Parcom Textual",
          "module": "Text.Parcom.Textual",
          "name": "Textual",
          "package": "parcom-lib",
          "partial": "Textual",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Textual.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parcom.Textual",
          "name": "char",
          "package": "parcom-lib",
          "signature": "Char -\u003e ParcomT s t m Char",
          "source": "src/Text-Parcom-Textual.html#char",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parcom Textual",
          "module": "Text.Parcom.Textual",
          "name": "char",
          "normalized": "Char-\u003eParcomT a b c Char",
          "package": "parcom-lib",
          "signature": "Char-\u003eParcomT s t m Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Textual.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parcom.Textual",
          "name": "string",
          "package": "parcom-lib",
          "signature": "String -\u003e ParcomT s t m String",
          "source": "src/Text-Parcom-Textual.html#string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Parcom Textual",
          "module": "Text.Parcom.Textual",
          "name": "string",
          "normalized": "String-\u003eParcomT a b c String",
          "package": "parcom-lib",
          "signature": "String-\u003eParcomT s t m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Textual.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Parcom.Word8",
          "name": "Word8",
          "package": "parcom-lib",
          "source": "src/Text-Parcom-Word8.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Parcom Word8",
          "module": "Text.Parcom.Word8",
          "name": "Word8",
          "package": "parcom-lib",
          "partial": "Word",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom-Word8.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA parser-combinator library.\n\u003c/p\u003e\u003cp\u003eThe primary goal in writing Parcom was to facilitate parsing Unicode string\n data from various source streams, including raw\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es - while Attoparsec can parse\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es, it sacrifices some convenience for\n performance, and using it to parse textual data is not as comfortable as I\n would like; Parsec can handle textual data much better, but it needs the\n input to be converetd to Unicode for this to work nicely. Nonetheless,\n Parcom's interface is quite obviously heavily inspired by both Parsec and\n Attoparsec.\n\u003c/p\u003e\u003cp\u003eParcom supports \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e (lazy and strict) and\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e (lazy and strict) as its input format out-of-the-box. By\n implementing one or more of the typeclasses in \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e, you can\n extend Parcom to work on other input types as well.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Parcom",
          "name": "Parcom",
          "package": "parcom-lib",
          "source": "src/Text-Parcom.html",
          "type": "module"
        },
        "index": {
          "description": "parser-combinator library The primary goal in writing Parcom was to facilitate parsing Unicode string data from various source streams including raw ByteString while Attoparsec can parse ByteString it sacrifices some convenience for performance and using it to parse textual data is not as comfortable as would like Parsec can handle textual data much better but it needs the input to be converetd to Unicode for this to work nicely Nonetheless Parcom interface is quite obviously heavily inspired by both Parsec and Attoparsec Parcom supports String ByteString lazy and strict and Text lazy and strict as its input format out-of-the-box By implementing one or more of the typeclasses in Stream you can extend Parcom to work on other input types as well",
          "hierarchy": "Text Parcom",
          "module": "Text.Parcom",
          "name": "Parcom",
          "package": "parcom-lib",
          "partial": "Parcom",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parcom-lib/docs/Text-Parcom.html#"
      }
    }
  ]
]