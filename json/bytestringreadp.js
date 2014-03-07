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
        "word": "bytestringreadp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a library of parser combinators, originally written by Koen Claessen.\n It parses all alternatives in parallel, so it never keeps hold of\n the beginning of the input string, a common source of space leaks with\n other parsers.  The '(\u003ccode\u003e\u003ca\u003e+++\u003c/a\u003e\u003c/code\u003e)' choice combinator is genuinely commutative;\n it makes no difference which branch is \"shorter\".\n\u003c/p\u003e\u003cp\u003eAdapted to use \u003ccode\u003eData.ByteString\u003c/code\u003e by Gracjan Polak. Designed as a drop-in\n replacement for \u003ccode\u003eText.ParserCombinators.ReadP\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "ByteString",
          "package": "bytestringreadp",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "This is library of parser combinators originally written by Koen Claessen It parses all alternatives in parallel so it never keeps hold of the beginning of the input string common source of space leaks with other parsers The choice combinator is genuinely commutative it makes no difference which branch is shorter Adapted to use Data.ByteString by Gracjan Polak Designed as drop-in replacement for Text.ParserCombinators.ReadP",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "ByteString",
          "package": "bytestringreadp",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "ReadP",
          "package": "bytestringreadp",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#ReadP",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "ReadP",
          "package": "bytestringreadp",
          "partial": "Read",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#t:ReadP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser for a type \u003ccode\u003ea\u003c/code\u003e, represented as a function that takes a\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e and returns a list of possible parses as \u003ccode\u003e(a,\u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e pairs.\n\u003c/p\u003e\u003cp\u003eNote that this kind of backtracking parser is very inefficient;\n reading a large structure may be quite slow (cf \u003ccode\u003e\u003ca\u003eReadP\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "ReadS",
          "package": "bytestringreadp",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#ReadS",
          "type": "type"
        },
        "index": {
          "description": "parser for type represented as function that takes ByteString and returns list of possible parses as ByteString pairs Note that this kind of backtracking parser is very inefficient reading large structure may be quite slow cf ReadP",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "ReadS",
          "package": "bytestringreadp",
          "partial": "Read",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#t:ReadS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymmetric choice.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "(+++)",
          "package": "bytestringreadp",
          "signature": "ReadP a -\u003e ReadP a -\u003e ReadP a",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#%2B%2B%2B",
          "type": "function"
        },
        "index": {
          "description": "Symmetric choice",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "(+++) +++",
          "normalized": "ReadP a-\u003eReadP a-\u003eReadP a",
          "package": "bytestringreadp",
          "signature": "ReadP a-\u003eReadP a-\u003eReadP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:-43--43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocal, exclusive, left-biased choice: If left parser\n   locally produces any result at all, then right parser is\n   not used.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "(\u003c++)",
          "package": "bytestringreadp",
          "signature": "ReadP a -\u003e ReadP a -\u003e ReadP a",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#%3C%2B%2B",
          "type": "function"
        },
        "index": {
          "description": "Local exclusive left-biased choice If left parser locally produces any result at all then right parser is not used",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "(\u003c++) \u003c++",
          "normalized": "ReadP a-\u003eReadP a-\u003eReadP a",
          "package": "bytestringreadp",
          "signature": "ReadP a-\u003eReadP a-\u003eReadP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:-60--43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebetween open close p\u003c/code\u003e parses \u003ccode\u003eopen\u003c/code\u003e, followed by \u003ccode\u003ep\u003c/code\u003e and finally\n   \u003ccode\u003eclose\u003c/code\u003e. Only the value of \u003ccode\u003ep\u003c/code\u003e is returned.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "between",
          "package": "bytestringreadp",
          "signature": "ReadP open -\u003e ReadP close -\u003e ReadP a -\u003e ReadP a",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#between",
          "type": "function"
        },
        "index": {
          "description": "between open close parses open followed by and finally close Only the value of is returned",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "between",
          "normalized": "ReadP a-\u003eReadP b-\u003eReadP c-\u003eReadP c",
          "package": "bytestringreadp",
          "signature": "ReadP open-\u003eReadP close-\u003eReadP a-\u003eReadP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:between"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echainl p op x\u003c/code\u003e parses zero or more occurrences of \u003ccode\u003ep\u003c/code\u003e, separated by \u003ccode\u003eop\u003c/code\u003e.\n   Returns a value produced by a \u003cem\u003eleft\u003c/em\u003e associative application of all\n   functions returned by \u003ccode\u003eop\u003c/code\u003e. If there are no occurrences of \u003ccode\u003ep\u003c/code\u003e, \u003ccode\u003ex\u003c/code\u003e is\n   returned.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "chainl",
          "package": "bytestringreadp",
          "signature": "ReadP a -\u003e ReadP (a -\u003e a -\u003e a) -\u003e a -\u003e ReadP a",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#chainl",
          "type": "function"
        },
        "index": {
          "description": "chainl op parses zero or more occurrences of separated by op Returns value produced by left associative application of all functions returned by op If there are no occurrences of is returned",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "chainl",
          "normalized": "ReadP a-\u003eReadP(a-\u003ea-\u003ea)-\u003ea-\u003eReadP a",
          "package": "bytestringreadp",
          "signature": "ReadP a-\u003eReadP(a-\u003ea-\u003ea)-\u003ea-\u003eReadP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:chainl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003echainl\u003c/a\u003e\u003c/code\u003e, but parses one or more occurrences of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "chainl1",
          "package": "bytestringreadp",
          "signature": "ReadP a -\u003e ReadP (a -\u003e a -\u003e a) -\u003e ReadP a",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#chainl1",
          "type": "function"
        },
        "index": {
          "description": "Like chainl but parses one or more occurrences of",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "chainl1",
          "normalized": "ReadP a-\u003eReadP(a-\u003ea-\u003ea)-\u003eReadP a",
          "package": "bytestringreadp",
          "signature": "ReadP a-\u003eReadP(a-\u003ea-\u003ea)-\u003eReadP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:chainl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echainr p op x\u003c/code\u003e parses zero or more occurrences of \u003ccode\u003ep\u003c/code\u003e, separated by \u003ccode\u003eop\u003c/code\u003e.\n   Returns a value produced by a \u003cem\u003eright\u003c/em\u003e associative application of all\n   functions returned by \u003ccode\u003eop\u003c/code\u003e. If there are no occurrences of \u003ccode\u003ep\u003c/code\u003e, \u003ccode\u003ex\u003c/code\u003e is\n   returned.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "chainr",
          "package": "bytestringreadp",
          "signature": "ReadP a -\u003e ReadP (a -\u003e a -\u003e a) -\u003e a -\u003e ReadP a",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#chainr",
          "type": "function"
        },
        "index": {
          "description": "chainr op parses zero or more occurrences of separated by op Returns value produced by right associative application of all functions returned by op If there are no occurrences of is returned",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "chainr",
          "normalized": "ReadP a-\u003eReadP(a-\u003ea-\u003ea)-\u003ea-\u003eReadP a",
          "package": "bytestringreadp",
          "signature": "ReadP a-\u003eReadP(a-\u003ea-\u003ea)-\u003ea-\u003eReadP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:chainr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003echainr\u003c/a\u003e\u003c/code\u003e, but parses one or more occurrences of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "chainr1",
          "package": "bytestringreadp",
          "signature": "ReadP a -\u003e ReadP (a -\u003e a -\u003e a) -\u003e ReadP a",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#chainr1",
          "type": "function"
        },
        "index": {
          "description": "Like chainr but parses one or more occurrences of",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "chainr1",
          "normalized": "ReadP a-\u003eReadP(a-\u003ea-\u003ea)-\u003eReadP a",
          "package": "bytestringreadp",
          "signature": "ReadP a-\u003eReadP(a-\u003ea-\u003ea)-\u003eReadP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:chainr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses and returns the specified character.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "char",
          "package": "bytestringreadp",
          "signature": "Word8 -\u003e ReadP Word8",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#char",
          "type": "function"
        },
        "index": {
          "description": "Parses and returns the specified character",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "char",
          "normalized": "Word-\u003eReadP Word",
          "package": "bytestringreadp",
          "signature": "Word-\u003eReadP Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines all parsers in the specified list.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "choice",
          "package": "bytestringreadp",
          "signature": "[ReadP a] -\u003e ReadP a",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#choice",
          "type": "function"
        },
        "index": {
          "description": "Combines all parsers in the specified list",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "choice",
          "normalized": "[ReadP a]-\u003eReadP a",
          "package": "bytestringreadp",
          "signature": "[ReadP a]-\u003eReadP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecount n p\u003c/code\u003e parses \u003ccode\u003en\u003c/code\u003e occurrences of \u003ccode\u003ep\u003c/code\u003e in sequence. A list of\n   results is returned.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "count",
          "package": "bytestringreadp",
          "signature": "Int -\u003e ReadP a -\u003e ReadP [a]",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#count",
          "type": "function"
        },
        "index": {
          "description": "count parses occurrences of in sequence list of results is returned",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "count",
          "normalized": "Int-\u003eReadP a-\u003eReadP[a]",
          "package": "bytestringreadp",
          "signature": "Int-\u003eReadP a-\u003eReadP[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms a parser into one that does the same, but\n   in addition returns the exact number of characters read.\n   IMPORTANT NOTE: \u003ccode\u003e\u003ca\u003ecountsym\u003c/a\u003e\u003c/code\u003e gives a runtime error if its first argument\n   is built using any occurrences of readS_to_P.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "countsym",
          "package": "bytestringreadp",
          "signature": "ReadP a -\u003e ReadP (Int, a)",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#countsym",
          "type": "function"
        },
        "index": {
          "description": "Transforms parser into one that does the same but in addition returns the exact number of characters read IMPORTANT NOTE countsym gives runtime error if its first argument is built using any occurrences of readS to",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "countsym",
          "normalized": "ReadP a-\u003eReadP(Int,a)",
          "package": "bytestringreadp",
          "signature": "ReadP a-\u003eReadP(Int,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:countsym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eendBy p sep\u003c/code\u003e parses zero or more occurrences of \u003ccode\u003ep\u003c/code\u003e, separated and ended\n   by \u003ccode\u003esep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "endBy",
          "package": "bytestringreadp",
          "signature": "ReadP a -\u003e ReadP sep -\u003e ReadP [a]",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#endBy",
          "type": "function"
        },
        "index": {
          "description": "endBy sep parses zero or more occurrences of separated and ended by sep",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "endBy",
          "normalized": "ReadP a-\u003eReadP b-\u003eReadP[a]",
          "package": "bytestringreadp",
          "partial": "By",
          "signature": "ReadP a-\u003eReadP sep-\u003eReadP[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:endBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eendBy p sep\u003c/code\u003e parses one or more occurrences of \u003ccode\u003ep\u003c/code\u003e, separated and ended\n   by \u003ccode\u003esep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "endBy1",
          "package": "bytestringreadp",
          "signature": "ReadP a -\u003e ReadP sep -\u003e ReadP [a]",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#endBy1",
          "type": "function"
        },
        "index": {
          "description": "endBy sep parses one or more occurrences of separated and ended by sep",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "endBy1",
          "normalized": "ReadP a-\u003eReadP b-\u003eReadP[a]",
          "package": "bytestringreadp",
          "partial": "By",
          "signature": "ReadP a-\u003eReadP sep-\u003eReadP[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:endBy1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms a parser into one that does the same, but\n   in addition returns the exact characters read.\n   IMPORTANT NOTE: \u003ccode\u003e\u003ca\u003egather\u003c/a\u003e\u003c/code\u003e gives a runtime error if its first argument\n   is built using any occurrences of readS_to_P.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "gather",
          "package": "bytestringreadp",
          "signature": "ReadP a -\u003e ReadP (ByteString, a)",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#gather",
          "type": "function"
        },
        "index": {
          "description": "Transforms parser into one that does the same but in addition returns the exact characters read IMPORTANT NOTE gather gives runtime error if its first argument is built using any occurrences of readS to",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "gather",
          "normalized": "ReadP a-\u003eReadP(ByteString,a)",
          "package": "bytestringreadp",
          "signature": "ReadP a-\u003eReadP(ByteString,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:gather"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsumes and returns the next character.\n   Fails if there is no input left.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "get",
          "package": "bytestringreadp",
          "signature": "ReadP Word8",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#get",
          "type": "function"
        },
        "index": {
          "description": "Consumes and returns the next character Fails if there is no input left",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "get",
          "package": "bytestringreadp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook-ahead: returns the part of the input that is left, without\n   consuming it.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "look",
          "package": "bytestringreadp",
          "signature": "ReadP ByteString",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#look",
          "type": "function"
        },
        "index": {
          "description": "Look-ahead returns the part of the input that is left without consuming it",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "look",
          "package": "bytestringreadp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:look"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses zero or more occurrences of the given parser.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "many",
          "package": "bytestringreadp",
          "signature": "ReadP a -\u003e ReadP [a]",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#many",
          "type": "function"
        },
        "index": {
          "description": "Parses zero or more occurrences of the given parser",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "many",
          "normalized": "ReadP a-\u003eReadP[a]",
          "package": "bytestringreadp",
          "signature": "ReadP a-\u003eReadP[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses one or more occurrences of the given parser.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "many1",
          "package": "bytestringreadp",
          "signature": "ReadP a -\u003e ReadP [a]",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#many1",
          "type": "function"
        },
        "index": {
          "description": "Parses one or more occurrences of the given parser",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "many1",
          "normalized": "ReadP a-\u003eReadP[a]",
          "package": "bytestringreadp",
          "signature": "ReadP a-\u003eReadP[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:many1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emanyTill p end\u003c/code\u003e parses zero or more occurrences of \u003ccode\u003ep\u003c/code\u003e, until \u003ccode\u003eend\u003c/code\u003e\n   succeeds. Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "manyTill",
          "package": "bytestringreadp",
          "signature": "ReadP a -\u003e ReadP end -\u003e ReadP [a]",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#manyTill",
          "type": "function"
        },
        "index": {
          "description": "manyTill end parses zero or more occurrences of until end succeeds Returns list of values returned by",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "manyTill",
          "normalized": "ReadP a-\u003eReadP b-\u003eReadP[a]",
          "package": "bytestringreadp",
          "partial": "Till",
          "signature": "ReadP a-\u003eReadP end-\u003eReadP[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:manyTill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses the first zero or more characters satisfying the predicate.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "munch",
          "package": "bytestringreadp",
          "signature": "(Word8 -\u003e Bool) -\u003e ReadP ByteString",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#munch",
          "type": "function"
        },
        "index": {
          "description": "Parses the first zero or more characters satisfying the predicate",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "munch",
          "normalized": "(Word-\u003eBool)-\u003eReadP ByteString",
          "package": "bytestringreadp",
          "signature": "(Word-\u003eBool)-\u003eReadP ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:munch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses the first one or more characters satisfying the predicate.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "munch1",
          "package": "bytestringreadp",
          "signature": "(Word8 -\u003e Bool) -\u003e ReadP ByteString",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#munch1",
          "type": "function"
        },
        "index": {
          "description": "Parses the first one or more characters satisfying the predicate",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "munch1",
          "normalized": "(Word-\u003eBool)-\u003eReadP ByteString",
          "package": "bytestringreadp",
          "signature": "(Word-\u003eBool)-\u003eReadP ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:munch1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eoption x p\u003c/code\u003e will either parse \u003ccode\u003ep\u003c/code\u003e or return \u003ccode\u003ex\u003c/code\u003e without consuming\n   any input.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "option",
          "package": "bytestringreadp",
          "signature": "a -\u003e ReadP a -\u003e ReadP a",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#option",
          "type": "function"
        },
        "index": {
          "description": "option will either parse or return without consuming any input",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "option",
          "normalized": "a-\u003eReadP a-\u003eReadP a",
          "package": "bytestringreadp",
          "signature": "a-\u003eReadP a-\u003eReadP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eoptional p\u003c/code\u003e optionally parses \u003ccode\u003ep\u003c/code\u003e and always returns \u003ccode\u003e()\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "optional",
          "package": "bytestringreadp",
          "signature": "ReadP a -\u003e ReadP ()",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#optional",
          "type": "function"
        },
        "index": {
          "description": "optional optionally parses and always returns",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "optional",
          "normalized": "ReadP a-\u003eReadP()",
          "package": "bytestringreadp",
          "signature": "ReadP a-\u003eReadP()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:optional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlways fails.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "pfail",
          "package": "bytestringreadp",
          "signature": "ReadP a",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#pfail",
          "type": "function"
        },
        "index": {
          "description": "Always fails",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "pfail",
          "package": "bytestringreadp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:pfail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a parser into a Haskell ReadS-style function.\n   This is the main way in which you can \"run\" a \u003ccode\u003e\u003ca\u003eReadP\u003c/a\u003e\u003c/code\u003e parser:\n   the expanded type is\n \u003ccode\u003e readP_to_S :: ReadP a -\u003e ByteString -\u003e [(a,ByteString)] \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "readP_to_S",
          "package": "bytestringreadp",
          "signature": "ReadP a -\u003e ReadS a",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#readP_to_S",
          "type": "function"
        },
        "index": {
          "description": "Converts parser into Haskell ReadS-style function This is the main way in which you can run ReadP parser the expanded type is readP to ReadP ByteString ByteString",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "readP_to_S",
          "normalized": "ReadP a-\u003eReadS a",
          "package": "bytestringreadp",
          "signature": "ReadP a-\u003eReadS a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:readP_to_S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a Haskell ReadS-style function into a parser.\n   Warning: This introduces local backtracking in the resulting\n   parser, and therefore a possible inefficiency.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "readS_to_P",
          "package": "bytestringreadp",
          "signature": "ReadS a -\u003e ReadP a",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#readS_to_P",
          "type": "function"
        },
        "index": {
          "description": "Converts Haskell ReadS-style function into parser Warning This introduces local backtracking in the resulting parser and therefore possible inefficiency",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "readS_to_P",
          "normalized": "ReadS a-\u003eReadP a",
          "package": "bytestringreadp",
          "signature": "ReadS a-\u003eReadP a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:readS_to_P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsumes and returns the next character, if it satisfies the\n   specified predicate.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "satisfy",
          "package": "bytestringreadp",
          "signature": "(Word8 -\u003e Bool) -\u003e ReadP Word8",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#satisfy",
          "type": "function"
        },
        "index": {
          "description": "Consumes and returns the next character if it satisfies the specified predicate",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "satisfy",
          "normalized": "(Word-\u003eBool)-\u003eReadP Word",
          "package": "bytestringreadp",
          "signature": "(Word-\u003eBool)-\u003eReadP Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esepBy p sep\u003c/code\u003e parses zero or more occurrences of \u003ccode\u003ep\u003c/code\u003e, separated by \u003ccode\u003esep\u003c/code\u003e.\n   Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "sepBy",
          "package": "bytestringreadp",
          "signature": "ReadP a -\u003e ReadP sep -\u003e ReadP [a]",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#sepBy",
          "type": "function"
        },
        "index": {
          "description": "sepBy sep parses zero or more occurrences of separated by sep Returns list of values returned by",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "sepBy",
          "normalized": "ReadP a-\u003eReadP b-\u003eReadP[a]",
          "package": "bytestringreadp",
          "partial": "By",
          "signature": "ReadP a-\u003eReadP sep-\u003eReadP[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:sepBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esepBy1 p sep\u003c/code\u003e parses one or more occurrences of \u003ccode\u003ep\u003c/code\u003e, separated by \u003ccode\u003esep\u003c/code\u003e.\n   Returns a list of values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "sepBy1",
          "package": "bytestringreadp",
          "signature": "ReadP a -\u003e ReadP sep -\u003e ReadP [a]",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#sepBy1",
          "type": "function"
        },
        "index": {
          "description": "sepBy1 sep parses one or more occurrences of separated by sep Returns list of values returned by",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "sepBy1",
          "normalized": "ReadP a-\u003eReadP b-\u003eReadP[a]",
          "package": "bytestringreadp",
          "partial": "By",
          "signature": "ReadP a-\u003eReadP sep-\u003eReadP[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:sepBy1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "skip",
          "package": "bytestringreadp",
          "signature": "Int -\u003e ReadP ()",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#skip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "skip",
          "normalized": "Int-\u003eReadP()",
          "package": "bytestringreadp",
          "signature": "Int-\u003eReadP()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emany\u003c/a\u003e\u003c/code\u003e, but discards the result.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "skipMany",
          "package": "bytestringreadp",
          "signature": "ReadP a -\u003e ReadP ()",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#skipMany",
          "type": "function"
        },
        "index": {
          "description": "Like many but discards the result",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "skipMany",
          "normalized": "ReadP a-\u003eReadP()",
          "package": "bytestringreadp",
          "partial": "Many",
          "signature": "ReadP a-\u003eReadP()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:skipMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emany1\u003c/a\u003e\u003c/code\u003e, but discards the result.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "skipMany1",
          "package": "bytestringreadp",
          "signature": "ReadP a -\u003e ReadP ()",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#skipMany1",
          "type": "function"
        },
        "index": {
          "description": "Like many1 but discards the result",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "skipMany1",
          "normalized": "ReadP a-\u003eReadP()",
          "package": "bytestringreadp",
          "partial": "Many",
          "signature": "ReadP a-\u003eReadP()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:skipMany1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkips all whitespace.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "skipSpaces",
          "package": "bytestringreadp",
          "signature": "ReadP ()",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#skipSpaces",
          "type": "function"
        },
        "index": {
          "description": "Skips all whitespace",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "skipSpaces",
          "normalized": "ReadP()",
          "package": "bytestringreadp",
          "partial": "Spaces",
          "signature": "ReadP()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:skipSpaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses and returns the specified string.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "string",
          "package": "bytestringreadp",
          "signature": "ByteString -\u003e ReadP ByteString",
          "source": "src/Text-ParserCombinators-ReadP-ByteString.html#string",
          "type": "function"
        },
        "index": {
          "description": "Parses and returns the specified string",
          "hierarchy": "Text ParserCombinators ReadP ByteString",
          "module": "Text.ParserCombinators.ReadP.ByteString",
          "name": "string",
          "normalized": "ByteString-\u003eReadP ByteString",
          "package": "bytestringreadp",
          "signature": "ByteString-\u003eReadP ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bytestringreadp/docs/Text-ParserCombinators-ReadP-ByteString.html#v:string"
      }
    }
  ]
]