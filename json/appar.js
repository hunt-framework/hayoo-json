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
        "word": "appar"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple \u003ccode\u003eApplicative\u003c/code\u003e parser whose input is strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\nThe usage is the same as parsec.\n\u003c/p\u003e\u003cp\u003eParsec 3 provides features which Parsec 2 does not provide:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eApplicative\u003c/code\u003e style\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e as input\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eBut Haskell Platform includes Parsec 2, not Parsec 3. Installing\nParsec 3 to Haskell Platform environment makes it mess. So, this library\nwas implemented.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Appar.ByteString",
          "name": "ByteString",
          "package": "appar",
          "source": "src/Text-Appar-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "Simple Applicative parser whose input is strict ByteString The usage is the same as parsec Parsec provides features which Parsec does not provide Applicative style ByteString as input But Haskell Platform includes Parsec not Parsec Installing Parsec to Haskell Platform environment makes it mess So this library was implemented",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "ByteString",
          "package": "appar",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class for parser input.\n\u003c/p\u003e",
          "module": "Text.Appar.ByteString",
          "name": "Input",
          "package": "appar",
          "source": "src/Text-Appar-Input.html#Input",
          "type": "class"
        },
        "index": {
          "description": "The class for parser input",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "Input",
          "package": "appar",
          "partial": "Input",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#t:Input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Appar.ByteString",
          "name": "MkParser",
          "package": "appar",
          "source": "src/Text-Appar-Parser.html#MkParser",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "MkParser",
          "package": "appar",
          "partial": "Mk Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#t:MkParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParser synonym for strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Appar.ByteString",
          "name": "Parser",
          "package": "appar",
          "source": "src/Text-Appar-ByteString.html#Parser",
          "type": "type"
        },
        "index": {
          "description": "Parser synonym for strict ByteString",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "Parser",
          "package": "appar",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence actions, discarding the value of the first argument.\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "(*\u003e)",
          "package": "appar",
          "signature": "forall a b.  f a -\u003e f b -\u003e f b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:-42--62-\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:-42--62-\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:-42--62-\"]"
        },
        "index": {
          "description": "Sequence actions discarding the value of the first argument",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "(*\u003e) *\u003e",
          "normalized": "a b c d b-\u003ed e-\u003ed e",
          "package": "appar",
          "signature": "forall a b. f a-\u003ef b-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:-42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn associative binary operation\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "(\u003c|\u003e)",
          "package": "appar",
          "signature": "forall a.  f a -\u003e f a -\u003e f a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:-60--124--62-\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:-60--124--62-\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:-60--124--62-\"]"
        },
        "index": {
          "description": "An associative binary operation",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "(\u003c|\u003e) \u003c|\u003e",
          "normalized": "a b c d-\u003ec d-\u003ec d",
          "package": "appar",
          "signature": "forall a. f a-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:-60--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace all locations in the input with the same value.\n The default definition is \u003ccode\u003e\u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but this may be\n overridden with a more efficient version.\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "(\u003c$)",
          "package": "appar",
          "signature": "forall a b.  a -\u003e f b -\u003e f a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:-60--36-\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:-60--36-\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:-60--36-\"]"
        },
        "index": {
          "description": "Replace all locations in the input with the same value The default definition is fmap const but this may be overridden with more efficient version",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "(\u003c$) \u003c$",
          "normalized": "a b c b-\u003ed e-\u003ed b",
          "package": "appar",
          "signature": "forall a b. a-\u003ef b-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:-60--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "(\u003c$\u003e)",
          "package": "appar",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:-60--36--62-\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:-60--36--62-\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:-60--36--62-\"]"
        },
        "index": {
          "description": "An infix synonym for fmap",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "(\u003c$\u003e) \u003c$\u003e",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "appar",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:-60--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence actions, discarding the value of the second argument.\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "(\u003c*)",
          "package": "appar",
          "signature": "forall a b.  f a -\u003e f b -\u003e f a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:-60--42-\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:-60--42-\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:-60--42-\"]"
        },
        "index": {
          "description": "Sequence actions discarding the value of the second argument",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "(\u003c*) \u003c*",
          "normalized": "a b c d b-\u003ed e-\u003ed b",
          "package": "appar",
          "signature": "forall a b. f a-\u003ef b-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:-60--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e with the arguments reversed.\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "(\u003c**\u003e)",
          "package": "appar",
          "signature": "f a -\u003e f (a -\u003e b) -\u003e f b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:-60--42--42--62-\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:-60--42--42--62-\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:-60--42--42--62-\"]"
        },
        "index": {
          "description": "variant of with the arguments reversed",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "(\u003c**\u003e) \u003c**\u003e",
          "normalized": "a b-\u003ea(b-\u003ec)-\u003ea c",
          "package": "appar",
          "signature": "f a-\u003ef(a-\u003eb)-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:-60--42--42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential application.\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "(\u003c*\u003e)",
          "package": "appar",
          "signature": "forall a b.  f (a -\u003e b) -\u003e f a -\u003e f b",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:-60--42--62-\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:-60--42--62-\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:-60--42--62-\"]"
        },
        "index": {
          "description": "Sequential application",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "(\u003c*\u003e) \u003c*\u003e",
          "normalized": "a b c d(b-\u003ee)-\u003ed b-\u003ed e",
          "package": "appar",
          "signature": "forall a b. f(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:-60--42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "P",
          "package": "appar",
          "signature": "P",
          "source": "src/Text-Appar-Parser.html#MkParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:P\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:P\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:P\"]"
        },
        "index": {
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "P",
          "package": "appar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a letter or digit (a character between '0' and '9').\n  Returns the parsed character.\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "alphaNum",
          "package": "appar",
          "signature": "MkParser inp Char",
          "source": "src/Text-Appar-Parser.html#alphaNum",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:alphaNum\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:alphaNum\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:alphaNum\"]"
        },
        "index": {
          "description": "Parses letter or digit character between and Returns the parsed character",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "alphaNum",
          "package": "appar",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:alphaNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis parser succeeds for any character. Returns the parsed character.\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "anyChar",
          "package": "appar",
          "signature": "MkParser inp Char",
          "source": "src/Text-Appar-Parser.html#anyChar",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:anyChar\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:anyChar\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:anyChar\"]"
        },
        "index": {
          "description": "This parser succeeds for any character Returns the parsed character",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "anyChar",
          "package": "appar",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:anyChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe head function for input\n\u003c/p\u003e",
          "module": "Text.Appar.ByteString",
          "name": "car",
          "package": "appar",
          "signature": "inp -\u003e Char",
          "source": "src/Text-Appar-Input.html#car",
          "type": "method"
        },
        "index": {
          "description": "The head function for input",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "car",
          "normalized": "a-\u003eChar",
          "package": "appar",
          "signature": "inp-\u003eChar",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:car"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe tail function for input\n\u003c/p\u003e",
          "module": "Text.Appar.ByteString",
          "name": "cdr",
          "package": "appar",
          "signature": "inp -\u003e inp",
          "source": "src/Text-Appar-Input.html#cdr",
          "type": "method"
        },
        "index": {
          "description": "The tail function for input",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "cdr",
          "normalized": "a-\u003ea",
          "package": "appar",
          "signature": "inp-\u003einp",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:cdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echar c\u003c/code\u003e parses a single character \u003ccode\u003ec\u003c/code\u003e. Returns the parsed character.\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "char",
          "package": "appar",
          "signature": "Char -\u003e MkParser inp Char",
          "source": "src/Text-Appar-Parser.html#char",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:char\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:char\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:char\"]"
        },
        "index": {
          "description": "char parses single character Returns the parsed character",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "char",
          "normalized": "Char-\u003eMkParser a Char",
          "package": "appar",
          "signature": "Char-\u003eMkParser inp Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echoice ps\u003c/code\u003e tries to apply the parsers in the list \u003ccode\u003eps\u003c/code\u003e in order,\n  until one of them succeeds. Returns the value of the succeeding\n  parser.\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "choice",
          "package": "appar",
          "signature": "[MkParser inp a] -\u003e MkParser inp a",
          "source": "src/Text-Appar-Parser.html#choice",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:choice\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:choice\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:choice\"]"
        },
        "index": {
          "description": "choice ps tries to apply the parsers in the list ps in order until one of them succeeds Returns the value of the succeeding parser",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "choice",
          "normalized": "[MkParser a b]-\u003eMkParser a b",
          "package": "appar",
          "signature": "[MkParser inp a]-\u003eMkParser inp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a digit. Returns the parsed character.\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "digit",
          "package": "appar",
          "signature": "MkParser inp Char",
          "source": "src/Text-Appar-Parser.html#digit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:digit\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:digit\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:digit\"]"
        },
        "index": {
          "description": "Parses digit Returns the parsed character",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "digit",
          "package": "appar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:digit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a hexadecimal digit (a digit or a letter between 'a' and\n  'f' or 'A' and 'F'). Returns the parsed character.\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "hexDigit",
          "package": "appar",
          "signature": "MkParser inp Char",
          "source": "src/Text-Appar-Parser.html#hexDigit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:hexDigit\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:hexDigit\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:hexDigit\"]"
        },
        "index": {
          "description": "Parses hexadecimal digit digit or letter between and or and Returns the parsed character",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "hexDigit",
          "package": "appar",
          "partial": "Digit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:hexDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function to check the end of input\n\u003c/p\u003e",
          "module": "Text.Appar.ByteString",
          "name": "isNil",
          "package": "appar",
          "signature": "inp -\u003e Bool",
          "source": "src/Text-Appar-Input.html#isNil",
          "type": "method"
        },
        "index": {
          "description": "The function to check the end of input",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "isNil",
          "normalized": "a-\u003eBool",
          "package": "appar",
          "partial": "Nil",
          "signature": "inp-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:isNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZero or more.\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "many",
          "package": "appar",
          "signature": "forall a.  f a -\u003e f [a]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:many\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:many\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:many\"]"
        },
        "index": {
          "description": "Zero or more",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "many",
          "normalized": "a b c d-\u003ec[d]",
          "package": "appar",
          "signature": "forall a. f a-\u003ef[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emanyTill p end\u003c/code\u003e applies parser \u003ccode\u003ep\u003c/code\u003e \u003cem\u003ezero\u003c/em\u003e or more times until\n  parser \u003ccode\u003eend\u003c/code\u003e succeeds. Returns the list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "manyTill",
          "package": "appar",
          "signature": "MkParser inp a -\u003e MkParser inp b -\u003e MkParser inp [a]",
          "source": "src/Text-Appar-Parser.html#manyTill",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:manyTill\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:manyTill\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:manyTill\"]"
        },
        "index": {
          "description": "manyTill end applies parser zero or more times until parser end succeeds Returns the list of values returned by",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "manyTill",
          "normalized": "MkParser a b-\u003eMkParser a c-\u003eMkParser a[b]",
          "package": "appar",
          "partial": "Till",
          "signature": "MkParser inp a-\u003eMkParser inp b-\u003eMkParser inp[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:manyTill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe end of input\n\u003c/p\u003e",
          "module": "Text.Appar.ByteString",
          "name": "nil",
          "package": "appar",
          "signature": "inp",
          "source": "src/Text-Appar-Input.html#nil",
          "type": "method"
        },
        "index": {
          "description": "The end of input",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "nil",
          "package": "appar",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs the dual of \u003ccode\u003e\u003ca\u003eoneOf\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003enoneOf cs\u003c/code\u003e succeeds if the current\n  character \u003cem\u003enot\u003c/em\u003e in the supplied list of characters \u003ccode\u003ecs\u003c/code\u003e. Returns the\n  parsed character.\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "noneOf",
          "package": "appar",
          "signature": "String -\u003e MkParser inp Char",
          "source": "src/Text-Appar-Parser.html#noneOf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:noneOf\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:noneOf\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:noneOf\"]"
        },
        "index": {
          "description": "As the dual of oneOf noneOf cs succeeds if the current character not in the supplied list of characters cs Returns the parsed character",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "noneOf",
          "normalized": "String-\u003eMkParser a Char",
          "package": "appar",
          "partial": "Of",
          "signature": "String-\u003eMkParser inp Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:noneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eoneOf cs\u003c/code\u003e succeeds if the current character is in the supplied list of\n  characters \u003ccode\u003ecs\u003c/code\u003e. Returns the parsed character.\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "oneOf",
          "package": "appar",
          "signature": "String -\u003e MkParser inp Char",
          "source": "src/Text-Appar-Parser.html#oneOf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:oneOf\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:oneOf\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:oneOf\"]"
        },
        "index": {
          "description": "oneOf cs succeeds if the current character is in the supplied list of characters cs Returns the parsed character",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "oneOf",
          "normalized": "String-\u003eMkParser a Char",
          "package": "appar",
          "partial": "Of",
          "signature": "String-\u003eMkParser inp Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:oneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eoption x p\u003c/code\u003e tries to apply parser \u003ccode\u003ep\u003c/code\u003e. If \u003ccode\u003ep\u003c/code\u003e fails without\n  consuming input, it returns the value \u003ccode\u003ex\u003c/code\u003e, otherwise the value\n  returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "option",
          "package": "appar",
          "signature": "a -\u003e MkParser inp a -\u003e MkParser inp a",
          "source": "src/Text-Appar-Parser.html#option",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:option\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:option\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:option\"]"
        },
        "index": {
          "description": "option tries to apply parser If fails without consuming input it returns the value otherwise the value returned by",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "option",
          "normalized": "a-\u003eMkParser b a-\u003eMkParser b a",
          "package": "appar",
          "signature": "a-\u003eMkParser inp a-\u003eMkParser inp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser.\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "parse",
          "package": "appar",
          "signature": "MkParser inp a -\u003e inp -\u003e Maybe a",
          "source": "src/Text-Appar-Parser.html#parse",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:parse\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:parse\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:parse\"]"
        },
        "index": {
          "description": "Run parser",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "parse",
          "normalized": "MkParser a b-\u003ea-\u003eMaybe b",
          "package": "appar",
          "signature": "MkParser inp a-\u003einp-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a value.\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "pure",
          "package": "appar",
          "signature": "forall a.  a -\u003e f a",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:pure\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:pure\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:pure\"]"
        },
        "index": {
          "description": "Lift value",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "pure",
          "normalized": "a b c-\u003ed c",
          "package": "appar",
          "signature": "forall a. a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGetting the internal parser.\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "runParser",
          "package": "appar",
          "signature": "inp -\u003e (Maybe a, inp)",
          "source": "src/Text-Appar-Parser.html#MkParser",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:runParser\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:runParser\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:runParser\"]"
        },
        "index": {
          "description": "Getting the internal parser",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "runParser",
          "normalized": "a-\u003e(Maybe b,a)",
          "package": "appar",
          "partial": "Parser",
          "signature": "inp-\u003e(Maybe a,inp)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:runParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003esatisfy f\u003c/code\u003e succeeds for any character for which the\n  supplied function \u003ccode\u003ef\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e. Returns the character that is\n  actually parsed.\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "satisfy",
          "package": "appar",
          "signature": "(Char -\u003e Bool) -\u003e MkParser inp Char",
          "source": "src/Text-Appar-Parser.html#satisfy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:satisfy\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:satisfy\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:satisfy\"]"
        },
        "index": {
          "description": "The parser satisfy succeeds for any character for which the supplied function returns True Returns the character that is actually parsed",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "satisfy",
          "normalized": "(Char-\u003eBool)-\u003eMkParser a Char",
          "package": "appar",
          "signature": "(Char-\u003eBool)-\u003eMkParser inp Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esepBy1 p sep\u003c/code\u003e parses \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e, separated\n  by \u003ccode\u003esep\u003c/code\u003e. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "sepBy1",
          "package": "appar",
          "signature": "MkParser inp a -\u003e MkParser inp b -\u003e MkParser inp [a]",
          "source": "src/Text-Appar-Parser.html#sepBy1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:sepBy1\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:sepBy1\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:sepBy1\"]"
        },
        "index": {
          "description": "sepBy1 sep parses one or more occurrences of separated by sep Returns list of values returned by",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "sepBy1",
          "normalized": "MkParser a b-\u003eMkParser a c-\u003eMkParser a[b]",
          "package": "appar",
          "partial": "By",
          "signature": "MkParser inp a-\u003eMkParser inp b-\u003eMkParser inp[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:sepBy1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eskipMany p\u003c/code\u003e applies the parser \u003ccode\u003ep\u003c/code\u003e \u003cem\u003ezero\u003c/em\u003e or more times, skipping\n  its result.\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "skipMany",
          "package": "appar",
          "signature": "MkParser inp a -\u003e MkParser inp ()",
          "source": "src/Text-Appar-Parser.html#skipMany",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:skipMany\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:skipMany\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:skipMany\"]"
        },
        "index": {
          "description": "skipMany applies the parser zero or more times skipping its result",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "skipMany",
          "normalized": "MkParser a b-\u003eMkParser a()",
          "package": "appar",
          "partial": "Many",
          "signature": "MkParser inp a-\u003eMkParser inp()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:skipMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eskipSome p\u003c/code\u003e applies the parser \u003ccode\u003ep\u003c/code\u003e \u003cem\u003eone\u003c/em\u003e or more times, skipping\n  its result.\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "skipSome",
          "package": "appar",
          "signature": "MkParser inp a -\u003e MkParser inp ()",
          "source": "src/Text-Appar-Parser.html#skipSome",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:skipSome\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:skipSome\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:skipSome\"]"
        },
        "index": {
          "description": "skipSome applies the parser one or more times skipping its result",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "skipSome",
          "normalized": "MkParser a b-\u003eMkParser a()",
          "package": "appar",
          "partial": "Some",
          "signature": "MkParser inp a-\u003eMkParser inp()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:skipSome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne or more.\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "some",
          "package": "appar",
          "signature": "forall a.  f a -\u003e f [a]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:some\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:some\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:some\"]"
        },
        "index": {
          "description": "One or more",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "some",
          "normalized": "a b c d-\u003ec[d]",
          "package": "appar",
          "signature": "forall a. f a-\u003ef[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:some"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a white space character (any character which satisfies \u003ccode\u003e\u003ca\u003eisSpace\u003c/a\u003e\u003c/code\u003e)\n   Returns the parsed character.\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "space",
          "package": "appar",
          "signature": "MkParser inp Char",
          "source": "src/Text-Appar-Parser.html#space",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:space\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:space\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:space\"]"
        },
        "index": {
          "description": "Parses white space character any character which satisfies isSpace Returns the parsed character",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "space",
          "package": "appar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003estring s\u003c/code\u003e parses a sequence of characters given by \u003ccode\u003es\u003c/code\u003e. Returns\n  the parsed string\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "string",
          "package": "appar",
          "signature": "String -\u003e MkParser inp String",
          "source": "src/Text-Appar-Parser.html#string",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:string\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:string\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:string\"]"
        },
        "index": {
          "description": "string parses sequence of characters given by Returns the parsed string",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "string",
          "normalized": "String-\u003eMkParser a String",
          "package": "appar",
          "signature": "String-\u003eMkParser inp String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser try p behaves like parser p, except that it pretends\n  that it hasn't consumed any input when an error occurs.\n\u003c/p\u003e",
          "module": "[\"Text.Appar.ByteString\",\"Text.Appar.LazyByteString\",\"Text.Appar.String\"]",
          "name": "try",
          "package": "appar",
          "signature": "MkParser inp a -\u003e MkParser inp a",
          "source": "src/Text-Appar-Parser.html#try",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:try\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:try\",\"http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:try\"]"
        },
        "index": {
          "description": "The parser try behaves like parser except that it pretends that it hasn consumed any input when an error occurs",
          "hierarchy": "Text Appar ByteString",
          "module": "Text.Appar.ByteString",
          "name": "try",
          "normalized": "MkParser a b-\u003eMkParser a b",
          "package": "appar",
          "signature": "MkParser inp a-\u003eMkParser inp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-ByteString.html#v:try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple \u003ccode\u003eApplicative\u003c/code\u003e parser whose input is lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\nThe usage is the same as parsec.\n\u003c/p\u003e\u003cp\u003eParsec 3 provides features which Parsec 2 does not provide:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eApplicative\u003c/code\u003e style\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e as input\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eBut Haskell Platform includes Parsec 2, not Parsec 3. Installing\nParsec 3 to Haskell Platform environment makes it mess. So, this library\nwas implemented.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Appar.LazyByteString",
          "name": "LazyByteString",
          "package": "appar",
          "source": "src/Text-Appar-LazyByteString.html",
          "type": "module"
        },
        "index": {
          "description": "Simple Applicative parser whose input is lazy ByteString The usage is the same as parsec Parsec provides features which Parsec does not provide Applicative style ByteString as input But Haskell Platform includes Parsec not Parsec Installing Parsec to Haskell Platform environment makes it mess So this library was implemented",
          "hierarchy": "Text Appar LazyByteString",
          "module": "Text.Appar.LazyByteString",
          "name": "LazyByteString",
          "package": "appar",
          "partial": "Lazy Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class for parser input.\n\u003c/p\u003e",
          "module": "Text.Appar.LazyByteString",
          "name": "Input",
          "package": "appar",
          "source": "src/Text-Appar-Input.html#Input",
          "type": "class"
        },
        "index": {
          "description": "The class for parser input",
          "hierarchy": "Text Appar LazyByteString",
          "module": "Text.Appar.LazyByteString",
          "name": "Input",
          "package": "appar",
          "partial": "Input",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#t:Input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Appar.LazyByteString",
          "name": "MkParser",
          "package": "appar",
          "source": "src/Text-Appar-Parser.html#MkParser",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Appar LazyByteString",
          "module": "Text.Appar.LazyByteString",
          "name": "MkParser",
          "package": "appar",
          "partial": "Mk Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#t:MkParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParser synonym for strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Appar.LazyByteString",
          "name": "Parser",
          "package": "appar",
          "source": "src/Text-Appar-LazyByteString.html#Parser",
          "type": "type"
        },
        "index": {
          "description": "Parser synonym for strict ByteString",
          "hierarchy": "Text Appar LazyByteString",
          "module": "Text.Appar.LazyByteString",
          "name": "Parser",
          "package": "appar",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe head function for input\n\u003c/p\u003e",
          "module": "Text.Appar.LazyByteString",
          "name": "car",
          "package": "appar",
          "signature": "inp -\u003e Char",
          "source": "src/Text-Appar-Input.html#car",
          "type": "method"
        },
        "index": {
          "description": "The head function for input",
          "hierarchy": "Text Appar LazyByteString",
          "module": "Text.Appar.LazyByteString",
          "name": "car",
          "normalized": "a-\u003eChar",
          "package": "appar",
          "signature": "inp-\u003eChar",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:car"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe tail function for input\n\u003c/p\u003e",
          "module": "Text.Appar.LazyByteString",
          "name": "cdr",
          "package": "appar",
          "signature": "inp -\u003e inp",
          "source": "src/Text-Appar-Input.html#cdr",
          "type": "method"
        },
        "index": {
          "description": "The tail function for input",
          "hierarchy": "Text Appar LazyByteString",
          "module": "Text.Appar.LazyByteString",
          "name": "cdr",
          "normalized": "a-\u003ea",
          "package": "appar",
          "signature": "inp-\u003einp",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:cdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function to check the end of input\n\u003c/p\u003e",
          "module": "Text.Appar.LazyByteString",
          "name": "isNil",
          "package": "appar",
          "signature": "inp -\u003e Bool",
          "source": "src/Text-Appar-Input.html#isNil",
          "type": "method"
        },
        "index": {
          "description": "The function to check the end of input",
          "hierarchy": "Text Appar LazyByteString",
          "module": "Text.Appar.LazyByteString",
          "name": "isNil",
          "normalized": "a-\u003eBool",
          "package": "appar",
          "partial": "Nil",
          "signature": "inp-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:isNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe end of input\n\u003c/p\u003e",
          "module": "Text.Appar.LazyByteString",
          "name": "nil",
          "package": "appar",
          "signature": "inp",
          "source": "src/Text-Appar-Input.html#nil",
          "type": "method"
        },
        "index": {
          "description": "The end of input",
          "hierarchy": "Text Appar LazyByteString",
          "module": "Text.Appar.LazyByteString",
          "name": "nil",
          "package": "appar",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-LazyByteString.html#v:nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple \u003ccode\u003eApplicative\u003c/code\u003e parser whose input is \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\nThe usage is the same as parsec.\n\u003c/p\u003e\u003cp\u003eParsec 3 provides features which Parsec 2 does not provide:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eApplicative\u003c/code\u003e style\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eByteString\u003c/code\u003e as input\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eBut Haskell Platform includes Parsec 2, not Parsec 3. Installing\nParsec 3 to Haskell Platform environment makes it mess. So, this library\nwas implemented.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Appar.String",
          "name": "String",
          "package": "appar",
          "source": "src/Text-Appar-String.html",
          "type": "module"
        },
        "index": {
          "description": "Simple Applicative parser whose input is String The usage is the same as parsec Parsec provides features which Parsec does not provide Applicative style ByteString as input But Haskell Platform includes Parsec not Parsec Installing Parsec to Haskell Platform environment makes it mess So this library was implemented",
          "hierarchy": "Text Appar String",
          "module": "Text.Appar.String",
          "name": "String",
          "package": "appar",
          "partial": "String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class for parser input.\n\u003c/p\u003e",
          "module": "Text.Appar.String",
          "name": "Input",
          "package": "appar",
          "source": "src/Text-Appar-Input.html#Input",
          "type": "class"
        },
        "index": {
          "description": "The class for parser input",
          "hierarchy": "Text Appar String",
          "module": "Text.Appar.String",
          "name": "Input",
          "package": "appar",
          "partial": "Input",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#t:Input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Appar.String",
          "name": "MkParser",
          "package": "appar",
          "source": "src/Text-Appar-Parser.html#MkParser",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Appar String",
          "module": "Text.Appar.String",
          "name": "MkParser",
          "package": "appar",
          "partial": "Mk Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#t:MkParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParser synonym for \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Appar.String",
          "name": "Parser",
          "package": "appar",
          "source": "src/Text-Appar-String.html#Parser",
          "type": "type"
        },
        "index": {
          "description": "Parser synonym for String",
          "hierarchy": "Text Appar String",
          "module": "Text.Appar.String",
          "name": "Parser",
          "package": "appar",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe head function for input\n\u003c/p\u003e",
          "module": "Text.Appar.String",
          "name": "car",
          "package": "appar",
          "signature": "inp -\u003e Char",
          "source": "src/Text-Appar-Input.html#car",
          "type": "method"
        },
        "index": {
          "description": "The head function for input",
          "hierarchy": "Text Appar String",
          "module": "Text.Appar.String",
          "name": "car",
          "normalized": "a-\u003eChar",
          "package": "appar",
          "signature": "inp-\u003eChar",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:car"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe tail function for input\n\u003c/p\u003e",
          "module": "Text.Appar.String",
          "name": "cdr",
          "package": "appar",
          "signature": "inp -\u003e inp",
          "source": "src/Text-Appar-Input.html#cdr",
          "type": "method"
        },
        "index": {
          "description": "The tail function for input",
          "hierarchy": "Text Appar String",
          "module": "Text.Appar.String",
          "name": "cdr",
          "normalized": "a-\u003ea",
          "package": "appar",
          "signature": "inp-\u003einp",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:cdr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function to check the end of input\n\u003c/p\u003e",
          "module": "Text.Appar.String",
          "name": "isNil",
          "package": "appar",
          "signature": "inp -\u003e Bool",
          "source": "src/Text-Appar-Input.html#isNil",
          "type": "method"
        },
        "index": {
          "description": "The function to check the end of input",
          "hierarchy": "Text Appar String",
          "module": "Text.Appar.String",
          "name": "isNil",
          "normalized": "a-\u003eBool",
          "package": "appar",
          "partial": "Nil",
          "signature": "inp-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:isNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe end of input\n\u003c/p\u003e",
          "module": "Text.Appar.String",
          "name": "nil",
          "package": "appar",
          "signature": "inp",
          "source": "src/Text-Appar-Input.html#nil",
          "type": "method"
        },
        "index": {
          "description": "The end of input",
          "hierarchy": "Text Appar String",
          "module": "Text.Appar.String",
          "name": "nil",
          "package": "appar",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/appar/docs/Text-Appar-String.html#v:nil"
      }
    }
  ]
]