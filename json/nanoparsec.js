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
        "word": "nanoparsec"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUseful parser combinators, similar to those provided by Parsec.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Nanoparsec.Combinator",
          "name": "Combinator",
          "package": "nanoparsec",
          "source": "src/Data-Nanoparsec-Combinator.html",
          "type": "module"
        },
        "index": {
          "description": "Useful parser combinators similar to those provided by Parsec",
          "hierarchy": "Data Nanoparsec Combinator",
          "module": "Data.Nanoparsec.Combinator",
          "name": "Combinator",
          "package": "nanoparsec",
          "partial": "Combinator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec-Combinator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003echoice ps\u003c/code\u003e tries to apply the actions in the list \u003ccode\u003eps\u003c/code\u003e in order,\n until one of them succeeds. Returns the value of the succeeding\n action.\n\u003c/p\u003e",
          "module": "Data.Nanoparsec.Combinator",
          "name": "choice",
          "package": "nanoparsec",
          "signature": "[f a] -\u003e f a",
          "source": "src/Data-Nanoparsec-Combinator.html#choice",
          "type": "function"
        },
        "index": {
          "description": "choice ps tries to apply the actions in the list ps in order until one of them succeeds Returns the value of the succeeding action",
          "hierarchy": "Data Nanoparsec Combinator",
          "module": "Data.Nanoparsec.Combinator",
          "name": "choice",
          "normalized": "[a b]-\u003ea b",
          "package": "nanoparsec",
          "signature": "[f a]-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec-Combinator.html#v:choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the given action repeatedly, returning every result.\n\u003c/p\u003e",
          "module": "Data.Nanoparsec.Combinator",
          "name": "count",
          "package": "nanoparsec",
          "signature": "Int -\u003e m a -\u003e m [a]",
          "source": "src/Data-Nanoparsec-Combinator.html#count",
          "type": "function"
        },
        "index": {
          "description": "Apply the given action repeatedly returning every result",
          "hierarchy": "Data Nanoparsec Combinator",
          "module": "Data.Nanoparsec.Combinator",
          "name": "count",
          "normalized": "Int-\u003ea b-\u003ea[b]",
          "package": "nanoparsec",
          "signature": "Int-\u003em a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec-Combinator.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two alternatives.\n\u003c/p\u003e",
          "module": "Data.Nanoparsec.Combinator",
          "name": "eitherP",
          "package": "nanoparsec",
          "signature": "f a -\u003e f b -\u003e f (Either a b)",
          "source": "src/Data-Nanoparsec-Combinator.html#eitherP",
          "type": "function"
        },
        "index": {
          "description": "Combine two alternatives",
          "hierarchy": "Data Nanoparsec Combinator",
          "module": "Data.Nanoparsec.Combinator",
          "name": "eitherP",
          "normalized": "a b-\u003ea c-\u003ea(Either b c)",
          "package": "nanoparsec",
          "signature": "f a-\u003ef b-\u003ef(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec-Combinator.html#v:eitherP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZero or more.\n\u003c/p\u003e",
          "module": "Data.Nanoparsec.Combinator",
          "name": "many",
          "package": "nanoparsec",
          "signature": "f a -\u003e f [a]",
          "source": "src/Data-Nanoparsec-Combinator.html#many",
          "type": "function"
        },
        "index": {
          "description": "Zero or more",
          "hierarchy": "Data Nanoparsec Combinator",
          "module": "Data.Nanoparsec.Combinator",
          "name": "many",
          "normalized": "a b-\u003ea[b]",
          "package": "nanoparsec",
          "signature": "f a-\u003ef[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec-Combinator.html#v:many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emany1 p\u003c/code\u003e applies the action \u003ccode\u003ep\u003c/code\u003e \u003cem\u003eone\u003c/em\u003e or more times. Returns a\n list of the returned values of \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e  word  = many1 letter\n\u003c/pre\u003e",
          "module": "Data.Nanoparsec.Combinator",
          "name": "many1",
          "package": "nanoparsec",
          "signature": "f a -\u003e f [a]",
          "source": "src/Data-Nanoparsec-Combinator.html#many1",
          "type": "function"
        },
        "index": {
          "description": "many1 applies the action one or more times Returns list of the returned values of word many1 letter",
          "hierarchy": "Data Nanoparsec Combinator",
          "module": "Data.Nanoparsec.Combinator",
          "name": "many1",
          "normalized": "a b-\u003ea[b]",
          "package": "nanoparsec",
          "signature": "f a-\u003ef[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec-Combinator.html#v:many1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nanoparsec.Combinator",
          "name": "manyTill",
          "package": "nanoparsec",
          "signature": "f a -\u003e f b -\u003e f [a]",
          "source": "src/Data-Nanoparsec-Combinator.html#manyTill",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nanoparsec Combinator",
          "module": "Data.Nanoparsec.Combinator",
          "name": "manyTill",
          "normalized": "a b-\u003ea c-\u003ea[b]",
          "package": "nanoparsec",
          "partial": "Till",
          "signature": "f a-\u003ef b-\u003ef[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec-Combinator.html#v:manyTill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eoption x p\u003c/code\u003e tries to apply action \u003ccode\u003ep\u003c/code\u003e. If \u003ccode\u003ep\u003c/code\u003e fails without\n consuming input, it returns the value \u003ccode\u003ex\u003c/code\u003e, otherwise the value\n returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e priority  = option 0 (digitToInt \u003c$\u003e digit)\n\u003c/pre\u003e",
          "module": "Data.Nanoparsec.Combinator",
          "name": "option",
          "package": "nanoparsec",
          "signature": "a -\u003e f a -\u003e f a",
          "source": "src/Data-Nanoparsec-Combinator.html#option",
          "type": "function"
        },
        "index": {
          "description": "option tries to apply action If fails without consuming input it returns the value otherwise the value returned by priority option digitToInt digit",
          "hierarchy": "Data Nanoparsec Combinator",
          "module": "Data.Nanoparsec.Combinator",
          "name": "option",
          "normalized": "a-\u003eb a-\u003eb a",
          "package": "nanoparsec",
          "signature": "a-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec-Combinator.html#v:option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esepBy p sep\u003c/code\u003e applies \u003cem\u003ezero\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e, separated\n by \u003ccode\u003esep\u003c/code\u003e. Returns a list of the values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e commaSep p  = p `sepBy` (symbol \",\")\n\u003c/pre\u003e",
          "module": "Data.Nanoparsec.Combinator",
          "name": "sepBy",
          "package": "nanoparsec",
          "signature": "f a -\u003e f s -\u003e f [a]",
          "source": "src/Data-Nanoparsec-Combinator.html#sepBy",
          "type": "function"
        },
        "index": {
          "description": "sepBy sep applies zero or more occurrences of separated by sep Returns list of the values returned by commaSep sepBy symbol",
          "hierarchy": "Data Nanoparsec Combinator",
          "module": "Data.Nanoparsec.Combinator",
          "name": "sepBy",
          "normalized": "a b-\u003ea c-\u003ea[b]",
          "package": "nanoparsec",
          "partial": "By",
          "signature": "f a-\u003ef s-\u003ef[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec-Combinator.html#v:sepBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esepBy1 p sep\u003c/code\u003e applies \u003cem\u003eone\u003c/em\u003e or more occurrences of \u003ccode\u003ep\u003c/code\u003e, separated\n by \u003ccode\u003esep\u003c/code\u003e. Returns a list of the values returned by \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e commaSep p  = p `sepBy` (symbol \",\")\n\u003c/pre\u003e",
          "module": "Data.Nanoparsec.Combinator",
          "name": "sepBy1",
          "package": "nanoparsec",
          "signature": "f a -\u003e f s -\u003e f [a]",
          "source": "src/Data-Nanoparsec-Combinator.html#sepBy1",
          "type": "function"
        },
        "index": {
          "description": "sepBy1 sep applies one or more occurrences of separated by sep Returns list of the values returned by commaSep sepBy symbol",
          "hierarchy": "Data Nanoparsec Combinator",
          "module": "Data.Nanoparsec.Combinator",
          "name": "sepBy1",
          "normalized": "a b-\u003ea c-\u003ea[b]",
          "package": "nanoparsec",
          "partial": "By",
          "signature": "f a-\u003ef s-\u003ef[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec-Combinator.html#v:sepBy1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nanoparsec.Combinator",
          "name": "skipMany",
          "package": "nanoparsec",
          "signature": "f a -\u003e f ()",
          "source": "src/Data-Nanoparsec-Combinator.html#skipMany",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nanoparsec Combinator",
          "module": "Data.Nanoparsec.Combinator",
          "name": "skipMany",
          "normalized": "a b-\u003ea()",
          "package": "nanoparsec",
          "partial": "Many",
          "signature": "f a-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec-Combinator.html#v:skipMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nanoparsec.Combinator",
          "name": "skipMany1",
          "package": "nanoparsec",
          "signature": "f a -\u003e f ()",
          "source": "src/Data-Nanoparsec-Combinator.html#skipMany1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nanoparsec Combinator",
          "module": "Data.Nanoparsec.Combinator",
          "name": "skipMany1",
          "normalized": "a b-\u003ea()",
          "package": "nanoparsec",
          "partial": "Many",
          "signature": "f a-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec-Combinator.html#v:skipMany1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple, efficient combinator parsing for \u003ccode\u003eLL.ListLike\u003c/code\u003e lists based on\nAttoparsec library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Nanoparsec",
          "name": "Nanoparsec",
          "package": "nanoparsec",
          "source": "src/Data-Nanoparsec.html",
          "type": "module"
        },
        "index": {
          "description": "Simple efficient combinator parsing for LL.ListLike lists based on Attoparsec library",
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "Nanoparsec",
          "package": "nanoparsec",
          "partial": "Nanoparsec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nanoparsec",
          "name": "Parser",
          "package": "nanoparsec",
          "source": "src/Data-Nanoparsec-Internal.html#Parser",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "Parser",
          "package": "nanoparsec",
          "partial": "Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nanoparsec",
          "name": "Result",
          "package": "nanoparsec",
          "source": "src/Data-Nanoparsec.html#Result",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "Result",
          "package": "nanoparsec",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003eApplicative\u003c/code\u003e's \u003ccode\u003e\u003c*\u003c/code\u003e but specialized.\n\u003c/p\u003e",
          "module": "Data.Nanoparsec",
          "name": "(\u003c*.)",
          "package": "nanoparsec",
          "signature": "Parser δ a -\u003e Parser δ δ -\u003e Parser δ a",
          "source": "src/Data-Nanoparsec.html#%3C%2A.",
          "type": "function"
        },
        "index": {
          "description": "Same as Applicative but specialized",
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "(\u003c*.) \u003c*.",
          "normalized": "Parser a b-\u003eParser a a-\u003eParser a b",
          "package": "nanoparsec",
          "signature": "Parser δ a-\u003eParser δ δ-\u003eParser δ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#v:-60--42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch either a single newline character \u003ccode\u003e'\\n'\u003c/code\u003e, or a carriage\n return followed by a newline character \u003ccode\u003e\"\\r\\n\"\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Nanoparsec",
          "name": "(\u003c?\u003e)",
          "package": "nanoparsec",
          "signature": "Parser δ a -\u003e String -\u003e Parser δ a",
          "source": "src/Data-Nanoparsec-Internal.html#%3C%3F%3E",
          "type": "function"
        },
        "index": {
          "description": "Match either single newline character or carriage return followed by newline character",
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "(\u003c?\u003e) \u003c?\u003e",
          "normalized": "Parser a b-\u003eString-\u003eParser a b",
          "package": "nanoparsec",
          "signature": "Parser δ a-\u003eString-\u003eParser δ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#v:-60--63--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003eApplicative\u003c/code\u003e's \u003ccode\u003e*\u003e\u003c/code\u003e but specialized.\n\u003c/p\u003e",
          "module": "Data.Nanoparsec",
          "name": "(.*\u003e)",
          "package": "nanoparsec",
          "signature": "Parser δ δ -\u003e Parser δ a -\u003e Parser δ a",
          "source": "src/Data-Nanoparsec.html#.%2A%3E",
          "type": "function"
        },
        "index": {
          "description": "Same as Applicative but specialized",
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "(.*\u003e) .*\u003e",
          "normalized": "Parser a a-\u003eParser a b-\u003eParser a b",
          "package": "nanoparsec",
          "signature": "Parser δ δ-\u003eParser δ a-\u003eParser δ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#v:.-42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nanoparsec",
          "name": "Done",
          "package": "nanoparsec",
          "signature": "Done !δ r",
          "source": "src/Data-Nanoparsec.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "Done",
          "package": "nanoparsec",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nanoparsec",
          "name": "Fail",
          "package": "nanoparsec",
          "signature": "Fail !δ [String] String",
          "source": "src/Data-Nanoparsec.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "Fail",
          "normalized": "Fail a[String]String",
          "package": "nanoparsec",
          "partial": "Fail",
          "signature": "Fail δ[String]String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#v:Fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nanoparsec",
          "name": "Partial",
          "package": "nanoparsec",
          "signature": "Partial (δ -\u003e Result δ r)",
          "source": "src/Data-Nanoparsec.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "Partial",
          "normalized": "Partial(a-\u003eResult a b)",
          "package": "nanoparsec",
          "partial": "Partial",
          "signature": "Partial(δ-\u003eResult δ r)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#v:Partial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nanoparsec",
          "name": "anyElem",
          "package": "nanoparsec",
          "signature": "Parser δ ε",
          "source": "src/Data-Nanoparsec-Internal.html#anyElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "anyElem",
          "package": "nanoparsec",
          "partial": "Elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#v:anyElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e value to an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e value. A \u003ccode\u003e\u003ca\u003ePartial\u003c/a\u003e\u003c/code\u003e result\n is treated as failure.\n\u003c/p\u003e",
          "module": "Data.Nanoparsec",
          "name": "eitherResult",
          "package": "nanoparsec",
          "signature": "Result δ r -\u003e Either String r",
          "source": "src/Data-Nanoparsec.html#eitherResult",
          "type": "function"
        },
        "index": {
          "description": "Convert Result value to an Either value Partial result is treated as failure",
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "eitherResult",
          "normalized": "Result a b-\u003eEither String b",
          "package": "nanoparsec",
          "partial": "Result",
          "signature": "Result δ r-\u003eEither String r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#v:eitherResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nanoparsec",
          "name": "elem",
          "package": "nanoparsec",
          "signature": "ε -\u003e Parser δ ε",
          "source": "src/Data-Nanoparsec-Internal.html#elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "elem",
          "normalized": "a-\u003eParser b a",
          "package": "nanoparsec",
          "signature": "ε-\u003eParser δ ε",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch only if all input has been consumed.\n\u003c/p\u003e",
          "module": "Data.Nanoparsec",
          "name": "endOfInput",
          "package": "nanoparsec",
          "signature": "Parser δ ()",
          "source": "src/Data-Nanoparsec-Internal.html#endOfInput",
          "type": "function"
        },
        "index": {
          "description": "Match only if all input has been consumed",
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "endOfInput",
          "normalized": "Parser a()",
          "package": "nanoparsec",
          "partial": "Of Input",
          "signature": "Parser δ()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#v:endOfInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSucceed only if at least \u003ccode\u003en\u003c/code\u003e elements of input are available.\n\u003c/p\u003e",
          "module": "Data.Nanoparsec",
          "name": "ensure",
          "package": "nanoparsec",
          "signature": "Int -\u003e Parser δ ()",
          "source": "src/Data-Nanoparsec-Internal.html#ensure",
          "type": "function"
        },
        "index": {
          "description": "Succeed only if at least elements of input are available",
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "ensure",
          "normalized": "Int-\u003eParser a()",
          "package": "nanoparsec",
          "signature": "Int-\u003eParser δ()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#v:ensure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nanoparsec",
          "name": "feed",
          "package": "nanoparsec",
          "signature": "Result δ r -\u003e δ -\u003e Result δ r",
          "source": "src/Data-Nanoparsec.html#feed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "feed",
          "normalized": "Result a b-\u003ea-\u003eResult a b",
          "package": "nanoparsec",
          "signature": "Result δ r-\u003eδ-\u003eResult δ r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#v:feed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e value to a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value. A \u003ccode\u003e\u003ca\u003ePartial\u003c/a\u003e\u003c/code\u003e result\n is treated as failure.\n\u003c/p\u003e",
          "module": "Data.Nanoparsec",
          "name": "maybeResult",
          "package": "nanoparsec",
          "signature": "Result δ r -\u003e Maybe r",
          "source": "src/Data-Nanoparsec.html#maybeResult",
          "type": "function"
        },
        "index": {
          "description": "Convert Result value to Maybe value Partial result is treated as failure",
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "maybeResult",
          "normalized": "Result a b-\u003eMaybe b",
          "package": "nanoparsec",
          "partial": "Result",
          "signature": "Result δ r-\u003eMaybe r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#v:maybeResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser and return its result.\n\u003c/p\u003e",
          "module": "Data.Nanoparsec",
          "name": "parse",
          "package": "nanoparsec",
          "signature": "Parser δ a -\u003e δ -\u003e Result δ a",
          "source": "src/Data-Nanoparsec.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Run parser and return its result",
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "parse",
          "normalized": "Parser a b-\u003ea-\u003eResult a b",
          "package": "nanoparsec",
          "signature": "Parser δ a-\u003eδ-\u003eResult δ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser and print its result to standard output.\n\u003c/p\u003e",
          "module": "Data.Nanoparsec",
          "name": "parseTest",
          "package": "nanoparsec",
          "signature": "Parser δ a -\u003e δ -\u003e IO ()",
          "source": "src/Data-Nanoparsec.html#parseTest",
          "type": "function"
        },
        "index": {
          "description": "Run parser and print its result to standard output",
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "parseTest",
          "normalized": "Parser a b-\u003ea-\u003eIO()",
          "package": "nanoparsec",
          "partial": "Test",
          "signature": "Parser δ a-\u003eδ-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#v:parseTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a parser with an initial input string, and a monadic action\n that can supply more input if needed.\n\u003c/p\u003e",
          "module": "Data.Nanoparsec",
          "name": "parseWith",
          "package": "nanoparsec",
          "signature": "m δ-\u003e Parser δ a-\u003e δ-\u003e m (Result δ a)",
          "type": "function"
        },
        "index": {
          "description": "Run parser with an initial input string and monadic action that can supply more input if needed",
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "parseWith",
          "normalized": "a b-\u003eParser b c-\u003eb-\u003ea(Result b c)",
          "package": "nanoparsec",
          "partial": "With",
          "signature": "m δ-\u003eParser δ a-\u003eδ-\u003em(Result δ a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#v:parseWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003esatisfy p\u003c/code\u003e succeeds for any element for which the\n predicate \u003ccode\u003ep\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e. Returns the element that is actually\n parsed.\n\u003c/p\u003e\u003cpre\u003edigit = satisfy isDigit\n    where isDigit w = w \u003e= 48 && w \u003c= 57\n\u003c/pre\u003e",
          "module": "Data.Nanoparsec",
          "name": "satisfy",
          "package": "nanoparsec",
          "signature": "(ε -\u003e Bool) -\u003e Parser δ ε",
          "source": "src/Data-Nanoparsec-Internal.html#satisfy",
          "type": "function"
        },
        "index": {
          "description": "The parser satisfy succeeds for any element for which the predicate returns True Returns the element that is actually parsed digit satisfy isDigit where isDigit",
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "satisfy",
          "normalized": "(a-\u003eBool)-\u003eParser b a",
          "package": "nanoparsec",
          "signature": "(ε-\u003eBool)-\u003eParser δ ε",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003esatisfyWith f p\u003c/code\u003e transforms an element, and succeeds if\n the predicate \u003ccode\u003ep\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e on the transformed value. The\n parser returns the transformed element that was parsed.\n\u003c/p\u003e",
          "module": "Data.Nanoparsec",
          "name": "satisfyWith",
          "package": "nanoparsec",
          "signature": "(ε -\u003e a) -\u003e (a -\u003e Bool) -\u003e Parser δ a",
          "source": "src/Data-Nanoparsec-Internal.html#satisfyWith",
          "type": "function"
        },
        "index": {
          "description": "The parser satisfyWith transforms an element and succeeds if the predicate returns True on the transformed value The parser returns the transformed element that was parsed",
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "satisfyWith",
          "normalized": "(a-\u003eb)-\u003e(b-\u003eBool)-\u003eParser c b",
          "package": "nanoparsec",
          "partial": "With",
          "signature": "(ε-\u003ea)-\u003e(a-\u003eBool)-\u003eParser δ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#v:satisfyWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser \u003ccode\u003eskip p\u003c/code\u003e succeeds for any element for which the predicate\n \u003ccode\u003ep\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003espace = skip isSpace\n    where isDigit w = w == 9 || w == 10 || w == 13 || w == 32\n\u003c/pre\u003e",
          "module": "Data.Nanoparsec",
          "name": "skip",
          "package": "nanoparsec",
          "signature": "(ε -\u003e Bool) -\u003e Parser δ ()",
          "source": "src/Data-Nanoparsec-Internal.html#skip",
          "type": "function"
        },
        "index": {
          "description": "The parser skip succeeds for any element for which the predicate returns True space skip isSpace where isDigit",
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "skip",
          "normalized": "(a-\u003eBool)-\u003eParser b()",
          "package": "nanoparsec",
          "signature": "(ε-\u003eBool)-\u003eParser δ()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#v:skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nanoparsec",
          "name": "skipWhile",
          "package": "nanoparsec",
          "signature": "(ε -\u003e Bool) -\u003e Parser δ ()",
          "source": "src/Data-Nanoparsec-Internal.html#skipWhile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "skipWhile",
          "normalized": "(a-\u003eBool)-\u003eParser b()",
          "package": "nanoparsec",
          "partial": "While",
          "signature": "(ε-\u003eBool)-\u003eParser δ()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#v:skipWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003estring s\u003c/code\u003e parses a sequence of elements that identically match\n \u003ccode\u003es\u003c/code\u003e. Returns the parsed string (i.e. \u003ccode\u003es\u003c/code\u003e).  This parser consumes no\n input if it fails (even if a partial match).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: The behaviour of this parser is different to that of the\n similarly-named parser in Parsec, as this one is all-or-nothing.\n To illustrate the difference, the following parser will fail under\n Parsec given an input of \u003ccode\u003e\u003ca\u003efor\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003estring \"foo\" \u003c|\u003e string \"for\"\n\u003c/pre\u003e\u003cp\u003eThe reason for its failure is that that the first branch is a\n partial match, and will consume the letters \u003ccode\u003e'f'\u003c/code\u003e and \u003ccode\u003e'o'\u003c/code\u003e\n before failing.  In Nnaoparsec, the above parser will \u003cem\u003esucceed\u003c/em\u003e on\n that input, because the failed first branch will consume nothing.\n\u003c/p\u003e",
          "module": "Data.Nanoparsec",
          "name": "string",
          "package": "nanoparsec",
          "signature": "δ -\u003e Parser δ δ",
          "source": "src/Data-Nanoparsec-Internal.html#string",
          "type": "function"
        },
        "index": {
          "description": "string parses sequence of elements that identically match Returns the parsed string i.e This parser consumes no input if it fails even if partial match Note The behaviour of this parser is different to that of the similarly-named parser in Parsec as this one is all-or-nothing To illustrate the difference the following parser will fail under Parsec given an input of for string foo string for The reason for its failure is that that the first branch is partial match and will consume the letters and before failing In Nnaoparsec the above parser will succeed on that input because the failed first branch will consume nothing",
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "string",
          "normalized": "a-\u003eParser a a",
          "package": "nanoparsec",
          "signature": "δ-\u003eParser δ δ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume exactly \u003ccode\u003en\u003c/code\u003e elements of input.\n\u003c/p\u003e",
          "module": "Data.Nanoparsec",
          "name": "take",
          "package": "nanoparsec",
          "signature": "Int -\u003e Parser δ δ",
          "source": "src/Data-Nanoparsec-Internal.html#take",
          "type": "function"
        },
        "index": {
          "description": "Consume exactly elements of input",
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "take",
          "normalized": "Int-\u003eParser a a",
          "package": "nanoparsec",
          "signature": "Int-\u003eParser δ δ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume input as long as the predicate returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n (i.e. until it returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e), and return the consumed input.\n\u003c/p\u003e\u003cp\u003eThis parser does not fail.  It will return an empty string if the\n predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e on the first element of input.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Because this parser does not fail, do not use it with\n combinators such as \u003ccode\u003e\u003ca\u003emany\u003c/a\u003e\u003c/code\u003e, because such parsers loop until a\n failure occurs.  Careless use will thus result in an infinite loop.\n\u003c/p\u003e",
          "module": "Data.Nanoparsec",
          "name": "takeTill",
          "package": "nanoparsec",
          "signature": "(ε -\u003e Bool) -\u003e Parser δ δ",
          "source": "src/Data-Nanoparsec-Internal.html#takeTill",
          "type": "function"
        },
        "index": {
          "description": "Consume input as long as the predicate returns False i.e until it returns True and return the consumed input This parser does not fail It will return an empty string if the predicate returns True on the first element of input Note Because this parser does not fail do not use it with combinators such as many because such parsers loop until failure occurs Careless use will thus result in an infinite loop",
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "takeTill",
          "normalized": "(a-\u003eBool)-\u003eParser b b",
          "package": "nanoparsec",
          "partial": "Till",
          "signature": "(ε-\u003eBool)-\u003eParser δ δ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#v:takeTill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume input as long as the predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, and return\n the consumed input.\n\u003c/p\u003e\u003cp\u003eThis parser does not fail.  It will return an empty string if the\n predicate returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e on the first element of input.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Because this parser does not fail, do not use it with\n combinators such as \u003ccode\u003e\u003ca\u003emany\u003c/a\u003e\u003c/code\u003e, because such parsers loop until a\n failure occurs.  Careless use will thus result in an infinite loop.\n\u003c/p\u003e",
          "module": "Data.Nanoparsec",
          "name": "takeWhile",
          "package": "nanoparsec",
          "signature": "(ε -\u003e Bool) -\u003e Parser δ δ",
          "source": "src/Data-Nanoparsec-Internal.html#takeWhile",
          "type": "function"
        },
        "index": {
          "description": "Consume input as long as the predicate returns True and return the consumed input This parser does not fail It will return an empty string if the predicate returns False on the first element of input Note Because this parser does not fail do not use it with combinators such as many because such parsers loop until failure occurs Careless use will thus result in an infinite loop",
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "takeWhile",
          "normalized": "(a-\u003eBool)-\u003eParser b b",
          "package": "nanoparsec",
          "partial": "While",
          "signature": "(ε-\u003eBool)-\u003eParser δ δ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume input as long as the predicate returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, and return\n the consumed input.\n\u003c/p\u003e\u003cp\u003eThis parser requires the predicate to succeed on at least one element\n of input: it will fail if the predicate never returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e or if\n there is no input left.\n\u003c/p\u003e",
          "module": "Data.Nanoparsec",
          "name": "takeWhile1",
          "package": "nanoparsec",
          "signature": "(ε -\u003e Bool) -\u003e Parser δ δ",
          "source": "src/Data-Nanoparsec-Internal.html#takeWhile1",
          "type": "function"
        },
        "index": {
          "description": "Consume input as long as the predicate returns True and return the consumed input This parser requires the predicate to succeed on at least one element of input it will fail if the predicate never returns True or if there is no input left",
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "takeWhile1",
          "normalized": "(a-\u003eBool)-\u003eParser b b",
          "package": "nanoparsec",
          "partial": "While",
          "signature": "(ε-\u003eBool)-\u003eParser δ δ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#v:takeWhile1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt a parse, and if it fails, rewind the input so that no\n input appears to have been consumed.\n\u003c/p\u003e\u003cp\u003eThis combinator is useful in cases where a parser might consume\n some input before failing, i.e. the parser needs arbitrary\n lookahead.  The downside to using this combinator is that it can\n retain input for longer than is desirable.\n\u003c/p\u003e",
          "module": "Data.Nanoparsec",
          "name": "try",
          "package": "nanoparsec",
          "signature": "Parser δ a -\u003e Parser δ a",
          "source": "src/Data-Nanoparsec-Internal.html#try",
          "type": "function"
        },
        "index": {
          "description": "Attempt parse and if it fails rewind the input so that no input appears to have been consumed This combinator is useful in cases where parser might consume some input before failing i.e the parser needs arbitrary lookahead The downside to using this combinator is that it can retain input for longer than is desirable",
          "hierarchy": "Data Nanoparsec",
          "module": "Data.Nanoparsec",
          "name": "try",
          "normalized": "Parser a b-\u003eParser a b",
          "package": "nanoparsec",
          "signature": "Parser δ a-\u003eParser δ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nanoparsec/docs/Data-Nanoparsec.html#v:try"
      }
    }
  ]
]